---
title: Beta release of OperaChromiumDriver
authors:
- andreas-bovens
intro: 'This is an initial release of OperaChromiumDriver, a WebDriver implementation that enables test automation of Chromium-based Opera products.'
tags:
- developer-tools
- testing
license: cc-by-3.0
---

## Driving the browser

Back in the Presto days, we released several versions of [OperaPrestoDriver](https://github.com/operasoftware/operaprestodriver) (formerly known as OperaDriver), a WebDriver implementation for running automated tests on Presto-based Opera instances on desktop and Android. After we switched our Opera for desktop and Opera for Android products to run on Chromium/Blink, such a WebDriver implementation was missing — until today, that is!

[OperaChromiumDriver](https://github.com/operasoftware/operachromiumdriver) is a WebDriver implementation derived from [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) and adapted by [Opera](http://www.opera.com/) that enables programmatic automation of Chromium-based Opera products for the desktop and Android platforms. This initial beta release of OperaChromiumDriver can be used on Chromium-based versions of Opera starting from version 26 onward.

## About WebDriver

For those not familiar with the WebDriver concept, it is a general purpose library for automating testing across web browsers. WebDriver can run various tests on your web pages, just as if a real user was navigating through them. It can emulate actions like clicking links, entering text and submitting forms, and reporting results back to you so you know that your website works as intended. That way, you can easily test if your web application is functioning correctly without tedious manual testing routines.

## About this release and the work ahead

This is an initial binary-only beta release for several platforms. You can find the binaries under [the releases tab](https://github.com/operasoftware/operachromiumdriver/releases) on the GitHub OperaChromiumDriver page.

The plan in the weeks ahead is to extract Opera-specific code from our implementation and to generalize those parts of the code that could handle any Chromium-embedding browser. This code is going to be upstreamed to Chromium soon.

Once that is done, the remaining OperaChromiumDriver source code (using ChromeDriver code as a module) will be posted to our [OperaChromiumDriver repository](https://github.com/operasoftware/operachromiumdriver).

## Give it a spin

So, have a look at the [documentation](https://github.com/operasoftware/operachromiumdriver#documentation), give it a spin on Opera 26+ (at present, that means Opera Next or Opera Developer), and [let us know](https://twitter.com/odevrel) how it goes.

And if you find bugs, you are most welcome to [report them](https://github.com/operasoftware/operachromiumdriver/issues) on GitHub.
