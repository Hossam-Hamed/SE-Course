angular.module('App').factory('mainSrv' , function ($http) {
  var obj;
  var object = {
    setx : function(x){
      console.log("set");
      this.x = x;
    },
    getx : function(){
      return this.x;
    },
     set : function(obj){
      this.obj = obj;
    },
     get : function(){
      return this.obj;
    },
    init: function(){
    },
    process: function() {
      var date = moment(this.getx().depatutreDate);
      var dateStr = date.format('L');
      // var x=this.getx()
      // this.getx().depatutreDate=dateStr;
      // this.setx(x);
      console.log(dateStr);
      thisObj = this;
      $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().class).success(function(data){
        this.obj = {"data": data, "from": thisObj.getx().from, "to": thisObj.getx().to}
        thisObj.set(this.obj)
      });
    }
  }
  return object;
});