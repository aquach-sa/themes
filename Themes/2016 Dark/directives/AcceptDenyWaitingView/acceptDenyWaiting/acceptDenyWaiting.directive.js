'use strict';

angular.module('secureauth')
  .directive('acceptDenyWaiting', function (config, acceptDeny) {

    var acceptDenyWaitingController = function () {
      var vm = this;

      angular.extend(vm, {
        spinner: true,
        headerTxt: acceptDeny.getHeaderTxt()[0],
        altLink: acceptDeny.getAltLink()[0],
        showSpinner: function () {
          var spin = angular.element('.accept-deny.spinner');

          if (spin.length > 0) {
            vm.spinner = true;
          } else {
            vm.spinner = false;
          }
        }
      });
      
    };

    return {
      restrict: 'EA',
      controller: acceptDenyWaitingController,
      controllerAs: 'AcceptDenyWaiting',
      templateUrl: config.theme + '/directives/AcceptDenyWaitingView/acceptDenyWaiting/acceptDenyWaiting.html',
      bindToController: true
    };
  });
