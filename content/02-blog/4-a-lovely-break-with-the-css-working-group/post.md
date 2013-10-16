Title: A lovely <br>eak with the CSS Working Group
----
Date: 2008-08-21 15:52:16
----
Author: 
----
Text:

<p>Yesterday, Microsoft gave me a free lunch. They did it because I went to Cambridge to observe the <abbr>CSS</abbr> working group&#39;s face-to-face meeting. I was geekily excited to hear them discuss the topic &quot;what is a br element&quot;, and to meet <a href="http://fantasai.inkedblade.net/">fantasai</a>, with whom I&#39;d worked to gather <a href="http://www.webstandards.org/2008/01/18/tell-the-css-wg-what-you-want-from-css3/">web designers&#39; wishes for CSS 3</a> (and who promises faithfully that the feedback  on those wishes is imminent). </p>
<p>The &quot;what is a break&quot; debate didn&#39;t disappoint. Is it, as Håkon suggested, <code>{content:&#39;\A&#39;; white-space:pre;}</code>? But what about the fact that a single break has no height, but two (or multiple) breaks do? So should we add the rule <code>br+br {content:&#39;\A&#39;; white-space:pre; height:1 em;}</code>?</p>
<p>Someone else pointed out that the break element was more than just a presentational effect, and it has semantics - for example, when used to <a href="http://www.brucelawson.co.uk/2005/what-i-want-from-css-3/">mark up poetry</a> or code. So is it best described by defining a new value <code>display:break;</code>?</p>
<p>This idea was parked; whereas in CSS 3, a new value for the display property is theoretically possible (but hugely complex), but it can&#39;t be done for CSS 2.1. As you might know, the <a href="http://www.w3.org/TR/CSS21/">CSS 2.1 spec</a> is</p>
<blockquote cite="http://www.w3.org/TR/CSS21/">
    <p>a &quot;snapshot&quot; of CSS usage: it consists of all CSS features that are implemented interoperably at the date of publication of the Recommendation.</p>
</blockquote>
<p>Amongst other things, the CSS 2.1 specification doesn&#39;t allow an author or implementer to learn how an <abbr>HTML</abbr> <code>br</code> should be styled. For example, Microsoft and Mozilla both allow <code>page-break-*</code> to be set on the break element, and all the big four allow <code>br style=&quot;clear:left;&quot;</code> to be specified. The problem is that the CSS 2 spec only allows these properties to be set on block level elements, and <code>br</code> is an inline element. (Or is it? There was some debate about whether it was its own kind of element).</p>
<p>It would be wrong to blame the browsers for all allowing <code>clear</code> to be set; the <code>br</code> element has been in the language since <a href="http://www.w3.org/MarkUp/html-spec/L1index.html#BR">dinosaurs roamed the earth</a>, and CSS 1 allowed <code>clear</code> on all elements, not just the block-levels:</p>
<blockquote cite="http://www.w3.org/TR/CSS21/visuren.html#propdef-clear">
    <p>Note. This property applied to all elements in CSS1. Implementations may therefore have supported this property on all elements. In CSS2 and CSS 2.1 the &#39;clear&#39; property only applies to block-level elements. Therefore authors should only use this property on block-level elements. If an implementation does support clear on inline elements, rather than setting a clearance as explained above, the implementation should force a break and effectively insert one or more empty line boxes (or shifting the new line box downward as described in section 9.5) to move the top of the cleared inline&#39;s line box to below the respective floating box(es). </p>
    <cite><a href="http://www.w3.org/TR/CSS21/visuren.html#propdef-clear">CSS 2.1 definition of <code>clear</code></a></cite></blockquote>
<p>There was no question whether the exceptional behaviour of <code>br</code> should be specified, only that of how. Anne wanted to make it a special case, by saying <code>html:br</code> may have <code>page-break-*</code> applied, but others objected because CSS is not just for styling <abbr>HTML</abbr>:</p>
<blockquote cite="http://www.w3.org/Style/2004/css-charter-long">
    <p>CSS is the Web&#39;s primary style sheet language for specifying the rendering of text documents, in particular those expressed in HTML and XML-based formats. It can also be used to specify portions of the rendering of certain non-text formats, such as SMIL (multimedia) and SVG (vector graphics).</p>
    <cite><a href="http://www.w3.org/Style/2004/css-charter-long">CSS Working Group charter</a></cite></blockquote>
<p>Eventually, consensus was reached,  expressing it in a way that nobody liked but everyone can live with:  page-break applies to block-level elements and may 
    also be applied to &quot;other elements&quot;. Whether this means that I could develop my brand new Bruce-browser by reading the amended CSS 2.1 spec and interoperably implement <code>br</code> is doubtful (so I&#39;ll abandon that plan and carry on with Opera, after all!). </p>
<p>The <a href="http://krijnhoetmer.nl/irc-logs/css/20080820">whole conversation is minuted</a> on the <abbr>IRC</abbr> logs. One thing that that impressed me, and which doesn&#39;t come over in the minutes, is how much the participants  care about users, web authors and designers. On issues where there  are several solutions and none is technically  superior, the group asked Molly and Jason Cranford Teague (the designers in attendance that day) to <a href="http://krijnhoetmer.nl/irc-logs/css/20080820#l-276">make the call</a>.</p>
<p>My thanks to all of them for agreeing to my request to observe. Fantasai is even groovier in real life than online. There are even <a href="http://www.flickr.com/photos/57639831@N00/tags/csswg/">photos</a> to prove they&#39;re all real people!</p>

