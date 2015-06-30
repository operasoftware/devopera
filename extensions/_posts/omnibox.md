---

title: Creating address bar extensions
author: shwetankdixit
copyright: opera-ccby
---

## Introduction

Address bar (or "omnibox") extensions are extensions which kick in when you enter a keyword as the first word in the address bar. When you enter that word, then whatever text you enter next will interact solely with that extension. You can then take that text and give the user suggestions in the address bar, or you can process that text and send the user to a specified page. There are quite a few interesting use cases that open up with this functionality.

<img src="/static/images/omnibox1.png" alt="Address bar extension" class="img-polaroid">

## Manifest specifications

One of the most important things to understand for address bar extensions is the manifest. An example of an address bar extension's manifest file is something like this:

<pre class="prettyprint">{
	"manifest_version": 2,

	 "name": "Opera Extensions Docs Search",
	 "version": "1.0",
	 "omnibox": { "keyword" : "extquery" },
	 "icons": {
		 "16": "icon_16.png"
	 },
	 "background": {
		 "persistent": false,
		 "scripts": ["background.js"]
	 }
 }
 </pre>

 As you can note from the example, you need to use the `omnibox` field. Inside this field, you need to define your keyword inside the `keyword` subfield. In our case, we are using the keyword *extdocs* — so whenever the user enters *extdocs*, the extension kicks in, ready to process whatever text comes next.

In the `icons` field, we specify what icon comes up in the address bar when your keyword is entered. This needs to be a 16x16 icon.


## Using the chrome.omnibox API
We have used the manifest to define the keyword we'll use. Great! Now let's go on and actually process the text to do something useful. One of the most common use cases for the [chrome.omnibox API](https://developer.chrome.com/extensions/omnibox) would be to take the text and search a certain website with it.

So let's make an extension which takes the text and searches this site for content.   In the API, we have access to event handlers dealing with various stages of the user entering content (for example, when the user has started entering text, when the user has finished typing, when the text has changed, when the text entered is accepted, etc.)

For our example, we will use the [`onInputEntered`](https://developer.chrome.com/extensions/omnibox#event-onInputEntered) event handler to take the user's input and take the user to the search page. The background page for our extensions would like so:

<pre class="prettyprint">chrome.omnibox.onInputEntered.addListener(
	function(text) {
	var qString = &quot;http://dev.opera.com/extension-docs/search.html?q=&quot;+encodeURIComponent(text);
		chrome.tabs.query({'currentWindow': true, 'active': true}, function(tab) {
			chrome.tabs.update(tab[0].id, {&quot;url&quot;: qString });
		});
});
	</pre>

The above code will listen to the user's input and when he hits enter, then it will take the input and redirect to the Opera extensions documentation page with what the user entered as the search query.

Feel free to [download this extension](samples/Omnibox.nex) and try it out yourself.

## Suggestions in the address bar
The API also enables developers to provide suggestions to the user in the address bar as they type via the [`onInputChanged`](https://developer.chrome.com/extensions/omnibox#event-onInputChanged) event handler. This event throws back the text which has been typed until now, as well as a function in which we can put our search suggestion as part of an array of [`suggestionResult`](https://developer.chrome.com/extensions/omnibox#type-SuggestResult) objects. Let's see how it's done.


<pre class="prettyprint">chrome.omnibox.onInputChanged.addListener(
	function(text, suggest) {

		var suggestionsList = [
			{&quot;content&quot;: &quot;http://dev.opera.com/extension-docs/search.html?q=&quot;+encodeURIComponent(text), &quot;description&quot;: &quot;Search Opera Extensions Documentation&quot;},
			{&quot;content&quot;: &quot;http://stackoverflow.com/search?q=&quot;+encodeURIComponent(&quot;[opera-extension] &quot;+text), &quot;description&quot;: &quot;Do a Stack Overflow Search&quot;},
			{&quot;content&quot;: &quot;https://www.google.com/search?q=&quot;+encodeURIComponent(text), &quot;description&quot;: &quot;Search on Google&quot;}
		];

		chrome.omnibox.setDefaultSuggestion({&quot;description&quot;:suggestionsList[0].description});
	suggestionsList.shift(); /*First suggestion is already shown by default because we used setDefaultSuggestion, so we delete it from the array*/
		suggest(suggestionsList);
});
	</pre>

One thing to keep in mind is that when the user selects the default suggestion, it will by default not have a URL attached to it. So we will process the entered text at the point when the user has finally hit *enter* in the address bar, and see if it's a proper URL or not. If not, we will convert it to a proper URL, and point the user to the appropriate page, like so:

<pre class="prettyprint">
chrome.omnibox.onInputEntered.addListener(
	function(text) {

	if (text.substr(0, 4) != &#39;http&#39;){ /*User selects the suggested suggestion, which will result in the text not being converted to a URL (thus not having an &#39;http&#39; at the beginning of the string), so we will have to append a URL to it again.*/
	var qString = &quot;http://dev.opera.com/extension-docs/search.html?q=&quot;+encodeURIComponent(text);

	}  else {
		var qString = text;
	}

	chrome.tabs.query({&#39;currentWindow&#39;: true, &#39;active&#39;: true}, function(tab) {
		chrome.tabs.update(tab[0].id, {&quot;url&quot;: qString });
	});
});

</pre>

 You can [download the extension](samples/Omnibox2.nex) — the keyword for this extension is *extdocs*, so type that followed by your search query — and see that the default suggestion is to search on the Opera Extensions documentation site . The next option is a search on StackOverflow with the tag `[opera-extension]`, followed by a Google search. Keep in mind that all other options apart from the default one are listed in alphabetical order of their descriptions.

You can go further and have suggestions in the address bar by doing an Ajax request to your web service, with the suggestions executed in a similar manner as the one shown above.

Making an address bar extension is pretty easy, so [check out the API](https://developer.chrome.com/extensions/omnibox) and get cracking!



