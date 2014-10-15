---
title: Opera TV Emulator 4.x User Guide
authors:
- KrystianGorski
intro: 'The Opera TV Store Emulator allows web developers to test HTML-based applications for the Opera TV Store to see how it will behave under Opera TV Store'
tags:
- developer-tools
- tv-emulator
- emulator
- tv
cover: png
license: cc-by-3.0
---

## About the Opera TV Store Emulator 4.x

The Opera TV Store Emulator allows web developers to test HTML-based applications for the [Opera TV Store][1]  to see how it will behave under Opera TV Store.

[1]: http://www.opera.com/business/tv/store/

- [Description](#description)
- [Features](#features)
- [Installation](#install)
- [Manual](#manual)
	- [Keyboard](#keyboard)
	- [Remote control](#remote-control)
- [Notice](#notice)
- [Support](#support)


## Description {#description}

The Opera TV Emulator allows web developer to test HTML-based applications for the [Opera TV Store][1](For SDK 3.x emulation use Opera TV Store Emulator 3.4). It is created as an extension for the Opera 25+ Desktop browser.

## Features {#features}

- Overscan - be able to see how your app looks like when overscan occurs
- Default CSS TV colors
- Remote control widget is enabled all the time and is located on the bottom of the screen.
- Functional key mappings - VK_KEY button emulation, including directional, enter, back
- Draggable popup with information appears when window.close function is called
- localStorage disabled - when localStorage is used error popup appears

## Installation {#install}

  Install extension from Opera extensions site [Opera TV Store Emulator extension][2]  
[2]: https://addons.opera.com/en/extensions/details/Opera-TV-Store-Emulator

## Manual {#manual}

After a successful installation of the Opera TV Store Emulator extension, a small icon of the extension will be available in the URL bar in the top right corner.
<figure class="figure">
	<img src="{{ page.id }}/toolbar.png" alt="Opera TV Store Emulator extension, a small icon of the extension will be available in the URL bar in the top right corner" class="figure__media">
	<figcaption class="figure__caption">Opera TV Store Emulator extension, a small icon of the extension will be available in the URL bar in the top right corner</figcaption>
</figure>


### Keyboard {#keyboard}
To use navigation, keys with keyboard follow the mapping below. Other keys (color keys, playback control keys etc.) are only accessible from remote control widget.
- ←↑→↓ cursor keys move the focus
- Backspace maps to the Return/Back key
- Enter activates the currently focused element


### Remote control {#remote-control}

In addition to basic keyboard controls, the Opera TV Store Emulator also provides a more comprehensive remote control that also simulates the colored keys (red, green, yellow, blue) and a set of media controls (play/pause, stop, rewind, fast-forward).

<figure class="figure">
	<img src="{{ page.id }}/RemoteControllerForSDK4x.png" alt="The Opera TV Store Emulator’s remote control" class="figure__media">
	<figcaption class="figure__caption">The Opera TV Store Emulator’s remote control</figcaption>
</figure>



## Notice {#notice}

- In order to simulate [Spatial Navigation][3] run Opera browse from command line using arg "enable-spatial-navigation
- H.264 support is available from Opera version 25
- For information about the specific multimedia formats that can be used, please refer to the article on [HTML5 audio/video support in Opera TV Store applications][4].

[3]: https://dev.opera.com/tv/tweaking-spatial-navigation-for-tv-browsing/
[4]: http://dev.opera.com/articles/view/html5-audio-video-support-in-opera-tv-store-applications/

- SDK 4.x and Opera desktop are both Blink based.
- Chromium versions installed on real devices is different (older) than Chromium version in your Opera Desktop browser (is newer). Because of that some in-compatibilities may occur. (you may register in on Opera TV Store forum)

## Support {#support}

Opera Software does not provide any official support for the Opera TV Emulator. However, a number of communication channels are available:

- Join our developer community [forums][5], where you’ll find a dedicated section on TV content development.
- Get notified of updates to the Opera TV Emulator on the [tv-emulator-external@list.opera.com mailing list][6].

[5]: http://forums.opera.com/categories/en-opera-tv-store
[6]: https://list.opera.com/mailman/listinfo/tv-emulator-external
