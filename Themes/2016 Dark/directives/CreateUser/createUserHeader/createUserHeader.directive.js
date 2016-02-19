'use strict';

angular.module('secureauth')
  .directive('createUserHeader', function (config, createUser) {

    var createUserHeaderController = function () {
      var vm = this;

      angular.extend(vm, {
        headerTxt: createUser.getHeaderTxt()[0],
      });

    };

    return {
      restrict: 'EA',
      controller: createUserHeaderController,
      controllerAs: 'CreateUserHeader',
      templateUrl: config.theme + '/directives/CreateUser/createUserHeader/createUserHeader.html',
      bindToController: true
    };
  });
