---
title: 'Desktop Build With New Extension APIs: Screenshot, Resource Loader and URL Filter'
authors:
- chris-mills
intro: 'We’ve been working hard recently to improve the functionality available inside Opera extensions, and today we are proud to reveal some of the fruits of our labours. In this article we’ll share with you some new experimental desktop builds that feature three new extension APIs: the screenshot API, the resource  loader API, and several updates to the URL filter API.'
license: cc-by-3.0
layout: article
---
<p>We've been working hard recently to improve the functionality available inside Opera extensions, and today we are proud to reveal some of the fruits of our labours. In this article we'll share with you some new experimental desktop builds that feature three new extension APIs:</p>


<ul>
<li>A screenshot API for capturing screenshots of pages within tabs</li>
<li>A resource loader API for easier loading of local resources by an extension</li>
<li>Some updates to the URL filter API (for adding and removing URLs to and from Opera's list of blocked URLs)</li>
</ul>

<p>Below you'll find details of where to download the builds, what the new features do, and available documentation. Please give us as much feedback as you can on all this new experimental functionality before it becomes finalised.</p>

<p class="note">Note that these features are now available in Opera for desktop version 12.10 and above.</p>

<h2>Download the builds</h2>

<p>We have builds available for:</p>

<ul>
<li><a href="http://www.opera.com/download/get.pl?id=34724&sub=true&nothanks=yes&location=360">Windows i386</a> | <a href="http://www.opera.com/download/get.pl?id=34725&sub=true&nothanks=yes&location=360">Windows x64</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34726&sub=true&nothanks=yes&location=360">Mac i386/x64</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34727&sub=true&nothanks=yes&location=360">Linux tar.xz i386</a> | <a href="http://www.opera.com/download/get.pl?id=34728&sub=true&nothanks=yes&location=360">Linux tar.xz x64</a> | <a href="http://www.opera.com/download/get.pl?id=34730&sub=true&nothanks=yes&location=360">Linux deb i386</a> | <a href="http://www.opera.com/download/get.pl?id=34729&sub=true&nothanks=yes&location=360">Linux deb x64</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34723&sub=true&nothanks=yes&location=360">FreeBSD i386</a> | <a href="http://www.opera.com/download/get.pl?id=34722&sub=true&nothanks=yes&location=360">FreeBSD x64</a></li>
</ul>

<h2 id="screenshot">The screenshot API</h2>

<p>You can use the screenshot API to capture screenshots of pages within tabs in the browser by calling the <code>getScreenshot()</code> method from an extension injected or background script. You might want to take a screenshot of the current page and manipulate it within a <code>&lt;canvas&gt;</code>, or store it somewhere for later use.</p>

<p>Further reading:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/extensions-api-screenshot/">View the screenshot API documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-screenshot-getScreenshot/">View the <code>getScreenshot()</code> method documentation</a></li>
</ul>

<h2 id="resource-loader">The resource loader API</h2>

<p>The resource loader API has been created to get around a problem whereby the extension security model will not allow local files to be accessed by an extension even if they are contained within the same extension package. The resource loader API's <code>getfile()</code> method can be used to grab the contents of a file, and those contents can then be read using the W3C File API. This is useful in so many ways — if you want to pull in different content, images or even script and styles into your extension.</p>

<p>Further reading:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/extensions-api-resourceloader/">View the resource loader API documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-resourceloader-getFile/">View the <code>getFile()</code> method documentation</a></li>
</ul>

<h2 id="url-filter">The URL filter API</h2>

<p>Finally, the URL filter API allows you to add and remove URLs to and from the Opera native content blocker's list of blocked URLs. Such changes added through the API are temporary, and only remain in effect for as long as the browser session is active and the extension is enabled.</p>

<p>This API was originally available in Opera 11.10, but since then we've added some new features that are available to experiment with in this set of builds:</p>

<ul>
<li>White list support — intended as a list of exceptions to the blocked URL (black) list. The basic syntax looks like this — <code>opera.extension.urlfilter.allow.add(pattern, options)</code></li>
<li>Including domains: <code>block.add(pattern, {includeDomains: ["google.com", "google.co.uk", "google.com.au"])</code></li>
<li>Excluding domains: <code>block.add(pattern, {excludeDomains: ["google.com", "google.co.uk", "google.com.au"])</code></li>
<li>Ability to fire events when a URL is blocked (black list) or allowed (white list). At the moment we don't intend to allow firing of events when there are no matches (when the URL is allowed because it is not in any list), as this can potentially impact performance</li>
<li>Third-party blocking (for example, blocking facebook.com only when it is called from another site) of URLs: <code>block.add(pattern, {thirdParty: true})</code></li>
<li>Filtering by resource types (scripts, images, stylesheets, etc.): <code>block.add(pattern, {resources: urlfilter.RESOURCE_SCRIPT | urlfilter.RESOURCE_STYLESHEET)</code></li>
<li>New filter syntax:
<ul>
<li>There is now a separator wildcard character available, <code>^</code>. For example, <code>example.com^foo</code> will match <code>example.com/foo</code> and  <code>example.com?foo</code></li>
<li>You also have hostname matching syntax — <code>||</code>. For example, <code>||example.com</code> will match any URL with <code>example.com</code> as the filter</li>
</ul>
</li>
<li>New syntax will also be enabled in the urlfilter.ini file</li>

</ul>

<p>Further reading:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">Read the tutorial: <q>Site blocking with Opera’s URL Filter API</q></a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-urlfilter/">View the URL filter API documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-urlfilter-allow-add/">View the <code>add()</code> method documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-ruleoptions-excludedomains/">View the <code>excludeDomains</code> property documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-ruleoptions-includedomains/">View the <code>includeDomains</code> property documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-ruleoptions-resources/">View the <code>resources</code> property documentation</a></li>
<li><a href="http://dev.opera.com/articles/view/extensions-api-ruleoptions-thirdparty/">View the <code>thirdParty</code> property documentation</a></li>
</ul>

<p><a href="http://www.flickr.com/photos/comedynose/3720718593/">Cover image by Comedy Nose</a></p>
