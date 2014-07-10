---
title: CSS 3 Image Replacement
authors:
- bruce-lawson
tags:
- image
- css
- replacement
- design
- accessibility
- odin
license: cc-by-3.0
---

<p>Since before the dawn of time, designers have wanted sexy fonts or images for headings, links and buttons on web pages. The adoption of <a href="http://www.alistapart.com/articles/cssatten"><code>@font-face</code></a> for CSS to use any font a designer specifies will take away some of the use cases. The time-honoured method of using <code>img</code> in the source code, and using the <code>alt</code> attribute to as a text alternative still works, of course, and very nice it is too, but some designers prefer to use CSS to replace text with an image.</p>

<p>There is a variety of <a href="http://www.mezzoblue.com/tests/revised-image-replacement/">image replacement techniques</a>, but they all add a background image and then hide the text, usually by moving off the screen. They all suffer from restrictions: they can only be used with opaque images, or against flat colour, or they need extra <code>span</code>s for style hooks. There&#39;s also the problem of people who surf with images off, which is quite common for those using phones whose web use is metered. They don&#39;t see the image, but don&#39;t see the text either.</p>
<h3>Using the <code>content</code> property</h3>
<p>The <a href="http://www.w3.org/TR/css3-content/#inserting3"><abbr>CSS</abbr> 3 <code>content</code> property</a> is experimentally supported by Opera and Safari. Firefox supports the <abbr>CSS</abbr> 2.1 spec when used with the <code>:before</code> and <code>:after</code> pseudo-elements and there is <a href="http://www.css3.info/css3-features-in-ie8/">rudimentary support (so far) by IE 8 beta</a>.</p>

<p>It allows you to &quot;insert&quot; text or an image into an element, over-writing the <abbr>HTML</abbr> content of the element.</p>

<p>So, for example, this code snippet will replace my name in the <code>h1</code> with my blog logo:</p>

<pre><code>h1 {content: url(bruce-logo.jpg);}
&lt;h1&gt;Bruce Lawson’s gorgeous blog&lt;/h1&gt;</code></pre>


<p>You can see it in action on this <a href="{{ page.id }}/css3-image-replacement.htm">image replacement test page</a>.</p>

<p>It&#39;s interesting to note how the <a href="{{ page.id }}/css3-image-replacement-styling.htm">browsers  style this differently</a>. To centre the logo, you need to style the <code>h1</code> with <code>text-align:center</code>, as if Opera centres the real text and then replaces it with the image. Safari will only centre the logo with margins, as if it replaces the text with an virtual <code>img</code> tag, which is then impervious to <code>text-align</code>.</p>

<h3>What should browsers do if the image can&#39;t be shown?</h3>
<p>I think, in any circumstance that a browser can&#39;t show an image, it should show the  content of the element in the natural position for that text. That would ensure that this <abbr>CSS</abbr> 3 image replacement technique degrades well when CSS and images are off.</p>

<p>This behaviour would be similar to  <code>iframe</code>: &quot;The information to be inserted inline is designated by the src attribute of this element. The contents of the <code>iframe</code> element, on the other hand, should only be displayed by user agents that do not support frames or are configured not to display frames.&quot; In a similar way, <abbr>html</abbr> has a fallback mechanism for images and objects: when it can&#39;t show the image, it shows the alternate text.</p>

<p>Here&#39;s where the support for this image replacement mechanism gets experimental, even in the highly standards-compliant browsers. This is because the specification changed between <abbr>CSS</abbr> 2.1 and <abbr>CSS</abbr> 3.</p>
<p><abbr>CSS</abbr> 2.1 said</p>
<blockquote cite="http://www.w3.org/TR/CSS21/generate.html#content"><p>If the user agent cannot display the resource it must either leave it out as if it were not specified or display some indication that the resource cannot be displayed. <a href="http://www.w3.org/TR/CSS21/generate.html#content"><cite><abbr>CSS</abbr>2 spec</cite></a></p></blockquote>
<p>So the current &quot;standard&quot; says that it should either show the contents of the element (the actual text between the tags), which makes sense to me, <em>or</em> some sort of &quot;image not found&quot; icon, which seems to me to be the worst of all worlds. If a screenreader or a search robot gets the plain text, why not a user who has images switched off?</p>
<p>The <abbr>CSS</abbr> 3 spec  allows you to set a series of fallbacks, much like when you set <code>font-family</code>. So here, the browser will try to replace the header with a movie, then an animated gif if it can&#39;t find or display the movie, or  a standard jpg if it can&#39;t find or display that gif, and if it can&#39;t render any of those, it will just show the  contents of the element:</p>
<code>h1 {content: url(header.ogv), url(header.gif), url (header.jpg), contents; }</code>

<p>The spec says</p>
<blockquote cite="http://www.w3.org/TR/css3-content/#inserting3">
    <p>If no alternatives exist, then &#39;none&#39; is used as a final fallback...Thus to make an element fallback on its contents, you have to explicitly give &#39;contents&#39; as a fallback. <a href="http://www.w3.org/TR/css3-content/#inserting3"><cite><abbr>CSS</abbr> 3 spec</cite></a></p>
</blockquote>
<p>To me, it&#39;s odd that anyone should want to display nothing instead of the content, let alone make it the default, but at least the new specification allows you to unambiguously tell the browser to display the contents of the element: it&#39;s not allowed to &quot;choose&quot; between the text and a &quot;image not found&quot; icon.</p>

<h3>What <em>do</em>  browsers do?</h3>
<p>However, browser support is still experimental as the <a href="http://www.w3.org/TR/css3-content/">generated and replaced content module</a> of <abbr>CSS</abbr> 3 is still susceptible to change. My <a href="{{ page.id }}/css3-image-replacement-nonexist.htm">no-images test page</a> shows that Opera and Safari still have problems following the <abbr>CSS</abbr> 3 spec fully.</p>
<h3>Conclusion</h3>
<p>Once the <abbr>CSS</abbr> 3 spec is finalised and the browser support is solid, a foolproof way of doing image replacement will be available to us that  is accessible to screenreaders and which degrades gracefully with CSS off and with images off.</p>
