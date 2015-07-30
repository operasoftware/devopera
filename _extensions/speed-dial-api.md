---
title: Opera Speed Dial API
support: 15
license: cc-by-3.0
---

## Contents

1. [Types](#types)
	1. [`speeddial`](#type-speeddial)
2. [Methods](#methods)
	1. [`get`](#method-get)
	2. [`update`](#method-update)

<table>
<tr>
	<th>Description</th>
	<th>Permissions</th>
	<th>Learn more</th>
</tr>
<tr>
	<td>Use the <code>opr.speeddial</code> module to access a Speed Dial entry and update its properties</td>
	<td><code>speeddial</code></td>
	<td><a href="/extensions/speed-dial-manual/">Speed Dial Extensions</a></td>
</tr>
</table>

## Types {#types}

### `speeddial` {#type-speeddial}

	(object)

#### Properties

	title (string)

Title of the Speed Dial entry.

	url (string)

URL to which the Speed Dial entry points to.

## Methods {#methods}

### `get` {#method-get}

	opr.speeddial.get(function callback)

Retrieves details about the extension’s Speed Dial entry.

#### Parameters

	callback (function)

#### Callback

The _callback_ parameter would return an object with the speed dial’s title and URL.

For example:

	opr.speeddial.get(function(result) {
		console.log(
			'The URL is: ' + result.url +
			' and the title is ' + result.title
		);
	});

	SpeedDial (SpeedDial)

### `update` {#method-update}

	opr.speeddial.update(object SpeedDial)

Modifies the properties of the Speed Dial entry, namely its URL and Title.

#### Parameters

	SpeedDial (object)

	url (optional string)

The URL the Speed Dial entry points to.

	title (optional string)

The title of the Speed Dial.

For example:

	opr.speeddial.update({
		url: 'http://dev.opera.com',
		title: 'Dev Opera'
	});
