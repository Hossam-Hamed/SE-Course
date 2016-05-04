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
      var c = this.getx().class;
      // var x=this.getx()
      // this.getx().depatutreDate=dateStr;
      // this.setx(x);
      console.log(dateStr);
      thisObj = this;
      $http.get('/api/flights/search/'+ this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().class).success(function(data){
        this.obj =data;
        var cost;

        if(c==="First"){

          cost=300;
        }else if(c==="Economy"){
          cost=200;
        }else if (c==="Business"){
          cost=100;
        }
        var xx = this.obj.outgoingFlights;
        
        function add (cost,cb){
          for (var i = 0; i < xx.length; i++) {
            this.obj.outgoingFlights[i].cost=cost;
          }
          cb();
        }

        function sss(){
          thisObj.set(this.obj);
          console.log(this.obj);

        }
        add(cost,sss);

          // set();

        // this.obj.cost=cost;
      });
    },


    twoWays: function() {
      var date1 = moment(this.getx().depatutreDate);
      var dateStr1 = date1.format('L');
      var date2 = moment(this.getx().returnDate);
      var dateStr2= date2.format('L');
      var c = this.getx().class;

      thisObj = this;

      $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr1+ '/' +dateStr2 + '/'+ this.getx().class).success(function(data){
        // this.obj = {"data1": out, "data2":ret ,"from": thisObj.getx().from, "to": thisObj.getx().to};

        this.obj =data;
        console.log(data);
        var cost;

        if(c==="First"){

          cost=300;
        }else if(c==="Economy"){
          cost=200;
        }else if (c==="Business"){
          cost=100;
        }
        var xx = this.obj.outgoingFlights;
        var yy = this.obj.returnFlights;

        function add1 (cost,cb){
          for (var i = 0; i < xx.length; i++) {
            this.obj.outgoingFlights[i].cost=cost;
          }
          for (var i = 0; i < yy.length; i++) {
            this.obj.returnFlights[i].cost=cost;
          }

          cb();
        }

        function sss1(){
          console.log(this.obj)
          thisObj.set(this.obj);

        }
        add1(cost,sss1);

      });

    },

    processOthers: function() {
      var date = moment(this.getx().depatutreDate);
      var dateStr = date.format('L');
      // var x=this.getx()
      // this.getx().depatutreDate=dateStr;
      // this.setx(x);
      console.log(dateStr);
      thisObj = this;
      $http.get('/api/flights/search/'+ this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().class+'/'+1).success(function(data){
        thisObj.set(this.obj);
      });
    },

    
    twoWaysOthers: function() {
      var date1 = moment(this.getx().depatutreDate);
      var dateStr1 = date1.format('L');
      var date2 = moment(this.getx().returnDate);
      var dateStr2= date2.format('L');
      
      // var x=this.getx()
      // this.getx().depatutreDate=dateStr;
      // this.setx(x);
      // console.log(dateStr);
      thisObj = this;

      // $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr1+ '/' +dateStr2 + '/'+ this.getx().class).success(function(data){
      //   this.obj = {"data1": data, "from": thisObj.getx().from, "to": thisObj.getx().to}
      //   thisObj.set(this.obj)
      // });
      //   $http.get('/api/flights/search/' + this.getx().to + '/' + this.getx().from + '/' + dateStr1+ '/' +dateStr2 + '/'+ this.getx().class).success(function(data){
      //   this.obj.data2=data;
      //   thisObj.set(this.obj)
      // });
      $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr1+ '/' +dateStr2 + '/'+ this.getx().class+'/'+1).success(function(data){
        // this.obj = {"data1": data.out,"data2":data.ret ,"from": thisObj.getx().from, "to": thisObj.getx().to}
        thisObj.set(this.obj)
      });


    }


  }
  return object;
});