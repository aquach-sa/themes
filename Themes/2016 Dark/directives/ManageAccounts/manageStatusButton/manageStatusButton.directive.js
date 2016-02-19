'use strict';

angular.module('secureauth')
  .directive('manageStatusButton', function (config, manageAccount) {

    var manageStatusButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        statusBtn: manageAccount.getStatusBtn(),
        btnClick: function (type) {
          var id;
          var triggerClick = function () {
            var btn = angular.element(id);
            btn.trigger('click');
          };

          switch(type) {
            case 'Reset Password':
              id = '#ContentPlaceHolder1_GenerateButton';
              triggerClick();
            break;
            case 'Reset PIN':
              id = '#ContentPlaceHolder1_ResetPinButton';
              triggerClick();
            break;
            case 'Lock':
              id = '#ContentPlaceHolder1_UnlockButton';
              triggerClick();
            break;
            case 'Unlock':
              id = '#ContentPlaceHolder1_UnlockButton';
              triggerClick();
            break;
            case 'Disable':
              id = '#ContentPlaceHolder1_EnableButton';
              triggerClick();
            break;
            case 'Enable':
              id = '#ContentPlaceHolder1_EnableButton';
              triggerClick();
            break;
            case 'Delete':
              id = '#ContentPlaceHolder1_DeleteButton';
              triggerClick();
            break;
            default:
          }
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageStatusButtonController,
      controllerAs: 'ManageStatusButton',
      templateUrl: config.theme + '/directives/ManageAccounts/manageStatusButton/manageStatusButton.html',
      bindToController: true
    };
  });
