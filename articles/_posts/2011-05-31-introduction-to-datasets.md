---
title: An Introduction to Datasets
authors:
- divya-manian
intro: 'HTML5 includes a means to set custom attributes on elements using the `data-` prefix. Called “data attributes”, they can be scripted to define and store data as well as increase options for attribute selection when styling with CSS.'
tags:
- dataset
- html5
- open-web
license: cc-by-3.0
---

## Introduction

HTML5 includes a means to set custom attributes on elements using the `data-` prefix. Called _data attributes_, they can be scripted to define and store data as well as increase options for attribute selection when styling with CSS. You can use as many data attributes as you require, providing greater control when manipulating and rendering data. For a first look, here’s an example that [generates annotated music sheets][1].

[1]: https://audiofile.cc/

## Dataset basics

Here is an example of data attributes on an element:

	<div id="day2-meal-expense"
		 data-drink="coffee"
		 data-food="sushi"
		 data-meal="lunch">
			$20.12
	</div>

To get the value of of an attribute, you can use the dataset object as follows:

	var expenseday2 = document.getElementById('day2-meal-expense');
	var typeOfDrink = expenseday2.dataset.drink;

Note that hyphenated names become camel-cased. For example, if there was an attribute `data-meal-time` in the above markup, then its value would be retrieved by using `expenseday2.dataset.mealTime``.`

[Data attributes have been supported in almost all browsers][2] for some time, but support for dataset has only recently been added. In Opera 11.10+ you can use `dataset` to access your custom data attributes via JavaScript. It is also supported in Chrome 9+, Safari 6+ (upcoming) and Firefox 6+ (upcoming).

[2]: http://caniuse.com/#feat=dataset

## Why do we need `dataset`?

The traditional way of accessing values of an attribute is as follows below:

	var typeOfDrink = document.getElementById('day2-meal-expense').getAttribute('data-drink');

Now, trying to access more than a few custom attributes could easily get messy:

	var attrs = expenseday2.attributes,
		expense = {}, i, j;
	for (i = 0, j = attrs.length; i < j; i++) {
		if(attrs[i].name.substring(0, 5) == 'data-') {
		expense[attrs[i].name.substring(5)] = attrs[i].value;
		}
	}

With the `dataset` attribute, you do not need to use any kind of looping to get the values you want to manipulate. You can use it immediately:

	expense = document.getElementById('day2-meal-expense').dataset;

`dataset` is not your typical object in JavaScript; it is a [`DOMStringMap` object][3]. `DOMStringMap` is a new interface that is available in HTML5 for a set of name-value pairs.

[3]: http://www.w3.org/TR/2011/WD-html5-20110525/common-dom-interfaces.html#domstringmap-0

## Manipulating a dataset

You could manipulate these name-value pairs like so:

	chartInput = [];
	for (var item in expense) {
		chartInput.push(expense[item]);
	}

If you want to delete a data attribute, you can do that with:

	delete expenseday2.dataset.meal;

And to add an attribute to an element:

	expenseday2.dataset.dessert = 'icecream';

## How fast is it compared to `getAttribute`?

Using `dataset` to manipulate data is slightly slower than doing so with `getAttribute`, although if you are manipulating only a handful of data-attributes, the impact is not that [significant][4].

[4]: http://jsperf.com/dataset-vs-attributes-loop/3

Then again, dataset is much less of a headache to manipulate and use compared to other forms of manipulating attributes, and much more readable.

## Where can I use it?

Every time you use a custom data attribute, using `dataset` to access the name-value pair is a good way forward. You can also feature-detect for dataset support and use dataset when supported, like this:

	if(expenseday2.dataset) {
		expenseday2.dataset.dessert = 'icecream';
	} else {
		expenseday2.setAttribute('data-dessert', 'icecream');
	}

Note: If you have more intensive applications that require frequent updating of data attributes, I would recommend you use a JavaScript object to maintain data rather than manipulating the data attributes every time.

## Data Attributes in CSS

Using data attributes is also pretty handy if you want to selectively apply styles based on the attribute value. For example, if you want to style each kind of food-related expense based on the kind of meal that was being had, you could do this:

	div[data-meal="lunch"] {
		background-image: url('lunch.png');
	}

## Using Data Attributes to create charts

Now I’d like to present to you [an example of using data attributes to render charts][5]. In this example, data are added to the elements using the `dataset`, which are then rendered via [generated content][6].

[5]: /articles/introduction-to-datasets/demo.html
[6]: /articles/css-generated-content-techniques/

## In summary

`dataset` is an easy way to access data attributes on an element. Support is slowly increasing, with [Firefox nightlies also supporting the dataset attribute][7]. Using this attribute does not improve code performance, but it does make it shorter, easier and more readable.

[7]: https://bugzilla.mozilla.org/show_bug.cgi?id=560112

All snippets that I used in this article are available in this [fiddle][8] (or [as a gist][9]) for you to play with. The Charts demo is also up on the [Opera Github repository][10] for you to play with.

[8]: http://jsfiddle.net/nimbu/tHPtz/
[9]: https://gist.github.com/90aa639a59b3dd3ab3a5
[10]: /articles/introduction-to-datasets/demo.html
