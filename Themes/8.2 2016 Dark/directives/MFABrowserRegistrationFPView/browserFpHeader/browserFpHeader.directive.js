'use strict';

angular.module('secureauth')
  .directive('browserFpHeader', function (config, browserRegFP, $timeout) {

    var browserFpHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: browserRegFP.getHeaderTxt()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: browserFpHeaderController,
      controllerAs: 'BrowserFpHeader',
      templateUrl: config.theme + '/directives/MFABrowserRegistrationFPView/browserFpHeader/browserFpHeader.html',
      bindToController: true
    };
  });
