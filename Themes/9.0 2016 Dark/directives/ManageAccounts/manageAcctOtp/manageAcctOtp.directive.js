'use strict';

angular.module('secureauth')
  .directive('manageAcctOtp', function (config, manageAccount) {

    var manageAcctOtpController = function () {
      var vm = this;

      angular.extend(vm, {
        otpTxt: manageAccount.getOtpTxt()[0],
        otpDevices: manageAccount.getOtpDevice(),
        otpDeviceRestBtn: manageAccount.getOtpDeviceRestBtn()[0],
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
      controller: manageAcctOtpController,
      controllerAs: 'ManageAcctOtp',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctOtp/manageAcctOtp.html',
      bindToController: true
    };
  });
