'use strict';

angular.module('secureauth')
  .directive('messageCertificate', function (config, revokeCert) {

    var messageCertificateController = function () {
      var vm = this;

      angular.extend(vm, {
        msgCert: revokeCert.getMsgCert()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: messageCertificateController,
      controllerAs: 'MessageCertificate',
      templateUrl: config.theme + '/directives/RevokeCert/messageCertificate/messageCertificate.html',
      bindToController: true
    };
  });