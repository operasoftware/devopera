---
title: 'Technology Preview: Gears-Enabled Opera Mobile 9.5'
authors:
- andreas-bovens
intro: 'We’re happy to announce our Opera Mobile 9.5 technology preview with support for [Gears](http://gears.google.com/), a Google open source project that enables more powerful web applications. Besides this Opera Mobile 9.5 technology preview, Gears is currently available for Firefox 1.5+, IE 6.0+, Internet Explorer Mobile 4.01+, Safari 3.1.1, and Android.'
tags:
- gears
- opera-mobile
license: os-asa
---

## This article is obsolete

It’s here for historical purposes only. Download the [latest version of Opera][1] or see what’s coming soon in [Opera.Next][2].

[1]: http://www.opera.com/browser/
[2]: http://www.opera.com/browser/next/

We’re happy to announce our Opera Mobile 9.5 technology preview with support for [Gears][3], a Google open source project that enables more powerful web applications. Besides this Opera Mobile 9.5 technology preview, Gears is currently available for Firefox 1.5+, IE 6.0+, Internet Explorer Mobile 4.01+, Safari 3.1.1, and Android.

[3]: http://gears.google.com/

The use cases for Gears differ somewhat between mobile and desktop devices. On mobile, Gears is perfect for creating a better user experience by allowing applications to cache data more efficiently, so you can cut down on bandwidth, and carry out processes discreetly in the background. On the desktop, Gears has ideal functionality for allowing your applications to function offline and synchronize data with the server when you get back online again. You can try this out for yourself with the various Gears samples [available on Google Code][4].

[4]: http://code.google.com/intl/enb/apis/gears/sample.html

## How to make use of Gears

Installing Gears is pretty easy. Install our Opera Mobile 9.5 technology preview build, go to the [Gears][5] web site and click the “Install Gears” button. This makes all the Gears APIs available, so users can take advantage of advanced functionality when they surf to Gears-enabled web sites.

[5]: http://gears.google.com/

The idea is that as a developer using Gears your web site should contain a piece of code that [detects][6] whether Gears is installed on a visiting browser, before your web application tries to access Gears APIs. The code should first initialize Gears by including `[gears_init.js][7]` , then do a check to see if `google.gears` is defined, which it will be if Gears is installed. If it isn’t, your code should probably redirect the user to the Gears installation page, or serve them up a more basic version of your application, depending on what is most suitable for your situation. If Gears is installed, then it should just continue running the rest of the code.

[6]: http://code.google.com/apis/gears/design.html#detecting
[7]: http://code.google.com/apis/gears/tools.html#gears_init

## Allowing your users to go offline

At the basic level, allowing your users to access a site offline is incredibly simple (it gets a bit more complex when you start involving dynamic data sources). All you need to add to your regular web site is:

- Some kind of special user interface functionality to give users with Gears installed the option to store the web site locally so it can be used offline.
- A manifest file, which is a JSON file that resides in the root of your web site’s server location. This file contains a `version` value, which allows Gears to track whether the site has been updated, and a series of `url` values, which are relative paths to all the files Gears needs to store locally for the web site to work offline.

When the user then selects the option to store the site locally, they will be able to access the site and work with it normally while offline, even down to accessing the same URL.

When you update your Gears-enabled web site, you should increase the `version` number inside the manifest file by a sensible iteration of your choosing. When Gears detects a new version number, it will automatically download a fresh copy of the site to the user’s computer. Google Code has a [full tutorial][8] on taking your site offline with Gears.

[8]: http://code.google.com/apis/gears/tutorial.html

## Enhancements on desktop and mobile web applications

Creating web applications that provide a smooth, responsive user experience is enough of a challenge over desktop, but on mobile devices it is even more difficult. Mobile networks have high latency and low bandwidth compared to desktop computers, meaning that you need to be extra careful with the amount of code an application requires, as well as the number of round trips to the server. Mobile devices have also less processing power than desktop computers, so you need to optimize very carefully. One last point to consider is that JavaScript is not great at integrating with mobile context and taking advantage of the hardware it is running on—it is not easy for it to access the user’s location, phone camera or address book.

Gears can solve many of these issues. You can ease the strain on your processor by splitting up JavaScript calculations into separate worker threads, which are background processes defined by Gears that can perform tasks on behalf of the browser. You can make applications more responsive by downloading data (it provides offline database functionality via [SQLite][9] ) and code onto your device and allowing much of your application’s functionality to run offline. On top of this, you can also use Gears to create application shortcuts for your web applications that will be visible in the file system.

[9]: http://www.sqlite.org/

## The Gears APIs

You can find more out about the Gears APIs on [the Gears web site][10], but here is a quick rundown of what’s available:

[10]: http://code.google.com/apis/gears/api_summary.html

- [Database API][11]: This allows persistent client side data storage, using a SQLite database, meaning that data can be stored on the client while the application is online, and then used to continue working while the application is offline.
- [Desktop API][12]: Provides functionality for integrating Gears applications with the desktop, for example creating shortcuts that will access web applications.
- [Factory API][13]: The `Factory` class is used to instantiate all other Gears objects, so it’s basically the central controlling API for the whole application. The easiest way to create a `Factory` object is to use [` gears_init.js `][14], as mentioned above.
- [HttpRequest Module API][15]: This API implements a subset of the standard W3C XMLHttpRequest specification, to make Ajax-type functionality available in the offline application, both in the HTML pages and background worker threads.
- [LocalServer API][16]: `LocalServer` is what allows Gears to cache an application’s files locally and serve them without having a network connection available. It in effect creates a virtual server for controlling Gears applications.
- [Timer API][17]: This API implements the standard Timer API found in the browser’s `Window` object inside Gears. This make timers available in the offline application, both in the HTML pages and background worker threads (see Worker Pool API below).
- [WorkerPool Module API][18]: Provides a way to define background worker processes—these allow JavaScript calculations/processing to be done in the background, taking some of the strain away from the browser, so that the application runs more smoothly, and the UI is less likely to become unresponsive. This is invaluable for mobile applications.
- [Geolocation API][19]: This API provides the best estimate of the user’s position using a number of so called location providers. The `getCurrentPosition` and `watchPosition` methods allow web applications to retrieve a user’s current position or watch how it changes over time. The `lastPosition` property allows to quickly and cheaply obtain the user’s last known position.

[11]: http://code.google.com/apis/gears/api_database.html
[12]: http://code.google.com/apis/gears/api_desktop.html
[13]: http://code.google.com/apis/gears/api_factory.html
[14]: http://code.google.com/apis/gears/tools.html#gears_init
[15]: http://code.google.com/apis/gears/api_httprequest.html
[16]: http://code.google.com/apis/gears/api_localserver.html
[17]: http://code.google.com/apis/gears/api_timer.html
[18]: http://code.google.com/apis/gears/api_workerpool.html
[19]: http://code.google.com/intl/ja/apis/gears/api_geolocation.html

## Summary

That’s it for now. We hope this brief foray into Gears has given you an insight into how it works and what it can do, and a thirst to learn more. Feel free to give feedback on the [Dev Forum][20].

[20]: http://my.opera.com/community/forums/forum.dml?id=3590

For further explanations and examples, we recommend looking into Google’s detailed [Gears API documentation][21].

[21]: http://code.google.com/intl/ja/apis/gears/design.html
