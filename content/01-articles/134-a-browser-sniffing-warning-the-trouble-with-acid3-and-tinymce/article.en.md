Title: A browser sniffing warning: The trouble with Acid3 and TinyMCE
----
Date: 2008-07-03 13:10:35
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

<h2>The history of a JavaScript bug and things we can learn from it</h2>

<p>Once upon a time, a shiny new release of Opera exposed a rather nasty bug in a very popular JavaScript library: Opera 9.5 didn&#8217;t work properly with the <a href="http://tinymce.moxiecode.com/">TinyMCE</a> editor, causing severe text editing problems in Wordpress&#8217;s admin screen, webmail applications and message boards worldwide. How could that happen? Read on for the important lesson hidden in Opera&#8217;s bug report number 335463.</p>

<h2>Timeline</h2>
<ul><li>On March 3rd 2008, the <a href="http://acid3.acidtests.org/">Acid3 test</a> was considered finished and officially released.</li>
<li>On March 5th <a href="http://tc.labs.opera.com/dom/range/003.htm">one of the bugs that prevented Opera from passing Acid3</a>, summarised as &#8220;ranges collapse when nodes are inserted&#8221;, was verified fixed in Opera&#8217;s core. The fix slowly made its way into public previews of Opera 9.5.</li>
<li>On May 18th somebody trying out weekly builds of Opera 9.5 first reported weird issues with the TinyMCE editor: the Enter key messed up the text instead of creating new paragraphs.</li></ul>

<p>Unfortunately there was another open bug related to the Enter key and it was not until June 5th that we realised the problem in TinyMCE was worse than in the other editors. Whenever you pressed Enter,  paragraphs would end up in the wrong order so content would appear &#8220;scrambled&#8221;. It was a pretty weird and somewhat funny effect to see whole paragraphs reordering themselves randomly.</p>

<h2>The TinyMCE bug</h2>

<p>After some analysis, we discovered the following snippet of JavaScript in the TinyMCE code that deals with Enter key presses:</p>

<pre>// Opera needs this one backwards
if (isOpera) {
	r.insertNode(bef);
	r.insertNode(aft);
} else {
	r.insertNode(aft);
	r.insertNode(bef);
}</pre>

<p>Now, I don&#8217;t intend to pick on TinyMCE developers in particular. It&#8217;s one of the most widely-used rich text editors, and there are many things to like about it&#8212;it&#8217;s relatively light, very configurable and extensible through a &#8220;plugin&#8221; architecture. This very code shows that they have put quite some testing and work into being compatible with Opera!</p>

<p>So why is that <code>if(isOpera)</code> part there? The answer is &#8220;for historical reasons&#8221;. The bug we fixed on March 5th to pass Acid3 had caused them problems, and this is their workaround. In this specific case, the bug caused multiple nodes inserted into a range to appear in the wrong order. </p>

<p>However, detecting Opera and inserting content in the reverse order to work around our old bug now caused pretty bad problems in Opera 9.5. Stuck between a rock and a hard place, we had to choose whether to pass Acid3 or be compatible with TinyMCE!  If we stuck to the correct implementation, we would get one more point on Acid3 but TinyMCE would break on millions of websites.</p>

<h2>History bites</h2>

<p>A brief history lesson to illustrate the original Opera 9.2x bug will help you to understand the workaround. Consider this paragraph:</p>

<pre>&lt;p&gt;This is filler text&lt;/p&gt;</pre>

<p> After running a JavaScript like the following&#8230;</p>

<pre>var range = document.createRange(); //  A &quot;range&quot; is a bit like a text selection made and manipulated from JavaScript.
range.setStart( p.firstChild, 5 ); // first character inside text node is 0th
range.setEnd( p.firstChild, 13 ); // so here we select the 6th through 14th</pre>

<p>&#8230;the range will point to the 6th through to the 14th character of the text node inside the <code>p</code> tag&#8212;the text highlighted in yellow below.</p>

<p><code>&lt;p&gt;This <span style="background: #ff5">is filler</span> text&lt;/p&gt;</code></p>

<p>Now you can insert another word into the sentence with the following script:</p>

<pre>range.insertNode( document.createTextNode(&#39; truly &#39;) );</pre>

<p>The output from this would be:</p>

<p><code>&lt;p&gt;This <span style="background: #ff5"> truly is filler</span> text&lt;/p&gt;</code></p>

<p>The new text node is inserted at the start of the range.</p>

<p>Now, here comes the bug: in Opera 9.2x doing so would collapse the range&#8212;rather than the word &#8220;truly&#8221; being added to our yellow selection you would get something like the following:</p>

<p><code>&lt;p&gt;This truly is filler<span style="background: #ff5"> </span> text&lt;/p&gt;</code></p>

<p>In other browsers you could go on to do this:</p>

<pre>range.insertNode( document.createTextNode(&#39; really, &#39;) );</pre>

<p>Which would produce the following sentence:</p>

<p><code>&lt;p&gt;This <span style="background: #ff5">really, truly is filler</span> text&lt;/p&gt;</code></p>

<p>Because of the location of the collapsed range however Opera 9.2x would output this:</p>

<p><code>&lt;p&gt;This  truly is filler really,<span style="background: #ff5"> </span> text&lt;/p&gt;</code></p>

<p>(Actually this description is a bit simplified. There were some other conditions before the bug occurred, mainly that the range would have to cover more than one single text node.)</p>

<p>The TinyMCE developers noticed that by inserting content in the reverse order&#8212;first &#8220;really, &#8221; then &#8220;truly&#8221;&#8212;you would achieve the same output as in the other browsers for a collapsed range. We must bear in mind though that when our core bug is fixed, this workaround will of course end up reversing the expected order of paragraphs or sentences!</p>

<h2>Tiny fix</h2>

<p>Luckily for us, the TinyMCE developers are very responsive to change requests and before long a fix was checked in and scheduled for next TinyMCE 3.x release. The fix is as follows:</p>

<pre>// Opera needs this one backwards for older versions
if (isOpera  <span style="background: #ff5">&amp;&amp; parseFloat(opera.version()) &lt; 9.5</span>) {
	r.insertNode(bef);
	r.insertNode(aft);
} else {
	r.insertNode(aft);
	r.insertNode(bef);
}</pre>

<p>It works, but it&#8217;s not what you would call an elegant solution, since it makes use of browser sniffing and version detection. Not to mention that we still struggle with compatibility problems until those millions of websites have upgraded. Seeing that many of them are still using TinyMCE 2.x it&#8217;s unlikely that this problem will ever go away completely.</p>

<h2>Bug detection</h2>

<p>The TinyMCE/Opera 9.5 compatibility problem is a textbook example of why browser sniffing should be avoided at all costs. While it may seem like a quick and simple shortcut to work around a bug in the short term, browser sniffing creates a <strong>maintenance nightmare</strong> further down the road. With renewed competition in the browser space, vendors are pushing out upgrades and new versions every year, and every time you assume a certain behaviour because of the browser&#8217;s name your compatibility with future versions is at risk.</p>

<p>Also, whether you develop your own site or write script libraries that will run on thousands of other websites, the chances are that mistakes you make today will stay on the web for years to come, preventing users from upgrading to newer and better browsers because sites they want to use break.</p>

<p>What if you could detect that the bug is present, and not bother detecting the browser at all? It turns out that you can often replace browser detection with &#8220;bug detection&#8221;.</p>

<p>Given the above analysis, we now understand the bug well enough to try to write some code to detect it. A script is needed that creates a range, inserts some content, and checks what order it appears in. Here is one suggested approach:</p>

<pre>
// create a separate document to test in, to avoid adding debugging stuff to our working document
var doc = document.implementation.createDocument( &#39;&#39;, &#39;test&#39;, null );
// add some content
doc.documentElement.appendChild( doc.createTextNode( &#39; test&#39; ) );
// create range (make sure we create it in the test document)
var r=doc.createRange();
r.selectNodeContents( doc.documentElement );
// insert something
r.insertNode( doc.createTextNode( &#39; world&#39;) );
// and some more into the range
r.insertNode( doc.createTextNode( &#39;hello&#39;) );
// content should be inserted at start of node, so what we inserted last is .firstChild
var has_range_collapse_bug = doc.documentElement.firstChild.data != &#39;hello&#39;;
</pre>

<p><a href="tinyrng.htm">Here is a finished test script</a>, which shows two ways to check if the bug is present (there are probably other ways to discover it too). If that code ran while TinyMCE was loading and set a variable you could later check to discover the right order to insert contents for your particular browser, rather than the ugly browser sniffing method.</p>

<h2>Goodbye browser detection?</h2>


<p>Whenever you feel tempted to solve a problem with the inelegant browser sniffing hack, take a moment to ask yourself if there is a simple way to detect the bug instead. Done right, the &#8220;<strong>detect the bug, not the browser</strong>&#8221; rule of thumb will make maintaining your site much easier whenever a new browser or browser version is released.</p>

<p>Bug detection reduces your future workload, helps your visitors, and is healthier for the web. You&#8217;ll never resort to browser sniffing again, right?</p>
