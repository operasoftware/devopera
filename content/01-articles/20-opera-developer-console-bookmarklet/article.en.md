Title: Opera developer console bookmarklet
----
Date: 2006-11-15 16:09:41
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p class="info"><strong>Note:</strong> this bookmarklet is no longer supported, and only here for historical reference. Instead, we recommend you try out our powerful <a href="http://www.opera.com/dragonfly/">Opera Dragonfly – Opera&#39;s built-in web developer tools</a>. There is also an extensive <a href="http://www.opera.com/dragonfly/documentation/">Opera Dragonfly documentation</a> for your reference.</p>

<p>This bookmarklet has been used by Web Application developers at Opera Software for some time. The tools are early previews, and should be considered alpha quality software. They are provided below in the form of buttons that can be dragged to any Opera toolbar. The tools are provided on an as-is basis, </p>

<p>All of the tools should work in Opera 9.0 and later.</p>

<h4 id="install">Installing developer console</h4>
<p>Drag the developer console button directly to any Opera toolbar. Or you can click the button to add the tool to <var>My buttons</var> accessible from the Opera menu under <var>Tools</var> -&gt; <var>Appearance</var> -&gt; <var>Buttons</var>.</p>

<h3 id="console">Opera Developer Console</h3>

<p>Opera now includes a developer console that can be added into the browser with many new features. The developer console includes new tools including DOM inspector, JavaScript inspector, CSS editor and HTTP header inspector.</p>

<p>To install this tool, drag it into any Opera toolbar:</p>

<p class="button"><a href="opera:/button/Go%20to%20page,%22javascript%3A(function()%7Bvar%20ele%3Ddocument.documentElement.appendChild(document.createElementNS(%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%27%2C%27script%27))%3Bele.onload%20%3D%20function()%7Bthis.parentNode.removeChild(this)%3B%7D%3Bele.src%3D%27http%3A%2F%2Fdevfiles.myopera.com%2Ftools%2Fdeveloper%2F8679%2FdevConsole.js%27%3B%7D)()%22,,,%22DOM%20Console%22" title="Developer Console"> Developer Console</a></p>

<p>To learn more, look through the documentation <a href="#docs">below</a>.</p>


<h3 id="domsnapshot">DOM Snapshot</h3>

<p>The DOM Snapshot tool allows you to inspect the source of a page, as parsed by the browser.</p>

<p>To install this tool, drag it into any Opera toolbar:</p>

<p class="button"><a href="opera:/button/Go%20to%20page,%22javascript%3A(function()%7Bvar%20ele%3Ddocument.documentElement.appendChild(document.createElementNS(%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%27%2C%27script%27))%3Bele.onload%20%3D%20function()%7Bthis.parentNode.removeChild(this)%3BliveSource.open()%3B%7D%3Bele.src%3D%27http%3A%2F%2Fdevfiles.myopera.com%2Farticles%2F59%2FliveSource.js%27%3B%7D)()%22,,,%22Select%20author%20mode%22" title="DOM Snapshot"> DOM snapshot</a></p>

<h3 id="docs">Using the Opera Developer Console</h3>

<p>The Opera Developer Console is a web technology-based tool for inspecting and analyzing various aspects of a webpage during development or debugging. The Developer Console exposes various aspects of the DOM, the JavaScript environment and the CSS attached to the document. This document is a quick introduction to the Developer Console, and users are expected to be familiar with the DOM and CSS. Some knowledge of JavaScript is also an advantage, but not a prerequisite.</p>

<h4>Opening the Developer Console</h4>

<p>The console is opened by clicking the <var>Developer Console</var> toolbar button (see <a href="#install">installation instructions</a> above). When you do this, Opera will open a Developer console instance for the currently active document.</p>

<h4>Console basics</h4>

<p><img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/20-opera-developer-console-bookmarklet/headers.png" alt="The console opens in DOM View by default" />When the Developer Console is opened, the different tools are made available in one of five different tabs:</p>

<dl>
  <dt>DOM</dt>
  <dd>The DOM tool lets the user inspect and alter various various aspects of the document.</dd>
  
  <dt>JS</dt>
  <dd>The JavaScript tool lets the user to inspect and search the JavaScript environment initialized on the web page.</dd>
  
  <dt>CSS</dt>
  <dd>The CSS tool lets the user inspect and alter any Cascading Style Sheets attached to the page. Further, the tools allow the altered stylesheets to be exported for later use.</dd>
  
  <dt>HTTP</dt>
  <dd>The HTTP tool allows user to inspect the HTTP headers sent from the server, inspect and edit cookies, and allows logging of XMLHttpRequests sent by the document.</dd>
</dl>

<h4>DOM Inspection</h4>
<img src="http://forum-test.oslo.osa/kirby/content/articles/20-opera-developer-console-bookmarklet/overview_dom.png" alt="DOM inpector" /> 

<h4>The node tree</h4>

<p>When the DOM Inspector tool is opened, a collapsed node tree is displayed by default, showing the #document node only. To expand the node tree, activate the small plus sign next no the node to expand the tree. Expanded nodes that can be collapsed, have a small minus sign next to the node that can be used to collapse the child nodes.</p>

<h4>Selecting nodes in the node tree</h4>

<p>As you expand and collapse the node tree, you can click on any node name you wish to select the corresponding node for inspection.  When this happens, the corresponding node in the document being inspected will intermittently flash to alert you to which node this is.</p>

<h4>Selecting nodes by clicking in the document</h4>

<p>When the Developer console DOM Inspector is active, clicking on a node or element in the document will select the corresponding node in the DOM inspection tool, and will expand the node tree correspondingly and display the current that was just clicked.</p>

<p>When visual assistance in selecting nodes is needed, you can hold the <kbd>Shift</kbd> key while hovering over nodes in the document to highlight the node you are hovering.</p>

<h4>Searching the node tree</h4>

<p>Another powerful means to locate a particular node in the document being inspected is through entering a search expression in the DOM Inspector&#39;s Search field.  The search expressions are standard CSS selectors, and thus any part of the document addressable by a CSS selector is reachable.</p>

<p>When a valid selector has been entered, you can press <kbd>Enter</kbd> to initiate the search. When this is done, the Developer Console will only show those parts of the node tree that matches the search. For instance, <var>body &gt; div</var> would only show the <code>div</code> elements that are direct descendants of the <code>body</code> element.</p>

<h4>Filtering out whitespace nodes</h4>

<p>By default, to prevent too many irrelevant nodes being displayed, the Developer Console hides nodes only containing whitespace from the console. In the case that displaying the whitespace nodes in the Inspector is significant, the <var>Show whitespace</var> checkbox can be checked.</p>

<h4>Removing nodes</h4>
  
<p>The DOM Inspector provides a simple means to editing the document by removing entire trees of nodes. When you click the &quot;Remove&quot; button in the upper part of the DOM console, the current node, and any child nodes are removed from the document.</p>

<h4>Creating document snapshots</h4>

<p>If a snapshot of the edited node tree is needed, the Snapshot button creates a snapshot that is opened in a syntax-highlighted source view. This provides a view of the DOM as it is parsed by the web browser.</p>

<h3>Inspecting nodes</h3>

<p>When a node in the node tree is opened, and the node selected is an element node, the bottom half of the Inspector displays five additional tabs:</p>

<dl>
  <dt>Attributes</dt>
  <dd>Attributes that have been set on the corresponding element.</dd>
  <dt>Properties</dt>
  <dd>JavaScript properties that are enumerated on the current node.</dd>
  <dt>CSS</dt>
  <dd>The CSS rules that apply to the current node.</dd>
  <dt>Styles</dt>
  <dd>The styles that apply to the current node.</dd>
  <dt>Metrics</dt>
  <dd>Provides a graphical overview of the nodes dimension on the screen, including margins, padding, and borders. In addition, the view provides a list of other dimensional properties that applies to the element.</dd>
</dl>

<h3 id="jsinspector">JavaScript inspection</h3>
<img src="http://forum-test.oslo.osa/kirby/content/articles/20-opera-developer-console-bookmarklet/overview_js.png" alt="JavaScript inspector" /> 

<h4>Inspecting only custom objects and attributes</h4>

<p>By default, the Javascript Inspector shows all attributes, objects and functions attached to the document, including the ones set by the browser.  To hide the browser-set properties, you can check the &quot;only custom&quot; check box.</p>

<h4>Expanding objects</h4>

<p>Functions and objects that has readable content have a &#39;+&#39; sign next to them that can be activated to inspect the contents of the object, attribute or method. Should there be nested objects, you get a nested list of objects and properties.</p>

<p>To collapse the objects in the view again, activate the &#39;-&#39; next to the object in question.</p>

<h4>Searching</h4>

<p>If you are looking for a specific object, the search field will allow you to enter a searchagainst all objects, functions and properties, and only display those, focus the search field and enter an expression.</p>

<h4>Inspecting single nodes</h4>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/20-opera-developer-console-bookmarklet/dom_details_properties.png" alt="Single nodes" /></p>

<p>In the DOM Inspection tool the tab named &#39;Properties&#39; works and acts like the JavaScript inspector, but it instead shows the properties and methods for that single node.</p>

<h3 id="cssinspector">CSS inspection</h3>
<img src="http://forum-test.oslo.osa/kirby/content/articles/20-opera-developer-console-bookmarklet/overview_css.png" alt="CSS inspector" /> 

<p>When the CSS tab is opened, the Developer Console displays a list of all the stylesheets on the page, with some information and options for each stylesheet. For each of these stylesheets, there are options to enable or disable, edit and export the stylesheets.</p>

<p>The information available for every stylesheets is:</p>

<dl>
  <dt>media</dt>
  <dd>Which media type(s) the stylesheet applies to.</dd>
  <dt>ownerNode</dt>
  <dd>Where in the current document the stylesheet is inserted. Stylesheets can either be imported by other stylesheets, owned by a link element, or by a style element.</dd>
  <dt>url</dt>
  <dd>The URL, if any, of the stylesheet. When the stylesheet exists as a separate document, there will be a clickable link to the stylesheet.</dd>
  <dt>type</dt>
  <dd>The content-type of the stylesheet. Normally, this will read <var>text/css</var>.</dd>
  <dt>disabled</dt>
  <dd>If the stylesheet is currently disabled, there will be an extra field in the stylesheet information panel, saying <var>disabled</var>.</dd>
</dl>

<h4>Enabling and disabling stylesheets</h4>

<p>On every stylesheet, there is a button that says either <var>Enable</var> or <var>Disable</var>, depending on whether the stylesheet in question is disabled, or enabled, respectively. By clicking this button, the stylesheet is enabled or disabled.</p>

<p>Note that stylesheets that do not apply to the current media type cannot be enabled, so enabling a handheld stylesheet for a page currently in screen mode is not possible.</p>

<h4>Showing rules and modifying style sheets</h4>

<p>By selecting the <var>Show rules</var> button, the rules of the selected stylesheet appear, and can be edited by activating one of the selectors.</p> 

<h4>Exporting modified stylesheets</h4>

<p>If you have modified a stylesheet, and need to export the new rules for the stylesheet, activating the <var>Export</var> button. Note that the stylesheet exported will not always correspond 100% with what was in the original stylesheet:</p>

<ul>
  <li>Font names are substituted for their computed value. For instance, on Linux systems, <code class="css"><span class="att">font-family</span>: <span class="value">&quot;Bitstream Vera Sans&quot;</span></code> might get substituted with <code class="css"><span class="att">font-family</span>: <span class="value">&quot;Bitstream Vera Sans [bitstream]&quot;</span></code>.</li>
  <li>Relative URIs are resolved to their absolute location, and will be enclosed in quotes, so <code class="css"><span class="att">background-image</span>: <span class="value">url(/example.png);</span></code> on a page/stylesheet on http://www.example.com/ will be exported as <code class="css"><span class="att">background-image</span>: <span class="value">url(&quot;http://www.example.com/example.png&quot;)</span>;</code>.</li>
  <li>Shorthand properties are expanded to their fully expanded equivalent rules. This means that if the following rule is in a stylesheet:
  <pre><code class="css"><span class="sel">body</span> {
  <span class="att">padding</span>: <span class="value">1em</span>;
}</code></pre>
  it will be exported as:
  <pre><code class="css"><span class="sel">body</span> {
  <span class="att">padding-top</span>: <span class="value">1em</span>;
  <span class="att">padding-right</span>: <span class="value">1em</span>;
  <span class="att">padding-bottom</span>: <span class="value">1em</span>;
  <span class="att">padding-left</span>: <span class="value">1em</span>;
}</code></pre></li>
  <li>Named colors in properties that accept colors are converted to their equivalent hexadecimal values, so for instance red is converted to #ff0000.</li>
</ul>

<h4>Saving exported stylesheets</h4>

<p>Saving the exported stylesheet is done in the same way regular documents are saved in the browser, by going to the <var>File</var> -&gt; <var>Save As</var> menu option (<kbd>Ctrl-S</kbd>) when the exported stylesheet is visible.</p>
h4
