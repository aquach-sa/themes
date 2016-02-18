'use strict';

angular.module('secureauth')
  .directive('accountUpdateReset', function (config, accountUpdate) {

    var accountUpdateResetController = function () {
      var vm = this;

      angular.extend(vm, {
        resetBtn: accountUpdate.getResetBtn()[0],
        click: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        reset: function (id) {
          var button = angular.element('#' + id);
          var input = angular.element('.panel-body').find('input');
          input.removeAttr('required');
          button.trigger('click');
        },
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateResetController,
      controllerAs: 'AccountUpdateReset',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateReset/accountUpdateReset.html',
      bindToController: true
    };
  });
