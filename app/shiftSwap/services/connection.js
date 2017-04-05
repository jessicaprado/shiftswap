var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shiftSwap');
//mongoose.connect('mongodb://heroku_ldz76z2k:enjeidb40ang165tdv3ivlfcp0@ds151070.mlab.com:51070/heroku_ldz76z2k');
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error)
});

db.once('open', function(){
	console.log("DB connected")
});

module.exports = db;