'use strict';

angular.module('secureauth')
  .directive('accountUpdateOtp', function (config, accountUpdate) {

    var accountUpdateOtpController = function () {
      var vm = this;

      angular.extend(vm, {
        otpTxt: accountUpdate.getOtpTxt()[0],
        otpDevices: accountUpdate.getOtpDevice(),
        check: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        resetBtn: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonRemoveAllOATHTokens');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateOtpController,
      controllerAs: 'AccountUpdateOtp',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateOtp/accountUpdateOtp.html',
      bindToController: true
    };
  });
