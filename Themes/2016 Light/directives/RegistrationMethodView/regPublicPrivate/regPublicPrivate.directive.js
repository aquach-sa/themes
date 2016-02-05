'use strict';

angular.module('secureauth')
  .directive('regPublicPrivate', function (config, registrationView) {

    var regPublicPrivateController = function () {
      var vm = this;

      angular.extend(vm, {
        priPubTxt: registrationView.getPriPubTxt()[0],
        priPubModes: registrationView.getPriPubModes(),
        selectMode: function (id) {
          var radioBox = angular.element('#' + id);
          radioBox.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: regPublicPrivateController,
      controllerAs: 'RegPublicPrivate',
      templateUrl: config.theme + '/directives/RegistrationMethodView/regPublicPrivate/regPublicPrivate.html',
      bindToController: true
    };
  });
