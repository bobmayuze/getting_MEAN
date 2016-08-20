/* GET home page */
module.exports.index = function (req, res) {
	res.render('index', {title: 'Takahashi Takumi'});
}; //The index here refers to app_server/view/index.jade