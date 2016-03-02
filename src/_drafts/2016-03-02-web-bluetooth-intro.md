---
title: 'An introduction to the Web Bluetooth API'
authors:
- shwetank-dixit
intro: 'Lets take a look at the Web Bluetooth API.'
tags:
- bluetooth
- physicalweb
license: cc-by-3.0
---

## Introduction


There is an explosion of electronic devices nowadays. What if we could communicate with them using just the Web? The Web Bluetooth API aims to do exactly that with a promise-based API which allows you to access information related to many Bluetooth Low Energy (BLE) enabled devices. `

So far, the ability to communicate with BLE devices has been possible only for native apps. The Web Bluetooth API aims to change that. The [specification for the Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/) is not final yet, and you're free to [share your feedback](https://github.com/WebBluetoothCG/web-bluetooth/issues) on what you would want in it as well. 

Right now the Web Bluetooth API is in the beta version of 'Opera for Android'. You can enable it by going to [opera://flags] and enabling Web Bluetooth in the options provided in the page.

## Some pre-requesites

* **HTTP Only**: This will only work on pages served over HTTPS. Most privacy sensitive APIs are now switching over to the HTTPS only model, and this is no exception.
* **Needs User Action** : We want to make sure that this doesn't work in the background without the user knowing about it. That is why methods in this API will only work when called in reponse to a user action (like responding to a 'click' event etc.)


## Getting Basic Device Information

Let's take a look at some code to figure out how to use this API to get some basic information regarding a BLE device. 

Let's take a very simple example. Let's have a small button like so:

	  <button id="the-button">Try it</button>

and the following JavaScript:

      let theButton = document.querySelector("#the-button");
      theButton.addEventListener('click', myClick, true);

      function myClick() {
        navigator.bluetooth.requestDevice({
            filters: [{
              services: ['battery_service']
            }]
          }).then(device => {
            console.log('Got device: ' + device.name);
            console.log('id:'+device.id);
          })

      }
      
As mentioned earlier, the method `navigator.bluetooth.requestDevice()` can only be called in response to a user action like a button click. This method calls up a dialog box showing the list of available BLE devices matching the query filter. In our case, the filter we have set pertains to BLE devices which expose a GATT service called `battery_service`. We'll find out more about GATT services in the next section.

Keep in mind that it is necessery to include at least one filter when request device access using the Web Bluetooth API.

Once the user selects the device and connects to it, it can then print out the device name and its id. 

## What are GATT services? 

GATT stands for [Generic Attribute Profile](https://developer.bluetooth.org/TechnologyOverview/Pages/GATT.aspx) and provides a standard way for bluetooth devices to advertise their services to the outside world. Your cell phone might provide a GATT service to show the current battery level. Your fitness band might provide a service that too, along with another one showing the current heart rate count. There are a [number of services which are exposed through GATT](https://developer.bluetooth.org/gatt/services/Pages/ServicesHome.aspx), and we can listen to those services depending on which of those services are exposed by the device. 

Some devices may not list their services in the standardized list of GATT services, in which case you could use their full bluetooth UUID or a short 16 or 32 bit ID instead. Of course, this is dependant on whether the device has any documentation mentioning these UUIDS and what they are for. 

	navigator.bluetooth.requestDevice({
            filters: [{
              services: ['0009180d-0000-1000-8000-00705f9b34fb']
            }]
          })

## Reading and writing GATT services

Once we have connected to a device, the next step is of course, to read some usefull data from it. To do that, we need to connect to the device's GATT server by using the method `gatt.connect()`. Let take our previous code sample and extend it.  This is based on the [Battery Level Sample Code](https://googlechrome.github.io/samples/web-bluetooth/battery-level.html) demo which you could also check out (However please note that it uses the `connectGATT()` method which is deprecated).

	navigator.bluetooth.requestDevice({
            filters: [{
              services: ['battery_service']
            }]
          }).then(device => {
          
            console.log('Got device: ' + device.name);
            console.log('id:'+device.id);
            
            return device.gatt.connect();
          })
          .then(server => {
            console.log('Getting Battery Service...');
            return server.getPrimaryService('battery_service');
          })
          .then(service => {
            // Getting Battery Level Characteristic...
            return service.getCharacteristic('battery_level');
          })
          .then(characteristic => {
            // Reading Battery Level...
            return characteristic.readValue();
          })
          .then(value => {
            value = value.buffer ? value : new DataView(value);
            console.log('Battery percentage:' + value.getUint8(0));
          })
          .catch(error => {
            console.log(error);
          });

Here we are reading the [standardized battery level GATT charecteristic](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.battery_level.xml). Keep in mind that the value in the end is given as a [DataView](https://docs.webplatform.org/wiki/javascript/DataView) object which then needs to be parsed correctly to get the final value.

Writing values would require entering the appropriate values to be parsed as a DataView object as well. For example, for resetting the `enerygyExpended` field in a hear rate monitor, we can use the [`writeValue()`](https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattcharacteristic-writevalue) method like so:
    
    navigator.bluetooth.requestDevice({
            filters: [{
              services: ['heart_rate']
            }]
          }).then(device => {
          
            console.log('Got device: ' + device.name);
            console.log('id:'+device.id);
            
            return device.gatt.connect();
          })
          .then(server => {
            return server.getPrimaryService('heart_rate');
          })
          .then(service => {
            return service.getCharacteristic('heart_rate_control_point');
          })
          .then(characteristic => {
          let resetEnergyExpended = new Uint8Array([1]); /*A value of '1' is a signal to reset it.
		   return characteristic.writeValue(resetEnergyExpended);
          })
          .then(value => {
            console.log('Reset value of energy expended field');
          })
          .catch(error => {
            console.log(error);
          });
          

If you don't have a device which exposes GATT services but still want to play with the API, try out the [BLE Peripheral Simular App](https://github.com/WebBluetoothCG/ble-test-peripheral-android). 

## Advanced uses

Different devices will expose different services and have documentation for what and how to access those services. For example, the BB-8 Toy by Sphero has some of their documention on how to do that [over here](https://github.com/orbotix/DeveloperResources/blob/master/docs/Sphero_API_1.50.pdf).

Using this, its possible to create a web app that can control the BB-8 toy! See it in action below. 

**INSERT VIDEO OF BB-8**

Check out the [code for it](https://github.com/operasoftware/bb8). 

Others have made web apps to [control drones](https://github.com/poshaughnessy/web-bluetooth-parrot-drone) and even [heart-rate sensors](https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor). 

[This page lists out some more demos](https://github.com/WebBluetoothCG/demos) and we hope you'll add yours over there soon! 

## What's to come

The implementation of the Web Bluetooth API in chromium in definitely not complete yet. Check out the [list of issues regarding implementation](https://github.com/WebBluetoothCG/web-bluetooth/issues) in the spec. One of the most promising things to look forward to would be to allow websites to scan for [nearby BLE advertisements themselves](https://github.com/WebBluetoothCG/web-bluetooth/issues/191). Another thing to look out for would be [helper functions to allow developers to more easily read values](https://github.com/WebBluetoothCG/web-bluetooth/issues/126).

It would be cool for websites to access the current RSSI and txPower levels, as well as any associated URLs shared through the [Eddystone protocol](https://en.wikipedia.org/wiki/Eddystone_(Google)). All these exciting things are yet to come.

You can check out the [implementation status on various platforms](https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md) as well as a hardware compatibility list. If using Android, we recommend using the latest version for best and most consistent results. 

## Further Reading

- [The Web Bluetooth Specification](https://webbluetoothcg.github.io/web-bluetooth)
- [A collection of Web Bluetooth API Demos](https://github.com/WebBluetoothCG/demos)
- [Opera's BB8 Demo](https://github.com/operasoftware/bb8)
- [BLE Peripheral Simulator App](https://github.com/WebBluetoothCG/ble-test-peripheral-android)