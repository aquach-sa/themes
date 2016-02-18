'use strict';

angular.module('secureauth')
  .directive('passwordResetUser', function (config, passwordReset) {

    var passwordResetUserController = function () {
      var vm = this;

      angular.extend(vm, {
        userName: passwordReset.getUserName()
      });

    };

    return {
      restrict: 'EA',
      controller: passwordResetUserController,
      controllerAs: 'PasswordResetUser',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetUser/passwordResetUser.html',
      bindToController: true
    };
  });
