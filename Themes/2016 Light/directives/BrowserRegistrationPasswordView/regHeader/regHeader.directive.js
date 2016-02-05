'use strict';

angular.module('secureauth')
  .directive('regHeader', function (config, browserRegistrationView) {

    var regHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: browserRegistrationView.getHeaderTxt()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: regHeaderController,
      controllerAs: 'RegHeader',
      templateUrl: config.theme + '/directives/BrowserRegistrationPasswordView/regHeader/regHeader.html',
      bindToController: true
    };
  });
