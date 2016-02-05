'use strict';

angular.module('secureauth')
  .directive('eulaLink', function (config, common, $timeout) {

    var eulaLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        eulaLink: common.getEulaLink()[0],
        onClickAttr: function () {
          $timeout(function () {
            var link = angular.element('#eulaLink');
            var linkData = link.attr('eula');
            link.attr('onclick', linkData);
          }, 1000);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: eulaLinkController,
      controllerAs: 'EulaLink',
      templateUrl: config.theme + '/directives/Common/eulaLink/eulaLink.html',
      bindToController: true
    };
  });
