'use strict';

angular.module('secureauth')
  .directive('resetAccountPass', function (config, resetAccount) {

    var resetAccountPassController = function () {
      var vm = this;

      angular.extend(vm, {
        userPass: resetAccount.getUserPass(),
        userPassConfirm: resetAccount.getUserConfirm(),
        resetMsg: resetAccount.getResetMsg()[0],
        changeBtn: resetAccount.getChangeBtn()[0],
        unlockBtn: resetAccount.getUnlockBtn()[0],
        successMsg: resetAccount.getSuccessMsg()[0],
        passOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        resetPass: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: resetAccountPassController,
      controllerAs: 'ResetAccountPass',
      templateUrl: config.theme + '/directives/ResetAccount/resetAccountPass/resetAccountPass.html',
      bindToController: true
    };
  });
