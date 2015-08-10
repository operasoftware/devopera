---
title: Using `webNavigation`
source: https://developer.chrome.com/extensions/webNavigation
license: cc-by-3.0
---

## Manifest

All `chrome.webNavigation` methods and events require you to declare the `webNavigation` permission in the [extension manifest](/extensions/manifest/). For example:

	{
		"name": "My Extension",
		"permissions": [
			"webNavigation"
		]
	}

## Event order

For a navigation that is successfully completed, events are fired in the following order:

1. `onBeforeNavigate`
2. `onCommitted`
3. `onDOMContentLoaded`
4. `onCompleted`

Any error that occurs during the process results in an `onErrorOccurred` event. For a specific navigation, there are no further events fired after `onErrorOccurred`.

If a navigating frame contains subframes, its `onCommitted` is fired before any of its children's `onBeforeNavigate`; while `onCompleted` is fired after all of its children's `onCompleted`.

If the reference fragment of a frame is changed, a `onReferenceFragmentUpdated` event is fired. This event can fire any time after `onDOMContentLoaded`, even after `onCompleted`.

If the history API is used to modify the state of a frame (e.g. using `history.pushState()`, a `onHistoryStateUpdated` event is fired. This event can fire any time after `onDOMContentLoaded`.

## Relation to `webRequest` events

There is no defined ordering between events of the [`webRequest` API](https://developer.chrome.com/extensions/webRequest) and the events of the [`webNavigation` API](https://developer.chrome.com/extensions/webNavigation). It is possible that `webRequest` events are still received for frames that already started a new navigation, or that a navigation only proceeds after the network resources are already fully loaded.

In general, the `webNavigation` events are closely related to the navigation state that is displayed in the UI, while the webRequest events correspond to the state of the network stack which is generally opaque to the user.

## A note about timestamps

It’s important to note that some technical oddities in the OS's handling of distinct Opera processes can cause the clock to be skewed between the browser itself and extension processes. That means that `WebNavigation`’s events’ `timeStamp` property is only guaranteed to be _internally_ consistent. Comparing one event to another event will give you the correct offset between them, but comparing them to the current time inside the extension (via `(new Date()).getTime()`, for instance) might give unexpected results.

## A note about frame and process IDs

Due to the multi-process nature of Opera, a tab might use different processes to render the source and destination of a web page. Therefore, if a navigation takes place in a new process, you might receive events both from the new and the old page until the new navigation is committed (i.e. the `onCommitted` event is send for the new main frame). Because frame IDs are only unique for a given process, the webNavigation events include a process ID, so you can still determine which frame a navigation came from.

Also note that during a provisional load the process might be switched several times. This happens when the load is redirected to a different site. In this case, you will receive repeated `onBeforeNavigate` and `onErrorOccurred` events, until you receive the final `onCommitted` event.

## Transition types and qualifiers

The `webNavigation` API’s `onCommitted` event has a `transitionType` and a `transitionQualifiers` property. The _transition type_ is the same as used in the [history API](/extensions/history/) describing how the browser navigated to this particular URL. In addition, several _transition qualifiers_ can be returned that further define the navigation.

The following transition qualifiers exist:

<figure block="figure">
<table>
<tr>
	<th>Transition qualifier</th>
	<th>Description</th>
</tr>
<tr>
	<td><code>client_redirect</code></td>
	<td>One or more redirects caused by JavaScript or meta refresh tags on the page happened during the navigation.</td>
</tr>
<tr>
	<td><code>server_redirect</code></td>
	<td>One or more redirects caused by HTTP headers sent from the server happened during the navigation.</td>
</tr>
<tr>
	<td><code>forward_back</code></td>
	<td>The user used the Forward or Back button to initiate the navigation.</td>
</tr>
<tr>
	<td><code>from_address_bar</code></td>
	<td>The user initiated the navigation from the address bar.</td>
</tr>
</table>
</figure>
