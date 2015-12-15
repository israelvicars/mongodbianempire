var express = require('express')
var router = express.Router()

Customer = require('../models/customer.js')
Invoice = require('../models/invoice.js')

// GET Invoices
router.get('/', function(req, res){
	Invoice.getInvoices(function(err, invoices){
		if(err){
			res.send(err)
		} else {
			res.json(invoices)
		}
	})
})

// GET Single Invoice
router.get('/:id', function(req, res){
	Invoice.getInvoiceById(req.params.id, function(err, invoice){
		if(err){
			res.send(err)
		} else {
			res.json(invoice)
		}
	})
})

// POST Invoice
router.post('/', function(req, res){
	var invoice = req.body
	Invoice.addInvoice(invoice, function(err, invoice){
		if(err){
			res.send(err)
		} else {
			res.json(invoice)
		}
	})
})

// UPDATE Customer
router.put('/:id', function(req, res){
	var id = req.params.id
	var invoice = req.body
	var options = {}
	Invoice.updateInvoice(id, invoice, options, function(err, customer){
		if(err){
			res.send(err)
		} else {
			res.json(customer)
		}
	})
})

// DELETE Invoice
router.delete('/:id', function(req, res){
	var id = req.params.id
	Invoice.removeInvoice(id, function(err, invoice){
		if(err){
			res.send(err)
		} else {
			res.json(invoice)
		}
	})
})

// GET Invoices for a single customer
router.get('/customers/:customer_id', function(req, res){
	var customer_id = req.params.customer_id
	Invoice.getCustomerInvoices(customer_id, function(err, invoices){
		if(err){
			res.send(err)
		} else {
			res.json(invoices)
		}
	})
})

module.exports = router
