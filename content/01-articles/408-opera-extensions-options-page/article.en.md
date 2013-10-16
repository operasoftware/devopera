Title: Opera extensions: options page
----
Date: 2010-11-22 23:42:09
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
	 
	<p>This article details how to use a new feature of Opera extensions called the options page. This is a page in the extension containing preferences the user can set, defined in an <code>options.html</code> file in the root of the extension directory.</p>
    
    <p>The way it works is quite simple&#x2014;when you install an extension, if Opera finds an <code>options.html</code> file in the extension, it makes a &quot;Preferences&quot; option available for that extension in the Extension Manager (Tools &gt; Extensions &gt; Manage Extensions)&#x2014;see Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/408-opera-extensions-options-page/image1.png" alt="The new Opera extensions options page functionality, reachable through the Extension Manager." /></p>
<p class="comment">Figure 1: The new Opera extensions options page functionality, reachable through the Extension Manager.</p>

<p>Exactly what is put on the options page is entirely up to you as the extension author, but in general you should include form elements that allow the end user to choose different options and then save the changes to <code>window.localStorage</code>, or preferably <code>widget.preferences</code>, so they can then be easily applied to the extension.</p>

<p>In this article we will take you through the basics of creating your own options page, and then present a sample extension containing an options page template that you are free to use in your own extensions.</p> 

<h2>Building a basic options page</h2>

<p>This section will walk you through the basics of creating an options page. Have a look at the code inside our <a href="options.html">sample options.html page</a> as you go through this section.</p>

<ol>
  <li>First of all, choose an extension you&#39;d like to add an options page to. For this example we are using the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello.oex">Hello world extension</a>, which creates a button that, when clicked, brings up a popup window containing the text &quot;Hello World&quot;. If you&#39;ve not already done so, read <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying hello world to Opera extensions!</a> to find out how this extension works.</li>
  <li>Unpack the extension.</li>
  <li>Create a new file inside the root of the extension directory and name it <code>options.html</code>.</li>
  <li>Inside this file add a basic HTML document structure.</li>
  <li>The next thing to add to this file is some form elements to allow you to choose different options&#x2014;or preferences&#x2014;for your extension. Again, these can be anything you like, but for this extension we will do something really simple and provide form elements for changing the background colour of the hello world bubble, and changing the font of the message.</li>
</ol>

<p>Our sample <code>options.html</code> page looks like this:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
 &lt;head&gt;
  &lt;title&gt;Hello world options page&lt;/title&gt;
  
  &lt;style&gt;
  
  &lt;!-- CSS omitted for brevity --&gt;
      
  &lt;/style&gt;
 &lt;/head&gt;
 &lt;body&gt;
 
 &lt;div id=&quot;wrapper&quot;&gt; 
 &lt;h1&gt;Sample options page for hello world example&lt;/h1&gt; 
 &lt;form&gt;
 
 &lt;ul&gt;
   &lt;li&gt;&lt;label for=&quot;colour&quot;&gt;Select background colour:&lt;/label&gt;
   &lt;select name=&quot;colour&quot; id=&quot;colour&quot; /&gt;
     &lt;option value=&quot;white&quot;&gt;Default white&lt;/option&gt;
     &lt;option value=&quot;red&quot;&gt;Red&lt;/option&gt;
     &lt;option value=&quot;yellow&quot;&gt;Yellow&lt;/option&gt;
     &lt;option value=&quot;blue&quot;&gt;Blue&lt;/option&gt;
     &lt;option value=&quot;green&quot;&gt;Green&lt;/option&gt;
   &lt;/select&gt;
   &lt;/li&gt;
   &lt;li&gt;&lt;label for=&quot;font&quot;&gt;Select font:&lt;/label&gt;
   &lt;select name=&quot;font&quot; id=&quot;font&quot; /&gt;
     &lt;option value=&quot;sans&quot;&gt;Default sans&lt;/option&gt;
     &lt;option value=&quot;serif&quot;&gt;Serif&lt;/option&gt;
     &lt;option value=&quot;mono&quot;&gt;Monospace&lt;/option&gt;
   &lt;/select&gt;
   &lt;/li&gt;
 &lt;/ul&gt;
 
 &lt;/form&gt; 
 &lt;/div&gt;
 &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Try the <a href="hello_options1.oex">first version of the updated hello world example</a>. Go to the Extension Manager and choose the &quot;Preferences&quot; option for this extension, accessed by clicking on the cogwheel button. You should then be sent to the options page, as seen in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/408-opera-extensions-options-page/image2.png" alt="Our sample options page featuring two select boxes from which to choose preferences." /></p>
<p class="comment">Figure 2: Our sample options page.</p>

<p>The trouble is ... it won&#39;t do anything right now! Now we need to add some JavaScript to communicate the changes back to the extension and put them in to effect. This is what the next section will deal with.</p>
   
<h2>Wiring it up with JavaScript</h2>

<p>As a next step, we will add the following script into <code>options.html</code> to allows us to store the preferences for the background colour and font for our Hello world extension.</p>

<pre><code>
&lt;script&gt;
var bgColor = document.getElementById( &#39;colour&#39; ),
    font = document.getElementById( &#39;font&#39; );

bgColor.addEventListener( &#39;change&#39;, function() {
	widget.preferences.backgroundColor = this.value;	
}, false );

font.addEventListener( &#39;change&#39;, function() {
	widget.preferences.font = this.value;
}, false );

if ( widget.preferences.backgroundColor &amp;&amp; widget.preferences.font ) {
	bgColor.value = widget.preferences.backgroundColor;
	font.value = widget.preferences.font;
}
&lt;/script&gt;
</code></pre>

<p>Lets go through this step by step:</p>

<ol>
  <li>We grab references to each <code>&lt;select&gt;</code> menu via their IDs and bind listeners for the <code>change</code> event.</li>
  <li>When the user sets a preference, the <code>change</code> event fires and we store the value of that preference in the <code>widget.preferences</code> storage object. We&#39;ll explain that in more detail later on.</li>
  <li>We also check to see if those values have been set previously, to accurately report the state of preferences for our extension.</li>
</ol>

<p>We also need to add some script inside <code>popup.html</code>, the file that causes the popup to appear when you click the hello world button. This script reads the values that are stored in <code>widget.preferences</code> by the script in <code>options.html</code>, and updates the styles inside the popup window.</p>

<pre><code>
&lt;script&gt;
window.addEventListener( &#39;DOMContentLoaded&#39;, function() {
	if (widget.preferences.backgroundColor &amp;&amp; widget.preferences.font ) {
		document.body.style.backgroundColor = widget.preferences.backgroundColor;
		document.querySelector( &#39;h1&#39; ).style.fontFamily = widget.preferences.font;
	}
}, false );
&lt;/script&gt;
</code></pre>

<p>Quite simply, we check <code>widget.preferences</code> to see if the user has set any preferences, then assign those values to the relevant <code>style</code> objects. The changes are instant&#x2014;you don&#39;t even need to submit the form or reload the extension to change the preferences! If no preferences have been set, the default CSS styles take effect.</p>

<p>Try the <a href="hello_options2.oex">final version of the updated hello world example</a> to see this code in action.</p>

<p class="note">The <code>widget.preferences</code> interface is exactly the same as that of the <code>window.localStorage</code> object, except that it doesn&#39;t have the same size limitations as <code>window.localStorage</code>. In addition, <code>widget.preferences</code> default values can be declared in the <code>&lt;preference&gt;</code> elements of your <code>config.xml</code> file, as seen in <a href="http://www.w3.org/TR/widgets/#the-preference-element-and-its-attribute">The preference Element and its Attributes</a> section of the <a href="http://www.w3.org/TR/widgets/">Widget Packaging and Configuration</a> specification. Therefore, when the script in our <code>options.html</code> template sets a preference on the <code>widget.preferences</code> object, a <code>storage</code> event is fired on the active documents of the extension (especially the background process). By listening to the <code>storage</code> events, the background process of your extension can react immediately to any change in <code>widget.preferences</code>.</p>



<h2>A special pane for speed dial extensions</h2>

<p>For speed dial extensions, the options page is also accessible by right-clicking on the speed dial, and selecting &quot;Preferences&quot;. This will, instead of opening a new tab, call out a special preferences pane showing the options page. You can see an example in Figure 3. </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/408-opera-extensions-options-page/speeddial2.png" alt="The callout pane of the options page for speed dial extensions." /></p>
<p class="comment">Figure 3: The seperate pane showing the options page for a speed dial extension.</p>


<h2>Presenting our template</h2>

<p>Now we&#39;ve looked at a simple example, it is time to look at <a href="nonsense.oex">our sample options page template</a>. The template is contained inside a sample extension that doesn&#39;t really do anything, and simply serves to show off the extension options page functionality.</p>

<p>Install the extension, then select the &quot;Preferences&quot; option from the Extension Manager&#x2014;you&#39;ll go to the extension&#39;s options page, which looks like Figure 4.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/408-opera-extensions-options-page/image3.png" alt="The options page for our sample extension, containing a form allowing the user to set preferences for the extension." /></p>
<p class="comment">Figure 4: Our options page template.</p>

<h2>Explaining the template</h2>

<p>When you open the options page for the extension, the script goes through any <code>&lt;select&gt;</code> and <code>&lt;input&gt;</code> elements with a <code>name</code> attribute and sets their value to that of the corresponding item in <code>widget.preferences</code>. You can therefore feel free to remove or add form elements from the markup of the <code>options.html</code> page, and it will continue to work just fine.</p>
	
<p>In addition, the script automatically populates the title of the page and the name and author of the extension. It picks these up from the <code>widget</code> object, <code>window.widget</code>, which gets them from the <code>config.xml</code> file.</p>

<p>By default, the preference values are hardcoded into the markup of the <code>options.html</code> file. When the user changes the value of any of the form elements, the preference values are stored immediately in the <code>widget.preferences</code> object.</p>

<p>When the options page is loaded and the document is ready, the script goes through the different form elements and populates them with the values from <code>widget.preferences</code>, if there is one, or falls back to the default hardcoded values.</p>

<p class="note">To handle preferences with multiple values, e.g. checkbox groups and multiple selects, we join/split the multiple values using a variable called <code>glue</code> in the script of our <code>options.html</code> template: a simple <code>\n</code>. If your extension requires advanced preferences, we recommend writing your own <code>options.html</code> page to better cater for your specific use cases.</p>

<h2>Summary</h2>

<p>This concludes our tour of the Opera extensions options page functionality. Feel free to grab our template and use it in your own projects.</p>
	
This article details how to use a new feature of Opera extensions called the options page. This is a page in the extension containing preferences the user can set, defined in an 
