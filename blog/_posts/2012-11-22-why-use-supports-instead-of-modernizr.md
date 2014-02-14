---
title: Why use @supports instead of Modernizr?
authors:
- bruce-lawson
tags:
- polyfill
- modernizr
- feature detection
- '@supports'
- performance
- blog
layout: article
---
When Chris Mills published his dev.Opera article <a href="http://dev.opera.com/articles/view/native-css-feature-detection-via-the-supports-rule/">Native CSS feature detection via the @supports rule</a>, <a href="http://twitter.com/silvenon/statuses/271342719748677632">@silvenon asked me</a> &quot;But wouldn&#39;t that be redundant? Modernizr already does a feature detection whether or not the browser is old.&quot;<br/><br/>The reason to use @supports over Modernizr is performance; functionality that&#39;s built into the browser will always be faster than adding it in script. Removing an external dependancy saves an HTTP request to download Modernizr and doesn&#39;t require time to execute the JavaScript.<br/><br/>This is one reason why  <a href="http://www.broken-links.com/2012/08/06/firefox-supports-supports-gets-my-support/#comment-72122">Paul Irish has said</a> &quot;an upcoming release of Modernizr will defer to the results of @supports if @supports is supported&quot;.<br/><br/>So, for example, if you&#39;re only using Modernizr to test for CSS support, you could conditionally load the JavaScript library if @support isn&#39;t available in the user&#39;s browser:<br/><br/><pre><code>if ( !(window.supportsCSS || (window.CSS &amp;&amp; window.CSS.supports) )) load_modernizr()</code></pre><br/>(This release of Opera uses <code>supportsCSS</code>. After implementation, the spec was changed to  <code>CSS.supports</code> instead, hence using both in the test above.) <br/><br/>You&#39;d need to write two sets of rules, one using the classes applied by the Modernizr tests, the others using @supports blocks which, in time-honoured CSS fashion, are ignored by browsers that don&#39;t understand them. This makes your CSS larger, but saves an HTTP request and saves execution time.<br/><br/>Should you use Modernizr or @supports? The answer is definitively &quot;it depends&quot;. As with all web projects, only you can decide which is the best way. <br/>
