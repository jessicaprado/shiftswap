var mongoose = require('mongoose');
var db = require('./../app/services/connection.js'); 
var ShiftSwap = require('./../app/services/shift.model.js'); 

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/shifts', function(req, res) {
	 	//var shifts = new ShiftSwap (
	 		console.log(req.body)
	 	

	 	
	 })
}