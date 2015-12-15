var meanApp = angular.module('meanApp')

meanApp.controller('CustomersCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getCustomers = function(){
		$http.get('/api/customers').success(function(res){
			$scope.customers = res
		})
	}

	$scope.getCustomer = function(){
		var id = $routeParams.id
		$http.get('/api/customers/' + id).success(function(res){
			$scope.customer = res
		})
	}

	$scope.getCustomerInvoices = function(){
		var id = $routeParams.id
		$http.get('/api/invoices/customers/'+id).success(function(res){
			$scope.customer_invoices = res
		})
	}

	$scope.addCustomer = function(){
		$http.post('/api/customers/', $scope.customer).success(function(res){
			window.location.href='/#customers'
		})
	}

	$scope.updateCustomer = function(){
		$http.put('/api/customers/' + $scope.customer._id, $scope.customer).success(function(res){
			window.location.href='/#customers'
		})
	}

	$scope.deleteCustomer = function(id){
		$http.delete('/api/customers/' + id).success(function(res){
			window.location.href='/#customers'
		})
	}

}])
