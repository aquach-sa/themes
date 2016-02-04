'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('{{viewNameState}}', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/{{viewName}}/{{viewName}}.html'
        }
      }
    });
  });



