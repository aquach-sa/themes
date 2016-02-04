'use strict';

angular.module('secureauth')
  .service('resetAccount', function (domModel) {

    this.getUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_Label32');
      var input = angular.element('#ContentPlaceHolder1_TextBoxUid');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserStatus = function () {
      var label = angular.element('#ContentPlaceHolder1_AccountStatusLabel');
      return domModel.getLabelData(label);
    };

    this.getUserPass = function () {
      var label = angular.element('#ContentPlaceHolder1_Label1');
      var input = angular.element('#ContentPlaceHolder1_TextBoxPassword1');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserConfirm = function () {
      var label = angular.element('#ContentPlaceHolder1_Label2');
      var input = angular.element('#ContentPlaceHolder1_TextBoxPassword2');
      return domModel.getLabelInputData(label, input);
    };

    this.getResetMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_CompareValidator1');
      return domModel.getLabelData(label);
    };

    this.getSuccessMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelPasswordErr');
      return domModel.getLabelData(label);
    };

    this.getChangeBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonChange');
      return domModel.getButtonData(button);
    };

    this.getUnlockBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonUnlock');
      return domModel.getButtonData(button);
    };

    this.getResetAccountMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelHeaderMsg');
      return domModel.getLabelData(label);
    };

    this.getResetAccountUnlockMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelUnlockErr');
      return domModel.getLabelData(label);
    };



  });
