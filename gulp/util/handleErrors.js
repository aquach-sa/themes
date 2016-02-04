'use strict';

var notify = require('gulp-notify');

module.exports = function(error) {
  notify({
    title: 'Gulp Task Error',
    message: 'Check the console.'
  }).write(error);
  console.log(error.toString());
  try {
    this.emit('end');
  } catch(e) {}
};
