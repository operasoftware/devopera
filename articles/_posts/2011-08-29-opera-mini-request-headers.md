---
title: Opera Mini Request Headers
authors:
- odevrel
intro: 'Opera Mini uses a number of custom, unregistered HTTP headers. Most of these are specific to Mini, and are sent in addition to the regular HTTP headers sent by Opera on any platform. “But what are they, and what can I do with them?” I hear you cry… Let’s find out.'
layout: article
---
<h2 id="introduction">Introduction</h2>

<p>Opera Mini uses a number of custom, unregistered HTTP headers. Most of these are specific to Mini, and are sent in addition to the regular HTTP headers sent by Opera on any platform. The purpose of these headers is to give site owners information about the user's handset and its capabilities/features.</p>

<h2>User-Agent</h2>

<p>The User-Agent header contains the browser <abbr title="User Agent">UA</abbr> string information, divided up into tokens. To start with, here is an example of an User-Agent header:</p>

<pre><code>User-Agent: Opera/9.80 (J2ME/MIDP; Opera Mini/6.1.25378/25.692; U; en)
Presto/2.5.25 Version/10.54</code></pre>

This is broken up into tokens, as follows:

<pre><code>User-Agent: Opera/9.80 ($PLATFORM_NAME$; $PRODUCT_NAME$/$CLIENT_VERSION$/
$SERVER_VERSION$;U; $LOCALE$) $PRESTO_VERSION$ $EQUIV_DESKTOP_VERSION$</code></pre>

<p>The tokens are as follows:</p>

<h3>$PLATFORM_NAME$</h3>

<p><code>$PLATFORM_NAME$</code> contains the name of the platform on which the client is running. It can be one of the following:</p>

<ul>
<li>Android</li>
<li>BlackBerry</li>
<li>BREW</li>
<li>J2ME/MIDP</li>
<li>iPhone</li>
<li>iPad</li>
<li>MTK</li>
<li>Series 60</li>
<li>Windows Mobile</li>
</ul>

<h3>$PRODUCT_NAME$</h3>

<p><code>$PRODUCT_NAME$</code> contains the name of the product, which is always <code>Opera Mini</code>.</p>

<h3>$CLIENT_VERSION$</h3>

<p><code>$CLIENT_VERSION$</code> contains the version number of the Opera Mini client being used.</p>

<h3>$SERVER_VERSION$</h3>

<p><code>$SERVER_VERSION$</code> contains the version number of the transcoder being used on the Opera Mini server.</p>

<h3>$LOCALE$</h3>

<p><code>$LOCALE$</code> contains the language code for the locale of the current Opera Mini client, for example <code>en</code> for English.</p>

<h3>$PRESTO_VERSION$</h3>

<p><code>$PRESTO_VERSION$</code> contains the version number of the Presto rendering engine being used by the transcoder on the Opera Mini server.</p>

<h3>$EQUIV_DESKTOP_VERSION$</h3>

<p><code>$EQUIV_DESKTOP_VERSION$</code> contains an indication of the equivalent desktop version. This was added to provide a similar UA syntax to desktop, rather than indicate capabilities, so it is not to be used for definite capability detection .</p>

<h2 id="x-operamini-features">X-OperaMini-Features</h2>

<p>This header contains a comma-separated list of features supported by the phone. This can be used for capability detection before serving content.</p>

<h3>Format</h3>

<pre>X-OperaMini-Features: <feature> *[ , <feature> ]</pre>

<h3>Example</h3>

<pre>X-OperaMini-Features: advanced, camera, folding, secure</pre>

<h3>Possible values</h3>

<ul>

<li><code>advanced</code> (Opera Mini 4 and later): The client is the MIDP 2 version of Mini (also referred to as the high memory version). See the <a href="http://www.operamini.com/help/faq/" alt="The Opera Mini FAQ page">Opera Mini FAQ page</a> for a description of the differences between the MIDP1 and MIDP2 versions of Opera Mini.</li>

<li><code>basic</code>: the client is the MIDP 1 version of Mini (also referred to as the low memory version).</li>

<li><code>camera</code> (Opera Mini 3 and below): Camera support detected. The user will be able to upload a photo when Mini encounters a file input element (<code>&lt;input type="file"&gt;<code>).</li>

<li><code>download</code> (Opera Mini 4 and later): The device supports native downloading.</li>

<li><code>file_system</code> (Opera Mini 4 and later): File system support detected. The user will be able to save files on the device that are not handled natively by Opera Mini, and upload files when Mini encounters a file input element (<code>&lt;input type="file"&gt;<code>).</li>

<li><code>folding</code>: Content folding is supported and enabled.</li>

<li><code>routing</code>: Means that the client is able to send traffic to different transcoders based on client side rules. This is used in different operator integrations like zero rated traffic to specific domains.</li>

<li><code>secure</code>: The connection between Mini's client and proxy server is encrypted. All versions of Mini support SSL encryption between proxy server and web server, but only 3.0 and later supports client to proxy encryption.</li>

<li><code>skindownload</code> (Opera Mini 4 only): The Opera Mini version can download new skins

<li><code>touch</code>: The device is a touchscreen device.</li>

<li><code>viewport</code>: The Opera Mini version supports viewport, which allows web developers to specify optimized rendering information for mobile browsers. For more information on this feature, read <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a>by Andreas Bovens.</li>

</ul>

<h2 id="x-operamini-phone-ua">X-OperaMini-Phone-UA</h2>

<p>This header contains the user-agent string of the client that downloaded the <code>.jad</code> file (if available - otherwise it contains the user-agent reported to the client by the device.) If this information is not known to us at all, the value is often reported as <code>?</code>.</p>

<p class="note">Note that this header is only present if we have some reasonable evidence that our data is true.</p>


<h3>Format</h3>

<pre>X-OperaMini-Phone-UA: &lt;user-agent&gt;</pre>

<h3>Example</h3>

<pre>X-OperaMini-Phone-UA: SonyEricssonK750i/R1AA Browser/
SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1</pre>

<h2 id="x-operamini-phone">X-OperaMini-Phone</h2>

<p>This contains the manufacturer and model name/number of the device, provided the device makes this information available to Opera Mini. If this information is not known to us, the value is often reported as <code>?</code>.</p>

<p class="note">Note that this header is only present if we have some reasonable evidence that our data is true.</p>

<h3>Format</h3>

<pre>X-OperaMini-Phone: <manufacturer> # <model></pre>

<h3>Example</h3>

<pre>X-OperaMini-Phone: SonyEricsson # K750i</pre>

<h2 id="x-forwarded-for">X-Forwarded-For</h2>

<p>This contains a comma-separated list of the proxy servers the request has passed on its way from the device to the Mini proxy. The first item in the list that is not an internal IP will always be the IP address that connects to the Mini proxy, hence it is the most reliable source of information about the origin of the request, and is suitable for geolocation etc.</p>

<h3>Format</h3>

<pre>X-Forwarded-For: &lt;IP address&gt; *[ , &lt;IP address&gt; ]</pre>

<h3>Example</h3>

<pre>X-Forwarded-For: 127.0.0.1, 192.168.0.100, 195.189.143.147, 130.236.236.80</pre>

<p>In this case, 195.189.143.147 is the IP address that connects to the Mini proxy, as it is the first item in the list which is not an internal IP address.</p>

<h2 id="accept-language">Accept-Language</h2>

<p><code>Accept-Language</code> specifies what language(s) the browser would prefer the response to be written in. You can specify multiple languages in a comma-delimited list using standard language tags, and each language can be given a quality value that indicates the user's ability in those languages (this value defaults to 1 if not specified, which is the highest - the values range from 0 to 1.) For example, the actual example given at the bottom of this section means "I'd prefer to be sent old (bokmal) or new Norwegian, but I am also pretty good at English...I'll also try French if you've not got the other two languages available, but I'm not very good at that." If <code>Accept-Language</code> is not specified, then the server should assume that all languages are acceptable to the user.</p>

<h3>Format</h3>

<pre>Accept-Language: &lt;language tag&gt; [;q=&lt;quality value&gt;], ...</pre>

<h3>Example</h3>

<pre>Accept-Language: no-bok, no-nyn, en;q=0.8, fr;q=0.4</pre>
