---
title: 'Opera Mini: Web Content Authoring Guidelines'
authors:
- odevrel
intro: 'This article presents a detailed set of guidelines for optimizing web content for viewing on Opera Mini. It covers a complete range of topics, including HTML, CSS, JavaScript, design considerations and more.'
license: cc-by-3.0
---

<h2>Table of Contents</h2>

<ul>
<li><a href="#intro">Introduction</a>
<ul>
<li><a href="#mobile-browsing-nutshell">Mobile browsing in a nutshell</a></li>
<li><a href="#developing-mobile-web">Developing for the mobile web</a></li>
<li><a href="#design-consider">Design considerations</a></li>
</ul>
</li>
<li><a href="#html-css-support">HTML and CSS support</a>
<ul>
<li><a href="#basic-html-css">Basic HTML and CSS</a></li>
<li><a href="#rendering-modes">Rendering modes</a></li>
<li><a href="#image-animation-video">Image formats, animation, and video</a></li>
<li><a href="#typography">Typography</a></li>
<li><a href="#downloads">Downloads</a></li>
<li><a href="#metadata">Metadata</a></li>
</ul>
</li>
<li><a href="#javascript">JavaScript support</a>
<ul>
<li><a href="#events">Supported events</a></li>
<li><a href="#popup">Popup support</a></li>
<li><a href="#ajax">Ajax support</a></li>
<li><a href="#operamini"><code>operamini</code> object</a></li>
<li><a href="#operamini-page"><code>operamini.page</code> object</a></li>
<li><a href="#operamini-sms"><code>operamini.sms</code> object</a></li>
</ul>
</li>
<li><a href="#customising-content">Customising content for Mini</a>
<ul>
<li><a href="#ua-sniff">User-Agent sniffing</a></li>
<li><a href="#feature-strings">Feature strings</a></li>
<li><a href="#native-user-agent">Detecting the device's native user-agent</a></li>
<li><a href="#manufacturer-model">Detecting the device's manufacturer and model</a></li>
<li><a href="#detect-real-source">Detecting the real source of a request</a></li>
<li><a href="#language">Detecting the user's language</a></li>
<li><a href="#media-types">Media types</a></li>
<li><a href="#media-queries">Media queries</a></li>
</ul>
</li>
<li><a href="#debugging">Debugging Websites for Opera Mini</a>
<ul>
<li><a href="#tools">Tools</a></li>
<li><a href="#page-source">View page source</a></li>
<li><a href="#common-problems">Solving common problems</a></li>
</ul>
</li>

</ul>


<h2 id="intro">Introduction</h2>

<p>This document has two purposes: first, it aims to outline a broad view of the state of mobile browsing and its unique constraints and restrictions, and second, it details the things you should be aware of when designing web pages with Opera Mini in mind.</p>

<h3 id="mobile-browsing-nutshell">Mobile browsing in a nutshell</h3>

<p>Mobile browsing is generally very resource-limited. There are three broad approaches on how to deal with Web content in such environments. Each one has its tradeoffs and advantages, and the potential for supporting Web standards (and working with websites not designed for mobile use) is greater in some cases than in others.</p>

<p>First, there are browsers that run the same engine as desktop browsers, such as Opera Mobile and Safari on the iPhone. Since the same engine is used, websites are supported as well as they are on desktop browsers. Most devices do not have enough CPU power or memory to run these browsers and so they tend to only be found on high-end phones.</p>

<p>Second, there are browsers designed specifically for mobile: these generally have limited support for Web standards. Some of these only support WAP browsing (such as the OpenWave browser), some support other standards like cHTML or XHTML MP (such as the Japanese NTT DoCoMo iMode browsers), and some support a limited subset of general Web standards (such as Netfront, Pocket IE, and Blazer).</p>

<p>Third, there are browsers that use a proxy system to deliver content to the phone. In this setup, there is a client on the device that connects to a proprietary server, which then connects to the wider web for page requests, does some server-side processing and sends content back the client. Opera Mini falls into this category: when the user navigates to a new page, the server fetches the page and transforms it into a lightweight compressed binary markup language called OBML. This decreases bandwidth usage by up to 90% and saves CPU usage on mobile devices, and as such makes browsing on resource-restricted devices much more viable. It also has speed benefits, since the majority of data transfer occurs between the Mini servers and website servers, both of which are on high-speed connections.</p>

<h3 id="developing-mobile-web">Developing for the mobile web</h3>

<p>When developing for the mobile platform, you can choose to either build a single site designed to work well in all browsers with various browser– and device–specific tweaks, or you can build two entirely separate sites, one optimised for desktop browsers and the other for mobile browsers.</p>

<p>Opera strongly recommends building one site for all devices. We believe in one Web that works across platforms and devices, and this is why we work hard to create browsers that support Web standards as well as possible and use the same rendering engine for all of our products. Developing one site has the advantage of reducing development, QA, and maintenance time, and with the growth of standards-supporting browsers, it is an achievable goal.</p>

<p>That said, developing a separate site can sometimes make sense. If you already have a site that is designed to be highly interactive and you now want it accessible on mobile devices, it may be easier to develop a cut-down version than to retrofit the changes to the existing design. The decision should ultimately be made by weighing up the possibility of an improved user experience against the extra cost and maintenance of a separate site.</p>

<p>If you do create a separate site, be aware that serving different content based on the browser is not foolproof. Make sure you include links from the mobile version of the site to the full version, so that if you misidentify the browser or if the user is using a mobile browser that can handle the full site, the user is not blocked from your content.</p>

<h3 id="design-consider">Design considerations</h3>

<p>Mobile devices are resource-constrained in various ways that desktop browsers are not; the most important of these are listed below:</p>

<ul>
<li>Limited control. Most mobile devices don't have pointing devices like a computer mouse. Most don't have a traditional keyboard either, and text input might take a lot of effort. To help mitigate these problems, you should make as many options selectable from drop-down lists or radio buttons as possible, and consider prefilling fields with likely choices.</li>

<li><strong>Reduced screen size</strong>: Devices have wildly varying resolutions. 480x320 would be a large screen for a mobile device, and many have screens as small as or smaller than 240x320. As a result, complicated layouts that require large resolutions should be avoided on mobile devices, since they will only make the user have to scroll. This can be done by keeping a design deliberately simple, sending different pages to mobile devices, or using CSS media queries to change layouts dynamically.</li>

<li><strong>Limited memory and bandwidth</strong>: Mobile devices will obviously have less memory available than desktop computers, so you need to think carefully about the length of your pages and how many images you use on them. Some mobile browsers have the option of turning images off, so you should make sure that your images have text alternatives available.</li>

<li><strong>Limited web standards support</strong>: As mentioned above, some devices have support for a limited subset of web standards, so make sure your pages are designed with graceful degradation in mind, and/or do feature detection to work out if browsers support advanced features before serving them, and then provide alternatives to those that don't. Be careful to use JavaScript in such a way that if scripting support is turned off or some features are not present, your pages' main functionality will still be available. We'll discuss these concepts more later on &mdash; see <a href="#html-css-support">HTML and CSS support</a> below.</li>
</ul>

<p>To design and create your site such that it will work to an acceptable level in the greatest number of browsers without individually testing each and every one, ensure that the HTML you produce is well-structured and in a logical order. This will ensure that the page will still be intelligible and legible on devices that support minimal styling and/or JavaScript. You can simulate this by disabling style/script in your browser (Opera and Firefox both support this). Putting things in a logical order is important because some browsers (Mini included) will sometimes collapse complex layouts so they are displayed on the screen in a single column, thus preventing horizontal scrolling. If your content is written in a sensible order, then this feature will work much better. For more information, please see the <a href="#rendering-modes">section on rendering modes</a> below.</p>

<h2 id="html-css-support">HTML and CSS support</h2>

<p>Opera Mini is built on the same core rendering engine as Opera Desktop, and so it has excellent support for Web standards, including HTML, CSS, XSLT, XPath, and SVG. However, there are some differences.</p>

<h3 id="basic-html-css">Basic HTML and CSS</h3>

<p>Mini supports borders and backgrounds, including asymmetric styles and sizes. Dotted and dashed borders are however rendered as solid for bandwidth and memory reasons. Tables are supported, but bear in mind that even three-column tables might force the user to scroll horizontally in order to see all the data. Using tables for layout should be avoided at all costs.</p>

<p>Mini does not support the <code>line-height</code> CSS property at present, since testing showed that it generally meant less text fitted on any individual page, requiring more scrolling from the user. As a result, using <code>line-height</code> to position things vertically will not work, like in the example below:</p>

<pre><code>&lt;p style="height: 52px; line-height: 52px;"&gt;Text&lt;/p&gt;</code></pre>

<p>This would result in the text being displayed at the top of the box rather than in the middle. While Mini supports frames, we strongly recommend you do not use them; there are better ways to achieve the same effect. Mini also supports iframes, though with some limitations. Unlike on desktop browsers, Mini has only one scrollable area - the <code>&lt;body&gt;</code> element &mdash; and iframes will have their contents cut off if they are not large enough to display them. Other elements that use the CSS to create scrollable sections within the page &mdash; for example <code>overflow-y</code> &mdash; will also be cut off in the same way.</p>

<h3 id="rendering-modes">Rendering modes</h3>

<p>Mini has two different rendering modes, desktop and mobile, and the user can freely switch between them:</p>

<ul>

<li>
<p>Desktop rendering renders pages in much the same way as a desktop browser, with the exception that it will try to force columns of text to not exceed the width of the screen, to reduce the need for horizontal scrolling.</p>

<p>If the web page is wider than the device screen, a virtual mouse pointer is shown that the user can use to scroll around. If the page's width is greater than twice the width of the device's screen, then overview mode is triggered, which shows a zoomed-out view of the page that fits the screen horizontally and scrolls vertically. The user can then choose an area to zoom in and read at full size.</p>
</li>

<li>
<p>In mobile view, Opera reformats pages so that they fit into a single column. This keeps the elements of the original page design (such as colours and images) but linearises their display in an attempt to eliminate horizontal scrolling.</p>

<p>If mobile view is turned on and the page provides a handheld stylesheet, as shown below, then the layout will not be reflowed or linearised, and that stylesheet will be used instead:</p>

<pre><code>&lt;link rel="stylesheet" type="text/css" media="handheld" href="handheld.css"&gt;</code></pre>
</li>

</ul>

<h3 id="image-animation-video">Image formats, animation, and video</h3>

<p>Opera Mini supports all the image formats supported by its desktop cousin, including PNG, JPEG, GIF, SVG, BMP, ICO, TGA, and WBMP. However, the Mini servers recompress images at a lower quality setting to save bandwidth, as well as sometimes resizing them so that they fit better on the user's screen. The user can change this behaviour and opt to have higher-quality images if they want, but this is not the default.</p>

<p>Because of this compression, and for accessibility reasons, we strongly recommend that you do not use images to display text. If you must do so (e.g. because you are using image replacement for a header font), then include the image using CSS and optimise the image's size and clarity for Mini's low quality mode. You can also use different stylesheets for screen and handheld browsers and include the image only on the former, though this only works in Mobile view. Regardless, always make sure the original text is available for screen readers to access, whether with alt text or replaced content.</p>

<p>Animation of any kind (including animated GIFs, animated SVG, or the <code>&lt;blink&gt;</code> or <code>&lt;marquee&gt;</code> elements) is not supported in Opera Mini because the server pre-renders the page and merely sends the client a snapshot of it.</p>

<p>If Mini encounters a link to an RTSP stream, then it is handed to the media player on the client device to deal with. This does not take place over the Mini proxy but via a direct connection, and so may not be possible on some devices.</p>

<h3 id="typography">Typography</h3>

<p>Mini uses the fonts present on the device it runs on, and the native font on most devices is a sans-serif one. Most devices will only have a few font sizes, so Mini tries to match what web pages request with what is available on the device. This is not always possible, and so designs that expect pixel-perfect layout will probably not work. Designs should be flexible enough to handle font sizes other than what they expect.</p>

<p>When it comes to font families, Opera Mini will only use one family of font per page, and setting font-family will have no effect, except in the case of monospace fonts where it will simulate monospace. Mini also includes a small bitmap font that covers the ISO-8859-1 character range and is often the preferred choice on devices with low resolution and large system fonts.</p>

<p>Mini supports bold fonts, and the <code>text-decoration</code> property values <code>underline</code>, <code>overline</code>, and <code>strike</code>, but not <code>italic</code>. It also supports the <code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code> elements.</p>

<h3 id="downloads">Downloads</h3>

<p>Downloads are either launched in the native device browser, or performed from within Mini itself, depending on the functionality of the Java environment on the device. Regardless of which application on the device actually opens the download, it will be proxied through the same Mini transcoder server that the Mini client is connected to. This allows downloads that require state &mdash; such as cookies &mdash; to be successful.</p>

<h3 id="metadata">Metadata</h3>

<p>Mini supports basic Web page metadata such as document title and favicons, both of which are shown at the top of the browser. It is recommended to use the <code>&lt;link&gt;</code> element with a <code>rel</code> value of <code>shortcut icon</code> to locate the relevant icon for each page, like so:</p>

<pre><code>&lt;link rel="shortcut icon" type="image/png" href="icon.png"&gt;</code></pre>

<p>Mini also supports the alternate <code>rel</code> value to point to feeds that can be displayed and subscribed to:</p>

<pre><code>&lt;link rel="alternate" type="application/rss+xml" href="/feed.rss"&gt;</code></pre>

<p>If such feeds are present, a webpage will display an RSS icon in the top left hand corner of the Mini display.</p>

<h2 id="javascript">JavaScript support</h2>

<p>Mini supports JavaScript as well as Opera Desktop, but instead of running on the client, it runs on the server. A useful way to think about it is that the Mini servers are running web browsers in virtual windows that render their output to the phone. All the phone does is act as a display mechanism and a set of input controls for the server.</p>

<p>The server doesn't render to the phone constantly; instead, it takes a snapshot of the page after it has been loaded, pauses all running scripts, and sends that to the phone. This means that while Mini supports JavaScript just as well as Opera Desktop, interactivity is somewhat more limited. When the user clicks a link or a button, then the Mini client sends that information back to the server, where the server performs the associated action (such as loading a new page, executing some JavaScript, etc.).</p>

<p>For authors, the upshot of all this is that once a page has been rendered by the server, it won't change until the user does something on that and there is no way for scripts to run in the background. The user must do something to make Mini talk to the server in order for JavaScript to be unpaused. As a result, you cannot expect things like JavaScript animations or timed Ajax updates to work in the background as they would on a desktop browser.</p>

<p>JavaScript running on the Mini server will only run for a couple of seconds before pausing, for resource constraint reasons. This applies to JavaScript run due to an event firing e.g. <code>onload</code>, as well as code run because of a user action.</p>

<h3 id="events">Supported events</h3>

<p>The <code>load</code> and <code>unload</code> events are triggered the same as they are in desktop browsers. All elements with <code>mousedown</code>, <code>mouseup</code> or click event listeners, as well as hyperlinks, will be turned into selectable areas on the Mini client. When clicked by the user, those elements will receive the <code>mouseover</code>, <code>mousedown</code>, <code>mouseup</code> and click events, in that order, as you would expect on a desktop browser. Note that Mini does not send the <code>mouseout</code> event and that <code>mouseover</code> is only triggered if a click happens.</p>

<p>To reduce the number of server roundtrips, the Mini client only sends filled-in form data to the server when the submit button is clicked, or when an <code>&lt;input&gt;</code> element has a change event listener. This means that form-related events are all fired at once when the form is submitted or when a change event is triggered. In that case Mini will go over all the visible input controls on the page and fire the appropriate focus, click and change events on them, in that order. The change event immediately causes a roundtrip so that for example, data validation can happen straight away, rather than waiting until the form is submitted.</p>

<p>On forms that have one only visible text input control, Mini will submit the form to the server as soon as the contents of that control are changed by the user. Mini doesn't support any mouse or keypress events not mentioned above, nor resize or scroll events: this is to save bandwidth and prevent constant server roundtrips.</p>

<h3 id="popup">Popup support</h3>

<p>Opera Mini does not support popup windows. If you use <code>window.open()</code>, you will find that the opened window replaces the previously open window. In addition, calls to <code>window.close()</code> will be ignored &mdash; the user will have to use the 'back' button manually.</p>

<h3 id="ajax">Ajax support</h3>

<p>As a result of scripts being kept paused on the server while there is no user interaction, "Ajax" techniques may not work as expected. Code registered with <code>setTimeout()</code> and <code>setInterval()</code> may be run before the page is sent, but it is unlikely that it will be called more than once because of script pausing. <code>XMLHttpRequest</code> is supported just as it is on desktop browsers, but triggering such requests from timeouts and intervals will not cause dynamic page updates, since that code will not be run in the background.</p>

<p>Things affected by this include JavaScript animations that use <code>setInterval</code> to move or resize elements (with the effect that pages may be sent to the client mid-move or mid-resize), IRC-client chat clients, clocks, background polling
for new mail or notifications, and dynamic form autocomplete suggestions.</p>

<h3 id="operamini"><code>operamini</code> object</h3>

<p>Mini provides a special JavaScript object &mdash; <code>operamini</code> &mdash; that allows access to various special features of Mini and the device it is running on. This object is detailed in the rest of this section and in the following section.</p>

<p>If you want to detect <code>operamini</code>, you should do so with a check on the <code>operamini</code> object like so:</p>

<pre><code>Object.prototype.toString.call(window.operamini) === "[object OperaMini]"</code></pre>

<p>This way of doing things is better than a simple variable check, as an object's internal Class can't be tampered with — in this case there is no way to set an arbitrary <code>window.operamini</code> variable to pass false results, as there would be with this:</p>

<pre><code> if (operamini) {
	alert("Running on Opera Mini");
}</code></pre>

<h3 id="operamini-page"><code>operamini.page</code> object</h3>

<p>Setting <code>operamini.page.maxAge</code> will change the maximum amount of time a page is kept in Mini's cache on the client side, measured in minutes. Setting it to 0 will mean that a page is never cached. Values above 65535 will be cut down to 65535
(around 45 days).</p>

<p>Setting <code>operamini.page.samePage</code> to <code>true</code> will tell the server that the page should not be zoomed out when the page is loaded, but should remain zoomed in at the location it was on the previous page. It is intended to be used in situations where you navigate to a new page but want to keep the same focus area.</p>

<h3 id="operamini-sms"><code>operamini.sms</code> object</h3>

<p>Opera Mini has the ability to send SMS messages on devices that support them. You can use this functionality by setting the <code>number</code> and <code>body</code> properties of the <code>operamini.sms</code> object to the number you want to send an SMS to, and the contents of the SMS, respectively. Devices will prompt the user before sending an SMS and some may allow editing of the message and/or number before sending. Example usage of this functionality:</p>

<pre><code>&lt;script&gt;
function send() {
  operamini.sms.number = document.getElementById("number").textContent;
  operamini.sms.body = document.getElementById("body").textContent;
}
&lt;/script&gt;

&lt;p&gt;Number: &lt;input type="text" id="number" /&gt;
&lt;p&gt;Body: &lt;input type="text" id="body" /&gt;
&lt;p&gt;&lt;button onclick="send()"&gt;Send SMS&lt;/button&gt;</code></pre>

<p>You can detect whether you can send SMS messages before trying to by switching your code based on the value of <code>operamini.features.sms</code>.</p>

<h2 id="customising-content">Customising content for Mini</h2>

<p>There are various ways to customise the content you provide &mdash; either on the web server or via JavaScript. These are detailed below.</p>

<h3 id="ua-sniff">User-Agent sniffing</h3>

<p>A browser can be identified by checking the user agent string, which is sent as the User-Agent header in any HTTP requests it makes. Mini's user agent string comes in this form:</p>

<pre><code>Opera/9.80 ($PLATFORM; Opera Mini/$CLIENT_VERSION/$SERVER_BUILD; U; $CLIENT_LANG) Presto/$PRESTO_VER Version/$OPERA_VER</code></pre>

for example:

<pre><code>Opera/9.80 (J2ME/MIDP; Opera Mini/6.1.25403/25.842; U; en) Presto/2.5.25 Version/10.54</code></pre>

<p>Phone manufacturers and mobile carriers often customise browser user-agent strings, sometimes on a site-specific basis, so testing the user agent string is discouraged. Instead, you should detect individual features present on the device you are sending to. This approach is more flexible and future-proof, and means that if the Opera Mini servers are upgraded (which may lead to an adjusted UA string), then you can continue to support Opera Mini with no extra effort on your part.</p>

<p>If you absolutely need to serve content based on the user-agent string, then you should test based on the presence of the substring <code>Opera Mini</code>.</p>

<h3 id="feature-strings">Feature strings</h3>

<p>There are two main ways to detect what functionality is available for use on the phone when using Mini: using HTTP request headers, or in-page using JavaScript. You can find detailed information on what HTTP headers Opera Mini has available for use in the article <a href="https://dev.opera.com/articles/view/opera-mini-request-headers/">Opera Mini request headers</a>.</p>

Opera Mini provides various feature strings. These can be accessed through the <code>operamini.features</code> object in JavaScript:</p>

<pre><code>if (operamini.features.sms) {
  // send SMS message using operamini.sms object (see JavaScript section)
}</code></pre>

<p>Alternatively, you can test this via the <code>X-OperaMini-Features</code> HTTP request header, which sends results in the form of a comma-separated list, like so:</p>

<pre><code>X-OperaMini-Features: advanced, folding, secure</code></pre>

<p>The feature strings available can be seen in <a href="https://dev.opera.com/articles/view/opera-mini-request-headers/#x-operamini-features">X-OperaMini-Features</a>.</p>

<h3 id="native-user-sgent">Detecting the device's native user-agent</h3>

<p>Mini provides access to the device's native user-agent string, or a best guess at it, through the <code>operamini.remoteua</code> JavaScript object or the <code>X-OperaMini-Phone-UA</code> HTTP header. Devices that come with Mini preinstalled have this value hardcoded when Mini is embedded on the device. When Mini is downloaded and installed by a user, the User-Agent string of the client downloading the <code>.jad</code> file will be used instead. If neither of these routes prove fruitful, Mini will look at the Java environment on the device and use heuristics to pick a UA string that has a good chance of being right. If all else fails, this value will be <code>unknown</code>.</p>

<h3 id="manufacturer-model">Detecting the device's manufacturer and model</h3>

<p>Opera Mini provides access to the device's manufacturer and model details through the <code>operamini.phone</code> JavaScript object or the <code>X-OperaMini-Phone</code> HTTP header, provided that the device makes this information available to Opera Mini.</p>

<p>The format of the string provided in either case is <code><em>[manufacturer # model]</em></code>, so for example <code>Nokia # E75-1</code> or <code>SonyEricsson # K750i</code>. If neither can be determined, the value of that field will be <code>unknown</code>.</p>

<h3 id="detect-real-source">Detecting the real source of a request</h3>

<p>Most HTTP proxy servers, including Mini, make use of the <code>X-Forwarded-For</code> HTTP header. Each proxy server appends the IP address it is proxying the request for to the end of the string, in a comma-separated list. The header then looks like this:</p>

<pre><code>X-Forwarded-For: client, proxy1, proxy2</code></pre>

<p>This means that a proxy (the Mini proxy) forwarded the request for <code>proxy2</code>, which forwarded it for <code>proxy1</code>, which forwarded it for <code>client</code>. <code>client</code> is the most reliable source of information about the origin of the request, and is suitable for geolocation.</p>

<p>Note that to work around bugs in some proxies, Opera Mini sometimes sends this header as lowercased (<code>x-forwarded-for</code>), so you should check for it case-insensitively. The first value in the list (e.g. <code>client</code>, from above) is also accessible via JavaScript using <code>operamini.remote</code>.</p>

<h3 id="language">Detecting the user's language</h3>

<p>Opera Mini, along with most other browsers, sends the <code>Accept-Language</code> HTTP header with its page requests. <code>Accept-Language</code> specifies what language(s) the browser would prefer the HTTP response to be in using standard
ISO-639 language tags in a comma-delimited list. Each language is given a "quality" value that indicates the user's ability in that language. The quality can range from 0 to 1, with 1 being most preferable and 0 least.</p>

<p>In practice, the contents of this header will be determined by the current language of the device making the request (this is the case on both desktop and mobile browsers). If you have content in multiple languages, you should also provide an in-page way to switch between them because <code>Accept-Language</code> strings are not always accurate. Other circumstances may also arise, for example you may have a native German speaker using someone else's phone, the language of which is set to Afrikaans, or another language.</p>

<p>The example given below means "I'd prefer to be sent old Norwegian (bokmal) or new Norwegian, but I am also pretty good at English; I'll try French if you've not got the other languages available, but I'm not very good at that." In practice, <code>Accept-Language</code> strings are usually much simpler and generally only contain one or two language tags.</p>

<p>Format:</p>

<pre><code>Accept-Language: &lt;language tag&gt;;q=&lt;quality value&gt;, ...</code></pre>

<p>Example:</p>

<pre><code>Accept-Language: no-bok, no-nyn, en;q=0.8, fr;q=0.4</code></pre>

<h3 id="media-types">Media types</h3>

<p>CSS and HTML have a mechanism for specifying that certain stylesheets or portions of stylesheets should be used on certain display devices: "media types". Here are some examples:</p>

<pre><code>&lt;link rel="stylesheet" media="screen" type="text/css" href="main.css" /&gt;
&lt;link rel="stylesheet" media="print" type="text/css" href="print.css" /&gt;
&lt;link rel="stylesheet" media="handheld" type="text/css" href="mobile.css" /&gt;</code></pre>

<p>Opera Mini uses the <code>screen</code> media type by default, since that it closest to its capabilities. The <code>handheld</code> type will only be used if the user has explicitly switched to mobile view, in which case regular small screen rendering will be overridden by the handheld stylesheet.</p>

<h3 id="media-queries">Media queries</h3>

<p>Media queries are a CSS3 feature that allow page styling to vary with the characteristics of the device a document is being displayed on, for example screen width, aspect ratio, resolution, and so on. An example of a stylesheet using media queries is given below:</p>

<pre><code>/* Two-column layout for most screens */

#navigation { float: left; width: 40%; }
#content { float: right; width: 60%; }
img { margin: 10px; }

/* Media query 1: Disable some features when the page is less than or equal to 480px */

@media all and (max-width: 480px) {

  /* Don&quot;t float, make the page linear, and center images */

  #navigation, #content { float: none; width: 100%; }
  img { margin: 10px auto; display: block; }

}

/* Media query 2: Disable some things when the page is less than or equal to 240px */

@media all and (max-width: 240px) {

  /* Remove purely decorative images */
  img.decorative { display: none; }

}</code></pre>

<p>In this example, we have a basic two-column layout with a navigation column and a content column, and images have a 10px margin. When the browser's viewport is less than or equal to 480px, we stop it being two-column and instead collapse it so that the content and navigation sections follow each other in a single column. We also center images rather than allowing text to flow around them. Then, at viewport widths less than or equal to 240px, we stop displaying all images marked with a class of "decorative".</p>

<p>Browser support for media queries is getting better but is not yet universal. On the desktop, Opera 7+, Safari 3+, Firefox 3.5+ and Internet Explorer 9+ support them. On mobile devices, Opera and WebKit-based browsers do, though most others do not. One way to tackle this is to use a combination of media types and media queries, with one stylesheet for screen users, small screen rules inside that stylesheet that override the ones in the broad stylesheet, and then a separate
handheld stylesheet for less advanced browsers:</p>

<pre><code>&lt;style type="text/css" media="screen,projection"&gt;
/* rules for desktop and other devices with lots of space */
@media only all and (max-width: 480px) {
/* override rules for smaller-screened devices */
}
&lt;/style&gt;

&lt;style type="text/css" media="handheld"&gt;
/* rules for mobile devices that don't support media queries */
&lt;/style&gt;</code></pre>

<p>With this approach, desktop users will get the full experience, more advanced mobile browsers will parse the media queries and resize content according to device sizing, and less advanced mobile browsers that do not understand media queries (Pocket IE, Netfront, OpenWave, and early versions of Opera Mini) can receive a stripped-down design.</p>

<h2 id="debugging">Debugging Websites for Opera Mini</h2>

<p>In this section we will look at the features available for debugging on Opera Mini.</p>

<h3 id="tools">Tools</h3>

<p>There are a number of useful tools available for debugging sites running on Opera Mini.</p>

<h4>Resizable Emulator</h4>

<p>Opera Mini wraps a website's text and shrinks images to fit each device's screen. Of course, this means the website's look will depend on the device's screen size, which calls for authors to test their sites with more than one device, or better, a
resizable emulator.</p>

<p class="note">A good choice for trying websites with Opera Mini is the <a href="http://microemu.org/">MicroEmulator</a>. Inside the downloadable package, there is a "devices" subdirectory containing a resizable skin. To use it, start the emulator, select options &gt; select device &gt; add, and open the file <code>microemu-device-resizable.jar</code> before loading the Opera Mini MIDlet (the easiest way to get this is from the <a href="http://m.opera.com/">Opera Mini mobile page</a> &mdash; go here, and select "Other download options" for a list of different MIDlets). If you get stuck, there is a useful guide available: <a href="http://my.opera.com/ariesptn/blog/2008/11/17/using-microemulator-to-run-opera-mini">Using Microemulator to Run Opera Mini</a>.</p>

<p>It is also recommended to test the website with different font sizes (which can be changed in Opera Mini's settings page). Be aware that font size on physical devices may differ from the emulator, since the actual font size depends on the underlying platform.</p>

<h4>Opera Dragonfly</h4>

<p>Since the Opera Mini servers use the same rendering engine as Opera Desktop, a lot of what is going on can be inspected simply by opening a website in Opera Desktop and starting the Opera Dragonfly developer tool (Tools &gt; Advanced &gt; Developer Tools).</p>

<h3 id="page-source">View page source</h3>

<p>It is possible to get a dump of the current page source by entering <code>server:source</code> into Opera Mini's address bar. This shows the current DOM tree from the Opera Mini server. Since reading the source from a cell phone display or even an enlarged microemulator isn't very pleasant, there is an even better way of obtaining a page's source code &mdash; posting it to a webserver by entering
<code>server:source?post=http://your.server.com/script</code> into Opera Mini's address bar, where the <code>script</code> file that is passed the post data will handle the request, e.g. by storing the source in a database, or saving it to a text file. The posted data includes the fields <code>url</code>, <code>host</code> and <code>html</code>.</p>

<h3 id="common-problems">Solving common problems</h3>

<p>One of the more common layout issues that occurs on Mini is when we want certain content not to be wrapped, for example horizontal menu bars. This is quite easy to solve: Opera Mini won't wrap lines between floated items as long as they fit in their container's width. Non-breaking spaces are honored as well in case normal text isn't wrapped.</p>

<p>Another common issue is that many websites depend on a minimum window width to look good. If a site layout looks too narrow in Opera Mini, the problem usually also affects desktop browsers with a small window width. Giving the body a minimum width (<code>min-width</code>) is thus often the solution for both Opera Mini and desktop browsers running on lower resolution displays.</p>
