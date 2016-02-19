'use strict';

angular.module('secureauth')
  .directive('passExpire', function (config, userIdView) {

    var passExpireController = function () {
      var vm = this;

      angular.extend(vm, {
        passExpireMsg: userIdView.getPassExpireMsg(),
      });

    };

    return {
      restrict: 'EA',
      controller: passExpireController,
      controllerAs: 'PassExpire',
      templateUrl: config.theme + '/directives/UserIDView/passExpire/passExpire.html',
      bindToController: true
    };
  });
