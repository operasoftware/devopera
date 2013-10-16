Title: Styling XFN and rel-license links
----
Date: 2009-01-15 18:08:55
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

<h2>Introduction</h2>
<p>Before the official creation of Microformats, the <strong>X</strong>HTML <strong>F</strong>riends <strong>N</strong>etwork (XFN) was created by Eric Meyer, Matt Mullenweg, and Tantek &#199;elik in 2004 to define the human relationships between the authors of websites.</p>

<p>If you have a blogroll on your website or a list of &quot;friends&quot; on a social network, chances are you have real relationships with at least some of the people &quot;behind&quot; those links. Some might be close friends, colleagues, and family members, while others might be just people you have talked to couple of times.</p>

<p>XFN attempts to weave a web, if you will, of relationships between all of these links by creating a standardized method of defining relationships within the very HTML link itself.</p>

<p>To see how XFN works, let&#39;s take a look at a sample bit of HTML code:</p>

<pre><code>&lt;ul&gt;
  &lt;li&gt;&lt;a href=&quot;http://www.example.com/&quot; rel=&quot;friend met&quot;&gt;Friend&#39;s Site&lt;/a&gt;&lt;/li&gt;
 
  ...

&lt;/ul&gt;</code></pre>

<p>The <code>rel</code> attribute within an anchor element defines the relationship the HTML document has to the page that link points to. The relevant relationship here is <em>friendship</em>, which makes the statement that I&#39;m a friend of the author of the linked page.</p>

<p>Moreover, this is a friend that I&#39;ve actually met. Well, actually I am marking it as having met her anyway, even though she doesn&#39;t even know I exist ... we both order the same drink during lunch every other Tuesday at the local pub, and that&#39;s it! Anyhow, I digress...Now, in addition to friendship, XFN defines a variety of relationship types including colleague, acquaintance, neighbor, sweetheart, crush, and <a href="http://www.gmpg.org/xfn/11">other familial relationships</a>.</p>

<p>The XFN standard allows us to combine these and other types of relationship in pretty much any way we want. There are many blogs, social communities and tools that take advantage of XFN such as Cork&#39;d, Dopplr and Last FM. For more information about XFN and visualizing the connections, check out <a href="http://dev.opera.com/articles/view/xfn-encoding-extraction-and-visualizat/">Brian Suda&#39;s XFN article</a>.</p>

<p class="note">You can <a href="XFN_example.zip">download a complete set of example files that demonstrate the techniques illustrated in this article</a>.</p>

<h2>Basic example: some XFN-marked up links</h2>

<p>Suppose we have a basic blog post, with a blog-roll in the sidebar as shown in Figure 1:</p>



<img src="http://forum-test.oslo.osa/kirby/content/articles/237-styling-xfn-and-rellicense-links/01_xfn.png" alt="A blog post with a blogroll" />
<p class="comment">Figure 1. A blog post with a blogroll.</p>

We have marked up our blog-roll links to indicate the relationship we have to the authors of the respective Web sites (although we might wonder as to the wisdom of admitting to both a sweetheart and a crush simultaneously!):

<pre><code>&lt;ul&gt;
  &lt;li&gt;&lt;a href=&quot;http://anne.example.com/&quot; rel=&quot;sweetheart met&quot;&gt;anne&#39;s angst&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://www.example.com/&quot; rel=&quot;friend met&quot;&gt;behind the curtain&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://wanderlust.example.com/&quot; rel=&quot;colleague&quot;&gt;wanderlust&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;http://halfbrain.example.com/&quot; rel=&quot;crush muse&quot;&gt;half a brain&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>


<h2>Styling Relationships</h2>
<p>Now, we want to style these links so that these relationships are represented <em>visually</em>, to the user. How can we do this? </p>

<p>Note that there are two elements of a relationship captured by the XFN labels: the nature of the relationship - sweetheart, friend, and so on - and the more basic fact of whether we&#39;ve physically met the person.</p>

<p>The latter element is easier to style: a simple text marker such as an asterisk, *, next to those we&#39;ve met could be a sufficient clue. The <em>nature</em> of the relationship is more difficult to represent visually, particularly if we want to keep the indicator simple). Let&#39;s first tackle the latter.</p>

<p>One way to represent these relationships is through icons, which we can place next to the links that include an XFN relationship. Fortunately for us, a <a href="http://bartelme.at/journal/archive/microformats_icons">set of XFN icons</a> has been developed by Wolfgang Bartleme and Chris Messina for just this purpose, as shown in Figure 2 (also available at the above link).</p> 



<img src="http://forum-test.oslo.osa/kirby/content/articles/237-styling-xfn-and-rellicense-links/02_xfn.png" alt="A set of icons for XFN relationship links" />
<p class="comment">Figure 2. A set of icons for XFN relationship links.</p>

<p>Not only have they created general XFN icons, but they have also created individual icons for many of the relationships defined through XFN. They provide a potential standardized icon set for recognizing XFN-related data.</p>

<p>To start designing with these new graphics, we want to attach these icons to their respective links by applying CSS rules to the right attribute selectors. That is, we want to attach particular icons depending on the values of the <code>rel</code> attribute. For example, let&#39;s take a look at the first blog-roll link:</p>

<pre><code>&lt;a href=&quot;#&quot; rel=&quot;sweetheart met&quot;&gt;anne&#39;s angst&lt;/a&gt;</code></pre>

<p>The <code>rel</code> attribute contains two values: &quot;sweetheart&quot; and &quot;met&quot;. And there are two XFN icons corresponding to the sweetheart relationship: one for those sweethearts we haven&#39;t met and those we have.</p>

<p>Of course, here we want to display the latter icon. How to do that?</p>

<p>We want to first target those links that have &quot;sweetheart&quot; as a <code>rel</code> value. So, we could begin with the following selector:</p>

<pre><code>a[rel=&quot;sweetheart&quot;]</code></pre>

<p>This, however, would only target links where the value of the <code>rel</code> attribute exactly matches &quot;sweetheart&quot;. This would not pick out the above link, as the value is &quot;sweetheart met&quot; (not &quot;sweetheart&quot;).  Let&#39;s use the <code>~=</code> operator instead:</p>

<pre><code>a[rel~=&quot;sweetheart&quot;]</code></pre>

<p>This matches any set of words that that contains the string &quot;sweetheart&quot;.</p>

<p>However, our selector still isn&#39;t quite right yet. This selector would pick out any sweetheart, including those we haven&#39;t met. So, we want to make it a bit more specific.</p>

<pre><code>a[rel~=&quot;sweetheart&quot;][rel~=&quot;met&quot;]</code></pre>

<p>Now, this CSS selector only styles those links that we&#39;ve designated as a sweetheart that we&#39;ve met. Now that we&#39;ve pinpointed the right links, how do we style them? The most straightforward way is to attach an icon using the <code>:before </code>  or <code>:after </code>  pseudo-selectors. These can be used to easily generate content before or after an element.</p>

<pre><code>a[rel~=&quot;sweetheart&quot;][rel~=&quot;met&quot;]:after {
  content: url(../images/xfn-sweetheart-met.png);
}</code></pre>

<p>Here, we&#39;ve told the browser to place the image specified in the URL (the XFN icon) after the link. We&#39;ll want to add similar rules for all of the other possible XFN combinations that we&#39;d want to style:</p>

<pre><code>a[rel~=&quot;friend&quot;]:after {
    content: url(../images/xfn-friend-met.png);
}

a[rel~=&quot;friend&quot;][rel~=&quot;met&quot;]:after {
    content: url(../images/xfn-friend-met.png);
}

a[rel~=&quot;colleague&quot;]:after {
    content: url(../images/xfn-colleague.png);
}

a[rel~=&quot;colleague&quot;][rel~=&quot;met&quot;]:after {
    content: url(../images/xfn-colleague-met.png);
}

a[rel~=&quot;sweetheart&quot;]:after {
    content: url(../images/xfn-sweetheart.png);
}

a[rel~=&quot;sweetheart&quot;][rel~=&quot;met&quot;]:after {
    content: url(../images/xfn-sweetheart-met.png);
}

a[rel~=&quot;crush&quot;]:after {
    content: url(../images/xfn-sweetheart.png);
}

a[rel~=&quot;crush&quot;][rel~=&quot;met&quot;]:after {
    content: url(../images/xfn-crush-met.png);
}</code></pre>

<p>Note that there aren&#39;t actually any &quot;crush&quot; icons; I&#39;ll leave that icon creation as an exercise to the reader. In the meantime I&#39;m just using the sweetheart icons as a substitute.

When we&#39;re done, our page looks like Figure 3:</p>


<img src="http://forum-test.oslo.osa/kirby/content/articles/237-styling-xfn-and-rellicense-links/03_xfn.png" alt="Inserting XFN icons after links" />
<p class="comment">Figure 3. Inserting XFN icons after links.</p>

<p>Now all of the links in our blogroll (as well as a link within our blog post) sport XFN icons to indicate our relationship to the individuals referred in our listing. Note the check-mark in those icons representing those that we&#39;ve met.</p>
<p>While this method works for attaching these icons to our links, we may wish to have a bit more control over the positioning of the icons. For the more particular among us, we could set the icons as a background image, rather than as generated content after the element. Let&#39;s explore this technique in the next section.</p>

<h2>Introducing Rel-license</h2>

<p>Another microformat that defines the relationship of a link to a web page is the <strong>rel-license</strong> format. You are undoubtedly familiar with the varieties of license that apply to content on the web. From strictly copyrighted works to the looser GNU license and Creative Commons licenses, artists, photographers, programmers and authors have an array of options for displaying and protecting their work on the web.</p>

<p>Many web pages include links to the licenses pertaining to the work therein, and the rel-license format provides a standardized way to identify licenses within a web document. Not only can you then use CSS to style these links (as we demonstrate shortly), but third-party web applications can crawl the web for works containing particular licenses. Check out <a href="http://search.creativecommons.org/">http://search.creativecommons.org/</a> for a demonstration.</p>

<p>To style rel-license links, first, let&#39;s take a look at an HTML sample:</p>

<pre><code>This work is licensed under a &lt;a rel=&quot;license&quot; href=http://creativecommons.org/licenses/by/3.0/us/&gt;Creative Commons Attribution 3.0 United States License&lt;/a&gt;.</code></pre>

<p>This links to a version of the popular standard Creative Commons license. Like the XFN links, we will add a small icon next to the link representing the type of license the web page is protected under, in this case the Creative Commons logo.</p>

<p>Instead of using the <code>:after </code> pseudo-selector to generate the icon, we will set the icon as the link&#39;s background image as this approach has better browser support:</p>

<pre><code>a[rel=&quot;license&quot;] {
    padding-left: 16px;
    background: url(../images/cc_small.png) no-repeat left;
}</code></pre>

<p class="note">Note: The use of <code>:after </code> to generate content works in the Safari, Firefox and Opera browsers, but not in IE7.</p>

<p>We have again used the attribute selector to pick out links whose <code>rel</code> attribute has a particular value: here, &quot;license&quot;. We then take that link and add a bit of padding to it (to make room for the icon). Finally, we add the icon as our background image, set it to the left of the link and stop it from tiling.</p>

<p>When we&#39;re done, our link looks as seen in Figure 4:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/237-styling-xfn-and-rellicense-links/04_xfn.jpg" alt="Icon is inserted before link" />
<p class="comment">Figure 4. Icon is inserted before link.</p>

<p>Note how there is a bit more space between the link and the icon here than in the XFN examples. Using the <code>background-image</code> technique lets us control where the icon is with respect to the link.</p>

<h2>Summary</h2>
<p>The techniques discussed above provide you with a couple of good methods of spicing up your microformat links, adding usability to your documents via subtle visual indicators.</p>

