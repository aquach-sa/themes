'use strict';

angular.module('secureauth')
  .directive('passViewHeader', function (config, passwordView) {

    var passViewHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: passwordView.getHeaderTxt()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: passViewHeaderController,
      controllerAs: 'PassViewHeader',
      templateUrl: config.theme + '/directives/PasswordView/passViewHeader/passViewHeader.html',
      bindToController: true
    };
  });
