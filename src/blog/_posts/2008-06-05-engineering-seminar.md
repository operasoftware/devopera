---
title: Graphics Demos
authors:
- tim-johansson
tags:
- 3d
- svg
- canvas
- coreblog
license: cc-by-3.0
---

<p>My name is Tim Johansson, I am a core technology developer at Opera.
I work in the core graphics team which is responsible for all the
rendering (of web pages, SVG and &lt;canvas&gt;) and image decoding in Opera.</p>
<p>In the middle of December Opera had an engineering seminar outside
Oslo in Norway. At the seminar there were a few presentations. I gave
a presentation about graphics in Opera and showed a few demos. In this
post I will write about two of the demos, and link to videos of them.</p>
<h2>Opera Flashlight</h2>
<p>One of the first assignments I had at Opera was to work on a
technology for platform independent graphics, which is now
used in some of Operas products including the Opera SDK.<br />
When working on it I quickly realized that this technology would make
it easy to upload Opera to a texture in a 3d application.<br />
Since I had been working on a 3d engine for fun in my spare time I
spent a late evening integrating Opera into my 3d engine. The place I
thought sounded most fun to add it was as the projective texture used
for the flashlight in the 3d engine.</p>
<p>This video demonstrates the result of that late night hack more
than 3 years ago.
</p>
<!-- Flash movie tag-->
<object width="425" height="344"><param name="movie" value="https://www.youtube.com/v/P02k4iBhRtc&amp;hl=en" /><param name="wmode" value="transparent" /><embed src="https://www.youtube.com/v/P02k4iBhRtc&amp;hl=en" type="application/x-shockwave-flash" wmode="transparent" width="425" height="344" allowscriptaccess="never" /></object>

<h2>Hardware acceleration</h2>
<p>One of the things I have been working on lately is hardware
acceleration of the vector graphics library used for SVG and &lt;canvas&gt; in
Opera using 3d hardware (through OpenGL and Direct3D).</p>
<p>In order to get the most performance from rendering SVG/&lt;canvas&gt; in
hardware it is good to avoid reading the rendered image back from the
graphics card to system memory since that is a slow operation.<br />
This can be solved by rendering all of Opera (including UI and web
pages) in hardware.
Rendering Opera in hardware also makes it possible to add visual effects
without any additional CPU cost.</p>
<p>This video shows a demo of Opera running fully hardware accelerated.
The demo build used in this video is an internal Opera core technology
reference build with hardware acceleration enabled.
Hardware acceleration is still experimental and is not in any released
or soon to be released products.
</p>

<!-- Flash movie tag-->
<object width="425" height="344"><param name="movie" value="https://www.youtube.com/v/MkKCsrh2ESA&amp;hl=en" /><param name="wmode" value="transparent" /><embed src="https://www.youtube.com/v/MkKCsrh2ESA&amp;hl=en" type="application/x-shockwave-flash" wmode="transparent" width="425" height="344" allowscriptaccess="never" /></object>
