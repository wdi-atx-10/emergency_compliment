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
console.log(compliments);


// function getRandomCompliments()= [compliments[Math.floor(Math.random()*compliments.length)];

router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  res.render('index', {
    title: 'Emergency Compliment',
    compliment: compliment,
    color: color,
    name: ''
  });
});

router.get('/:name', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  var name = req.params.name;
  res.render('index', {
    title: 'Emergency Compliment',
    compliment: compliment,
    color: color,
    name: name
  });
});






module.exports = router;
