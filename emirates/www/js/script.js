var scotchApp = angular.module('App.scotchApp', []);

    
    scotchApp.controller('mainController', ["$scope", function($scope) {

     
        $scope.message = 'Everyone come and see how good I look!';
    }]);