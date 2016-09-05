/* GET 'home' page, which is the main or index page in the collections of locations */
module.exports.homelist = function (req, res) {
	res.render('locations-list', { 
		title: 'Borilliant-Find a place to work with wifi',
		pageHeader: {
			title: 'Borilliant',
			strapline: 'Find places to work with WIFI near you!'
		},
		sidebar: "Looking for wifi and a seat? Borilliant helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Borilliant help you find the place you're looking for.",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '123 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'Burger Queen',
			address: '121 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]
	 });
};

/* GET 'Location info' page */
module.exports.locationinfo = function (req, res) {
	res.render('location-info', {
	title: 'Starcups',
	pageHeader: {
		title: 'Starbullshit'
	},
	sidebar: {
		context: 'is on Borilliant because it has accessible wifi and space to sit down with your laptop and get some work done.',
		callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
	},
	location: {
		name: 'Starcups',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 3,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '100m',
		openingTimes: [{
			days: 'Monday - Friday',
			opening: '7:00am',
			closing: '7:00pm',
			closed: false
            }, {
			days: 'Saturday',
			opening: '8:00am',
			closing: '5:00pm',
			closed: false
            }, {
			days: 'Sunday',
			closed: true
            }],
            reviews: [{
			author: 'Simon Holmes',
			rating: 5,
			timestamp: '16 July 2013',
			reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
			author: 'Charlie Chaplin',
			rating: 3,
			timestamp: '16 June 2013',
			reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
	}
	


	});

}; 

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
	res.render('location-review-form', {title: 'Add review'});
}; 
