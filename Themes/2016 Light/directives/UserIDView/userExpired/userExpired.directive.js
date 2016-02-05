'use strict';

angular.module('secureauth')
  .directive('userExpired', function (config, userIdView) {

    var userExpiredController = function () {
      var vm = this;

      angular.extend(vm, {
        userNewPass: userIdView.getUserNewPass(),
        userPassConfirm: userIdView.getUserConfirm(),
        passOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: userExpiredController,
      controllerAs: 'UserExpired',
      templateUrl: config.theme + '/directives/UserIDView/userExpired/userExpired.html',
      bindToController: true
    };
  });
