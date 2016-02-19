'use strict';

angular.module('secureauth')
  .directive('passPublicPrivate', function (config, passwordView) {

    var passPublicPrivateController = function () {
      var vm = this;

      angular.extend(vm, {
        priPubTxt: passwordView.getPriPubTxt()[0],
        priPubModes: passwordView.getPriPubModes(),
        selectMode: function (id) {
          var radioBox = angular.element('#' + id);
          radioBox.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: passPublicPrivateController,
      controllerAs: 'PassPublicPrivate',
      templateUrl: config.theme + '/directives/PasswordView/passPublicPrivate/passPublicPrivate.html',
      bindToController: true
    };
  });
