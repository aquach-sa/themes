'use strict';

angular.module('secureauth')
  .directive('logoutMessage', function (config, logOut) {

    var logoutMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        logoutHeader: logOut.getLogoutHeader()[0],
        logoutTxt: logOut.getLogoutTxt()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: logoutMessageController,
      controllerAs: 'LogoutMessage',
      templateUrl: config.theme + '/directives/Logout/logoutMessage/logoutMessage.html',
      bindToController: true
    };
  });
