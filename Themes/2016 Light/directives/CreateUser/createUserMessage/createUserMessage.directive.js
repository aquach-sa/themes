'use strict';

angular.module('secureauth')
  .directive('createUserMessage', function (config, createUser) {

    var createUserMessageController = function () {
      var vm = this;

      angular.extend(vm, {
        userNameMsg: createUser.getUserNameMsg()[0],
        successMsg: createUser.getSuccessMsg()[0],
        errorMsg: createUser.getErrorMsg()[0],
        validatorMsg: createUser.getValidatorMsg()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: createUserMessageController,
      controllerAs: 'CreateUserMessage',
      templateUrl: config.theme + '/directives/CreateUser/createUserMessage/createUserMessage.html',
      bindToController: true
    };
  });
