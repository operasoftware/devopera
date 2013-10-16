Title: An Introduction to WebVTT and <track>
----
Date: 2012-06-15 09:58:46
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

<p>Web Video Text Tracks, more commonly known as <abbr title="Web Video Text Tracks">WebVTT</abbr>, is a file format that allows us to mark up external text tracks. Using it in conjunction with <abbr title="HyperText Markup Language 5">HTML5</abbr>&#39;s <code>&lt;track&gt;</code> element means we can associate information such as subtitles, captions and descriptions for a media resource such as audio or video, and display them synchronised with the media resource.</p>

<p>Being able to add textual information in this way allows us to make our media content more accessible to those who are perhaps unable to listen to a video&#39;s dialogue due to an auditory impairment or simply because the dialogue is in a language that the listener doesn&#39;t understand.</p>

<p>This article introduces the <abbr>WebVTT</abbr> file format, the various options available, and how it can be used with the <code>&lt;track&gt;</code> element to add subtitles to a video.</p>

<h2>File Format</h2>

<p>A <abbr>WebVTT</abbr> file is a simple text file, encoded as <abbr title="Unicode Transformation Format-8">UTF-8</abbr>, with a <code>.vtt</code> file extension. It follows a specific format as defined by the <a href="http://dev.w3.org/html5/webvtt/#the-webvtt-file-format">specification</a>. It may sound stressful having to learn a new file format, but don&#39;t worry — the VTT file format has been kept deliberately very simple.</p>

<div class="note">
  <p>Note: to use WebVTT files on your server, you may have to make the content type explicitly known, for example with an .htaccess file on an Apache server you could do:</p>

<pre><code class="html">&lt;Files mysubtitle.vtt&gt;
 ForceType text/vtt;charset=utf-8
&lt;/Files&gt;</code></pre>

</div>

<p>A <abbr>WebVTT</abbr> file begins with the following, in this order:</p>

<ol>
  <li>An optional <abbr title="Byte Order Mark">BOM</abbr> character</li>
  <li>The string: <em><abbr>WEBVTT</abbr></em></li>
  <li>A space or tab character followed by any number of characters that are not a line feed or carriage return</li>
  <li id="webvtt-line-terminator">Two or more &quot;<abbr>WEBVTT</abbr> line terminators&quot; (a carriage return, a line feed, or both a carriage return and a line feed)</li>
</ol>

<p>An example of this is as follows:</p>

<pre><code class="no-highlight">WEBVTT

Cue-1
00:00:15.000 --&gt; 00:00:18.000
At the left we can see...</code></pre>

<p>What comes next actually defines the textual content and is the important bit.</p>

<h3><abbr>WebVTT</abbr> Cues</h3>

<p>The content of a <abbr>WebVTT</abbr> file consists of zero or more &quot;<abbr>WebVTT</abbr> cues&quot;, each of which is separated by two or more <a href="#webvtt-line-terminator"><abbr>WebVTT</abbr> line terminators</a>.</p>

<p>A <abbr>WebVTT</abbr> cue allows you to specify some text for a particular part of a media file (e.g. a subtitle) and the timestamp range of the media file that the text in question applies to. You can also assign a unique identifier to a <abbr>WebVTT</abbr> cue, which is a simple string that cannot contain the substring: &quot;--&gt;&quot;, nor any of the <a href="#webvtt-line-terminator"><abbr>WebVTT</abbr> line terminators</a>. Each cue takes the following form:</p>

<pre><code class="no-highlight">[idstring]
[hh:]mm:ss.msmsms --&gt; [hh:]mm:ss.msmsms
Text string</code></pre>

<p class="note">Since idstrings are optional, you may not want to include them in your code, to cut down on verbosity. However, they can also be useful for file organization, and manipulating WebVTT with script.</p>

<p>The timestamp follows a standard format, where the hour part <code>[hh:]</code> is optional, and where the milliseconds are separated from the seconds by a dot (.) rather than a colon (:). The second part of the timestamp range must be greater than the first part of the timestamp range. Timestamps for different cues can overlap, if you want, but you can&#39;t have two subsequent line terminators or the string &quot;--&gt;&quot; in cue data..</p>

<p>The actual text string associated with the timestamp can be a single line of text, or multiple lines. Any text following the specified timestamp will be associated with that timestamp until either a new cue is found or the file ends.</p>

<p>Here are some <em>WebVTT</em> cue examples:</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000
I don&#39;t think so. You?

Cue-9
00:00:55.167 --&gt; 00:00:57.042
I&#39;m Ok.</code></pre>

<p>It is also possible to specify some settings on a cue by cue basis using <abbr>WebVTT</abbr> cue settings — we will look at these next.</p>

<h3><abbr>WebVTT</abbr> Cue Settings</h3>

<p>There are a number of settings that can be set per cue, and these are specified after the timestamp range value:</p>

<pre><code class="no-highlight">[idstring]
[hh:]mm:ss.msmsms --&gt; [hh:]mm:ss.msmsms [cue settings]
Text string</code></pre>

<p>These cue settings allow you to specify the position and alignment of the cue text, and the following options are available:</p>

<table>
<thead>
<tr>
<th>Setting</th>
<th>Value(s)</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr id="vertical-setting">
<td>vertical</td>
<td>rl || lr</td>
<td>Aligns text vertically to the left (lr) or right (rl) (e.g. for Japanese subtitles)</td>
</tr>
<tr id="line-setting">
<td>line</td>
<td>[-][0 or more]</td>
<td>References a particular line number that the cue is to be displayed on. Line numbers are based on the size of the first line of the cue. A negative number counts from the bottom of the frame, positive numbers from the top</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>[0-100]%</td>
<td>Percentage value indicating the position relative to the top of the frame</td>
</tr>
<tr id="position-setting">
<td>position</td>
<td>[0-100]%</td>
<td>Percentage value indicating the position relative to the edge of the frame where the text begins (e.g. the left edge in English)</td>
</tr>
<tr id="size-setting">
<td>size</td>
<td>[0-100]%</td>
<td>Percentage value indicating the size of the cue box. The value is given as a percentage of the width of the frame</td>
</tr>
<tr id="align-setting">
<td>align</td>
<td>start || middle || end</td>
<td>Specifies the alignment of the text within the cue. The keywords are relative to the text direction</td>
</tr>
</tbody>
</table>

<p class="note">Note: if no cue settings are set, the positioning default to the middle, at the bottom of the frame.</p>

<p>Let&#39;s look at a quick example of how some of these might be used:</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000 align:start size:15%
I don&#39;t think so. You?

Cue-9
00:00:55.167 --&gt; 00:00:57.042 align:end line:10%
I&#39;m Ok.</code></pre>

<p>In this short example, the cue for &quot;Cue-8&quot; is aligned to the start of the line, with the cue box size set to 15%, whilst the cue for &quot;Cue-9&quot; is aligned to the end of the line, and positioned vertically 10% from the top of the frame.</p>

<h3><em>WebVTT</em> Cue Components</h3>

<p>In addition to all this, you can use &quot;<abbr>WebVTT</abbr> cue components&quot; to add further information to the actual cue text itself. These components are similar to <abbr title="HyperText Markup Language">HTML</abbr> elements, and can be used to add semantics and styling to the actual text strings. A list of the different components available is given below:</p>

<table>
<thead>
<tr>
<th>Value</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr id="class-label">
<td>c</td>
<td>Specifies a (<abbr title="Cascading StyleSheets">CSS</abbr>) class, which follows the <code>c</code>, e.g. <code>&lt;c.className&gt;Cue text&lt;/c&gt;</code></td>
</tr>
<tr id="italic-label">
<td>i</td>
<td>Specifies italic text</td>
</tr>
<tr id="bold-label">
<td>b</td>
<td>Specifies bold text</td>
</tr>
<tr id="underline-label">
<td>u</td>
<td>Specifies underlined text</td>
</tr>
<tr id="ruby-label">
<td>ruby</td>
<td>Specifies something similar to <abbr>HTML5</abbr>&#39;s <a href="http://dev.w3.org/html5/spec/the-ruby-element.html#the-ruby-element">ruby element</a>. Within this component, one or more occurrences of a <code>rt</code> element are allowed. (<a href="http://my.opera.com/tagawa/blog/the-html5-ruby-element-in-words-of-one-syllable-or-less">The HTML5 <code>&lt;ruby&gt;</code> element in words of one syllable or less</a>)</td>
</tr>
<tr id="voice-label">
<td>v</td>
<td>Specifies a voice label (if provided) that the cue text is being &quot;spoken in&quot;, e.g. <code>&lt;v Ian&gt;This is useful for adding subtitles&lt;/v&gt;</code>. Note that the voice label won&#39;t be displayed. It&#39;s just there as a styling hook.
</td>
</tr>
</tbody>
</table>

<p>An example of some of the components in action can be seen below:</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000 align:start size:15%
&lt;v Emo&gt;I don&#39;t think so. &lt;c.question&gt;You?&lt;/c&gt;&lt;/v&gt;

Cue-9
00:00:55.167 --&gt; 00:00:57.042 align:end line:10%
&lt;v Proog&gt;I&#39;m Ok.&lt;/v&gt;</code></pre>

<p>This example specifies two different voices for the cue text, <em>Emo</em> and <em>Proog</em> respectively. In addition, a <abbr>CSS</abbr> class of <code>question</code> is specified in the first cue text, which can then be used for styling purposes. A class such as this can be styled in the usual way via <abbr>CSS</abbr> attached or defined in the calling <abbr>HTML</abbr> page.</p>

<div class="note">
<p>Note that to style cue text in CSS, you need to use a special pseudo-element selector, for example:</p>

<pre><code class="css">video::cue(v[voice=&quot;Emo&quot;]) { color:lime }</code></pre>
</div>

<p>It is also possible to add timestamps to cue text, indicating that different parts occur at different times. An example of this is shown below:</p>

<pre><code class="no-highlight">Cue-8
00:00:52.000 --&gt; 00:00:54.000
&lt;c&gt;I don&#39;t think so.&lt;/c&gt; &lt;00:00:53.500&gt;&lt;c&gt;You?&lt;/c&gt;</code></pre>

<p>This will cause all the text to be displayed at the same time, but do note that in supporting browsers you will be able to use the <code>:past</code> and <code>:future</code> pseudo classes to style text differently depending if it is in the future or past. For example:</p>

<pre><code class="css">video::cue(c:past) { color:yellow }</code></pre>

<p>So as you can see, the <abbr>WebVTT</abbr> file provides you with many options, allowing you a lot of control over how any text (especially video subtitles) might appear. But how can you actually make your text tracks appear alongside your media, and what else can you do with it? We&#39;ll look at this next.</p>

<p class="note">Note: There is a <a href="http://quuz.org/webvtt/">Live WebVTT validator</a> available, for when you want to check whether your WebVTT files are written correctly.</p>

<h2>Using the <code>&lt;track&gt;</code> element</h2>

<p><abbr>HTML5</abbr>&#39;s <code>&lt;track&gt;</code> element allows you to link external track files with a particular resource. The <code>&lt;track&gt;</code> element takes a number of attributes, which are listed below:</p>

<table>
<thead>
<tr>
<td>Name</td>
<td>Value(s)</td>
<td>Description</td>
</tr>
</thead>
<tbody>
<tr>
<td>kind</td>
<td>subtitles</td>
<td>Indicates that the resource specified by <code>src</code> is to be used as subtitles.</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>captions</td>
<td>Indicates that the resource specified by <code>src</code> is to be used as captions. Captions contain more than just dialogue, they can also contain musical queues, sound effects and other audio information.</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>descriptions</td>
<td>Indicates that the resource specified by <code>src</code> is to be used as descriptions. These contain textual descriptions intended for audio when the visual component is unavailable.</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>chapters</td>
<td>Indicates that the resource specified by <code>src</code> is to be used as chapter navigation.</td>
</tr>
<tr>
<td>&#xA0;</td>
<td>metadata</td>
<td>Indicates that the resource specified by <code>src</code> is to be used as metadata.</td>
</tr>
<tr>
<td>src</td>
<td><abbr title="Universal Resource Locator">URL</abbr></td>
<td>Specifies the resource to use</td>
</tr>
<tr>
<td>srclang</td>
<td>Language code</td>
<td>Specifies the language of the resource contained in the <code>src</code> attribute</td>
</tr>
<tr>
<td>label</td>
<td>Free text</td>
<td>Specifies a unique label for this element</td>
</tr>
<tr>
<td>default</td>
<td>n/a</td>
<td>If present, indicates that this element is enabled by default if the user&#39;s settings do not specify anything else</td>
</tr>
</tbody>
</table>

<p>The <code>&lt;track&gt;</code> element is specified as a child of an <code>&lt;audio&gt;</code> or <code>&lt;video&gt;</code> element, and there can of course be more than one <code>&lt;track&gt;</code> element defined: each one may provide subtitles for different languages and/or different kinds of text tracks. An example of a video that has subtitles and chapters defined for it in both English and German is given below:</p>

<pre><code class="html">&lt;video controls&gt;
  &lt;source src=&quot;elephants-dream.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;elephants-dream.webm&quot; type=&quot;video/webm&quot;&gt;
  &lt;track label=&quot;English subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-subtitles-en.vtt&quot; default&gt;
  &lt;track label=&quot;Deutsche Untertitel&quot; kind=&quot;subtitles&quot; srclang=&quot;de&quot;
         src=&quot;elephants-dream-subtitles-de.vtt&quot;&gt;
  &lt;track label=&quot;English chapters&quot; kind=&quot;chapters&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-chapters-en.vtt&quot;&gt;
&lt;/video&gt;</code></pre>

<h2>Browser Support</h2>

<p>Unfortunately at the moment browser support for <abbr>WebVTT</abbr> and the <code>&lt;track&gt;</code> element is poor: it is currently only supported by Internet Explorer 10 and Chrome 16+.</p>
<p>You can enable parsing of the <code>track</code> element in Chrome (via <code>chrome:flags</code> and &quot;enable <code>&lt;track&gt;</code> element&quot;), which enables your <abbr>WebVTT</abbr> subtitles to be rendered, although no choosing between languages is allowed when multiple <code>track</code> elements (with <code>kind=&quot;subtitles&quot;</code>) exist. The one which has the <code>default</code> attribute is chosen, although this is not mandatory.</p>
<p>Internet Explorer 10 <a href="http://ie.microsoft.com/testdrive/Graphics/VideoCaptions/Default.html">supports <abbr>WebVTT</abbr> and the <code>&lt;track&gt;</code> element</a>, but it is only in beta mode and available on Windows 8 only.</p>

<p>For now the only way to get cross browser support is to use a JavaScript polyfill.</p>

<h2 id="polyfills">Polyfills</h2>

<p>There are a number of <code>&lt;track&gt;</code> polyfills available at the moment, but many of them don&#39;t support <abbr>WebVTT</abbr> — they support the older <abbr title="Web Subtitle Resource Tracks">WebSRT</abbr> format, the precursor to <abbr>WebVTT</abbr>. Listed below are some polyfills that <em>do</em> support <abbr>WebVTT</abbr>:</p>

<ul>
<li><a href="http://www.delphiki.com/html5/playr/">Playr</a> by <a href="http://twitter.com/delphiki">Julien Villetorte</a> — supports subtitles, captions, and chapters</li>
<li><a href="http://captionatorjs.com/">Captionator</a> by <a href="http://twitter.com/cgiffard">Christopher Giffard</a> — supports subtitles</li>
<li><a href="http://mediaelementjs.com/">MediaElementJS</a> by <a href="http://twitter.com/johndyer">John Dyer</a> — supports subtitles</li>
</ul>

<p>All of these support <abbr>HTML5</abbr> <code>&lt;video&gt;</code>, but not <abbr>HTML5</abbr> <code>&lt;audio&gt;</code>, but I think that they could be easily adapted to do so in some way.</p>

<p>Personally I prefer to use Playr as it supports more than just subtitles, and it&#39;s also one of the easier polyfills to use: let&#39;s look at an example of how to implement it.</p>

<h2>WebVTT/<code>&lt;track&gt;</code> Polyfill Example</h2>

<p>Playr is written by Julien &#39;delphiki&#39; Villetorte and is incredibly simple to use, once you have your <abbr>WebVTT</abbr> file(s) and video of course.</p>

<h3>Using Playr</h3>

<p>There only a few steps required to get Playr up and running:</p>

<ol>
<li><p><a href="https://github.com/delphiki/Playr/downloads">Download Playr from Github</a></p></li>
<li><p>Include the JavaScript and <abbr>CSS</abbr> files in your webpage, like so:</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;playr/playr.css&quot; /&gt;
&lt;script src=&quot;playr/playr.js&quot;&gt;&lt;/script&gt;</code></pre>
</li>

<li>Add the class <code>playr_video</code> to your <code>&lt;video&gt;</code> element</li>

</ol>

<p>And that&#39;s it! Playr will take over playing your video and parse any <code>&lt;track&gt;</code> elements that it contains. As mentioned earlier, Playr supports subtitles, chapters and captions (which get treated in the same way as subtitles). My <a href="http://dev.opera.com/static/articles/2012/an-introduction-to-webvtt-and-track/webvtt-example.html">example code</a> adds English and German subtitles to a video, as well as navigational English chapters.</p>

<p>The <code>&lt;video&gt;</code> element in my example looks like this:</p>

<pre><code class="html">&lt;video preload=&quot;metadata&quot; controls class=&quot;playr_video&quot;&gt;
  &lt;source src=&quot;elephants-dream.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;elephants-dream.webm&quot; type=&quot;video/webm&quot;&gt;
  &lt;track label=&quot;English subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-subtitles-en.vtt&quot; default&gt;
  &lt;track label=&quot;Deutsch subtitles&quot; kind=&quot;subtitles&quot; srclang=&quot;de&quot;
         src=&quot;elephants-dream-subtitles-de.vtt&quot;&gt;
  &lt;track label=&quot;English chapters&quot; kind=&quot;chapters&quot; srclang=&quot;en&quot;
         src=&quot;elephants-dream-chapters-en.vtt&quot;&gt;
&lt;/video&gt;</code></pre>

<h3>Displaying a Transcript</h3>

<p>In addition to supplying subtitles and chapters, I have also included a small JavaScript file, <a href="http://dev.opera.com/static/articles/2012/an-introduction-to-webvtt-and-track/transcript.js"><code>transcript.js</code></a>, which defines a function <code>loadTranscriptFile</code>. This takes a <abbr>WebVTT</abbr> subtitles (or captions) file as an argument, parses it (using code taken from Playr), and displays the text on screen, in an element with an id of <code>transcript</code>.</p>

<p>If the <abbr>WebVTT</abbr> subtitle text contains the <a href="#voice-label">&quot;voice&quot; tag</a>, the name entered is also displayed alongside the text.</p>

<h2>Summary</h2>

<p>The introduction of <abbr>WebVTT</abbr> and the <abbr>HTML5</abbr> <code>&lt;track&gt;</code> element makes it much easier for web authors to make their video and audio more accessible to those who, for whatever reason, are unable to access the content in the way it is usually presented.</p>

<p>Whilst browser support is still nascent, a number of JavaScript polyfills allow us to make our media more accessible now, in a way that will be understood by browsers once support for <abbr>WebVTT</abbr> increases.</p>

<p>Accessibility is something that we, as web authors, should be thinking about when serving media content to our users. The more users who can access our content the better, right?</p>td
