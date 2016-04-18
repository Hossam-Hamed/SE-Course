

// angular.module('App').controller('landingCtrl', function($scope ,mainSrv , landingServ)
// {


//   // alert('aa');
//   mainSrv.init();
//   $scope.selected = undefined;
//   $scope.states =landingServ;
//   $scope.landing = mainSrv.getx();

//   // console.log($scope.landing);
//   // $scope.landing = {
//   //   origin :"",
//   //  destination : "" ,
//   //  depaturedate : "",
//   //  returnDate : "" ,
//   //  cabinet : ""

//   // }

//   /*----------- Angular Bootstrap Datepicker -----------*/
//   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//   $scope.format = $scope.formats[0];

//   $scope.open1 = function() {
//     $scope.popup1.opened = true;
//   };

//   $scope.open2 = function() {
//     $scope.popup2.opened = true;
//   };

//   $scope.setDate = function(year, month, day) {
//     $scope.dt = new Date(year, month, day);
//   };

//   $scope.popup1 = {
//     opened: false
//   };

//   $scope.popup2 = {
//     opened: false
//   };



//   $scope.check = function() {
//     if($scope.OutOnly && $scope.Selected1 && $scope.Selected &&$scope.dt){
//       $scope.ref="#single";
//             mainSrv.setx($scope.landing);

//     }else if($scope.Selected1 && $scope.Selected &&$scope.dt){
//       $scope.ref="#2ways";
//             mainSrv.setx($scope.landing);


//     }else{
//       $scope.preventDefault();
//     }
//   };
//     // $scope.next = function(){

//     //   mainSrv.setx($scope.landing);
//     // };
   
// });





App.controller('landingCtrl',function($scope ,landingServ, mainSrv)
{
  mainSrv.init();
  $scope.selected = undefined;
  $scope.states =landingServ;
  $scope.landing = mainSrv.getx();

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


  $scope.check = function() {
    if($scope.OutOnly && $scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate){
      $scope.ref="#single";
    }else if($scope.landing.from && $scope.landing.to &&$scope.landing.depatutreDate){
      $scope.ref="#2ways";

    }else{
      alert("you forgot to enter some data");
      $scope.ref="#/team";

    }
  };
  $scope.next = function(){
    mainSrv.setx($scope.landing);
  }

})

// .factory("state",function(){
//   var state =  ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
//   return state;
// })


