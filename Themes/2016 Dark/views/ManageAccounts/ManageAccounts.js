'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('manageaccounts', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/ManageAccounts/ManageAccounts.html'
        }
      }
    });
  });



