Title: Functional key handling in Opera TV Store applications
----
Date: 2012-02-10 12:29:39
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

<div class="note">
<p>Update history:</p>
<ul>
<li>8 June 2012: added requirements for <kbd>Back</kbd>/<kbd>Return</kbd> button handling</li>
<li>24 August 2012: changes to key handling in line with <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a>, additional information on repeating key events.</li>
<li>4 September 2012: alternative and refined approach for handling repeating key events, clarification of extra &lt;ELEMENT onkeydown=&quot;…&quot;&gt; complications to get event object, inclusion of HTML5 history API trick to circumvent automatic app closure.</li>
</ul>
</div>

<ul class="toc">
<li><a href="#spatial-functional">Spatial navigation and functional buttons</a></li>
<li><a href="#functional-buttons">List of available functional buttons</a></li>
<li><a href="#handling-keydown">Handling <code>keydown</code> events</a>
<li><a href="#repeat">Repeating key events</a></li>
<li><a href="#return">Requirements for the <kbd>Back</kbd>/<kbd>Return</kbd> button</a></li>
<li><a href="#prevent-default">Preventing default spatial navigation</a></li>
<li><a href="#determining-support">Determining support for a specific functional key</a></li>
</li></ul>

<h2 id="spatial-functional">Spatial navigation and functional buttons</h2>

<p>The Opera TV Store is designed to use the standard four-way directional keys on a remote control for spatial navigation. Authors should test that their applications work correctly using the default spatial navigation built into the Opera TV Store browser.</p>
<p>Opera&#39;s spatial navigation works in a similar way to traditional <kbd>TAB</kbd> based keyboard access in most browsers, allowing users to move between focusable elements (links, form controls, image map areas). In addition, spatial navigation also employs heuristics that make arbitrary elements with attached <code>click</code> and <code>mouseover</code> JavaScript events focusable as well. Lastly, as the name implies, spatial navigation in Opera allows the user to move between those elements based on their spatial relationship on screen, rather than in source order (as with <kbd>TAB</kbd> navigation).</p>
<p>In most cases, authors can simply rely on Opera&#39;s spatial navigation to handle their application&#39;s controls. There are simple mechanisms to further <a href="http://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/">tweak spatial navigation for TV browsing</a> using CSS3.</p>
<p>For maximum control, authors may also choose to handle the navigation of their application themselves by intercepting key presses from the remote control. This makes it possible to not only react to the basic directional buttons (<kbd>UP</kbd>, <kbd>RIGHT</kbd>, <kbd>DOWN</kbd>, <kbd>LEFT</kbd>), but to further bind functionality to the various shortcut and functional keys (such as <kbd>BACK</kbd>, <kbd>INFO</kbd>, <kbd>OPTIONS</kbd> or the <kbd>RED</kbd> button). As the exact key codes for remote control keys vary between different devices, the Opera TV Store browser provides built-in <strong>global constants</strong> mapped to the hardware-specific codes used by the current device.</p>

<h2 id="functional-buttons">List of available functional buttons</h2>
<table>
<thead>
<tr>
<th>Hardware key</th>
<th>Key code constant</th>
<th>Comment</th>
</tr>
<tbody>
<tr>
<td>↑</td>
<td>VK_UP</td>
<td>Always available*</td>
</tr>
<tr>
<td>→</td>
<td>VK_RIGHT</td>
<td>Always available*</td>
</tr>
<tr>
<td>↓</td>
<td>VK_DOWN</td>
<td>Always available*</td>
</tr>
<tr>
<td>←</td>
<td>VK_LEFT</td>
<td>Always available*</td>
</tr>
<tr>
<td>Confirm/Select/OK</td>
<td>VK_ENTER</td>
<td>Always available*</td>
</tr>
<tr>
<td>Exit</td>
<td>N/A</td>
<td>Optional but recommended (handled by native firmware)</td>
</tr>
<tr>
<td>Back/Return</td>
<td>VK_BACK_SPACE</td>
<td>Always available</td>
</tr>
<tr>
<td>BLUE</td>
<td>VK_BLUE</td>
<td>Optional but recommended</td>
</tr>
<tr>
<td>RED</td>
<td>VK_RED</td>
<td>Optional but recommended</td>
</tr>
<tr>
<td>GREEN</td>
<td>VK_GREEN</td>
<td>Optional but recommended</td>
</tr>
<tr>
<td>YELLOW</td>
<td>VK_YELLOW</td>
<td>Optional but recommended</td>
</tr>
<tr>
<td>Menu</td>
<td>VK_MENU</td>
<td>Optional</td>
</tr>
<tr>
<td>0</td>
<td>VK_0</td>
<td>Optional</td>
</tr>
<tr>
<td>1</td>
<td>VK_1</td>
<td>Optional</td>
</tr>
<tr>
<td>2</td>
<td>VK_2</td>
<td>Optional</td>
</tr>
<tr>
<td>3</td>
<td>VK_3</td>
<td>Optional</td>
</tr>
<tr>
<td>4</td>
<td>VK_4</td>
<td>Optional</td>
</tr>
<tr>
<td>5</td>
<td>VK_5</td>
<td>Optional</td>
</tr>
<tr>
<td>6</td>
<td>VK_6</td>
<td>Optional</td>
</tr>
<tr>
<td>7</td>
<td>VK_7</td>
<td>Optional</td>
</tr>
<tr>
<td>8</td>
<td>VK_8</td>
<td>Optional</td>
</tr>
<tr>
<td>9</td>
<td>VK_9</td>
<td>Optional</td>
</tr>
<tr>
<td>PLAY</td>
<td>VK_PLAY</td>
<td>Optional</td>
</tr>
<tr>
<td>PAUSE</td>
<td>VK_PAUSE</td>
<td>Optional</td>
</tr>
<tr>
<td>STOP</td>
<td>VK_STOP</td>
<td>Optional</td>
</tr>
<tr>
<td>NEXT</td>
<td>VK_TRACK_NEXT</td>
<td>Optional</td>
</tr>
<tr>
<td>PREV</td>
<td>VK_TRACK_PREV</td>
<td>Optional</td>
</tr>
<tr>
<td>FF (Fast-Forward)</td>
<td>VK_FAST_FWD</td>
<td>Optional</td>
</tr>
<tr>
<td>REWIND</td>
<td>VK_REWIND</td>
<td>Optional</td>
</tr>
<tr>
<td>SUBTITLE</td>
<td>VK_SUBTITLE</td>
<td>Optional</td>
</tr>
<tr>
<td>INFORMATION</td>
<td>VK_INFO</td>
<td>Optional</td>
</tr>
</tbody>
</thead></table>
<p><strong>Note:</strong> <kbd>CONFIRM</kbd>, <kbd>EXIT</kbd> and directional buttons are mandatory for device manufacturers to implement, so they are always available for the end user via the remote control of any device that the Opera TV Store is integrated with. The <kbd>EXIT</kbd> key is handled by the Opera TV Store browser itself, to ensure that each application can be closed. For this reason <kbd>VK_EXIT</kbd> will not be sent to the application.</p>

<h2 id="handling-keydown">Handling <code>keydown</code> events</h2>

<div class="note">
<p>Previously, authors were encouraged to handle <code>keypress</code> events. However, starting with the Opera Device SDK 3.4, the Opera TV Store is aligned with the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model.</p>
<p>The most notable change here is that the <code>keypress</code> event is now only fired for <em>keys which produce a character value</em>. From the list of functional buttons above, this means that only the number keys <kbd>0</kbd>-<kbd>9</kbd> and the <kbd>ENTER</kbd> (Confirm/Select/Ok) buttons can be detected via <code>keypress</code>.</p>
<p>Additionally, this specification deprecates the <code>keypress</code> event, meaning that future versions of the specification – and, as a result, future versions of conformant browsers – should not fire this event anymore. For compatibility with existing content, it is unlikely that browsers will drop legacy support for this event, but we would still recommend using <code>keydown</code> instead of <code>keypress</code> going forward.</p>
</div>

<p>The simplest, but least elegant, way to add key events is to directly add an <code>onkeydown</code> attribute to an element. When that element has focus, the key event code will be fired. Note, though, that this old-school method requires extra work to determine the event (and the related properties, like <code>keyCode</code>) that caused the handler to be called, and doesn&#39;t necessarily work cross-platform.</p>

<pre><code>&lt;ELEMENT onkeydown=&quot;handler()&quot;&gt;

function handler() {
    // extra hoop to jump through to get event
    if (!event) { event=window.event; }
    …
}</code></pre>

<p>A much cleaner and flexible way would be to do this directly via JavaScript, either by attaching the handler function directly to the <code>onkeydown</code> property of the element or using <code>addEventListener</code>. This automatically passes on the event object associated with the call, avoiding any ugly <code>window.event</code> hacks:</p>

<pre><code>object.onkeydown = handler;
object.addEventListener(&quot;keydown&quot;, handler, useCapture);</code></pre>

<p>In the <code>handler</code> function, you can then compare the <code>event.keyCode</code> to the set of global constants for functional keys provided in the Opera TV Store.</p>

<pre><code>function handler(event){
    …
    if (VK_RED == event.keyCode){
        /* VK_RED was pressed … do something useful */
    }
    …
}</code></pre>

<p class="note">Although the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model normatively uses <code>event.key</code> and <code>event.char</code>, it still retains information on <a href="http://www.w3.org/TR/DOM-Level-3-Events/#legacy-key-attributes">legacy key attributes</a> such as <code>event.keyCode</code>. For compatibility with existing content, it is likely that <code>event.keyCode</code> will continue to be available for the time being. As the new event properties are not backwards-compatible, we recommend still using the current <code>event.keyCode</code> property.</p>

<p>Depending on the application, it is advisable not to include a large number of separate event handlers to various elements in the page, but to instead take advantage of event capture / bubbling and use an event delegation mechanism, hooking the <code>keydown</code> handler on a top-level element (for instance, the <code>body</code>) or object (<code>window</code> or similar):</p>

<pre><code>window.addEventListener(&quot;keydown&quot;, handler, useCapture);</code></pre>

<p>In your <code>handler</code> function, you may need to determine the element where the event originated. A reference to this can be easily obtained from the <code>event.target</code>:</p>

<pre><code>function handler(event){
    …
    var target = event.target;
    …	
}</code></pre>

<h2 id="repeat">Repeating key events</h2>

<p>What happens when a user keeps a functional button on their remote control pressed is dependant on their specific device. Some devices will only send a single <code>keydown</code> event until the button is released. Others may send a series of <code>keydown</code> (and <code>keypress</code>, if it&#39;s a key that produces a <em>character value</em>) and <code>keyup</code> events (as if the button was manually being pressed and released multiple times). Lastly, platforms that do support proper key repeats will send a continuous stream of <code>keydown</code> (and <code>keypress</code>, if it&#39;s a key that produces a <em>character value</em>) events, and only fire <code>keyup</code> once the user releases the button.</p>

<p>In general, since it cannot be guaranteed that a device has full key repeat support, we&#39;d recommend not making an application reliant on this behaviour.</p>

<p>If your applications does need to handle repeating / long-press button events, the switch to the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model in the Opera Device SDK 3.4 may require some additional work in order to ensure backwards- and forwards-compatibility.</p>

<p>Previously, repeating keys (on supporting platforms) used to fire:</p>
<ul>
<li><code>keydown</code> &gt; [multiple <code>keypress</code>] &gt; <code>keyup</code></li>
</ul>

<p>New versions of the Opera TV Store, in accordance with the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model, will instead fire:</p>

<ul>
<li>[multiple <code>keydown</code> and <code>keypress</code>] &gt; <code>keyup</code> (for keys that produce a <em>character value</em>)</li>
<li>[multiple <code>keydown</code>] &gt; <code>keyup</code> (for all other keys)</li>
</ul>

<p>If for previous versions of the TV Store your code listened to repeating <code>keypress</code> events, the best way to remain compatible is to register your handlers for <strong>both</strong> <code>keydown</code> and <code>keypress</code>. To avoid having functionality being triggered twice (for the first button press in the old SDK, and for repeating <em>character value</em> keys in the new SDK), you can take advantage of the <code>event.repeat</code> property introduced in <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> to filter out unwanted duplicate events:</p>

<pre><code>
// example using event delegation
window.addEventListener(&quot;keydown&quot;, handler, useCapture);
window.addEventListener(&quot;keypress&quot;, handler, useCapture);

function handler(event){
    if ((event.type==&#39;keydown&#39; &amp;&amp; !(&#39;repeat&#39; in event)) ||
        (event.type==&#39;keypress&#39; &amp;&amp; (&#39;repeat&#39; in event))) return; 
    …	
}
</code></pre>

<p>Alternatively, if you&#39;re binding event handlers via JavaScript already, you can use the new <code>window.KeyboardEvent</code> interface as an indicator for DOM 3 support, and only bind your event handler to either <code>keydown</code> or <code>keypress</code>.</p>

<pre><code>
// example using event delegation
if (window.KeyboardEvent){
    window.addEventListener(&#39;keydown&#39;, handler, useCapture);
} else {
    window.addEventListener(&#39;keypress&#39;, handler, useCapture);
} 

function handler(event){
    // no need to de-dupe events
    …   
}
</code></pre>

<h2 id="return">Requirements for the <kbd>Back</kbd>/<kbd>Return</kbd> button</h2>

<p>Most remote controllers have a <kbd>Back</kbd> or <kbd>Return</kbd> button. In the Opera TV emulator, this is equivalent to pressing the <kbd>BACKSPACE</kbd> key. The Opera TV Store requires that the <kbd>Back</kbd>/<kbd>Return</kbd> button works consistently in each application as follows:</p>

<ul>
  <li>Pressing <kbd>Back</kbd>/<kbd>Return</kbd> must return the user to the previous page or screen.</li>
  <li>If the user is at the first page of the application, the application should close.</li>
  <li>If the user is at an &quot;Exit app&quot; confirmation dialog, the application should close.</li>
</ul>

<p>In other words, if the user presses <kbd>Back</kbd>/<kbd>Return</kbd> repeatedly, they will eventually exit the application and return to the TV Store menu.</p>

<p>If your application consists of regular pages loaded one after another, the <kbd>Back</kbd>/<kbd>Return</kbd> button should work without any extra effort – the correct behaviour is handled automatically by Opera. If your application is using AJAX, overlays or history modifications, however, then <kbd>Back</kbd>/<kbd>Return</kbd> must be handled by your application. Here are examples of how such behaviour can be coded:</p>

<pre><code>// To close overlays with Back/Return
function handler(event) {
    // assuming there&#39;s a global boolean overlay_opened
    if (overlay_opened &amp;&amp; event.keyCode == VK_BACK_SPACE) {
        event.preventDefault();
        overlay_opened = false;
        closeOverlay();
    }
}</code></pre>

<pre><code>// To close the application with Back/Return
function handler(event) {
    // assuming there&#39;s a global boolean main_page
    if (main_page &amp;&amp; event.keyCode == VK_BACK_SPACE) {
        event.preventDefault();
        main_page = false;
        window.close();
    }
}</code></pre>

<div class="note">
<p>Currently, the Opera TV Store has implemented some additional hardcoded behavior which automatically closes an application if the user presses <kbd>Back</kbd>/<kbd>Return</kbd> and the browser history is empty, without the possibility to <code>preventDefault();</code> the event. The idea is to avoid faulty applications from inadvertently trapping users.</p>
<p>To circumvent this behavior, a slightly hacky workaround is to user the HTML5 history management API to inject entries into the browser history.</p>
<pre><code>window.history.pushState({}, document.title, &#39;#dummy_url&#39;);</code></pre>
<p>After this, the preceding code snippets to manually handle the <kbd>Back</kbd>/<kbd>Return</kbd> key using <code>preventDefault();</code> will work as expected.</p>
</div>

<h2 id="prevent-default">Preventing default spatial navigation</h2>

<p>When handling key events directly, you will probably want to stop the Opera TV Store browser from carrying out its normal spatial navigation and element activation behaviours. This can simply be suppressed in the <code>handler</code> function:</p>

<pre><code>function handler(event){
    …
    event.preventDefault();
    …	
}</code></pre>

<h2 id="determining-support">Determining support for a specific functional key</h2>

<p>Authors can check if a specific functional key has been defined on the current device using a simple JavaScript check. If a button is supported, the constant will contain the device-specific key code of the button; otherwise, the constant will return a <code>null</code> value. For example, to test for the <kbd>VK_RED</kbd> key:</p>

<pre><code>if (VK_RED !== null) {
    /* VK_RED is supported */
    …
}</code></pre>

<p>Although all devices running the Opera TV Store should have all the global constants listed above defined (though their value may be <code>null</code>, if the device&#39;s default remote control doesn&#39;t have a particular button), it is still advisable to also check for the existence of the constant before using it, to avoid any <code>Unhandled Error: Undefined variable</code> JavaScript errors.</p>

<pre><code>if ((&#39;VK_RED&#39; in window)&amp;&amp;(VK_RED !== null)) {
    /* VK_RED is supported */
    …
}</code></pre>

<p>This precaution should also be taken when checking <code>event.keyCode</code> values against those constants:</p>

<pre><code>function handler(event){
    …
    if ((&#39;VK_RED&#39; in window)&amp;&amp;(VK_RED == event.keyCode)){
        /* VK_RED was pressed … do something useful */
    }
    …
}</code></pre>

<p class="note">The list of <code>VK_*</code> global constants is currently set in a <code>user.js</code> file, which OEMs include as part of their Opera TV Store installation at integration time. Device manufacturers will include the buttons and their respective key codes based on the default remote controls that ship with their devices. With this approach, however, any third-party or alternative remote controls may not match the standard remote&#39;s set of functional buttons – the constants may be defined and present, but the actual remote doesn&#39;t have those physical keys. For this reason, it&#39;s still advisable to use caution and to make applications work with the minimal set of <em>Always available</em> keys.</p>


