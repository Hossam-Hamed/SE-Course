App .controller("summaryCtrl",function($scope,countries,mainSrv,countries2){

  $scope.data = mainSrv.getx();
  

  // mainSrv.init(function(){
  //   $scope.data=mainSrv.getx();
  console.log($scope.data);  
  // });+
  $scope.selected=undefined;
  $scope.country=countries;
  $scope.isCollapsed2 = true;    
  $scope.cont=false;
  $scope.isActive1 = false;
  $scope.isActive2 = true;
  $scope.show=false;
  $scope.isCollapsed = true;    

  

  $scope.check= function(){

    if (
      ($scope.data.cardDate!=undefined && $scope.myForm.date.$valid)  && 
      ($scope.data.cardCode!=undefined &&$scope.myForm.CNo.$valid)  && 
      ($scope.data.CVC!=undefined && $scope.myForm.CVC.$valid)  && 
      ($scope.data.passengerDetails.nationality!=undefined && $scope.data.passengerDetails.nationality.length>0)  &&
      ($scope.data.passengerDetails.firstName!=undefined && $scope.data.passengerDetails.firstName.length>0)  &&
      ($scope.data.passengerDetails.lastName!=undefined && $scope.data.passengerDetails.lastName.length>0)  &&
      ($scope.data.passengerDetails.email!=undefined && $scope.data.passengerDetails.email.length>0)  &&
      ($scope.data.passengerDetails.passportNum!=undefined && $scope.data.passengerDetails.passportNum.length>0)  &&
      ($scope.data.passengerDetails.phone!=undefined && $scope.myForm.no.$valid)  &&
      ($scope.data.cardholderFN!=undefined && $scope.data.cardholderFN.length>0)  &&
      ($scope.data.cardholderLN!=undefined && $scope.data.cardholderLN.length>0)  &&  
      ($scope.data.passengerDetails.city!=undefined &&$scope.data.passengerDetails.city.length>0)  &&
      ($scope.data.passengerDetails.birth!=undefined &&$scope.myForm.dob.$valid)  &&
      ($scope.data.passengerDetails.address1!=undefined && $scope.data.passengerDetails.address1.length>0) 
      ) {
            // addAlert();
            $scope.cont=true;
            //added
            $scope.set();


          }
          else{

           $scope.cont=false;

         }
         // console.log($scope.data)

       };

       $scope.Cont= function(){
        if ($scope.cont) {
         $scope.show=false;

         Stripe.card.createToken({
          number: $scope.data.cardCode,
          cvc: $scope.data.CVC,
          exp_month: 04,
          exp_year: 17,
        }, stripeResponseHandler);

       }
       else{
         $scope.show=true;
       }
       // app.post('/api/postReserv/',$scope.data);
     }


     $scope.set=function(){
      mainSrv.setx($scope.data);
    }
    function stripeResponseHandler (status,response){
     if (response.error){
       alert(response.error.message);
     }else{
      var x = response;
      $scope.data.paymentToken=response.id;
      console.log(response);
      countries2.PostInfo($scope.data).success(function(data){

       if(data.errorMessage==null){
        alert('Payment succeded');
      }else{
        //console.log(data);
        alert(data.errorMessage.message);
      }
    })

    }
  }
  $scope.get=function(){
    mainSrv.getx();
  }


  $scope.toggleActive1 = function() {
    $scope.isActive1 = !$scope.isActive1;

  };

  $scope.toggleActive2 = function() {
    $scope.isActive2 = !$scope.isActive2;
  };


  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  // $scope.setDate = function(year, month, day) {
  //   $scope.data.paymentMethod.creditCard.expirDate = new Date(year, month, day);
  // };

  // $scope.setDate2 = function(year, month, day) {
  //   $scope.data.cardDate = new Date(year, month, day);
  // };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

})


.factory("countries",function($http){
  //added by nasser
  /*return {
    PostInfo : function (info){
      return $http.post('/booking',info)
    }
    */var countries= ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
    return countries;

  })
.factory("countries2",function($http){
  return {
    PostInfo : function (passInfo){
      return $http.post('/booking',{


        
         "paymentToken" : passInfo.paymentToken,
         "Info" : passInfo,
        // "firstName" : passInfo.passengerDetails.firstName,
        // "lastName" : passInfo.passengerDetails.lastName,
        // "passportNum" : passInfo.passengerDetails.passportNum,
        // "birth" : passInfo.passengerDetails.birth,

     } ); 
    }
  }
})
