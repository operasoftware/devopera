---
title: Ragnarök — Viking Browser With HTML5 Parser!
authors:
- stig-halvorsen
tags:
- opera-11
- html5
- core
- webstandards
- opera
- coreblog
license: cc-by-3.0
---

<p>Making its debut in a Labs build this week is <a href="http://en.wikipedia.org/wiki/Ragnar%f6k">Ragnar&#xF6;k</a>, our implementation of the HTML5 Parsing algorithm. We&#39;d love you to try to break this and give us feedback, so please grab a copy to install on your machine from one of the download links below.</p>

<ul>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Opera_1150_24581_en.exe">Opera 11 with new HTML 5 parser for Windows</a></li>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Opera_11.50_24581.dmg">Opera 11 with new HTML 5 parser for Mac</a></li>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Linux-FreeBSD/">Opera 11 with new HTML 5 parser for Linux/FreeBSD</a></li>
	</ul>

<h2>The coolest HTML5 demo you&#39;ll see this week</h2>

<p>The Web is littered with <code>&lt;canvas&gt;</code> games, HTML5 video players, drag-and-drop whizz-bangs and other demos of HTML5 and &quot;HTML5&quot;. But here&#39;s a really cool demo, probably the coolest you&#39;ll see this week. Are you ready? Here goes:</p>

<pre><code style="font-size:x-large">&lt;b&gt;&lt;i&gt;Yo!&lt;/b&gt;&lt;/i&gt;
</code></pre>

<p>I can tell you&#39;re impressed, so let&#39;s dig deeper to see exactly why it is so cool. The elements are incorrectly nested: the innermost element - in this case, the <code>&lt;i&gt;</code> - should be the first one closed. What does this do to the DOM in different browsers?</p>

<p>We can check this out using Opera Dragonfly and its equivalents, or <a href="http://software.hixie.ch/utilities/js/live-dom-viewer/?%3C!DOCTYPE%20html%3E%0D%0A%3Cb%3E%3Ci%3EYo!%3C%2Fb%3E%3C%2Fi%3E">Ian Hickson&#39;s DOM viewer</a>. Internet Explorer 9 and Safari 5 result in this innerHTML:</p>

<pre><code>&lt;!DOCTYPE HTML&gt;
&lt;html&gt;&lt;HEAD&gt;&lt;/HEAD&gt;&lt;BODY&gt;
&lt;B&gt;&lt;I&gt;Yo!&lt;/I&gt;&lt;/B&gt;&lt;I&gt;&lt;/I&gt;
&lt;/BODY&gt;&lt;/html&gt;</code></pre>

<p>while Opera, Firefox and Chrome produce this:</p>

<pre><code>&lt;!DOCTYPE HTML&gt;<br />
&lt;html&gt;&lt;HEAD&gt;&lt;/HEAD&gt;&lt;BODY&gt;
&lt;B&gt;&lt;I&gt;Yo!&lt;/I&gt;&lt;/B&gt;
&lt;/BODY&gt;&lt;/html&gt;
</code></pre>

<p>All the browsers have sorted out the mis-nesting, but inconsistently: note that IE and Safari have an additional empty <code>&lt;i&gt;</code> element that Opera, Firefox and Chrome don&#39;t have. Which is correct? In an HTML4 world, both are. The HTML4 spec describes what to do with good markup, but not what to do with bad markup - and we know that <a href="http://dev.opera.com/articles/view/mama-markup-validation-report/">95% of the Web doesn&#39;t validate</a>. Therefore, browsers have traditionally been left to their own devices and forced to guess what to do with bad markup, as error-handling was never defined for HTML4.</p>

<p>Our simple markup above already produces very different DOMs, so imagine what would result from more real world examples of tag soup with dozens or hundreds of elements. Writing JavaScript that has to operate across browsers with such inconsistencies is a major cause of hair loss and weeping amongst web developers.</p>

<p>Luckily, there is now a solution to this.</p>

<h2>The HTML5 parsing algorithm</h2>

<p>The HTML5 specification defines a <a href="http://dev.w3.org/html5/spec/parsing.html#parsing">set of parsing rules</a> for all markup, whether valid or invalid. Once all browsers have HTML5 parsers, the same markup will produce the same DOM across all conforming browsers. There are two main effects of this:</p>

<ul>
  <li>JavaScripters will sport cheerful grins and bouffant hair</li>
  <li>Consumers can expect fewer interoperability problems when using their favourite site between browsers</li>
</ul>

<h2>So validation is a thing of the past, right?</h2>

<p>Absolutely not. It&#39;s still a vital QA tool, and just because the HTML5 parser will produce an interoperable DOM, it doesn&#39;t mean it&#39;s the DOM you actually want!</p>

<h2>Opera&#39;s implementation</h2>

<p>Our old HTML parser has basically been the same since Opera began 15 years ago. It&#39;s been continually patched to keep up with changing standards and countless different ways people came up with to not follow the specifications. After all the changes here and there, the code really started to look like a over-decorated christmas tree, and adding more stuff without knocking over the tree was getting increasingly hard.</p>

<p>With the decision to rewrite the entire parser came the opportunity to clean up the design significantly.</p>

<p>We can now proudly say that the new Ragnar&#xF6;k parser has a 99.9% pass-rate on an extensive test suite based on the html5lib tests for the parser part of the HTML 5 specification. The missing last 0.1% is going to be fixed before Ragnar&#xF6;k&#39;s golden release. The test suite will also be publicly released once completed so that you can verify it yourself and compare Opera to the other browsers out there.</p>

<p>Ragnar&#xF6;k also scores 11 out of 11 (plus two bonus points) on the somewhat non-comprehensive (and therefore rather misleading) <a href="http://html5test.com/">html5test.com</a>. (The two bonus points are for parsing <a href="http://people.opera.com/brucel/articles/html5-mathml-svg.html">embedded SVG and MathML in HTML5</a>.)</p>


<h3>Memory consumption</h3>

	<p>The main reason we kept our old parser for so long was its efficient memory usage when handling bad markup. Instead of duplicating nodes like the HTML5 specification states, our parser had a intricate system of pointers that indicated which nodes should have been duplicated. This saved it from allocating memory to actually duplicating the element data, but also made the code that traversed the data structure more complex. Now we have switched to copying the nodes, it uses slightly more memory. Before the final release we will minimize that side effect &#x2014; Opera has always been about memory efficiency, and working on smaller devices too.</p>

<h3>Performance</h3>

	<p>It&#39;s not obvious now, because this technical preview isn&#39;t optimized for speed like the golden releases will be, but another advantage of the rewrite has been an  increase in parser performance. Since the time taken parsing the markup of a page is relatively small compared to loading and rendering, this will not affect benchmarks dramatically, but all performance improvements are for the better, right?</p>

<h2>Get it while it&#39;s hot!</h2>

<p>We have made some builds contain the new parser so that you can test it out, right now, and earn the right to brag to your friends that &quot;Hah, I&#39;ve been running that for quite some time now&quot; when the final product is out in the stores in a short while.</p>

	<ul>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Opera_1150_24581_en.exe">Opera 11 with new HTML 5 parser for Windows</a></li>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Opera_11.50_24581.dmg">Opera 11 with new HTML 5 parser for Mac</a></li>
	  <li><a href="http://snapshot.opera.com/labs/ragnarok/Linux-FreeBSD/">Opera 11 with new HTML 5 parser for Linux/FreeBSD</a></li>
	</ul>

	<p><b>Disclaimer</b>: The builds are only meant as a technical preview of the new parser, and have not gone through the usual thorough testing our golden releases get, so they might be more unstable. The email client is <strong>not</strong> working properly so do not use it. Delayed Script Execution is also unstable at the moment. The builds are not optimized for speed so don&#39;t expect any useful results from performance benchmarks yet. Better stats will be available when the final version is out.</p>
