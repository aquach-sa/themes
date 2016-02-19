'use strict';

angular.module('secureauth')
  .directive('restartLoginLink', function (config, common) {

    var restartLoginLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        loginLink: common.getLoginLink()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: restartLoginLinkController,
      controllerAs: 'RestartLoginLink',
      templateUrl: config.theme + '/directives/Common/restartLoginLink/restartLoginLink.html',
      bindToController: true
    };
  });
