App.controller('landingCtrl',function($scope ,mainSrv,landingServ)
{
  mainSrv.init();

  $scope.selected = undefined;
  $scope.states =landingServ;
<<<<<<< HEAD
  $scope.landing = {passengerDetails : {} };
=======
  $scope.landing = {passengerDetails : {}, Flights:[] };
>>>>>>> 0fa3658778194b7467203403bcb397907b2881ad


  /*----------- Angular Bootstrap Datepicker -----------*/

  
  // console.log($scope.landing);
  // $scope.landing = {
  //   origin :"",
  //  destination : "" ,
  //  depaturedate : "",
  //  returnDate : "" ,
  //  cabinet : ""

  // }

  /*----------- Angular Bootstrap Datepicker -----------*/
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };


  // $scope.twoWays: function() {
  //   var date1 = moment(this.getx().depatutreDate);
  //   var dateStr1 = date1.format('L');
  //    var date2 = moment(this.getx().returnDate);
  //   var dateStr2= date2.format('L');
  //     // var x=this.getx()
  //     // this.getx().depatutreDate=dateStr;
  //     // this.setx(x);
  //     // console.log(dateStr);
  //     // thisObj = this;
  //     $http.get('/api/flights/search/' + this.getx().from + '/' + this.getx().to + '/' + dateStr + '/'+ this.getx().class).success(function(data){
  //       this.obj = {"data": data, "from": thisObj.getx().from, "to": thisObj.getx().to}
  //       thisObj.set(this.obj)
  //     });
  //   }

  $scope.check = function() {

    
    if(!$scope.others&&$scope.OutOnly && $scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate){
      // mainSrv.init();
      mainSrv.setx($scope.landing);
      // console.log($scope.landing);
      // console.log(mainSrv.getx());
      // mainSrv.getx().depatutreDate=moment(mainSrv.getx().depatutreDate).format('L');
      mainSrv.process();
      mainSrv.setx($scope.landing);
      $scope.ref="#single";
      console.log("1")
    }else if(!$scope.others&&!$scope.OutOnly&&$scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate&&$scope.landing.returnDate){

      mainSrv.setx($scope.landing);
      mainSrv.twoWays();
      mainSrv.setx($scope.landing);
      $scope.ref="#2ways";
console.log("2")
    }
    else  
       if($scope.others&&$scope.OutOnly && $scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate){
      // mainSrv.init();
      mainSrv.setx($scope.landing);
      // mainSrv.getx().depatutreDate=moment(mainSrv.getx().depatutreDate).format('L');
      mainSrv.processOthers();
      mainSrv.setx($scope.landing);
      $scope.ref="#single";
<<<<<<< HEAD
      console.log("3")
=======
      console.log("1")
>>>>>>> 0fa3658778194b7467203403bcb397907b2881ad
    }else if($scope.others&&!$scope.OutOnly&&$scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate&&$scope.landing.returnDate){

      mainSrv.setx($scope.landing);
      mainSrv.twoWaysOthers();
      mainSrv.setx($scope.landing);
      $scope.ref="#2ways";

    }
    else{
      alert("you forgot to enter some data");
      $scope.ref="#/team";
    }
  };
  // };
  // $scope.next = function(){
  //   mainSrv.setx($scope.landing);
  // }

});

// .factory("state",function(){
//   var state =  ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
//   return state;
// })
