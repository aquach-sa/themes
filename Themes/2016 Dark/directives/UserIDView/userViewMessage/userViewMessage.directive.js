'use strict';

angular.module('secureauth')
  .directive('userViewMessage', function (config, userIdView) {

    var userViewMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        userViewMsg: userIdView.getUserViewMsg(),
      });

    };

    return {
      restrict: 'EA',
      controller: userViewMessageController,
      controllerAs: 'UserViewMessage',
      templateUrl: config.theme + '/directives/UserIdView/userViewMessage/userViewMessage.html',
      bindToController: true
    };
  });
