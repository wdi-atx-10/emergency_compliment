var express = require('express');
var router = express.Router();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomnumber = getRandomInt(0, compliments.length-1);

var randomcompliment = compliments[randomnumber];

//var randomcompliment = compliments[getRandomArbitrary(0, compliments.length)];

/* GET home page.*/ 
router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  var newcompliment = req.body.submittedcompliment;
  compliments.push(newcompliment);
  res.render('index', { title: "Hey " + name + " guess what! " + randomcompliment});
});


/*
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:name',function(req,res){
  var name = req.params.name;
  res.sendfile("index.html", { title: "Hey " + name + " guess what! " + randomcompliment});
});

app.post('/submit',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})


*/

module.exports = router;
