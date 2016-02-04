'use strict';

angular.module('secureauth')
  .directive('regMethodHeader', function (config, registrationView) {

    var regMethodHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: registrationView.getHeaderTxt()[0],
        errorMsg: registrationView.getErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: regMethodHeaderController,
      controllerAs: 'RegMethodHeader',
      templateUrl: config.theme + '/directives/RegistrationMethodView/regMethodHeader/regMethodHeader.html',
      bindToController: true
    };
  });
