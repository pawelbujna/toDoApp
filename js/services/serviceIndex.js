(function() {
  'use strict';
  angular.module('myApp').service('servi ceFunction', ['$http', function($http) {

    function addItem (val) {
        console.log("dupa" + val);
    }

  }]);
})();