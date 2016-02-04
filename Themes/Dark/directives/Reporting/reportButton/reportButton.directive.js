'use strict';

angular.module('secureauth')
  .directive('reportButton', function (config, reporter) {

    var reportButtonController = function () {
      var vm = this;

      angular.extend(vm, {
        reportBtn: reporter.getReportBtn()[0],
        onClick: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
      });

    };

    return {
      restrict: 'EA',
      controller: reportButtonController,
      controllerAs: 'ReportButton',
      templateUrl: config.theme + '/directives/Reporting/reportButton/reportButton.html',
      bindToController: true
    };
  });