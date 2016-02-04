'use strict';

angular.module('secureauth')
  .directive('pinOtpPin', function (config, pinOtp) {

    var pinOtpPinController = function () {
      var vm = this;

      angular.extend(vm, {
        pin: pinOtp.getPin()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: pinOtpPinController,
      controllerAs: 'PinOtpPin',
      templateUrl: config.theme + '/directives/PINOTP/pinOtpPin/pinOtpPin.html',
      bindToController: true
    };
  });
