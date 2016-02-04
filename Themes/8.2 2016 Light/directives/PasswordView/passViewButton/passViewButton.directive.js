'use strict';

angular.module('secureauth')
  .directive('passViewButton', function (config, passwordView) {

    var passViewButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        passViewBtn: passwordView.getPassViewBtn()[0],
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
      controller: passViewButtonController,
      controllerAs: 'PassViewButton',
      templateUrl: config.theme + '/directives/PasswordView/passViewButton/passViewButton.html',
      bindToController: true
    };
  });
