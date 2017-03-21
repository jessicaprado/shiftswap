var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var ShiftSwap = new Schema ({
	text: {
		type: String
	},
	date: {
		type: Date
	},
	startTime: {
		type: String
	},
	endTime: {
		type: String
	}
})

var ShiftSwap = mongoose.model('ShiftSwap', ShiftSwap);

module.exports = ShiftSwap;