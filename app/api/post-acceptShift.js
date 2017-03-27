var mongoose = require('mongoose');
var Fb = require('./../shiftSwap/services/user.model.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
    app.post('/api/accepted', function(req) {
        console.log(req.body);
        ShiftSwap.findOneAndUpdate(
            {"_id" : req.body.id},
            {$set: {accepted: true}},
            function (err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    doc.save(function (err, newdoc) {
                        if(err) {
                            throw err;
                        } else {
                            var facebookId = newdoc.userID

                            Fb.findOneAndUpdate(
                                {"facebook_id" : facebookId},
                                {$push: {
                                    'acceptedShifts': newdoc._id}}, function (err, updated) {
                                    if (err) {
                                        res.send(err);
                                    } else {
                                        console.log("UPDATED:" + updated);
                                    }
                            })
                        }
                    })
                }
            })
    })

}//end of module exports