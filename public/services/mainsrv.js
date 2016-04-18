angular.module('App').factory('mainSrv' , function ($http) {


return{
    setx : function(x){
      this.x = x;
    },
    getx : function(){
      return this.x;
    }   


}
}) 