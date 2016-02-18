'use strict';

angular.module('secureauth')
  .directive('userSocialLogin', function (config, userIdView) {

    var userSocialLoginController = function () {
      var vm = this;

      angular.extend(vm, {
        socialLoginHeader: userIdView.getSocialLoginHeader()[0],
        socialLogin: userIdView.getSocialLogin()
      });

    };

    return {
      restrict: 'EA',
      controller: userSocialLoginController,
      controllerAs: 'UserSocialLogin',
      templateUrl: config.theme + '/directives/UserIDView/userSocialLogin/userSocialLogin.html',
      bindToController: true
    };
  });
