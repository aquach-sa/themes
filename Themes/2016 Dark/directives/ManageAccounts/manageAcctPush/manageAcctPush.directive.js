'use strict';

angular.module('secureauth')
  .directive('manageAcctPush', function (config, manageAccount) {

    var manageAcctPushController = function () {
      var vm = this;

      angular.extend(vm, {
        pushTxt: manageAccount.getPushTxt()[0],
        pushDevices: manageAccount.getPushDevice(),
        pushDeviceRestBtn: manageAccount.getPushDeviceRestBtn()[0],
        check: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        resetBtn: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtoRemoveAllPNTokens');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctPushController,
      controllerAs: 'ManageAcctPush',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctPush/manageAcctPush.html',
      bindToController: true
    };
  });
