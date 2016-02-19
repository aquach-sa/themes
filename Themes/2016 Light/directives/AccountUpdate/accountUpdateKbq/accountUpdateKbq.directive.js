'use strict';

angular.module('secureauth')
  .directive('accountUpdateKbq', function (config, accountUpdate) {

    var accountUpdateKbqController = function () {
      var vm = this;

      angular.extend(vm, {
        acctKbqTxt: accountUpdate.getAcctKbqTxt()[0],
        acctKbqCheck: accountUpdate.getAcctKbqCheck(),
        acctKbqQuestion: accountUpdate.getAcctKbqQuestion(),
        acctKbqAnswer: accountUpdate.getAcctKbqAnswer(),
        checkKbq: function (id) {
          var check = angular.element('#' + id);
          check.trigger('click');
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
      controller: accountUpdateKbqController,
      controllerAs: 'AccountUpdateKbq',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateKbq/accountUpdateKbq.html',
      bindToController: true
    };
  });
