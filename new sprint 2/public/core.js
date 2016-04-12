// https://angular-ui.github.io/

// setup app and pass ui.bootstrap as dep
angular.module("angularTypeahead", ['ui.bootstrap'])


// setup controller and pass data source
.controller("TypeaheadCtrl", function($scope, States) {
	
	$scope.selected = undefined;
	
	$scope.countries = States;
})
.factory("States", function(){
  var states = ["Cairo", "Cameron", "Casablanca", "Colombia", "Berlin", "Beirout", "Albania", "America", "Australia", "Iran", "", "Ireland", "Venzuela", "India", "England", "Brazil", "Norway","Argentina","New Zealand","Bulgaria"];
  
  return states;
  
})
