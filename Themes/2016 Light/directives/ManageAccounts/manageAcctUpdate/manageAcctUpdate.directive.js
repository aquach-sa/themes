'use strict';

angular.module('secureauth')
  .directive('manageAcctUpdate', function (config, manageAccount) {

    var manageAcctUpdateController = function () {
      var vm = this;

      angular.extend(vm, {
        updateBtn: manageAccount.getUpdateBtn()[0],
        click: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        affix: function () {
          angular.element('.btn--account').affix({
            offset: { top: 280, bottom: 5 }
          });
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctUpdateController,
      controllerAs: 'ManageAcctUpdate',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctUpdate/manageAcctUpdate.html',
      bindToController: true
    };
  });
