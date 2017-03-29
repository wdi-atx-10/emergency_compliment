var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you" + name,
  "High five = ^5, " + name,
  "Amanda thinks you're wicked smart, " + name +"!",
  "Britney Jo is sooo proud of you" + name + "! :)",
  "Sean would totally hire you, " + name + ".",
  "It's almost beer o'clock! " + name + ". Drink resonsibly! ",
  name + "The sun will come up tomorrow!"
];
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];



/* GET home page. */
router.post('/', function(req, res) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  res.send('/name', {
    words: 'Dont feel down....',
    title: 'feel good about yourself!',
    niceComment: compliment,
    });
});


module.exports = router;
