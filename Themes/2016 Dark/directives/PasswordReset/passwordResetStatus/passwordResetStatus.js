'use strict';

angular.module('secureauth')
  .directive('passwordResetStatus', function (config, passwordReset) {

    var passwordResetStatusController = function () {
      var vm = this;

      angular.extend(vm, {
        statusLabel: passwordReset.getStatusLabel()[0],
        statusText: passwordReset.getStatusText()[0],
        statusError: passwordReset.getStatusError()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: passwordResetStatusController,
      controllerAs: 'PasswordResetStatus',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetStatus/passwordResetStatus.html',
      bindToController: true
    };
  });
