'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('mobileappstore', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/MobileAppStore/MobileAppStore.html'
        }
      }
    });
  });



