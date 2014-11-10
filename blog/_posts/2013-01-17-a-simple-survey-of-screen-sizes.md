---
title: A Simple Survey of Screen Sizes
authors:
- daniel-davis
tags:
- reference
- rwd
- responsive
- media-queries
- odin
license: cc-by-3.0
---

I got a bit frustrated the other day. I’d come across yet another site that was designed for at least a 1280-width screen, meaning it wouldn’t fit on my trusty 1024-width laptop and I had to scroll horizontally. “Yada yada, first world problems”, I hear you say, but considering the small effort it takes to make a web page look good at different widths (and the abundance of <abbr title="Responsive Web Design">RWD</abbr> tutorials out there now), surely it’s worth web designers making such tweaks. Besides, there’s got to be many other users in my position, hasn’t there?

I decided to find out, so I took a sample of around 5,000 unique visitors to my demo pages at [people.opera.com/danield](http://people.opera.com/danield/) and noted their screen sizes based on the JavaScript `screen.width` and `screen.height` properties. Of course, this audience is going to be pretty techie and not representative of the world at large, so I did the same sampling at the same time on a long-running personal site of mine aimed at new dads — a pretty non-techie audience.

### Ooh, pretty graphs!

The scatter plots below show the screen dimensions for each group of users — vertical scale is screen height and horizontal scale is screen width.

[![Scatter plots showing screen dimensions for a sample of technical and non-technical users.]({{ page.id }}/screen-dimensions.png)]({{ page.id }}/screen-dimensions.html)

_Click the image to see the [original graphs and their raw data]({{ page.id }}/screen-dimensions.html)._

#### Top 3 screen sizes

Technical users:

1.  **1366x768** - 18.1% of users
2.  **1920x1080** - 14.2% of users
3.  **1280x800** - 9.7% of users

Non-technical users:

1.  **1366x768** - 15.5% of users
2.  **320x480** - 14.7% of users
3.  **1024x768** - 12.5% of users

### Observations

1. The first thing that stands out is that both graphs have a sort of slanted V-shape. These are two rough lines showing screens in portrait and landscape format, with a slight variation due to differing screen ratios. This indicates non-technical users tend to have a higher ratio of portrait to landscape devices than technical users.
2. Not surprisingly, there’s a high concentration of large screens or multiple monitors among techies but this is clearly not representative of a wider audience.
3. Non-technical users have less variety in the portrait format devices they use. It looks pretty much like iPhone-size (320x480) and iPad-size devices (768x1024) rule in this group. (Note I’m ignoring manufacturer and OS in this study.)
4. Non-technical users have notably smaller screens than technical users, on the whole, and my beloved 1024x768 screen size is indeed very popular with non-techies. Admittedly that resolution could be a horizontal tablet or a laptop but I don’t care. [Jason Grigsby explains very well](http://blog.cloudfour.com/responsive-design-for-apps-part-1/) how the distinction between such devices is rapidly disappearing.

### Takeaway

This may be just a small, simple experiment, but what lessons can we learn from it? Namely that devices in use in the real world are much more varied than we might think, and much more mobile-centric than I personally expected. As web designers and developers, we often socialise with a similar crowd of colleagues, friends and those we meet at tech events. It’s been said before, but it’s important we look out of this bubble when designing web apps and sites. Real users out there in scary non-geek land are the ones we should be thinking of and getting feedback from if we want our creations to reach their full potential.
