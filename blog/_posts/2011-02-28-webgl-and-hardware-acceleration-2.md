---
title: WebGL and Hardware Acceleration
authors:
- tim-johansson
tags:
- webgl
- hardware-acceleration
- 3d
- opera
- canvas
- coreblog
license: cc-by-3.0
---

<p>A long time ago, in an office far far away...Opera released a custom build showing an implementation of a <a href="http://my.opera.com/timjoh/blog/2007/11/13/taking-the-canvas-to-another-dimension" rel="nofollow">3D canvas context</a>. Now, more than 3 years later, we are releasing the first public build with a standards-based 3D canvas implementation using <a href="http://www.khronos.org/webgl" rel="nofollow">WebGL</a> for Windows.</p> <img src="{{ page.id }}/opera11webgl.png" alt="A WebGL demo running in the Opera 11 preview with WebGL and Hardware Acceleration for Windows" height="300" style="float:right; margin: 10px 0 10px 10px;" />

<p>WebGL is a standard developed by the <a href="http://www.khronos.org">Khronos group</a>, where Opera is an active member participating in the standardization process. We have been working on a WebGL implementation since early 2009, when the standardization process started. The specification has been changing quite frequently over the past few years, but now it is starting to mature and stabilise, which makes this the perfect time to release a public preview of our current WebGL implementation.</p>
<p>For those of you who have never heard of WebGL, it is a context to the <code>canvas</code> element which gives you hardware-accelerated 3D rendering in JavaScript. The API is based on OpenGL ES 2.0, which means that it is possible to run WebGL on many different devices, such as desktop computers, mobile phones and TVs. The <a href="http://khronos.org/webgl/wiki/Main_Page">WebGL public wiki</a> contains more information about the standard, including tutorials and lots of demos – so it is a good place to go if you want to see our WebGL implementation in action.</p>

<h2>Hardware acceleration</h2>
<p>In June 2008 – around the same time as our first 3D canvas experiments – we showed a video preview of our <a href="http://my.opera.com/core/blog/2008/06/05/engineering-seminar">fully hardware-accelerated renderer</a>. One of the requirements we had for enabling that code was that the software fallback – used when hardware acceleration is not available – should be at least as fast as what we were using in our desktop product at the time. To achieve that, we spent a lot of time and resources on optimizing our software renderer, which has been used in Opera&#39;s desktop browser since version 10.50 and has proven to be one of the fastest renderers around. Following the release of 10.50, we once again focused on our hardware renderer.</p>
<p>The results of this work have been rolled into this preview as well, meaning that this build also has full hardware acceleration enabled (on systems with compatible hardware and drivers).</p>

<p>Our hardware acceleration is a bit different from what other browsers have implemented. Most of them do full hardware acceleration of all draw operations, but only on Windows Vista and Windows 7 - dropping to a more limited set of accelerated draw operations on other platforms. Our implementation will feature full acceleration on any OS with sufficient hardware support. This means we can also use fully hardware accelerated draw operations on Windows XP, Linux, Mac OS X and OpenGL ES 2 capable devices such as recent smart-phones and web-enabled TVs.</p>

<h2>OpenGL</h2>
<img src="{{ page.id }}/opera_about_opengl.png" alt="opera:about showing the new Vega backend entry" height="300" style="float:right;margin: 10px 0 10px 10px;" />

<p>This build only has an OpenGL backend. That means your system must have an OpenGL 2.x compatible graphics card and related drivers for hardware acceleration and WebGL to work. In future builds we will also add a Direct3D backend, which will reduce the requirements on drivers and should work out of the box on most modern systems.</p>
<p>So how can you tell if hardware acceleration is enabled? There are two easy ways to check. The first option is to load some WebGL content – if it works that means your hardware and drivers are compatbile, and hardware acceleration is enabled in the browser. Alternatively, you can check the new &quot;Vega backend&quot; entry in <code>opera:about</code> – if the backend listed is <i>OpenGL</i>, you have hardware acceleration enabled; otherwise, the entry will show that the browser is using <i>Software</i> backend.</p>

<h2>Download it!</h2>
<p>This preview build is currently only available for Windows – but builds for other operating systems are being worked on as well.</p>
<p><a href="http://snapshot.opera.com/labs/webgl/Opera_1150_24661_WebGL_en.exe">Opera 11 preview with WebGL and Hardware Acceleration for Windows</a></p>

<p><strong>Disclaimer:</strong> this is not a stable build – it is an early preview of upcoming technologies in Opera. Neither WebGL nor hardware acceleration will be included in the upcoming release of Opera 11.10 for desktop. Some other aspects, such as SVG rendering, may not work correctly. We will continue working on these new features – fixing on all remaining bugs and optimizing our code – and we will release further preview builds to keep you up to date with our progress.</p>

<p>Please give us your feedback – but remember to include information about which graphics card and driver version you have, and if Vega is using the <i>OpenGL</i> or <i>Software</i> backend.</p>
