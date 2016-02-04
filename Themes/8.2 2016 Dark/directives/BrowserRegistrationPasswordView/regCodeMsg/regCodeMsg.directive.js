'use strict';

angular.module('secureauth')
  .directive('regCodeMsg', function (config, browserRegistrationView) {

    var regCodeMsgController = function () {
      var vm = this;

      angular.extend(vm, {
        regCodeMsg: browserRegistrationView.getRegCodeMsg()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: regCodeMsgController,
      controllerAs: 'RegCodeMsg',
      templateUrl: config.theme + '/directives/BrowserRegistrationPasswordView/regCodeMsg/regCodeMsg.html',
      bindToController: true
    };
  });
