'use strict';

exports.getTime = function () {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  if ((hour >= 0) && (hour < 10) && (Math.floor(hour) == hour)) {
    hour = '0' + date.getHours();
  }
  if ((minutes >= 0) && (minutes < 10) && (Math.floor(minutes) == minutes)) {
    minutes = '0' + date.getMinutes();
  }
  if ((seconds >= 0) && (seconds < 10) && (Math.floor(seconds) == seconds)) {
    seconds = '0' + date.getSeconds();
  }
  return hour + ':' + minutes + ':' + seconds;
};