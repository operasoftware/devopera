---
title: Opera TV Emulator 4.x User Guide
authors:
- krystian-gorski
intro: 'The Opera TV Store Emulator allows web developers to check how their HTML5-based applications look and behave in the Opera TV Store.'
tags:
- developer-tools
- tv-emulator
- emulator
- tv
cover: png
license: cc-by-3.0
---

## About the Opera TV Emulator 4.x

The Opera TV Store Emulator allows web developers to check how their HTML5-based applications look and behave in the [Opera TV Store][1].

The Opera TV Store Emulator is created as an extension for the Opera 24+ Desktop browser.

For SDK 3.x emulation, please use the older [Opera TV Emulator 3.4][2].

[1]: http://www.opera.com/business/tv/store/
[2]: https://dev.opera.com/tv/opera-tv-emulator/

## Features {#features}

- Overscan — check what your app looks like when overscan occurs
- Default CSS TV colors
- Remote control widget is enabled all the time and is located on the bottom of the screen. It is possible to hide it, when clicking the dash icon.
- Functional key mappings — VK_KEY button emulation, including directional, enter, back and color buttons (r,g,b,y)
- Draggable popup with information appears when the `window.close` function is called
- `localStorage` is disabled — when `localStorage` is used, an error popup appears

## Installation {#install}

1. Download the latest version of the Opera TV Store Emulator extension for [Opera][3]
2. open the extensions tab
3. drag & drop extension on extensions tab
4. After the installation is finished you can check "Allow access to file URLs" to emulate local files - e.g file://foo/bar/index.html

[3]: http://apps.tvstore.op-cdn.net/opera-tv-store-emulator/description_page/OperaTVStoreEmulator.nex

After a successful installation of the Opera TV Store Emulator extension, the extension's button will be available in the top right corner of the address bar.

<figure class="figure">
	<img src="{{ page.id }}/toolbar.png" alt="Opera TV Store Emulator extension, a small icon of the extension will be available in the URL bar in the top right corner" class="figure__media">
	<figcaption class="figure__caption">Opera TV Store Emulator extension in browser</figcaption>
</figure>

## Navigation {#navigation}

For keyboard navigation, refer to the mapping below:

- ←↑→↓ cursor keys move the focus
- the backspace key maps to the Return/Back key
- the enter key activates the currently focused element

In addition to basic keyboard controls, the Opera TV Emulator also provides a more comprehensive remote control widget that simulates the colored keys (red, green, yellow, blue) and a set of media controls (play/pause, stop, rewind, fast-forward).

<figure class="figure">
	<img src="{{ page.id }}/RemoteController4x.png" alt="The Opera TV Store Emulator’s remote control" class="figure__media">
	<figcaption class="figure__caption">The Opera TV Store Emulator’s remote control</figcaption>
</figure>

## Notes {#notes}

- SDK 4.x and Opera desktop are both Blink based.
- In order to simulate Spatial Navigation, run the Opera browser from the command line using the "enable-spatial-navigation" argument.
- H.264 support is available from Opera 25 onward.
- For information about the specific multimedia formats that can be used, please refer to the article on [HTML5 audio/video support in Opera TV Store applications][4].
- The Chromium version installed on actual devices is 35, while the Chromium version in your Opera browser is likely higher. Because of that some incompatibilities may occur. We recommend to also always test on an actual device with the Opera TV Store included.

[4]: http://dev.opera.com/articles/view/html5-audio-video-support-in-opera-tv-store-applications/

## Support {#support}

Opera Software does not have an official support channel for the Opera TV Emulator. However, a number of communication channels are available:

- Join our [Opera TV Store forum][5], where you’ll find a dedicated section on TV content development.
- Get notified of updates to the Opera TV Emulator on the [tv-emulator-external mailing list][6].

[5]: http://forums.opera.com/categories/en-opera-tv-store
[6]: https://list.opera.com/mailman/listinfo/tv-emulator-external
