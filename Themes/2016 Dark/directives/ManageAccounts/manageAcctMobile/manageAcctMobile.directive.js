'use strict';

angular.module('secureauth')
  .directive('manageAcctMobile', function (config, manageAccount) {

    var manageAcctMobileController = function () {
      var vm = this;

      angular.extend(vm, {
        mobileCount: manageAccount.getMobileCount(),
        mobileDateTxt: manageAccount.getMobileDateTxt(),
        mobileDate: manageAccount.getMobileDate(),
        mobileResetBtn: manageAccount.getMobileResetBtn()[0],
        mobileResetTxt: manageAccount.getMobileResetTxt()[0],
        onChange: function (id) {
          var certVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(certVal);
        },
        resetBtn: function () {
          var button = angular.element('#ContentPlaceHolder1_ButtonRevokeMobile');
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: manageAcctMobileController,
      controllerAs: 'ManageAcctMobile',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctMobile/manageAcctMobile.html',
      bindToController: true
    };
  });
