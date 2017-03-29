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
var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];


function getRandomCompliment(){
  var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  return randomCompliment;
}

function pushNewCompliment(newCompliment){
  compliments.push(newCompliment);
}

function getRandomColor(){
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  return randomColor;
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Emergency Compliment',
    greeting: "Hello there",
    randomCompliment: getRandomCompliment(),
    backgroundColor: getRandomColor()
  });
});

router.get('/:name', function(req, res) {
  res.render('index', {
    title: 'Emergency Compliment',
    randomCompliment: getRandomCompliment(),
    greeting: "Hello there, " + req.params.name,
    backgroundColor: getRandomColor()
  });
});

router.post('/', function(req, res) {
  var newCompliment = req.body.newCompliment;
  if (newCompliment.length > 0){
    pushNewCompliment(newCompliment);
  };
  res.render('index', {
    title: 'Emergency Compliment',
    greeting: 'Hello there',
    randomCompliment: getRandomCompliment(),
    backgroundColor: getRandomColor()
  });
});

module.exports = router;
