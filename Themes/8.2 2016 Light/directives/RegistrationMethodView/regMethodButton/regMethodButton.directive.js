'use strict';

angular.module('secureauth')
  .directive('regMethodButton', function (config, registrationView) {

    var regMethodButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        regMethodBtn: registrationView.getregMethodBtn()[0],
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
      controller: regMethodButtonController,
      controllerAs: 'RegMethodButton',
      templateUrl: config.theme + '/directives/RegistrationMethodView/regMethodButton/regMethodButton.html',
      bindToController: true
    };
  });
