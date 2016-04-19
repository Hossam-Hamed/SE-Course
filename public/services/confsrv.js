App.factory('confsrv' , function ($http) {
	return{
		set : function(landing){
			this.landing = landing;

		},
		getLanding : function(landing){
			return this.landing;

		}
	}

});