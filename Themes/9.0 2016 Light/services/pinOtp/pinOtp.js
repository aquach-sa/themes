'use strict';

angular.module('secureauth')
  .service('pinOtp', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_PINHeaderLabel');
      return domModel.getLabelData(label);
    };

    this.getPin = function () {
      var label = angular.element('#ContentPlaceHolder1_otp');
      return domModel.getLabelData(label);
    };

  });
