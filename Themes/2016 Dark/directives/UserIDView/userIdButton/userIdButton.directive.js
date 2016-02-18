'use strict';

angular.module('secureauth')
  .directive('userIdButton', function (config, userIdView) {

    var userIdButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        submited: 'false',
        userIdViewBtn: userIdView.getUserIdViewBtn()[0],
        click: function (id) {
          var valid = angular.element('#aspnetForm').hasClass('ng-valid');
          if (valid && vm.submited === 'false') {
            angular.element('#' + id).trigger('click');
            vm.submited = 'true';
          }
        },
        dblclick: function () {
          return false;
        }
      });

    };

    return {
      restrict: 'EA',
      controller: userIdButtonController,
      controllerAs: 'UserIdButton',
      templateUrl: config.theme + '/directives/UserIDView/userIdButton/userIdButton.html',
      bindToController: true
    };
  });
