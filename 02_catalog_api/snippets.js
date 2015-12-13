// populating database - product 1

db.products.insert({
	name: "Microsoft Surface",
	category: "Electronics",
	model: "7G5-1038",
	sku: "49653007",
	img: "http://microsoftfilestorage.com/someimage.jpg",
	price: 499.99,
	pickup_available: true,
	description: "Long paragraph description. Paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description.",
	release_date: ISODate("2015-09-01"),
	specifications: {
		height: "7.36 inches",
		width: "10.52 inches",
		weight: "21.92 ounces",
		battery_life: "10 hours",
		touch_screen: true
	},
	reviews: [
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser02",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser03",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser04",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser05",
			date: ISODate("2015-09-02"),
			would_recommend: true
		}
	],
	protection_services: [
		'damage',
		'battery',
		'power'
	]
})

// populating database - product 2

db.products.insert({
	name: "Microsoft Surface2",
	category: "Electronics",
	model: "7G5-1038",
	sku: "49653037",
	img: "http://microsoftfilestorage.com/someimage1.jpg",
	price: 599.99,
	pickup_available: false,
	description: "Long paragraph description. Paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description.",
	release_date: ISODate("2015-09-02"),
	specifications: {
		height: "3.36 inches",
		width: "13.52 inches",
		weight: "31.92 ounces",
		battery_life: "12 hours",
		touch_screen: true
	},
	reviews: [
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser02",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser03",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser04",
			date: ISODate("2015-09-02"),
			would_recommend: true
		},
		{
			subject: "Great tablet",
			body: "Great review sentences",
			rating: 4.5,
			user: "someuser05",
			date: ISODate("2015-09-02"),
			would_recommend: true
		}
	],
	protection_services: [
		'damage',
		'battery',
		'power'
	]
})
