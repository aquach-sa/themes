'use strict';

angular.module('secureauth')
  .service('logOut', function (domModel) {

    this.getLogoutHeader = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelHeader');
      return domModel.getLabelData(label);
    };

    this.getLogoutTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_LabelMsg');
      return domModel.getLabelData(label);
    };

  });
