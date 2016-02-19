'use strict';

angular.module('secureauth')
  .directive('pinShowHide', function (config, pinRegistrationView) {

    var pinShowHideController = function () {
      var vm = this;

      angular.extend(vm, {
        pinShowHides: pinRegistrationView.getPinShowHide(),
        check: function (id) {
          var pin = angular.element('#' + id);
          pin.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: pinShowHideController,
      controllerAs: 'PinShowHide',
      templateUrl: config.theme + '/directives/PINRegistrationView/pinShowHide/pinShowHide.html',
      bindToController: true
    };
  });
