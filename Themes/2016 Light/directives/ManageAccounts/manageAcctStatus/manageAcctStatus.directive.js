'use strict';

angular.module('secureauth')
  .directive('manageAcctStatus', function (config, manageAccount) {

    var manageAcctStatusController = function () {
      var vm = this;

      angular.extend(vm, {
        acctstatus: manageAccount.getAcctstatus()
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctStatusController,
      controllerAs: 'ManageAcctStatus',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctStatus/manageAcctStatus.html',
      bindToController: true
    };
  });
