'use strict';

angular.module('secureauth')
  .directive('portalGridList', function (config, securePortal) {

    var portalGridListController = function () {
      var vm = this;

      angular.extend(vm, {
        securePortal: securePortal.getPortalSite(),
      });

    };

    return {
      restrict: 'EA',
      controller: portalGridListController,
      controllerAs: 'PortalGridList',
      templateUrl: config.theme + '/directives/SecurePortal/portalGridList/portalGridList.html',
      bindToController: true
    };
  });