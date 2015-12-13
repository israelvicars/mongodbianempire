var express = require('express')
var app = express()
var mongojs = require('mongojs')
var db = mongojs('catalog', ['products'])
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function(req, res){
	res.send('Working!')
})

app.get('/products', function(req, res){
	console.log('Fetching products...')
	db.products.find(function(err, docs){
		if(err){
			res.send(err)
		} else {
			console.log('Sending products...')
			res.json(docs)
		}
	})
})

app.get('/products/:id', function(req, res){
	console.log('Fetching product...')
	db.products.findOne(
		{_id: mongojs.ObjectId(req.params.id) },
		function(err, doc){
			if(err){
				res.send(err)
			} else {
				console.log('Sending product...')
				res.json(doc)
			}
		}
	)
})

app.post('/products', function(req, res){
	db.products.insert(req.body, function(err, doc){
		if(err){
			res.send(err)
		} else {
			console.log('Adding product...')
			res.json(doc)
		}
	})
})

app.put('/products/:id', function(req, res){
	db.products.findAndModify(
		{query: {_id: mongojs.ObjectId(req.params.id)},
			update: {$set:{
				name: req.body.name,
				category: req.body.category,
				description: req.body.description
			}},
			new: true
		},
		function(err, doc){
			if(err){
				res.send(err)
			} else {
				console.log('Updating product...')
				res.json(doc)
			}
		})
})

app.delete('/products/:id', function(req, res){
	console.log('Fetching product...')
	db.products.remove(
		{_id: mongojs.ObjectId(req.params.id) },
		function(err, doc){
			if(err){
				res.send(err)
			} else {
				console.log('Removing product...')
				res.json(doc)
			}
		}
	)
})

app.listen(3000)

console.log('Server is running on port 3000')
