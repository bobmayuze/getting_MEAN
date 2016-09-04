/* GET 'home' page, which is the main or index page in the collections of locations */
module.exports.homelist = function (req, res) {
	res.render('locations-list', { title: 'Home' });
};

/* GET 'Location info' page */
module.exports.locationinfo = function (req, res) {
	res.render('index', {title: 'Location info'});
}; 

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
	res.render('index', {title: 'Add review'});
}; 
