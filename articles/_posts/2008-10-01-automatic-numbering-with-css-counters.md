---
title: Automatic Numbering With CSS Counters
authors:
- david-storey
intro: 'In this article David Storey looks at how to use CSS counters to provide robust sequential numbering for reoccuring HTML elements such as list items or paragraphs.'
tags:
- counters
- css
- ie
license: cc-by-nc-sa-2.5
layout: article
---

## Introduction

When writing documents, it is often useful to number sections and have a table of contents. You can number these by hand, directly in the markup, but this can be time consuming if the order changes and you have to edit all the numbers. CSS 2.1 gives us a automated way to generate numbers using CSS counters, and this article will walk you through how to use them. One word of note before we start is that CSS counters are not yet implemented in IE, although they are on the roadmap for IE8.

## Setting up the counter

The first step is to reset the counter to its base value and give it a name. This can be achieved with the `counter-reset` property, like the following example:

	body {
		counter-reset:section;
		}

This says that the counter will be reset to zero on the `<body>` element, and the counter identifier is section. This can be any name that you wish. The property can also take a optional second value that sets the starting value of the counter. If you’d like the counter to start counting from 5 upwards, you can specify it like so:

	body {
		counter-reset:section 4;
		}

The reason for setting it at 4 is that it always increments the counter just before it displays it. So if you start it at 4, at the moment before it displays it, the value increases to 5.

## Incrementing the counter

The next step is to specify when the counter increments and by what value. This can be specified with the `counter-increment` property. If no value is specified then a default increment of one is used:

	body {
		counter-reset: section 4;
		}
	h2 {
		counter-increment:section;
		}

If you’d like it to increment by two instead, you could specify it like so:

	h2 {
		counter-increment:section 2;
		}

The property also accepts `0` and negative values. If the counter is reset and incremented on the same element, then it is reset first then incremented by the specified value, therefore in the following example, the value will always be `2`:

	h2 {
		counter-reset:section;
		counter-increment:section;
		}

## Displaying the counter

Once the counter is set up, you need to display it on the page. This can be done with generated content using the `counter` function, and the `:before ` pseudo class:

	body {
		counter-reset:section 4;
		}
	h2 {
		counter-increment:section;
		}
	h2:before {
		counter(section) ' ';
		}

If you use a counter and increment it on the same element, like I have done in the examples above on the `<h2>` element, then it is incremented _before_ it is used.

View the [finished CSS counters example][1].

[1]: /articles/automatic-numbering-with-css-counters/example.html

## Using two or more counters

The `counter` function can used more than once on the `content` property. In the following example I use two counters to specify numbering for sections and sub-sections. The sub-section counter is reset for each new section.

	body {
		counter-reset:section;
		}
	h2 {
		counter-increment:section;
		counter-reset:sub-section;
		}
	h2:before,
	h3:before {
		content:counter(section) '.' counter(sub-section) ' ';
		}
	h3:before  {
		counter-increment:sub-section;
		}

## Using nested counters

As well as specifying each counter there is also a `counters()` function for specifying nested counters. This works fine for elements such as lists, where lists can be nested inside each other. It wouldn’t work for the example above as the sub-sections are not nested inside the main sections, but are rather sibling elements.

Nested counters can be specified as follows:

	ol {
		counter-reset:section;
		list-style-type:none;
		}
	ol li {
		counter-increment:section;
		}
	ol li:before {
		content:counters(section, '.') '. ';
		}

This will increment the counter for each list item, no matter how many nested lists are in the markup. It is important to reset the counter in the correct place, so that it resets to zero for each of the nested elements. In this case I reset the counter on the `<ol>` element. In the following example the first nested list will start at 1.1 and count up 1.2, 1.3 and so on. The second nested list would start at 1.1.1 and count up (1.1.2 and so on).

	<ol>
		<li>Item 1
		<ol>
			<li>Sub item 1
			<ol>
				<li>Sub-sub item 1</li>
				<li>Sub-sub item 2</li>
				<li>Sub-sub item 3</li>
			</ol>
			</li>
			<li>Sub item 2</li>
		 </ol>
		</li>
		<li>Item 2</li>
	</ol>

View an example using [nested counters][2].

[2]: /articles/automatic-numbering-with-css-counters/nested.html

## Styling counters

It is possible to style the counter by specifying it as the second argument in the `counter` or counters functions. The values are the same as for the `list-style-type` property. Although all the values are valid, for counters only a subset make sense, as values such as `disc`, `square` and `circle` stay the same no matter what the value of the counter is. The style can be specified as follows:

	ol li:before {
		counter(answer, lower-alpha) ') ';
		}

View an example using [the counter function to style counters][3]. The example also highlights using non-default counter reset and counter increment values.

[3]: /articles/automatic-numbering-with-css-counters/styling.html

## Using counters to replace the deprecated start attribute

If you have a need to use the `start` attribute on the `<ol>` element, to start a list from a value other than one, and you are using a strict doctype, you will notice that your markup will not validate. There are arguments over whether the `start` attribute is presentational or not, and indeed HTML5 has declared that it is no longer deprecated in the current working drafts (at the time of writing). Even if the `start` attribute is allowed again in HTML5, it doesn’t help with pages that need to be validated against the HTML4 doctype, and the HTML5 doctype is not ready to be used in the production sites yet as HTML5 support is still experimental. If you want your page to validate you either need to use a transitional doctype or use CSS counters.

If you would like to start a list at 4 instead of 1, you could specify the following CSS:

	body {
		counter-reset:list-order 3;
		}
	ol li {
		counter-increment:list-order;
		list-style-type:none;
		}
	ol li:before {
		content:counter(list-order) ' ';
		}

It is important to remove the list marker so that you do not get double numbers.

View an example using [CSS counters to replace the `start` attribute][4].

[4]: /articles/automatic-numbering-with-css-counters/start.html

## Conclusion

In this article I’ve covered how to specify and style counters in CSS, instead of adding them directly to the markup. This is useful for things such as numbering sections in articles and tables of contents. Using this approach saves on maintenance when reordering markup. It is also more flexible as the type of marker can be changed via CSS and will automatically change if you use JavaScript to reorder content on your page, eg if you have a script to sort a list or table. I also covered how you can use counters as a replacement for the deprecated `start` attribute on ordered lists. CSS counters are easy to use when you know how, but the main drawback is that they currently are not supported by IE.
