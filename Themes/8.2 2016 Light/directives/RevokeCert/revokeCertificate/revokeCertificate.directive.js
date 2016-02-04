'use strict';

angular.module('secureauth')
  .directive('revokeCertificate', function (config, revokeCert) {

    var revokeCertificateController = function () {
      var vm = this;

      angular.extend(vm, {
        rekoveCertTxt: revokeCert.getRevokeCertTxt()[0],
        rekoveCertNumber: revokeCert.getRevokeCertNumber(),
        rekoveCertReasonTxt: revokeCert.getRevokeCertReasonTxt()[0],
        rekoveCertReason: revokeCert.getRevokeCertReason(),
        revokeCertButton: revokeCert.getRevokeCertButton()[0],
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: revokeCertificateController,
      controllerAs: 'RevokeCertificate',
      templateUrl: config.theme + '/directives/RevokeCert/revokeCertificate/revokeCertificate.html',
      bindToController: true
    };
  });