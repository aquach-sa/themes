'use strict';

angular.module('secureauth')
  .service('browserRegFP', function (domModel) {

    this.getHeaderTxt = function () {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_MFABrowserRegistrationFPView_lblHeader');
      return domModel.getLabelData(label);
    };

  });
