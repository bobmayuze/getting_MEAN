/* GET 'home' page, which is the main or index page in the collections of locations */
module.exports.homelist = function (req, res) {
	res.render('locations-list', { 
		title: 'Borilliant',
		pageHeader: {
			title: 'Borilliant',
			strapline: 'Find places to work with WIFI near you!'
		},
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
	res.render('location-info', {title: 'Location info'});
}; 

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
	res.render('location-review-form', {title: 'Add review'});
}; 
