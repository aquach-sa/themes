'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('accountupdate', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/AccountUpdate/AccountUpdate.html'
        }
      }
    });
  });



