'use strict';

angular.module('secureauth')
  .directive('accountUpdateMessage', function (config, accountUpdate) {

    var accountUpdateMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        accountUpdateMsg: accountUpdate.getAccountUpdateMsg()[0],
        accountErrorMsg: accountUpdate.getAccountErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateMessageController,
      controllerAs: 'AccountUpdateMessage',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateMessage/accountUpdateMessage.html',
      bindToController: true
    };
  });
