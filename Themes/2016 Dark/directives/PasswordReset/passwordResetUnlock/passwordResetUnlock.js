'use strict';

angular.module('secureauth')
  .directive('passwordResetUnlock', function (config, passwordReset) {

    var passwordResetUnlockController = function () {
      var vm = this;

      angular.extend(vm, {
        passUnlock: passwordReset.getPassUnlock()[0],
        unlockUser: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonUnlock');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: passwordResetUnlockController,
      controllerAs: 'PasswordResetUnlock',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetUnlock/passwordResetUnlock.html',
      bindToController: true
    };
  });
