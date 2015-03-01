var async = require('async');
var SensorTag = require('sensortag');

SensorTag.discover(function(sensorTag) {

	sensorTag.on('disconnect', function() {
		console.log('disconnected!');
		process.exit(0);
	});

	async.series([
		function(callback) {
			console.log('Connect!');
			sensorTag.connect(callback);
		},
		function(callback) {
			console.log('Discovered');
			sensorTag.discoverServicesAndCharacteristics(callback);
		},
		function(callback) {
			console.log('IR Temperature enabled');
			sensorTag.enableIrTemperature(callback);
		},
		function(callback) {
			console.log('readIrTemperature');
			sensorTag.readIrTemperature(function(objectTemperature, ambientTemperature) {
				console.log('\tobject temperature = %d °C', objectTemperature.toFixed(1));
				console.log('\tambient temperature = %d °C', ambientTemperature.toFixed(1));
				callback();
			});
		},
		function(callback) {
			console.log('Gyroscope enabled');
			sensorTag.enableGyroscope(callback);
		},
		function(callback) {
			setTimeout(callback, 1000);
		},
		function(callback) {
			sensorTag.on('gyroscopeChange', function(x, y, z) {
				console.log('On Gyrosope change: '
					+ x.toFixed(1) + '°/s[X]\t'
					+ y.toFixed(1) + '°/s[Y]\t'
					+ z.toFixed(1) + '°/s[Z]');
			});

			sensorTag.notifyGyroscope(function() {
				console.log('Start tracking gyroscope!');
			});
		}
	]);
});
