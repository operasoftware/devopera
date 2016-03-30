---
title: Functional Key Handling in Opera Device SDK Based TV Browsers
authors:
- patrick-lauke
intro: 'Browsers based on the Opera Device SDK are generally designed to use the standard four-way directional keys on a remote control for spatial navigation. Websites specifically aimed at TV browsing can directly handle navigation and the use of functional keys through key events. This article outlines some possible approaches, particularly in light of the new DOM Level 3 Events model introduced in the Opera Device SDK 3.4.'
license: cc-by-3.0
---

<div class="note">
This article offers advice for generic browsers based on the Opera Device SDK. For specific information about the Opera TV Store – which introduces further functionality, as well as additional requirements to authors – please refer to this separate article: [Functional key handling in Opera TV Store applications](/tv/functional-key-handling-in-opera-tv-store-applications/).
</div>

- [Spatial navigation and functional buttons](#spatial-functional)
- [Handling `keydown` events](#handling-keydown)
- [Repeating key events](#repeat)
- [Preventing default spatial navigation](#prevent-default)

<h2 id="spatial-functional">Spatial navigation and functional buttons</h2>

<p>Browsers based on the Opera Device SDK are generally designed to use the standard four-way directional keys on a remote control for spatial navigation. Opera's spatial navigation works in a similar way to traditional <kbd>TAB</kbd> based keyboard access in most browsers, allowing users to move between focusable elements (links, form controls, image map areas). In addition, spatial navigation also employs heuristics that make arbitrary elements with attached <code>click</code> and <code>mouseover</code> JavaScript events focusable as well. Lastly, as the name implies, spatial navigation in Opera allows the user to move between those elements based on their spatial relationship on screen, rather than in source order (as with <kbd>TAB</kbd> navigation).</p>
<p>In most cases, websites can simply rely on Opera's spatial navigation to handle site navigation. There are simple mechanisms to further [tweak spatial navigation for TV browsing](/tv/tweaking-spatial-navigation-for-tv-browsing/) using CSS3.</p>
<p>However, for maximum control, web authors may also choose to handle the navigation of their site (or specific aspects of their site, such as individual image carousel elements for instance) themselves by intercepting key presses from the remote control. This makes it possible to not only react to the basic directional buttons (<kbd>UP</kbd>, <kbd>RIGHT</kbd>, <kbd>DOWN</kbd>, <kbd>LEFT</kbd>), but to further bind functionality to the various shortcut and functional keys (such as <kbd>BACK</kbd>, <kbd>INFO</kbd>, <kbd>OPTIONS</kbd> or the <kbd>RED</kbd> button).</p>

<h2 id="handling-keydown">Handling <code>keydown</code> events</h2>

<div class="note">
<p>In previous versions of the Opera Device SDK, authors were encouraged to handle <code>keypress</code> events. However, starting with the Opera Device SDK 3.4, Opera is aligned with the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model.</p>
<p>The most notable change here is that the <code>keypress</code> event is now only fired for <em>keys which produce a character value</em>. From the list of functional buttons above, this means that only the number keys <kbd>0</kbd>-<kbd>9</kbd> and the <kbd>ENTER</kbd> (Confirm/Select/Ok) buttons can be detected via <code>keypress</code>.</p>
<p>Additionally, this specification deprecates the <code>keypress</code> event, meaning that future versions of the specification – and, as a result, future versions of conformant browsers – should not fire this event anymore. For compatibility with existing content, it is unlikely that browsers will drop legacy support for this event, but we would still recommend using <code>keydown</code> instead of <code>keypress</code> going forward.</p>
</div>

<p>In the past, websites often handled key events by simply adding an <code>onkeydown</code> attribute to an element in HTML and running some inline JavaScript.</p>

<pre><code>&lt;ELEMENT onkeydown="handler()"&gt;</code></pre>

<p>However, we would recommend the much cleaner and flexible method of adding handler purely in JavaScript – either by attaching the handler function directly to the <code>onkeydown</code> property of the element or using <code>addEventListener</code>. This automatically passes on the event object associated with the call, avoiding any ugly <code>window.event</code> hacks:</p>

<pre><code>object.onkeydown = handler;
object.addEventListener("keydown", handler, useCapture);</code></pre>

<p>Before the standardisation effort of <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a>, key handler functions would simply compare the <code>event.keyCode</code> value to hardcoded values corresponding to specific keys. For instance, to detect if the <kbd>UP</kbd> arrow was pressed, the handler script would have been something like:</p>

<pre><code>function handler(event){
	…
	if (event.keyCode == 38){
		// UP (generally keyCode 38) was pressed … do something useful
	}
	…
}</code></pre>

<p>The potential problem with this approach has always been that the specific numerical values of <code>event.keyCode</code> were never standardised – the same functional or navigation key, on different devices, may generate different key codes. For this reason, DOM Level 3 introduces a new, more abstracted method of identifying keys in the form of the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#key-values-list">DOM Level 3 Events Key values list</a> and the new <code>event.key</code> (as well as <code>event.char</code>, which is however only applicable to keys which produce a character value).</p>

<p>Starting with the Opera Device SDK 3.4, the recommended method of identifying navigation and functional keys is therefore:</p>

<pre><code>function handler(event){
	…
	if (event.key == 'Up'){
		// 'Up' was pressed … do something useful
	}
	…
}</code></pre>

<p class="note">Although the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model normatively uses <code>event.key</code> and <code>event.char</code>, it still retains information on <a href="http://www.w3.org/TR/DOM-Level-3-Events/#legacy-key-attributes">legacy key attributes</a> such as <code>event.keyCode</code>. For compatibility with existing content, it is likely that <code>event.keyCode</code> will continue to be available for the time being.</p>

<p>To ensure backwards compatibility with previous Opera Device SDK versions, it may be necessary to combine the old and new way of comparing key events into a single expression:</p>

<pre><code>function handler(event){
	…
	if ((event.key == 'Up') || (event.keyCode == 38)) {
		// 'Up'/key 38 was pressed … do something useful
	}
	…
}</code></pre>

<p>Depending on the application, it is advisable not to include a large number of separate event handlers to various elements in the page, but to instead take advantage of event capture / bubbling and use an event delegation mechanism, hooking the <code>keydown</code> handler on a top-level element (for instance, the <code>body</code>) or object (<code>window</code> or similar):</p>

<pre><code>window.addEventListener("keydown", handler, useCapture);</code></pre>

<p>In your <code>handler</code> function, you may need to determine the element where the event originated. A reference to this can be easily obtained from the <code>event.target</code>:</p>

<pre><code>function handler(event){
	…
	var target = event.target;
	…
}</code></pre>

<h2 id="repeat">Repeating key events</h2>

<p>What happens when a user keeps a functional button on their remote control pressed is dependant on their specific device. Some devices will only send a single <code>keydown</code> event until the button is released. Others may send a series of <code>keydown</code> (and <code>keypress</code>, if it's a key that produces a <em>character value</em>) and <code>keyup</code> events (as if the button was manually being pressed and released multiple times). Lastly, platforms that do support proper key repeats will send a continuous stream of <code>keydown</code> (and <code>keypress</code>, if it's a key that produces a <em>character value</em>) events, and only fire <code>keyup</code> once the user releases the button.</p>

<p>In general, since it cannot be guaranteed that a device has full key repeat support, we'd recommend not making an application reliant on this behaviour.</p>

<p>If your applications does need to handle repeating / long-press button events, the switch to the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model in the Opera Device SDK 3.4 may require some additional work in order to ensure backwards- and forwards-compatibility.</p>

<p>Previously, repeating keys (on supporting platforms) used to fire:</p>
<ul>
<li><code>keydown</code> &gt; [multiple <code>keypress</code>] &gt; <code>keyup</code></li>
</ul>

<p>Starting with the Opera Device SDK 3.4, in accordance with the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> model, the browser will instead fire:</p>

<ul>
<li>[multiple <code>keydown</code> and <code>keypress</code>] &gt; <code>keyup</code> (for keys that produce a <em>character value</em>)</li>
<li>[multiple <code>keydown</code>] &gt; <code>keyup</code> (for all other keys)</li>
</ul>

<p>If for previous versions of the Opera Device SDK your code listened to repeating <code>keypress</code> events, the best way to remain compatible is to register your handlers for <strong>both</strong> <code>keydown</code> and <code>keypress</code>. To avoid having functionality being triggered twice (for the first button press in the old SDK, and for repeating <em>character value</em> keys in the new SDK), you can take advantage of the <code>event.repeat</code> property introduced in <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboard-event-order">DOM Level 3 Events</a> to filter out unwanted duplicate events:</p>

<pre><code>
// example using event delegation
window.addEventListener("keydown", handler, useCapture);
window.addEventListener("keypress", handler, useCapture);

function handler(event){
	if ((event.type=='keydown' &amp;&amp; !('repeat' in event)) ||
		(event.type=='keypress' &amp;&amp; ('repeat' in event))) return;
	…
}
</code></pre>

<p>Alternatively, if you're binding event handlers via JavaScript already, you can use the new <code>window.KeyboardEvent</code> interface as an indicator for DOM 3 support, and only bind your event handler to either <code>keydown</code> or <code>keypress</code>.</p>

<pre><code>
// example using event delegation
if (window.KeyboardEvent){
	window.addEventListener('keydown', handler, useCapture);
} else {
	window.addEventListener('keypress', handler, useCapture);
}

function handler(event){
	// no need to de-dupe events
	…
}
</code></pre>

<h2 id="prevent-default">Preventing default spatial navigation</h2>

<p>When handling key events directly, you will probably want to stop the Opera Device SDK from carrying out its normal spatial navigation and element activation behaviours. This can simply be suppressed in the <code>handler</code> function:</p>

<pre><code>function handler(event){
	…
	event.preventDefault();
	…
}</code></pre>
