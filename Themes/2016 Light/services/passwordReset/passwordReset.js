'use strict';

angular.module('secureauth')
  .service('passwordReset', function (domModel) {

    this.getUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_Label4');
      var input = angular.element('#ContentPlaceHolder1_TextBoxUid');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserPassCurrent = function () {
      var label = angular.element('#ContentPlaceHolder1_Label3');
      var input = angular.element('#ContentPlaceHolder1_OldPasswordTB');
      return domModel.getLabelInputData(label, input);
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

    this.getConfirmMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_RequiredFieldValidator1');
      return domModel.getLabelData(label);
    };

    this.getReqrMsg = function () {
      var label = angular.element('#passResetRequirement').find('tr span');
      return domModel.getLabelData(label);
    };

    this.getPasswordMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelHeaderMsg');
      return domModel.getLabelData(label);
    };

    this.getChangeBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonSubmit');
      return domModel.getButtonData(button);
    };

    this.getStatusLabel = function () {
      var label = angular.element('#ContentPlaceHolder1_AccountStatusLabel');
      return domModel.getLabelData(label);
    };

    this.getStatusText = function () {
      var label = angular.element('#ContentPlaceHolder1_AccountStatusLabel2');
      return domModel.getLabelData(label);
    };

    this.getPassUnlock = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonUnlock');
      return domModel.getButtonData(button);
    };

    this.getStatusError = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelUnlockErr');
      return domModel.getLabelData(label);
    };

  });
