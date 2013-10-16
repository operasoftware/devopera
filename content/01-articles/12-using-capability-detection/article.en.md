Title: Using capability detection
----
Date: 2006-11-27 15:05:55
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

<h1>Towards capability detection</h1>

<p>Browser name <dfn>sniffing</dfn>, using scripts figure out which browser is used and then provide different content to them, is a widespread practice with a long history. Unfortunately these scripts are usually static, while browsers keep evolving.</p>

<p>This makes these scripts extremely fragile whenever an unexpected new browser or a new version happens to load the page. Simply put: <b class="m">Sniffing browser names can seriously damage the future health of your script</b>.</p>

<h2>So why do we sniff?</h2>

<p>Virtually every script out there needs to know a few essential things about the browser it runs in. There are three main goals of browser name sniffing:</p>

<ul><li>Detecting features - support for things like DOM, ActiveX or Java, XMLHttpRequest</li>
<li>Detecting APIs - where the browsers have named the same feature slightly differently, say whether you must use <code>event.target</code> or <code>event.srcElement</code></li>
<li>Working around bugs - when a browser simply doesn&#39;t behave correctly, and you can not pretend you forgot to test the site in that browser</li>
</ul>

<h2>The better approaches</h2>

<p>The goal is after all detecting the capabilities of the browser that shows your page - so rather than looking at browser names and versions we should dive right into capability or feature detection!</p>

<p>JavaScript has several built-in features that let you check how things work - without looking at browser names at all. If we think in terms of capability detection, it turns out to be relatively simple to avoid browser sniffing.</p>

<p>To use capability detection, start by getting an overview of which features are required for your script. Then you can use object detection to check if the features exist. I recommend that you also try calling a few selected functions to verify as in-depth as possible that the feature really exists in the visiting browser.</p>

<h3>Proper feature detection</h3>

<h4>How not to do it</h4>

<p>Do not check for one object and assume others are available. For instance, it is common to check for document.all and assume your visitor uses IE and all IE-proprietary functions can be used.</p>

<h4>How to do it</h4>

<ol>
	<li>Document what you need</li>
	<li>Look for selected API functions from features that your script depends on</li>
	<li>Don&#39;t take shortcuts</li>
	<li>Check if they work by using them on a known element/feature</li>
</ol>

<h4>Example</h4>
<h5>DOM support</h5>
<p>A major site uses the following function to check if the browser has advanced DOM support:</p>

<pre><code>     isDOM = false;
     if (document.getElementById &amp;&amp;   
         document.getElementById(&quot;assessDomNode&quot;)) {
             if (document.getElementById(&quot;assessDomNode&quot;).cloneNode &amp;&amp;
                 document.getElementById(&quot;assessDomNode&quot;).cloneNode(true)) {
                 isDOM = true;
             }
         }</code></pre>

<p>Note how they check whether functions are available with <code class="sfunc">if(document.getElementById)</code>, then proceed to actually calling that function and finally test if the browser supports the fairly advanced W3C DOM compatible cloneNode method.</p>

<p>Some features are not so straightforward to test, but with some creativity very few things are outright impossible. For instance, if you wanted to test if the browser supported try .. catch blocks you could include a separate JavaScript file or SCRIPT tag with the following code:</p>

<pre><code>var trycatchsupported = false;
eval(  &#39;try{trycatchsupported = true;}catch(e){}&#39;  ); </code></pre>

<p>It needs to be in a separate tag or at the end of a script if you want to prevent syntax errors caused by the try .. catch from stopping your main script.</p>

<h5><code>hasFeature()</code></h5>
<p>The DOM standard has added a method for feature detection, <code class="sfunc">document.implementation.hasFeature()</code>. It is called with a feature name and a version number, for example <code class="sfunc">document.implementation.hasFeature(&#39;HTML&#39;, &#39;4.0&#39;)</code>. However, JavaScript&#39;s object detection feature gives you much more detailed, cross-browser and reliable information about what is supported.</p>

<h3>Proper API detection</h3>

<p>Handling API differences is often done by writing wrapper functions for the APIs that differ. One very common scenario is getting a reference to a specific element in a page.</p>

<h4>How not to do it</h4>
<ul>
<li>As far as possible avoid making assumptions about what parts of any API is supported.</li>
<li>For example, do not detect <code>HTMLElement</code> and assume that <code>__defineGetter__</code> is available for your wrapper function</li>
<li>Avoid setting properties that may be read-only in some browsers. For example, if you handle keyboard events and try setting the <code>event.which</code> property without checking if it exists, browsers that <em>do</em> support <code>event.which</code> will throw an error</li>
</ul>

<h4>How to do it</h4>
<ul>
<li>Use object detection to find the right API</li>
<li>Within the wrapper function, start with the most standards-compatible method.</li>
</ul>

<h4>Examples</h4>
<p>
The classic example is using a function to get a reference to an element in the page.</p>

<pre><code>function findElement(id){
	if(document.getElementById){ <span class="comment">// standardised method first</span>
		return document.getElementById(id);
	}else if(document.all){
		return document.all[id];
	}else if(document.layers){
		return document.layers[id];
	}else{
		return null;
	}
}</code></pre>

<p>Remember to use it correctly, by checking that it actually returns something useful:</p>

<pre><code>
var elm=findElement(&#39;navigation&#39;);
if(elm){
    <span class="comment">// do what you need</span>
}else{
    <span class="comment">// very old browser without any DOM support. </span>
}
</code></pre>

<h3>Proper bug handling</h3>

<p>Name-based browser detection may be a part of the toolkit for working around bugs in specific browsers and versions, but you should also consider whether the script simply can <b>test if the bug exists</b>.</p>

<h4>Examples</h4>
<p>Here are two examples of how you can check if an incompatibility exists, rather than checking by browser name and version.</p>

<h5>Array length incompatibility</h5>
<p>An early version of a very popular DHTML menu script contained the following code:</p>

<pre><code>if((navigator.userAgent.indexOf(&quot;Gecko&quot;)!=-1)){top_menu[top_menu.length] = null;}
if((navigator.userAgent.indexOf(&quot;Konqueror&quot;)!=-1)){top_menu[top_menu.length] = null;}
if(Nav4){top_menu[top_menu.length] = null;}</code></pre>

<p>The reason for that block of sniffing is that they created arrays that ended with a comma. According to the ECMAScript standard, the array <code>[ &#39;something&#39; , ]</code> has only one item in it, while in IE it will have two. To work around this browser difference the script adds an extra array element if it detects certain specific browsers.</p>

<p>This could have been done much simpler by checking the length of an array literal to see what the browser does:</p>

<pre><code>if( [&#39;&#39;,].length == 1 ){top_menu[top_menu.length] = null;}</code></pre>

<h5><code>cloneNode()</code> and user data</h5>
<p>A very popular blogging site contains the following code:</p>

<pre><code>    if (Detect.SAFARI() || Detect.OPERA()) {
      <span class="comment">// cloneNode isn&#39;t capturing node attributes or values for some browsers</span>
      this.textarea.value = this.textarea_orig.value;
      this.textarea.name = this.textarea_orig.name;
      this.textarea.id = this.textarea_orig.id;
</code></pre>

<p>The problem is that using cloneNode on a form element does not clone any changes the user has made to the text in the element. The following replacement looks for the bug rather than the browser:</p>

<pre><code>    if ( this.textarea.value != this.textarea_orig.value ) {
      <span class="comment">// cloneNode isn&#39;t capturing node attributes or values for some browsers</span>
      this.textarea.value = this.textarea_orig.value;
      this.textarea.name = this.textarea_orig.name;
      this.textarea.id = this.textarea_orig.id;
</code></pre>


<h2>Towards capability detection - a script to get you started</h2>

<p>To write scripts that will handle future browsers and new versions well you must try to leave behind the mindset of browser detection wherever possible. The good news is that sniffing the name of the browser rarely is necessary. Most of the time, it is much easier to detect whether the functions and features we need are supported.</p>

<p>To get you started, a <a href="capabilitydetection-test.htm">capability detection demonstration script</a>. Some features:</p>

<ul>
<li>Detects various levels of DOM support</li>
<li>Detects VBScript support</li>
<li>Detects text selection/WYSIWYG editing capabilities</li>
<li>Adds custom attributes to the <code>navigator</code> object rather than creating global variables or a specific sniffer object. The <code>navigator</code> object is meant to provide information about the script&#39;s environment, so lets make good use of it.</li>
</ul>
<p>You are encouraged to use and alter the script. Consider the features your JavaScript application needs and remove the parts of the script that you do not use.</p>
