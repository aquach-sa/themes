'use strict';

angular.module('secureauth')
  .directive('accountUpdateDfp', function (config, accountUpdate) {

    var accountUpdateDfpController = function () {
      var vm = this;

      angular.extend(vm, {
        dfpTxt: accountUpdate.getdDpTxt()[0],
        dfpDeviceLog: accountUpdate.getDfpDeviceLog(),
        check: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateDfpController,
      controllerAs: 'AccountUpdateDfp',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateDfp/accountUpdateDfp.html',
      bindToController: true
    };
  });
