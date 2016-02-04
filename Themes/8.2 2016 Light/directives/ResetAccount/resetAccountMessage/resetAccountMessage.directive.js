'use strict';

angular.module('secureauth')
  .directive('resetAccountMessage', function (config, resetAccount) {

    var resetAccountMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        resetAccountMsg: resetAccount.getResetAccountMsg()[0],
        resetUnlockMsg: resetAccount.getResetAccountUnlockMsg()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: resetAccountMessageController,
      controllerAs: 'ResetAccountMessage',
      templateUrl: config.theme + '/directives/ResetAccount/resetAccountMessage/resetAccountMessage.html',
      bindToController: true
    };
  });
