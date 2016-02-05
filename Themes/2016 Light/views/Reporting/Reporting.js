'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('reporting', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/Reporting/Reporting.html'
        }
      }
    });
  });

