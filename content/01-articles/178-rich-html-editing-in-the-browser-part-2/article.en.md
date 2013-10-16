Title: Rich HTML editing in the browser: part 2
----
Date: 2008-11-14 13:56:27
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

<p>In <a href="http://dev.opera.com/articles/view/rich-html-editing-in-the-browser-part-1/">the first part of this article</a>, I looked in great detail at the theory behind creating rich HTML editing functionality on Web pages using JavaScript constructs such as the <code>designMode</code> and <code>contentEditable</code>. These DOM properties have been standardized in HTML 5 and are supported in most modern browsers to a greater or lesser extent. In this, the second part, I will put this theory into practice, walking you through the construction of a simple online text editor that will work across different browsers.</p>

<p>You can check out the <a href="http://olav.dk/code/dev.opera.com/edit/">finished version online</a>, and <a href="http://olav.dk/code/dev.opera.com/edit/source.zip">download the source code</a> to play with, too. The listings below just show the most important parts of the code that we are focusing on in the explanations, leaving out all the boring parts.</p>

<p>The code is separated into three files:</p>

<ul>
<li><code>editor.js</code>: The main application infrastructure</li>
<li><code>editlib.js</code>: A collection of functions for modifying selections</li>
<li><code>util.js</code>: General utility functions</li>
</ul>

<h2>The frame</h2>

<p>We will use a blank page inside an <code>IFrame</code> as the canvas:</p>

<pre>&lt;iframe id=&quot;editorFrame&quot; src=&quot;blank.html&quot;&gt;&lt;/iframe&gt;</pre>

<p>We could use <code>about:blank</code> in the <code>src</code> to get a completely blank page with no elements in the body at all, but I prefer to create a custom &#8220;blank&#8221; page, since this allows us to start with an empty paragraph:</p>

<pre>&lt;title&gt;&lt;/title&gt;
&lt;body&gt;&lt;p&gt;&lt;/p&gt;&lt;/body&gt;</pre>

<p>This is preferable, because it results in Mozilla starting with an empty <code>p</code> element to contain the content like the other browsers do. (I we didn&#8217;t do this, Mozilla would start off entering content directly inside the <code>body</code> element). Using the <code>contentEditable</code> attribute, we could avoid using a frame at all and just make a <code>div</code> on the same page editable. This however is not supported in Firefox 2, so it is best to stick to iFrame-based editing for cross-browser compatibility.</p>

<h2>Activating the editing mode</h2>

<p>We activate the editing mode when the page is loaded with the following function (contained in <code>editor.js</code>)</p> 

<pre><code>function createEditor() {
  var editFrame = document.getElementById(&quot;editorFrame&quot;);
  editFrame.contentWindow.document.designMode=&quot;on&quot;;
}
  bindEvent(window, &quot;load&quot;, createEditor);</code></pre>

<p>The <code>bindEvent</code> is a utility function (defined in <code>util.js</code>) that attaches a function to an event. Frameworks like JQuery have corresponding functionality, which you might prefer to use.</p>
<p>The next step is to create a toolbar with some common text formatting functionality.</p>

<h2>Toolbar</h2>

<p>We will start with a simple control: a &#8220;bold&#8221; button, which formats the current selection as bold. We also want the button to track state in the document&#8212;when the insertion point or selection is inside bold-formatted text, the button should be highlighted.</p>

<p>This logic is split into two objects: A <code>command</code> object that encapsulates the actual operation on the document and queries the state of the selection and a <code>controller</code> object that handles the <code>click</code> event and updates the look of the HTML button. This separation makes sense, because different commands are likely to share the same controller logic, as we shall see later.</p>

<p>Events flow two directions&#8212;when a control on the toolbar is clicked, the controller tells the command to execute on the document. But we also have events flowing the other way; when the cursor is moved around in the document, we want the controls on the toolbar to update.  We keep track of the controllers; when notified about a change in the selection, they query the command for its state and update the look of the button accordingly.</p>

<h2>Command and controller implementation</h2>

<p>Since the <strong>bold</strong> command is already supported by the command API, the <code>command</code> object is just a thin wrapper upon it:</p>

<pre><code>function Command(command, editDoc) {
  this.execute = function() {
    editDoc.execCommand(command, false, null); 
  };
  this.queryState = function() {
    return editDoc.queryCommandState(command)
  };
}</code></pre>

<p class="note">Why have a wrapper at all? Because we want custom commands to have the same interface as the built-in commands.</p>


<p>The actual button is just a simple <code>span</code>:</p>

<pre>&lt;span id=&quot;boldButton&quot;&gt;Bold&lt;/span&gt;</pre>

<p>The <code>span</code> element is connected to the <code>command</code> object through the controller:</p>

<pre><code>function TogglCommandController(command, elem) {	
  this.updateUI = function() {
    var state = command.queryState();
    elem.className = state?&quot;active&quot;:&quot;&quot;;
  }
  bindEvent(elem, &quot;click&quot;, function(evt) { 
    command.execute(); 	
    updateToolbar();
  });
}</code></pre>

<p class="comment">Left out from this listing is some additional code to ensure that the editing window does not lose focus when we click the button.</p>

<p>We call the above function a <code>ToggleCommandController</code> because it connects two-state commands to a button that utilizes the two states. When the button is clicked, the command is executed. When the <code>updateUI</code> event is called, the <code>active</code> class is added to (or taken away from) the <code>span</code> element to change the look of the button. The CSS properties that define the look of each button state are as follows:</p>

<pre><code>.toolbar span {
  border: outset;
}

.toolbar span.active {
  border: inset;
}</code></pre>

<p>The components are connected like this:</p>

<pre><code>var command = Command(&quot;Bold&quot;, editDoc);
var elem = document.getElementById(îboldButton);	
var controller = new TogglCommandController(command, elem);
updateListeners.push(controller);</code></pre>
           
<p>The <code>updateListeners</code> collection provides controllers for the toolbar. The <code>updateToolbar</code> function iterates through the list and calls the <code>updateUI</code> method on each controller to ensure that all controls are updated. We attach events so that <code>updateToolbar</code> is executed anytime the selection changes in the document:</p>	

<pre><code>bindEvent(editDoc, &quot;keyup&quot;, updateToolbar);
bindEvent(editDoc, &quot;mouseup&quot;, updateToolbar);</code></pre>

<p><code>updateToolbar</code> is also called when a command is executed, as shown in the command code above. Why do we update the whole toolbar when a command is executed, rather than just update the control for the command in question? This is because the state of other commands may also have changed. For example, if <em>justify-right</em> is executed, the state of the <em>justify-left</em> button should also be updated. Rather than keep track of all these dependencies, we just update the whole menu.</p>

<p>Now, we have the basic infrastructure for two-state commands.  The commands <em>Bold</em>, <em>Italic</em>, <em>JustifyLeft</em>, <em>JustifyRight</em>, and <em>JustifyCenter</em> are all implemented using this framework.</p>

<h2>Link</h2>

<p>After implementing some basic text formatting commands, I decided to give site visitors the ability to add links into the document. The link control requires more customized command logic, since the built-in command <code>createLink</code> does not work completely as we would like. It creates the link alright, but it doesn&#8217;t return state information to indicate whether the selection is inside a link or not. We need that feature to provide a consistent feel to the toolbar.</p>

<p>How do we check if the selection is inside a link, then? By creating a utility function&#8212;<code>getContaining</code>, which walks upwards in the DOM tree from the current selection until it finds an element of the type we are asking it to seek (it returns <code>none</code> if no matching element is found).  We use it to check for a containing <code>a</code>. If the selection is contained inside an <code>a</code> element, we are inside a link.</p>

<p>Another extension we need is a means of asking the user for the URL. A fancier editor would use a custom dialog box for this, but, to keep it simple, we just use the built-in <code>window.prompt</code> function. If the selection is inside a link, we want to show the current URL in the dialog, so the user can inspect and change it. Otherwise we just show the default prefix <code>http://</code>.</p>

<p>Here is the code for the <code>Linkcommand</code> function:</p>

<pre><code>function LinkCommand(editDoc) {
	var tagFilter = function(elem){ return elem.tagName==&quot;A&quot;; }; //(1)
	this.execute = function() {
		var a = getContaining(editWindow, tagFilter); //(2)
		var initialUrl = a ? a.href : &quot;http://&quot;; //(3)
		var url = window.prompt(&quot;Enter an URL:&quot;, initialUrl);
		if (url===null) return; //(4)
		if (url===&quot;&quot;) {
			editDoc.execCommand(&quot;unlink&quot;, false, null); //(5)
		} else {
			editDoc.execCommand(&quot;createLink&quot;, false, url); //(6)
		}
	};
	this.queryState = function() {
		return !!getContaining(editWindow, tagFilter);  //(7)
	};		
}</code></pre>

<p>The logic flow of this function is as follows:</p>
<ol>
<li>This function checks if an element is the one we are seeking. The <code>tagName</code> is always returned in uppercase from the DOM, regardless of the casing in the source.</li>
<li><code>getContaining</code> looks for an element with the specified name, containing the current selection. If this is not found, it returns <code>null</code>.</li>
<li>If a containing link is found, we insert the <code>href</code> attribute into the dialog; otherwise, we default to <code>http://</code>.</li>
<li>The prompt returns <code>null</code> if the user clicks <em>Cancel</em> on the dialog, which aborts the command.</li> 
<li>If the user deletes the URL but clicks OK, we assume it means the user wants to remove the link completely. We use the built-in command <code>unlink</code> for this.</li>
<li>If the user provides an URL and clicks OK, we use the built-in command <code>createLink</code> to actually create the link. (If the link already exists, the command updates the <code>href</code> value with the new URL).</li>
<li>The double negation turns the result into a boolean&#8212;<code>true</code> if an element is found and <code>false</code> if nothing is found.</li>
</ol>

<p>We can combine <code>LinkCommand</code> with a standard <code>ToggleCommandController</code>, because the interface to the toolbar control is the same:  the <code>execute</code> and <code>queryState</code> methods.</p> 

<h2>GetContaining</h2>

<p>Now let&#8217;s look at the <code>getContaining</code> function (found in <code>editlib.js</code>). This function tells us if the current selection is inside an element of a particular type.</p>

<p>Things get a little more complicated here, because the IE API does things differently to the other browsers. Therefore, we need to create two separate implementations and employ some capability detection to work out which one to use&#8212;we switch implementations by detecting the <code>getSelection</code> property, like this:</p>

<pre><code>var getContaining = (window.getSelection)?w3_getContaining:ie_getContaining;</code></pre>

<p>The IE implementation is interesting because it illustrates some of the subtleties of the the IE selection API.</p>

<pre><code>function ie_getContaining(editWindow, filter) {
	var selection = editWindow.document.selection;
	if (selection.type==&quot;Control&quot;) { //(1)
		// control selection
		var range = selection.createRange();
		if (range.length==1) { 
			var elem = range.item(0); //(3)
		}
		else { 
			// multiple control selection 
			return null; //(2)
		}
	} else {
		var range = selection.createRange(); //(4)
		var elem = range.parentElement();
	}
	return getAncestor(elem, filter);		
}</code></pre>

<p>This works like so:</p>

<ol>
<li>The <code>type</code> property of the selection object is either &#8220;Control&#8221; or &#8220;Text&#8221;.  In the case of a control selection, more than one control might be selected (e.g., the user might select several non-adjacent images on a page by control-clicking).</li>
<li>We don&#8217;t handle multiple selections of controls; in such cases, we just exit the command, and nothing happens.</li>
<li>If there is one selection, we highlight that.</li>
<li>If it&#8217;s a text selection, we use this to get the container element.</li>
</ol>

<p>The API used by the other browsers is comparatively straightforward:</p>

<pre><code>function w3_getContaining(editWindow, filter) {
	var range = editWindow.getSelection().getRangeAt(0); //(1)
	var container = range.commonAncestorContainer;	//(2)
	return getAncestor(container, filter);	
}</code></pre>

<p>This works like so:</p>

<ol>
<li>While the API allows multiple selections, the UI only allows one, so we just look at the first and only range.</li>
<li>This method gets the element that contain the current selection.</li>
</ol>

<p>The <code>getAncestor</code> function is straightforward&#8212;we just walk up the element hierarchy, until we either find what we are seeking or reach the top, in which case we return <code>null</code>:</p>

<pre><code>/* walks up the hierachy until an element with the tagName if found.
Returns null if no element is found before BODY */
function getAncestor(elem, filter) {
	while (elem.tagName!=&quot;BODY&quot;) {
		if (filter(elem)) return elem;
		elem = elem.parentNode;
	}
	return null;
}</code></pre>

<h2>Multivalue commands</h2>

<p>Editing features like font type and size require a different approach, because the user can choose one of several options. For the UI widget, we use a select box rather than a two-state button like the previous controls. We also need a new variant of Command and Controller to manage multiple values rather than simple on/off state.</p>

<p>Here is the HTML for the font selector:</p>

<pre><code>&lt;select id=&quot;fontSelector&quot;&gt;
  &lt;option value=&quot;&quot;&gt;Default&lt;/option&gt;
  &lt;option value=&quot;Courier&quot;&gt;Courier&lt;/option&gt;
  &lt;option value=&quot;Verdana&quot;&gt;Verdana&lt;/option&gt;
  &lt;option value=&quot;Georgia&quot;&gt;Georgia&lt;/option&gt;
&lt;/select&gt;</code></pre>

<p>The <code>command</code> object is again quite simple because we build upon the built-in <code>FontName</code> command:</p>

<pre><code>function ValueCommand(command, editDoc) {
  this.execute = function(value) {
    editDoc.execCommand(command, false, value); 
  };
  this.queryValue = function() {
    return editDoc.queryCommandValue(command)
  };
}</code></pre>

<p>The difference between a <code>ValueCommand</code> and the previously described two-state commands is that we have a <code>queryValue</code> method, which returns the current value as a string. The controller executes the command when the user selects a value in the dropdown.</p>

<pre><code>function ValueSelectorController(command, elem) {
  this.updateUI = function() {
    var value = command.queryValue();
    elem.value = value;
  }
  bindEvent(elem, &quot;change&quot;, function(evt) { 
    editWindow.focus();
    command.execute(elem.value);	
    updateToolbar();
  });
}</code></pre>

<p>The controller is quite simple, because we map the option values directly to command values.</p>

<p>The font-size dropdown is implemented in the same way&#8212;we just use the built-in <code>FontSize</code> command instead, and use sizes (from 1-7) as the option values.</p>

<h2>A custom command</h2>

<p>Until now, all modifications of the HTML have been done through the built-in commands. But sometimes you might need to change HTML in a way not supported by any built-in command. In that case we have to dive into the DOM and Range APIs.</p>

<p>As an example, we will create a command that inserts some custom HTML at the insertion point. To keep it simple, we just insert a span with the text &#8220;Hello World&#8221;. The approach can be easily extended to insert any HTML you like.</p>

<p>The command looks like this:</p>

<pre><code>function HelloWorldCommand() {
  this.execute = function() {		
    var elem = editWindow.document.createElement(&quot;SPAN&quot;);
    elem.style.backgroundColor = &quot;red&quot;;
    elem.innerHTML = &quot;Hello world!&quot;;
    overwriteWithNode(elem);
  }	
  this.queryState = function() {
    return false;
  }
}</code></pre>

<p>The magic happens in <code>overwriteWithNode</code>, which inserts the element at the current insertion point. (The name of the method indicates that if there is a non-empty selection, the selected content will be overwritten.) Due to the DOM differences between IE and DOM Range standard-compliant browsers, the method is implemented differently. Let&#8217;s look at the DOM Range version first:</p>

<pre><code>function w3_overwriteWithNode(node) {
  var rng = editWindow.getSelection().getRangeAt(0);
  rng.deleteContents();
  if (isTextNode(rng.startContainer)) {
    var refNode = rightPart(rng.startContainer, rng.startOffset)
    refNode.parentNode.insertBefore(node, refNode);
  } else {
    var refNode = rng.startContainer.childNodes[rng.startOffset];
    rng.startContainer.insertBefore(node, refNode);
  }
}</code></pre>

<p><code>range.deleteContents</code> does what it says on the tin: If the selection isn&#8217;t collapsed, it deletes the content of the selection. (If the selection is empty, it doesn&#8217;t do anything).</p>

<p>The DOM <code>Range</code> object has properties that allow us to locate the insertion point in the DOM: <code>startContainer</code> is the node that includes the insertion point, and <code>startOffset</code> is a number that indicates the position of the insertion point in the parent node.</p>

<p>For example, if <code>startContainer</code> is an element and <code>startOffset</code> is 3, the insertion point is positioned between the 3rd and 4th child node of the element. If <code>startContainer</code> is a text node, then <code>startOffset</code> indicates the position in terms of numbers of characters from the start of the containing element. For example, a <code>startOffset</code> of 3 would indicate the point between the 3rd and 4th character.</p>

<p class="note"><code>endContainer</code> and <code>endOffset</code> address the end point of the selection in the same way. If the selection is empty, they have the same value as <code>startContainer</code> and <code>startOffset</code>.</p>

<p>If the insertion point is inside a text node, then we have to split the node in two, so that we can insert our content between them. <code>rightPart</code> is an utility function that does just that&#8212;it splits a text node in two nodes and returns the right part. Then we can use <code>insertBefore</code> to insert the new node at the correct position.</p>

<p>The IE version is somewhat trickier. The IE <code>Range</code> object does not immediately give any access to the exact position in the DOM where the insertion point is. Another problem exists, too&#8212;we can only insert content with the <code>pasteHTML</code> method, which accepts arbitrary HTML in the form of a string but not DOM nodes. Basically, the IE range API is completely isolated from the DOM API!</p>

<p>We can, however, use a trick to connect the two universes: we use <code>pasteHTML</code> to insert a marker element with a unique ID, and then we use this ID to find the same element in the DOM:</p>

<pre><code>function ie_overwriteWithNode(node) {
  var range = editWindow.document.selection.createRange();
  var marker = writeMarkerNode(range);
  marker.appendChild(node);
  marker.removeNode(); // removes node but not children
}

// writes a marker node on a range and returns the node.
function writeMarkerNode(range) {
  var id = editWindow.document.uniqueID;
  var html = &quot;&lt;span id=&#39;&quot; + id + &quot;&#39;&gt;&lt;/span&gt;&quot;;
  range.pasteHTML(html);
  var node = editWindow.document.getElementById(id);
  return node;
}</code></pre>

<p>Note that we remove the marker node after we are finished. This is to stop the HTML becoming littered with junk.</p>

<p>We now have a command that inserts arbitrary HTML at the insertion point. We use a toolbar button and the <code>ToggleCommandController</code> function to connect this to the UI.</p>

<h2>Summary</h2>

<p>In this article, we have walked through a framework for a simple HTML editor. The code can be used as a starting point for creating more advanced or customized editors.</p>

