'use strict';

var gulp        = require('gulp-help')(require('gulp'));
var fs          = require('fs');
var runSequence = require('run-sequence');
var prompt      = require('gulp-prompt');
var isThere     = require('is-there');
var gulpSlash   = require('gulp-slash');
var chalk       = require('chalk');
var change      = require('gulp-change');
var rename      = require('gulp-rename');
var changeCase  = require('change-case');
var copyDir     = require('copy-dir');
var vinylPaths  = require('vinyl-paths');
var del         = require('del');
var inject      = require('gulp-inject-string');
var error       = require('../util/handleErrors');
var dirname     = gulpSlash(__dirname);
var path        = dirname.split('gulp/tasks')[0];
var themes      = [];
var views       = [];
var file;
var theme;
var view;
var directive;
var service;
var template;
var viewName;

fs.readdirSync('./Themes').filter(function (folder) {
  if (fs.lstatSync('./Themes/' + folder).isDirectory()) {
    themes.push(folder);
  }
});

gulp.task('theme:view', 'Generate boilerplate for new view.', function() {
  runSequence(
    'theme:create:view');
});

gulp.task('theme:directive', 'Generate boilerplate for new directive.', function() {
  runSequence(
    'theme:create:directive');
});

gulp.task('theme:service', 'Generate boilerplate for new service.', function() {
  runSequence(
    'theme:create:service');
});

gulp.task('theme:service', 'Generate boilerplate for new service.', function() {
  runSequence(
    'theme:create:service');
});

gulp.task('theme:boilerplate', 'Generate boilerplate for new theme.', function() {
  runSequence(
    'theme:create:theme');
});

gulp.task('theme:create:view', false, function () {
  return gulp.src(['gulp/template/views/*.*'])
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'New view for which theme?',
      choices: themes
    }, function (res) {
      theme = path + 'Themes/' + res.theme;
      if (!isThere(theme)) {
        error('[00:00:00] Theme does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the theme folder you specify is correct'));
        process.exit(1);
      }
    }))
    .pipe(prompt.prompt({
      type: 'input',
      name: 'file',
      message: 'What is your new view name?'
    }, function (res) {
      file = res.file;
      viewName = changeCase.lower(file);
      view = theme + '/views/' + res.file;
      if (isThere(view)) {
        error('[00:00:00] View name already exist');
        console.log('[00:00:00] ' + chalk.red('Please select a diffrent name'));
        process.exit(1);
      }
      gulp.start('theme:create:view:scss');
    }))
    .pipe(change(function (content) {
      return content.replace(/{{viewNameState}}/g, viewName);
    }))
    .pipe(change(function (content) {
      return content.replace(/{{viewName}}/g, file);
    }))
    .pipe(rename(function (path) {
      var views = theme.split('/Themes/')[1];
      path.dirname = views + '/views/' + file;
      path.basename = file;
    }))
    .pipe(gulp.dest('./Themes'))
    .on('error', error);
});

gulp.task('theme:create:view:scss', false, function () {
  console.log(theme + '/app.scss');
  return gulp.src(theme + '/app.scss')
    .pipe(vinylPaths(del))
    .pipe(inject.before('// ng-state', '[ng-state="' + viewName + '"],\n'))
    .pipe(gulp.dest(theme))
    .on('error', error);
});

gulp.task('theme:create:directive', false, function () {
  return gulp.src(['gulp/template/directives/*.*'])
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'New directive for which theme?',
      choices: themes
    }, function (res) {
      theme = path + 'Themes/' + res.theme;
      if (!isThere(theme)) {
        error('[00:00:00] Theme does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the theme folder you specify is correct'));
        process.exit(1);
      } else {
        fs.readdirSync(theme + /views/).filter(function (folder) {
          if (fs.lstatSync(theme + '/views/' + folder).isDirectory()) {
            views.push(folder);
          }
        });
      }
    }))
    .pipe(prompt.prompt({
      type: 'list',
      name: 'view',
      message: 'New directive for which view?',
      choices: views
    }, function (res) {
      view = res.view;
      if (!isThere(theme + '/views/' + res.view)) {
        error('[00:00:00] View does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the view folder you specify is correct'));
        process.exit(1);
      }
    }))
    .pipe(change(function (content) {
      return content.replace(/{{viewName}}/g, view);
    }))
    .pipe(prompt.prompt({
      type: 'input',
      name: 'file',
      message: 'What is your new directive name?'
    }, function (res) {
      file = res.file;
      directive = theme + '/directives/' + file;
      if (isThere(directive)) {
        error('[00:00:00] Directive name already exist');
        console.log('[00:00:00] ' + chalk.red('Please select a diffrent name'));
        process.exit(1);
      }
    }))
    .pipe(change(function (content) {
      var lowerCase = changeCase.lowerCaseFirst(file);
      return content.replace(/{{directiveName}}/g, lowerCase);
    }))
    .pipe(change(function (content) {
      var pascalCase = changeCase.pascalCase(file);
      return content.replace(/{{directiveController}}/g, pascalCase);
    }))
    .pipe(change(function (content) {
      return content.replace(/{{directiveView}}/g, file);
    }))
    .pipe(rename(function (path) {
      var directives = theme.split('/Themes/')[1];
      path.dirname = directives + '/directives/' + view + '/' + file;
      path.basename = file;
    }))
    .pipe(gulp.dest('./Themes'))
    .on('error', error);
});

gulp.task('theme:create:service', false, function () {
  return gulp.src(['gulp/template/services/*.js*'])
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'New service for which theme?',
      choices: themes
    }, function (res) {
      theme = path + 'Themes/' + res.theme;
      if (!isThere(theme)) {
        error('[00:00:00] Theme does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the theme folder you specify is correct'));
        process.exit(1);
      }
    }))
    .pipe(prompt.prompt({
      type: 'input',
      name: 'file',
      message: 'What is your new service name?'
    }, function (res) {
      file = res.file;
      service = theme + '/services/' + res.file;
      if (isThere(service)) {
        error('[00:00:00] Service name already exist');
        console.log('[00:00:00] ' + chalk.red('Please select a diffrent name'));
        process.exit(1);
      }
    }))
    .pipe(change(function (content) {
      return content.replace(/{{serviceName}}/g, file);
    }))
    .pipe(rename(function (path) {
      var services = theme.split('/Themes/')[1];
      path.dirname = services + '/services/' + file;
      path.basename = file;
    }))
    .pipe(gulp.dest('./Themes'))
    .on('error', error);
});

gulp.task('theme:create:theme', false, function () {
  return gulp.src(['gulp/template/themes/config.json'])
    .pipe(prompt.prompt({
      type: 'list',
      name: 'template',
      message: 'New theme base on which existing theme?',
      choices: themes
    }, function (res) {
      template = './Themes/' + res.template;
      if (!isThere(template)) {
        error('[00:00:00] Theme does not exist');
        console.log('[00:00:00] ' + chalk.red('Please verify that the theme you specify exist'));
        process.exit(1);
      }
    }))
    .pipe(prompt.prompt({
      type: 'input',
      name: 'file',
      message: 'What is your new theme name?'
    }, function (res) {
      file = changeCase.titleCase(res.file);
      theme = './Themes/' + file;
      if (isThere(theme)) {
        error('[00:00:00] Theme name already exist');
        console.log('[00:00:00] ' + chalk.red('Please select a diffrent name'));
        process.exit(1);
      }
    }))
    .pipe(change(function (content) {
      return content.replace(/{{themeName}}/g, file);
    }))
    .pipe(rename(function (path) {
      path.dirname = file;
      copyDir.sync(template, theme);
    }))
    .pipe(gulp.dest('./Themes'))
    .on('error', error);
});