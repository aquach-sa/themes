'use strict';

var gulp          = require('gulp-help')(require('gulp'));
var fs            = require('fs');
var prompt        = require('gulp-prompt');
var copyDir       = require('copy-dir');
var chalk         = require('chalk');
var json          = require('json-file');
var jsonfile      = require('jsonfile');
var gulpSlash     = require('gulp-slash');
var concat        = require('gulp-concat');
var ngAnnotate    = require('gulp-ng-annotate');
var runSequence   = require('run-sequence');
var del           = require('del');
var uglify        = require('gulp-uglify');
var concatCss     = require('gulp-concat-css');
var autoprefixer  = require('gulp-autoprefixer');
var sass          = require('gulp-sass');
var vinylPaths    = require('vinyl-paths');
var gulpFn        = require('gulp-fn');
var chmod         = require('gulp-chmod');
var isThere       = require('is-there');
var dirname       = gulpSlash(__dirname);
var path          = dirname.split('gulp/tasks')[0];
var time          = require('../util/getTime');
var error         = require('../util/handleErrors');
var themes        = [];
var locations     = [];
var config;
var file;
var theme;
var configJson;
var deployPath;

fs.readdirSync('./Themes').filter(function (folder) {
  if (fs.lstatSync('./Themes/' + folder).isDirectory()) {
    themes.push(folder);
  }
});

gulp.task('theme:build:deploy', 'Build and deploy a specific theme to a new location.',  function() {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'Delpoy which theme?',
      choices: themes
    }, function (res) {
      file = res.theme;
      theme = '../../Themes/' + res.theme + '/config.json';
      try {
        locations.push('New Location');
        config = require(theme.toLowerCase());
        config.deploy.map(function(obj) {
          if (obj !== 'New Location' && obj.length > 0) {
            locations.push(obj);
          }
        });
      } catch(e) {
        error('[' + time.getTime() + '] Invalid config.json');
        console.log('[' + time.getTime() + '] ' + chalk.red('Please verify that config.json is valid'));
        process.exit(1);
      }
    }))
    .pipe(prompt.prompt({
      type: 'list',
      name: 'dest',
      message: 'Delpoy theme to which location?',
      choices: locations
    }, function (res) {
      if (res.dest === 'Clear Recent Location') {
        configJson = json.read(path + 'Themes/' + file + '/config.json');
        configJson.set('deploy', []);
        jsonfile.writeFileSync(path + 'Themes/' + file + '/config.json', configJson.data, {spaces: 2});
        console.log('[' + time.getTime() + '] Finished \'theme:build:deploy\'');
        process.exit(1);
      } else if (res.dest !== 'New Location') {
        deployPath = gulpSlash(res.dest);
        runSequence(
        'theme:build:deploy:clean', 
        'theme:build:deploy:css',
        ['theme:build:deploy:bower',
        'theme:build:deploy:ng'],
        'theme:build:deploy:js',
        'theme:build:deploy:copy',
        'theme:build:deploy:pristine',
        ['theme:deploy']);
      } else {
        runSequence(
        'theme:build:deploy:new');
      }
    }));
});

gulp.task('theme:build:deploy:new', false, function () {
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'new',
      message: 'Delpoy theme where?',
    }, function (res) {
      deployPath = gulpSlash(res.new);
      if (isThere(deployPath)) {
        locations[locations.length + 1] = 'Clear Recent Location';
        locations.push(deployPath);
        var loc = locations.filter(function(elem, pos) {
          return locations.indexOf(elem) === pos;
        }); 
        configJson = json.read(path + 'Themes/' + file + '/config.json');
        configJson.set('deploy', loc);
        jsonfile.writeFileSync(path + 'Themes/' + file + '/config.json', configJson.data, {spaces: 2});
        runSequence(
        'theme:build:deploy:clean', 
        'theme:build:deploy:css',
        ['theme:build:deploy:bower',
        'theme:build:deploy:ng'],
        'theme:build:deploy:js', 
        'theme:build:deploy:copy',
        'theme:build:deploy:pristine',
        ['theme:deploy']);
      } else {
        error('[00:00:00] Deployment location does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify deployment location is correct'));
      }
    }));
});

gulp.task('theme:build:deploy:clean', false,  function () {
  return gulp.src(config.clean)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:build:deploy:css', false, function () {
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

gulp.task('theme:build:deploy:bower', false, function () { 
  return  gulp.src(config.bower)
    .pipe(concat('bower.js'))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:deploy:ng', false, function () {
  return gulp.src(config.ng)
    .pipe(concat('ng.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:deploy:js', false, function () {
  return gulp.src(config.js)
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest(config.source))
    .on('error', error);
});

gulp.task('theme:build:deploy:copy', false, function() {
  return gulp.src(config.copy)
    .pipe(chmod(666))
    .pipe(gulp.dest(config.dest))
    .on('error', error);
});

gulp.task('theme:build:deploy:pristine', false, function () {
  return gulp.src(config.pristine)
    .pipe(vinylPaths(del))
    .on('error', error);
});

gulp.task('theme:deploy', false, function () {
  if (config.deployName.length > 0) {
    file = config.deployName;
  }
  return gulp.src('')
    .pipe(gulpFn(function() {
      try {
        copyDir.sync(config.dest, deployPath + '/' + file);
      } catch(err) {
        error('[' + time.getTime() + '] Permission denied, open ' + err.path);
        console.log('[' + time.getTime() + '] ' + chalk.red('Please verify that you have the correct folder permission set'));
      }
    }))
    .on('error', error);
});