'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('secureportal', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/SecurePortal/SecurePortal.html'
        }
      }
    });
  });



