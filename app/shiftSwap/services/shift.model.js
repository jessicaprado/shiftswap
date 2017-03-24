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
	},
	accepted: {
		type: Boolean 
	},
	postedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'Fb'
	}]
})

var ShiftSwap = mongoose.model('ShiftSwap', ShiftSwap);

module.exports = ShiftSwap;