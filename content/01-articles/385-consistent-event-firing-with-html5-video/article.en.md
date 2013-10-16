Title: Consistent event firing with HTML5 video
----
Date: 2010-10-06 16:28:39
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>If you play around with the HTML5 &lt;video&gt; element for any significant length of time, you may well run into a problem with inconsistently firing events: sometimes you don&#39;t seem to get some events, and sometimes it behaves differently depending on whether you&#39;re testing locally or over the network.</p>

<p>This article explores the problem, and puts forward some solutions.</p>

<h2>Why does it happen?</h2>

<p>The cause of this problem is that there is probably a race condition in effect: the browser fires the events before you have had a chance to set up the event listeners for them. Consider the example below:</p>

<pre><code>&lt;video src=&quot;test.webm&quot; id=&quot;video&quot;&gt;&lt;/video&gt;
&lt;script&gt;
var video = document.getElementById(&#39;video&#39;);
video.onloadedmetadata = function(e) {
  alert(&#39;Got loadedmetadata!&#39;);
}
&lt;/script&gt;</code></pre>

<p>If you test locally or over a fast network, the video will probably load very quickly, which means that the browser will fire <code>loadedmetadata</code> before the script that sets the event listener has run. If on the other hand you test over a slow network, where the video takes a bit longer to load, the script might run before the browser fires the event. Whether you get the event simply depends on network conditions, whether the video is cached, and possibly even where the TCP packet boundaries happen to be in the markup. This can also be affected if you use <code>&lt;source&gt;</code> elements instead of a <code>src=&quot;&quot;</code> attribute, and also affects other events - like <code>loadstart</code>, <code>loadeddata</code>, <code>canplay</code>, etc.

<h2>A permanent solution in the browser?</h2>

<p>Surely this is a bug - isn&#39;t there a way to fix this problem in the browsers? Not really - browsers want to load the video as soon as possible, and cannot know when or if you are going to set an event listener for a particular event. So instead, if there is for example no event listener for <code>loadedmetadata</code> when the browser has loaded the metadata of the video, it just throws away the event.</p>

<h2>How about a fix then?</h2>

<p>To avoid this brittleness, you should make sure that you have set the event listeners before the browser has a chance to fire them. You can either use event listeners as attributes on the <code>&lt;video&gt;</code> element, as follows:</p>

<pre><code>&lt;video src=&quot;test.webm&quot; onloadedmetadata=&quot;alert(&#39;Got loadedmetadata!&#39;)&quot;&gt;&lt;/video&gt;</code></pre>

<p>Or you can create the <code>&lt;video&gt;</code> element in the same script that sets the event listeners:</p>

<pre><code>&lt;script&gt;
var video = document.createElement(&#39;video&#39;);
video.onloadedmetadata = function(e) {
  alert(&#39;Got loadedmetadata!&#39;);
}
video.src = &#39;test.webm&#39;;
document.body.appendChild(video);
&lt;/script&gt;</code></pre>

<p>Both of these solutions are robust regardless of network conditions - you will always get the <code>loadedmetadata</code> event since the event listener is registered up front.</p>
<p>If you want to avoid inline JavaScript, but don&#39;t want to write the <code>&lt;video&gt;</code> element with script (you want users without JS to be able to see the video with browser-default controls while users with script get the sexy enhanced video player), you can use a <b>capturing event listener</b> on an ancestor object by setting the last argument of <code>addEventListener</code> to <code>true</code>. This causes the event listener to be invoked in the capturing phase of the event. Events first go through the window object, then the document object, then the root element and down the chain of ancestors of the target element, then the target element itself, and finally, if the event is a bubbling event, it goes back through the target&#39;s ancestors again. The events on media elements are not bubbling events, however, which is why a capturing event listener is needed to listen for a media element event on an ancestor object.</p>

<pre>
<code>
&lt;head&gt;
&lt;script&gt;
window.addEventListener(&#39;loadedmetadata&#39;, function(e) { 
  alert(&#39;Got loadedmetadata!&#39;); }, true);
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;video src=&quot;test.webm&quot;&gt;&lt;/video&gt;
</code>
</pre>

<p>The event listener will fire for any media element in the page; to know which media element fired the event, use <code>e.target</code>.</p>
      

</p>
