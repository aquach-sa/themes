'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('SystemErrorView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/SystemErrorView/SystemErrorView.html'
        }
      }
    });
  });



