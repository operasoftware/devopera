---
title: What Opera Mini on the iPhone Means for Developers
authors:
- daniel-davis
tags:
- iphone
- opera-mini
- css3
license: cc-by-3.0
---

<figure block="figure" mod="left-half">
	<img elem="media" src="{{ page.id }}/OperaMini5_iPhone.jpg" alt="">
	<figcaption></figcaption>
</figure>

After 20 days of deliberation, [Apple has approved Opera Mini for the iPhone and iPod Touch](http://www.opera.com/press/releases/2010/04/13/) meaning it’s now available for free from the iTunes app store. Great news for users but also important for developers.

- For users, it means more choice when browsing the web on these devices and, because of the compression technology used, more freedom to surf the web when connections are slow or expensive.
- For developers, it means mobile web usage increases further and catering for these users becomes even more important.
Opera Mini is unique in that it offers a great browser experience combined with server-side compression. On the technical side, it uses a server-based version of our [Presto 2.4 rendering engine](http://www.opera.com/docs/specs/presto24/) and has some support for HTML5 and CSS3, as you can see in this [summary of Opera’s standards support](http://my.opera.com/ODIN/blog/2010/03/16/opera-standards-chart). It also contains our Small Screen Rendering technology, if the user chooses to enable it.

While this means that mobile users can freely enjoy the desktop versions of their favourite websites, there may be times when you wish to optimize your site for more efficient browsing on a small screen. It’s now widely accepted that [browser-sniffing is not the best way of providing tailored content](http://my.opera.com/ODIN/blog/perils-browser-sniffing) and, thankfully, better ways to look after users of different devices have emerged. Our recommended approach, and one that is gaining traction among developers and browser makers, is [CSS3 Media Queries](http://www.w3.org/TR/css3-mediaqueries/). In effect they are conditional statements for CSS, enabling you to serve specific styles to certain types of devices, for example the following can be used for detecting small screen devices up to and including the iPhone/iPod Touch.

For in-line styles:

	@media screen and (max-device-width: 320px) {…}

For external style sheets:

	<link rel="stylesheet" type="text/css" href="mobile.css"
		media="screen and (max-device-width: 320px)">

Beyond design optimisation, we also recommend testing for browser capabilities rather than for a specific browser name or version. Having said that, in case you need it, the Opera Mini 5 for iPhone / iPod Touch User Agent string is as follows **[updated on 16-04-2010]**:

	Opera/9.80 (iPhone; Opera Mini/5.0.0176/812; U; en) Presto/2.4.15

Please note that the User Agent is liable to change, as all User Agent strings are, however “Opera Mini” and the Presto version format will not. Finally, the `x-operamini-phone` HTTP header returned is:

	Apple # iPhone

**Further resources:**

- For more Opera Mini information aimed at content creators, we’ve compiled a [developer’s look at Opera Mini 5](https://dev.opera.com/articles/view/opera-mini-5-developers/).
- We also have an [Opera Mini simulator](http://www.opera.com/mobile/demo/) that can be run from any desktop browser.
- Don’t forget, Opera Mini is available for many platforms other than the iPhone/iPod Touch — [download Opera for your feature phone or smartphone here](http://www.opera.com/mobile/).
