'use strict';

angular.module('secureauth')
  .service('manageAccount', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_Label3');
      return domModel.getLabelData(label);
    };

    this.getUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelUserID');
      var input = angular.element('#ContentPlaceHolder1_TextBoxUserID');
      return domModel.getLabelInputData(label, input);
    };

    this.getUserNameBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonGetUser');
      return domModel.getButtonData(button);
    };

    this.getNoUsername = function () {
      var label = angular.element('#ContentPlaceHolder1_GetUserLabel');
      return domModel.getLabelData(label);
    };

    this.getAcctstatus = function () {
      var label = angular.element('#ContentPlaceHolder1_PasswordTR').find('span');
      return domModel.getLabelData(label);
    };

    this.getStatusBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_PasswordTR').find('input');
      return domModel.getButtonData(button);
    };

    this.getAcctInfo = function () {
      var label = angular.element('#userInfoTable').find('tr:not(:first-child) span');
      var input = angular.element('#userInfoTable').find('tr:not(:first-child) input');
      return domModel.getLabelInputData(label, input);
    };

    this.getKbaCheck = function () {
      var label = angular.element('#ContentPlaceHolder1_TRClearKBA').find('span');
      var input = angular.element('#ContentPlaceHolder1_CheckBoxClearKBA');
      return domModel.getLabelInputData(label, input);
    };

    this.getKbaQuestion = function () {
      var label = angular.element('#ContentPlaceHolder1_Tr4').find('span');
      return domModel.getLabelData(label);
    };

    this.getKbaAnswer = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelCA');
      var input = angular.element('#ContentPlaceHolder1_TextBoxChallengeAnswer');
      return domModel.getLabelInputData(label, input);
    };

    this.getCertCount = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelCertCount');
      var input = angular.element('#ContentPlaceHolder1_TextBoxCertCount');
      return domModel.getLabelInputData(label, input);
    };

    this.getCertDateTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_TRCerRevField, #ContentPlaceHolder1_TRCerRevFieldFinePrint').find('span');
      return domModel.getLabelData(label);
    };

    this.getCertDate = function () {
      var label = angular.element('#ContentPlaceHolder1_TRCerRevField').find('input');
      return domModel.getInputData(label);
    };

    this.getCertResetBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonCertRevoke');
      return domModel.getButtonData(button);
    };

    this.getMobileCount = function () {
      var label = angular.element('#ContentPlaceHolder1_Label7');
      var input = angular.element('#ContentPlaceHolder1_TextBoxMobileCount');
      return domModel.getLabelInputData(label, input);
    };

    this.getMobileDateTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_TR2, #ContentPlaceHolder1_TRCerMobileFinePrint').find('span');
      return domModel.getLabelData(label);
    };

    this.getMobileDate = function () {
      var input = angular.element('#ContentPlaceHolder1_TR2').find('input');
      return domModel.getInputData(input);
    };

    this.getMobileResetTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_Label33');
      return domModel.getLabelData(label);
    };

    this.getMobileResetBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonRevokeMobile');
      return domModel.getButtonData(button);
    };

    this.getdDpTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelDFP');
      return domModel.getLabelData(label);
    };

    this.getDfpDevice = function () {
      var label = angular.element('#ContentPlaceHolder1_TreeViewDFPs').find('> table span');
      var input = angular.element('#ContentPlaceHolder1_TreeViewDFPs').find('> table input');
      return domModel.getLabelInputData(label, input);
    };

    this.getDfpDeviceLog = function () {
      var label = angular.element('#ContentPlaceHolder1_TreeViewDFPs').find('> div');
      var device = this.getDfpDevice();      
      label.map(function(i, obj) {
        var log = angular.element(obj).children('table').find('span');
        device[i].logs = [];
        for (var j = 0; j < log.length; j++) {
          device[i].logs.push(log[j].textContent);
        }
      }).get();
      return device;
    };

    this.getDfpDeviceRestBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonRevokeAllDFPs');
      return domModel.getButtonData(button);
    };

    this.getPushTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelPNToken');
      return domModel.getLabelData(label);
    };

    this.getPushDevice = function () {
      var label = angular.element('#ContentPlaceHolder1_TreeViewPNTokens').find('> table span');
      var input = angular.element('#ContentPlaceHolder1_TreeViewPNTokens').find('> table input');
      return domModel.getLabelInputData(label, input);
    };

    this.getPushDeviceRestBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtoRemoveAllPNTokens');
      return domModel.getButtonData(button);
    };

    this.getOtpTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelOATHToken');
      return domModel.getLabelData(label);
    };

    this.getOtpDevice = function () {
      var label = angular.element('#ContentPlaceHolder1_TreeViewOATHTokens').find('> table span');
      var input = angular.element('#ContentPlaceHolder1_TreeViewOATHTokens').find('> table input');
      return domModel.getLabelInputData(label, input);
    };

    this.getOtpDeviceRestBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonRemoveAllOATHTokens');
      return domModel.getButtonData(button);
    };

    this.getRestAllBtn =function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonRevokeAll');
      return domModel.getButtonData(button);
    };

    this.getMessage = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelMsg');
      return domModel.getLabelData(label);
    };

    this.getUpdateBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonSave');
      return domModel.getButtonData(button);
    };

    this.getNewPassword = function () {
      var label = angular.element('#ResetPasswordContainer').find('table tr:eq(0) span');
      var input = angular.element('#ResetPasswordContainer').find('table tr:eq(0) input');
      return domModel.getLabelInputData(label, input);
    };

    this.getConfirmPassword = function () {
      var label = angular.element('#ResetPasswordContainer').find('table tr:eq(1) span');
      var input = angular.element('#ResetPasswordContainer').find('table tr:eq(1) input');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctPassMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_PasswordResetLabel');
      return domModel.getLabelData(label);
    };

    this.getAcctPassCloseBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_CancelResetPasswordModalButton');
      return domModel.getButtonData(button);
    };

    this.getAcctPassResetBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ResetPasswordModalButton');
      return domModel.getButtonData(button);
    };

    this.getErrorText = function () {
      var label = angular.element('#ContentPlaceHolder1_CompareValidator1');
      return domModel.getLabelData(label);
    };

    this.getNewPin = function () {
      var label = angular.element('#ContentPlaceHolder1_ResetPINUpdatePanel').find('table tr:eq(0) span');
      var input = angular.element('#ContentPlaceHolder1_ResetPINUpdatePanel').find('table tr:eq(0) input');
      return domModel.getLabelInputData(label, input);
    };

    this.getConfirmPin = function () {
      var label = angular.element('#ContentPlaceHolder1_ResetPINUpdatePanel').find('table tr:eq(1) span');
      var input = angular.element('#ContentPlaceHolder1_ResetPINUpdatePanel').find('table tr:eq(1) input');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctPassMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_PasswordResetLabel');
      return domModel.getLabelData(label);
    };

    this.getAcctPinCloseBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_CancelResetPINModalButton');
      return domModel.getButtonData(button);
    };

    this.getAcctPinResetBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_ResetPINModalButton');
      return domModel.getButtonData(button);
    };

    this.getPinErrorText = function () {
      var label = angular.element('#ContentPlaceHolder1_CompareValidator2');
      return domModel.getLabelData(label);
    };

    this.getSymantecHeader = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelVIP');
      return domModel.getLabelData(label);
    };

    this.getSymantecTableTh = function () {
      var label = angular.element('#ContentPlaceHolder1_GridViewVIP').find('th');
      return domModel.getLabelData(label);
    };

    this.getSymantecTableEntry = function () {
      var entry = angular.element('#ContentPlaceHolder1_GridViewVIP > tbody').find('tr:not(:last-child):gt(0)');
      var data = [];

      Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
      };

      entry.map(function(i, obj) {
        var del = angular.element(obj).find('a:eq(0)');
        var edit = angular.element(obj).find('a:eq(1)');
        var credential = angular.element(obj).find('span:eq(0)');
        var friendly = angular.element(obj).find('span:eq(1)');

        if (friendly.length === 0) {
          friendly = angular.element(obj).find('input');
        }

        var item = {
          link: {
            del: {
              text: del.text(),
              href: del.attr('href')
            },
            edit: {
              text: edit.text(),
              href: edit.attr('href')
            },
          },
          cred: {
            text: credential.text()
          },
          name: {
            id: friendly.attr('id'),
            text: friendly.text(),
            node: friendly[0].tagName.toLowerCase()
          }
        };

        data.insert(i, item);
      }).get();

      return data;
    };

    this.getSymantecTableLink = function () {
      var link = angular.element('#ContentPlaceHolder1_GridViewVIP_lnkAdd');
      return domModel.getLinkData(link);
    };

    this.getSymantecTableCred = function () {
      var input = angular.element('#ContentPlaceHolder1_GridViewVIP_txtNewVIPCredentialId');
      return domModel.getInputData(input);
    };

    this.getSymantecTableName = function () {
      var input = angular.element('#ContentPlaceHolder1_GridViewVIP_txtNewVIPCredFriendlyName');
      return domModel.getInputData(input);
    };

    this.getSymantecButton = function () {
      var button = angular.element('#ContentPlaceHolder1_ButtonRemoveAllVIPCredentials');
      return domModel.getButtonData(button);
    };

    this.getPinValidationMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_revPIN');
      return domModel.getLabelData(label);
    };

  });
