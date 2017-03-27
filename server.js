var express = require('express');
var app = express();
var bodyParser = require('body-parser')
PORT = process.env.PORT || 3000;

var db = require('./app/shiftSwap/services/connection.js');
var ShiftSwap = require('./app/shiftSwap/services/shift.model.js');

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

//passport JS
var passport = require('passport');
require('./app/shiftSwap/config/passport')(passport); // pass passport for configuration
var dotenv = require('dotenv');
dotenv.load();

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
    secret: 'this is the secret'
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// routes ======================================================================
require('./app/shiftSwap/sessions/passport.routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

//var getRoute = require("./api/get-items.js")(app);
var postRoute = require("./app/api/post-shifts.js")(app);
var getRoute = require("./app/api/get-shifts.js")(app);
var getMyShifts = require("./app/api/get-postedShifts.js")(app);
var postAcceptedShifts = require("./app/api/post-acceptShift.js")(app);
var getAcceptedShifts = require("./app/api/get-acceptedShift.js")(app);

app.listen(PORT, function() {
	console.log ("I am listening on PORT " + PORT);
})