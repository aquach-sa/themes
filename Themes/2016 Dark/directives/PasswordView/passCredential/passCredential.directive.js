'use strict';

angular.module('secureauth')
  .directive('passCredential', function (config, passwordView) {

    var passCredentialController = function () {
      var vm = this;

      angular.extend(vm, {
        passUserName: passwordView.getPassUserName(),
        passUserPass: passwordView.getPassUserPass(),
        pass: '',
        passOnChange: function (id) {
          var pass = angular.element('#' + id);
          pass.val(vm.pass);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: passCredentialController,
      controllerAs: 'PassCredential',
      templateUrl: config.theme + '/directives/PasswordView/passCredential/passCredential.html',
      bindToController: true
    };
  });
