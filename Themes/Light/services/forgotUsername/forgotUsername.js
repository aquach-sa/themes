'use strict';

angular.module('secureauth')
  .service('forgotUsername', function (domModel) {

    this.getUserName = function () {
      var label = angular.element('#ContentPlaceHolder1_Label1');
      return domModel.getLabelData(label);
    };

  });
