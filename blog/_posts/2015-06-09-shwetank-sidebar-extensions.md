---
title: 'New in Opera 30: Sidebar Extensions!'
authors:
- shwetank-dixit
intro: 'With Opera 30, we have made it possible to have extensions on the browser sidebar! Check out the goodness'
published: false
tags:
- extensions
- sidebar
license: cc-by-3.0
---

<figure block="figure">
	<img elem="media" src="{{ page.id }}/sidebar-extensions.png" alt="Opera 30 running sidebar extensions">
	<figcaption elem="caption">Opera 30 running sidebar extensions</figcaption>
</figure>

With Opera 30, we finally have support for sidebar extensions in the stable build! In other types of extensions, say, ones with popups, the popup window gets closed quickly, it's cumbersome to open and close it all the time in case you use it often. 

There are certain types of extensions where you might want it open all the time (or at least, a lot of the time), and we've added support for it in the form of sidebar extensions. The sidebar is a place on the left side of the browser which has room for additional functionality for the user. The sidebar consists of the icons list on the left hand side of the sidebar and the clicking on an incon from the icons list will open it’s corresponding panel.

The panel is an html page specified inside the extension which will house the main content of the extension. Every sidebar action must have a panel page specified. You don't need to define any special permission in the manifest to make a sidebar extension, though you do have to define details regarding it in the manifest (just like you do with browser actions). In fact, for sidebar extensions, we call them *sidebar actions*.

Also note that it is possible to have extensions which have a button on the toolbar, as well as a sidebar. So you can have your existing extension which uses, say, a popup *and* add support for it in the sidebar as well.

For more information, read our [tutorial on how to build sidebar extessions](https://dev.opera.com/extensions/tut_sidebar_actions.html) and check out the [sidebar extension API](https://dev.opera.com/extensions/sidebarAction.html). 

We've had support for sidebar extensions in the Developer and Beta channels for a while now, and some people in the extension community have already made some great extensions with sidebar support. A few of them worth checking out are:

## Site Settings Sidebar

[Site Settings Sidebar](https://addons.opera.com/en/extensions/details/site-settings-sidebar/) enabled you to control site specific settings from the sidebar itself. It makes it really conveneient to change such things like geolocation, zoom and camera settings etc.

## V7 Bookmarks and Notes

[Vux777](https://addons.opera.com/en/search/?developer=vux777) has created some great extensions, some of which utlize the sidebar too. In particular, take a look at the [V7 Bookmarks](https://addons.opera.com/en/extensions/details/v7-bookmarks/) extension, which puts all your bookmarks on the sidebar, and does a lot more too. Another one of his is [V7 Notes](https://addons.opera.com/en/extensions/details/v7-notes/) which re-creates a notes panel that some of your older users might be very familar with ;)

## Browse++ Sidebar

This is by your truly. [Browse++ Sidebar](https://addons.opera.com/en/extensions/details/browse-sidebar/) is a quick port of an extension I had created a while ago, called [Browse++](https://addons.opera.com/en/extensions/details/browse/). I think it works better as a sidebar extension. You can get a vertical list of all your open tabs (and switch to them), save notes, and also re-open any of the last 50 closed tabs. 

You can browser more sidebar extensions by going to our [addons store](addons.opera.com/en/extensions/?tag=sidebar). 

