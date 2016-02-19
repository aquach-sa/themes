'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('KBARegistrationView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/KBARegistrationView/KBARegistrationView.html'
        }
      }
    });
  });



