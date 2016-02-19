'use strict';

angular.module('secureauth')
  .directive('unknownView', function (config) {

    var unknownViewController = function () {
      var vm = this;

      angular.extend(vm, {
        viewContent: function () {
          angular.element('#placeHolder').appendTo('#unknownView');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: unknownViewController,
      controllerAs: 'UnknownView',
      templateUrl: config.theme + '/directives/Common/unknownView/unknownView.html',
      bindToController: true
    };
  });
