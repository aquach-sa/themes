'use strict';

angular.module('secureauth')
  .directive('reportType', function (config, reporter, $timeout) {

    var reportTypeController = function () {
      var vm = this;

      angular.extend(vm, {
        successfulAuth: reporter.getSuccessfulAuth(),
        failedAuth: reporter.getFailedAuth(),
        failedOption: reporter.getFailedOption(),
        otherOption: reporter.getOtherOption(),
        onClick: function (id) {
          var select = angular.element('#' + id);

          select.trigger('click');

          $timeout(function () {
            vm.failedOption = reporter.getFailedOption();
            vm.otherOption = reporter.getOtherOption();
          }, 500);
        },
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: reportTypeController,
      controllerAs: 'ReportType',
      templateUrl: config.theme + '/directives/Reporting/reportType/reportType.html',
      bindToController: true
    };
  });