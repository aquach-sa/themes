'use strict';

angular.module('secureauth')
  .directive('publicPrivateMode', function (config, userIdView) {

    var publicPrivateModeController = function () {
      var vm = this;

      angular.extend(vm, {
        modes: userIdView.getPublicPrivateMode(),
        selectMode: function (id) {
          var radioBox = angular.element('#' + id);
          radioBox.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: publicPrivateModeController,
      controllerAs: 'PublicPrivateMode',
      templateUrl: config.theme + '/directives/UserIDView/publicPrivateMode/publicPrivateMode.html',
      bindToController: true
    };
  });
