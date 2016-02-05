'use strict';

angular.module('secureauth')
  .directive('reportErrorMessage', function (config, reporter) {

    var reportErrorMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        errorMsg: reporter.getErrorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: reportErrorMessageController,
      controllerAs: 'ReportErrorMessage',
      templateUrl: config.theme + '/directives/Reporting/reportErrorMessage/reportErrorMessage.html',
      bindToController: true
    };
  });