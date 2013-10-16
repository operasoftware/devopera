Title: MAMA: Event-handler attributes
----
Date: 2008-11-14 13:50:47
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

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-common-attributes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Common attributes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-frames/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Frames</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#mouse">Mouse events</a></li>
    <li><a href="#key">Key events</a></li>
    <li><a href="#load">Page-loading events</a></li>
    <li><a href="#form">Forms-related events</a></li>
    <li><a href="#other">Other popular event handlers</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Event-handler attributes are a non-portable way to directly associate Script 
   code with a specific element via an action on that element. Event handlers 
   were detected ~2/3 of all the URLs using Script, so a closer look at the many 
   attributes this encompasses is useful in our discussion. MAMA&#39;s global list 
   of <a href="attrlist-url.htm">markup attributes</a> revealed 52 unique event 
   handler attribute names, but to simplify things we will cover only the 24 that 
   were detected more than 500 times each in MAMA&#39;s URLs. This attribute list 
   documents over 300 element/event handler combinations; however, since the lower 
   bound for the entire list was 50, there are surely many more element/event 
   combinations that could be mined from MAMA.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Usage of event-handler attributes</caption>
   <tr valign="bottom"><th>Event handler</th><th>Frequency</th><th rowspan="9">&#xA0;</th>
        <th>Event handler</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Event handler</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="att">Onmouseover</code></td><td class="num">1,051,631</td><td><code class="att">Onmousedown</code></td><td class="num">57,049</td><td><code class="att">Onselectstart</code></td><td class="num">8,643</td></tr>
   <tr class="r2"><td><code class="att">Onmouseout</code></td><td class="num">998,854</td><td><code class="att">Onmouseup</code></td><td class="num">41,497</td><td><code class="att">Onmousemove</code></td><td class="num">7,173</td></tr>
   <tr class="r1"><td><code class="att">Onload</code></td><td class="num">772,567</td><td><code class="att">Onunload</code></td><td class="num">34,612</td><td><code class="att">Onbeforeunload</code></td><td class="num">6,751</td></tr>
   <tr class="r2"><td><code class="att">Onclick</code></td><td class="num">684,117</td><td><code class="att">Onkeypress</code></td><td class="num">28,601</td><td><code class="att">Ondragstart</code></td><td class="num">6,510</td></tr>
   <tr class="r1"><td><code class="att">Onfocus</code></td><td class="num">197,235</td><td><code class="att">Onresize</code></td><td class="num">17,950</td><td><code class="att">Onerror</code></td><td class="num">4,892</td></tr>
   <tr class="r2"><td><code class="att">Onchange</code></td><td class="num">163,476</td><td><code class="att">Oncontextmenu</code></td><td class="num">15,684</td><td><code class="att">Onscroll</code></td><td class="num">3,523</td></tr>
   <tr class="r1"><td><code class="att">Onsubmit</code></td><td class="num">152,286</td><td><code class="att">Onkeydown</code></td><td class="num">14,518</td><td><code class="att">Ondblclick</code></td><td class="num">2,416</td></tr>
   <tr class="r2"><td><code class="att">Onblur</code></td><td class="num">88,175</td><td><code class="att">Onkeyup</code></td><td class="num">9,874</td><td><code class="att">Oncopy</code></td><td class="num">720</td></tr>
</table>

<p>Event handlers that occurred below the 500 threshold included the following attributes:<br />
    <code class="att">Onabort</code>, <code class="att">Onactivate</code>, 
    <code class="att">Onafterprint</code>, <code class="att">Onbeforeactivate</code>, 
    <code class="att">Onbeforecopy</code>, <code class="att">Onbeforeprint</code>, 
    <code class="att">Oncontext</code>, <code class="att">Ondrag</code>, 
    <code class="att">Ondraggesture</code>, <code class="att">Ondrop</code>, 
    <code class="att">Onenter</code>, <code class="att">Onfocusin</code>, 
    <code class="att">Onfocusout</code>, <code class="att">Onhelp</code>, 
    <code class="att">Oninput</code>, <code class="att">Onpropertychange</code>, 
    <code class="att">Onstart</code>, <code class="att">Onmouseenter</code>, 
    <code class="att">Onmouseleave</code>, <code class="att">Onmouseoff</code>, 
    <code class="att">Onmousewheel</code>, <code class="att">Onmove</code>, 
    <code class="att">Onpaste</code>, <code class="att">Onreset</code>, 
    <code class="att">Onselect</code>, <code class="att">Onsrc</code>, 
    <code class="att">Onstart</code>.</p>

<h2 id="mouse">Mouse events</h2>
<p>Except for a few cases, the mouse-event-handler attributes 
   (<code class="att">Onmouseover</code>, <code class="att">Onmouseout</code>, 
   <code class="att">Onmousedown</code>, <code class="att">Onmouseup</code>,
   <code class="att">Onmousemove</code>, <code class="att">Onclick</code>, 
   <code class="att">Ondblclick</code> and <code class="att">Oncontextmenu</code>) 
   show their greatest affinity toward the A element. The popularity and order 
   of elements for <code class="att">Onmouseover</code> and <code class="att">Onmouseout</code> 
   is quite similar, although <code class="att">Onmouseover</code> enjoys a 
   slight lead in every single case. The same can be said of another event pair&#8212;<code class="att">Onmousedown</code> is slightly more popular in (almost) every 
   element case compared to the <code class="att">Onmouseup</code> attribute. 
   The mouse event handlers were found in 1,394,783 of the URLs that MAMA 
   analyzed, but their analogs in the DOM were only detected in 553,008 cases&#8212;the preference for the event handler version seems rather lopsided.</p>

<h3><code class="att">Onmouseover</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Elements using the Onmouseover attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="7">&#xA0;</th>
        <th>Element</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">829,262</td><td><code class="elem">INPUT</code></td><td class="num">18,389</td><td><code class="elem">BODY</code></td><td class="num">3,728</td></tr>
   <tr class="r2"><td><code class="elem">IMG</code></td><td class="num">118,796</td><td><code class="elem">TR</code></td><td class="num">15,721</td><td><code class="elem">FONT</code></td><td class="num">3,595</td></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">81,709</td><td><code class="elem">TABLE</code></td><td class="num">10,550</td><td><code class="elem">LAYER</code></td><td class="num">3,034</td></tr>
   <tr class="r2"><td><code class="elem">DIV</code></td><td class="num">64,770</td><td><code class="elem">SPAN</code></td><td class="num">9,816</td><td><code class="elem">UL</code></td><td class="num">2,597</td></tr>
   <tr class="r1"><td><code class="elem">AREA</code></td><td class="num">32,249</td><td><code class="elem">LI</code></td><td class="num">6,403</td><td><code class="elem">DT</code></td><td class="num">1,262</td></tr>
   <tr class="r2"><td><code class="elem">MARQUEE</code></td><td class="num">29,455</td><td><code class="elem">P</code></td><td class="num">5,807</td><td><code class="elem">DD</code></td><td class="num">841</td></tr> 
</table>

<h3><code class="att">Onmouseout</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> Elements using the Onmouseout attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="7">&#xA0;</th>
        <th>Element</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">781,567</td><td><code class="elem">INPUT</code></td><td class="num">15,307</td><td><code class="elem">FONT</code></td><td class="num">3,055</td></tr>
   <tr class="r2"><td><code class="elem">IMG</code></td><td class="num">107,916</td><td><code class="elem">TR</code></td><td class="num">14,754</td><td><code class="elem">LAYER</code></td><td class="num">2,980</td></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">77,063</td><td><code class="elem">TABLE</code></td><td class="num">9,149</td><td><code class="elem">UL</code></td><td class="num">2,422</td></tr>
   <tr class="r2"><td><code class="elem">DIV</code></td><td class="num">56,509</td><td><code class="elem">SPAN</code></td><td class="num">8,643</td><td><code class="elem">BODY</code></td><td class="num">1,379</td></tr>
   <tr class="r1"><td><code class="elem">MARQUEE</code></td><td class="num">29,633</td><td><code class="elem">P</code></td><td class="num">5,385</td><td><code class="elem">DD</code></td><td class="num">800</td></tr>
   <tr class="r2"><td><code class="elem">AREA</code></td><td class="num">27,535</td><td><code class="elem">LI</code></td><td class="num">4,989</td><td><code class="elem">DT</code></td><td class="num">514</td></tr>
</table>

<h3><code class="att">Onmousedown</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> Elements using the Onmousedown attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="4">&#xA0;</th>
        <th>Element</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">23,664</td><td><code class="elem">DIV</code></td><td class="num">3,030</td><td><code class="elem">TABLE</code></td><td class="num">783</td></tr>
   <tr class="r2"><td><code class="elem">IMG</code></td><td class="num">23,161</td><td><code class="elem">INPUT</code></td><td class="num">1,822</td><td><code class="elem">BODY</code></td><td class="num">644</td></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">3,111</td><td><code class="elem">AREA</code></td><td class="num">976</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3><code class="att">Onmouseup</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-4:</strong> Elements using the Onmouseup attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="4">&#xA0;</th>
        <th>Element</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">19,636</td><td><code class="elem">DIV</code></td><td class="num">979</td><td><code class="elem">INPUT</code></td><td class="num">787</td></tr>
   <tr class="r2"><td><code class="elem">A</code></td><td class="num">16,359</td><td><code class="elem">BODY</code></td><td class="num">851</td><td><code class="elem">TABLE</code></td><td class="num">592</td></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">1,229</td><td><code class="elem">AREA</code></td><td class="num">803</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3><code class="att">Onmousemove</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-5:</strong> Elements using the Onmousemove attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="3">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BODY</code></td><td class="num">3,221</td><td><code class="elem">DIV</code></td><td class="num">783</td></tr>
   <tr class="r2"><td><code class="elem">A</code></td><td class="num">1,619</td><td><code class="elem">IMG</code></td><td class="num">705</td></tr>
</table>

<h3><code class="att">Onclick</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-6:</strong> Elements using the Onclick attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="9">&#xA0;</th>
        <th>Element</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Element</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">492,092</td><td><code class="elem">TABLE</code></td><td class="num">5,866</td><td><code class="elem">TH</code></td><td class="num">581</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">156,871</td><td><code class="elem">BODY</code></td><td class="num">4,958</td><td><code class="elem">B</code></td><td class="num">562</td></tr>
   <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">56,007</td><td><code class="elem">BUTTON</code></td><td class="num">3,857</td><td><code class="elem">FORM</code></td><td class="num">535</td></tr>
   <tr class="r2"><td><code class="elem">TD</code></td><td class="num">42,654</td><td><code class="elem">P</code></td><td class="num">2,946</td><td><code class="elem">STRONG</code></td><td class="num">527</td></tr>
   <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">34,524</td><td><code class="elem">LI</code></td><td class="num">2,936</td><td><code class="elem">H1</code></td><td class="num">517</td></tr>
   <tr class="r2"><td><code class="elem">AREA</code></td><td class="num">21,503</td><td><code class="elem">SELECT</code></td><td class="num">2,604</td><td><code class="elem">TEXTAREA</code></td><td class="num">503</td></tr>
   <tr class="r1"><td><code class="elem">SPAN</code></td><td class="num">14,771</td><td><code class="elem">FONT</code></td><td class="num">2,240</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td><code class="elem">TR</code></td><td class="num">6,972</td><td><code class="elem">DT</code></td><td class="num">661</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3><code class="att">Ondblclick</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-7:</strong> Elements using the Ondblclick attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">507</td></tr>
</table>

<h3><code class="att">Oncontextmenu</code> attribute</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-8:</strong> Elements using the Oncontextmenu attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BODY</code></td><td class="num">9,555</td></tr>
   <tr class="r2"><td><code class="elem">IMG</code></td><td class="num">5,114</td></tr>
</table>

<h2 id="key">Key events</h2>
<p>The Key events (<code class="att">Onkeypress</code>, <code class="att">Onkeydown</code>, 
   <code class="att">Onkeyup</code>) register actions taken using a keyboard. 48,825 of 
   MAMA&#39;s URLs used at least one of these event attributes. MAMA&#39;s Script tokenization effort revealed 
   that these events are mentioned directly in Script 68,656 times, so authors seem 
   less inclined to use the event handler versions in this case. These event handlers 
   are primarily used with the <code class="elem">INPUT</code> element, but authors 
   use them sporadically with other elements as well. Other than the <code class="elem">INPUT</code> 
   element, the different types of key activation (up/down/press) do not show any 
   significant use patterns&#8212;the frequency rates and the elements they apply to seem 
   to be rather haphazard.</p>
 
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> Elements using &quot;Key&quot; Event Handlers</caption>
   <tr valign="bottom"><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>ELEMENT[Event]</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">INPUT</code>[<code class="att">Onkeypress</code>]</td><td class="num">16,912</td><td><code class="elem">BODY</code>[<code class="att">Onkeypress</code>]</td><td class="num">688</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code>[<code class="att">Onkeydown</code>]</td><td class="num">11,277</td><td><code class="elem">TD</code>[<code class="att">Onkeyup</code>]</td><td class="num">1,813</td></tr>
   <tr class="r1"><td><code class="elem">INPUT</code>[<code class="att">Onkeyup</code>]</td><td class="num">5,740</td><td><code class="elem">TR</code>[<code class="att">Onkeyup</code>]</td><td class="num">1,787</td></tr>
   <tr class="r2"><td><code class="elem">A</code>[<code class="att">Onkeypress</code>]</td><td class="num">7,064</td><td><code class="elem">FORM</code>[<code class="att">Onkeypress</code>]</td><td class="num">953</td></tr>
   <tr class="r1"><td><code class="elem">DIV</code>[<code class="att">Onkeypress</code>]</td><td class="num">3,105</td><td><code class="elem">TEXTAREA</code>[<code class="att">Onkeyup</code>]</td><td class="num">892</td></tr>
   <tr class="r2"><td><code class="elem">BODY</code>[<code class="att">Onkeydown</code>]</td><td class="num">1,538</td><td><code class="elem">IMG</code>[<code class="att">Onkeypress</code>]</td><td class="num">568</td></tr>
</table>

<h2 id="load">Page-loading events</h2>
<p>These events (<code class="att">Onload</code>, <code class="att">Onunload</code> 
   and <code class="att">Onbeforeunload</code>) trigger at the beginning or end of 
   the page load process. Script logic often relies on having all of a page and its 
   resources parsed and available to the script, so the overwhelming popularity of 
   the <code class="att">Onload</code> event use is understandable (especially its 
   dominance on the <code class="elem">BODY</code> element). Authors seem to prefer 
   the event-handler version of detecting the page loading events over using the 
   equivalent DOM event-detection mechanism&#8212;the event-handler version was detected 
   in 782,776 cases whereas MAMA detected only 699,741 cases using the DOM 
   <code class="svar">onload</code> and <code class="svar">onunload</code> tokens. 
   The overlap between the event handlers and DOM version was fairly low; only 138,585 
   cases used both. This means that 1,343,932 cases tried to do something with the 
   onload event&#8212;over half of all URLs using Script in some form!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> Elements using &quot;Load&quot; Event Handlers</caption>
   <tr valign="bottom"><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="4">&#xA0;</th>
        <th>ELEMENT[Event]</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Onload</code>]</td><td class="num">741,946</td><td><code class="elem">IMG</code>[<code class="att">Onload</code>]</td><td class="num">46,870</td>
        <td><code class="elem">IFRAME</code>[<code class="att">Onload</code>]</td><td class="num">1,855</td></tr>
   <tr class="r2"><td><code class="elem">BODY</code>[<code class="att">Onunload</code>]</td><td class="num">33,622</td><td><code class="elem">FRAMESET</code>[<code class="att">Onload</code>]</td><td class="num">7,650</td>
        <td><code class="elem">LAYER</code>[<code class="att">Onload</code>]</td><td class="num">1,417</td></tr>
   <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Onbeforeunload</code>]</td><td class="num">5,921</td><td><code class="elem">FRAMESET</code>[<code class="att">Onload</code>]</td><td class="num">930</td>
        <td><code class="elem">TABLE</code>[<code class="att">Onload</code>]</td><td class="num">633</td></tr>
</table>

<h2 id="form">Forms-related events</h2>
<p>While some of these event handlers are also used by other elements (like 
   hyperlinks and <code class="elem">BODY</code>), these attributes see their 
   primary usage with Forms-related elements. For the events that share element 
   usage (Blur and Focus), the Focus attribute always seems to have considerably 
   higher rates. Authors show a strong preference in using the <code class="att">Onchange</code> 
   event handler with the <code class="elem">SELECT</code> element (almost 25 
   times as often as <code class="elem">INPUT</code>), even though the use cases 
   for both are equally interesting. Overall, these attributes were used in 430,964 
   URLs. The DOM methods of specifying these same events were only used in 107,824 
   URLs, which suggests that authors prefer to use the event-handler versions for these events.</p>

<h3>Change, Focus, and Blur events</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Elements using Focus/Blur Event Handlers</caption>
   <tr valign="bottom"><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="5">&#xA0;</th>
        <th>ELEMENT[Event]</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">INPUT</code>[<code class="att">Onfocus</code>]</td><td class="num">146,043</td><td><code class="elem">AREA</code>[<code class="att">Onfocus</code>]</td><td class="num">4,193</td>
        <td><code class="elem">SELECT</code>[<code class="att">Onblur</code>]</td><td class="num">694</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code>[<code class="att">Onblur</code>]</td><td class="num">79,253</td><td><code class="elem">TEXTAREA</code>[<code class="att">Onfocus</code>]</td><td class="num">2,315</td>
        <td><code class="elem">IMG</code>[<code class="att">Onfocus</code>]</td><td class="num">951</td></tr>
   <tr class="r1"><td><code class="elem">A</code>[<code class="att">Onfocus</code>]</td><td class="num">50,809</td><td><code class="elem">TEXTAREA</code>[<code class="att">Onblur</code>]</td><td class="num">1,511</td>
        <td><code class="elem">BODY</code>[<code class="att">Onfocus</code>]</td><td class="num">924</td></tr>
   <tr class="r2"><td><code class="elem">A</code>[<code class="att">Onblur</code>]</td><td class="num">7,516</td><td><code class="elem">SELECT</code>[<code class="att">Onfocus</code>]</td><td class="num">1,329</td>
        <td><code class="elem">TD</code>[<code class="att">Onfocus</code>]</td><td class="num">650</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> Elements using the Onchange attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">158,761</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">6,636</td></tr>
</table>

<h3><code class="att">Onsubmit</code> attribute</h3>
<p>The <code class="att">Onsubmit</code> event handler clocks in with very high 
   numbers on the <code class="elem">FORM</code> element, and even has a respectable 
   number of URLs using the attribute improperly with the <code class="att">INPUT</code> 
   element. This illegal <code class="elem">INPUT</code>[<code class="att">Onsubmit</code>] 
   usage registers considerably higher than the miserable showing (only 200 URLs) of the 
   <code class="att">Onreset</code> event handler in its valid pairing with the 
   <code class="elem">FORM</code> element.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-3:</strong> Elements using the Onsubmit attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FORM</code></td><td class="num">151,699</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">804</td></tr>
</table>
    
<h2 id="other">Other popular event handlers</h2>
<p>These are the other element/event-handler combinations that registered above 
   our arbitrary usage threshold of 500 URL cases. Most of these tend to be used 
   with the <code class="elem">BODY</code> element. Applying an event handler to 
   the <code class="elem">BODY</code> element usually indicates an author&#39;s desire 
   to have the event be global in scope, so this prominence is expected.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Elements using various Event Handler attributes</caption>
   <tr valign="bottom"><th>ELEMENT[Event]</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>ELEMENT[Event]</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Onresize</code>]</td><td class="num">17,453</td><td><code class="elem">BODY</code>[<code class="att">Oncopy</code>]</td><td class="num">619</td></tr>
   <tr class="r2"><td><code class="elem">BODY</code>[<code class="att">Onselectstart</code>]</td><td class="num">6,830</td><td><code class="elem">IMG</code>[<code class="att">Onerror</code>]</td><td class="num">4,708</td></tr>
   <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Ondragstart</code>]</td><td class="num">5,671</td><td><code class="elem">DIV</code>[<code class="att">Onselectstart</code>]</td><td class="num">818</td></tr>
   <tr class="r2"><td><code class="elem">BODY</code>[<code class="att">Onscroll</code>]</td><td class="num">3,363</td><td><code class="elem">FRAMESET</code>[<code class="att">Onresize</code>]</td><td class="num">520</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-common-attributes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Common attributes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-frames/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Frames</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
