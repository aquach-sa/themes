'use strict';

angular.module('secureauth')
  .directive('accountUpdateLink', function (config, accountUpdate) {

    var accountUpdateLinkController = function () {
      var vm = this;

      angular.extend(vm, {
        redirectLink: accountUpdate.getRedirectLink()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: accountUpdateLinkController,
      controllerAs: 'AccountUpdateLink',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateLink/accountUpdateLink.html',
      bindToController: true
    };
  });
