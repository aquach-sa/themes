'use strict';

angular.module('secureauth')
  .directive('accountUpdateButton', function (config, accountUpdate) {

    var accountUpdateButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        updateBtn: accountUpdate.getUpdateBtn()[0],
        click: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        affix: function () {
          angular.element('.btn--account').affix({
            offset: { top: 60, bottom: 5 }
          });
        }
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateButtonController,
      controllerAs: 'AccountUpdateButton',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateButton/accountUpdateButton.html',
      bindToController: true
    };
  });
