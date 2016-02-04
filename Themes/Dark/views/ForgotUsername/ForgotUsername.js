'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('forgotusername', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/ForgotUsername/ForgotUsername.html'
        }
      }
    });
  });



