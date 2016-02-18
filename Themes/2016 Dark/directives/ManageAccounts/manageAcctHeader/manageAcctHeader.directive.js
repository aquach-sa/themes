'use strict';

angular.module('secureauth')
  .directive('manageAcctHeader', function (config, manageAccount) {

    var manageAcctHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: manageAccount.getHeaderTxt()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctHeaderController,
      controllerAs: 'ManageAcctHeader',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctHeader/manageAcctHeader.html',
      bindToController: true
    };
  });
