'use strict';

angular.module('secureauth')
  .service('qrCodeProvision', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_TitleLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepOneTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_InstallDiv > label:eq(0)');
      return domModel.getLabelData(label);
    };

    this.getQrStepOneText = function () {
      var label = angular.element('#ContentPlaceHolder1_installDescriptionLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepTwoTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_ScanDiv > label:eq(0)');
      return domModel.getLabelData(label);
    };

    this.getQrStepTwoText = function () {
      var label = angular.element('#ContentPlaceHolder1_scanDescriptionLabel');
      return domModel.getLabelData(label);
    };

    this.getQrStepThreeTitle = function () {
      var label = angular.element('#ContentPlaceHolder1_ConfirmDiv > label:eq(0)');
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

  });
