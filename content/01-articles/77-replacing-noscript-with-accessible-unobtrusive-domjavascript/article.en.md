Title: Replacing <noscript> with accessible, unobtrusive DOM/JavaScript
----
Date: 2010-03-29 12:22:29
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

		
	<h2>
		Introduction</h2>
	<p>
		In his book <em>&quot;ppk on JavaScript&quot;</em>, <a href="http://quirksmode.org">Peter-Paul Koch</a> points out that the <code>&lt;noscript&gt;</code> element has a limitation. Modern user agents with JavaScript enabled will hide content contained
		within the <code>&lt;noscript&gt;&lt;/noscript&gt;</code> tags, and reveal it when JavaScript is disabled. User agents that do not support JavaScript will display the content within it. User agents with partial/antiquated JavaScript capabilities however interpret
		the element correctly and do not show the content, but when JavaScript is disabled <em>also</em> do not show the content — it never gets seen. This has an impact on the accessibility of the content. If your writing is targeted at modern, standards-based,
		compliant, and fully capable JavaScript user agents, employing the &lt;noscript&gt; element is no problem. If the user agents among your audience are unpredictable, however, replacing the <code>&lt;noscript&gt;</code> element with another mechanism becomes
		significant. This article looks at one such solution. 
	</p>
	
	<h2>
		The solution</h2>
	<p>
		So, how can the behavior intended by the <code>&lt;noscript&gt;</code> element be enabled in these antiquated/partially-capable JavaScript user agents? The workflow for my solution is as follows:</p>
	<ul>
		<li>Insert an unobtrusive JavaScript &quot;hook&quot; via an <code>id</code> attribute value in the parent container&#39;s opening tag.</li>
		<li>Associate the &quot;hook&quot; with an external JavaScript function, which sets up a parent-to-child relationship between the container and its content.
			<ul>
				<li>
				When JavaScript is enabled, the external function keeps the alternative content hidden.
				<li>If the user agent cannot interpret the JavaScript expressions, the alternative content in the markup is revealed.</li>
				<li>When JavaScript is disabled the function no longer works, and the alternative content in the markup is revealed. This ensures graceful degradation of the script.</li>
			</li></ul>
		</li>
	</ul>
	
	<p><strong>Important Note:</strong> if the ability to hide the alternative content with JavaScript does not exist, the browser/user agent will be able to render the content ensuring accessibility and graceful degradation.</p>
	
	<h3>
		Building the Markup</h3>
	<p>
		In this section you&#39;ll build up the markup portion of the example.</p>
	<ol>
		<li>In the <code>&lt;head&gt;&lt;/head&gt;</code> tags of the web page, insert a <code>&lt;script&gt;</code> element containing the path to the external <code>noscript.js</code> JavaScript file: </li>
		<li>Create a <code>&lt;div&gt;&lt;/div&gt;</code> within the <code>&lt;body&gt;&lt;/body&gt;</code> tags to contain the hidden content.</li>
		<li>Give the opening tag of the <code>&lt;div&gt;</code> element an <code>id</code> attribute with a value of <code>&quot;noscript&quot;</code>, that is, <code>&lt;div id=&quot;noscript&quot;&gt;</code> — this sets the unobtrusive hook to the external JavaScript function <code>noscript()</code>.
			
		</li>
		<li>Place all elements and content to be hidden while JavaScript is enabled within the <code>&lt;div id=&quot;noscript&quot;&gt;&lt;/div&gt;</code> container.</li>
	</ol>
	<p>
		The following web page markup sample illustrates this:</p>
<pre>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;title&gt;noscript_example&lt;/title&gt;
  &lt;meta content=&quot;text/html; charset=utf-8&quot; http-equiv=&quot;Content-Type&quot;&gt;
  &lt;script src=&quot;scripts/noscript.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;noscript&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    &lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Hyperlink A&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Hyperlink B&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;	
</pre>
	<h3>
		Building the unobtrusive DOM/JavaScript</h3>
	<p>
		In this section I&#39;ll take you through building up the two main sections of the JavaScript.</p>
	<h4>
		Writing the <code>if()</code> portion of the function</h4>
	<ol>
		<li>Between the <code>if</code> parentheses, place the <code>document.removeChild</code> expression — this tests to see if it is supported by the user agent.
			<ul>
				<li>If it <em>is</em> supported the function will continue, and the <code>div</code> content will remain hidden.</li>
				<li>If it is <em>not</em> supported the function progresses to the <code>else if()</code> statement and tests it.</li>
			</ul>
		</li>
		<li>Declare the container <code>div</code> element and identify its <code>id</code> value as the external, unobtrusive &quot;hook&quot; to the markup.</li>
		<li>Instruct the parent <code>div</code> to remove all child content within it.</li>
	</ol>
	<h4>
		Writing the <code>else if()</code> portion of the function</h4>
	<ol>
		<li>Between the <code>else if</code> parentheses, place the <code>document.getElementById</code> expression to test if it is supported by the user agent.
			<ul>
				<li>If it <em>is</em> supported the function will continue, and the <code>div</code> content will remain hidden.</li>
				<li>If it is <em>not</em> supported the function will end, and the <code>div</code> content will be revealed, establishing graceful degradation of the script.</li>
			</ul>
		</li>
		<li>Return the element <code>id</code> where the style will be applied.</li>
		<li>Set its <code>style.display</code> to &quot;none&quot; to control the presentation aspect of the child content.</li>
	</ol>
	<p>
		The following script is contained in the <code>noscript.js</code> file, which is kept external, and linked to the web page as described in the <strong>&quot;Building the Markup&quot;</strong> section.</p>
	
	<pre>/* noscript.js */

 function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== &quot;function&quot;) {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        };
    }
 }
 var noscript = addLoadEvent(noscript);
 addLoadEvent(function () { 
 /* more code to run on page load */ 
 });
 
 function noscript()
 {
   if (document.removeChild)
     {
       var div = document.getElementById(&quot;noscript&quot;);
           div.parentNode.removeChild(div);
     }
   else if (document.getElementById)
     {
       document.getElementById(&quot;noscript&quot;).style.display = &quot;none&quot;;
     }
 }
</pre>
	<h2>
		Summary</h2>
	<p>
		This article demonstrates a solution that replaces the <code>&lt;noscript&gt;</code> element with an external, unobtrusive JavaScript function. The <code>noscript()</code> function solves the problem that partially-capable/antiquated
		JavaScript user agents have with not revealing alternative content if JavaScript is disabled. Employing this function, they will reveal the content as intended. This ensures graceful degradation of the script, and full accessibility to the alternative
		content. Please feel free to comment on anything you think could be improved upon.
	</p>
