---
title: 'Opera 10 alpha: Web Fonts, Acid 3 and more'
authors:
- bruce-lawson
tags:
- opera-10
- css3
- web-fonts
- svg
- acid
- dragonfly
- selectors-api
- odin
layout: article
---
<p>Opera 10 alpha has been released. Don&#39;t look too much at the <abbr>UI</abbr>, as this alpha   showcases the all-new  2.2 version of Presto, Opera&#39;s  core rendering engine.</p>

<p>The developer relations team (David-not-Dave, Mills, Henny, Andreas, Zi Bin, Shwetank and me) have travelled Iceland to Indonesia, Capetown to Cardiff, Mumbai to Moscow via Massachusetts, gathering user requests and feedback, and we then engaged in frenzied bouts of snow-wrestling with the Presto developers to get those requests included.</p>

<p> So I&#39;m very pleased to announce that the Opera 10 alpha highights:</p>
<ul>
<li><p><strong>Web Fonts</strong> - finally, the ability to embed any font in a web page using <abbr>CSS</abbr> or <abbr>SVG</abbr> so that you&#39;re no longer limited to a tiny choice of typefaces. (See our <abbr>CTO</abbr>&#39;s <cite>A List Apart</cite> article, <a href="http://www.alistapart.com/articles/cssatten">CSS @ Ten: The Next Big Thing</a> for a discussion of what this can do for you).</p><p>Apart from sexy typography, Web Fonts can help with internationalisation, as pages that are written in non-Latin scripts can embed the correct font  rather than risking the &quot;<abbr>WTF</abbr> glyph&quot; (the square box) that appears if a character on the page isn&#39;t supported on the client.</p><p>Note that our implementation does not support the Internet Explorer <abbr>EOT</abbr> format. While this is before the <abbr>W3C</abbr> and <em>may</em> become a Standard, for the forseeable future  it&#39;s proprietary and is a form of <abbr>DRM</abbr>.  Opera believes in open standards and therefore we support the non-<abbr>DRM</abbr> <abbr>W3C</abbr> Web Font standard. Richard Rutter has an excellent discussion of how this opens up <a href="http://clagnut.com/blog/2166/">new business models for font foundaries</a>. </p></li>
<li><strong>Acid 3 test</strong> - we score 100/100 on the <a href="http://en.wikipedia.org/wiki/Acid3">Acid 3 test</a> (<a href="http://www.opera.com/browser/next">download the alpha</a> and <a href="http://acid3.acidtests.org/">take the test</a> yourself).</li>
<li><p><strong>RGBa and HSL</strong> - new ways to specify transparency of colours.</p></li>
<li><p><strong>Opera Dragonfly</strong> our developer tools now add live <abbr>DOM</abbr> editing and a network inspector.</p></li>
<li><p><strong>Selectors <abbr>API</abbr></strong>. The selectors <abbr>API</abbr> is experimentally supported in Opera 10 alpha (we don&#39;t implement it on the <code>DocumentFragment</code> nodes). Those of you who find jQuery attractive because it uses <abbr>CSS</abbr>-type selectors to target elements in the <abbr>DOM</abbr> will find the selectors <abbr>API</abbr> similarly user-friendly.</p></li>

</ul>

<p>Read more about the <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/">advances in standards-support in Presto 2.2</a>, or better still download and play, baby. And watch this space…this is just the first alpha release.</p>
<p>Please, let us know what you think. We&#39;re listening.</p>
