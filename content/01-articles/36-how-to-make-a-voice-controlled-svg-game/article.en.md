Title: How to make a Voice controlled SVG game
----
Date: 2008-05-02 14:55:14
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

<p class="note"><strong>Article update, 4th June 2010</strong>: Minor updates to browser support information for SVG in Opera and Firefox. </p>

		<h2>Table of Contents</h2>

		<ol>
			<li><a href="#introduction">Introduction</a></li>
			<li><a href="#addingvoice">Adding Voice interaction</a>
			<ol>
				<li><a href="#thevoicexml">The VoiceXML form</a></li>
				<li><a href="#thegrammar">The grammar</a></li>
				<li><a href="#thejavascript">The JavaScript code</a></li>
			</ol>
			</li>http://www.voicexml.org/2002/xhtml+voice
			<li><a href="#theresult">The result</a></li>
			<li><a href="#implementationnotes">Implementation notes</a></li>
		</ol>

		<h2 id="introduction">Introduction</h2>

		<p>This tutorial shows how to add Voice control to <abbr title="Scalable Vector Graphics">SVG</abbr>, using the example of a game.</p>

		<p>The game I have built displays several objects on screen, and the object of the game is to make all the objects have the same shape and color - you can do this by issuing voice commands ot the page, such as &quot;change the blue squares to red triangles&quot; or &quot;switch the yellow shapes to circles&quot;. Once a player does so they win and the game ends. The game allows you to change various parameters such as the number of objects and players.</p>

		<p>For testing purposes during development, the game included a graphical user interface for allowing game options to be shifted during a game. You can enable it by editing the relevant script - look for the <var>showFormControls</var> variable inside the JavaScript file.</p>

<p>The SVG game works in Firefox 1.5+ and Opera 9+. To control the game using your voice you need to use Opera for Windows.</p>


		<h2 id="addingvoice">Adding Voice interaction</h2>

		<p>The entire voice interaction logic is contained inside the VoiceXML form found inside the the-game.xhtml file, and the grammar file used for voice recognition - the-game.gram. Depending on what is said to the application, application-specific JavaScript functions contained within the JavaScript file (the-game.js) will be called by the VoiceXML form to control the game.</p>

		<p>You can add VoiceXML forms in <abbr title="Extensible HyperText Markup Language">XHTML</abbr> documents, or directly in standalone SVG documents. In both cases, you have to add the required <abbr title="Extensible Markup Language">XML</abbr> namespaces. For XHTML documents it&#39;s recommended that you also switch to the XHTML+Voice <abbr title="Document Type Declaration">DTD</abbr>.</p>

		<p>To better understand some of the basics behind this tutorial, read some of the previously published <a href="http://dev.opera.com/articles/voice/">tutorials about Voice on dev.opera.com</a>.</p>

		<p>You can <a href="voice-svg-game.zip">download all the example code and other assets required to run this game here</a>.</p>

		<h3 id="thevoicexml">The VoiceXML form</h3>

		<p>The main page for the game is an XHTML document containing an inline SVG image and the VoiceXML form. The place where you put the VoiceXML form does not matter much. However, common practice is to keep your VoiceXML form inside the <code>&lt;head&gt;</code>.</p>

		<p>The code:</p>

<pre><code><span class="mtag">&lt;!</span><span class="Statement">DOCTYPE</span> html <span class="Statement">PUBLIC</span> <span class="mvalue">&quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;</span>
  <span class="mvalue">&quot;http://www.voicexml.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;</span><span class="mtag">&gt;</span>
<span class="mtag">&lt;</span><span class="mtag">html</span> <span class="mattr">lang</span>=<span class="mvalue">&quot;en&quot;</span> <span class="mattr">xmlns</span>=<span class="mvalue">&quot;<a href="http://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a>&quot;</span>
  <span class="mattr">xmlns</span><span class="comment">:</span><span class="mattr">ev</span>=<span class="mvalue">&quot;<a href="http://www.w3.org/2001/xml-events">http://www.w3.org/2001/xml-events</a>&quot;</span>
  <span class="mattr">xmlns</span><span class="comment">:</span><span class="mattr">ss</span>=<span class="mvalue">&quot;<a href="http://www.w3.org/2001/10/synthesis">http://www.w3.org/2001/10/synthesis</a>&quot;</span>
  <span class="mattr">xmlns</span><span class="comment">:</span><span class="mattr">xv</span>=<span class="mvalue">&quot;<a href="http://web.archive.org/web/20080913074845/http://www.voicexml.org/specs/multimodal/x+v/12/spec.html">http://www.voicexml.org/2002/xhtml+voice</a>&quot;</span><span class="mtag">&gt;</span>
  <span class="mtag">&lt;</span><span class="mtag">head</span><span class="mtag">&gt;</span>
	...
	<span class="mtag">&lt;</span><span class="mtag">form</span> <span class="mattr">xmlns</span>=<span class="mvalue">&quot;<a href="http://www.w3.org/2001/vxml">http://www.w3.org/2001/vxml</a>&quot;</span> <span class="mattr">id</span>=<span class="mvalue">&quot;vmain&quot;</span><span class="mtag">&gt;</span>

	  <span class="mtag">&lt;</span><span class="mtag">block</span><span class="mtag">&gt;</span>
		<span class="mtag">&lt;</span><span class="mtag">prompt</span><span class="mtag"> </span><span class="mattr">xv</span><span class="comment">:</span><span class="mattr">src</span>=<span class="mvalue">&quot;#ttl&quot;</span><span class="mtag"> /&gt;</span>
	  <span class="mtag">&lt;/block&gt;</span>

	  <span class="mtag">&lt;</span><span class="mtag">field</span> <span class="mattr">name</span>=<span class="mvalue">&quot;vcmd&quot;</span><span class="mtag">&gt;</span>
		<span class="mtag">&lt;</span><span class="mtag">grammar</span> <span class="mattr">type</span>=<span class="mvalue">&quot;application/srgs&quot;</span> <span class="mattr">src</span>=<span class="mvalue">&quot;<a href="the-game.gram">the-game.gram</a>&quot;</span><span class="mtag"> /&gt;</span>

		<span class="mtag">&lt;</span><span class="mtag">prompt</span> <span class="mattr">timeout</span>=<span class="mvalue">&quot;10s&quot;</span><span class="mtag">&gt;</span>
		  <span class="mtag">&lt;</span><span class="mattr">ss</span><span class="comment">:</span><span class="mtag">break</span> <span class="mattr">time</span>=<span class="mvalue">&quot;5s&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">value</span> <span class="mattr">expr</span>=<span class="mvalue">&quot;RD_game.voiceMessage(&#39;prompt&#39;);&quot;</span><span class="mtag"> /&gt;</span>
		<span class="mtag">&lt;/prompt&gt;</span>

		<span class="mtag">&lt;</span><span class="mtag">prompt</span> <span class="mattr">count</span>=<span class="mvalue">&quot;2&quot;</span> <span class="mattr">timeout</span>=<span class="mvalue">&quot;500s&quot;</span><span class="mtag">&gt;</span>
		  <span class="mtag">&lt;</span><span class="mattr">ss</span><span class="comment">:</span><span class="mtag">break</span> <span class="mattr">time</span>=<span class="mvalue">&quot;200s&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">value</span> <span class="mattr">expr</span>=<span class="mvalue">&quot;RD_game.voiceMessage(&#39;prompt&#39;);&quot;</span><span class="mtag"> /&gt;</span>
		<span class="mtag">&lt;/prompt&gt;</span>

		<span class="mtag">&lt;</span><span class="mtag">catch</span> <span class="mattr">event</span>=<span class="mvalue">&quot;help nomatch noinput&quot;</span><span class="mtag">&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">value</span> <span class="mattr">expr</span>=<span class="mvalue">&quot;RD_game.voiceMessage(_event);&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">reprompt</span><span class="mtag"> /&gt;</span>
		<span class="mtag">&lt;/catch&gt;</span>

		<span class="mtag">&lt;</span><span class="mtag">filled</span><span class="mtag">&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">assign</span> <span class="mattr">name</span>=<span class="mvalue">&quot;vres&quot;</span> <span class="mattr">expr</span>=<span class="mvalue">&quot;RD_game.voiceCommand(application.lastresult$);&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">if</span> <span class="mattr">cond</span>=<span class="mvalue">&quot;vres == &#39;event-nomatch&#39;&quot;</span><span class="mtag">&gt;</span>
			<span class="mtag">&lt;</span><span class="mtag">clear</span> <span class="mattr">namelist</span>=<span class="mvalue">&quot;vcmd&quot;</span><span class="mtag"> /&gt;</span>
			<span class="mtag">&lt;</span><span class="mtag">throw</span> <span class="mattr">event</span>=<span class="mvalue">&quot;nomatch&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">elseif</span> <span class="mattr">cond</span>=<span class="mvalue">&quot;vres.action == &#39;prompt-value&#39;&quot;</span><span class="mtag"> /&gt;</span>
			<span class="mtag">&lt;</span><span class="mtag">value</span> <span class="mattr">expr</span>=<span class="mvalue">&quot;vres.message&quot;</span><span class="mtag"> /&gt;</span>
			<span class="mtag">&lt;</span><span class="mtag">clear</span> <span class="mattr">namelist</span>=<span class="mvalue">&quot;vcmd&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;</span><span class="mtag">elseif</span> <span class="mattr">cond</span>=<span class="mvalue">&quot;vres == &#39;clear-cmd&#39;&quot;</span><span class="mtag"> /&gt;</span>
			<span class="mtag">&lt;</span><span class="mtag">clear</span> <span class="mattr">namelist</span>=<span class="mvalue">&quot;vcmd&quot;</span><span class="mtag"> /&gt;</span>
		  <span class="mtag">&lt;/if&gt;</span>
		<span class="mtag">&lt;/filled&gt;</span>

	  <span class="mtag">&lt;/field&gt;</span>
	<span class="mtag">&lt;/form&gt;</span>
  <span class="mtag">&lt;/head&gt;</span>
  <span class="mtag">&lt;</span><span class="mtag">body</span> <span class="mattr">ev</span><span class="comment">:</span><span class="mattr">event</span>=<span class="mvalue">&quot;load&quot;</span> <span class="mattr">ev</span><span class="comment">:</span><span class="mattr">handler</span>=<span class="mvalue">&quot;#vmain&quot;</span><span class="mtag">&gt;</span>
  ...
  <span class="mtag">&lt;/body&gt;</span>
<span class="mtag">&lt;/html&gt;</span></code></pre>

		<p>The VoiceXML form is activated by the XML event listener attached to the <code>&lt;body&gt;</code> element once the document loads. The form reads the content of the element with the <var>ttl</var> ID. The prompt of the form field <var>vcmd</var> synthesizes a message which is then returned by the <code>voiceMessage</code> function. This allows the game to synthesize the name of each player for each game turn.</p>

		<p>Once the user inputs a recognized voice command, the resulting object is then passed to the <code>voiceCommand</code> function, which uses the semantic interpretation of the user&#39;s voice input to determine what to do next. The function checks if the move requested by the user is permitted given the current game state. Depending on the results of the checks, the move will be made, or a message will be returned telling the user to try again. All the messages are synthesized by the VoiceXML form.</p>

		<h3 id="thegrammar">The grammar</h3>

		<p>The code for the grammar file is as follows:</p>

<pre><code><span class="skeyw">#ABNF 1.0 utf-8;</span>

<span class="skeyw">language</span> <span class="skeyw">en</span>;
<span class="skeyw">mode</span> <span class="skeyw">voice</span>;
<span class="skeyw">tag-format</span> <span class="skeyw">&lt;semantics/1.0&gt;</span>;
<span class="skeyw">root</span> <span class="svar">$command</span>;

<span class="svar">$src_shapes</span> =
  object   {<span class="svar">$</span> = -1;} |
  circle   {<span class="svar">$</span> =  0;} |
  square   {<span class="svar">$</span> =  1;} |
  triangle {<span class="svar">$</span> =  2;};

<span class="svar">$src_colors</span> =
  red    {<span class="svar">$</span> = 0;} |
  yellow {<span class="svar">$</span> = 1;} |
  blue   {<span class="svar">$</span> = 2;};

<span class="svar">$dest_shapes</span> = <span class="svar">$src_shapes</span> {<span class="svar">$</span> = <span class="svar">$$</span>;};
<span class="svar">$dest_colors</span> = <span class="svar">$src_colors</span> {<span class="svar">$</span> = <span class="svar">$$</span>;};

<span class="skeyw">public</span> <span class="svar">$command</span> = change [the]
  [<span class="svar">$src_colors</span>  {<span class="svar">$</span>.<span class="svar">src_color</span>  =  <span class="svar">$src_colors</span>;}]
  [<span class="svar">$src_shapes</span>  {<span class="svar">$</span>.<span class="svar">src_shape</span>  =  <span class="svar">$src_shapes</span>;}] to [a]
  [<span class="svar">$dest_colors</span> {<span class="svar">$</span>.<span class="svar">dest_color</span> = <span class="svar">$dest_colors</span>;}]
  [<span class="svar">$dest_shapes</span> {<span class="svar">$</span>.<span class="svar">dest_shape</span> = <span class="svar">$dest_shapes</span>;}];</code></pre>

		<p>As seen above, the user can issue voice commands like &quot;change the blue squares to red triangles&quot; or &quot;switch the yellow shapes to circles&quot;. The result is just a simple JavaScript object, for example <code>{&#39;src_color&#39; : 2, &#39;src_shape&#39; : 1, &#39;dest_color&#39; : 0, &#39;dest_shape&#39; : 2}</code>.</p>

		<p>Notice that the <abbr title="Semantic Interpretation">SI</abbr> tags are within the square brackets, so they are optional as well. If you only had the square brackets around the included grammar rules (<abbr title="example given">eg</abbr> <code>[$src_shapes]</code>), the SI tags would always execute, even if the user said something not recognized by the referenced grammar rule. Additionally, the execution of the code would cause a JavaScript error (variable undefined).</p>

		<p>Readers who already have some experience with VoiceXML will notice something interesting in this grammar file: <var>$dest_shapes</var> and <var>$dest_colors</var> are the same as <var>$src_shapes</var> and <var>$src_colors</var> respectively. The immediate question asked is: why not only use two grammar rules <var>$shapes</var> and <var>$colors</var>? It is correct to simply reuse your grammar in common scenarios. However, in the current case, you want the SI object to contain two different values, for source and destination - each being optional. To explain this, we will take a look at two code samples, examining how they work.</p>

		<p>What follows is an example of a grammar rule that <strong>does not work</strong> as desired:</p>

<pre><code><span class="skeyw">public</span> <span class="svar">$command</span> = change [the]
  [<span class="svar">$colors</span>] {<span class="svar">$</span>.<span class="svar">src_color</span>  = <span class="svar">$$</span>;}
  [<span class="svar">$shapes</span>] {<span class="svar">$</span>.<span class="svar">src_shape</span>  = <span class="svar">$$</span>;} to [a]
  [<span class="svar">$colors</span>] {<span class="svar">$</span>.<span class="svar">dest_color</span> = <span class="svar">$$</span>;}
  [<span class="svar">$shapes</span>] {<span class="svar">$</span>.<span class="svar">dest_shape</span> = <span class="svar">$$</span>;};</code></pre>

		<p>The above will not work for voice commands like &quot;change blue to yellow&quot;, because using <var>$$</var> (the latest matching rule) in the SI tag will result in an SI object with <code>$.src_shape = $.src_color = blue</code> and <code>$.dest_shape = $.dest_color = yellow</code>.</p>

		<p>Another example that <strong>does not work</strong> is the following:</p>

<pre><code><span class="skeyw">public</span> <span class="svar">$command</span> = change [the]
  [<span class="svar">$colors</span> {<span class="svar">$</span>.<span class="svar">src_color</span>  = <span class="svar">$colors</span>;}]
  [<span class="svar">$shapes</span> {<span class="svar">$</span>.<span class="svar">src_shape</span>  = <span class="svar">$shapes</span>;}] to [a]
  [<span class="svar">$colors</span> {<span class="svar">$</span>.<span class="svar">dest_color</span> = <span class="svar">$colors</span>;}]
  [<span class="svar">$shapes</span> {<span class="svar">$</span>.<span class="svar">dest_shape</span> = <span class="svar">$shapes</span>;}];</code></pre>

		<p>Here the problem is similar - if the voice command &quot;change the triangle to yellow&quot; is issued, <var>$.dest_shape</var> will be equal to <var>$.src_shape</var>, because <var>$shapes</var> contains whatever it matched during voice recognition (irrespective of its position in the voice command).</p>

		<p>Therefore, we need unique grammar rules for each reference of color and shape within the root rule <var>$command</var>. This is required in order to be able to generate a correct semantic interpretation object, without any duplications or other errors.</p>

		<h3 id="thejavascript">The JavaScript code</h3>

		<p>The entire code of the game is contained within a single object: <code>RD_game</code>. In the first part of the code we have several configuration options, followed by the strings used in the game. Having all the strings in a single place allows us to quickly make additions, such as translating the game to any other language.</p>

<pre><code><span class="skeyw">var</span> RD_game = <span class="skeyw">new</span> (<span class="skeyw">function</span> (no_autoinit)
<span class="skeyw">{</span>
  <span class="skeyw">var</span> _me = <span class="skeyw">this</span>;

  <span class="comment">// ... configuration ...</span>

  _me.messages = <span class="skeyw">{</span>
	<span class="comment">// ...</span>
	<span class="comment">// Voice-related strings</span>
	<span class="sstring">&#39;voice-prompt&#39;</span> : <span class="sstring">&#39;Player %nr% (%name%) make your move!&#39;</span>,
	<span class="sstring">&#39;voice-help&#39;</span> : <span class="sstring">&#39;Just say the objects you want to change, and what you want to do with them. For example: change red circles to blue squares.&#39;</span>,
	<span class="sstring">&#39;voice-nomatch&#39;</span> : <span class="sstring">&#39;I did not understand what you want.&#39;</span>,
	<span class="sstring">&#39;voice-noinput&#39;</span> : <span class="sstring">&#39;If you do not know what to do, ask for help.&#39;</span><span class="skeyw">}</span>;</code></pre>

		<p>What follows is an outline of the public methods and private functions defined in the game object:</p>

<pre><code>  <span class="comment">// public methods</span>
  _me.init = <span class="skeyw">function</span> () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  _me.restartGame = <span class="skeyw">function</span> () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  _me.updateDisplay = <span class="skeyw">function</span> () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  _me.makeMove = <span class="skeyw">function</span> (src, dest, who) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;

  <span class="comment">// private functions</span>
  <span class="skeyw">function</span> calculateMinVar () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> calculateScore () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> renderBonusCombos () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> syncSVGnHUD () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> renderPrevMoves () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> calculateVariations () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> findSlots (query) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> onChange_playerName () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> onChange_nslots () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> onChange_cols () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> repositionSvg () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> drawSlot (row, col, props) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> getMsg (id, vars) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> remChilds (elem, skip, clean) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> arrToStr (arr) <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;
  <span class="skeyw">function</span> formCommand () <span class="skeyw">{</span>  ...  <span class="skeyw">}</span>;</code></pre>

		<p>The <code>voiceMessage</code> function is called from the VoiceXML form. The purpose is straightforward: it just returns the string to be synthesized. For the <var>voice-prompt</var> string we dynamically update the player number and name.</p>

<pre><code>  _me.voiceMessage = <span class="skeyw">function</span> (type)
  <span class="skeyw">{</span>
	<span class="skeyw">if</span>(!type)
	  <span class="skeyw">return</span> _me.messages<span class="skeyw">[</span><span class="sstring">&#39;internal-error&#39;</span><span class="skeyw">]</span> || <span class="sstring">&#39;Internal error&#39;</span>;

	type = <span class="sstring">&#39;voice-&#39;</span> + type;

	<span class="skeyw">var</span> msg = <span class="sstring">&#39;&#39;</span>;
	<span class="skeyw">if</span>(type == <span class="sstring">&#39;voice-prompt&#39;</span>)
	  msg = getMsg(type, <span class="skeyw">{</span><span class="sstring">&#39;nr&#39;</span> : _me.move_by+1, <span class="sstring">&#39;name&#39;</span> : _me.players<span class="skeyw">[</span>_me.move_by<span class="skeyw">]}</span>);
	<span class="skeyw">else</span>
	  msg = getMsg(type);

	<span class="skeyw">return</span> msg;
  <span class="skeyw">}</span>;</code></pre>

		<p>The <code>voiceCommand</code> function is invoked by the VoiceXML form once the user says something that it recognises. The function checks if the semantic interpretation object contains a valid request, after which it calls the general purpose <code>makeMove</code> function. The Voice-related code does not deal at all with the SVG code, nor with the game logic. The value returned by <code>makeMove</code> is used to determine which message to synthesize.</p>

<pre><code>  _me.voiceCommand = <span class="skeyw">function</span> (vres)
  <span class="skeyw">{</span>
	<span class="skeyw">if</span>(!vres || !vres.interpretation)
	  <span class="skeyw">return</span> <span class="sstring">false</span>;

	<span class="skeyw">var</span> src = <span class="skeyw">{}</span>,
	  dest = <span class="skeyw">{}</span>,
	  p, found_src = <span class="sstring">false</span>, found_dest = <span class="sstring">false</span>,
	  si = vres.interpretation;

	<span class="comment">// construct the src and dest objects for makeMove()</span>
	<span class="skeyw">for</span>(p <span class="skeyw">in</span> _me.props)
	<span class="skeyw">{</span>
	  <span class="skeyw">if</span>((si<span class="skeyw">[</span><span class="sstring">&#39;src_&#39;</span> + p<span class="skeyw">]</span> || si<span class="skeyw">[</span><span class="sstring">&#39;src_&#39;</span> + p<span class="skeyw">]</span> == 0) &amp;&amp; si<span class="skeyw">[</span><span class="sstring">&#39;src_&#39;</span> + p<span class="skeyw">]</span> != -1)
	  <span class="skeyw">{</span>
		src<span class="skeyw">[</span>p<span class="skeyw">]</span> = si<span class="skeyw">[</span><span class="sstring">&#39;src_&#39;</span> + p<span class="skeyw">]</span>;
		found_src = <span class="sstring">true</span>;
	  <span class="skeyw">}</span>

	  <span class="skeyw">if</span>((si<span class="skeyw">[</span><span class="sstring">&#39;dest_&#39;</span> + p<span class="skeyw">]</span> || si<span class="skeyw">[</span><span class="sstring">&#39;dest_&#39;</span> + p<span class="skeyw">]</span> == 0) &amp;&amp; si<span class="skeyw">[</span><span class="sstring">&#39;dest_&#39;</span> + p<span class="skeyw">]</span> != -1)
	  <span class="skeyw">{</span>
		dest<span class="skeyw">[</span>p<span class="skeyw">]</span> = si<span class="skeyw">[</span><span class="sstring">&#39;dest_&#39;</span> + p<span class="skeyw">]</span>;
		found_dest = <span class="sstring">true</span>;
	  <span class="skeyw">}</span>
	<span class="skeyw">}</span>

	<span class="skeyw">if</span>(!found_src || !found_dest)
	  <span class="skeyw">return</span> <span class="sstring">&#39;event-nomatch&#39;</span>;

	<span class="skeyw">var</span> res = <span class="skeyw">{</span><span class="sstring">&#39;action&#39;</span> : <span class="sstring">&#39;prompt-value&#39;</span><span class="skeyw">}</span>;

	<span class="skeyw">var</span> gres = _me.makeMove(src, dest);

	<span class="skeyw">if</span>(gres == -1)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;move-not-allowed&#39;</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == -2)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;no-objects-found&#39;</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == -3)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;previous-move&#39;</span>, <span class="skeyw">{</span><span class="sstring">&#39;nr&#39;</span> : _me.disallow_nmoves<span class="skeyw">}</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == -4)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;false-move&#39;</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres &lt; -4)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = _me.messages<span class="skeyw">[</span><span class="sstring">&#39;internal-error&#39;</span><span class="skeyw">]</span> || <span class="sstring">&#39;Internal error&#39;</span>;
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == 2)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;player-won&#39;</span>, <span class="skeyw">{</span><span class="sstring">&#39;nr&#39;</span> : _me.winner+1, <span class="sstring">&#39;name&#39;</span> : _me.players<span class="skeyw">[</span>_me.winner<span class="skeyw">]}</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == 3)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;game-end-maxMoves&#39;</span>, <span class="skeyw">{</span><span class="sstring">&#39;nr&#39;</span> : _me.maxMoves<span class="skeyw">}</span>);
	<span class="skeyw">else</span> <span class="skeyw">if</span>(gres == 4)
	  res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span> = getMsg(<span class="sstring">&#39;game-end-nochange&#39;</span>, <span class="skeyw">{</span><span class="sstring">&#39;nr&#39;</span> : _me.maxMovesNoChange<span class="skeyw">}</span>);

	<span class="skeyw">if</span>(!res<span class="skeyw">[</span><span class="sstring">&#39;message&#39;</span><span class="skeyw">]</span>)
	  <span class="skeyw">return</span> <span class="sstring">&#39;clear-cmd&#39;</span>;
	<span class="skeyw">else</span>
	  <span class="skeyw">return</span> res;
  <span class="skeyw">}</span>;

  <span class="skeyw">if</span>(!no_autoinit)
	<span class="skeyw">window</span>.addEventListener(<span class="sstring">&#39;load&#39;</span>, _me.init, <span class="sstring">false</span>);

  <span class="skeyw">return</span> _me; <span class="comment">// the end of the RD_game object</span>
<span class="skeyw">}</span>)();</code></pre>

		<p>There you have it: we only added two Voice-related functions to the initial code.</p>

		<h2 id="theresult">The result</h2>

		<p>You can play the game using Voice commands straight away - <a href="the-game.xhtml">Try it yourself!</a> As you can see, making the game Voice controllable is really easy. It only takes adding a couple of functions and building the VoiceXML form itself.</p>
		<h2 id="implementationnotes">Implementation notes</h2>

		<p>Due to the fact that the SVG game uses animations, making the game usable on Firefox as well as Opera required checking whether the SVG DOM methods and properties specific to animations were available or not. Firefox only partially supports the SVG animation module.. It&#39;s generally important to make checks for the presence of the methods and properties you want to use, in order to avoid breakage.</p>

		<p>Additionally, while working on the SVG part of the game I found some bugs associated with the <code>svg:use</code>  element. The result of these bugs causes weird behavior (see the bug reports themselves <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=265894">265894</a>, <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=265895">265895</a>, <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=269482">269482</a>).</p>

		<p>While working on the project I was interested in using SVG filters, which are supported by Opera 9.5+ and recent versions of Firefox.</p>

		<p>There were no browser-specific issues with adding Voice to the game.</p>
