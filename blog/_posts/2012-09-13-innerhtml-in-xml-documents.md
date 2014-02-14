---
title: Changes to the behavior of innerHTML in XML documents
authors:
- patrick-lauke
tags:
- xml
layout: article
---
<p>In the run-up to the next stable desktop release, you&#39;ll notice that a lot of changes are being made to our browser&#39;s core engine. Although here on the Developer Relations blog we usually just cherry-pick and explain some of the shinier new additions that fall under the big &quot;HTML5&quot; umbrella, there are also quite often tiny improvements under the hood that remove bugs and browser incompatibilities that don&#39;t get much notice...until sites that somehow relied on our previous behaviour start to misbehave.</p>

<p>A recent example of this is the rather innocently titled <q>CORE-4336: Setting innerHTML in XML</q> which was recently shipped in one of our <a href="http://my.opera.com/desktopteam/blog/2012/08/03/summer-core-update">Opera Next snapshots</a>.</p>

<p>Being a hip and happening developer, you may be thinking &quot;XML? HTML5 is where it&#39;s at!&quot;...so it may come as a shock to you that in the vast reaches of the web, there are still a sizeable number of sites that use XML/XHTML.</p>

<p>While the release of Opera 12.10 is still a bit away, one of Opera&#39;s products that already does include many of these core changes, including CORE-4336, is the newly released <a href="http://www.opera.com/business/tv/">Opera Device SDK 3.4</a>, which is used by many TV and set-top box device manufacturers to provide web browsing functionality. And it&#39;s on this platform that some of our customers have started to report issues with the latest SDK relating to this particular core change.</p>

<p>In previous versions of Opera&#39;s core, <code>innerHTML</code> was quite forgiving when injecting markup into XML/XHTML documents. As with regular HTML pages, when trying to add malformed content, Opera silently error-corrected the injected fragment according to its HTML parsing algorithm.</p>

<p>To see this in action, here&#39;s a <a href="http://dev.opera.com/static/blog/2012/innerhtml-in-xml-documents/innerhtml-in-xml.xml" title="Test case for injecting malformed content via innerHTML in an XHTML document">simple test case</a> using <code>innerHTML</code> to inject the classic <code>&lt;b&gt;&lt;i&gt;...&lt;/b&gt;&lt;/i&gt;</code> set of misnested tags into an XHTML document. If you take a peek at the DOM after the page was loaded you&#39;ll see how the misnested tags have been silently fixed in the current stable version of Opera, while the same test case will fail in other browsers such as Chrome and Firefox.</p>

<img src="http://dev.opera.com/static/blog/2012/innerhtml-in-xml-documents/innerHTML-xhtml-result.png" alt="Opera Dragonfly showing how the misnested markup has been silently fixed in the DOM" />

<p>Following the fix to CORE-4336, Opera&#39;s core is now aligned with the stricter behavior of other browsers, which has been formally specified in <a href="http://www.whatwg.org">WHATWG</a>&#39;s <a href="http://html5.org/specs/dom-parsing.html#innerhtml">DOM Parsing and Serialization</a>:</p>

<blockquote>In the case of an XML document, [<code>innerHTML</code>] will throw an <code>INVALID_STATE_ERR</code> if the Element cannot be serialized to XML, and a <code>SYNTAX_ERR</code> if the given string is not well-formed.</blockquote>

<p>In the long run, this fix will ensure greater cross-browser compatibility...but obviously, if your XHTML sites start to misbehave and throw errors as a result of this change, the best advice we can give is to ensure that injected markup fragments are sanitised to ensure that they&#39;re well-formed XHTML (no misnesting, correct use of quotes around attributes, etc). If this is not possible, a short term (though admittedly quite inelegant) fix would also be to change your site from XHTML to HTML.</p>
