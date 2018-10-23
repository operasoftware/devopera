---
title: Opera Sidebar Action API
license: cc-by-3.0
---

## Contents

<figure block="figure">
<table>
<tr>
	<th>Description</th>
	<th>Availability</th>
	<th>Manifest</th>
	<th>Learn More</th>
</tr>
<tr>
	<td>Add actions in the browser sidebar. In addition to its <a href="#icon">icon</a>, a sidebar action can also have a <a href="#tooltip">tooltip</a>, a <a href="#badge">badge</a>, and a <a href="#panel">panel</a>.</td>
	<td>For Opera 30 and onwards.</td>
	<td><code>"sidebar_action": { … }</code></td>
	<td><a href="/extensions/sidebar-action-manual/">Creating extensions for the sidebar</a>.</td>
</tr>
</table>
</figure>

## Terminology

There are some additional elements in the browser that we need to understand in the context of sidebar extensions. These are the _sidebar_, which consists of a _buttons list_ on the left hand side (which contains the icons for sidebar extensions). Clicking on each icon will open up its corresponding _panel_ on the right hand side of the sidebar.

## Manifest

These would be the changes in the manifest:

	{
		"name": "My extension",
		"sidebar_action": {
			// Required
			"default_icon": "images/default_icon.png",
			// Optional; shown in tooltip
			"default_title" : "My Extension Title",
			// Required
			"default_panel": "panel.html"
		}
	}

You can also specify a series of sizes and icon paths as keys and values, instead of a single icon value described above. If you want to specify icons for a series of sizes, then instead of mentioning one default icon, you can specify an object listing out the paths to the icons and their corresponding sizes in the `default_icon` field like so:

	"sidebar_action": {
		"default_icon": {
			"19": "images/19.png",
			"38": "images/38.png"
		}
	}

### Icon

You can set the icon in two ways: using a static image or using the HTML5 `<canvas>` element. Using static images is easier for simple applications, but you can create more dynamic UIs — such as smooth animation — using the canvas element. Static images can be in any format Blink can display, including BMP, GIF, ICO, JPEG, or PNG. For unpacked extensions, images must be in the PNG format.

To set the icon, use the `default_icon` field of `sidebar_action` in the manifest, or call the `sidebarAction.setIcon` method (especially, if you want to switch it and set alternative icon instead).

### Tooltip

To set the tooltip, use the `default_title` field of `sidebar_action` in the manifest, or call the `sidebarAction.setTitle` method. You can specify locale-specific strings for the `default_title` field; see [Internationalization](/extensions/internationalization/) for details.

### Badge

Sidebar actions can optionally display a _badge_ — a bit of text that is layered over the icon. Badges make it easy to update the sidebar action to display a small amount of information about the state of the extension. Because the badge has limited space, it should have 4 characters or less. Set the text and color of the badge using `sidebarAction.setBadgeText` and `sidebarAction.setBadgeBackgroundColor`, respectively.

### Panel

If a sidebar action has a panel, it will appear when the user clicks the icon. The panel can contain any HTML content that you like, and it’s automatically sized to fit the available width and height. It is recommended that developers make their panel pages fluid and responsive in order to look good in various widths.

To add a panel to your sidebar action, create an HTML file with the panel’s contents. Specify the HTML file in the `default_panel` field of `sidebar_action` in the manifest, or call the `sidebarAction.setPanel` method.

## Summary

### Types

- [`ColorArray`](#type-colorarray)
- [`ImageDataType`](#type-imagedatatype)

### Methods

- [`setTitle`](#method-settitle) — `opr.sidebarAction.setTitle( object details)`
- [`getTitle`](#method-gettitle) — `opr.sidebarAction.getTitle(object details, function callback)`
- [`setIcon`](#method-seticon) — `opr.sidebarAction.setIcon(object details, function callback)`
- [`setPanel`](#method-setpanel) — `opr.sidebarAction.setPanel(object details)`
- [`getPanel`](#method-getpanel) — `opr.sidebarAction.getPanel(object details, function callback)`
- [`setBadgeText`](#method-setbadgetext) — `opr.sidebarAction.setBadgeText(object details)` *
- [`getBadgeText`](#method-getbadgetext) — `opr.sidebarAction.getBadgeText(object details, function callback)` *
- [`setBadgeBackgroundColor`](#method-setbadgebackgroundcolor) — `opr.sidebarAction.setBadgeBackgroundColor(object details)` *
- [`getBadgeBackgroundColor`](#method-getbadgebackgroundcolor) — `opr.sidebarAction.getBadgeBackgroundColor(object details, function callback)` *

* Not supported on Mac yet.

### Events

- [`onFocus`](#events-onfocus)
- [`onBlur`](#events-onblur)

* Not supported on Mac yet.

## Types

### ColorArray {#type-colorarray}

Array of integer.

### ImageDataType {#type-imagedatatype}

Pixel data for an image. Must be an `ImageData` object (for example, from a `<canvas>` element).

## Methods

### `setTitle` {#method-settitle}

	opr.sidebarAction.setTitle(
		object details
	)

Sets the title of the sidebar action. This shows up in the tooltip.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td rowspan="2">object</td>
	<td rowspan="2">details</td>
	<td>string</td>
	<td><code>title</code></td>
	<td>The string the sidebar action should display when moused over.</td>
</tr>
<tr>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.</td>
</tr>
</table>
</figure>

### `getTitle` {#method-gettitle}

	opr.sidebarAction.getTitle(
		object details,
		function callback
	)

Gets the title of the sidebar action.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td>object</td>
	<td>details</td>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Specify the tab to get the title from. If no tab is specified, the non-tab-specific title is returned.</td>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td>string</td>
	<td><code>result</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(string result) { … }</code></td>
</tr>
</table>
</figure>

### `setIcon` {#method-seticon}

	opr.sidebarAction.setIcon(
		object details,
		function callback
	)

Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the `path` or the `imageData` property must be specified.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td rowspan="3">object</td>
	<td rowspan="3">details</td>
	<td><code>ImageDataType</code> or object</td>
	<td><code>imageData</code> (optional)</td>
	<td rowspan="2">Either an <code>ImageData</code> object or a dictionary <code>{size -> ImageData}</code> representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen’s pixel density. If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>scale</code> × 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that <code>details.imageData = foo</code> is equivalent to <code>details.imageData = {'19': foo}</code>.</td>
</tr>
<tr>
	<td>string or object</td>
	<td><code>path</code> (optional)</td>
</tr>
<tr>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.</td>
</tr>
<tr>
	<td>function</td>
	<td>callback (optional)</td>
	<td colspan="3">If you specify the callback parameter, it should be a function that looks like this: <code>function() { … }</code>.</td>
</tr>
</table>
</figure>

### `setPanel` {#method-setpanel}

	opr.sidebarAction.setPanel(
		object details
	)

Sets the HTML document to be opened as a panel when the user clicks on the sidebar action’s icon.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td rowspan="2">object</td>
	<td rowspan="2">details</td>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.</td>
</tr>
<tr>
	<td>string</td>
	<td><code>panel</code></td>
	<td>The HTML file to show in a panel. Cannot be an emptry string (entering a valid HTML file is mandatory).</td>
</tr>
</table>
</figure>

### `getPanel` {#method-getpanel}

	opr.sidebarAction.getPanel(
		object details,
		function callback
	)

Gets the HTML document set as the panel for this sidebar action.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td>object</td>
	<td>details</td>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Specify the tab to get the panel from. If no tab is specified, the non-tab-specific panel is returned.</td>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td>string</td>
	<td><code>result</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(string result) { … }</code>.</td>
</tr>
</table>
</figure>

### `setBadgeText` {#method-setbadgetext}

	opr.sidebarAction.setBadgeText(
		object details
	)

Sets the badge text for the sidebar action. The badge is displayed on top of the icon.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td rowspan="2">object</td>
	<td rowspan="2">details</td>
	<td>string</td>
	<td><code>text</code></td>
	<td>Any number of characters can be passed, but only about four can fit in the space.</td>
</tr>
<tr>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.</td>
</tr>
</table>
</figure>

Not supported on Mac yet.

### `getBadgeText` {#method-getbadgetext}

	opr.sidebarAction.getBadgeText(
		object details,
		function callback
	)

Gets the badge text of the sidebar action. If no tab is specified, the non-tab-specific badge text is returned.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td>object</td>
	<td>details</td>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Specify the tab to get the badge text from. If no tab is specified, the non-tab-specific badge text is returned.</td>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td>string</td>
	<td><code>result</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(string result) { … }</code>.</td>
</tr>
</table>
</figure>

Not supported on Mac yet.

### `setBadgeBackgroundColor` {#method-setbadgebackgroundcolor}

	opr.sidebarAction.setBadgeBackgroundColor(
		object details
	)

Sets the background color for the badge.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td rowspan="2">object</td>
	<td rowspan="2">details</td>
	<td>string or <code>ColorArray</code></td>
	<td><code>color</code></td>
	<td>An array of four integers in the range <code>[0,255]</code> that make up the RGBA color of the badge. For example, opaque red is <code>[255, 0, 0, 255]</code>. Can also be a string with a CSS value, with opaque red being <code>#FF0000</code> or <code>#F00</code>.</td>
</tr>
<tr>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.</td>
</tr>
</table>
</figure>

Not supported on Mac yet.

### `getBadgeBackgroundColor` {#method-getbadgebackgroundcolor}

	opr.sidebarAction.getBadgeBackgroundColor(
		object details,
		function callback
	)

Gets the background color of the sidebar action.

<figure block="figure">
<table>
<tr>
	<th colspan="5">Parameters</th>
</tr>
<tr>
	<td>object</td>
	<td>details</td>
	<td>integer</td>
	<td><code>tabId</code> (optional)</td>
	<td>Specify the tab to get the badge background color from. If no tab is specified, the non-tab-specific badge background color is returned.</td>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td><code>ColorArray</code></td>
	<td><code>result</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(ColorArray result) { … }</code>.</td>
</tr>
</table>
</figure>

Not supported on Mac yet.

## Events

### `onFocus` {#events-onfocus}

	opr.sidebarAction.onFocus.addListener(
		function callback
	)

When the panel becomes in focus (user clicks inside the panel).

<figure block="figure">
<table>
<tr>
	<th colspan="3">Parameters</th>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td><code>windows.Window</code></td>
	<td><code>window</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(windows.Window window) { … }</code></td>
</tr>
</table>
</figure>

Not supported on Mac yet.

### `onBlur` {#events-onblur}

	opr.sidebarAction.onBlur.addListener(
		function callback
	)

When panel loses focus when the user clicks on the webpage (or any other area outside the panel), thereby the panel loses focus.

<figure block="figure">
<table>
<tr>
	<th colspan="3">Parameters</th>
</tr>
<tr>
	<td>function</td>
	<td>callback</td>
	<td><code>windows.Window</code></td>
	<td><code>window</code></td>
	<td>The callback parameter should be a function that looks like this: <code>function(windows.Window window) { … }</code></td>
</tr>
</table>
</figure>

Not supported on Mac yet.
