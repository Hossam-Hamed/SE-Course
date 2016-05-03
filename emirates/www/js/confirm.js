angular.module('App')
.controller('confctrl',function($scope , mainSrv){

  $scope.flight =mainSrv.getx();
  console.log(flight.from);
  $scope.onclick = function(){

    mainSrv.setx($scope.flight);
    console.log(flight.form);
  };
});
// var x    = require('routes.js');
