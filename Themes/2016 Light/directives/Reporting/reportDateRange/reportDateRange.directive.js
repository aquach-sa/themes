'use strict';

angular.module('secureauth')
  .directive('reportDateRange', function (config, reporter) {

    var reportDateRangeController = function () {
      var vm = this;

      angular.extend(vm, {
        dateRange: reporter.getDateRange(),
        datePicker: function () {
          angular.element('.datepicker').datepicker();
        },
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: reportDateRangeController,
      controllerAs: 'ReportDateRange',
      templateUrl: config.theme + '/directives/Reporting/reportDateRange/reportDateRange.html',
      bindToController: true
    };
  });