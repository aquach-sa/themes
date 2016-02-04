'use strict';

angular.module('secureauth')
  .directive('passViewError', function (config, passwordView) {

    var passViewErrorController = function () {
      var vm = this;

      angular.extend(vm, {
        passViewErrorMsg: passwordView.getPassViewErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: passViewErrorController,
      controllerAs: 'PassViewError',
      templateUrl: config.theme + '/directives/PasswordView/passViewError/passViewError.html',
      bindToController: true
    };
  });
