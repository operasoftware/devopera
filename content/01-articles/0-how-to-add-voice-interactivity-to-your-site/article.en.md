Title: How to Add Voice Interactivity to Your Site
----
Date: 2006-10-16 15:22:23
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p class="note">July 27th 2011: Please note that Voice only works in Opera on Windows 2000/XP, and we no longer officially support it.</p>

<h2>Table of Contents</h2>

<ol>
	<li><a href="#introduction">Introduction</a></li>
	<li><a href="#prerequisites">Prerequisites</a></li>
	<li><a href="#converting">Converting to XHTML</a></li>
	<li><a href="#yourdocument">Your XHTML+Voice document</a><ol>
		<li><a href="#theform">The form</a></li>
		<li><a href="#thegrammar">The grammar</a></li>
		<li><a href="#thescript">The script</a></li>
		<li><a href="#thestyle">The style</a></li>
		<li><a href="#puttogether">Putting it all together</a></li>
	</ol></li>
	<li><a href="#finalwords">Final words</a></li>
	<li><a href="#implementnotes">Implementation notes</a><ol>
		<li><a href="#authoring">Authoring X+V</a></li>
		<li><a href="#xplusv">XHTML+Voice 1.2</a></li>
		<li><a href="#speechgrammar">Speech Grammar</a></li>
		<li><a href="#semantic">Semantic Interpretation</a></li>
		<li><a href="#javagrammar">Java Grammar Format</a></li>
		<li><a href="#css3speech">CSS 3 Speech module and Aural CSS 2.1</a></li>
		<li><a href="#ssml">Speech Synthesis Markup Language (SSML)</a></li>
		<li><a href="#xmlevents">XML Events</a></li>
	</ol></li>
	<li><a href="#resources">Resources</a></li>
</ol>



		<h2 id="introduction">Introduction</h2>
		<p>This tutorial aims to help you add voice interactivity to your site, with minimal code changes and maximal browser compatibility.</p>
		<p>Along the way, examples will be provided, and at the end, you will be able to test a fully working, real World, voice-enabled site. This tutorial describes the use of a reusable VoiceXML form.</p>
		<p>Because the voice capability is included in the browser, you do not need to write your own speech recognition engine or speech synthesizer. This is a great advantage to you and to your Web application users:</p>
		<ul>
			<li>You do not need to learn C/C++ programming language, nor a custom programming language in which you can develop your own <abbr title="Automatic Speech Recognition">ASR</abbr> and <abbr title="Text To Speech">TTS</abbr>.</li>
			<li>If each site would provide such implementations security would become a concern, since such implementations need to be given greater access to the visitor system (plugins, ActiveX, extensions, etc) - which is beyond normal Web pages.</li>
			<li>Having the user agent implement all of this is convenient for the user who can adapt to the behaviour of the browser.</li>
			<li>Last, but not least, it would prove very inconvenient to users who would hear synthesized voices of varying quality. The same goes for varying degrees of speech recognition capabilities.</li>
		</ul>




		<h2 id="prerequisites">Prerequisites</h2>
		<p>You should be familiar with the following:</p>
		<ul>
			<li><a href="http://www.w3.org/TR/DOM-Level-2-Core/">DOM 2 Core</a> and <a href="http://www.w3.org/TR/DOM-Level-2-Events/">Events</a></li>
			<li>JavaScript / <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript</a></li>
			<li><a href="http://www.w3.org/TR/html/">XHTML</a></li>
			<li><a href="http://www.w3.org/TR/css21/">CSS</a></li>
			<li><a href="http://www.w3.org/TR/xml">XML</a></li>
			<li><a href="http://en.wikipedia.org/wiki/Regular_expression">regular expressions</a></li>
		</ul>
		<p>Adding voice interactivity to your site can be done with any document, but it is recommended you use a clean semantic markup code, along with a CSS layout.</p>
		<p>It is recommended that you read the existing tutorials from Opera Software: <a href="http://my.opera.com/community/dev/voice/">Authoring XHTML+Voice</a>. These are very useful introductory articles.</p>




		<h2 id="converting">Converting to XHTML</h2>
		<p>To make Voice work you need to convert your existing HTML documents to well-formed XHTML. Because of this, your server also has to be configured to send the documents with the <var>application/xhtml+xml</var> MIME type (or any other XML MIME type). Doing so is actually easy and not as a great problem as it was years ago.
		<ol>
			<li>Do not forget to remove the XML prolog, if you have it. This is known to break the rendering in Internet Explorer 6.</li>
			<li>Send the document as <var>application/xhtml+xml</var> only if the HTTP Accept header sent by the browser contains this MIME type, otherwise use <var>text/html</var>. Unconditioned sending of application/xhtml+xml breaks legacy browsers.</li>
		</ol>
		<p>Recommended reading:</p>
		<ul>
			<li><a href="http://www.nypl.org/styleguide/xhtml/index.html">XHTML Guidelines</a></li>
			<li><a href="http://alistapart.com/articles/betterliving">Better living through XHTML</a></li>
		</ul>




		<h2 id="yourdocument">Your XHTML+Voice document</h2>
		<p>Let us start from a simple document:</p>
<pre><code>&lt;<span class="mtag">!DOCTYPE</span> HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;<span class="mtag">html</span>&gt;
&lt;<span class="mtag">head</span>&gt;
  &lt;<span class="mtag">title</span>&gt;PRO-Net - Example 1&lt;/<span class="mtag">title</span>&gt;
  &lt;<span class="mtag">meta</span> <span class="mattr">http-equiv=</span><span class="mvalue">&quot;Content-Type&quot;</span> <span class="mattr">content=</span><span class="mvalue">&quot;text/html; charset=utf-8&quot;</span>&gt;
  &lt;<span class="mtag">link</span> <span class="mattr">rel=</span><span class="mvalue">&quot;stylesheet&quot;</span> <span class="mattr">type=</span><span class="mvalue">&quot;text/css&quot;</span> <span class="mattr">href=</span><span class="mvalue">&quot;example1.css&quot;</span>&gt;
&lt;/<span class="mtag">head</span>&gt;
&lt;<span class="mtag">body</span>&gt;
  &lt;<span class="mtag">p</span> <span class="mattr">id=</span><span class="mvalue">&quot;skipnav&quot;</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;#content&quot;</span>&gt;Skip the navigation.&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">p</span>&gt;
  &lt;<span class="mtag">h1</span> <span class="mattr">id=</span><span class="mvalue">&quot;header&quot;</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/&quot;</span>&gt;PRO-Net&lt;/<span class="mtag">a</span> &gt;&lt;/<span class="mtag">h1</span>&gt;
  &lt;<span class="mtag">div</span> <span class="mattr">id=</span><span class="mvalue">&quot;nav&quot;</span>&gt;
    &lt;<span class="mtag">ul</span> <span class="mattr">id=</span><span class="mvalue">&quot;menus1&quot;</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/offers&quot;</span>&gt;Offers&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/support/dialup&quot;</span>&gt;Support&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/contact&quot;</span>&gt;Contact&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
    &lt;/<span class="mtag">ul</span>&gt;
    &lt;<span class="mtag">ul</span> <span class="mattr">id=</span><span class="mvalue">&quot;menus2&quot;</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/support/dialup&quot;</span>&gt;Dialup&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/support/email&quot;</span>&gt;Email configuration&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
      &lt;<span class="mtag">li</span>&gt;&lt;<span class="mtag">a</span> <span class="mattr">href=</span><span class="mvalue">&quot;site/support/connecting&quot;</span>&gt;Connecting to PRO-net&lt;/<span class="mtag">a</span>&gt;&lt;/<span class="mtag">li</span>&gt;
    &lt;/<span class="mtag">ul</span>&gt;
  &lt;/<span class="mtag">div</span>&gt;
  &lt;<span class="mtag">h1</span> <span class="mattr">id=</span><span class="mvalue">&quot;pagetitle&quot;</span>&gt;Example 1&lt;/<span class="mtag">h1</span>&gt;
  &lt;<span class="mtag">div</span> <span class="mattr">id=</span><span class="mvalue">&quot;content&quot;</span>&gt;
    &lt;<span class="mtag">p</span>&gt;Example page.&lt;/<span class="mtag">p</span>&gt;
  &lt;/<span class="mtag">div</span>&gt;
  &lt;<span class="mtag">div</span> <span class="mattr">id=</span><span class="mvalue">&quot;footer&quot;</span>&gt;
    &lt;<span class="mtag">a</span> <span class="mattr">id=</span><span class="mvalue">&quot;backtotop&quot;</span><span class="mattr">href=</span><span class="mvalue">&quot;#header&quot;</span>&gt;Back to top&lt;/<span class="mtag">a</span>&gt;
    &lt;<span class="mtag">p</span>&gt;Tutorial example&lt;/<span class="mtag">p</span>&gt;
  &lt;/<span class="mtag">div</span>&gt;
&lt;/<span class="mtag">body</span>&gt;
&lt;/<span class="mtag">html</span>&gt;</code></pre>
		<p><a href="example1.html">View example.</a></p>




		<h3 id="theform">The form</h3>
		<p>Now let us add the simple VoiceXML form into the <code>&lt;head&gt;</code> section:</p>

<pre><code>&lt;<span class="mtag">form</span> <span class="mattr">xmlns=</span><span class="mvalue">&quot;http://www.w3.org/2001/vxml&quot;</span> <span class="mattr">id=</span><span class="mvalue">&quot;readpage&quot;</span>&gt;
  &lt;<span class="mtag">block</span>&gt;
  &lt;<span class="mtag">value</span> <span class="mattr">expr=</span><span class="mvalue">&quot;voice_ptitle()&quot;</span> <span class="mtag">/</span>&gt;
  &lt;/<span class="mtag">block</span>&gt;
&lt;/<span class="mtag">form</span>&gt;</code></pre>

		<p>The <code>&lt;form&gt;</code> is the VoiceXML form container. Currently we only have a <code>&lt;block&gt;</code> which reads the page title. We use the expression attribute because we will have a JavaScript function that returns the page title.</p>
		<p><strong>Note:</strong> It is tempting to make the form automatically read the content of the page, on page load. In practice, this is not as good as it seems. Reading only the title is enough. A voice command for reading the content of the page will be provided.</p>
		<p>We will discuss the JavaScript in the following section.</p>
		<p>Here we shall add the voice command input <code>&lt;field&gt;</code> in <code>&lt;form&gt;</code>:</p>
<pre><code>&lt;<span class="mtag">form</span> <span class="mattr">xmlns=</span><span class="mvalue">&quot;http://www.w3.org/2001/vxml&quot;</span> <span class="mattr">id=</span><span class="mvalue">&quot;readpage&quot;</span>&gt;
  <span class="comment">&lt;!-- ... snippet ... --&gt;</span>
  &lt;<span class="mtag">field</span> <span class="mattr">name=</span><span class="mvalue">&quot;usrcmd&quot;</span>&gt;
    &lt;<span class="mtag">grammar</span> <span class="mattr">type=</span><span class="mvalue">&quot;application/srgs&quot;</span> <span class="mattr">src=</span><span class="mvalue">&quot;example2.gram&quot;</span> <span class="mtag">/</span>&gt;

    &lt;<span class="mtag">prompt</span> <span class="mattr">timeout=</span><span class="mvalue">&quot;10s&quot;</span>&gt;
      &lt;<span class="mtag">ss:break</span> <span class="mattr">time=</span><span class="mvalue">&quot;5s&quot;</span> <span class="mtag">/</span>&gt;
      &lt;<span class="mtag">value</span> <span class="mattr">expr=</span><span class="mvalue">&quot;document.voice_msg[&#39;prompt&#39;]&quot;</span> <span class="mtag">/</span>&gt;
    &lt;/<span class="mtag">prompt</span>&gt;

    &lt;<span class="mtag">promp</span>t <span class="mattr">count=</span><span class="mvalue">&quot;2&quot;</span> <span class="mattr">timeout=&quot;600s&quot;</span>&gt;
      &lt;<span class="mtag">ss:break</span> <span class="mattr">time=</span><span class="mvalue">&quot;300s&quot;</span> <span class="mtag">/</span>&gt;
      &lt;<span class="mtag">value</span> <span class="mattr">expr=</span><span class="mvalue">&quot;document.voice_msg[&#39;prompt&#39;]&quot;</span> <span class="mtag">/</span>&gt;
    &lt;/<span class="mtag">prompt</span>&gt;

    &lt;<span class="mtag">catch</span> <span class="mattr">event=</span><span class="mvalue">&quot;help nomatch noinput&quot;</span>&gt;
      &lt;<span class="mtag">value</span> <span class="mattr">expr=</span><span class="mvalue">&quot;document.voice_msg[_event]&quot;</span> <span class="mtag">/</span>&gt;
      &lt;<span class="mtag">reprompt</span> <span class="mtag">/</span>&gt;
    &lt;/<span class="mtag">catch</span>&gt;
  &lt;/<span class="mtag">field</span>&gt;
&lt;/<span class="mtag">form</span>&gt;</code></pre>

		<p>The <code>&lt;grammar /&gt;</code> tag loads an external grammar file. With grammars you control the speech recognition engine, giving it the possible commands the user can say. Further details are provided in the following chapter.</p>
		<p>With prompts you can have texts synthesized. In this case the prompt reads &quot;Please input your command&quot; which is provided in the JavaScript (see &quot;<a href="#thescript">The script</a>&quot; chapter).</p>
		<p>We have one prompt which is heard after 15 seconds and the subsequent prompts are played at much larger intervals. We do not want to annoy visitors repeating the same message very often.</p>
		<p>We use the catch event for playing the messages appropriate for each event, and we have to use <code>&lt;reprompt /&gt;</code> to avoid playing the <code>noinput</code> event message forever.</p>
		<p>The SSML breaks are used for avoiding the automatic reading of the <code>&lt;prompt&gt;</code> message when executing <code>&lt;reprompt /&gt;</code> in the event catcher.</p>
		<p><strong>Note:</strong> All messages are stored in JavaScript variables, because if we put them inside the VoiceXML form, these will appear in legacy browsers with no CSS support.</p>
		<p>The final part and the most important one is the <code>&lt;filled&gt;</code> section which gets executed when the user says something that has been recognized:</p>
		<pre><code>&lt;<span class="mtag">form</span> <span class="mattr">xmlns=</span><span class="mvalue">&quot;http://www.w3.org/2001/vxml&quot;</span> <span class="mattr">id=</span><span class="mvalue">&quot;readpage&quot;</span>&gt;
  <span class="comment">...</span>
  &lt;<span class="mtag">field</span> <span class="mattr">name=</span><span class="mvalue">&quot;usrcmd&quot;</span>&gt;
    <span class="comment">...</span>
    &lt;<span class="mtag">filled&gt;</span>
      &lt;<span class="mtag">assign</span> <span class="mattr">name=</span><span class="mvalue">&quot;voice_result&quot;</span>
              <span class="mattr">expr=</span><span class="mvalue">&quot;voice_done(application.lastresult$);&quot;</span> <span class="mtag">/</span>&gt;

      &lt;<span class="mtag">if</span> <span class="mattr">cond=</span><span class="mvalue">&quot;voice_result == &#39;event-nomatch&#39;&quot;</span>&gt;
        &lt;<span class="mtag">clear</span> <span class="mattr">namelist=</span><span class="mvalue">&quot;usrcmd&quot;</span> <span class="mtag">/</span>&gt;
        &lt;<span class="mtag">throw</span> <span class="mattr">event=</span><span class="mvalue">&quot;nomatch&quot;</span> <span class="mtag">/</span>&gt;

      &lt;<span class="mtag">elseif</span> <span class="mattr">cond=</span><span class="mvalue">&quot;voice_result.action == &#39;prompt-element&#39;&quot;</span> <span class="mtag">/</span>&gt;
        &lt;<span class="mtag">prompt</span> <span class="mattr">xv:expr=</span><span class="mvalue">&quot;voice_result.src&quot;</span> <span class="mtag">/</span>&gt;
        &lt;<span class="mtag">clear</span> <span class="mattr">namelist=</span><span class="mvalue">&quot;usrcmd&quot;</span> <span class="mtag">/</span>&gt;

      &lt;<span class="mtag">elseif</span> <span class="mattr">cond=</span><span class="mvalue">&quot;voice_result.action == &#39;prompt-value&#39;&quot;</span> <span class="mtag">/</span>&gt;
        &lt;<span class="mtag">value</span> <span class="mattr">expr=</span><span class="mvalue">&quot;voice_result.message&quot;</span> <span class="mtag">/</span>&gt;
        &lt;<span class="mtag">clear</span> <span class="mattr">namelist=</span><span class="mvalue">&quot;usrcmd&quot;</span> <span class="mtag">/</span>&gt;
      &lt;/<span class="mtag">if&gt;</span>
    &lt;/<span class="mtag">filled&gt;</span>
  &lt;/<span class="mtag">field&gt;</span>
&lt;/<span class="mtag">form&gt;</span></code></pre>

		<p>The assigned function <code>voice_done()</code> is the one that is going to process the interpretion of what the user said, stored in <a href="http://www.w3.org/TR/voicexml20/#dml5.1.5"><var>application.lastresult$</var></a>.</p>
		<p>The returned value is assigned to <var>voice_result</var> because this way we can &quot;communicate&quot; from the JavaScript function with the current VoiceXML form.</p>
		<p>In the above code we have 3 &quot;actions&quot;:</p>
		<ul>
			<li><code>voice_result == &#39;event-nomatch&#39;</code> for simulating the <code>nomatch</code> event. Your script could determine that something does not exist (e.g. news some item 10).</li>
			<li><code>voice_result.action == &#39;prompt-element&#39;</code> for reading a part from the document, using the <var>#element-id</var>.</li>
			<li><code>voice_result.action == &#39;prompt-value&#39;</code> for reading a message. The message can be programatically generated by the script - it&#39;s unlimited.</li>
		</ul>


		<h3 id="thegrammar">The grammar</h3>
		<p>The grammar tells what user utterances will be matched.</p>
		<pre><code><span class="comment">#ABNF 1.0 utf-8;</span>

<span class="skeyw">language</span> en;
<span class="skeyw">mode</span> voice;

<span class="skeyw">root</span> <span class="svar">$command</span>;
<span class="skeyw">tag-format</span> &lt;semantics/1.0&gt;;

<span class="skeyw">public</span> <span class="svar">$intropage</span> = (go to | visit | jump to | load) [the];

<span class="skeyw">public</span> <span class="svar">$introspeak</span> = speak | read | narrate | talk;

<span class="svar">$pages</span> = <span class="svar">$intropage</span> (
  (start | home | first | front) {<span class="svar">$</span> = <span class="sstring">&quot;site/&quot;</span>;} | 
  offers {<span class="svar">$</span> = <span class="sstring">&quot;site/offers&quot;</span>;} | 
  support {<span class="svar">$</span> = <span class="sstring">&quot;site/support/dialup&quot;</span>;} | 
  contact {<span class="svar">$</span> = <span class="sstring">&quot;site/contact&quot;</span>;}
  ) [page];

<span class="svar">$speakers</span> = <span class="svar">$introspeak</span> (
  ((header | navigation | menus | menu | main) [bar]) {<span class="svar">$</span> = <span class="sstring">&quot;#nav&quot;</span>;} |
  (page | site | content) {<span class="svar">$</span> = <span class="sstring">&quot;#content&quot;</span>;}
  );

<span class="skeyw">public</span> <span class="svar">$command</span> =
  <span class="svar">$pages</span> {<span class="svar">$.action</span> = <span class="sstring">&quot;load-page&quot;</span>; <span class="svar">$.page</span> = <span class="svar">$$</span>;} |
  <span class="svar">$speakers</span> {<span class="svar">$.action</span> = <span class="sstring">&quot;prompt-element&quot;</span>; <span class="svar">$.src</span> = <span class="svar">$$</span>;};</code></pre>

		<p>We have the root rule <var>$command</var> with &quot;commands&quot;, one for speaking something, and the other for loading another page.</p>
		<p>These are represented by the <var>$speakers</var> and <var>$pages</var> rules respectively, which in turn call on other rules. In this grammar, utterances like &quot;visit the support page&quot; or &quot;read menus&quot; will match, but &quot;go to bed&quot; will not.</p>
		<p>You can modify the grammar to your liking and user testing. You might, for instance, discover that some users say &quot;read the menus&quot; (which will not match) instead of &quot;read menus&quot; (that will). To accomodate them you can change the rule to be <code>&quot;$introspeak = (speak | read | narrate | talk) [the];&quot;</code>. Or if you later want to extend the pages list, you can modify the <var>$pages</var> rule.</p>
		<p><strong>Note:</strong> The content inside the curly braces is referred to as semantic interpretation. Here we create the JavaScript objects we are going to use in the following section.</p>
		<p>This approach simplifies processing, you do not have to care about what the user actually said (&quot;speak the menus&quot; or &quot;read navigation bar&quot; will both read out the available navigation options). You can tailor the grammar to match accepted user input to the program logic.</p>



		<h3 id="thescript">The script</h3>
		<p>Let us start with the messages:</p>
<pre><code><span class="skeyw">if</span>(<span class="svar">document.addEventListener</span>)
  <span class="svar">document</span>.<span class="sfunc">addEventListener</span>(<span class="sstring">&#39;load&#39;</span>, <span class="skeyw">function</span> ()
{
  <span class="svar">document.voice_msg</span> = {
    <span class="sstring">&#39;help&#39;</span>    : <span class="sstring">&#39;You can say: speak page, speak navigation, speak content.&#39;</span>,
    <span class="sstring">&#39;nomatch&#39;</span> : <span class="sstring">&#39;Try again.&#39;</span>,
    <span class="sstring">&#39;noinput&#39;</span> : <span class="sstring">&#39;If you need help, ask for help.&#39;</span>,
    <span class="sstring">&#39;prompt&#39;</span>  : <span class="sstring">&#39;Please input your command.&#39;</span>,
    <span class="sstring">&#39;notitle&#39;</span> : <span class="sstring">&#39;Untitled document&#39;</span>
    };
}, <span class="skeyw">false</span>);</code></pre>

		<p>You may wonder why I code these messages in JavaScript instead of using the native VoiceXML elements for the same events (like <code>&lt;help&gt;</code> and <code>&lt;nomatch&gt;</code>). Any VoiceXML browser must support JavaScript, so speech engine compatibility is not affected. However, there are also a few benefits: legacy browsers will not end up displaying the VoiceXML contents on the page, and you can have dynamic messages based on any conditions you want.</p>
		<p>Let us continue with the first function:</p>
<pre><code><span class="skeyw">function</span> <span class="sfunc">voice_ptitle</span>()
{
  <span class="skeyw">var</span> <span class="svar">elem</span> = <span class="svar">document</span>.<span class="sfunc">getElementsByTagName</span>(<span class="sstring">&#39;title&#39;</span>)[<span class="snum">0</span>];
<span class="skeyw">if</span>(!<span class="svar">elem</span> || !<span class="svar">elem.firstChild</span>)
    <span class="skeyw">return</span> <span class="svar">document.voice_msg.notitle</span>;
  <span class="skeyw">else</span>
    <span class="skeyw">return</span> <span class="svar">elem.firstChild.data</span>;
}</code></pre>

		<p>We use this method as a workaround for the limitation in the (X)HTML standard that does not allow an ID attribute on the <code>&lt;title&gt;</code> element. Thus we cannot use <code>&lt;prompt xv:src=&quot;#element-id&quot; /&gt;</code> and still have a valid document.</p>
	<p><var>document.title</var> is not used here, because if the page has no title, the browser sets the page location as the title. Reading long and complex URLs is very unpleasant.</p>
		<p>Finally, the voice command handler function:</p>
<pre><code><span class="skeyw">function</span> <span class="sfunc">voice_done</span>(<span class="svar">val</span>)
{
  <span class="skeyw">if</span>(!<span class="svar">val</span> || !<span class="svar">val.interpretation</span>)
    <span class="skeyw">return</span> <span class="sstring">&#39;event-nomatch&#39;</span>;

  <span class="skeyw">var</span> <span class="svar">si</span> = <span class="svar">val.interpretation</span>;

  <span class="skeyw">if</span>(<span class="svar">si.action</span> == <span class="sstring">&#39;load-page&#39;</span>)
  {
    <span class="svar">document.location</span> = <span class="svar">si.page</span>;
    <span class="skeyw">return</span> <span class="sstring">&#39;&#39;</span>;
  } <span class="skeyw">else</span> <span class="skeyw">if</span>(<span class="svar">si.action</span> == <span class="sstring">&#39;prompt-element&#39;</span> &amp;&amp; <span class="svar">si.src</span>)
    <span class="skeyw">return</span> <span class="svar">si</span>;
  <span class="skeyw">else</span>
    <span class="skeyw">return</span> <span class="sstring">&#39;event-nomatch&#39;</span>;
}</code></pre>

		<p>As previously mentioned, the <code>voice_done()</code> function is called when the user says something that is recognized. The <var>val</var> argument is the user utterance with several extra properties. Among the most important ones are:</p>
		<ul>
			<li><dfn><var>confidence</var></dfn> is the confidence level of the recognized utterance (voice command). This can prove to be very useful to check how sure is the speech recognition engine of what it recognized. On a banking site, for example, a web application could ask the user to repeat the answer if the confidence level is below 0.8. The range of the value is between 0.0 (no confidence) and 1.0 (full confidence).</li>
			<li><dfn><var>utterance</var></dfn> is a string holding the tokens (words) recognized by the speech recognition engine, for example &quot;jump to contact&quot;.</li>
			<li><dfn><var>interpretation</var></dfn> is an object holding the result of semantic interpretation from the grammar.</li>
		</ul>
		<p>For this tutorial we will use the convention that the <var>interpretation</var> object should always have the <var>action</var> property. We can later add properties specific for each type of action.</p>
		<ul>
			<li><code>action = &#39;load-page&#39;</code> means go to page. From the grammar semantic interpretation we also include the <var>page</var> property. The above script sets <code>document.location = si.page;</code> which is exactly what we want: to load another page. The return value is an empty string, because we want the VoiceXML form to finish without doing anything else.</li>
			<li><code>action = &#39;prompt-element&#39;</code> tells the script to read a part of the document using the element ID. Here we also have a new <var>src</var> property providing the ID of the element we want. As you can see, what we return the SI object to the form. Remember that we wanted to be able to do voice-related things. The script itself cannot do any page reading, therefore we return to the VoiceXML form.</li>
		</ul>
		<p>That&#39;s all! The script is not a big deal.</p>



		<h3 id="thestyle">The style</h3>
		<p>We will add a small speech style sheet for the text to be spoken.</p>
<pre><code><span class="cselc">head form</span> {
  <span class="cprop">display</span>: <span class="cval">none</span>;
}

<span class="cselc">h1, h2, h3, h4, h5, h6</span> {
  <span class="cprop">voice-family</span>: <span class="cval">female</span>;
  <span class="cprop">pause</span>: <span class="cval">2s</span>;
}

<span class="cselc">div, tr</span> {
  <span class="cprop">pause</span>: <span class="cval">1s</span>;
}

<span class="cselc">li, th, td</span> {
  <span class="cprop">pause</span>: <span class="cval">500ms</span>;
}

<span class="cselc">#content</span> {
  <span class="cprop">pause-before</span>: <span class="cval">2s</span>;
}

<span class="cselc">#menus1 a:before, #menus2:after, #menus2 li:before</span> {
  <span class="cprop">speak</span>: <span class="cval">none</span>;
}</code></pre>

		<p>Nothing too fancy here. We have added some pauses, made sure the headlines are spoken in a female voice, and avoid speaking the menu numbers. The form used in the examples is designed to have no textual content at all, with all its spoken contents retrieved from the script file, or the page itself. However, it may be given default styles by the browser, and at some point you may wish to put textual content inside it. The rule <code>head form {display: none}</code> ensures the voice form content will not display in CSS supporting browsers.</p>



		<h3 id="puttogether">Putting it all together</h3>
		<p>You need to add the CSS and the script in the <code>&lt;head&gt;</code> section, change the DTD from XHTML to XHTML+Voice, add the XML namespaces, add an XML Event for the <code>&lt;body&gt;</code> tag:</p>
<pre><code>&lt;!<span class="mtag">DOCTYPE</span> html PUBLIC &quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;
  &quot;http://www.voicexml.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;&gt;
&lt;<span class="mtag">html</span> <span class="mattr">lang=</span><span class="mvalue">&quot;en&quot;</span> <span class="mattr">xmlns=</span><span class="mvalue">&quot;http://www.w3.org/1999/xhtml&quot;</span>
  <span class="mattr">xmlns:ev=</span><span class="mvalue">&quot;http://www.w3.org/2001/xml-events&quot;</span>
  <span class="mattr">xmlns:ss=</span><span class="mvalue">&quot;http://www.w3.org/2001/10/synthesis&quot;</span>
  <span class="mattr">xmlns:xv=</span><span class="mvalue">&quot;http://www.voicexml.org/2002/xhtml+voice&quot;</span>&gt;
  &lt;<span class="mtag">head</span>&gt;
    <span class="comment">...</span>
    &lt;<span class="mtag">meta</span> <span class="mattr">http-equiv=</span><span class="mvalue">&quot;Content-Type&quot;</span> <span class="mattr">content=</span><span class="mvalue">&quot;application/xhtml+xml; charset=utf-8&quot;</span> <span class="mtag">/</span>&gt;
    &lt;<span class="mtag">link</span> <span class="mattr">rel=</span><span class="mvalue">&quot;stylesheet&quot;</span> <span class="mattr">type=</span><span class="mvalue">&quot;text/css&quot;</span> <span class="mattr">href=</span><span class="mvalue">&quot;example2.css&quot;</span> <span class="mtag">/</span>&gt;
    &lt;<span class="mtag">script</span> <span class="mattr">type=</span><span class="mvalue">&quot;text/javascript&quot;</span> <span class="mattr">src=</span><span class="mvalue">&quot;example2.js&quot;</span>&gt;&lt;/<span class="mtag">script</span>&gt;
    &lt;<span class="mtag">form</span> <span class="mattr">xmlns=</span><span class="mvalue">&quot;http://www.w3.org/2001/vxml&quot;</span> <span class="mattr">id=&quot;readpage&quot;</span>&gt;
      <span class="comment">...</span>
    &lt;/<span class="mtag">form</span>&gt;
    <span class="comment">...</span>
  &lt;/<span class="mtag">head</span>&gt;
  &lt;<span class="mtag">body</span> <span class="mattr">ev:event=</span><span class="mvalue">&quot;load&quot;</span> <span class="mattr">ev:handler=</span><span class="mvalue">&quot;#readpage&quot;</span>&gt;
    <span class="comment">...</span>
  &lt;/<span class="mtag">body</span>&gt;
&lt;/<span class="mtag">html</span>&gt;</code></pre>

		<p>The XML Event activates the VoiceXML form on page load.</p>
		<p><a href="example2.xhtml">Test the example.</a></p>
		<p>Normal execution goes like this:</p>
		<ol>
			<li>The user <strong>loads</strong> the page.</li>
			<li>On load, the <strong>page title is read</strong>.</li>
			<li>The VoiceXML form waits for a <strong>voice command</strong>.</li>
			<li>If the user asks for <strong>help</strong>, the help message is played.</li>
			<li>If the user says nothing at all, in the first seconds/minutes: the <strong>noinput</strong> message played.</li>
			<li>If the user says something, but it&#39;s not matched by the grammar, the <strong>nomatch</strong> message played.</li>
			<li>On <strong>succes</strong>, the resulting utterance and semantic interpretation is sent to a <strong>JavaScript</strong> function.</li>
			<li>Based upon the result, the JavaScript function can do whatever you want. The need for sending the result to a JavaScript function is simple: you cannot do everything you want from a VoiceXML form.</li>
			<li>If there is something you want to do, but cannot do so, from JavaScript, just return an object, or a value. From VoiceXML, with some <strong>procedural logic</strong> elements, you can do whatever you want in relation to voice interactivity.</li>
		</ol>
		<p>A summary of the changes made to the initial code:</p>
		<ol>
			<li>Converted the HTML document to XHTML.</li>
			<li>Switched to the X+V DTD.</li>
			<li>Added the needed XML namespaces for XML Events, SSML and X+V.</li>
			<li>Added the VoiceXML form with its associated grammar file.</li>
			<li>Added a script and a CSS.</li>
			<li>Added a single XML event for activating the VoiceXML form on page load.</li>
		</ol>
		<p>The code presented here is extendable. For a local experiment I have added page-specific JavaScript actions, page-specific grammars, and page-specific VoiceXML forms. The above example you see is the &quot;parent&quot; of that voice-enabled site. This is reusable code you can copy/paste in your site and update the grammar accordingly.</p>



		<h2 id="finalwords">Final words</h2>
		<p>You are now able to add Voice to an entire site: easily, fast, in a reusable manner, and maintaining compatibility.</p>
		<p>You can <a href="http://www.robodesign.ro/coding/how-to-add-voice/site/">try the example site</a>. For the front page there is a new action for loading the Nth news page. There is also a voice command for saying the access key, like &quot;press key 2&quot;. Take a look at the JavaScript and the grammar file, for the front page.</p>
		<p>Also, try the <a href="http://www.robodesign.ro/coding/how-to-add-voice/site/admin">adminilistration module</a> which allows you to add new pages and news items in the site. Grammars are dynamically generated by the server-side scripts.</p>

		<h2 id="implementnotes">Implementation notes</h2>
		<p>Voice has been available in normal Opera releases since the technical previews of version 7.6. The early implementation was buggy, but now things are much more stable.</p>
		<p>One of the biggest issues is missing support for VoiceXML DOM. You cannot modify the VoiceXML forms from JavaScript. The example script attempts to workaround by storing the strings in JavaScript. The actual form logic remains the same and cannot be changed by JavaScript, but the strings are no longer hard-coded.</p>
		<p>Another marginal issue, not related to Voice alone, is you cannot have an ID attribute set for the <code>&lt;title&gt;</code> element. You can use it, but the document will not validate. This is because XHTML is an XML-based reformulation of HTML which itself did not allow having an ID. Because of this, you cannot have your VoiceXML prompts directly read the page title - you have to work around the limitation using JavaScript.</p>
		<p>Lastly, you cannot put VoiceXML messages in the page itself, because legacy browsers with no CSS support will show them. The work around, which actually can provide advantages as previously explained, is to use JavaScript.</p>



		<h3 id="authoring">Authoring X+V</h3>
		<p>There is no specific tool for doing editing X+V, however there is no great need for such. Any (X)HTML/XML editor or general text editor is more than satisfactory.</p>
	<p>If you are a web developer not using Windows, you can still work with Opera and Voice. You have two choices: <a href="http://winehq.org/" title="Wine Is Not an Emulator">WINE</a> may be available for your operating system, or you can use a virtual computer such as <a href="http://www.vmware.com/products/player/">VMWare Player</a>. I personally use WINE for most of the work, at the end I just check the results in VMWare. This is because WINE is quite noticeably faster and more convenient to use.</p>


		<h3 id="xplusv">XHTML+Voice 1.2</h3>
		<p>Opera supports all X+V. Note that this XHTML profile does not include support for all VoiceXML 2.0. Specifically, telephony-related features are excluded.</p>



		<h3 id="speechgrammar">Speech Grammar</h3>
		<p>Opera supports all of <a href="http://www.w3.org/TR/speech-grammar/">SRGS</a> 1.0. This means grammars in both forms: ABNF and XML. As expected, there&#39;s no support for the DTMF mode - only voice is supported.</p>
		<p>One rather important bug is that the <var>$NULL</var> special rule cannot be used for now, since it crashes the browser.</p>


		<h3 id="semantic">Semantic Interpretation</h3>
		<p>Opera only supports Semantic Interpretation Script Tags, no support for String Literals. Also, the current implementation is slightly outdated, being based on an older working draft. One of the most proeminent difference caused by this: in Opera you need to use <var>$</var> instead of <var>out</var>.</p>


		<h3 id="javagrammar">Java Grammar Format</h3>
		<p>This grammar format is also fully supported. However, the <var>&lt;NULL&gt;</var> special rule also crashes Opera.</p>



		<h3 id="css3speech">CSS 3 Speech module and Aural CSS 2.1</h3>
		<p>All CSS 3 Speech properties that are not also available in the Aural CSS 2.1 have to be prefixed with <code>-xv-</code>, since this specification is only a working draft - it&#39;s not yet a candidate recommendation.</p>
		<p>The current Opera implementation uses <a href="http://www.w3.org/TR/2004/WD-css3-speech-20040727/">an older draft of CSS 3 Speech</a>, this means that the <code>rest-*</code> and <code>mark-*</code> properties are not supported.</p>
		<p>Aural CSS 2.1 properties also in CSS 3 Speech and supported by Opera are: <code>cue-*</code>, <code>pause-*</code>, <code>speak</code> and <code>voice-family</code>.</p>
		<p>One of the most important implementation surprises is that Opera does not yet support generated content in CSS for the speech media.</p>
		<p>An <code>interpret-as</code> property would be very much needed. This would allow web developers to tell the speech engine how to read the text, as a date, as time, etc.</p>
	<p>The current implementation does not allow web developers to apply their CSS styling to VoiceXML forms. One must use SSML for this purpose.</p>


		<h3 id="ssml">Speech Synthesis Markup Language (SSML)</h3>
		<p>Opera provides support for <code>voice</code>, <code>emphasis</code>, and <code>break</code>.</p>
		<p>Greatly needed would be support for <code>say-as</code> (see <code>interpret-as</code> discussion above).</p>

		<h3 id="xmlevents">XML Events</h3>
		<p>Opera provides complete support for XML Events.</p>


		<h2 id="resources">Resources</h2>
		<p>Specifications:</p>
		<ul>
			
			<li><a href="http://www.w3.org/TR/voicexml20/">VoiceXML 2.0 specification</a></li>
			<li><a href="http://www.w3.org/TR/speech-grammar/">Speech Recognition Grammar Specification</a></li>
			<li><a href="http://www.w3.org/TR/semantic-interpretation/">Semantic Interpretation for Speech Recognition specification</a></li>
			<li><a href="http://java.sun.com/products/java-media/speech/forDevelopers/JSGF/">Java Speech Grammar Format</a> (also supported by the Opera browser)</li>
			<li><a href="http://www.w3.org/TR/CSS21/aural.html">Aural CSS 2.1</a></li>
			<li><a href="http://www.w3.org/TR/css3-speech/">CSS 3 speech module</a></li>
			<li><a href="http://www.w3.org/TR/speech-synthesis/">Speech Synthesis Markup Language</a></li>
			<li><a href="http://www.w3.org/TR/xml-events/">XML Events</a></li>
		</ul>
		<p>Tutorials, and documentation:</p>
		<ul>
			<li><a href="http://www.w3.org/MarkUp/2004/xmlevents-for-html-authors">XML Events tutorial</a></li>
			<li><a href="http://my.opera.com/community/dev/voice/">Authoring XHTML+Voice</a></li>
			<li><a href="http://www.howtocreate.co.uk/accessibility.html">Accessibility in Web pages</a> by <a href="http://www.howtocreate.co.uk/">Mark Wilton-Jones</a></li>
			<li><a href="http://www.ibm.com/software/pervasive/multimodal/">IBM Multimodal site</a></li>
			<li><a href="http://www.voicexml.org/">VoiceXML forum</a></li>
			<li><a href="http://docs.voxeo.com/voicexml/2.0">VoiceXML 2.0 documentation</a> from <a href="http://www.voxeo.com/">Voxeo Corporation</a></li>
			<li><a href="https://studio.tellme.com/">Tellme. Studio.</a> from <a href="http://www.tellme.com/">Tellme Networks, Inc.</a></li>
			<li><a href="http://cafe.bevocal.com/">BeVocal Cafe</a></li>
		</ul>
		<p><strong>Note:</strong> The documentation found on some of these links is valuable, however, each company/corporation has its own extensions. Some of them are not marked as such. Great care should be taken.</p>
		<p>Where to ask for help:</p>
		<ul>
			<li><a href="http://my.opera.com/community/forums/forum.dml?id=83">Accessibility and voice browsing</a> forum from my.opera.com community</li>
			<li><a href="http://groups.yahoo.com/group/voicexml/">Yahoo VoiceXML group</a></li>
		</ul></p>
