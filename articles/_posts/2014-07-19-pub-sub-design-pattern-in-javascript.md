Welcome to this humble article on the PubSub design pattern in Javascript. If you have ever written a relatively big Javascript app you'll know that it can get out of hand pretty quickly, for that very reason there are lots of solutions out there that you can use to aid you in this issue, **design patterns** are one of the most generic solutions and very often serve as a base for another more abstract solution, like an MV* framework such as Angular and Backbone.

A design pattern is simply a general reusable solution to a common problem, as you might expect the implementation is up to you, nevertheless a lot of production-ready implementations can be found out there, as we'll discuss later on this article.

The good thing about design patterns is that they are robust and generally accepted solutions, so you are in good hands if you decide to use a certain pattern. It's important to remember though, that when you have a hammer everything looks like a nail, you must know when to use it and when not to; in order to do this you need to clearly understand the advantages and disadvantages of the pattern you plan to use.

The PubSub design pattern stands for Publish/Subscribe, and might also be called Observer pattern. This is one of the most popular design patterns in modern Javascript, and for a good reason! The general idea of this pattern is to promote loose coupling, instead of objects calling other object's methods directly, they subscribe to an event and they get notified whenever that event occurs.

Let's get our feet wet with some code, as this is all quite abstract! A nice thing about PubSub is that it's not a complex design pattern at all, in fact, the idea is pretty simple as we just want to be notified when something happens, so if we had a pubsub implementation, our code would look something like this:

	function myCallback() {
		console.log('Event 1 triggered!');
	}
	pubsub.subscribe('event1', myCallback);
	pubsub.publish('event1');

As you can see the `pubsub` object exposes two methods, `subscribe` and `publish`, when we want to know whenever an event occurs we **subscribe** to that event, later on we can **publish** that event whenever in our code.

The pattern also exposes an `unsubscribe` method which simply removes a listener for a given event name.

## Advantages of the PubSub Pattern
One of the most relevant advantages of this pattern is that it allows us to easily decouple our code, which inherently makes it more maintainable and easier to test. Another advantage is that it helps us to think in term of relationships between the different parts of our app, identifying which layers need to listen and which need to publish events.

We are also able to easily create dynamic relationships between the different entities of our app, making it quite flexible, as Addy Osmani says in his [Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) book:

> Whilst it may not always be the best solution to every problem, it remains one of the
best tools for designing decoupled systems and should be considered an important tool
in any JavaScript developer's utility belt.

## Disadvantages of the PubSub Pattern
The main disadvantage of this pattern is that as we highly decouple the different parts of our app, it can get hard to guarantee that a part of our app is working correctly.
Also, as the dependencies are dynamic they can get hard to track.

# Implementing the PubSub Pattern
Now that you have an idea of the pattern, let's implement it! This is actually quite easy, one simplistic implementation could be as follows:

	var subs = {};
	var pubsub = {
	    subscribe: function (evt, callback) {
	        if(!subs[evt]) subs[evt] = [];
	        subs[evt].push(callback);
	        return callback;
	    },
	    publish: function (evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        subs[evt].forEach(function (callback) {
	            callback.apply(null, args);
	        });
	    },
	    unsubscribe: function (evt, callback) {
	        var idx = subs[evt].indexOf(callback);
	        subs.splice(idx, 1);
	    }
	};

We can use this implementation as follows:

	pubsub.subscribe('greet', function (name) {
	    console.log('Hello ' + name + '!');
	});
	pubsub.publish('greet', 'Federico');

That would produce a message in the developer console `Hello Federico!`, as you can see it's pretty easy to implement and use.

## Other PubSub Implementations
There are a bunch of PubSub implementations, the one I like the most is [Ben Alman's Gist](https://gist.github.com/661855), which is really solid and succinct. Other alternatives include [AmplifyJS](http://amplifyjs.com/) and [PubSubJS](https://github.com/mroderick/PubSubJS).

	/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
	 * http://benalman.com/
	 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

	(function($) {

	  var o = $({});

	  $.subscribe = function() {
	    o.on.apply(o, arguments);
	  };

	  $.unsubscribe = function() {
	    o.off.apply(o, arguments);
	  };

	  $.publish = function() {
	    o.trigger.apply(o, arguments);
	  };

	}(jQuery));

# Using PubSub with AJAX
A very popular use for PubSub is whenever we are working with AJAX and async code, in the following example I illustrate a case where an user wants to search for posts, whenever the user clicks the `#btn-search` button our app should:

 * Send an AJAX request to fetch posts according to the keyword the user specified
 * Update the search history with the new keyword

We could just do everything in one function, but let's keep everything organized and decouple each task we need to perform:

	// USING BEN ALMAN'S PUBSUB IMPLEMENTATION
	// Subscribers
	$.subscribe('posts/search', function (e, keyword) {
		$.ajax('/posts', { keyword: keyword }, function (data) {
			$.publish('/posts/all', data);
		});
	})
	$.subscribe('posts/search', drawHistory);
	$.subscribe('posts/all', drawResults);
	// Publishers
	$('#btn-search').click(function () {
		var keyword = $('#search-input').val();
		$.publish('posts/search', keyword);
	});

As you can see we don't need to wait for the AJAX request to finish to draw the search history, we can do it as soon as the button is clicked, on the other hand we do have to wait in order to draw the results. This somehow complex behaviour is easily and clearly implemented using the PubSub pattern. This scenario is pretty common in MV* frameworks such as [Backbone](http://backbonejs.org/) which are getting increasingly popular, PubSub allows Backbone to easily decouple it's different layers/actors from each other.

# A Real World Example
Not too long ago I faced this issue and I was glad how easily PubSub solved it. Consider you are working in a quite big WordPress plugin which is divided into modules, each module must be independant of each other, meaning it's possible to swap those modules anytime and their tests must not have any hard dependency, to archieve this this modules must able to "talk" to each other indirectly. How can we do this? Well we know that PubSub excels at decoupling so let's try it out!

Out of all our modules, we are interested in two: `favs` and `images`. They both have a JS file: `favs.js` and `images.js` respectively.

We are given the task to implement "adding an image to favorites"; `favs.js` is in charge of favs, so without using pubsub a very bare-bones implementation of `images.js` might look similar to this:

	(function ($) {
		'use strict';
		function onAdded() { /* display OK message */ }
		function onFailed() { /* display FAIL message */ }
		// add to favs
		function addToFavs(id) {
			window.favs.addToFavs(id, onAdded, onFailed);
		}
		// When a #fav element is clicked save to favs
		$('#fav').click(addToFavs);
	})(jQuery);

There are some issues with that code, one is that we have to make some kind of global variable to be able to use the `favs` API from `favs.js`, we also assume that the `favs.js` file will be loaded **before** `images.js`; this isn't a very big deal as we could fix it by using something like `requirejs` but still, what if we want to test that code? Testing the `addToFavs` function would depend on the `window.favs` object.

Using **PubSub** we can rewrite our code as follows:

	(function ($) {
		'use strict';
		function onAdded() { /* display OK message */ }
		function onFailed() { /* display FAIL message */ }
		// When a #fav element is clicked save to favs
		$('#fav').click(function () {
			// favs.js is subscribed to this event
			pubsub.trigger('favs/add');
		});
		pubsub.subscribe('favs/added', onAdded);
		pubsub.subscribe('favs/failed', onFailed);
	})(jQuery);

Where did `window.favs` go? We don't need it anymore! We just **publish** a `favs/add` event (note that it is a good practice to namespace your event names), the `favs.js` file will be listening and will react accordingly, triggering the `favs/added` and `favs/failed` events as needed. We have **decoupled** our little module, as a result we no longer need to use a global variable, have more flexibility on the loading order of the scripts, and more importantly we can now easily test our code by simply publishing events as needed; as a bonus this allows our tests to be more behaviour-driven rather than feature-driven, which is also a good practice :)

# Promises: Another solution for async code
Promises are another tool we can use to deal with async code, they are gaining popularity and for a good reason! They can be quite helpful, it's important to know what they are and when they should be used, it also plays nice with the PubSub design pattern.

The [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) defines promises as follows:

> The Promise interface represents a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success or failure. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise of having a value at some point in the future.
> A pending promise can become either fulfilled with a value, or rejected with a reason. When either of these happens, the associated handlers queued up by a promise's then method are called.

That definition might be a bit hard to swallow, but it's in fact pretty simple; Promises represent an entity which still doesn't have a value, but it's guaranteed that it will eventually either have a value (**succeed**) or **fail**.

	// A simple promise
	var promise = new Promise();
	promise.done(onPromiseFinished);
	promise.fail(onPromiseFailed);

That might not seem like a big deal, but there are several scenarios where it is quite useful! I'll illustrate two, the first one is for caching AJAX requests. First let's write an implementation **without** promises:

	var cache = {};
	function loadSong(id, callback) {
	    if(!cache[id] !== null) {
	        callback(cache[id]);
	        return;
	    }
	    if(cache[id] === null) {
	        return;
	    }
	    cache[id] = null;
	    $.post('/songs', { id: id }, function (data) {
	        cache[id] = data;
	        callback(cache[id]);
	    });
	}

The code above simply loads a song by `id` only once and then executes a `callback`. Not too bad, but we can do better! Let's use Promises! Because Promises only get resolved once, if `done` or `fail` is called when a Promise is already resolved, the callback will be executed **immediatly**, knowing this, we can easily cache AJAX requests as jQuery async functions always return a Promise:

	var cache = {};
	function loadSong(id, callback) {
	    if(!cache[id]) {
	        cache[id] = $.post('/songs', { 'id': id }).promise();
	    }
	    cache[id].done(callback);
	}

Much better! You might notice the use of `.promise()`, this is because jQuery uses [Deferred](http://api.jquery.com/category/deferred-object/), which is a superset of Promise. In this case we just want to return a Promise object which can be resolved only once, so we use `.promise()` the code would also work if we returned a `Deferred` but it's a good practice to always return Promises.

The second use scenario happens whenever we have to wait for several async actions to finish before proceeding, for example:

	// Get latest comments based on user and latest posts
	$.post('/user/get_current_user', function (user) {
		$.post('/posts/latest', function (posts) {
			$.post('/coments/latest', {
				user: user,
				posts: posts
			}, drawToDOM);
		});
	});

Now **that's ugly**, callback spaghetti should always be avoided! Promises also implement a method called `when` which resolves when all it's arguments (which are promises) are resolved, knowing this we can simply code:

	$.when(
		$.post('/user/get_current_user'),
		$.post('/posts/latest')
	).done(function (users, posts) {
		$.post('/comments/latest', drawToDom);
	});

That's much better, now the first two AJAX requests are executed at the same time, so it will be considerably faster. Moreover, the code is much cleaner, but we can still improve! Turns out that `done` also returns a Promise! So we can chain our code as follows:

	$.when(
		$.post('/user/get_current_user'),
		$.post('/posts/latest')
	).done(function (users, posts) {
		return $.post('/comments/latest');
	}).done(drawToDom)

Promises are awesome, don't be afraid to use them and try them out. If you want to know more about Promises I highly reccommend watching [this **great** jQuery conference talk](https://www.youtube.com/watch?v=juRtEEsHI9E) by Alex McPherson. I also [wrote a brief article on the subject](http://gosukiwi.svbtle.com/the-right-way-of-caching-ajax-requests-with-jquery).

# Conclusion
**PubSub** as well as all design patterns has known advantages and disadvantages which you should know very well. It's main strength is highly decoupling the different parts of your application, but it also helps us work with async code and is pretty easy to use and get started, so don't hesitate to try it out in your next project!

**Promises** can be used in conjunction with the PubSub pattern and are a very important tool we can use to deal with complex async events, as well as avoiding [callback hell](http://callbackhell.com/).

# References
The following are references I used for writing this article and are recommended reads on the subject.

 * [Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) by Addy Osmany
 * [Design Principles and Design Patterns](http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) by Robert C. Martin
 * [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
