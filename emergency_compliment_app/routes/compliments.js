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

function capitalize(str) {
   var splittedEnter = str.split(" ");
   var capitalized;
   var capitalizedResult;
   for (var i = 0 ; i < splittedEnter.length ; i++){
       capitalized = splittedEnter[i].charAt(0).toUpperCase();
       splittedEnter[i] = capitalized + splittedEnter[i].substr(1).toLowerCase();
    }
  return splittedEnter.join(" ");
}

router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  var greeting = "Hello!";
  res.render('compliments/index', {compliment: compliment, color: color, greeting: greeting});
});

router.get('/new', function(req, res, next){
  res.render('compliments/new');
});

router.post('/', function(req, res, next){
  var text = req.body.text;
  compliments.push(text);
  res.redirect('/');
});

router.get('/:name', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  var greeting = "Hello, " + capitalize(req.params.name) + "!";
  res.render('compliments/index', {compliment: compliment, color: color, greeting: greeting});
});

module.exports = router;
