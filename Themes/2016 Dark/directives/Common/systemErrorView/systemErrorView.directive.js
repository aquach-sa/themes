'use strict';

angular.module('secureauth')
  .directive('systemErrorView', function (config) {

    var systemErrorViewController = function () {
      var vm = this;

      angular.extend(vm, {
        viewContent: function () {
          angular.element('#placeHolder').appendTo('#systemErrorView');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: systemErrorViewController,
      controllerAs: 'SystemErrorView',
      templateUrl: config.theme + '/directives/Common/systemErrorView/systemErrorView.html',
      bindToController: true
    };
  });
