Title: Making Small Devices Look Great
----
Date: 2007-03-14 20:50:36
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">14th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Media queries are now supported much more reliably across browsers. Please consult the following for more up-to-date information:</p>

<ul>
 <li><a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a></li>
 <li><a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a></li>
 <li><a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Love your devices: adaptive web design with media queries, viewport and more</a></li>
 </ul>
 </div>


<ul>
<li><a href="./?page=2">Writing for Devices</a></li><li><a href="./?page=3">Testing with Opera</a></li>
<li><a href="./?page=4">Designing for several media</a></li>
<!--<li><a href="http://my.opera.com/community/dev/device/ssr/">Designing with Small-Screen Rendering</a></li>-->
</ul>

<h2 class="hidemobile">Quick Tips</h2>
<h3>Coding tips</h3>
<ol>
<li>Use terse, efficient markup</li><li>Avoid frames</li><li>Avoid pop-ups</li>
<li>Avoid proprietary features, or use fallbacks</li><li>Specify image height and width</li>
<li>Use alternative text on images</li><li>Have fallbacks for JavaScript and dynamic effects</li>
</ol>
<h3>Testing tips</h3><ol><li>Test in Opera for Desktop, in Small-Screen view</li><li>Test with graphics turned off</li>
<li>Test with JavaScript turned off</li><li>Test with no mouse</li></ol>
<h3>Small-Screen design tips</h3><ol><li>Design with document order in mind</li><li>Design the small-screen version for maximum readability</li><li>Use only images suited for a small screen, hide the rest</li><li>Be careful with the use of colors, font sizes, and alignment</li></ol>&lt;page&gt;<h2>Writing for Mobile Devices</h2>

<p>In this article &quot;device&quot; means a small, mobile unit such as a smart phone or <abbr title="Personal Digital Assistant">PDA</abbr>. The rules for designing for small devices are mostly the same as the rules for good design in general, but some factors are particularly important.</p>

<h3 id="h3.1">Low bandwidth</h3>

<p>Downloading pages from a mobile device is slower and more expensive than it is from a stationary computer with broadband or in a company intranet. Efficient coding will make the pages more responsive for everyone, but the speed-up is particularly great for devices. Better code also reduces server load. As a rule of thumb, <span class="devTip">there shouldn&#39;t be more markup than there is text</span>. A well designed <acronym>HTML</acronym> page should have so little markup that it is possible to read the page from the source code.</p>

<p>More space consuming than the code itself (<acronym>HTML</acronym>, <acronym>CSS</acronym>, and scripts) are the attached images, applets, and other media.</p>

<h4>Making compact code</h4>

<p><span class="devTip">Replace all font tags with <acronym>CSS</acronym> classes</span>. Not only is it faster and more compact, it is easier to maintain and develop.</p>

<p>Use meaningful markup. <code>&lt;h3&gt;A Headline&lt;/h3&gt;</code> 
  is not only shorter and more readable than <code>&lt;p&gt;&lt;font size=&quot;+2&quot; 
  face=&quot;Helvetica&quot;&gt;&lt;b&gt;A Headline&lt;/b&gt;&lt;/font&gt;&lt;/p&gt;</code>, 
  it also tells the browser this is a headline. Opera can use this information 
  to the user&#39;s advantage. For instance, on devices with a full keyboard, the <code><kbd>S</kbd></code> and <kbd>W</kbd> keys are used to go to next or previous headline. You can try it on this page.</p>

<p>
The default headline look may not be as desired, for that reason many designers started using the font tag instead years ago and have stuck to it since. This is no longer necessary as <acronym>CSS</acronym> gives you full control of how the headlines should look, and this part of <acronym>CSS</acronym> is reliably supported by every browser, including Netscape 4.</p>

<p>The site navigation section of a page can often be needlessly large. Changing from a complex table layout to <acronym>CSS</acronym> can dramatically reduce code size.</p>

<p><span class="devTip">The best solution is to replace table layouts with <acronym>CSS</acronym></span>. This may not always be feasible, and will not work well with Netscape 4 and some similar browsers. A compromise that gives almost the same savings is avoiding deeply nested tables (tables inside tables inside tables), while keeping the basic table layout.</p>


<p>Remove unneeded code. If the default text color is black, code like<code> &lt;font color=&quot;#000000&quot;&gt;</code> is just filler, as is adding <code>align=&quot;left&quot;</code>, the default value for text alignment. Removing code by hand is time consuming, but often the code is automatically generated from a script, where it can be removed once and for all. Optimizing templates can also be a good investment. </p>


<p>When scripts or stylesheets are shared by several pages, <span class="devTip">link to external files instead of embedding the scripts/stylesheets in the pages themselves</span>.</p>


<h4>Efficient graphics</h4>

<p>Large images are less useful on a device, and those larger than a screenful will make for a worse user experience. Background images are not recommended. Images can be very costly to download and they need a lot of memory and time to display. The images shouldn&#39;t be larger than about half screen size (about 100-150 pixels). Opera in small-screen mode will not display many images and resize others to fit the screen. </p>


<p><span class="devTip">Always specify the image height and width in the source code</span> (either using <acronym>CSS</acronym> or <acronym>HTML</acronym>). This has several important advantages. Since the browser will know how much space an image uses beforehand, the page can get its final layout before the images finish downloading. This will give the impression that the page loads faster. If the browser is set not to download graphics at all, it can still keep the original layout. Finally, and maybe most importantly, many images that are not fit for handheld devices can be avoided before downloading them. This can make for a great difference in download time and cost, ultimately determining whether the user will want to revisit your site, or visit it with graphics.</p>

<p>If your web site is graphics intensive, the user may chose to turn off graphics. Make sure the site works without them.</p>


<h3 id="h3.2">Browsing without graphics</h3>

<p>Browsing with images turned off is usually faster, cheaper, and more efficient.  Therefore important functional elements on web pages, such as buttons and headlines, must be usable even without graphics. <span class="devTip">The trick is to add alternate text to the images.</span></p>

<p>Alternate text (&quot;alt-text&quot;) can also be added to more illustrative graphics, such as photos, to give the user enough information to determine whether or not it will be worthwhile to download images on this page. If the graphic element is unimportant or purely ornamental, adding <code>alt=&quot;&quot;</code> (with nothing between the quotes) to the image tag is recommended.</p>

<p>To test how a page looks like without graphics, just turn them off. This can be done with any browser, but is particularly simple to do with Opera. Browse through your pages, and see where problems occur. </p>


<h4>When using graphics for headlines</h4>

<p>It is much better to use text than graphics for headlines for a number of reasons, but if you do use an image for a headline, you should always include the headline text in the alt-text, and you should mark it up as a headline. See the example on <a href="example2.html">using alt-text with headlines</a>.</p>

<h4>When using graphics for navigation</h4>

<p>Navigation buttons should always have an alt-text, as the site would otherwise be difficult to use. See the example on <a href="example3.html">using alt-text with buttons</a>.</p>

<h3 id="h3.3">The Device Screen</h3>

<h4>Size</h4>

<p>One of the more obvious differences between a device and a desktop computer is the screen size. Only a part of the page will be visible, and two elements you can  depend on to be in view at the same time on a desktop computer may have to be scrolled to on a device.</p>

<p>Dynamic menus are not well suited for small screens. <span class="devTip">If you are using dynamic menus, or other space-demanding effects, try to have non-dynamic fallbacks</span>. 
</p>

<h4>Color</h4>

<p>Modern devices usually have a color screen, but they offer less contrast than 
  a normal <acronym>PC</acronym> screen. Devices are also often used in sunlight and other difficult conditions while <acronym>PC</acronym> screens are used in more controlled environments. Reducing screen contrast can be used to conserve battery length. For these reasons you should use good contrast between foreground and background. Expect subtle color differences to disappear.</p>

<h4 id="windowMgt">Window management, frames</h4>

<p>Avoid using frames. Opera does support frames on devices, but the small screen 
  size still means that frames are an obstacle. Frames can be displayed in one 
  of three ways:</p>

<ul class="bullets">
  <li>No frames</li>
  <li>As a list</li>
  <li>All frames</li>
</ul>

<p><em>No frames</em> means that Opera uses the <code>&lt;noframes&gt;</code> content 
  instead of the frameset. For this to work well, the noframes content has to 
  be useful, and not only a message that the user must turn on frames. Usually 
  it is possible to generate a noframes version from a frames version. There is 
  rarely a need for more than one content frame, all that is needed is automatically 
  adding the essential content of the other frames.</p>


<p><em>As a list</em> means that each frame is a separate window, along with a window 
  listing all frames. Whether all windows are available at the same time depends 
  on the device, but there is at least one frame plus the list frame. To make 
  this easier to use, make sure that each frame has a distinct and meaningful 
  name. It is much easier to navigate between <i>Logo</i>, <i>Navigation</i> and 
  <i>Content</i>, than it is between <i>Untitled</i>, <i>Untitled</i>, and <i>Untitled</i>.</p>


<p><em>All frames</em> keeps the frame structure as on desktop.</p>


<h4 id="pop-up">Window management, pop-ups</h4>


<p>In particular <span class="devTip">avoid pop-ups</span>. Pop-ups, creating new windows with JavaScript, are very distracting on a device where only a single window will be displayed at a time.</p>


<h4>Context menus</h4>

<p>Devices rarely have context menus, and in any case Opera doesn&#39;t give scripting 
  access to them. Do not depend on scripts that interfere with the context menu.</p>


<h3>Limited Input Capability </h3>


<p>A mobile device usually has a limited keyboard or none at all. Entering data is much slower on a device. Be careful about setting time-outs (for example, do not break the connection after a minute), and do not force users to type more than necessary.</p>


<h3>No mouse</h3>

<p>Devices also do not use mouse navigation, so do not expect the user interaction to follow the exact same pattern as it does on a regular computer. Alternate and less space-consuming pointing devices, such as touchscreens, or keypad-based browsing are common.</p>

<h4>Event handling</h4>

<p>Pens and touchscreens tap, they do not click. They do not have a virtual cursor,   so <span class="devTip">mouseover and mouseout event do not apply</span>. There generally is a click event, pen taps are mapped into the mouseclick events, and devices without a pointing device often has a key that emits click events. Mouseup and mousedown events are much less predictable, as are keydown and keyup. Do not depend on double-click and right-click events. Some devices only have a virtual keyboard, you might not be assured of key events. The abstract UI events, blur and focus, apply.</p>


<p>The usual UI events should still work on a device, just do not have too fixed preconceptions on <em>how</em> they work. &quot;Press the Y key to continue&quot; isn&#39;t helpful if the device doesn&#39;t have a <kbd>Y</kbd> key. </p>


<h3>The Processor, Memory and Storage </h3>


<p>Speedy processors consume more energy than slower, so to conserve battery life  device processors tend to be relatively slow. This means that some actions that are hardly noticeable on fast computers can take time on a device. The user may have to wait longer if you use excessively complex scripts or deeply nested tables. Normal pages should cause no problem.</p>


<p>Memory is a greater constraint. Devices have no hard drive, memory and file storage is one and the same, and there is too little of both. Large, complex  pages use more memory, and graphics rich pages even more so. Pages with large file size will use more of the memory cache.</p>


<h4>Java and plug-ins </h4>

<p>The devices may have support for Java and common plug-ins like Flash or <acronym>PDF</acronym>,  but they can rarely display web pages and Java or Flash simultaneously. <span class="devTip">Pages based purely on plug-ins should therefore be avoided</span>.</p>


<h3>Mobility</h3>

<p>While all pages should be usable on a device, some kinds of pages are more likely to be useful than others. With a device you can get information you ask for right when and where you need it. Communication-oriented information, like a contact page with phone numbers, e-mail or physical addresses, or <acronym>SMS</acronym> can be more useful on a mobile device than it would be on a <acronym>PC</acronym> with fixed location.</p>


<p>Some capabilities are unique for a mobile device, <acronym>HTML</acronym> code like <code>&lt;a href=&quot;sms:12345678&quot;&gt;Send me a message&lt;/a&gt;</code> will trigger the phone <acronym>SMS</acronym> editor, with the phone number &quot;12345678&quot; as the recipient. Since this is rarely useful for a desktop <acronym>PC</acronym>, without <acronym>SMS</acronym> capabilities you can set this link to only be displayed with the handheld media.</p>

&lt;page&gt;

<h2>Testing for devices</h2>

<p>The best way to test web pages is to use the devices themselves. This may not 
  always be practicable, but the <a href="http://www.opera.com/browser/">desktop versions of Opera</a> all have built-in 
  testing functionality.</p>

<p>While the desktop and device versions of Opera are based on the same code, there can still be minor divergences in how pages look and act. This especially applies to JavaScript, but also Opera&#39;s Small-Screen Rendering is optimized for each device.</p>

<h3 id="h4.1">Using the Opera desktop browser as test environment</h3>

<h4>Testing without Small-Screen Rendering</h4>

<p>Make a window of the same size as the device. Opera allows you to include window 
  size in the title bar. Now you will see two numbers in front of the page title, 
  something like 1000:800. The number before &#39;:&#39; is the window width in pixels, 
  the number after &#39;:&#39; is the window height in pixels. A common smartphone size is 320 pixels high and 240 pixels wide, a common regular phone size is 128x128 pixels.</p>

<ol class="steps codeBlock">
  <li>Check <code class="menu">Show windows size</code> at <code class="menu"><a href="opera:config#UserPrefs|ShowWindowSize">opera:config#UserPrefs|ShowWindowSize</a></code>.</li>
  <li>Click the Save button at the bottom of that section of the <code>opera:config</code></li>
  <li>Restart Opera</li>
  <li>Resize the window to the device size</li>
</ol>

<p>You can add or remove the addressbar and scrollbars as <kbd>Ctrl+F8</kbd> toggles 
  the addressbar, <kbd>Ctrl+F7</kbd> toggles the scrollbars.</p>

<h4>Testing with Small-Screen Rendering</h4>

<ol class="steps codeBlock">
  <li>Create a page</li>
  <li>Open the page in Opera</li>
  <li>Select <code class="menu">View &gt; Small screen</code> (<kbd>Shift+F11</kbd>, or <kbd>Shift+Alt+F11</kbd>on Mac)</li>
</ol>

<h4>Testing with a &#39;Handheld&#39; stylesheet</h4>

<ol class="steps codeBlock">
  <li>Create a page, have at least one style sheet with media=&quot;handheld&quot;</li>
  <li>Open the page in Opera</li>
  <li>Select <code class="menu">View &gt; Small screen</code> (<kbd>Shift+F11</kbd>)</li>
</ol>

<h4>Turning off graphics</h4>

<p>Opera has a three modes 
  for graphics, <code>On &gt; Off &gt; Cached only</code>.
  </p>

<h4>Turning off JavaScript</h4>

<p>Opera users, also on devices, are likely to have JavaScript enabled. It can 
  still make sense to test the pages with JavaScript turned off if they are making 
  heavy use of dynamic <acronym>HTML</acronym>, for example with JavaScript menus. The differences with Opera for desktop means that it is not entirely reliable as a testing platform for JavaScript on devices. If the page still works with JavaScript turned off, it should work on a device too. </p>

<p>JavaScript can be turned off by pressing <kbd>F12</kbd> and then <kbd>J</kbd>.</p>

<h4>Testing without a mouse</h4>

<p>Devices do not have a mouse, and many do not have any other pointing device. 
  To simulate this, turn the mouse upside down and just use the keyboard for navigation and page interaction. The help files (<kbd>F1</kbd>) list all keyboard commands.</p>

<h3 id="h4.2">Validating the Pages</h3>

<p>It is possible to automatically check whether or not a web page is written 
  according to the standards. W3C has a validation service for <acronym>HTML</acronym> and <acronym>XML</acronym>, as well as for <acronym>CSS</acronym>. Other organizations have sites that allows you to test for accessibility. Even if you do not intend to have error-free pages, the test results they generates are very useful for spotting important errors before the user complaints arrive. </p>

<h4>Validating <acronym>HTML</acronym></h4>

<ol>
  <li>Right-click on document, <code class="menu">Frame &gt; Validate Source</code> 
    (<kbd>Ctrl+Alt+V</kbd>)</li>
</ol>

<p>You can also go to the <a href="http://validator.w3.org/">W3C Markup Validation Service/</a>.</p>

<h4>Validating <acronym>CSS</acronym></h4>

<p>There is no built-in <acronym>CSS</acronym> validator function in Opera, but you can go to the  <a href="http://jigsaw.w3.org/css-validator/">W3C CSS Validation Service</a>.</p>

<h4>Validating accessibility</h4>

<p>Making web pages accessible has much in common with making them work on a variety 
  of devices. See this overview of <a href="http://www.w3.org/WAI/ER/tools/"><cite>Web Accessibility Evaluation Tools</cite></a>.</p>

<h4>Validating JavaScript</h4>

<p>Unfortunately there is no JavaScript testing service, so this must be tested the old fashioned way, by trying the script in different browsers to see how well it works. Test the script both with and without Small-Screen Rendering activated.</p>

&lt;page&gt;


<h2>Web Pages with Multiple Views</h2>

<p>What looks good on a big screen will not necessarily look good on a small one, 
  but it isn&#39;t hard to make pages look and work great on a device without compromising the quality of the full screen design. Start with the normal page. Have document order in mind, using a few device-specific tips and doing a little extra testing is what it takes. If the <acronym>HTML</acronym> code is simple to understand and maintain, making a well-designed pages that can be used everywhere is a snap.</p>

<p>The best tool is media-dependent <acronym>CSS</acronym>. You can have <acronym>CSS</acronym> that only applies to PC screens, print-outs, presentations, or with devices. When you have finished a design for one medium, optimizing for the next will merely be to add a few extra lines of <acronym>CSS</acronym>.</p>

<h3 id="h5.1"> Styling for handheld </h3>

<p>The same <acronym>HTML</acronym> page can be presented in many different ways for different media using <acronym>CSS</acronym>. The most efficient way to add code for the different media is to split up the style sheet into one for each media rule, that way it isn&#39;t necessary for a handheld device to download the projection style sheet, or the desktop PC to download the handheld stylesheet.</p>

<pre class="codeBlock"><span class="comment">&lt;!-- This stylesheet will be displayed by all --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;all.css&quot;&gt;

<span class="comment">&lt;!-- This stylesheet will only be displayed on PC screens --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;desktop.css&quot; media=&quot;screen&quot;&gt;

<span class="comment">&lt;!-- This stylesheet will only be used for printing --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;printout.css&quot; media=&quot;print&quot;&gt;

<span class="comment">&lt;!-- This stylesheet is for slide shows --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;presentation.css&quot; media=&quot;projection&quot;&gt;

<span class="comment">&lt;!-- This stylesheet will be used by devices --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;phone.css&quot; media=&quot;handheld&quot;&gt;</pre>

<p>There are other variants that can be used, for instance a simple override for 
  devices like this:</p>

<pre class="codeBlock"><span class="comment">&lt;!-- The styles used on all media --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;all.css&quot;&gt;

<span class="comment">&lt;!-- But there are some device-specific rules  --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;small.css&quot; media=&quot;handheld&quot;&gt;</pre>

<p>It is possible to have a list of media a style sheet applies to. This set of 
  style sheets has one style sheet for all interactive media, and one style sheet 
  for printouts.</p>

<pre class="codeBlock"><span class="comment">&lt;!-- A style sheet for the screen media --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;screen.css&quot; media=&quot;screen, projection, handheld, tv&quot;&gt;

<span class="comment">&lt;!-- Some print specific rules  --&gt;</span>
&lt;link rel=&quot;stylesheet&quot; href=&quot;printout.css&quot; media=&quot;print&quot;&gt;
</pre>

<h4>Screen</h4>

<p>What the web page looks like on a computer screen. This is the most common 
  way to browse the web. Web pages for computer screens are often &quot;optimized&quot; 
  for a certain size (for example 800x600), and use tables for page formatting. Obviously this will not work well on a phone or other small devices, but this problem 
  can be overcome by adding a few handheld rules. </p>

<h4>Print</h4>

<p>What the web page should look like when printed out. Many sites use a &quot;Print 
  button&quot;. This is hardly ever necessary with modern browsers that all support 
  the <code>print</code> media type. </p>

<p>A print style sheet will typically:</p>

<ul class="bullets">
  <li>Hide screen-specific content like navigation and repeated elements, </li>
  <li>Take into account that print is a paged medium with fixed page size, </li>
  <li>Compensate for lack of color and for lack of interactivity, for instance 
    by printing out the URLs that in other media would be clickable links. </li>
</ul>

<p>While absolute units (points, cm, inches) should be avoided for other media, 
  they may be appropriate for print.</p>

<h4>Projection</h4>

<p>The <code>projection</code> medium is used for slide show type presentations. 
  The major difference with <code>screen</code> is that <code>projection</code> 
  (like <code>print</code>) is a paged medium, while <code>screen</code> is a 
  continuous medium (you scroll from the top to the bottom of the document with 
  no interruptions in between). The <code>projection</code> type is only supported by Opera, and only on desktop.</p>

<p>Like print, projection is a paged medium. A web page can consist of many slides. 
  Since projection is primarily used for presentations, extraneous information 
  (like web navigation) is usually hidden to show only the main points in the 
  presentation.</p>


<h4>Handheld</h4>

<p>This media type is used for devices. It is mainly used to compensate for the 
  small screen size, and partially other factors, like color capabilities. </p>

<p>The handheld style sheet is primarily used to reposition and resize content 
  to fit the small screen. Like projection, it can hide some content for a more 
  efficient presentation. </p>

<p>The &quot;handheld&quot; medium is a relatively coarse mechanism, as &quot;handheld&quot; 
  includes a very diverse group of devices from the smallest smart phone to the 
  largest PDA. One future technology that will allow more precise customization 
  is <a href="http://www.w3.org/TR/css3-mediaqueries/">Media Queries</a>. Opera 
  is actively involved in the development of Media Queries. </p>

<h4>TV</h4>

<p>Used for TVs and similar media. In most cases the same styles as with screen 
  would be used.</p>

<h4>Aural</h4>

<p>Used for spoken version of a web page. The <acronym>CSS</acronym> properties that are used (such as voice-family, volume, cue-before) are entirely different from the five visual media types above.</p>


<h4>Other media</h4>

<p>The list is not complete. There are four more media types defined in <acronym>CSS</acronym>2, and there might be more in the future. One of these, <code>all</code>, is the default value and applies to all media. The three remaining <acronym>CSS</acronym>2 media, <code>braille</code>, <code>embossed</code>, and <code>tty</code>, aren&#39;t currently used by any browser.</p>

<h3 id="h5.2"> Document order</h3>

<p>Designing a web page for multiple media is much simpler when you take in account 
  document order. Document order is the order the <acronym>HTML</acronym> source code is in. In most cases a page is displayed by this order. Content early in the source code is displayed above content that comes later, and elements close to each other in the source code remain close to each other when displayed.</p>

<p>One exception is tables. Tables are displayed cell by cell left to right for each row going down. If the cells have a large size, the distance between the elements can be great, even if they are close in the page source. In the example below cell 3 is far from cell 4, and cells 1 and 4 are visually close even if they have the entire content of cells 2 and 3 between them.</p>

<div class="center">
<table class="border">
  <tr> 
    <td width="40" class="example-left">1</td>
    <td width="120" class="example-center">2</td>
    <td width="40" class="example-right">3</td>
  </tr>
  <tr> 
    <td width="40" class="example-left">4</td>
    <td width="120" class="example-center">5</td>
    <td width="40" class="example-right">6</td>
  </tr>
</table>
</div>

<p>While a PC screen may be large enough to have several columns of text, this 
  is rarely feasible on a handheld device. For that reason tables will usually 
  be reformatted to document order (that is, the text will be read <span class="example-left">1</span>-<span class="example-center">2</span>-<span class="example-right">3</span>-<span class="example-left">4</span>-<span class="example-center">5</span>-<span class="example-right">6</span>).</p>

<p> The other exceptions to <acronym>HTML</acronym> being displayed in document order are the <acronym>CSS</acronym> features floats and positioning. Float moves content to the far left or right of its containing box. Positioning can move content to any position on the page or even stack content on top of each other, or hide some content behind other content. Float and positioning are rarely useful on a small screen, and, if you are not careful, they may result in the positioned element being moved outside the screen, forcing the user to scroll.</p>

<p>It is better to place the important content early, and to have the additional/extra code (like navigation sections) grouped so that it is easier to skip.</p>acronym
