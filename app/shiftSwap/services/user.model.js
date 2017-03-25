// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var Schema = mongoose.Schema;

var Fb = new Schema({
    facebook_id: {
        type: String
    },
    token: {
        type: String
    },
    name: {
        type: String
    },
    acceptedShifts: [{
        type: Schema.Types.ObjectId,
        ref: 'ShiftSwap'
    }]
});

// methods ======================
// generating a hash
Fb.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
Fb.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var Fb = mongoose.model('Fb', Fb);

// create the model for users and expose it to our app
module.exports = Fb;