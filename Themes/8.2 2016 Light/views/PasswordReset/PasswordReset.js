'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('passwordreset', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/PasswordReset/PasswordReset.html'
        }
      }
    });
  });



