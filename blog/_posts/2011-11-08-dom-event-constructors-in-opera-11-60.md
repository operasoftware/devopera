---
title: DOM Event Constructors in Opera 11.60
authors:
- tiffany-brown
tags:
- eventtarget
- event
- constructors
- domcore
- dom
- web-standards
- odin
layout: post
---
<p>As mentioned in Divya&#39;s post about <a href="http://my.opera.com/ODIN/blog/2011/11/07/what-s-new-in-opera-development-snapshots-4-november-2011-edition">what&#39;s new in Opera 11.60</a>, Opera now supports the <a href="http://www.w3.org/TR/domcore/#events" target="_blank"><abbr title="Document Object Model">DOM</abbr> Event constructor syntax</a>. It offers a simpler way to create synthetic and custom <abbr title="Document Object Model">DOM</abbr> events.</p>

<p>Why might you use a synthetic event or a custom event? Synthetic events can be useful for automated testing, or for developing user interfaces that change conditionally based on user input. Custom events work particularly well for game development, where you may, for example, dispatch a <code>shoot</code> event when the user presses the space key.</p>

<h3>Creating a synthetic event</h3>

<p>Let&#8217;s take a look at how we used to create a synthetic event by constructing a <code>focus</code> event on an <code>input</code> element.</p>

<pre><code>var event = document.createEvent(&#39;Event&#39;);
event.initEvent(&#39;focus&#39;, false, true);
document.querySelector(&#39;input&#39;).dispatchEvent(event);</code></pre>

<p>First, we create the event object using the <code>createEvent()</code> method. Then we initialize it using <code>initEvent()</code>, and dispatch it to the <code>input</code> element using <code>dispatchEvent()</code>. Now let&#39;s create the same event using the <code>Event()</code> constructor and compare.</p>

<pre><code>var event = new Event(&#39;focus&#39;, {bubbles:false,cancelable:true});
document.querySelector(&#39;input&#39;).dispatchEvent(event);</code></pre>

<p>We now need just two lines of code: one to create the event, and one to dispatch it. Our first argument is the name of the event we would like to dispatch. Our second argument is optional. It is a <a href="http://www.w3.org/TR/WebIDL/#idl-dictionaries">dictionary</a>, a collection of key-value pairs that define the properties of the event. What those properties should be depends on the type of event you are synthesizing. A <code>MouseEvent</code>, for example, should include <code>screenX</code> and <code>screenY</code> properties. In this case, however, we are just setting the bubbles and cancelable properties.</p>

<h3>Custom events</h3>

<p>Custom events have a similar syntax, but use the <code>CustomEvent()</code> constructor. In the example that follows, we&#39;re creating and dispatching a ripple event on the document.</p>

<pre><code>document.dispatchEvent( new CustomEvent(&#39;ripple&#39;, {x:40, y:20}) );</code></pre>

<p>The above example demonstrates another advantage of the constructor syntax: the ability to create a new event as a parameter for <code>dispatchEvent()</code>.</p>

<p>Though a switch from the way we currently dispatch events, <abbr title="Document Object Model">DOM</abbr> Event constructors offer us greater flexibility and a cleaner syntax.</p>

<h3>Current browser support</h3>

<p>Opera is not the only browser that supports DOM Event constructors. They are also available in recent WebKit builds, including the latest version of Chrome.</p>
