---
title: HTML5 Custom Protocol and Content Handlers
authors:
- mike-taylor
intro: 'This article introduces the HTML5 custom scheme and content handlers, showing how you can employ them to allow use of custom content types on your sites.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Since the <a href="http://www.opera.com/browser/">Opera 11.60 snapshot release</a>, we have had support for the <a href="http://www.whatwg.org/specs/web-apps/current-work/#custom-handlers">HTML5 custom scheme and content handlers</a>. Their purpose is pretty simple. Your site can offer to handle certain MIME types or schemes (aka &#8220;protocols&#8221;) and the user has the option of opting in. One obvious use case is webmail, for example a service like Fastmail.fm or Gmail could tell your browser to open its "Compose" page if you click on a <code>mailto:</code> link, rather than opening a native desktop mail application.</p>

<p>Of course, there are reasons why you wouldn&#8217;t want to pass off every type of content to a web app! We want JavaScript and CSS to be handled by the browser, for example, so a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#type-blacklist">blacklist exists</a> to reconcile potential issues that may arise there. For <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-April/031220.html">security reasons</a>, there's also a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#whitelisted-scheme">whitelist</a> for schemes, with the option to create a custom &#8220;web+&#8221; scheme).</p>

<p>Not yet supported are the <code>isProtocolHandlerRegistered</code>, <code>isContentHandlerRegistered</code>, <code>unregisterContentHandler</code>, <code>unregisterProtocolHandler</code> methods which were <a href="http://html5.org/tools/web-apps-tracker?from=6523&to=6524">added to the spec recently</a>.</p>

<h2 id="protocol_registration">Protocol Registration</h2>

<p class="note">Note: before you read through this section, load up the <a href="index.html">telephone demo application</a>: all the code discussed below comes from there.</p>

<p>To start with, we need to register new protocols we want to use: this is done using the <code>navigator.registerProtocolHandler</code> object. This takes three arguments: the protocol, a URL pointing to the custom handler application with a placeholder &#8220;%s&#8221;, and a title.</p>

<pre><code>navigator.registerProtocolHandler (
  "tel", //protocol
  "/protocolhandler.html?%s", //handler
  "Telephony" //title
);</pre></code>

<p>In a user-agent that supports this, the user will be prompted to allow this registration to happen. Figure 1 shows how this currently looks in Opera 11.60 alpha:</p>

<p><img src="registerprotocol.png" alt="the protocol registration prompt dialog, in Opera 11.60 alpha"></p>
<p class="caption">Figure 1: The protocol registration prompt dialog, in Opera 11.60 alpha.</p>

<p>Once that&#8217;s taken care of, the browser will then give users the option to handle &#8220;tel:&#8221; links with this &#8220;Telephony&#8221; app. For example: clicking on <a href="tel:5551234">tel: 555-1234</a> brings up a dialog asking if you would like to open the link with the just-registered application, or the default, as shown in Figure 2.</p>

<p><img src="contentchoice.png" alt="once the registration has been allowed, the user is now given the choice of handling the custom protocol with the custom handler application."></p>
<p class="caption">Figure 2: Once the registration has been allowed, the user is now given the choice of handling the custom protocol with the custom handler application.</p>

<p>When the custom handler application is chosen, the browser then navigates to <code>https://dev.opera.com/articles/view/html5-custom-protocol-and-content-handlers/index.html/?tel%3A5551234</code> &mdash; you can see how the placeholder is filled in. A <a href="app.js">custom script</a> can then parse this custom URL and operate on the &#8220;tel%3A5551234&#8221; content (in this case, just put the phone number in the phone&#8217;s LED on the application).</p>

<h2 id="content_registration">Content Registration</h2>

<p>The next part of the puzzle is getting custom content registered: this is done with the <code>navigator.registerContentHandler</code> object, which takes three arguments: the content-type, a URL pointing to the custom content handler with a placeholder &#8220;%s&#8221;, and a title. In this example we'll be investigating how to handle a very important new web content type: <code>.cheeseburger</code>.</p>

<pre><code>navigator.registerContentHandler (
  "text/x-cheeseburger", //content-type
  "cb.html?cb=%s", //handler
  "Cheeseburger Parser" //title
);</code></pre>

<p>Just like with custom protocols and the <code>registerProtocolHandler</code> object, when the browser comes across custom content it will prompt the user to allow the content-type registration to happen, as shown in Figure 3.</p>

<p><img src="registercontent.png" alt="the content registration prompt dialog, in Opera 11.60 alpha"></p>
<p class="caption">Figure 3: The content registration prompt dialog, in Opera 11.60 alpha.</p>

<p>In this example, we have a custom <code>text/x-cheeseburger</code> content-type parser (defined in the <a href="cheeseburger_railroaddiagram.png">cheeseburger syntax diagram</a>) to operate on our <code>.cheeseburger</code> files. When we download a resource with the <code>text/x-cheeseburger</code> content-type, our browser will ask us if we wish to open it with our custom handler, as shown in Figure 4.</p>

<p><img src="opencontent.png" alt="once the content registration has been allowed, the user is now given the choice of handling the content with our custom cheeseburger handler."></p>
<p class="caption">Figure 4: Once the content registration has been allowed, the user is now given the choice of handling the content with our custom cheeseburger handler.</p>

<p>Again, just like with <code>registerProtocolHandler</code>, the handler is opened with the &#8220;%s&#8221; placeholder replaced by the URL of content to be handled, in this case, <code>cb.html?cb=http%3A%2F%2Fmiketaylr.com%2Fpres%2Fcapjs%2Fdemo%2Fsingle.cheeseburger</code>. Now <a href="cb.js">our cheeseburger script</a> can fetch the contents and present it in a colorful way, as shown in Figure 5.</p>

<p><img src="cheeseburger.png" alt="the output of our cheeseburger content handler - a series of characters in the shape of a cheeseburger"></p>
<p class="caption">Figure 5: The output of our cheeseburger content handler - that is one mighty fine cheeseburger!</p>

<p><a href="contenthandler.html">Play with our cheeseburger content handler live</a>.</p>
