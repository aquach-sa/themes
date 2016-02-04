'use strict';

angular.module('secureauth')
  .directive('{{directiveName}}', function (config) {

    var {{directiveName}}Controller = function () {
      var vm = this;

      angular.extend(vm, {
       
      });

    };

    return {
      restrict: 'EA',
      controller: {{directiveName}}Controller,
      controllerAs: '{{directiveController}}',
      templateUrl: config.theme + '/directives/{{viewName}}/{{directiveView}}/{{directiveView}}.html',
      bindToController: true
    };
  });
