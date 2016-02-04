'use strict';

angular.module('secureauth')
  .directive('oidcRevoke', function (config, oidcAuthorized) {

    var oidcAuthController = function () {
      var vm = this;

      angular.extend(vm, {
        oidcRevokeTxt: oidcAuthorized.getOidcRevokeTxt()[0],
        oidcClientTableTh: oidcAuthorized.getOidcClientTableTh(),
        oidcClientTableBody: oidcAuthorized.getOidcClientTableBody(),
        oidcRevokeButton: oidcAuthorized.getOidcRevokeButton()[0],
        onClick: function (id) {
          angular.element('#' + id).trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: oidcAuthController,
      controllerAs: 'OidcRevoke',
      templateUrl: config.theme + '/directives/OidcAuthorize/oidcRevoke/oidcRevoke.html',
      bindToController: true
    };
  });