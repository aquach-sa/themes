'use strict';

angular.module('secureauth')
  .directive('disclaimerText', function (config, common) {

    var disclaimerTextController = function () {
      var vm = this;

      angular.extend(vm, {
        disclaimer: common.getDisclaimer()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: disclaimerTextController,
      controllerAs: 'DisclaimerText',
      templateUrl: config.theme + '/directives/Common/disclaimerText/disclaimerText.html',
      bindToController: true
    };
  });
