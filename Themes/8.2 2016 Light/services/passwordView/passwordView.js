'use strict';

angular.module('secureauth')
  .service('passwordView', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblHeader');
      return domModel.getLabelData(label);
    };

    this.getPassUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblUserId');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_tbxUserId');
      return domModel.getLabelInputData(label, input);
    };

    this.getPassUserPass = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblPassword');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_tbxPassword');
      return domModel.getLabelInputData(label, input);
    };

    this.getPassViewBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getPassViewMsg =function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_container2').find('span:not(:last)');
      return domModel.getLabelData(label);
    };

    this.getPriPubModes = function () {
      var label = angular.element('#rbKioskPublic_label, #rbKioskPrivate_label');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_rbKioskPublic, #ContentPlaceHolder1_MFALoginControl1_PasswordView_rbKioskPrivate');
      return domModel.getLabelInputData(label, input);
    };

    this.getPriPubTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblKiosk');
      return domModel.getLabelData(label);
    };

    this.getPassExpireMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblPasswordExpireMsg');
      return domModel.getLabelData(label);
    };

    this.getUserNewPass = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblNewPassword0');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_tbxNewPassword0');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserConfirm = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblNewPassword1');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_tbxNewPassword1');
      return domModel.getLabelInputData(label, input);
    };

    this.getPassViewErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PasswordView_lblErrMessage');
      return domModel.getLabelData(label);
    };
    
});

