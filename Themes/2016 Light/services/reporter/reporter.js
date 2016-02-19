'use strict';

angular.module('secureauth')
  .service('reporter', function (domModel) {
    
    this.getDateRange = function () {
      var label = angular.element('#ContentPlaceHolder1_Label4, #ContentPlaceHolder1_Label3');
      var input = angular.element('#ContentPlaceHolder1_TextBoxStartDate, #ContentPlaceHolder1_TextBoxEndDate');
      return domModel.getLabelInputData(label, input);
    };

    this.getPerPageTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_Label1');
      return domModel.getLabelData(label);
    };

    this.getPerPage = function () {
      var select = angular.element('#ContentPlaceHolder1_PageSizeDDL');
      return domModel.getSelectData(select);
    };

    this.getUserId = function () {
      var label = angular.element('#ContentPlaceHolder1_Label5');
      var input = angular.element('#ContentPlaceHolder1_UserIdTB');
      return domModel.getLabelInputData(label, input);
    };

    this.getSuccessfulAuth = function () {
      var label = angular.element('#ContentPlaceHolder1_SuccessfulAuthRB').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_SuccessfulAuthRB');
      return domModel.getLabelInputData(label, input);
    };

    this.getFailedAuth = function () {
      var label = angular.element('#ContentPlaceHolder1_FailedAuthRB').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_FailedAuthRB');
      return domModel.getLabelInputData(label, input);
    };

    this.getFailedOption = function () {
      var label = angular.element('#ContentPlaceHolder1_BadUserIDCB, #ContentPlaceHolder1_BadUserPasswordCB, #ContentPlaceHolder1_BadOTPCB').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_BadUserIDCB, #ContentPlaceHolder1_BadUserPasswordCB, #ContentPlaceHolder1_BadOTPCB');
      return domModel.getLabelInputData(label, input);
    };

    this.getOtherOption = function () {
      var input = angular.element('#ContentPlaceHolder1_EventIDRB, #ContentPlaceHolder1_TextBox1');
      return domModel.getInputData(input);
    };

    this.getGroupByTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_Label2');
      return domModel.getLabelData(label);
    };

    this.getGroupByCheck = function () {
      var label = angular.element('#ContentPlaceHolder1_UserIDCB, #ContentPlaceHolder1_CompanyCB, #ContentPlaceHolder1_RealmCB, #ContentPlaceHolder1_EventIDCB, #ContentPlaceHolder1_ApplianceCB, #ContentPlaceHolder1_MachineNameCB').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_UserIDCB, #ContentPlaceHolder1_CompanyCB, #ContentPlaceHolder1_RealmCB, #ContentPlaceHolder1_EventIDCB, #ContentPlaceHolder1_ApplianceCB, #ContentPlaceHolder1_MachineNameCB');
      return domModel.getLabelInputData(label, input);
    };

    this.getReportBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonSubmit');
      return domModel.getButtonData(button);
    };

    this.getExportBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonExport');
      return domModel.getButtonData(button);
    };

    this.getErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_ErrorLabel');
      return domModel.getLabelData(label);
    };

  });
