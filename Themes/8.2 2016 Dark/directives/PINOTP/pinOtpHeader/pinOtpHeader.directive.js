'use strict';

angular.module('secureauth')
  .directive('pinOtpHeader', function (config, pinOtp) {

    var pinOtpHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: pinOtp.getHeaderTxt()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: pinOtpHeaderController,
      controllerAs: 'PinOtpHeader',
      templateUrl: config.theme + '/directives/PINOTP/pinOtpHeader/pinOtpHeader.html',
      bindToController: true
    };
  });
