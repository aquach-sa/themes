'use strict';

angular.module('secureauth')
  .directive('oidcError', function (config, oidcAuthorized) {

    var oidcErrorController = function () {
      var vm = this;

      angular.extend(vm, {
        oidcErrorMsg: oidcAuthorized.getOidcErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: oidcErrorController,
      controllerAs: 'OidcError',
      templateUrl: config.theme + '/directives/OidcAuthorize/oidcError/oidcError.html',
      bindToController: true
    };
  });