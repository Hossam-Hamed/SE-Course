angular.module('App')

.factory("landingServ",function($http){
 	var state = [];
 	$http.get('http://localhost:3000/api/Airports')
 	.then(function(response){ 
 		// var state= response.data.iata;
 		for (var i = response.data.length - 1; i >= 0; i--) {
 			state[i]= (response.data)[i].iata;

 		} 
 	});
 	return state;
 });