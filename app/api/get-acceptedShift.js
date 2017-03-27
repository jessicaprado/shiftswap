var mongoose = require('mongoose');
var Fb = require('./../shiftSwap/services/user.model.js');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
        app.get('/api/accepted', function(req, res) {
            Fb.find({})
                .populate('acceptedShifts')
                .exec(function (err, result) {
                    res.send(result)
                })
        })

}//end of module exports/

