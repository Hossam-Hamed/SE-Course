angular.module('App')
	.factory("outserv" ,function($http){
       return {
	set: function(landing){
		this.landing=landing;
	  },


	get: function(landing){
		return $http.get('http://localhost:3000/api/flights/search/'
			+landing.origin+'/'+landing.destination+'/'+landing.departingDate+'/'+landing.returningDate+
			'/'+landing.cabin),
			{
				"headers" : { 	'x-access-token' :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0NjA3MTg4NTUsImV4cCI6MTQ5MjI1NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9.joYKQcvKRu50OWJgFT24qS13pjXLqFoQ9aPc8N1zxNo',
				"wt" :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0NjA3MTg4NTUsImV4cCI6MTQ5MjI1NDg1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9.joYKQcvKRu50OWJgFT24qS13pjXLqFoQ9aPc8N1zxNo'	}

			};
	}
}});
