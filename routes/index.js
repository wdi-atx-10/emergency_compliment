var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

router.get('/', function(req, res, next) {
  var thing = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', {
  title : "Emergency Compliment for WDI",
  comment : thing,
  user : req.params.name
});
})
module.exports = router;

router.post('/', function(req, res, next) {
 var newCompliment = new Compliment({
	compliment: req.body.compliment
});

newCompliment.save(function(err,compliment){
	if(err){
      res.status(500).send({
        status: "error",
        error: err
      });
    }
	console.log('Compliment submitted');
	res.redirect('/');
})
});
