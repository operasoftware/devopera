Title: Getting to know Voice
----
Date: 2006-10-30 08:35:45
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

<p class="note"><strong>Article update, 4th June 2010</strong>: Updates made to Opera support information, and details about Aural CSS specifications.</p>

<div id="voice">
<p>From a different world than the traditional browsing world comes a range of techniques that allows a developer to code for speech behaviours much more easily than previously possible. Opera has had support for this since Opera 7.6.</p>

<h3 class="compact">Speech Recognition</h3>
<p>Understanding natural speech is hard for a machine, sometimes almost impossible. One approach to make this easier is to train the machine to recognize the user&#39;s voice and speech patterns. The user will be told to speak some predetermined texts to make the machine accustomed to the user.</p>
<p>This is not practical for web pages, so another approach is used instead, namely explicit <span class="glossary-ref">grammars</span> of expected utterances. The grammars have two advantages. The machine has a dramatically higher chance of guessing what the user meant this way. Also by restricting the accepted values it is easier to make a sensible response to the now known possible values.</p>

<h3 class="compact">Text To Speech</h3>
<p>The machine talks back. It is possible get fairly natural machine generated voices, but this is a trade-off with file size, resource use, and flexibility. The  machine voices typically used for web pages would fool nobody, but they are still  easy to understand. Text To Speech is fairly common by now, but Opera is the only browser offering aural styling using CSS.</p>

<h3>XHTML+Voice</h3>
<p>The language or profile Opera uses to combine XHTML and Voice is called XHTML+Voice, or X+V for short. More than for normal XHTML pages, X+V design is primarily about interaction design. You create the storyboard for what the user can do and when. You can make simple web page enhancement, or you can craft elaborate Byzantine labyrinths for the user to get lost in, it is all up to you.</p>
<p>An X+V  web page is a normal XHTML page with additional Voice forms in the head. These voice forms cover both speech recognition and text to speech markup. The interaction is event based, you use XML Events to describe what should be the consequences or <span class="glossary-ref">handlers</span> of different events. An event can for instance be when the page has loaded, the user clicks on a button, or says something the speech recognizer doesn&#39;t understand. The consequence can be a voice monolog or  dialog with the user. This is turn can for instance trigger a script, reformat the page, or throw another event.</p>

<h2>Getting started with X+V</h2>
<dl>

<dt><a href="http://dev.opera.com/articles/view/38/">X+V in Style</a></dt>
<dd><i class="tagline">After all, it isn&#39;t as much what you say as how you say it.</i> Add styled speech to X+V.</dd>

<dt><a href="http://dev.opera.com/articles/view/39/">X+V in Action</a></dt>
<dd><i class="tagline">Do as I say, not as I do.</i> Use X+V to voice-enable JavaScript</dd>

<dt><a href="http://dev.opera.com/articles/view/20/">How to Add Voice Interactivity to Your Site</a></dt>
<dd>Practical experience of adding voice to a web site 

</dd><dt>
<dt><a href="ftp://ftp.software.ibm.com/software/pervasive/info/multimodal/multimodal_faq.pdf">Multimodal FAQ</a> (PDF)</dt>
<dd><i class="tagline">What is this multimodal anyway?</i> An introduction to X+V in questions and answers form.</dd>
</dt></dl>

<h2>Getting to know it</h2>
<p>Even though X+V still is cutting edge, there are places you can go for help and more information.</p>
<dl><dt><a href="http://my.opera.com/community/forums/forum.dml?id=83">Opera accessibility and voice browsing</a></dt>
<dd>Welcome to our forum on everything voice-related.</dd>

<dt><a href="http://www.ibm.com/software/pervasive/multimodal/">IBM multimodal site</a></dt><dd>This IBM site has a large collection of documents on voice and multimodal interaction.</dd>

<dt><a href="http://www.w3.org/2002/mmi/">W3C Multimodal Interaction working group</a></dt>
<dd>The documents here are quite technical, but this is the place where the future standards are defined. It has a <a href="http://lists.w3.org/Archives/Public/www-multimodal/">public mailing list</a>. You might also want to look at the <a href="http://www.w3.org/MarkUp/">HTML</a> and <a href="http://www.w3.org/Voice/">Voice</a> working group pages. Styling speech is done by the <a href="http://www.w3.org/Style/CSS/">CSS</a> working group.</dd>
</dl>

<h2>Learning to speak</h2>
<h3>XHTML+Voice</h3>
<dl>
<dt><a href="ftp://ftp.software.ibm.com/software/pervasive/info/multimodal/XHTML_voice_programmers_guide.pdf">XHTML+Voice Programmer&#39;s Guide</a> (PDF)</dt><dd>The book of X+V, including a reference for every element added to XHTML.</dd>

<dt><a href="ftp://ftp.software.ibm.com/software/pervasive/info/XV_and_Speech_Considerations.pdf">X+V Speech Considerations</a></dt>
<dd>The alternatives and trade-offs for text to speech. Why the most natural-sounding voice may not always be the best choice.</dd>

<dt><a href="ftp://ftp.software.ibm.com/software/pervasive/info/multimodal/multimodal_apps_design_issues.pdf">Multimodal Application Design Issues</a> (PDF)</dt>
<dd>Many good tips for how to design good X+V pages. </dd>

<dt><a href="ftp://ftp.software.ibm.com/software/pervasive/info/Developing_MM_Apps.pdf">Developing Multimodal Applications using XHTML+Voice</a> (PDF)</dt>
<dd>Much the same topics as the above article, but more code oriented.</dd>

<dt><a href="http://www.w3.org/MarkUp/2004/xmlevents-for-html-authors">XML Events tutorial</a></dt><dd><i class="tagline">How to get what you want when something happens</i>. This tutorial explains how XML Events works. Alternatively you can go directly for the <a href="http://www.w3.org/TR/xml-events/">specification</a></dd></dl>


<h3>Speech recognition</h3>
<p>Speech recognition is assisted by <i class="glossary-ref">grammars</i>.</p>
<dl>
<dt><a href="http://www.w3.org/TR/grammar-spec/">Speech Recognition Grammar Specification</a></dt>
<dd>The language to describe what user utterances are accepted. </dd>

<dt><a href="http://www.w3.org/TR/semantic-interpretation/">Semantic Interpretation for Speech Recognition</a></dt>
<dd>This let you specify what part of the recognized speech to use, for instance to voice-enable a JavaScript application.</dd>
</dl>

<h3>VoiceXML, the dialog language</h3>
<p>Like HTML is the language for web documents, VoiceXML is the language for voice interaction.</p>
<dl>
<dt><a href="http://www.voicexml.org/">VoiceXML Forum</a></dt><dd>Industry organization for the promotion of VoiceXML, with some useful information.</dd>

<dt><a href="http://www.w3.org/TR/voicexml20/">VoiceXML 2.0</a></dt><dd>The specification itself.</dd></dl>

<h3>Styling speech</h3>

<dl>
<dt><a href="http://www.w3.org/TR/css3-speech/">CSS3 Speech Module</a></dt>
<dd>This specification is incomplete and currently available as a working draft.</dd>
<dt><a href="http://www.w3.org/TR/REC-CSS2/aural.html">CSS 2 Aural CSS</a></dt><dd>In 1998 CSS2 Aural CSS (ACSS) was specified.CSS2 Aural CSS is intended to be superceded by CSS3 Speech, but since that module is still incomplete (last working draft: 1994), CSS2 Aural CSS is actually more powerful than CSS3 Speech, and still the spec to use for aural CSS.</dd></dl>
</div>
