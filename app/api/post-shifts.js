var mongoose = require('mongoose');
var Fb = require('./../shiftSwap/services/user.model.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/shifts', function(req) {

         var shifts = new ShiftSwap({
             title: req.body.title,
             date: req.body.date,
             start: req.body.start,
             end: req.body.end,
             accepted: req.body.accepted,
             postedBy: req.body.postedBy,
             userID: req.body.userID
         });
         console.log(shifts);
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
                       	}
				 })
             }
         })
     })
}//end of module exports