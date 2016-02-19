'use strict';

angular.module('secureauth')
  .directive('passwordResetReq', function (config, passwordReset) {

    var passwordResetReqController = function () {
      var vm = this;

      angular.extend(vm, {
        reqrMsg: passwordReset.getReqrMsg(),
      });

    };

    return {
      restrict: 'EA',
      controller: passwordResetReqController,
      controllerAs: 'PasswordResetReq',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetReq/passwordResetReq.html',
      bindToController: true
    };
  });
