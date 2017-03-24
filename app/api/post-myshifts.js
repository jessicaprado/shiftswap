var mongoose = require('mongoose');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
    app.post('/api/shifts', function(req, res) {
        ShiftSwap.findByIdAndUpdate(id, {$set: {accepted: 'true'}}, function (err, doc) {
            if (err) throw err;
            res.json(doc);
        })
    })


}//end of module exports