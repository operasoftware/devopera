---
title: Implementing HTML5 <details>
authors:
- bruce-lawson
tags:
- accessibility
- html5
- internationalisation
- odin
layout: article
---
<p>At Opera HQ, we&#39;re implementing the HTML5 <code>&lt;details&gt;</code> element. It&#39;s a groovy interactive element that functions as &quot;a disclosure widget from which the user can obtain additional information or controls&quot;.</p><p>Most browsers will implement it as an expando box: when the user clicks on some browser-generated icon (such as a a triangle or down arrow) or the word &quot;details&quot; - which can be replaced by an author supplying their own rubric in a child <code>&lt;summary&gt;</code> element - the element will slide open revealing some further details inside. These could be a full description of an image or graph; a description of a complex table structure; advanced options for a search form; or just about anything else, and wouldn&#39;t need JavaScript to function.</p>

<p>It is vital that browsers implement HTML interoperably. So Opera&#39;s Lachlan Hunt has written to the WHATWG (the group speccing HTML5 with the W3C) to detail how Opera is implementing it, in the hope of getting feedback from developers, other browser vendors and (we hope) encouraging vendors to share information and implement similarly.</p>

<p>Our main aims in implementing <code>&lt;details&gt;</code> are:</p>

<ul>
<li>The disclosure triangle must be styleable by authors using CSS without complex hacks, either to
replace with their own icon, remove it entirely, or  adjust
other common styles. Ditto with <code>&lt;summary&gt;</code>: we cannot require, nor expect, authors to use XBL to restyle these elements.</li>
<li>Styles we use internally in the <a href="http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/">shadow tree</a> shouldn&#39;t do weird things to author styles or surrounding content. Generally, the way that authors style the element and users interact with it should be simple and not contain any nasty surprises.</li>
<li>Accessibility:  The summary element must be focussable by default and keyboard
activation must be possible.</li>
<li>Internationalisation: The disclosure triangle and any applicable margins and padding must
render on the opposite side and point the opposite direction for RTL
languages.</li>
<li>We should reuse as much existing CSS styles as possible to achieve the effects, avoiding unnecessary creation of special properties or values without a good reason.</li>
</ul>

<p>(I&#39;ve summarised and paraphrased Lachy&#39;s fuller explanation.)</p>
<p>So: if you&#39;re a web author or an implementor, <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-April/031132.html">please read the email</a> and <a href="http://www.whatwg.org/mailing-list#specs">respond on the WHATWG list</a> (anyone can join).</p>
<p>Hurray for open discussion that leads to an interoperable Web! (But please, <strong>do it on the mailing list</strong> and <strong>not here</strong>!)</p>
