App.factory("outserv" ,function($http)){
	
return{
	

	set: funtion(landing){
 this.landing=landing;

	}


	get: funtion(landing){
		return $http.get('/api/flights/search/'
			+landing.origin+'/'+landing.destination+'/'+landing.departingDate+'/'landing.returningDate+
			'/'+landing.cabin);
	}
}


}