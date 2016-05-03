angular.module('App')
.controller('confctrl',function($scope , mainSrv){

  $scope.flight =mainSrv.getx();
  // console.log($scope.flight.from);
  $scope.onclick = function(){

    mainSrv.setx($scope.flight);
    // console.log($scope.flight.form);
  };
});
// var x    = require('routes.js');
