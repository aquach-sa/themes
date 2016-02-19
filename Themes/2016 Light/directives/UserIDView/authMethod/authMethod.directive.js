'use strict';

angular.module('secureauth')
  .directive('authMethod', function (config, userIdView) {

    var authMethodController = function () {
      var vm = this;

      angular.extend(vm, {
        authMethodId: userIdView.getAuthMethodId(),
        user: '',
        authMethodPass: userIdView.getAuthMethodPass(),
        pass: '',
        forgotUser: userIdView.getForgotUser()[0],
        forgotPass: userIdView.getForgotPass()[0],
        getMethodOnChange: function (id) {
          var user = angular.element('#' + id);
          user.val(vm.user);
        },
        getUser: function () {
          vm.user = vm.authMethodId[0].input.value;
        },
        getPassOnChange: function (id) {
          var pass = angular.element('#' + id);
          pass.val(vm.pass);
        },
        getPass: function () {
          vm.pass = '';
        }
      });

    };

    return {
      restrict: 'EA',
      controller: authMethodController,
      controllerAs: 'AuthMethod',
      templateUrl: config.theme + '/directives/UserIDView/authMethod/authMethod.html',
      bindToController: true
    };
  });
