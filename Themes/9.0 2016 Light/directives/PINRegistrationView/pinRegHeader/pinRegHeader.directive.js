'use strict';

angular.module('secureauth')
  .directive('pinRegHeader', function (config, pinRegistrationView) {

    var pinRegHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: pinRegistrationView.getHeaderTxt()[0],
        errorMsg: pinRegistrationView.getErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: pinRegHeaderController,
      controllerAs: 'PinRegHeader',
      templateUrl: config.theme + '/directives/PINRegistrationView/pinRegHeader/pinRegHeader.html',
      bindToController: true
    };
  });
