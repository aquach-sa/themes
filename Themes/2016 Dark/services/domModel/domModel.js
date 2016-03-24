'use strict';

angular.module('secureauth')
  .service('domModel', function () {

    this.getLabelInputData = function (label, input) {
      var data = [];
      label.map(function(i, obj) {
        data[i] = {
          label: {
            id: obj.id,
            text: obj.textContent,
            for: (obj.getAttribute('for') === null || obj.getAttribute('for') === undefined) ? '' : obj.getAttribute('for'),
            title: (obj.getAttribute('title') === null || obj.getAttribute('title') === undefined) ? '' : obj.getAttribute('title')
          }
        };
      }).get();
      input.map(function(i, obj) {
        data[i].input = {
            id: obj.id,
            name: obj.name,
            nodename: obj.nodeName.toLowerCase(),
            check: obj.checked || false,
            disabled: obj.disabled || false,
            text: obj.textContent,
            readonly: (obj.getAttribute('readonly') !== null) ? true : false,
            required: (obj.getAttribute('required') !== null) ? true : false,
            value: (obj.getAttribute('value') === null || obj.getAttribute('value') === undefined) ? '' : obj.getAttribute('value'),
            type: obj.type,
            placeholder: (obj.getAttribute('placeholder') !== null) ? obj.getAttribute('placeholder') : '',
            maxlength: (obj.getAttribute('maxlength') === null || obj.getAttribute('maxlength') === undefined) ? '' : obj.getAttribute('maxlength'),
            minlength: (obj.getAttribute('minlength') === null || obj.getAttribute('minlength') === undefined) ? '' : obj.getAttribute('minlength')
        };
      }).get();
      return data;
    };

    this.getLabelData = function (label) {
      var data = [];
      label.map(function(i, obj) {
        data[i]= {
          label: {
            id: obj.id,
            text: obj.textContent,
            for: (obj.getAttribute('for') === null || obj.getAttribute('for') === undefined) ? '' : obj.getAttribute('for'),
            title: (obj.getAttribute('title') === null || obj.getAttribute('title') === undefined) ? '' : obj.getAttribute('title')
          }
        };
      }).get();
      return data;
    };

    this.getInputData = function (input) {
      var data = [];
      input.map(function(i, obj) {
        data[i] = {
          input: {
            id: obj.id,
            name: obj.name,
            nodename: obj.nodeName.toLowerCase(),
            check: obj.checked || false,
            disabled: obj.disabled || false,
            text: obj.textContent,
            readonly: (obj.getAttribute('readonly') !== null) ? true : false,
            required: (obj.getAttribute('required') !== null) ? true : false,
            value: (obj.getAttribute('value') === null || obj.getAttribute('value') === undefined) ? '' : obj.getAttribute('value'),
            type: obj.type,
            placeholder: (obj.getAttribute('placeholder') !== null) ? obj.getAttribute('placeholder') : '',
            maxlength: (obj.getAttribute('maxlength') === null || obj.getAttribute('maxlength') === undefined) ? '' : obj.getAttribute('maxlength'),
            minlength: (obj.getAttribute('minlength') === null || obj.getAttribute('minlength') === undefined) ? '' : obj.getAttribute('minlength')
          }
        };
      }).get();
      return data;
    };

    this.getButtonData = function (button) {
      var data = [];
      button.map(function(i, obj) {
        data[i] = {
          button: {
            id: obj.id,
            name: obj.name,
            nodename: obj.nodeName.toLowerCase(),
            disabled: obj.disabled || false,
            text: obj.textContent,
            readonly: (obj.getAttribute('readonly') !== null) ? true : false,
            value: (obj.getAttribute('value') === null || obj.getAttribute('value') === undefined) ? '' : obj.getAttribute('value'),
            type: obj.type
          }
        };
      }).get();
      return data;
    };

    this.getLinkData = function (link) {
      var data = [];
      link.map(function(i, obj) {
        data[i] = {
          link: {
            id: obj.id,
            name: obj.name,
            nodename: obj.nodeName.toLowerCase(),
            text: obj.textContent,
            href: obj.getAttribute('href'),
            onclick: obj.getAttribute('onclick')
          }
        };
      }).get();
      return data;
    };

    this.getSelectData = function (select) {
      var data = [];
      select.map(function(i, obj) {
        var option = angular.element(obj).find('option');
        data[i] = {
          select: {
            id: obj.id,
            name: obj.name,
            value: (obj.getAttribute('value') === null || obj.getAttribute('value') === undefined) ? '' : obj.getAttribute('value'),
            nodename: obj.nodeName.toLowerCase(),
          }, 
          options: []
        };
        for (var j = 0; j < option.length; j++) {
          data[i].options.push({
            option: {
              value: (option[j].getAttribute('value') === null || option[j].getAttribute('value') === undefined) ? '' : option[j].getAttribute('value'),
              text: option[j].textContent,
              selected: (option[j].getAttribute('selected') !== null) ? true : false
            }
          });
        }
      }).get();
      return data;
    };

    this.getImageData = function (image) {
      var data = [];
      image.map(function(i, obj) {
        data[i]= {
          image: {
            id: obj.id,
            src: obj.getAttribute('src')
          }
        };
      }).get();
      return data;
    };

    this.getLegendData = function (legend) {
      var data = [];
      legend.map(function(i, obj) {
        data[i]= {
          legend: {
            id: obj.id,
            text: obj.textContent
          }
        };
      }).get();
      return data;
    };

    this.getTextareaData = function (textarea) {
      var data = [];
      textarea.map(function(i, obj) {
        data[i]= {
          textarea: {
            id: obj.id,
            text: obj.textContent,
            readonly: (obj.getAttribute('readonly') !== null) ? true : false
          }
        };
      }).get();
      return data;
    };

  });
