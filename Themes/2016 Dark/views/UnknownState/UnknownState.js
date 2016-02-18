'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('UnknownState', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/UnknownState/UnknownState.html'
        }
      }
    });
  });


