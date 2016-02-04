'use strict';

angular.module('secureauth')
  .directive('accountUpdatePush', function (config, accountUpdate) {

    var accountUpdatePushController = function () {
      var vm = this;

      angular.extend(vm, {
        pushTxt: accountUpdate.getPushTxt()[0],
        pushDevices: accountUpdate.getPushDevice(),
        check: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdatePushController,
      controllerAs: 'AccountUpdatePush',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdatePush/accountUpdatePush.html',
      bindToController: true
    };
  });
