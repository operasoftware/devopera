---
title: Microdata & the microdata DOM API
authors:
- chris-mills
intro: 'One of the main problems HTML5 set out to solve was consistency, and therefore machine-readability, of markup. This article explains how the microdata DOM API helps with that.'
tags:
- api
- dom
- html
- html5
- microdata
license: cc-by-nc-sa-2.5
---

## Introduction

One of the main problems HTML5 set out to solve was consistency (and therefore machine-readability) of markup, evidenced by the introduction of standard semantic elements such as `<header>`, `<nav>` and `<figure>`. This is all well and good, but there are times when you’ll want to add specific machine-readable data attributes to pieces of content so that they can be read consistently by some kind of processing script, even if the exact markup used differs slightly between different content. This need has already been satisfied to a certain degree, by the cleverly simple and backwards compatible [Microformats](http://microformats.org/), and the rather more esoteric [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/).

But it is perhaps not a surprise that a tailored solution has been added to the HTML5 spec in the form of [microdata](https://html.spec.whatwg.org/multipage/microdata.html), which includes a set of attributes that can be added to any element you wish, and an associated DOM API for processing/aggregating the microdata on a given page.

Microdata tries to improve on what we’ve already had in the past: providing a built-in mechanism that is as easy to grasp as microformats, but also allows data processing without needing to build your own parser. And you can of course build your own microdata processing functionality for non-supporting browsers using JavaScript, if needs be. In this article we’ll take a casual stroll through the microdata HTML attribute and DOM API syntax.

## HTML syntax

Microdata consists of a series of _items_, each of which has data attributed to it via a series of properties, which consist of name-value pairs. So, in the true fashion of a vain web geek, let’s define ourselves in microdata! You can write your own example, following my lead.

Note: You can check whether your microdata syntax is correct by running it through the experimental [HTML5 validator](https://html5.validator.nu/). You should also open up [my live microdata example]({{ page.id }}/microdata_example.html) and refer to it as you go through the text below.

First of all, we can define any suitable element as an item container, using the `itemscope` attribute:

	<article itemscope>
	</article>

Obviously, you should choose an element that contains the rest of your data, but this does leave you with a lot of choice. In this case, I’ll turn this into a biography card: our first property will be our name, and we’ll add it like this, using the `itemprop` attribute:

	<article itemscope>
		<h2 itemprop="name">Chris Mills</h2>
	</article>

So the `itemprop` attribute is given to the element that contains the data, and its value is the property name. The content inside this element is the property value. Let’s add a few more properties to make sure we’ve got the idea:

	<article itemscope>
		<h2 itemprop="name">Chris Mills</h2>
		<ul>
			<li>Nationality: <span itemprop="nationality">British</span></li>
			<li>Age: <span itemprop="age">33</span></li>
			<li>Hair colour: <span itemprop="colour">Brown</span></li>
		</ul>
	</article>

In some cases the property value is not the text content of the element, but rather is inside an attribute, for example:

* A URL inside a media element’s `src` attribute.
* A URL inside an `<a>` element’s `href` attribute.
* A time/date inside a `datetime` attribute.

When the property value is a URL, it is expressed using an element that links to or embeds an external resource, such as an `<a>` element and its `href`. When the property value is a date/time/both, it is expressed using the `<time>` element and its `datetime` attribute. The `itemprop` attribute is added just the same, but the property value will be the attribute value, rather than the element content.

Let’s add a couple of examples:

	<article itemscope>
		<h2 itemprop="name">Chris Mills</h2>
		<p><img itemprop="image" src="Chris-Mills.png" alt="Photo of Chris Mills - this is me"></p>
		<ul>
			<li>Nationality: <span itemprop="nationality">British</span></li>
			<li>Age: <span itemprop="age">33</span></li>
			<li>Date of birth: <time itemprop="birthday" datetime="1978-06-27">June 27th 1978</time></li>
			<li>Hair colour: <span itemprop="colour">Brown</span></li>
		</ul>
	</article>

Note: As of the time of publication of this article, there is talk in the W3C about [replacing the `<time>` element with `<data>`](http://www.w3.org/Bugs/Public/show_bug.cgi?id=13240), so this example may have to change.

### Nesting microdata items

You can also quite happily nest microdata items inside one another. The top level microdata item is given the `itemscope` attribute as normal, and then any nested microdata items are also given an `itemscope` attribute. Let’s add some information about my band into the biography card:

	<article itemscope itemtype="http://example.org/biography">
		...
		<li>
			<div itemscope itemprop="band">
				<h3>My band</h3>
				<ul>
					<li>Name: <span itemprop="name">Conquest of Steel</span></li>
					<li>Band: <span itemprop="style">Heavy metal</span></li>
					<li>Members: <span itemprop="size">5</span></li>
				</ul>
			</div>
		</li>
	 ...
	</article>

### Several properties, same name; same property, several names

It is possible for you to include several properties with the same name, for example:

	<li>
		Members:
		<ul>
			<li itemprop="member">Claymore Clark</li>
			<li itemprop="member">DD Danger</li>
			<li itemprop="member">Dan Durrant</li>
			<li itemprop="member">Chris Mills</li>
			<li itemprop="member">Vic Victory</li>
		</ul>
	</li>

This would result in the item having five properties, all with the name `member`, each having one of the different values.

Conversely, you can also put multiple properties into the same element, thus giving them both the same value:

	<li>Band: <span itemprop="style favouritemusic">Heavy metal</span></li>

### Referencing properties outside the `itemscope`

There may be occasions where you want your microdata item to include properties that aren’t actually within the same parent element. You can do so by referencing the ID(s) of the external properties inside an `itemref` attribute. Take the following example, in which I’ve moved my band members outside into a separate bit of markup:

	<article>
		...
		<ul>
			<li>
				<div itemscope itemprop="band" itemref="members">
					<h3>My band</h3>
					<ul>
						<li>Name: <span itemprop="name">Conquest of Steel</span></li>
						<li>Band: <span itemprop="style">Heavy metal</span></li>
						<li>Members: <span itemprop="bandsize">5</span></li>
					</ul>
				</div>
			</li>
		</ul>
		...
	</article>
	<ul id="members">
		<li itemprop="member">Claymore Clark</li>
		<li itemprop="member">DD Danger</li>
		<li itemprop="member">Dan Durrant</li>
		<li itemprop="member">Chris Mills</li>
		<li itemprop="member">Vic Victory</li>
	</ul>

In this instance, the `member` properties are included inside the item by referencing the ID of the their surrounding element inside the `itemref` attribute.

Note that you reference multiple properties in the `itemref` attribute by including them in a space-separated list, for example `itemref="members instruments gigdates"`.

### Creating a reusable vocabulary for your items

Ok, so what you have seen so far is all well and good in isolation, but how do you actually define a vocabulary that can be reused in cooperation with other web developers? The answer is that you give each item a type, using the `itemtype` attribute. The value of this attribute takes the form of a URL, which may or may not exist. It’s helpful if you point the URL to a real page on the Web that informs other users of the vocabulary and its properties, but you don’t have to.

Going back to our example:

	<article itemscope itemtype="http://example.org/biography">
		...
		<div itemscope itemprop="band" itemtype="http://example.org/band" itemref="members">
			...
		</div>
		...
	</article>

An item can only have one type, and the type gives the context for the properties, thus defining a vocabulary. So in our example, the item of type `http://example.org/biography` has four properties — `name`, `style`, `bandsize` and `member`. This helps to avoid confusion with similarly-named properties. You might also have microdata for marking up information about a jury in a court of law, also with `itemprop="member"`, but this would be differentiated by giving the jury microdata a different `itemtype`, such as `itemtype="http://example.org/jury"`, or something else of your choosing.

You should think carefully about what vocabulary to use for your purposes, to make sure that it is robust, flexible and extensible: for more information and tips, read the spec section entitled [Selecting names when defining vocabularies](https://html.spec.whatwg.org/multipage/microdata.html#selecting-names-when-defining-vocabularies). You should also look around on the Web to see if anyone has already written a suitable vocabulary for your purposes. See the spec section [microdata vocabularies](https://html.spec.whatwg.org/multipage/microdata.html#mdvocabs) for details of some existing vocabularies ported over from microformats such as vCard and vEvent.

### Assigning a global identifier to an item

Some items are already identified by an existing global identifier convention, such as an [ISBN](http://en.wikipedia.org/wiki/Isbn) for a book, or a [UPC](http://en.wikipedia.org/wiki/Universal_Product_Code) for a product in a shop. Some microdata vocabularies support such global identifiers (you have to find this out yourself, which is why we suggest that if you write your own vocabulary you document it on the URL you use for the `itemtype`). If you're using such an indentifier, you express it as a URL in an `itemid` attribute on the same element as the `itemscope` and `itemtype` attributes. A crawler or search engine that understands such things (we know of none that do — yet) will then know that your content is about the same ISBN/ UPC as someone else's content with that same `itemid`. They can then seamlessly mash that data up until the web becomes sentient and the machines rise up.

For example, the following would work, provided the `http://example.com/book` vocabulary has explicitly opted into using the ISBN identifier (more details on this to follow, at a later date):</p>

	<article itemscope
	    itemtype="http://example.com/book"
	    itemid="urn:isbn:978-0321703521">
		<h2 itemprop="title">InterACT with web standards</h2>
		<p>Authors:</p>
		<ul>
			<li itemprop="author">Leslie Jensen-Inman</li>
			<li itemprop="author">Chris Mills</li>
			<li itemprop="author">Glenda Sims</li>
			<li itemprop="author">Aarron Walter</li>
			...
		</ul>
	</article>

## The microdata DOM API

Microdata becomes even more helpful when you start using the associated DOM API to manipulate items and properties on a page programmatically, perhaps to present the information in a searchable/filterable manner, or deliver it to another application somewhere else.

The API is very simple — you use the `document.getItems()` method to grab a nodelist containing the microdata items on a page. If you leave the arguments blank, you’ll just grab all items; or you can specify a specific `itemtype` URL as an argument to just grab items of that type. For example:

	var biography = document.getItems("http://example.org/biography");

Would grab our biography item and store it in a variable. Once you’ve grabbed your item(s), you can then access the different properties with the `properties` attribute:

	var biography = document.getItems("http://example.org/biography")[0];
	alert('Hi there ' + biography.properties['name'][0].textContent + '!');

And there’s not much more to it than that, really. You can find some more examples to study in the [Using the microdata DOM API](https://html.spec.whatwg.org/multipage/microdata.html#using-the-microdata-dom-api) section of the spec. Alternatively, [Philip Jägenstedt](http://blog.foolip.org/) has created a rather nifty [live microdata viewer](http://foolip.org/microdatajs/live/), which is rather useful for checking your code, and extracting values from it quickly in different formats, e.g. JSON.

You can [view my microdata example]({{ page.id }}/microdata_example.html) live. Also be sure to check out [Opera’s microdata tests](http://w3c-test.org/html/tests/submission/Opera/microdata/001.html) — these have only recently been submitted to the W3C test suite.

## Summary

And so ends our brief tour of microdata — I hope it helped you to understand this interesting new technology. Let us know what you think.
