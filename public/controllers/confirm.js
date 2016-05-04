App.controller('confctrl',function($scope , mainSrv){

<<<<<<< HEAD
  $scope.flight =mainSrv.getx();
  console.log($scope.flight);
  $scope.onclick = function(){
=======
  $scope.x =mainSrv.getx();
  console.log($scope.flight);
>>>>>>> 0fa3658778194b7467203403bcb397907b2881ad

  $scope.flights=x.Flights;

  // $scope.onclick = function(){

  //   mainSrv.setx($scope.flight);
  // };
});
// var x    = require('routes.js');
function populate() {     
  var sel = document.getElementById('myDropdown').classList.toggle("show");
  for(var i = 0; i < cuisines.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = seats[i];
    opt.value = seats[i];
    sel.appendChild(opt);
  }
}