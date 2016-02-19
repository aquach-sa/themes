'use strict';

angular.module('secureauth')
  .service('browserRegistrationView', function(domModel) {

    this.getHeaderTxt = function() {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_lblHeader1');
      return domModel.getLabelData(label);
    };

    this.getRegistration = function() {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_lblPassword');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_tbxPassword');
      return domModel.getLabelInputData(label, input);
    };

    this.getKeyPad = function() {
      var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      return keys;
    };

    this.getRegAltLink = function() {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_lnkbtnAlternative');
      return domModel.getLinkData(link);
    };

    this.getRegCodeBtn = function() {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getRegCodeMsg = function() {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_BrowserRegistrationPasswordView_lblErrMessage');
      return domModel.getLabelData(label);
    };

  });
