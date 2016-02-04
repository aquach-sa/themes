'use strict';

angular.module('secureauth')
  .directive('manageAcctCert', function (config, manageAccount) {

    var manageAcctCertController = function () {
      var vm = this;

      angular.extend(vm, {
        certCount: manageAccount.getCertCount(),
        certDateTxt: manageAccount.getCertDateTxt(),
        certDate: manageAccount.getCertDate(),
        certResetBtn: manageAccount.getCertResetBtn()[0],
        onChange: function (id) {
          var certVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(certVal);
        },
        resetBtn: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonCertRevoke');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctCertController,
      controllerAs: 'ManageAcctCert',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctCert/manageAcctCert.html',
      bindToController: true
    };
  });
