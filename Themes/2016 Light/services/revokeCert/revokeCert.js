'use strict';

angular.module('secureauth')
  .service('revokeCert', function (domModel) {
    
    this.getIssueCertTxt = function () {
      var legend = angular.element('#divSearchUserCerts').find('legend');
      return domModel.getLegendData(legend);
    };

    this.getWithinMnthTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_lblWithinMonths');
      return domModel.getLabelData(label);
    };

    this.getMonthRange = function () {
      var select = angular.element('#ContentPlaceHolder1_ddlWithinMonths');
      return domModel.getSelectData(select);  
    };

    this.getUserId = function () {
      var label = angular.element('#ContentPlaceHolder1_lblUserId');
      var input = angular.element('#ContentPlaceHolder1_tbxUserId');
      return domModel.getLabelInputData(label, input);
    };

    this.getExactCheck = function () {
      var input = angular.element('#ContentPlaceHolder1_cbxExactMatch');
      return domModel.getInputData(input);
    };

    this.getExactTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_cbxExactMatch').next('label');
      var input = angular.element('#ContentPlaceHolder1_cbxExactMatch');
      return domModel.getLabelInputData(label, input);
    };

    this.getExcludeCheck = function () {
      var input = angular.element('#ContentPlaceHolder1_cbxExcludeExpired');
      return domModel.getInputData(input);
    };

    this.getExcludeTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_cbxExcludeExpired').next('label');
      var input = angular.element('#ContentPlaceHolder1_cbxExcludeExpired');
      return domModel.getLabelInputData(label, input);
    };

    this.getFindCertButton = function () {
      var button = angular.element('#ContentPlaceHolder1_btnFindCerts');
      return domModel.getButtonData(button);
    };

    this.getFoundCertTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_lblUserCerts');
      return domModel.getLabelData(label);
    };

    this.getFoundCert = function () {
      var select = angular.element('#ContentPlaceHolder1_ddlUserCerts');
      return domModel.getSelectData(select);  
    };

    this.getRevokeCertTxt = function () {
      var legend = angular.element('#divRevokeCert').find('legend');
      return domModel.getLegendData(legend);
    };

    this.getRevokeCertNumber = function () {
      var label = angular.element('#ContentPlaceHolder1_lblCertSN');
      var input = angular.element('#ContentPlaceHolder1_tbxCertSN');
      return domModel.getLabelInputData(label, input);
    };

    this.getRevokeCertReasonTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_lblRevokeReason');
      return domModel.getLabelData(label);
    };

    this.getRevokeCertReason = function () {
      var select = angular.element('#ContentPlaceHolder1_ddlRevokeReason');
      return domModel.getSelectData(select);
    };

    this.getRevokeCertButton = function () {
      var button = angular.element('#ContentPlaceHolder1_btnRevoke');
      return domModel.getButtonData(button);
    };

    this.getMsgCert = function () {
      var textarea = angular.element('#ContentPlaceHolder1_tbxRevocationResult');
      return domModel.getTextareaData(textarea);
    };

  });
