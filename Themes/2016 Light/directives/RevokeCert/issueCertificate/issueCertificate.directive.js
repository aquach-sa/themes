'use strict';

angular.module('secureauth')
  .directive('issueCertificate', function (config, revokeCert) {

    var issueCertificateController = function () {
      var vm = this;

      angular.extend(vm, {
        cert: '',
        issueCertTxt: revokeCert.getIssueCertTxt()[0],
        withinMnthTxt: revokeCert.getWithinMnthTxt()[0],
        monthRange: revokeCert.getMonthRange(),
        userId: revokeCert.getUserId(),
        exactCheck: revokeCert.getExactCheck(),
        exactTxt: revokeCert.getExactTxt(),
        excludeCheck: revokeCert.getExcludeCheck(),
        excludeTxt: revokeCert.getExcludeTxt(),
        findCertButton: revokeCert.getFindCertButton()[0],
        foundCertTxt: revokeCert.getFoundCertTxt()[0],
        foundCert: revokeCert.getFoundCert(),
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onCheck: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
        },
        onSelect: function (id) {
          var newSelect = angular.element('#' + id + '_UiInput');
          var newSelectVal = newSelect.val();
          var select = angular.element('#' + id);
          select.val(newSelectVal).trigger('change');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: issueCertificateController,
      controllerAs: 'IssueCertificate',
      templateUrl: config.theme + '/directives/RevokeCert/issueCertificate/issueCertificate.html',
      bindToController: true
    };
  });