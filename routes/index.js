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


/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  var greeting = 'Welcome to the site!';

  console.log(req.body.name);

  if (req.body.name != undefined) {
    welcome = 'Welcome to the site '+ req.body.name + '!!!';
  }
  res.render('index', {
    title: 'Emergency Compliments!!!',
    comments: compliment,
    color: color,
    welcome: greeting
  });

});

router.post('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
  var greeting = 'Welcome to the site, ' + req.body.name;

  res.render('index', {
    title: 'Emergency Compliments!!!',
    comments: compliment,
    color: color,
    welcome: greeting
  });

/*
  req.checkBody('name', 'Name required').notEmpty();
  req.sanitize('name').escape();
  req.sanitize('name').trim();

  var errors = req.validationErrors();


  if (errors) {
    res.render('index');
  } else {
    res.render('index', {
      title: 'Emergency Compliments!!!',
      comments: compliment,
      background: color
    });
  }
*/


})
module.exports = router;
