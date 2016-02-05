'use strict';

angular.module('secureauth')
  .directive('passValidMethod', function (config, userIdView) {

    var passValidMethodController = function () {
      var vm = this;

      angular.extend(vm, {
        passValidMethodMsg: userIdView.getPassValidMethodMsg(),
      });

    };

    return {
      restrict: 'EA',
      controller: passValidMethodController,
      controllerAs: 'PassValidMethod',
      templateUrl: config.theme + '/directives/UserIDView/passValidMethod/passValidMethod.html',
      bindToController: true
    };
  });
