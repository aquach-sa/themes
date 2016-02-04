'use strict';

angular.module('secureauth')
  .directive('reportUserId', function (config, reporter) {

    var reportUserIdController = function () {
      var vm = this;

      angular.extend(vm, {
        userId: reporter.getUserId(),
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: reportUserIdController,
      controllerAs: 'ReportUserId',
      templateUrl: config.theme + '/directives/Reporting/reportUserId/reportUserId.html',
      bindToController: true
    };
  });