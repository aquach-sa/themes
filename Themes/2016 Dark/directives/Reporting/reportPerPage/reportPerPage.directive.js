'use strict';

angular.module('secureauth')
  .directive('reportPerPage', function (config, reporter) {

    var reportPerPageController = function () {
      var vm = this;

      angular.extend(vm, {
        perPageTxt: reporter.getPerPageTxt()[0],
        perPage: reporter.getPerPage(),
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: reportPerPageController,
      controllerAs: 'ReportPerPage',
      templateUrl: config.theme + '/directives/Reporting/reportPerPage/reportPerPage.html',
      bindToController: true
    };
  });