---
title: Progressive web app install banners come to Opera for Android
authors:
- andreas-bovens
intro: ‘In Opera 36, we’ve started showing a “web app install banner” for sites that meet a set of criteria, qualifying them as a progressive web app.'
tags:
- browser
- mobile
- opera
license: cc-by-3.0
---

Since we first shipped support for web manifest and “add to home screen” in Opera 32 for Android [last year](https://dev.opera.com/articles/installable-web-apps/), we’ve seen an increasing amount of interest in progressive web apps.

Here at Opera, we’re excited about progressive web apps’ potential to bring the web on par with native apps’ capabilities, and this while avoiding the whole app store submission process — indeed, web apps can be discovered in a low friction way on the web, and changes can be pushed instantly to all users, while preserving their privacy with a conservative ask-when-needed permissions model. Additionally, from our initial observations, it seems like web apps are especially suited for devices with limited storage space, which is great news. If you haven’t seen it yet, I recommend reading [Flipkart’s interesting report](https://developers.google.com/web/showcase/case-study/flipkart) about the boost in conversions and re-engagements they experienced after launching their [Flipkart Lite](https://m.flipkart.com/) web app back in November 2015.

However, one hurdle with our implementation thus far has been that, in order for progressive web apps to appear like native apps on the home screen, users have to tap the + sign, and pick “Add to home screen” by themselves, and that can be quite a roadblock.

That’s why in Opera 36, we’ve started showing a “progressive web app install banner” for sites that meet a set of criteria, qualifying them as a progressive web app. These criteria are as follows. The site must:
- be served over HTTPS
- have a manifest with a `short_name` and `name`, `start_url`, and 144x144 PNG icon.
- have a Service Worker (making sure that the `start_url` functions offline)

In addition, we also have a user engagement condition, so as to not show the install banner too aggressively. The condition there is that:
- the user has visited your site at least twice, with 5 minutes or more between visits. Careful readers will notice these conditions are the same as in [Chrome](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en), but we may change this in the future.

If you want to try this out without waiting between visits, simply go to `opera:flags`, enable “Bypass user engagement checks” and restart the browser. If you then visit a site like [WAVE-PD1](https://alexgibson.github.io/wavepad/), you’ll get prompted right away to add the web app in question to your home screen.

It’s also worth noting that in some cases, you may want to cancel the install banner from being shown. You can do this by intercepting the `onbeforeinstallprompt` event and preventing default on the event. You can see this in action on [Flipkart Lite](https://m.flipkart.com/). When you load their site (with “Bypass user engagement checks” enabled), you’ll feel a vibration and a small icon animation in the top right corner, suggesting to “Install this webapp to your phone”. If the user taps this icon, Opera’s own install banner is shown, which the user is likely to accept; if she does not tap the icon, Flipkart can remind her one of the next times, whenever it seems convenient to do so. This is of course somewhat more complex to implement, but it offers more possibilities to re-engage the user at the right point in time, later on.

That’s it! Try it out with the apps listed on our [Progressive Web Apps](https://operasoftware.github.io/pwa-list/) list, and let us know how it goes!


