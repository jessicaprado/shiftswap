var mongoose = require('mongoose');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');
var Fb = require('./../shiftSwap/services/user.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	app.get('/api/shifts', function(req, res){
	 	ShiftSwap.find({})

	 	.populate('postedBy')

	 	.exec(function(err, doc){
	 		
		 	if (err) throw err;
		 	res.json(doc);
		})
	})
}