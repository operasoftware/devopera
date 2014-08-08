---
title: Web Notifications in Opera Developer 25
authors:
- shwetank-dixit
intro: '[Opera Developer 25 for Mac, Windows and Linux](http://www.opera.com/developer) has been released, with support for web notifications too. Let us take a look at it.'
tags:
- web-notifications
- javascript
- opera
license: cc-by-3.0
---

You might have noticed that [Opera Developer 25](http://blogs.opera.com/desktop/2014/08/opera-developer-25-supports-web-notifications/) has support for [Web Notifications](http://www.w3.org/TR/notifications/).

Now, Web Notifications was already there in the Chromium project for quite some time, so why did it take us time to add it? Well, the way Chromium deals with notifications makes it seem non-native in certain platforms — we wanted to make it feel native on all our platforms, and we worked on it to make it happen.

So the notifications you have on Opera will feel like native notifications (i.e., however your operating system displays notifications — whichever your platform is). We beleive this is a much better experience for users.

A very simple notification on the Mac platform would look like this:

<figure class="figure">
	<img src="{{ page.id }}/notification.png" alt="Simple notification on Mac" class="figure__media">
</figure>

You can of course, include an image as well, like so:

<figure class="figure">
	<img src="{{ page.id }}/notification-image.png" alt="Notification with image on Mac" class="figure__media">
</figure>

To give you a quick overview of web notitifcations, it’s really quite simple. The first thing you need check if the browser supports notifications, if so, to ask the user for permission to show notifications.

You can do this by the writing something like the following:

	if ('Notification' in window) {
		Notification.requestPermission(function() {});
	}

If permission is granted by the user, then you can proceed to display a notification, like so:

	if (Notification.permission == 'granted') {
		var firstNotification = new Notification('Sample Notification Title', {
			body: 'This is the notification body.'
		});
	}

You can add in other parameters in too, like an icon:

	if (Notification.permission == 'granted') {
		var firstNotification = new Notification('Sample Notification Title', {
			icon: 'icon.png',
			body: 'This is the notification body.'
		});
	}

Often the title is not enough for a notification. The `body` attribute is used to describe a further explanation of the notification which the user will see in the notification just below the title.

Apart from the `body` and `icon` attributes, you also have the `dir` attribute (you can specify `ltr`, `rtl` or `auto` depending on the language you want the notification to be in) and the `lang` attribute. The former is about specifying the direction of the text in the notification and the latter is about specifying the primary language of the notification (you need to specify it as done in the [BCP-47](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) document series).

There is also the `tag` attribute — which is about specifying that particular type of notification. For example, if you have a social networking site open in two seperate tabs and you get a new message from your friend — it shouldn’t happen that both tabs produce a notification about the same thing. So if the notifications share the same tag, then multiple instances of it will be counted as one — thus you will only get the notification one time, no matter how many pages of the site you have open in different tabs.

## Working with notification events

The most common thing you would do is to do something when a person clicks on a notification. The `onclick` event is used to capture this and perform an actions.

	var testNotification = new Notification('Sample Notification', {
		body: 'This is a sample notification.'
	});

	testNotification.onclick = function() {
		console.log('onclick worked');
	};

Similarly, you have the `onerror`, and the `onshow` event handlers. The former is called when an error occurs with the notification, and the latter is called whenever the notification has actually been shown to the user.

## The Road Ahead

We are also working on getting notfications in Opera extensions via the `chrome.notifications` API.

Notifications dramatically increase the usefulness of certain apps, especially ones dealing with email and social networking (some of the biggest sites in the world fall into this category). We hope you’ll like the native-like notifications that Opera provides to web apps. Cheers!
