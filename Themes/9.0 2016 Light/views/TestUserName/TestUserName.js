'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('testusername', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/TestUserName/TestUserName.html'
        }
      }
    });
  });



