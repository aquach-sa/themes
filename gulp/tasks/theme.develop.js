'use strict';

var gulp          = require('gulp-help')(require('gulp'));
var fs            = require('fs');
var fsPath          = require('path');
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
var browserSync   = require('browser-sync');
var gulpSlash     = require('gulp-slash');
var json          = require('json-file');
var jsonfile      = require('jsonfile');
var chmod         = require('gulp-chmod');
var isThere       = require('is-there');
var error         = require('../util/handleErrors');
var time          = require('../util/getTime');
var dirname       = gulpSlash(__dirname);
var path          = dirname.split('gulp/tasks')[0];
var themes        = [];
var config;
var configJson;
var theme;
var file;
var devUrl;
var devDest;
var fileExt;

var watch = [
  './Themes/**/app.scss',
  './Themes/**/theme.js', 
  './Themes/**/**/*.html', 
  './Themes/**/*.Master', 
  './Themes/**/directives/**/*.js', 
  './Themes/**/services/**/*.js', 
  './Themes/**/views/**/*.js'
];

fs.readdirSync('./Themes').filter(function (folder) {
  if (fs.lstatSync('./Themes/' + folder).isDirectory()) {
    themes.push(folder);
  }
});

gulp.task('theme:develop', 'Develop a specific theme.',  function() {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'list',
      name: 'template',
      message: 'Develop which theme?',
      choices: themes
    }, function (res) {
      file = res.template;
      theme = '../../Themes/' + res.template + '/config.json';
      try {
        config = require(theme.toLowerCase());
      } catch(e) {
        error('[' + time.getTime() +'] Theme config.json does not exist');
        console.log('[' + time.getTime() +'] ' + chalk.red('Please verify that the theme folder you specify has the correct config.json'));
        process.exit(1);
      }
      if (config.url.length === 0) {
        runSequence('theme:develop:url');
      } else if (config.devDest.length === 0) {
        runSequence('theme:develop:dev');
      } else {
        devUrl = config.url;
        runSequence(
        'theme:develop:clean',
        'theme:develop:css',
        ['theme:develop:bower',
        'theme:develop:ng'],
        'theme:develop:js',
        'theme:develop:copy',
        'theme:develop:pristine',
        'theme:develop:serve');
      }
    }));
});

gulp.task('theme:develop:url', false,  function () {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'url',
      message: 'What is your appliance realm URL?',
    }, function (res) {
      devUrl = res.url;
      configJson = json.read(path + 'Themes/' + file + '/config.json');
      configJson.set('url', res.url);
      jsonfile.writeFileSync(path + 'Themes/' + file + '/config.json', configJson.data, {spaces: 2});
      if (config.devDest.length === 0) {
        runSequence('theme:develop:dev');
      } else {
        runSequence(
        'theme:develop:clean',
        'theme:develop:css',
        ['theme:develop:bower',
        'theme:develop:ng'],
        'theme:develop:js',
        'theme:develop:copy',
        'theme:develop:pristine',
        'theme:develop:serve');
      }
    }));
});

gulp.task('theme:develop:dev', false,  function () {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'devDest',
      message: 'Where is your appliance Themes folder?',
    }, function (res) {
      devDest = gulpSlash(res.devDest);
      if (isThere(devDest)) {
        configJson = json.read(path + 'Themes/' + file + '/config.json');
        configJson.set('devDest', devDest + '/' + file);
        jsonfile.writeFileSync(path + 'Themes/' + file + '/config.json', configJson.data, {spaces: 2});
        runSequence(
        'theme:develop:clean',
        'theme:develop:css',
        ['theme:develop:bower',
        'theme:develop:ng'],
        'theme:develop:js',
        'theme:develop:copy',
        'theme:develop:pristine',
        'theme:develop:serve');
      } else {
        error('[00:00:00] Themes folder does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the folder location is correct'));
      }
    }));
});

gulp.task('theme:develop:clean', false,  function () {
  return gulp.src(config.clean)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:develop:css', false, function () {
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

gulp.task('theme:develop:bower', false, function () { 
  return  gulp.src(config.bower)
    .pipe(concat('bower.js'))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:develop:ng', false, function () {
  return gulp.src(config.ng)
    .pipe(concat('ng.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:develop:js', false, function () {
  return gulp.src(config.js)
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:develop:copy', false, function() {
  return gulp.src(config.copy)
    .pipe(chmod(666))
    .pipe(gulp.dest(config.devDest))
    .on('error', error);
});

gulp.task('theme:develop:pristine', false, function () {
  return gulp.src(config.pristine)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:develop:serve', false, function () {
  if (!browserSync.active) {
    browserSync.init({
      proxy: {
        target: devUrl
      },
      https: true,
      port: 3000,
      notify: false
    });

    browserSync.watch(watch).on('change', function (file) {
      fileExt = fsPath.extname(file);
      runSequence('theme:develop:rebuild');
    });

  }
});

gulp.task('theme:develop:rebuild', false, function () {
  runSequence(
  'theme:develop:clean',
  'theme:develop:css',
  ['theme:develop:bower',
  'theme:develop:ng'],
  'theme:develop:js',
  'theme:develop:copy',
  'theme:develop:pristine',
  'theme:develop:reload');
});

gulp.task('theme:develop:reload', false, function () {
  if (fileExt === '.scss') {
    browserSync.reload('MFAStyleSheet.css');
  } else {
    browserSync.reload();
  }
});