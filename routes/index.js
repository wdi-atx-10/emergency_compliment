var express = require('express');
var router = express.Router();

/* GET home page. */

  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"];



  function randomCompliment(compliments) {
    return compliments[Math.floor(Math.random() * compliments.length)];
}

function pushNewCompliment(newCompliment){
  compliments.push(newCompliment);
 }

 function randomColor() {
     var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
     return colors[Math.floor(Math.random() * colors.length)];
 }

 router.get('/', function(req, res, next) {
   res.render('index', {
     title: 'Emergency Compliment',
     greeting: "Hello there",
     randomCompliment: randomCompliment(compliments),
     backgroundColor: randomColor()
   });
 });

 router.get('/:name', function(req, res, next) {
   res.render('index', {
     title: 'Emergency Compliment',
     greeting: "Hello there",
     randomCompliment: randomCompliment(),
     backgroundColor: randomColor()
   });
 });

 router.post('/', function(req, res) {
   var newCompliment = req.body.newCompliment;
   if (newCompliment.length > 0){
     pushNewCompliment(newCompliment);
   };
   res.redirect('/');

 });

 module.exports = router;
