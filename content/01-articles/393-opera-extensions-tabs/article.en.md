Title: Opera extensions: tabs
----
Date: 2010-10-21 09:09:21
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

<p>Opera extensions are powerful: you can manipulate the Opera desktop browser&#39;s buttons, default CSS and many other features using web standards such as HTML, JavaScript and CSS. In this article we&#39;ll look at manipulating tabs.</p>

<p>If you would like to know how to build an Opera extension from the ground up, the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying hello world to Opera extensions!</a> article is a good start.</p>


<p>Contents</p>

<ul>
  <li><a href="#create">Creating Tabs</a></li>
  <li><a href="#create_url">Creating Tabs with URL</a></li>
  <li><a href="#focus">Focusing Tabs</a></li>
  <li><a href="#close">Closing Tabs</a></li>
  <li><a href="#conclusion">What&#39;s next?</a></li>
  <li><a href="#api">API</a></li>
</ul>

<h2 id="create">Creating Tabs</h2>

<p>Let&#39;s start by looking at how to create a tab. First, we&#39;ll use the <code>addEventListener</code> method to listen to the state of the DOM/document loading. In the code snippet below, we use the event listener to listen to the document. Once the browser window finishes loading, we&#39;ll fire up the function.</p>

<p>We are also checking to make sure the <code>opera.extension.tabs</code> object exists before we call this object&#39;s function to manipulate the tabs.</p>

<pre><code>window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs.create ) //check if function exists
  {
    opera.extension.tabs.create();  // create tabs
  } 
  else {
  	//do nothing 
    }
}, false);</code></pre>

<h2 id="create_url">Creating Tabs with URL</h2>

<p>The <code>opera.extension.tabs.create</code> method takes in an optional <code>TabProperties</code> object argument whereby <code>TabProperties</code> itself constitutes a windows-focused boolean value and/or a URL string. By providing the URL string, we are able to create a tab that opens and then has <a href="http://www.opera.com">www.opera.com</a> loaded into it.</p>

<pre><code>window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs.create )
  {
   opera.extension.tabs.create({url:&quot;http://www.opera.com/&quot;});
  } else {
    //do nothing
  }
}, false);</code></pre>

<h2 id="focus">Focusing Tabs</h2>

<p>Using the same idea of using an event listener and checking if the <code> opera.extension.tabs</code> object exists, we can go on to manipulate tabs in different ways. First of all, let&#39;s look at how to create a tab with a focused URL:</p>

<pre><code>opera.extension.tabs.create({focused:true})</code></pre>

<p>Next, we&#39;ll create a focused tab with a prefilled URL:</p>

<pre><code>opera.extension.tabs.create({url:&quot;http://www.opera.com/&quot;,focused:true})</code></pre>

<h2 id="close">Closing Tabs</h2>

<p>It&#39;s equally simple to close tabs. Let&#39;s try something: we&#39;ll create a tab and then close it after one second. </p>

<pre><code>window.addEventListener( &quot;load&quot;, function(){
  if( opera.extension.tabs )
  {
    var tab = opera.extension.tabs.create({url:&quot;http://www.opera.com/&quot;,focused:true});
    window.setTimeout( function(){
      opera.extension.tabs.close( tab );
    }, 1000);
  } else {
  // Couldn&#39;t find an opera.extension.tabs object, to fetch and then update the tab
  }
}, false);</code></pre>

<h2 id="conclusion">What&#39;s next?</h2>

<p>So there you have it — a few ways to create, manipulate and close tabs. You can refer to the <a href="http://www.opera.com/docs/apis/extensions/">Opera extension API documentation</a> or a complete <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/">reference of the <code>tabs</code> object and its methods</a>. Next you might consider <a href="http://dev.opera.com/articles/view/opera-extensions-windows/">playing with the <code>Windows</code> object in an Opera extension</a>.</p>

<h2 id="api">API reference</h2>

<ul>
	<li>
		<code>object <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/">opera.extension.tabs</a></code>
	</li>
</ul>
