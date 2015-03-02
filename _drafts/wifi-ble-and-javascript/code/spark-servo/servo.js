var express = require('express')
var five = require('johnny-five');
var Spark = require('spark-io');
var app = express();
var servo;

// ensure the Spark token and device id are stored in ~/.sparkrc
var board = new five.Board({
	io: new Spark({
		token: process.env.SPARK_TOKEN,
		deviceId: process.env.SPARK_DEVICE_ID
	})
});

board.on('ready', function() {
	// connect to the Spark and pin A0 first
	servo = new five.Servo({
		pin: 'A0'
	});
	console.log('Servo is ready!');
});

app.use(express.static(__dirname));

// take in the deg values from the web browser
app.get('/rotate/:deg', function (req, res) {
	if (servo) {
		servo.to(parseInt(req.params.deg), 1000)
		console.log('Rotate ' + req.params.deg + 'deg');
	}
})

var server = app.listen(3000, function () {
	console.log('Control the servo at http://localhost:' + server.address().port);
})
