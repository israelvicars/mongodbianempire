var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var customers = require('./routes/customers')
var invoices = require('./routes/invoices')

// Mongoose Connect
mongoose.connect('mongodb://localhost/invoicer')
var db = mongoose.connection

app.use(express.static(__dirname+'/client'))
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.send('¡Hola mundo!')
})

app.use('/api/customers', customers)
app.use('/api/invoices', invoices)

app.listen(3000)
console.log('Server started on port 3000')
