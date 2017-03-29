var express = require('express');
var router = express.Router();
var compliments = ["Your instructors love you",
"High five = ^5",
"Amanda thinks you're wicked smart!",
"Britney Jo is sooo proud of you! :)",
"Sean would totally hire you.",
"It's almost beer o'clock!"];
function randomNum() {
var random = compliments[Math.floor(Math.random()*compliments.length)];
return random;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hey', compliment: randomNum()});
});

router.get('/:name', function(req, res){
  res.send('Hi ' + req.params.name + '! ' + randomNum())
});

router.post('/', function(req, res){
  compliments.push(req.body.complimenter);
  res.send('success');
})


module.exports = router;
