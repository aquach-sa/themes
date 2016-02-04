'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('MFABrowserRegistrationFPView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/MFABrowserRegistrationFPView/MFABrowserRegistrationFPView.html'
        }
      }
    });
  });



