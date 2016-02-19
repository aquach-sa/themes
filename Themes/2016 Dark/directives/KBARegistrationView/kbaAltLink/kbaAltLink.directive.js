'use strict';

angular.module('secureauth')
  .directive('kbaAltLink', function (config, kbaRegistrationView) {

    var kbaAltLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        altLink: kbaRegistrationView.getkbaAltLink()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: kbaAltLinkController,
      controllerAs: 'KbaAltLink',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaAltLink/kbaAltLink.html',
      bindToController: true
    };
  });
