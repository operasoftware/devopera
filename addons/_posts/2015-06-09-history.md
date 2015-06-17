---

title: Working with the browser history
copyright: opera-google-ccby
author: shwetankdixit
originalsource: http://developer.chrome.com/extensions/history.html
---

## Introduction
The History API allows an extension to access and edit the user's browsing history. This can come in handy in some situations, for example analyzing which are the most visited pages by the user, maintaining a list of closed tabs to re-open later, etc.

The first thing to note is to declare it in the *permissions* field in the mainifest file, like so:

<pre class="prettyprint">...
	"permissions": [
		"history"
	],
...
</pre>

## Transition Types

*Transition Type* is a term used to describe the way in which a particular URL has been navigated to. For example, a transition type of "link" will refer to the fact that the URL was navigated through by clicking on a hyperlink in a web page. The transition type of "typed" would mean that the user went to that page by explicitly typing that URL in the address bar, for instance. The full list of transition types are below:

<table>
<tr>
	<th> Transition type </th> <th> Description </th>
</tr>
<tr id="tt_link">
	<td>"link"</td>
	<td>
		The user got to this page by clicking a link on another page.
	</td>
</tr>
<tr id="tt_typed">
	<td>"typed"</td>
	<td>
		The user got this page by typing the URL in the address bar.
		Also used for other explicit navigation actions.
		See also <a href="#tt_generated">generated</a>,
		which is used for cases where the user selected a choice
		that didn't look at all like a URL.
	</td>
</tr>
<tr id="tt_auto_bookmark">
	<td>"auto_bookmark"</td>
	<td>
		The user got to this page through a suggestion in the UI &mdash;
		for example, through a menu item.
	</td>
</tr>
<tr id="tt_auto_subframe">
	<td>"auto_subframe"</td>
	<td>
		Subframe navigation.
		This is any content that is automatically
		loaded in a non-top-level frame.
		For example, if a page consists of
		several frames containing ads,
		those ad URLs have this transition type.
		The user may not even realize the content in these pages
		is a separate frame, and so may not care about the URL
		(see also <a href="#tt_manual_subframe">manual_subframe</a>).
	</td>
</tr>
<tr id="tt_manual_subframe">
	<td>"manual_subframe"</td>
	<td>
		For subframe navigations that are explicitly requested by the user
		and generate new navigation entries in the back/forward list.
		An explicitly requested frame is probably more important than
		an automatically loaded frame
		because the user probably cares about the fact that
		the requested frame was loaded.
	</td>
</tr>
<tr id="tt_generated">
	<td>"generated"</td>
	<td>
		The user got to this page by typing in the address bar
		and selecting an entry that did not look like a URL.
		For example, a match might have the URL of a Google search result page,
		but it might appear to the user as "Search Google for ...".
		These are not quite the same as <a href="#tt_typed">typed</a> navigations
		because the user didn't type or see the destination URL.
		See also <a href="#tt_keyword">keyword</a>.
	</td>
</tr>
<tr id="tt_auto_toplevel">
	<td>"auto_toplevel"</td>
	<td>
		The page was specified in the command line or is the start page.
	</td>
</tr>
<tr id="tt_form_submit">
	<td>"form_submit"</td>
	<td>
		The user filled out values in a form and submitted it.
		Note that in some situations &mdash;
		such as when a form uses script to submit contents &mdash;
		submitting a form does not result in this transition type.
	</td>
</tr>
<tr id="tt_reload">
	<td>"reload"</td>
	<td>
		The user reloaded the page,
		either by clicking the reload button
		or by pressing Enter in the address bar.
		Session restore and Reopen closed tab use this transition type, too.
	</td>
</tr>
<tr id="tt_keyword">
	<td>"keyword"</td>
	<td>
		The URL was generated from a replaceable keyword
		other than the default search provider.
		See also
		<a href="#tt_keyword_generated">keyword_generated</a>.
	</td>
</tr>
<tr id="tt_keyword_generated">
	<td>"keyword_generated"</td>
	<td>
		Corresponds to a visit generated for a keyword.
		See also <a href="#tt_keyword">keyword</a>.
	</td>
</tr>
</table>


Each and every visit to any URL will be recorded in the history as a [`VisitItem`](https://developer.chrome.com/extensions/history#type-VisitItem). This item, besides holding detailed information about every visit, such as the URL visited, the time at which the visit occurred etc, will also hold information regarding the *transition type*, that is, how the user reached the webpage. Thus each and every visit to a web page will have a *transition type* associated with it.


## Accessing the history behind the currently active tab

Let's say you wanted to know how many times the URL in the currently active tab has been accessed. We can take a look at the methods in the History API and build something to find it out.

In our example, we'll create a *browser action*, which when clicked, will update its badge with the number of times it has been accessed by the user. Let's see the code for it, which is in the background script.

<pre class="prettyprint">var count = 0;

chrome.browserAction.onClicked.addListener(function (tab){
	chrome.history.getVisits({"url":tab.url}, function (visitItem) {
		count = visitItem.length;
		chrome.browserAction.setBadgeBackgroundColor({color: "#ff0000"});
		chrome.browserAction.setBadgeText({text: ""+count});
		console.log("The user has visited "+url+" "+count+" times.");
	});

});</pre>

In the above piece of code, we are getting the URL of the currently active tab. Then we pass the function [`getVisits()`](https://developer.chrome.com/extensions/history#method-getVisits). This will return a callback function which will return an array of [`visitItem`](https://developer.chrome.com/extensions/history#type-VisitItem) objects for that particular URL (A `visitItem` object is generated any time a URL is visited). We can count these objects to get a number of the times the user visited that URL, and then update the badge with that number.

[Download the extension](samples/HistoryAPI-1.nex) for the example above and install it to see it work.

## Removing URLs from the history

One of the most common use cases regarding the browser history, is to remove particular URLs from the history. We can delete a URL from the browser history by using the [`deleteUrl()`](https://developer.chrome.com/extensions/history#method-deleteUrl) method. For example, the following example will remove the URL of the currently active tab from the browser history.

<pre class="prettyprint">chrome.browserAction.onClicked.addListener(function (tab){
	chrome.history.deleteUrl({"url":tab.url});
});</pre>

You can [download the extension](samples/HistoryAPI-2.nex) for this example and see it in action. You can go further and create a list of URLs and then remove them by looping over that list and calling the `deleteUrl()` method for each of those URLs.

If you want to remove URLs within a specified time range, then you can use the [`deleteRange()`](https://developer.chrome.com/extensions/history#method-deleteRange) method, and finally, if you want to remove all the URLs in history, you can simply call the [`deleteAll()`](https://developer.chrome.com/extensions/history#method-deleteAll) method.

You can take a further look at the [History API docs](https://developer.chrome.com/extensions/history) for more information regarding the objects, methods and events associated with it.
