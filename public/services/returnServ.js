App.factory('returnserv',$http){
 	return (){
	set : function (landing){
       this.landing = landing;
		}
 		get : function (landing){
 			return $http.get('/api/search'+landing.origin+'/'+landing.destination+'/'+landing.DepartureDate+'/'+landing.returnDate+'/'+landing.cabin);
 		}
 	}
 }