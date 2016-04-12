App = angular.module('App',['ui.bootstrap','ngRoute']);

App.config(function($routeProvider) {
	$routeProvider
   		.when('/', {
// <<<<<<< HEAD
            redirectTo: '/home'
   		})

//          .when('/home', {
//             templateUrl: '../partials/home.html'
//          })

//          .when('/book', {
//          templateUrl:'../partials/landing.html',
//             controller:'landingCtrl'
//          })

// =======
            templateUrl: '../partials/landing.html',
            controller:'landingCtrl'
   		}

         .when('/home', {
            templateUrl: '../partials/landing.html',
            controller:'landingCtrl'

         })
// >>>>>>> ccbf03d8fb5e839272630b5e6895d5800085e713
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

