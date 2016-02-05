'use strict';

angular.module('secureauth')
  .service('registrationView', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_lblHeader1');
      return domModel.getLabelData(label);
    };

    this.getRegMethod = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_containerRegMethods').find('tr > td:first-child span');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_containerRegMethods').find('tr > td:first-child input');
      return domModel.getLabelInputData(label, input);
    };

    this.getRegMethodOption = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_containerRegMethods').find('tr');
      var method = this.getRegMethod();
      label.map(function(i, obj) {
        var option = angular.element(obj).find('> td:not(:first-child) span');
        method[i].options = [];
        for (var j = 0; j < option.length; j++) {
          var label = angular.element(option[j]).children('label');
          var input = angular.element(option[j]).children('input');
          method[i].options.push({
            id: label.attr('id'),
            text: label.text(),
            for: (label.attr('for') === null || label.attr('for') === undefined) ? '' : label.attr('for'),
            name: input.attr('name'),
            check: (input.attr('checked') !== undefined) ? true : false,
          });
        }
      }).get();
      return method;
    };

    this.getregMethodBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_btnSubmit');
      return domModel.getButtonData(button);
    };

    this.getPriPubModes = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_rbKioskPublic_label, #ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_rbKioskPrivate_label');
      var input = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_rbKioskPublic, #ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_rbKioskPrivate');
      return domModel.getLabelInputData(label, input);
    };

    this.getPriPubTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_lblKiosk');
      return domModel.getLabelData(label);
    };

    this.getErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_RegistrationMethodView_lblErrMessage');
      return domModel.getLabelData(label);
    };
    
});

