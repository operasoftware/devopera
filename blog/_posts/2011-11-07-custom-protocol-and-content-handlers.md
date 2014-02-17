---
title: Custom Protocol and Content Handlers in Opera 11.60
authors:
- mike-taylor
tags:
- html5
- protocols
- opera-11
layout: article
---
<h2 id="custom_protocol_and_content_handlers_in_opera_1160_beta">Custom Protocol and Content Handlers in Opera 11.60 beta</h2>

<p>The Opera 11.60 alpha snapshot introduces support for <a href="http://www.whatwg.org/specs/web-apps/current-work/#custom-handlers">HTML5 custom scheme and content handlers</a>.</p>

<p>Not yet supported are the <code>isProtocolHandlerRegistered</code>, <code>isContentHandlerRegistered</code>, <code>unregisterContentHandler</code>, <code>unregisterProtocolHandler</code> methods which were added to the spec <a href="http://html5.org/tools/web-apps-tracker?from=6523&amp;amp;to=6524">recently</a>.</p>

<p>The idea is pretty simple. Your site can offer to handle certain MIME types or schemes (aka &#8220;protocols&#8221;) and the user has the option of opting in. One obvious use-case is webmail. For example, a service like Fastmail.fm or Gmail could tell your browser to open its &quot;Compose&quot; page if you click on a &quot;mailto:&quot; link rather than open a native mail application.</p>

<p>Of course, there are reasons why you wouldn&#8217;t want to pass off every type of content to a web-app&#x2014;we want JavaScript and CSS to be handled by the browser, for example&#x2014;so a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#type-blacklist">blacklist exists</a>. For <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-April/031220.html">security reasons</a>, there&#39;s also a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#whitelisted-scheme">whitelist</a> for schemes (but with the option to create a custom &#8220;web+&#8221; scheme).</p>

<h3 id="protocol_registration">Protocol Registration</h3>

<p><code>navigator.registerProtocolHandler</code> takes three arguments: the protocol, a URL which points to the custom handler application with a placeholder &#8220;%s&#8221;, and a title.</p>

<p><pre><code>navigator.registerProtocolHandler(
  &quot;tel&quot;,                           //protocol
  &quot;/protocolhandler.html?%s&quot;,      //handler
  &quot;Telephony&quot;                      //title
);
</code></pre></p>

<p>In a user-agent that supports this, the user will be prompted to allow this registration to happen. Here is how this currently looks in Opera 11.60 alpha:</p>

<span class='img'><img alt='' src='/blog/custom-protocol-and-content-handlers/0registerprotocol.png' /></span>


<p>Once that&#8217;s taken care of, all &#8220;tel:&#8221; links will have the opportunity to be handled by this &#8220;Telephony&#8221; app. For example: clicking on <a href="tel:5551234">tel: 555-1234</a> brings up a dialog asking if you would like to open the link with the just-registered application, or the default. </p><span class='img'><img alt='' src='/blog/custom-protocol-and-content-handlers/contentchoice.png' /></span>

<p>The browser then navigates to <a href="http://miketaylr.com/pres/capjs/demo/?tel%3A5551234" target="_blank">http://miketaylr.com/pres/capjs/demo/?tel%3A5551234</a>. A <a href="http://miketaylr.com/pres/capjs/demo/app.js">script</a> can then parse the URL and operate on the &#8220;tel%3A5551234&#8221; content (in this case, just put the phone number in the phone&#8217;s LED).</p>

<p>You can try it out <a href="http://miketaylr.com/pres/capjs/demo/">here</a>.</p>

<h3 id="content_registration">Content Registration</h3>

<p><code>navigator.registerContentHanlder</code> takes three arguments as well: the content-type, a URL which points to the custom content handler with a placeholder &#8220;%s&#8221;, and a title.</p>

<p><pre><code>navigator.registerContentHandler(
  &quot;text/x-cheeseburger&quot;,                     //content-type
  &quot;<a href="http://miketaylr.com/code/cb.html?cb=%s" target="_blank">http://miketaylr.com/code/cb.html?cb=%s</a>&quot;, //handler
  &quot;Cheeseburger Parser&quot;                      //title
);
</code></pre></p>

<p>Just like <code>registerProtocolHandler</code>, the user will be prompted to allow the content-type registration to happen.</p><span class='img'><img alt='' src='/blog/custom-protocol-and-content-handlers/0registercontent.png' /></span>


<p>In this example, we have a custom <code>text/x-cheeseburger</code> content-type parser (see the <a href="http://miketaylr.com/pres/capjs/?full#cheeseburger-syntax">syntax diagram</a>) to operate on our .cheeseburger files. When we download a resource with the <code>text/x-cheeseburger</code> content-type, our browser will ask us to allow it to open it with our custom handler.</p><span class='img'><img alt='' src='/blog/custom-protocol-and-content-handlers/opencontent.png' /></span>

<p>Again, just like <code>registerProtocolHandler</code>, the application is opened with the &#8220;%s&#8221; placeholder replaced by the URL of resource to be handled. In this case, <a href="http://miketaylr.com/code/cb.html?cb=http%3A%2F%2Fmiketaylr.com%2Fpres%2Fcapjs%2Fdemo%2Fsingle.cheeseburger" target="_blank">http://miketaylr.com/code/cb.html?cb=http%3A%2F%2Fmiketaylr.com%2Fpres%2Fcapjs%2Fdemo%2Fsingle.cheeseburger</a>. Now <a href="http://miketaylr.com/code/cb.js">our script</a> can fetch the contents and present it in a colorful way.</p><span class='img'><img alt='' src='/blog/custom-protocol-and-content-handlers/0cb.png' /></span>

You can give it a spin <a href="http://miketaylr.com/pres/capjs/demo/contenthandler.html">here</a>.
