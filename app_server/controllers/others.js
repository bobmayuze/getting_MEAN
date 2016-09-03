/* GET Other pages. */
module.exports.about = function (req, res) {
	res.render('index', {title: 'About the Web'});
}; //The index here refers to app_server/view/index.jade file