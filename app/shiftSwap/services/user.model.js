// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var Fb = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    facebook: {
        id: String,
        token: String,
        name: String
    }
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