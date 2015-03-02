---
title: Getting Started with WiFi, BLE and JavaScript
authors:
- sayanee-basu
intro: 'The Internet of Things is gaining momentum in the recent years as more embedded devices are being connected to the Internet. What does this mean for the web developers? This article explores 2 common wireless protocol, WiFi and BLE,  and gives practical examples to start playing with them with JavaScript and some sensors.'
tags:
- iot
- javascript
- electronics
- hardware
- spark
- sensor-tag
- wifi
- ble
license: cc-by-3.0
---

## Introduction

The [Internet of Things](http://en.wikipedia.org/wiki/Internet_of_Things) is gaining momentum in the recent years as more embedded computing devices are being connected to the Internet. What does this mean for us the web developers? This article will explore 2 common wireless protocol, [WiFi](http://en.wikipedia.org/wiki/Wi-Fi) and [BLE](http://en.wikipedia.org/wiki/Bluetooth_low_energy) and will take you through the starting steps in connecting sensors and servo motors to the Internet. Then we will learn how to control these devices and access the sensor data using JavaScript!

In this article we will explore 2 platforms: [Spark](https://www.spark.io/) for WiFi and [TI Sensor Tag](http://www.ti.com/ww/en/wireless_connectivity/sensortag/index.shtml?INTC=SensorTag&HQS=sensortag) for BLE with practical examples. At any time, you can also look at the [complete annotated code for each example](/code). It will be fun!

### Pre-requisites

This article assumes that you are already an intermediate to advanced level JavaScripter. We will primarily use [node](https://nodejs.org/) and [npm](https://www.npmjs.com/) for server side and simple frontend JavaScript to create some control UI on a web browser. You don't need any prior knowledge of electronics. Seeing you can effect change and gather data from the physical world can be exciting and I hope through this article you will get that first excitement to dive into the fun world of electronics and web technologies! Let's get started!

## Spark and WiFi

Spark Core has a built-in...

One of the reasons why [Spark](https://www.spark.io/) is a great platform especially for any electronics beginner are its [detailed documentation](http://docs.spark.io/) as well as the [community forum](https://community.spark.io/). In this section, we will play with a light sensor and then control a servo from the web browser. Let's first list the electronics components you will need so that you can buy them if you want to physically follow through the examples:

<table style="vertical-align:top;">
	<tr>
		<td width="4%">#</td>
		<td width="25%">Name & Notes</td>
		<td width="25%">Schematic</td>
		<td width="25%">Photo</td>
		<td width="6%">Where to buy</td>
	</tr>
	<tr>
		<td>1</td>
		<td>
			<strong>Spark Core</strong>
			<ul>
				<li><a href="http://docs.spark.io/assets/images/spark-pinout.jpg">pinout diagram</a></li>
				<li><a href="http://docs.spark.io/start/#step-3-connect-your-core-to-the-cloud">LED colors/actions and their meanings</a></li>
			</ul>
		</td>
		<td><img height=150 src="img/spark.jpg"></td>
		<td><img height=150 src="img/spark-pic.jpg"></td>
		<td><a href="https://store.spark.io/?product=spark-core">Spark store</a></td>
	</tr>
	<tr>
		<td>2</td>
		<td>
			<strong><a href="http://en.wikipedia.org/wiki/Breadboard">Breadboard</a></strong>
			<ul>
				<li>Wiring pattern in a breadboard<br><img src="img/wiring.jpg"></li>
				<li>
					<strong>Horizontal rows</strong>
					<br>Red: HIGH or Vin (~6V)
					<br>Blue / Black: LOW or Ground (0V)
				</li>
			</ul>
		</td>
		<td><img height=150 src="img/breadboard.jpg"></td>
		<td><img height=150 src="img/breadboard-pic.jpg"></td>
		<td>You will <a href="http://docs.spark.io/start/">get a breadboard when you buy the Spark Core</a></td>
	</tr>
	<tr>
		<td>3</td>
		<td>
			<strong><a href="http://www.amazon.com/Micro-USB-to-Cable/dp/B004GETLY2">Micro-B to USB cable</a></strong>
		</td>
		<td></td>
		<td><img height=150 src="img/usb.jpg"></td>
		<td>You will <a href="http://docs.spark.io/start/">get this cable when you buy the Spark Core</a> or this might be your mobile charger.</td>
	</tr>

	<tr>
		<td>3</td>
		<td>
			<strong>jumper cables</strong>
			<ul>
				<li><strong>Tip: </strong>Use the same color wires as the schematic so that it will be faster to trace the wires for debugging. E.g. use <strong>RED</strong> for power and <strong>BLACK</strong> for ground.
				</li>
			</ul>
		</td>
		<td><img height=150 src="img/cables.jpg"></td>
		<td><img height=150 src="img/cables-pic.jpg"></td>
		<td><a href="http://www.adafruit.com/product/758">Adafruit</a> or <a href="https://www.sparkfun.com/products/8431">Sparkfun</a></td>
	</tr>

	<tr>
		<td>4</td>
		<td>
			<strong>light dependent resistor (LDR or photocell)</strong>
			<ul>
				<li><strong>Tip:</strong> LDR has no polarity, so either leg can be connected to the analog pin or the ground
				</li>
			</ul>
		</td>
		<td><img height=150 src="img/ldr-schematic.jpg"></td>
		<td><img height=150 src="img/ldr.jpg"></td>
		<td><a href="http://www.adafruit.com/product/161">Adafruit</a> and <a href="https://www.sparkfun.com/products/9088">Sparkfun</a></td>
	</tr>

	<tr>
		<td>5</td>
		<td>
			<strong>1 k ohm resistor</strong>
			<ul>
				<li><strong>Tip:</strong> Resistor has no polarity, so either leg can be connected to the analog pin or the ground.
				</li>
			</ul>
		</td>
		<td><img height=150 src="img/resistor-schematic.jpg"></td>
		<td></td>
		<td><a href="https://www.sparkfun.com/products/8980">Sparkfun</a></td>
	</tr>

	<tr>
		<td>6</td>
		<td>
			<strong>Servo</strong>
			<ul>
				<li><a href="http://en.wikipedia.org/wiki/Servo_(radio_control)">Wikipedia</a></li>
				<li><a href="http://docs.spark.io/shields/#setting-up-the-shield-8-micro-servo-1">Spark and servo</a></li>
				<li><strong>Tip: </strong>For wiring - <em>Yellow</em> is Signal, <em>Orange</em> is +5V (VIN), <em>Brown</em> is ground</li>
			</ul>
		</td>
		<td><img src="img/servo.jpg"></td>
		<td><img src="img/servo-pic.jpg"></td>
		<td><a href="http://www.adafruit.com/product/169">Adafruit</a> or <a href="https://www.sparkfun.com/products/9065">Sparkfun</a></td>
	</tr>
	<tr>
		<td>7</td>
		<td>
			<strong>10 micro Farad Capacitor</strong>
			<ul>
				<li><a href="http://en.wikipedia.org/wiki/Capacitor">Wikipedia</a></li>
				<li><a href="http://docs.spark.io/shields/#setting-up-the-shield-2-electrolytic-capacitor-100uf-5">Capacitors</a></li>
				<li><strong>Tip: </strong> Capacitors have polarity. On the plastic above one of the pins you'll see a light coloured strip with a negative sign "-" on it. Always connect that pin to GND pins or rails </li>
			</ul>
		</td>
		<td><img src="img/capacitor.jpg"></td>
		<td><img src="img/capacitor-pic.jpg"></td>
		<td></td>
	</tr>
</table>

### 1. Setup

In this section, we will connect the Spark Core to your Spark account and then connect it to the local WiFi. To setup the Spark Core, [signup for an account](https://www.spark.io/signup). Then connect the Spark Core to your laptop via the USB cable. You should see a fast-paced blinking blue light which means the Spark Core is waiting for WiFi credentials.

<iframe src="https://vine.co/v/hFHPMue5lgd/embed/simple" width="300" height="300" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

To associate the Spark Core with your account (also known as 'claiming the core') , we will use the `spark-cli` module. Next, we will give the Spark Core our local WiFi credientials so it can connect to the WiFi network.

```shell
$ npm install -g spark-cli
$ spark setup # connect the Spark Core to your account
$ spark setup wifi # connect the Spark Core to your WiFi
```

If you have setup the Spark Core correctly, you will see a breathing cyan light as shown below.

<iframe src="https://vine.co/v/hFwubhA3JXV/embed/simple" width="300" height="300" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

Next, we will note down 2 important values (device id and access token) for your Spark Core that will be needed for any secure communication. Open [Spark's web editor](https://www.spark.io/build), Spark Build for this and note down these 2 values.

![](img/device-id-access-token.jpg)

In the next couple of sections we will go through 2 examples. These 2 examples show 2 different ways you can use Spark:

1. sensing with an LDR (light dependent resistor) with:
	- [firmware code](http://docs.spark.io/firmware/) that will publish the sensor values
	- [spark npm module](https://www.npmjs.com/package/spark) to pick up the values periodically
- moving a servor with buttons on a web browser with:
	- pre-built firmware code [voodootiki spark](https://github.com/voodootikigod/voodoospark)
	- [express](https://www.npmjs.com/package/express), [spark-io](https://www.npmjs.com/package/spark-io) and [johnny-five](https://www.npmjs.com/package/johnny-five) npm modules to built a simple button that can turn the server from the browser

### 2. Sensing photocell values

1. blink the on-board `D7` led

	As the very first step, we will learn how to blink an LED. This is the `hello world` of electronics. [Open the Spark web editor](https://www.spark.io/build) and [copy the simple blinking LED code](code/spark-blinky/blinky.ino). Here it uses a [simple firmware code](http://docs.spark.io/firmware/) to blink the on-board LED `D7` every 1 second. To flash the firmware code onto your Spark Core, click the `flash` icon at the top of the left sidebar and wait for the LED on board to come back to the breathing cyan pattern. You should see the LED `D7` blinking.

	![](img/flash.jpg)
- wire up the breadboard for detecting photocell values

	Here we will need a couple of jumper wires, 1 photocell and 1kΩ resistor. We will firstly wireup the `Red` wire to pin `Vin` and the horizontal lines `+`. And similarly, the `Black` wire to pin `Gnd` and the horizontal line `-`. Next we will connect the photocell (or LDR) to pin `A0` on the Spark Core and the ground, horizontal line `-`. LDRs do not have any polarity, so we can connect either of the legs to `Gnd`. Finally, with the 1kΩ resistor, we will connect to pins `A0` and `Vin` on the Spark Core. This circuit might remind you of your [high school physics voltage divider circuit](http://www.build-electronic-circuits.com/ldr-circuit-diagram/).

	![](img/ldr-circuit.jpg)
- flash the firemware code to read the photocell values

	While you see the breathing cyan on the Spark Core, take the [LDR firmware code](code/spark-ldr/ldr.ino) and flash it onto the Spark Core with the [web ide](https://www.spark.io/build). The firmware code does a couple of things. Every 200ms, it take the analog reading from pin `A0`, to which we connected the LDR and then publishes it as a `Variable` on the Spark Cloud which can then be queried using standard Web APIs. For easy detection and debugging we are also turning on and off the on-board LED `D7` to indicate our code is running.

	![](img/ldr-actual.jpg)

- install the npm module [spark](https://www.npmjs.com/package/spark)

	```shell
	$ npm install spark
	```
- use JavaScript to query the sensor values

	Here's now the fun part and we will query the sensor values using the simple spark code in a file `ldr.js`

	```javascript
	var spark = require('spark');

	spark.login({
	  username: process.env.EMAIL,
	  password: process.env.PASSWORD
	}).then(
	  function(token) {
	  	// your program can successfully connect to the published data from the sensor
	    console.log('Connected to your light sensor successfully!');
	    // console.log('Access Token: ' + token.access_token);

	    spark.listDevices().then(
	      function(devices){
	        // console.log('\nDevices: ', devices);
	        var device = devices[0];

	        // with every published event "getLight", display the sensor value
	        device.onEvent('getLight', function(reply) {
	          var now = new Date();

	          if (reply && reply.data) {
	          	// some fun derivations based on the sensor value
	            if (parseInt(reply.data) < 1000) {
	            	// shine a torch light on the LDR
	            	// amend 1000 according to your environment
	              console.log(now.getSeconds() + ': ' + reply.data + ' bright!');
	            } else if (parseInt(reply.data) > 2000) {
	            	// cover the LDR
	            	// amend 2000 according to your environment
	              console.log(now.getSeconds() + ': ' + reply.data + ' dark! ');
	            } else {
	              console.log(now.getSeconds() + ': ' + reply.data);
	            }
	          }

	        });

	      },
	      function(err) {
	        console.log('List devices call failed: ', err);
	      }
	    );

	  }, function(err) {
	    console.log('Ooops error: ' + err);
	  }
	);
	```

	Let's run this code from the command line using your Spark account's email and password:

	```
	$ EMAIL="{SPARK_EMAIL_ADDRESS}" PASSWORD="{SPARK_ACCOUNT_PASSWORD}" node ldr.js
	```

	You should next see a stream of sensor data. Shine a torch light on the LDR and the value should change and a comment would be displayed. Cover the LDR totally and you will see another comment! So now whatever you do physically in the real world can be sensed with node and JavaScript! Such sensors can be used to sense open/close cupboard doors and light levels in rooms.

	![](img/ldr-result.jpg)

This is just the start in playing with the [Spark JavaScript API](http://docs.spark.io/javascript/#getting-started-logging-in) for the server-side. There are many more [firmware code libraries](https://www.spark.io/build#libraries) available that you can instantly flash to the your SparkCore and collect the results via the [events api](http://docs.spark.io/javascript/#supported-commands-events).

### 3. Control a Servo

1. Let's wireup the breadboard with a servo this time!

	We will use a servo motor and a capacitor. Wire up the Black / Brown wire to the `Gnd` pin of the Spark Core, Orange / Red to the `Vin` of the Spark Core and finally the Yellow wire will be used to wire up to the analog pin `A0` of the Spark Core. We will also use a capacitor between the `Vin` of the Spark Core and `Gnd` of the Spark Core to stabilise the power to the servo. Capacitor is optional, but it's good to have it for stability.

	The control of the servo is fairly easy. It can rotate 180 degrees. So, when the signal is `0V`, it will rotate to 0 degrees and at the other end, when the signal is `5V` it will rotate to 180 degrees. To help us do the analog output of these signals, we will use a firmware called VoodooSpark.

	![](img/servo-circuit.jpg)
- Flash the pre-built firmware [Voodoospark](https://raw.githubusercontent.com/voodootikigod/voodoospark/master/firmware/voodoospark.cpp) using the [Spark web editor](https://www.spark.io/build)	 and wait for the breathing cyan light

	[VoodooSpark](https://github.com/voodootikigod/voodoospark) will allow a local TCP connection instead of the usual HTTP protocol that we used in the earlier example. This allows controlling the Spark Core in real-time. Finally, we will use Express to create the routes that will trigger the rotation of the servo through an html page.

	![](img/servo-actual.jpg)

- Use JavaScript to send signals to the servo via a web browser

	```sh
	$ npm install express johnny-five spark-io
	```

	We will need 3 modules. [Spark-io](https://github.com/rwaldron/spark-io) to output the TCP packets which VooDooSpark firmware on the Spark Core understands. [Johnny-Five](https://github.com/rwaldron/johnny-five) package uses Spark-io and [provides higher level interfaces](https://github.com/rwaldron/johnny-five/tree/master/lib) to many devices such as sensors, motors, switches, etc. And finally [Express](https://github.com/strongloop/express) to serve a webpage and pass HTTP requests from the browser to the Spark Core.
- Store the Spark device id and access token in config file

	Create file `~/.sparkrc` to [store your config](https://github.com/rwaldron/spark-io#getting-started) and add the file to your profile with `source ~/.sparkrc`:

	```sh
	export SPARK_TOKEN="{SPARK_ACCESS_TOKEN}"
	export SPARK_DEVICE_ID="{SPARK_DEVICE_ID}"
	```
- create the JavaScript code in file `servo.js`

	```js
	var express = require('express')
	var five = require('johnny-five');
	var Spark = require('spark-io');
	var app = express();
	var servo;

	// connect to the Spark Core with the authentication info
	var board = new five.Board({
	  io: new Spark({
	    token: process.env.SPARK_TOKEN,
	    deviceId: process.env.SPARK_DEVICE_ID
	  })
	});

	// use analog pin A0
	board.on('ready', function() {
	  servo = new five.Servo({
	    pin: 'A0'
	  });
	  console.log('Servo is ready!');

	});

	app.use(express.static(__dirname));

	// move to servo to a certain degree
	// https://github.com/rwaldron/johnny-five/blob/master/lib/servo.js#L241-251
	app.get('/rotate/:deg', function (req, res) {
	  if (servo) {
	    servo.to(parseInt(req.params.deg))
	    console.log('Rotate ' + req.params.deg + 'deg');
	  }
	})

	var server = app.listen(3000, function () {
	  console.log('Control the servo at http://localhost:' + server.address().port);
	})
	```
- finally we will create the super simple html page `index.html` which will call the routes for the different angles

	```
	<a href="/rotate/10">10 deg</a>
	<a href="/rotate/170">170 deg</a>
	```
- run the code with the node server and click the angles to make the servo move in the physical world!

	```sh
	$ node servo.js
	```

	![](img/servo-output.jpg)

	<video loop="loop" controls="controls">
	  <source src="https://dl.dropboxusercontent.com/u/57433/servo.mp4" type="video/mp4" />
	</video>

This example is just the tip of the iceberg in how you can control many other devices such as motors and switch with the web interface. I find the [Johnny-Five](https://github.com/rwaldron/johnny-five/tree/master/lib) library files very useful to peek into many more things we can hook up and play with!

## TI Sensor Tag and BLE

In this section, we will use with the Bluetooth Low Energy(BLE) protocol with the [TI SensorTag](http://www.ti.com/ww/en/wireless_connectivity/sensortag/index.shtml?INTC=SensorTag&HQS=sensortag), which is designed for developers to play with various sensors and BLE. The SensorTag comes with a BLE chip on-board along with sensors such as IR temperature sensor, humidity sensor, pressure sensor, accelerometer, etc in a compact handy device. The advantage of using BLE is its low power consumption. The SensorTag can be powered with just a coin cell potentially for years.

To play with the TI SensorTag, you need a couple of things:

1. [TI SensorTag](http://processors.wiki.ti.com/index.php/Simplelink_SensorTag) powered with a single coin cell
- The machine on which you will run the JavaScript code should have BLE hardware

The main npm module that we will be using to interface with the SensorTag is [senstortag](https://www.npmjs.com/package/sensortag) which is based on an underlying generic node BLE central module, [noble](https://www.npmjs.com/package/noble). We will attempt to read the IR temperature from the SensorTag and log the gyroscope data while rotating the sensortag. Let's get started by requiring the modules and connecting to the sensortag.

1. create a file `sensortag.js`, connect, discover and then disconnect the device:

	```js
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
	      console.log('Disconnected');
	      sensorTag.disconnect(callback);
	    }
	  ]);
	});
	```

	Because the events 'connect', 'discovered' and 'disconnected' should happen sequentially when the previous event is done, we will use the npm module `async` to deal with callbacks.

- Read the IR Temperature once between the events 'discovered' and 'disconnected':

	```js
	...
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
	...
	```
- Finally, we will add in the gyroscope reading and when the SensorTag is physically rotated, the JavaScript should output the updated values from the gyroscope. We hook onto the gyroscope events after the IR temperature reading. We have to specifically enable the gyroscope readings using the `notifyGyroscope` API.

	```js
	// readIRTemperature
	...
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
	// comment out disconnect
	// function(callback) {
	//  console.log('Disconnected');
	//  sensorTag.disconnect(callback);
	// }
	```
- You can refer to the [entire code here](code/senstor-tag). Let's run it!

	```sh
	$ node sensortag.js
	```

	![](img/sensortag-output.jpg)

That is just a tiny example on how to interface with a BLE device. To dabble more, have a look at [all the sensors data you can query](https://github.com/sandeepmistry/node-sensortag/blob/master/test.js) in the SensorTag as well as the underlying [noble module](https://github.com/sandeepmistry/noble). The author of both these modules, [Sandeep Mistry](https://github.com/sandeepmistry?tab=repositories) has open sourced many more BLE related npm packages such as the ones we can interface with [iBeacons](https://github.com/sandeepmistry/node-bleacon) or [Arduino library](https://github.com/sandeepmistry/arduino-BLEPeripheral). Have a go at them!

## More resources

The easiest way to get started in learning to interface web technologies with electronics is to choose a hardware platform which already comes with a JavaScript API. Here are some examples of more such platforms other than the Spark and SensorTag that we covered:

1. [Tessel](https://tessel.io/) - [hardware api](https://tessel.io/docs/hardwareAPI)
- [Arduino Yun](http://arduino.cc/en/Main/ArduinoBoardYun?from=Products.ArduinoYUN) - [Johnny-Five](https://github.com/rwaldron/johnny-five)
- [Raspberry PI](http://www.raspberrypi.org/) - [node.js build for Linux arm pi](https://nodejs.org/dist/v0.10.28/), [io.js v1.4.1 build for armv6l and armv7l](https://iojs.org/dist/v1.4.1/)

Hardware and electronics interfacing might be daunting at first, but the good news is there are many community events, forums, blog posts and modules/libraries available online. Here are some to check out:

1. [Nodebots](http://nodebots.io/) - JavaScript based robotics events around the world
- [Nodecopter](http://www.nodecopter.com/) - Node and drones community hacking events
- [CyclonJS](http://cylonjs.com/) - JavaScript framework for robotics
- [Serial port](https://github.com/voodootikigod/node-serialport) - Along with WiFi and BLE, try out interfacing with the [Z-Wave](http://www.z-wave.com/modules/ZwaveStart/) and [Zigbee](http://www.zigbee.org/)
- [USB](https://github.com/nonolith/node-usb) - communicate with USB devices

![](img/nodeboats.jpg)

*[Shurthi](https://twitter.com/shurru), [NodeBoats workshop](https://www.facebook.com/media/set/?set=a.615900415180712.1073741830.224477610989663&type=3) facilitator at [JS Conf Asia 2014](http://2014.jsconf.asia/), tracking a participant's boat controlled with Spark Core, VoodooSpark, Spark-io and Johnny Five.*

I hope this article gave you not only the initial steps for getting started, but plenty of resource to hack on your own or even get involved with the community! It might be challenging at start, but seeing your code literally come to life in the physical world will be immensely rewarding.

Come and hack away with electronics and JavaScript!


