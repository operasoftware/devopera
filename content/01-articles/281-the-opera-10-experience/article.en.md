Title: The Opera 10 experience
----
Date: 2009-09-01 06:52:50
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

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/chris.jpg" alt="Picture of the main article author Chris Mills" />
<p class="comment" style="width:100px;">Chris Mills</p>
</div>

<p>There has been a lot of buzz around Opera 10, what with top notch standards support, a 100/100 score on the <a href="http://acid3.acidtests.org/">Acid 3 test</a>, a new UI, and alpha and beta previews leading up to the final release.</p>

<p>This article will cover the browser’s new features, but it will also focus heavily on the most exciting aspects of Opera 10’s web standards support. For this release we have created some new showcases to demonstrate how you can use these standards in your site.</p>

<p>Check out the new version — <a href="http://www.opera.com/browser/">download Opera 10 from our main site</a>.</p> 

<p>A big thank you goes out to all my team mates who contributed showcases or otherwise helped with the articles for this release. The article contents are as follows:</p>

<ul>
  <li><a href="#newui">New user interface</a></li>
  <li><a href="#dragonfly">New features in Opera Dragonfly</a></li>
  <li><a href="#watchout">Things to watch out for</a>
    <ul>
      <li><a href="#widgets">Opera Widget network security</a></li>
      <li><a href="#useragent">Changes in the user agent string</a></li>
    </ul>
  </li>
  <li><a href="#standardssupport">Standards support in Opera 10</a></li>
  <li><a href="#showcases">Showcases</a>
    <ul>
      <li><a href="#html5newspaper">The Daily Standard: read your newspaper online</a>
        <ul>
          <li><a href="#newswebfonts">Web Fonts in the news</a></li>
          <li><a href="#newscss3selectors">CSS 3 pseudo-classes</a></li>
        </ul>
      </li>
      <li><a href="#operatingsystem">Reinventing the operating system, open standards style</a>
        <ul>
          <li><a href="#contenteditable">contenteditable</a></li>
          <li><a href="#rgbahslafillopacity">RGBA/HSLA and fill-opacity</a></li>
          <li><a href="#operatingsystemcss3selectors">CSS 3 attribute selectors</a></li>
          <li><a href="#operatingsystembackgroundsize">CSS 3 background size</a></li>
          <li><a href="#operatingsystemoverflow">CSS 3 overflow-x/overflow-y</a></li>
          <li><a href="#operatingsystemui">The main UI elements: CSS and SVG</a></li>
          <li><a href="#jsdnd">Drag and drop with JavaScript</a></li>
          <li><a href="#waiaria">WAI-ARIA</a></li>
        </ul>
      </li>
      <li><a href="#selectorsapiexample">The Selectors API gets things done faster!</a></li>
      <li><a href="#svganimation">SVG animation with flying colours</a></li>
    </ul>
  </li>
  <li><a href="#summary">Summary</a></li>
</ul>


<h2 id="newui">New user interface</h2>

<p>As you can see below (Figure 1), we have new UI, courtesy of Opera Lead Designer and all-round English gent <a href="http://hicksdesign.co.uk/journal/">Jon Hicks</a>. Be sure to take some time to play with the refreshed panels, visual tabs and other UI refinements.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/opera10.png" alt="The new Opera 10 user interface" />
<p class="comment">Figure 1: The new Opera 10 user interface.</p>

<h2 id="dragonfly">New features in Opera Dragonfly</h2>

<p>We are working hard towards turning the Opera browser into a world class development platform, and our <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> debugging tool is key to this plan. Opera 10 comes with Opera Dragonfly alpha 4, which has had many bugs fixed and a number of enhancements added, including:</p>

<ul>
  <li>Improved UI and workflow: The UI is now more compact and intuitive, and we have also fixed one of the biggest Opera Dragonfly usability issues — Opera Dragonfly now selects the active tab or window in the browser automatically, cutting out a few steps required to start debugging</li>
  <li>Live CSS and DOM editing: Opera Dragonfly’s CSS editing abilities have been enhanced, and DOM editing is now supported allowing text nodes and DOM attributes to be edited, added or removed</li>
  <li>Improved error console: This lets you see, filter and log any errors in your scripts, pointing to the exact position where the error occurred</li>
  <li>Support for multiple languages: You can find a <a href="http://my.opera.com/dragonfly/blog/opera-dragonfly-alpha-3-update-2">list of the supported languages on the Opera Dragonfly Blog</a></li>
  <li>Enhanced breadcrumb trail: Allows you to navigate the DOM tree more effectively</li>
  <li>Network Inspector: This gives an overview of all the resources that were requested by Opera for the active debugging context. You can break down each request to show the request summary, raw request and the request and response headers</li>
  <li>Remote debugging: Using Opera Dragonfly you can debug pages on Opera Mobile 9.7 beta or any other browser using Presto 2.1 or later. To find out how, have a look at the <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">Remote debugging with Opera Dragonfly</a> article</li>
</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/dragonfly.png" alt="Opera Dragonfly in action" />
<p class="comment">Figure 2: Opera Dragonfly in action.</p>

<p>To use Opera Dragonfly (see Figure 2), simply load up Opera and choose Tools &gt; Advanced &gt; Developer Tools. You can find more info on the <a href="http://www.opera.com/dragonfly/">Opera Dragonfly product page</a>, and get the latest news from the <a href="http://my.opera.com/dragonfly/blog/">Opera Dragonfly Blog</a>.</p>

<h2 id="watchout">Things to watch out for</h2>

<h3 id="widgets">Opera Widget network security</h3>

<p>Opera widgets have an added security feature in Opera 10 — by default Widgets don’t have network access. You can enable network access by adding a <code>network=&quot;public&quot;</code> attribute to the <code>widget</code> element in your widget’s <code>config.xml</code> file, like so:</p>

<pre><code>&lt;widget network=&quot;public&quot;&gt;
  ...
&lt;/widget&gt;</code></pre>

<h3 id="useragent">Changes in the user agent string</h3>

<p>Opera 10 final has a new user agent (UA) string. On Mac, this looks as follows:</p>

<pre><code>Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00</code></pre>

<p>You’ll notice that Opera 10 identifies itself as Opera 9.8. This may seem odd, but it has to do with the fact that Opera is the first browser to make it to a double-digit version number — this causes problems with a number of old browser detection scripts, which check only for the first version number digit in the UA string. In these cases an Opera 10 user agent string is interpreted as Opera 1, which would break many sites. We have decided to work around this as shown above — note the real version number provided at the end of the UA string, for those who want to create more robust browser detection code. Read more about this in <a href="http://dev.opera.com/articles/view/opera-ua-string-changes/">Changes in Opera’s user agent string format</a>, by Andreas Bovens.</p>

<h2 id="standardssupport">Standards support in Opera 10</h2>

<p>Opera 10’s Presto 2.2 rendering engine supports all of the long-standing web standards that we’ve used to create web sites for a while now:</p>

<ul>
  <li>CSS 2.1</li>
  <li>HTML 4.01</li>
  <li>JavaScript</li>
  <li>DOM 2 (and part of DOM 3)</li>
  <li>SVG 1.1</li>
  <li>XML/XSLT 1.1</li>
</ul>

<p>But there’s more — Opera 10 also features support for many features of the cutting-edge web standards currently in development at the W3C:</p>

<ul>
  <li>CSS 3: Media queries, Web Fonts (Fonts spec), Color spec, Selectors spec</li>
  <li>HTML 5: Canvas, Web Forms 2.0, Server-sent events, contenteditable</li>
  <li>Selectors API</li>
</ul>

<p>You can find other information/examples covering Opera’s standards support at:</p>
<ul>
  <li><a href="http://www.opera.com/docs/specs/">Opera web specifications support</a></li>
  <li><a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/">Standards support in Opera Presto 2.2 and Opera 10 beta</a></li>
  <li><a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Opera Presto 2.1 — Web standards supported by Opera’s core</a></li>
</ul>

<p>Many of the features listed above were already supported in our Presto 2.1 Engine (Opera 9.6); in this article’s showcases we’ve included a lot of those features, but we’ll concentrate more heavily on the following new features in Opera 10’s Presto 2.2 engine:</p>

<ul>
  <li>Web Fonts (True Type, Open Type, SVG): A simple way of importing font files on your server into your CSS, so you can use custom fonts on your web pages. <a href="webfontsbasics.html">Read about Web Fonts basics</a></li>
  <li>Transparency through opacity, RGBA and HSLA: There are now three ways to control the alpha channel (transparency) of colours via CSS.  <a href="transparencybasics.html">Read about CSS transparency basics</a></li>
  <li>Selectors API: This API provides a much easier way to select DOM elements in JavaScript. <a href="selectorsapibasics.html">Read more about Selectors API basics</a></li>
</ul>

<p>The &quot;basics&quot; links above lead you to brief primers on these subjects, in case you need an overview of basic syntax before looking at our showcases.</p>

<p class="note" id="webfontsissue">Due to a bug in Opera 10, specifying different weights and styles for a single font-family name <a href="/articles/view/the-opera-10-experience/webfonts-problem.html">currently breaks</a> — only the last font specified (typically a bold/italic font) is applied, overriding other weights and styles of that font family. We are already working on a fix, which will be rolled out via our auto-update mechanism soon — in the meantime, you can avoid this issue by <a href="/articles/view/the-opera-10-experience/webfonts-workaround.html">defining bolds and italics as different font families</a>, and applying them explicitly on the elements you want to use them for. Of course, <strong>this workaround will continue working</strong> even after we&#39;ve fixed the problem in question.</p>

<h2 id="showcases">Showcases</h2>

<p>Now it’s time to start running through our showcases. You can sit back and enjoy the show by all means, but we’d like to invite you to get your hands dirty! Download the full code examples using the relevant links below, and start experimenting with them yourselves — let us know what you’ve built using the &quot;Discuss this article&quot; link at the bottom of the page!</p>

<h3 id="html5newspaper">The Daily Standard: read your newspaper online</h3>


<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/david.jpg" alt="Picture of David Storey" />
<p class="comment" style="width:100px;">David Storey</p>
</div>

<ul>
  <li>Author: David Storey</li>
  <li>Key features: Web Fonts, CSS 3 selectors, HTML 5 markup</li>
  <li><a href="newspaper.html">Live newspaper showcase</a></li>
  <li><a href="david-newspaper-example.zip">Newspaper code download</a></li>
</ul>

<p>First we’ll start off with David’s newspaper example. He’s created a classic newspaper layout, with two columns, a decorative image, and nice typography including Web Fonts, drop caps and small capped first lines at the start of articles.  See Figure 4 to get an idea of what it looks like.</p>

<p>The newspaper is perfectly accessible to disabled people using screenreaders, as it follows a logical structure of headings and content. For the actual structural markup, David has used HTML 5 elements and set them to <code>display: block;</code> in the CSS. For a detailed explanation of the elements David uses in this example (they are also used in some of the other showcases below), <a href="html5elementbasics.html">read my HTML element basics primer</a>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/html5newspaper.png" alt="our two column newspaper layout" />
<p class="comment">Figure 4: Our two column newspaper layout.</p>

<h4 id="newswebfonts">Web Fonts in the news</h4>

<p>In this example, we have three fonts being imported at the top of the CSS:</p>

<pre><code>@font-face {
  src: url(../fonts/DeutscheZierschrift.ttf) format(&quot;truetype&quot;);
  font-family: &quot;Zierschrift&quot;;
  font-style: normal;
}</code></pre>

<p>The fonts are then applied to the relevant elements using the <code>font-family</code> property in appropriate rules, like so:</p>

<pre><code>#page &gt; header h1 { 
    ... 
  <strong>font-family: &quot;Zierschrift&quot;, times, serif;</strong>
    ...
}</code></pre>

<p class="note">Note that you can find a lot more Web Fonts showcases in an accompanying article, <a href="http://dev.opera.com/articles/view/seven-web-fonts-showcases/">Seven Web Fonts showcases</a></p>

<h4 id="newscss3selectors">CSS 3 pseudo-classes</h4>

<p>Some of the CSS selectors in this example use <a href="http://www.w3.org/TR/css3-selectors/">CSS 3 pseudo-class selectors</a> to apply some of the rules. These are fairly intuitive, but let’s review some now for completeness’ sake:</p>

<pre><code>#page &gt; header p:first--of-type { margin-left: 10px; }</code></pre>

<p>This rule is saying &quot;apply this rule only to the first paragraph you find inside a header element inside the <code>#page div</code>.&quot;</p>

<pre><code>#page &gt; header p:nth--of-type(2) { font-weight: 800; }</code></pre>

<p>This means &quot;apply this rule to the second one of these elements.&quot;</p>

<pre><code>article section p:first--child { text-indent: 0; }</code></pre>

<p>This is saying &quot;apply this rule to the first child element of <code>article section p</code>&quot;.</p>

<h3 id="operatingsystem">Reinventing the operating system, open standards style!</h3>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/david.jpg" alt="Picture of David Storey" />
<p class="comment" style="width:100px;">David Storey</p>
</div>

<ul>
  <li>Author: David Storey</li>
  <li>Key features: HTML 5 markup, contenteditable, WAI-ARIA, CSS 3 generated content, CSS 3 attribute selectors, CSS 3 HSL(A)/RGB(A), CSS 3 <code>background-size</code>, CSS 3 <code>overflow-x</code>/<code>overflow-y</code></li>
  <li><a href="user-interface.html">Operating system UI live showcase</a></li>
  <li><a href="david-ui-example.zip">Operating system UI code download</a></li>
</ul>

<p>For his second trick, David has produced an environment of draggable, editable windows and menus, much like the operating systems we all know and love (or as some would say, tolerate). See Figure 5 for a screenshot.</p>

<p>This example moves away from Web Fonts, concentrating on colours and transparency, some other CSS 3 properties like attribute selectors and <code>background-size</code>, and adding WAI-ARIA to the mix. It is also more complex than previous showcases, using a fair chunk of JavaScript to achieve the dynamic movement, and SVG for imagery.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/operatingsystem.png" alt="operating system UI" />
<p class="comment">Figure 5: David’s operating system UI example.</p>

<h4 id="contenteditable">contenteditable</h4>

<p><a href="http://www.w3.org/TR/html5/editing.html#attr-contenteditable"><code>contenteditable</code></a> is a part of the HTML 5 spec — setting this attribute to <code>true</code> on an element means that you can now directly edit the text inside that element. Try changing the text inside the windows in this example!</p>

<h4 id="rgbahslafillopacity">RGBA/HSLA and fill-opacity/stop-opacity</h4>

<p>Four different methods are used for transparency in this showcase. For HTML elements <code>RGBA</code> and <code>HSLA</code> colour models are used.  These map to the <code>RGB</code> and <code>HSL</code> colour models already supported in Opera 9.5, but add a fourth value to specify the alpha channel. 1 denotes fully opaque and 0 denotes fully transparent. For more information on RGBA and HSLA read our article <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">HSL, RGB and Alpha Transparency</a>.</p>

<p>For the SVG background images, there are two CSS properties that are used to add transparency. The <code>fill-opacity</code> property is used to add opacity to the fill of an element, while <code>stop-opacity</code> is used in gradients to add opacity to the stop colour. In SVG these are separate properties, which predate the CSS 3 Color specification.</p>

<h4 id="operatingsystemcss3selectors">CSS 3 attribute selectors</h4>

<p>This example makes extensive use of CSS 3 attribute selectors. For example:</p>

<pre><code>ul[role=&quot;wairole:menubar&quot;&quot;] li {
  ...
}</code></pre>

<p>CSS 2.1 already allowed you to select an element with a certain attribute. CSS 3 goes further, allowing you to select for a specific attribute value, or even parts of attribute values. Find out more about CSS 3 attribute selectors by reading our article <a href="http://dev.opera.com/articles/view/css-3-attribute-selectors/">CSS 3 attribute selectors</a>, by Christopher Schmitt.</p>

<h4 id="operatingsystembackgroundsize">CSS 3 background-size</h4>

<p>The <code>&lt;html&gt;</code> element has the following rule applied to it:</p>

<pre><code>html {
    ...
  <strong>-o-background-size: 100% auto; /* set background image to fill width while respecting aspect ratio */</strong>
  <strong>background-size: 100% auto; /* remember to use standard version after prefix for when browsers support prefixless version */</strong>
    ... 
}</code></pre>

<p>The <code>background-size</code> property forces the background image to always maintain a certain size proportionate to the size of the element it is applied to, regardless of how it is resized. The two values relate to the lengths of the image along the X and Y axes respectively. In this case, the image will always be 100% of the width of the <code>&lt;html&gt;</code> element, and the <code>auto</code> value will cause the height to always remain the same size proportionate to the width. For more information about <code>background-size</code>, read our article <a href="http://dev.opera.com/articles/view/css-text-shadows-and-background-sizing/">CSS text shadows and background sizing</a>.</p>

<p class="note">Note that Opera currently supports this property using the vendor prefix <code>-o-background-size</code> hence it being included in this example.</p>

<h4 id="operatingsystemoverflow">CSS 3 overflow-x/overflow-y</h4>

<p><code>overflow</code> has been a part of the CSS spec for a while, but CSS 3 has introduced the ability to set overflow for just the X or Y direction. In David’s example, the content areas of the windows have been set to <code>scroll</code> when the text overflows, so that a scrollbar will appear when the text reaches the bottom of its container:</p>

<pre><code>[role=&quot;wairole:application&quot;&quot;] .content {
  ...
  overflow-y: scroll;
}</code></pre>

<h4 id="operatingsystemui">The main UI elements: CSS and SVG</h4>

<p>As you’ll see from playing with the example, the two main areas of functionality are the application menu at the top of the example, and the two draggable, editable windows.</p>

<p>The menu is a typical dropdown menu, and functions using just CSS and SVG; no JavaScript required. Most of the menu items are single links, with rollover effects created using CSS 3 attribute selectors and SVG for all the images.</p>

<p>The UI windows work in much the same way — the only difference is <code>contenteditable</code> being used to make the contents directly editable, and JavaScript being used for drag-and-drop, which is explained below. SVG is used for all the images, including the Mac-style gel buttons.</p>

<p>David uses CSS 3 generated content for the gel buttons. In the HTML, the buttons are given sensible text labels so they are accessible:</p>

<pre><code>&lt;button id=&quot;close&quot;&gt;Close&lt;/button&gt;
&lt;button id=&quot;min&quot;&gt;Minimise&lt;/button&gt;
&lt;button id=&quot;max&quot;&gt;Maximise&lt;/button&gt;</code></pre>

<p>In the CSS, <code>content: &quot;&quot;</code> is then set on these buttons to remove the text, and SVG background images are added to replace the text and make it look nice:</p>     	    

<pre><code>#window-controls button {
    ...
  content:  &quot;&quot;;
    ...  
}

#close {
  background-image: url(&quot;unfocused-gem.svgz&quot;);
  left:  5px;
}

/* (the rules for the other buttons then follow...) */</code></pre>

<p>Note that generated content can be used on everything, not just <code>:before </code> and <code>:after </code>.</p>

<p class="note"><code>text-overflow: ellipsis;</code> is also used, so that if the title bar text gets longer than its container, it will automatically be truncated with an ellipsis at the end, rather than falling off the edge untidily.</p>

<h4 id="jsdnd">Drag-and-drop with JavaScript</h4>

<p>The JavaScript for dragging and dropping the windows is adapted from a <code>dragDrop</code> class written by <a href="http://quirksmode.org/">Peter-Paul Koch</a>. You can find a <a href="http://www.quirksmode.org/js/dragdrop.html">detailed explanation of how the <code>dragDrop</code> class works</a> on Peter-Paul Koch’s site. For his example, David has also added WAI-ARIA support to the code.</p>

<h4 id="waiaria">WAI-ARIA</h4>

<p><a href="http://www.w3.org/TR/wai-aria/"><abbr title="Web Accessibility Initiative Accessible Rich Internet Applications">WAI-ARIA</abbr></a> is a specification to provide a means of describing roles, states, and properties of web application features such as navigation menus and editable live regions so that they are recognisable and usable by assistive technology users. If you are interested in finding out more, check out the <a href="http://dev.opera.com/articles/tags/wai-aria/">WAI-ARIA tutorials available on Dev.Opera</a>.</p>

<p>Back to our showcase! First of all, the title bars of the windows are set as <em>drag handles</em> (the part that you click and hold the mouse on top of to drag them); they are identified using the WAI-ARIA <code>role</code> attribute — <code>role=&quot;wairole:heading&quot;&quot;</code>:</p>

<pre><code>var dragHandle = element.querySelector(&#39;header[role=&quot;wairole:heading&quot;&quot;]&#39;) </code></pre>

<p>When you start dragging a window, the <code>aria-grabbed</code> attribute is set to <code>true</code>, which indicates that this object is currently being dragged:</p>

<pre><code>startDrag: function (obj) {
  if (dragDrop.draggedObject)
    dragDrop.releaseElement();
  dragDrop.startX = obj.offsetLeft;
  dragDrop.startY = obj.offsetTop;
  dragDrop.draggedObject = obj;
  <strong>obj.setAttribute(&#39;aria-grabbed&#39;, &#39;true&#39;);</strong>
},</code></pre>

<p>Finally, when you stop dragging the window, <code>aria-grabbed</code> is set back to <code>false</code>:</p>

<pre><code>releaseElement: function() {
  removeEventListener(&#39;mousemove&#39;,dragDrop.dragMouse, false);
  removeEventListener(&#39;mouseup&#39;,dragDrop.releaseElement, false);
  removeEventListener(&#39;keypress&#39;,dragDrop.dragKeys, false);
  removeEventListener(&#39;keypress&#39;,dragDrop.switchKeyEvents, false);
  removeEventListener(&#39;keydown&#39;,dragDrop.dragKeys);
  <strong>dragDrop.draggedObject.setAttribute(&#39;aria-grabbed&#39;, &#39;false&#39;);</strong>
  dragDrop.draggedObject = null;
},</code></pre>


<p>This example also uses a basic Selectors API query in the initialization function (<a href="http://dev.opera.com/articles/view/the-opera-10-experience/#standardssupport">Selector API basics</a> are explained earlier on, and there is more about them in the next showcase):</p>

<pre><code>var dragApps = document.querySelectorAll(&#39;div[draggable=&quot;true&quot;]&#39;)</code></pre>

<h3 id="selectorsapiexample">The Selectors API gets things done faster!</h3>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/david.jpg" alt="Picture of David Storey" />
<p class="comment" style="width:100px;">David Storey</p>
</div>

<ul>
  <li>Author: David Storey</li>
  <li>Key features: Selectors API</li>
  <li><a href="selectors-api.html">Selectors API live showcase</a></li>
  <li><a href="david-selectors-api-example.zip">Selectors API code download</a></li>
</ul>

<p>David’s third example deals extensively with the W3C Selectors API spec, which aims to make element selection quicker and more painless in a way that will make more sense to non-JavaScript experts, similar to how libraries like <a href="http://jquery.com/">jQuery</a> work. This showcase presents a series of examples showing Selectors API usage compared to the standard DOM equivalents. The example looks like Figure 6.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/selectorsapi.png" alt="Selectors API showcase" />
<p class="comment">Figure 6: Selectors API showcase.</p>

<p>In each box you will find some sample text and two buttons — one that applies a <code>background-color</code> via the selectors API, and one that applies a different <code>background-color</code> via the equivalent standard DOM method. I don’t need to add any more explanation here, as there are plenty of details included on the <a href="selectors-api.html">live Selectors API example page itself</a>. Check it out!</p>

<h3 id="svganimation">SVG animation with flying colours</h3>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/david.jpg" alt="Picture of David Storey" />
<p class="comment" style="width:100px;">David Storey</p>
</div>

<ul>
  <li>Author: David Storey</li>
  <li>Key features: SVG, SMIL</li>
  <li><a href="junction-type-specimen-animated.svgz">SVG animation live showcase</a></li>
  <li><a href="david-SVG-type-specimen.zip">SVG animation code download</a></li>
</ul>

<p>In David’s fourth and final showcase (see Figure 7) he presents a really neat SVG animation using Web Fonts and SMIL — check it out!  The type specimen is made up of a number of rectangles (<code>&lt;rect&gt;</code> in SVG), which are rotated into position using a rotate transform.  An element can be rotated in SVG using <code>transform=&quot;rotate(<em>angle x y</em>)&quot;</code>, where angle is the value of the angle that the element is rotated through, and the x and y values are the coordinates of the centre point that the element is rotated around.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/281-the-opera-10-experience/svganimation.png" alt="SVG animation showcase" />
<p class="comment">Figure 7: SVG animation showcase.</p>

<p>Three kinds of animation are used via SMIL elements: <code>set</code>, <code>animate</code> and <code>animateTransform</code>.  The <code>set</code> element is a one-time animation, which changes state from the <code>from</code> state to the <code>to</code> state without any progression.  This is used to set a shape from visible to invisible, for example. It is used in the showcase like so:</p>

<pre><code>&lt;set attributeType=&quot;CSS&quot; attributeName=&quot;visibility&quot;
  from=&quot;visible&quot; to=&quot;hidden&quot; begin=&quot;0s&quot; dur=&quot;1s&quot;/&gt;</code></pre>

<p>To animate an element progressively from one value through to another, the <code>animate</code> element is used:</p>

<pre><code>&lt;animate attributeType=&quot;XML&quot; attributeName=&quot;width&quot;
  from=&quot;0&quot; to=&quot;600&quot; dur=&quot;1.5s&quot; begin=&quot;1s&quot;/&gt;</code></pre>

<p>In this example, the burnt orange rectangle that sits behind the lower case text animates from a width of 0 to 600. The animation starts after one second and lasts for 1.5 seconds.</p>

<p>The final type of animation, <code>animateTransform</code>, is used to animate the <code>transform</code> attribute of the circular numbers. This works in much the same way as the <code>animate</code> element, but it also includes a <code>type</code> attribute to specify the type of transform that needs to be animated:</p>

<pre><code>&lt;animateTransform attributeName=&quot;transform&quot; attributeType=&quot;XML&quot; type=&quot;rotate&quot;
  from=&quot;0 290 472&quot; to=&quot;300 290 472&quot; dur=&quot;4s&quot; begin=&quot;2s&quot; fill=&quot;freeze&quot;/&gt;</code></pre>

<p>This rotates the <code>textPath</code> element through 300 degrees. The <code>fill</code> attribute is set to <code>freeze</code>, which means that at the end of the animation it will freeze in that position rather than reverting to its original position.</p>

<h2 id="summary">Summary</h2>

<p>And that rounds off our look at the new Opera 10 release — we hope the showcases have given you some inspiration and food for thought to help you create your own amazing new examples. As always, don’t hesitate to leave comments and give us any feedback you may have.</p>

<p class="note">For more about web fonts and RGBA/HSLA, see the <a href="http://dev.opera.com/articles/view/seven-web-fonts-showcases/">Seven Web Fonts showcases</a> and <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">Color in Opera 10 — HSL, RGB and Alpha Transparency</a> articles.</p>
