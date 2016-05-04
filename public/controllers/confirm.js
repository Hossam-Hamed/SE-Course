App.controller('confctrl',function($scope , mainSrv){


  $scope.x =mainSrv.getx();
  console.log($scope.flight);
  $scope.flights=x.Flights;

  // $scope.onclick = function(){

  //   mainSrv.setx($scope.flight);
  // };
});
// var x    = require('routes.js');
