/* GET Other pages. */
module.exports.about = function (req, res) {
	res.render('generic-text', {title: 'About the Web'});
}; 