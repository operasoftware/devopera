---
title: Opera Mobile 10.1 Labs Release for Maemo
authors:
- anders-hockersten
intro: 'Last week, we released the first beta of Opera Mobile 10.1 for S60. Those with Maemo devices don’t need to feel left out though: we have been working hard at keeping the Maemo code in step with the other Opera Mobile releases, and we are proud to present another labs release for the Nokia N900 and N810/N800 – Opera Mobile 10.1 beta.'
tags:
- opera-mobile
license: os-asa
---

Last week, we released [the first beta of Opera Mobile 10.1 for S60][1]. Those with Maemo devices don’t need to feel left out though: we have been working hard at keeping the Maemo code in step with the other Opera Mobile releases, and we are proud to present another labs release for the Nokia N900 and N810/N800 — Opera Mobile 10.1 beta.

[1]: http://my.opera.com/operamobile/blog/2010/07/15/testers-wanted-opera-mobile-10-1-beta-for-symbian-s60

The previous labs release for Maemo was the first time [Carakan][2], our new JavaScript engine, was released on a mobile device. However, JIT support was not ready for that release, which meant that it was not as fast as we wanted it to be. Luckily our JavaScript gurus have been working hard on JIT support for ARM CPUs, which means that we are finally able to offer JIT support. This makes Opera Mobile 10.1 beta the browser with the fastest JavaScript engine on the Maemo platform!

[2]: http://my.opera.com/core/blog/2009/12/22/carakan-revisited

We have also included support for Geolocation. This means that sites can now use the Geolocation API to find out where you are located (provided you give your permission first, of course), and use that to present you with information relevant to your location. For an example of Geolocation in action, check out this [demo][3].

[3]: http://html5demos.com/geo

<figure block="figure">
	<a href="{{ page.id }}/sunspider-full.png"><img elem="media" src="{{ page.id }}/sunspider-full-t.png" alt="Sunspider test page"></a>
	<a href="{{ page.id }}/sunspider-zoomed.png"><img elem="media" src="{{ page.id }}/sunspider-zoomed-t.png" alt="Sunspider test page, zoomed"></a>
</figure>

## Changelog:

- Geolocation support
- JIT support for the JavaScript engine
- Better support for popup windows
- Power management support
- Extra empty tabs will no longer be opened if the browser is set as the default
- A very large number of bugfixes and enhancements to the UI and the rendering engine

## Known issues:

- Geolocation may not always update using the most precise source (most commonly, this means it will update using cell tower data instead of GPS)
- Adobe Flash and other plugins are not supported
- Screen tearing may be visible when panning, especially in portrait mode
- The built-in on-screen keyboard is not supported, use the physical keyboard or the on-screen keyboard included with Opera Mobile
- The new panning algorithm is not optimized with regards to page rendering
- Panning may sometimes move at much higher speeds than expected

[Download and install Opera Mobile 10.1 beta][8] on your Nokia N800/N810/N900 using the phone’s default browser. If you have previously installed Opera Mobile 10 on your phone, Opera Mobile should be updated automatically through the Application Manager.

[8]: http://www.opera.com/download/get.pl?sub=++++&id=32891&location=270&nothanks=yes

In case you encounter problems, please report bugs and issues using our [bug wizard][9]. We also welcome feedback on our [forums][10]. We are especially interested in regressions (bugs that were not present in the previously released version).

[9]: https://bugs.opera.com/wizard
[10]: http://my.opera.com/community/forums/forum.dml?id=9

Best regards, The Smooth Sailing Team at Opera Software’s Göteborg, Sweden office.
