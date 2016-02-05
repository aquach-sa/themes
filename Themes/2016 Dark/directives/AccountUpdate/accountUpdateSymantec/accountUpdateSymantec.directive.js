'use strict';

angular.module('secureauth')
  .directive('accountUpdateSymantec', function (config, accountUpdate) {

    var accountUpdateSymantecController = function () {
      var vm = this;

      angular.extend(vm, {
        symantecHeader: accountUpdate.getSymantecHeader()[0],
        symantecTableTh: accountUpdate.getSymantecTableTh(),
        symantecTableLink: accountUpdate.getSymantecTableLink()[0],
        symantecTableCred: accountUpdate.getSymantecTableCred()[0],
        symantecTableName: accountUpdate.getSymantecTableName()[0],
        symantecTableEntry: accountUpdate.getSymantecTableEntry(),
        symantecButton: accountUpdate.getSymantecButton()[0],
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
      controller: accountUpdateSymantecController,
      controllerAs: 'AccountUpdateSymantec',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateSymantec/accountUpdateSymantec.html',
      bindToController: true
    };
  });
