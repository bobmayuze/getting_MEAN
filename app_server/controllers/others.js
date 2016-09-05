/* GET Other pages. */
module.exports.about = function (req, res) {
	res.render('generic-text', {
		title: 'About the Web',
		content: 'Loc8r was created to help people find places to sit down and get a bit of work done.'
	});
};  