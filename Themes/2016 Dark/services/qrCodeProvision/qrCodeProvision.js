'use strict';

angular.module('secureauth')
  .service('qrCodeProvision', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_TitleLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepOneTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_installDivTitle');
      return domModel.getLabelData(label);
    };

    this.getQrStepOneText = function () {
      var label = angular.element('#ContentPlaceHolder1_installDescriptionLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepTwoTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_scanDivTitle');
      return domModel.getLabelData(label);
    };

    this.getQrStepTwoText = function () {
      var label = angular.element('#ContentPlaceHolder1_scanDescriptionLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepThreeTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_confirmDivTitle');
      return domModel.getLabelData(label);
    };

    this.getQrStepThreeText = function () {
      var label = angular.element('#ContentPlaceHolder1_confirmDescriptionLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepImage = function () {
      var image = angular.element('#ContentPlaceHolder1_qrImage');
      return domModel.getImageData(image);
    };

    this.getQrStepVerifyInput = function () {
      var input = angular.element('#ContentPlaceHolder1_otpInput');
      return domModel.getInputData(input);
    };

    this.getQrStepVerifyButton = function () {
      var input = angular.element('#ContentPlaceHolder1_EnableButton');
      return domModel.getInputData(input);
    };

    this.getQrStepVerifyError = function () {
      var label = angular.element('#ContentPlaceHolder1_ErrorLabel');
      return domModel.getLabelData(label);
    };

    this.getQrThirdPartyImgLink = function () {
      var image = angular.element('#googleAuthLink').find('a');
      return domModel.getImageData(image);
    };

    this.getQrThirdPartyImg = function () {
      var image = angular.element('#googleAuthLink').find('img');
      return domModel.getImageData(image);
    };

    this.getQrThirdPartyAppTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_googleAuthDivTitle');
      return domModel.getLabelData(label);
    };

    this.getQrThirdPartyAppLink = function () {
      var link = angular.element('#googleAuthDivLink').find('a');
      return domModel.getLinkData(link);
    };

    this.getQrThirdPartyAppText = function () {
      var label = angular.element('#googleAuthDivText');
      return domModel.getLabelData(label);
    };

    this.getQrThirdPartyAppTextLink = function () {
      var link = angular.element('#googleAuthDivTextLink');
      return domModel.getLinkData(link);
    };

    this.getQrThirdParty = function () {
      var label = angular.element('#ContentPlaceHolder1_OATHSeedLabel');
      var input = angular.element('#ContentPlaceHolder1_OATHSeedInput');
      return domModel.getLabelInputData(label, input);
    };

    this.getQrSuccessMessage = function () {
      var label = angular.element('#ContentPlaceHolder1_SuccessLabel');
      return domModel.getLabelData(label);
    };

    this.getQrSuccessDevice = function () {
      var label = angular.element('#ContentPlaceHolder1_DeviceNameLabel');
      return domModel.getLabelData(label);
    };

    this.getQrRegDevice = function () {
      var input = angular.element('#ContentPlaceHolder1_registerButton');
      return domModel.getInputData(input);
    };
    
  });
