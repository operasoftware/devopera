Title: Seven Web Fonts showcases
----
Date: 2009-09-01 05:51:56
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

<p>As we were coming up with web standards examples to highlight the standards support in our Opera 10 final release, we realised that we were all very excited about CSS 3 Web Fonts, possibly above any other feature. We ended up with way more showcases illustrating Web Fonts usage than any other type of showcase, therefore we decided to break most of them out into a separate article — the one you&#39;re reading now!</p>

<p>This article contains a nice variety of web fonts showcases, looking at usage of different font formats (TrueType, OpenType, SVG), different alphabets and character sets (including Devanagari (South Asian), Russian and Japanese font families), and some different effects (including using SVG for text effects, and <code>text-shadow</code>).</p>

<p>In any case, we hope you find these examples interesting and useful, and that they inspire you to create fabulous designs of your own. The contents of this article are as follows:</p>

<ul>
  <li><a href="#newsrussian">The news in Russian</a>
    <ul>
      <li><a href="#russianwebfonts">The Web Fonts</a></li>
      <li><a href="#russianrgba">RGBA</a></li>
    </ul>
  </li>
  <li><a href="#asianwebfonts">Devanagari Web Fonts study</a>
    <ul>
      <li><a href="#asianopacity">Opacity</a></li>
    </ul>
  </li>
  <li><a href="#japanesewebfonts">Japanese Web Fonts!</a></li>
  <li><a href="#textoutlines">Attractive text outlines using multiple drop shadows and transparency</a>
    <ul>
      <li><a href="#textshadowsrgba">Multiple text shadows and RGBA</a></li>
    </ul>
  </li>
  <li><a href="#svgfonts">Adding some SVG fonts into the mix</a></li>
  <li><a href="#svgtextmanipulation">The delicate art of SVG text manipulation</a>
    <ul>
      <li><a href="#spiraltext">A text spiral</a></li>
      <li><a href="#svgtextfilter">Applying a noise filter to text</a></li>
    </ul>
  </li>
  <li><a href="#dropcaps">Elegant drop caps with Web Fonts</a></li>
</ul>

<p>These related links might also be useful to you as you work your way through the article:</p>
<ul>
  <li><a href="http://www.opera.com/browser/"><strong>Download Opera 10 final</strong><strong></strong></a></li>
  <li><a href="/articles/view/the-opera-10-experience/webfontsbasics.html"><strong>Web Fonts primer</strong></a>: If you need to review the basics</li>
<li><a href="http://my.opera.com/ODIN/blog/font-face-web-fonts-resources">Where to find free Web Fonts for embedding</a></li>
  <li><a href="http://dev.opera.com/articles/view/the-opera-10-experience/"><strong>The Opera 10 experience</strong></a>: Find out more about the Opera 10 release, including new features and more standards showcases</li>
  <li><a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/"><strong>Color in Opera 10 — HSL, RGB and Alpha Transparency</strong></a>: This article by Molly Holzschlag explains how the RGB and HSL colour models work, and looks at adding transparency to the mix — a very useful designer&#39;s guide</li>
</ul>

<p class="note">Due to a bug in Opera 10, specifying different weights and styles for a single font-family name <a href="/articles/view/the-opera-10-experience/webfonts-problem.html">currently breaks</a> — only the last font specified (typically a bold/italic font) is applied, overriding other weights and styles of that font family. We are already working on a fix, which will be rolled out via our auto-update mechanism soon — in the meantime, you can avoid this issue by <a href="/articles/view/the-opera-10-experience/webfonts-workaround.html">defining bolds and italics as different font families</a>, and applying them explicitly on the elements you want to use them for. Of course, <strong>this workaround will continue working</strong> even after we&#39;ve fixed the problem in question.</p>


<h2 id="newsrussian">The news in Russian</h2>

<div class="right">
<img src="/articles/view/the-opera-10-experience/vadim.jpg" alt="picture of Vadim Makeev" />
<p class="comment" style="width:100px;">Vadim Makeev</p>
</div>

<ul>
  <li>Author: Vadim Makeev</li>
  <li>Key features: Web Fonts, HTML 5 markup, RGBA colors</li>
  <li><a href="/articles/view/the-opera-10-experience/russian_index.htm">Live Russian newspaper showcase</a></li>
  <li><a href="/articles/view/the-opera-10-experience/vadim_russian_newspaper.zip">Russian newspaper code download</a></li>
</ul>

<p>Vadim has created a neat-looking Russian news poster to demonstrate some Russian Web Font usage, as seen in Figure 1. Vadim has also made use of HTML 5 markup in his example — we won&#39;t explain this in detail here, but you can read up on the basics by checking out the <a href="/articles/view/the-opera-10-experience/html5elementbasics.html">HTML 5 element basics primer</a>. He has also made use of RGBA colours, which will be explained below.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/russiannewspaper.png" alt="Russian web fonts showcase" />
<p class="comment">Figure 1: Our Russian Web Fonts showcase.</p>

<h3 id="russianwebfonts">The Web Fonts</h3>

<p>There is nothing complicated at all about including Web Fonts in a page. Vadim includes his fonts in his CSS using the standard <code>@font-face</code> construct, like so:</p>

<pre><code>@font-face {
  font-family:&#39;Philosopher&#39;; /* © Ivan Gladkikh, http://jovanny.ru/ */
  src:url (../f/Philosopher.otf);
}</code></pre>

<p class="note">Note that he uses OpenType fonts in this example, rather than the more common TrueType fonts. This is just a different common font format — for more information, check out the <a href="http://en.wikipedia.org/wiki/OpenType">OpenType fonts Wikipedia page</a>.</p>

<p>The fonts are then included in the page using the standard <code>font-family</code> property, for example:</p>

<pre><code>article h2 {
    ...
  font:2em/1 &#39;Philosopher&#39;,sans-serif;
    ...
}</code></pre>

<h3 id="russianrgba">RGBA</h3>

<p>Vadim has set the poster background colour using an RGBA value. <code>255,255,255</code> is white, but it has an alpha value of 0.9, so the background slightly shows through — we&#39;ve used very thin paper to print our poster on!</p>

<pre><code>#page {
    ...
  background:rgba(255,255,255,.9);
    ...
}</code></pre>

<h2 id="asianwebfonts">Devanagari Web Fonts study</h2>


<div class="right">
<img src="/articles/view/the-opera-10-experience/shwetank.jpg" alt="picture of Shwetank Dixit" />
<p class="comment" style="width:100px;">Shwetank Dixit</p>
</div>

<ul>
  <li>Author: Shwetank Dixit</li>
  <li>Key features: Web Fonts, HTML 5 markup, CSS 3 <code>opacity</code>, RGBA colors</li>
  <li><a href="/articles/view/the-opera-10-experience/devanagarifonts.htm">Live Devanagari Web Font showcase</a></li>
  <li><a href="/articles/view/the-opera-10-experience/shwetank-asian-web-fonts.zip">Devanagari Web Font code download</a></li>
</ul>


<p>Shwetank has also provided us with a nice showcase, to illustrate some Devanagari (South Asian) Web Fonts and how they work — see Figure 2.  The showcase uses Hindi. Look at them carefully — notice the difference in the spacing, the slants and the curves of the letters. The fonts are included in the CSS in the standard way, as discussed above. Again, HTML 5 markup has been used in this showcase, and RGBA colors have also been used in the same way as before; we therefore don&#39;t need to discuss those again.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/indianwebfonts.png" alt="Indian web fonts showcase" />
<p class="comment">Figure 2: Our Indian Web Fonts showcase.</p>

<h3 id="asianopacity">Opacity</h3>

<p>The transparency in the main example boxes is done using RGBA colours as before, but for the navigation/sidebar and the footer it is done using the CSS 3 <code>opacity</code> property. In these cases Shwetank wanted to give the elements and all of their contents a little bit of blanket transparency. This can be achieved using <code>opacity</code>, whereas if you just want to give a single text or background colour transparency, you are better off using an RGBA or HSLA colour. For example:</p>

<pre><code>footer, footer p{
    ...
  background-color:rgb (100, 89, 81);
  <strong>opacity: 0.85;</strong>
    ...
}</code></pre>

<h2 id="japanesewebfonts">Japanese Web Fonts!</h2>


<div class="right">
<img src="/articles/view/the-opera-10-experience/daniel.jpg" alt="picture of Daniel Davis" />
<p class="comment" style="width:100px;">Daniel Davis</p>
</div>

<ul>
  <li>Author: Daniel Davis</li>
  <li>Key features: Web Fonts</li>
  <li><a href="/articles/view/the-opera-10-experience/japanese-newspaper.html">Live Japanese Web Font showcase</a></li>
  <li><a href="/articles/view/the-opera-10-experience/daniel-japanese-web-fonts.zip">Japanese Web Font code download (1.5mb)</a></li>
</ul>

<p>Our man in Japan, Daniel Davis, has contributed a fantastic Japanese Web Fonts showcase to the mix. He has taken the code from <a href="http://dev.opera.com/articles/view/the-opera-10-experience/#html5newspaper">David&#39;s newspaper showcase</a>, adapted it somewhat (although they are functionally the same), and used Japanese fonts — along with a little polish such as some <code>text-shadow</code> — to give a flavour of how these kinds of typefaces can work on web pages. Figure 3 shows an image of the example in action.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/japanesewebfonts.png" alt="Japanese web fonts show case" />
<p class="comment">Figure 3: Japanese Web Fonts showcase.</p>

<p class="note">One point to bear in mind is that Japanese and similar East Asian languages have thousands of characters.  This can result in large font file sizes for the user to download so they should be used with care.</p>

<h2 id="textoutlines">Attractive text outlines using multiple drop shadows and transparency</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/andreas.jpg" alt="picture of Andreas Bovens" />
<p class="comment" style="width:100px;">Andreas Bovens</p></div>

<ul>
  <li>Author: Andreas Bovens</li>
  <li>Key features: Web Fonts, multiple <code>text-shadows</code>, RGBA colour</li>
  <li><a href="copyright-text.htm">Live text outline showcase</a></li>
  <li><a href="andreas-text-outline.zip">Text outline code download</a></li>
</ul>

<p>In this example, Andreas has used multiple <code>text-shadow</code>s along with RGBA colours to create attractive overlaid copyright notices for his photos with semi-transparent gradiated outlines — see Figure 4. The example uses a nice pixel font called CC Red Alert:</p>

<pre><code>@font-face {
  src: url(ccredalert.ttf) format(&quot;truetype&quot;); /* http://www.dafont.com/c-c-red-alert-inet.font */
  font-family: &quot;ccredalert&quot;;
  font-style: normal;
}</code></pre>


<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/textoutline.png" alt="text outline effect using multiple text shadows" />
<p class="comment">Figure 4: This text outline effect has been created using multiple text-shadows with RGBA colours — the magnified inset has been included so you can see the effect more easily.</p>

<h3 id="textshadowsrgba">Multiple text shadows and RGBA</h3>

<p><code>text-shadow</code> is a well-supported part of the CSS 3 spec that does just what its name implies. The rule applying the <code>text-shadow</code>s to the copyright notices in this example looks like so:</p>

<pre><code>span { 
  ...
  text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 0, rgba(255, 255, 255, 0.6) -1px -1px 0,
  rgba(255, 255, 255, 0.6) 1px -1px 0, rgba(255, 255, 255, 0.6) -1px 1px 0;
}</code></pre>

<p>As you can see, the <code>span</code> has four shadows applied to it. Each comma-separated block defines one text shadow:</p>

<pre><code>rgba(255, 255, 255, 0.6) -1px -1px 0</code></pre>

<p>The four values respectively denote:</p>

<ul>
  <li>Shadow colour</li>
  <li>Horizontal offset — positive values place the shadow to the right of the original text; use a negative value if you want the shadow to be offset to the left</li>
  <li>Vertical offset — positive values place the shadow below the original text; use a negative value if you want the shadow to be offset above</li>
  <li>Blur radius of the shadow — how dispersed it is</li>
</ul>

<p>You can apply as many text shadows as you want to a piece of text, and as you can see in this example, you can also apply transparency to the colours of your shadows.</p>

<h2 id="svgfonts">Adding some SVG fonts into the mix</h2>

<div class="right">
<img src="/articles/view/the-opera-10-experience/chris.jpg" alt="picture of the main article author Chris Mills" />
<p class="comment" style="width:100px;">Chris Mills</p></div>

<ul>
  <li>Author: Chris Mills</li>
  <li>Key features: SVG Web Fonts</li>
  <li><a href="/articles/view/the-opera-10-experience/SVGfonts_in_HTML.html">Live SVG Web Font showcase</a></li>
  <li><a href="/articles/view/the-opera-10-experience/chris-svg-web-fonts.zip">SVG Web Font code download</a></li>
</ul>


<p>I&#39;ve come up with an example that makes use of a couple of fantastic SVG fonts I found — <a href="/articles/view/the-opera-10-experience/UbuntuTitleBold.svg">Ubuntu</a> and <a href="/articles/view/the-opera-10-experience/graffiti.svg">Graffiti</a> — see Figure 5. An SVG font is used pretty much like any of the other fonts from the previous showcases. In my example, the fonts are included like this:</p>

<pre><code>@font-face { 
  font-family: ubuntu; 
  src: url(UbuntuTitleBold.svg#UbuntuTitleBold) format(&quot;svg&quot;);
}</code></pre>

<p class="note">One difference to note is that we are not just pointing to the SVG file, but to an ID inside the SVG file — in each case, this points to the ID of the <code>font</code> element inside the SVG file, which contains all the font information.</p>

<p>We then apply the fonts to our HTML as expected:</p>

<pre><code>font-family: &quot;ubuntu&quot;;
font-family: &quot;graffiti&quot;;</code></pre>


<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/svgwebfont.png" alt="an svg web font in action" />
<p class="comment">Figure 5: Making use of an SVG Web Font.</p>

<h2 id="svgtextmanipulation">The delicate art of SVG text manipulation</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/andreas.jpg" alt="picture of Andreas Bovens" />
<p class="comment" style="width:100px;">Andreas Bovens</p></div>

<ul>
  <li>Author: Andreas Bovens</li>
  <li>Key features: Web Fonts, SVG filters, CSS 3 <code>nth-child</code></li>
  <li><a href="spiral.svgz">Live text spiral showcase</a></li>
  <li><a href="textured-type.svg">Live filtered text showcase</a></li>
  <li><a href="andreas-svg-text-effects.zip">Link to SVG text effects code download</a></li>
</ul>

<p>This showcase consists of a couple of examples where Andreas has applied some extra special effects to text using SVG, plus a couple of Web Fonts for good measure. The examples are contained inside SVG files, and as you&#39;ll see below, text is defined slightly differently inside SVG. However, you can still apply CSS to SVG elements in the same way as you do with regular HTML. Check out the source of the example files and all will become clear.</p>

<h3 id="spiraltext">A text spiral</h3>

<p>The first example takes a block of text and winds it up into a spiral — see Figure 6! This would take a lot of work to write by hand, so Andreas created it using the <a href="http://www.inkscape.org/">Inkscape</a> open source SVG editor. It&#39;s a great tool for creating more complex SVG design elements, so we&#39;d recommend you check it out.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/spiral.png" alt="a text spiral wound up using svg" />
<p class="comment">Figure 6: A rather interesting spiral of text — wound up using SVG!</p>

<p>The first thing defined inside the SVG file is a <code>path</code> element, which looks like so:</p>

<pre><code>&lt;path d=&quot;m236.09,436.60c-0.60926-3.9660,4.7996-2.9105 ...more curves...
id=&quot;spiralpath&quot; transform=&quot;matrix(2.0828054,0,0,1.9429071,-107.51929,-506.8181)&quot; /&gt;</code></pre>

<p>The <code>text</code> element contains a <code>textPath</code> element, which references the path we just specified.</p>

<pre><code>&lt;text&gt;
  &lt;textPath startOffset=&quot;4.5&quot; xlink:href=&quot;#spiralpath&quot;&gt; Lorem ipsum dolor sit amet...&lt;/textPath&gt;
&lt;/text&gt;</code></pre>

<p>This maps the text along the path, which results in our text spiral.</p>

<h3 id="svgtextfilter">Applying a noise filter to text</h3>

<p>The second text-manipulation example takes a block of text with a Web Font applied to it, and adds some &quot;noise&quot; to the text by way of an SVG filter to create a rough &quot;printed&quot; effect. Check out Figure 7.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/svgfilter.png" alt="a rough printed effect created using SVG filters" />
<p class="comment">Figure 7: SVG filters help to create this rather interesting &quot;rough printed&quot; look.</p>

<p>I&#39;m not going to get into too much detail about how this works — check out the example source if you want to gain more of an understanding. The noise filter is defined inside the <code>filter</code> element, and the text sections are defined inside <code>text</code> and <code>tspan</code> elements, for example:</p>

<pre><code>&lt;text x=&quot;31.094646&quot; y=&quot;127.95984&quot; id=&quot;title&quot;&gt;
  &lt;tspan x=&quot;31.094646&quot; y=&quot;127.95984&quot;&gt;Textured type&lt;/tspan&gt;
&lt;/text&gt;</code></pre>

<p>The noise filter is applied to the text using the following line of CSS:</p>

<pre><code>#title, #textblock, rect {
  filter:url((#filter5853);
  fill:#000;
}</code></pre>

<p>This SVG-specific CSS is fairly intuitive, applying the filter defined at the specified URL, and applying a font/background colour (<code>fill</code>, in SVG terms) to the various elements.</p>

<p>The other interesting CSS feature to mention from this example is the <code>nth-child</code> pseudo-class, which is used to set colours on different instances of the same SVG element.</p>

<pre><code>#textblock tspan:nth--child(1) tspan {fill:#aa0000;}
#textblock tspan:nth--child(2) tspan {fill:#217821;}
#textblock tspan:nth--child(3) tspan {fill:#006680;}</code></pre>

<p>For more on using the <code>nth-child</code> pseudo-class, check out our article <a href="http://dev.opera.com/articles/view/zebra-striping-tables-with-css3/">Zebra striping tables with CSS3</a>.</p>

<h2 id="dropcaps">Elegant drop caps with Web Fonts</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/bruce.jpg" alt="picture of Bruce Lawson" />
<p class="comment" style="width:100px;">Bruce Lawson</p></div>

<ul>
  <li>Author: Bruce Lawson</li>
  <li>Key features: Web Fonts</li>
  <li><a href="dropcap-demo.html">Live drop caps showcase</a></li>
  <li><a href="bruce-webfont-dropcap.zip">Drop caps code download</a></li>
</ul>

<p>In this showcase, Bruce Lawson has created a nice image-replacement-free drop caps solution using a Web Font — check out Figure 8. The font is imported into the CSS in the standard way, although it&#39;s worth noting that in this example Bruce has added support for IE by also importing an EOT version of the font:</p>

<pre><code>/* For IE */

@font-face {
  font-family: &#39;Kingthings Versalis&#39;;
  src: url(&#39;Kingthings_Versalis.eot&#39;);
}</code></pre>

<p>The font is then applied to the first letter of every paragraph to create the drop cap, using the following rule:</p>

<pre><code>p:first--letter {/* selector should be p::first-letter, with 2 colons, but IE doesn&#39;t understand that */
  font-size: 2.3em;
  font-family: &quot;Kingthings Versalis&quot;;
  float: left;
  padding: 0 0.3em 0 0;
  line-height: 1.2;
  font-weight:bold;
}</code></pre>

<img src="http://forum-test.oslo.osa/kirby/content/articles/299-seven-web-fonts-showcases/dropcap.png" alt="an elegant drop caps solution created using a web font" />
<p class="comment">Figure 8: An elegant drop caps solution created using a Web Font.</p>

<p>Make sure you check out the <a href="dropcap-demo.html">live drop caps demo page</a> — it contains a description and further useful information about the technique.</p>
  
