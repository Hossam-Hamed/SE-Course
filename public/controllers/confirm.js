App.controller('confctrl',function($scope , mainSrv){

  $scope.flight =mainSrv.getx();
  $scope.onclick = function(){

    mainSrv.setx($scope.flight);
  };
});
var x    = require('routes.js');
function populate() {     
  var sel = document.getElementById('myDropdown').classList.toggle("show");
  for(var i = 0; i < cuisines.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = seats[i];
    opt.value = seats[i];
    sel.appendChild(opt);
  }
}