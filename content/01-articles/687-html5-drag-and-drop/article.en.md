Title: HTML5 Drag and Drop
----
Date: 2012-04-25 18:02:35
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

<p>HTML5 includes the <strong>Drag and Drop API</strong>, which gives us the ability to natively drag, drop, and transfer data to HTML elements. Up until now, JavaScript libraries have commonly been used to achieve something similar, such as jQuery UI&#x2019;s Draggable and Droppable plugins or Dojo.dnd. What libraries such as jQuery UI or Dojo can&#x2019;t do, however, is interact with other windows, frames, and applications (to and from the file system) or have a rich drag data store.</p>

<p>Marketers like to brand all things HTML5 as shiny and new™ — disappointingly then, the HTML5 Drag and Drop model has roots in <a href="http://www.webreference.com/programming/javascript/dragdropie/index.html">Internet Explorer 5 (and below)</a>. Ian Hickson, the HTML5 specification editor, <a href="http://ln.hixie.ch/?start=1115899732&amp;amp;count=">reverse engineered the Drag and Drop API</a> from Internet Explorer. The best thing it had going for it was the fact that it was already working in IE, and to some extent Safari and Firefox had implemented it. It may not be the most elegantly designed part of HTML5, but the <a href="http://www.w3.org/TR/html-design-principles/#pave-the-cowpaths">paths had already been paved</a>.</p>

<p>Before you get too excited, a word of caution: the current cross-browser landscape isn&#x2019;t pretty. Chrome, Firefox, Safari, and Internet Explorer all implement some form of Drag and Drop, but violate the spec in many different ways.  Certain parts of the API, like the <code>dropzone</code> attribute, are only implemented in Opera. Cross-browser drag and drop is going to be tricky (though not impossible) until all the browsers work through their implementation bugs.</p>

<p>Drag and drop is supported now in Opera 12 and to some extent in current versions of Chrome, Safari, Firefox and will be in IE10. With time, we hope all browsers will move <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-February/034889.html">towards compatible implementations</a>, or that the spec will be changed to <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-February/034886.html">match implementation reality</a>. As always, please remember to <a href="http://ejohn.org/blog/a-web-developers-responsibility/">file bugs</a> with the browser vendors!</p>

<h2>The Drag and Drop API</h2>

<p>Without further ado, let&#x2019;s dive into the main Drag and Drop API features, and see what you can do with them.</p>

<h3>The <code>draggable</code> attribute</h3>

<p>The quickest way to get started with drag and drop is to add <code>draggable=true</code> to an element.</p>

<p>The <code>draggable</code> attribute indicates to the browser that an element is eligible for dragging with three possible values: <code>true</code>, <code>false</code>, and <code>auto</code>. For example, in the following list of items, the first is draggable, the second isn&#x2019;t, and the third may or may not be depending on the user agent&#x2019;s default behavior.</p>

<ul>
    <li draggable="true">You can drag me.</li>
    <li draggable="false"><a href="http://opera.com/">You can&#39;t drag me</a>.</li>
    <li draggable="auto">You might be able to drag me.</li>
</ul>

<p class="note">Keep in mind that text selections are always draggable by default, as are images and links. You can set their <code>draggable</code> attributes to false to prevent this, which may not be very nice for your users.</p>

<p>Here&#x2019;s the markup for the previous example:</p>

<pre><code>&lt;ul&gt;
  &lt;li draggable=true&gt;You can drag me.&lt;/li&gt;
  &lt;li draggable=false&gt;&lt;a href=&quot;http://opera.com/&quot;&gt;You can&#39;t drag me&lt;/a&gt;.&lt;/li&gt;
  &lt;li draggable=auto&gt;You might be able to drag me!&lt;/li&gt;
&lt;/ul&gt;
</code></pre>


<h3>The <code>dropzone</code> attribute</h3>

<p>The <code>dropzone</code> attribute allows you to indicate in markup <em>where</em> draggable elements may be dropped &#x2014; and to some extent what to do with them <em>when</em> they are dropped.</p>

<p>The <code>dropzone</code> attribute takes a list of space-separated items with the following possible values: copy, move, link, &#x201C;string:&#x201D;, and &#x201C;file:&#x201D;.</p>

<p>The <code>copy</code>, <code>move</code>, and <code>link</code> values, which correspond mostly to <code>dataTransfer.dropEffect</code>, indicate the kind of operation that is allowed as the result of a drop.</p>

<p>The <code>string:</code> and <code>file:</code> values allow the author to restrict the type of data that can be dropped by adding a data type&#x2014; it has to be at least one letter long, and can&#x2019;t contain spaces:</p>

<pre><code>&lt;div id=droppy dropzone=&quot;copy string:text/html file:image/png&quot;&gt;&lt;/div&gt;</code></pre>

<p>This example will put data from <code>text/html</code> content that gets dragged in, or from PNG images dragged from the file system or otherwise obtained via the File API, into the drag data store.</p>

<p>Even with a <code>dropzone</code> element declared, in order to accept a drop the drop target needs to listen for the <code>drop</code> event.</p>

<pre><code>var div = document.getElementById(&#39;droppy&#39;);
div.addEventListener(&#39;drop&#39;, doSomethingAmazing);</code></pre>

<h3>The drag data store</h3>

<p>What makes HTML5 Drag and Drop more interesting than a run-of-the-mill JavaScript drag and drop library is the concept of the <em>drag data store</em>. At the core of every drag and drop operation lies a bucket of information that can be passed around. The data store consists of a data store item list, listing each piece of dragged data. These drag items all have a kind (either &#x201C;Text&#x201D; or &#x201C;File&#x201D;), a type (a string, usually given as a MIME type), the actual data (a unicode or binary string), and some other information that can be used by the browser to give UI feedback.</p>

<p>The <code>dataTransfer</code> object of a drag event is how we get access to read from, write to, and clear the data in this data store. Each <code>dataTransfer</code> object is also linked to a <code>dataTransferItemList</code> object (accesible via the <code>items</code> getter), which contains one or more <code>dataTransferItem</code> objects (accessible via the index of the <code>dataTransferItemList</code> object).</p>

<h3>Drag and drop events</h3>

<p>Drag and drop introduces seven new events that HTML elements can listen for, all of which bubble. With the exception of <code>dragleave</code> and <code>dragend</code>, they are all cancellable.</p>

<p>Drag and drop events are basically mouse events with a data store. Note that you can both read and write to the data store during a <code>dragstart</code> event, but it is read-only during <code>drop</code>.</p>

<p>For items that are dragged, the events are:</p>

<ul>
  <li><code>dragstart</code>: dispatched when the user begins dragging a draggable element (or selection).</li>
  <li><code>drag</code>: dispatched when the draggable element is moved during a drag (e.g., with the mouse).</li>
  <li><code>dragend</code>: dispatched when the user ends the drag and drop operation.</li>
</ul>

<p>For any element that may receive a drop, the events are:</p>

<ul>
  <li><code>dragenter</code>: dispatched when a draggable object is first dragged over an element.</li>
  <li><code>dragleave</code>: dispatched when a draggable object is dragged outside of an element.</li>
  <li><code>dragover</code>: dispatched when a draggable object is moved inside an element.</li>
  <li><code>drop</code>: dispatched when a draggable object is dropped.</li>
</ul>

<p>These are fairly intuitive, but let&#39;s examine the event sequence exhibited during a Drag and Drop sequence, to help us understand exactly how it works.</p>

<h3>The Drag and Drop event sequence</h3>

<p>When the user starts dragging something, the <code>dragstart</code> event fires on the source element, which can be an element with <code>draggable=true</code> set on it, or any elements that are draggable by default, such as links, images, text selections, etc. The  <code>dragstart</code> event&#x2019;s handler can now add data to the data store, to be dropped later on. Once the <code>dragstart</code> event has fired, a series of events fire every few hundred milliseconds, or every time the mouse moves. They are:</p>

<ol>
  <li><code>drag</code>: firing at the source element</li>
  <li><code>dragover</code>: firing at the current target element</li>
</ol>


<p>This keeps happening until the mouse passes over a new element. At this point, we see a change: <code>dragenter</code> then fires immediately after the last <code>drag</code> event. If <code>dragenter</code> is cancelled, then this new element becomes the current target, <code>dragleave</code> fires on the previous target to indicate that it is no longer the target, and the <code>dragover</code> event will fire on the new target.

If <code>dragenter</code> is not cancelled, then the <code>&lt;body&gt;</code> becomes the current target. If the <code>dragover</code> event is cancelled as well, then the current target element will be allowed to receive the <code>drop</code> event so the user can now drop the payload being dragged. If not, then dropping will be prevented, as per the spec.</p>

<p class="note">To be compatible with other browsers, we&#x2019;ve changed our implementation to now allow the element to become the current target even if <code>dragenter</code> is not cancelled. IE still (correctly, per spec) requires this.</p>

<p>So to summarise, the usual repeated event sequence is:</p>

<ol>
<li> <code>drag</code></li>
<li> <code>dragenter</code> (if needed)</li>
<li> <code>dragleave</code> (if the current target has been changed)</li>
<li> <code>dragover</code></li>
</ol>


<p>When the user drops what they were dragging, if dropping was allowed in the last repeated sequence, then <code>drop</code> fires at the current target. The <code>drop</code> event is allowed to see all of the data that was dropped &#x2014; the only other event that can do so is the <code>dragstart</code> event that created it. If it is not cancelled, then the browser will be allowed to do whatever it would normally do in that case (for example when dropping a file, if you don&#x2019;t cancel the <code>drop</code> event the browser should try to open the file). After the drag has ended, it fires a <code>dragend</code> event at the source element (even if the drop was not allowed).</p>

<p>This series of events targeted at both the source and target elements allows drags to start in one document and end in another, with both documents being able to monitor the state of the drag. If the drag starts outside the window, or passes from inside it to outside it, then only the events that should be targeted at the relevant document will fire, and the others are assumed to have fired and been allowed or cancelled as needed. If multiple documents are involved, then each receives the relevant events from the sequence.</p>

<h3>The <code>effectAllowed</code> and <code>dropEffect</code> properties</h3>

<p><code>dataTransfer.effectAllowed</code>: this determines which of the three &quot;effects&quot; the user will be allowed to choose from when dropping. Possible values are <code>none</code>, <code>all</code>, <code>copy</code>, <code>link</code>, <code>move</code>, <code>copyLink</code>, <code>copyMove</code> and <code>linkMove</code>. The &quot;compound&quot; values like <code>copyMove</code> mean copy <em>or</em> move.</p>

<p><code>dataTransfer.dropEffect</code>: determines which &quot;effect&quot; will be used when the user drops (or in the case of the <code>drop</code> and <code>dragend</code> events, which one was already used when the user dropped). This will be either the user&#39;s choice (if they pressed a modifier key), or the default (depending on what type of element/selection is being dragged), or none (if the user selected a type of drop effect that was not allowed, or dropped somewhere where dropping was not allowed, in which case the <code>drop</code> event will not fire). Possible values are <code>none</code>, <code>copy</code>, <code>link</code> or <code>move</code>.</p>

<p>The script events can also write to this property, to override the user&#39;s choice. If the final <code>dropEffect</code> (the last one seen in a <code>dragover</code> event) is not one that is compatible with <code>effectAllowed</code>, the drop will not be allowed (<code>drop</code> event will not fire, <code>dragend</code> event sees &quot;none&quot; as the <code>dropEffect</code>).</p>

<p>So what&#39;s the point of all this? The idea is to allow drag and drop scripts to offer functionality like an OS file manager. You know, drag a file from one folder into another. Does it:</p>
<ul>
  <li>create a &quot;copy&quot; of the file?</li>
  <li>&quot;move&quot; the file?</li>
  <li>create a &quot;link&quot;/shortcut to the file?</li>
</ul>

<p>The user can choose by pressing modifier keys (they are different on different OSes, but Ctrl, Shift and Alt all do something on Windows). With drag and drop, the idea is that the script looks at the property, and offers relevant functionality. For example, if I offer a remote file manager UI using drag and drop, I can allow the user to press keys to select what should happen, and my script could see what they chose and act accordingly.</p>

<h2>Some simple examples</h2>

<p>Now we&#39;ve explored all the theory, let&#39;s put it into practice and look at some working examples.</p>


<p class="note">To see the below examples in action, have a look at our <a href="demo.html">Drag and Drop demo</a>.</p>

<h3>A simple drag source</h3>

<p>The simplest example using the normal events just uses a simple source element (you&#x2019;ll need to use a link if you want it to work in IE as well) with the <code>draggable=&#x201C;true&#x201D;</code> attribute.</p>

<pre><code>&lt;div draggable=&quot;true&quot;&gt;Ain&#39;t life a drag.&lt;/div&gt;</code></pre>


<p>The draggable <code>&lt;div&gt;</code> should listen for the <code>dragstart</code> event, and put some data into the data store when it is fired. It can also set <code>dataTransfer.effectAllowed</code>, to state whether the user will be allowed to select any of &#x201C;copy&#x201D; &#x201C;move&#x201D; or &#x201C;link&#x201D; using modifier keys. These will be used by the operating system if that&#x2019;s where the drag ends up, or be passed to the drop handler, if the user chooses a permitted effect that is compatible with the drop target&#x2019;s <code>dataTransfer.dropEffect</code> property.</p>

<pre><code>&lt;script&gt;
  var div = document.getElementsByTagName(&#39;div&#39;)[0];
  
  div.ondragstart = function (event) {
    //browsers may populate the text/html data type for you,
    //but Firefox will not allow a drag without setting some data
    event.dataTransfer.setData(&#39;text/plain&#39;,&#39;Hello world&#39;);
    event.dataTransfer.effectAllowed = &#39;copyLink&#39;; //copy or link
  }
&lt;/script&gt;</code></pre>


<p>Any potential drop target should then listen for and cancel the <code>dragenter</code> and <code>dragover</code> events, and then also listen for the all-important <code>drop</code> event, and in most cases cancel that too. Working with the dropped data is done in the <code>drop</code> event handler.</p>

<pre><code>&lt;div&gt;Drop here.&lt;/div&gt;

&lt;script&gt;
  var droptarget = document.getElementsByTagName(&#39;div&#39;)[1];
  
  droptarget.ondragenter = droptarget.ondragover = function (event) {
    event.preventDefault();
  }
  
  droptarget.ondrop = function (event) {
    event.preventDefault();
    this.innerHTML = event.dataTransfer.dropEffect + &#39; &#39; +
      event.dataTransfer.getData(&#39;text/plain&#39;);
  };
&lt;/script&gt;</code></pre>


<h3>Text selections</h3>

<p>Dragging text selections is easier to handle. The <code>dragstart</code> event fires at the parent element, but it does not need a handler to create data. The selected text is added as <code>text/plain</code> data. Therefore if we just want to deal with text selections, we can simply remove the <code>dragstart</code> event handler from the above example, and just assume there is some text that the user can select and start dragging.</p>

<h3>Microdata</h3>

<p>Any microdata items attached to a dragged element, or intersected by a dragged selection, will be included as a JSON string with the mimetype <code>application/microdata+json</code>. When parsed, this is represented as a series of objects and arrays, such as:</p>

<pre><code>parsedJSON.items[0].properties.foo[0] == &#39;item property data&#39;</code></pre>

<p>Currently only Opera supports this.</p>

<h3>Files</h3>

<p>When files are dropped from the system into a web document (or otherwise obtained via the File API), they appear in the dropped data&#x2019;s <code>dataTransfer.files</code> collection. Each entry in the collection is a File object, as specified in the <a href="http://dev.w3.org/2006/webapi/FileAPI/">File API spec</a>. The contents can then be read using a <code>FileReader</code> object.</p>

<pre><code>&lt;script&gt;
  droptarget.ondrop = function (event) {
    event.preventDefault();
    
    if( event.dataTransfer.files.length ) {
      this.textContent = &#39;File: &#39;+event.dataTransfer.files[0].name;
      
      var reader = new FileReader();
      reader.onload = function () {
        var fileAsAString = reader.result;
        ...
      }
      reader.readAsBinaryString(event.dataTransfer.files[0]);
    }
  }
&lt;/script&gt;</code></pre>

<h2 id="security">Security</h2>

<p>Nothing in the HTML5 specification currently mentions the security implications of drag and drop operations. At Opera, we&#x2019;ve taken a few measures to make things safer for our users.</p>

<h3>Uploads</h3>

<p>In Opera&#x2019;s implementation, if a file from the file system is dragged into a page the drop won&#x2019;t happen unless the user explicitly allows it. Figure 1, taken from <a href="http://fontdragr.com/">fontdragr.com</a> shows an example of this:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/687-html5-drag-and-drop/draganddrop1.png" alt="Screenshot showing the dialog that prompts the user to allow a page to interact with a dropped file from the filesystem" /></p>
<p class="caption">Figure 1: Our dialog box, which prompts the user to allow a page to interact with a dropped file from the filesystem.</p>

<h3>Exposing event origin</h3>

<p>In addition to UI considerations, <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-February/034888.html">we&#x2019;ve proposed (and implemented) the following extensions</a> to <code>event.dataTransfer</code>:</p>

<pre><code>interface DataTransfer {
  ...
  readonly attribute DOMString origin; 
  void allowTargetOrigin(DOMString targetOrigin); 
};</code></pre>

<p><code>dataTransfer.origin</code> is a read-only property that returns the protocol, domain and optional port of the origin where the drag started. If the drag was not started on an origin (such as a dragged file from the desktop), or on a URL that is not a scheme/host/port tuple, the value should be the string value &#x201C;null&#x201D;.</p>

<p><code>dataTransfer.allowTargetOrigin(targetOrigin)</code> defines an origin match for sites which may receive the dropped data. If this method is not called, then all sites and applications may be considered dropzones.</p>

<p>Just like <code>postMessage</code>, <code>dataTransfer.allowTargetOrigin</code> takes one of the three arguments: &#x201C;*&#x201D; (matches all origins), &#x201C;/&#x201D; (matches current origin), or an absolute URL.</p>

<p>The <code>origin</code> must match permitted target origins on the data store, otherwise the <code>dragenter</code>, <code>dragover</code>, <code>dragleave</code> and <code>drop</code> events are never fired.</p>

<p><code>dataTransfer.allowTargetOrigin</code> is intended to be used by a site (we can call it the source site) that is putting something sensitive inside the data store, and wants to ensure it will not be leaked to untrusted sites. <code>dataTransfer.origin</code> is intended to be used by a site that will activate a sensitive operation when data is dropped, and wants to ensure that only trusted sites started the drag. That is, it is intended for use by the target site.</p>

<p>To demonstrate this, we&#39;ve created a <a href="http://miketaylr.com/test/security.html">sample security page</a>. The top-level window includes the following bit of code:</p>

<pre><code>box.addEventListener(&#39;dragstart&#39;, function(event){
  ...
  event.dataTransfer.allowTargetOrigin(&#39;http://people.opera.com&#39;);
});</code></pre>

<p>This ensures that the drop can only happen on a document with http://people.opera.com as its origin.</p>

<p>The embedded <code>iframe</code> includes this:</p>

<pre><code>drop.addEventListener(&#39;drop&#39;, function(event){
  event.preventDefault();
  if (event.dataTransfer.origin == &quot;http://miketaylr.com&quot;) {
    var secrets = event.dataTransfer.getData(&#39;text&#39;);
    ...
  }
});</code></pre>

<p>Before we operate on the data, we check the origin of the drop and make sure we trust it.</p>

<p>Both <code>dataTransfer.allowTargetOrigin</code> and <code>dataTransfer.origin</code> may be used, or a site may just use one. It all depends on the use case, and what needs to be protected &#x2014; the data, the action, or both.</p>

<h2>Summary</h2>

<p>This concludes our tour of HTML5 Drag and Drop. Pat yourself on the back if you&#39;ve made it this far, you deserve it. Please let us know what you think in the comments, and help us improve things by <a href="https://bugs.opera.com/wizard/">submitting bugs</a>.</p>

<h2 id="resources">Resources and Links</h2>

<p><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html">HTML Living Standard specification</a>.</p>

<p><a href="http://www.html5rocks.com/en/tutorials/dnd/basics/">Native HTML5 Drag and Drop</a> by Eric Bidelman.</p>

<p><a href="http://www.useragentman.com/blog/2010/01/10/cross-browser-html5-drag-and-drop/">Cross Browser HTML5 Drag and Drop</a> by Zoltan Hawryluk.</p>

<p><a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-February/034889.html">DND: compatibility notes</a> by Anne van Kesteren</p>

<p><a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-February/034886.html">DND: spec not matching implementations</a> by Anne van Kesteren</p>

<p><a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-February/034888.html">DND: proposal to expose origin</a> by Anne van Kesteren</p>codecompound
