'use strict';

angular.module('secureauth')
  .directive('manageAcctSymantec', function (config, manageAccount) {

    var manageAcctSymantecController = function () {
      var vm = this;

      angular.extend(vm, {
        symantecHeader: manageAccount.getSymantecHeader()[0],
        symantecTableTh: manageAccount.getSymantecTableTh(),
        symantecTableLink: manageAccount.getSymantecTableLink()[0],
        symantecTableCred: manageAccount.getSymantecTableCred()[0],
        symantecTableName: manageAccount.getSymantecTableName()[0],
        symantecTableEntry: manageAccount.getSymantecTableEntry(),
        symantecButton: manageAccount.getSymantecButton()[0],
        symantecVip: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonRemoveAllVIPCredentials');
          button.trigger('click');
        },
        onChange: function (id) {
          var symantecVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(symantecVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctSymantecController,
      controllerAs: 'ManageAcctSymantec',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctSymantec/manageAcctSymantec.html',
      bindToController: true
    };
  });
