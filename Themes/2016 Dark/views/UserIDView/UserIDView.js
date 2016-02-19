'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('UserIDView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/UserIDView/UserIDView.html'
        }
      }
    });
  });



