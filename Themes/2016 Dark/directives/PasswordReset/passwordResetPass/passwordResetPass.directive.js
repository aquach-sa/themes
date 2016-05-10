'use strict';

angular.module('secureauth')
  .directive('passwordResetPass', function (config, passwordReset, $timeout) {

    var passwordResetPassController = function () {
      var vm = this;

      angular.extend(vm, {
        userPassCurrent: passwordReset.getUserPassCurrent(),
        userPass: passwordReset.getUserPass(),
        userPassConfirm: passwordReset.getUserConfirm(),
        resetMsg: passwordReset.getResetMsg()[0],
        confirmMsg: passwordReset.getConfirmMsg()[0],
        changeBtn: passwordReset.getChangeBtn()[0],
        count: 0,
        passStrengthTxt: '',
        passOnCurrent: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        passOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        resetPass: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        passStrength: function () {
          if (vm.count === 0) {
            WebForm_AutoFocus('ContentPlaceHolder1_TextBoxPassword1_UiInput');
            Sys.Application.add_init(function() {
              $create(Sys.Extended.UI.PasswordStrengthExtenderBehavior, {
                'CalculationWeightings': '50; 15; 15; 20',
                'MinimumLowerCaseCharacters': 1,
                'MinimumNumericCharacters': 1,
                'MinimumSymbolCharacters': 1,
                'MinimumUpperCaseCharacters': 1, 
                'PreferredPasswordLength': 7, 
                'PrefixText': 'Strength:',
                'StrengthStyles': '',
                'TextCssClass': 'hidden',
                'TextStrengthDescriptionStyles': '',
                'TextStrengthDescriptions': 'Very Poor; Weak; Average; Strong; Excellent',
                'id': 'ContentPlaceHolder1_PS2' }, 
              null, 
              null, 
              $get('ContentPlaceHolder1_TextBoxPassword1_UiInput'));
            });
          }
          vm.count = 1;
          $timeout(function () {
            vm.passStrengthTxt = angular.element('#ContentPlaceHolder1_TextBoxPassword1_UiInput_PasswordStrength').text();
          }, 0);
        }
      });
    };

    return {
      restrict: 'EA',
      controller: passwordResetPassController,
      controllerAs: 'PasswordResetPass',
      templateUrl: config.theme + '/directives/PasswordReset/passwordResetPass/passwordResetPass.html',
      bindToController: true
    };
  });
