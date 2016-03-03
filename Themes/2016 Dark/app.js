'use strict';

angular.module('secureauth', [
  'ui.router',
  'focus-if',
  'angular.vertilize'
])
.config(function ($locationProvider, $compileProvider) {

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|javascript):/);

})
.constant('config', (function () {
  var themeName = angular.element('#ngView').data('theme');
  return {
    theme: themeName,
  };
})())
.run(function($rootScope, $location, $state, $timeout, $window) {
  
  $rootScope.$state = $state;

  var path = document.location.pathname.split('/').pop();
  var serverState;
  var renderState;
  var pathState;

  serverState = angular.element('head').attr('data-view');

  angular.element('span').filter(function() {
    if (this.id.indexOf('ContentPlaceHolder1_MFALoginControl1_') !== -1) {
      var state =  this.id.split('_');
      try {
        renderState = state[state.length - 2];
      } catch (e) {}
    }
  });

  pathState = path.split('.')[0].toLowerCase();

  try {
    if ((serverState === renderState) && (serverState !== undefined)) {
      $state.go(serverState, {}, { location: false });
    } else if (renderState !== undefined) {
      $state.go(renderState, {}, { location: false });
    } else if (pathState !== 'secureauth') {
      $state.go(pathState, {}, { location: false });
    }
  } catch (e) {
    $state.go('UnknownState', {}, { location: false });
  }

  angular.element('#aspnetForm').attr('name', 'mainForm');

  angular.element($window).on('DOMContentLoaded', function() {
    angular.element('#preLoader').fadeOut();
    $timeout(function () {
      angular.element(document).trigger('saReady');
    }, 500);
  });

});