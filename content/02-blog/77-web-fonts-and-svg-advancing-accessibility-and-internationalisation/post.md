Title: Web fonts and SVG advancing accessibility and internationalisation
----
Date: 2009-09-03 16:32:30
----
Author: 
----
Text:

<p>Back when I was an accessibility consultant and clients used images for navigation the advice would be &quot;use text links and style them with CSS&quot;. Simple, effective, accessible and also much easier to localise for multilingual sites.</p>

<p>While an improvement on images of text for navigation, headings and the occasional paragraph of text, this wasn&#39;t enough for designers who were restricted to working with only <a href="http://www.fonttester.com/help/list_of_web_safe_fonts.html">web safe fonts</a> which didn&#39;t always accommodate branding or design requirements.</p>

<p><a href="http://www.mikeindustries.com/blog/sifr/">SiFR</a> (Scalable Inman Flash Replacement) itched the scratch that CSS couldn&#39;t–at the time–itch by enabling Flash embeds of a font in a Flash element to display text. But this wasn&#39;t a catch all solution evidenced by the fact that it&#39;s never been widely used and was tricky to make accessible necessitating a alternative fall-back. </p>

<p>Fast forward to today however and we have two shiny techniques for fancy fonts that are at both accessible and easy to localise: <a href="http://www.w3.org/TR/css3-fonts/">Web Fonts</a> and <a href="http://www.w3.org/Graphics/SVG/">SVG</a> (Scalable Vector Graphics). These are by no means new techniques but they have become much better supported across browsers of late with cutting edge support in our own <a href="http://www.opera.com/download/">Opera 10</a> making them more mainstream than ever. </p>
<p>Here&#39;s a quick look at each one and what they have to offer.</p>
<h3>Web Fonts</h3>
<p>Web Fonts allow you to download a specified font file and use it on your website without it needing to be installed on your user&#39;s computers. They give you a wider choice of fonts beyond the web safe fonts currently available using one of three options: choosing a free webfont, paying a foundry to use a font or designing your own font using a tool such as <a href="http://www.pentacom.jp/soft/ex/font/edit.html">Pentacom</a> or <a href="http://fontstruct.fontshop.com/">Fontstruct</a>.</p>

<p>The main issue with paying for fonts is not the cost as such but the fact that most fonts are not licensed to be used with @font-face. There are however plenty of free fonts that allow @font-face, either explicitly or due to having a free font license. Bruce Lawson has pulled together a handy reference of <a href="http://my.opera.com/ODIN/blog/font-face-web-fonts-resources"><code>@font-face</code> web fonts resources</a>.</p>

<p>Webfonts come in the following formats and with it varying support in browsers:</p>
<ul>
  <li> Embedded OpenType (EOT) supported by Microsoft&#39;s Internet Explorer since version 4 using the extension .eot</li>
	<li>TrueType Fonts (TTF) and OpenType (OTF) supported by Opera 10, Safari 3.1 and Firefox 3.5.</li>
</ul>
<p>The good news is that <a href="http://webfonts.info/wiki/index.php?title=%40font-face_browser_support">browser support for Web Fonts</a> is much improved recently making them a must in the developer&#39;s toolbox plus there are facilities to convert font formats such as Google’s <a href="http://code.google.com/p/ttf2eot/">TTF 2 EOT conversion too</a>.</p>

<p>It&#39;s easy to implement webfonts using the using the <a href="http://www.w3.org/TR/css3-webfonts/#the-font-face-rule"><code>@font-face</code> rule</a> in CSS3:</p>

<p><pre><code>
@font-face {
    font-family: &quot;My font&quot;;
    src: url(&quot;<a href="http://www.myweb.com/fonts/myfont.ttf" target="_blank">http://www.myweb.com/fonts/myfont.ttf</a>&quot;) format(&quot;truetype&quot;);
}</code></pre></p>

<p>You declare your custom font inside a <code>@font-face</code> construct, for example at the start of your stylesheet (important) before you set any fonts, then refer to it in your stylesheet as normal:</p>

<p><pre><code>p {
    font-family: &quot;My font gothic&quot;;
    …
}</code></pre></p>

<p>Benefits of Web Fonts include:</p>
<ul>
	<li>Scalability within the browser  and for screen magnification users without pixelation</li>
	<li>Readability for screen reader users (whereas SVG is yet to be recognised by screen readers as I explain below)</li>
	<li>Easier to localise using  CSS</li>
	<li>Less code bloat</li>
	<li>Can be used with SVG</li>
        <li>Webfonts can be used to display fonts that contains glyphs and characters for scripts not supported by default OS fonts</li>
</ul>

<h3>SVG</h3>
<p>Opera has led with SVG support since version 9 and with the release of Opera 10 we get the additional bonus of being able to use SVG and webfonts together using @font-face:</p>

In SVG you can use regular fonts like OpenType, TrueType (as with webfonts) and in HTML you can point to SVG fonts using CSS:

<p><pre><code>@font-face {
    font-family: &quot;My SVG font&quot;;
    src: url(&quot;<a href="http://www.myweb.com/fonts/myfont.svg#myFont&amp;quot;" target="_blank">http://www.myweb.com/fonts/myfont.svg#myFont&amp;quot;</a>) format(&quot;svg&quot;); 
}</code></pre></p>

<p>SVG fonts are defined in SVG files using font or <code>@font-face</code> elements, inside which each individual glyph is mapped out in a glyph element. To simplify this there is a free program called <a href="http://fontforge.sourceforge.net/">FontForge</a> that can convert between the various font formats. </p>
<p>For a more in depth explanation on how SVG works check out our <a href="http://dev.opera.com/articles/svg/">articles on SVG</a> in Dev Opera. We&#39;ll also be publishing an SVG primer soon.</p>
<p>So what are the benefits of SVG?</p>
<ul>
  <li>Scalability within the browser and for screen magnification users without pixelation</li>
  <li>Easy to modify  in the client using the DOM or via SMIL so therefore easier to translate and update text</li>
  <li>Increased support on mobile and devices</li>
  <li>SVG has limited <a href="http://www.w3.org/TR/wai-aria/">WAI-ARIA 1.0</a> support with more planned with WAI-ARIA 2.0</li>
</ul>

<h3>Showtime</h3>
<p>For some live showcases of how <code>@font-face</code> and SVG can work individually and together check out our <a href="http://dev.opera.com/articles/view/seven-web-fonts-showcases/">seven web fonts showcases</a>. This includes working examples of text in  Russian, Devanagari, Japanese and English with explanations of how to create text using a mixture of Web Fonts and SVG.</p>
