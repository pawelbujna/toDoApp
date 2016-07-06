(function() {
  'use strict';
  angular.module('myApp').controller('ControllerFunction', ['$scope', 'serviceFunction', function($scope, serviceFunction) {

    $scope.sendItem = function (val) {
        serviceFunction.addItem(val);
    }

    $scope.dupa = 'dupa'

}]);
})();