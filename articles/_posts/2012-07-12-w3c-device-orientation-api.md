---
title: 'The W3C Device Orientation API: Detecting Orientation and Acceleration'
authors:
- shwetank-dixit
intro: 'Using the W3C’s device orientation API, we can determine the orientation of the device as well as gather information about its movement. This information is valuable in certain types of applications, such as games that require the user to tilt the device in some way. In this article we’ll look at the basics of how device orientation works, along with some simple examples.'
tags:
- accelerometer
- alpha
- beta
- devicemotion
- deviceorientation
- gamma
layout: article
---

## Introduction

For a long time, there was talk of native apps having an advantage over web apps on mobile because native apps can utilise native device capabilities, for example the gyroscope and accelerometer. However, now you can do that using normal web pages too, thanks to the [W3C Device Orientation specification][1].

[1]: http://dev.w3.org/geo/api/spec-source-orientation.html

Using device orientation, we can determine the orientation of the device as well as gather information about its movement. This information is valuable in certain types of applications, such as games that require the user to tilt the device in some way.

In this article we’ll look at the basics of how device orientation works, along with some simple examples.

## Our Co-ordinate system

<figure id="figure-1">
	<img src="/articles/w3c-device-orientation-api/device-axes.png" alt="Explanation of coordinate system">
	<figcaption markdown="span">Figure 1: A diagram of the coordinate system used by device orientation</figcaption>
</figure>

We need a frame of reference to compare the change in direction and orientation whenever a device is moved. For this purpose, we’ll assume a standard XYZ co-ordinate system. If you get your device and put it flat on a level surface like a table, with the screen facing up, you can imagine the X axis running from side to side (left to right) on the device (cutting the space horizontally into a lower half and an upper half), the Y axis running from bottom to top (cutting the space vertically into a left half and a right half), and the Z axis being a line running from the surface of the screen up to the sky. This axis system is illustrated in Figure 1.

Now that we have the co-ordinate system in place, we can make sense of rotating the device. Device orientation defines three types of rotation, which are as follows:

- **Alpha:** The amount of rotation around the Z axis is known as alpha. To better understand it, consider the example of a set of helicopter blades rotating. They are not going up or down, or moving to the side. They are just rotating along the Z-axis by `alpha` degrees per microsecond. The range is from 0 to 360 degrees.

<figure id="figure-2">
	<img src="/articles/w3c-device-orientation-api/device-alpha.png" alt="Device rotated along Z axis">
	<figcaption markdown="span">Figure 2: Device rotated along Z axis</figcaption>
</figure>

- **Beta:** The amount of rotation around the X-axis is known as beta. For example, when a plane is taking off from the runway, it is going in a straight line but in an upward direction. In that case, it is turning along the X-axis. The range is from -180 to 180 degrees.

<figure id="figure-3">
	<img src="/articles/w3c-device-orientation-api/device-beta.png" alt="Device rotated along X axis">
	<figcaption markdown="span">Figure 3: Device rotated along X axis</figcaption>
</figure>

- **Gamma:** The amount of rotation around the Y-Axis is known as gamma. For example, if a plane is going straight (with wings parallel to the ground), but then wants to make a turn, it rotates with one wing moving towards the ground and the other wing moving further away. The range is from -90 to 90 degrees.

<figure id="figure-4">
	<img src="/articles/w3c-device-orientation-api/device-gamma.png" alt="Device rotated along Y axis">
	<figcaption markdown="span">Figure 4: Device rotated along Y axis</figcaption>
</figure>

## The `deviceorientation` event

Device orientation specifies a new event called the `deviceorientation` event. Using this, we can figure out the tilt of the device in terms of alpha, beta and gamma.

Not all devices (especially laptops) support device orientation, so it is prudent to first check whether the device supports it before going further:

	if (window.DeviceOrientationEvent) {
		// your code
	} else {
		console.log('device orientation not supported');
		// add fallback code here, as necessary
	}

We can now add an event listener, so that every time the device is rotated, it fires the event and we can process it using a function:

	window.addEventListener('deviceorientation', capture_orientation, false);

Inside the `capture_orientation` function, we can now process the rotation of the device:

	function capture_orientation (event) {
	 var alpha = event.alpha;
	 var beta = event.beta;
	 var gamma = event.gamma;
	 console.log('Orientation - Alpha: '+alpha+', Beta: '+beta+', Gamma: '+gamma);
	}

From the above function we can see how easy it is to get the alpha. beta and gamma values of the device rotation.

Take a look at our [simple device orientation demo page][6]. This demo changes the background color of the page as you move it, as well as showing the alpha, beta and gamma values of the device’s orientation.

[6]: /articles/w3c-device-orientation-api/dodemo.htm

## The `devicemotion` event

We also have an event to help us determine how fast the device is accelerating: the `devicemotion` event taps into the device’s accelerometer and determines its acceleration along the X, Y and Z axes.

The first thing, as usual, is to check whether the device supports the `devicemotion` event:

	if (window.DeviceMotionEvent) {
		// proceed with the code
	} else {
		console.log('This device does not support devicemotion');
	}

Now we’ll add an event listener like so:

	window.addEventListener('devicemotion', capture_acceleration, false);

Then we’ll write a function for capturing the acceleration. Keep in mind that we have a way of determining the acceleration of the device with and without the effects of gravity on it. The former is determined using the `accelerationIncludingGravity` property, and the latter using the `acceleration` property:

	function capture_acceleration (event) {
		var acceleration_x = event.acceleration.x;
		var acceleration_y = event.acceleration.y;
		var acceleration_z = event.acceleration.z;

		var acceleration_g_x = event.accelerationIncludingGravity.x;
		var acceleration_g_y = event.accelerationIncludingGravity.y;
		var acceleration_g_z = event.accelerationIncludingGravity.z;
	}

The measurements are in meters per second squared (ms2) and — as you can tell from the code above — there are properties available containing the acceleration along the X, Y, and Z axes.

Take a look at our — *ahem* — [“laser-sword” demo][7], which uses the `devicemotion` event and some nice swooshy sound clips embedded using HTML5 `<audio>` elements.

[7]: /articles/w3c-device-orientation-api/laser-sword-demo.htm

## Use cases and future possibilities

Using the W3C device orientation spec, we can now have a web application determine the device’s position and acceleration using JavaScript. This opens up a lot of possibilities that until now were not available to web apps.

Device orientation could also be used for gesture recognition. For example, a web-based music player could skip to the next song when the device is shaken at a certain speed, or you could use the same gesture to trigger an “Undo” command. Gestures are also great for games, and for accessibility: you could provide custom navigation gestures for people who find it hard to point and use their fingers on a touch phone.

## Cross browser issues

Unfortunately, at this time there is a something of a [variance in the implementation of `device orientation`][8] within various mobile browsers. We believe Opera Mobile’s implementation is the most inline with the specification, followed by Firefox’s implementation, which only differs in its calculation of `alpha` (it measures it clockwise instead of anti-clockwise — this can easily be normalized using some simple javascript) but otherwise is the same as Opera. Webkit-based mobile browsers like Mobile Safari and the Native Android browsers each calculate the position of alpha, beta and gamma in their own way. We hope future versions of those browsers release implementations more in line with the specification, so that developers can take advantage of device orientation in their web apps in an easier manner.

[8]: http://lists.w3.org/Archives/Public/public-geolocation/2012Jun/0000.html

## Summary

`deviceorientation` and `devicemotion` provide cool new options for creating mobile apps, from games and augmented reality applications to normal applications that need an extra level of polish. The API is very simple, and it’s easy for a developer to understand and start using it, today (cross browser issues not withstanding). Opera Mobile 12 and other major smartphone browsers already have support for it — it’s a very promising technology and you should consider including it in your next project!

Opera’s Rich Tibbett has written a fantastic deviceOrientation example — see his [Marine Compass demo][9].

[9]: http://people.opera.com/richt/release/demos/orientation/marinecompass/
