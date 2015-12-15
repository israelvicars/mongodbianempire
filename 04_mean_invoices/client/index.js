var meanApp = angular.module('meanApp', ['ngRoute'])

meanApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'DashboardCtrl',
		templateUrl: 'views/dashboard.html'
	})
	.when('/customers', {
		controller: 'CustomersCtrl',
		templateUrl: 'views/customers.html'
	})
	.when('/customers/details/:id', {
		controller: 'CustomersCtrl',
		templateUrl: 'views/customer-details.html'
	})
	.when('/customers/add', {
		controller: 'CustomersCtrl',
		templateUrl: 'views/add-customer.html'
	})
	.when('/customers/edit/:id', {
		controller: 'CustomersCtrl',
		templateUrl: 'views/edit-customer.html'
	})
	.when('/invoices', {
		controller: 'InvoicesCtrl',
		templateUrl: 'views/invoices.html'
	})
	.when('/invoices/details/:id', {
		controller: 'InvoicesCtrl',
		templateUrl: 'views/invoice-details.html'
	})
	.when('/invoices/add', {
		controller: 'InvoicesCtrl',
		templateUrl: 'views/add-invoice.html'
	})
	.when('/invoices/edit/:id', {
		controller: 'InvoicesCtrl',
		templateUrl: 'views/edit-invoice.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})
