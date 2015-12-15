var meanApp = angular.module('meanApp')

meanApp.controller('InvoicesCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.stageOptions = ['Drafted', 'Pending', 'Paid']

	$scope.getCustomers = function(){
		$http.get('/api/customers').success(function(res){
			$scope.customers = res
		})
	}

	$scope.getInvoices = function(){
		$http.get('/api/invoices').success(function(res){
			$scope.invoices = res
		})
	}

	$scope.getInvoice = function(){
		var id = $routeParams.id
		$http.get('/api/invoices/' + id).success(function(res){
			$scope.invoice = res
			$scope.invoice.customer_id = res.customer._id
		})
	}

	$scope.addInvoice = function(){
		$scope.invoice.createdAt = function(){
			var today = new Date()
			var dd = today.getDate()
			var mm = today.getMonth()+1
			var yyyy = today.getFullYear()

			if(dd<10){dd='0'+dd}
			if(mm<10){mm='0'+mm}

			return dd+'/'+mm+'/'+yyyy;
		}
		$http.post('/api/invoices/', $scope.invoice).success(function(res){
			window.location.href='/#invoices'
		})
	}

	$scope.updateInvoice = function(){
		$http.put('/api/invoices/' + $scope.invoice._id, $scope.invoice).success(function(res){
			window.location.href='/#invoices'
		})
	}

	$scope.deleteInvoice = function(id){
		$http.delete('/api/invoices/' + id).success(function(res){
			window.location.href='/#invoices'
		})
	}

}])
