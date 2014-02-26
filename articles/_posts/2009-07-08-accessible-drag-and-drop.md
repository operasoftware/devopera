---
title: Accessible Drag and Drop Using WAI-ARIA
authors:
- gez-lemon
intro: 'There is increasing interest in, and importance being laid upon, making modern dynamic web applications more accessible. New specifications such as WAI-ARIA and HTML5 provide the means by which to do this; in this article Gez Lemon presents a solution for implementing accessible drag and drop functionality using JavaScript and WAI-ARIA. Some discussion of HTML5 drag-and-drop features is also included for good measure.'
tags:
- accessibility
- drag-and-drop
- html5
- wai-aria
license: cc-by-nc-sa-2.5
layout: article
---

## Introduction

This article is intended for people who create rich internet applications with drag and drop functionality and want to make them accessible. No prior knowledge of WAI-ARIA is assumed, although it is recommended you read my [introduction to WAI-ARIA][1] article before starting this article. A basic knowledge of scripting is assumed, and is necessary to understand exactly what is going on in the code example, but this knowledge is not necessary to understand the basic concepts discussed.

[1]: /articles/introduction-to-wai-aria/

After reading this article you will have an understanding of how to structure applications with drag and drop functionality so they are accessible.

The term drag and drop infers using a mouse to move an object from one location to another. Wikipedia has the following description for drag and drop:

> In computer graphical user interfaces, drag-and-drop or DnD is the action of (or support for the action of) clicking on a virtual object and dragging it to a different location or onto another virtual object. In general, it can be used to invoke many kinds of actions, or create various types of associations between two abstract objects.

## Accessibility challenges of drag and drop

Some people with poor [fine motor control][3] have difficulties making small movements and remaining steady. For this group of people, the dexterity requirements to accurately select and move an object using a pointing device can cause them problems, and they benefit from a keyboard equivalent being made available to allow them to use such functionality in a different way.

[3]: http://en.wikipedia.org/wiki/Fine_motor_skill

People with very poor eyesight are unable to perceive the start and end points of a drag and drop operation when it is conveyed in purely visual terms. For these two groups, drag and drop operations can be impossible to perform without accessibility considerations being designed into the process.

To be accessible, [all functionality should be operable through the keyboard alone][4]. Making drag and drop operations keyboard accessible is a relatively simple process, but there are a few extra challenges for people using assistive technologies, such as screen reader users and screen magnifier users. These challenges include:

[4]: http://www.w3.org/TR/WCAG20/#keyboard-operation

- Determining which objects are draggable
- Determining whether an object has been selected for dragging
- Determining the operation that will be performed when the object is dropped
- Identifying targets where the object may be dropped

Fortunately, WAI-ARIA has properties to overcome these problems.

## Drag and drop using WAI-ARIA

WAI-ARIA provides two properties to help make drag and drop accessible to users of assistive technologies:

- [`aria-grabbed`][5]
- [`aria-dropeffect`][6]

[5]: http://www.w3.org/WAI/PF/aria/#aria-grabbed
[6]: http://www.w3.org/WAI/PF/aria/#aria-dropeffect

### The `aria-grabbed` property

The `aria-grabbed` property is used to determine whether an element is in a grabbed state for a drag and drop operation.

<table>
<caption markdwond="span">`aria-grabbed` values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row" markdwond="span">`true`</td>
	<td>Indicates the element has been selected for dragging.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`false`</td>
	<td markdwond="span">Indicates that the element is not currently selected for dragging, but can be made available for dragging by setting the property to `true`.</td>
</tr>
</tbody>
</table>

If an element does not have an `aria-grabbed` property at all, the element cannot be dragged.

The `aria-grabbed` attribute in the following example indicates that the list item has been selected to take part in a drag and drop operation.

	<li aria-grabbed="true">

### The `aria-dropeffect` property

The `aria-dropeffect` property is a state that indicates the type of operation that will occur when an object taking part in a drag and drop operation is released on the target. More than one value can be provided as a space-separated list of tokens. The following table lists the possible values for `aria-dropeffect`.

<table>
<caption markdwond="span">`aria-dropeffect` values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row" markdwond="span">`copy`</td>
	<td>The source is duplicated and dropped on the target.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`move`</td>
	<td>The source is removed from its current location and dropped on the target.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`reference`</td>
	<td>A reference or shortcut to the source object will be created in the target.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`execute`</td>
	<td>A function supported by the target is executed using the drag source as the input.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`popup`</td>
	<td>A popup menu or dialog is presented so the user can choose one of the supported operations (copy, move, reference and execute) or other drag functionality.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`none`</td>
	<td>The target will not accept the source.</td>
</tr>
</tbody>
</table>

The `aria-dropeffect` attribute in the following example indicates that the effect of dropping an object on this unordered list would be to remove the object from its current location, and copy it into this list.

	<ul aria-dropeffect="move">

## The HTML 5 drag and drop event model

There is a well-defined [HTML 5 event model for drag and drop operations][7]. The model is too complex to cover in detail in this article, but I will cover the properties that could be useful for accessibility.

[7]: http://dev.w3.org/html5/spec/Overview.html#dnd

### The `draggable` Attribute

HTML 5 has a [`draggable` attribute][8] to indicate whether an object can take part in a drag and drop operation. The attribute has three possible values:

[8]: http://dev.w3.org/html5/spec/Overview.html#dom-draggable

<table>
<caption markdwond="span">`draggable` values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row" markdwond="span">`true`</td>
	<td>The element can be selected for dragging.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`false`</td>
	<td>The element cannot be selected for dragging.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`auto`</td>
	<td>The element uses the default behaviour of the user agent.</td>
</tr>
</tbody>
</table>

The HTML 5 drag and drop event model does not have a property that indicates whether an object has been selected to take part in a drag and drop operation, but it does have a [`dragstart` event][9] to initiate a drag and drop operation.

[9]: http://dev.w3.org/html5/spec/Overview.html#event-dragstart

The `draggable` attribute in the following example indicates that the list item can be selected to take part in a drag and drop operation.

	<li draggable="true">

This information could be augmented with WAI-ARIA’s `aria-grabbed` property to indicate not only that it is draggable, but also whether or not it has been selected to take part in a drag and drop operation.

	<li draggable="true"
		aria-grabbed="true">

### The `dropEffect` Attribute

The [`DataTransfer`][10] object manages the attributes for the drag and drop operation and has a [`dropEffect` attribute][11] to determine what happens when the object is released. The attribute accepts four values.

[10]: http://dev.w3.org/html5/spec/Overview.html#datatransfer
[11]: http://dev.w3.org/html5/spec/Overview.html#dom-datatransfer-dropeffect

<table>
<caption markdwond="span">`dropEffect` values</caption>
<thead>
<tr>
	<th scope="col">Value</th>
	<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
	<td scope="row" markdwond="span">`none`</td>
	<td>No operation allowed.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`copy`</td>
	<td>The source will be duplicated and dropped on the target.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`link`</td>
	<td>The source will be linked.</td>
</tr>
<tr>
	<td scope="row" markdwond="span">`move`</td>
	<td>The source will be removed from its current location and dropped on the target.</td>
</tr>
</tbody>
</table>

	objEvent.dataTransfer.dropEffect='move';

The value of the `dropEffect` must match one of those specified in the [`effectAllowed` attribute][12] of the `DataTransfer` object, which can be one of `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all`, or `uninitialized`.

[12]: http://dev.w3.org/html5/spec/Overview.html#dom-datatransfer-effectallowed

## A workflow for drag and drop

I have created a simple application to demonstrate drag and drop with ARIA and outlined a workflow based on guidance from WAI-ARIA’s [best practice for drag and drop operations][13]. The demonstration consists of a list of artists that can be dragged and dropped into lists under different headings, as seen in Figure 1.

[13]: http://www.w3.org/WAI/PF/aria-practices/#dragdrop

<figure id="figure-1">
	<img src="/articles/accessible-drag-and-drop/screenshot.gif" alt="List of artists with three targets favourites tolerable rejected">
	<figcaption>Figure 1: List of artists with three targets: favourites, tolerable, rejected</figcaption>
</figure>

You can [check out the drag and drop example running live][15], or [download the source code][16] and play with it yourself.

[15]: /articles/accessible-drag-and-drop/example.html
[16]: /articles/accessible-drag-and-drop/code.zip

### Ensure objects can be reached using the keyboard

All objects that are draggable must be reachable using the keyboard alone. Some elements are already reachable using the keyboard alone, such as standard interface elements and anchors. For elements that do not usually receive focus, you can use the [`tabindex` attribute][17].

[17]: http://www.w3.org/TR/wai-aria/#tabindex

There are two useful values: a `tabindex` attribute value of `0` puts elements in keyboard tab order identical to the order they appear in the source; a negative value for the `tabindex` attribute does not put the element into the keyboard tab order, but allows it to receive programmatic focus. Using a negative `tabindex` attribute value is useful if you do not want to clutter the keyboard tab order and control navigation by defining custom keystrokes, for example using the Up and Down cursor keys to navigate through a menu.

The simple demonstration used with this article adds the list items for artists into the keyboard tab order by providing a `tabindex` attribute value of `0` so they can be navigated to using the Tab key.

	objItems[iCounter].tabIndex = 0;

### Identify draggable objects

Objects that can be dragged should have their `aria-grabbed` property set to `false` to indicate they are available for dragging, but are not currently selected for dragging.

	objItems[iCounter].setAttribute('aria-grabbed', 'false');

In the demonstration, the draggable items specify a CSS `cursor` property to provide a visual indication that items are draggable using a mouse.

	li.draggable {
		cursor:move;
		}

It is also important to ensure that interface elements have a [visible keyboard focus indicator][18]. The demonstration adds a _focus_ `class` when the source objects receive focus. The CSS for the _focus_ `class` changes the background colour to provide a visible focus indicator, in the same way items are highlighted when the mouse is hovered over draggable objects.

[18]: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-visible

	ul li.hover,
	ul li.focused {
		background:#fc0;
		}

### Ensure the user can initiate the drag operation with the keyboard

Users must be able to select one or more elements to drag. The [DHTML Style Guide][19] suggests keystrokes to use for drag and drop. They recommended `Space` is used for single selection. `Shift Space` may be used to select contiguous objects, and `Control Space` may be used to add non-contiguous objects to the set. For each object that is selected, the `aria-grabbed` property must be set to `true`.

[19]: http://dev.aol.com/node/757/#draganddrop

In the demonstration, the `aria-grabbed` attribute is set in response to a `mousedown` or `keydown` event.

	drag.objCurrent.setAttribute('aria-grabbed', 'true');

### Identify the drop targets

After source objects have been grabbed, valid targets should be identified using the `aria-dropeffect` property with an appropriate value. In the demonstration, a function is called after an item has been selected to identify the targets with `aria-dropeffect`; this also uses a `class` to make the targets visually obvious.

	objList.className = 'highlight';
	objList.setAttribute('aria-dropeffect', 'move');

The CSS class simply sets the background colour on the list to make it visually evident it is a target (see Figure 2):

	ul.highlight {
		background:#c00;
		color:#000;
		}

<figure id="figure-2">
	<img src="/articles/accessible-drag-and-drop/highlighttarget.gif" alt="List targets visually identified with a red background">
	<figcaption>Figure 2: List targets visually identified with a red background</figcaption>
</figure>

### Ensure drop can be executed using the keyboard

The user should be able to quickly navigate to the target and perform the drop operation. The recommended keystroke combination for dropping an object onto a target is `Control M`. If the drop is likely to result in the user having to navigate through lots of interface elements in order to reach the target, it is recommended that a context menu be provided that can be activated with `Shift F10`, containing a list of possible target areas that the user can select using the Up and Down cursor keys.

In the demonstration, only one item can be dragged at a time. As pressing the `Spacebar` when the source has focus is used to indicate that the item is to take part in a drag and drop operation, it seemed unnecessary to introduce extra keystrokes to activate a context menu, so the example automatically provides the context menu when an artist is selected. The first stage is to indicate that each item has a popup menu.

	objItems[iCounter].setAttribute('aria-haspopup', 'true');

When an artist is selected with the keyboard for dragging, a dialog for the user to select a target is automatically presented, as shown in Figure 3.

<figure id="figure-3">
	<img src="/articles/accessible-drag-and-drop/popup.gif" alt="Popup with two targets to choose from">
	<figcaption>Figure 3: Popup with two targets to choose from</figcaption>
</figure>

If more than one operation is allowable, such as `copy` or `move`, an ARIA-enabled dialog should be provided whereby keyboard users can choose the operation they want to perform, and the targets should use an `aria-dropeffect` property of `popup`.

	objList.setAttribute('aria-dropeffect', 'move');

If a dialog is being used to select the target, the possible drop operations can be provided as a sub-menu for each target; otherwise, the target dialog should be displayed on the target.

### Cancelling the drag operation

The user should be able to cancel the drag operation. The recommended key to cancel the operation is the `Escape` key. After the operation has been cancelled, all draggable objects should have their `aria-grabbed` values set to `false`, and all targets should have their `aria-dropeffect` properties either set to `none` or removed. In the demonstration, the `aria-grabbed` properties are set to `false` and the `aria-dropeffect` properties are removed.

	drag.objCurrent.setAttribute('aria-grabbed', 'false');
	objList.removeAttribute('aria-dropeffect');

Keyboard focus should be set to the last grabbed source object when the drag is cancelled.

	drag.objCurrent.focus();

### Cleaning up after drag and drop operations

As with cancelling the drag operation, all targets with an `aria-dropeffect` property should either have their value set to `none`, or the property should be completely removed after the drag and drop operation. All objects with an `aria-grabbed` property should be set to `false`.

	drag.objCurrent.setAttribute('aria-grabbed', 'false');
	objList.removeAttribute('aria-dropeffect');

Objects that are no longer grabbable and that have an `aria-grabbed` property should either set the value to `undefined`, or remove the property from the DOM.

	drag.objCurrent.removeAttribute('aria-grabbed');

## Current Support

My colleague, [Steve Faulkner][22], tested the demonstration and provided feedback about how it works with current user agents. Both Internet Explorer and Firefox expose the aria-grabbed property. Unfortunately, at the time of writing this article, no screen readers support these ARIA properties, although [NVDA plans future support][23]. Even though support is not good at the moment, it is recommended to use WAI-ARIA’s `aria-grabbed` and `aria-dropeffect` properties; it is simple to provide, does no harm, and implementing it now means it will be in place for when support is finally available.

[22]: http://www.paciellogroup.com/blog/
[23]: http://www.nvda-project.org/wiki/FutureGoals#ARIADragandDrop

### A quick note about CSS support

If you look at the CSS for the example, you’ll notice that I have used classes for hover and focus:

	ul li.hover,
	ul li.focused {
		background:#fc0;
		}

This is because IE 6 and below don’t support `:hover ` and `:focus ` pseudo-classes on non-link elements.

## Further Reading

- [Drag and drop from WAI-ARIA best practices][24].
- [HTML 5’s drag and drop event model][25].
- [iCITA’s Drag and Drop Examples][26].
- [Drag and drop script from Quirksmode][27].
- [Wikipedia’s definition of drag and drop][28].
- [Remy Sharp’s tutorial on native HTML 5 drag and drop][29]

[24]: http://www.w3.org/WAI/PF/aria-practices/#dragdrop
[25]: http://dev.w3.org/html5/spec/Overview.html#dnd
[26]: http://test.cita.uiuc.edu/aria/index.php
[27]: http://www.quirksmode.org/js/dragdrop.html
[28]: http://en.wikipedia.org/wiki/Drag-and-drop
[29]: http://html5doctor.com/native-drag-and-drop/
