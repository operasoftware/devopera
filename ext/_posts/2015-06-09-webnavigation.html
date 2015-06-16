---
 
title: Using webNavigation
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/webNavigation.html
---


<h2 id="manifest">Manifest</h2>
<p>
All <code>chrome.webNavigation</code> methods and events require you to declare
the "webNavigation" permission in the <a href="manifest.html">extension
manifest</a>.
For example:
</p>

<pre class="prettyprint" data-filename="manifest.json">
{
  "name": "My extension",
  ...
  <b>"permissions": [
    "webNavigation"
  ]</b>,
  ...
}
</pre>

<h2 id="event_order">Event order</h2>
<p>
For a navigation that is successfully completed, events are fired in the
following order:
<pre class="prettyprint">
onBeforeNavigate -&gt; onCommitted -&gt; onDOMContentLoaded -&gt; onCompleted
</pre>
</p>
<p>
Any error that occurs during the process results in an
<code>onErrorOccurred</code> event. For a specific navigation, there are no
further events fired after <code>onErrorOccurred</code>.
</p>
<p>
If a navigating frame contains subframes, its <code>onCommitted</code> is fired
before any of its children's <code>onBeforeNavigate</code>; while
<code>onCompleted</code> is fired after all of its children's
<code>onCompleted</code>.
</p>
<p>
If the reference fragment of a frame is changed, a
<code>onReferenceFragmentUpdated</code> event is fired. This event can fire any
time after <code>onDOMContentLoaded</code>, even after
<code>onCompleted</code>.
</p>
<p>
If the history API is used to modify the state of a frame (e.g. using
<code>history.pushState()</code>, a <code>onHistoryStateUpdated</code> event is
fired. This event can fire any time after <code>onDOMContentLoaded</code>.
</p>

<h2 id="relation_to_webRequest">Relation to webRequest events</h2>
<p>
There is no defined ordering between events of the <a
href="https://developer.chrome.com/extensions/webRequest">webRequest API</a> and the events of the
<a href="https://developer.chrome.com/extensions/webNavigation">webNavigation API</a>. It is possible that webRequest events are still received for
frames that already started a new navigation, or that a navigation only
proceeds after the network resources are already fully loaded.
</p>
<p>
In general, the webNavigation events are closely related to the navigation
state that is displayed in the UI, while the webRequest events correspond to
the state of the network stack which is generally opaque to the user.
</p>

<h2 id="timestamps">A note about timestamps</h2>
<p>
It's important to note that some technical oddities in the OS's handling
of distinct Opera processes can cause the clock to be skewed between the
browser itself and extension processes. That means that WebNavigation's events'
<code>timeStamp</code> property is only guaranteed to be <i>internally</i>
consistent. Comparing one event to another event will give you the correct
offset between them, but comparing them to the current time inside the
extension (via <code>(new Date()).getTime()</code>, for instance) might give
unexpected results.
</p>

<h2 id="frame_ids">A note about frame and process IDs</h2>
<p>
Due to the multi-process nature of Opera, a tab might use different processes
to render the source and destination of a web page. Therefore, if a navigation
takes place in a new process, you might receive events both from the new and
the old page until the new navigation is committed (i.e. the
<code>onCommitted</code> event is send for the new main frame). Because frame
IDs are only unique for a given process, the webNavigation events include a
process ID, so you can still determine which frame a navigation came from.
</p>
<p>
Also note that during a provisional load the process might be switched several
times. This happens when the load is redirected to a different site. In this
case, you will receive repeated <code>onBeforeNavigate</code> and
<code>onErrorOccurred</code> events, until you receive the final
<code>onCommitted</code> event.
</p>

<h2 id="transition_types">Transition types and qualifiers</h2>
<p>
The webNavigation API's <code>onCommitted</code> event has a
<code>transitionType</code> and a <code>transitionQualifiers</code> property.
The <em>transition type</em> is the same as used in the <a
href="tut_hist.html#transition_types">history API</a> describing how the browser
navigated to this particular URL. In addition, several <em>transition
qualifiers</em> can be returned that further define the navigation.
</p>
<p>
The following transition qualifiers exist:
</p>
<table>
<tr>
  <th> Transition qualifier </th> <th> Description </th>
</tr>
<tr>
  <td>"client_redirect"</td>
  <td>
    One or more redirects caused by JavaScript or meta refresh tags on the page
    happened during the navigation.
  </td>
</tr>
<tr>
  <td>"server_redirect"</td>
  <td>
    One or more redirects caused by HTTP headers sent from the server happened
    during the navigation.
  </td>
</tr>
<tr>
  <td>"forward_back"</td>
  <td>
    The user used the Forward or Back button to initiate the navigation.
  </td>
</tr>
<tr>
  <td>"from_address_bar"</td>
  <td>
    The user initiated the navigation from the address bar.
  </td>
</tr>
</table>
