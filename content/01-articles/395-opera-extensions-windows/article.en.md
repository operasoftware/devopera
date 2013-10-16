Title: Opera extensions: windows
----
Date: 2010-10-21 09:08:52
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

<p class="note" style="color:red;"><strong>IMPORTANT</strong>: Please note that the the Opera extensions Windows functionality is currently incomplete, and undergoing a serious overhaul. At the moment, we would advise against using it - wait until we have completed the update, or use it at your own risk.</p>

<h2>Introduction</h2>

<p>Opera extensions give you the power to add additional functionality right into the Opera desktop browser using web standards such as HTML, JavaScript and CSS. In this article, we&#39;ll look at how to use the extensions APIs to manipulate Opera desktop&#39;s windows system. This is done using the <code>Windows</code> object.</p>

<p class="note">If you need to get grounding in the basics of Opera extensions before carrying on, the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying Hello World</a> article is a good place to start.</p>

<h3>Contents</h3>

<ul>
  <li><a href="#create">Creating Windows</a></li>
  <li><a href="#windows">Events in Windows</a></li>
  <li><a href="#listener">eventListeners in Windows</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
  <li><a href="#api">API reference</a></li>
</ul>

<h2 id="create">Creating Windows</h2>

<p>As always, we use an event listener to listen out, and launch a function when an event is triggered, in this case once the window finishes loading. We then check if the function <code>opera.extension.windows.create</code> exists before calling it:</p>

<pre><code>window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.windows.create )
  {
  opera.extension.windows.create();
  } else {
    // Couldn&#39;t find an opera.extension.windows.create object.
  }
}, false);</code></pre>

<h2 id="windows">Events in Windows</h2>

<p>Events are fired when an interaction occurs on the <code>Windows</code> object. For example, if the Windows is in focus, an <code>onfocus</code> event is fired. In Opera extensions, there are four to play with:</p>

<ul>
  <li><code>onfocus</code></li>
  <li><code>onclose</code></li>
  <li><code>oncreate</code></li>
  <li><code>onblur</code></li>
</ul>

<p>As the events are fired, we use the <code>opera.postError</code> method to handle creating appropriate messages. You can read the <code>opera.postError</code> dumps in the Error Console (Tools &gt; Advanced &gt; Error Console).
</p>
<pre><code>
window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.windows )
  {
     opera.extension.windows.onfocus = function( event ){
		opera.postError(&quot;windows is focused&quot;);
    }
   opera.extension.windows.onclose = function( event ){
		opera.postError(&quot;windows is closed&quot;);
    }
      opera.extension.windows.oncreate = function( event ){
		opera.postError(&quot;windows is create&quot;);
    }
     opera.extension.windows.onblur = function( event ){
		opera.postError(&quot;windows loses focus&quot;);
    }
    
   } else {
    // couldn&#39;t find an opera.extension.windows object.
  }
}, false);</code></pre>

<h2 id="listener">eventListeners in Windows</h2>

<p>Next let&#39;s bring our attention to event listeners. Similar to a standard JavaScript event listener, you give an Opera extension event listener three arguments: the event handler, the function to fire and a boolean value. The allowed event types for an Opera extension event listener are as follows:</p>

<ul>
  <li><code>focus</code></li>
  <li><code>close</code></li>
  <li><code>create</code></li>
  <li><code>update</code></li>
  <li><code>blur</code></li>
</ul>

<p>In the code snippet below, we register a <code>focus</code> event in an <code>addEventListener</code> function. The last argument determines the phase in which the event handler should be fired. It should be a boolean value and we will keep it <code>false</code> for now.</p>

<pre><code>opera.extension.windows.addEventListener( &quot;focus&quot;, function(){// do something}, false)</code></pre>

<p>The difference between <code>addEventListener</code> and <code>onevent</code> lies in the difference between how the two event models work. For example this snippet will fire only the last line, since it has replaced the first line:</p>

<pre><code>opera.extension.windows.onfocus = function(){ // do something };
opera.extension.windows.onfocus = function(){ // do something };</code></pre>

<p>This second snippet will fire both, since they are both registered. </p>

<pre><code>opera.extension.windows.addEventListener( &quot;focus&quot;, function(){ // do something }, false);
opera.extension.windows.addEventListener( &quot;focus&quot;, function(){ // do something }, false);</code></pre>

<h2 id="conclusion">Conclusion</h2>

<p>In this article we discussed how to manipulate Windows in the Opera desktop browser using the <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/"><code>windows</code> object</a>. For more information, consult the <a href="http://www.opera.com/docs/apis/extensions/">Opera extensions API reference</a>.</p> Next, you can consider playing with <a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/">buttons, badges and popups in Opera Extensions</a>.

<h2 id="api">API reference</h2>

<p>
object <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/">opera.extension.windows</a>
</p>                                                          
            
