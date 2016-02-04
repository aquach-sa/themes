'use strict';

angular.module('secureauth')
  .directive('accountUpdateHelpdesk', function (config, accountUpdate) {

    var accountUpdateHelpdeskController = function () {
      var vm = this;

      angular.extend(vm, {
        acctHelpdeskTxt: accountUpdate.getAcctHelpdeskTxt()[0],
        acctHelpdeskQuestion: accountUpdate.getAcctHelpdeskQuestion(),
        acctHelpdeskAnswer: accountUpdate.getAcctHelpdeskAnswer()[0],
        checkHelpdesk: function () {
          var check = angular.element('#ContentPlaceHolder1_CheckBox1');
          check.trigger('click');
        },
        onHelpdeskChange: function (id) {
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
      controller: accountUpdateHelpdeskController,
      controllerAs: 'AccountUpdateHelpdesk',
      templateUrl: config.theme + '/directives/AccountUpdate/accountUpdateHelpdesk/accountUpdateHelpdesk.html',
      bindToController: true
    };
  });
