---
title: Tweaking Spatial Navigation for TV Browsing
authors:
- daniel-davis
intro: 'Opera’s spatial navigation is the most common navigation mechanism on web-enabled TVs and devices. It offers an intuitive way for users to navigate web pages. Using a sprinkling of CSS3, developers can take full control over the exact order in which elements receive focus, to further enhance the browsing experience.'
tags:
- css
- css3
- devices
- tv
license: cc-by-nc-sa-3.0
---

<p block="disclaimer"><strong>Please note</strong> that parts of this article refers to older Presto-based versions of the Opera TV products (Opera TV SDK 3.x). These versions are still live in a lot of devices that are active in all markets, but most devices shipped since 2015 are based on the newer Blink-based Opera product.</p>

One of the biggest challenges designing content for TVs is navigation. Not only are there several different methods that can be used to navigate a page, but none of them provide the perfect blend of convenience and practicality, at least not yet. At the time of writing, a user could be controlling their TV browsing session with any of the following devices:

- A remote control with a D-pad (with keypad)
- A remote control with a touchpad or similar (with full keyboard)
- A gyroscopic mouse
- An infrared pointer
- A touchscreen mobile phone or tablet

Currently the most widely used by far is the regular remote control with basic up, down, left, right and select buttons. Using directional controls like this is referred to as spatial navigation and is essential to understand to create a great TV experience. It is also the same navigational method used on mobile phones with keypads and non-touch devices such as Amazon’s Kindle.

## Testing spatial navigation

Beyond the browser on TVs and similar web-connected devices, spatial navigation is also available in Opera on its other popular platforms. Developers can easily test spatial navigation on their desktop machines:

- In the [Opera desktop browser][1], hold down the Shift button and press the arrow keys.
- In the [Opera Mobile emulator][2], select _Keypad_ in the launch settings window.

[1]: https://www.opera.com/browser/
[2]: https://www.opera.com/developer/tools/mobile/

An eye-opening exercise is to browse a few popular sites using only spatial navigation. Although it probably won’t be impossible, it is likely to be frustrating with the cursor seeming to focus on elements at random. Television adds an extra layer of frustration and that’s due to the infrared connection between the remote control and the TV. This causes a noticeable delay of up to half a second or so between pressing a button on the remote control and the cursor moving on the screen. Consequently, any mistake by the user or unexpected movement of the cursor is particularly expensive in terms of time wasted. Fortunately, we can alleviate a lot of this with CSS3.

## Controlling navigation with CSS3

The [CSS3 Basic User Interface specification for directional focus navigation][3] is refreshingly simple both to explain and to implement. It’s purpose is to enable you to specify which element should receive focus when a user presses one of the directional buttons. For example, if the user is focused on your copyright notice at the bottom of a page and presses the down arrow key, you could tell the cursor to focus on your logo at the top of the page. The CSS code for that would be something like this:

[3]: http://www.w3.org/TR/css3-ui/#nav-dir

	/* CSS */
	#copyright {
		nav-down: #logo;
	}

Note that this can be applied to any CSS selector, but the property’s value must be the `ID` of an element, i.e. preceded by #. Not surprisingly, other possible property names are `nav-up`, `nav-left` and `nav-right`. As you can see, it’s a very straightforward enhancement to implement and although it won’t be noticed by in a desktop or touchscreen environment, for users relying on D-pad to navigate, it can improve their experience remarkably. Just make sure you fully test it yourself before publishing, to avoid any nasty surprises.

Note: Often you will want to control the look of the spatial navigation highlight, or even suppress it completely. This can be done by manipulating the `outline` CSS property, so for example you could use `outline: 2px solid rgba(0,0,0,0.0);` to suppress the highlight.

## Example

Here’s an [example of spatial and CSS navigation][4]. It shows two identical groups of photos--try using just the left and right arrows to move from photo to photo. The first group relies on the browser’s spatial navigation algorithm whereas the second group uses CSS navigation, enabling the user to scroll through the photos with ease.

[4]: /tv/tweaking-spatial-navigation-for-tv-browsing/example.html

## Conclusion

Particularly on devices with a simple set of directional keys, spatial navigation is a far more natural way of navigating a page than a simple “jump to next/previous link” approach — and with a sprinkling of CSS, developers can further tweak the order in which elements receive focus.
