'use strict';

angular.module('secureauth')
  .directive('accountUpdateInfo', function (config, accountUpdate) {

    var accountUpdateInfoController = function () {
      var vm = this;

      angular.extend(vm, {
        acctInfo: accountUpdate.getAcctInfo(),
        acctInfoPin: accountUpdate.getAcctInfoPin(),
        acctInfoPinCheck: accountUpdate.getAcctInfoPinCheck(),
        acctInfoOath: accountUpdate.getAcctInfoOath(),
        acctPin: '',
        acctInfoOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        pinCheck: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        acctPinChange: function (id) {
          var pinVal = angular.element('#' + id + '_UiInput').val();
          if (vm.acctPin !== pinVal) {
            pinVal = vm.acctPin;
            angular.element('#' + id).trigger('change');
          }
        },
        getAcctPin: function () {
          var currentPin = angular.element('#ContentPlaceHolder1_TextBoxPIN').val();
          currentPin = vm.acctPin;
        }
      });

      vm.getAcctPin();

    };

    return {
      restrict: 'EA',
      controller: accountUpdateInfoController,
      controllerAs: 'AccountUpdateInfo',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateInfo/accountUpdateInfo.html',
      bindToController: true
    };
  });
