---
title: CSS3 Attribute Selectors
authors:
- christopher-schmitt
intro: 'In this article, Christopher Schmitt carries on his detailed exploration of what CSS3 has to offer us, looking at CSS3 attribute selectors that allow us to write selectors matching strings of text inside attribute values.'
license: cc-by-nc-sa-2.5
---
<h2>Introduction</h2>
<p>CSS attribute selectors allow us to pinpoint the values of attributes of an element and to style that element accordingly.  CSS3 introduces three new selectors that can match strings against an attribute value at the beginning, the end, or anywhere within the value.</p>
<p>This provides powerful new ways to style elements automatically that match very specific criteria. In this article, I will put these new attribute selectors in action and create some clever CSS rules that attach icons to links based on the value of the <code>href</code> attribute.</p>

<p>There are several small examples included in this article that demonstrate the techniques discussed throughout. You can <a href="CSS3_attribute_selectors_demo.zip">download the sample code</a> to play with these examples on your local machine.</p>
<h2>Inserting icons</h2>
<p>Before we move on to the CSS selectors themselves, let’s look at a simple way to add icons before or after a link address using pseudo selectors.</p>
<p>Suppose we label all of our favorite links by adding a <code>class</code> attribute with the value &quot;favorite&quot; to each link:</p>

<pre>Lorem ipsum dolor sit amet, &lt;a href=&quot;#&quot; class=&quot;favorite&quot;&gt;consectetuer&lt;/a&gt; adipiscing elit.</pre>

<p>Here we want to identify a link as a favorite by placing a heart icon before the link text. This can easily be done using the <code>:before</code>  pseudo-selector:</p>


<pre>.favorite:before {
	content: url(icons/heart.png);
}</pre>

<p>This tells the browser to place the <code>heart.png</code> image before every element labeled with the &quot;favorite&quot; class. We end up with a link, as shown in Figure 1.</p>

<p><img src="selectors1.jpeg" width="313" height="21" /></p>
<p class="comment">Figure 1: The icon is placed before the link</p>

<p>We can also just as easily place the icon after the link using the <code>:after</code>  pseudo-selector:</p>

<pre>.favorite:after {
	content: url(icons/heart.png);
}</pre>

<h2>Adding contextual icons</h2>
<p>Now, let’s move into a trickier example. Suppose we want to identify every link to a video file by placing a film icon next to the links.</p>
<p>Now, we could do this by adding a class called &quot;movie&quot; to each relevant link and by adding a CSS rule applying to all links with that class. But this can be tedious—particularly if you have numerous links that need classifying—and it&rsquo;s unnecessary.</p>

<p>There is already a unique identifier in the link address itself: the &quot;.mov&quot; file extension (or &quot;.avi,&quot; or whatever particular extension applies to the video file type you are referring to).  How can we use CSS to pick out a link address based on the extension at the end of the link?</p>

<p>This is where CSS selectors come in. We can use them to pick out parts of a value within an attribute. Here, we want to pick out links—anchor tags with the <code>href</code> attribute—that have the text &quot;.mov&quot; at the end:</p>


<pre>a[href$='.mov']:after {
	content: url(icons/video.png);
}</pre>

<p>The <code>$=</code> specifies that we want to match links whose <code>href</code>s end with &quot;.mov&quot;. Once again, we’ve used the <code>:after</code>  pseudo-selector to place the icon after the link, as shown in Figure 2.</p>
<p><img src="selectors2.jpeg" alt="" width="261" height="26" /></p>
<p class="comment">Figure 2: Film icon is placed immediately after the link</p>

<p>We can use this technique to style links that point to other types of file similarly. We can add identifying icons to music files, Word documents, or PDF files, so that users can readily see what kind of file they are about to open by clicking each link they encounter on your site.</p>

<p>While using the <code>:after</code>  pseudo-selector produces adequate results, if we want to be able to fine tune the position of the icon, we can just style the anchor itself:</p>


<pre>a[href$='.mov'] {
	padding-right: 17px;
	background: url(icons/video.png) no-repeat right;
}</pre>

<p>Here we’ve made space for the icon by adding generous padding to the right of the link; then, we’ve placed a background image to the right of the element. The result is shown in Figure 3.</p>

<p><img src="selectors2.5.jpeg" alt="" width="264" height="22" /></p>
<p class="comment">Figure 3: Spacing inserted between the text and icon</p>

<p>Either method for placing the icon works, depending on how much positioning control you need to produce the desired results.</p>

<p class="note"><strong>Note</strong>: For large files such as videos, it would be polite to include a note within the link itself indicating the file size and type, to let people know that the file the link is pointing to is rather large, and they may want to reconsider it if they have a slow Internet connection. For example:

<pre>&lt;a href=&quot;videofile.mov&quot;&gt;Embiggen Movie (30M, .mov format)&lt;/a&gt;</pre></p>

<p>We’ve identified links that end with a particular extension. What if we need to pick out a link that begins with a particular string? For example, suppose we want to identify all e-mail links with an icon. Recall that links to e-mail addresses are prefaced with <code>mailto:</code> like so:</p>


<pre>&lt;a href=&quot;mailto:username@example.com&quot;&gt;contact me&lt;/a&gt;</pre>

<p>So, to style all links that begin with the string &quot;mailto:&quot;, we can use the following rule:</p>

<pre>a[href ^=&quot;mailto:&quot;] {
	padding-right: 18px;
	background: url(icons/email.png) no-repeat right;
}</pre>

<p>The <code>^=</code> specifies that we want to match links that begin with the &quot;mailto:&quot; string. The result is shown in Figure 4.</p>

<p><img src="selectors3.jpeg" width="107" height="20" /></p>
<p class="comment">Figure 4: Mail icon placed after a <code style="font-style:normal">mailto:</code> link</p>

<h3>Setting icons for file extensions</h3>
<p>You may also want to pick out links that end with one of several types of extension. Links to subscription feeds, for example, can end with <code>.rss</code> or <code>.atom</code>. You can add more than one attribute selector to a particular rule, like so:</p>

<pre>a[href$='.rss'], a[href$='.atom'] {
	padding-right: 17px;
	background: url(icons/rss.png) no-repeat right;
}</pre>

<p>So, the feed icon is added to both types of subscription feeds as shown in Figure 5.</p>

<p><img src="selectors4.jpeg" width="190" height="23" /></p>
<p class="comment">Figure 5: Icon placed after links to subscription feeds</p>
<p>Finally, suppose that you want to pick out links that contain a string anywhere within the address. For example, what if you want to place a star next to any link that contains your username? We can use <code>*=</code> to match links that contain a particular string anywhere in an attribute value:</p>


<pre>a[href *=&quot;username&quot;] {
	padding-right: 17px;
	background: url(icons/star.png) no-repeat right;
}</pre>


<p>So, a link to <code>http://username.livejournal.com</code> styles with this rule, as well as a link to <code>http://twitter.com/username</code>. See Figure 6.</p>

<p><img src="selectors5.jpeg" width="291" height="32" /></p>
<p class="comment">Figure 6: Inserting an icon based on a string of characters in the attribute’s value</p>

<h2>Summary</h2>

<p>Attribute selectors provide a powerful tool for targeting specific types of links within an HTML document, which in turn allows you to style special types of links automatically. Attaching identifying icons to particular links enhances the usability of a Web page, as it lets users know whether they are clicking on a file, e-mail address, external link, and so forth.</p>

<p>Note that adding an icon is only one way to style such links. Changing the text or background color and adding attaching identifying text—e.g., adding &quot;(pdf)&quot; after all links to PDF files—are other ways to identify special links uniquely.</p>

<p>Also, note that CSS3 includes other ways to match a string within an attribute value. For more information, check out <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">http://www.w3.org/TR/css3-selectors/#attribute-selectors/</a>.</p>

<p>As for browser support, attribute selectors are supported by most browsers, including IE7+, Safari, and Opera, as is generated content with the exception being IE7.  Although support for generated content should be in IE8 (which is currently in beta development at the time of this writing).</p>
