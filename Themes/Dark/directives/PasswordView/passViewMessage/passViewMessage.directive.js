'use strict';

angular.module('secureauth')
  .directive('passViewMessage', function (config, passwordView) {

    var passViewMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        passViewMsg: passwordView.getPassViewMsg(),
      });

    };

    return {
      restrict: 'EA',
      controller: passViewMessageController,
      controllerAs: 'PassViewMessage',
      templateUrl: config.theme + '/directives/PasswordView/passViewMessage/passViewMessage.html',
      bindToController: true
    };
  });
