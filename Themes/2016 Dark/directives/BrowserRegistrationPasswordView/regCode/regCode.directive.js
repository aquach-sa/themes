'use strict';

angular.module('secureauth')
  .directive('regCode', function (config, browserRegistrationView) {

    var regCodeController = function () {
      var vm = this;
      var code = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_tbxPassword');

      angular.extend(vm, {
        headerTxt: browserRegistrationView.getHeaderTxt()[0],
        registration: browserRegistrationView.getRegistration(),
        keyPad: browserRegistrationView.getKeyPad(),
        number: '',
        regOnChange: function () {
          code.val(vm.number);
        },
        regNumber: function () {
          vm.number = vm.registration[0].input.value;
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
      controller: regCodeController,
      controllerAs: 'RegCode',
      templateUrl: config.theme + '/directives/BrowserRegistrationPasswordView/regCode/regCode.html',
      bindToController: true
    };
  });
