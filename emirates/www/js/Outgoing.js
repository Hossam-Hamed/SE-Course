
App.controller('outgoingctrl', function($scope, mainSrv,$http){
	
	
	console.log(mainSrv.getx());
	$scope.from = mainSrv.getx().from;
	$scope.to = mainSrv.getx().to;
	console.log(mainSrv.getx().depatutreDate);
	
	$http.get('http://localhost:3000/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().depatutreDate+'/'+mainSrv.getx().cabin)
	   
	.then(function(response){
		console.log('/api/flights/search/'+mainSrv.getx().from+'/'+mainSrv.getx().to+'/'+mainSrv.getx().departureDate+'/'+mainSrv.getx().cabin);
		$scope.flights = response.data;
		console.log(response.data);
	});
})

