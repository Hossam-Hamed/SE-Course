angular.module('App').factory('mainSrv' , function ($http) {


return{
    setx : function(x){
      this.x = x;
    },
    getx : function(){
      return this.x;
<<<<<<< HEAD
    },  

=======
    
    // init: function() {
    //   var y = $http.get('Reservation.json').success(function(data){
    //     var x = JSON.parse(y);
    //     // console.log('schema');
    //     // this.x = 'a';
    //     console.log(x);
    //   }).error(console.log);
    // }
>>>>>>> fc2f814a6c5e84345fc34e25e1a37d870d43bcdb

}
}) 