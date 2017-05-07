var express = require('express');
var router = express.Router();
var compliments = [
  "You go faster than Sanic!",
  "You'll never have to complete CodeWars challenges in a work environment!",
  "Mike Dang's zerg micro is no match for you Toss build!",
  "People only hire for CSS!",
  "Drugs",
  "Magic the Gathering is a certifiable work skill!"
];
var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];


/* GET home page. */

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
  var name = req.params.name;
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  var color = colors[Math.floor(Math.random()*colors.length)];
    res.render('index', {
      title: 'Emergency Compliment',
      compliment: compliment,
      color: color,
      name: name
     });
});

router.post('/', function(req, res){
  var newCompliment = req.body.compliment.val;
  compliments.push(newCompliment);
  res.redirect('/');
});
  //
  // var newCompliment = form.val();
  // compliments.push(newCompliment);

module.exports = router;
