'use strict';

angular.module('secureauth')
  .directive('forgotPasswordLink', function (config, common) {

    var forgotPasswordLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        passwordLink: common.getPasswordLink()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: forgotPasswordLinkController,
      controllerAs: 'ForgotPasswordLink',
      templateUrl: config.theme + '/directives/Common/forgotPasswordLink/forgotPasswordLink.html',
      bindToController: true
    };
  });
