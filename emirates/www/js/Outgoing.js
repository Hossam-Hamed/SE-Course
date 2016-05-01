angular.module('App')
.controller('outgoingctrl', function($scope, mainSrv){
	
	temp = mainSrv.getx();
	$scope.flights = temp["data"];
	$scope.from = temp["from"];
	$scope.to = temp["to"];
});