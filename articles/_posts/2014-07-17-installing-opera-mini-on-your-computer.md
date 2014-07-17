---
title: Installing Opera Mini on Your Computer
authors:
- andreas-bovens
intro: 'This article describes how you can install Opera Mini on your computer for debugging or testing purposes.'
tags:
- opera-mini
- compatibility
cover: png
license: cc-by-3.0
---

<figure class="figure figure--right">
	<img src="{{ page.id }}/cellphone.png" alt="Opera Mini in Microemulator" class="figure__media">
</figure>

For development and testing purposes, it can be useful to install Opera Mini on your computer. Opera Mini is used by more than 244 million people per month, and for many of them, it’s the only way they can access the internet. However, as Opera Mini is a proxy browser with limited JavaScript functionality, it’s important you test your site in it.

In a nutshell, you’ll need Java and MicroEmulator, in which you’ll run an instance of Opera Mini for J2ME-enabled feature phones. To make this as straightforward as possible, we’ve outlined all the necessary steps below.

## Get Java

Go to the [Java download page](https://www.java.com/en/download/) and click on the “Free Java Download” button. On the next screen, you may get a warning that Java might not run inside your browser: this is not important as we will run Java on the system level. Just proceed with the download, and once this is finished, open the Java installer and follow the steps to complete the installation.

## Get MicroEmulator up and running

Go to the [MicroEmulator download page](https://code.google.com/p/microemu/downloads/detail?name=microemulator-2.0.4.zip&can=2&q=) and click on _microemulator-2.0.4.zip_ to start the download. Once it’s downloaded, unzip it and move the resulting folder to a convenient location, _Program Files_ on Windows or _Applications_ on Mac, for example. Inside you will find _microemulator.jar._

### Special Mac instructions

<figure class="figure figure--right">
	<img src="{{ page.id }}/open.png" alt="Security dialog on Mac" class="figure__media">
</figure>

Right click _microemulator.jar_ and choose _Open_ from the context menu. Next, you will get a warning that this application is from an unidentified developer. Click _Open_ button to launch the application.

## Making the emulator resizable

<figure class="figure figure--right">
	<img src="{{ page.id }}/bbc.png" alt="BBC Sport in Opera Mini" class="figure__media">
</figure>

Once MicroEmulator is launched, go to _Options > Select device._ Select _Resizable device_ and choose _Set as default._ This setting will give you a resizable (and more usable) emulator window.

## Get Opera Mini

Go to the [Opera Mini download page](http://www.opera.com/mobile/download/versions/), select “Opera Mini 8” and click on “View download link”. Then choose _opera-mini-latest-advanced-en.jar_ to start the download.

## Running Opera Mini inside MicroEmulator

Now we will run Opera Mini inside MicroEmulator. Open MicroEmulator and go to _File > Open MIDlet File…,_ then navigate to the location where you’ve saved the downloaded _opera-mini-…-advanced-en.jar_ file and open it.

Then, click _Start._ Opera Mini will be installed and subsequently, its EULA is shown. Once you accept it, the Opera Mini start screen is shown and you can start browsing!

Note that `file://` and `localhost://` URLs are not supported in Opera Mini. Your page needs to be on a publicly accessible URL (behind a password is OK of course) in order to be viewable in Opera Mini.
