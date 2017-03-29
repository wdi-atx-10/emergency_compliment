var express = require('express');
var router = express.Router();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

/* GET home page. */


router.get('/', function(req, res, next) {
  var thing = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', {
  title : "Emergency Compliment for WDI",
  comment : thing
});
})
module.exports = router;
