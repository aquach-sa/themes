'use strict';

angular.module('secureauth')
  .directive('createUserInfo', function (config, createUser) {

    var createUserInfoController = function () {
      var vm = this;

      angular.extend(vm, {
        createUsrFirstName: createUser.getCreateUsrFirstName(),
        createUsrLastName: createUser.getCreateUsrLastName(),
        createUsrGroupTxt: createUser.getCreateUsrGroupTxt()[0],
        createUsrGroup: createUser.getCreateUsrGroup(),
        createUsrPhone: createUser.getCreateUsrPhone(),
        createUsrEmail: createUser.getCreateUsrEmail(),
        createUsrAux: createUser.getCreateUsrAux(),
        createKbqTxt: createUser.getCreateKbqTxt()[0],
        createKbqCheck: createUser.getCreateKbqCheck(),
        createKbqQuestion: createUser.getCreateKbqQuestion(),
        createKbqAnswer: createUser.getCreateKbqAnswer(),
        createHelpDeskTxt: createUser.getCreateHelpDeskTxt()[0],
        createHelpDeskQuestion: createUser.getCreateHelpDeskQuestion(),
        createHelpDeskAnswer: createUser.getCreateHelpDeskAnswer(),
        checkKbq: function () {
          var check = angular.element('#ContentPlaceHolder1_CheckBox1');
          check.trigger('click');
        },
        onChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onKbqChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onSelect: function (id) {
          var newSelect = angular.element('#' + id + '_UiInput');
          var newSelectVal = newSelect.val();
          var select = angular.element('#' + id);
          select.val(newSelectVal).trigger('change');
        }
      });
    };

    return {
      restrict: 'EA',
      controller: createUserInfoController,
      controllerAs: 'CreateUserInfo',
      templateUrl: config.theme + '/directives/CreateUser/createUserInfo/createUserInfo.html',
      bindToController: true
    };
  });
