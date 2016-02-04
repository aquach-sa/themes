'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('createuser', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/CreateUser/CreateUser.html'
        }
      }
    });
  });



