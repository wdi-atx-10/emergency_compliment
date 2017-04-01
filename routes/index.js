var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', {
    title: 'Emergency Compliment!',
    complimentRandom: compliments[Math.floor(Math.random()*compliments.length)],
  });
});

router.post('/', function(request, response) {
  var compliment = req.body.compliment;

  if (compliment.length>0) {
    compliments.push(compliment);
  }
  response.redirect('/');
});



module.exports = router;
