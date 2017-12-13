(function() {
  'use strict';

  var app = angular.module('app', ['ngAnimate']);

  app.value('wArray', {
    data: [],
  });

  app.component('weatherComp', {
    bindings: {
      city: '<'
    },
    templateUrl: 'template/city.html',
    controller: cityCtrl,
  });



  function cityCtrl($http, $q, wArray) {

    var vm = this;
    vm.city = '';
    vm.data = wArray.data;
    vm.message = "";
    vm.show = false;
    vm.showBar = true;

    vm.open = function() {
      vm.showBar = !vm.showBar;
    }

    vm.remove = function(array, index) {
      vm.show = false;
      array.splice(index, 1);
    }
    vm.focus = function(city) {
      vm.show = false;
    }

    vm.addthatcity = function() {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + vm.city + '&APPID=2e075451ba6f2bbf745845d0afa5b330&units=metric';
      var ville = {};

      $http.get(url)
        .then(function(response) {
          var weather = response.data.weather[0].main;
          var ville = {
            name: response.data.name,
            temp: Math.round(response.data.main.temp),
            ciel: "icon-" + weather
          };

          var found = false;

          if (wArray.data.length === 0) {
            wArray.data.push(ville);
          } else {
            for (var i = 0; i < wArray.data.length; i++) {
              if (wArray.data[i].name == ville.name) {
                found = true;
                vm.show = true;
                vm.message = "Cette ville est déja selectionnée";
                break;
              }
            }
            if (found === false) {
              vm.show = false;
              wArray.data.push(ville);
            }
          }
          return response.data;
        }, function(response) {
          vm.show = true;
          vm.message = "Il n'y a pas de résultat pour cette demande";
          return $q.reject(response.data);
        })
    };

  };

}());