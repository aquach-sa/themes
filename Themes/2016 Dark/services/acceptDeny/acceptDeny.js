'use strict';

angular.module('secureauth')
  .service('acceptDeny', function (domModel) {

    this.getHeaderTxt = function() {
      var label = angular.element('#ContentPlaceHolder1_MFALoginControl1_AcceptDenyWaitingView_lblHeader');
      return domModel.getLabelData(label);
    };

    this.getAltLink = function() {
      var link = angular.element('#lnkbtnAlternative');
      return domModel.getLinkData(link);
    };
    
});

