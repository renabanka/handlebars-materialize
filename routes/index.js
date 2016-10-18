var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rena Banka' });
});

router.get('/about', function(req, res, next) { 
	var self = {
		name: 'Rena',
		phone: '559-260-8113',
		email: 'renabanka@gmail.com'
	};
	//* response.render() */
	//1st: template (view)
	//2nd: an Object with data
	res.render('about', self);

});

router.get('/faq', function(req, res, next) {
	var questions = {
		questions: ['Can I have a cookie?', 'Can I have more sleep?'],
		answers: ['yasss','of course!']
	};
	res.render('faq', questions);
});


router.get('/login', function(req, res, next) {
	var user = {
		// name: 'rena',
		password: 'banka',
		hint: 'lastname'
	};
	
	res.render('login', user); 
});

module.exports = router;
