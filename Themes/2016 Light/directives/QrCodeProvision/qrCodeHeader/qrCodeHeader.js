'use strict';

angular.module('secureauth')
  .directive('qrCodeHeader', function (config, qrCodeProvision) {

    var qrCodeHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: qrCodeProvision.getHeaderTxt()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: qrCodeHeaderController,
      controllerAs: 'QrCodeHeader',
      templateUrl: config.theme + '/directives/QrCodeProvision/qrCodeHeader/qrCodeHeader.html',
      bindToController: true
    };
  });
