var mongoose = require('mongoose');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/shifts', function(req) {
	 	var shifts = new ShiftSwap ({
	 		text: req.body.type,
	 		date: req.body.date,
	 		startTime: req.body.startTime,
	 		endTime: req.body.endTime,
	 		accepted: req.body.accepted,
            postedBy: req.body.postedBy
	 	})

		shifts.save(function(err){
			if(err) throw err;
		})
	})

}//end of module exports