---
title: 'An introduction to the Web Bluetooth API'
authors:
- shwetank-dixit
intro: 'There is an explosion of electronic devices nowadays. What if we could communicate with them through a web browser? The Web Bluetooth API allows you to interact with many Bluetooth Low Energy (BLE) enabled devices.'
tags:
- bluetooth
- physicalweb
cover: png
license: cc-by-3.0
---

## Introduction

<figure block="figure" mod="right">
	<video elem="media" controls cover="{{ page.id }}/video.jpg" width="360" height="640">
		<source src="{{ page.id }}/video.mp4" type="video/mp4">
		<source src="{{ page.id }}/video.webm" type="video/webm">
	</video>
</figure>

There is an explosion of electronic devices nowadays, and with many of them, it’s possible to interact with them via [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy), or BLE. However, installing a separate app for interacting with every single bluetooth gadget is impractical. What if we could communicate with them through a web browser? The Web Bluetooth API aims to do exactly that with a promise-based API, which allows you to interact with many BLE enabled devices. This is also great for companies intending to launch new gadgets, as instead of spending time and money on developing a separate app for multiple platforms, they can offer interaction with their gadget in a cross-platform manner, as it could be controlled directly from a web page.

## The Web Bluetooth API

So far, the ability to communicate with BLE devices has been possible only for native apps. The Web Bluetooth API aims to change that and brings this to web browsers as well. The [specification for the Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/) is not final yet, and you’re free to [share your feedback](https://github.com/WebBluetoothCG/web-bluetooth/issues) on what you would want in it as well.

Right now, the Web Bluetooth API is in [Opera for Android beta](https://play.google.com/store/apps/details?id=com.opera.browser.beta). You can activate it by going to `opera://flags` and enabling Web Bluetooth in the options provided on that page.

## Some prerequisites

- **HTTPS only**: The API only works on pages served over HTTPS. Most privacy-sensitive web APIs are now switching over to the HTTPS-only model, and this one is no exception.
- **Requires user action**: We want to make sure that the API doesn’t work in the background without the user knowing about it. That is why methods in this API only work when called in response to a user action (like responding to a `click` event).

## Getting Basic Device Information

Let’s take a look at some code to figure out how to use this API to get some basic information regarding a BLE device.

Here is a very simple example, showing a button:

	<button id="the-button">Try it</button>

…and the following JavaScript:

	const button = document.querySelector('#the-button');
	button.addEventListener('click', function() {
		navigator.bluetooth.requestDevice({
			filters: [{
				services: ['battery_service']
			}]
		}).then(device => {
			console.log('Got device:', device.name);
			console.log('id:', device.id);
		});
	});

As mentioned earlier, the method `navigator.bluetooth.requestDevice()` can only be called in response to a user action like a button click. This method calls up a dialog box showing the list of available BLE devices matching the query filter. In our case, the filter we have set pertains to BLE devices which expose a so-called “GATT service” called `battery_service`. We’ll find out more about GATT services in the next section.

Keep in mind that it is necessary to include at least one filter when requesting device access using the Web Bluetooth API.

Once the user selects the device and connects to it, it can then print out the device name and its ID.

## What are GATT services?

GATT stands for [Generic Attribute Profile](https://developer.bluetooth.org/TechnologyOverview/Pages/GATT.aspx) and provides a standard way for Bluetooth devices to advertise their services to the outside world. Your cell phone might provide a GATT service to show the current battery level. Your fitness band might provide a service that too, along with another one showing the current heart rate count. There are a [number of services which are exposed through GATT](https://developer.bluetooth.org/gatt/services/Pages/ServicesHome.aspx), and we can listen to those services depending on which of those services are exposed by the device.

Some devices may not list their services in the standardized list of GATT services, in which case you could use their full Bluetooth UUID or a short 16- or 32-bit ID instead. Of course, this depends on whether the device has any documentation mentioning these UUIDs and what they are for.

	navigator.bluetooth.requestDevice({
		filters: [{
			services: ['0009180d-0000-1000-8000-00705f9b34fb']
		}]
	});

## Reading and writing GATT services

Once we have connected to a device, the next step is of course, to read some useful data from it. To do that, we need to connect to the device’s GATT server by using the method `gatt.connect()`. Let’s take our previous code sample and extend it. This is based on the [Battery Level Sample Code](https://googlechrome.github.io/samples/web-bluetooth/battery-level.html) demo, which you can also check out. (Note however that it uses the `connectGATT()` method which is deprecated.)

	navigator.bluetooth.requestDevice({
		filters: [{
			services: ['battery_service']
		}]
	}).then(device => {
		console.log('Got device:', device.name);
		console.log('id:', device.id);
		return device.gatt.connect();
	})
	.then(server => {
		console.log('Getting Battery Service…');
		return server.getPrimaryService('battery_service');
	})
	.then(service => {
		console.log('Getting Battery Characteristic…');
		return service.getCharacteristic('battery_level');
	})
	.then(characteristic => {
		console.log('Reading battery level…');
		return characteristic.readValue();
	})
	.then(value => {
		value = value.buffer ? value : new DataView(value);
		console.log('Battery percentage:', value.getUint8(0));
	})
	.catch(exception => {
		console.log(exception);
	});

Here we are reading the [standardized battery level GATT characteristic](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.battery_level.xml). Keep in mind that the value in the end is given as a [`DataView`](https://docs.webplatform.org/wiki/javascript/DataView) object which then needs to be parsed correctly to get the final value.

Writing values would require entering the appropriate values to be parsed as a `DataView` object as well. For example, for resetting the `enerygyExpended` field in a heart rate monitor, we can use the [`writeValue()`](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattcharacteristic-writevalue) method like so:

	navigator.bluetooth.requestDevice({
		filters: [{
			services: ['heart_rate']
		}]
	}).then(device => {
		console.log('Got device:', device.name);
		console.log('id:', device.id);
		return device.gatt.connect();
	})
	.then(server => {
		return server.getPrimaryService('heart_rate');
	})
	.then(service => {
		return service.getCharacteristic('heart_rate_control_point');
	})
	.then(characteristic => {
		const resetEnergyExpended = new Uint8Array([1]);
		// A value of `1` is a signal to reset it.
		return characteristic.writeValue(resetEnergyExpended);
	})
	.then(value => {
		console.log('Reset value of energy expended field');
	})
	.catch(exception => {
		console.log(exception);
	});

If you don’t have a device which exposes GATT services but still want to play with the API, try out the [BLE Peripheral Simulator App](https://github.com/WebBluetoothCG/ble-test-peripheral-android).

## Advanced uses

Different devices will expose different services and have documentation describing how to access those services. For example, the BB-8 Toy by Sphero has some of their documentation on how to do that [over here](https://github.com/orbotix/DeveloperResources/blob/master/docs/Sphero_API_1.50.pdf).

Using this, it’s possible to create a [web app](https://operasoftware.github.io/bb8/) that can control the BB-8 toy! Check out the [code for it](https://github.com/operasoftware/bb8).

Others have made web apps to [control drones](https://github.com/poshaughnessy/web-bluetooth-parrot-drone), [heart-rate sensors](https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor), [and more](https://github.com/WebBluetoothCG/demos). If you make a demo, be sure to add it to the list!

## What’s to come

The implementation of the Web Bluetooth API in Chromium in definitely not complete yet. Check out the [list of issues regarding implementation](https://github.com/WebBluetoothCG/web-bluetooth/issues) in the spec. One of the most promising things to look forward to is the capability for websites to scan for [nearby BLE advertisements themselves](https://github.com/WebBluetoothCG/web-bluetooth/issues/191). Another thing to look out for would be [helper functions](https://github.com/WebBluetoothCG/web-bluetooth/issues/126) to allow developers to more easily read values.

It would also be cool for websites to access the current RSSI (Received Signal Strength Indicator) and txPower levels, as well as any associated URLs shared through the [Eddystone protocol](https://en.wikipedia.org/wiki/Eddystone_(Google). All these exciting things are yet to come.

You can check out the [implementation status on various platforms](https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md) as well as a hardware compatibility list. If using Android, we recommend using the latest version for best and most consistent results.

## Further Reading

- [The Web Bluetooth Specification](https://webbluetoothcg.github.io/web-bluetooth)
- [A collection of Web Bluetooth API Demos](https://github.com/WebBluetoothCG/demos)
- [Opera’s BB-8 Demo](https://github.com/operasoftware/bb8)
- [BLE Peripheral Simulator App](https://github.com/WebBluetoothCG/ble-test-peripheral-android)
