App.controller('outgoingctrl', function($scope, mainSrv,$http){
	
	console.log(mainSrv.getx().from);
	$scope.from = mainSrv.getx().from;
	$scope.to = mainSrv.getx().to;

	$http.get('/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin)
	.then(function(response){
		console.log('/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin);
		$scope.flights = response.data;
		console.log(response.data);
	});

});