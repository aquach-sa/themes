'use strict';

angular.module('secureauth')
  .service('securePortal', function () {

    this.getPortalSite = function () {
      var link = angular.element('#ContentPlaceHolder1_portalListView').find('a');
      var title = angular.element('#ContentPlaceHolder1_portalListView').find('.portal-link');
      var img = angular.element('#ContentPlaceHolder1_portalListView').find('img');
      var data = [];

      link.map(function(i, obj) {
        data[i] = {
          link: {
            id: obj.id,
            name: obj.name,
            nodename: obj.nodeName.toLowerCase(),
            text: obj.textContent,
            href: obj.getAttribute('href')
          }
        };
      }).get();

      title.map(function(i, obj) {
        data[i].title = {
            id: obj.id,
            text: obj.textContent
        };
      }).get();

      img.map(function(i, obj) {
        data[i].img = {
            id: obj.id,
            src: obj.src
        };
      }).get();
      return data;
    };

  });
