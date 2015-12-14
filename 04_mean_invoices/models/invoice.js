var mongoose = require('mongoose')

// Invoice Schema
var invoiceSchema = mongoose.Schema({
	customer:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	service:{
		type: String,
		required: true
	},
	price:{
		type: String
	},
	due:{
		type: String
	},
	stage:{
		type: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	}
})

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema)

// GET Invoices
module.exports.getInvoices = function(callback, limit){
	Invoice.find(callback).limit(limit).sort([['createdAt', 'descending']])
}

// GET Invoice by ID
module.exports.getInvoiceById = function(id, callback){
	Invoice.findById(id, callback)
}

// ADD Invoice
module.exports.addInvoice = function(invoice, callback){
	var add = {
		customer: invoice.customer,
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		stage: invoice.stage,
		createdAt: invoice.createdAt
	}
	Invoice.create(add, callback)
}

// UPDATE Invoice
module.exports.updateInvoice = function(id, invoice, options, callback){
	var query = {_id: id}
	var update = {
		customer: invoice.customer,
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		stage: invoice.stage,
		createdAt: invoice.createdAt
	}
	Invoice.findOneAndUpdate(query, update, options, callback)
}

// DELETE Invoice
module.exports.removeInvoice = function(id, callback){
	var query = {_id: id}
	Invoice.remove(query, callback)
}







//
