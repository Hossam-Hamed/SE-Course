App = angular.module('App',['ui.bootstrap','ngRoute']);

App.config(function($routeProvider) {
	$routeProvider
   		.when('/', {
            templateUrl: '../partials/landing.html',
            controller:'landingCtrl'
   		})

         .when('/home', {
            templateUrl: '../partials/landing.html',
            controller:'landingCtrl'

         })
         .when('/about', {
         templateUrl:'../partials/about.html'
            //controller:'ConfirmationController'
         })

         .when('/contact', {
         templateUrl:'../partials/contact.html'
            //controller:'ConfirmationController'
         })

		   .when('/single', {
			templateUrl:'../partials/Outgoing.html',
   			controller:'outgoingctrl'
   		})

         .when('/single2', {
         templateUrl:'../partials/confirmation.html',
            controller:'MainController'
         })

         .when('/singleback', {
         templateUrl:'../partials/landing.html',
            controller:'landingCtrl'
         })
         .when('/choose', {
         templateUrl:'../partials/confirmation.html',
            controller:'confctrl'
         })
         .when('/back', {
         templateUrl:'../partials/Outgoing.html',
            controller:'outgoingctrl'
         })
         .when('/pay', {
         templateUrl:'../partials/summary.html',
            controller:'summaryCtrl'
         })
         
         .otherwise({
            redirectTo: '/'
         })
});

