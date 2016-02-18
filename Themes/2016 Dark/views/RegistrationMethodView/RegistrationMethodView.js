'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('RegistrationMethodView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/RegistrationMethodView/RegistrationMethodView.html'
        }
      }
    });
  });



