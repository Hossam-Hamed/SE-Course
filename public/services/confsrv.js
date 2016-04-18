App.factory('confsrv' , function ($http) {
	return{
		set : function(landing){
			this.landing = landing;

		},
		getLanding : function(landing){
			return this.landing;

		},
		// GetOrigin : function(){
		// 	return this.selectedorigin;

		// },
		// SetDestination : function(destination){
		// 	this.selecteddestination = destination;

		// },
		// GetDestination : function(){
		// 	return this.selecteddestination;

		// },
	}
	// body...
})
 