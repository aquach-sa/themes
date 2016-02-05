'use strict';

angular.module('secureauth')
  .config(function ($stateProvider, config) {
    $stateProvider.state('AcceptDenyWaitingView', {
      views: {
        'content': {
          templateUrl: config.theme + '/views/AcceptDenyWaitingView/AcceptDenyWaitingView.html'
        }
      }
    });
  });



