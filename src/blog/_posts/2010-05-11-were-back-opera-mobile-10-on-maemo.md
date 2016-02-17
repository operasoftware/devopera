---
title: We’re Back! Opera Mobile 10 on Maemo
authors:
- fredrik-ohrn
intro: 'We’re proud to present the first preview build of Opera Mobile 10 for Nokia N900 and N800/N810.'
tags:
- opera-mobile
license: os-asa
---

We’re proud to present the first preview build of Opera Mobile 10 for Nokia N900 and N800/N810.

Back in 2005, Nokia released the Nokia N770. The included web browser was developed by Opera Software. In 2008, Nokia chose to stop including Opera with Maemo, switching instead to a browser developed internally. Today’s preview build marks our unofficial return to the Maemo platform, after a little over 3 years of absence.

This Maemo version of Opera Mobile 10 was created as a hobby project by a small team of developers in their spare time. In total, about 6 man-weeks were spent on creating the release. It’s worth pointing out that this is not an officially-supported release. As such, it has not undergone our usual quality assurance processes, and at times may not feel as polished or complete as an official release. This also means that there may never be a “final” release of Opera Mobile 10 for Maemo devices, since it’s just that much more fun to add shiny new features rather than fixing boring old bugs.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/n900-n800-maemo.png" alt="Opera Mobile running on N900 and N800">
</figure>

The preview build contains the same features available in Opera Mobile 10 for Symbian and Windows Mobile smartphones. These include fast and economical browsing with Opera Turbo, bookmark and Speed Dial sync with other Opera products, and of course multiple tabs. For more information, see our rundown of [Opera Mobile 10 features][2].

[2]: https://www.opera.com/mobile/features/

We have two additional treats for Maemo users: this is the first public release of Opera Mobile to include [Carakan — our new Javascript engine][3].

[3]: http://my.opera.com/core/blog/2009/12/22/carakan-revisited

Unfortunately, JIT support for ARM was not yet stable enough to include, but the speed advantage we gain from Carakan compared to Opera Mobile running on other platforms is already quite substantial.

The second treat is the Mobile debut of our [Vega rendering library][4] which — among other things — is responsible for rendering all the exciting new eye-candy like [CSS3 rounded corners and shadow effects][5].

[4]: http://my.opera.com/core/blog/2009/02/04/vega
[5]: https://dev.opera.com/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/

There are a number of known issues with this build, listed below:

- Adobe Flash and other plugins are not supported.
- Screen tearing may be visible when panning, especially in portrait mode. We expect to fix this in a future update.
- The built-in on-screen keyboard is not supported. Use the physical keyboard or the on screen keyboard included with Opera Mobile.
- There is no power management support. In practice this means that if you open a page with animations and leave Opera running, you will soon be using a payphone. Power is drained even when Opera is running in the background and/or the screen is turned off.
- If you set Opera as the default browser, for example by installing the [Browser Switchboard][6], an extra empty tab will get opened every time you open a link from an external application.

[6]: http://browser-switch.garage.maemo.org

Opera Mobile 10 on Maemo supports portrait screen mode, and will choose screen rotation automatically by default, based on the device orientation. It is also possible to select a specific screen mode manually from the settings menu. This works out-of-the-box on the N900. For the setting to work on the N800/N810 you need to install an additional [kernel driver for rotation support][7].

[7]: http://wiki.maemo.org/Rotation

The fullscreen button on N800/N810 only affects the native titlebar and menu. The “fullscreen” setting in the settings menu only affects Opera Mobile’s UI elements.

[Download and install Opera Mobile 10][8] on your Nokia N800/N810/N900 using the phone’s default browser.

[8]: https://www.opera.com/download/get.pl?sub=++++&id=32891&location=270&nothanks=yes

In case you encounter problems, please report bugs and issues using our [bug wizard][9]. We also welcome feedback on our [forums][10].

[9]: https://bugs.opera.com/wizard
[10]: http://my.opera.com/community/forums/forum.dml?id=9

Many thanks to the other Opera Mobile teams, as well as to the Carakan and Graphics teams for all their help in making this possible!

Best regards, The Smooth Sailing Team at Opera Software’s Göteborg, Sweden office
(Fredrik Öhrn, Gustav Tiger, Vjaceslavs Klimovs and Anders Höckersten).
