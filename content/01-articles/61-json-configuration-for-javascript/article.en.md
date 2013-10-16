Title: JSON Configuration for JavaScript
----
Date: 2007-12-06 15:19:07
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

<h2>Introduction</h2>

<p>In the early days (well, about 4 or 5 years ago in web terms) JavaScript was mainly the preserve of the web developer/designer. For all but the most forward thinking, the approach taken when a little client side interactivity was required was to jump on to the web, find a suitable script and copy, paste and hack it to your needs. Then along came Ajax, progressive enhancement and a bunch of libraries and how things have changed. We&#39;re now making much more use of JavaScript in complex - often bespoke - ways, in our sites and applications. This new emphasis means more people with a programmer mentality are starting to do more complicated things with JavaScript. We&#39;re starting to see talk of JavaScript patterns, meta programming and domain specific languages and prototypal inheritance. All of this just might be too much for the interaction designer who just wants to improve the user experience of the application.</p>

<p>In order to work efficiently in a multi-disciplinary environments, and to create good reusable code, you need to include some well thought out abstractions in your applications. If you&#39;re a JavaScript developer this abstraction might take the form of using a library such as <a href="http://dojotoolkit.org/">Dojo</a> or <a href="http://jquery.com/">JQuery</a>. If you&#39;re a web designer working with a development team this might mean using JSON for application configuration details, which is what this article is about.</p>

<p>The core idea is to move out of our central code base things that might change depending on the context of use - such as element <code>id</code>s, URLs or image names - and put them in an external configuration declaration. This way the web designer can tell the program what to do without changing (and maybe breaking) it&#39;s internals. This also allows the JavaScript programmer to refactor the underlying code as required, as long as it maintains the same interface and variable names. Below I&#39;ll quickly run through what JSON is and then go through a short example, to give you a more solid idea of what I&#39;m on about.</p>

<h2>JSON</h2>

<p><a href="http://crockford.com/">Douglas Crockford</a>, all round JavaScript guru and the inventor of <a href="http://json.org/">JSON</a> describes it as follows:</p>

<blockquote>JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.</blockquote>

<p>JSON is particularly handy when dealing with JavaScript as it is JavaScript, or rather a subset of it (JSON is just standard JavaScript, containing name-value pairs and other data structures to represent the information you want to store.)</p>

<p>This has a number of benefits - in particular there is no complex parsing involved, and JSON is also much more human readable than using something like XML. JSON should look pretty familiar to anyone who has played with JavaScript, or other C syntax inspired languages for that matter - here&#39;s an example declaration:</p>

<pre><code>var Object = {&quot;array&quot;: [
    {&quot;class&quot;: &quot;one&quot;},
    {&quot;class&quot;: &quot;two&quot;},
    {&quot;class&quot;: &quot;three&quot;}
  ]
};</code></pre>

<p>When it comes to extracting information from JSON using JavaScript you can use the simple dot notation, like so:</p>

<pre><code>Object.array[0].class  //  &quot;one&quot;</code></pre>

<p>If you have a string of JSON text from an external source (from a call to an API perhaps) you can convert this to a JavaScript object using either the inbuilt <code>eval</code> function or a JSON parser. Using <code>eval</code> is recommended only for situations where the JSON supplied can be completely trusted, which is rarely, unless you control the front and backend of your application. In the case of using JSON for configuration it&#39;s probably best to use the parser option, especially since you might intend to release the application for others outside of your control to use.</p>

<p>In order to use it you&#39;ll need to download the <a href="http://www.JSON.org/js.html">JSON Parser</a> and include it in your page. If you have the JSON string in a <code>JSONstring</code> variable you can use the parser as follows to generate an object on which to operate.</p>

<pre><code>var Object = JSON.parse(JSONstring);</code></pre>

<h2>A Short Example</h2>

<p>To demonstrate the general concepts I&#39;ll build a client-side include system that allows me to inject the contents of a file on the same host into the loading page (using the <code>XMLHTTPRequest</code> object,) replacing any existing content at the same time. To speed things up a bit I&#39;ll make use of <a href="http://developer.yahoo.com/yui/">YUI</a>, the YAHOO! User Interface Library. You could of course write this using your library of choice or pure JavaScript, but YUI is saving me a little time and making my code easy to follow. I&#39;m using the YUI <a href="http://developer.yahoo.com/yui/event/">Event Utility</a> to trigger the loading of the JavaScript on page load and making use of the YUI <a href="http://developer.yahoo.com/yui/connection/">Connection Manager</a> to make the Ajax request.</p>

<p>A few things immediately stand out as possible candidates to move out of the code and into a configuration file - the URL of the file I want to include and the id of the element whose content I am going to replace. Also, generic error messages written during development sometimes end up being used in production code - moving these messages into the configuration file should ensure we get higher quality and more user friendly messages. The name value pairs to be represented in JSON are as follows:</p>

<table>
<tr>
<th>Variable</th>
<th>Value</th>
</tr>
<tr>
<td>URL</td>
<td>include.html</td>
</tr>
<tr>
<td>id</td>
<td>example</td>
</tr>
<tr>
<td>success_message</td>
<td>&quot;The external file has been included in the page&quot;</td>
</tr>
<tr>
<td>failure_message</td>
<td>&quot;There was a problem including the file&quot;</td>
</tr>
</table>

<p>In JSON you can write this like so:</p>

<pre><code>var Config = {
  url: &quot;include.html&quot;,
  id: &quot;example&quot;,
  success_message: &quot;The external file has been included in the page&quot;,
  failure_message: &quot;There was a problem including the file&quot;        
}</code></pre>

<p>Moving the values of the variables stored outside the JavaScript code shouldn&#39;t make the code any more difficult to read as long as I use sensible names for the configuration variables - check out the following:</p>

<pre><code>var Include = function() {

  function success(o) {
    if (document.getElementById(Config.id).innerHTML = o.responseText) {
    YAHOO.log(Config.success_message);
    } else {
    YAHOO.log(Config.failure_message);    
    }
  };

  function failure() {
    document.getElementById(Config.id).innerHTML = Config.failure_message;
    YAHOO.log(Config.failure_message);
  };

  return({
    fetch: function() {
      var request = YAHOO.util.Connect.asyncRequest(&#39;GET&#39;, Config.url, {success:success, failure:failure});        
    }
  });

}();</code></pre>

<p>I&#39;m going to load the include file when the page is ready, in this case when the DOM has loaded completely. I&#39;m also being a good citizen by logging everything to the console, which in this simple example makes it easier to see what is going on.</p>

<pre><code>YAHOO.widget.Logger.enableBrowserConsole()
YAHOO.util.Event.onDOMReady(Include.fetch);</code></pre>

<p>If you want to check out the complete example code and try it out at home you can <a href="JSONConfigurationExamples2.zip">download the working example here</a>.</p>

<p>There is a lot more I could do with this application to make it more useful in the real world. At present I can&#39;t deal with more than one include definition in the current JSON file, and offering the designer other loading options rather than just firing it off when the page loads seems like a logical progression. Some error handling is also desirable - for instance, if the specified <code>id</code> doesn&#39;t exist you&#39;ll get an error. A more complex JSON configuration might look something like this:</p>

<pre><code>var Config = {&quot;includes&quot;: [
    {&quot;url&quot;: &quot;&quot;, &quot;id&quot;: &quot;&quot;, &quot;success_message&quot;: &quot;&quot;, &quot;failure_message&quot;: &quot;&quot;, &quot;trigger_id&quot;: &quot;&quot;, &quot;trigger_event&quot;: &quot;&quot;},
    {&quot;url&quot;: &quot;&quot;, &quot;id&quot;: &quot;&quot;, &quot;success_message&quot;: &quot;&quot;, &quot;failure_message&quot;: &quot;&quot;, &quot;trigger_id&quot;: &quot;&quot;, &quot;trigger_event&quot;: &quot;&quot;},
  ]
};</code></pre>

<h2>Conclusions</h2>

<p>Good candidates for moving into configuration files in this way include:</p>

<ul>
<li>Element <code>id</code>s and <code>class</code>es: Placing these into configuration files immediately makes your JavaScript more portable - decoupling your code from the front end in this manner makes it easier for the front end developer or designer to just plugin your code to their front end and use it.</li>
<li>Boundary settings - Settings such as minimum Flash versions or the default volume level for an audio clip might change in different contexts.</li>
<li>Messaging configurations - Having all your client side messaging details in one place makes it easier to manage, as such details can often change - for example e-mail address, server port etc.</li>
</ul>

<p>Think carefully about what you do place in a configuration declaration - sometimes it can be tempting to move everything out of the main code into configuration files. Resist this unless you have a particularly good reason to do so as needless abstractions can make the resulting code harder to understand and maintain for everyone involved. The best remedy for this is to decide on the required configuration options with the rest of your team, based on where else the feature is to be used in the rest of your work.</p>

