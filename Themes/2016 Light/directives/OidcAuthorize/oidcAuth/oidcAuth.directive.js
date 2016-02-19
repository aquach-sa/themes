'use strict';

angular.module('secureauth')
  .directive('oidcAuth', function (config, oidcAuthorized) {

    var oidcAuthController = function () {
      var vm = this;

      angular.extend(vm, {
        oidcAuthTxt: oidcAuthorized.getOidcAuthTxt(),
        oidcAuthButton: oidcAuthorized.getOidcAuthButton(),
        onClick: function (id) {
          angular.element('#' + id).trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: oidcAuthController,
      controllerAs: 'OidcAuth',
      templateUrl: config.theme + '/directives/OidcAuthorize/oidcAuth/oidcAuth.html',
      bindToController: true
    };
  });