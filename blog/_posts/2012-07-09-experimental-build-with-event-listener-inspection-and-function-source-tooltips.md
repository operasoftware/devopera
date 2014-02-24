---
title: Experimental build with event listener inspection and function source tooltips
authors:
- aleto
- dragonfly
layout: article
---
<p>Our latest experimental build introduces the ability to inspect JavaScript event listeners from inside the DOM view.</p>

<p class="note">As these new features rely on functionality that&#39;s only recently been added to our browser core, they&#39;re currently only available if you&#39;re running <a href="http://www.opera.com/browser/next/">Opera Next</a>.</p>

<img src="/blog/experimental-build-with-event-listener-inspection-and-function-source-tooltips/ev-listener-overview-2.png" alt="Document view, showing the DOM tree - elements that have attached events are shown with a new &#39;ev&#39; icon." />

<p>Elements with an attached event listener are presented with a new icon in the Document view. Hovering the icon opens an overlay with the list of listeners.</p>

<img src="/blog/experimental-build-with-event-listener-inspection-and-function-source-tooltips/0ev-listener-tooltip-1.png" alt="Hovering the &#39;ev&#39; icon on an element shows the event listener overlay." />

<p>Each listener has an entry showing the event type as title. The next line shows if it listens in the bubbling or the capturing phase. If the listener was registered with <code>addEventListener</code> or set as &#39;<code>on</code>&#39;-event-type its type is &#39;<em>event target listener</em>&#39;. Listeners set as markup attributes are &#39;<em>attribute listener</em>&#39;. Hovering that type shows the according listener callback in a function source tooltip.</p>

<img src="/blog/experimental-build-with-event-listener-inspection-and-function-source-tooltips/ev-listener-fn-source-tooltip-2.png" alt="" />

<p>Breakpoints can be set directly in that tooltip. Clicking the title of the function source tooltip switches to the Scripts tab and highlights the corresponding function in the source file.</p>

<p>The last line of a listener entry in the overlay shows where the listener was registered. Again, clicking this line switches to the Scripts tab and highlights the corresponding line in the source file.</p>

<p>To complement the inspection functionality in the Document view, there is also a new Listeners side panel, which gives an overview of all listeners that are currently active, ordered by event type. Each of the event types type can be expanded to show all nodes with an according listener.</p>

<img src="/blog/experimental-build-with-event-listener-inspection-and-function-source-tooltips/ev-listener-view-1.png" alt="The new Listeners side panel, part of the Document panel." />

<p>The panel provides a static snapshot of registered event listeners – but as event listeners can be programmatically added, modified or removed frequently, the Listeners panel also features an <em>update</em> button which will refresh the snapshot view.</p>

<p>As a bonus, the new function source tooltips used in the event listener overlay above have also been added to other parts of the JavaScript source view. This can be handy to set breakpoints directly in a callback.</p>

<img src="/blog/experimental-build-with-event-listener-inspection-and-function-source-tooltips/ev-source-view-tooltip-1.png" alt="A function source tooltip overlay, shown over a function inspection overlay." />

<p>We hope that these new features will be a useful addition for JavaScript developers. As always, we value your feedback and suggestions.</p>
