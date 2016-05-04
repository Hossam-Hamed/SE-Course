App.controller('returnctrl',function($scope,mainSrv){
	$scope.flight =mainSrv.getx();
	x= mainSrv.getx();
	temp = mainSrv.get();
	x.depatutreDate=moment(x.depatutreDate).format('L');
	console.log(temp.returnFlights);
	$scope.flights = temp.outgoingFlights;
	$scope.returnflights = temp.returnFlights;
	$scope.from = x.from;
	$scope.to = x.to;
	$scope.flag1=false;
	$scope.flag2=false;
	$scope.ref;

	$scope.choose=function(flight,n){
		if (n==0) {

			x.outgoingFlightId=flight._id;
			x.flights[0].aircraft=flight.aircraft;
			x.flights[0].duration=flight.duration;
			x.flights[0].flightNumber=flight.flightNumber;
			$scope.flag1=true;
		// console.log(mainSrv.getx());

	} else if(n==1){

		//get cost 
		//get returnId
		//set them in mainSrv
		x.flights[1].returnFlightId=flight._id;
		x.flights[1].aircraft=flight.aircraft;
		x.flights[1].duration=flight.duration;
		x.flights[1].flightNumber=flight.flightNumber;
		$scope.flag2=true;
		console.log(mainSrv.getx());

	}

}


		$scope.continue= function(){
		
		if ($scope.flag2&&$scope.flag1) {
				$scope.ref="#/choose";
		}
		else{
			alert("choose ur 2 flights correctly ya 7abibi albi :/");
		}

		}

})


// App.controller('return',function($scope,mainSrv,$http){
	
// 	console.log(mainSrv.getx().from);
// 	$scope.from = mainSrv.getx().from;
// 	$scope.to = mainSrv.getx().to;


// 	$http.get('/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin)
// 	.then(function(response){
// 		console.log('/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin);
// 		$scope.flights = response.data;
// 		console.log(response.data);
// 	});

// 	console.log('/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin);

// 	$http.get('/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin)
// 	.then(function(response){
// 		console.log('/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin);
// 		$scope.returnflights = response.data;
// 		console.log(response.data);
// 	});

// })