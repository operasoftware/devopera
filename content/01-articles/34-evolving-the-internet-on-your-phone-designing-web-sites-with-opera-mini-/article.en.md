Title: Evolving the Internet on your phone: Designing web sites with Opera Mini 4 in mind
----
Date: 2007-08-31 08:24:52
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

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult the <a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a> for more up-to-date information:</p>

 </div>

<h2>Opera Mini overview</h2>



<p>Opera Mini 4 is a cutting edge web browser for mobile phones - it is the consumer version of Opera Mobile, the most widely-deployed advanced mobile web browser.  Unlike many phone-based browsers, it works on most modern phones, from the top of the range smart phones to fashion phones and low end models.  All that is required to run Opera Mini is a Java Virtual Machine (JVM). Due to Opera&#39;s lean and efficient code-base, and Opera Mini&#39;s server based pre-formatting, it can display web pages that were built using regular web technologies designed for desktop based browsers (other mobile browsers that work on low end handsets require special WAP content or the mobile profiles of HTML and CSS, which isn&#39;t an ideal solution.)</p>



<p>Web pages are rendered on the Opera Mini servers, which compile the web page into a compressed binary that is sent to the Opera Mini client.  This reduces the data traffic sent to the phone, reducing users&#39; data bills (many users still pay by the KB,) and reducing the time taken to display the page.  Pages can be displayed either using a regular desktop view, or the traditional Opera Mini single column view.  Pages can be customised for mobile using handheld stylesheets and CSS3 media queries.</p>



<p>Get the <a href="code_storey_operamini4.zip">code examples that accompany this article</a>.</p>

<p class="note">Visit our <a href="http://www.opera.com/mobile/">Opera Mini &amp; Opera Mobile</a> page for details and download instructions.</p>

<p>In coming weeks and months, we&#39;ll follow this up with further articles, including more detailed web standards support, how to articles, and advanced techniques. JavaScript/DOM support in Opera 4 Mini will be the subject of a whole separate article.</p>


<h2>Opera Mini technical specifications</h2>



<p>Opera Mini 4 is built on the same rendering engine, Core-2, that is going into our all of our next generation  browsers.  This code-base was first made available on the Nintedo Wii&#39;s Internet Channel, and will be included in a modified form in the next version of the desktop browser, Opera Kestrel.</p>



<p>Opera Mini 4 includes the same (X)HTML, CSS, XSLT and XPath support as found in its desktop cousin, excepting Web Forms 2 support, which is currently disabled.  The file input element is disabled in the beta release, but will enabled in the final release for taking images from the phone&#39;s camera.  A subset of Core-2&#39;s JavaScript engine is also included.  The majority of JavaScript functions are available, except those that require asynchronous operations or user interaction once the page has been loaded.  As such XMLHttpRequest (used in Ajax) is not available when used asynchronously. SVG and plug-ins are not available.</p> 



<h2>Identifying Opera Mini 4</h2>



<p>A browser can be identified by checking the user agent string.  Opera Mini 4 identifies as <code>Opera 9.5</code>, with <code>Opera Mini</code> included in the parentheses. This corresponds with the branch of Opera that the rendering engine was taken from.  The default user agent string is as follows:</p>



<pre><code>Opera/9.50 (J2ME/MIDP; Opera Mini/4.0.8462/8; U; en)</code></pre>



<p>It is important to bear in mind that phone manufacturers and mobile carriers often customise browser user agent strings, so testing the user agent string isn&#39;t always fool proof.  In general the <code>Opera Mini/4.x</code> portion of the string should always be included, where <code>x</code> is the minor version number.</p> 



<p>Opera in general can be identified by using JavaScript to test for <code>window.opera</code>.  This will identify any version of Opera, including the desktop browser.</p>  



<p>While it is possible to identify Opera Mini by these methods, it is best to avoid this kind of detection where possible, and instead use object detection to test for feature support (unless you are serving content specifically for Opera Mini, which isn&#39;t advised.)  This way, if Opera Mini is currently lacking a specific feature, it will just bypass that code safely without failing; if it is added in a later version, it will get the code for that feature without requiring any changes to your script.</p>  





<h2>Rendering modes</h2>



<p>As mentioned above, Opera Mini 4 includes two rendering modes. In this section, we&#39;ll discuss them in more detail.</p>



<p>The default rendering mode on devices with screens over 128 pixels wide is Desktop rendering.  In this mode the web page is rendered as if it was on a desktop computer, and scaled to fit the screen width.  This works in much the same way as The Internet Channel on Nintendo Wii, except Mini returns the real screen dimensions when tested via JavaScript (for example using <code>window.innerWidth.</code>)  If the web page is wider than the device screen, a virtual mouse pointer is shown that the user can use to scroll around, and if it is greater than twice the display size, a magnifying thumbnail will be shown that the user can use to zoom into various parts of the page (as illustrated in Figure 1.)</p>


<br />
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/bbcmini4.jpg" alt="Small image of BBC web site viewed in Opera Mini 4, with zoom window ready to zoom" /><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/bbcmini4zoom.jpg" alt="portion of BBC web site zooomed in on, in Opera Mini 4" /></p>

<p class="comment" align="center">Figure 1 - the BBC web site, with magnifying thumbnail (left,) and then zoomed in on (right.)</p>



<p>On devices with screens less than or equal to 128 pixels the default rendering is Fit to width.  In this mode the page is reformatted into a single column mode using CSSR - this avoids the need to scroll horizontally.  The user can also enable this option from the browser&#39;s menu (Menu &gt; Tools &gt; Settings &gt; Fit to width, then refresh the page.)</p>



<p>This mode is the same as CSSR mode on both Opera Mobile and Opera for desktop, except that floats are disabled.  You can test small screen rendering in the desktop browser using the View &gt; Small Screen option (See Figure 2; Floats are not disabled in the desktop version like they are on Mini.)  An <a href="http://www.opera.com/developer/tools/mini/">Opera Mini simulator</a> is also available.</p>



<br />
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/operadesktopsmall.jpg" alt="The small screen rendering mode in the Opera desktop browser" /></p>


<p class="comment" align="center">Figure 2 - Small screen rendering in the Opera desktop browser.</p>



<p>In either mode, if a Handheld Stylesheet is defined it is used to define the layout of the page instead of the screen stylesheet.</p>



<p>As a developer, this gives you full control over how your site will be displayed on the phone.  As scaling and fit to width are turned off in this mode, it is important to bear in mind that on some devices it is difficult or impossible to horizontally scroll.  Care should be taken that your layout takes this into account - use a single column layout if possible.  CSS3 Media Queries are also supported, allowing the designer to send different style rules depending on the resolution of the screen - small screen sizes can be given a stylesheet optimised for a single column layout. You&#39;ll see an example of a media query in use later on in the article.</p>



<p>What follows is a summary of things to be aware of about the two different rendering modes.</p>



<h3>Desktop rendering</h3>



<p>When in desktop rendering mode, the page will be displayed the same way as it is on the desktop version of Opera, except for some differences, which include:</p>



<ul>

<li>Scaling the page to fit the width of the screen</li>

<li>Reformatting text so that a row or column of text is not wider than the screen width</li>

<li>Scaling and compressing images to a lower resolution to save bandwidth.  In the standard low quality mode, images are rescaled to have a maximum size of 95% of the screen size in either direction</li>

<li>Zero support is available for plug-ins, SVG and Web Forms 2</li>

<li>Some differences to CSS support, as hi-lighted below</li>

<li>Only a small subset of JavaScript is supported</li>

<li>Due to client limitations, frames should be avoided where possible, as they are flattened in Mini. They shouldn&#39;t really be used anyway, but we are including this just for completeness</li>

<li>Automatically converting phone numbers to links when detected</li>

</ul>



<h3>Small Screen/Fit to width rendering</h3>



<p>When in small screen rendering/Fit to width mode, the page is reformatted to fit the screen.  This includes:</p>



<ul>

<li>Reformatting the layout to display as one continuous column</li>

<li>Ignoring floats</li>

<li>Reformatting text to wrap at the screen width instead of the width of the containing block</li>

<li>Rescaling images to have a maximum size of 70% of the screen size in either direction</li>

<li>Zero support is available for plug-ins, SVG and Web Forms 2</li>

<li>Only a small subset of JavaScript is supported</li>

<li>Due to client limitations, frames should be avoided where possible</li>

<li>Automatically converting phone numbers to links when detected</li>

</ul>


<h2>HTML and CSS support</h2>



<p>The HTML and CSS support in Opera Mini 4 is vastly improved over previous versions.  The support is equivalent to that of Opera Kestrel, including its support of CSS3 features such as selectors and <code>text-shadow</code>. Important differences are highlighed in the following sections.</p>  



<h3>Optimising your CSS for mobile devices using handheld stylesheets and media queries</h3>



<p>The default media type for Opera Mini 4 is handheld, if it is available, otherwise the screen media type is used. Unlike Opera Mini 3, Mini 4 fully interprets handheld stylesheets without any reformatting.  When using a handheld stylesheet, the standard stylesheet is ignored.  Full support for media queries has been added, except in the case of media that is not applicable to mobile browsing, such as print.</p>  



<h4>Handheld stylesheet example</h4>



<p>Handheld stylesheets can be defined to replace the screen stylesheet when the web page is viewed on a mobile phone or handheld device, giving an efficient way to optimise for mobiles.  Unfortunately, some modern mobile browsers ignore the handheld media type.  See <a href="http://files.myopera.com/dstorey/experiments/handheld.html">an example that uses <code>handheld</code> stylesheets</a>.  In this example there are two stylesheets.  The screen stylesheet is ignored by any browsers that support handheld stylesheets correctly (such as Opera Mini 4 and Opera Mobile) and instead the handheld stylesheet is used to style the page. A &#39;skip to content&#39; link is shown, and the menu is displayed above the main content, so that no horizontal scrolling is required to reach the different options. If there are any images in the page, it sets their maximum width to 95% of the screen width.</p>



<h4>Media queries</h4>



<p>Media queries are expressions that allow us to more accurately specify under what user agent conditions a stylesheet should be applied, in HTML using media attribute of the link element, the <code>@import</code> statement inside a CSS document, or whatever. You can also specify media queries for specific CSS rules using the <code>@media</code> rule. For example, you could specify that you wanted a stylesheet applied only when the viewing device is a handheld device with a maximum screen width of 480 pixels. We&#39;ll see how to do this below.</p>



<p>Media queries are part of the CSS3 specification and supported by modern standards-compliant browsers, including but not limited to Opera, Opera Mobile, Opera Mini 4, Safari 3 and the Nokia S60 browser.  Wide support for media queries amongst mobile browsers that support regular web technologies make them an ideal solution for optimising the layout of a page for devices with small screens.  In Opera Mobile and Opera Mini these can be used in conjunction with the handheld media type to give you finer control of the layout.</p>



<p>Media queries can be defined in a stylesheet using syntax such as the following:</p>



<pre><code>@media handheld and (max-device-width: 480px),  screen and (max-device-width: 480px) {  }</code></pre>



<p><code>@media</code> defines the media that the media query is applied to and <code>max-device-width</code> defines the maximum screen width that the query will include.  In this case it will apply the rules contained within the curly braces to both screen and handheld media if the device&#39;s screen is <code>480px</code> or lower.</p>



<p><code>max-device-width</code> isn&#39;t the only query that can be used.  For testing on a desktop screen it is best to use <code>max-width</code> so it applies when the browser window is the required size and not just the physical size of the display.  a list of the available queries can be found <a href="http://www.w3.org/TR/css3-mediaqueries/#media1"> in the Media Query Specification</a>; we will also look at media queries in more detail in a future article.</p>



<p>It is important to include both screen and handheld media types as currently some mobile browsers support media queries but not handheld media.  Including <code>screen</code> will pickup those browsers.</p>  



<p>See <a href="http://files.myopera.com/dstorey/experiments/mediaqueries.html">an example using Media Queries</a>.</p>



<p>Another way to specify a Media Query is to include it in the <code>link</code> element itself, similar to the handheld example above.  The syntax for this is as follows:</p>



<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;style/handheldexample.css&quot; type=&quot;text/css&quot; media=&quot;handheld, only screen and (max-device-width: 480px)&quot; /&gt;</code></pre>



<p>This can be seen in this <a href="http://files.myopera.com/dstorey/experiments/mediaqueryexample2.html">second example using Media Queries</a>. For ease of testing on desktop there&#39;s also <a href="http://files.myopera.com/dstorey/experiments/mediaqueryexample3.html">an example using <code>max-width</code> instead of <code>max-device-width</code></a>.</p>



<p>The advantage of this approach is that in the previous example the media query overrides the screen styles, while this only specifies the styles needed for mobile.  The disadvantage is that two stylesheets have to maintained instead of one.   You need to use the <code>only</code> keyword in the screen media query to make sure browsers that do not understand media queries (such as Firefox and IE) ignore the statement, otherwise they get to the <code>link</code> element, see the <code>screen</code> keyword, which they also understand, but then ignore the media query and end up applying the stylesheet just like a regular screen stylesheet.</p>



<p>This is not an issue in the first example,  as those browsers do not understand the <code>@Media</code> construct and thus the whole statement is ignored.  However, WebKit makes it more difficult by not supporting the handheld media type. As <code>screen</code> is used, it will pick up the regular screen stylesheet too.  For this reason a media query has to be added to the regular screen stylesheet link element. Instead of using:</p>



<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;style/screen.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;</code></pre>



<p>As would normally be used, you should use the following:</p>



<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;style/screen.css&quot; type=&quot;text/css&quot; media=&quot;screen and (min-device-width: 481px)&quot; /&gt;</code></pre>



<p>As the <code>only</code> keyword is not specified, browsers that do not support media queries will also apply the stylesheet.</p>



<p>In the first example I included the media query for both the handheld and screen media types, therefore the mobile optimised stylesheet wouldn&#39;t apply to devices with screens wider than 480px, even if the browser supports handheld media.  In the second and third examples I only specified the media query on the screen media type, so the stylesheet would apply to all devices where the browsers support handheld, no matter what size the screen is.  The media query specified for the screen media type would be used by browsers that support media queries but not handheld media, such as Safari and the S60 browser.</p>



<h4>Borders and backgrounds</h4>



<p>Borders and background images are now supported in Opera Mini 4, as seen in Figure 3.  However, dotted and dashed borders display as a solid border - this is a design decision due to bandwidth and memory issues.</p>

<br />
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/backgroundmini3.jpg" alt="Borders and background images rendered in Opera Mini 3" /><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/backgroundmini4.jpg" alt="Borders and background images rendered in Opera Mini 4" /></p>

<p class="comment" align="center">Figure 3 - Opera Mini 4 (right) also supports borders and background images.
</p>







<h3>HTML support</h3>



<p>Now I will go through the significant improvements in HTML support that Opera Mini 4 has, over previous versions.</p>



<h4>Text and font support</h4>



<p>(Ok, so this bit involves some CSS as well!) Opera Mini supports one font in various sizes, so specifying <code>font-family</code> has no effect, except for a special case with monospace fonts. The font included is called &quot;San Serif&quot;/Generic and all fonts map to this.</p> 



<p>The font can be displayed as normal and bold, with italic to be supported in the final version of Opera Mini 4.  While there is only one font supported, a monospace font is emulated, which makes every character appear to be an even width inside <code>pre</code> and <code>code</code> elements, and when <code>courier</code> or the generic <code>monospace</code> <code>font-family</code> value is specified. The good news with Opera Mini 4 is that now proper heading levels (<code>h1</code> - <code>h6</code>) are now supported, as seen in Figure 4.</p>



<p><code>del</code>, <code>abbr</code> and <code>acronym</code> are also now supported.</p>


<br />
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/typemini3.jpg" alt="different HTML heading levels rendered in Opera Mini 3" /><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/typemini4.jpg" alt="different HTML heading levels rendered in Opera Mini 4" /></p>

<p class="comment" align="center">Figure 4 - As you can see from this side by side comparison of Opera Mini 3 (left) and 4 (right,) Opera Mini now supports proper rendering of full HTML heading levels.</p>




<h4>Lists and tables</h4>



<p>Support for lists and tables have been added to Opera Mini 4.  List support includes ordered, unordered and definition lists.</p>   



<p>While tables are supported, when using handheld stylesheets or media queries to reformat the layout, it is recommended to display any data tables in one or two columns or so that horizontal scrolling is not required, with the required headings clearly shown using the <code>th</code> element (see Figure 5.)  Using tables for layout should be avoided, as always.  If your existing mark-up uses tables for layout, I&#39;d recommend avoiding defining a handheld stylesheet, and allowing Opera Mini to reformat the page automatically, unless the layout is relatively trivial to adapt using CSS.</p>

<br />
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/tablesmini3.jpg" alt="A table rendered in Opera Mini 3" /><img src="http://forum-test.oslo.osa/kirby/content/articles/34-evolving-the-internet-on-your-phone-designing-web-sites-with-opera-mini-/tablesmini4.jpg" alt="A table rendered in Opera Mini 4" /></p>

<p class="comment" align="center">Figure 5 - Opera Mini 4 (right) properly renders HTML tables too...</p>




<h4>Image formats</h4>



<p>All image formats supported by Core-2 are supported by Opera Mini 4.  This includes PNG, JPEG, GIF (animated GIFs not supported in Mini,) BMP, ICO, TGA and WBMP.  Opera Mini has two image settings - the default is low quality, which reduces the image quality to save bandwidth, but the user can change this to high quality in the settings menu for when bandwidth isn&#39;t an issue.  Due to this image compression, and for accessibility reasons, it is recommended to avoid including text in images, but if you absolutely must use an image for text, such as for displaying a particular font on the regular desktop layout, include the image using CSS and optimise the size and clarity for best results on the mobile version.  A good solution if you are using handheld stylesheets or media queries is to only include the image in the screen stylesheet and not include it at all in the handheld stylesheet.  Always make sure the original text is available for screen readers to access.</p>  



<h2>Summary</h2>



<p>This has been a brief, but we hope, helpful introduction to optimizing your web page designs so that they will work better when accessed by mobile browsers. As mentioned earlier on in the article, we will be publishing more content to help you with mobile site development/troubleshooting in the very near future. Watch this space! We will round off with some brief tips on getting the best out of your your web sites on multiple devices.</p>



<ul>

<li>Separate mark-up (XHTML), presentation (CSS) and behaviour (JavaScript)</li>

<li>Write concise and semantic (X)HTML, without tables for layout</li>

<li>Validate your CSS and (X)HTML and avoid vendor specific JavaScript and DOM extensions</li>

<li>Provide fallbacks for Ajax, JavaScript behaviour, and plug-ins where possible</li>

<li>Use media queries or handheld stylesheets  to optimise the layout and images if appropriate</li>

<li>Place decorative images in your CSS files instead of mark-up</li>

<li>Avoid frames</li>

<li>Use <code>alt</code> text as users often turn off images to save bandwidth</li>

<li>Reduce margins and padding when using handheld stylesheets</li>

<li>Test in multiple full HTML browsers</li>

</ul>



<h1>Resources List</h1>



<ul>

<li>Mobile test by Cameron Moll: <a href="http://www.cameronmoll.com/articles/mobile/mkp/">http://www.cameronmoll.com/articles/mobile/mkp/</a></li>

<li>Mini 4 Simulator: http://www.operamini.com/beta/simulator/ (URL no longer active)</li>

<li>Mini 3 Simulator: http://www.operamini.com/demo/ (URL no longer active)</li>

<li>Media Query Spec: <a href="http://www.w3.org/TR/css3-mediaqueries/">http://www.w3.org/TR/css3-mediaqueries/</a></li>

<li>CSS Media types: <a href="http://www.w3.org/TR/REC-CSS2/media.html">http://www.w3.org/TR/REC-CSS2/media.html</a></li>

</ul>
  



