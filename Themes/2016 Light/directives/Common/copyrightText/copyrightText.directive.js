'use strict';

angular.module('secureauth')
  .directive('copyrightText', function (config, common) {

    var copyrightTextController = function () {
      var vm = this;

      angular.extend(vm, {
        copyright: common.getCopyright()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: copyrightTextController,
      controllerAs: 'CopyrightText',
      templateUrl: config.theme + '/directives/Common/copyrightText/copyrightText.html',
      bindToController: true
    };
  });
