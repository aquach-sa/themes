'use strict';

angular.module('secureauth')
  .directive('userIdHeader', function (config, userIdView) {

    var userIdHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: userIdView.getHeaderTxt()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: userIdHeaderController,
      controllerAs: 'UserIdHeader',
      templateUrl: config.theme + '/directives/UserIDView/userIdHeader/userIdHeader.html',
      bindToController: true
    };
  });
