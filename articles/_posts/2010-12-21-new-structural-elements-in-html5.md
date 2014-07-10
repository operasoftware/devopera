---
title: New Structural Elements in HTML5
authors:
- chris-mills
- bruce-lawson
intro: 'HTML5 brings two new things to the table: new APIs that add essential new features to the open standards web development model, and new structural elements that define specific web page features with much more accurate semantics than were available in HTML 4. This article looks at how the new semantic elements were chosen, what the main new features are and how they are used, how headings work in HTML5, and browser support for these new elements, including how you can support them in older browsers.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>


<p>HTML5 brings two new things to the table: new APIs that add essential new features to the open standards web development model, and new structural elements that define specific web page features with much more accurate semantics than were available in HTML 4. You can find articles covering many of the new APIs by looking for <a href="http://dev.opera.com/articles/tags/html5/">Dev.Opera articles marked with the HTML5 tag</a>.</p>

<p>This article, on the other hand, focuses on the latter — we will briefly look at how the new semantic elements were chosen, what the main new features are and how they are used, how headings work in HTML5, and browser support for these new elements, including how you can support them in older browsers.</p>

<p>The contents are as follows:</p>

<ul>
<li><a href="#structural">Introducing HTML5 structural elements</a>
<ul>
<li><a href="#how-decided">How were the element names decided upon?</a></li>
<li><a href="#why-no-content">Why isn't there a <code>&lt;content&gt;</code> element?</a></li>
</ul>
</li>
<li><a href="#example-html">Presenting an example HTML5 page</a>
<ul>
<li><a href="#meta-differences">Some meta-differences</a></li>
<li><a href="#header"><code>&lt;header&gt;</code></a></li>
<li><a href="#hgroup"><code>&lt;hgroup&gt;</code></a></li>
<li><a href="#html5-footer"><code>&lt;footer&gt;</code></a></li>
<li><a href="#nav"><code>&lt;nav&gt;</code></a></li>
<li><a href="#aside"><code>&lt;aside&gt;</code></a></li>
<li><a href="#figure"><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></a></li>
<li><a href="#time"><code>&lt;time&gt;</code></a></li>
<li><a href="#article-section"><code>&lt;article&gt;</code> and <code>&lt;section&gt;</code></a>
<ul>
<li><a href="#div">Where does that leave <code>&lt;div&gt;</code>?</a></li>
<li><a href="#mark"><code>&lt;mark&gt;</code></a></li>
<li><a href="#hidden">The <code>hidden</code> attribute</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#html-outline">HTML5 outlines, and the HTML5 heading algorithm</a></li>
<li><a href="#older-browsers">How to get it working in older browsers</a></li>
<li><a href="#summary">Summary</a></li>
</ul>

<h2 id="structural">Introducing HTML5 structural elements</h2>

<p>HTML4 already has a lot of semantic elements to allow you to clearly define the different features of a web page, like forms, lists, paragraphs, tables, etc. However, it does have its shortcomings. We still rely heavily on <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements with different <code>id</code> and <code>class</code> attributes to define various other features, such as navigation menus, headers, footers, main content, alert boxes, sidebars, etc. Something like <code>&lt;div id="header"&gt;</code> works in terms of developers and designers knowing what it is for, and being able to use CSS and JavaScript to apply custom styles and behaviour to make it understandable to end users.</p>

<p>But it could be so much better. There are still problems with this kind of set up:</p>

<ul>
<li>Humans can tell the different content apart, but machines can't — the browser doesn't see the different divs as header, footer, etc. It sees them as different divs. Wouldn't it be more useful if browsers and screen readers were able to explicitly identify say, the navigation menu so a visually impaired user could find it more easily, or the different news items on a bunch of blogs so they could be easily syndicated in an RSS feed without any extra programming?</li>
<li>Even if you do use extra code to solve some of these problems, you can still only do it reliably for your web sites, as different web developers will use different class and ID names, especially when you consider the international audience — different web developers in different countries will use different languages to write their class and id names.</li>
</ul>

<p>It therefore makes a lot of sense to define a consistent set of elements for everyone to use for these common structural blocks that appear on so many web sites. The new HTML5 elements we will cover in this article are:</p>

<ul>
<li><p><strong><code>&lt;header&gt;</code></strong>: Used to contain the header of a site.</p></li>
<li><p><strong><code>&lt;footer&gt;</code></strong>: Contains the footer of a site.</p></li>
<li><p><strong><code>&lt;nav&gt;</code></strong>: Contains the navigation functionality for the page.</p></li>
<li><p><strong><code>&lt;article&gt;</code></strong>: Contains a standalone piece of content that would make sense if syndicated as an RSS item, for example a news item.</p></li>
<li><p><strong><code>&lt;section&gt;</code></strong>: Used to either group different articles into different purposes or subjects, or to define the different sections of a single article.</p></li>
<li><p><strong><code>&lt;time&gt;</code></strong>: Used for for marking up times and dates.</p></li>
<li><p><strong><code>&lt;aside&gt;</code></strong>: Defines a block of content that is related to the main content around it, but not central to the flow of it.</p></li>
<li><p><strong><code>&lt;hgroup&gt;</code></strong>: Used to wrap more than one heading if you only want it to count as a single heading in the page's heading structure.</p></li>
<li><p><strong><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></strong>: Used to encapsulate a figure as a single item, and contain a caption for the figure, respectively.</p></li>
</ul>
	<!--
<p class="note">Note: The elements covered in this article are all supported in Opera 11 beta, except the <code>&lt;time&gt;</code> element, but this will follow soon.</p>
	 -->
		<h3 id="how-decided">How were the element names decided upon?</h3>

<p>During the creation of HTML5, editor Ian Hickson used Google's tools to mine data from over a billion web pages, surveying what ID and class names are most commonly used on the real world web. You can see one of the surveys published at <a href="http://code.google.com/webstats/2005-12/classes.html">Google Code: Web Authoring Statistics: Classes</a>. To cut a long story short, the element names seen in this article were taken from the 20 most popular IDs and class names found in Hickson's surveys.</p>


<p class="note">Note: Opera did a similar study, of 3.5 million URLs, calling it <abbr title="Metadata Analysis and Mining Application">MAMA</abbr>. MAMA had a smaller URL set, but looked at a larger and wider variety of web page statistics. For more information, take a look at <a href="http://dev.opera.com/articles/view/mama-common-attributes">MAMA common attributes</a>, <a href="/articles/view/mama-common-attributes/idlist-url.htm">MAMA's id list</a>, and <a href="/articles/view/mama-common-attributes/classlist-url.htm">MAMA's class list</a>. For more options, go to the <a href="http://dev.opera.com/articles/view/mama/">MAMA home page</a>.</p>

		<h3 id="why-no-content">Why isn't there a <code>&lt;content&gt;</code> element?</h3>

<p>While this may seem like a glaring omission, it really isn't. The main content will be the top level block of content that isn't the <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> or <code>&lt;footer&gt;</code>, and depending on your particular circumstance, it might make more sense to mark the content up using an <code>&lt;article&gt;</code>, a <code>&lt;section&gt;</code>, or even a <code>&lt;div&gt;</code>. Bruce Lawson calls this <q>The Scooby Doo algorithm</q>, but to find out why, you'll have to ask him on Twitter, or at a conference!</p>

<h2 id="example-html">Presenting an example HTML5 page</h2>

<p>So now we've gone through a bit of background, and seen what the new elements on offer are, let's go through an example, and see exactly how to use them in the context of a real page. Go and have a look at my <a href="pwei_sample_html5.html">A history of Pop Will Eat Itself</a> page — a history and discography of one of my favourite English bands from the 80s/90s (if you like alternative music, please, go check 'em out.) I took the original markup from the <a href="http://en.wikipedia.org/wiki/Pop_Will_Eat_Itself">Pop will Eat Itself</a> Wikipedia page, cleaned it up, and turned it into HTML5. Let's look more closely at what I did.</p>

<p>Keep the sample page open in a separate tab as you read through the article &mdash; you'll want to refer back to it.</p>

<p class="note">My example uses the traditional tried and tested wrapper <code>&lt;div&gt;</code> to center the content, but Kroc Camen has published a nice article showing <a href="http://camendesign.com/code/developpeurs_sans_frontieres">how to create centered designs without <code>&lt;div&gt;</code> wrappers</a>, so I thought I'd share that here also. It also usefully advises to not use HTML5 <code>&lt;section&gt;</code> elements as glorified wrappers in HTML5 pages - that is just plain wrong!</p>

		<h3 id="meta-differences">Some meta-differences</h3>

<p>The first thing you'll notice is that the doctype is much simpler than in older versions of HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;</code></pre>

<p>the creators of HTML5 chose the shortest possible doctype string for this purpose — after all, why should you, the developer, be expected to remember a huge great long string containing multiple URLs, when in reality the doctype is only there to put the browser into standards mode (as opposed to quirks mode)?</p>

<p>Next, I want to draw your attention to HTML5's apparent "lax syntax requirements". I have included quotes round all my attribute values, and written all the elements in lower case, but that's because I am used to writing using XHTML rules. But it may come as a surprise to you to discover that in HTML5, you can ignore these rules if you want. In fact, you don't even have to bother including the <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, or <code>&lt;html&gt;</code> elements, and it will still validate!</p>

<p class="note">Note: this is not true if you switch to using XHTML (HTML served with the XHTML doctype — <code>application/xhtml+xml</code>)</p>

<p>This is because such elements are assumed by the browser anyway. If you create a sample HTML5 page without these elements, load it into a browser, and view the source of the loaded page, you will see them inserted automatically by the browser. Alternatively, you could use Ian Hickson's <a href="http://software.hixie.ch/utilities/js/live-dom-viewer/">Live DOM viewer</a> utility to see the state of the DOM.</p>

<p class="note">Note: Ok, so in fact you can also get HTML4 documents to validate if you don't include <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, or <code>&lt;html&gt;</code>, but it is still worth mentioning here.</p>

<p>Another thing to mention is that the HTML5 spec strictly defines how to handle badly-formed markup (for example wrongly nested elements, or unclosed elements), defining a parsing algorithm for the first time. This means that even if you do get some of your markup wrong, the <abbr title="Document Object Model">DOM</abbr> will be consistent across HTML5-supporting browsers.</p>

<p>So does this mean we don't need to worry about validation and best practices any more? HECK NO! validation is still a very useful tool for making your pages as good as they can be. Even if your DOM is consistent across browsers, it still might not behave how you wanted it to in the first place, resulting in CSS and JavaScript headaches! And as you'll see as you explore HTML5 further, there are still very good reasons for making sure you declare document features like <code>&lt;html&gt;</code> up front. For example, You might want to declare the document's language on the <code>&lt;html&gt;</code> element for i18n and accessibility benefits, and certain related technologies also require it. A good example is <a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache/">AppCache</a>.</p>

<p>To validate HTML5 documents, you can use the <a href="http://validator.w3.org/">W3C validator</a>, which can validate HTML5, as well as a wide range of other markup language flavours. Or for a dedicated HTML5 (+ WAI-ARIA and MathML) validator, go to <a href="http://validator.nu">validator.nu</a>.</p>


<p>Last of all in this section, I want to draw your attention to this line:</p>

<pre><code>&lt;meta charset="utf-8" /&gt;</code></pre>

<p>You need to declare the character set of your document within the first 512 bytes, to protect against a <a href="http://code.google.com/p/doctype/wiki/ArticleUtf7">serious security risk</a>. Unless you have a really good reason not to, you should use <code>UTF-8</code>.</p>

		<h3 id="header"><code>&lt;header&gt;</code></h3>

<p>The document's header looks like this:</p>

<pre><code>&lt;header&gt;
	&lt;hgroup&gt;
		&lt;h1&gt;A history of Pop Will Eat Itself&lt;/h1&gt;
		&lt;h2&gt;Introducing the legendary Grebo Gurus!&lt;/h2&gt;
	&lt;/hgroup&gt;
&lt;/header&gt;</code></pre>

<p>the purpose of the <code>&lt;header&gt;</code> element is to wrap the section of content that forms the header of the page, usually containing a company logo/graphic, main page title, etc.</p>


		<h3 id="hgroup"><code>&lt;hgroup&gt;</code></h3>

<p>You'll notice that in the above code, the only contents of my header are an <code>&lt;hgroup&gt;</code> element, wrapping two headings. What I want to do here is specify the document's top level heading, plus a subtitle/tag line. I only want the top level heading to count in the document heading hierarchy, and that's exactly what <code>&lt;hgroup&gt;</code> does — it causes a group of headings to only count as a single heading for the purposes of the document structure. you'll find more out about how heading hierarchies work in HTML5, in the <a href="#html-outline">HTML5 outlines, and the HTML5 heading algorithm</a> section, below.</p>

		<h3 id="html5-footer"><code>&lt;footer&gt;</code></h3>

<p>If you go to the bottom of the document, you'll see this code:</p>

<pre><code>&lt;footer&gt;

	&lt;h3 id="copyright"&gt;Copyright and attribution&lt;/h3&gt;

	<!-- more content here -->

&lt;/footer&gt;</code></pre>

<p><code>&lt;footer&gt;</code> should be used to contain your site's footer content — if you look at the bottom of a number of your favourite sites, you'll see that footers are used to contain a variety of things, from copyright notices and contact details, to accessibility statements, licensing information and various other secondary links.</p>

<p class="note">Note: You are not restricted to one header and footer per page &mdash; you could have a page containing multiple articles, and have a header and footer per article.</p>

		<h3 id="nav"><code>&lt;nav&gt;</code></h3>

<p>Further up the document again, you'll come across this structure:</p>

<pre><code>&lt;nav&gt;
	&lt;h2&gt;Contents&lt;/h2&gt;
		&lt;ul&gt;
			&lt;li&gt;&lt;a href="#Intro"&gt;Introduction&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href="#History"&gt;History&lt;/a&gt;

			&lt;!-- other navigation links... --&gt;

		&lt;/ul&gt;
&lt;/nav&gt;</code></pre>

<p>The <code>&lt;nav&gt;</code> element is for marking up the navigation links or other constructs (eg a search form) that will take you to different pages of the current site, or different areas of the current page. Other links, such as sponsored links, do not count. You can of course include headings and other structuring elements inside the <code>&lt;nav&gt;</code>, but it's not compulsory.</p>

			<h3 id="aside"><code>&lt;aside&gt;</code></h3>

<p>Just underneath the document heading, we have the following:</p>

<pre><code>&lt;aside&gt;
	&lt;table&gt;

		&lt;!-- lots of quick facts inside here --&gt;

	&lt;/table&gt;
&lt;/aside&gt;</code></pre>

<p>The <code>&lt;aside&gt;</code> element is for marking up pieces of content that are related to the main content, but don't fit directly into the main flow. For for example in this case we have a bunch of quick fire facts and statistics about the band, which wouldn't work so well shoehorned into the main content. Other suitable condidates for <code>&lt;aside&gt;</code> elements include lists of links to external related content, background information, pull quotes, and sidebars.</p>

		<h3 id="figure"><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></h3>

<p>The dynamic duo of <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> have been created to solve a very specific set of problems. For a start, doesn't it always feel a bit semantically dubious and unclean to mark up an image and its caption as two paragraphs, or a definition list pair, or something else? And second, what do you do when you want a figure to consist of an image, or two images, or two images and some text? <code>&lt;figure&gt;</code> is on hand to wrap around all the content you want to comprise a single figure, whether it is text, images, SVG, videos, or whatever. <code>&lt;figcaption&gt;</code> is then nested inside the <code>&lt;figure&gt;</code> element, and contains the descriptive caption for that figure. The figure I included in my example is a simple one, to get you started:</p>

<pre><code>&lt;figure&gt;
	&lt;img src="pwei.png" alt="Old poppies logo" /&gt;
	&lt;figcaption&gt;
		The old poppies logo, circa 1987.&lt;br /&gt; &lt;a href="http://www.flickr.com/photos/bobcatrock/317261648/"&gt;Original picture on Flickr&lt;/a&gt;, taken by bobcatrock.
	&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

		<h3 id="time"><code>&lt;time&gt;</code></h3>

<p>The <code>&lt;time&gt;</code> element allows you to define an unambiguous date and time value that is both human and machine readable. For example, I've marked up the release dates of the poppies' singles like so:</p>

<pre><code>&lt;time datetime="1989-03-13"&gt;1989&lt;/time&gt;</code></pre>

<p>The text in between the opening and closing tags can be anything you want, as appropriate for the people reading your site. If you wanted, you could also put it like this:</p>

<pre><code>&lt;time datetime="1989-03-13"&gt;13th March 1989&lt;/time&gt;
&lt;time datetime="1989-03-13"&gt;March 13 1989&lt;/time&gt;
&lt;time datetime="1989-03-13"&gt;My nineteenth birthday&lt;/time&gt;</code></pre>

<p>Conversely, the date inside the <code>datetime</code> attribute is an ISO standard (see <a href="http://www.w3.org/QA/Tips/iso-date">W3C Tip: Use international date format (ISO)</a> for more information) machine readable date, so you get the best of both worlds. You can also add a time onto the end of the ISO standard, like so:</p>

<pre><code>&lt;time datetime="1989-03-13T13:00"&gt;One o'clock in the afternoon, on the 13th of March 1989&lt;/time&gt;</code></pre>

<p>You can also add a timezone adjustment, so for example to make the last example pacific standard time, you would do this:</p>

<pre><code>&lt;time datetime="1989-03-13T13:00Z-08:00"&gt;One o'clock in the afternoon, on the 13th of March 1989&lt;/time&gt;</code></pre>

		<h3 id="article-section"><code>&lt;article&gt;</code> and <code>&lt;section&gt;</code></h3>

<p>Now we turn our attentions to probably the two most misunderstood elements in HTML5 &mdash; <code>&lt;article&gt;</code> and <code>&lt;section&gt;</code>. When you first meet them, the difference might appear unclear, but it really isn't so bad.</p>

<p>Basically, the <code>&lt;article&gt;</code> element is for standalone pieces of content that would make sense outside the context of the current page, and could be syndicated nicely. Such pieces of content include blog posts, a video and it's transcript, a news story, or a single part of a serial story.</p>

<p>The <code>&lt;section&gt;</code> element, on the other hand is for breaking the content of a page into different functions or subjects areas, or breaking an article or story up into different sections. So for example, in my PWEI history, the structure looks like so:</p>

<pre><code>&lt;article&gt;
	&lt;section id="Intro"&gt;
		&lt;h2&gt;Introduction&lt;/h2&gt;
	&lt;/section&gt;

	&lt;section id="History"&gt;
		&lt;h2&gt;History&lt;/h2&gt;
	&lt;/section&gt;

	&lt;section id="Discography"&gt;
		&lt;h2&gt;Discography&lt;/h2&gt;
	&lt;/section&gt;
&lt;/article&gt;</code></pre>

<p>But you could also have a structure like this:</p>

<pre><code>&lt;section id="rock"&gt;
	&lt;h2&gt;Rock bands&lt;/h2&gt;
	&lt;!-- multiple article elements could go in here --&gt;
&lt;/section&gt;

&lt;section id="jazz"&gt;
	&lt;h2&gt;Jazz bands&lt;/h2&gt;
	&lt;!-- multiple article elements could go in here --&gt;
&lt;/section&gt;

&lt;section id="hip-hop"&gt;
	&lt;h2&gt;Hip hop bands&lt;/h2&gt;
	&lt;!-- multiple article elements could go in here --&gt;
&lt;/section&gt;</code></pre>

		<h4 id="div">Where does that leave <code>&lt;div&gt;</code>?</h4>

<p>So, with all these great new elements to use on our pages, the days of the humble <code>&lt;div&gt;</code> are numbered, surely? NO. In fact, the <code>&lt;div&gt;</code> still has a perfectly valid use. You should use it when there is no other more suitable element available for grouping an area of content, which will often be when you are purely using an element to group content together for styling/visual purposes. The example in my PWEI history is the <code>&lt;div id="wrapper"&gt;</code> I have wrapped around the whole of the content. The only reason it is here is so that I could use CSS to center the content in the browser:</p>

<pre><code>#wrapper {
	background-color: #ffffff;
	width: 800px;
	margin: 0 auto;
}</code></pre>

		<h3 id="mark"><code>&lt;mark&gt;</code></h3>

<p>The <code>&lt;mark&gt;</code> element is for highlighting terms of current relevance, or highlighting parts of content that you just want to draw attention to, but not change the semantic meaning of. It's like when you are going through a printed article and highlighting lines important to you with a highlighter pen. So for example, you might want to use this element to markup lines in a wiki that need to be given editorial attention, or to highlight instances of a search term that the user has just searched for on a page, and then give them appropriate styling in your CSS.</p>

		<h3 id="hidden">The <code>hidden</code> attribute</h3>

<p>The <code>hidden</code> attribute, when applied to any element, hides it completely from any form of presentation/media, and should be used if you are intending to show content later on (for example, using JavaScript to remove the attribute) but don't wish to have it shown now. It shouldn't be used to hide content such as hidden tabs in a tabbed interface, because that is really a different way of presenting content in a smaller space, rather than hiding content altogether.</p>

<h2 id="html-outline">HTML5 outlines, and the HTML5 heading algorithm</h2>

<p>Before we carry on our journey towards mastery of HTML5, there is another important difference we should discuss between HTML5, and previous versions of the spec. In HTML, we have have the concept of the document outline, which is basically a breakdown of the document into it's headings, and their hierarchy relative to one another, exactly like when you are writing a document in a word processor and you look at your document in outline view. In effect, I have basically created a document outline for this document by nesting lists to create the table of contents at the start of the article. This article's document outline looks something like this:</p>

<pre><code>- New structural elements in HTML5
	- Introducing HTML5 structural elements
		- How were the element names decided upon?
		- Why isn't there a &lt;content&gt; element?
	- Presenting an example HTML5 page
		- Some meta-differences
		- &lt;header&gt;
		- &lt;hgroup&gt;
		- &lt;footer&gt;
		- &lt;nav&gt;
		- &lt;aside&gt;
		- &lt;figure&gt; and &lt;figcaption&gt;
		- &lt;time&gt;
		- &lt;article&gt; and &lt;section&gt;
			- Where does that leave &lt;div&gt;?
	- HTML5 outlines, and the HTML5 heading algorithm
	- How to get it working in older browsers
	- Summary</code></pre>

<p>So "New structural elements in HTML5" is an <code>&lt;h1&gt;</code>, "Introducing HTML5 structural elements" is an <code>&lt;h2&gt;</code>, and so on. In HTML4 we are used to the fact that there are six possible heading levels, and each heading's level is dictated by the actual element used, which means that it is perfectly possible to end up with a completely screwed up heading hierarch if you use the wrong heading levels, or even if some of your content is syndicated into a different CMS.</p>

<p>HTML5 solves this problem by generating it's heading hierarchy based on the relative nesting the different document sections. A new document section is created whenever you use so-called <strong>sectioning content</strong> — <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;aside&gt;</code> elements. So for example, if you take the following example:</p>

<pre><code>&lt;h1&gt;My title&lt;/h1&gt;

&lt;div&gt;
	&lt;h2&gt;My subtitle&lt;/h2&gt;
&lt;/div&gt;</code></pre>

<p>See the <a href="outlining1.html">first outlining example</a> running live.</p>

<p>HTML 4 will count this as a first level heading followed by a second level heading, but HTML5 will count this as two first level headings. Why? Because <code>&lt;div&gt;</code> is not a sectioning element, so does not create a new section in the hierarchy. To remedy this, you'd have to change the <code>&lt;div&gt;</code> to a sectioning element:</p>

<pre><code>&lt;h1&gt;My title&lt;/h1&gt;

&lt;section&gt;
	&lt;h2&gt;My subtitle&lt;/h2&gt;
&lt;/section&gt;</code></pre>

<p>See the <a href="outlining2.html">second outlining example</a> running live.</p>

<p>No browsers currently implement the HTML5 outlining algorithm, but you can already get a feel for how it works by using the <a href="https://addons.opera.com/addons/extensions/details/html5-outliner/1.0/?display=en">HTML5 Outliner Opera Extension</a> or Geoffrey Sneddon's <a href="http://gsnedders.html5.org/outliner/">on-line HTML5 outliner</a>, or the <a href="http://code.google.com/p/h5o/">Google HTML5 outliner</a>. Try running the above examples through one of these tools if you don't believe me. And in the future, you won't really need to bother with a hierarchy of h1, h2, h3, etc., as regardless of what actual heading elements you use, the algorithm will still work out the same hierarchy based on the nesting of the document sections. But you should still bother for now, as no browsers (or screen readers) support this yet!</p>

<p>So the big question now is "why bother with all this"? Well, this new way of working out the document outline/heading hierarchy has two major advantages over the old way:</p>

			<ol>
<li>You can have as many heading levels as you like — you are not limited to six.</li>
<li>If your content is transplanted into someone else's CMS, and this results in the the h1, h2, h3, etc. levels going wrong, the algorithm will still work out the correct hierarchy regardless.</li>
			</ol>

			<div class="note">
<p>Note: The HTML5 heading hierarchy is actually a really old idea, originally <a href="http://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html">envisaged by Tim Berners-Lee in 1991</a>:</p>

			<blockquote cite="http://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html"><p>I would in fact prefer, instead of &lt;H1&gt;, &lt;H2&gt; etc for headings [those come from the AAP DTD] to have a nestable &lt;SECTION&gt;..&lt;/SECTION&gt; element, and a generic &lt;H&gt;..&lt;/H&gt; which at any level within the sections would produce the required level of heading.</p></blockquote>
			</div>

<h2 id="older-browsers">How to get it working in older browsers</h2>

<p>Older browsers: always the bane of our very existence when trying to get to grips with using shiny new toys on the Web! In fact, the problem here is all browsers - <strong>no browsers currently recognise and support these new HTML5 structural elements</strong>, as such. But never fear, you can still get them working across browsers today with the minimum of effort.</p>

<p>first of all, if you put an unknown element into a web page, by default the browser will just treat it like a <code>&lt;span&gt;</code>, ie, an anonymous inline element. Most of the HTML5 elements we have looked at in this article are supposed to behave like block elements, therefore the easiest way to make them behave properly in older browsers is by setting them to <code>display:block;</code> in your CSS:</p>

<pre><code>article, section, aside, hgroup, nav, header, footer, figure, figcaption {
	display: block;
}</code></pre>

<p>This solves all your problems for all browsers except one. Have a guess which one? ... Yup, amazing isn't it, that IE should prove to be trickier than the other browsers, and refuse to style elements it doesn't recognise? The fix for IE is illogical, but fortunately pretty simple. For each HTML5 element you are using, you need to insert a line of JavaScript into the head of your document, like so:</p>

<pre><code>&lt;script&gt;
		document.createElement('article');
		document.createElement('section');
		document.createElement('aside');
		document.createElement('hgroup');
		document.createElement('nav');
		document.createElement('header');
		document.createElement('footer');
		document.createElement('figure');
		document.createElement('figcaption');
&lt;/script&gt;</code></pre>

<p>IE will now magically apply styles to those elements. It is a pain having to use JavaScript to make your CSS work, but hey, at least we have a way forward? Why does this work exactly? no-one I've talked to actually knows. There is also a problem with these styles STILL not being carried through to the printer when you try to print HTML5 documents from IE.</p>

<p class="note">Note: The IE print problem can be solved using the <a href="http://code.google.com/p/html5shiv/">HTML5 Shiv</a> JavaScript library, which also handles adding the <code>document.createElement</code> lines for you. You should wrap it up in <a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">Conditional comments</a> for IE less than IE9, so modern browsers don't execute JS they don't need.</p>


<h2 id="summary">Summary</h2>

<p>That rounds off our discussion on the new structural elements in HTML5. If you want more help with HTML5, we have a lot more to offer here on dev.opera.com, and you should also <a href="http://html5doctor.com">consult the HTML5 doctors</a>.</p>
