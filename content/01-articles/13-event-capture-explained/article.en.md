Title: Event capture explained
----
Date: 2006-11-03 16:33:41
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

<h1>Event capture explained</h1>

<p>Occasionally I <a href="http://my.opera.com/hallvors/blog/show.dml/43760">have been</a> <a href="http://my.opera.com/hallvors/blog/show.dml/12917">grumbling</a> about un-intended event capture. Here is a more detailed explanation of the feature and the issues.</p>

<h2>What is event capture?</h2>

<p>If you call addEventListener with <strong>true</strong> as the third argument you create a capturing event. The difference from a normal event is that the capturing listener detects all events in the document before they are sent to the actual target of the event. So, for example if you have </p>

<p>
<pre>
  &lt;body&gt;
    &lt;p onclick=&quot;alert(&#39;you clicked the p&#39;)&quot;&gt;click to test&lt;/p&gt;
</pre><br />and do <pre>document.body.addEventListener(&#39;click&#39;, func, true)</pre> the event listener on BODY will run before the onclick on the P tag. The event listener on BODY can choose to stop propagation so that the event will not actually be passed on to the P tag. For example, <br /><pre>document.body.addEventListener( &#39;click&#39;, function(e){ if(confirm(&#39;Stop event?&#39;))e.stopPropagation(); }, true );</pre><br />If the BODY event listener was not a capturing one, the P onclick would trigger first, then the BODY&#39;s listener would fire. So event capture is simply a way to change the order different elements will &quot;see&quot; the event.</p>

<h2>Implementations</h2>

<p>addEventListener and capturing events is part of the DOM2 Events standard, which is supported by Opera, Gecko/Firefox, and Safari. IE supports the slightly different attachEvent API.</p>

<h2>Implementation differences</h2>
<h3>Capture on target</h3>

<p>The DOM spec states that capturing events should not fire on target, because the idea of a capturing event is to detect events <strong>before</strong> they reach their targets. Because of bugs in <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=235441" target="_blank">Gecko</a> and Safari, web content that is tested mostly with Firefox or other Gecko-based browsers sometimes expects capturing listeners to fire on target. Such content will fail in Opera 7, 8 and current releases of 9 because of its correct implementation of the standard.</p>

<h3>Capturing load events</h3>

<p><pre>document.addEventListener(&#39;load&#39;, func, true)</pre> creates a capturing load event listener. Opera supports capture of load events. All items (images, style sheets, external scripts) loaded into a document has their own load event, and if you capture load events for the entire document your script is going to run for every such event.<br />Content that is tested with Gecko or older Safari versions tend to expect only one load event because these browsers do not support load event capture. Such content may fail in Opera because a script that expects to be run only once (for example to initialise the page) may be run hundreds of times.</p>

<h3>Removing event listener from event handler</h3>
<p>If you have several event listeners for the same event, and one of them removes another one the second will still be called in Opera for that event. This is a known bug but it&#39;s limited to very rare use cases.</p>

<h2>Advisory</h2>

<p>As browsers improve their DOM specification compatibility, a script that uses event capture without intending to do so will become incompatible with more and more browser versions.  As a web developer, you can avoid the implementation gotchas in browsers and achieve cross-browser compatibility simply by avoiding capturing event listeners unless you know what you are doing. Make sure the third argument of your addEventListener calls defaults to <strong>false</strong>, not true.</p> 

<p><i>Re-published from <a href="http://my.opera.com/hallvors/blog/2006/10/12/2006-10-12-event-capture-explained">http://my.opera.com/hallvors/blog/2006/10/12/2006-10-12-event-capture-explained</a> with minor updates and changes</i></p>
