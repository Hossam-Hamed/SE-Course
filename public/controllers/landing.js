

angular.module('App').controller('landingCtrl', function($scope ,mainSrv , landingServ)
{


  // alert('aa');
  // mainSrv.init();
  $scope.data = 
  $scope.selected = undefined;
  $scope.states =landingServ;
  $scope.landing = {paymentMethod : { creditCard : {}}};

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
  $scope.doSubmit = function(){
        if($scope.myForm.$pristine){alert('menna');}
    };
    $scope.next = function(){

      mainSrv.setx($scope.landing);
    };
   
});



