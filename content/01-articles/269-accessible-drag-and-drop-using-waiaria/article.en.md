Title: Accessible drag and drop using WAI-ARIA
----
Date: 2009-07-08 09:27:49
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
<p>
This article is intended for people who create rich internet applications with drag and drop functionality and want to make them accessible. No prior knowledge of <abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr> is assumed, although it is recommended you read my <a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">introduction to WAI-ARIA</a> article before starting this article. A basic knowledge of scripting is assumed, and is necessary to understand exactly what is going on in the code example, but this knowledge is not necessary to understand the basic concepts discussed.
</p>
<p>
After reading this article you will have an understanding of how to structure applications with drag and drop functionality so they are accessible.
</p>
<p>
The term drag and drop infers using a mouse to move an object from one location to another. Wikipedia has the following description for drag and drop:
</p>
<blockquote cite="http://en.wikipedia.org/wiki/Drag-and-drop">
<p>
In computer graphical user interfaces, drag-and-drop or DnD is the action of (or support for the action of) clicking on a virtual object and dragging it to a different location or onto another virtual object. In general, it can be used to invoke many kinds of actions, or create various types of associations between two abstract objects.
</p>
</blockquote>

<div class="note">
<p>This article is also available in:</p>

<ul>
<li>French: <a href="http://www.paciellogroup.com/blog/misc/ddfrench/WAI-ARIA_DragAndDrop_French.html"><span lang="fr">Glisser-déposer accessible avec WAI-ARIA</span></a>, translated by Cédric Trévisan</li>
</ul>

<p>Please note this translation is independent of Opera.</p>
</div>

<h2>Accessibility challenges of drag and drop</h2>
<p>
Some people with poor <a href="http://en.wikipedia.org/wiki/Fine_motor_skill">fine motor control</a> have difficulties making small movements and remaining steady. For this group of people, the dexterity requirements to accurately select and move an object using a pointing device can cause them problems, and they benefit from a keyboard equivalent being made available to allow them to use such functionality in a different way.</p>

<p>People with very poor eyesight are unable to perceive the start and end points of a drag and drop operation when it is conveyed in purely visual terms. For these two groups, drag and drop operations can be impossible to perform without accessibility considerations being designed into the process.</p>

<p>
To be accessible, <a href="http://www.w3.org/TR/WCAG20/#keyboard-operation">all functionality should be operable through the keyboard alone</a>. Making drag and drop operations keyboard accessible is a relatively simple process, but there are a few extra challenges for people using assistive technologies, such as screen reader users and screen magnifier users. These challenges include:
</p>

<ul>
	<li>Determining which objects are draggable</li>
	<li>Determining whether an object has been selected for dragging</li>
	<li>Determining the operation that will be performed when the object is dropped</li>
	<li>Identifying targets where the object may be dropped</li>
</ul>

<p>
Fortunately, WAI-ARIA has properties to overcome these problems.
</p>

<h2>Drag and drop using WAI-ARIA</h2>
<p>
WAI-ARIA provides two properties to help make drag and drop accessible to users of assistive technologies:
</p>
<ul>
  <li><a href="http://www.w3.org/WAI/PF/aria/#aria-grabbed"><code>aria-grabbed</code></a></li>
  <li><a href="http://www.w3.org/WAI/PF/aria/#aria-dropeffect"><code>aria-dropeffect</code></a></li>
</ul>

<h3>The <code>aria-grabbed</code> property</h3>
<p>
The <code>aria-grabbed</code> property is used to determine whether an element is in a grabbed state for a drag and drop operation.
</p>

<table>
<caption><code>aria-grabbed</code> values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row"><code>true</code></td>
	<td>Indicates the element has been selected for dragging.</td>
</tr>
<tr>
	<td scope="row"><code>false</code></td>
	<td>Indicates that the element is not currently selected for dragging, but can be made available for dragging by setting the property to <code>true</code>.</td>
</tr>
</tbody>
</table>

<p>
If an element does not have an <code>aria-grabbed</code> property at all, the element cannot be dragged.
</p>
<p>
The <code>aria-grabbed</code> attribute in the following example indicates that the list item has been selected to take part in a drag and drop operation.
</p>
<pre><code>&lt;li aria-grabbed=&quot;true&quot;&gt;</code></pre>

<h3>The <code>aria-dropeffect</code> property</h3>
<p>
The <code>aria-dropeffect</code> property is a state that indicates the type of operation that will occur when an object taking part in a drag and drop operation is released on the target. More than one value can be provided as a space-separated list of tokens. The following table lists the possible values for <code>aria-dropeffect</code>.
</p>
<table>
<caption><code>aria-dropeffect</code> values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row"><code>copy</code></td>
	<td>The source is duplicated and dropped on the target.</td>
</tr>
<tr>
	<td scope="row"><code>move</code></td>
	<td>The source is removed from its current location and dropped on the target.</td>
</tr>
<tr>
	<td scope="row"><code>reference</code></td>
	<td>A reference or shortcut to the source object will be created in the target.</td>
</tr>
<tr>
	<td scope="row"><code>execute</code></td>
	<td>A function supported by the target is executed using the drag source as the input.</td>
</tr>
<tr>
	<td scope="row"><code>popup</code></td>
	<td>A popup menu or dialog is presented so the user can choose one of the supported operations (copy, move, reference and execute) or other drag functionality.</td>
</tr>
<tr>
	<td scope="row"><code>none</code></td>
	<td>The target will not accept the source.</td>
</tr>
</tbody>
</table>

<p>
The <code>aria-dropeffect</code> attribute in the following example indicates that the effect of dropping an object on this unordered list would be to remove the object from its current location, and copy it into this list.
</p>

<pre><code>&lt;ul aria-dropeffect=&quot;move&quot;&gt;</code></pre>


<h2>The HTML 5 drag and drop event model</h2>

<p>
There is a well-defined <a href="http://dev.w3.org/html5/spec/Overview.html#dnd">HTML 5 event model for drag and drop operations</a>. The model is too complex to cover in detail in this article, but I will cover the properties that could be useful for accessibility.
</p>

<h3>The <code>draggable</code> Attribute</h3>
<p>
HTML 5 has a <a href="http://dev.w3.org/html5/spec/Overview.html#dom-draggable"><code>draggable</code> attribute</a> to indicate whether an object can take part in a drag and drop operation. The attribute has three possible values:
</p>

<table>
<caption><code>draggable</code> values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row"><code>true</code></td>
	<td>The element can be selected for dragging.</td>
</tr>
<tr>
	<td scope="row"><code>false</code></td>
	<td>The element cannot be selected for dragging.</td>
</tr>
<tr>
	<td scope="row"><code>auto</code></td>
	<td>The element uses the default behaviour of the user agent.</td>
</tr>
</tbody>
</table>

<p>
The HTML 5 drag and drop event model does not have a property that indicates whether an object has been selected to take part in a drag and drop operation, but it does have a <a href="http://dev.w3.org/html5/spec/Overview.html#event-dragstart"><code>dragstart</code> event</a> to initiate a drag and drop operation.
</p>

<p>
The <code>draggable</code> attribute in the following example indicates that the list item can be selected to take part in a drag and drop operation.
</p>
<pre><code>&lt;li draggable=&quot;true&quot;&gt;</code></pre>

<p>
This information could be augmented with WAI-ARIA&#39;s <code>aria-grabbed</code> property to indicate not only that it is draggable, but also whether or not it has been selected to take part in a drag and drop operation.
</p>
<pre><code>&lt;li draggable=&quot;true&quot;
    aria-grabbed=&quot;true&quot;&gt;</code></pre>

<h3>The <code>dropEffect</code> Attribute</h3>
<p>
The <a href="http://dev.w3.org/html5/spec/Overview.html#datatransfer"><code>DataTransfer</code></a> object manages the attributes
for the drag and drop operation and has a <a href="http://dev.w3.org/html5/spec/Overview.html#dom-datatransfer-dropeffect"><code>dropEffect</code> attribute</a> to determine what happens when the object is released. The attribute accepts four values.
</p>

<table>
<caption><code>dropEffect</code> values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row"><code>none</code></td>
	<td>No operation allowed.</td>
</tr>
<tr>
	<td scope="row"><code>copy</code></td>
	<td>The source will be duplicated and dropped on the target.</td>
</tr>
<tr>
	<td scope="row"><code>link</code></td>
	<td>The source will be linked.</td>
</tr>
<tr>
	<td scope="row"><code>move</code></td>
	<td>The source will be removed from its current location and dropped on the target.</td>
</tr>
</tbody>
</table>

<pre><code>objEvent.dataTransfer.dropEffect=&#39;move&#39;;</code></pre>

<p>
The value of the <code>dropEffect</code> must match one of those specified in the <a href="http://dev.w3.org/html5/spec/Overview.html#dom-datatransfer-effectallowed"><code>effectAllowed</code> attribute</a> of the <code>DataTransfer</code> object, which can be one of <code>none</code>, <code>copy</code>, <code>copyLink</code>, <code>copyMove</code>, <code>link</code>, <code>linkMove</code>, <code>move</code>, <code>all</code>, or <code>uninitialized</code>.
</p>

<h2>A workflow for drag and drop</h2>
<p>
I have created a simple application to demonstrate drag and drop with ARIA and outlined a workflow based on guidance from WAI-ARIA&#39;s <a href="http://www.w3.org/WAI/PF/aria-practices/#dragdrop">best practice for drag and drop operations</a>. The demonstration consists of a list of artists that can be dragged and dropped into lists under different headings, as seen in Figure 1.
</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/269-accessible-drag-and-drop-using-waiaria/screenshot.gif" alt="List of artists with three targets favourites tolerable rejected" /></p>
<p class="comment">Figure 1: List of artists with three targets: favourites, tolerable, rejected.</p>

<p class="note">You can <a href="example.html">check out the drag and drop example running live</a>, or <a href="draganddrop.zip">download the source code</a> and play with it yourself.</p>

<h3>Ensure objects can be reached using the keyboard</h3>
<p>
All objects that are draggable must be reachable using the keyboard alone. Some elements are already reachable using the keyboard alone, such as standard interface elements and anchors. For elements that do not usually receive focus, you can use the <a href="http://www.w3.org/TR/wai-aria/#tabindex"><code>tabindex</code> attribute</a>.
</p>
<p>
There are two useful values: a <code>tabindex</code> attribute value of <code>0</code> puts elements in keyboard tab order identical to the order they appear in the source; a negative value for the <code>tabindex</code> attribute does not put the element into the keyboard tab order, but allows it to receive programmatic focus. Using a negative <code>tabindex</code> attribute value is useful if you do not want to clutter the keyboard tab order and control navigation by defining custom keystrokes, for example using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to navigate through a menu.
</p>
<p>
The simple demonstration used with this article adds the list items for artists into the keyboard tab order by providing a <code>tabindex</code> attribute value of <code>0</code> so they can be navigated to using the <kbd>Tab</kbd> key.
</p>

<pre><code>objItems[iCounter].tabIndex = 0;</code></pre>

<h3>Identify draggable objects</h3>
<p>
Objects that can be dragged should have their <code>aria-grabbed</code> property set to <code>false</code> to indicate they are available for dragging, but are not currently selected for dragging.
</p>

<pre><code>objItems[iCounter].setAttribute(&#39;aria-grabbed&#39;, &#39;false&#39;);</code></pre>

<p>
In the demonstration, the draggable items specify a <abbr title="Cascading Style Sheets">CSS</abbr> <code>cursor</code> property to provide a visual indication that items are draggable using a mouse.
</p>
<pre><code>li.draggable
{
    cursor: move;
}</code></pre>

<p>
It is also important to ensure that interface elements have a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-visible">visible keyboard focus indicator</a>. The demonstration adds a <em>focus</em> <code>class</code> when the source objects receive focus. The CSS for the <em>focus</em> <code>class</code> changes the background colour to provide a visible focus indicator, in the same way items are highlighted when the mouse is hovered over draggable objects.
</p>

<pre><code>ul li.hover, ul li.focused
{
    background: #fc0;
}</code></pre>


<h3>Ensure the user can initiate the drag operation with the keyboard</h3>
<p>
Users must be able to select one or more elements to drag. The <a href="http://dev.aol.com/node/757/#draganddrop">DHTML Style Guide</a> suggests keystrokes to use for drag and drop. They recommended <kbd>Space</kbd> is used for single selection. <kbd>Shift</kbd> + <kbd>Space</kbd> may be used to select contiguous objects, and <kbd>Control</kbd> + <kbd>Space</kbd> may be used to add non-contiguous objects to the set. For each object that is selected, the <code>aria-grabbed</code> property must be set to <code>true</code>.
</p>

<p>
In the demonstration, the <code>aria-grabbed</code> attribute is set in response to a <code>mousedown</code> or <code>keydown</code> event.
</p>

<pre><code>drag.objCurrent.setAttribute(&#39;aria-grabbed&#39;, &#39;true&#39;);</code></pre>


<h3>Identify the drop targets</h3>
<p>
After source objects have been grabbed, valid targets should be identified using the <code>aria-dropeffect</code> property with an appropriate value. In the demonstration, a function is called after an item has been selected to identify the targets with <code>aria-dropeffect</code>; this also uses a <code>class</code> to make the targets visually obvious.
</p>

<pre><code>objList.className = &#39;highlight&#39;;
objList.setAttribute(&#39;aria-dropeffect&#39;, &#39;move&#39;);</code></pre>

<p>
The CSS class simply sets the background colour on the list to make it visually evident it is a target (see Figure 2):
</p>

<pre><code>ul.highlight
{
	background: #c00;
	color: #000;	
}</code></pre>


<p><img src="http://forum-test.oslo.osa/kirby/content/articles/269-accessible-drag-and-drop-using-waiaria/highlighttarget.gif" alt="List targets visually identified with a red background" /></p>
<p class="comment">Figure 2: List targets visually identified with a red background.</p>


<h3>Ensure drop can be executed using the keyboard</h3>
<p>
The user should be able to quickly navigate to the target and perform the drop operation. The recommended keystroke combination for dropping an object onto a target is <kbd>Control</kbd> + <kbd>M</kbd>. If the drop is likely to result in the user having to navigate through lots of interface elements in order to reach the target, it is recommended that a context menu be provided that can be activated with <kbd>Shift</kbd> + <kbd>F10</kbd>, containing a list of possible target areas that the user can select using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys.
</p>
<p>
In the demonstration, only one item can be dragged at a time. As pressing the <code>spacebar</code> when the source has focus is used to indicate that the item is to take part in a drag and drop operation, it seemed unnecessary to introduce extra keystrokes to activate a context menu, so the example automatically provides the context menu when an artist is selected. The first stage is to indicate that each item has a popup menu.
</p>

<pre><code>objItems[iCounter].setAttribute(&#39;aria-haspopup&#39;, &#39;true&#39;);</code></pre>

<p>
When an artist is selected with the keyboard for dragging, a dialog for the user to select a target is automatically presented, as shown in Figure 3.
</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/269-accessible-drag-and-drop-using-waiaria/popup.gif" alt="Popup with two targets to choose from" /></p>
<p class="comment">Figure 3: Popup with two targets to choose from.</p>

<p>
If more than one operation is allowable, such as <code>copy</code> or <code>move</code>, an ARIA-enabled dialog should be provided whereby keyboard users can choose the operation they want to perform, and the targets should use an <code>aria-dropeffect</code> property of <code>popup</code>.
</p>
<pre><code>objList.setAttribute(&#39;aria-dropeffect&#39;, &#39;move&#39;);</code></pre>
<p>
If a dialog is being used to select the target, the possible drop operations can be provided as a sub-menu for each target; otherwise, the target dialog should be displayed on the target.
</p>
<h3>Cancelling the drag operation</h3>
<p>
The user should be able to cancel the drag operation. The recommended key to cancel the operation is the <kbd>Escape</kbd> key. After the operation has been cancelled, all draggable objects should have their <code>aria-grabbed</code> values set to <code>false</code>, and all targets should have their <code>aria-dropeffect</code> properties either set to <code>none</code> or removed. In the demonstration, the <code>aria-grabbed</code> properties are set to <code>false</code> and the <code>aria-dropeffect</code> properties are removed.
</p>
<pre><code>drag.objCurrent.setAttribute(&#39;aria-grabbed&#39;, &#39;false&#39;);
objList.removeAttribute(&#39;aria-dropeffect&#39;);</code></pre>

<p>
 Keyboard focus should be set to the last grabbed source object when the drag is cancelled.
</p>

<pre><code>drag.objCurrent.focus();</code></pre>

<h3>Cleaning up after drag and drop operations</h3>
<p>
As with cancelling the drag operation, all targets with an <code>aria-dropeffect</code> property should either have their value set to <code>none</code>, or the property should be completely removed after the drag and drop operation. All objects with an <code>aria-grabbed</code> property should be set to <code>false</code>.
</p>

<pre><code>drag.objCurrent.setAttribute(&#39;aria-grabbed&#39;, &#39;false&#39;);
objList.removeAttribute(&#39;aria-dropeffect&#39;);</code></pre>

<p>
Objects that are no longer grabbable and that have an <code>aria-grabbed</code> property should either set the value to <code>undefined</code>, or remove the property from the <abbr title="Document Object Model">DOM</abbr>.
</p>

<pre><code>drag.objCurrent.removeAttribute(&#39;aria-grabbed&#39;);</code></pre>

<h2>Current Support</h2>
<p>
My colleague, <a href="http://www.paciellogroup.com/blog/">Steve Faulkner</a>, tested the demonstration and provided feedback about how it works with current user agents. Both Internet Explorer and Firefox expose the aria-grabbed property. Unfortunately, at the time of writing this article, no screen readers support these ARIA properties, although <a href="http://www.nvda-project.org/wiki/FutureGoals#ARIADragandDrop">NVDA plans future support</a>. Even though support is not good at the moment, it is recommended to use WAI-ARIA&#39;s <code>aria-grabbed</code> and <code>aria-dropeffect</code> properties; it is simple to provide, does no harm, and implementing it now means it will be in place for when support is finally available.
</p>

<h3>A quick note about CSS support</h3>

<p>If you look at the CSS for the example, you&#39;ll notice that I have used classes for hover and focus:</p>

<pre><code>ul li.hover, ul li.focused {
  background: #fc0;
}</code></pre>

<p>This is because IE 6 and below don&#39;t support <code>:hover </code> and <code>:focus </code> pseudo-classes on non-link elements.</p>

<h2>Further Reading</h2>
<ul>
	<li><a href="http://www.w3.org/WAI/PF/aria-practices/#dragdrop">Drag and drop from WAI-ARIA best practices</a>.</li>
	<li><a href="http://dev.w3.org/html5/spec/Overview.html#dnd">HTML 5&#39;s drag and drop event model</a>.</li>
	<li><a href="http://test.cita.uiuc.edu/aria/index.php">iCITA&#39;s Drag and Drop Examples</a>.</li>
	<li><a href="http://www.quirksmode.org/js/dragdrop.html">Drag and drop script from Quirksmode</a>.</li>
	<li><a href="http://en.wikipedia.org/wiki/Drag-and-drop">Wikipedia&#39;s definition of drag and drop</a>.</li>
        <li><a href="http://html5doctor.com/native-drag-and-drop/">Remy Sharp&#39;s tutorial on native HTML 5 drag and drop</a></li>
</ul>
