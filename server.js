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
var dotenv = require('dotenv');
dotenv.load();

//var getRoute = require("./api/get-items.js")(app);
var postRoute = require("./app/api/post-shifts.js")(app);
var getRoute = require("./app/api/get-shifts.js")(app);

app.listen(PORT, function() {
	console.log ("I am listening on PORT " + PORT);
})