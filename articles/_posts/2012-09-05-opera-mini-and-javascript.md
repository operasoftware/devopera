---
title: Opera Mini and JavaScript
authors:
- tiffany-brown
intro: 'Opera Mini is one of the world’s foremost mobile browsers, which runs on pretty much any device, even low-powered ones. It is a proxy-based browser, which has many advantages, including reducing the size of pages downloaded onto the user’s phone by up to 90%. On the downside, JavaScript can behave in unexpected ways when requested by Opera Mini. In this article we’ll discuss exactly what this means for your development work, in detail.'
cover: png
license: cc-by-3.0
layout: article
---

## Introduction

[Opera Mini][1] is one of the world’s foremost mobile browsers, which runs on a range of devices and operating systems ranging from expensive smart phones and tablets to less expensive feature phones that are in common use across many parts of the world. In July 2012, there were [187 million Opera Mini users][2], an increase of 50% over July 2011. Opera Mini is growing strongly on smart phones; in the same period, the share of Opera Mini smartphone users in [Asia Pacific countries][3] increased from 9% to 32%; in Indonesia, the increase was more than 460%. (Our monthly [State Of the Mobile Web reports][4] give the latest statistics for different territories, lists of top ten handsets and websites.)

[1]: http://www.opera.com/mobile/download/
[2]: http://www.opera.com/smw/2012/07/#growth
[3]: http://www.opera.com/smw/2012/07/
[4]: http://www.opera.com/smw/

Much of the reason for Mini’s popularity is that it is capable of rendering complex web pages, even on low-spec devices. It does this by using a proxy-based architecture (see Figure 1). Requests from the user’s handset pass through the carrier’s internet gateway on their way to Opera’s transcoding servers. These servers then forward the request to the server.

<figure class="figure" id="figure-1">
	<img src="{{ page.id }}/architecture.png" alt="Opera Mini requests pass through Opera’s servers" class="figure__media">
	<figcaption class="figure__caption">Figure 1: Opera Mini’s architecture</figcaption>
</figure>

The server sends the response back as normal — when this is received by the Opera transcoding servers, they parse the markup and styles, execute the JavaScript, and transcode the data into Opera Binary Markup Language (OBML). This OBML data is progressively loaded by Opera Mini on the user’s device. Think of it as an interactive snapshot of a document’s state, which is similar in form to a PDF.

Note: Opera Mini versions older than 5.0 do not support progressive loading of OBML content; the page loads will seem slower and more sluggish on older devices.

OBML is great for users and carriers; it sends less data — up to 90% less — over the network. But there is a downside for developers: JavaScript can behave in unexpected ways. In the course of this article we’ll discuss what this means for your development, but first, let’s look at how to [create a test environment](#development), and [detect Opera Mini](#detectingmini).

Note that in general I use “JavaScript” interchangeably with “DOM scripting” in this article. I’ve used more precise terms such as “DOM events” where appropriate.

## Setting up a testing environment Using MicroEmulator {#development}

Unlike [Opera Mobile][8], Opera Mini does not have a standalone emulator, and it can be tedious to switch between a device and a computer during development. Fortunately, you can use **MicroEmulator**, an LGPL licensed J2ME environment to run your own instance of Opera Mini on your desktop machine. To use MicroEmulator, make sure you have Java installed first, and then:

[8]: http://www.opera.com/developer/tools/mobile/

1. **[Download MicroEmulator][9]** and unzip it to a location of your choice.
2. **Download the Opera Mini package**, and save it somewhere memorable. Go to the [Opera for mobile devices][10] download site and select the _Download Opera Mini 7_ link to give you a JAD installer file.
3. **Run microemulator.jar**, then at the start-up screen, choose _File -> Open MIDlet File_ from the menu (see Figure 2) and select the Opera Mini JAD file.
4. **Click _Start_.** Opera Mini will load as it would on a mobile device.

[9]: http://code.google.com/p/microemu/downloads/list
[10]: http://m.opera.com/

<figure class="figure" id="figure-2">
	<img src="{{ page.id }}/microemulator.png" alt="MicroEmulator screen shot" class="figure__media">
	<figcaption class="figure__caption">Figure 2: How to start an Opera Mini instance with MicroEmulator</figcaption>
</figure>

Note: If opening the JAD file in the MicroEmulator doesn’t work, you can access the Opera Mini JAR file directly, as follows: open the JAD file with a text editor, find the _MIDlet-Jar-URL:_ line, then copy the URL from that line and enter it into your browser to allow you to directly download the Opera Mini JAR file. Now try selecting this file using the MicroEmulator.

MicroEmulator offers two modes:

- Default device emulator, which mimics the behavior of a feature phone
- Resizable device (shown above), which does not provide dial pad emulation, but offers a larger screen.

You can select which mode you’d like to use under Options -> Select device.

## Detecting Opera Mini {#detectingmini}

99% of the time, you should use [feature detection][12] to determine whether a browser supports a particular feature or API. Yet sometimes browser sniffing is the right choice. There are two approaches you can take to detect Opera Mini. You can:

[12]: http://dev.opera.com/articles/using-capability-detection/

- Examine the **user agent string**
- Check for the presence of the **`operamini` object**

### Using the user agent string

As with most browsers, Opera Mini identifies itself through the `navigator` object, and its `userAgent` property. Its user agent string adheres to the following pattern:

	Opera/9.80 ($PLATFORM; Opera Mini/$CLIENT_VERSION/$SERVER_BUILD; U; $CLIENT_LANG) Presto/$PRESTO_VER Version/$OPERA_VER

To detect whether a particular request is (presumably) from Opera Mini, check for the presence of `Opera Mini` in the user agent string. An example follows.

	var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);

### Detecting Opera Mini using the `window.operamini` property

Opera Mini also includes an `operamini` object as a property of the `window` object. To check for the presence of this object, use the following code.

	var isOperaMini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]"

### Determining the corresponding desktop version

Unfortunately, `navigator.appVersion` is not an accurate way to determine which version of Opera you’re using ([here’s why][13]). Instead, you’ll need to parse the value of the `navigator.userAgent` string. An example using [regular expressions][14] is shown below.

[13]: http://dev.opera.com/articles/view/opera-ua-string-changes/
[14]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp

	var operaVersion = navigator.userAgent.match(/Version\/([1-9]+\.[0-9]{2})/)[1];

Again, in the vast majority of cases, you should **use feature detection** rather than user agent sniffing.

## What to know about JavaScript in Opera Mini

There are two guiding principles to keep in mind when developing JavaScript with Opera Mini in mind.

- Everything requires user interaction.
- Everything requires a server round-trip.

As mentioned above, an OBML document is more like an interactive image of a document at a particular state. During the transcoding process, JavaScript is executed by the server. If a script continues to run, it will be paused before being sent to the user’s device. In other words, animations won’t work well, if at all.

In addition, links, buttons and most elements with a mouse event listener are **transformed into hotspots**. When a user clicks or taps on such a hotspot, it triggers a server request. If the hotspot has an event listener attached, its handler will be called during that request, and executed by the server.

How does that work in practice? Let’s explore click and form events.

### Click events in Opera Mini

In desktop versions of Opera (and mobile versions with trackball type controls available), the `mouseover` and `mouseenter` events are fired after the user hovers over an object, but before the user clicks it. When the user presses the mouse button, a `mousedown` event is fired, followed by a `mouseup` event when the button is released and then a `click` event. When the user moves the mouse away from the object, the browser will fire _mouseout_ and _mouseleave_ events.

In Opera Mini, the `mouseover`, `mousedown`, `mouseup`, and `click` events are all fired at once, after the user engages with a clickable hotspot (see Figure 3, and [view my click events example][15]). Note that the **`mouseenter`, `mouseleave` and `mouseout` events are never fired**.

[15]: http://dev.opera.com/articles/view/opera-mini-and-javascript/javascript-opera-mini-fig3.html

<figure class="figure" id="figure-3">
	<img src="{{ page.id }}/mouse-events.png" alt="How mouse events work in Opera Mini" class="figure__media">
	<figcaption class="figure__caption">Figure 3: How mouse events work in Opera Mini view <a href="http://www.youtube.com/watch?v=mp5IFTPhV20" title="A video showing how mouse events work in Opera Mini">a video</a></figcaption>
</figure>

### Form events in Opera Mini

In a similar fashion, form fields can receive `focus`, `click`, `change`, and `blur` events, in that order. However, these events will only be triggered after the user has changed the value of a field (see Figure 4, and view my [form events example][18]).

[18]: http://dev.opera.com/articles/view/opera-mini-and-javascript/javascript-opera-mini-fig4.html

<figure class="figure" id="figure-4">
	<img src="{{ page.id }}/form-events.png" alt="How form events work in Opera Mini" class="figure__media">
	<figcaption class="figure__caption">Figure 4: How form events work in Opera Mini <a href="http://www.youtube.com/watch?v=DWbr3cV9hbg" title="A video showing how form events work in Opera Mini">view a video</a></figcaption>
</figure>

Unlike desktop browsers, `focus` and `blur` events **only apply to form input elements** in Opera Mini. The `click` event is the only mouse event supported for `input` elements.

As you may have noticed in the examples above, any time the state of the document changes — any time a repaint or reflow needs to occur — Opera Mini must make a request to the transcoding server.

### Event Delegation in Opera Mini

Until recently,Event delegation didn’t work in Opera Mini. Now it’s implemented by the Server sending clickable areas to the client for anything with `cursor:pointer`. Delegation mostly works as expected with click events with the exception of form elements; it’s rather hard to detect whether using them should trigger an event (and thus a server round trip) or not, unless an event listener is attached directly to them. A workaround is to add a dummy event listener to required form element.

### JavaScript execution limits

Opera Mini servers usually execute JavaScript quickly. Scripts that consume too much memory, however, will be killed. As with any JavaScript development, your goal should be to construct scripts as efficiently as possible.

Some JavaScript and DOM operations have absolute timeouts. When reached, **the script is paused** by the server, as mentioned above.

#### `setTimeout` and `setInterval`

`setTimeout` and `setInterval` are subject to the following timeout limits:

- Opera Mini 5.0+ ≈5 seconds
- Opera Mini 4.x ≈2.5 seconds

This means that if you use `setInterval` to invoke a function, it will be called a **maximum** of _n_ times where _n_ is the quotient of the timeout divided by the interval. If the interval is 1000 milliseconds, the function will be executed a maximum of five times (in newer versions of Opera Mini) before the entire script is paused (5000 ÷ 1000 = 5). If the interval is 5000 milliseconds, it will be executed no more than once before pausing.

`setTimeout`, obviously, works a bit differently. If the timeout value is greater than 5000 milliseconds — give or take a few milliseconds — the function will not be executed unless the user interacts with the document. Your best bet is to set the smallest timeout value necessary.

In both cases, the timeout limit begins when the page starts to load.

#### `XMLHttpRequest` timeouts

`XMLHttpRequest` is also supported by Opera Mini. Timeout limits are as follows:

- Opera Mini 5.0+ ≈5 seconds
- Opera Mini 4.x ≈2.5 seconds

As with `setInterval`, if an XHR request exceeds the timeout, the script will be paused as it’s transcoded.

#### Restarting paused scripts

**What does a paused script look like?** Have a look at my [video example of a paused script being restarted][21]. Here we are using `setInterval` to change the background color of an object every 50 milliseconds. When the timeout limit is reached, the color will stop changing as the state of the script pauses.

[21]: http://www.youtube.com/watch?v=VnleANWlomI

It’s possible to **un-pause** a script, however, with the help of a user-initiated event. Let’s examine the JavaScript code used to create the animation in the video.

	var box = document.getElementById('box'),
		update = document.getElementById('valofnewcol'),
		start = 0;

	changecolor = function(element, degreeshift, update) {
		var newcol = (start * degreeshift) / 360 << 8,
		col = 'hsl(' + newcol + ', 100%, 50%)',
		coltxt = document.createTextNode(col),
		anim,
		restart;

		element.style.background = col;
		start++;

		if (update.firstChild) {
			update.replaceChild(coltxt, update.firstChild);
		} else {
			update.appendChild(coltxt);
		}
	}

	anim = setInterval(changecolor, 50, box, 45, update);

	// Unpauses the interval
	restart = function(){
		// This can be an empty function
	}
	box.addEventListener('click', restart, false);

The last few lines of this script add a `click` event listener to the `box` object. When the box object receives a `click` event, the interval will resume. ([view my animation example running live][22].)

[22]: http://dev.opera.com/articles/view/opera-mini-and-javascript/javascript-opera-mini-fig5.html

As mentioned before, Opera Mini versions 5.0 and upwards support progressive loading, meaning data is sent to the client in chunks as it is transcoded. This is not true of Opera Mini 4, which is why its timeouts are shorter.

### Unsupported DOM events {#unsupporteddom}

Mini supports DOM events, but only a subset. Much of this is dictated by hardware; some phones lack keyboards, for example. Below is a table of events and event attributes supported in Opera desktop or Opera Mobile that Opera Mini does not support.

<table id="unsupportedbymini">
<thead>
<tr>
	<th>Event name</th>
	<th>Event attribute</th>
</tr>
</thead>
<tbody>
<tr>
	<td><code>contextmenu</code></td>
	<td><code>oncontextmenu</code></td>
</tr>
<tr>
	<td><code>dblclick</code></td>
	<td><code>ondblclick</code></td>
</tr>
<tr>
	<td><code>error</code></td>
	<td><code>onerror</code></td>
</tr>
<tr>
	<td><code>keydown</code></td>
	<td><code>onkeydown</code></td>
</tr>
<tr>
	<td><code>keypress</code></td>
	<td><code>onkeypress</code></td>
</tr>
<tr>
	<td><code>keyup</code></td>
	<td><code>onkeyup</code></td>
</tr>
<tr>
	<td><code>mousemove</code></td>
	<td><code>onmousemove</code></td>
</tr>
<tr>
	<td><code>mouseenter</code></td>
	<td><code>onmouseenter</code></td>
</tr>
<tr>
	<td><code>mouseleave</code></td>
	<td><code>onmouseleave</code></td>
</tr>
<tr>
	<td><code>mouseout</code></td>
	<td><code>onmouseout</code></td>
</tr>
<tr>
	<td><code>mousewheel</code></td>
	<td><code>onmousewheel</code></td>
</tr>
<tr>
	<td><code>resize</code></td>
	<td><code>onresize</code></td>
</tr>
<tr>
	<td><code>scroll</code></td>
	<td><code>onscroll</code></td>
</tr>
<tr>
	<td><code>touchcancel</code></td>
	<td><code>ontouchcancel</code></td>
</tr>
<tr>
	<td><code>touchend</code></td>
	<td><code>ontouchend</code></td>
</tr>
<tr>
	<td><code>touchmove</code></td>
	<td><code>ontouchmove</code></td>
</tr>
<tr>
	<td><code>touchstart</code></td>
	<td><code>ontouchstart</code></td>
</tr>
</tbody>
</table>

As you can see, **key events** such as `keypress` and `keyup` are not supported. Neither are `touch` and `scroll` events.

At this time, the `unload` event and the `onunload` event attribute are poorly supported across Opera products. Though feature detection can be used to indicate support, the current implementation does not perform as it should.

### Unsupported techniques and APIs {#unsupportedtechniques}

The DOM methods, techniques, and HTML5 APIs that in this section are not supported in Opera Mini as of version 7.0.

#### Opening and closing windows

Opera Mini also doesn’t support using JavaScript to open new windows (such as `window.open()`). If you use `window.open()` to launch a new window, Opera Mini will instead load that page as a new “screen.” It will not open a new window or tab. Similarly, because a new window was never opened, `window.close()` will not work. (This is also true of the `target` attribute of HTML.)

#### Offline storage APIs

Since Opera Mini’s client-server architecture requires it to be online, it shouldn’t come as a surprise that Opera Mini doesn’t support offline storage APIs.

Supporting local databases presents performance and scalability challenges since data would have to be stored on the server rather than client-side. Writing or reading data would require server round trips. Applications that rely on `localStorage`, `sessionStorage`, Application Cache, or client-side databases will not work for Opera Mini. Use server-side storage instead.

#### Web Workers

For scalability and performance reasons, Web Workers have been disabled in recent versions of Opera Mini, despite support in the corresponding desktop versions of Opera.

#### Native client-side form validation

Current versions of Opera desktop and Opera Mobile support [HTML5 form features][23], including validation. Opera Mini, at this time, does not support them. Developers must still use JavaScript for client-side validation, and newer type attribute values such as `range` and `email` default to the `text` type in Opera Mini. However, you can still use selectors such as `input[type=range]` in your CSS and with the [Selectors API][24].

[23]: http://dev.opera.com/articles/view/new-form-features-in-html5/
[24]: http://www.w3.org/TR/selectors-api2/

You may also set attributes such as `min`, `max` and `pattern`, and use the `getAttribute()` method to retrieve those values for your validation script. Another option is to just rely solely on server-side validation — something you probably have and should have in place regardless of client-side validation support.

## Debugging JavaScript in Opera Mini {#debugging}

Opera Mini offers two development utilities:

- `server:source`, which dumps the generated source code for the current page state.
- `server:console`, which collects JavaScript errors and output from `console.log()`.

### Using `server:source`

Entering `server:source` into the address bar after a page has been rendered will reveal the server-generated source code for the page (see Figure 5).

<figure class="figure" id="figure-5">
	<img src="{{ page.id }}/server-source.png" alt="The source code for Opera.com" class="figure__media">
	<figcaption class="figure__caption">Figure 5: The <code>server:source</code> for the Opera home page</figcaption>
</figure>

You can also export this source to a script on your server. Enter `server:source?post=http://your.server.com/script` in the address bar. This will send three fields — `url`, `host`, and `html` as a POST request. Your script can then write this code to a file or a database.

### Using `server:console`

Opera Mini’s JavaScript console supports a subset of the [Console API][26]. JavaScript errors will be logged to the console as shown in Figure 6. You can also write messages to the console using `console.log()`.

[26]: https://developers.google.com/chrome-developer-tools/docs/console-api

<figure class="figure" id="figure-6">
	<img src="{{ page.id }}/server-console.png" alt="The console output for Opera.com" class="figure__media">
	<figcaption class="figure__caption">Figure 6: The <code>server:console</code> for the Opera home page</figcaption>
</figure>
