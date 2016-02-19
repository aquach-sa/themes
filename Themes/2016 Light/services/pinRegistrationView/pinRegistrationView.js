'use strict';

angular.module('secureauth')
  .service('pinRegistrationView', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_lblHeader');
      return domModel.getLabelData(label);
    };

    this.getPinCode = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_lblPassword');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_tbxPassword');
      return domModel.getLabelInputData(label, input);
    };

    this.getPinShowHide = function () {
      var label = angular.element('#cbxPassword_label');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_cbxPassword');
      return domModel.getLabelInputData(label, input);
    };

    this.getPinCodeBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getPinAltLink = function () {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_lnkbtnAlternative');
      return domModel.getLinkData(link);
    };

    this.getErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_PINRegistrationView_lblErrMessage');
      return domModel.getLabelData(label);
    };

    this.getKeyPad = function() {
      var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      return keys;
    };

  });
