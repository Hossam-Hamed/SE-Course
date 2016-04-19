angular.module('App').factory('mainSrv' , function ($http) {


return{
    setx : function(x){
      this.x = x;
    },
    getx : function(){
      return this.x;
    },
    init: function() {
      var y = $http.get('Reservation.json').success(function(data){
        var x = JSON.parse(y);
        // console.log('schema');
        // this.x = 'a';
        console.log(x);
      }).error(console.log);
    }

}
})