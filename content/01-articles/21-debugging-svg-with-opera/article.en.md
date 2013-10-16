Title: Debugging SVG with Opera
----
Date: 2007-02-05 10:58:11
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

<p>So you have an SVG file that won&#39;t work in Opera? This article will help you understand and fix common mistakes in SVG code.</p>

<p>I&#39;m going to use an example that I found online. It&#39;s a simple boardgame called <i>Tokarama</i> and it was created in 2004 by <a href="http://zuccaralloo.de/">Heiko Niemann</a>. The game uses declarative animations and some scripting, and it has about 600 lines of code in total. It was originally authored for the Adobe SVG viewer, since it was the only available viewer at the time that supported the full set of features needed for the game.</p>

<p>The Adobe SVG viewer has some extensions that are not in the <a href="http://www.w3.org/TR/SVG11">SVG 1.1 specification</a>, for example audio support and some getter/setter DOM methods. Opera doesn&#39;t have these non-standard extensions, and is also a little stricter than the Adobe viewer when it comes to XML namespaces being defined.</p>

<p>So, let&#39;s see some of the source of the game:
<pre><code>&lt;?xml version=&quot;1.0&quot; standalone=&quot;no&quot;?&gt;
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 20010904//EN&quot; 
  &quot;http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd&quot;[
	&lt;!ENTITY aBi &quot;arrowBase.mouseover;&quot;&gt;
	&lt;!ENTITY aNi &quot;arrowN.mouseover;&quot;&gt;
	&lt;!ENTITY aSi &quot;arrowS.mouseover;&quot;&gt;
	&lt;!ENTITY aEi &quot;arrowE.mouseover;&quot;&gt;
	&lt;!ENTITY aWi &quot;arrowW.mouseover;&quot;&gt;
	&lt;!ENTITY aNo &quot;arrowN.mouseout;&quot;&gt;
	&lt;!ENTITY aSo &quot;arrowS.mouseout;&quot;&gt;
	&lt;!ENTITY aEo &quot;arrowE.mouseout;&quot;&gt;
	&lt;!ENTITY aWo &quot;arrowW.mouseout;&quot;&gt;
	&lt;!ENTITY bk1 &quot;#fcb;&quot;&gt;
	&lt;!ENTITY bk2 &quot;#bee;&quot;&gt;
]&gt;
&lt;<span class="mtag">svg</span> <span class="mattr">width</span>=&quot;<span class="mvalue">100%</span>&quot; <span class="mattr">height</span>=&quot;<span class="mvalue">100%</span>&quot; <span class="mattr">zoomAndPan</span>=&quot;<span class="mvalue">disable</span>&quot; 
 <span class="mattr">onload</span>=&quot;<span class="sfunc">init(evt)</span>&quot; <span class="mattr">onmousemove</span>=&quot;<span class="sfunc">getCoords(evt)</span>&quot;
 <span class="m"><span class="mattr">xmlns</span>=&quot;<span class="mvalue">http://www.w3.org/2000/svg</span>&quot; 
 <span class="mattr">xmlns:xlink</span>=&quot;<span class="mvalue">http://www.w3.org/1999/xlink</span>&quot; 
 <span class="mattr">xmlns:toka</span>=&quot;<span class="mvalue">http://www.zuccaralloo.de/toka</span>&quot;</span>&gt;
...</code></pre>
<p class="comment">Fig 1. The first few lines of Tokarama</p>
</p>

<p>Here we see that the author has added some XML entities, and that the document type declaration claims that the document contains valid SVG 1.0 content.</p>

<p>Looking at the above content we can see that the author has properly opened both the <code>svg</code> and the <code>xlink</code> namespaces, and also a third custom namespace called toka, that is to be used for the game state.</p>

<p class="note">Note: It is important to open the namespaces both for <code>svg</code> and for <code>xlink</code> on the root <code>svg</code> element - even though the SVG 1.1 DTD says you don&#39;t have to. Opera will not load the DTD to validate the content, and that means you will get an XML error if the necessary namespace(s) have not been opened explicitly in the XML file.</p>

<h2>Playing the game</h2>
<p><object class="left" data="" type="image/svg+xml" width="100%" height="500px"><img src="http://forum-test.oslo.osa/kirby/content/articles/21-debugging-svg-with-opera/tokarama1.png" /></object></p>
<p class="comment" align="center">Fig 2. The unmodified Tokarama game</p>

<p>Ok, enough talking, let&#39;s try to play the unmodified game above. Try clicking the play button.</p>

<p>As you will notice, after clicking the play button you end up with an empty game board &#x2014; not quite what we wanted. Let&#39;s try using the error console (see menubar: <b>Tools</b> &gt; <b>Advanced</b> &gt; <b>Error console</b>). Clear previous text in the error console, and then load the game in a new window by clicking this <a href="tokarama1.svg" target="_blank">link</a>.</p>

<p>Now you should see that Opera has some problems with the content:
<pre><code>JavaScript - http://devfiles.myopera.com/articles/60/tokarama1.svg
  Event thread: mousemove
  Error:
  name: ReferenceError
  message: Statement on line 1: Reference to undefined variable: getCoords
  Backtrace:
    Line 1 of  script 
      getCoords(evt);
  At unknown location
    [statement source code not available]

  SVG - http://devfiles.myopera.com/articles/60/tokarama1.svg
  Failed attribute on use element: fill=&quot;#fcb;&quot;.

  SVG - http://devfiles.myopera.com/articles/60/tokarama1.svg
  Failed attribute on animateMotion element: begin=&quot;undefined&quot;;.
</code></pre>
<p class="comment">Fig 3. Output from the error console</p>
</p>

<p>The JavaScript error does not always happen, so you may not get the error in your error console. The error comes from an event attribute <code>onmousemove=&quot;getCoords(evt);&quot;</code> on the root <code>svg</code> element. This is meant to call the function <code><span class="sfunc">getCoords()</span></code> when the user moves the mouse. The problem is that this function may not exist at the time the attribute is parsed, since the script element that contains the function definition is inside the <code>svg</code> element. The options to get rid of this error are either making sure that the script element that contains the function is before the svg root, or adding a mousemove-handler with script in a function called from an <code>&#39;onload&#39;</code>-attribute. The second alternative is simpler, and looks like this:
<pre><code>  <span class="skeyw">function </span><span class="sfunc">init</span>(e)
  {
    ...
    <span class="svar">svgDoc</span>.<span class="svar">documentElement</span>.<span class="sfunc">addEventListener</span>(<span class="sstring">&#39;mousemove&#39;</span>, <span class="sstring">getCoords</span>, <span class="skeyw">false</span>);
  }</code></pre>
<p class="comment">Fig 4. Adding an event listener on the svg root element</p>
</p>
<p>After adding the line above to the <code><span class="sfunc">init()</span></code> function, we can remove the <code>&#39;onmousemove&#39;</code> attribute from the svg root element.
</p>

<p>The next error says that the <code>&#39;fill&#39;</code> attribute has an unsupported or incorrect value. Opera would treat this as being in error, which means rendering as if the attribute wasn&#39;t there at all. Fixing this error is as easy as searching for the string <code>&quot;#fcb;&quot;</code> in the file and replacing it with something that is <a href="http://www.w3.org/TR/SVG11/painting.html#FillProperties">valid</a>. In this case we should remove the trailing semicolon. We find that the error is in the XML entities, and we can change both that one and the one below, <code>&quot;#bee;&quot;</code>, which is likely to be the same error.</p>

<p>The third and last error is for the value of a <code>&#39;begin&#39;</code> attribute. Valid values for <code>&#39;begin&#39;</code> do not include the string <code>&#39;undefined&#39;</code>, but the intent of the author is quite clear: the animation should not be started until a script tells it to. The <a href="http://www.w3.org/TR/SVG11/animate.html#TimingAttributes">animation chapter</a> in the SVG specification states that value we should specify for <code>&#39;begin&#39;</code> is <code>&#39;indefinite&#39;</code>.</p>

<p>Having made these changes we now end up with a file that produces no errors in the error console. But trying to play this <a href="tokarama2.svg" target="_blank">modified version</a> of the game unfortunately yields the same results as the original. You&#39;ll still get the empty board when clicking the play button.</p>

<p>You would probably expect some board to be displayed when clicking the play button. Let&#39;s see what happens on the actual click.
<pre><code>  &lt;<span class="mtag">g</span> <span class="mattr">transform</span>=&quot;<span class="mvalue">translate(190,300)</span>&quot; <span class="mattr">onclick</span>=&quot;<span class="sfunc">startGame()</span>&quot;&gt;
    &lt;<span class="mtag">use</span> <span class="mattr">xlink:href</span>=&quot;<span class="mvalue">#button</span>&quot; /&gt;
    &lt;<span class="mtag">path</span> <span class="mattr">d</span>=&quot;<span class="mvalue">M7,5 l8,5 -8,5 z</span>&quot; <span class="mattr">fill</span>=&quot;<span class="mvalue">#444</span>&quot; /&gt;
  &lt;<span class="mtag">/g</span>&gt;</code></pre>
<p class="comment">Fig 5. The play button SVG source</p>
</p>

<p>The button calls the function <span class="sfunc">startGame()</span> when it receives a click event, so let&#39;s see if there are any clues in the <span class="sfunc">startGame()</span> function.
<pre><code>  function <span class="sfunc">startGame()</span> 
  {
    <span class="sfunc">setAttr</span>(<span class="sstring">&#39;introGroup&#39;</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;display&#39;</span>,<span class="sstring">&#39;none&#39;</span>);
    <span class="sfunc">setAttr</span>(<span class="sstring">&#39;introHint&#39;</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;display&#39;</span>,<span class="sstring">&#39;none&#39;</span>);
    <span class="sfunc">setAttr</span>(<span class="sstring">&#39;resetButton&#39;</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;display&#39;</span>,<span class="sstring">&#39;inline&#39;</span>);
  }</code></pre>
<p class="comment">Fig 6. The <span class="sfunc">startGame()</span> function</p>
</p>

<p>No real clues there either, except that the board is probably in a layer that is below the element named <code>&#39;introGroup&#39;</code>. Looking at the element with <span class="mattr">id</span>=<span class="sstring">&#39;introGroup&#39;</span> gives no clues either. A good bet is that there is an initialization function that gets called from somewhere else. Searching for <code class="func">init</code> in the content reveals that the svg calls an init function from the root svg <code class="att">onload</code> handler.</p>

<p><pre><code>  <span class="svar">newDot</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="skeyw">null</span>,<span class="sstring">&#39;use&#39;</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newDot</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;transform&#39;</span>,<span class="svar">tran</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newDot</span>,<span class="svar">xlinkNS</span>,<span class="sstring">&#39;href&#39;</span>,<span class="sstring">&#39;#dot&#39;</span>);
  <span class="svar">dotts</span>.<span class="sfunc">appendChild</span>(newDot);
	
  <span class="svar">newTok</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="skeyw">null</span>,<span class="sstring">&#39;use&#39;</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;id&#39;</span>,<span class="sstring">&#39;t&#39;</span>+<span class="svar">k</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,tokaNS,<span class="sstring">&#39;tid&#39;</span>,<span class="svar">k</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;display</span>&#39;,<span class="svar">disp</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;transform&#39;</span>,<span class="svar">tran</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="svar">xlinkNS,<span class="sstring">&#39;href&#39;</span>,<span class="sstring">&#39;#toka&#39;</span>);
  <span class="svar">tokas</span>.<span class="sfunc">appendChild</span>(<span class="svar">newTok</span>);
</span></code></pre>
<p class="comment">Fig 7. Part of the <span class="sfunc">init()</span> function</p>
</p>

<p>On inspecting the code above, we find that the board is built dynamically by creating new elements and inserting them into the document tree. So why is this not working? To answer that, we&#39;ll have to do some JavaScript debugging. There are many different ways to do this. We can either add some calls to the <span class="sfunc">alert()</span> function to see some values, or we can use the Opera-specific function <code><span class="sfunc">postError()</span></code>, which puts the messages in the Error Console. Since the creation of elements is in a loop, we might prefer not to have a bunch of modal alert windows thrown at us, a reason to choose the <code><span class="svar">opera</span>.<span class="sfunc">postError()</span></code> variant.</p>

<p><pre><code>  <span class="svar">newDot</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="skeyw">null</span>,<span class="sstring">&#39;use&#39;</span>);

  <span class="svar">opera</span>.<span class="sfunc">postError</span>(<span class="sstring">&quot;New dot: &quot;</span> + <span class="svar">newDot</span>);

  <span class="sfunc">setAttr</span>(<span class="svar">newDot</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;transform&#39;</span>,<span class="svar">tran</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newDot</span>,<span class="svar">xlinkNS</span>,<span class="sstring">&#39;href&#39;</span>,<span class="sstring">&#39;#dot&#39;</span>);
  <span class="svar">dotts</span>.<span class="sfunc">appendChild</span>(newDot);
	
  <span class="svar">newTok</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="skeyw">null</span>,<span class="sstring">&#39;use&#39;</span>);

  <span class="svar">opera</span>.<span class="sfunc">postError</span>(<span class="sstring">&quot;New tok: &quot;</span> + <span class="svar">newTok</span>);

  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;id&#39;</span>,<span class="sstring">&#39;t&#39;</span>+<span class="svar">k</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,tokaNS,<span class="sstring">&#39;tid&#39;</span>,<span class="svar">k</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;display</span>&#39;,<span class="svar">disp</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="skeyw">null</span>,<span class="sstring">&#39;transform&#39;</span>,<span class="svar">tran</span>);
  <span class="sfunc">setAttr</span>(<span class="svar">newTok</span>,<span class="svar">xlinkNS,<span class="sstring">&#39;href&#39;</span>,<span class="sstring">&#39;#toka&#39;</span>);
  <span class="svar">tokas</span>.<span class="sfunc">appendChild</span>(<span class="svar">newTok</span>);
</span></code></pre>
<p class="comment">Fig 8. Debugging the <span class="sfunc">init()</span> function</p>
</p>

<p>Now clear the error console, and click <a href="tokarama3.svg" target="_blank">here</a> to load the game with debugging code in a new window. Click the play button and check the console for the result.</p>

<p>We get the resulting strings &quot;<code>New dot: (object Element)</code>&quot; and &quot;<code>New tok: (object Element)</code>&quot;. This means that the created elements have not been recognized as SVG elements, because the output would then have been &quot;<code>(object SVGUseElement)</code>&quot; instead of &quot;<code>(object Element)</code>&quot;.</p>

<p>The best way to ensure that we create valid SVG elements is to simply pass the appropriate namespace parameter to the <code><span class="sfunc">createElementNS</span></code> function. In our case we want svg elements, so let&#39;s add the svg namespace like this:
</p>

<p><pre><code>  <span class="skeyw">var</span> <span class="svar">svgNS</span> = <span class="sstring">&#39;http://www.w3.org/2000/svg&#39;</span>;
  <span class="svar">newDot</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="svar">svgNS</span>,<span class="sstring">&#39;use&#39;</span>);
  ...
  <span class="svar">newTok</span> = <span class="svar">svgDoc</span>.<span class="sfunc">createElementNS</span>(<span class="svar">svgNS</span>,<span class="sstring">&#39;use&#39;</span>);</code></pre>
<p class="comment">Fig 9. Adding the svg namespace to <span class="sfunc">createElementNS()</span></p>
</p>

<p>If you want to verify that this indeed creates the right kind of elements, <a href="tokarama4.svg" target="_blank">try running it</a> with the debugging code left in.</p>

<p>When removing the JavaScript debugging code, we are left with a <a href="tokarama5.svg" target="_blank">fully working copy</a> of the game. All that&#39;s left now is to do some polishing. For instance you may notice that pieces flicker back and forth when removed from the board. Causes for that may be that the script triggers a screen update, or that a declarative animation finishes and sets back its original value. In this case, it&#39;s the latter, and adding <code><span class="mattr">fill</span>=&#39;<span class="mvalue">freeze</span>&#39;</code> to those animation elements solves the problem.<p>

<p class="note">Note: If you want to delay screen updates when you&#39;re doing many modifications to a document, you can use the SVG DOM <a href="http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGSVGElement">suspendRedraw/unsuspendRedraw</a> functions.</p>

<p>With only a few minor modifications we have now made the original content work well in Opera. Click <a href="tokarama6.svg" target="_blank">here</a> to play the final version of the game.
</p>

<p>Many thanks to Heiko Niemann for letting me use his game for this article.</p>

<h2>Some common problems and their solutions</h2>
<p>
<table>
<tr>
	<th>Problem</th>
	<th>Solution</th></tr>
<tr>
	<td>I get an error when trying to display svg &quot;XML error: undeclared XML namespace prefix used in attribute name&quot;</td>
	<td>Add the correct namespaces to the root <code>svg</code> element, like this: <code>xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;</code>.</td></tr>
<tr>
	<td>Some fonts are too big/too small</td>
	<td>If you&#39;re using CSS for the font-sizes, don&#39;t forget to specify a unit, like this: <code>style=&quot;font-size:12px&quot;</code>. Use the error console to find and fix the errors.</td></tr>
<tr>
	<td>I get scripting errors for the methods <code><span class="sfunc">getURL</span> and <span class="sfunc">parseXML</span></code></td>
	<td>These methods are not part of the SVG 1.1 DOM. Use <a href="http://www.w3.org/TR/XMLHttpRequest/">XMLHttpRequest</a> instead.</td>
</tr>
<tr>
	<td>Keyboard events are not working</td>
	<td>The event attributes <code>onkeypress</code>, <code>onkeydown</code>, and <code>onkeyup</code> were not in SVG 1.1. It&#39;s possible to use <code>addEventListener</code> instead, example: <br /><code>element.addEventListener(&#39;keypress&#39;, function, true)</code>. Remember to call <code>evt.preventDefault()</code> on keyevents that you handle in script, or Opera may interpret the keystroke as being an Opera shortcut (such as <kbd>Z</kbd> = go back, <kbd>X</kbd> = go forward).</td>
</tr>
<tr>
	<td>Audio is not working</td>
	<td>For simple sound effects (currently WAV files only), Opera 9 makes it possible to use the <a href="http://whatwg.org/specs/web-apps/current-work/#scs-sound">WHATWG audio API</a> as an alternative to the Adobe audio extension.</td>
</tr>
<tr>
	<td>I get a script error, <code>element.setProperty()</code> doesn&#39;t work</td>
	<td>To be on the safe side, use three parameters for <code>element.setProperty()</code>, the last being <code>null</code>. Example: <code>element.setProperty(&quot;fill&quot;, &quot;red&quot;, null);</code>. 
<br /><br />There is also a a shorthand syntax, example: <code>element.style.fill = &quot;red&quot;;</code></td>
</tr>
<tr>
	<td>Content served with incorrect MIME-type</td>
	<td>Fix your webserver to send the MIME-type <code>&quot;image/svg+xml&quot;</code> for all <i>*.svg</i> and <i>*.svgz</i> content</td>
</tr>
<tr>
	<td>My script doesn&#39;t work</td>
	<td>Script execution happens when a script element is encountered, just the same as for HTML. That is: scripts don&#39;t wait until the document has loaded fully before executing. 
	If you wish to run a particular method when the svg is fully loaded you should use the <code>&#39;onload&#39;</code> event attribute, like this: <br /><code>&lt;svg onload=&quot;mymethod();&quot;&gt;...&lt;/svg&gt;</code>.</td>
</tr>
</table>
</p>
<p>
Recommended links: The <a href="http://jwatt.org/svg/authoring/">SVG authoring guidelines</a>, and the tutorials and examples from <a href="http://www.carto.net/papers/svg/samples/">carto.net</a>.
</p></p></p>
