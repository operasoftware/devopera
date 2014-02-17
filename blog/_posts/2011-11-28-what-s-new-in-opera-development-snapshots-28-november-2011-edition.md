---
title: 'What’s new in Opera development snapshots: 28 November 2011 edition'
authors:
- divya-manian
tags:
- cors
- opera-next
- odin
layout: article
---
<p>A new snapshot of Opera 12 has been released. You can get details on <a href="http://my.opera.com/desktopteam/blog/2011/11/28/glyphs-and-plugins">where to download that Opera Next snapshot at the Desktop Team blog</a>. So, lets see what is new.</p>
<ul>
<li>
  <h3>Lots of fixes for WebGL and Hardware Acceleration</h3>
  <p>Crashes on webGL tests, memory leaks have been fixed in this build. There was also an issue with letter-spacing in hebrew text which has now been fixed.</p>
</li>
<li>
  <h3>Big news! CORS!</h3>
  <p>This snapshot also supports <a href="http://www.w3.org/TR/cors/">Cross-Origin Resource Sharing</a>, or CORS. CORS safely circumvents the same-origin policy for JavaScript by allowing developers to white-list which origins may modify the DOM of a document.</p>
  <p>Without CORS, for example, a request from <a href="http://foo.example" target="_blank">http://foo.example</a> to <a href="http://bar.example" target="_blank">http://bar.example</a> using XMLHttpRequest will fail. With CORS, such a request is possible, provided <a href="http://bar.example" target="_blank">http://bar.example</a> includes <a href="http://foo.example" target="_blank">http://foo.example</a> among its allowed origins. Keep an eye out for our upcoming Dev.Opera article on CORS.</p>
  <p>Meanwhile, you can test some of the <a href="http://arunranga.com/examples/access-control/">CORS demos</a> around the web on this snapshot</p>
</li>
<li>
  <h3>Webform fixes</h3>
  <p>The validation error popups for input fields with non-left text-alignment was too wide. This has been fixed. If you input a very large number in an input field of type number it used to throw an error. But this has been fixed. </p>
</li>
<li>
  <h3>Better support for Dragonfly</h3>
  <p>This snapshot also includes a few fixes which makes using Dragonfly better. Also, <a href="http://my.opera.com/dragonfly/blog/css-shorthands">Dragonfly just got the ability to render shortcut for CSS properties</a> - all the more reason for you to take it for a spin! </p>
</li>
</ul>
<p>Please do try it out and let us know if any of these do not work for you, or any other suggestions you might have!</p>
