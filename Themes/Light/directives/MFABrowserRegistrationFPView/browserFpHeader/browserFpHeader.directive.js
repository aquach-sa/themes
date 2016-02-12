'use strict';

angular.module('secureauth')
  .directive('browserFpHeader', function (config, browserRegFP) {

    var browserFpHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        showSpinner: true,
        headerTxt: browserRegFP.getHeaderTxt()[0],
        debugDF: function () {
          var debugFP = angular.element('#ContentPlaceHolder1_MFALoginControl1_MFABrowserRegistrationFPView');
          if (debugFP.length > 0) {
            vm.showSpinner = false;
            debugFP.appendTo('.form-horizontal');
          }
        }
      });

      vm.debugDF();

    };

    return {
      restrict: 'EA',
      controller: browserFpHeaderController,
      controllerAs: 'BrowserFpHeader',
      templateUrl: config.theme + '/directives/MFABrowserRegistrationFPView/browserFpHeader/browserFpHeader.html',
      bindToController: true
    };
  });
