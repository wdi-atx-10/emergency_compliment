var mongoose = require('mongoose'),


  var schema = new mongoose.Schema({
 name: {type:String, required: true},
});

var Compliment = mongoose.model('Compliment', schema);

module.exports = Compliment;
