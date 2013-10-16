Title: The W3C file API
----
Date: 2011-04-12 06:04:37
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

<p>In Opera 11.10, partial support for the <a href="http://www.w3.org/TR/file-upload/">W3C File API</a> makes its debut. This spec &quot;provides an API for representing file objects in web applications, as well as programmatically selecting them and accessing their data&quot;. For example, you can upload files into the browser and find out information such as name, size and type without having to go to the server. You can also open the file and manipulate its contents. This can enhance interactivity of browser-based applications to make them more like desktop applications.</p>

<h3>Getting some examples on file</h3>

<p>Let&#39;s build up a couple of simple examples. Assume you have a Content Management System that allows a user to upload images to your corporate website, and you want to ensure that they don&#39;t upload uncompressed images. What we&#39;ll do is use the File API to check that the file they upload isn&#39;t larger than 128K.</p>

<p>The HTML is rudimentary:</p>

<pre><code>&lt;form&gt;
&lt;input type=file id=upload name=files&gt;
&lt;div id=message&gt;&lt;/div&gt;
&lt;input type=submit&gt;
&lt;/form&gt;</code></pre>

<p>The blank message <code>&lt;div&gt;</code> is present so we can insert an error message into it if the file is too large. We&#39;ll also disable the submit button if the file is too large. If the user doesn&#39;t have script enabled, or is using a browser that doesn&#39;t support this part of the File API, there is no error checking, so you&#39;ll need to do it on the server. In fact, this is a good time to repeat the Infallible Mantra of Forms: <em>Never, ever, ever rely on client-side validation or error checking. Always check on the server and sanitise the input. Always.</em></p>

<p>The script adds an event listener to the file upload field (<code>id=input</code>) so the checking function is called if the user selection changes:</p>

<pre><code>document.getElementById(&#39;upload&#39;).addEventListener(&#39;change&#39;, doStuff, false);</code></pre>

<p>The magical part is</p>

<pre><code>var size = evt.target.files[0].size;</code></pre>

<p>The API gives us an array of files, because HTML5 allows the <code>multiple</code> attribute on <code>&lt;input type=file&gt;</code>, but we only want the first element as we&#39;re only allowing one upload for our example.</p>

<p>The <code>size</code> property is in bytes, so we test whether it exceeds 131072 (which is 128K) and, if so, we disable the submit button and offer a helpful error message:</p>

<pre><code>document.getElementById(&#39;message&#39;).innerHTML = size + &#39; is too big, you numpty&#39;;
var submit = document.querySelector(&#39;input[type=submit]&#39;);
submit.disabled=true;</code></pre>

<p>Try out our <a href="size-check.html">check size example</a>.</p>
  
<p>We can check other things too, such as the name of a file and its last modification date (but you can&#39;t rely on that to be present; the spec says &quot;If user agents cannot make this information available, they MUST return the empty string&quot;).</p>

<p>Also of interest is the file type. Let&#39;s tweak our script to disable the submit button if the file type is not a PNG image:</p>

<pre><code>var type = evt.target.files[0].type;
	
if (type != &#39;image/png&#39;) {
  message.innerHTML = type + &#39; is not a PNG, you dweeb&#39;;
  submit.disabled = true;
}
</code></pre>

<p>Here we compare the MIME type with the file&#39;s <code>type</code> property to make sure we have the correct format that our CMS requires. It&#39;s also important to note that, as with the last modification date, &quot;If implementations cannot determine the media type of the Blob, they MUST return the empty string&quot;, so in the case of an empty string you should allow upload to the server for further error checking there.</p>

<pre><code>
if (type == &#39;image/png&#39; || type == &#39;&#39;) {
  message.innerHTML = type + &#39; is a lovely type&#39;;
  submit.disabled = false;
}
</code></pre>

<p>Try out our <a href="type-check.html">check type example</a>.</p>

<p>Remember the mantra never to trust client-side validation? If you rename <code>evil-virus.exe</code> to <code>lovely-flowers.jpg</code>, the File API will believe it&#39;s an image. You don&#39;t want to store <em>that</em> in your file system without checking it on the server first!</p>

<p>It&#39;s also possible to open the file and use the contents using the <a href="http://www.w3.org/TR/file-upload/#dfn-filereader">File Reader API</a>. For example, you could generate thumbnails of uploaded images and display them next to the form so a user would know at a glance which ones they&#39;ve already uploaded from a directory. If you&#39;re really clever, you could grab the <a href="http://www.id3.org/id3v2.3.0">artist and title information from an MP3 file</a> - or even the album cover art!</p>
<!--
<p>Here's another example. The File Reader API allows us to get the contents of a file encoded as a date URL via the <a href="http://www.w3.org/TR/FileAPI/#readAsDataURL"readAsDataURL method</a>. Here's a simple <a href="http://people.opera.com/brucel/demo/file-api/base-64.html">Image to DataURI converter</a> that converts a file into its base 64 representation for embedding in CSS or HTML to save HTTP requests for external files (very useful if optimising for mobile - see <a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a> for more details.</p>
-->
<h2>Summary</h2>

<p>This concludes our tour of the current Opera support for the W3C file API. Happy Filing!</p>
