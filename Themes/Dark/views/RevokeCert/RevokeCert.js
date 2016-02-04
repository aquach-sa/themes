'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('revokecert', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/RevokeCert/RevokeCert.html'
        }
      }
    });
  });

