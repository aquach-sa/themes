'use strict';

angular.module('secureauth')
  .directive('resetAccountUser', function (config, resetAccount) {

    var resetAccountUserController = function () {
      var vm = this;

      angular.extend(vm, {
        userName: resetAccount.getUserName(),
        userStatus: resetAccount.getUserStatus()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: resetAccountUserController,
      controllerAs: 'ResetAccountUser',
      templateUrl: config.theme + '/directives/ResetAccount/resetAccountUser/resetAccountUser.html',
      bindToController: true
    };
  });
