var mongoose = require('mongoose');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	app.get('/api/shifts', function(req, res){
	 	ShiftSwap.find({})
	 	
	 	.populate('Fb')

	 	.exec(function(err, doc){
	 		console.log(doc);
		 	if (err) throw err;
		 	res.json(data);
		})
	})
}