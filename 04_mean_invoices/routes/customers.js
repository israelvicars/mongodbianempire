var express = require('express')
var router = express.Router()

Customer = require('../models/customer.js')
Invoice = require('../models/invoice.js')

// GET Customers
router.get('/', function(req, res){
	Customer.getCustomers(function(err, customers){
		if(err){
			res.send(err)
		} else {
			res.json(customers)
		}
	})
})

// GET Single Customer
router.get('/:id', function(req, res){
	Customer.getCustomerById(req.params.id, function(err, customer){
		if(err){
			res.send(err)
		} else {
			res.json(customer)
		}
	})
})

// POST Customer
router.post('/', function(req, res){
	var customer = req.body
	Customer.addCustomer(customer, function(err, customer){
		if(err){
			res.send(err)
		} else {
			res.json(customer)
		}
	})
})

// UPDATE Customer
router.put('/:id', function(req, res){
	var id = req.params.id
	var customer = req.body
	var options = {}
	Customer.updateCustomer(id, customer, options, function(err, customer){
		if(err){
			res.send(err)
		} else {
			res.json(customer)
		}
	})
})

// DELETE Customer
router.delete('/:id', function(req, res){
	var id = req.params.id
	Customer.removeCustomer(id, function(err, customer){
		if(err){
			res.send(err)
		} else {
			res.json(customer)
		}
	})
})

module.exports = router















//
