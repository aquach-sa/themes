'use strict';

angular.module('secureauth')
  .service('common', function(domModel) {

    this.getLogoImg = function () {
      var image = angular.element('#LogoImage');
      return domModel.getImageData(image);
    };

    this.getPageHeader = function () {
      var label = angular.element('#lblTop');
      return domModel.getLabelData(label);
    };

    this.getUserLabel = function () {
      var label = angular.element('#UserIDLabel');
      return domModel.getLabelData(label);
    };

    this.getUserLink = function () {
      var link = angular.element('.restart-top');
      return domModel.getLinkData(link);
    };

    this.getUsernameLink = function () {
      var link = angular.element('#ForgotUsernameLink');
      return domModel.getLinkData(link);
    };

    this.getUsernameLink = function () {
      var link = angular.element('#ForgotUsernameLink');
      return domModel.getLinkData(link);
    };

    this.getPasswordLink = function () {
      var link = angular.element('#ForgotPasswordLink');
      return domModel.getLinkData(link);
    };

    this.getLoginLink = function () {
      var link = angular.element('.restart-bottom');
      return domModel.getLinkData(link);
    };

    this.getCopyright = function () {
      var label = angular.element('#CopyRightLabel');
      return domModel.getLabelData(label);
    };

    this.getEulaLink = function () {
      var link = angular.element('#EULALinkButton');
      return domModel.getLinkData(link);
    };

    this.getDisclaimer = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_UserIDView_lblDisclaimer');
      return domModel.getLabelData(label);
    };

  });
