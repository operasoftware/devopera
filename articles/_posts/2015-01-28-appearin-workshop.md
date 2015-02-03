---
title: Appear.in workshop and extensions
authors:
- andreas-bovens
intro: 'In early December 2014, we invited the team behind the fantastic WebRTC-powered [appear.in](https://appear.in/) video chat service for a 1-day workshop in Opera’s Oslo office, and, among other things, we came up with three cool appear.in extensions.'
tags:
- extensions
- webrtc
cover: png
featured: featured
license: cc-by-3.0
---

## Background

In early December 2014, we invited the team behind the fantastic WebRTC-powered [appear.in](https://appear.in/) video chat service for a 1-day workshop in Opera’s Oslo office: for about 6 hours, we sat together with engineers, designers and product people from both companies — mostly powered by good coffee and tasty pepperkake — and came up with a number of experiments using [appear.in](https://appear.in/).

<figure class="figure">
	<img src="{{ page.id }}/panorama.jpg" alt="Appear.in and Opera team workshop" class="figure__media">
	<figcaption class="figure__caption">The Appear.in and Opera workshop in December</figcaption>
</figure>

A number of these experiments focused on various backend improvements, but we also looked at a number of interesting frontend tweaks: most of these were implemented as extensions as this allowed us to to quickly prototype functionality on top of the existing appear.in service, without making major changes to the underlying code.

We’ve polished these extensions a bit more and have published them to the Opera extensions catalog. Here’s an overview.

## Appear.in Pop

[extension page](https://addons.opera.com/extensions/details/appearin-pop/), [source](https://github.com/operasoftware/appearin-pop)

This is a simple extension to quickly create an appear.in room. Simply click the appear.in icon, and then “Go to room”. The extension remembers your three most recent rooms, and allows you to edit the suggested room name to something of your liking. Super simple, but we found it comes in handy for starting an appear.in call within seconds.

<figure class="figure">
	<img src="{{ page.id }}/pop.jpg" alt="The Appear.in Pop extension" class="figure__media">
	<figcaption class="figure__caption">The Appear.in Pop extension in action</figcaption>
</figure>

## Appear.in Social

[extension page](https://addons.opera.com/extensions/details/appearin-social/), [source](https://github.com/operasoftware/appearin-social)

This extension adds a small appear.in icon in Facebook chat and Twitter DM, which you can use to quickly generate an appear.in link for your contacts to use. Instant video chat gratification!

<figure class="figure">
	<img src="{{ page.id }}/social.jpg" alt="The Appear.in Social extension" class="figure__media">
	<figcaption class="figure__caption">The Appear.in Social extension integrated in Facebook chat</figcaption>
</figure>

## Appear.in Handoff

[extension page](https://addons.opera.com/extensions/details/appearin-handoff/), [source](https://github.com/operasoftware/appearin-handoff)

This extension allows you to easily transfer an ongoing appear.in video chat from your desktop browser to your Android phone. Check out the video below for a demonstration of the desktop-to-mobile flow.

<figure class="figure">
	<iframe src="https://www.youtube.com/embed/d7hQIgj13UE" width="570" height="320" allowfullscreen class="figure__media"></iframe>
</figure>

## It’s up to you!

If you’re interested in creating your own extension, you can start with the [Appear.in API documentation](https://developer.appear.in/) and our [extension docs](https://dev.opera.com/extensions) and take it from there.
