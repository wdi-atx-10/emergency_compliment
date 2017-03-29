var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
		var compliments =  [
  		"Your instructors love you",
  		"High five = ^5",
  		"Amanda thinks you're wicked smart!",
  		"Britney Jo is sooo proud of you! :)",
  		"Sean would totally hire you.",
  		"It's almost beer o'clock!"
		];

	var item = compliments[Math.floor(Math.random()*compliments.length)];

	for( var i = 0, x = compliments.length; i < x; i++){
		res.render('index', { title: item });
	};

});

router.get('/name', function(req,res,next){
	var name = req.query.name

	var compliments =  [
  		"Your instructors love you",
  		"High five = ^5",
  		"Amanda thinks you're wicked smart!",
  		"Britney Jo is sooo proud of you! :)",
  		"Sean would totally hire you.",
  		"It's almost beer o'clock!"
		];

	var item = compliments[Math.floor(Math.random()*compliments.length)];

	for( var i = 0, x = compliments.length; i < x; i++){
		res.render('index', { title: item + ", " + name });
	};

})

module.exports = router;
