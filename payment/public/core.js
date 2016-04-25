/* Create Angular App Instance */
App = angular.module('App', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/summary.html',
            controller  : 'summaryCtrl'

        })

      
});
