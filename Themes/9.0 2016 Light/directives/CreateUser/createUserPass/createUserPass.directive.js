'use strict';

angular.module('secureauth')
  .directive('createUserPass', function (config, createUser) {

    var createUserPassController = function () {
      var vm = this;

      angular.extend(vm, {
        userPass: createUser.getUserPass(),
        userPassConfirm: createUser.getUserConfirm(),
        userPassGenerateBtn: createUser.getUserPassGenerateBtn()[0],
        createBtn: createUser.getCreateBtn()[0],
        createReset: createUser.getCreateReset()[0],
        passOnChange: function (id) {
          var infoVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(infoVal);
        },
        onClick: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        create: function () {
          var req;

          WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$pbSave", "", true, "", "", false, false));

          req = angular.element('#createUser span[style*="visibility: visible"]').siblings('input');

          for (var i = 0; i < req.length; i++) {
            var input = req[i].getAttribute('id');
            angular.element('#' + input + '_UiInput')
              .addClass('ng-invalid-required')
              .attr({
                'required': '',
                'placeholder': 'Required'
              });
          }
        },
        reset: function (id) {
          var button = angular.element('#' + id);
          var input = angular.element('.panel-body').find('input');
          input
            .removeClass('ng-invalid-required')
            .removeAttr('required');
          button.trigger('click');
        },
        generateBtnClick: function () {
          angular.element('#ContentPlaceHolder1_GenerateButton').trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: createUserPassController,
      controllerAs: 'CreateUserPass',
      templateUrl: config.theme + '/directives/CreateUser/createUserPass/createUserPass.html',
      bindToController: true
    };
  });
