'use strict';

angular.module('secureauth')
  .service('accountUpdate', function(domModel) {

    this.getAcctInfo = function () {
      var label = angular.element('#TABLE1').find('tr:not(#ContentPlaceHolder1_TRPIN):not(#ContentPlaceHolder1_TROATHSeed) > td:first-child span');
      var input = angular.element('#TABLE1').find('tr:not(#ContentPlaceHolder1_TRPIN):not(#ContentPlaceHolder1_TROATHSeed) > td input');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctInfoPin = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelPIN');
      var input = angular.element('#ContentPlaceHolder1_TextBoxPIN');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctInfoPinCheck = function () {
      var label = angular.element('#ContentPlaceHolder1_TRPIN').find('label');
      var input = angular.element('#ContentPlaceHolder1_PINCB');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctInfoOath = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelOATHSeed');
      var input = angular.element('#ContentPlaceHolder1_OATHSeedTB');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctKbqTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelKB');
      return domModel.getLabelData(label);
    };

    this.getAcctKbqCheck = function () {
      var label = angular.element('#ContentPlaceHolder1_CheckBox1').siblings('label');
      var input = angular.element('#ContentPlaceHolder1_CheckBox1');
      return domModel.getLabelInputData(label, input);
    };

    this.getAcctKbqQuestion = function () {
      var select = angular.element('#ContentPlaceHolder1_TRKBQA').find('select');
      return domModel.getSelectData(select);
    };

    this.getAcctKbqAnswer = function () {
      var input = angular.element('#ContentPlaceHolder1_TRKBQA').find('input:not(:first)');
      return domModel.getInputData(input);
    };

    this.getAcctHelpdeskTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_labelChallenge');
      return domModel.getLabelData(label);
    };

    this.getAcctHelpdeskQuestion = function () {
      var select = angular.element('#ContentPlaceHolder1_DropDownList7');
      return domModel.getSelectData(select);
    };

    this.getAcctHelpdeskAnswer = function () {
      var input = angular.element('#ContentPlaceHolder1_txtKBA7');
      return domModel.getInputData(input);
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

    this.getPushTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelPNToken');
      return domModel.getLabelData(label);
    };

    this.getPushDevice = function () {
      var label = angular.element('#ContentPlaceHolder1_TreeViewPNTokens').find('> table span');
      var input = angular.element('#ContentPlaceHolder1_TreeViewPNTokens').find('> table input');
      return domModel.getLabelInputData(label, input);
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

    this.getUpdateBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_pbSave');
      return domModel.getButtonData(button);
    };

    this.getResetBtn = function () {
      var button = angular.element('#ContentPlaceHolder1_pbReset');
      return domModel.getButtonData(button);
    };

    this.getRedirectLink = function () {
      var link = angular.element('#ContentPlaceHolder1_pbContinue');
      return domModel.getLinkData(link);
    };

    this.getSocialLoginHeader = function () {
      var label = angular.element('#ContentPlaceHolder1_pnlSocial').find('h3');
      return domModel.getLabelData(label);
    };

    this.getSocialLogin = function () {
      var link = angular.element('#ContentPlaceHolder1_pnlSocial').find('a');
      return domModel.getLinkData(link);
    };

    this.getAccountUpdateMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_lblSuccessMsg');
      return domModel.getLabelData(label);
    };

    this.getAccountErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_lblErrorMsg');
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
    
  });
