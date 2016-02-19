'use strict';

angular.module('secureauth')
  .directive('userIdLabel', function (config, common) {

    var userIdLabelController = function () {
      var vm = this;

      angular.extend(vm, {
        userLabel: common.getUserLabel()[0],
        userLlink: common.getUserLink()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: userIdLabelController,
      controllerAs: 'UserIdLabel',
      templateUrl: config.theme + '/directives/Common/userIdLabel/userIdLabel.html',
      bindToController: true
    };
  });
