'use strict';

angular.module('secureauth')
  .directive('kbaRegHeader', function (config, kbaRegistrationView) {

    var kbaRegHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: kbaRegistrationView.getHeaderTxt()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: kbaRegHeaderController,
      controllerAs: 'KbaRegHeader',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaRegHeader/kbaRegHeader.html',
      bindToController: true
    };
  });
