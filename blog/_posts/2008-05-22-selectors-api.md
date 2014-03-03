---
title: Selectors API
authors:
- lachlan-hunt
tags:
- JavaScript
- Selectors-API
- W3C
- coreblog
license: cc-by-3.0
layout: post
---

<p>The <a href="http://www.w3.org/TR/selectors-api/">Selectors API specification</a>, currently being worked on within the <a href="http://www.w3.org/2006/webapi/">WebAPI working group</a> at the W3C, defines DOM APIs designed to make it possible to select elements within the document using Selectors. This simple, yet powerful API has the potential to make working with the DOM faster and easier.  If you’re familiar with CSS, you will be familiar with Selectors and these APIs should be easy to learn.</p>

<p>For example, to select all the <code>em</code> and <code>strong</code> elements within the document, you can use this.</p>

<pre>document.querySelectorAll(&quot;em, strong&quot;);</pre>

<p>To see how much easier this is compared with traditional APIs, consider this example HTML fragment:</p>

<pre>&lt;ul id=&quot;fruits&quot;&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;apples&quot;&gt; Apples&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;oranges&quot;&gt; Oranges&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;bananas&quot;&gt; Bananas&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;grapes&quot;&gt; Grapes&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>After the user has filled out the form containing those check boxes, suppose you want to get the list of all the checked items.  Using traditional APIs, this would require obtaining a list of all the input elements and iteratively checking which ones were checked.</p>

<pre>var fruits = document.getElementById(&quot;fruits&quot;);
var checkboxes = fruits.getElementsByTagName(&quot;input&quot;);
var list = [];
for (var i = 0; i &lt; checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    list.push(checkboxes[i]);
  }
}</pre>

<p>Using these new APIs, the operation can be reduced to <em>a single line of code!</em></p>

<pre>var list = document.querySelectorAll(&quot;#fruits input:checked&quot;);</pre>

<p>This returns a node list containing all the <code>input</code> elements that were checked by the user. Your script can then perform any operation you like with them.</p>

<p>We have been working on an implementation of these APIs recently and support has been included within the recently released <a href="http://labs.opera.com/news/2008/03/28/" title="Public Acid3 build">Acid 3 build</a>.</p>

<p>There are two new methods introduced: <code>querySelector()</code> and <code>querySelectorAll()</code>. The former returns the first matching element within the tree, and the latter returns a collection of all matching elements as a <code>NodeList</code>. The <a href="http://dev.w3.org/2006/webapi/selectors-api/" title="Selectors API">current editor’s draft</a> specification defines that the methods are available on the <code>Document</code>, <code>Element</code> and <code>DocumentFragment</code> nodes. However, our implementation currently only supports it on the <code>Document</code> and <code>Elements</code> nodes.</p>

<p>The <code>querySelector()</code> method is useful for situations where only the first matching element is needed, and is designed to be more efficient than the alternative <code>querySelectorAll()</code> method in such cases.</p>

<p>For example, the following form control and javascript function could be used to validate an email address. For simplicity, this uses the validity APIs from <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2.0</a>. If support for legacy user agents is required, a more appropriate validity check could be written. The <code>querySelector()</code> method is used to obtain the correct element for outputting the appropriate error message, or clearing it when it is valid.</p>

<p>The JavaScript:</p>

<pre>function validateEmail(evt) {
  var ctrl = event.target;
  var parent = ctrl.parentNode;
  var errMsg = parent.querySelector(&quot;.error&quot;);

  // Validate form control value
  if (!ctrl.validity.valid) {
    errMsg.innerHTML = &quot;Invalid email address.&quot;
  } else {
    errMsg.innerHTML = &quot;&quot;;
  }
}</pre>

<p>The HTML fragment:</p>

<pre>&lt;p&gt;&lt;input type=&quot;email&quot; name=&quot;email&quot; onchange=&quot;validateEmail();&quot;&gt;
   &lt;strong class=&quot;error&quot;&gt;&lt;/strong&gt;&lt;/p&gt;</pre>

<p>Our implementation also partially supports the namespace resolver features, allowing you to work with mixed namespace documents and select elements based on their namespace. Consult the specification for more information on the <code>NSResolver</code> object.</p>

<p>You can try out these examples for yourself in the recently released <a href="http://labs.opera.com/news/2008/03/28/">Acid 3 Gogi Build</a> which is available for <a href="http://snapshot.opera.com/windows/opera_wingogi_acid3.zip" title="Acid 3 Build for Windows">Windows</a> and <a href="http://snapshot.opera.com/unix/opera_lingogi_acid3.tar.gz" title="Acid 3 Build for Linux">Linux</a>.</p>
