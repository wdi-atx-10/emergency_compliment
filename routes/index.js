var express = require('express');
var router = express.Router();
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!",
  "Melissa loves South Korean boy bands",
  "The sun will come up tomorrow"
];
/* GET home page. */

router.get('/:name', function(req, res){
  var name = req.params.name;
  var compliment = compliments[Math.floor(Math.random()*compliments.length)]
  res.send('Howdy, ' + name + '! <br><br>' + compliment);
});

router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', {
    title: 'Orient Express',
    niceComment: compliment
   });
});

router.post('/', function(req, res){
  var newCompliment = req.body.compliment;
  compliments.push(newCompliment);
  res.redirect('/');
});


module.exports = router;
