'use strict';

angular.module('secureauth')
  .service('createUser', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelHeaderMsg');
      return domModel.getLabelData(label);
    };

    this.getUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_Label32');
      var input = angular.element('#ContentPlaceHolder1_TextBoxUid');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserNameMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_UidLabel');
      return domModel.getLabelData(label);
    };

    this.getUserPass = function () {
      var label = angular.element('#ContentPlaceHolder1_Label12');
      var input = angular.element('#ContentPlaceHolder1_Password');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserConfirm = function () {
      var label = angular.element('#ContentPlaceHolder1_Label14');
      var input = angular.element('#ContentPlaceHolder1_ConfirmPassword');
      return domModel.getLabelInputData(label, input);
    };

    this.getValidatorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_CompareValidator1');
      return domModel.getLabelData(label);
    };

    this.getErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_lblErrorMsg');
      return domModel.getLabelData(label);
    };

    this.getSuccessMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_lblSuccessMsg');
      return domModel.getLabelData(label);
    };

    this.getCreateBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_pbSave');
      return domModel.getButtonData(button);
    };

    this.getCreateReset = function () {
      var button = angular.element('#ContentPlaceHolder1_pbReset');
      return domModel.getButtonData(button);
    };

    this.getCreateUsrFirstName = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelFName');
      var input = angular.element('#ContentPlaceHolder1_txtFirstName');
      return domModel.getLabelInputData(label, input);
    };

    this.getCreateUsrLastName = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelLName');
      var input = angular.element('#ContentPlaceHolder1_txtLastName');
      return domModel.getLabelInputData(label, input);
    };

    this.getCreateUsrGroupTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_groupLabel');
      return domModel.getLabelData(label);
    };

    this.getCreateUsrGroup = function () {
      var select = angular.element('#ContentPlaceHolder1_groupDDL');
      return domModel.getSelectData(select);  
    };

    this.getCreateUsrPhone = function () {
      var label = angular.element('#ContentPlaceHolder1_TRPhone1, #ContentPlaceHolder1_TRPhone2, #ContentPlaceHolder1_TRPhone3, #ContentPlaceHolder1_TRPhone4').find('span:first');
      var input = angular.element('#ContentPlaceHolder1_TRPhone1, #ContentPlaceHolder1_TRPhone2, #ContentPlaceHolder1_TRPhone3, #ContentPlaceHolder1_TRPhone4').find('input');
      return domModel.getLabelInputData(label, input); 
    };

    this.getCreateUsrEmail = function () {
      var label = angular.element('#ContentPlaceHolder1_TREmail1, #ContentPlaceHolder1_TREmail2, #ContentPlaceHolder1_TREmail3, #ContentPlaceHolder1_TREmail4').find('span:first');
      var input = angular.element('#ContentPlaceHolder1_TREmail1, #ContentPlaceHolder1_TREmail2, #ContentPlaceHolder1_TREmail3, #ContentPlaceHolder1_TREmail4').find('input');
      return domModel.getLabelInputData(label, input); 
    };

    this.getCreateUsrAux = function () {
      var label = angular.element('#ContentPlaceHolder1_TRAuxID1, #ContentPlaceHolder1_TRAuxID2, #ContentPlaceHolder1_TRAuxID3, #ContentPlaceHolder1_TRAuxID4, #ContentPlaceHolder1_TRAuxID5, #ContentPlaceHolder1_TRAuxID6, #ContentPlaceHolder1_TRAuxID7, #ContentPlaceHolder1_TRAuxID8, #ContentPlaceHolder1_TRAuxID9, #ContentPlaceHolder1_TRAuxID10').find('span:first');
      var input = angular.element('#ContentPlaceHolder1_TRAuxID1, #ContentPlaceHolder1_TRAuxID2, #ContentPlaceHolder1_TRAuxID3, #ContentPlaceHolder1_TRAuxID4, #ContentPlaceHolder1_TRAuxID5, #ContentPlaceHolder1_TRAuxID6, #ContentPlaceHolder1_TRAuxID7, #ContentPlaceHolder1_TRAuxID8, #ContentPlaceHolder1_TRAuxID9, #ContentPlaceHolder1_TRAuxID10').find('input');
      return domModel.getLabelInputData(label, input); 
    };

    this.getCreateKbqTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_TRKBATitle').find('strong');
      return domModel.getLabelData(label);
    };

    this.getCreateKbqCheck = function () {
      var label = angular.element('#ContentPlaceHolder1_CheckBox1').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_CheckBox1');
      return domModel.getLabelInputData(label, input);
    };

    this.getCreateKbqQuestion = function () {
      var select = angular.element('#ContentPlaceHolder1_Q1TR, #ContentPlaceHolder1_Q2TR, #ContentPlaceHolder1_Q3TR, #ContentPlaceHolder1_Q4TR, #ContentPlaceHolder1_Q5TR, #ContentPlaceHolder1_Q6TR').find('select');
      return domModel.getSelectData(select);
    };

    this.getCreateKbqAnswer = function () {
      var input = angular.element('#ContentPlaceHolder1_A1TR, #ContentPlaceHolder1_A2TR, #ContentPlaceHolder1_A3TR, #ContentPlaceHolder1_A4TR, #ContentPlaceHolder1_A5TR, #ContentPlaceHolder1_A6TR').find('input');
      return domModel.getInputData(input);
    };

    this.getCreateHelpDeskTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_asdf');
      return domModel.getLabelData(label);
    };

    this.getCreateHelpDeskQuestion = function () {
      var select = angular.element('#ContentPlaceHolder1_TDChallenge2').find('select');
      return domModel.getSelectData(select);
    };

    this.getCreateHelpDeskAnswer = function () {
      var input = angular.element('#ContentPlaceHolder1_TDChallenge2').find('input');
      return domModel.getInputData(input);
    };

    this.getUserPassGenerateBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_GenerateButton');
      return domModel.getButtonData(button);
    };

  });
