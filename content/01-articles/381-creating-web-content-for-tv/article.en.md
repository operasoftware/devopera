Title: Creating web content for TV
----
Date: 2010-09-09 07:50:13
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<div class="note">
<p>Update history:</p>
<ul>
<li>15 September 2011: change from Opera CDK to Opera TV Emulator</li>
<li>20 December 2011: clarify <code>outline</code> handling for <code>:focus</code> styles</li>
<li>11 April 2012: clarify lack of support for <code>media=&quot;tv&quot;</code> type</li>
<li>25 September 2012: include note about <code>outline:none</code> support in Opera Device SDK 3.4</li>
<li>22 January 2013: clarification on lack of support for <code>:active</code> style</li>
</ul>
</div>

<h2>Introduction</h2>

<p>This guide is aimed at web developers wishing to optimize their web sites and applications for better compatibility with web-enabled/connected televisions &#x2014; with a particular emphasis on the <a href="http://www.opera.com/business/solutions/devices/">Opera for Devices SDK</a> and its functionality.</p>

<ul>
<li><a href="#sdk-emulator">The Opera SDK and Opera TV Emulator</a></li>
<li><a href="#standards">Standards support on web-enabled TVs</a></li>
<li><a href="#context-form-factor">Designing for context and form factor</a></li>
<li><a href="#adaptive-layouts">Adaptive layouts</a>
<ul>
<li><a href="#fluid">Fluid layouts</a></li>
<li><a href="#media-types">CSS2.1 Media Types</a></li>
<li><a href="#media-queries">CSS3 Media Queries</a></li>
</ul>
</li>
<li><a href="#safe-areas">Safe areas</a></li>
<li><a href="#single-window">Single-window browsing</a></li>
<li><a href="#scrolling">Scrolling</a></li>
<li><a href="#text">Use of text</a></li>
<li><a href="#graphics">Graphical elements</a></li>
<li><a href="#colour">Colour</a></li>
<li><a href="#ui-controls">User interfaces and controls</a>
<ul>
<li><a href="#spatnav">Spatial navigation</a></li>
<li><a href="#focus">Indicating focus</a></li>
<li><a href="#active">Indicating <code>:active</code> element</a></li>
</ul>
</li>
<li><a href="#performance">Performance considerations</a>
<ul>
<li><a href="#processors-hw-acceleration">Processors and hardware acceleration</a></li>
<li><a href="#javascript">JavaScript</a></li>
<li><a href="#layering-opacity">Layering and opacity</a></li>
<li><a href="#animations">Animations</a></li>
</ul>
</li>
<li><a href="#caching-optimisation">Caching and content optimisation</a></li>
<li><a href="#multimedia">Multimedia</a></li>
</ul>

<p class="note">For discussions on creating web content for TV, visit our <a href="http://dev.opera.com/forums/forum/40112">Opera TV Content Development Discussions forum</a>.</p>

<h2 id="sdk-emulator">The Opera SDK and Opera TV Emulator</h2>
<p>The Opera for Devices Software Development Kit (SDK) is aimed at device manufacturers wishing to provide a customized browser and widget manager for use on their devices. It is compatible with pretty much any device that could conveniently require web access, with existing implementations ranging from web-enabled TV sets and set-top boxes to tablet PCs and connected picture frames.</p>

<p>The SDK provides building blocks, modules and example implementations. Manufacturers who choose the Opera SDK then do further integration work to hook the browser (and other components not covered in this guide, such as the widget  manager) into their specific devices. As such, the SDK itself is not publicly available for download.</p>

<p>However, developers wanting to more easily test and debug their sites for delivery on web-enabled devices can use the Opera TV Emulator. Built on the same core technology as the SDK, the emulator comes as a <a href="http://virtualbox.org">VirtualBox</a> image which runs on Windows, Linux and Mac OS X. It allows for a more accurate test environment that  matches the capabilities of the SDK. In addition, the Opera TV Emulator allows for remote debugging with Opera Dragonfly &#x2014; a feature that is normally turned off on retail TVs and devices.</p>

<p class="note">Download the <a href="http://www.opera.com/business/tv-emulator/">Opera TV Emulator</a>.</p>

<p>It&apos;s worth noting that, even though the emulator can facilitate testing and  debugging, developers should &#x2014; if possible &#x2014; still test their  content on actual devices, as certain features and specific  constraints (such as the speed of the device&apos;s processor and available memory) can vary from device to device.</p>

<h2 id="standards">Standards support on web-enabled TVs</h2>

<p>When building web sites and applications accessed through a web-enabled TVs regular web browser, developers can take full advantage of the web standards supported by the browser on the device. For Opera&#39;s suite of products (desktop, mobile and devices), the specific features that are supported depend on the Presto engine version running at the heart of each browser. At the time of writing, the Opera SDK deliveries are based on Presto 2.6 &#x2014; the same engine found in the current desktop and mobile releases. This allows developers to take advantage of some of the latest standards:</p>
<ul>
  <li>
    <p>HTML5: <code>&lt;canvas&gt;</code>, <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>, expanded forms support (although certain  features, such as the new datetime types, are implemented, but not currently optimised for keyboard/spatial navigation access)</p>
  </li>
  <li>
    <p>CSS3: backgrounds and borders, Web Fonts, Media Queries,  	transitions and 2D transforms</p>
  </li>
</ul>

<p>For more details, see the list of <a href="http://www.opera.com/docs/specs/">web specifications supported in Opera</a>.  Note that certain features (such as the Geolocation API and Offline Web Applications), though present in the specific Presto version, may still be disabled on certain platforms running the Opera SDK. In addition, web-enabled TVs and devices already in use will have older versions of the browser shipped as part of their firmware. Since end users can&apos;t easily update their browser, unless it&apos;s part of a firmware update provided by the device manufacturers, it is safe to assume that most current of these devices will be running an older browser version, and many of the latest features will not be present. Developers should employ techniques such as JavaScript feature/object detection to determine the capabilities of the user&#39;s browser.</p>

<p>Developers can find which Presto version is present in a particular Opera browser by checking the user agent identification string in the internal <code>opera:about</code> information page. In the case of  the Opera SDK, the string is currently:</p>

<pre><code>Opera/9.80 (Windows NT 6.0; U; en-GB) <strong>Presto/2.6</strong>.33  Version/10.61</code></pre>

<h2 id="context-form-factor">Designing for context and form factor</h2>

<p>Although actual usage may vary, there are some general considerations with regards to context when talking about web content on TV.</p>

<p>Consumption of content (including web content) on TV, because of its traditional setting in the living room, is often a shared/social experience.</p>

<p>Primary activity often revolves around quick information look-up (for instance, cast and crew details for a particular movie, weather reports, TV listings) and quick access to services.  Web content for TV should therefore be optimised &#x2014; in  terms of overall presentation, navigation and functionality &#x2014; and task-focused, giving quick and clear access to all relevant features and information.</p>

<h2 id="adaptive-layouts">Adaptive layouts</h2>

<p>TVs usually run at the following resolutions:</p>

<ul>
  <li>
    <p>Standard-definition television (SDTV): 720×480 (NTSC) and 720×576 (PAL), splits the display into two separate interlaced fields (243 and 288 lines, respectively).</p>
  </li>
  <li>
    <p>Enhanced-definition television (EDTV): 720×480 (NTSC) and 720×576 (PAL), delivered as single progressive scan images.</p>
  </li>
  <li>
    <p>High-definition television (HDTV): 1280×720 (also referred to as &quot;HD Ready&quot; or 720p, using progressive scan) and 1920×1080 (&quot;Full HD&quot;, in either 1080i interlaced or 1080p progressive scan variants).</p>
  </li>
</ul>

<p>Most modern web-enabled TVs support 1280×720 as a minimum resolution. On TVs capable of displaying the full HD resolution of 1920×1080, 720p content is usually upscaled (although this depends on the individual device). Set-top boxes and similar web-enabled devices may be connected to standard-definition or enhanced-definition TV sets &#x2014; in these situations they will usually downscale and letterbox their virtual resolution to fit the physical resolution of the TV screen.</p>

<p>Regardless of what type of TV set they&apos;re connected to, some web-enabled devices may run at a variety of virtual resolutions &#x2014; as an example, the Nintendo Wii Internet Channel (which uses a custom version of the Opera desktop browser) has a virtual width of 800 pixels, with the height varying based on the type of TV (4:3 or 16:9 aspect ratio) and user settings.</p>

<p>Developers targeting only web-enabled TV devices should opt to design for 1280×720 as a minimum, or provide separate versions of their content optimised for 1280×720 and 1920×1080.</p>

<p>If content should also be displayed on standard-definition and advanced-definition TVs, developers could potentially create an additional version optimised for this resolution as well.</p>

<p>However, a more sustainable and maintainable solution would be to ensure that content &#x2014; and specifically the screen layout &#x2014; is built with enough flexibility to adapt to a variety of screen resolutions.</p>

<p>There are a few technologies that can be employed for these types of adaptive layouts:</p>

<h3 id="fluid">Fluid layouts</h3>

<p>Using percentage-based values to define the width and height of layout containers. This can further be combined with <code>max-width</code>, <code>min-width</code>, <code>max-height</code> and <code>min-height</code> in  pixel values, to provide some upper and lower limits to the fluidity of the containers.</p>

<h3 id="media-types">CSS2.1 Media Types</h3>

<p>CSS2.1 allows for the definition of styling blocks that only apply to specific classes of device. This technique is most commonly used to provide separate styling for screen and print, negating the need for creating separate printer-friendly pages. CSS2.1 also allows the definition of styles  specifically for TVs.</p>

<p class="note">Whether or not a web-enabled device identifies itself as a TV depends on how its browser has been set up and integrated by the manufacturer, so developers should only use this method if they&apos;re sure their target platform has this setting enabled. For reasons of compatibility with the majority of web content &quot;in the wild&quot; which assumes a <code>media=&quot;screen&quot;</code> device, practically all current-generation devices ignore <code>media=&quot;tv&quot;</code>.</p>

<p>CSS2.1 Media Types can be specified when linking to separate external stylesheets:</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen&quot; href=&quot;...&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; media=&quot;tv&quot; href=&quot;...&quot;&gt;</code></pre>

<p>or within a single stylesheet, by defining separate <code>@media</code> sections:</p>

<pre>@media screen { /* styles for normal on-screen presentation */ }
@media tv { /* tv specific styles */ }</pre>

<h3 id="media-queries">CSS3 Media Queries</h3>

<p>While CSS2.1 Media Types classify devices into very broad categories (<code>screen</code>, <code>print</code>, <code>tv</code>, etc.), and rely  on devices actually identifying themselves as such, CSS3 extends this  concept by allowing developers to define specific conditions under which styles should be applied, providing far more granular control over how a layout is to be rendered under different conditions. For example, it is possible to create layouts that change depending on various factors, including the device&apos;s screen width, screen height, resolution and color depth.</p>

<p>CSS3 Media Queries, just like CSS2.1 Media Types, can be defined as part of the <code>&lt;link&gt;</code> elements:</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (min-width: 1920px)&quot; href=&quot;...&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (min-width: 1280px) and (min-width: 1920px)&quot; href=&quot;...&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (max-width: 1280px)&quot; href=&quot;...&quot;&gt;</code></pre>

<p>or using <code>@media</code> sections in the stylesheet:</p>

<pre><code>@media screen and (min-width: 1920px) { /* Full-HD styles */ }
@media screen and (min-width: 1280px) and (max-width: 1920px) { /* HD-Ready  styles */ }
@media screen and (max-width: 1280px) { /* smaller than HD-Ready styles * }</code></pre>

<h2 id="safe-areas">Safe areas</h2>

<p>Traditionally, TV sets were not able to display the full width and height of their nominal resolution, resulting in content positioned in the edges of the screen to be cut off or not displayed at all. Although this problem has been mitigated or – on some high end devices – resolved on modern digital TV sets, developers are still advised to only place important content and controls in the &quot;safe area&quot;, leaving a margin of approximately 5% along each edge of the viewport.</p>

<h2 id="single-window">Single-window browsing</h2>

<p>Although some devices will include the ability for browsers to open separate tabs, together with an interface for end users to switch between  them, the large majority of web-enabled TVs will only run in single-window mode. Any calls to open a new window (be it through JavaScript, or simpler techniques such as providing a <code>target</code> attribute on links) will only affect the current window. Developers need to be particularly aware of this if their sites and applications currently use separate windows to provide contextual help or in more complex situations (such as web-based email clients) where child windows use JavaScript to communicate back to their parent windows in order to keep state or provide the bulk of commonly-used functions. In these cases, web applications will need to be reworked to only use a single window.</p>

<h2 id="scrolling">Scrolling</h2>

<p>Ideally, developers should aim to present all content contained within their TV-optimised sites and applications on the screen, without the need for the user to scroll. If this is not possible, content should at least fit the width of the screen, requiring the user to just scroll vertically.</p>

<p>Using iframes or containers styled with <code>overflow: auto;</code> will work as expected in the Opera SDK, and users will be able to scroll these &#x2014; as well as the entire page, if needed &#x2014; using the default spatial navigation method of their web-enabled device. However, it may be  more user-friendly to create customised controls and interface elements (such as content carousels) instead of relying on the browser&apos;s default scrollbar mechanism.</p>

<h2 id="text">Use of text</h2>

<p>Although TVs run at resolutions that are comparable to desktop and notebook devices, users are traditionally positioned further away from the screen (typically a few meters). It&apos;s important to keep this in mind when deciding on the size of text and graphical elements.</p>

<p>To increase the readability of text on a TV screen, developers should:</p>

<ul>
  <li>
    <p>choose an appropriately large font size. The exact dimensions will vary depending on the specific typeface used, the physical size of the screen and the virtual resolution the device runs under, but a general minimum size of around 22px is advised</p>
  </li>
  <li>
    <p>Keep overall line length to around 10 words or less</p>
  </li>
  <li>
    <p>Use generous leading/line-spacing</p>
  </li>
</ul>

<p>The number of fonts available on devices is usually limited &#x2014; much more so than on desktop computers. Typically, only widely available Linux  fonts such as Bitstream Vera (serif, sans-serif and monospaced) are  present. End users are not able to install any fonts beyond those that came pre-installed with their device. However, the Opera SDK browser offers support for CSS3 web fonts (including fonts served through third-party services like Typekit or the Google Font API).</p>

<h2 id="graphics">Graphical elements</h2>

<p>For graphical elements, it is best to make the design bold and &quot;chunky&quot;, particularly for interface elements such as buttons. Overly fine detail such as single pixel borders should be avoided, as these can be particularly problematic on devices running on interlaced resolutions  (such as SDTV and 1080i). This does not mean that subtlety and texture should be avoided altogether, but distinguishing features need to be clearly visible even when viewed at a distance.</p>

<p>When combining graphical elements with adaptive layout techniques, it may  be useful to employ Scalable Vector Graphics (SVG), which can be resized and transformed without distortion or pixelation. However, complex SVG elements (involving a large number of vectors and layered, semi-transparent sections) do require more processing power to calculate and render, so their usefulness needs to be balanced against their performance impact.</p>

<h2 id="colour">Colour</h2>
<p>Certain colour combinations can be problematic when displayed on a TV screen. Even on high-end devices pure white, orange and red, as well as  extreme contrasts, can lead to distortion and interference of the image and should be avoided.</p>

<p>In addition, the dynamic range of TV screens may not be the same as  traditional computer monitors. Subtle gradients and low contrast colours may result in colour bands or indistinguishable combinations.</p>

<h2 id="ui-controls">User interfaces and controls</h2>
<p>TVs are &quot;low interaction&quot; devices.  When designing interfaces, developers should ensure that they are clear and uncluttered, and that controls are pared down to the minimum necessary.</p>

<p>User interaction with a web-enabled TV is usually performed via a remote control. In addition to the regular number/channel keys, these remote controls feature directional/cursor buttons, OK/confirmation buttons, and a variety of special feature keys.</p>

<p>Devices will also provide users with a way to enter regular text &#x2014; for instance, to fill in username/password fields in a login dialog or to enter keywords in a search field &#x2014; by means of an on-screen keyboard or multi-tap interface. This is similar to traditional mobile phones, where a series of characters is mapped to a single key &#x2014; <kbd>ABC</kbd> on the <kbd>1</kbd> key, <kbd>DEF</kbd> on the <kbd>2</kbd> key, and so on.  However, these text entry methods are often slow and cumbersome for users. Applications should avoid or minimise the need for this kind of text entry, opting instead for alternatives such as selectable drop-downs, menus, checkboxes or custom-built scrollable interfaces.</p>

<p>Some devices may offer the option of providing an on-screen pointer, which is moved with the cursor keys or motion sensors in the remote control, as is the case on the Nintendo Wii. On-screen controls should generally be large, with ample padding, to provide a large hit area that facilitates user  activation without the need for too much accuracy in moving the pointer.</p>

<h3 id="spatnav">Spatial navigation</h3>
<p>As is the case on desktop, the Opera browser uses spatial navigation. While on the desktop this mode requires the use of <kbd>SHIFT+cursor</kbd> keys, on TV spatial navigation is mapped directly to the directional keys on the remote.</p>

<p>The most common interaction method is functionally equivalent to keyboard access on desktop/notebook devices. Therefore, designers should ensure that their content is keyboard accessible.</p>

<p>Traditionally, only certain types of element &#x2014; links, form elements, image map areas, etc. &#x2014; are keyboard focusable. It is good practice (from an accessibility point of view) to use these elements for controls, rather than simply attaching JavaScript behaviours to other/generic elements, as these are then usually not focusable and usable via the keyboard alone.</p>

<p>In addition, Opera&apos;s spatial navigation mode features built-in heuristics that allow the focus to also be placed on any element that has a <code>click</code> or <code>mouseover</code> JavaScript handler, either in an <code>onclick</code> or <code>onmouseover</code> attribute, or hooked into the element via the <code>addEventListener</code> method. In  addition, spatial navigation also allows elements with a <code>tabindex</code> attribute (with a value of 0 or above) to receive focus.</p>

<p>Note that for these non-traditional elements, spatial navigation mimics mouse behaviour, meaning that only <code>mouseover</code> and <code>mouseout</code> events are automatically fired when moving to/from these elements. <code>focus</code> and <code>blur</code> events are still only fired on elements that can receive traditional keyboard focus.</p>

<p>Although spatial navigation works &quot;out-of-the-box&quot; in most situations, developers can take further control over the order in which elements receive focus using the <a href="http://www.w3.org/TR/css3-ui/#nav-dir">CSS3 Basic User Interface specification for directional focus navigation</a>. See our separate article on <a href="http://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/">Tweaking spatial navigation for TV browsing</a> for more details.</p>

<h3 id="focus">Indicating focus</h3>

<p>By default, Opera will place an outline around the element that currently has focus. If the design of the specific content does require it, though, this standard outline can be partially suppressed.</p>

<p>The appearance of this outline can vary between devices, as manufacturers can re-skin the default styles applied to the focus indicators and the various elements of a web page. Developers should therefore test their sites on a variety of devices, or ensure that their styles explicitly set all necessary values rather than relying on defaults.</p>

<p>In Opera Device SDK versions prior to 3.4, suppressing the outline with <code>outline:none</code> is ignored, as this particular rule has traditionally been (ab)used on a variety of common <code>reset.css</code> stylesheets, without authors providing any alternative indications of focus.</p>

<p>Starting with the Opera Device SDK 3.4, it&#39;s possible to suppress the outline using a simple:</p>

<pre><code>:focus { outline: none; }</code></pre>

<p>However, for backwards compatibility with older Opera Device SDK versions, developers should still use the slightly longer syntax to suppress Opera&#39;s default outline indicator:</p>

<pre><code>:focus { outline: 0 solid; }</code></pre>

<p>Developers will still need to ensure that there is a sufficiently clear alternative way of indicating to the user where their current focus on screen is, such as setting a contrasting background colour on control elements instead. For example:</p>

<pre><code>:focus { <strong>background: #f00;</strong> outline: 0 solid; }</code></pre>

<p>Developers using specific styles for <code>:hover</code> should &#x2014; as with generic keyboard accessibility considerations &#x2014; also consider doubling-up these style rules for the more generic <code>:focus</code> state (note that this still requires the elements to be focusable in the first place).</p>

<p>Instead of just using something like</p>

<pre><code>a:hover { /* styles applied when hovering over a link */ }</code></pre>

<p>the style selector should be modified to also cover <code>:focus</code>, like so:</p>

<pre><code>a:focus, a:hover { /* styles apply to hovering AND keyboard/spatial navigation focus */ }</code></pre>

<h3 id="active">Indicating <code>:active</code> element</h3>

<p>As is common across all browsers at the time of writing, keyboard navigation (including Opera&#39;s spatial navigation, as used in the Opera Devices SDK) does not trigger any <code>:active</code> styles that may be defined. For this reason, additional style rules such as</p>

<pre><code>a:active { /* styles applied when a link has been activated */ }</code></pre>

<p>will not have any effect. If your application relies on giving the user feedback when a particular element (such as a link or button) has been activated, this will need to be &quot;faked&quot; with something like</p>

<pre><code>a.active, a:active { /* styles applied when a link has been activated */ }</code></pre>

<p>and the use of additional JavaScript that sets/unsets the <code>.active</code> class on the <code>click</code> event.</p>

<h2 id="performance">Performance considerations</h2>
<h3 id="processors-hw-acceleration">Processors and hardware acceleration</h3>

<p>Typical web-enabled TV sets have modest hardware specifications compared to desktop computers. The main processor power of a TV comes somewhere between high-end smart phones and low end laptops.</p>

<p>By default the Opera SDK just uses the main processor for all operations, including visual compositing through the Vega graphics library (which is also responsible for advanced CSS3 visual effects such as box shadows, text shadows, transforms and transitions), SVG rendering, and JavaScript processing through the Carakan engine.</p>

<p class="note">The main processor is also used for software-based blitting of the rendered page to the screen itself.</p>

<p>TVs often come with specialised chipsets that can provide hardware acceleration for &quot;expensive&quot; operations such as decoding of video streams. Whether or not the browser running on a TV set takes advantage of these chipsets will depend on the specific device, as it&apos;s a step usually taken by the manufacturers during the integration stage of the SDK. On recent TV sets, the most commonly accelerated feature is the blitting stage, through standardised DirectFB and OpenGL libraries.</p>

<p>It is possible to accelerate most processor intensive features of the  Opera SDK &#x2014; including Vega and Carakan itself &#x2014; but in general developers should not rely on any particular feature being hardware-accelerated, and instead be mindful of the processing power on web-enabled TVs being comparatively modest.</p>

<h3 id="javascript">JavaScript</h3>

<p>Because of the comparatively low spec processors found on most common TVs, developers should avoid overly heavy and complex JavaScript. For  general visual/GUI effects such as carousels, slideshows and expanding/contracting boxes, custom-written and optimised scripts are usually preferable to large multi-purpose frameworks. Also, in light of cache restrictions and content optimisation, it is recommended to use &quot;lazy loading&quot; techniques to only call scripts when needed.</p>

<h3 id="layering-opacity">Layering and opacity</h3>

<p>The act of displaying images on a webpage (blitting images onto the viewport) is generally hardware-accelerated on most devices. However, complex layouts &#x2014; for example with overlapping, semi-transparent graphics and layered blocks with reduced opacity that blend together &#x2014; require large amounts of additional processing power to calculate the actual value of each pixel that needs to be displayed on screen. These can adversely impact overall performance of pages &#x2014; particularly scrolling and animations &#x2014; and should be used sparingly.</p>

<h3 id="animations">Animations</h3>

<p>One of the strengths of many JavaScript frameworks is the ability to easily script complex visual effects and  animations.</p>

<p>However, if these are simply &quot;eye candy&quot; effects &#x2014; often given in response to a user interaction &#x2014; that are simply triggered and don&apos;t require frame-accurate control, it is worth considering the use of new CSS3 capabilities such as transitions and transforms. As these are executed by the Vega graphics library, they should generally perform better than generic solutions using JavaScript, which typically use intervals and timers to explicitly change certain values &#x2014; like colour, position, dimension &#x2014; in discrete steps.</p>

<p>Generally however, such effects should be kept to a minimum, as any form of animation can be expensive in terms of performance, potentially rendering sites and applications slow and unresponsive.</p>

<h2 id="caching-optimisation">Caching and content optimisation</h2>

<p>Most web-enabled TVs don&apos;t have a hard drive or solid state drive to cache web content (although some DVRs will, these are generally used to record videos, and are not generally available for use by the browser). In these circumstances the browser will run in diskless mode, using only the available RAM to cache any downloaded web content.</p>

<p>The amount of memory available for caching can vary from device to device, but is generally in the region of 5-10MB.</p>

<p>Because of this fairly low limit on the available cache, it is not safe to assume that any assets are cached when moving from one page of site to the next, or on return visits. This also applies to cookies, which may not be stored after a user has left a particular website &#x2014; although they should be safe to use to store information during a single visit. Web-enabled TV and device download speeds, however, are usually close to regular broadband speeds, so not having a cache that persists for return visits may not be a huge issue. Nonetheless, developers should aim to optimise all their content &#x2014; graphics, multimedia files, and even HTML, CSS and JavaScript files &#x2014; as much as possible, to ensure that they don&apos;t hit the cache limit.</p>

<p>In addition to this regular cache, browsers on devices will also have a fairly limited amount of memory available to store the decoded pages &#x2014; the browser&apos;s internal representation of a web page, which includes assets such as the DOM, JavaScript objects, and all uncompressed images. Once the limit for the decoded pages&apos; memory has been reached, the browser will generally stop rendering and loading the current page until the cache is freed again. How this happens is up to individual manufacturers  &#x2014; for instance, users may be alerted through a pop-up that loading has  stopped and that the browser is unable to continue rendering the page. After confirmation, the page and its associated cache can then be purged. For this reason, developers should be careful when using large numbers of images and JavaScript resources, as this can potentially cause out-of-memory issues on lower-end devices.</p>

<h2 id="multimedia">Multimedia</h2>

<p>Starting with Presto 2.5, Opera comes with built-in support for the HTML5 <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements, allowing developers to include multimedia content in their web sites without plugins. However, the specifics of which codecs are supported on devices can vary considerably, as this depends on the underlying platform and integration work carried out by device manufacturers. Current devices are often optimised for hardware-accelerated playback of MP4/H.264 content in the <code>&lt;video&gt;</code> element. Other codecs (such as MPEG2 for video or MP3 for audio) may be available, but this cannot be guaranteed on all web-enabled TVs.</p>

<p>Certain TVs allow for the use of Adobe Flash or <a href="http://www.adobe.com/devnet/devices/flashlite.html">Adobe Flash Lite</a> content &#x2014; for instance the latter is available to the Opera browser on the Nintendo Wii. Others may come with integrated support for displaying audio/video files delivered through an <code>&lt;object&gt;</code> element. Once again though, this cannot be relied on as it&apos;s an integration feature. Consumers cannot install plugin technologies and codecs themselves, and such plugins are updated regularly, meaning potential compatibility issues with future content that relies on new features.</p>

<p class="note">This guide only gives a generic overview of content on TV. If you are developing for environments like the Opera TV Store, please consult the specific articles relating to those products, as there will be further restrictions and requirements with regards to visual design, layout and multimedia codec availability.</p>
