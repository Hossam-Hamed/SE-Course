App.controller('outgoingctrl', function($scope, mainSrv){
	x= mainSrv.getx();
	temp = mainSrv.get();
	x.depatutreDate=moment(x.depatutreDate).format('L');
	console.log(temp.data);
	$scope.flights = temp.data;
	$scope.from = x.from;
	$scope.to = x.to;
	

	
	$scope.choose=function(flight){

		//get cost 
		// x.cost=flight.cost;
		x.outgoingFlightId=flight._id;
		x.aircraft=flight.aircraft;
		x.duration=flight.duration;
		x.flightNumber=flight.flightNumber;
		console.log(mainSrv.getx());
		//get OutgoingId
		//set them in mainSrv
	}


	
});