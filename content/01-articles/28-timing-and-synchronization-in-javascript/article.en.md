Title: Timing and Synchronization in JavaScript
----
Date: 2007-02-27 12:25:07
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

<p>Timing issues are the source of some of the most devious bugs in JavaScript applications. Problems that never show up during development might surface when the application is used by an end-user on a slow computer or with low bandwidth. Such issues may also be intermittent and difficult to reproduce.</p>

<p>A simple example: consider a button with a click event-handler that modifies another element below it. If the user clicks the button before the element below has been parsed, the script will fail. The developer will never notice the issue, because he tests the page on a fast computer with a fast connection, where the whole page is rendered in one instant.</p>

<p>This article attempts to describe the various timing-related
issues in JavaScript in current browsers.</p>

<h2>The Basics</h2>

<p>A browser window has a single thread that performs parsing
of HTML, dispatching of events and execution of JavaScript code.</p>

<p>JavaScript code is executed in one of two ways: </p>
<ol>
<li>Top-level code in script-element executed during page-load</li>
<li>Event-handler functions executed as part of an event
dispatch</li>
</ol>

<p>The browser initiates both types of execution, and they run in the same thread such that only one code unit is executing at a time.</p>

<p>Primarily the browser is event-driven (code is executed in response to user input), but during the page load phase, it is in addition driven by the parsing thread.</p>

<h3>Event Flow</h3>

<p>An <dfn>event</dfn> is a signal from the browser that some change in the window has happened or is going to happen very soon if you don’t do something about it.</p>

<p>An <dfn>event handler</dfn> is a JavaScript function that is registered to an object and an event name. When the corresponding event is fired on the object, all event handlers registered on the node are executed.</p>

<p>All event handler functions are executed sequentially, and
each event is processed completely (including bubbling up through the DOM and performing the default action), before the next event is processed.</p>

<h3>Default Action</h3>

<p>The default action is a curiosity of the browser event model: It is what happens when no JavaScript is interfering. For example, the default action of the <code>click</code> event on a link is to navigate to the URL. The default action of click on a checkbox is to check the box, and so on.</p>

<p>The default action is not an event handler in itself, and we cannot remove it or override it, as opposed to our custom events handlers. However, we can cancel it during the dispatch, using <code class="script func">preventDefault()</code> (<code class="script prop">event.returnValue</code> in IE). If the default action is cancelled, all relevant event handlers will still be fired, but the default action will not be executed afterwards.</p>

<h3>Dispatch Sequence</h3>

<p>Events like <code class="script">load</code> are fired only on the corresponding object (<code class="script prop">window</code> or <code class="script prop">document</code> in this case). However, for events targeted on specific elements in the document, it is possible for event handlers on ancestor elements to get fired also.</p>

<p>Before an event is fired on the target, there is a <dfn>capturing phase</dfn>, where ancestors to the target node may intercept the event. Event capturing does not work reliably cross-browser, though.</p>

<p>Some events <dfn>bubble</dfn>, which means that after they have fired on the target element, they are fired in turn on each ancestor in the DOM tree, up to and including the document-object. This does works cross-browser.</p>

<p>The whole process of firing an event on all relevant elements and executing the default action is called the event dispatch.</p>

<p>For a non-bubbling event, the sequence of the dispatch is like this:</p>

<ol>
<li>Capturing phase: All &quot;capturing&quot; event handlers are fired on
all ancestor elements, from the top down.</li>
<li>The event is fired on the target element, which means that all event handlers registered on the element for the specific event are executed (in undefined order!)</li>
<li>The default action is performed (if it wasn&#39;t cancelled in any of the handlers)</li>
</ol>

<p>For a bubbling event, the sequence is like this:</p>
<ol>
<li>Capturing phase: All &quot;capturing&quot; event handlers are fired on all ancestor elements, from the top down.</li>
<li>The event is fired on the target element</li>
<li>Bubbling phase: The event is fired on all ancestor elements, from the target and upward.</li>
<li>The default action is performed (if it wasn&#39;t cancelled in any of the handlers)</li>
</ol>

<p>It&#39;s possible to cancel the bubbling of an event using <code class="script func">stopPropagation()</code> (<code class="script func">cancelBubble()</code>
in IE), however the default action will still be executed. Cancelling bubbling and cancelling the default action are thus separate and independent operations.</p>

<p>The specific stages of the event model are explained in much greater detail (and with a nice illustration) in the <a href="http://www.w3.org/TR/DOM-Level-3-Events/">DOM 3 Events</a> specification.</p>

<p>There are some curious situations where the default action actually happens <em>before</em> the event dispatch &#x2013; but may still be cancelled. For example, when a checkbox is clicked, the checkmark is rendered, and the <code>checked</code> attribute is updated before the event dispatches. However, if the default action is cancelled during the dispatch, the update is rolled back during the default action phase; the checkmark is removed again, and the <code>checked</code> attribute is flipped back.</p>

<h2>Event Batches</h2>

<p>Some events come in batches, where one user inputs results in several events being dispatched.</p>

<p>For example, when focus moves from one field to another, the <code>blur</code>-event is fired on the one field, and <code>focus</code> on the other. This happens conceptually at the same time (since it is in response to the same use input), but the events are still dispatched sequentially.</p>

<p>If an event bubbles, the whole event capturing/bubbling sequence is completed and the default action executed before the next event is dispatched.</p>

<p>An example of this is a mouse button being released over a button, when both the <code>mouseup</code>-event and the click event are fired. The sequence is like this:</p>


<h4>Mouseup-event dispatch</h4>
<ol>
<li>Capturing phase for <code>click</code> – all capturing event handlers are executed.</li>
<li>Target: the event is fired on the target element.</li>
<li>Bubbling phase for <code>mouseup</code>: the event is fired on all parent elements.</li>
<li>(There is no default action for a <code>mouseup</code>).</li>
</ol>
<h4>Click-event dispatch</h4>
<ol start="5">
<li>Capturing phase – all capturing event handlers are executed.</li>
<li>Target: the click event is fired on the target element.</li>
<li>Bubbling phase: the click event is fired on all parent elements.</li>
<li>Default action for click is executed.</li>
</ol>

<p>In each dispatch it is only possible to cancel the default action of the <em>current</em> event. For example, in a <code>mouseup</code> event
handler, cancelling the current action has no effect, since <code>mouseup</code> has no default action. It will not stop the click event from firing immediately after, since they are separate events.</p>

<p>However, the default action might trigger another event. In the case of the click event on a submit button, the default action is to submit the current form, which in turn will dispatch the submit event. So cancelling the default action for click in this case will prevent the next event from firing.</p>

<h2>Event Queuing</h2>

<p>Events are dispatched in response to user input (mouse or keyboard), or internal events like a page finishing loading. However, the event dispatching is asynchronous to the triggering input.</p>

<p>User input might happen while an event handler is still executing. In this case the actions are buffered, and when the event dispatcher is available again, the events corresponding to the buffered actions are dispatched. The events are always dispatched in the right order, but there might be a noticeable delay between the action and the event dispatch, if some event handler code is time consuming.</p>

<p>Internet Explorer and Mozilla appear completely unresponsive during the time when event handler scripts are executed. Even the browser toolbars seem to lock up. While the user can still, for example, click buttons, and the actions are buffered, there is no visual feedback. This might seem confusing, as the user might not realize that the action has been detected, and is likely to try clicking the button several times, which might have unintended consequences. Or the user might even believe that the browser has crashed, since it seems unresponsive. </p>

<p>Opera is much more responsive, giving visual feedback on user actions, such as clicking a button, while another script is executing. However, the events are still buffered and dispatched sequentially, as in the other browsers. Therefore the default actions of the event are not performed until the event dispatcher gets around to it. Again, this might seem confusing to users, although perhaps not as much as the locking up of IE and Mozilla.</p>

<p>The bottom line is that event handler scripts should never be time consuming. Be especially wary of synchronous <code>XMLHttpRequest</code> requests, since they might cause a noticeable delay that blocks the browser or document window.</p>

<h2>Nested Events</h2>

<p>There is a special case where events are not sequenced, but nested. If an event if fired explicitly through script using the <code class="func script">dispatchEvent()</code>-method (<code class="func script">fireEvent()</code> in Internet Explorer), the event is dispatched immediately. The initial script will only continue when the dispatched event has finished (and the default action has executed).</p>

<p>Also the DOM mutation events, that are not supported by Internet Explorer, will be dispatched immediately and synchronously when the DOM is changed, for example when <code class="script func">appendChild()</code> is called. </p>

<h2>Timing of Rendering</h2>

<p>Programmatic changes to the DOM or style sheet might not render immediately. It depends on the browser.</p>

<p>For example, if the background color of an element is changed through the DOM, the DOM will immediately reflect the change (and the DOM mutation event will be dispatched immediately and synchronously), but we do not know for certain when the browser engine will come around to actually rendering the changes visually on the screen. While it seems that in Mozilla and Internet Explorer the changes are postponed until the current event dispatch has completed, these changes seem to be rendered immediately in Opera.</p>

<h2>Timeouts</h2>

<p>The <code class="script func">setTimeout()</code> method schedules a function to be execution after a specific amount of time has elapsed:</p>

<pre><code class="script"><span class="prop">window</span>.<span class="func">setTimeout(someFunction, 1000)</span>;</code></pre>

<p>Timed scripts work somewhat like event handler scripts. Although they are executed in response to a timeout rather than some user input, they are still handled sequentially by the event dispatch thread just as user action events are.</p>

<p>Because of this, you cannot expect that the timeout will be executed at the designated time. If another event or event batch is executing, the timeout script will just be queued. Basically we are promised that the function will execute after <em>at least</em> a second, but it might take a lot longer than that.</p>

<p>This is a surprisingly useful feature. If a handler is registered with timeout 0, the handler is not executed, but queued immediately. It will be executed immediately after the current event dispatch (including the default action) has completed.</p>

<p>If a timeout is created in a event handler which is part of a batch (like <code>blur</code>/focus, <code>mouseup</code>/<code>click</code>), the timeout handler is executed after all events in the batch have completed dispatch.</p>

<h2>Non-user Events</h2>

<p>Other non-user-initiated events are: </p>
<ul>
<li>Page load events</li>
<li>Timeout events</li>
<li>Callback when content is received from an asynchronous <code>XMLHttpRequest</code></li></ul>

<p>These events are added to the event-dispatch queue the same way that user-initiated events are. This means, for example, that the <code>XMLHttpRequest</code> response handler is not executed immediately when the content is received, but just queued in the event dispatch queue.</p>

<h2>Alerts</h2>

<p>Alert boxes (and the related <code class="func script">confirm</code> and <code class="func script">prompt</code>-boxes) have some strange properties.</p>

<p>They are synchronous in the sense that the script that initiates the dialog is suspended until the dialog is closed. The script waits for the <code class="script func">alert()</code>-function to return before it continues.</p>

<p>The tricky part is that some browsers allow events to be dispatched while the dialog is visible and waiting for some user action. This means that while one script is suspended, waiting for the alert function to return, another function
might be executed as part of a different event dispatch.</p>

<p>User interface events like <code>mouseup</code> and <code>click</code> will not fire during the alert, as the alert is modal and captures all user input, but non-user-initiated events like page load, timeout handlers, and asynchronous <code>XMLHttpRequest</code> return handlers, might fire.</p>

<h2>Page Loading</h2>

<p>HTML pages are parsed and rendered progressively as the browser downloads the document.</p>

<p>Most external resources, such as images and plug-in media, are loaded asynchronously. When the parser encounters an <code class="elem">img</code>-tag, or <code class="elem">embed</code>, <code class="elem">iframe</code>, or <code class="elem">object</code>, a new thread is spawned. This downloads and renders the external resource independently from the parsing of the main page. Pages in frames and iframes are also loaded asynchronously.</p>

<p>External style sheets are a special case. Some browsers fetch them asynchronously (like images), some browsers fetches them synchronously, presumably to avoid having to re-render everything when the style-sheet arrives. (This is to prevent the flash of unstyled content which plagued early browsers.) In other words, don&#39;t rely on any particular behavior for this.</p>

<h2>JavaScript Block Execution</h2>

<p>Script elements are parsed synchronously. When script elements refer to external script files, the parsing of the page is halted until the external script has been completely downloaded, parsed and executed.</p>

<p>Inline JavaScript blocks are parsed and executed when the closing tag is encountered.</p>

<h3>Execution of script blocks</h3>

<p>A JavaScript block (inline script-block or external JavaScript file) is processed in two phases. First it is parsed and then executed. During the parsing stage, the basic syntax of the code is validated. If a syntax error is encountered, the script will not be executed.</p>

<p>During the execution stage all top-level statements are executed, meaning all code that is not part of a function. Top-level statements may contain forward references to functions declared in the same block, since function declarations are loaded during the parsing stage. This will work:</p>

<pre><code>&lt;<span class="elem">script</span>&gt;
  <span class="keyw">var</span> x = <span class="func">getMagicNumber()</span>;
  <span class="keyw">function</span> <span class="func">getMagicNumber()</span> { <span class="keyw">return</span> <span class="num">117</span>; }
&lt;/<span class="elem">script</span>&gt;</code></pre>

<p>However, this will not work, since function expressions are evaluated at runtime:</p>

<pre><code>&lt;<span class="elem">script</span>&gt;
  <span class="keyw">var</span> x = <span class="func">getMagicNumber()</span>; <span class="comment">// ERROR! getMagicNumber is undefined!</span>
  <span class="keyw">var</span> getMagicNumber = <span class="func">function()</span> { <span class="keyw">return</span> <span class="num">117</span>; }
&lt;/<span class="elem">script</span>&gt;</code></pre>

<p>This will not work either, since each script block is executed immediately after the closing tag has been parsed:</p>

<pre><code>&lt;<span class="elem">script</span>&gt;
  <span class="func">alert(getMessage())</span>;
&lt;/<span class="elem">script</span>&gt;
&lt;<span class="elem">script</span>&gt;
  <span class="keyw">function</span> <span class="func">getMessage()</span> { <span class="keyw">return</span> &quot;<span class="string">Hello!</span>&quot;; }
&lt;/<span class="elem">script</span>&gt;</code></pre>

<h2>Using <code>Document.write()</code></h2>

<p>A script may generate HTML output directly in the document using the <code class="script func">document.write()</code> method. The generated output will be buffered until the block has finished executing. Then the buffered output is parsed. This output might (mind-bendingly!) contain script blocks, which are executed as part of the parsing.</p>

<p>The generated HTML output is inserted into the document immediately following the script block that generated the output.</p>

<h2>DOM Construction</h2>

<p>The parser constructs the DOM incrementally during page load. An empty element is inserted in the DOM when the tag is parsed. A non-empty element is inserted when the opening tag is parsed. For example, the <code class="elem">body</code> element is available in the DOM as soon as the parser begins parsing the content of the element.</p>

<p>Note that the DOM might not correspond completely to the input HTML. Element like <code class="elem">html</code> and <code class="elem">head</code> will be constructed in the DOM even if they don&#39;t appear in the HTML.</p>

<p>If the HTML source is invalid, for example a <code class="elem">title</code> element appearing in the <code class="elem">body</code> element), the browser will rearrange the DOM to make it valid. In this case you cannot rely on the DOM tree to be constructed in order.</p>

<h3>Deferred Script-block Loading</h3>

<p>There is a drawback to the synchronous loading of script blocks: If lots of code has to be downloaded and executed while parsing the head of the document, there might be a noticeable lag before the page begins to render.</p>

<p>To alleviate this, we could have used the <code class="att">defer</code> attribute on script elements. This indicates that the browser is allowed to load the script asynchronously. However, we cannot be sure when the script actually will be executed, it could be before or after the page has finished rendering. Opera ignores the <code class="att">defer</code> attribute completely.</p>

<pre><code>&lt;<span class="elem">script</span> <span class="att">defer</span>&gt; 
   <span class="func">alert(&quot;<span class="string">this message will appear at some unpredictable time during page load</span>&quot;)</span>; 
&lt;/<span class="elem">script</span>&gt;</code></pre>

<p>Deferred scripts cannot use <code class="script func">document.write()</code>, as they are not synchronized to the parser.</p>

<p>This is the catch: script blocks are always executed in the order they appear in the document, whether or not they have the defer attribute. So if a script element without the <code class="att">defer</code> attribute follows a script with <code class="att">defer</code>, the parser has to complete loading and executing of the deferred script before executing the un-deferred script. This eliminates the point of the <code class="att">defer</code>-attribute in the first place, meaning that non-deferred script blocks should always be placed before the deferred script blocks.</p>

<p>For these reasons the <code class="att">defer</code> attribute can&#39;t be relied on for the timing of script blocks. It only allows some browsers to continue parsing the document after a script block.</p>

<h2>Progressive Rendering</h2>

<p>The actual rendering of the visual display is not synchronous with the DOM construction. Timing of rendering during page load is quite unpredictable. Depending on the speed of the connection and the size of the page, the browser might wait until the whole page has finished loading before rendering anything or, in the case of a slow connection, might render the page one piece at a time.</p>

<p>Be aware that the user interface is responsive to user events as soon as the page starts rendering. This might lead to forward-reference problems, if an event handler refers to an element later in the document.</p>

<p>Example of dangerous code:</p>

<pre><code>&lt;<span class="elem">button</span> 
<span class="att">onclick</span>=&quot;<span class="value script">document.getElementById(&#39;lamp&#39;).backgroundColor = &#39;yellow&#39;</span>&quot;&gt;
  Click here to turn on lamp!
&lt;/<span class="elem">button</span>&gt;
&lt;<span class="elem">div</span> <span class="att">id</span>=&#39;<span class="value">lamp</span>&#39;&gt;O&lt;/<span class="elem">div</span>&gt;</code></pre>

<p>The problem is that the &#39;lamp&#39;-element might not be parsed when the button is clicked. An event handler should never refer to elements defined later in the document.</p>

<p>In more complex user interfaces, it might be unpractical to avoid forward references between controls on a page. Instead all controls could just be disabled by default, and only activated in the <code>onload</code> event handler, where we are guaranteed that the whole page has loaded.</p>

<p>Note that <code>onload</code> also waits for all images (and frames and so on) to finish loading. If there are large images on the page, this might take some time. A workaround is to activate the page on an inline script on the bottom of the page. This will execute when the page is loaded, but does not wait for external resources to load.</p>

<h2>Long running scripts</h2>

<p>Ideally, JavaScript code should never run very long, since it disrupts the user experience. Some times it is unavoidable, however. In this case, a &quot;Please wait&quot; message or a progress bar or similar should be displayed, to indicate that the browser is not broken. The problem is that the message must be made visible <em>before</em> the time consuming process runs.</p>

<p>Here is an example in pseudo-code:</p>
<pre><code class="script">headlineElement.innerHTML = &quot;<span class="string">Please wait...</span>&quot;;
<span class="func">performLongRunningCalculation()</span>;
headlineElement.innerHTML = &quot;<span class="string">Finished!</span>&quot;;</code></pre>

<p>In Internet Explorer and Mozilla, the text &quot;<span class="string">Please wait...</span>&quot; will never be shown to the user, as the changes are rendered only after the whole script has finished. In Opera, on the other hand, the &quot;<span class="string">Please wait...</span>&quot; text is displayed while the calculation is running.</p>

<p>If we want the message to display in Internet Explorer and Mozilla, we have to release control to the browser UI, so the message is rendered before the calculation begins:</p>

<pre><code class="script">headlineElement.innerHTML = &quot;<span class="string">Please wait...</span>&quot;;
<span class="keyw">function</span> <span class="func">doTheWork()</span> {
&#xA0;&#xA0;&#xA0;<span class="func">performLongRunningCalculation()</span>;
&#xA0;&#xA0;&#xA0;headlineElement.innerHTML = &quot;<span class="string">Finished!&quot;;
}
<span class="func m">setTimeout(doTheWork, 0)</span>;</span></code></pre>

<p>Now the <code class="script func">setTimeout</code> trick ensures that the message is rendered before the work blocks the browser again. The browser is of course still blocked while the calculation is performed, so it&#39;s not a very elegant solution. If we want that, we have to chop the calculation into several functions, chained together with <code class="script func">setTimeout</code>. This quickly gets complicated, though.</p>

<h2>Race Conditions</h2>

<p>Each window (and frame) has its own event queue.</p>

<p>In Opera, every window has its own JavaScript thread. This includes windows in <code class="elem">iframe</code>s. The consequence is that event handlers initiated from different frames might execute at the same time. If these simultaneous scripts modify shared data (like properties in the top window), we have the possibility of race conditions.</p>

<p>I will not go into the hazards of race conditions, just point out that this may lead to very confusing bugs.</p>

<p>A solution would be always queueing handlers in the event queue in the top window, even if initiated by events from other frames.</p>

<p>Consider a page with an <code class="elem">iframe</code>. The <code class="elem">iframe</code> has a page <code>onload</code> handler, which will execute a function in the containing page:</p>

<pre><code class="script"><span class="comment">// bad onload function in frame</span>:
window.top.<span class="func">notifyFrameLoaded()</span></code></pre>

<p>This is dangerous, as the <code>onload</code> might execute while the containing page is executing some other script. However, the function can be queued:</p>

<pre><code class="script"><span class="comment">// good onload function in frame</span>
window.<span class="m">parent</span>.<span class="func">setTimeout(window.top.notifyFrameLoaded, 0)</span></code></pre>

<p>The important part is using the <code class="script func">setTimeout</code> on the parent window to enter the function into the parent window event queue.</p>

<h2>Advice on Timing</h2>

<ul>
<li>Don&#39;t have long-running scripts.</li>
<li>Don&#39;t use synchronous <code>XMLHttpRequest</code>s.</li>
<li>Don&#39;t let scripts initiated from different frames manipulate the same global state.</li>
<li>Don&#39;t use alert boxes for debugging, as they might change the logic of the program completely.</li>
</ul>
  
