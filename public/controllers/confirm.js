
App.controller('confctrl',function($scope , mainSrv){
// <<<<<<< HEAD
//  //  $scope.fromData= {};
//  // // var data = require('../../dummydata/flight.json');
//  //  confctrlsrv.getinfo().then(function(data){
//     $scope.arrival = "IAD"
//     $scope.arrivalTime = "3:00"
//     $scope.depature = "alex";
//     $scope.depatureTime = "4:00"
//     $scope.areoplane = "airbus";
//     $scope.snaks = "lunch";
//     $scope.seat = "2b";
//     $scope.class = "economy";
//     $scope.distance = "100 mile";
//     $scope.date ="22/3/2015";



$scope.goBack = function() {
 $window.history.back();

};


$scope.flight =mainSrv.getx();
var x    = require('routes.js');
$scope.onclick = function(){

  mainSrv.setx($scope.flight);
};

});

function populate() {     
    var sel = document.getElementById('myDropdown').classList.toggle("show");
    for(var i = 0; i < cuisines.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = seats[i];
        opt.value = seats[i];
        sel.appendChild(opt);
    }
}

