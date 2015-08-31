---
title: 'Remote debug on Opera for Android via USB'
authors:
- shwetank-dixit
intro: 'This tutorial will guide you through the process of remote debugging using Opera for Android'
license: cc-by-3.0
---

Making sure your sites look and behave great on mobile devices is an essential aspect of web development nowadays. So it follows that we need great tools and ways to make sure we can debug on mobile. However, the form factor of most mobile devices is not conducive for debugging, and we'd rather use a laptop or desktop for it. 

Using remote debugging, you can debug sites live on your mobile device, and edit and play with the developer tools using your laptop or desktop. The best of both worlds! 

With Opera, you can do so by having Opera for Android on your android device, and Opera for Computers on your desktop or laptop. Let's go through the steps involved in doing this properly. 

## What you will need

1. A USB cable : You will need this to connect your android device with your desktop or laptop. 
2. Opera for Android installed on your Android Device
3. Opera for Computers installed on your Laptop or desktop

## Step 1: Enable Developer Options on Android

If you haven't already, first enable *Developer Options* in your android device. If you don't see it in your *settings* list, then do the following

1. Go to *Settings ->About* and look for the place where it says *Build Number*.
2. Tap the *Build Number* seven times.
3. After you do that, a small notification will come up telling you that you are a developer now.
4. Now go to *settings* again, you should see *Developer Options* in the list now. 

If you already have *Developer Options* enabled in Android, proceed to the next step.

## Step 2: Enable USB debugging

**insert image**

Go to *Developer Options* and enable *USB Debugging*. 

**insert image**

An alert will pop up at this point asking you to confirm your choice. Tap on 'OK'. 


## Step 3: Connect via USB

Take your Android Device and connect it with your Laptop or Desktop via the USB cable. 

Note: At this point, make sure you have Opera for Android and Opera for Computers running on the mobile device and the laptop/desktop respectively. Also, if you are on Windows, please make sure you have the [appropriate drivers](http://developer.android.com/tools/extras/oem-usb.html) installed to enable USB debugging.

## Step 4: Use opera://inspect

1. Open up Opera for Computers
2. Type 'opera://inspect' in the address bar
3. Select the option *Discover Devices*.

**insert image**

Once you do that, a pop up will once again appear asking you to allow USB debugging. Tap on 'OK'. 

Once that happens, the computer will ask Opera for Android for all open tabs on it, and will display them in a list. Below is a screenshot of how it looks.

**insert image**

You'll notice that it tells you the name of the device, the browser being used, and all the open tabs being used in the mobile device for that browser.

Below each site, there are the following options

- *inspect*: This is the main option you will need. Clicking on this will open the developer tools in the laptop/desktop, where you can debug the site (as loaded in Opera for Android) from your own computer. You can make changes and have them apply live in the mobile browser, set breakpoints and watchlists, etc.
- *focus tab*: Clicking on this will bring the tab in focus in Opera for Android.
- *reload*: Reloads the tab in Opera for Android.
- *close*: Closes the tab in Opera for Android.
















