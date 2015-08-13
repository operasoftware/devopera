---
title: Autoplay, Go Away!
authors:
- bruce-lawson
tags:
- accessibility
- extensions
- video
- html5
- audio
license: cc-by-3.0
---

<p>HTML5 has an <a href="http://dev.w3.org/html5/spec/video.html#attr-media-autoplay"><code>autoplay</code> attribute</a> on the <code>audio</code> and <code>video</code> elements. Ostensibly, this is a problem for those who work in shared offices and who aren’t expecting sound to blare out when following a link, and would be a huge problem for people who rely on sound for understanding the Web, such as those using a screenreader, because the sound in a video would drown out all other content on the page.</p>
<p>Paradoxically, however, this could be good for accessibility.  <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2009-May/019647.html">Simon Pieters points out</a></p>

<blockquote cite="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2009-May/019647.html">Removing the attribute will not make pages stop autoplaying video. Instead they will use script to make videos autoplay, and then it becomes harder for the user to prevent videos from autoplaying. (You could have a pref in the UA to disable autoplay.)</blockquote>

<p>The idea is that a simple attribute is easier to write than scripts that force autoplay, and therefore content providers will use it. It&#39;s also much easier to write user scripts that block the <code>autoplay</code> attribute. Until Opera has a &quot;never autoplay media&quot; option in the configuration settings (soon!), you may wish to use this tiny Opera Extension <b>Autoplay, Go Away!</b> by Daniel Davis, Philip Jägenstedt, Bruce Lawson and Simon Pieters.</p>
<p>Why so many authors? Because it wasn&#39;t completely simple to write. Originally, Bruce had written</p>
<pre>
<code>
var els = document.querySelectorAll(&#39;video, audio&#39;);
for (var i= els.length - 1; i &gt;= 0; i--)  {
	els<i>.removeAttribute(&#39;autoplay&#39;);
	els</i><i>.setAttribute(&#39;title&#39;, &#39;right-click to start media&#39;);
}
</i></code>
</pre>
<p>This simply loops through all media elements, removing the autoplay attribute if present, and adding  an informative title. It worked perfectly on a test page in which linked to media stored locally, but failed on a test page that calls in media across the network.</p>
<p>Of all the HTML5 APIs, the media events are the subtlest and hardest to grasp to people not as brainy as Philip and Simon, with whom I consulted, who came up with the code that powers the extension:</p>
<pre>
<code>
window.addEventListener(&#39;loadstart&#39;, function(e)
        {e.target.removeAttribute(&#39;autoplay&#39;) }, true);
</code>
</pre>
<p>which works pretty well on Mac and Linux, with some unduplicatable weirdnesses on Windows. It doesn&#39;t work for elements not in the document or for scripts that do <code>play()</code>.</p>
<p>Anyway, please do any virus checking you feel you need to do (this isn&#39;t an official Opera extension) and <a href="http://people.opera.com/brucel/dev/oex/autoplay-go-away-b1.oex">download Autoplay, Go Away! beta 1</a>.</p>
<p>And I&#39;m available for freelance icon design, too.</p>
<h2>Beta 2</h2>
<p>I got some useful feedback from <a href="http://john.foliot.ca/">John Foliot</a> who said</p>
<blockquote>
[the] <code>title</code> [attribute] is affected by the verbosity settings in screen readers, with the net result that for most power users of screen reader technology, the value of <code>title</code> is not read aloud more often than not &#x2026; <code>title</code> should not be used to convey mission critical information, as many screen readers will miss it.
</blockquote>
<p>When planning how to do this, I had previously not used <code>title</code>, but instead had added the <code>controls</code> attribute but backed that out because it would disrupt the lovely design of someone&#39;s custom video player. But if they&#39;re so rude as to force autoplaying media, who cares about their design? So beta two dispenses with adding a <code>title</code> and adds <code>controls</code> instead.</p>
<p>Anyway, please do any virus checking you feel you need to do (this isn&#39;t an official Opera extension) and <a href="http://people.opera.com/brucel/dev/oex/autoplay-go-away-b2.oex">download Autoplay, Go Away! beta 2</a>.</p>
