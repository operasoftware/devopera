---
title: Building Applications for the Opera TV Store
authors:
- patrick-lauke
intro: 'The Opera TV Store is a moderated, hosted catalogue of TV-specific web applications. Developers can submit and share their apps through this portal. This article outlines the Opera TV Store architecture and lists the requirements and acceptance criteria for submitting applications.'
tags:
- store
- tv
license: cc-by-3.0
---

Update history:

1. 18 April 2012: new section for currently known limitations of the Opera TV Store.
2. 27 August 2012: explicit note about lack of support for third-party multimedia plugins.
3. 5 September 2012: removed the requirement for inclusion of the Opera TV Store API.
4. 20 January 2013: added note about modal dialogs and lack of support for `alert()`, `prompt()` and `confirm()`

- [Introduction](#introduction)
- [Building your application](#building)
- [Requirements specific to Opera TV Store applications](#requirements)
	- [Resolution](#requirements-resolution)
	- [Navigation and functional keys](#requirements-navigation)
	- [Modal dialogs](#requirements-modal-dialogs)
	- [Multimedia plugins / Flash](#requirements-plugin-flash)
	- [Closing applications](#requirements-closing)
	- [Limitations of current implementations](#requirements-limitations)
- [Submitting to the Opera TV Store](#submitting)

## Introduction

The Opera TV Store is a moderated, hosted catalogue of TV-specific web applications. Developers can submit and share their apps through this portal. It presents end users with a storefront (itself a web-based application) which allows them quick and easy access to the applications.

<figure class="figure">
	<img src="{{ page.id }}/sample-views.png" alt="Sample Opera TV Store and an application" class="figure__media">
	<figcaption class="figure__caption">Sample Opera TV Store and a sample weather application</figcaption>
</figure>

Applications in the Opera TV Store will be presented as static thumbnail images in a dashboard. Users are able to browse the TV Store catalogue and "install" applications, adding them to their dashboard. Selecting an application launches it in full-screen mode.

<figure class="figure">
	<img src="{{ page.id }}/architecture.png" alt="Opera TV Store architecture diagram" class="figure__media">
	<figcaption class="figure__caption">A simple overview of the Opera TV Store architecture</figcaption>
</figure>

The full-screen web applications themselves are not hosted directly on Opera's servers. The Opera TV Store only acts as a directory, with references to the actual URLs of the applications.

## Building your application

Applications for the Opera TV Store are, in essence, regular web applications, which are rendered by a customised version of [Opera Devices SDK][13] browsing environment on the user's TV. As such, developers can tap into all the traditional web technologies (HTML5, CSS 3, JavaScript, SVG) supported by the Opera browser. See our documentation on [web specifications supported by Opera][14] (and in particular our comparison of [support in different Opera product lines][15]) for a thorough breakdown.

[13]: http://www.opera.com/business/devices/
[14]: http://www.opera.com/docs/specs/
[15]: http://www.opera.com/docs/specs/productspecs/

Although the Opera Devices SDK is built on the same core rendering engine as our desktop browsers, there are still platform-specific APIs and subtle integration differences that developers need to be aware of. For this reason, it is recommended that developers test their applications on an actual TV running the Opera TV Store and/or with the [Opera TV Emulator][16].

[16]: http://www.operasoftware.com/products/tv-emulator

Developing web content for TV brings with it its own challenges – from a difference in user interaction to considerations regarding device capabilities and performance optimisation. For an introduction to some of the necessary adaptations and techniques see our documentation on [creating web content for TV][17] and other articles in our [TV section][18].

[17]: /articles/view/creating-web-content-for-tv/
[18]: /tv/

## Requirements specific to Opera TV Store applications

Due to the way in which applications will be integrated into, and launched from, the Opera TV Store, developers need to be aware of the following additional requirements:

### Resolution

All TV Store applications have to support 1280×720 resolution. Other common TV resolutions (1920×1080, 960×540) are currently not supported. Although the TV Store browser itself supports regular scrolling, applications should be designed not to require scrolling, and if needed should provide their own custom mechanisms for displaying long lists of items or content.

### Navigation and functional keys

The Opera TV Store is designed to use the standard four-way directional keys on a remote control for spatial navigation. Authors should test that their applications work correctly using the default spatial navigation built into the Opera TV Store browser. Authors may also choose to handle the navigation of their application themselves by intercepting key presses from the remote control. As the exact key codes for remote control functional keys varies between different devices, the Opera TV Store browser provides built-in constants (tailored to the device currently running the TV Store). See the article on [Functional key handling in Opera TV Store applications][19] for further details.

[19]: /articles/view/functional-key-handling-in-opera-tv-store-applications/

### Modal dialogs

As the standard JavaScript methods for `alert()`, `prompt()` and `confirm()` are not supported on all platforms that run the Opera TV Store (since they require platform integration), applications that needs modal dialogs (such as data entry prompts or general alerts/messages) need to provide these using HTML/CSS/JavaScript – which also allows for these modal dialogs to be styled in line with the rest of the application.

### Multimedia plugins / Flash

The Opera TV Store does not provide support for any third-party plugins, such as Adobe Flash. Any multimedia features and functionality needed by an application must be implemented using HTML5 technologies such as `<canvas>` or the native support for `<audio>` and `<video>` elements.

### Closing applications

Once an application is launched from the dashboard, it is effectively opened full screen in a new window. The Opera TV Store browser (based on the Opera Devices SDK, responsible for rendering the applications and the TV Store itself) does not present any standard interface elements to the user – it runs as a completely "chromeless" browser, with no address bar or back button. Users will be able to close the application and return to their dashboard via the remote control's _EXIT_ and/or _RETURN_ key. Developers should nonetheless provide an explicit option or button in their UI to close the application, with a simple call to the `window.close()` method.

### Limitations of current implementations

There are known limitations in some of the current devices that are shipping with the Opera TV Store, generally due to the way certain features have been integrated on the devices by the manufacturers and which version of the TV Store software has been used.

- Missing [CORS (Cross-Origin Resource Sharing)][20] support: if your application relies on cross-origin resources (particularly via `XMLHttpRequest`), you will need to implement some form of proxy on your application's origin domain to relay the resources from other domains.
- Due to the integration with external media playback frameworks on certain devices, it may not be possible to guarantee simultaneous playback of more than a single `audio` or `video` element.

[20]: /articles/dom-access-control-using-cors/

## Submitting to the Opera TV Store

Once your application is ready, it can be submitted to the Opera TV Store. Log in to the [Opera TV Store – Submission portal][21] and follow the steps required in the submission dialog.

[21]: http://publish.tvstore.opera.com/

This article summarises the most important guidelines that applications need to follow for inclusion in the Opera TV Store. Further restrictions and requirements are listed in the **acceptance criteria** of the [Opera TV Store application publishing guidelines][22]. Please ensure that your application fulfills those criteria – as well as the best practices and suggestions laid out in our developer articles – before submitting your application.

[22]: https://publish.tvstore.opera.com/guidelines/
