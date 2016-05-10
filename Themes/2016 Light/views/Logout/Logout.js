'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('logout', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/Logout/Logout.html'
        }
      }
    });
  });



