var mongoose = require('mongoose');
var Fb = require('./../shiftSwap/services/user.model.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/shifts', function(req) {
         var shifts = new ShiftSwap({
             text: req.body.type,
             date: req.body.date,
             startTime: req.body.startTime,
             endTime: req.body.endTime,
             accepted: req.body.accepted,
             postedBy: req.body.postedBy,
             userID: req.body.userID
         });

         shifts.save(function (err, doc) {
             var facebookId = doc.userID;
             if (err) {
                 throw err
             } else {
				 Fb.findOneAndUpdate(
					 {"facebook_id" : facebookId},
                     {$push: {
					 	'postedShifts': doc._id}}, function (err, newdoc) {
					 	if (err) {
                           	res.send(err);
                       	} else {
                            console.log(doc.userID);
                       		console.log(newdoc);
                     	}
				 })
             }
         })
     })
}//end of module exports