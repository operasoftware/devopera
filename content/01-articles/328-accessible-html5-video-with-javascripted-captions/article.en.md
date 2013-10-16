Title: Accessible HTML5 Video with JavaScripted captions
----
Date: 2010-01-13 12:42:47
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<p class="note">NOTE, September 22nd 2011: There is a new and shiny way to add subtitles to HTML5 video using the new <a href="http://developers.whatwg.org/the-iframe-element.html#the-track-element"><code>&lt;track&gt;</code></a> element, but this isn&#39;t yet implemented. The hacky technique discussed below works now, but it isn&#39;t the &quot;right&quot; way to do it.</p>

<h2>Accessibility of video</h2>
<p>It’s great that <abbr>HTML</abbr>5 allows us to embed video into web pages that can then be displayed directly by browsers, without having to rely on third-party plugins. (For more information on the true power of <abbr>HTML</abbr>5 video, see <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a>.)</p>

<p>The elephant in the corner regarding all video — whether it be <abbr>HTML</abbr>5 or proprietary — is accessibility. What are conscientious developers to do to provide textual alternatives for those who can’t access the contents of the video? In <abbr>HTML5</abbr> there isn’t an <code>alt</code> attribute on the <code>video</code> element as there is on <code>img</code>, but you can add &quot;fallback content&quot; between the tags like this:</p>

<pre><code>&lt;video&gt;
Your browser doesn&#39;t support the open Ogg Theora codec. 
Please &lt;a href=&quot;video.ogg&quot;&gt;download the video&lt;/a&gt; and view offline.
&lt;/video&gt;</code></pre>

<p>However, the <a href="http://dev.w3.org/html5/spec/video.html#video">spec says</a>:</p>
<blockquote>&#x2026;this content is not intended to address accessibility
concerns. To make video content accessible to the blind, deaf, and
those with other physical or cognitive disabilities, authors are
expected to provide alternative media streams and/or to embed
accessibility aids (such as caption or subtitle tracks) into their
media streams.</blockquote>

<p>In theory, video files should carry their own captions — not
burned onto the images, but in a textual format in a separate file, packaged in the wrapper along with the actual video. That way, the author of the content,
who knows it best, writes it once and anyone embedding the video in
their page gets the captions/transcript for free.</p>

<p>However, in practice, nobody knows how to do that and no browser knows
how to get at that data or present it to a user. So we need some kind of hack that fills the gap. Here&#39;s a proof of concept I came up with that stores a
transcript as plain text on the page, wrapped in a <code>&lt;div
id=&quot;transcript&quot;&gt;</code> element. If a user comes to the page with JavaScript turned off, they simply see a video with browser controls and a heading
&quot;transcript&quot; following it, with the transcription.</p>

<p>For those with JavaScript enabled, I want to show individual
lines of the transcript overlaid on top of the video as captions.
They will still be plain text, so assistive
technologies can access the captions, as well as being viewable on screen, and these will be synchronised with the video.</p>

<p>Here&#39;s a silly sample video that shows the technique: <a href="http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html">
Example captioned video — How to Leverage a Synergy</a>. (You need to be using an <a href="http://www.opera.com/browser/next/">Ogg video-enabled browser</a>.)</p>

<p>This proof-of-concept doesn&#39;t work in Safari. That&#39;s because Safari doesn&#39;t support the open Ogg codec that Opera, Firefox and Chrome support. If you wish to encode the video for Safari too, and use multiple <a href="http://dev.w3.org/html5/spec/video.html#the-source-element"><code>source</code> elements</a> (one for Ogg, one for MP4), the demo will work. Internet Explorer currently does not support the <code>video</code> element.</p>

<p class="note">If you view source, you’ll see that the transcript is marked up semantically into paragraphs, but each <q>blob</q> of content to be overlaid on the video is wrapped in a <code>span</code> because the division of <q>what is displayed when</q> is based not on meaning but on timing and presentational concerns (such as not filling the screen with text).</p>

<p>In order for the script to know when to display each span, I’ve timestamped each one. Rather than add these inside the text, I’m using
a new feature of <abbr>HTML</abbr>5 that allows any element to have
<a href="http://dev.w3.org/html5/spec/dom.html#embedding-custom-non-visible-data">
custom <code>data-</code> attributes</a> to pass data to scripts.
You can choose any name you like, but they must start with &quot;data-&quot;
For this example, I’m calling them <code>data-begin</code> and
<code>data-end</code>, as those match the names in the <a href="http://www.w3.org/TR/2009/CR-ttaf1-dfxp-20090924/#timing-attribute-vocabulary">
W3C Timed Text specification</a> and <a href="http://www.w3.org/TR/SVG/animate.html#TimingAttributes">SVG/<abbr title="Synchronized Multimedia Integration Language">SMIL</abbr>
animation specification</a>s.</p><p>I set the <code>data-begin</code> attribute to the time offset (from the start of the video) that I want the <code>span</code> to appear. The <code>data-end</code> attribute is set to the time that the caption should disappear. So</p>

<pre><code>&lt;span data-begin=1 data-end=6&gt;Hi, my name&#39;s Dr Archimedes Einstein&#x2026;&lt;/span&gt;</code></pre>
<p>causes the caption to appear 1 second from the beginning of the video, and disappear 6 seconds from the beginning of the video (therefore, in view for 5 seconds in total).</p>
<p>The script then hides the <code>div</code> that houses the plain transcript (I&#39;m using JavaScript to write a CSS rule to set it to
<code>display:none</code>). It grabs each <code>span</code> (but not the heading) from the hidden <code>div</code> thus:</p>

<pre><code>var nodes = document.querySelectorAll(&#39;#transcript span&#39;);</code></pre>

<p>We need to position these on top of the video at the correct
time. Overlaying the text is easy; I simply absolutely position
another <code>div</code> (with an <code>id</code> of <var>captions</var>) over the top of the video. To
increase the chance of legibility with white text on a light
background, I will also add some text shadow using CSS:</p>

<pre><code>text-shadow: black 1px 1px 3px;</code></pre>

<p>To determine when to overlay each <code>span</code>, the script uses the
<code>ontimeupdate</code> event (which the video fires every 250ms
or so in Opera) to interrogate the video API and find out how long it has
been playing:</p>

<pre><code>var v = document.querySelector(&#39;video&#39;); 
var now = v.currentTime;</code></pre>

<p>and then loops around the <code>span</code> elements in the transcript until it finds one with a <code>data-begin</code> and <code>data-end</code> time that encompasses the current time.</p>

<p>In this example, I’m using CSS-generated content to insert
the timestamps into the non-JavaScript transcript:</p>

<pre><code>#transcript [data-begin]:before 
  {content: &quot; [&quot; attr(data-begin) &quot;s-&quot; 
  attr(data-end)&quot;s] &quot;; 
  font-size:80%;}</code></pre>

<p>and formatting it using <abbr>CSS</abbr> tables. Both of
these are entirely optional.</p>

<p class="note">As I said above, this is a hack. It requires lots of developer
work (although to make any kind of captioning file you’ll need to
transcribe the audio and note the timings, which is in itself a lot of work). </p>

<p>A couple of problems remain with the script. Firstly, if I mark up
  abbreviations in the transcript with <code>abbr</code>, or foreign
  languages with <code>span lang=</code>, it won’t make it through
  to the synchronised captions (although it’s unlikely to matter). I haven’t tried including any WAI-ARIA information such as <code>aria-describedby</code> (and would welcome feedback on how this should work with ARIA).</p>

<p>Also, in production-ready code the user should be given the option of seeing the transcript rather than captions, even if they are running JavaScript &#x2014; perhaps they’re using a mobile phone and don’t want to download the whole video, but want to see the contents as plain text.</p>


<p>The code is released with a creative commons license, so please feel free to amend it&#x2014;and please leave a link or <a href="http://www.twitter.com/brucel">tweet me</a> if you do.</p>
<p>Also see Daniel Davis&#39; <a href="http://people.opera.com/brucel/demo/video/multilingual-synergy.html">multilingual example</a> that allows you to choose between English and Japanese, even while the video is running.</p>

<h2 id="more">Read more</h2>
<ul>
<li><a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">Everything you need to know about HTML5 video and audio</a> (and it really is <em>everything</em>!)</li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video"><code>video</code> specification</a></li>
<li><a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video">How <code>video</code> is implemented in Opera</a></li>
</ul>
<h2 id="more">Acknowledgments</h2>
<p>Thanks to  <a href="http://www.twitter.com/foolip">Philip J&#xE4;genstedt</a> for coding the JavaScript in the demo, David Storey for invaluable suggestions, and my daughter Marina for standing on her bed to film the video while I commandeered her homework desk.</p>
