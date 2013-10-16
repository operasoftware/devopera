Title: Introducing Ragnarök - Opera's HTML5 parser
----
Date: 2011-02-18 16:38:34
----
Author: 
----
Text:

<p>Making its debut in a Labs build is <a href="http://en.wikipedia.org/wiki/Ragnarök">Ragnarök</a>, our implementation of the HTML5 Parsing algorithm that we&#39;d like you to try to break, please.
<h3>The coolest HTML5 demo you&#39;ll see this week</h3>
<p>The Web is littered with<code> &lt;canvas&gt;</code> games, plug-in free video, drag-and-drop whizzbangs and other demos of HTML5 and &quot;HTML5&quot;. But here&#39;s a really cool demo. Are you ready? Here goes:</p>
<pre><code>&lt;b&gt;&lt;i&gt;Yo!&lt;/b&gt;&lt;/i&gt;
</code></pre>
<p>I can tell you&#39;re impressed. So let&#39;s look at it. Note that the elementa are incorrectly nested; the innermost element - in this case, the <code>&lt;i&gt;</code> - should be the first closed. What does this do to the DOM in browsers?</p>
<p>We can check this out using Opera Dragonfly and its equivalents, or use <a href="http://software.hixie.ch/utilities/js/live-dom-viewer/?%3C!DOCTYPE%20html%3E%0D%0A%3Cb%3E%3Ci%3EYo!%3C%2Fb%3E%3C%2Fi%3E">Ian Hickson&#39;s DOM viewer</a>, and we see that Internet Explorer 9 and Safari 5 results in this innerHTML:
<pre><code>&lt;!DOCTYPE HTML&gt;<br />&lt;html&gt;&lt;HEAD&gt;&lt;/HEAD&gt;&lt;BODY&gt;<br />&lt;B&gt;&lt;I&gt;Yo!&lt;/I&gt;&lt;/B&gt;&lt;I&gt;&lt;/I&gt;<br />&lt;/BODY&gt;&lt;/html&gt;
</code></pre>
<p>while Opera, Firefox and Chrome produce </p>
<pre><code>&lt;!DOCTYPE HTML&gt;<br />&lt;html&gt;&lt;HEAD&gt;&lt;/HEAD&gt;&lt;BODY&gt;<br />&lt;B&gt;&lt;I&gt;Yo!&lt;/I&gt;&lt;/B&gt;<br />&lt;/BODY&gt;&lt;/html&gt;
</code></pre>
<p>All the browsers have sorted out the mis-nesting, but notice that IE and Safari have an extra empty <code>&lt;i&gt;</code> element that Opera, Firefox and Chrome don&#39;t have. Which is correct? In an HTML4 world, both are. The HTML4 spec describes what to do with good markup, but not what to do with bad markup - and we know that <a href="http://dev.opera.com/articles/view/mama-markup-validation-report/">95% of the Web doesn&#39;t validate</a>.
<p>Our simple markup above already produces very different DOMs. Imagine more realistic examples of tag soup with dozend or hundreds of elements; writing JavaScript that has to operate across browsers with such inconsistencies is a major cause of hairloss and weeping amongst JavaScripters.
<p>Luckily, there is now a solution.
<h3>The HTML5 parsing algorithm</h3>
<p>The HTML5 specification defines a <a href="http://dev.w3.org/html5/spec/parsing.html#parsing">set of parsing rules</a> for all markup, whether valid or invalid. Once all browsers have HTML5 parsers, the same markup will produce the same DOM across all conforming browsers. There are two main effects of this:</p>
<ul>
  <li>JavaScripters will sport cheerful grins and bouffant hair</li>
  <li>Consumers can expect fewer interoperability problems when using their favourite site between browsers</li>
</ul>
<h3>So validation is a thing of the past, right?</h3>
<p>Absolutely not. It&#39;s still a vital QA tool, and just because the HTML5 parser will produce an interoperable DOM, it doesn&#39;t mean it&#39;s the DOM you actually want!</p>

<h3>Anything else?</h3>
<p>Once the browser has an HTML5 parser, you can use <a href="http://people.opera.com/brucel/articles/html5-mathml-svg.html">SVG and MathML in HTML5</a>. Yay, and w00t!</p></p></p></p></p></p>
