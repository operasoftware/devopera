---
title: New HTML5 Features in Opera 11
authors:
- bruce-lawson
tags:
- opera-11
- html5
- odin
license: cc-by-3.0
layout: post
---

<p>With all the excitement of Opera 11&#39;s tab stacking and extensions, you might have thought that we had neglected our HTML5 commitments. You&#39;d be wrong! After all, the browser that began the HTML5 work is unlikely to rest on our laurels. </p>
<p>From <a href="http://www.opera.com/docs/">Frank&#39;s splendid documentation</a>, the <a href="http://www.opera.com/docs/changelogs/windows/1100/">Opera 11 changelog</a> tells us that support has been added for the following:</p>
<h3>HTML5 APIs:</h3>
<ul>
  <li><code>Selection.selectAllChildren</code>; see <a href="http://html5.org/specs/dom-range.html#dom-selection-selectallchildren"> HTML5 DOM Range API</a>.</li>
  <li><code>HashChangeEvent</code> event object; see <a href="http://www.w3.org/TR/html5/history.html#hashchangeevent">W3C HTML5
    Section 5.5.9: History traversal</a>.</li>
  <li><code>document.head</code>: the DOM tree accessor; see <a href="http://www.w3.org/TR/html5/dom.html#dom-document-head">HTML5 section 3: Semantics, structure, and APIs of HTML documents</a></li>
<li><a href="http://dev.w3.org/html5/eventsource/">Server-sent Events</a>; also see <a href="http://my.opera.com/core/blog/eventsource">The long journey of Server-Sent Events (EventSource)</a></li>
</ul>
<h3> WebSockets support</h3>
<p> Opera offers support for WebSockets which provide a way to communicate between script in a web page and the server in full-duplex
  mode with low latency. Opera supports <a href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-00">version
  -00</a> of the WebSocket protocol (-76). WebSockets sets up one TCP connection and confirms that the server can speak
  WebSocket by doing a special handshake, after which the server and the client can send text messages over the connection
  at will, resulting in faster communication.</p>
<p class="lists">WebSockets support in Opera is disabled by default. Warning: This is due to flaws which can be exploited in the current WebSockets protocol. However, if you want to enable WebSockets in Opera:</p>
<ol>
  <li>Type <code>opera:config</code> in the address bar and press <kbd>Enter</kbd>.</li>
  <li>In the Preferences Editor, expand the &quot;User Prefs&quot; topic and see &quot;Enable WebSockets&quot;.</li>
  <li>Click the &quot;Enable WebSockets&quot; check box.</li>
</ol>
<p>Don&#39;t forget to check out our tutorial <a href="http://dev.opera.com/articles/view/introducing-web-sockets/">Introducing Web Sockets</a>.</p>
<h3>HTML5 Forms:</h3>
<p>I&#39;m very pleased with the changes that we&#39;ve made to our HTML5 Forms. </p>
<p>We&#39;ve added </p>
<ul>
  <li>Support for <code>&lt;input type=&quot;search&quot;&gt;</code></li>
  <li>Support for <code>&lt;input type=&quot;file&quot; multiple&gt;</code></li>
  <li>Support for <code>&lt;input placeholder=&quot;&quot;&gt;</code></li>
  <li>Support for <code>&lt;input type=&quot;color&quot;&gt;</code></li>
  <li>Support for <code>&lt;input type=&quot;tel&quot;&gt;</code></li>
</ul>
<p>We&#39;ve improved</p>
<ul>
  <li>Updated the language string for HTML5 Forms</li>
  <li><code>&lt;input type=&quot;email&quot;&gt;</code> validation</li>
  <li>Default value for <code>&lt;input type=&quot;range&quot;&gt;</code></li>
  <li><code>out-of-range @value</code> in <code>&lt;input type=&quot;range&quot;&gt;</code></li>
  <li><code>&lt;input type=&quot;email&quot;&gt;</code> now supports multiple emails as per the specification</li>
  <li>Autofixing <code>&lt;input type=&quot;url&quot;&gt;</code> without <code><a href="http://" target="_blank">http://</a></code></li>
</ul>
<p>We&#39;ve removed</p>
<ul>
  <li>Support for <code>&lt;input type=&quot;file&quot; min max&gt;</code></li>
  <li>Support for allowing a single control to be associated with more than one form</li>
  <li>Support for WebForms from <code>hasFeature</code></li>
</ul>
<p>Be sure to read the super-splendid article <a href="http://dev.opera.com/articles/view/new-form-features-in-html5/">New form features in HTML5</a>. </p>
<p>Software wouldn&#39;t be software without some bugs, so here are some that we&#39;ll fix just as soon as we can:</p>
<ul>
  <li><code>placeholder</code> doesn&#39;t work on <code>&lt;textarea&gt;</code> elements</li>
  <li>The <code>pattern</code> attribute doesn&#39;t work on <code>&lt;input type=&quot;tel&quot;&gt;</code></li>
  <li>The error message on <code>&lt;input type=&quot;number&quot;&gt;</code> is borked</li>
<li> <code>&lt;input type=&quot;color&quot;&gt;</code> accepts any value (unlike date, datetime-local, number, week, month)</li>
</ul>
<h3>HTML5 elements:</h3>
<ul>
  <li>Support for the <code>&lt;progress&gt;</code> element</li>
  <li>Support for the <code>&lt;meter&gt;</code> element</li>
</ul>
<p>See Andreas&#39; <a href="http://people.opera.com/andreasb/odin/html5forms_o11.html">demo of <code>&lt;progress&gt;</code>, <code>&lt;meter&gt;</code> and new form goodies</a>.</p>
