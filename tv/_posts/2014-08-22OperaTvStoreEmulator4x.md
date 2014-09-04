---
title: Opera TV Emulator 4.x User Guide
authors:
- KrystianGorski
intro: 'The Opera TV Store Emulator allows web developers to test HTML5 and CE-HTML content for TVs and other appliances running the Opera Devices SDK  as well as HTML-based applications for the Opera TV Store to see how it will behave under Opera TV Store'
tags:
- developer-tools
- tv-emulator
- emulator
- tv
cover: png
license: cc-by-3.0
---

## About the Opera TV Emulator 4.x

The Opera TV Store Emulator allows web developers to test HTML5 and CE-HTML content for TVs and other appliances running the [Opera Devices SDK][2], as well as HTML-based applications for the [Opera TV Store][3]  to see how it will behave under Opera TV Store.

[2]: http://www.opera.com/business/devices/
[3]: http://www.opera.com/business/tv/store/

- [Description](#description)
- [Features](#features)
- [Installation](#install)
- [Manual](#manual)
	- [Keyboard](#keyboard)
	- [Remote control](#remote-control)
- [Notice](#notice)
- [Support](#support)


## Description {#description}

The Opera TV Emulator allows web developer to test HTML5 and CE-HTML content for TVs and other appliances running the [Opera Devices SDK 4.x][2] (For SDK 3.x emulation use Opera TV Emulator 3.4), as well as HTML-based applications for the [Opera TV Store][3].
It is created as an extension for the Opera 23+ Desktop browser.

## Features {#features}

- Overscan - be able to see how your app looks like when overscan occurs
- Default CSS TV colors
- Remote control widget is enabled all the time and is located on the bottom of the screen. It is possible to hide it, when clicking in dash icon.
- Functional key mappings - VK_KEY button emulation, including directional, enter, back and colour buttons (r,g,b,y)
- Draggable popup with information appears when window.close function is called
- localStorage disabled - when localStorage is used error popup appears

## Installation {#install}

1. Download the latest version of the Opera TV Store Emulator extension for [Opera][7]
2. open extensions tab
3. drag&drop extension on extensions tab
4. After the installation is finished you can check "Allow access to file URLs" to emulate local files - e.g file://foo/bar/index.html

[7]: http://apps.tvstore.op-cdn.net/opera-tv-store-emulator/description_page/OperaTVStoreEmulator.nex

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

In addition to basic keyboard controls, the Opera TV Emulator also provides a more comprehensive remote control that also simulates the colored keys (red, green, yellow, blue) and a set of media controls (play/pause, stop, rewind, fast-forward).

<figure class="figure">
	<img src="{{ page.id }}/RemoteController4x.png" alt="The Opera TV Store Emulator’s remote control" class="figure__media">
	<figcaption class="figure__caption">The Opera TV Store Emulator’s remote control</figcaption>
</figure>



## Notice {#notice}

- SDK 4.x and Opera desktop are both Blink based.
- In order to simulate Spatial Navigation run Opera browse from command line using arg "enable-spatial-navigation
- H.264 support will be available in Opera version 25 which is planned to be released in October 2014. For the moment you can use developer version of Opera 25
- For information about the specific multimedia formats that can be used, please refer to the article on [HTML5 audio/video support in Opera TV Store applications][16].

[16]: http://dev.opera.com/articles/view/html5-audio-video-support-in-opera-tv-store-applications/

- Chromium versions installed on real devices is 35 while Chromium version in your Opera browser is higher. Because of that some in-compatibilities may occur. (you may register in on Opera TV Store forum)

## Support {#support}

Opera Software does not provide any official support for the Opera TV Emulator. However, a number of communication channels are available:

- Join our developer community [forums][30], where you’ll find a dedicated section on TV content development.
- Get notified of updates to the Opera TV Emulator on the [tv-emulator-external@list.opera.com mailing list][31].

[30]: http://forums.opera.com/categories/en-opera-tv-store
[31]: https://list.opera.com/mailman/listinfo/tv-emulator-external
