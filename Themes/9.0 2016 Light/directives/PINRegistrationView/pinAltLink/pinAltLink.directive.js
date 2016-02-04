'use strict';

angular.module('secureauth')
  .directive('pinAltLink', function (config, pinRegistrationView) {

    var pinAltLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        altLink: pinRegistrationView.getPinAltLink()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: pinAltLinkController,
      controllerAs: 'PinAltLink',
      templateUrl: config.theme + '/directives/PINRegistrationView/pinAltLink/pinAltLink.html',
      bindToController: true
    };
  });
