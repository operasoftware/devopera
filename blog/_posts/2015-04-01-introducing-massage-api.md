---
title: 'Introducing a Massage API'
authors:
- andreas-bovens
intro: 'Tomomi recently wrote about building a simple messaging service. We really liked the idea of being able to send and receive messages through a simple API, and decided to take it a step further: why not build on this API to allow people to send massages to each other.'
tags:
- html5
- standards
published: false
license: cc-by-3.0
---

A few weeks ago, Tomomi published an inspiring article about [building a simple messaging service](/articles/web-notifications-pubnub/). We really liked the idea of being able to send and receive messages through a simple API, and decided to take it a step further: why not build on this API to allow people to send massages to each other, subscribe to massage channels, and so on? Indeed, as [Marshall McLuhan wrote](http://en.wikipedia.org/wiki/The_Medium_Is_the_Massage) in 1967: “The medium is the massage.”

So we started working on tackling this problem, and came up with the following basic API.

Note that this proposal is still in an early draft stage, and mainly consists of code samples showcasing of how this would work, but we’d love to hear your feedback.

## Sending massages

First we need to populate a list with users who are present for a massage. When the user clicks a username in the list, the app will dispatch a massage. The dispatch() function is used to send a massage to all subscribers of a channel. You can simply pass an object as a massage payload. In this demo, only `from` and `to` info is passed but you can send any massage type in the object.

	var list = document.querySelector('.list');
	list.addEventListener('click', function(event) {
		if (!event.target.id) return;
		operaMassage.dispatch({
			channel: channel,
			massage: {
				from: username,
				to: event.target.id
			}
		});
	});

You can pass an object with any data you want as the massage. So instead of the default massage, which is pretty good to be honest, you can also modify the script and allow your users to send custom massages.

## Receiving massages

When somebody sends the user a massage, the web app will trigger the browser to display a notification.
To make to this demo very simple, rather than establishing a 1-to-1 private connection, we let our web app dispatch massages to all users simultaneously. However, only a designated person will receive a web notification.

To retrieve the massages, you simply use subscribe() API. If the massage is sent to a particular user, that user will see a notification that he or she can get a massage.

	operaMassage.subscribe({
		channel: channel,
		callback: function(massage) {
			if (massage.to === username) {
				showNotification(massage);
			}
		}
	});

So, this is an initial idea, but we couldn’t wait any longer, and felt like we had to share it with you. Feedback is welcome!
