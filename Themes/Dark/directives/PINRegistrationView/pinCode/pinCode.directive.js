'use strict';

angular.module('secureauth')
  .directive('pinCode', function (config, pinRegistrationView) {

    var pinCodeController = function () {
      var vm = this;
      var code = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_tbxPassword');
      var keypad = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_tblContainerKeypad');

      angular.extend(vm, {
        pinCodes: pinRegistrationView.getPinCode(),
        keyPad: pinRegistrationView.getKeyPad(),
        number: '',
        showKeyPad: (keypad.length > 0) ? true: false,
        pinOnChange: function (id) {
          var pin = angular.element('#' + id);
          pin.val(vm.number);
        },
        pinNumber: function () {
          vm.number = vm.pinCodes[0].input.value;
        },
        keyPress: function (key) {
           if ((vm.number === undefined) || (isNaN(vm.number))) {
            vm.number = '';
          }
          if (key === 'clear') {
            vm.number = '';
            code.val('');
          } else {
            vm.number = (vm.number += key);
            code.val(code.val() + key);
          }
        }
      });

    };

    return {
      restrict: 'EA',
      controller: pinCodeController,
      controllerAs: 'PinCode',
      templateUrl: config.theme + '/directives/PINRegistrationView/pinCode/pinCode.html',
      bindToController: true
    };
  });
