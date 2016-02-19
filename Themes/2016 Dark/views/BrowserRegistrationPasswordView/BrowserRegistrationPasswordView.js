'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('BrowserRegistrationPasswordView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/BrowserRegistrationPasswordView/BrowserRegistrationPasswordView.html'
        }
      }
    });
  });



