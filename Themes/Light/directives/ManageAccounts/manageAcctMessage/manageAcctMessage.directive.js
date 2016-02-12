'use strict';

angular.module('secureauth')
  .directive('manageAcctMessage', function (config, manageAccount) {

    var manageAcctMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        message: manageAccount.getMessage()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctMessageController,
      controllerAs: 'ManageAcctMessage',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctMessage/manageAcctMessage.html',
      bindToController: true
    };
  });
