var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Emergency Compliment',
    randomCompliment: compliments[Math.floor(Math.random()*compliments.length)],
    backgroundColor: colors[Math.floor(Math.random()*colors.length)]
  });
});

router.post('/', function(req, res) {
  var compliment = req.body.compliment;

  if (compliment.length>0) {
    compliments.push(compliment);
  }
  res.redirect('/');
});

router.get('/:name', function(req, res) {
  var name= req.params.name;
  res.render('index', {
    title: 'Emergency Compliment',
    name: req.params.name,
    randomCompliment: 'Hey '+name+', '+compliments[Math.floor(Math.random()*compliments.length)],
    favorite: null,
    backgroundColor: colors[Math.floor(Math.random()*colors.length)]
  });
});

router.post('/:name', function(req, res) {
  var compliment = req.body.compliment;

  if (compliment.length>0) {
    compliments.push(compliment);
  }

  res.redirect('/:name');
});

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
];

colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

module.exports = router;
