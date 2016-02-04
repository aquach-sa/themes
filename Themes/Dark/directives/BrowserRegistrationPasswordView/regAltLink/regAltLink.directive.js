'use strict';

angular.module('secureauth')
  .directive('regAltLink', function (config, browserRegistrationView) {

    var regAltLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        altLink: browserRegistrationView.getRegAltLink()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: regAltLinkController,
      controllerAs: 'RegAltLink',
      templateUrl: config.theme + '/directives/BrowserRegistrationPasswordView/regAltLink/regAltLink.html',
      bindToController: true
    };
  });
