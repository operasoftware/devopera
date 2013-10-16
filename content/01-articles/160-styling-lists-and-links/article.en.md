Title: Styling lists and links
----
Date: 2008-09-26 06:35:22
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/31-css-background-images/" rel="prev" title="link to the previous article in the series">Previous article—CSS background images</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/33-styling-tables/" rel="next" title="link to the next article in the series">Next article—Styling tables</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>Many elements on a webpage are a little bit &quot;forgiving&quot; in terms of design—if they’re not &quot;just right&quot; it doesn’t matter too much. With lists and links it’s a different story—if you don’t get them right, you can cause some serious problems for people trying to use your website. </p>
<p>Links in particular have some key style requirements and user expectations. Poorly styled links can ruin the user experience on a website, as people have to stop and think about where to click. In the worst case, a user might not even be able to tell which items on the page are actually links. </p>
<p>In this article we’ll look at the core skills you need to create robust list and link styles. We’ll also discuss some ways to avoid key pitfalls of these elements and produce a final result that will work across different browsers, and be accessible to users with disabilities.</p>
<p>There are a number of examples used in this article, so you can <a href="styling-lists-and-links-examples.zip">download the lists and links example files</a> to follow along with them.</p>

<p>The article contents are as follows:</p>

<ul>
<li><a href="#stylinglists">Styling lists</a>
  <ul>
    <li><a href="#basicbullets">Basic bullets and numbers</a></li>
    <li><a href="#custombullets">Custom bullets using images</a></li>
    <li><a href="#listmarginspadding">List margins and padding</a>
      <ul>
        <li><a href="#unorderedlists">Unordered lists</a></li>
        <li><a href="#orderedlists">Ordered lists</a></li>
        <li><a href="#whattodo">So, what to do?</a></li>
      </ul>
    </li>
    <li><a href="#liststyleposition">Using list-style-position</a></li>
    <li><a href="#definitionlists">What about definition lists?</a></li>
    <li><a href="#nestedlists">Nested lists</a></li>
    <li><a href="#horizontallists">Horizontal lists</a></li>
    <li><a href="#fauxcolumns">Faux columns</a>
      <ul>
        <li><a href="#legacybrowsers">Legacy browsers</a></li>
      </ul>
    </li>
    <li><a href="#listsconclusion">Lists conclusion</a></li>
  </ul>
</li>
<li><a href="#stylinglinks">Styling links</a>
  <ul>
    <li><a href="#linkstates">Understanding link states</a></li>
    <li><a href="#evolutionexpectations">How browser evolution set expectations</a></li>
    <li><a href="#userexpectations">User expectations</a></li>
    <li><a href="#usecolorcarefully">Use colour carefully</a></li>
    <li><a href="#cssforlinks">Getting down to business: the CSS</a>
      <ul>
        <li><a href="#linkstateorder">Styling link states in the right order</a></li>
        <li><a href="#controllingdefaults">Controlling defaults</a>
          <ul>
            <li><a href="#underline">Underlining</a></li>
            <li><a href="#outline">Outline</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#recreatingnetscape">Example: recreating the Netscape defaults</a>
      <ul>
        <li><a href="#fauxunderlines">Faux underlines using border-bottom</a></li>
        <li><a href="#stylesthatdontrelyoncolor">Styles that don’t rely on colour</a></li>
      </ul>
    </li>
    <li><a href="#iconsonlinks">Icons on links</a></li>
  </ul>
</li>
<li><a href="#navigationexample">Bringing it all together—a simple navigation menu</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
<li><a href="#furtherreading">Further reading</a></li>
</ul>

<h2 id="stylinglists">Styling Lists </h2>

<p>First, I’ll take you through the basics of styling lists with CSS, before then moving on to look at some slightly more complicated techniques.</p>

<h3 id="basicbullets">Basic bullets and numbers</h3>

<p>The  fundamental thing to consider when creating a list style is what form of bullet or numbering you want to use. You might also choose to remove the bullets and numbers completely. As you learned in the <a href="http://dev.opera.com/articles/view/16-html-lists/">HTML Lists article</a>, there are many options available, set using the <code>list-style-type</code> property. </p>
<p>For example, to set all unordered lists on your site to use square bullets, use this CSS:</p>

<pre>ul li {
  list-style-type: square;
}</pre>

<p>Which will produce something like Figure 1:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/square-bullets.gif" alt="Screenshot of a list with square bullets" width="72" height="48" /> </p>
<p class="comment">Figure 1: Unordered list with square bullets. </p>

<p>Some common list types are shown in Figure 2:</p>

<p><a href="styling-lists-example-basics.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/reference-rendering-01.gif" alt="Screenshot of some common list types." width="482" height="412" border="0" /></a></p>
<p class="comment">Figure 2: Common list styles.</p>

<p>The <a href="styling-lists-example-basics.html">basic list choices example page</a> shows some more options. </p>

<p>Note that the bullets and numbers will be rendered using the <code>color</code> which is set for or inherited by the <code>li</code>. If you need the bullet to be a different colour from the text, you will need to use an image instead, or work around the issue using other elements within the list items (this may be easy if all the items are links, for example). </p>

<h3 id="custombullets">Custom bullets using images</h3>

<p>The standard set of bullets are enough for basic content, however it is a common design request to replace them with a custom image.</p>

<p>The CSS specification does include the <code>list-style-image</code> property for adding a custom list image. However, the property has limited positioning options for the background image, and in some circumstances doesn’t work at all in IE. So it has become a far more common practice to simply set a background image on the list items.</p>

<p>Let’s imagine you have a list of RSS feeds and you want to change the bullet to the standard orange RSS icon. We’ll give the list the class &quot;rss&quot; to differentiate it from other lists:</p>

<pre>&lt;ul <strong>class=&quot;rss&quot;</strong>&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;News&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;Sport&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;Weather&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;Business&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;Entertainment&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://example.com/rss.xml&quot;&gt;Funny News&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>First we’ll set the list to have no <code>list-style-type</code> and remove the margin and padding. Then, simply add a background image to each list item, some left padding to move the text over to let the image show through, and some bottom padding to space out the list items:</p>

<pre>.rss {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.rss li {
  background: #fff url(&quot;icon-rssfeed.gif&quot;) 0 3px no-repeat;
  padding: 0 0 5px 15px;
}</pre>

<p>This will produce a list with the RSS image instead of bullets, as seen in Figure 3:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/image-bullets01.gif" alt="Screenshot of a list with the bullets replaced with images" width="112" height="130" /> </p>
<p class="comment">Figure 3: The list with image bullets. </p>

<p>Bear in mind that the background image is positioned using pixels for a precise placement. Depending on the design you are creating, you might also be able to use <code>%</code>, <code>em</code>s or keywords. Just be careful when your design features content that might cause a list item to wrap over several lines—if you set the background to vertical <code>center</code> or <code>50%</code> it can look quite strange, as shown in Figure 4:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/image-bullets02.gif" alt="Screenshot showing the way the vertically-centred bullet will sit in the middle of the text, instead of being centred to the first line of text." width="586" height="166" /></p>
<p class="comment">Figure 4: A demonstration of vertically-centred bullet images on a multi-line list item. </p>
<p>By setting the image to sit at the top of the list item, you maintain the default bullet behaviour (where the bullet sits on the first line)—see Figure 5:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/image-bullets03.gif" alt="Screenshot of top-positioned bullet images." width="586" height="166" /></p>
<p class="comment">Figure 5: A demonstration of top-aligned bullet images on a multi-line list item. </p>


<h3 id="listmarginspadding">List margins and padding</h3>

<p>Clever use of margins and padding can make lists look much more polished and professional, but you need to know what you are doing, and also bear in mind that the situation differs between different types of list. In this section I’ll take you through applying sensible margins and padding to the two most common types of list.</p>

<h4 id="unorderedlists">Unordered lists</h4>

<p>One thing you will probably notice quite quickly is that the default style for lists indents them more than the default style for paragraphs—see Figure 6:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/list-indent01.gif" alt="Screenshot of default list styles with a larger left indent than paragraphs." width="183" height="119" /></p>
<p class="comment">Figure 6: Default styled lists are indented on the left. </p>

<p>If you want your unordered list items to sit at the same left-align point as the rest of your content, you will need to set some styles to control the indentation to your liking. Different browsers require different settings—some need the margin removed, others need the padding removed. So, to reset for all browsers, reset both: </p>

<pre>ul {
  margin: 0;
  padding: 0;
}</pre>

<p>This may not have the effect you were expecting, as it will get the <em>text</em> to sit flush left but the bullets will sit outside the text, as shown in Figure 7:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/list-indent02.gif" alt="Screenshot of bullets sitting outside the text." width="195" height="119" /> </p>
<p class="comment">Figure 7: Bullets are positioned to the left of the text.</p>

<p>So, to align the <em>bullets</em> to the left you can now set a margin on the list items to line things up:</p>

<pre>ul {
  margin-left: 0;
  padding-left: 0;
}

ul li {
  margin-left: 1em;
}</pre>

<p>...at this point you will still find a pixel-level difference between browsers but the effect is basically as consistent as possible—see Figure 8:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/list-indent03.gif" alt="Screenshot of bullets left-aligned closely with paragraphs." width="183" height="119" /></p>
<p class="comment">Figure 8: Bullets positioned together with the surrounding paragraphs. </p>

<h4 id="orderedlists">Ordered lists </h4>

<p>Now you need to consider the same issue as applied to ordered lists. They are trickier since the numeric markers are aligned according to the list item with the largest number. For example, if you have 10 list items, decimals will be positioned to allow for the two-digit &quot;10&quot; item, as seen in Figure 9:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/ol-indent01.gif" alt="Screenshot of ten-item list, with the markers indented to allow for the 10." width="119" height="174" /> </p>
<p class="comment">Figure 9: The numeric marker for items 1–9 have preceding padding so they right-align with item 10. </p>

<p>So, there really isn’t a way to make this consistently left-aligned to the same position as the surrounding text; unless you set the list to use <code>list-style-type: decimal-leading-zero;</code>, which will hide the issue, as seen in Figure 10: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/ol-indent02.gif" alt="Screenshot of leading zeros allowing numbers to left-align consistently." width="120" height="174" /></p>
<p class="comment">Figure 10: The leading zeros fill in the space for items 1–9.</p>

<p>It is more common to simply live with the difference in spacing. It does however mean that the markers of your ordered and unordered lists can’t easily be consistently left-aligned. You can only line up the <em>text</em> of your lists:</p>

<pre>ul, ol {
  margin-left: 0;
  padding-left: 0;
}

li {
  margin-left: 2em;
}</pre>

<p>You need <em>at least </em>2em of left margin to accomodate both ordered and unordered lists. In Figure 11, note the way the text of the items lines up in both lists:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/list-indent04.gif" alt="Screenshot of lists set to have text consistently left-aligned." width="183" height="475" /></p>
<p class="comment">Figure 11: The text lines up in both ordered and unordered lists.</p>

<h4 id="whattodo">So, what to do? </h4>

<p>You basically have three choices:</p>
<ol>
  <li>Live with the default positioning of lists and their markers</li>
  <li>Explicitly line up the text of your lists</li>
  <li>Set a different style for <code>ul</code> and <code>ol</code>.</li>
</ol>

<p>There is no &quot;right&quot; or &quot;wrong&quot; approach and it is quite common to simply leave things to the default settings for lists in general content. </p>

<h3 id="liststyleposition">Using list-style-position</h3>

<p>If you want the text of multi-line list items to wrap below the list marker, you will need to set the <code>list-style-position</code> property to <code>inside</code>, which produces the result seen in Figure 12: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/inside-list.gif" alt="Screenshot of unordered list with text wrapping below bullets." width="583" height="213" /></p>
<p class="comment">Figure 12: List position &quot;inside&quot; causes the text to wrap below the marker instead of in line with the indented text. </p>

<p>Inside positioned markers is not an especially popular style. By default <code>list-style-position</code> is set to <code>outside</code>, which produces the results discussed elsewhere in this article.</p>

<h3 id="definitionlists">What about definition lists?</h3>

<p>In general, definition lists don’t require a huge amount of attention, except to set a <code>dt</code> style (commonly bold text) and control the indentation of the definitions:</p>

<pre>dt {
  font-weight: bold;
}

dd {
  margin-left: 2em;
}</pre>

<p>This sets up a clear and easy style for definition lists, as seen in Figure 13:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/definition-lists.gif" alt="Screenshot of a definition list with bold terms and indented definitions." width="177" height="105" /></p>
<p class="comment">Figure 13: A simply styled definition list.  </p>

<p>Although definition lists can be rearranged with floats and positioning, they are quirky and generally it’s better to keep things simple. They are  useful enough as they are, just with a little help to make the definition terms stand out more; and to get the definitions to indent nicely. </p>

<h3 id="nestedlists">Nested lists</h3>

<p>In the <a href="http://dev.opera.com/articles/view/16-html-lists/">HTML Lists article</a> you learned about nesting lists. When you create your CSS you should be careful to maintain clear design cues to show the relationship between a nested list and the list that contains it. By far the most common way to do this is by indenting the nested list items—it is in fact the default setting across the browsers.</p>

<p>If you set up your own list indentation, your base setting will simply be multiplied. For example, consider this CSS:</p>

<pre>ul, ol {
  margin-left: 0;
  padding-left: 0;
}

li {
  margin-left: 2em;
}</pre>

<p>Each subsequent child list item in the chain inherits the <code>margin</code> value from its parent list item, in addition to having another 2em of its own added on top. So a top level list item (one that doesn’t have a list item as a parent element) will have a left margin of 2em, then a child list item of the first list item will inherit 2em from its parent, and then have another 2em added on to it, for a total of 4em … and so on.</p>

<h3 id="horizontallists">Horizontal lists</h3>

<p>One of the most common changes required to work with a list is to produce a horizontal list—that is, to make the items appear next to each other instead of one after the other. This is a common trick for site navigation. Let’s use an example from the navigation menus article (see Figure 14):</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/simple-nav01.gif" alt="Screenshot of a simple list with bullets" width="104" height="104" /></p>
<p class="comment">Figure 14: A simple list. </p>

<p>Let’s convert this to a horizontal list, as shown in Figure 15:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/simple-nav02.gif" alt="Screenshot of a list with the items appearing next to each other" width="521" height="14" /></p>
<p class="comment">Figure 15: A simple horizontal list.</p>

<p>To achieve this, we need to do three things to our list:</p>

<ol>
  <li>Remove the <code>margin</code> and <code>padding</code> from the <code>&lt;ul&gt;</code></li>
  <li>Set the list items to <code>display: inline;</code></li>
  <li>Give the list items some spacing to the right, to avoid having them run together </li>
</ol>

<p>In the example the list has the ID &quot;mainmenu&quot; so we’ll use that as a contextual selector, to make sure we only change the list we intend to change. The CSS is:</p>

<pre>#mainmenu {
  margin: 0;
  padding: 0;
}

#mainmenu li {
  display: inline;
  padding: 0 1em 0 0;
}</pre>

<p>In this simple example, setting the list items to <code>display: inline;</code> is enough; be aware that using <code>float: left;</code> will also achieve a similar look. You will <a href="http://dev.opera.com/articles/view/35-floats-and-clearing/">learn more about floats</a> later on in the course.</p>

<h3 id="fauxcolumns">Faux columns</h3>

<p>Earlier on we created a list of RSS feeds. Now let’s imagine that list has been placed in a sidebar on your site. The designer wants the list to appear in two columns, with a border around the whole group as seen in Figure 16 (check out <a href="styling-lists-example-columns.html">styling-lists-example-columns.html</a> for the faux-columns example.)</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/columns-02.gif" alt="Screenshot of a list in two columns." width="250" height="78" /></p>
<p class="comment">Figure 16: A list of feeds in two columns, with an RSS icon for each bullet. </p>

<p>Let’s assume the list is inside a <code>&lt;div&gt;</code> which sets the width and border. The basic list would look something like Figure 17 (see <a href="styling-lists-example-image-bullet.html">styling-lists-example-image-bullet.html</a> for the basic starting list):</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/columns-01.gif" alt="Screenshot of basic list" width="250" height="144" /></p>
<p class="comment">Figure 17: The unstyled list inside the border. </p>

<p>To achieve the faux columns effect, add the RSS icon as demonstrated earlier; then add 5px margin to the top, right and left:</p>

<pre>.rss {
  margin: 5px 5px 0 5px;
  padding: 0;
}

.rss li {
  list-style-type: none;
  background: #fff url(&quot;icon-rssfeed.gif&quot;) 0 3px no-repeat;
  padding: 0 0 5px 15px;
  display:-moz-inline-box;
}</pre>

<p class="note">Note that <code>display:-moz-inline-box;</code> is added to get the example to display correctly in Firefox 2.</p>

<p>We don’t need to add bottom margin as the last list item will add the correct spacing with its padding, as seen in Figure 18:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/columns-03.gif" alt="Screenshot of list with the correct spacing and icon." width="250" height="147" /></p>
<p class="comment">Figure 18: Halfway there—we now have correct spacing and icon bullets.</p>

<p>Now set the list items to <code>display: inline-block;</code> and set their width to <code>40%</code> and right margin to <code>2%</code> (you could  also use pixel widths). You also need to explicitly set the <code>&lt;ul&gt;</code> to have <code>100%</code> width, to ensure that the list wraps and sizes correctly:</p>

<pre>.rss {
  margin: 5px 5px 0 5px;
  padding: 0;
  <strong>width: 100%;</strong>
}

.rss li {
  <strong>display: inline-block;
  width: 40%;
  margin: 0 2% 0 0;</strong>
  list-style-type: none;
  background: #fff url(&quot;icon-rssfeed.gif&quot;) 0 3px no-repeat;
  padding: 0 0 5px 15px;
  display:-moz-inline-box;
}</pre>

<p>In most browsers this will be enough to create the column effect, but you will need to explicitly set IE to float  the list items to the left. Let’s use a conditional style for all versions up to IE7 (since we don’t yet know what future versions will do):</p>

<pre>&lt;!--[if lte IE 7]&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .rss li {
      float: left;
    }
  &lt;/style&gt;
&lt;![endif]--&gt;</pre>

<p>We now have the desired two column effect, as seen in Figure 19: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/columns-02.gif" alt="Screenshot of a list in two columns." width="250" height="78" /></p>
<p class="comment">Figure 19: The completed list. </p>

<h4 id="legacybrowsers">Legacy browsers</h4>

<p>If you are required to produce this design for older browsers that don’t support inline-block, then you will need to float the list items to the left in all browsers and use a clearing fix like the one described in the article <a href="http://www.positioniseverything.net/easyclearing.html">Clearing a float container without source markup</a>. Thankfully the latest round of browser releases have made <code>inline-block</code> a viable display property, so unless you have a very large browser share for older browsers such as Firefox 2 you should be able to use the <code>inline-block</code> method. </p>

<h3 id="listsconclusion">Lists conclusion</h3>

<p>We’ve now covered a core set of styling choices and methods for lists. You can build on these examples and combine them to create a large number of designs. Since lists are very commonly combined with links, let’s move on to links. </p>

<h2 id="stylinglinks">Styling Links</h2>

<p>Styling links can be a bit of an art form. There are many different requirements at play and it can be hard to accommodate them all, while still creating an aesthetically pleasing result. That said, it is quite possible so long as you keep some simple rules in mind:</p>

<ul>
  <li>understand the different link states </li>
  <li>do not stray too far from user expectations </li>
  <li>use colours carefully </li>
</ul>

<p>If you follow those rules you should produce links that are clear and easy to use. </p>

<h3 id="linkstates">Understanding link states</h3>

<p>Before you can style links, you need to understand the different <strong>link states</strong>. There are five states in total: unvisited/default, visited, focus, hover and active. </p>
<dl>
  <dt>unvisited</dt>
  <dd>The default state of a link when it has not been activated or visited previously. </dd>
  <dt>visited</dt>
  <dd>The state of a link the user has already visited.</dd>
  <dt>focus</dt>
  <dd>Applies while the link has focus—for example while a keyboard user’s cursor is on that link. Note: IE  does not currently support the focus state, and just uses <code>active</code> in place of <code>focus</code>.</dd>
  <dt>hover</dt>
  <dd>Applies while a user is &quot;hovering&quot; over the link with a pointer like a mouse, but has not yet clicked the link.</dd>
  <dt>active</dt>
  <dd>Applies while the user activates the link—literally <em>during </em>the time they are clicking it. In some browsers this style also applies when the link has been opened in another window or tab. </dd>
</dl>

<p>You should always specify CSS for every one of these states. Each one conveys information to the user about the fact they are interacting with a link. If in doubt about <code>focus</code>, <code>hover</code> and <code>active</code> you can simply style <code>focus</code> and <code>hover</code> in the same way as their functions are similar enough that the same link style should not actively cause confusion. You can then add some simple variation for <code>active</code>, for example setting the text to italics. At a pinch you can style all three the same way. </p>

<p class="note">Note that these states are not all mutually exclusive (although it is not really possible for a link to be unvisited and visited at the same time)—it is however perfectly possible for a link to be hovered, active and visited at the same time.</p>

<h3 id="evolutionexpectations">How browser evolution set expectations </h3>

<p>To better understand some common user expectations about links, it helps to know a little web history.</p>

<p>You may hear people refer to the &quot;Netscape defaults&quot; for links; or say that links should always be blue and purple. This harks back to the very early days of the web, when browsers set the colours for content and authors didn&#39;t have much control over the rendering of their pages. </p>
<p>Text was black; the background was grey; and all links were underlined. The unvisited links were blue, visited links were purple and active links were red…and that was about it. See Figure 20 for an illustration of this.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/links-mosaic-screenshot.gif" alt="Screenshot of the Mosaic/Navigator startup page, explaining hyperlinks." width="739" height="565" /></p>
<p class="comment">Figure 20: A screenshot of Mosaic. </p>

<p>While this did get a bit monotonous it was <em>consistent</em>—and <strong>it set the baseline for user expectations</strong>. In particular, to this day users expect underlined text to be a link. They may not expect all links to have underlines, but they definitely expect underlined text to be clickable. It is best not to clash with that expectation. </p>
<p>Some sites still use blue and purple links; and those link colours are still the default for unstyled content in most browsers. While you can always go retro and stick with this colour set, users are generally quite comfortable with other options—within certain boundaries.</p>

<h3 id="userexpectations">User expectations </h3>

<p>There are some general rules for user expectations regarding links: </p>
<ul>
  <li>Users expect links to <strong>look different </strong> from other text which is not a link</li>
  <li>Users expect links to <strong>react</strong> when they hover or focus on the link</li>
  <li>Users expect links to <strong>change</strong> after they have visited that link</li>
  <li>Users like <strong>consistency</strong> in link styles of the same functionality so they know what to click</li>
  <li>Users expect underlined text to be a link—so don’t use underlines for anything else</li>
</ul>

<p>You should always cater to these basic rules, as they will help your users quickly identify and use links. You want to create styles that don’t make people stop and think &quot;which bits are links&quot;?!</p>

<p>These expectations translate to some simple coding rules: </p>
<ul>
  <li>set styles for all link states</li>
  <li>only use underlining for links</li>
</ul>

<h3 id="usecolorcarefully">Use colour carefully</h3>

<p>When you are styling links, be careful not to rely entirely on colour to distinguish between link states. Not everyone can see colour the same (eg people with colour blindness), so you should use colour <em>and</em> styles like different underlines, icons or reversed colours. </p>
<p>You should also check that your colour choices have enough contrast—this is really easy using tools like the <a href="http://www.paciellogroup.com/resources/contrast-analyser.html">Colour Contrast Analyser (for both PC and Mac)</a> or the <a href="http://www.paciellogroup.com/resources/wat-about.html">Web Accessibility Toolbar for Opera</a> (both from the Paciello Group). </p>
<p>The Colour Contrast Analyser (see Figure 20) allows you to use a colour picker to select the foreground and background colours on screen, then receive a simple evaluation of their contrast:</p>
<p><a href="http://www.paciellogroup.com/resources/contrast-analyser.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/cca-in-use.gif" alt="The CCA tool showing a test of heading colour." width="674" height="380" border="0" /></a></p>
<p class="comment">Figure 21: Screenshot of the Colour Contrast Analyser in use. </p>

<p>If all four results show a pass, the colour combination is ok. Remember to check all link states. You may need to enter some of them manually in the &quot;hex&quot; field to check focus, hover and active.</p>

<h3 id="cssforlinks">Getting down to business: the CSS</h3>

<p>Now that you understand some ground rules for links, let’s get into some code—this section details all the CSS you’ll need to sucessfully style links.  </p>

<h4 id="linkstateorder">Styling link states in the right order</h4>

<p>First off, be aware that if you do not place your links styles in the right order in your stylesheet, the settings will override each other and the link states won’t work. Your link styles must always be in the following order: </p>
<ol>
  <li><code>link</code></li>
  <li><code>visited</code></li>
  <li><code>focus</code></li>
  <li><code>hover</code></li>
  <li><code>active</code></li>
</ol>
<p>A common mnemonic for remembering this is &quot;Lord Vader’s Former Handle, Anakin&quot;. If you’re not a Star Wars fan, I’m afraid you’ll just have to remember it the hard way, or copy and paste the code block below! </p>

<p>Also popular is the mnemonic &quot;LoVe Fears HAte&quot;, with &quot;Fears&quot; standing for &quot;Focus&quot;.</p>

<p>The different link states are styled using their &quot;pseudo classes&quot;—<code>:link</code>, <code>:visited</code>, <code>:focus</code>, <code>:hover</code>, <code>:active</code> —which you append to the link element selector, <code>a</code>. So your starting CSS should look like this: </p>

<pre>a:link {}
a:visited {}
a:focus {}
a:hover {}
a:active {}</pre>
  
<p>If you want to set a CSS rule for all links in all states, you can style <code>a</code> directly. Just remember to place the generic rule first, to preserve the order: </p>

<pre><strong>a {}</strong>
a:link {}
a:visited {}
a:focus {}
a:hover {}
a:active {}</pre>
  
<p>This is useful if you are planning to replace the default underline with a bottom border, which is a common way to gain better visual control of the style.</p>

<h4 id="controllingdefaults">Controlling defaults</h4>

<p>By default, most browsers set all links to have an underline and focus state links to have an outline, as illustrated in Figure 22:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/browser-default-hover-examples.gif" alt="The default focus style for Opera 9, Firefox 2 and IE7" width="659" height="83" /></p>
<p class="comment">Figure 22: Left to right: the default focus styles for Opera 9, Firefox 2 and IE7.</p>

<p>If you are replacing these styles with something else, you can change or disable these defaults. </p>

<h5 id="underline">Underlining</h5>

<p>Underlining is set using the <a href="http://www.w3.org/TR/REC-CSS2/text.html#lining-striking-props">text-decoration</a> property:  </p>

<pre>a {
  text-decoration: underline;
}</pre>

<p>You can disable the underline by setting the property to <code>none</code>:</p>

<pre>a {
  text-decoration: none;
}</pre>

<p>Even if you are conserving the underline style, you may find it easier to disable <code>text-decoration</code> and use <code>border-bottom</code> to set a faux underline. We will go through this in the example below.</p>

<h5 id="outline">Outline</h5>

<p>The focus outline is controlled by the <a href="http://www.w3.org/TR/REC-CSS2/ui.html#dynamic-outlines">outline</a> property. Outline is much the same as border, but it does not take up space or cause the page to re-flow when it appears (note that it is not supported in IE7 and below either). The easiest way to control outline is with the shorthand property:</p>

<pre>a:focus {
  outline: thick solid #000;
}</pre>

<p>This example would be rendered something like Figure 23:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/thick-solid-black-outline.gif" alt="A link with a thick black border." width="216" height="85" /> </p>
<p class="comment">Figure 23: example rendering of a thick black outline. </p>

<p>If you are in doubt about what to do with the outline, simply leave the outline to the browser default. </p>

<h3 id="recreatingnetscape">Example: recreating the Netscape defaults </h3>

<p>As an easy example of link styles, let’s recreate the Netscape defaults of blue, purple and red. We’ll keep the underline, but extend the active state to use italics. We’ll increase the text size for the sake of the example and set the page to use a white background:</p>

<pre>body {
  background: #fff;
  color: #000;
  font-size: 2em;
}

a {
  text-decoration: underline;
}

a:link {
  color: #0000CC;
}

a:visited {
  color: #6D006D;
}

a:focus {
  color: #CC0000;
}

a:hover {
  color: #CC0000;
}
 
a:active {
  color: #CC0000;
  font-style: italic;
}</pre>

<p>This should produce something like Figure 24:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/lvfha-underline.gif" alt="Example rendering of the styles set above" width="409" height="27" /></p>
<p class="comment">Figure 24: recreating the Netscape defaults.</p>

<h4 id="fauxunderlines">Faux underlines using border-bottom</h4>

<p>Many designers have observed that underlining is a bit thick and cuts through descenders of lowercase type—that is, the line goes through the bottom of g, j, p, q and y. This is illustrated in figure 25:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/pygmy-underline.gif" alt="The word pygmy showing the underline cutting through the text" width="86" height="21" /></p>
<p class="comment">Figure 25: The underline cuts through lowercase type descenders.</p>

<p>Let’s assume that the person designing your site agrees, and would like the underline to be thinner and not touch the text. To carry out this common request, we’ll use a border instead of an underline so it looks like Figure 26: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/pygmy-border.gif" alt="The word pygmy showing a faux underline border, which does not cut through the text" width="86" height="23" /></p>
<p class="comment">Figure 26: Using a border instead of an underline gives nicer results.</p>

<p>First, disable the underline for all link states, then set a bottom-border to match the link colour for each state:</p>

<pre>body {
  background: #fff;
  color: #000;
  font-size: 2em;
  line-height: 2em; 
}

a {
  <strong>text-decoration: none;</strong>
}

a:link {
  color: #00c;
  <strong>border-bottom: 1px solid #00c;</strong>
}

a:visited {
  color: #6D006D;
  <strong>border-bottom: 1px solid #6D006D;</strong>
}

a:focus {
  color: #c00;
  <strong>border-bottom: 1px solid #c00;</strong>
}

a:hover {
  color: #c00;
  <strong>border-bottom: 1px solid #c00;</strong>
}

a:active {
  color: #c00;
  <strong>border-bottom: 1px solid #c00;</strong>
  font-style: italic;
}</pre>
  
<p>This should produce something like Figure 27:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/lvfha-border-bottom.gif" alt="Example rendering of the styles set above" width="409" height="31" /></p>
<p class="comment">Figure 27: The faux-underline in action.</p>

<p>If you do use the faux border method, be careful that you have sufficient <code>line-height</code> set to avoid the underline clashing with the next row of text. </p>

<h4 id="stylesthatdontrelyoncolor">Styles that don’t rely on colour </h4>

<p>Since the example so far relies purely on colour to distinguish four of the five link states, we should take the next step and change the bottom border for visited, focus and hover. Let’s give visited links a dotted border, and hovered and focused links a dashed border: </p>

<pre>body {
  background: #fff;
  color: #000;
  font-size: 2em;
}

a {
  text-decoration: none;
}

a:link {
  color: #00c;
  border-bottom: 1px solid #00c;
}

a:visited {
  color: #6D006D;
  border-bottom: 1px dotted #6D006D;
}

a:focus {
  color: #c00;
  border-bottom: 1px dashed #c00;
}

a:hover {
  color: #c00;
  border-bottom: 1px dashed #c00;
}

a:active {
  color: #c00;
  border-bottom: 1px solid #c00;
  font-style: italic;
}</pre>

<p>This should produce something like Figure 28:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/lvfha-multi-border-bottom.gif" alt="Example rendering showing how the borders differentiate the different link states" width="409" height="31" /> </p>
<p class="comment">Figure 28: Changing the border style for each link state.</p>

<p>Accepting focus and hover as equivalent styled states, this method means the link states are distinguished with more than colour. Even if you were to view these links in black and white, you could identify the different link states, as shown in Figure 29:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/lvfha-multi-border-all-black.gif" alt="The same example all in black, to emphasise the border differences" width="409" height="31" /> </p>
<p class="comment">Figure 29: The link states are now distinguishable even in black and white.</p>

<h3 id="iconsonlinks">Icons on links</h3>

<p>Some sites use icons and symbols to add information about their links. For example, some sites use an arrow to indicate that a link goes to an external site; or they use a tick to show the link has been visited.</p>

<p>These effects are simple to achieve with background images, as shown in Figure 30:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/links-with-icons.gif" alt="Example rendering of links with icons" width="374" height="31" /></p>
<p class="comment">Figure 30: An example of links with distinguishing icons.</p>

<p>To add an arrow icon to external links you could add the class &quot;external&quot; to the link tag: </p>

<pre>&lt;a href=&quot;http://example.com/&quot; <strong>class=&quot;external&quot;</strong>&gt;external link&lt;/a&gt;</pre>

<p>Then in your stylesheet, set a background image for that class—remembering to add padding to accommodate the image:</p>

<pre>a.external {
  background: #fff url(&quot;icon-external.gif&quot;) center right no-repeat;
  padding-right: 30px;
}</pre>

<p>This example would apply the icon to all instances of visited links, in all states. If you wanted to restrict the icon just to <em>unvisited</em> external links, you can combine classes and the link state pseudo classes in your selector:</p>

<pre><strong>a.external:link</strong> {
  background: #fff url(&quot;icon-external.gif&quot;) center right no-repeat;
  padding-right: 30px;
}</pre>

<p>Combining classes and states opens up a wide range of creative possibilities for your links. Remembering to check your colours, your only limitation from this point is creativity. </p>

<h2 id="navigationexample">Bringing it all together—a simple navigation menu</h2>

<p>To illustrate one way to bring lists and links together, the examples zip includes a <a href="stylinglistsexampleflyout.html">simple flyout navigation menu</a>, as seen in Figure 31. Flyout menus are a very common navigation system. </p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/flyout-list01.gif" alt="Screenshot of the flyout list example." width="600" height="203" /></p>
<p class="comment">Figure 31: Screenshot of the example flyout menu. </p>

<h2 id="summary">Summary</h2>

<p>A good grasp of styling lists and links is essential for web developers, as they are used everywhere. They are routinely combined to create site navigation; while a clear link style is critical for the ease of use of any site. Bad link styles can be seriously confusing for everyone and may even make a site unusable for some people. </p>

<h2 id="exercises">Exercise questions</h2>

<ul>
  <li>How do you choose between basic list styles, for example square bullets or Roman Numerals on an ordered list?</li>
  <li>What is an image sprite and why would you use one?</li>
  <li>Why is colour contrast important and how do you make sure your link colours are using suitable colours?</li>
  <li>What is the correct order for setting styles on the different link states?</li>
</ul>

<h2 id="furtherreading">Further reading</h2>

<ul>
  <li><a href="http://www.wcagsamurai.org/errata/errata.html">WCAG Samurai Errata for WCAG 1.0</a>, with specific reference to <a href="http://www.wcagsamurai.org/errata/errata.html#GL2">Guideline 2.
  Don&#x2019;t rely on colour alone</a>.</li>
  <li><a href="http://joeclark.org/book/sashay/serialization/Chapter09.html">Type and Colour (a chapter from <i>Building Accessible Websites</i>, by Joe Clark)</a> </li>
  <li><a href="http://juicystudio.com/article/highlighting-links.php">Juicy Studio: Highlighting Links</a></li>
  <li><a href="http://www.maxdesign.com.au/presentation/external/">Max Design—Simple, accessible external links</a></li>
  <li><a href="http://www.paciellogroup.com/resources/contrast-analyser.html">Resource Center—Contrast Analyser 2.0 (Paciello Group)</a></li>
  <li><a href="http://alistapart.com/articles/sprites">A List Apart: CSS Sprites: Image Slicing’s Kiss of Death</a></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/31-css-background-images/" rel="prev" title="link to the previous article in the series">Previous article—CSS background images</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/33-styling-tables/" rel="next" title="link to the next article in the series">Next article—Styling tables</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>
<img src="http://forum-test.oslo.osa/kirby/content/articles/160-32-styling-lists-and-links/benbuchanan.jpg" alt="Picture of the article author Ben Buchanan" class="right" />
<p>Ben Buchanan started creating web pages more than ten years ago, while completing a degree in everything but IT. He has worked in both the public (university) and private sectors; and worked on the redevelopment of major websites including <a href="http://www.theaustralian.com.au/">The Australian</a> and three generations of <a href="http://www.griffith.edu.au/">Griffith University</a>’s corporate website. He now works as Frontend Architect for <a href="http://www.newsdigitalmedia.com.au/">News Digital Media</a> and writes at <a href="http://weblog.200ok.com.au/">the 200ok weblog</a>.</p>
