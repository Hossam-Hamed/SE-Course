// App
// .controller('out',function($scope,Return){
//  Return.getinfo().success(function(outs){
//  $scope.out = outs;
//  $scope.hours1 = $scope.out.hr1;
//   $scope.hours2 = $scope.out.hr2;
//    $scope.hours3 = $scope.out.hr3;
//    $scope.hours4 = $scope.out.hr4;
//    $scope.hours5 = $scope.out.hr5;
//    $scope.hours6 = $scope.out.hr6;
//    $scope.hours7 = $scope.out.hr7;
//    $scope.hours8 = $scope.out.hr8;
//    $scope.hours9 = $scope.out.hr9;
//    $scope.hours10 = $scope.out.hr10;
//  $scope.depature = $scope.out.dep;
//  $scope.minutes = $scope.out.min;
//  $scope.date8 = $scope.out.date8;
//  $scope.date9 = $scope.out.date9;
// $scope.date10= $scope.out.date10;
// $scope.date11= $scope.out.date11;
// $scope.date12= $scope.out.date12;
// $scope.date13= $scope.out.date13;
// $scope.date14= $scope.out.date14;
//  $scope.arr = $scope.out.arrival;
//  $scope.cost1 = $scope.out.cost1;
//  $scope.cost2 = $scope.out.cost2;
//  $scope.cost3 = $scope.out.cost3;
//  $scope.cost4 = $scope.out.cost4;
//  $scope.cost5 = $scope.out.cost5;
//  $scope.cost6 = $scope.out.cost6;
//  $scope.cost7 = $scope.out.cost7;
//  $scope.cost8 = $scope.out.cost8;
//  $scope.cost9 = $scope.out.cost9;
//  $scope.stop = $scope.out.stop;
//  $scope.stop1 = $scope.out.stop1;
//  })

// })
// .factory('Return',function($http){


// return {
// 	getinfo : function(){

// 		return $http.get('../partials/out.json');
// 	}
// }
// })
App.controller('return',function($scope){
    $scope.departure='IAD';
    $scope.arrival = 'Alex';
    $scope.departureairport = 'Alex';
    $scope.departuretime = '3:00';
    $scope.arrivalairport = 'IAD';
    $scope.arrivaltime = '4:00';
    $scope.stops = 0;
    $scope.tranzit = 'no stops';
})