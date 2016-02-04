'use strict';

angular.module('secureauth')
  .directive('manageAcctInfo', function (config, manageAccount) {

    var manageAcctInfoController = function () {
      var vm = this;

      angular.extend(vm, {
        acctInfo: manageAccount.getAcctInfo(),
        acctInfoOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctInfoController,
      controllerAs: 'ManageAcctInfo',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctInfo/manageAcctInfo.html',
      bindToController: true
    };
  });
