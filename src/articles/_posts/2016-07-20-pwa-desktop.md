---
title: 'Progressive web apps running as native OS X apps'
authors:
- vlad-filippov
intro: 'Progressive Web Apps are getting ready for desktop.'
tags:
- pwa
license: cc-by-3.0
published: false
---

## Progressive Web Apps are getting ready for desktop

If you follow the Progressive Web App scene you’ve probably already seen multiple examples of the [Air Horner app](https://airhorner.com/) in mobile browsers such as Opera Mobile and Chrome for Android. However it is not easy to get your favorite PWA (such as Air Horner) to be a primary citizen on your favorite _desktop_ operating system.

Browser makers are working on getting better support for PWAs in desktop, but it’s not quite ready yet. This is why I started the [PWAify](https://github.com/vladikoff/PWAify) project. This project is powered by Node.js and Electron, which already have a huge community and provide ease of use for new and experienced developers. The PWAify project is still in the early experimental stages — use it at your own risk.

The goal of the PWAify project is to provide a solution for PWAs on desktop while we wait for browsers to develop support. In addition this project allows developers to experiment, give better feedback to browser makers, and improve the [Web App Manifest specification](https://www.w3.org/TR/appmanifest/).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/android-vs-osx.jpg" alt="">
	<figcaption elem="caption">What the installed Air Horner app looks like on Android and OS X</figcaption>
</figure>

## Bringing your PWA to desktop

To create a sample app with PWAify follow the [latest documentation on GitHub](https://github.com/vladikoff/PWAify#readme).

Currently the simplest use case is to just provide an HTTPS URL to the remote app. For example:

	pwaify https://voice-memos.appspot.com/

There are some advanced options for the tool as well. You can specify the platform of your choice and an icon file once you are ready to distribute your app:

	pwaify https://voice-memos.appspot.com/ \
		--platforms=darwin \
		--icon chrome-touch-icon-384x384.icns

When you run the `pwaify` command it fetches and processes the `manifest.json` for the given PWA. Some early work is in place to simplify the process of generating desktop icons by looking at icons provided in the manifest. The current downside of the `pwaify` approach is the size of the executable for each application, but there is already huge list of [Electron apps](http://electron.atom.io/apps/) out there that require the download. In my mind I try not to worry about the download size. Instead I try to focus on the future of progressive apps instead.

Here’s an example of [a simple progressive web app](https://voice-memos.appspot.com/) working on Windows, Ubuntu and OS X:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/multi-platform.jpg" alt="">
	<figcaption elem="caption">Voice Memos PWA running on Windows, Linux, and OS X</figcaption>
</figure>

For the purposes of the screenshot I rebuilt the Voice Memos app on all platforms. It is also possible to setup a build server for your application once you want to add multi-platform support. You can use the PWAify tool today by pointing it at your own app or one of the apps in the [pwa.rocks list](https://pwa.rocks/).

Besides the Voice Memos application, my second favorite example is the 2048 tile game, by using PWAify with [2048-opera-pwa.surge.sh](https://2048-opera-pwa.surge.sh/) I can easily jump back to the saved game state after I restart the application.

The PWAify project is open source, so you can fork it and extend functionality. For example you can add auto-update and custom UI for your application. In the spirit of keeping as much as possible of the application on the web I suggest only introducing minimal changes to the application wrapper. Treat the PWAify’d version of the app just like any other desktop browser would treat it.

## The Future

Recently [Microsoft announced](https://medium.com/web-on-the-edge/progressive-web-apps-on-windows-8d8eb68d524e) that the Windows Store will start supporting the W3C Web App Manifest. This will help you distribute the applications for Windows Store users, but you don’t have wait for Microsoft. There is nothing stopping you today to build one version of your web application and get it in the hands of your users on desktop. You can even go beyond Windows users and distribute on other operating systems.

Some future ideas for the PWAify project itself include:

* implementing more of the Web App Manifest spec.
* reloading `manifest.json` from the server, which would allow dynamically changing certain properties of the application by updating the `manifest.json` remotely.
* experimenting with new manifest features, such as window size and minimal UI.
* working with the Electron app community to make it easier to generate application icons for cross-platform use.

Tools like Electron and PWAify put yourself in control of application distribution while allowing you to use the latest web technologies. Write one awesome progressive web application for multiple distribution targets!

Feel free to [file an issue against the PWAify project](https://github.com/vladikoff/PWAify/issues/new) if you have other ideas that will benefit the future of progressive web apps.
