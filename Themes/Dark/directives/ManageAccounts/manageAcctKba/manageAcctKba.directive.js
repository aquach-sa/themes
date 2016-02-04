'use strict';

angular.module('secureauth')
  .directive('manageAcctKba', function (config, manageAccount) {

    var manageAcctKbaController = function () {
      var vm = this;

      angular.extend(vm, {
        kbaCheck: manageAccount.getKbaCheck(),
        kbaQuestion: manageAccount.getKbaQuestion(),
        kbaAnswer: manageAccount.getKbaAnswer(),
        checkKbq: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctKbaController,
      controllerAs: 'ManageAcctKba',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctKba/manageAcctKba.html',
      bindToController: true
    };
  });
