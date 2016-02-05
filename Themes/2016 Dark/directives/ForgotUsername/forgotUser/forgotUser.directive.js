'use strict';

angular.module('secureauth')
  .directive('forgotUser', function (config, forgotUsername) {

    var forgotUserController = function () {
      var vm = this;

      angular.extend(vm, {
        userName: forgotUsername.getUserName()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: forgotUserController,
      controllerAs: 'ForgotUser',
      templateUrl: config.theme + '/directives/ForgotUsername/forgotUser/forgotUser.html',
      bindToController: true
    };
  });
