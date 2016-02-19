'use strict';

angular.module('secureauth')
  .directive('userActivexMessage', function (config, userIdView) {

    var userActivexMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        ieMsg: userIdView.getIeMsg()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: userActivexMessageController,
      controllerAs: 'UserActivexMessage',
      templateUrl: config.theme + '/directives/UserIDView/userActivexMessage/userActivexMessage.html',
      bindToController: true
    };
  });
