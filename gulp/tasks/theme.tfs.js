'use strict';

var gulp      = require('gulp-help')(require('gulp'));
var exec      = require('child_process').exec;
var gulpFn    = require('gulp-fn');
var error     = require('../util/handleErrors');

gulp.task('theme:tfs', false, function() {
  return gulp.src('')
    .pipe(gulpFn(function() {
      exec('cd TFS && git tf pull', function (err, stdout, stderr) {
        console.log(stdout);
        if (stderr.length > 0) {
          console.log(stderr);
        }
        gulp.start('theme:tfs:copy');
      });
    }));
});

gulp.task('theme:tfs:copy', false, function() {
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest('./TFS'))
    .on('finish', function () {
      exec('cd TFS && git tf checkin', function (err, stdout, stderr) {
        console.log(stdout);
        if (stderr.length > 0) {
          console.log(stderr);
        }
      });
    })
    .on('error', error);
});