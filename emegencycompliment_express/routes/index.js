var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
];
var getRandomCompliment = function(){
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  return randomCompliment;
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  title: 'Emergency Compliments',
  compliment: getRandomCompliment() });
});

module.exports = router;
