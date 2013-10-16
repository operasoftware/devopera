Title: JavaScript support in Opera Mini 4
----
Date: 2007-10-25 19:01:09
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

<p class="note">DEPRECATED: This article is deprecated, and a newer article with updated information is available at <a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a>. You should read this one if you want updated information.</p>

<h2>Introduction</h2>

<p>Opera Mini is a very clever way of bringing the web to your mobile phone - it will work on most phone models, even low spec ones, as long as they will run a JVM. Basically, when you request a web page from Opera Mini, a request is sent to the Opera Mini servers. They retrieve the page, convert it into OBML (Opera Binary Markup Language,) a very compact binary markup format that reduces the page size by up to 90%, and then serve it to your phone.</p>

<p>This is all well and good for HTML and CSS content - the Opera Mini servers make a great job of interpreting the markup and styles and presenting them to Opera Mini in a usable format. But what about JavaScript? Here the story is not so simple - I will cover this topic in the following sections:</p>

<ol>
<li>How does Opera Mini interpret JavaScript?</li>
<li>Server-side support</li>
<li>Client-side support</li>
<li>Ajax support</li>
</ol>

<p>Note: Security is an important matter, which Opera takes very seriously. The connection between the Opera Mini client and server is always encrypted, whether the original site is HTTP or HTTPS, therefore you can trust Opera Mini to be secure.</p>

<p class="note">Visit our <a href="http://www.opera.com/mobile/">Opera Mini &amp; Opera Mobile</a> page for details and download instructions.</p>

<h2>How does Opera Mini interpret JavaScript?</h2>

<p>We need to consider where the JavaScript is executed - on the server, before the page loads, or after the page loads. The Opera Mini servers are based on the new Opera 9.5 rendering engine, which means that Opera Mini has full support for server-side JavaScript (ECMAScript 3.) </p>

<p>On the client-side, however, support is limited by the hardware limitations of the handsets; therefore the Opera Mini client itself only supports a limited subset of JavaScript, which means:</p>

<ol>
<li>Limited support for DOM events</li> 
<li>No background scripting</li> 
<li>Very limited Ajax support</li>
</ol>

<p>We&#39;ll look at this in more detail in the sections below.</p>

<h2>Server-side support</h2>

<p>As mentioned above, the Opera Mini servers are based on the brand new Opera 9.5 rendering engine, which means that all scripts executed before a page is fully loaded will work as expected when your page is loaded in Opera Mini. This includes manipulation of elements in the DOM tree. Furthermore, the body-element&#39;s <code>onLoad</code> event is fired and its code executed server-side before the page is transferred to the client. </p>

<p>The only caveat to consider here is that we don&#39;t allow scripts to run for more than a second or two once the page has finished loading, and will not allow any scripts to run before the user does some kind of user interaction (such as click a link or submit a form) - therefore <code>interval()</code> and <code>delay()</code> are disabled. The same is true for xmlrpc requests - they work but are only allowed to run for a few seconds. Once the page is sent to the client, all scripts are stopped.</p>

<h2>Client-side support</h2>

<p>After the page has been transferred to the client, things are a lot more limited - basically all events are processed on the server. The client does absolutely no JavaScript processing at all, and instead the page is kept in the server (basically the client works as an input device for the opera running in the server). No background scripts running after the page is loaded will be executed, and executing code using <code>setTimeout</code> is not possible. </p>

<p>The supported events are as follows:</p>

<ol>
<li>Loading: normal event processing is done for <code>onLoad</code> and <code>onUnload</code>.</li>
<li>Forms:
	<ol><li><code>onSubmit</code></li>
	<li><code>onChange</code>: this even works during filling out a form, not just on submitting the entire form. For example, if you have 2 form fields, &quot;Select Country&quot; and &quot;Select State/Region,&quot; and the second one changes depending on the country you selected in the first one, Opera Mini will reload to display this change</li>
	<li><code>onClick</code> on buttons (bear in mind that events will only be fired when the form is finally submitted, not while it&#39;s being edited in the client, therefore <code>onFocus</code> would not work)</li></ol>
</li>
<li>Clicks: <code>onClick</code> is implemented as a mouse motion to the coordinate being clicked (<code>onMouseEnter</code>, <code>onMouseOver</code>, <code>onMouseLeave</code> etc) followed by <code>onMouseDown</code> followed by <code>onMouseUp</code> and finally <code>onClick</code>.</li>
</ol>

<p>All other events are ignored/not applicable, for example:</p>

<ol>
<li>key/mouse events (<code>onMouseOver/-Out/-Down/-Up</code>, <code>onKeyDown/-KeyPress</code>)</li>
<li>focus events (<code>onBlur</code>, <code>onFocus</code>, as mentioned above)</li>
</ol>

<p>This sounds limiting, but there is another point to consider - Opera Mini can execute JavaScript on the server if it&#39;s triggered by the JavaScript events listed above in the client, so some complex pages work surprisingly well - for instance Facebook is able to display popup menus and popup dialogs very well on Opera Mini. </p>

<h2>Ajax Support</h2>

<p>Given handset limitations and Opera Mini&#39;s client-server architecture, &quot;Ajax&quot; applications cannot be expected to work as expected on Opera Mini. <code>XMLHttpRequest</code> is supported, therefore many &quot;Ajax&quot; sites will function pretty well, for example iGoogle (you can&#39;t move boxes around, but you can add and delete them, and change themes,) and GMail (this mostly works, although you don&#39;t get new mails appearing automatically.)</p>

<p>Sites that use Ajax to trigger very regular page changes however, such as Google Suggest and the automatic new mail functionality of GMail mentioned above won&#39;t work. Other examples of things that don’t work are IRC-like chat-clients using server-side events, and clocks.</p>

<p>As mentioned above, client-side events are basically limited to form changes (<code>onChange</code> and <code>onClick</code>) and clicking (<code>onClick</code>, links, submits etc, basically everything you can do clicking with a mouse,) so things that react to user input (clicking, or changing form values) usually work, unless they need to see each individual character inputted (eg Google Suggest,) or react to changing state in the outside world (eg new mail, new text message, end of the world, the time etc.)</p>

<p>What it all boils down to is that once a page has been rendered by the server it won&#39;t change until the user clicks something.</p>
