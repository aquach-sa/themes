'use strict';

angular.module('secureauth')
  .service('oidcAuthorized', function (domModel) {
    
    this.getOidcAuthTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_pnlDefault').find('.centerit');
      return domModel.getLabelData(label);
    };

    this.getOidcAuthButton = function () {
      var input = angular.element('#ContentPlaceHolder1_pnlDefault').find('input');
      return domModel.getInputData(input);
    };

    this.getOidcErrorMsg = function () {
      var label = angular.element('#ContentPlaceHolder1_pnlError').find('p');
      return domModel.getLabelData(label);
    };

    this.getOidcRevokeTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_pnlConsentManagement').find('.centerit:eq(0)');
      return domModel.getLabelData(label);
    };

    this.getOidcRevokeButton = function () {
      var input = angular.element('#ContentPlaceHolder1_btnUpdateConsent');
      return domModel.getInputData(input);
    };

    this.getOidcClientTableTh = function () {
      var label = angular.element('#ContentPlaceHolder1_pnlConsentManagement').find('th');
      return domModel.getLabelData(label);
    };

    this.getOidcClientTableBody = function () {
      var entry = angular.element('#ContentPlaceHolder1_pnlConsentManagement tbody').find('tr');
      var data = [];

      Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
      };

      entry.map(function(i, obj) { 
        var revoke = angular.element(obj).find('td:eq(0) input');
        var client = angular.element(obj).find('td:eq(1)');
        var permission = angular.element(obj).find('td:eq(2)');

        var item = {
          check: {
            id: revoke.attr('id'),
            type: revoke.attr('type'),
          },
          name: {
            text: client.text()
          },
          scope: {
            text: permission.text(),
          }
        };

        data.insert(i, item);
      }).get();

      return data;

    };

  });
