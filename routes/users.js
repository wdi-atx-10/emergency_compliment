var express = require('express');
var router = express.Router();



var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]



/* GET users listing. */
router.get('/', function(req, res, next) {
  var thing = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('index', {
  title : "Emergency Compliment for You and WDI",
  user: "You are Awesome!",
  comment : thing
});
})

router.get('/:name', function(req,res,next){
  var thing = compliments[Math.floor(Math.random()*compliments.length)];
  res.render('users/new', {
    title: 'Emergency Compliment for You and WDI',
    user: req.params.name + ' is the one looking for compliments!',
    comment: thing
  })
})

router.post('/', function(req, res, next) {
    var newCompliment = new Compliment({
        compliment: req.body.compliment
    });

    newCompliment.save(function(err, compliment, next){
        if(err){
            res.status(500).send({
                status: 'Error',
                error: err
            });
        } else {
            res.redirect('/');
        //    res.status(200).json({
            //    status: 'OK',
                //compliment: compliment
            //});
        }
    });

});



module.exports = router;
