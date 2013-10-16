Title: XHTML+Voice in Style
----
Date: 2006-10-30 08:32:50
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

<p class="note">July 27th 2011: Please note that Voice only works in Opera on Windows 2000/XP, and we no longer officially support it.</p>

<div id="voice">

<p>This article builds upon topics in the <a href="http://dev.opera.com/articles/view/xhtml-voice-by-example/">XHTML+Voice by Example</a> article. A knowledge of CSS is also assumed.</p>

<h2>Hello World! Revisited</h2>
<p>In the Hello World! example it wasn&#39;t really the block element that did the talking:</p>
<pre>&lt;block&gt;Hello World!&lt;/block&gt;</pre>
<p>There is an implicit &#39;prompt&#39; element hidden inside &#39;block&#39; element. In other words the code above is identical to this:</p> 

<pre>&lt;block&gt;
<b>&lt;prompt&gt;Hello World!&lt;/prompt&gt;</b>
&lt;/block&gt;</pre>

<p>In X+V the &#39;prompt&#39; element can have a &#39;src&#39; attribute. That &#39;src&#39; attribute can point to any element that is supposed to be spoken.</p>

<p>The following document has two different style sheets attached. By default  the &quot;Masculine&quot; style sheet is used, but the user may elect to use the &quot;Feminine style sheet instead&quot;. One way you can choose an alternate  style sheet in Opera is to use the View &gt; Style submenu. In this case you should see the &quot;Masculine&quot; and &quot;Feminine&quot; options at the bottom of the menu. </p>

<p style="text-align:center" />
  
  

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;
&quot;http://www.voicexml.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      xmlns:xv=&quot;http://www.voicexml.org/2002/xhtml+voice&quot;
      xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;&gt;
&lt;head&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;male.css&quot; <b>title=&quot;Masculine&quot;</b>/&gt; <b class="ref">[1]</b>
  &lt;link <b>rel=&quot;alternate stylesheet&quot;</b> href=&quot;female.css&quot; <b>title=&quot;Feminine&quot;</b>/&gt; <b class="ref">[2]</b>
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;speak&quot;&gt;
    &lt;block&gt;
      <b>&lt;prompt xv:src=&quot;#greetings&quot;&gt;I failed you.&lt;/prompt&gt;</b> <b class="ref">[3]</b>
    &lt;/block&gt;
  &lt;/form&gt;
&lt;/head&gt;
&lt;body&gt;
<b>  &lt;p id=&quot;greetings&quot;&gt;Hello world!&lt;/p&gt;</b> <b class="ref">[4]</b>
  &lt;input type=&quot;button&quot; value=&quot;Greet by gender&quot; ev:event=&quot;click&quot; ev:handler=&quot;#speak&quot;/&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<ul class="notate">
<li><b>[1]</b> Any style sheet link with a &#39;title&#39; attribute (in this case &quot;Masculine&quot;) is a preferred style sheet. Unlike regular style sheets (that have no &#39;title&#39;  attribute), preferred style sheets are turned off when an alternate style is  selected. There can only be one set of preferred style sheets.</li>
<li><b>[2]</b> Any style sheet link with a &#39;title&#39; attribute and both &quot;alternate&quot; 
  and &quot;stylesheet&quot; relations is an alternate style sheet. An alternate 
  style sheet can be turned on by user interaction such as selecting from a menu. 
  Only one set of alternate or preferred style sheets can be active at a time. 
  There can be any number of alternate style sheets.</li>
<li><b>[3]</b> The spoken text, &#39;prompt&#39; element, is by reference (xv:src=&quot;#greetings&quot;).  The content (&quot;I failed you.&quot;) is alternate text that will only be spoken if the #greetings element cannot be spoken for any reason. This is also what an VoiceXML or X+V browser before version 1.2 will speak.</li>
<li><b>[4]</b> The #greetings element. It will be displayed on screen as well as spoken when the button is clicked. As any other HTML element it can be styled using CSS. With speech CSS you can style not only how this paragraph looks, but also how it sounds.</li>
</ul>
<p>The &quot;Masculine&quot; style sheet looks like this, giving a male voice and a masculine cyan background color:</p>
<pre>#greetings {voice-family: male; background: cyan;}</pre>

<p>And the &quot;Feminine&quot; style sheet like this:</p>
<pre>#greetings {voice-family: female; background: pink;}</pre>

<p class="tryit"><a href="pick-and-speak.xml">Try this in action.</a></p>

<h2>Look who&#39;s talking</h2>
<p>There is much more to styling speech than male and female voices.</p>


<pre>&lt;!DOCTYPE html PUBLIC &quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;
&quot;http://www.voicexml.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;
	  xmlns:xv=&quot;http://www.voicexml.org/2002/xhtml+voice&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Example 2: Listen to me&lt;/title&gt;
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;speak-now&quot;&gt;
   &lt;block&gt;&lt;prompt xv:src=&quot;#spoken&quot;/&gt;&lt;/block&gt;
  &lt;/form&gt;
  &lt;style type=&quot;text/css&quot;&gt;
  #spoken {background: #FFD}
  h1, h2, h3, h4 {  
   voice-family: <b>child female</b>; <b class="ref">[1]</b> 
   <b>-xv-voice-volume: loud</b>;   <b class="ref">[2]</b> 
	pause: 1s;
  }
  p {
     voice-family: <b>male 1</b>;   <b class="ref">[3]</b>
	 -xv-voice-volume: soft;
  }
  .surprise {
     pause-before: 1.5s;
     -xv-voice-volume: x-loud;
  }
  .disclaimer {
     -xv-voice-volume: x-soft; 
     -xv-voice-rate: <b>280</b>;    <b class="ref">[4]</b>
  }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Example 2:  Listen to me&lt;/h1&gt;
  &lt;p&gt;Either use an Opera command to speak the following 
  paragraphs &lt;button <b>ev:event=&quot;focus&quot;</b> ev:handler=&quot;#speak-now&quot;&gt;or  <b class="ref">[5]</b>
  click this button&lt;/button&gt;&lt;/p&gt;
&lt;div id=&quot;spoken&quot;&gt; 
&lt;h2&gt;Opera releases voice browser&lt;/h2&gt;
&lt;p&gt;Opera Software has released a browser to fulfil all 
your conversational needs. Like any good partner it can listen 
to you, ignore you, and talk back &lt;span class=&quot;surprise&quot;&gt;at 
the least expected moment.&lt;/span&gt;&lt;/p&gt;
&lt;h3 class=&quot;disclaimer&quot;&gt;Disclaimer&lt;/h3&gt;
&lt;p class=&quot;disclaimer&quot;&gt;Void when used in the vicinity of 
person or persons of human or inhuman origin.&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<ul class="notate">
<li><b>[1]</b> This is a generic voice family (&quot;age gender&quot;)</li>
<li><b>[2]</b> <code>voice-volume</code> is a new property in CSS3 and uses <code>-xv-voice-volume</code> (with the <code>-xv-</code> prefix) in Opera, as CSS3 Speech is in a draft stage at the W3C.</li>
<li><b>[3]</b> This is a numbered generic voice family. You will not know how &quot;male 1&quot; will sound like in a browser (apart from being male), but if there are two different male voices they will sound different.</li>
<li><b>[4]</b> As the equivalent of small type is used 280 words per minute, which is very fast. This is also an example why the <code>-xv-</code> prefix is necessary. <a href="http://www.w3.org/TR/2004/WD-css3-speech-20040727/">A more recent draft</a> has changed this from a number (words per minute) to a percentage (of normal speed). </li>
<li><b>[5]</b> This button uses a <code>focus</code> event instead of <code>click</code>. A mouseclick will provide a focus on the button, and so will a keyboard <kbd>Tab</kbd></li>
</ul>

<p class="tryit"><a href="talkathon.xml">Try this in action.</a></p>

<h2>Styling speech with CSS</h2>
<p>Styling of speech was first specified with Aural CSS in CSS2, and then with the CSS3 Speech Module. Opera&#39;s speech support is based upon the latter.</p>
<p>Since the CSS3 Speech specification is in an early (Working Draft) stage, the properties must have a prefix to allow the final version to work differently from the current, experimental, one. All new Speech properties have an <code>-xv-</code> prefix, which will be dropped when CSS3 Speech becomes a candidate recommendation. </p>
<h3>New speech properties in CSS3</h3>

<ul class="bullets">
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#interpret-as-props">-xv-interpret-as</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#phonetic-props">-xv-phonemes</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-balance</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-duration</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-pitch</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-pitch-range</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-rate</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-stress</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#volume-props">-xv-voice-volume</a></li>
</ul>
<h3>CSS2 Aural properties also in CSS3 Speech</h3>
<ul class="bullets">
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#cue-props">cue</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#cue-props">cue-after</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#cue-props">cue-before</a></li>  
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#pause-props">pause</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#pause-props">pause-after</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#pause-props">pause-before</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#speaking-props">speak</a></li>
  <li><a href="http://www.w3.org/TR/2003/WD-css3-speech-20030514/#voice-char-props">voice-family</a></li>
</ul>
<h3>CSS2 Aural properties not in CSS3 Speech</h3>
<p>These properties are effectively deprecated, though a couple may become a part of an expected CSS3 Audio Module. Broadly speaking all the functionality from CSS2 should be in either CSS3 Speech Module or CSS3 Audio Module, but likely under another name.</p>

<ul class="bullets">
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-azimuth">azimuth</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-elevation">elevation</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-pitch">pitch</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-pitch-range">pitch-range</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-play-during">play-during</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-richness">richness</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-speak-numeral">speak-numeral</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-speak-punctuation">speak-punctuation</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-speech-rate">speech-rate</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-stress">stress</a></li>
  <li><a href="http://www.w3.org/TR/CSS2/aural.html#propdef-volume">volume</a></li>
</ul>

<h2>Be heard, not seen</h2>
<p>Many browsers, including Opera, can show content in <code>head</code>. This is not what you want for voice forms, but is easy to fix:</p>
<pre>head {display:none}</pre>
<p>If you have normal, valid web pages, you can use this rule in your site-wide style sheet. There is rarely any need to display head content. When there is, you can just override it on those pages:</p>
<pre>head {display:block}</pre>

<h2>Implementation notes</h2>
<p>CSS3 Speech is in the working draft stage at the W3C. Consider CSS3 Speech to be experimental, any speech style sheet you make now you will have to update in the future.</p>

</div>
  
