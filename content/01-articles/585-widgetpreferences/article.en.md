Title: widget.preferences
----
Date: 2011-12-06 06:42:56
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

<h2>Description:</h2>

<p>This readonly attribute implements a <a href="http://www.w3.org/TR/webstorage/#the-storage-interface">HTML5 DOM Storage interface</a> that allows read/write access to the name and values of any preference elements declared in the configuration document. Read more about how to make use of <code>widget.preferences</code> in the <a href="/articles/view/opera-extensions-options-page/">options page for your extension</a>.</p>

<h2>Example:</h2>

<p>HTML section of <code>options.html</code>:</p>

<pre><code>&lt;!doctype html&gt;

...

&lt;fieldset id=&quot;prefs-form&quot;&gt;
&lt;legend&gt;Game Options&lt;/legend&gt;
  &lt;label&gt;Volume:  &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; name=&quot;volume&quot;/&gt; &lt;/label&gt;
  &lt;label&gt;Difficulty:  &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; name=&quot;difficulty&quot;/&gt; &lt;/label&gt;
  &lt;input type=&quot;button&quot; value=&quot;Save&quot; onclick=&quot;savePrefs()&quot;/&gt;
  &lt;input type=&quot;button&quot; value=&quot;load&quot; onclick=&quot;loadPrefs()&quot;/&gt;
&lt;/fieldset&gt;

...</code></pre>

<p>JavaScript section of <code>options.html</code>:</p>

<pre><code>&lt;script&gt;
var form   = document.getElementById(&quot;prefs-form&quot;);
var fields = form.querySelectorAll(&quot;input[type=&#39;range&#39;]&quot;);

// Get the preference values from the widget object
function loadPrefs() {
  for (var i = 0; i &lt; fields.length; i++) {
    var field = fields[i];
    if (typeof widget.preferences[field.name] !== &quot;undefined&quot;) {
      field.value = widget.preferences.getItem(field.name);
    }
  }
}

// Set the preference values for each field
function savePrefs () {
  for (var i = 0; i &lt; fields.length; i++) {
    var field = fields[i];
    widget.preferences.setItem(field.name, field.value);
  }
}
&lt;/script&gt;</code></pre>

