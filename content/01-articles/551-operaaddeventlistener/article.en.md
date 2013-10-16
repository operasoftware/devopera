Title: opera.addEventListener()
----
Date: 2011-12-06 05:36:53
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

<p>Registers a listener for an event specific to the injected script side. The listener needs to use the standard <code>EventListener</code> interface - a function with an <code>Event</code> object as its first argment, e.g. <code>var myListener = function(event) {alert(event.type)};</code></p>

<h2>Parameters:</h2>


    <ul>
        <li><code>type</code>: The type of event to listen to; see the list of event types below.</li>
        <li><code>listener</code>: The function that will be called.</li>
        <li><code>useCapture</code>: Boolean. If true, the event listener is only added for the capture phase and target.</li>
    </ul>


<h2>Syntax:</h2>

<p><code>void addEventListener (&lt;DOMString&gt; type, &lt;EventListener&gt; listener, useCapture)</code></p>

<h2>Example:</h2>

<pre><code>opera.addEventListener(&#39;BeforeScript&#39;, function(userJSEvent) {
  userJSEvent.element.text = userJSEvent.element.text.replace(/function\s+window\.onload\(/g, &#39;window.onload = function(&#39;);
}, false);</code></pre>

<h2>Event types:</h2>

<h3>BeforeExternalScript</h3>

<p>Fired when a <code>script</code> element with a <code>src</code> attribute is encountered. The <code>script</code> element is available in the <code>element</code> attribute of the <code>UserJSEvent</code>. If cancelled, the external source is not loaded and the <code>script</code> element is not executed. In addition, if it is cancelled, the <code>BeforeScript</code> event will not fire.</p>

<h3>BeforeScript</h3>

<p>Fired before a <code>script</code> element is executed. The <code>script</code> element is available in the <code>element</code> attribute of the <code>UserJSEvent</code>. The content of the script is available in the <code>text</code> property of the <code>script</code> element, and is also writable:</p>

<pre><code>UserJSEvent.element.text = UserJSEvent.element.text.replace(/!=\s*null/,&#39;&#39;);</code></pre>

<p>The <code>BeforeScript</code> event is fired for inline scripts as well as external scripts, including scripts with a type that Opera normally does not execute (such as VBScript). If cancelled, the <code>script</code> element is not executed.</p>

<h3>AfterScript</h3>

<p>Fired after a <code>script</code> element has finished executing. The <code>script</code> element is available in the <code>element</code> attribute of the <code>UserJSEvent</code>. Modifying the <code>text</code> property of the event object has no effect, unlike the <code>BeforeScript</code> event.</p>

<h3>BeforeEvent</h3>

<p>Fired before a regular event is fired, regardless of whether or not an event handler has been registered for that event. The regular event is available in the <code>event</code> attribute of the <code>UserJSEvent</code>. If cancelled, the regular event is not fired, its default action is performed, and any associated <code>BeforeEventListener</code> events are not fired.</p>

<h3>BeforeEvent.{type}</h3>

<p>Like <code>BeforeEvent</code>, but fired only for events of the specified type (e.g., <code>BeforeEvent.click</code>). As shown by the example, the {type} needs to be substituted for the type of event you want to listen for. See the <a href="http://dev.w3.org/html5/spec/Overview.html#event-handlers-on-elements-document-objects-and-window-objects">Event handlers on elements, Document objects, and Window objects</a> of the HTML5 specificaton for a complete list of events. <strong>Note:</strong> at present, not all event types are supported.</p>

<h3>AfterEvent</h3>

<p>Fired after a regular event has been fired and handled but before its default action has been performed. The regular event is available in the <code>event</code> attribute of the <code>UserJSEvent</code>. If cancelled, any attempts by a regular event handler to cancel the regular event will be ignored. The <code>UserJSEvent</code> object will also have a <code>eventCancelled</code> property, which will be set to <code>true</code> if any regular event handlers have cancelled the event.</p>

<h3>AfterEvent.{type}</h3>

<p>Like <code>AfterEvent</code>, but fired only for events of the specified type (e.g., <code>AfterEvent.click</code>).
As shown by the example, the {type} needs to be substituted for the type of event you want to listen for. See the
<a href="http://dev.w3.org/html5/spec/Overview.html#event-handlers-on-elements-document-objects-and-window-objects">
Event handlers on elements, Document objects, and Window objects</a> of the HTML5 specificaton for a complete list of events
you can listen for. <strong>Note:</strong> at present, not all event types are supported.</p>

<h3>BeforeEventListener</h3>

<p>Fired before a listener for a regular event is called. The regular event is available in the <code>event</code> attribute of the <code>UserJSEvent</code>, and its regular listener is available in the <code>listener</code> attribute of the <code>UserJSEvent</code>. If cancelled, the regular event listener will not be called.</p>

<h3>BeforeEventListener.{type}</h3>

<p>Like <code>BeforeEventListener</code>, but fired only for events of the specified type (for example, <code>BeforeEventListener.click</code>).</p>

<h3>AfterEventListener</h3>

<p>Fired after a <code>listener</code> for regular events is called. The <code>UserJSEvent</code> object contains references to the original <code>event</code> and <code>listener</code> that were defined  on the page. If cancelled, any attempts by a regular event handler to cancel the regular event propagation will be ignored. The <code>UserJSEvent</code> object will also have the <code>propagationStopped</code> property, which will be set to <code>true</code> if any regular event handlers have cancelled the event propagation.</p>

<h3>AfterEventListener.{type}</h3>

<p>Like <code>AfterEventListener</code>, but fired only for events of the specified type (for example, <code>AfterEventListener.click</code>). As shown by the example, the {type} needs to be substituted for the type of event you want to listen for. See the <a href="http://dev.w3.org/html5/spec/Overview.html#event-handlers-on-elements-document-objects-and-window-objects">Event handlers on elements, Document objects, and Window objects</a> of the HTML5 specificaton for a complete list of events. <strong>Note:</strong> At present, not all event types are supported.</p>

<h3>BeforeJavascriptURL</h3>

<p>Fired before a <code>javascript:</code> URL is executed. The JavaScript code to be executed (everything after the <code>javascript:</code> in the URL) is available in the <code>source</code> attribute of the <code>UserJSEvent</code>, and is also writable. If cancelled, the <code>javascript:</code> URL is not executed.</p>

<h3>AfterJavascriptURL</h3>

<p>Fired after a <code>javascript:</code> URL is executed. The JavaScript code that was executed (everything after the <code>javascript:</code> in the URL) is available in the <code>source</code> attribute of the <code>UserJSEvent</code>, and any value returned by that code is available in the <code>returnValue</code> attribute of the <code>UserJSEvent</code>. The <code>returnValue</code> is also writable. If cancelled, any returned value will not be used as the source of a new page.</p>

<h3>BeforeCSS</h3>

<p>Fired before a CSS style sheet is parsed. The element attribute of the <code>UserJSEvent</code> refers either to the <code>&lt;style&gt;</code> or the <code>&lt;link&gt;</code> elements that include the styles in the document. For style sheets imported using a CSS import rule, a placeholder <code>&lt;link&gt;</code> element is returned, which provides access to the style sheet <code>url</code>, <code>media</code>, and other properties.</p>

<p>The content of the style sheet is available in the cssText property of the UserJSEvent object, and is also writable. Usage example follows:</p>

<pre><code class="javascript">opera.addEventListener(&#39;BeforeCSS&#39;, function(userJSEvent){
  userJSEvent.cssText = userJSEvent.cssText
    .replace(/-(moz|ms|webkit|o)-(border|text-overflow)/g,&#39;$2&#39;)
    .replace(/-(moz|ms|webkit)-(gradient|transform|transition)/g,&#39;-o-$2&#39;);
}, false);</code></pre>

<p>If canceled, the style sheet element is not parsed and its styles are not applied to the page. While a <code>BeforeCSS</code> event is being processed for a given style sheet, changes to that style sheet — like changing <code>textContent</code> on the style element, will only be applied after the <code>BeforeCSS</code> event, if it is not canceled.</p>

<h3>AfterCSS</h3>

<p>Fired after a CSS style sheet is parsed, if the respective <code>BeforeCSS</code> event was not canceled. The element attribute of the <code>UserJSEvent</code> refers either to the <code>&lt;style&gt;</code> or the <code>&lt;link&gt;</code> elements that include the styles in the document. For style sheets imported using a CSS import rule, a placeholder <code>&lt;link&gt;</code> element is returned, which provides access to the style sheet <code>url</code>, <code>media</code>, and other properties.</p>

<p>The content of the style sheet is available in the <code>cssText</code> property of the <code>UserJSEvent</code> object. Modifying the <code>cssText</code> property of the event object triggers a new <code>BeforeCSS</code> event.</p>

<h3>pluginInitialized</h3>

<p>Fired after a plug-in instance has been initialized. The element which represents the plug-in instance is available in the <code>element</code> attribute of the <code>UserJSEvent</code>.</p>

