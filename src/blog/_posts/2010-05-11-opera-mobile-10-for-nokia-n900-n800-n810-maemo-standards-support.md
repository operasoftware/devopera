---
title: Opera Mobile 10 for Nokia N900 and N800/N810 (Maemo) — Standards Support
authors:
- zi-bin-cheah
tags:
- nokia
- opera-mobile
- chart
- standards
- testing
license: cc-by-3.0
---

<p class="note">Update: see the <a href="https://www.opera.com/docs/specs/productspecs/">latest browser support chart listing web standards support for Opera desktop, Opera Mobile and Opera Mini listed here</a>.</p>

<p>We&#39;re proud to announce that today we released a preview build of <a href="http://labs.opera.com/news/2010/05/11/">Opera Mobile 10 for Nokia N900 and N800/N810</a>.</p>

<p>Apart from being our first (unofficial) build for the Maemo platform in a little over 3 years, this release also brings with it a few major improvements to our flagship mobile browser.</p>
<p>So what&#39;s the difference between generic Opera Mobile and it&#39;s Maemo-flavoured counterpart? Opera Mobile 10 for Maemo has been upgraded to use the Presto 2.5 rendering engine – the same engine used on Opera Desktop 10.5x releases. Coupled with the Mobile debut of our <a href="http://my.opera.com/core/blog/2009/02/04/vega">Vega rendering library</a>, this enables you to use many of the new CSS3-based effects, like rounded corners and 2D transforms, that were previously only available in Opera&#39;s desktop versions.</p>
<p>This release is also the first public release of Opera Mobile to include <a href="http://my.opera.com/core/blog/2009/12/22/carakan-revisited">Carakan – our lightning-quick JavaScript engine</a> (note that JIT support for ARM was not yet stable enough to include).</p>
<p>If you want to get some light-hearted, behind-the-scenes information around today&#39;s release, check out our <a href="http://my.opera.com/ODIN/blog/2010/05/11/5-questions-for-the-opera-mobile-10-maemo-team">5 questions for the Opera Mobile 10 Maemo team</a>.</p>
<p>For an in-depth look at our standards support, please check out <a href="https://www.opera.com/docs/specs/presto25/">Web specifications supported in Opera Presto 2.5</a> and <a href="https://www.opera.com/docs/specs/presto24/">Opera Presto 2.4</a> – but as a quick reference, here&#39;s an update to our <a href="http://my.opera.com/ODIN/blog/2010/03/16/opera-standards-chart">Opera browser standards support chart</a> that gives an overview of the Maemo preview build&#39;s improvements.</p>

<figure block="figure">
<table>
<col span="2"/>
<col span="1"/>
<thead>
<tr border="10px">
<td></td>
<td>Desktop 10.5x</td>
<td>Mobile 10 Maemo</td>
<td>Mobile 10</td>
<td>Mini 5</td>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.opera.com/docs/specs/presto25/#css">CSS3</a> general</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Web Fonts</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Media Queries</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td>text-shadow (incl. multiple text-shadow)</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" />*</td>
</tr>
<tr>
<td>selectors</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/css3-background/">CSS3 Backgrounds and Borders</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>border-radius</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>background-clip</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td>background-origin</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td>multiple background images</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td>background-attachment</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>box-shadow</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>border-image</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td><a href="https://www.opera.com/docs/specs/presto25/css/transitions/">CSS3 Transitions</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>transition-property</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>transition-duration</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>transition-delay</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>transition-timing-function</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>ease</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>linear</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>ease-in</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>ease-out</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>ease-in-out</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td><a href="https://www.opera.com/docs/specs/presto25/css/transforms/">CSS3 2D Transforms</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>translate</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>translateX</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>translateY</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>scale</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>skew</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>rotate</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>transform-origin</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/css3-color/">CSS3 Color</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>rgba()</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td>hsla()</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
</tr>
<tr>
<td><a href="https://www.opera.com/docs/specs/presto25/html5/">HTML5</a></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Video</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" />	†</td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Audio</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" />	†</td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Web Forms</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="supported" /></td>
</tr>
<tr>
<td>Storage</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Web Storage - Local Storage</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Web Storage - Session Storage</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Web SQL Storage</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
<tr>
<td>Graphics</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Canvas</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /> ‡</td>
</tr>
<tr>
<td>SVG</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" />	‡</td>
</tr>
<tr>
<td>Miscellaneous</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Selectors API</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" />	¶</td>
</tr>
<tr>
<td>Viewport META tag</td>
<td>N/A</td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/accept.png" alt="supported" /></td>
<td><img src="{{ page.id }}/delete.png" alt="not supported" /></td>
</tr>
</tbody>
</table>
</figure>

<p>* Blur radius is not supported.</p>
<p>† Opera on Windows and Mac support the Ogg container format and the Theora and Vorbis codecs, as well as the WAVE container format and PCM codec. Opera on Linux and FreeBSD supports the container formats and codecs that are installed in the system&#39;s GStreamer.</p>
<p>‡ Opera Mini uses the same engine as other Opera products, but it is special as it consists of an Opera Mini thin client on the phone and an Opera Server on the back-end. Because of this particular architecture, Opera Mini does not support asynchronous operations or user interaction such as mouseover events in SVG and Canvas.</p>
<p>¶ Due to Opera Mini&#39;s nature as a thin client, Selectors API function calls that require user interaction, such as mouseover events, will not work. The selector queried should also be loaded before the JavaScript that does the querying, which can be done by placing the script just before the <code>body</code> close tag.</p>
<p>Icons by <a href="http://www.famfamfam.com">famfamfam</a></p>
