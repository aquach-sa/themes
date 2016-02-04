'use strict';

angular.module('secureauth')
  .directive('passExpired', function (config, passwordView) {

    var passExpiredController = function () {
      var vm = this;

      angular.extend(vm, {
        userNewPass: passwordView.getUserNewPass(),
        userPassConfirm: passwordView.getUserConfirm(),
        passOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onClick: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: passExpiredController,
      controllerAs: 'PassExpired',
      templateUrl: config.theme + '/directives/PasswordView/passExpired/passExpired.html',
      bindToController: true
    };
  });
