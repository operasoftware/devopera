---
title: Opera 11.60 Beta is out!
authors:
- divya-manian
tags:
- opera-11
- beta
- desktop
- browser
- odin
layout: article
---
Our Core developers have been hard at work to bring you the next version of Opera for Desktop. First, go <a href="http://www.opera.com/browser/beta/" target="_blank">download Opera 11.60 Beta</a>. Here are some of the interesting features you can enjoy:

<ul>
<li>
<h3>Custom Protocol and Content Handlers</h3>
<p>We introduce support for HTML5 custom protocol and content handlers with this beta. What this means is you can now tell Opera to open the compose page from <a href="http://www.gmail.com" target="_blank">Gmail</a> or <a href="https://fastmail.fm/" target="_blank">FastMail</a> instead of your default mail application that comes with your operating system. Of course, you are by no means restricted to just that; Mike Taylor writes in depth on <a href="http://my.opera.com/ODIN/blog/2011/11/07/custom-protocol-and-content-handlers">what is possible with HTML5 protocol and content handlers</a>.</p>
</li>
<li>
<h3>DOM Event Constructors</h3>
<p>We also introduce support for DOM Event constructors that are part of the <a href="http://www.w3.org/TR/domcore/" target="_blank">DOM Core specification</a>. This brings you a cleaner interface to create synthetic and custom DOM events. Tiffany Brown has more details for you on <a href="http://my.opera.com/ODIN/blog/2011/11/08/dom-event-constructors-in-opera-11-60">how to use DOM Event constructors</a>.</p>
</li>
<li>
<h3>Onerror handlers</h3>
<p>You can use <code>script.onerror</code> and <a href="https://developer.mozilla.org/en/DOM/window.onerror"><code>window.onerror</code></a> to program what actions should occur when either a script fails to load or when an error is thrown.</p>
</li>
<li>
<h3>Speculative parsing</h3>
<p>Some pages can seem to take a while to load because everything is put on hold until any scripts have executed. With speculative parsing, the browser can load external resources such as CSS files and images while JavaScript is being executed. Rendering is still done by the main parser but with downloading being done separately, pages with many resources get a noticeable speed boost. In Opera 11.60 beta, this is enabled only when Opera Turbo is used. Please note that this implementation may change in future releases.</p>
</li>
<li>
<h3>Image Resampling in CSS</h3>
<p>Support for CSS4 <code>image-rendering</code> is now available. This property hints to the browser what scaling algorithm to use for background images, canvas elements, or border images. This can speed up some canvas games if a faster scaling algorithm were used. <a href="http://jsfiddle.net/zda24/">Here is an example of image scaling in action</a>.</p>
</li>
</ul>
<p>Opera 11.60 also features support for these features which we&#39;ve mentioned in previous posts:</p>
<ul>
<li>
<h3>No more &quot;XML parsing failed&quot; errors</h3>
<p>There are lots of websites peppering the internet that mysteriously only seem to serve broken XML to Opera (due to broken server-side detection on various servers). We have now stopped throwing draconian XML parsing failed errors, but attempt to reparse the document as HTML automatically if the document is of MIME type <code>application/xhtml+xml</code>. Andreas Bovens writes more on this <a href="http://my.opera.com/ODIN/blog/2011/09/28/no-more-xml-parsing-failed-errors">automatic parsing of incorrect XHML document as HTML</a>. If you want to turn this off, you can do so by setting <a href="opera:config#UserPrefs|AutomaticallyreparseXHTMLwithparsingerrorsasHTML">opera:config#UserPrefs|AutomaticallyreparseXHTMLwithparsingerrorsasHTML</a> in the Preferences Editor (opera:config).</p>
</li>
<li>
<h3>Full ES5.1 Support</h3>
<p>Opera 11.60 has full support for the ECMAScript 5.1 specification in addition to a native implementation of ECMAScript typed arrays. Mike Taylor has the lowdown on the <a href="http://my.opera.com/ODIN/blog/2011/09/13/ecmascript-5-for-opera">details of ECMAScript 5.1 support</a>.</p>
</li>
<h3>HTML5 Parser</h3>
<p>Opera 11.60 ships with Ragnarök, our HTML5 parser, which means you can look forward to a consistent rendering of the DOM across all browsers that implement an HTML5 parser. Bruce Lawson and Zi Bin Cheah discuss this and how it could affect you in the recent <a href="http://my.opera.com/ODIN/blog/2011/11/04/opera-tech-break-html5-with-bruce-and-zi-bin">Opera Tech Break video</a>. </p>

<li>
<h3>Microdata</h3>
<p>Microdata DOM APIs are fully supported in Opera 11.60. With this, you can query microdata specified using microdata attributes like <code>itemprop</code>, <code>itemscope</code> via a JavaScript Interface.</p>
</li>
<li>
<h3>Better support for HTML5 Video</h3>
<p>HTML5 Video attributes <code>muted</code>, <code>preload</code> and properties <code>buffered</code> and <code>seekable</code> are now supported. </p>
</li>
<li>
<h3>Radial Gradients</h3>
<p>With radial gradients, you can now enjoy all sorts of gradient deliciousness on your browser. Chris Mills has written more in depth on <a href="http://dev.opera.com/articles/view/css3-radial-gradients/">how to use CSS3 Radial Gradients</a> over at Dev.Opera.</p>
</li>
<li>
<h3>Support for <code>rem</code> unit &amp; <code>box-shadow</code> fix</h3>
<p>Opera 11.60 supports the <code>rem</code> unit and also render inset box shadows on input text elements (<a href="http://jsfiddle.net/Ap7sM/">here is an example</a>).</p>
</li>
</ul>
