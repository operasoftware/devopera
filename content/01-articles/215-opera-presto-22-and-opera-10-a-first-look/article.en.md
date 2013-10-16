Title: Opera Presto 2.2 and Opera 10 — a first look
----
Date: 2008-12-04 11:53:34
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. Download the <a href="http://www.opera.com/browser/">latest version of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>.</p> 
</div>  

<h2>Introduction</h2>

<p>As 2008 draws to a close, here at Opera we are excited to announce an early Christmas present for you all—a first look at our new, improved Opera Presto 2.2 rendering engine! We are very proud of our developer team&#39;s achievements—the new engine features improvements across the board in terms of speed, stability, support for Web standards, and more.</p>

<p>This article covers all the most significant improvements since the last version, 2.1, including some examples/use cases. And the best news is that you can start playing with these features now—Opera Presto 2.2 is available in the newly-released <a href="http://www.opera.com/browser/next/">alpha version of Opera 10</a>, so download it and start experimenting. We&#39;d love to see what you come up with using these new technologies, so let us know in the comment section.</p>

<p class="note">Note that this alpha release is not intended to show off the full feature set of Opera 10—that will be a while off. It is the first public release of the Opera Presto 2.2 rendering engine, which will be present in Opera 10, made available so you can start trying out some of the new Web technology support. <strong>You need to use the Opera 10 alpha build to access the below examples, otherwise they won&#39;t work.</strong></p>

<p>The topics covered below are as follows:</p>

<ul>
  <li><a href="#webfonts">Web Fonts — Web typography just got easier</a></li>
  <li><a href="#opacity">Opacity through RGBA and HSLA</a></li>
  <li><a href="#selectorsapi">Selectors API</a></li>
  <li><a href="#svg">SVG improvements</a>
    <ul>
      <li><a href="#fps">FPS setting in SVG</a></li>
      <li><a href="#webfontssvg">Web Fonts in SVG</a></li>
    </ul>
  </li>
  <li><a href="#dragonfly">Opera Dragonfly evolved</a></li>
  <li><a href="#acid3">Acid3 test — 100/100!</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>

<p>You can also <a href="Presto2-2code.zip">download the code examples</a> that go along with this article.</p>

<p class="note">Acknowledgements: Credit must be given to some of my colleagues for providing some great examples for this article: Lachlan Hunt for the selectors API example, Andreas Bovens for the Web Fonts example and David Vest and Erik Dahlstr&#246;m for the SVG examples.</p>

<h2 id="webfonts">Web Fonts — Web typography just got easier</h2>

<p>One big sore point among Web designers for a number of years now has been the lack of fonts available to use on Web sites. Sure, you can make use of any font installed on your machine via CSS, but there is no guarantee that it will be installed on your site visitors&#39; machines. In fact, there are very few fonts that you can guarantee to be installed across all major platforms, and you often need to specify different platform—specific variations for serif or sans serif fonts, and test them on their respective platforms to make sure your design holds up.</p>

<p>But this is hopefully going to change in the near future, with <strong>Web Fonts</strong>. Web Fonts is a <a href="http://www.w3.org/TR/css3-webfonts/">CSS 3 module</a> that allows you to specify a location to download a specified font from, if it is not available on a site visitor&#39;s computer. The syntax you need looks like this:</p>

<pre><code>@font-face {
  font-family: &quot;My font gothic&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.ttf&quot;) format(&quot;truetype&quot;);
}</code></pre>

<p>So you declare your custom font inside one of these <code>@font-face</code> constructs (do it at the start of your stylesheet, <em>before</em> you set any fonts), then refer to it in your stylesheet as normal, for example:</p>

<pre><code>p {
  font-family: &quot;My font gothic&quot;;  
  ...
}</code></pre>

<p>Andreas has created a <a href="webfonts.html">Web Fonts example</a>, which uses the <a href="http://www.myfonts.com/fonts/larabie/forgotten-futurist/">Forgotten Futurist</a> and <a href="http://www.myfonts.com/fonts/larabie/minya-nouvelle/">Minya Nouvelle</a> fonts—more free fonts are listed on the <a href="http://www.designwritingresearch.org/free_fonts.html">Free Font Manifesto page</a> and on <a href="http://typodermicfonts.com/the-larabie-fonts-collection">Larabie Fonts</a>. More complex examples can be found on <a href="http://www.princexml.com/howcome/2008/webfonts/">this Web Fonts demo page</a>.</p>

<h2 id="opacity">Opacity through RGBA and HSLA</h2>

<p>Opera Presto 2.1 already includes support for the CSS 3 <code>opacity</code> property, which allows you to easily set transparency on an element—for example <code>div { opacity: .7; }</code>.

<p>In addition, Opera Presto 2.1 also supports defining colors as <acronym title="Hue SaturationLightness">HSL</acronym> values. HSL colors overcome some of the
limitations of <acronym title="Red Green Blue">RGB</acronym> colors, such as being difficult to predict how to change the color (with HSL, if you want a brighter tone of the same color, just increase the lightness), and being more dependent on hardware color capabilities. HSL colors are specified like so:</p>

<pre><code>div { background-color: hsl(240, 100%, 50%); }</code></pre>

<p>Logically, Opera Presto 2.1 has support for RGB colors, like so:</p>

<pre><code>div { background-color: rgb(255, 0, 0); }</code></pre>

<p>But it doesn&#39;t stop there. Opera Presto 2.2 now includes support for an even easier way to make page features transparent: the addition of a fourth argument to HSL and RGB, namely alpha transparency. This results in <acronym title="Reb Green Blue Alpha">RGBA</acronym> and <acronym title="Hue Saturation Lightness Alpha">HSLA</acronym> values. As with the explicit <code>opacity</code> property, transparency in HSLA and RGBA values is defined as a value from 0 to 1, where 0 is completely transparent, and 1 is completely opaque:</p>

<pre><code>div { background-color: hsla(240, 100%, 50%, 0.5); }

div { background-color: rgba(255, 0, 0, 0.5); }</code></pre>

<p>This is fantastic for creating animated appearing and disappearing elements with very little JavaScript—you only need to manipulate a single CSS value using DOM scripting. Bear in mind that using <code>opacity</code> sets transparency for the element it is applied to <em>and all of its children</em>, whereas using HSLA or RGBA only sets transparency for that element.</p>

<p>Let&#39;s have a look at some examples that shows off these CSS 3 constructs, and show the difference between them. The examples all contain the same elements:</p>

<pre><code>&lt;p id=&quot;caption&quot;&gt;Lovely trees&lt;/p&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/215-opera-presto-22-and-opera-10-a-first-look/trees.jpg&quot; alt=&quot;A nice tranquil picture of some trees&quot; /&gt;</code></pre>

<p>Basically we are looking at an image and a caption. In the first example, the CSS looks like this:</p>

<pre><code>#caption {
  position: absolute;
  font-size: 2em;
  top: 10em;
  left: 1.5em;
  background-color: rgb(255, 0, 0);
  opacity: 0.3;
  color: #222;
}</code></pre>

<p>This is mostly pretty obvious stuff, but the important things to focus on here are the <code>background-color</code> and <code>opacity</code> properties (<a href="opacity_example.html">opacity example</a>). You&#39;ll immediately notice the problem I mentioned above—the text and background are both made 30% transparent, so the image shines through the background rather nicely, but the caption text is hard to read.</p>

<p>Let&#39;s try improving things—I&#39;ll use RGBA to set the background color and alpha value at the same time. In the <a href="RGBA_example.html">second example</a> we have replaced the <code>background-color</code> RGB value and the <code>opacity</code> property with a single RGBA value:</p>

<pre><code>background-color: rgba(255, 0, 0, 0.3);</code></pre>

<p>As you can see from viewing the RGBA example, only the background color is transparent, which makes for a nicer, more readable caption.</p>

<p>I have also created an HSLA version of the example, replacing the existing <code>background-color</code> definition with the equivalent HSLA one:</p>

<pre><code>background-color: hsla(0, 100%, 90%, 0.3);</code></pre>

<p>You can <a href="HSLA_example.html">view the HSLA example</a>, or <a href="Presto2-2code.zip">check out the source</a> in the article&#39;s code download.</p>

<p class="note">For what it&#39;s worth, Opera Presto 2.2 now also supports a value of <code>color: transparent</code>  for setting a text color as transparent.</p>

<p class="note">A brief-but-useful link to the later <a href="#svg">SVG section</a>—RGBA and HSLA colors will also work in SVG, independently from opacity set using <code>fill-opacity</code> and <code>stroke-opacity</code>.</p>

<h2 id="selectorsapi">The selectors API</h2>

<p><a href="http://www.w3.org/TR/selectors-api/">The selectors API specification</a> defines DOM APIs designed to make selecting DOM elements a lot simpler.</p>

<p>Let&#39;s look at an example—the following line selects all of the elements in a document with a <code>class</code> of <code>alert</code>:</p>

<pre><code>document.querySelectorAll(&quot;.alert&quot;);</code></pre>

<p>The next line selects the first <code>div</code> element in a document:</p>

<pre><code>document.querySelector(&quot;div&quot;);</code></pre>

<p>The use of CSS-like syntax for the argument makes things a bit easier for non-JavaScript experts.</p>

<p>As you can see above, there are two new methods supported in Presto 2.2: <code>querySelector()</code> and <code>querySelectorAll()</code>. The former returns the first matching element within the tree, and the latter returns a collection of all matching elements as a <code>NodeList</code>. The current specification defines that the methods are available on the <code>Document</code>, <code>Element</code> and <code>DocumentFragment</code> nodes, however our implementation currently only supports it on the <code>Document</code> and <code>Elements</code> nodes.</p>

<p>The <code>querySelector()</code> method is useful for situations where only the first matching element is needed, and is designed to be more efficient than the alternative <code>querySelectorAll()</code> method in such cases.</p>

<p>To see how much easier this is compared with traditional APIs, consider this example HTML fragment:</p>

<pre>&lt;ul id=&quot;fruits&quot;&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;apples&quot;&gt; Apples&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;oranges&quot;&gt; Oranges&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;bananas&quot;&gt; Bananas&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;grapes&quot;&gt; Grapes&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>After the user has filled out the form containing those check boxes, suppose you want to get the list of all the checked items. Using traditional APIs, this would require obtaining a list of all the <code>input</code> elements and iteratively checking which ones were checked.</p>

<pre>var fruits = document.getElementById(&quot;fruits&quot;);
var checkboxes = fruits.getElementsByTagName(&quot;input&quot;);
var list = [];
for (var i = 0; i &lt; checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    list.push(checkboxes[i]);
  }
}</pre>

<p>Using these new APIs, the operation can be reduced to <em>a single line of code!</em></p>

<pre>var list = document.querySelectorAll(&quot;#fruits input:checked &quot;);</pre>

<p>This returns a node list containing all the <code>input</code> elements that were checked by the user. Your script can then perform any operation you like with them.</p>

<h2 id="svg">SVG improvements</h2>

<p>There have been a couple of improvements added to the SVG support in Opera Presto 2.2. This section outlines both of them.</p>

<h3 id="fps">FPS setting in SVG</h3>

<p>You can now manipulate the speed (frames per second) of your SVG animations using JavaScript. For any root-most <code>svg</code> element in your Web page, you can give it an ID, select that element using <code>getElementById</code>, and then increment or decrement the <code>targetFps</code> property. For example, in the showcase Erik has created, the following code is attached to two buttons, allowing you to increase and decrease the speed of the running animation.</p>

<pre><code>function checkfps()
{
  svgElm = document.getElementById(&quot;o&quot;).contentDocument.documentElement;
  setInterval(update, 100); 
}
   
function update()
{
  cfps = svgElm.currentFps;
  tfps = svgElm.targetFps;
  document.getElementById(&quot;f&quot;).textContent = &quot;currentFps: &quot; + cfps + &quot; targetFps: &quot; + tfps;
}    
      
function incFps() {
  svgElm.targetFps++;
}
      
function decFps() {
  svgElm.targetFps--;
}</code></pre>
      
<p>You can also access the current frames per second value with the <code>currentFps</code> property. Check out Erik&#39;s <a href="framespersecond.html">SVG FPS example</a>, or look for it in the <a href="Presto2-2code.zip">zip that accompanies this article</a>.</p>

<p class="note"><code>targetFps</code> is a slightly imprecise construct (dependent on hardware as well as software), but it does give you a certain amount of control over the speed of your animations. Bear in mind also that it doesn&#39;t affect how often redraws take place when DOM manipulations occur; it only really affects declarative animations. Note also that since there&#39;s a timer-driven (<code>setInterval</code>) update of the current framerate text in the HTML the whole page is touched approximately 10 times per second, so the <code>currentFps</code> counter won&#39;t go to zero even if you decrease <code>targetFps</code> to zero.</p>

<h2 id="webfontssvg">Web Fonts in SVG</h2>

<p>As if Web Fonts weren&#39;t cool enough, we&#39;ve also added support for SVG fonts. This allows you to use SVG font files to style your text using CSS (in both HTML and SVG files), just like you would with standard Web Fonts. For example:</p>

<pre><code>@font-face {
  font-family: &quot;My SVG font&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.svg#myFont&quot;) format(&quot;svg&quot;); 
  font-style: normal, italic;
  font-weight: 500;
}</code></pre>

<p>See Erik&#39;s <a href="webfonts_in_svg.svg">Web Fonts in SVG example</a> to see how to style text in SVG, and then <a href="Presto2-2code.zip">check out the source code</a> to get more of an idea of how it works. Note that <em>UbuntuTitleBold</em> is an SVG font, while the others are TrueType fonts.</p>

<p>To see that it also works in plain old HTML, check out my <a href="SVGfonts_in_HTML.html">modified Web Fonts example</a> showing the SVG font referenced in CSS, then used to style HTML.</p>

<p>SVG fonts are defined in SVG files using <code>font</code> or <code>font-face</code> elements, inside which each individual glyph is mapped out in a <code>glyph</code> element. This may sound complicated, but it&#39;s really not—especially given that there is a free program called <a href="http://fontforge.sourceforge.net/">FontForge</a> that can convert between the various font formats.</p>

<p>Check out the source code of <a href="UbuntuTitleBold.svg">the UbuntuTitleBold font in Erik&#39;s example</a> to get an idea of what SVG fonts look like.</p>

<p class="note">Another very nice thing about SVG fonts is that it&#39;s possible to modify the fonts in the client using the DOM—it is after all well-formed XML. Nothing would prevent someone from writing a web application allowing you to edit a font, and then have a construct on the server-side generate a custom TrueType font file from it.</p>


<h2 id="dragonfly">Opera Dragonfly evolved</h2>

<p>There are a number of great new features in Opera Dragonfly since the last time we wrote about it on Dev.Opera—you are strongly advised to check these out.</p>

<ul>
  <li>Network tab: this is not feature-complete yet, but it is a first step towards allowing you to inspect HTTP traffic to and from your client instance—very useful for debugging Ajax applications.</li>
  <li>DOM editing: One of the key new features of Opera Dragonfly alpha 3 is DOM editing support. There are two modes—the first allows you to edit, add and delete attributes and text nodes in real time. You can activate this by double clicking on an attribute, value or text node. The second mode allows you to do freeform editing, such as adding new DOM nodes. You can activate this by double-clicking on the opening or closing tag of an element. This will turn the entire element and its children into a freeform text field. There is currently a known issue with the first mode, where focus doesn&#39;t leave the editing mode when pressing the enter/return key. This will be silently updated as soon as it is fixed.</li>
</ul>

<p>You can find out about the latest Opera Dragonfly happenings at the <a href="http://my.opera.com/dragonfly/blog/">Opera Dragonfly blog</a>.</p>

<h2 id="acid3">Acid 3 test — 100/100!</h2>

<p>Earlier on this year we released an <a href="http://labs.opera.com/news/2008/03/28/">Opera WinGogi build</a> with a 100/100 pass rate on the <a href="http://acid3.acidtests.org/">Acid 3 test</a>. This is now included in Opera Presto 2.2—all future desktop builds will have this.</p>

<h2 id="summary">Summary</h2>

<p>I hope you have enjoyed our test drive of Opera 10 alpha and the new Opera Presto 2.2 rendering engine. Stay tuned for more improvements, and please give us any feedback you have to help us make the next release the best it can be!</p>

<p><strong>Other useful links:</strong></p>
<ul>
<li><a href="http://www.opera.com/docs/changelogs/">The changelogs</a>: for those who want the complete list of updates.</li>
<li><a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Article: Opera Presto 2.1—web standards supported by Opera&#39;s rendering engine</a>: Dev.Opera article covering the web standards support in the previous version of the rendering engine, Opera Presto 2.1.</li>
</ul></p>
