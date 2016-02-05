'use strict';

angular.module('secureauth')
  .directive('kbaMessage', function (config, kbaRegistrationView) {

    var kbaMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        kbaMsg: kbaRegistrationView.getKbaMessage()[0],
        getAltLink: function () {

        }
      });

      vm.getAltLink();

    };

    return {
      restrict: 'EA',
      controller: kbaMessageController,
      controllerAs: 'KbaMessage',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaMessage/kbaMessage.html',
      bindToController: true
    };
  });
