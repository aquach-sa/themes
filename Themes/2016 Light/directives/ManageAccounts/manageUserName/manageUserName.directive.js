'use strict';

angular.module('secureauth')
  .directive('manageUserName', function (config, manageAccount) {

    var manageUserNameController = function () {
      var vm = this;

      angular.extend(vm, {
        username: '',
        userName: manageAccount.getUserName(),
        onUsernameChnage: function (id) {
          var uname = angular.element('#' + id);
          uname.val(vm.username);
        },
        getUsername: function () {
          vm.username = vm.userName[0].input.value;
        },
        userNameBtn: manageAccount.getUserNameBtn()[0],
        noUsername: manageAccount.getNoUsername()[0]
      });

    };

    return {
      restrict: 'EA',
      controller: manageUserNameController,
      controllerAs: 'ManageUserName',
      templateUrl: config.theme + '/directives/ManageAccounts/manageUserName/manageUserName.html',
      bindToController: true
    };
  });
