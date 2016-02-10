'use strict';

angular.module('secureauth')
  .service('kbaRegistrationView', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_lblHeader');
      return domModel.getLabelData(label);
    };

    this.getKbaToggle = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_tcHideAnswer').find('label');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_cbxHideAnswer');
      return domModel.getLabelInputData(label, input);
    };

    this.getkbaQuestionAnswer =function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_container1 tr:gt(1) td:not(:first-child)').find('span');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_container1 tr:gt(1) td:not(:first-child)').find('input');
      return domModel.getLabelInputData(label, input);
    };

    this.getKbaMessage = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_trErrMessage');
      return domModel.getLabelData(label);
    };

    this.getkbaButton = function () {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getkbaAltLink = function () {
      var link = angular.element('#ContentPlaceHolder1_MFALoginControl1_KBARegistrationView_lnkbtnAlternative');
      return domModel.getLinkData(link);
    };
    
});

