'use strict';

angular.module('secureauth')
  .directive('forgotUsernameLink', function (config, common) {

    var forgotUsernameLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        usernameLink: common.getUsernameLink()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: forgotUsernameLinkController,
      controllerAs: 'ForgotUsernameLink',
      templateUrl: config.theme + '/directives/Common/forgotUsernameLink/forgotUsernameLink.html',
      bindToController: true
    };
  });
