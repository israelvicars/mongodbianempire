// Sample customer for POST

{
	"first_name": "John",
	"last_name":"Doe",
	"company":"JD Solutions",
	"logo_url":"http://www.nixoninwhittier.com/wp-content/uploads/2013/04/surprise-logo.jpg",
	"email":"jdsolutions@gmail.com",
	"phone":"212-555-4839",
	"address":{
		"street":"455 Tremont St",
		"city":"Boston",
		"state":"MA",
		"zip":"02178"
	}
}


// API response to sample customer POST

{"__v":0,"first_name":"John","last_name":"Doe","company":"JD Solutions","logo_url":"http://www.nixoninwhittier.com/wp-content/uploads/2013/04/surprise-logo.jpg","email":"jdsolutions@gmail.com","phone":"212-555-4839","_id":"566f10fccd6e4aa364c30f9e","createdAt":"2015-12-14T18:57:00.277Z","address":{"street":"455 Tremont St","city":"Boston","state":"MA","zip":"02178"}}


// Update to sample customer for POST

{
	"first_name": "James",
	"last_name":"Doe",
	"company":"JD Solutions",
	"logo_url":"http://www.nixoninwhittier.com/wp-content/uploads/2013/04/surprise-logo.jpg",
	"email":"jdsolutions@gmail.com",
	"phone":"212-555-4839",
	"address":{
		"street":"455 Tremont St",
		"city":"Boston",
		"state":"MA",
		"zip":"02178"
	}
}


// API response to sample customer PUT

ReferenceError: options is not defined<br> &nbsp; &nbsp;at Function.module.exports.updateCustomer (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/models/customer.js:86:43)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/routes/customers.js:45:11<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:131:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:277:22<br> &nbsp; &nbsp;at param (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:349:14)<br> &nbsp; &nbsp;at param (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:365:14)<br> &nbsp; &nbsp;at Function.process_params (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:410:3)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:271:10)<br> &nbsp; &nbsp;at Function.handle (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:176:3)<br> &nbsp; &nbsp;at router (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:46:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:312:13)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:280:7
//then after fixing this missing options parameter...
[{"_id":"566f10fccd6e4aa364c30f9e","first_name":"James","last_name":"Doe","company":"JD Solutions","logo_url":"http://www.nixoninwhittier.com/wp-content/uploads/2013/04/surprise-logo.jpg","email":"jdsolutions@gmail.com","phone":"212-555-4839","__v":0,"createdAt":"2015-12-14T18:57:00.277Z","address":{"zip":"02178","state":"MA","city":"Boston","street":"455 Tremont St"}}]


// Sample invoice for POST

{
	"customer": "566f10fccd6e4aa364c30f9e",
	"service": "Computer Repair",
	"price": "99.99",
	"status": "unpaid",
	"due":"2015-09-23"
}


// API response to sample invoice PUT

ReferenceError: invoice is not defined<br> &nbsp; &nbsp;at Function.module.exports.addInvoice (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/models/invoice.js:43:13)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/routes/invoices.js:32:10<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:131:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:277:22<br> &nbsp; &nbsp;at Function.process_params (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:330:12)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:271:10)<br> &nbsp; &nbsp;at Function.handle (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:176:3)<br> &nbsp; &nbsp;at router (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:46:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:312:13)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:280:7<br> &nbsp; &nbsp;at Function.process_params (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:330:12)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:271:10)
// then after fixing the misnamed parameter...
{"__v":0,"customer":"566f10fccd6e4aa364c30f9e","service":"Computer Repair","price":"99.99","due":"2015-09-23","_id":"566f1bd78fc82a4c65bd587f"}


// API response to sample invoice PUT

ReferenceError: update is not defined<br> &nbsp; &nbsp;at Function.module.exports.updateInvoice (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/models/invoice.js:64:34)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/routes/invoices.js:46:10<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:131:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:277:22<br> &nbsp; &nbsp;at param (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:349:14)<br> &nbsp; &nbsp;at param (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:365:14)<br> &nbsp; &nbsp;at Function.process_params (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:410:3)<br> &nbsp; &nbsp;at next (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:271:10)<br> &nbsp; &nbsp;at Function.handle (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:176:3)<br> &nbsp; &nbsp;at router (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:46:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:312:13)<br> &nbsp; &nbsp;at /Users/israelvicars/Github/mongodbianempire/04_mean_invoices/node_modules/express/lib/router/index.js:280:7
// then after fixing misnamed var...
{"_id":"566f1bd78fc82a4c65bd587f","customer":"566f10fccd6e4aa364c30f9e","service":"Computer Repair","price":"499.99","due":"2015-09-23","__v":0,"stage":null,"createdAt":null}
// it updated!








//
