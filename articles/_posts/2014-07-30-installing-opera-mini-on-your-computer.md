---
title: Installing Opera Mini on your computer
authors:
- andreas-bovens
intro: 'This article describes how you can install Opera Mini on your computer for debugging or testing purposes.'
tags:
- opera-mini
- compatibility
license: cc-by-3.0
---

For development and testing purposes, it can be useful to install Opera Mini on your computer. Opera Mini is used by more than 244 million people per month, and for many of them, it's the only way they can access the internet. However, as Opera Mini is a proxy browser with limited JavaScript functionality, it's important you test your site in it.

In a nutshell, you'll need Java and MicroEmulator, in which you'll run an instance of Opera Mini for J2ME-enabled feature phones.

To make this as straightforward as possible, we've outlined all the necessary steps below.

## Get Java

Go to the [Java download page](https://www.java.com/en/download/mac_download.jsp?locale=en) and click on the "I understand the above and want to download..." link: the Java installer will be downloaded.

Open the downloaded Java installer and follow the steps to complete the installation.

## Get MicroEmulator up and running

Go to the [MicroEmulator download page](https://code.google.com/p/microemu/downloads/detail?name=microemulator-2.0.4.zip&can=2&q=) and click on "microemulator-2.0.4.zip" to start the download.

Once it's downloaded, unzip **microemulator-2.0.4.zip** and move it to a convenient location.

Inside the **microemulator-2.0.4** folder, you will find **microemulator.jar**.

On Mac:

Right click it and choose **Open** from the context menu. Next, you will get a warning that "microemulator.jar" is from an unidentified developer. Click **Open** to launch the application.

<figure class="figure">
	<img src="{{ page.id }}/open-microemu.png" alt="Resizable device setting" class="figure__media">
</figure>

On Windows:

???

Once MicroEmulator is launched, go to **Options > Select device**. Select **Resizable device** and choose **Set as default**. This setting will give you a resizable (and more usable) emulator window.

<figure class="figure">
	<img src="{{ page.id }}/resize-microemu.png" alt="Resizable device setting" class="figure__media">
</figure>

## Get Opera Mini

Go to the [Opera Mini download page](http://www.opera.com/mobile/download/versions/), select "Opera Mini 8" and click on "View download link".

Then choose "opera-mini-latest-advanced-en.jar" to start the download.

## Running Opera Mini inside MicroEmulator

Now we will run Opera Mini inside MicroEmulator.

Open MicroEmulator and go to **File > Open MIDlet File...**, then navigate to the location where you've saved the downloaded **opera-mini-...-advanced-en.jar** file and open it.

Then, click **Start**. Opera Mini will be installed and subsequently, its EULA is shown. Once you accept it, the Opera Mini start screen is shown and you can start browsing!

<figure class="figure">
	<img src="{{ page.id }}/browse-operamini.png" alt="Opera Mini with comfortable size" class="figure__media">
</figure>

Note that file and localhost URLs are not supported in Opera Mini. Your page needs to be on a publicly accessible URL (behind a password is OK of course) in order to be viewable in Opera Mini.
