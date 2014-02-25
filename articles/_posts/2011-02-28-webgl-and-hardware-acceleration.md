---
title: WebGL and Hardware Acceleration
authors:
- tim-johansson
intro: 'A long time ago, in an office far far away… Opera released a custom build showing an implementation of a 3D canvas context. Now, more than 3 years later, we are releasing the first public build with a standards-based 3D canvas implementation using WebGL for Windows…'
tags:
- webgl
- labs
layout: article
---

**Note:** the features covered in this article are now available in a much more stable form in our latest [Opera Next][1] release.

[1]: http://www.opera.com/browser/next/

A long time ago, in an office far far away… Opera released a custom build showing an implementation of a [3D canvas context][2]. Now, more than 3 years later, we are releasing the first public build with a standards-based 3D Canvas implementation using [WebGL][3] for Windows.

<figure>
	<img src="/articles/webgl-and-hardware-acceleration/webgl.png" alt="A WebGL demo running in the Opera 11 preview with WebGL and Hardware Acceleration for Windows">
</figure>

[2]: http://my.opera.com/timjoh/blog/2007/11/13/taking-the-canvas-to-another-dimension
[3]: http://www.khronos.org/webgl

WebGL is a standard developed by the [Khronos Group][5], where Opera is an active member participating in the standardization process. We have been working on a WebGL implementation since early 2009, when the standardization process started. The specification has been changing quite frequently over the past few years, but now it is starting to mature and stabilise, which makes this the perfect time to release a public preview of our current WebGL implementation.

[5]: http://www.khronos.org

For those of you who have never heard of WebGL, it is a context to the `<canvas>` element which gives you hardware-accelerated 3D rendering in JavaScript. The API is based on OpenGL ES 2.0, which means that it is possible to run WebGL on many different devices, such as desktop computers, mobile phones and TVs. The [WebGL public wiki][6] contains more information about the standard, including tutorials and lots of demos — so it is a good place to go if you want to see our WebGL implementation in action.

[6]: http://khronos.org/webgl/wiki/Main_Page

## Hardware acceleration

In June 2008 — around the same time as our first 3D canvas experiments — we showed a video preview of our [fully hardware-accelerated renderer][7]. One of the requirements we had for enabling that code was that the software fallback — used when hardware acceleration is not available — should be at least as fast as what we were using in our desktop product at the time. To achieve that, we spent a lot of time and resources on optimizing our software renderer, which has been used in Opera’s desktop browser since version 10.50 and has proven to be one of the fastest renderers around. Following the release of 10.50, we once again focused on our hardware renderer.

[7]: http://my.opera.com/core/blog/2008/06/05/engineering-seminar

The results of this work have been rolled into this preview as well, meaning that this build also has full hardware acceleration enabled (on systems with compatible hardware and drivers).

Our hardware acceleration is a bit different from what other browsers have implemented. Most of them do full hardware acceleration of all draw operations, but only on Windows Vista and Windows 7 — dropping to a more limited set of accelerated draw operations on other platforms. Our implementation will feature full acceleration on any OS with sufficient hardware support. This means we can also use fully hardware accelerated draw operations on Windows XP, Linux, Mac OS X and OpenGL ES 2 capable devices such as recent smart-phones and web-enabled TVs.

## OpenGL

<figure>
	<img src="/articles/webgl-and-hardware-acceleration/opengl.png" alt="opera:about showing the new Vega backend entry">
</figure>

This build only has an OpenGL backend. That means your system must have an OpenGL 2.x compatible graphics card and related drivers for hardware acceleration and WebGL to work. In future builds we will also add a Direct3D backend, which will reduce the requirements on drivers and should work out of the box on most modern systems.

So how can you tell if hardware acceleration is enabled? There are two easy ways to check. The first option is to load some WebGL content — if it works that means your hardware and drivers are compatible, and hardware acceleration is enabled in the browser. Alternatively, you can check the new “Vega backend” entry in `opera:about` — if the backend listed is _OpenGL_ , you have hardware acceleration enabled; otherwise, the entry will show that the browser is using _Software_ backend.

## Download it!

This preview is currently only available for Windows — but builds for other operating systems are being worked on as well.

[Opera 11 preview with WebGL and Hardware Acceleration for Windows][9]

[9]: http://snapshot.opera.com/labs/webgl/Opera_1150_24661_WebGL_en.exe

**Disclaimer:** this is not a stable build — it is an early preview of upcoming technologies in Opera. Neither WebGL nor hardware acceleration will be included in the upcoming release of Opera 11.10 for desktop. Some other aspects, such as SVG rendering, may not work correctly. We will continue working on these new features — fixing on all remaining bugs and optimizing our code — and we will release further preview builds to keep you up to date with our progress.

Please give us [your feedback][10] — but remember to information about which graphics card and driver version you have, and if Vega is using the _OpenGL_ or _Software_ backend.

[10]: http://my.opera.com/core/blog/2011/02/28/webgl-and-hardware-acceleration-2#comments
