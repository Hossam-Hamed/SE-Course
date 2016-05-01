angular.module('App').factory('mainSrv' , function ($http) {

  var object = {
    setx : function(x){
      this.x = x;
    },
    getx : function(){
      return this.x;
    },
    init: function(){
    },
    process: function() {
      var date = moment(this.getx().depatutreDate);
      var dateStr = date.format('L');
      console.log(dateStr);
      thisObj = this;
      $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().cabin).success(function(data){
        obj = {"data": data, "from": thisObj.getx().from, "to": thisObj.getx().to}
        thisObj.setx(obj);
      });
    }
  }
  return object;
});