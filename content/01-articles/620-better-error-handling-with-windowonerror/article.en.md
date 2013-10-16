Title: Better error handling with window.onerror
----
Date: 2011-12-06 13:59:18
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

<h2>Introduction</h2>

<p><code>onerror</code> is a <a href="http://dev.opera.com/articles/view/handling-events-with-JavaScript/">DOM event handler</a>. It is started when an error occurs during object loading. While <a href="http://www.w3.org/wiki/DOM/window.onerror"><code>window.onerror</code></a> is an event handler, there is no error event being fired: instead, when there is an uncaught exception or compile-time error, the <code>window.onerror</code> event handler is called with contextual information about the error, making for some more powerful error handling opportunities.</p>

<dl>
<dt>uncaught exceptions</dt>
<dd><code>throw &quot;some messages&quot;</code></dd>
<dd><code>call_something_undefined();</code></dd>
<dd><code>cross_origin_iframe.contentWindow.document;</code>, a security exception</dd>
<dt>compile error</dt>
<dd><code>&lt;script&gt;{&lt;/script&gt;</code> </dd>
<dd><code>&lt;script&gt;for(;)&lt;/script&gt;</code> </dd>
<dd><code>&lt;script&gt;&quot;oops&lt;/script&gt;</code> </dd>
<dd><code>setTimeout(&quot;{&quot;, 10);</code>, it will attempt to compile the first argument as a script</dd>
</dl>

<p>Scripts are first compiled and then they are run. If the compile is successful the first time, it is not compiled again later on. However, a script or a function that compiled successfully might have runtime errors when it is run, and a function can be called multiple times.</p>

<p>In this article we will look at when and how to use <code>window.onerror</code>, along with some examples to get you started.</p>

<h2 id="use">When should we use <code>window.onerror</code>?</h2>

<p>Usually when there is an error in our JavaScript code we open the browser error console to check what errors are being thrown. This can become cumbersome when developing complex web applications using a lot of JavaScript code. How nice would it be to be able to deal with these errors in a programmatic way through JavaScript?</p>

<p><code>window.onerror</code> allows us to do just this, allowing us to  <a href="http://dev.w3.org/html5/spec/webappapis.html#report-the-error">report error messages</a> in a more convenient fashion that suits our context. We will cover a few ways to use <code>window.onerror</code> next.</p>

<h2 id="simple">A very simple message</h2>

<p>To understand what is happening, let&#x2019;s create a JavaScript <code>debug.js</code> with this simple script.</p>

<pre><code>window.onerror = function(message, url, linenumber) {
  alert(&quot;JavaScript error: &quot; + message + &quot; on line &quot; + linenumber + &quot; for &quot; + url);
}</code></pre>

<p>The arguments accepted by our function are:</p>

<ul>
<li><code>message</code>: the error message (<strong>DOMString</strong>)</li>
<li><code>url</code>: the URL of the file containing the error  (<strong>DOMString</strong>)</li>
<li><code>linenumber</code>: the line number where the error occurred (<strong>unsigned long</strong>)</li>
</ul>

<p class="note">If the return value is true, then the error is handled, else it is not handled.</p>

<p>Now let&#39;s create a second script &#x2014; <code>clumsy.js</code>:</p>

<pre><code>document.alert(&quot;Ooops, I&#39;m bad with paranthesis!&quot;</code></pre>

<p>Finally we&#39;ll create an HTML page that calls these two scripts:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;Demo of window.onerror&lt;/title&gt;
    &lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/620-better-error-handling-with-windowonerror/debug.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/620-better-error-handling-with-windowonerror/clumsy.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;This should throw an alert message.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>When accessed by a <a href="#browser">browser that supports <code>window.onerror</code></a>, a pop-up will appear displaying the type of error, the line number where the error occurs and in which file &#x2014; see Figure 1. This is very useful for debugging.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/620-better-error-handling-with-windowonerror/error-message.jpg" alt="Error message in Opera" /></p>
<p class="caption">Figure 1: Our simple error massage shown in Opera.</p>

<p><code>onerror</code> has been attached to <code>window</code> for historical reasons. It could be defined anywhere and would still be working the same way. Script errors might occur in places that have no relation to the document tree at all, such as <code>setTimeout(&quot;oops()&quot;, 10)</code>.</p>

<p class="note"><a href="simple_error.html">Try the simple error example</a>.</p>

<p>You could also have used a very simple <code>onerror</code> on the document <code>&lt;body&gt;</code>:</p>

<pre><code>&lt;body onerror=&quot;alert([event, source, lineno].join(&#39;\n&#39;))&quot;&gt;</code></pre>

<p><code>body onerror</code> sets window.onerror just like <code>body onload</code> sets <code>window.onload</code>. Some event handlers on body are reflected on window. So by using <code>body onerror</code>, <code>window.onerror</code> gets a value assigned. When trying to set both in the same context, <strong>the last one wins</strong> (just like when we assign a value to <code>window.onerror</code> twice).</p>

<p class="note"><strong>semantics</strong>: The <code>window.onerror</code> reports the error at the script source URL, with the problematic line number, in the script&#39;s origin, using the <code>onerror</code> event handler of the script&#39;s global object. If the error is still not handled after this, then the error may be reported to the user.</p>

<h2 id="fancy">Fancy error messages</h2>

<p>If you prefer having a fancier style for the error message than the usual common chrome of the browser.</p>

<pre class="javascript"><code>var fancyerror = function(message, url, linenumber) {
  var errorbox = document.createElement(&quot;div&quot;);
  errorbox.className = &#39;fancyerror&#39;;
  errorbox.innerHTML = &#39;JS: &lt;span class=&quot;errmsg&quot;&#39; + message.replace(&#39;&lt;&#39;, &#39;&amp;lt;&#39;).replace(&#39;&gt;&#39;, &#39;&amp;gt;&#39;) + &#39;&lt;/span&gt;&lt;br&gt;line number: &#39; + linenumber + &#39;&lt;br&gt;located: &#39; + url;
  document.body.appendChild(errorbox);
  return false;
}

window.onerror = function(message, url, linenumber) {
  return fancyerror(message, url, linenumber);
}</code></pre>

<p class="note"><a href="simple_error2.html">Try the fancy error example</a>. You should try playing with the styling on the <code>fancyerror</code> and <code>errmsg</code> classes to see what you can come up with.</p>

<h2 id="noerror">Suppressing errors: a dangerous feature?</h2>

<p>When focusing on other things during development work, you might want to suppress all JavaScript error messages to start off with, until you are ready to do a proper round of debugging. This can be done like so:</p>

<pre><code>function noErrorMa() {
  return true;
}

window.onerror = noErrorMa;</code></pre>

<h2 id="logging">A better error handling with server logging</h2>

<p>A pop-up window is not very useful, specifically if there is a lot of opportunities for errors. It would also be neat to be able to collect all these errors in a single file so we can inspect them later on. <a href="http://dev.w3.org/2006/webapi/XMLHttpRequest/">XMLHttpRequest</a> offers an elegant way to record messages on a server. On the client side, the JavaScript will look something like this:</p>

<pre><code>window.onerror = function(message, url, linenumber) {
  if (window.XMLHttpRequest) {

    var xhr = new XMLHttpRequest();
    var scripturl = &quot;http://yourdomain.example.com/log&quot;;
    var log = linenumber + message + url;
    xhr.open(&quot;POST&quot;, scripturl);
    xhr.setRequestHeader(&quot;Content-Type&quot;, &quot;text/plain;charset=UTF-8&quot;);
    xhr.send(log);
  }
  return true;
}
</code></pre>

<p>Then as usual when dealing with XMLHttpRequest, you just need to create a script which will parse the XMLHttpRequest data and save it locally.</p>

<h2 id="security">Security</h2>

<p>To prevent information leaking from one server to the other, it is important to be careful with scripts that have two different origins. If the script URL is has a different origin to the document then the three arguments returned by <code>window.onerror</code> are always <code>‘Script error.’, ‘’, 0</code>. Read <a href="http://www.schemehostport.com/2011/10/x-script-origin-we-hardly-knew-ye.html">X-Script-Origin, we hardly knew ye</a> for more details.</p>

<h2 id="browser">Browsers supporting window.onerror</h2>

<ul>
<li>Chrome 13+</li>
<li>Firefox 6.0+</li>
<li>Internet Explorer 5.5+</li>
<li>Opera 11.60+</li>
<li>Safari 5.1+</li>
</ul>code, 
