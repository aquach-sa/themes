'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('qrcodeprovision', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/QrCodeProvision/QrCodeProvision.html'
        }
      }
    });
  });



