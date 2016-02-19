'use strict';

angular.module('secureauth')
  .directive('logo', function (config, common) {

    var logoController = function () {
      var vm = this;

      angular.extend(vm, {
        logoImg: common.getLogoImg()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: logoController,
      controllerAs: 'Logo',
      templateUrl: config.theme + '/directives/Common/logo/logo.html',
      bindToController: true
    };
  });
