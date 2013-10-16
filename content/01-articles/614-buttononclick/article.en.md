Title: Button.onclick
----
Date: 2011-12-06 07:37:10
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

<h2>Description</h2>

<p>This property represents the function executed when the button is clicked.</p>

<h2>Example:</h2>

<p>The below example opens a new tab when the extension&#39;s button is clicked.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    var tab = opera.extension.tabs.create();
  }
};	

// Create and add the button to the toolbar
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);</code></pre>

//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: //
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: 
