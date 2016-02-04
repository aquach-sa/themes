'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('PasswordView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/PasswordView/PasswordView.html'
        }
      }
    });
  });



