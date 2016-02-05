'use strict';

angular.module('secureauth')
  .directive('pinCodeButton', function (config, pinRegistrationView) {

    var pinCodeButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        pinCodeBtn: pinRegistrationView.getPinCodeBtn()[0],
        click: function (id) {
          var valid = angular.element('#aspnetForm').hasClass('ng-valid');
          if (valid && vm.submited === 'false') {
            angular.element('#' + id).trigger('click');
            vm.submited = 'true';
          }
        },
        dblclick: function () {
          return false;
        }
      });

    };

    return {
      restrict: 'EA',
      controller: pinCodeButtonController,
      controllerAs: 'PinCodeButton',
      templateUrl: config.theme + '/directives/PINRegistrationView/pinCodeButton/pinCodeButton.html',
      bindToController: true
    };
  });
