---
title: 'Building Offline Sites with ServiceWorkers and UpUp'
authors:
- tal-ater
intro: 'ServiceWorkers allow us to build sites that work even when the user is offline. See how UpUp makes it as easy as running one command.'
tags:
- service-workers
- offline
- caching
- javascript
cover: png
license: cc-by-3.0
---

<figure block="figure" mod="right" style="margin-left:20px">
	<img elem="media" src="{{ page.id }}/upup-phone-anim.gif" alt="Offline content demo">
</figure>

We are living in an increasingly mobile world. We rely on our phones to keep us connected wherever we go, and to provide us with the information we need to get through our day.

But connectivity hasn’t quite caught up with our dependence on it yet.

Every day we find ourselves without a working internet connection. Even in countries with near-perfect coverage, we lose connectivity when stepping into the elevator, or taking the subway. We have areas in our house that never seem to have a solid connection… and don’t even get me started about travel. The minute we leave our comfortable homes and offices, whether we’re boarding a plane, or just driving from town to town, we are at the mercy of the cell towers.

Now think of your users, and their dependence on the information you provide them. Are you running a travel site offering online hotel bookings? What would your users do if they just landed in Tokyo, without a local data plan, but they needed to access your site in order to find their hotel’s address? Does your store have a website? What would your users do if they were riding the elevator down to the parking lot while trying to find out your store’s opening hours?

Luckily we are living in very exciting times for web development. New technologies are coming out every day, unleashing new possibilities, and changing our perception of what is and isn’t possible in the browser. Two of the most important technologies to come out in recent years — service workers and the CacheStorage API — allow us an amazing level of control over the user’s browsing experience — even when their internet connection fails.

## Taking control of the offline experience

One library to provide an easy solution for the connectivity problem is called [UpUp](https://www.talater.com/upup/). _(Editor’s note: Tal is the developer of the UpUp library.)_

UpUp allows you to define exactly what you want to show your users when they are offline, while handling all of the logic of intercepting requests, detecting when they fail, returning the right content from cache, managing that cache, and generally dealing with all the headaches of cross-browser compatibility.

The content you show your users can be as simple as one page (e.g. your business’ info, address, etc.), all the way to fully customized offline experiences with data customized for each user (e.g. a travel site’s user could browse his bookings, and get details on each booking, even while offline).

The best part of all, UpUp lets you do all of this in just a few lines of code:

	<script src="/upup.min.js"></script>
	<script>
		UpUp.start({
			'content-url': 'offline.html'
		});
	</script>

In this article we’ll first look at how you can use UpUp to add offline capabilities to your site in under 10 minutes. We will then dive deeper behind the scenes, and see how UpUp achieves all of this.

## 10 minute tutorial

Let’s begin with a simple site, and add offline features to it:

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>Lonely Globe Advisor</title>
	</head>
	<body>
		<h1>Top Hotels in Rome</h1>
		<ol>
			<li>Villa Domus — Via Piacenza 9, Rome, Italy</li>
			<li>Hotel Trivelli — Piazza Barberini 11, Rome, Italy</li>
		</ol>
	</body>
	</html>

Our sample site, Lonely Globe Advisor, offers visitors a list of the top fictional hotels in Rome.

But what happens if our user just landed in Rome and doesn’t have a local data plan? She’ll be out of luck.

We can improve on this experience by loading UpUp, and telling it what content we want it to show the user if she is offline.

	<h1>Top Hotels in Rome</h1>
	<ol>
		<li>Villa Domus — Via Piacenza 9, Rome, Italy</li>
		<li>Hotel Trivelli — Piazza Barberini 11, Rome, Italy</li>
	</ol>
	<script src="/upup.min.js"></script>
	<script>
		UpUp.start({
			'content-url': '/offline.html'
		});
	</script>

With just this tiny bit of code, we’ve added an offline experience for our site, and allowed our users to see the best hotels in Rome… even when they can’t access the web.

Any user that visited our site in the past, and is now trying to access it again without an internet connection, will now see the content of `offline.html`. Make sure you create this file and place it in the location you defined under `content-url`.

The sample above just shows a simple html page. You can improve on your offline content by including stylesheets, images, or even videos in your `offline.html`. You just need to make sure to tell UpUp what files you’re using, and it will cache them so they are available for your users when they are offline.

	<h1>Top Hotels in Rome</h1>
	<ol>
		<li>Villa Domus — Via Piacenza 9, Rome, Italy</li>
		<li>Hotel Trivelli — Piazza Barberini 11, Rome, Italy</li>
	</ol>
	<script src="/upup.min.js"></script>
	<script>
		UpUp.start({
			'content-url': 'offline.html',
			'assets': [
				'css/bootstrap.min.css',
				'img/trivelli.jpg',
				'mov/intro.mp4'
			]
		});
	</script>

With just one command and a couple of settings, we can create rich offline experiences for our users. These can be as simple as the example above, or as robust as a full single page application using frameworks like AngularJS, with content customized for each user, videos and files the user can access while offline.

There’s a more [detailed tutorial](https://www.talater.com/upup/getting-started-with-offline-first.html) available on the official site, as well as complete documentation of [UpUp’s API](https://github.com/TalAter/UpUp/blob/master/docs/README.md).

## How does it work?

How does UpUp serve this content to our users if they aren’t connected to the internet?

#### tl;dr

UpUp uses a new type of script called a ServiceWorker. This script runs even when the user is offline, and wraps every request made to the server with a promise. If the server can’t be reached, that promise is broken. The script catches broken promises, checks in its cache to see what offline content you’ve chosen to show and returns that instead of an error.

#### ServiceWorkers

In order to understand how this works, let’s first understand how ServiceWorkers work.

A ServiceWorker is a special type of script that any site can register in the user’s browser. Once registered, this script sits in a very interesting position between the browser windows and that site’s server.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/serviceworker-online.gif" alt="Request and response to server through a ServiceWorker">
</figure>

As you can see, while the ServiceWorker runs within the user’s browser, it isn’t attached to any one window. Instead it runs in the background, and can communicate with the windows in its scope (the site that registered it).

From this unique location in the browser, ServiceWorkers have the power to examine each request as it is sent from the user’s browser, decide what to do with it, and then send it to the server. The ServiceWorker can then examine the response as it is returned from the server, decide what to do with it, and then pass either the original or a modified response back to the user’s window.

In a way, you can think of a ServiceWorker as a local proxy server inside the user’s browser. A proxy written in JavaScript that has the power to change requests and their responses.

Now if you think about this flow, you can probably begin to see the many different possibilities this grants us as developers.

For example, you could have a templating engine written entirely inside a ServiceWorker. This ServiceWorker would intercept requests to the server for HTML, asking the server for JSON instead. It would then parse that JSON against a template it has stored within it, and finally return simple HTML as the response. This could save us from rendering the HTML on the server, save bandwidth in the responses, and save us from having to include the templating logic in every page of our site. In other words, the server returns simple JSON, and the web page receives simple HTML.

Another idea could be a ServiceWorker that redirects requests to video files to either SD or HD videos based on the user’s connection speed or settings — this could be done without requiring each page to hold the logic for making that decision, or involving the server in the decision, allowing us to use a server optimized for delivering static files.

#### ServiceWorkers and UpUp

UpUp uses the power of ServiceWorkers to provide a solution to the lost connectivity problem described above, and serve content to the user even when their connection is down.

Let’s follow what happens behind the scenes of UpUp.

We’ll begin by registering a ServiceWorker. Once registered, all requests from the browser to our server go through the ServiceWorker, where they are wrapped in a JavaScript promise, and pass on untouched to our server. If that promise is broken (ie. we did not receive a response from the server), the ServiceWorker catches that error before it is shown to the user. It will then check for the cached content we’ve decided to show the user, and return that as the response, instead of an error .

<figure block="figure">
	<img elem="media" src="{{ page.id }}/serviceworker-offline.gif" alt="Request and response to server through a ServiceWorker falling back to cache">
</figure>

To the browser’s window, responses returned from the server or from the cache by the ServiceWorker look exactly the same.

##### Where does the offline content come from?

The final piece of the puzzle is the new caching technology used by UpUp — CacheStorage. Note: don’t confuse this with the browser’s own cache, or with that [douchebag](http://alistapart.com/article/application-cache-is-a-douchebag), the Application Cache. This is something new and much more powerful.

When we first registered our ServiceWorker, we told it what content to store in cache for later (we defined this in the `content-url` and `assets` settings). The UpUp ServiceWorker script went ahead and fetched that content, and stored it using the CacheStorage interface.

This content will now be available for the ServiceWorker the next time the user is offline.

## Important ServiceWorkers Considerations

When using ServiceWorkers, there are a few things you need to always keep in mind.

#### HTTPS Only

To preserve the user’s security and privacy, ServiceWorkers can only detect requests over a secure connection.

During development you can use UpUp through localhost or file (e.g. both `http://localhost/` and `file:///Users/tal_ater/index.html` are OK), but to deploy it to production you’ll need to have HTTPS set up on your server.

#### Browser Support

UpUp plays nicely with all browsers, progressively enhancing browsers that support ServiceWorkers, while leaving users with older browsers unaffected.

UpUp currently supports Opera (since version 27), Chrome (since version 40) and Firefox (since version 41). If your users are using a different browser, they simply won’t notice anything different.

#### Where Should I Place My Files?

For security reasons, the browser only lets UpUp’s ServiceWorker see network requests within its scope.

The scope that the ServiceWorker can affect is determined by where you’ve placed `upup.min.js` and `upup.sw.min.js`. For example, if you place it on `https://yoursite.com/js/upup.sw.min.js`, UpUp will only be able to show your offline content when users try to look at the /js/ directory.

This is why it’s important to place both files on the same server as your content, and not in a subdirectory. This should ideally be in the root of your site (e.g. `https://yoursite.com/upup.min.js`).

## What’s Next?

It’s hard not to be excited about all the new possibilities ServiceWorker opens up to us as developers.

Go ahead, and try UpUp on your own site, you can see it in action and find more details and tutorials on doing [Offline First with UpUp](https://www.talater.com/upup/).

If you’d like to dive deeper and play some more with ServiceWorkers, there’s a [great introduction](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) by Matt Gaunt. If you’d like a few other ideas of how to improve caching with ServiceWorkers, check out Jake Archibald’s [Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/).
