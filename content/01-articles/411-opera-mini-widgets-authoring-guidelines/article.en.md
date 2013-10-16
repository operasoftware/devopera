Title: Opera Mini widgets authoring guidelines
----
Date: 2010-12-01 15:20:45
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

        <p class="note">Note: the ability to run Opera Mini widgets on your phone is a B2B product delivered only to Vodafone at this time.</p>

   <h2>Table of Contents</h2>
    
    <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#authoring">Opera Mini Widgets authoring tips</a>
        <ul>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#general">General considerations</a></li>
          <li><a href="#view">View modes</a></li>
          <li><a href="#container">Container issues</a></li>
          <li><a href="#animation">Animation issues</a></li>
          <li><a href="#font">Font issues</a></li>
          <li><a href="#layout">Layout issues</a></li>
          <li><a href="#asynchronous">Asynchronous issues</a></li>
          <li><a href="#event">Event handler issues</a></li>
          <li><a href="#library">Library issues</a></li>
          <li><a href="#platform">Platform issues</a></li>
        </ul>
      </li>
    </ul>

<h2 id="intro">Introduction</h2>

<p>Opera Mini widgets attempt to be as close to other widgets as possible. However, there are some differences and issues that widget authors should be aware of. This document attempts to list all the known issues and differences when authoring widgets for Opera Mini.</p>

<h2 id="authoring">Opera Mini widgets authoring tips</h2>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a></li>
<li><a href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/">JavaScript support in Opera Mini 4</a></li>
<li><a href="http://dev.opera.com/articles/view/evolving-the-internet-on-your-phone-des/">Evolving the Internet on your phone: Designing web sites with Opera Mini 4 in mind</a></li>
<li><a href="http://dev.opera.com/articles/view/differences-between-opera-mini-3-and-4/">Differences between Opera Mini 3 and 4</a></li>
<li><a href="http://dev.opera.com/articles/view/opera-mini-5-beta-developers/">A developer’s look at Opera Mini 5 beta 2</a></li>
<li><a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a></li>
</ul>

<h3 id="general">General considerations</h3>

<p>The most important issue when developing widgets for Opera Mini is that all the rendering and processing of HTML occurs on a Transcoder server. Keeping this fact in mind it is possible to avoid a lot of mistakes.</p>

<h3 id="view">View modes</h3>

<p>To make sure widgets work properly in Opera Mini the widgets must support the following view modes.</p>

<p>For Opera widgets:</p>

<ul>
  <li>fullscreen</li>
  <li>docked (optional)</li>
</ul>

<p>For W3C widgets:</p>

<ul>
  <li>fullscreen</li>
  <li>mini (optional)</li>
</ul>

<p class="note">This widgets implementation coforms to the <a href="http://www.w3.org/TR/2009/WD-widgets-vmmf-20091006/">Widgets 1.0: View Modes Media Feature</a> working draft from 6 October 2009.</p>

<h3 id="container">Container issues</h3>

<p>The Opera Mini client does not support scrollbars on individual elements. This means that content that relies on containment in a scrollable box will not work properly. Either the content will be truncated at the end of the container, or the box will be expanded to be big enough for all the content it contains.</p>

<p>If the container is expanded the viewport will scroll instead of the element itself. In many cases this works well. Examples of this are the <a href="http://widgets.opera.com/widget/7206/">Twiget (Twitter widget)</a> and the <a href="http://widgets.opera.com/widget/6415/">BBC Headline News widget</a>.</p>

<p>A practical consequence of this is that any widget that shows content of varying sizes cannot put controls underneath the content and expect them to be visible.</p>

<h3 id="animation">Animation issues</h3>

<p>Since all rendering happens on the Opera Mini transcoder server there is no point in including effects like animations in widgets. In cases where desktop or other widgets are being converted to run on Opera Mini it is just as well to disable animation. There is a risk that the transcoder might send the view back to the Opera Mini client in the middle of an animation.</p>


<h3 id="font">Font issues</h3>

<p>Opera Mini supports a limited number of fonts, and what fonts are available might vary depending on the device. This means that a lot of font style rules will be ignored; fonts end up as being &quot;big&quot;, &quot;normal&quot; or &quot;small&quot; regardless.</p>

<h3 id="layout">Layout issues</h3>

<p>When rendering widgets on mobile, the transcoder will try to render the content using as much space as possible on the device. In other words, designs should be as fluid as possible so as to be usable on several different screen resolutions. In this regard, developing Opera Mini widgets is not dissimilar to developing fluid layout for normal web pages.</p>

<p>When different styling depending on the size of the target screen is necessary there are two techniques that should work. One is to use CSS media queries based on resolution. The second technique is to position content programmatically by accessing the size of the view port through JavaScript. It is highly recommended that authors favor fluid designs, and only fall back to media queries and JavaScript positioning when necessary.</p>

<h3 id="asynchronous">Asynchronous issues</h3>

<p>The transcoder attempts to play nicely with asynchronous activity, that is it tries to run scripts to completion before returning data to the client. Periodic tasks - for example scheduled with <code>setInterval</code> - will be allowed and will run on the server.</p>

<p>Keep in mind that any updates to the screen happening after the Opera Mini transcoder has sent the page to the client will NOT be transmitted. That is, once the page is rendered on the client, it will not be updated until the next time the client has to contact the transcoder, usually due to some user interaction.</p>

<h3 id="event">Event handler issues</h3>

<p>The Opera Mini client supports a limited number of events for <code>&lt;input&gt;</code> elements. It&#39;s possible to use <code>onchange</code> and <code>onmouseover</code>, however <code>onkeydown</code>/<code>onkeyup</code> will not work since a full screen text edit box is used.</p>

<h3 id="library">Library issues</h3>

<p>An advantage of having rendering happen on a transcoding server is that the server has significantly more memory, and is much faster than the device itself. This means it should be unproblematic to use libraries, whereas one would normally try to avoid it to save resources on a mobile device.</p>

<h3 id="platform">Platform issues</h3>

<p>The Opera Mini server loads widgets from an operating system that is case sensitive with regards to file names. This means that if there are file names referenced in the widget that use a different case than the actual file name the file will not be loaded.
For example if there is a file on the file system called <code>ICON.png</code> but it is referenced in the HTML as <code>&lt;img src=&quot;icon.png&quot;&gt;</code> then the icon will not appear in the widget. It will however work on platforms that do not care about the case in filenames, for example Windows.</p>

