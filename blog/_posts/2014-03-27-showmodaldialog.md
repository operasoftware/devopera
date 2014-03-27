---
title: Removing `showModalDialog` from the Web platform
authors:
- mathias-bynens
tags:
- javascript
license: cc-by-3.0
layout: post
---

The Blink team is looking to [remove support for the `showModalDialog()` API](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/xh9fPX0ijqk). Following the initial announcement, there’s been a lot of [confusion](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/fr2CTDPKcE0J). This post explains what `showModalDialog` is, why it’s being removed, and what the consequences are for web developers.

## What is `showModalDialog`?

The global `showModalDialog()` method displays a modal dialog box containing a specified HTML document. In this sense, it seems similar to a pop-up window, but there are a few differences.

Let’s say document A calls `showModalDialog` to display document B in a modal dialog box.

As soon as that happens, document B is shown, and any JavaScript execution in document A is **paused completely**, only to be resumed when the modal document B is closed. That’s right: `showModalDialog` doesn’t `return` until the window it opens is closed. No other feature on the Web platform does that, and because this unique behavior led to [several security vulnerabilities](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/WZiWpM9-8bUJ), it is the main reason `showModalDialog` is being removed.

Both documents can communicate with each other through an awkward API that is specific to `showModalDialog`:

* Document A can pass data to the modal document B by using the second `showModalDialog()` parameter. The modal document B can access this data through the `window.dialogArguments` property.
* The modal document B can pass data to the parent document A by assigning a value to `window.returnValue` and closing itself through `window.close()`, or by waiting for the user to close it.

[A `showModalDialog()` demo page](/blog/showmodaldialog/) that demonstrates this is available.

Another gotcha is that `window.dialogArguments` only works between same-origin documents, even if [Cross-Origin Resource Sharing](http://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/) is enabled on your server.

`showModalDialog()` was introduced in Internet Explorer 4 as a proprietary feature. Other browsers later added support for the feature to avoid compatibility issues.

## What’s so bad about `showModalDialog`?

There are multiple reasons to remove `showModalDialog` from the Web platform. [Ian Hickson does a great job summarizing them](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/8oPryGUsGPMJ):

> This API is a really poorly designed API. It causes a popup to show, which is extremely awkward on e.g. mobile platforms; it causes the event loop to nest, which is extremely problematic for multiple reasons, including having serious security implications; it makes modal UI dependent on network traffic, which is very undesireable; exactly how it works in a multi-process multi-tab UI is highly unintuitive (which windows should it disable while it’s up?); it is the only API that can cause JavaScript execution to appear in the stack below core functionality like pumping OS events; and, the straw that broke the camel’s back for the Chrome team, it has huge implications for how complicated implementing mutation observers will be.
>
> This API single-handedly makes completely unrelated parts of the platform significantly more complicated to implement, which leads to more bugs, which makes everything worse for everyone.
>
> And to top it all off, it’s not even a particuarly good UI. We have much better solutions in the works […]

Most importantly, `showModalDialog` is not extremely popular — it can likely be removed without breaking the Web significantly.

## What should I use instead of `showModalDialog`?

At the time of writing, when visiting a page that uses `showModalDialog`, the following warning is logged in the Opera or Chrome DevTools:

> Chromium is considering deprecating `showModalDialog`. Please use `window.open` and `postMessage` instead.

That’s correct. `window.open` can be used to open a separate HTML document in a pop-up window. And [the `postMessage` API](http://dev.opera.com/articles/view/window-postmessage-messagechannel/) makes it easy send data from one window to another. These two features get you a long way when emulating `showModalDialog`-like behavior.

An [even better](http://uxmovement.com/forms/why-modal-windows-have-killed-popup-windows/) solution would be to not rely on separate pop-up windows at all. Just display the modal page’s contents as an overlay within the parent page, optionally using JavaScript and CSS.

However, to make a dialog truly ‘modal’, any clicks and attempts to focus an element outside of the dialog should be ignored. Once again, this is something that can be accomplished using JavaScript and CSS. If you don’t want to write all the code for this yourself, use something like [jQuery UI’s dialog widget](http://jqueryui.com/dialog/).

The HTML spec defines [a `<dialog>` element](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element) which would be extremely useful in such situations. No browser supports this yet at the time of writing. However, Opera and Chrome have an experimental implementation of this element and its JavaScript APIs. Enable the “experimental Web platform features” flag via `opera://flags/#enable-experimental-web-platform-features` or `chrome://flags/#enable-experimental-web-platform-features` and then [check out this demo](http://demo.agektmr.com/dialog/#showmodal).</p>

## When is `showModalDialog` being removed?

The latest plan is to land the `showModalDialog` removal in Chromium 36. This means the feature will be gone in Opera 23 and Chrome 36, both of which should be released around the end of July.

Mozilla is [looking to remove `showModalDialog` as well](https://bugzilla.mozilla.org/show_bug.cgi?id=981796), but it’s unsure when this will happen exactly. Probably not before Firefox 32.
