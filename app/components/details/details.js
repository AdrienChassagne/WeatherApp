(function() {
  'use strict';

  angular
    .module('app')
    .component('detailsComp', {
      templateUrl: 'components/details/details.html',
      controller: detailsCtrl,
      controllerAs: 'detailsCtrl'
    })
    .controller('detailsCtrl', detailsCtrl)

  function detailsCtrl($stateParams) {

    var vm = this;
    vm.city = $stateParams.city;
  };
})();