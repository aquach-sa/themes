'use strict';

var gulp          = require('gulp-help')(require('gulp'));
var fs            = require('fs');
var prompt        = require('gulp-prompt');
var concat        = require('gulp-concat');
var ngAnnotate    = require('gulp-ng-annotate');
var runSequence   = require('run-sequence');
var del           = require('del');
var uglify        = require('gulp-uglify');
var concatCss     = require('gulp-concat-css');
var autoprefixer  = require('gulp-autoprefixer');
var sass          = require('gulp-sass');
var vinylPaths    = require('vinyl-paths');
var chalk         = require('chalk');
var chmod         = require('gulp-chmod');
var error         = require('../util/handleErrors');
var time          = require('../util/getTime');
var themes        = [];
var watchFiles    = false;
var config;
var theme;

fs.readdirSync('./Themes/').filter(function (folder) {
  if (fs.lstatSync('./Themes/' + folder).isDirectory()) {
    themes.push(folder);
  }
});

gulp.task('theme:build', 'Build a specific theme.',  function() {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'list',
      name: 'template',
      message: 'Build which theme?',
      choices: themes
    }, function (res) {
      theme = '../../Themes/' + res.template + '/config.json';
      try {
        config = require(theme.toLowerCase());
      } catch(e) {
        error('[' + time.getTime() +'] Theme config.json does not exist');
        console.log('[' + time.getTime() +'] ' + chalk.red('Please verify that the theme folder you specify has the correct config.json'));
        process.exit(1);
      }
      runSequence(
        'theme:build:clean',  
        'theme:build:css',
        ['theme:build:bower',
        'theme:build:ng'],
        'theme:build:js',
        'theme:build:copy',
        'theme:build:pristine');
      if (watchFiles) {
        gulp.watch(config.watch, ['theme:build:watch']);
      }
    }));
});

gulp.task('theme:build:clean', false,  function () {
  return gulp.src(config.clean)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:build:css', false, function () {
  return gulp.src(config.css)
    .pipe(sass({
      errLogToConsole: false
    }))
    .on('error', error)
    .pipe(autoprefixer({
      browsers: config.autoprefixer.browsers,
      cascade: config.autoprefixer.cascade
    }))
    .pipe(concatCss('MFAStyleSheet.css'))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:bower', false, function () { 
  return  gulp.src(config.bower)
    .pipe(concat('bower.js'))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:ng', false, function () {
  return gulp.src(config.ng)
    .pipe(concat('ng.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:js', false, function () {
  return gulp.src(config.js)
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:copy', false, function() {
  return gulp.src(config.copy)
    .pipe(chmod(666))
    .pipe(gulp.dest(config.dest))
    .on('error', error);
});

gulp.task('theme:build:pristine', false, function () {
  return gulp.src(config.pristine)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:build:watch', 'Build a specific theme on every file change.' , function () {
  watchFiles = true;
  if (config === undefined) {
    gulp.start('theme:build');
  } else {
    runSequence(
    'theme:build:clean',  
    'theme:build:css',
    ['theme:build:bower',
    'theme:build:ng'],
    'theme:build:js',
    'theme:build:copy',
    'theme:build:pristine');
  }
});
