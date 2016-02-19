'use strict';

angular.module('secureauth')
  .directive('kbaButton', function (config, kbaRegistrationView) {

    var kbaButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        kbaButton: kbaRegistrationView.getkbaButton()[0],
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
      controller: kbaButtonController,
      controllerAs: 'KbaButton',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaButton/kbaButton.html',
      bindToController: true
    };
  });
