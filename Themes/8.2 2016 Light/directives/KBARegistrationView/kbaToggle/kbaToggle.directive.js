'use strict';

angular.module('secureauth')
  .directive('kbaToggle', function (config, kbaRegistrationView) {

    var kbaToggleController = function () {
      var vm = this;

      angular.extend(vm, {
        kbaToggle: kbaRegistrationView.getKbaToggle()[0],
        check: function (id) {
          var select = angular.element('#' + id);        
          select.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: kbaToggleController,
      controllerAs: 'KbaToggle',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaToggle/kbaToggle.html',
      bindToController: true
    };
  });
