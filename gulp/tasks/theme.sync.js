'use strict';

var gulp      = require('gulp-help')(require('gulp'));
var fs        = require('fs');
var filePath  = require('path');
var prompt    = require('gulp-prompt');
var gulpSlash = require('gulp-slash');
var copyDir   = require('copy-dir');
var dirname   = gulpSlash(__dirname);
var path      = dirname.split('gulp/tasks')[0]; 
var error     = require('../util/handleErrors');
var themes    = [];
var source;
var destination;

gulp.task('theme:sync', false, function() {
  fs.readdirSync('./Themes').filter(function (folder) {
    if (fs.lstatSync('./Themes/' + folder).isDirectory()) {
      themes.push(folder);
    }
  });
  return gulp.src('')
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'Sync from which theme?',
      choices: themes
    }, function (res) {
      source = path + 'Themes/' + res.theme;
    }))
    .pipe(prompt.prompt({
      type: 'list',
      name: 'theme',
      message: 'Sync to which theme?',
      choices: themes
    }, function (res) {
      destination = path + 'Themes/' + res.theme;
      copyDir.sync(source, destination, function(_stat, _path) {
        var stat = true;
        if (_stat === 'file' && filePath.extname(_path) === '.Master') {
          stat = false;
        } else if (_stat === 'file' && filePath.extname(_path) === '.vb') {
          stat = false;
        } else if (_stat === 'file' && filePath.extname(_path) === '.json') {
          stat = false;
        } else if (_stat === 'file' && filePath.extname(_path) === '.scss') {
          stat = false;
        }
        return stat;
      });
    }))
    .on('error', error);
});