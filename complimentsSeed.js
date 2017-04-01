require('dotenv').config({silent: true});

var mongoose = require('mongoose');
mongoose.connect(process.env.STARCRAFT_DB_CONN);

var Compliment  = require('/');

var ComplimentData = [
  {object:"Your instructors love you"},
  {object:"High five = ^5"},
  {object:"Amanda thinks you're wicked smart!"},
  {object:"Britney Jo is sooo proud of you! :)"},
  {object:"Sean would totally hire you."},
  {object:"It's almost beer o'clock!"}
]
