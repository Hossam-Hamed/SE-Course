angular.module('App')
	.factory('outserv', function($http) {

		return {


			set: function(landing) {
				this.landing = landing;

			},
			get: function(landing) {
				return $http.get('/api/flights/search/' +
					landing.origin + '/' + landing.destination + '/' + landing.departingDate + '/' +
					landing.returningDate + '/' + landing.cabin);
			}
		}


	});