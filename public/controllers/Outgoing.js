
// App.controller('outgoingctrl',function($scope){
// 		$scope.depature='Alex';
// 		$scope.arrival = 'IAD';
// 		$scope.depatureairport = 'Alex';
// 		$scope.departuretime = '3:00';
// 		$scope.arrivalairport = 'IAD';
// 		$scope.arrivaltime = '4:00';
// 		$scope.stops = 0;
// 		$scope.tranzit = 'no stops';

App.controller('outgoingctrl',function($scope,mainSrv){
		// $scope.departure='Alex';
		// $scope.arrival = 'IAD';
		// $scope.departureairport = 'Alex';
		// $scope.departuretime = '3:00';
		// $scope.arrivalairport = 'IAD';
		// $scope.arrivaltime = '4:00';
		// $scope.stops = 0;
		// $scope.tranzit = 'no stops';
		  $scope.flight =mainSrv.getx();

})