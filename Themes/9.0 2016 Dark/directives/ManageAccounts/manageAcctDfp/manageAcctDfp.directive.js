'use strict';

angular.module('secureauth')
  .directive('manageAcctDfp', function (config, manageAccount) {

    var manageAcctDfpController = function () {
      var vm = this;

      angular.extend(vm, {
        dfpTxt: manageAccount.getdDpTxt()[0],
        dfpDeviceLog: manageAccount.getDfpDeviceLog(),
        dfpDeviceRestBtn: manageAccount.getDfpDeviceRestBtn()[0],
        check: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        resetBtn: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonRevokeAllDFPs');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctDfpController,
      controllerAs: 'ManageAcctDfp',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctDfp/manageAcctDfp.html',
      bindToController: true
    };
  });
