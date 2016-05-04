angular.module('App').factory('mainSrv' , function ($http) {

  var object = {
    setx : function(newVal){
      this.x = newVal;
    },
    getx : function(){
      return this.x;
    },
    init: function(){
      var x = {
        "_id": "" ,
        "firstName": "",
        "lastName": "",
        "email" :"",
        "passport": "",
        "issueDate" :"",
        "expiryDate" :"",
        "receipt_number": "",
        "bookingRefNumber": "",  
        "from":"",
        "to":"",
        "departureDate":"",
        "returndate":"",
        "departureTime":"",
        "arrivalTime":"",
        "seatNumber":"",
        "aeroplane":"",
        "duration":"",
        "cabin":"",
        "gate" : "",
        "iata":"",
        "filghtNO":"",
        "amount":"",
        "country" :"",
        "paymentMethod":
        {
          "creditCard":{"CVC":"","address1":"","city":"","phone":"","code":"", "expiryDate" :"","cardholderFN":"","cardholderLN":""},
          "cash":[{"place":"","date":"","deadline":""}]

        }}
        this.x=x;
      },
      process: function() {
        var date = moment(this.getx().depatutreDate);
        var dateStr = date.format('L');
        console.log(dateStr);
        thisObj = this;
        $http.get('http://localhost:3000/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().cabin).success(function(data){
          obj = {"data": data, "from": thisObj.getx().from, "to": thisObj.getx().to}
          thisObj.setx(obj);
        });
      }
    }
    return object;
  });