var express = require('express');
var router = express.Router();

var compliments = [
    'Oh good! We found something that doesn\'t make you look fat.',
    'You\'re lucky you\'re pretty.',
    'I heard you\'re going on stage at a comedy club tonight. I had no idea you were funny.',
    'You sound like a really, really good high school band.',
    'You look so great on instagram.',
    'You\'re so much fun when you\'re drunk.',
    'You should wear glasses more often. You look nice. And smarter.',
    'I\'m a big fan of you\'re earlier work.',
    'You are going to make some lucky feline very happy some day.',
    'Thanks for making me feel better about my own problems.',
    'Your presentation will be an inspiration for anyone actually listening',
    'Spending two hours getting ready every morning really brings out your natural beauty.'
];
var colors = ['red', 'orange', 'pink', 'blue', 'green', 'brown', 'yellow'];

var randomize = (arr) => { return arr[Math.floor(Math.random() * arr.length)] };

/* GET home page. */
router.get('/', function(req, res, next) {
    var comp = randomize(compliments);
    var color = randomize(colors);
    var options = {
        title: 'Complement Generator',
        compliment: comp,
        bgColor: color
    };
    res.render('index', options);
});

router.post('/', function(req, res, next) {
    var input = req.body.newCompliment;
    compliments.push(input);
    res.redirect('/');
});

router.get('/:name', function(req, res, next) {
    var comp = randomize(compliments);
    var color = randomize(colors);
    var options = {
        title: 'Compliment Generator',
        compliment: comp,
        bgColor: color,
        name: req.params.name
    };
    res.render('index', options);
});

module.exports = router;
