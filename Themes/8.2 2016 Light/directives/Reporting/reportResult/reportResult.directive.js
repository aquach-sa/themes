'use strict';

angular.module('secureauth')
  .directive('reportResult', function (config, reporter, $timeout) {

    var reportResultController = function () {
      var vm = this;

      angular.extend(vm, {
        exportBtn: reporter.getExportBtn()[0],
        onClick: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        showResult: function () {
          var result = angular.element('#reportResult');
          var resultTable = angular.element('#resultsTable');

          $timeout(function () {
            resultTable.appendTo(result);
          }, 1000);
        }
      });

      vm.showResult();
    };

    return {
      restrict: 'EA',
      controller: reportResultController,
      controllerAs: 'ReportResult',
      templateUrl: config.theme + '/directives/Reporting/reportResult/reportResult.html',
      bindToController: true
    };
  });