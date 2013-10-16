Title: Server-side capability detection for mobile devices part 1
----
Date: 2007-12-06 15:18:12
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

<h2>Introduction</h2>

<p>There are several ways to test the capabilities of a device, and some are more elegant than others. As a developer you probably do this more often than you think. In CSS you often need to resort to using ugly underscore or comment hacks that get picked-up by certain browsers but not others, IE being the major guilty party. In JavaScript you test for the ability to run some functions, and if it passes or fails you run the corresponding browser specific code. This is common with Ajax and DOM functions. You are customizing your customer&#39;s experience based on their browser capabilities. We can take this to an extreme with mobile devices and serve up the best experience possible. I will admit, it is much more difficult to do on the server-side than on the client-side (Chris Mills previously covered <a href="http://dev.opera.com/articles/view/how-to-serve-the-right-content-to-mobile/" alt="How to serve up the right content to mobile devices"><cite>How to serve the right content to mobile browsers</cite></a>), but the experience is more rewarding than doing nothing at all. It is possible to take this one-level up the stack and detect the browser and its capabilities before the page is served - this means that we can significantly reduce the data downloaded to the client, as the choice of what to display is already made on the server.</p> 

<p>This article will walk you through some of the tools at your disposal and information gleaned from HTTP packets to help make choices on the server-side when creating specific HTML for each device&#39;s browser. There are two major ways to accomplish browser specific features in HTML. The first is with HTTP headers and the second is with the Browser user-agent. Later on I will also discuss browser functionality databases like WURFL, which allow you to detect the browser type and tailor the HTML on the fly.</p>

<p>Bear in mind that you should wield this power carefully, and use it for good, ie progressively enhancing the user experience and serving up appropriate content to users based on factors like languages spoken, and not evil, ie shutting certain devices out or offering them a painful basic default site if you are not sure what capabilities they can support. The principle of one web should be borne in mind as much as possible, even considering the sometimes wildly differing technology support on Mobile devices.</p>

<h2>HTTP headers</h2>

<p>Much of the same techniques used on requests from regular browsers can be applied to mobile browsers as well. This is because they are both using the HTTP protocol and sending similar requests. The server just needs to break down those requests and send back customized HTML based on what they asked for (both explicitly and implicitly.) Take the following as an example:</p> 

<pre><code>GET /mobile/ HTTP/1.1
Host: http://example.org/ 
Accept: */* 
Accept-Language: en-us 
Connection: Keep-Alive 
Accept-Encoding: gzip, deflate</code></pre>

<p>This example HTTP request packet has a few basic headers, which should be pretty self-explanatory. The interesting stuff happens when we get more complex data in these packets. At the point where the server accepts this data, it can be programmed to do different things with it. This is called mime-type content negotiation, when we serve different content based on the mime-type. Let&#39;s look at a slightly more interesting example:</p> 

<pre><code>GET /mobile/ HTTP/1.1 
Host: http://example.org/ 
Accept: */* 
Accept-Language: es, en-us;q=0.8, en;q=0.7 
Connection: Keep-Alive 
Accept-Encoding: gzip, deflate</code></pre>

<p><code>Accept-Language</code> is a comma-separated list of values in the form <code>language;q=0.x</code>. This basically refers to the different languages the customer understands, and the competency with which they can understand them, and therefore what languages they would like the page served in. When no q value is present, the value defaults to 1, the highest. So, in this example the customer who sent this packet would ideally like the page to be served back in Spanish (<code>es</code>,) or if that is not available, US English at 0.8 competency, and then the slightly more generic English at 0.7. The default English is set slightly lower than US English just in-case there were multiple types of English available. This is one way that websites customize the experience based on what the customer is asking for. The same is possible for file types preferences. It is also possible to send something like this:</p>

<pre><code>Accept: image/png, image/jpeg, image/gif;q=0.2, text/css, */*;q=0.1</code></pre>

<p>In this case the browser is saying it understands PNG and JPG images just fine and GIF images at 0.2 competency - this is done to give PNGs preference over GIF images. It is not often implemented, but we can configure a server to have multiple representations of the same image and serve the most relevant at request time. I could now do the following in my HTML:</p> 

<pre><code>&lt;img src=&quot;/images/logo&quot; /&gt;</code></pre>

<p>In this case the logo image in the HTML does not have a specific extension - instead, the server will look in the image directory and find all the files that are <code>logo.xxx</code>. It will serve <code>logo.png</code> over <code>logo.gif</code> to the customer through mime-type content negotiation.</p>

<p>Using these techniques, we can also serve the proper HTML file, or not serve one if that is the case! Take the following accept header:</p> 

<pre><code>Accept: text/xml, application/xml, application/xhtml+xml, text/html;q=0.9, text/plain;q=0.8</code></pre>

<p>In this case we can safely send them back the XML representation of the page, possibly with an associated XSLT file, so a transformation can occur on the client-side. If the <code>application/xml</code> portion is not there and only <code>text/html</code> is found, the server will send basic HTML back. This could also be used to check if a mobile device can actually render HTML or if it is an older model and is only WAP capable:</p>

<pre><code>Accept: image/vnd.wap.wbmp,text/vnd.wap.wml,*/*;q=0.3</code></pre>

<p>In this instance, the customer is asking for WAP WML pages over other formats. The <code>*/*</code> means all other mime-types, but that only has a quality of 0.3, therefore it is not very likely to understand your HTML pages! 
This sort of mime-type content negotiation is happening all the time. This is not specific to mobile devices, but can be used heavily to generate the best content for any device, therefore enriching the user experience.</p> 

<h2>Mobile specific headers</h2>

<p>There are a few headers specific to mobile devices. Blackberry, Nokia, Motorola and others all send an additional header in the HTTP packet - a profile header. This profile is a URL pointing to an RDF file, which includes details like screen dimensions, screen resolution, device capabilities, etc. The RDF is in a standard format, so no matter which phone and browser combinations are visiting your site, the RDF will be in a similar structure. The server can then fetch that RDF file, parse it, and return specialized content back to that device. A smart server will then cache that RDF and those capabilities, slowly building a library of all known devices that have visited the site, and therefore speeding up the service for the next visit. This is an excellent way to work with unknowns, because new phones and devices are appearing all the time. If you needed to keep an enumerated list of all possible phones it would be nearly impossible, but if a new phone &quot;announces&quot; itself and its capabilities, you can adjust accordingly without prior knowledge.</p> 

<p>BlackBerry have published a lengthy PDF called the <a href="http://programa.nii.com/en/en/technologies/blackberry/development-guide-browser" alt="The blackberry wireless handheld browser content developer guide">&quot;BlackBerry Wireless Handheld Browser Content Developer Guide,&quot;</a> which goes into great detail about what can be detected on a BlackBerry, down to the phone number itself. There is also an article on this site called <a href="http://dev.opera.com/articles/view/opera-mini-request-headers/" alt="Opera Mini request headers">Opera Mini request headers</a>, which details the headers specific to Opera Mini.</p>

<p>The downside is that not all phones &quot;announce&quot; themselves, and new phones might tell you about capabilities that you were not prepared for. For instance, if you know most phones fall into one of 5 major categories of screen-widths (160x128, 220x176, 320x240, 240x320, 480x320), you might already have logos and banner images created for the perfect dimensions. Then one day, a new device comes along and has a screen-width 2.345 times what you expected. You can easily detect this, but can&#39;t always react to it. There are ways to &quot;design&quot; around this, or to flag this new device and alert someone so images can be created as needed. The easiest way to design around this is the same way we already do for desktop machines. You can make a <code>div</code> 100% wide, and the same color as the logo background. The background color of the image will then flow to fit the space.</p>

<p>Another option is to use the CSS <code>overflow-hidden</code> property. You can serve an image larger than you need and hide any portion bigger than the screen.</p>

<p>The more complex option is to have a server-side script automatically scale or crop your image to meet the requested width. This is the most optimal for the user because they are getting a full image designed specifically for their screen dimensions without the overhead of the extra download time and size of an image that is then overflow hidden. To dynamically crop an image requires some back-end image processing software and well-composed images to start with. This could be a whole article in itself, so we won&#39;t go into how exactly this is done, but you can always manipulate any image, greyscale it, crop it, save it as a lower resolution, etc. for the requesting device.</p> 

<p>So what happens when a device does not announce itself through the use of a link to an RDF file? Well, the fallback could be to serve-up the lowest common denominator site that is sure to work for all devices. Before that, there are a few more things that could be done. One that we wanted to avoid is attempting to keep an enumerated list of all known devices and their capabilities, for reasons given earlier. But wait - someone has already done this for you. There is an open source project called <a href="http://wurfl.sourceforge.net/" alt="The WURFL homepage">Wireless Universal Resource File (WURFL.)</a> They keep an XML file up-to-date with known devices and their capabilities. This is similar to the RDF file, except that you download and use it before the device visits your site.</p> 

<h2>The browser user-agent string</h2>

<p>So when a device requests your mobile site, but doesn&#39;t send a profile header with a URL to an RDF file, how do you know what type of device it is, let alone what it can do?</p>

<p>The second method available to us is to use the user-agent string. This is similar to the HTTP Packet. We can extract the data and then use it as a key to look-up further information describing the capabilities of the device. By matching the user-agent string to keys in the XML file, we then extract the capabilities of the device. From that point, we do exactly what we would do if we had an RDF file available. The difference is that we need to constantly keep the WURFL xml file up-to-date for all the new devices.</p>

<p>So what happens when the device doesn&#39;t have a profile header and isn&#39;t in the list in the XML file - what then? There are two trains of thought here. One says that we should serve the most generic file that will work on every known device. The other is that we should not assume the worst, but assume the best - assume that this device is so new and cutting edge it can handle anything sent to it, and send it the richest media available. The logic behind this is that most older devices will have been documented already whereas any undocumented devices are probably very cutting edge. This means that you should send it the most advanced version of your HTML, CSS and JavaScript. If the device is in fact NOT cutting-edge, but a really old un-documented phone, then as long as you have coded your CSS and JavaScript in an unobtrusive way, then the device should just ignore it and render your HTML as boring black text on a white background. I think it is better to err on the side of giving a richer experience as the baseline, rather than high-end devices being sent basic ugly HTML as the default.</p>

<p>Part 2 will follow next week.</p>
  
