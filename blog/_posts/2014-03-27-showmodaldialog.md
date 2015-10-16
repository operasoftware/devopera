---
title: Removing `showModalDialog` from the Web platform
authors:
- mathias-bynens
intro: 'The Blink team is looking to remove support for the `showModalDialog()` API. This post explains what `showModalDialog` is, why it’s being removed, and what the consequences are for web developers.'
tags:
- javascript
license: cc-by-3.0
---

The Blink team is looking to [remove support for the `showModalDialog()` API](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/ixHZCOH6GLgJ). Following the initial announcement, there’s been a lot of [confusion](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/fr2CTDPKcE0J). This post explains what `showModalDialog` is, why it’s being removed, and what the consequences are for web developers.

## What is `showModalDialog`?

The global `showModalDialog()` method displays a modal dialog box containing a specified HTML document. In this sense, it seems similar to a pop-up window, but there are a few differences.

Let’s say document A calls `showModalDialog` to display document B in a modal dialog box.

As soon as that happens, document B is shown, and any JavaScript execution in document A is **paused completely**, only to be resumed when the modal document B is closed. That’s right: `showModalDialog` doesn’t `return` until the window it opens is closed. No other feature on the Web platform does that, and because this unique behavior led to [several security vulnerabilities](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/WZiWpM9-8bUJ), it is the main reason `showModalDialog` is being removed.

Both documents can communicate with each other through an awkward API that is specific to `showModalDialog`:

* Document A can pass data to the modal document B by using the second `showModalDialog()` parameter. The modal document B can access this data through the `window.dialogArguments` property.
* The modal document B can pass data to the parent document A by assigning a value to `window.returnValue` and closing itself through `window.close()`, or by waiting for the user to close it.

[A `showModalDialog()` demo page](/articles/showmodaldialog/demo.html) that demonstrates this is available.

Another gotcha is that `window.dialogArguments` only works between same-origin documents, even if [Cross-Origin Resource Sharing](https://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/) is enabled on your server.

## Why was `showModalDialog()` ever standardized?

`showModalDialog()` was introduced in Internet Explorer 4 as a proprietary feature. Other browsers later added support for the feature to avoid compatibility issues. Only after that, `showModalDialog()` was added to the HTML standard, following the “Support Existing Content” design principle. All this happened years ago.

Recent [compatibility data](http://www.chromestatus.com/metrics/feature/timeline/popularity/195) shows that `showModalDialog()` usage has declined so greatly that the feature can now be removed without significantly breaking the Web.

The moral of the story: even standardized features can still be deemed broken and removed at a future date if compatibility analysis changes.

## What’s so bad about `showModalDialog`?

There are multiple reasons to remove `showModalDialog` from the Web platform. [Ian Hickson does a great job summarizing them](https://groups.google.com/a/chromium.org/d/msg/blink-dev/xh9fPX0ijqk/8oPryGUsGPMJ):

> This API is a really poorly designed API. It causes a popup to show, which is extremely awkward on e.g. mobile platforms; it causes the event loop to nest, which is extremely problematic for multiple reasons, including having serious security implications; it makes modal UI dependent on network traffic, which is very undesirable; exactly how it works in a multi-process multi-tab UI is highly unintuitive (which windows should it disable while it’s up?); it is the only API that can cause JavaScript execution to appear in the stack below core functionality like pumping OS events; and, the straw that broke the camel’s back for the Chrome team, it has huge implications for how complicated implementing mutation observers will be.
>
> This API single-handedly makes completely unrelated parts of the platform significantly more complicated to implement, which leads to more bugs, which makes everything worse for everyone.
>
> And to top it all off, it’s not even a particularly good UI. We have much better solutions in the works […]

Most importantly, `showModalDialog` is not extremely popular — it can likely be removed without breaking the Web significantly.

## What should I use instead of `showModalDialog`?

Web developers wishing to use modal dialogs on their websites should use [the `<dialog>` HTML element](https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element) and its corresponding JavaScript API (`element.show()`, `element.showModal()`, and `element.close()`). [Here’s a demo page with code examples.](http://demo.agektmr.com/dialog/) At the time of writing only Opera and Chrome support this feature. For compatibility with other browsers, [a polyfill is available](https://github.com/GoogleChrome/dialog-polyfill).

Depending on the complexity of your code, switching the codebase over to use `<dialog>` may require a great deal of refactoring. [Alternate solutions](http://thinkingoutsidetheanglebrackets.blogspot.com/2014/09/removal-of-showmodaldialog-and.html), such as ECMAScript 7 `async`/`await`, may be easier to implement. Your mileage may vary.

## When is `showModalDialog` being removed?

The latest plan is to land the `showModalDialog` removal in Chromium 37. This means the feature will be gone in Opera 24 and Chrome 37, both of which should be released in September.

Mozilla is [looking to remove `showModalDialog` as well](https://bugzilla.mozilla.org/show_bug.cgi?id=981796), but it’s unsure when this will happen exactly. Probably not before Firefox 32.

Note:  The dialog-polyfill example as noted on GitHub is NOT compatible with IE, as it relies on the 2015 ECMAScript standard construct "Promise", which is not yet supported by IE 11:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
