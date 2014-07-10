---
title: CSS Generated Content Techniques
authors:
- divya-manian
intro: 'With generated content, developers can easily add decorative text and images to their pages directly via CSS. In this article we look at the basics of CSS generated content and give a few interesting examples of where it can be used.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>The <code>content</code> property was introduced in CSS 2.1 to add generated content to the <code>:before</code> and <code>:after</code> pseudo-elements. This is now supported on all major browsers — Firefox 1.5+, Safari 3.5+, IE 8+, Opera 9.2+, Chrome 0.2+). In addition, Opera 9.5+ supports the content property on <strong>all elements</strong>, not just the <code>:before</code> and <code>:after</code> pseudo-elements.</p>

<p>In the <a href="http://www.w3.org/TR/css3-content/"><cite>CSS 3 Generated Content Working draft</cite></a>, the <code>content</code> property has had a lot more features added – for example, the ability to insert and move content around a document to create footnotes, endnotes, and section notes. But no browser has implemented the expanded functions of <code>content</code> yet.</p>

<p>In this article, we will look at the basics of using generated content, and then break out into specific techniques you can employ it in.</p>

<h2>A few caveats</h2>
<p>Before we dive into the subject, it's worth pointing out that generated content</p>
<ul>
<li>will only work in modern browsers with CSS enabled</li>
<li>is not available via the DOM. It is meant to be purely presentational. In particular, from an accessibility point of view, current screen readers don't support generated content.</li>
</ul>

<h2>Generated content — the basics</h2>

<p><code>content</code> is used like this:</p>

<pre><code>h2:before {
	content: "some text";
}</code></pre>

<p>This will insert "some text" just <em>before</em> the start of every <code>h2</code> element on the page.</p>

<p>Instead of typing in the text value for the content property, you can also use values of attributes using <code>attr()</code>, like this:</p>

<pre><code>a:after {
	content: attr(href)
}</code></pre>

<p>This will insert the contents of each <code>a</code> element's <code>href</code> after the end of the elements.</p>

<p class="note">Note that you need to use the attribute name without quotes when referring to it in <code>attr()</code>.</p>

<p>You can also generate dynamic numbers using <code>counter</code> or insert images using <code>url(/path/to/file)</code>. Let's go through some applied examples.</p>

<h2>Numbering content with counters</h2>
<p>If you want to insert an incremental value such as <q>Question 1</q>, <q>Question 2</q>, <q>Question 3</q> on a repeated sequence of elements, you can use counters to increment the counter value and then display the count appropriately using <code>content</code>:</p>

<pre>ol {
	list-style-type:none;
	counter-reset: sectioncounter;
}

li:before {
	content: "Chapter" counter(sectioncounter);
	counter-increment: sectioncounter;
}</pre>

<p>In the first rule, the counter is reset to 1 using the <code>counter-reset</code> property. In the second rule each <code>li</code> element has a string printed out before it of <code>Chapter <var>X</var></code>, where <var>X</var> is the current value of the <code>sectioncounter</code> counter. The last property in the second rule — <code>counter-increment</code> — increases the value of the <code>sectioncounter</code> counter by 1 before moving on to the next <code>li</code> element in the list.</p>

<p class="note">If you are inserting counters with content, be mindful that they will not be incremented if that element has the <code>display:none</code> specified on it.</p>

<p class="note">Of course, in browsers that don't support this CSS feature, no numbering will appear. This would then make it confusing if, somewhere in your page, you refer back to sections with <q>See Chapter X for more details</q>. This is the fine line between generated content being purely decorative or actual part of the content, which should be written in the actual HTML.</p>

<p>I have written a demo to illustrate the <a href="cssgendemo.html#counters">creation of counters with generated content</a>. For more detail on the subject, read David Storey's excellent article on <a href="http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/"><cite>Automatic numbering with CSS Counters</cite></a>.</p>

<h2>Inserting correct quotes for multi-language content</h2>

<p>Different languages use different characters for quotation marks. A quote in English would be written as:</p>

<p>“It’s only work if somebody makes you do it”</p>

<p>A quote in Norwegian is written in this manner:</p>

<p>«Hvis du forteller meg nok en vits, så skal jeg slå deg til jorden.»</p>

<p>Instead of using simple text with hardcoded quote marks in your HTML, you can use the <code>q</code> element</p>

<pre><code>&lt;p lang="en"&gt;&lt;q&gt;It’s only work if somebody makes you do it&lt;/q&gt;&lt;/p&gt;
&lt;p lang="no"&gt;&lt;q&gt;Hvis du forteller meg nok en vits, så skal jeg slå deg til jorden.&lt;/q&gt;&lt;/p&gt;</code></pre>

<p>and specify the quote marks appropriate for each language in your your CSS</p>

<pre><code>/* Specify quotes for two languages */
:lang(en) &gt; q { quotes: '“' '”' }
:lang(no) &gt; q { quotes: "«" "»"}

/* Insert quotes before and after &lt;q&gt; element content */
q:before { content: open-quote }
q:after  { content: close-quote }</code></pre>

<p>You can use this technique on any element, not just <code>q</code> (though this is the most obvious and semantic use). Be aware that Safari 3 (and below) and IE 7 (and below), do not support <code>quotes</code> property.</p>

<p>View my <a href="cssgendemo.html#quotes">Quote-inserting demo</a> to see this in action.</p>

<h2>Replacing text with images</h2>

<p>There are <a href="http://www.mezzoblue.com/tests/revised-image-replacement/">several image replacement techniques</a> that you could use, each with their own merits and flaws. Here is another way to replace text with images, using <code>content</code>.</p>

<pre>div.logo {
	content:url(logo.png);
}</pre>

<p>The advantage of using this technique for image replacement is that it truly <em>replaces</em> the text. You therefore do not have to resort to using <code>height</code> and <code>width</code> to create space for the image, and <code>text-indent</code> or <code>padding</code> to hide the original text.</p>

<p>However, there are some drawbacks:</p>
<ul>
<li>you cannot repeat the image, or use an image sprite</li>
<li>it will work only on Opera 9.5+, Safari 4+, Chrome which support the <code>content</code> property with url as value on all selectors, not just <code>:before</code> or <code>:after</code></li>
<li>there is no way to include alternative text using this method, so screen readers in particular won't be able to make sense of your content-replaced images.</li>
</ul>

<p>To learn more, check out my demo of <a href="cssgendemo.html#imagereplacement">Image replacement using content</a>.</p>

<h2>Displaying link icons</h2>

<p>You can use attribute selectors with the content property to render icons after a link based on what file format it is or if it is an external one.</p>

<pre><code>a[href $='.pdf']:after {
	content:url(icon-pdf.png);
}

a[rel="external"]:after {  /* You can also use a[href ^="http"]:after */
	content:url(icon-external.png);
}</code></pre>

<p>the first rule uses a CSS3 selector with substring matching — <code>href $='.pdf'</code> means <q><code>href</code> attributes with <code>.pdf</code> at <strong>the end</strong> of the value.</q></p>

<p class="note">As with regular expressions, <code>^</code> and <code>$</code> refer to the start and end of a string, respectively. With CSS 3 <a href="http://www.w3.org/TR/css3-selectors/#attribute-substrings">substring matching attribute selectors</a>, <code>[attribute^=value]</code> and <code>[attribute$=value]</code> allow you to match elements whose attribute content starts or ends with the specified value, while <code>[attribute*=value]</code> selects elements where the value is found <em>anywhere</em> in the attribute.</p>

<p>Here is <a href="cssgendemo.html#icons">a demo displaying PDF and external icons on links</a>.</p>

<h2>Using attribute values as content</h2>

<p>We already mentioned that <code>content: attr(val)</code> allows you to display the value of an element's attribute on the screen. This can be used in a number of useful ways — here are a couple of examples.</p>

<h3>Printing URLs/abbreviations in print CSS</h3>
<p>As mentioned in the article <a href="http://www.alistapart.com/articles/goingtoprint/"><cite>Going to Print</cite></a> on <cite>A List Apart</cite>, you can use generated content to spice up your pages once they're printed out. For instance, the following in your print CSS to print the URL of a link just after it:</p>

<pre><code>a:after {
	content: "(" attr(href) ")";
}</code></pre>

<p>You can use the same method to print the expansion of your <code>abbr</code> elements. Simply add the following to your print stylesheet:</p>

<pre>abbr:after {
	content: "(" attr(title) ")";
}</pre>

<p>View my <a href="cssgendemo.html#printcss">demo of printing URLs and abbreviation expansions</a> to learn more.</p>
<h3>Looking ahead: powerful <code>attr()</code> in CSS3</h3>
<p>The <a href="http://www.w3.org/TR/css3-values/#attribute"><cite>CSS3 Values and Units</cite></a> draft expands the scope of the <code>attr()</code> expression — in addition to returning strings, it can also return values such as the unit type of CSS colors, CSS integer, length, angle, time, frequency, and other units.</p>

<p>Along with custom data attributes, this could be really powerful for rendering simple charts, graphics and animation. For example, we could set the background color of an element based on its attribute value. This might be useful in applications that display color palettes on the web. We could also specify the size of an element based on the value set in a custom data attribute – for instance, the length of a bar in a bar chart could be set by an attribute of the element representing the bar. Unfortunately this feature is low priority and is not close to being finalised anytime soon.</p>

<h2>Conclusion</h2>
<p>Hopefully this article has given you a better understanding of the <code>content</code> property, and what you can use it for. Given that IE 8 also now supports <code>content</code>, we really are getting to the point where can use this CSS feature in our production work. Just be sure to use it only in appropriate circumstances, and be mindful of the accessibility implications that generated content still has.</p>
