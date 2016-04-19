App	.controller("summaryCtrl",function($scope,countries,mainSrv){

  $scope.data = mainSrv.getx();
  console.log($scope.data);

  // mainSrv.init(function(){
  //   $scope.data=mainSrv.getx();
  //   // console.log($scope.data);  
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
      //   
      if (
        ($scope.data.paymentMethod.creditCard.expiryDate!=undefined && $scope.myForm.date.$valid)  && 
        ($scope.data.paymentMethod.creditCard.code!=undefined &&$scope.myForm.CNo.$valid)  && 
        ($scope.data.paymentMethod.creditCard.CVC!=undefined && $scope.myForm.CVC.$valid)  && 
        ($scope.data.country!=undefined && $scope.data.country.length>0)  &&
        ($scope.data.firstName!=undefined && $scope.data.firstName.length>0)  &&
        ($scope.data.lastName!=undefined && $scope.data.lastName.length>0)  &&
        ($scope.data.email!=undefined && $scope.data.email.length>0)  &&
        ($scope.data.paymentMethod.creditCard.phone!=undefined && $scope.myForm.no.$valid)  &&
        ($scope.data.paymentMethod.creditCard.cardholderFN!=undefined && $scope.data.paymentMethod.creditCard.cardholderFN.length>0)  &&
        ($scope.data.paymentMethod.creditCard.cardholderLN!=undefined && $scope.data.paymentMethod.creditCard.cardholderLN.length>0)  &&  
        ($scope.data.paymentMethod.creditCard.city!=undefined &&$scope.data.paymentMethod.creditCard.city.length>0)  &&
        ($scope.data.paymentMethod.creditCard.address1!=undefined && $scope.data.paymentMethod.creditCard.address1.length>0) 
        ) {
            // addAlert();
            $scope.cont=true;

          }
          else{




           $scope.cont=false;

         }
         console.log($scope.data)
         console.log($scope.cont)

       };

       $scope.Cont= function(){

        if ($scope.cont) {
         $scope.show=false;

       }
       else{
         $scope.show=true;
       }
       

     };


     $scope.set=function(){
      mainSrv.setx($scope.data);
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

    $scope.setDate = function(year, month, day) {
      $scope.data.paymentMethod.creditCard.expiryDate = new Date(year, month, day);
    };

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

  })


.factory("countries",function(){
	var countries= ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
	return countries;
})

