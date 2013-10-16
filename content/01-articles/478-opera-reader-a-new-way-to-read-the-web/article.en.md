Title: Opera Reader: a new way to read the Web!
----
Date: 2011-10-19 09:30:40
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introduction</h2>

<p>Around 2000 years ago, the Romans developed the <a href="http://en.wikipedia.org/wiki/Codex">codex</a>. Different
from <a href="http://en.wikipedia.org/wiki/Scroll">scrolls</a> &#x2014; the previously accepted literary format &#x2014; the
codex had pages that were bound together into what we today call books.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/478-opera-reader-a-new-way-to-read-the-web/codex.jpg" alt="a codex" /></p>
  <p class="comment">Figure 1: A codex. Image by <a href="http://www.flickr.com/photos/friarsbalsam/4608707190/">Friar&#39;s Balsam</a>.</p>

<p>The codex gradually replaced scrolls, and by the 5th century scrolls were no longer used in Western cultures. There are good reasons for this: the codex is compact, sturdy, and you can quickly go to the start, end, or anywhere in between. They are a lot more portable and easier to manage than scrolls. As such, the codex was the &quot;killer app&quot; of the 5th century.</p>

<p>Since then, computers have taken a step backwards, with software &#x2014; most notably web pages &#x2014; adopting the scroll metaphor and offering scrollbars for navigation up and down our content. This is an easy solution for the software, as it allows all content to be accessible without needing to worry about pagination, but it leads to chopped lines of text, and doesn&#39;t work so well on mice-less devices. And, mankind misses the beauty of a nicely laid out page.</p>

<p>We&#39;ve more recently seen a step in the right direction, with a proliferation of e-reader devices (such as the Amazon Kindle) with &quot;next page&quot; and &quot;previous page&quot; buttons allowing users to read e-books in a more &quot;book like&quot; fashion. But the Kindle is a walled garden: wouldn&#39;t it be beneficial to have an open technology that allows us to present any content we choose in this manner?</p>

<p>To this end, we&#39;d like to present <strong>native pages</strong> — a proof of concept (codenamed <strong>Opera Reader</strong>) that builds on top of CSS to allow us to split content into pages that can be &quot;turned&quot; in a natural manner through gestures rather than point and click, control the positioning/floating of figures in multi-column layouts more precisely and provide a consistent navigation system for such content that is independent of your documents. The new CSS features that enable this are detailed in the <a href="http://dev.w3.org/csswg/css3-gcpm/">CSS Generated Content for Paged Media</a> module. In this article, we&#39;ll show you how you can make standard web content Opera-Reader compatible with just a few lines of CSS.</p>

<p>In short, Opera Reader is the codex for the Web. We think it has the power to dramatically improve the way in which web content is consumed, by presenting it in a much more compelling fashion. Read on, and let us know what you think.</p>

<h2 id="getting-started">Getting started</h2>

<p>Opera Reader currently exists inside special versions of the Opera Browser. First up, get an Opera reader build from <a href="http://labs.opera.com">Opera Labs</a>. The difference between these builds and the normal Opera browser is that they support the CSS described above &#x2014; the resulting paginated web content provides a much more compelling reading experience, especially on touch screens such as tablets.</p>

<p>After downloading Opera Reader, you need to change two settings to make it work as described in this document. First of all, type <em>opera:config</em> in the URL bar. Next, search for <em>scroll</em> in the &quot;Quick find&quot; field. Check the &quot;Scroll is Pan&quot; and &quot;Smooth Scrolling&quot; checkboxes. You do not need to restart Opera after doing so.</p>

<p>Next, you&#39;ll need some examples to view in Opera Reader, so you can see how it works. We&#39;d first like to direct you to the <a href="http://people.opera.com/cmills/orarticle/">Opera Reader tutorial</a> example — this is pretty much the same article that you are currently reading, except presented in a different set of styles, with technologies such as Media queries and Viewport used to make the design adaptive, and Opera Reader CSS added into the mix. Try it in an Opera Reader build, and in other different browsers, to see how the experience differs!</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/478-opera-reader-a-new-way-to-read-the-web/example-site1.jpg" alt="Our example Opera Reader tutorial site" /></p>
  <p class="comment">Figure 2: Our example Opera Reader tutorial site</p>

<p>You&#39;ll be able to control the page browsing via swiping the page in different directions on touch screen devices, using the cursor keys on a device with a keyboard, and by activating the on-screen control buttons in any way you choose to do so. You should also check out Håkon Wium Lie&#39;s <a href="http://people.opera.com/howcome/2011/reader/">Simple Opera Reader example</a>, which includes links to a whole load more demos.</p>

<p class="note">Note: this technology is at an early stage, so you may well come across bugs. Please report them to us as you find them!</p>

<h2>The basic premise of Opera Reader</h2>

<p>Opera Reader works via some specific CSS constructs that turn your usual endlessly scrolling single page of content into multiple pages that can be navigated between. They are currently implemented using the <code>-o-</code> vendor prefix, so browsers that don&#39;t support the technology will just ignore them completely &#x2014; no harm done. For example, you can specify a block of rules that will only be applied to Opera Reader builds using a media query containing a special <code>-o-paged</code> media type:

<pre><code>@media -o-paged {
  /* specific Opera Reader rules */  
}</code></pre>

<p>With that covered, let&#39;s now start walking through the special Opera Reader parts of the code contained inside our <a href="http://people.opera.com/cmills/orarticle/">Opera Reader tutorial</a> example.</p>

<h2 id="overflow">Splitting content into pages</h2>

<p>To split content into pages, we need to specify a fixed height for our document, and direction for the pagination to flow in:</p>

<pre><code>@media -o-paged {
  html { 
    height: 100%;
    overflow: -o-paged-x;
  }
}</code></pre>

<p>Here we specify that the height of the <code>&lt;html&gt;</code> element should be constrained to 100%, which is the height of the window, and that the overflow should go into extra pages along the x axis (i.e., horizontally). This is all that is needed to break the document up into paged media!</p>

<p class="note">The most common reason for the pagination not working is if you forget to constrain the height. The height can be constrained by setting the <code>height</code> property, as above, or by setting <code>position: absolute;</code> on the element in question.</p>

<p>The four custom values that Opera Reader provides for <code>overflow</code> are:</p>

<ul>
  <li><code>-o-paged-x</code></li>
  <li><code>-o-paged-y</code></li>
  <li><code>-o-paged-x-controls</code></li>
  <li><code>-o-paged-y-controls</code></li>
</ul>

<p>These are fairly self-explanatory — <code>x</code> and <code>y</code> indicate the direction you need to move in to get to the overflow pages, and including the <code>controls</code> keyword makes Opera Reader display default controls that can be used to control your movement through the pages without a touch screen, plus a page counter. You can customise the Opera Reader controls by designing your own buttons and wiring them up using the simple <a href="#api">Opera Reader API, discussed later</a> on.</p> 

<h2>Styling our pages</h2>

<p>One you&#39;ve set the content up to paginate, as discussed above, there isn&#39;t really much more to it, beyond what you already know from your experience of styling web pages normally. Ok, there are a few more things, but these are easy to understand &#x2014; let&#39;s explore our main example in more detail.</p>

<h3>Adding padding to our pages</h3>

<p>Books typically have some space between the text and the edges of the page. We can add some space in any way that would make sense, for example, we&#39;ve done this to make the content sit nicely in portrait mode:</p>

<pre><code>@media -o-paged {
  html {
    overflow: -o-paged-x;
    height: 94%;
    padding-top: 3%;
  }
}</code></pre>

<p>Then we&#39;ve made the content a bit shorter in the narrower layout so that it still fits ok:</p>

<pre><code>@media -o-paged and (min-width:800px) {  
  html {
    height: 88%;
  }
}</code></pre>

<h3>Persisting elements across pages</h3>

<p>We have already looked at how to split our content into pages, however in some cases you may want part of the page to persist across all pages — a header or sidebar perhaps. To do this, we set the <code>overflow: -o-paged-x;</code> property just on the part of the content we want to be paged, for example:</p> 

<pre><code>article#content { 
  position: absolute;
  top: 12em;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: -o-paged-x-controls;
}</code></pre>

<p>In our example&#39;s case, this didn&#39;t work very well &#x2014; the header and the sidebar are quite big, which means that there isn&#39;t much space for the paginated part. In our case it was better to just let the whole area paginate and not persist anything across pages.</p>

<p class="note">By this token, you can paginate pretty much any part of the document you want, leaving the rest to persist.</p>

<h3>Multi-column layout</h3>

<p>Part of the reason why browsers cling to scrollbars is that the alternative &#x2014; pagination &#x2014; is hard. There is no optimal formula that guarantees good-looking pages. However, authors can at least do a few things to help.</p>

<p>The <a href="http://www.w3.org/TR/css3-multicol">CSS3 Multi-column Layout Module</a> really comes into its own with Opera Reader content. When viewed in an Opera Reader build, the main content of the article is displayed in multiple columns at an optimal width, rather than a set number of columns. The main content column shrinks and grows with the screen width, therefore, depending on the width of the browser, the text will display in any number of columns between 1 and 3. We&#39;ve put a maximum width of 1300px on the <code>&lt;body&gt;</code>, so that the layout doesn&#39;t start to look too stretched on really wide monitors. The column ruleset looks like so (multiple vendor prefixes removed for brevity):</p>

<pre><code>@media -o-paged {

   ...

  .cols {
    columns: 25em;
    column-gap: 3em;
    column-rule: thin solid black;
    column-fill: balance;
  }
}</code></pre>

<p>We&#39;ve also set a column gap of 3ems, put a rule between each column, and chosen <code>column-fill: balance;</code> to make the columns lengths equal where possible. Things tend to look neater this way.</p>

<p>We can also ensure that page breaks occur in the right place by indicating where page breaks are permissible and where they aren&#39;t, using <code>break-before</code>, <code>break-after</code> and <code>break-inside</code>. For example, we can easily express that page breaks should be avoided right after a heading, which makes sense:</p>

<pre><code>article h2, article h3 {
    break-after: avoid;
}</code></pre>

<h3>Pagination hints</h3>

<p>The <code>widows</code> and <code>orphan</code> properties set the minimum number of lines that must be left at the top/bottom of a page. By setting them to a low number, pagination becomes easier. For example:</p>

<pre><code>html { widows: 1; orphans: 1 }</code></pre>

<h3 id="float">Figures: floats and column spans</h3>

<p>It&#39;s easy to add images and figures to a document. For example, our figures are marked up like this:</p>

<pre><code>&lt;figure class=&quot;two-col&quot;&gt;
  &lt;p&gt;&lt;img src=&quot;images/codex.jpg&quot;
               alt=&quot;a codex&quot;&gt;&lt;/p&gt;
  &lt;figcaption&gt;caption here&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

<p>However, traditionally floats haven&#39;t given us much control over where the images sit in the text, and CSS3 multi-col only allows us to span across one column, or all of them. To improve this, we&#39;ve added some custom values for <code>float</code> and <code>column-span</code>:</p>

<pre><code> figure.two-col {
  width: auto;
  margin: 0;
  column-span: -o-integer(2);
  float: -o-top-next-page;
}
      
figure.two-col img {
  width: 100%;     
}</code></pre>

<p><code>-o-integer</code> allows us to specify an maximum number of columns for the image to span across, in this case two. If <code>column-span</code> is set to 3 and there are only 2 columns, spanning will occur across both columns.</p>

<p>The <code>float</code> property supports the following new values:</p>

<ul>
  <li><code>-o-top</code>/<code>-o-bottom</code>: float to the top/bottom of the natural column.</li>
  <li><code>-o-top-corner</code>/<code>-o-bottom-corner</code>: float to the top/bottom corner of last column.</li>
  <li><code>-o-top-next-page</code>/<code>-o-bottom-next-page</code>: float to the top/bottom of the first column of the next page.</li>
  <li><code>-o-top-corner-next-page</code>/<code>-o-bottom-corner-next-page</code>: float to the top/bottom of the last column of the next page.</li>
</ul>

<p class="note">Note: Full-page ads/images can be achieved by floating an element to the top/bottom, making it span across all columns, and setting the height/width to 100%.</p>

<h4>Moving figures into the padding area</h4>

<p>Sometimes, in newspaper or magazine layouts, images bleed into the edges of pages. This is achieved in our example with negative
margins — for example we&#39;ve set padding on the text like this:</p>

<pre><code>html { 
  overflow: -o-paged-x;
  height: 100%;
  box-sizing: border-box;
  padding: 5%;
}</code></pre>

<p>Then moved some of our images into the padding area with negative margins:</p>

<pre><code>img.bleed {
  margin: -6% -6% auto -6%; 
  width: 112%;
}</code></pre>

<h2 id="navigation">Specifying other navigation options</h2>

<p>In the paged mode used by Opera Reader, we can specify navigation to other documents appearing to the top, right, bottom and left of the current document. To indicate which documents are reached by navigating in different directions, a new at-rule has been added, which can contain four custom properties. Some of these properties work in conjunction with <code>&lt;link&gt;</code> elements in the <code>&lt;head&gt;</code>, with specific <code>rel</code> values.</p>

<p>for a start, let&#39;s consider the following <code>&lt;link&gt;</code> elements:</p>

<pre><code>&lt;link rel=&quot;home&quot; href=&quot;http://dev.opera.com&quot;&gt;
&lt;link rel=&quot;previous&quot;
           href=&quot;http://people.opera.com/cmills/orarticle/&quot;&gt;</code></pre>

<p>The new at-rule — <code>@-o-navigation</code> — can look something like this:</p>

<pre><code>@-o-navigation {
  nav-up: -o-url-doc(/);
  nav-down: url(a1.html);
  nav-right: -o-link-rel(next);
  nav-left: -o-go(back);          
}</code></pre>

<p>The four new properties are pretty self explanatory — <code>nav-up</code> is what you want to navigate to when the page is moved up, and so on. Let&#39;s now talk through the four different values that the properties can take:</p>

<ul>
  <li><code>-o-url-doc(<em>path</em>)</code>: The path specified is a relative path to the HTML document, for example <code>/</code> to go to the root document.</li>
  <li><code>url(<em>path</em>)</code>: The path specified is a standard URL to a file, and can be of any type that <code>url()</code> normally accepts (for example in <code>background-image: url();</code>).</li>
  <li><code>-o-link-rel(<em>value</em>)</code>: The value is a <code>rel</code> attribute value from a <code>&lt;link&gt;</code> element. For example, when you specify <code>next</code>, the browser looks for a <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code>, and then takes its <code>href</code> value as the document to navigate to.</li>
  <li><code>-o-go(<em>value</em>)</code>: in this case, the value can be <code>forward</code> or <code>back</code> — these instruct the browser to go forward or back in its history.</li>
</ul>

<h2 id="api">Scripted paging</h2>

<p>As described earlier, Opera Reader provides a basic set of controls for navigating the pages when you specify the <code>controls</code> keyword, e.g. <code>-o-paged-x-controls</code>. If you don&#39;t specify the default controls, you can create your own navigation controls and wire them up using the Opera Reader API. Let&#39;s look at how to do this in more detail.</p>

<p>To this end, we have created a custom navigation menu that is hidden by default (using <code>display: none;</code>), and only displayed when in paged media mode. It looks like so:</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/478-opera-reader-a-new-way-to-read-the-web/custom.jpg" alt="our custom page navigation menu" /></p>
  <p class="comment">Figure 3: Our custom page navigation menu.</p>

<p>The HTML basis for this is three simple links:</p>

<pre><code>&lt;a href=&quot;#&quot; id=&quot;prev&quot; onclick=&quot;prevpage()&quot;&gt;
   Previous&lt;/a&gt;	
&lt;div id=&quot;count&quot;&gt;&lt;/div&gt;	
&lt;a href=&quot;#&quot; id=&quot;next&quot; onclick=&quot;nextpage()&quot;&gt;
   Next&lt;/a&gt;</code></pre>

<p>So how do we wire this up? The JavaScript looks like so:</p>

<pre><code>function update() {
  var x = document.getElementById(&#39;count&#39;);
  var paged = document.getElementById(&#39;main&#39;);
  x.innerHTML = paged.currentPage+1 + &quot; of &quot;
     + paged.pageCount;
  paged.onpagechange = updateEvent;
}

function nextpage() {
  var paged = document.getElementById(&#39;main&#39;);
  paged.currentPage ++;
  update();
}

function prevpage() {
  var paged = document.getElementById(&#39;main&#39;);
  paged.currentPage --;
  update();
}

function updateEvent(e) {
  var x = document.getElementById(&#39;count&#39;);
  x.innerHTML = e.currentPage+1 + &quot; of &quot;
    + e.pageCount;
}</code></pre>

<p>As you can see this is pretty simple: the API exposes simple properties of the paged content &#x2014; the element assigned <code>overflow: -o-paged-*</code> &#x2014; which in the case of our <a href="http://people.opera.com/cmills/orarticle/">Opera Reader tutorial</a> is the <code>&lt;html&gt;</code> element: it has an ID of <code>main</code>. This allows us to move forwards (<code>paged.currentPage ++</code>) and backwards (<code>paged.currentPage --</code>), and access current page and total page count information (<code>currentPage</code> and <code>pageCount</code>). A simple event — <code>onpagechange</code> is combined with a custom function to update the information each time the page is changed.</p>

<h2>Summary</h2>

<p>and so ends our introduction to Opera Reader, and paged web media. Please let us know what you think, and share your examples with us: we are still working on perfecting the features of this exciting new technology, and exploring the limits of what is achievable!</p>/code/code/code</p>
