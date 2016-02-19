'use strict';

angular.module('secureauth')
  .directive('regCodeButton', function (config, browserRegistrationView) {

    var regCodeButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        regCodeBtn: browserRegistrationView.getRegCodeBtn()[0],
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
      controller: regCodeButtonController,
      controllerAs: 'RegCodeButton',
      templateUrl: config.theme + '/directives/BrowserRegistrationPasswordView/regCodeButton/regCodeButton.html',
      bindToController: true
    };
  });
