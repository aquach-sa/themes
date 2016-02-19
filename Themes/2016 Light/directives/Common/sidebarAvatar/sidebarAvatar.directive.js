'use strict';

angular.module('secureauth')
  .directive('sidebarAvatar', function (config) {

    var sidebarAvatarController = function () {
      var vm = this;

      angular.extend(vm, {
        imgPath: '',
        getImgPath: function () {
          var url = document.location.pathname.split('/')[1];
          vm.imgPath = url;
        }
      });

    };

    return {
      restrict: 'EA',
      controller: sidebarAvatarController,
      controllerAs: 'SidebarAvatar',
      templateUrl: config.theme + '/directives/Common/sidebarAvatar/sidebarAvatar.html',
      bindToController: true
    };
  });
