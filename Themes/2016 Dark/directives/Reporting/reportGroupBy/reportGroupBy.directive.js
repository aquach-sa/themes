'use strict';

angular.module('secureauth')
  .directive('reportGroupBy', function (config, reporter) {

    var reportGroupByController = function () {
      var vm = this;

      angular.extend(vm, {
        groupByTxt: reporter.getGroupByTxt()[0],
        groupByCheck: reporter.getGroupByCheck(),
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onCheck: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
      });

    };

    return {
      restrict: 'EA',
      controller: reportGroupByController,
      controllerAs: 'ReportGroupBy',
      templateUrl: config.theme + '/directives/Reporting/reportGroupBy/reportGroupBy.html',
      bindToController: true
    };
  });