var mongoose = require('mongoose');
var db = require('./../shiftSwap/services/connection.js');
var ShiftSwap = require('./../shiftSwap/services/shift.model.js');

// Require bluebird as promise
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
    app.post('/api/accepted', function(req, res) {
        console.log(req)
        // ShiftSwap.findByIdAndUpdate(id, {$set: {accepted: 'true'}}, function (err, doc) {
        //     if (err) throw err;
        //     res.json(doc);
        //     console.log(doc);
        // })
    })


}//end of module exports