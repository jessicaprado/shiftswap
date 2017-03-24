var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
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
	postedBy: {
		type: String
	},
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'Fb'
    }]
})
//ShiftSwap.plugin(deepPopulate);
var ShiftSwap = mongoose.model('ShiftSwap', ShiftSwap);

module.exports = ShiftSwap;