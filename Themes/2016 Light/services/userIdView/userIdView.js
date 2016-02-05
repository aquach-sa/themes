'use strict';

angular.module('secureauth')
  .service('userIdView', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblHeader');
      return domModel.getLabelData(label);
    };

    this.getPublicPrivateMode = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trKioskPublic, #ContentPlaceHolder1_MFALoginControl1_UserIDView_trKioskPrivate').find('span');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trKioskPublic, #ContentPlaceHolder1_MFALoginControl1_UserIDView_trKioskPrivate').find('input');
      return domModel.getLabelInputData(label, input);
    };

    this.getAuthMethodId = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trUserId').find('span');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trUserId').find('input');
      return domModel.getLabelInputData(label, input);
    };

    this.getAuthMethodPass = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trPassword').find('span');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trPassword').find('input');
      return domModel.getLabelInputData(label, input);
    };

    this.getForgotUser = function () {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_hlinkUsernameLink');
      return domModel.getLinkData(link);
    };

    this.getIeMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblActiveX');
      return domModel.getLabelData(label);
    };

    this.getForgotPass = function () {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_hlinkPasswordLink');
      return domModel.getLinkData(link);
    };

    this.getPassExpireMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_trBRBeforePasswordExpireMsg, #ContentPlaceHolder1_MFALoginControl1_UserIDView_trPwdExpireMsg, #ContentPlaceHolder1_MFALoginControl1_UserIDView_trBRBeforeKiosk').find('span');
      return domModel.getLabelData(label);
    };

    this.getPassValidMethodMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblErrMessage');
      return domModel.getLabelData(label);
    };

    this.getUserIdViewBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getSocialLoginHeader = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_tcSocialIdentity1').find('h4');
      return domModel.getLabelData(label);
    };

    this.getSocialLogin = function () {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_tcSocialIdentity1').find('a');
      return domModel.getLinkData(link);
    };

    this.getUserNewPass = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblNewPassword0');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_tbxNewPassword0');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserConfirm = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblNewPassword1');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_tbxNewPassword1');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserViewMsg =function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_container2').find('span:not(:last)');
      return domModel.getLabelData(label);
    };

  });
