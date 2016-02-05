'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('oidcauthorize', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/OidcAuthorize/OidcAuthorize.html'
        }
      }
    });
  });

