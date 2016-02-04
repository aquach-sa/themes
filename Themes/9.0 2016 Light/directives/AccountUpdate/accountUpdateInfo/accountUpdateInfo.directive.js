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
        acctInfoOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        pinCheck: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateInfoController,
      controllerAs: 'AccountUpdateInfo',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateInfo/accountUpdateInfo.html',
      bindToController: true
    };
  });
