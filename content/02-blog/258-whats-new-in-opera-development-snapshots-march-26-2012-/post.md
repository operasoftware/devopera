Title: What's new in Opera Development snapshots: March 26, 2012 
----
Date: 2012-03-26 12:00:00
----
Author: 
----
Text:

Pssst! Yes, you. You like CSS? Interested in some HTML5? Want some hot ECMAScript? Then, my friend, you want to look at this latest Opera desktop snapshot in which our core rendering engine, Presto,  <a href="http://my.opera.com/desktopteam/blog/2012/03/26/html5-css-64bit">gets a huge upgrade</a>.

<h2 id="html5">HTML5</h2>

<ul>
<li><p>This build introduces initial support for <a href="http://dev.w3.org/html5/spec/dnd.html">HTML5 Drag and Drop</a>. With DnD, Web pages can natively drag elements, selections and microdata from one page onto another, or drag files from the operating system and drop them onto a Web page. Have a play with this <a href="http://people.opera.com/miket/2012/3/dnddemo.html">simple demo</a>. <a href="http://people.opera.com/miket/2012/3/">Another demo</a> presents a list of fruit that you can drag around&#x2014;have a look at the code and see how you can break this in iteresting ways, and try to figure out why the words and rows are draggable, but the fruit images aren&#39;t. </p>

<p>Currently, we&#x2019;ve got some bugs and limitations with this initial HTML5 Drag and Drop support, such as issues with dragging to and from external applications. Please give us your feedback and report any DnD-specific issues <a href="http://my.opera.com/community/forums/topic.dml?id=1340612">here</a>.</p></li>
<li><p>Previously, Opera did not expose how much of a video was preloaded in the native controls that are associated with a video element. This has now been added. Here is <a href="http://people.opera.com/miket/2012/3/buffer.html">a demonstration of that effect</a>.</p></li>
<li><p><code>&lt;video&gt;</code> will now use a new kind of cache for streaming resources and limit the bandwidth to (approximately) the bandwidth of the video while playing. This is reflected in the buffered attribute.</p></li>
<li><p>Cache invalidation for <code>&lt;video&gt;</code> was improved, so live streams should be able to recover from a network error. Previously no new data could be read after a network error.</p></li>
<li><p>HTML5 defines the <a href="http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-size">default value of the <code>size</code> attribute</a> of an <code>&lt;input&gt;</code> element as 20. Up until this snapshot, it&#x2019;s been 0. Have a look for yourself at arguably one of the <a href="http://jsbin.com/ecenop/3/">shiniest HTML5 demos</a> of the year.</p></li>
<li><p>The submit event would fire before HTML5 form validation, allowing invalid or incomplete data to be submitted. For example, clicking Submit with an empty form should not fire <code>alert()</code> <a href="http://wapinet.ru/onsubmit.html">here</a>.</p></li>
</ul>


<h2 id="css">CSS</h2>

<ul>
<li><p>We&#x2019;ve implemented <a href="http://dev.w3.org/csswg/css3-animations/">CSS Animations</a>, with all the properties using the <code>-o-</code> prefix. Here is <a href="http://jsfiddle.net/nimbu/NywDk/">an example of an animation that works on all supported browsers</a>. </p>
<p>Please do us a favor and update your sites and tools to add the <code>-o-</code> prefix for CSS animations.</p>
</li>
<li><p>Also part of this task was to update our implementation of <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions</a>. Now you can do transitions on background-position, border-bottom-color, border-color, border-left-color, border-right-color, border-top-color, and text-shadow. We also now support step-start, step-end and steps timing functions for <code>-o-transition-timing-function</code>. Here is a <a href="http://jsfiddle.net/nimbu/HLm3t/">demo of text-shadow transitioning</a>, and a <a href="http://people.opera.com/miket/2012/3/celestial-fingers.html">demo of background-position transitioning</a>.</p></li>
</ul>


<h2>EcmaScript</h2>

<ul>
<li><p>We now correctly support the TypedArray contructor of the form <code>TypedArray(TypedArray array)</code>, e.g., <code>var x = new Uint32Array(uint8Array);</code>.</p></li>
<li><p><a href="http://es5.github.com/#x15.5.4.14">ES5.1 defines</a> special handling for <code>String.prototype.split(undefined)</code>. Previously we aligned with V8, but as the latest JS engines in Firefox and IE are now compliant we&#x2019;ve fixed this to match the spec.</p></li>
</ul>

<h2 id="dom">DOM</h2>

<ul>
<li><p>The HTML5 structured cloning algorithm has added support for re-assigning ownership of certain objects via <a href="http://dev.w3.org/html5/spec/common-dom-interfaces.html#transferable-objects"><code>Transferable</code></a>s. We&#x2019;ve updated our implementation to support this now.</p></li>
<li><p>Appending a <code>&lt;foreignObject&gt;</code> element in SVG or modifying its contents via script never resulted in a reflow, therefore the changes never got painted. Fixed now!</p></li>
<li><p>Not too long ago, support for <code>window.event</code>, <code>attachEvent</code>, and <code>detachEvent</code> was necessary for the &#x201C;Best seen in Internet Explorer&#x201D; class of sites to work. Thankfully, these days are mostly behind us. As such, we&#x2019;re hiding our support for these IE-isms. What this means is code like <code>if (window.event)</code> will return false, but existing code will work if it relies on it.</p></li>
<li><p>Another IE-ism that we&#x2019;re removing is <code>readystatechange</code> events on the <code>&lt;script&gt;</code> element. This was causing a handful of sites to break as we supported both this and <code>script.onload</code>.</p></li>
<li><p>Previously, in Opera, if the properties of an element changed such that a pseudo-element was no longer generated (Psuedo-elements are generated if a pseudo-element selector matches the element), the pseudo-elements still persisted. <a href="http://people.opera.com/miket/2012/3/pseudo.html">This is now fixed</a>.</p></li>
</ul>


<h2 id="svg">SVG</h2>

<ul>
<li>Direct children of the element with <code>enable-background=new</code> were rendered into its BackgroundImage buffer twice. They <a href="http://people.opera.com/miket/2012/3/enablebackground.svg">no longer do so</a>.</li>
</ul>

<h2 id="64bitOOP">64-bit and out-of-process plug-ins</h2>
<ul>
<li>In December 2011 and February this year, we&#39;ve released 64-bit Labs builds with out-of-process plug-ins. Running plug-ins in a separate process gives Opera a level of protection from plug-in instability, which is one of the most common sources of browser crashes and freezes. This architectural change has now graduated from Labs, and has landed in the desktop Next channel.</li>
</ul>
<h2 id="potpourri">Encoding, Unicode, Network, and Graphics (aka Changelog Potpourri)</h2>

<ul>
<li><p>Surrogate pairs no longer work in CSS escape sequences. To understand this, let&#x2019;s look at 𝌆, a supplementary, non-<a href="https://en.wikipedia.org/wiki/Basic_Multilingual_Plane#Basic_Multilingual_Plane">BMP</a> character. In UTF-16 encoding it consists of two <a href="https://en.wikipedia.org/wiki/Surrogate_pair">surrogate halves</a> U+D834 and U+DF06. In order to work with this in JS, you&#x2019;d have to write <code>\ud834\udf06</code>. CSS, on the other hand, doesn&#x2019;t care about surrogate pairs so <code>content: &#39;\d834\df06&#39;</code> should show invalid characters, not the Unicode symbol. In <a href="http://jsbin.com/ewujoz/">this example</a>, you shouldn&#x2019;t see 𝌆 after &#x201C;WAT&#x201D;, but some invalid characters.</p>

<p>Special thanks to <a href="http://twitter.com/#!/mathias">Mathias</a> for reporting this to us and <a href="http://mathiasbynens.be/notes/css-escapes">writing it up in detail</a>.</p></li>
<li><p>Did you know that there was <code>x-mac-ukrainian</code>? Me neither. The <a href="http://dvcs.w3.org/hg/encoding/raw-file/tip/Overview.html#x-mac-cyrillic"><code>x-mac-cyrillic</code></a> mapping is defined in the encoding specification. In the past when Unicode was not yet deployed everywhere, each OS implemented their own version of character sets. Apple defined a Ukrainian set of characters. On the Unicode site, we can find <a href="http://www.unicode.org/Public/MAPPINGS/VENDORS/APPLE/UKRAINE.TXT">its relation to the cyrillic one</a>.</p></li>
<li><p>Opera has implemented for a while different open formats: video and audio (OGG, WEBM), image (webp). This release adds the association between the Content-Type (HTTP) with filename extension (file system) for these formats. When you want to add some of your own, you can go to Preferences → Advanced → Download.</p>

<ul>
<li>video/ogg  = .ogv, .ogm</li>
<li>audio/ogg  = .oga, ogg</li>
<li>video/webm = .webm</li>
<li>image/webp = .webp</li>
</ul>
</li>
<li><p>In the first iterations of <a href="http://www.w3.org/Submission/web-forms2/">Web Forms 2</a>, a lot of ideas of <a href="http://www.w3.org/MarkUp/Forms/">XForms</a> were applied. Since then Web Forms 2 have been added (and modified) to <a href="http://dev.w3.org/html5/spec/forms.html#forms">HTML5</a>. The initial Web Forms 2 specification had <code>application/x-www-form+xml</code> as a <a href="http://dev.w3.org/html5/spec/attributes-common-to-form-controls.html#attr-fs-formenctype">form encoding type</a> to enable XForms parity. It is not part of the HTML5 specification anymore, so we dropped support for it.</p></li>
<li><p>It is better to encode your Web pages in UTF-8, and serve them as such. In HTTP, the HTTP header has priority, then the meta name contained in HTML. Some Web pages have specific encoding. It happens often on the Web that the Web page encoding is different from the one specified in the file and/or the one specified in HTTP headers. It creates issues for users who receive unreadable characters on their screens. So the browsers have to fix the encoding on the fly. We had bug reports about Web sites sending <a href="https://en.wikipedia.org/wiki/Byte_Order_Mark">BOM</a> different from the HTTP header. We decided to make the BOM authoritative like webkit and IE, because there are more chances for it to be exact than the HTTP headers.</p></li>
<li><p>Opera used to treat &#x201C;unexpected out of order&#x201D; code in a gif file as a hard error and abort decoding, while other browsers didn&#x2019;t. The implementation has been changed so this is consistent. Here is <a href="http://people.opera.com/miket/2012/3/qq.gif">a smiley blowing its nose</a> - in older Opera versions it would not reach the nose-blowing state, but now it does.</p></li>
</ul>
<p>So where do you get all these goodies? You could just hang out and wait a little while until your Opera.Next updates itself (Browser Identification will show Presto/2.10.282 in opera:about if you&#39;ve got the latest). </p>

<p>But I bet you want to grab it while it&#39;s hot, so you can grab it from from the <a href="http://my.opera.com/desktopteam/blog/2012/03/26/html5-css-64bit">Desktop team&#39;s blog post</a>.</p>
