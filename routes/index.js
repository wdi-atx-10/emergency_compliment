var express = require('express');
var router = express.Router();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "You have a Pizza face"
]

function getRandomCompliment() {
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  return compliment;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Emergency Compliment',
    compliment: getRandomCompliment()
  });
});

router.get('/:name', function(req, res) {
  var name = req.params.name;
  res.send('Howdy, ' + name + '! ' + getRandomCompliment());
});

router.post('/', function(req, res) {
  var newComp = req.body.compliment;
  compliments.push(newComp);
  console.log(compliments);
  res.redirect('/');

});

module.exports = router;
