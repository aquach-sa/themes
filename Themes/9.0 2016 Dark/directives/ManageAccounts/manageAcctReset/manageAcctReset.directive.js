'use strict';

angular.module('secureauth')
  .directive('manageAcctReset', function (config, manageAccount) {

    var manageAcctResetController = function () {
      var vm = this;

      angular.extend(vm, {
        restAllBtn: manageAccount.getRestAllBtn()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctResetController,
      controllerAs: 'ManageAcctReset',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctReset/manageAcctReset.html',
      bindToController: true
    };
  });
