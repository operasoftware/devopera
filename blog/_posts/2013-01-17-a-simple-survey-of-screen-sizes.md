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
layout: post
---

<p>I got a bit frustrated the other day. I&#39;d come across yet another site that was designed for at least a 1280-width screen, meaning it wouldn&#39;t fit on my trusty 1024-width laptop and I had to scroll horizontally. &quot;Yada yada, first world problems&quot;, I hear you say, but considering the small effort it takes to make a web page look good at different widths (and the abundance of <abbr title="Responsive Web Design">RWD</abbr> tutorials out there now), surely it&#39;s worth web designers making such tweaks. Besides, there&#39;s got to be many other users in my position, hasn&#39;t there?</p>

<p>I decided to find out, so I took a sample of around 5,000 unique visitors to my demo pages at <a href="http://people.opera.com/danield/">people.opera.com/danield</a> and noted their screen sizes based on the JavaScript <code>screen.width</code> and <code>screen.height</code> properties. Of course, this audience is going to be pretty techie and not representative of the world at large, so I did the same sampling at the same time on a long-running personal site of mine aimed at new dads &#x2014; a pretty non-techie audience.</p>

<h3>Ooh, pretty graphs!</h3>

<p>The scatter plots below show the screen dimensions for each group of users &#x2014; vertical scale is screen height and horizontal scale is screen width.</p>

<p><a href="{{ page.id }}/screen-dimensions.html"><img src="{{ page.id }}/screen-dimensions.png" alt="Scatter plots showing screen dimensions for a sample of technical and non-technical users." /></a></p>

<p><em>Click the image to see the <a href="{{ page.id }}/screen-dimensions.html">original graphs and their raw data</a>.</em></p>

<h4>Top 3 screen sizes</h4>

<p>Technical users:</p>
<ol>
    <li><strong>1366x768</strong> - 18.1% of users</li>
    <li><strong>1920x1080</strong> - 14.2% of users</li>
    <li><strong>1280x800</strong> - 9.7% of users</li>
</ol>

<p>Non-technical users:</p>
<ol>
    <li><strong>1366x768</strong> - 15.5% of users</li>
    <li><strong>320x480</strong> - 14.7% of users</li>
    <li><strong>1024x768</strong> - 12.5% of users</li>
</ol>

<h3>Observations</h3>

<ol>
    <li>The first thing that stands out is that both graphs have a sort of slanted V-shape. These are two rough lines showing screens in portrait and landscape format, with a slight variation due to differing screen ratios. This indicates non-technical users tend to have a higher ratio of portrait to landscape devices than technical users.</li>
    <li>Not surprisingly, there&#39;s a high concentration of large screens or multiple monitors among techies but this is clearly not representative of a wider audience.</li>
    <li>Non-technical users have less variety in the portrait format devices they use. It looks pretty much like iPhone-size (320x480) and iPad-size devices (768x1024) rule in this group. (Note I&#39;m ignoring manufacturer and OS in this study.)</li>
    <li>Non-technical users have notably smaller screens than technical users, on the whole, and my beloved 1024x768 screen size is indeed very popular with non-techies. Admittedly that resolution could be a horizontal tablet or a laptop but I don&#39;t care. <a href="http://blog.cloudfour.com/responsive-design-for-apps-part-1/">Jason Grigsby explains very well</a> how the distinction between such devices is rapidly disappearing.</li>
</ol>

<h3>Takeaway</h3>

<p>This may be just a small, simple experiment, but what lessons can we learn from it? Namely that devices in use in the real world are much more varied than we might think, and much more mobile-centric than I personally expected. As web designers and developers, we often socialise with a similar crowd of colleagues, friends and those we meet at tech events. It&#39;s been said before, but it&#39;s important we look out of this bubble when designing web apps and sites. Real users out there in scary non-geek land are the ones we should be thinking of and getting feedback from if we want our creations to reach their full potential.</p>
