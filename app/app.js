(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'ngAnimate'
    ])
    .value('wArray', {
      data: [],
    });
})();