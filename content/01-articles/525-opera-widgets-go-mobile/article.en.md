Title: Opera Widgets go mobile
----
Date: 2011-11-24 11:02:55
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div id="content">
<p>
 <strong>
  Update April 22, 2010:
 </strong>
 updated builds for S60 and Windows Mobile with various
 <acronym title="user interface">
  UI
 </acronym>
 and performance improvements, as well as many bug fixes. Also check out
 <a href="http://labs.opera.com/news/2010/04/22/">
  our latest Labs post
 </a>
 announcing the Opera Widgets Mobile Emulator and Opera Mobile developer tools for Mac and PC.
</p>
<p>
 Over the last couple of months, we&#39;ve been working hard to improve our Opera Widgets manager application for mobile phones — we basically rebuilt it from scratch, using the
 <a href="http://www.opera.com/press/releases/2009/12/10_2/">
  cross-platform UI framework
 </a>
 that is also used in Opera Mobile and Opera Mini, and we have added a number of new features, providing a better and unified user experience across multiple mobile platforms.
</p>
<p>
 Widgets can best be understood as applications that are built with Web standards, such as HTML, CSS, JavaScript and SVG. This means that the barrier to development is very low, and common approaches and libraries used in classic Web development can be deployed, flattening the learning curve and drastically speeding up development time.
</p>
<p>
 Besides the standards supported in our Opera Presto 2.4 engine, we’ve also provided a number of hooks to further empower widget developers: OAuth support, a notification mechanism, multiple icon sizes, live icons, and more.
</p>
<p>
 Using these technologies, developers can create compelling mobile applications that run on Windows Mobile as well as on S60 phones, with more platforms to come in the next few months. Most importantly, all this is possible without the need to recode these mobile applications and adjust them for every platform — no need to learn a new programming language or otherwise deal with restricted deployment environments!
</p>
<p>
 Be sure to try it out and
 <a href="http://dev.opera.com/forums/forum/15948">
  let us know what you think
 </a>
 .
</p>
<h3>
 Downloads:
</h3>
<ul>
 <li>
  <a href="http://www.opera.com/download/get.pl?sub=++++&amp;amp;id=32824&amp;amp;location=270&amp;amp;nothanks=yes">
   Windows Mobile
  </a>
 </li>
 <li>
  <a href="http://www.opera.com/download/get.pl?sub=++++&amp;amp;id=32825&amp;amp;location=270&amp;amp;nothanks=yes">
   Symbian Series 60
  </a>
 </li>
</ul>
<p>
 These builds can be used by developers to start creating and testing their mobile applications on the most important mobile platforms. More platforms will be announced soon.
</p>
<h3>
 Under the hood
</h3>
<ul>
 <li>
  <a href="http://www.opera.com/docs/specs/presto24/">
   Opera Presto 2.4
  </a>
  powers Opera Widgets, bringing the latest Web technology to mobile phones. Note that Vega accelerated rendering is not enabled, so certain advanced background &amp; borders features and CSS transitions are not supported.
 </li>
 <li>
  By default, links are opened in the default browser of the platform. However, a widget may invoke a limited browser for authentication purposes (OAuth). Any URL loaded by calling
  <code>
   window.open(url)
  </code>
  will be opened inside the Widget Manager application. The preinstalled Facebook widget uses this feature.
 </li>
 <li>
  By default, the Widget Manager uses a virtual cursor that is moved by the arrow keys of the keyboard. If, for example, a game widget listens to key events and does not need a virtual cursor, the latter can be turned off by setting the
  <code>
   cursor
  </code>
  CSS property to
  <code>
   none
  </code>
  .
 </li>
 <li>
  Widgets can
  <a href="http://dev.opera.com/libraries/widgetobject/docs/widget.dml#showNotification">
   send notifications
  </a>
  to the Widget Manager by calling
  <code>
   widget.showNotification(text)
  </code>
  .
 </li>
 <li>
  A widget’s author may use one or more
  <a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/#xml_icon">
   static icons
  </a>
  . The Widget Manager will use the icons with the most appropriate size.
 </li>
 <li>
  When a widget is minimized,
  <a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/#widget_modes">
   <code>
    docked
   </code>
   mode
  </a>
  is invoked, which is a mode wherein the widget renders and displays in a minimized state with a smaller viewport, resulting in a so called “live icon”.
 </li>
 <li>
  Widgets can be
  <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">
   debugged remotely
  </a>
  via the Opera Dragonfly developer tools.
 </li>
</ul>
</div>

