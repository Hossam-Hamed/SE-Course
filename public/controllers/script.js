var scotchApp = angular.module('scotchApp', []);

    
    scotchApp.controller('mainController', ["$scope", function($scope) {

     
        $scope.message = 'Everyone come and see how good I look!';
    }]);