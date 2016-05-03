App.controller('landingCtrl',function($scope ,mainSrv,landingServ)
{
  mainSrv.init();

  $scope.selected = undefined;
  $scope.states =landingServ;
  $scope.landing = {paymentMethod : { creditCard : {}}};


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
    mainSrv.init();
    mainSrv.setx("from",$scope.landing.from);
    mainSrv.setx("to",$scope.landing.to);
    var depaturedate = moment($scope.landing.departureDate);
    var dateStr = depaturedate.format('L');
    mainSrv.setx("departureDate",dateStr);
    mainSrv.setx("cabin",$scope.landing.cabin);
    
    if($scope.OutOnly && $scope.landing.from && $scope.landing.to &&$scope.landing.departureDate){
    console.log($scope.landing.departureDate);

      mainSrv.process();
      $scope.ref="#single";
      console.log(mainSrv.getx());

    }else if($scope.landing.from && $scope.landing.to &&$scope.landing.departureDate&&$scope.landing.returnDate){

      mainSrv.setx("returnDate",$scope.landing.returnDate);
      $scope.ref="#2ways";
      mainSrv.setx($scope.landing);

    }else{

      alert("you forgot to enter some data");
      $scope.ref="#/team";

    }
  };
});