'use strict';

angular.module('secureauth')
  .directive('regMethodOption', function (config, registrationView, $timeout) {

    var regMethodOptionController = function () {
      var vm = this;

      angular.extend(vm, {
        regMethodOptions: registrationView.getRegMethodOption(),
        select: function (id, opt1, opt2) {
          var select = angular.element('#' + id);
          var options = angular.element('.js-options');
          var option1 = angular.element('#' + opt1 + '_UiInput');
          var option2 = angular.element('#' + opt2 + '_UiInput');

          options.attr('disabled','disabled');
          option1.removeAttr('disabled');
          option2.removeAttr('disabled');
        
          select.trigger('click');
        },
        secondaryOpt: function () {
          $timeout(function () {
            if (angular.element('.regmethod:eq(0) .regmethod__primary label').text().indexOf('xxx-xxx-') > -1) {
              angular.element('.regmethod:eq(0) .regmethod__secondary input').removeAttr('disabled');
            }
          }, 500);
        },
        selectOption: function (id) {
          var select = angular.element('#' + id);        
          select.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: regMethodOptionController,
      controllerAs: 'RegMethodOption',
      templateUrl: config.theme + '/directives/RegistrationMethodView/regMethodOption/regMethodOption.html',
      bindToController: true
    };
  });
