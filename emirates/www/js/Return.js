App.controller('return',function($scope,mainSrv,$http){
	
	// console.log(mainSrv.getx().from);
	console.log(mainSrv.getx());
	$scope.from = mainSrv.getx().from;
	$scope.to = mainSrv.getx().to;


	$http.get('http://localhost:3000/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin)
	.then(function(response){
		console.log('http://localhost:3000/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin);
		$scope.flights = response.data;
		console.log(response.data);
	});

	console.log('http://localhost:3000/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin);

	$http.get('http://localhost:3000/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin)
	.then(function(response){
		console.log('http://localhost:3000/api/flights/search/'+mainSrv.getx().to+'/'+mainSrv.getx().from+'/'+mainSrv.getx().returnDate+'/'+mainSrv.getx().cabin);
		$scope.returnflights = response.data;
		console.log(response.data);
	});

})