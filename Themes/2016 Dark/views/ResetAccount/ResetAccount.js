'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('resetaccount', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/ResetAccount/ResetAccount.html'
        }
      }
    });
  });



