var express = require('express');
var router = express.Router();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
];

function randomColor(){
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var color = colors[Math.floor(Math.random()*compliments.length)];
  console.log(color);
  return color;

}

function getRandomCompliments(newComp){

  if (newComp) {
    compliments.push(newComp);
  }

  console.log(compliments);

  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  return compliment;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello There',
                        compliment: getRandomCompliments(),
                        color: randomColor()

    });
});

router.get('/:name', function(req, res, next) {
  res.render('index', { title: 'Hello There, ' + req.params.name ,
    compliment: getRandomCompliments(),
    color: randomColor()
  });
});

//POST home page
router.post('/', function(req, res, next) {
  console.log('coming from the POST: ' + req.body.compliment);
  if (req.body.compliment) {
    getRandomCompliments(req.body.compliment);
  }
  res.render('index', { title: 'Hello There',
                        compliment: getRandomCompliments(),
                        color: randomColor()
  });


});

module.exports = router;
