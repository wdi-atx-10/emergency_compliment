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
router.get('/name', function(req, res, next) {
var name = req.params.name;
var compliments = compliments[Math.floor(Math.random()*compliments.lenght)]
res.send('Hey,' + name +'!' + compliment );

});
router.get('/', function(req, res, next) {
 var compliment = compliments[Math.floor(Math.random()*compliments.length)];
 res.render('index', {
   title: 'Express',
   niceComment: compliment });
   console.log(compliment);
});

router.post("/", function(req, res){
compliments.push(req.body.newCompliment);
res.redirect('/');

});

module.exports = router;
