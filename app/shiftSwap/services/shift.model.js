var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var ShiftSwap = new Schema ({
    title: {
		type: String
	},
	date: {
		type: Date
	},
    start: {
		type: String
	},
    end: {
		type: String
	},
	accepted: {
		type: Boolean
	},
	postedBy: {
		type: String
	},
    userID: {
        type: Number
    }
})
//ShiftSwap.plugin(deepPopulate);
var ShiftSwap = mongoose.model('ShiftSwap', ShiftSwap);

module.exports = ShiftSwap;