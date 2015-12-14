var meanApp = angular.module('meanApp', ['ngRoute'])

meanApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'DashboardCtrl',
		templateUrl: 'views/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})
