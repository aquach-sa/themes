'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('PINRegistrationView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/PINRegistrationView/PINRegistrationView.html'
        }
      }
    });
  });



