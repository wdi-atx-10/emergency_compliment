var express = require('express');
var router = express.Router();


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "The sun will come up tomorrow"
];
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  res.render('index', {
    words: 'Dont feel down....',
    title: 'feel good about yourself!',
    niceComment: compliment,
    });
});


module.exports = router;
