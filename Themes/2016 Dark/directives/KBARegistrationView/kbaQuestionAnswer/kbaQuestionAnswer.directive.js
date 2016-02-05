'use strict';

angular.module('secureauth')
  .directive('kbaQuestionAnswer', function (config, kbaRegistrationView) {

    var kbaQuestionAnswerController = function () {
      var vm = this;

      angular.extend(vm, {
        kbaQuestionAnswer: kbaRegistrationView.getkbaQuestionAnswer(),
        qaOnChange: function (id) {
          var answerVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(answerVal);
        }
      });

    };

    return {
      restrict: 'EA',
      controller: kbaQuestionAnswerController,
      controllerAs: 'KbaQuestionAnswer',
      templateUrl: config.theme + '/directives/KBARegistrationView/kbaQuestionAnswer/kbaQuestionAnswer.html',
      bindToController: true
    };
  });
