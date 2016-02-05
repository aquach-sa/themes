'use strict';

angular.module('secureauth')
  .directive('pageHeader', function (config, common) {

    var pageHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        pageHeader: common.getPageHeader()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: pageHeaderController,
      controllerAs: 'PageHeader',
      templateUrl: config.theme + '/directives/Common/pageHeader/pageHeader.html',
      bindToController: true
    };
  });
