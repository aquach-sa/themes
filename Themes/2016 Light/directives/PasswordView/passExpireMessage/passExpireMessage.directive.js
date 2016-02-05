'use strict';

angular.module('secureauth')
  .directive('passExpireMessage', function (config, passwordView) {

    var passExpireMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        passExpireMsg: passwordView.getPassExpireMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: passExpireMessageController,
      controllerAs: 'PassExpireMessage',
      templateUrl: config.theme + '/directives/PasswordView/passExpireMessage/passExpireMessage.html',
      bindToController: true
    };
  });
