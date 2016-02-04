'use strict';

angular.module('secureauth')
  .directive('appGridList', function (config, mobileApp) {

    var appGridListController = function () {
      var vm = this;

      angular.extend(vm, {
        appSite: mobileApp.getAppSite(),
      });

    };

    return {
      restrict: 'EA',
      controller: appGridListController,
      controllerAs: 'AppGridList',
      templateUrl: config.theme + '/directives/MobileAppStore/appGridList/appGridList.html',
      bindToController: true
    };
  });