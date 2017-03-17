var mongoose = require('mongoose');
//var db = require('./app/shiftSwap/services/connection.js');
//var ShiftSwap = require('./app/shiftSwap/services/shift.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/shifts', function(req, res) {
	 	//var shifts = new ShiftSwap (
	 		console.log(req.body)
	 	

	 	
	 })
}