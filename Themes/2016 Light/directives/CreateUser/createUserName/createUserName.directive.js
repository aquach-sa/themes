'use strict';

angular.module('secureauth')
  .directive('createUserName', function (config, createUser) {

    var createUserNameController = function () {
      var vm = this;

      angular.extend(vm, {
        nameRequired: false,
        message: false,
        userName: createUser.getUserName(),
        errorMsg: createUser.getErrorMsg()[0],
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onBlur: function (id) {
          var usrName = angular.element('#' + id).val();

          if (usrName.length === 0) {
            vm.nameRequired = true;
          } else {
            vm.onBtnClick('ContentPlaceHolder1_GetUserButton');
          }
        },
        onBtnClick: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        }
      });
    };

    return {
      restrict: 'EA',
      controller: createUserNameController,
      controllerAs: 'CreateUserName',
      templateUrl: config.theme + '/directives/CreateUser/createUserName/createUserName.html',
      bindToController: true
    };
  });
