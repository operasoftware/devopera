Title: Handling events with JavaScript
----
Date: 2009-02-03 06:38:18
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

	<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Dynamic style - manipulating CSS with JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-animation/" rel="next" title="link to the next article in the series">Next article—JavaScript animation</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
		
		<h2>Introduction</h2>
		
		<p>Now you are comfortable with using CSS for styling and layout, and have taken your first stumbling steps with understanding variables, functions, methods, etc. in JavaScript, it is time to start using that knowledge to provide your site visitors with interactivity and dynamic behavior (such as dragging and dropping, animation, etc). Controlling events with JavaScript allows you to step into the role as Doctor Frankenstein and really give life to your creations!</p>
		
		<p>But enough about the joys of JavaScript—this article will get practical, telling you what events are and how to make use of them on your pages. The table of contents is as follows:</p>
		
		<ul>
  <li><a href="#eventswhat">What are events?</a></li>
  <li><a href="#eventshow">How events work</a></li>
  <li><a href="#eventsevolution">The evolution of events</a>
    <ul>
      <li><a href="#eventsdom2">DOM level 2 events</a></li>
      <li><a href="#eventsie">Internet Explorer event model exception</a></li>
      <li><a href="#eventscrossbrowser">Applying events cross-browser</a></li>
    </ul>
  </li>
  <li><a href="#eventsaccessibility">Events and accessibility</a></li>
  <li><a href="#eventscontrolling">Controlling events</a>
    <ul>
      <li><a href="#eventsapplying">Applying events to certain elements</a></li>
    </ul>
  </li>
  <li><a href="#eventobjectreferences">Event object references</a>
    <ul>
      <li><a href="#eventspecificproperty">Checking an event-specific property</a></li>
    </ul>
  </li>
  <li><a href="#eventdefaultsbubbling">Event defaults and event bubbling</a>
    <ul>
      <li><a href="#eventpreventingdefault">Preventing the default behavior of events</a></li>
      <li><a href="#eventstopbubbling">Stopping event bubbling</a></li>
    </ul>
  </li>
  <li><a href="#completeexamplecode">Complete event handling example</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<p class="note">Bear in mind that you can <a href="code-example.zip">download the code example for this article</a> and try it out for yourself.</p>
		
		<h2 id="eventswhat">What are events?</h2>
		<p>Events occur when some sort of interaction takes place in a web page. This can be the end user clicking on something, moving the mouse over a certain element or pressing down certain keys on the keyboard. An event can also be something that happens in the web browser, such as the web page completing the loading of a page, or the user scrolling or resizing the window.</p>
		
		<p>Through the use of JavaScript, you can detect when certain events happen, and cause things to occur in response to those events.</p>
		
		<h2 id="eventshow">How events work</h2>
		
		<p>When events happen to an HTML element in a web page, it checks to see if any event handlers are attached to it. If the answer is yes, it calls them in respective order, while sending along references and further information for each event that occurred. The event handlers then act upon the event.</p>
		
		<p>There are two types of event order: <em>event capturing</em> and <em>event bubbling</em>.</p>
		
		<p>Event capturing starts with the outer most element in the DOM and works inwards to the HTML element the event took place on and then out again. For example, a click in a web page would first check the <code>HTML</code> element for <code>onclick</code> event handlers, then the <code>body</code> element, and so on, until it reaches the target of the event.</p>
		
		<p>Event bubbling works in exactly the opposite manner: it begins by checking the target of the event for any attached event handlers, then bubbles up through each respective parent element until it reaches the HTML element.</p>
		
		<h2 id="eventevolution">The evolution of events</h2>
		
		<p>In the early days of JavaScripting, we used event handlers directly within the HTML element, like this:</p>
		
<pre><code>&lt;a href=&quot;http://www.opera.com/&quot; onclick=&quot;alert(&#39;Hello&#39;)&quot;&gt;Say hello&lt;/a&gt;</code></pre>

		<p>The problem with this approach is that it resulted in event handlers spread throughout the code, no central control and missing out on web browsers&#39; caching features when it comes to external JavaScript file includes.</p>

		<p>The next step in event evolution was to apply events from within a JavaScript block, for example:</p>
		
<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  document.getElementById(&quot;my-link&quot;).onclick = waveToAudience;
    function waveToAudience() {
      alert(&quot;Waving like I&#39;ve never waved before!&quot;);
    }
&lt;/script&gt;

&lt;a id=&quot;my-link&quot; href=&quot;http://www.opera.com/&quot;&gt;My link&lt;/a&gt;</code></pre>

		<p class="note">Note the clean HTML in the last example. This is generally what’s referred to as unobtrusive JavaScript. The benefit of this, besides JavaScript caching and code control, is code separation: you have all your content in one location and your interaction code in another. This also allows for a more accessible approach where the link will work perfectly fine with JavaScript disabled; it is also something that will please search engines.</p>
		
		<h3 id="eventsdom2">DOM Level 2 Events</h3>
		
		<p>Back in November in 2000, the Document Object Model (DOM) Level 2 Events Specification was released by the W3C, offering a more detailed and granular way to control events in a web page. The new way to apply events to HTML elements looked like this:</p>
		
<pre><code>document.getElementById(&quot;my-link&quot;).addEventListener(&quot;click&quot;, myFunction, false);</code></pre>

		<p>The first parameter of the <code>addEventListener method</code> is the name of the event, and you should note that it no longer uses the “on” prefix. The second parameter is a reference to the function we want to call when the event occurs. The third parameter controls the so-called <code>useCapture</code> of the event, ie if event capturing or event bubbling should be used.</p>
		
		<p>The counterpart of <code>addEventListener</code> is <code>removeEventListener</code>, which removes any applied event from an HTML element.</p>
		
		<h3 id="eventsie">Internet Explorer event model exception</h3>
		
		<p>Unfortunately, Internet Explorer has so far not implemented the DOM Level 2 event model, and instead has its own proprietary <code>attachEvent</code> method. It looks like this in action:</p>
		
<pre><code>document.getElementById(&quot;my-link&quot;).attachEvent(&quot;onclick&quot;, myFunction);</code></pre>

		<p class="note">Note that the <code>attachEvent</code> still uses the &quot;on&quot; prefix before the name of the actual event, and it doesn&#39;t include any support for deciding the capture phase.</p>
		
		<p>The counterpart of <code>attachEvent</code> is <code>detachEvent</code>, to remove any applied event from an HTML element.</p>
		
		<h3 id="eventscrossbrowser">Applying events cross-browser</h3>
		
		<p>With the inconsistencies between web browsers in event handling implementations, there have been numerous attempts from web developers to offer a good solution for applying events sucessfully across all major browsers. These solutions have different pros and cons, and are usually referred to as <code>addEvent</code> functions.</p>
		<p>Most major JavaScript libraries have these built in, and there are also a number of stand-alone solutions available online. One suggestion is to use <a href="http://dean.edwards.name/weblog/2005/10/add-event/"><code>addEvent</code> by Dean Edwards</a>; you should also consider looking at something like <a href="http://docs.jquery.com/Events">event handling options with the jQuery JavaScript library</a>.</p>
		
		<h2 id="eventsaccessibility">Events and accessibility</h2>
		
		<p>Before we delve deeper into explaining how to control and call events, I just want to emphasize accessibility. While it’s normally a broad term for most people, I use it here to convey that what you want to do through the usage of events really should work when JavaScript is disabled or for other reasons blocked in the web browser.</p>
		
		<p>Some people do turn off JavaScript in their web browsers, but more commonly proxy servers, firewalls and overzealous antivirus programs stop JavaScript from behaving as expected. Don’t let this discourage you; my aim is to guide you through creating events that have an accessible fallback in case of JavaScript not being available.</p>
		
		<p>In general, never apply events to HTML elements that don’t already have a built-in behavior for that certain event. You should only apply <code>onclick</code> events to elements like <code>a</code>, which already have a fallback behavior for click events (eg browsing to the location specified in the link, or submitting a form).</p>			
		
		<h2 id="eventscontrolling">Controlling events</h2>
		
		<p>Let’s start out with a simple example of an event, and how you can react to it. For the sake of simplicity, I will be using the <code>addEvent</code> solution referred to above, to avoid delving into the intricacies of cross-browser workarounds in each example.</p>
		
		<p>Our first example is the <code>onload</code> event, which belongs to the <code>window</code> object. Generally, any events that affect the browser window (like <code>onload</code>, <code>onresize</code> and <code>onscroll</code>) are available through the <code>window</code> object.</p>
		
		<p>The <code>onload</code> event takes place when everything in the web page has completely loaded. This includes the HTML code itself as well as external dependencies such as images, CSS files and JavaScript files. When all of them have finished loading, <code>window.onload</code> gets called, and you can trigger web page functionality to occur. The following very simple example makes an alert message appear when the page has loaded:</p>
		
<pre><code>addEvent(window, &quot;load&quot;, sayHi);
function sayHi() {
  alert(&quot;Hello there, stranger!&quot;);	
}</code></pre>

<p>That wasn’t too bad, right? If you want to, you can use so-called anonymous functions instead, eliminating the need for a name for your function. Like this:</p>

<pre><code>addEvent(window, &quot;load&quot;, function () {
  alert(&quot;Hello there, stranger!&quot;);	
});</code></pre>

		<h3 id="eventsapplying">Applying events to certain elements</h3>
		
		<p>To take this further, we should start by looking into adding events to some other elements on the page. For the sake of argument, let’s suppose you want to have an event happen every time a link is clicked. Combining this with what we learned above, this would be the way to go about it:</p>

<pre><code>addEvent(window, &quot;load&quot;, function () {
  var links = document.getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      addEvent(links[i], &quot;click&quot;, function () {
        alert(&quot;NOPE! I won&#39;t take you there!&quot;);

        // This line&#39;s support added through the addEvent function. See below.
      evt.preventDefault(); 
    });
  }
});</code></pre>

		<p>Ok, what just happened? First we used the <code>onload</code> event to check when the web page had completely loaded. Then we found all the links in the page by using the <code>getElementsByTagName</code> method of the <code>document</code> object. With an established reference to them, we looped through all links and applied an event to them to cause an action to occur once they were clicked.</p>
		
		<p>But what about the cheeky “won’t take you there” part? After the <code>alert</code> has been shown, the line below reads <code>return false</code>. This means that within that context, returning false prevents the default action. We’ll get into other ways to dictate how events behave in the last section of this article.</p>
		
		<h2 id="eventobjectreferences">Event object references</h2>
		
		<p>To add more detail to your event handling, you can take different actions depending on certain properties of the event that took place. For instance, if you are dealing with an <code>onkeypress</code>, you might want the event to occur only if the user presses the <kbd>enter</kbd> key, but no other keys.</p>
		
		<p>As with the event model, Internet Explorer has decided to use a global event object called <code>event</code> for handling objects, while the W3C-recommended way implemented by all other web browsers is passing event objects belonging just to that specific event. The most common problem with implementing such functionality across browsers is getting a reference to the event itself, and a reference to the element that the event is targeting. This code solves that for you:</p>
		
<pre><code>addEvent(document.getElementById(&quot;check-it-out&quot;), &quot;click&quot;, eventCheck);
function eventCheck (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  var eventTarget = (typeof eventReference.target !== &quot;undefined&quot;)? eventReference.target : eventReference.srcElement;
}</code></pre>

		<p>The first line in the <code>eventCheck</code> function checks if there’s an event object passed along to the function. If yes, it automatically becomes the first parameter of the function, hence getting the name <code>evt</code> in this example. If it doesn’t exist, meaning that the current web browser is Internet Explorer, it refers to a global property of the <code>window</code> object named <code>event</code>.</p>
		
		<p>The second line looks for a <code>target</code> property on the established event reference. If it doesn’t exist, it falls back to the <code>srcElement</code> property implemented by Internet Explorer.</p>
		
		<p class="note">Note: this control and behavior is also addressed with the above referenced <a href="http://dean.edwards.name/weblog/2005/10/add-event/"><code>addEvent</code></a> function, where the event object has been normalized to work the same in all web browsers. The above code is written out as if this is not the case, though, to give you an insight into web browser differences.</p>
		
		<h3 id="eventspecificproperty">Checking an event-specific property</h3>
		
		<p>Let’s put this into action. The following example executes a different code block depending on what key was pressed:</p>
		
<pre><code>addEvent(document.getElementById(&quot;user-name&quot;), &quot;keyup&quot;, whatKey);
function whatKey (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  var keyCode = eventReference.keyCode;
  if (keyCode === 13) {
    // The Enter key was pressed
    // Code to validate the form and then submit it
  }
  else if (keyCode === 9) {
    // The Tab key was pressed
    // Code to, perhaps, clear the field
  }
}</code></pre>

		<p>The code inside the <code>whatKey</code> function checks a property on the event that took place, namely <code>keyCode</code>, to see which key was actually pressed on the keyboard. The number 13 means the <kbd>Enter</kbd> key and the number 9 means the <kbd>Tab</kbd> key.</p>
		
		
		<h2 id="eventdefaultsbubbling">Event defaults and event bubbling</h2>
		
		<p>There are a number of cases where you would be interested in stopping the default behavior of an event. For instance, you might want to prevent the user from submitting a form if certain fields aren’t filled out. The same goes for event bubbling, and this part will explain how you can take control of such situations.</p>
		
		<h3 id="eventpreventingdefault">Preventing the default behavior of events</h3>
		
		<p>Just as with event model and event object differences, there are two ways to go about this to support IE, and all other browsers. Building on the previous code for getting an event object reference, the next listing includes code to stop the default link behaviour occuring when links are clicked:</p>
		
<pre><code>addEvent(document.getElementById(&quot;stop-default&quot;), &quot;click&quot;, stopDefaultBehavior);
function stopDefaultBehavior (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  if (eventReference.preventDefault) {
    eventReference.preventDefault();
  }
  else {
    eventReference.returnValue = false;
  }
}</code></pre>

		<p>This approach uses something called object detection, to confirm that a method is actually available before it is called, which helps prevent possible errors. The <code>preventDefault</code> method is available in every web browser but Internet Explorer, and it prevents the default action of an event from happening.</p>
		
		<p>If that method isn’t supported, it falls back to setting the <code>returnValue</code> of the global event object to <code>false</code>, thus stopping the default behaviour in Internet Explorer.</p>
		
		<h3 id="eventstopbubbling">Stopping event bubbling</h3>
		
		<p>Consider the following HTML hierarchy:</p>
		
<pre><code>&lt;div&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;a href=&quot;http://www.opera.com/&quot; id=&quot;stop-default&quot;&gt;Opera&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a href=&quot;http://www.opera.com/products/dragonfly/&quot; id=&quot;stop-default&quot;&gt;Opera Dragonfly&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;	
&lt;/div&gt;</code></pre>

		<p>Suppose you had applied an <code>onclick</code> event to all the <code>a</code> elements, <code>li</code> elements and the <code>ul</code> element. The <code>onclick</code> event would first call the event handler of the link, then the list items, and finally the event handler of the unordered list.</p>
		
		<p>If the user clicks the link, most likely, you don’t want to call any possible event handler for the parent <code>li</code> element, but instead just let the user navigate to the corresponding page. However, if the user clicks the <code>li</code> item beside the link, you might want to trigger an event handler for the <code>li</code> as well as the <code>ul</code> element.</p>
		
		<p class="note">Note that with the DOM level 2 Event Model and <code>useCapture</code> enabled, ie using event capturing, it would start with the unordered list, then the list item and finally the link. However, since event capturing isn’t an option in Internet Explorer, this functionality is very seldom used in real practice.</p>
		
		<p>Here’s how to write code to stop the bubbling of an event:</p>
		
<pre><code>addEvent(document.getElementById(&quot;stop-default&quot;), &quot;click&quot;, cancelEventBubbling);
function cancelEventBubbling (evt) {
  var eventReference = (typeof evt !== &quot;undefined&quot;)? evt : event;
  if (eventReference.stopPropagation) {
    eventReference.stopPropagation();
  }
  else {
    eventReference.cancelBubble = true;
  }
}</code></pre>

<h2 id="completeexamplecode">Complete event handling example</h2>

<p>I have put together <a href="javascript-event-handling-example.html">an example page</a> showcasing adding an event handler and preventing that event’s default action, depending on certain criteria. The event handler checks whether a form is allowed to be submitted or not depending on if the user has filled out all fields. The JavaScript code is as follows:</p>

<pre><code>addEvent(window, &quot;load&quot;, function () {
  var contactForm = document.getElementById(&quot;contact-form&quot;);
  if (contactForm) {
    addEvent(contactForm, &quot;submit&quot;, function (evt) {
      var firstName = document.getElementById(&quot;first-name&quot;);
      var lastName = document.getElementById(&quot;last-name&quot;);
      if (firstName &amp;&amp; lastName) {
        if (firstName.value.length === 0 || lastName.value.length === 0) {
          alert(&quot;You have to fill in all fields, please.&quot;);
          evt.preventDefault();
        }
      }
    });
  }
});</code></pre>		
		
		<h2 id="summary">Summary</h2>
		<p>I have merely scratched the surface of event handling in this article, but I hope you have gained a good understanding of how events work. I might have been a little hard on you with web browser inconsistencies, but my belief is that it’s very important to know these issues from the start.</p>
		
		<p>Once you have accepted these issues and learned to master the solutions above, there’s no end to the possibilities you can achieve with JavaScript and event handling!</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
	<li>What is an event?</li>
	<li>What’s the difference between event capture and event bubbling?</li>
	<li>Is it possible to control the execution of an event, ie stopping the default behavior. How?</li>
	<li>What’s the main problem with the <a href="javascript-event-handling-example.html">attachEvent</a> and scope, which triggered a JavaScript web community contest?</li>
</ul>	

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Dynamic style - manipulating CSS with JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-animation/" rel="next" title="link to the next article in the series">Next article—JavaScript animation</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/177-49-handling-events-with-javascript/robertnyman.jpg" style="float:right;" alt="Picture of the article author Robert Nyman" /></p>

<p>Robert Nyman has worked with web interface development for a decade, where JavaScript has always been his main interest. He blogs passionately at <a href="http://www.robertnyman.com/">Robert’s talk</a> about web development.</p>

<p style="padding-bottom:50px;">He lives with his wonderful family in Sweden and stays up at night writing while they’re asleep. Additionally, he nurtures a secret dream to one day get stinking rich, and to have the opportunity write a book about real things, beyond the confines of the web world.</p>
