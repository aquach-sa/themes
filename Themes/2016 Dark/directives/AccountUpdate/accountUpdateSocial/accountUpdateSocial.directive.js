'use strict';

angular.module('secureauth')
  .directive('accountUpdateSocial', function (config, accountUpdate) {

    var accountUpdateSocialController = function () {
      var vm = this;

      angular.extend(vm, {
        socialLoginHeader: accountUpdate.getSocialLoginHeader()[0],
        socialLogin: accountUpdate.getSocialLogin()
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateSocialController,
      controllerAs: 'AccountUpdateSocial',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateSocial/accountUpdateSocial.html',
      bindToController: true
    };
  });
