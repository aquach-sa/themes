'use strict';

angular.module('secureauth')
  .directive('passwordResetSuccess', function (config, passwordReset) {

    var passwordResetSuccessController = function () {
      var vm = this;

      angular.extend(vm, {
        passwordMsg: passwordReset.getPasswordMsg()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: passwordResetSuccessController,
      controllerAs: 'PasswordResetSuccess',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetSuccess/passwordResetSuccess.html',
      bindToController: true
    };
  });
