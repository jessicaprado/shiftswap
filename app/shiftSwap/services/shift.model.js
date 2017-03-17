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
		type: Date
	},
	endTime: {
		type: Date
	}
})

var ShiftSwap = mongoose.model('ShiftSwap', ShiftSwap);

module.exports = ShiftSwap;