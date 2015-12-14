// add an admin user

db.createUser( { "user" : "israel",
                 "pwd": "1234",
                 "roles" : [ { role: "clusterAdmin", db: "admin" },
                             { role: "readAnyDatabase", db: "admin" },
                             "readWrite"
                             ] },
               { w: "majority" , wtimeout: 5000 } )


// create a collection

db.createCollection("customers")


// add a document to a collection

db.customers.insert({first_name:"John", last_name: "Doe"})


// add multiple documents to a collection

db.customers.insert([
	{
		first_name: "Amerigo", last_name: "Vespuchi"
	},
	{
		first_name: "Michael", last_name: "Angelo"
	},
	{
		first_name: "Leo", last_name: "Nardo"
	}
])


// variations on adding documents to a collection

db.customers.insert({first_name:"Will", last_name: "Yum", gender:"male"})

db.customers.insert({first_name:"", last_name: "Yum", gender:"female", age: 33, birthdate: new Date("Sep 10, 1949")})

db.customers.insert({first_name:"Ote", last_name: "Meal", gender:"male"})


// finding documents in a collection

db.customers.find({gender: "male"}).pretty()

db.customers.find({gender: "male"}, {first_name: 1})

db.customers.findOne({gender: "male"})


// updating a document

db.customers.update({first_name: "Will"},{last_name: "Yim"}) // THE STUPID WAY THAT DELETES EVERYTHING BUT THE UPDATED FIELD

db.customers.update({first_name: "Leo"},{$set:{last_name:"Nardo Da Vinci"}}) // WHAT YOU PROBABLY ARE TRYING TO DO INSTEAD

// update a document by querying a unique value when possible

db.customers.update({"_id" : ObjectId("566bd3cf9520b213347632ce")},{$set:{first_name:"Otis"}})

// update multiple documents

db.customers.update({gender: "female"},{$set:{gender:"Female"}},{multi:true})

// adding a non-existent field when updating (insert when updating = upsert)

db.customers.update({first_name: "Leo"},{$set:{age:"453"}},{upsert: true})

db.customers.update({last_name: "Yum"},{$unset: {age:1}})
db.customers.update({last_name: "Yum"},{$set:{first_name:"Will"}},{upsert: true})

// increment a value
db.customers.update({first_name: "Leo"},{$inc:{age: 110}})

// removing a document

db.customers.remove({first_name: "Will"}, true)

// removing all documents with a shared attribute value

db.customers.remove({gender: "male"})

// ARRAYS & EMBEDDED DATA

// adding a complex document

db.customers.insert({
  first_name: "Rafi",
  last_name: "Olee",
  age: 49,
  address: {
    street: "120 Main St",
    city: "Capital",
    state: "New Hampshire"
  },
  phone: {
    home: "222-222-9939",
    mobile: "339-893-3830"
  },
  services: [
    {
      service_id: "hosting_linux",
      service_name: "Linux Hosting"
    },
    {
      service_id: "hosting_osx",
      service_name: "OSX Hosting"
    },
    {
      service_id: "hosting_windows",
      service_name: "Windows Hosting",
      version: "Vista"
    }
  ],
  services_count: 3
})

// list objects in an array
db.customers.find({first_name:"Rafi"},{services:1})

// list properties of objects in an array
db.customers.find({first_name:"Rafi"},{"services.service_name":1})

// lookup based in an object in an array
db.customers.find(
  {first_name:"Rafi", "services.service_id":"hosting_windows"},
  {"services.version":1}
)

// pushing an update to an array

db.customers.update(
  {first_name: "Rafi"},
  {$push:
    {services:
      {
        service_id: "hosting_windows",
        service_name: "Windows Hosting"
      }
    }
  }
)



//
