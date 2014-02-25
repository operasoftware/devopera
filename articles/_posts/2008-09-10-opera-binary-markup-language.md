---
title: Opera Binary Markup Language
authors:
- chris-mills
intro: 'In this article Chris Mills gives the lowdown on OBML, the one of the main technologies behind Opera Mini, which is also available in the Opera Devices SDK 9.6.'
license: cc-by-nc-sa-2.5
layout: article
---
<h2>Introduction</h2>

<p><abbr title="Opera Binary Markup Language">OBML</abbr> is a feature available to <a href="http://www.operamini.com/">Opera Mini</a> and browsers created using the <a href="http://dev.opera.com/articles/view/opera-devices-sdk-9-6-developer-document/">Opera Devices SDK 9.6</a> (all built upon the Presto 2.1 rendering engine)&#8212;when OBML is used to render a web page, instead of the whole page being downloaded to the device and rendered it is transformed into the ultra-compact OBML format then sent to the device, which reduces download sizes by up to 90%. This offers obvious advantages to those using devices with low memory or low power, who may also be downloading on slow networks. It does however have cavets that you need to be aware of, in terms of how it renders web technologies.</p>

<p>In this article I&#8217;ll cover how the OBML system works, and discuss what caveats there are to be aware of with OBML.</p>

<h2>How OBML works</h2>

<p>When a browser rendering using OBML requests a web page from a server, the following occurs:</p>

<ol>
<li>The web page request is sent to a large, power server farm.</li>
<li>This server farm retrieves the requested web page, and converts it into OBML</li>
<li>The OBML version of the page is sent to the browsing device, and displayed in the browser that originally made the request</li>
</ol>

<p class="note">If the browser does not have available plugins such as a download manager, a video player or a music player, it will usually try to use the device&#8217;s own functionality to deal with such things, if it has such functionality available.</p>

<h2>CSS and HTML</h2>

<p>The OBML servers are able to handle the full HTML and CSS specs as well as any other browser based upon the Presto 2.1 rendering engine&#8212;see the <a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Presto 2.1&#8212;web standards supported by Opera&#8217;s core</a> article for more details. It will also faithfully reproduce other technologies supported by Presto 2.1, such as SVG. The OBML server farm renders the requested web page then takes a snapshot of it before converting it into OBML and sending it to the browser. Any page constructs that render and then remain consistent until the next page load work fine. Technologies that require constant server-client interaction (such as heavy Ajax) or lots of animation tend to be more troublesome&#8217;in fact no animations are supported under OBML (including JavaScript, Flash or animated GIFs). We will explore JavaScript as a whole in the next section.</p>


<h2>How does OBML interpret JavaScript?</h2>

<p>We need to consider where the JavaScript is executed&#8212;on the server, before the page loads, or after the page loads. As hinted above, the OBML servers are based on the new Presto 2.1 rendering engine, which means that OBML has full support for JavaScript on the server (ECMAScript 3.)</p>

<p>On the client-side, however, support is limited by the hardware limitations of the handsets; therefore the OBML client itself only supports a limited subset of JavaScript, which means:</p>

<ol>
<li>Limited support for DOM events</li>
<li>No background scripting</li>
<li>Very limited Ajax support</li>
</ol>

<p>We&#8217;ll look at this in more detail in the sections below.</p>

<h3>Server-side support</h3>

<p>All scripts executed before a page is fully loaded will work as expected when your page is loaded in Opera Mini. This includes manipulation of elements in the DOM tree. Furthermore, the <code>body</code> element&#8217;s <code>onLoad</code> event is fired and its code executed in the OBML server farm before the page is transferred to the client.</p>

<p>The only caveat to consider here is that we don&#8217;t allow scripts to run for more than a second or two once the page has finished loading, and will not allow any scripts to run before the user does some kind of user interaction (such as click a link or submit a form)&#8212;therefore <code>interval()</code> and <code>delay()</code> are disabled. The same is true for xmlrpc requests&#8212;they work but are only allowed to run for a few seconds. Once the page is sent to the device, all scripts are stopped.</p>

<h3>Client-side support</h3>

<p>After the page has been transferred to the device the browser is running on, things are more limited, as the client does very little JavaScript processing, with most of the processing being done on the server before it is sent to the device. No background scripts running after the page is loaded will be executed, and executing code using <code>setTimeout</code> is not possible.</p>

<p>The supported events are as follows:</p>

<ol>
<li>Loading: normal event processing is done for <code>onLoad</code> and <code>onUnload</code>.</li>
<li>Forms:
	<ol><li><code>onSubmit</code></li>
<li><code>onChange</code>: this even works during filling out a form, not just on submitting the entire form. For example, if you have 2 form fields, &#8220;Select Country&#8221; and &#8220;Select State/Region&#8221;, and the second one changes depending on the country you selected in the first one, the OBML will reload to display this change</li>
<li><code>onClick</code> on buttons (bear in mind that events will only be fired when the form is finally submitted, not while it&#8217;s being edited in the client, therefore <code>onFocus</code> would not work)</li></ol>
</li>
<li>Clicks: <code>onClick</code> is implemented as a mouse motion to the coordinate being clicked (<code>onMouseEnter</code>, <code>onMouseOver</code>, <code>onMouseLeave</code> etc) followed by <code>onMouseDown</code> followed by <code>onMouseUp</code> and finally <code>onClick</code>.</li>
</ol>

<p>Other events are ignored/not applicable, for example:</p>

<ol>
<li>key/mouse events (<code>onMouseOver/-Out/-Down/-Up</code>, <code>onKeyDown/-KeyPress</code>)</li>
<li>focus events (<code>onBlur</code>, <code>onFocus</code>, as mentioned above)</li>
</ol>

<p>This sounds limiting, but there is another point to consider&#8212;OBML can execute JavaScript on the server if it&#8217;s triggered by the JavaScript events listed above in the client, so some complex pages work surprisingly well&#8212;for instance Facebook is able to display popup menus and popup dialogs very well on OBML browsers.</p>

<h3>Ajax Support</h3>

<p>Given device limitations and OBML&#8217;s client-server architecture, Ajax applications cannot be expected to work as expected on OBML browsers. <code>XMLHttpRequest</code> is supported, therefore many Ajax-powered sites will function pretty well, for example iGoogle (you can&#8217;t move boxes around, but you can add and delete them, and change themes,) and GMail (this mostly works, although you don&#8217;t get new mails appearing automatically.)</p>

<p>Sites that use Ajax to trigger very regular page changes however, such as Google Suggest and the automatic new mail functionality of GMail mentioned above won&#8217;t work. Other examples of things that don&#8217;t work are IRC-like chat-clients using server-side events, and clocks.</p>

<p>As mentioned above, client-side events are limited to form changes (<code>onChange</code> and <code>onClick</code>) and clicking (<code>onClick</code>, links, submits, etc.&#8212;everything you can do by clicking with a mouse,) so things that react to user input (clicking, or changing form values) usually work, unless they need to see each individual character inputted (eg Google Suggest,) or react to changing state in the outside world (eg new mail, new text message, end of the world, the time, etc.)</p>

<p>What it all boils down to is that once a page has been rendered by the server it won&#8217;t change until the user clicks something.</p>

<h2>Summary</h2>

<p>In this article I have covered OBML, including how it works, and the caveats you need to consider when developing web applications to run in OBML browsers.</p>
