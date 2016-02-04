'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('pinotp', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/PINOTP/PINOTP.html'
        }
      }
    });
  });



