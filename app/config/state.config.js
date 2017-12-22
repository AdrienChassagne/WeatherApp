(function() {
  'use strict';

  angular
    .module('app')
    .config(
      function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('/', {
            url: '/',
            templateUrl: 'components/city/city.html',
            controller: 'cityCtrl as cityCtrl',
          })
          .state('details', {
            url: '/details',
            templateUrl: "components/details/details.html",
            controller: 'detailsCtrl as detailsCtrl',
            params: {
              city: null
            }

          });
      }
    )
})();