Title: What's new in Opera development snapshots: 28 February edition
----
Date: 2012-02-28 23:46:19
----
Author: 
----
Text:

<p>There is a new Opera Next out! Download it from the links in the <a href="http://my.opera.com/desktopteam/blog/2012/02/28/precision-engine">Desktop team&#39;s blog post</a> or wait a while for it to show up on your Opera Next updates (Browser Identification section should show <code>Presto/2.10.<b>269</b></code> in <a href="opera:about"><code>opera:about</code></a>).</p>

<h2>Major Updates</h2>

<ul>
<li><p>We now have better precision handling of fixed point values used for lengths and font-sizes. This has been a significant issue with Opera as many units were rounded off. Vadim has a neat <a href="http://jsfiddle.net/pepelsbey/NEhya/">demo of how this works in reality</a>. Check it in Opera Next and marvel at the precision!</p></li>
<li><p>Updating media query implementation to match the latest drafts of the specs, and to pass all the W3C Media Queries tests. 
Now you can use <a href="http://dev.w3.org/csswg/css3-values/#resolution">dpi, dpcm and dppx</a> as unit values for the resolution media query feature. <a href="http://jsfiddle.net/Vzbm7/">Here is an example</a>. This also fixes issues with Opera applying rules that are within invalid/incorrect media queries. </p></li>
</ul><h2>CSS</h2>

<ul>
<li>Not quite CSS, but malformed fonts never stopped loading, but now they do. </li>
<li>Setting <code>cursor</code> property on input elements <a href="http://jsfiddle.net/B44ma/">now works</a>.</li>
<li>The spec allows <code>border-radius</code> to inherit. Previously this used to fail in Opera, now it <a href="http://jsfiddle.net/pBKrC/">no longer does</a>.</li>
<li>There used to be random artifacts on linear gradients used with <code>position: absolute</code>, but <a href="http://jsfiddle.net/BUJ8W/">this has been fixed</a>.</li>
<li>Inset Box Shadow&#39;s offsets were calculated incorrectly if border-top-width is 0 or border-left-width is 0. <a href="http://jsfiddle.net/nimbu/uEw98/">This has been fixed</a>.</li>
<li>Opera&#39;s <code>::first-letter</code> CSS selector used to select even punctuation characters. But <a href="http://jsfiddle.net/kZRM7/">this is no longer the case</a>.</li>
</ul>

<h2>HTML</h2>
<ul>
<li>For some reason, entering 5210000010001001 into a field that is of type number caused validation error. This is no longer the case. </li>
<li>Setting <code>bgcolor=transparent</code> on a table element seems to not make the underlying background color show but rather render <a href="http://jsfiddle.net/vNf7p/">table blue</a>. </li>
</ul>

<h2>SVG</h2>
<ul>
<li>Hiding an element using JavaScript <a href="http://jsfiddle.net/7TBkg/1/">seems to prevent hover on the underlying element</a>. This has now been fixed. </li>
<li>Previously, animated SVG with <code>display: none</code> would trigger repaints of the whole view. This was one of the primary reasons why <a href="https://twitter.com/leaverou/status/149741098993057793">Dabblet was slow in Opera</a>. This has now been fixed. </li>
</ul>

<h2>XML</h2>
<ul>
<li>XML document had no <code>document.elementFromPoint</code> but this has now been fixed.</li>
<li>XML namespaces were also not output correctly when XML was serialised for <code>innerHTML</code>. This has now been fixed.</li>
</ul>

<h2>ECMAScript</h2>
<ul>
<li>Regex matching failed to match BOM for <code>\s</code>. This has <a href="http://jsfiddle.net/EB35S/">now been fixed</a>.</li>
<li>
<code>Array.prototype.join</code> and <code>Array.prototype.concat</code> have been made faster.<br />
</li>
<li>Improved <code>parseInt</code> performance.</li>
<li>The incorrect cache resolution over string values <a href="http://jsfiddle.net/yHqYF/">has now been fixed</a>. </li>
<li>Not quite ECMAScript, but relevant nonetheless. The line numbers were previously reported relative to the script tag in stack traces (when you do <code>try {} catch (e) {}</code>). This has been fixed. Thanks to <a href="https://twitter.com/fearphage">fearphage</a> for the bug report!</li>
<li>
<code>Number.prototype.toString()</code> was not returning accurate values accurate values for large non-base 10 numbers. This has <a href="http://jsfiddle.net/daQsW/">now been fixed</a> (seems like Chrome suffers from this bug). </li>
<li>Fixes for JSON.stringify(). A bunch of tests from <a href="https://github.com/lsmith/JSON-test-suite">JSON-test-suite</a> were imported and used to fix our JSON.stringify() implementation. Thanks <a href="https://twitter.com/ls_n">Luke Smith</a> for this test suite!</li>
</ul>

<h2>APIs</h2>

<h3>WebRTC</h3>
<ul>
<li>The <code>getUserMedia</code> implementation has been updated to accept <a href="http://www.w3.org/TR/2011/WD-webrtc-20111027/#widl-NavigatorUserMedia-getUserMedia-void-MediaStreamOptions-options-NavigatorUserMediaSuccessCallback-successCallback-NavigatorUserMediaErrorCallback-errorCallback"><code>MediaStreamOptions</code></a>.</li>
<li>If you had allowed a camera to be accessed from multiple domains, it used to crash on reload, it does not now. </li>
</ul>

<h3>Canvas</h3>
<ul>
<li>Applying a shadow <a href="http://jsfiddle.net/gLHvR/">previously prevented subsequent fill of a canvas area</a>.</li>
</ul>

<h3>DOM</h3>
<ul>
<li>If you had previously set the charset of a <code>script</code> element from within JavaScript, you would have noticed that it gets ignored (e.g. <code>script.charset = &quot;ISO-8859-1&quot;</code>. But we no longer do so. </li>
<li>
<a href="http://jsfiddle.net/hLCwx/">selectionStart/selectionEnd were working incorrectly</a> in a text field. This has been fixed. </li>
<li>Constants on DOMException Interface and Node interface had <code>writable</code> and <code>configurable</code> set to true. This has now been fixed. </li>
<li>Read-only properties like <code>event.target</code> if set in your script would previously throw an exception. This has been updated to only throw when in ECMAScript strict mode and not otherwise. </li>
<li>
<code>initEvent</code> on a dispatched event previously threw an error, this has been <a href="http://jsfiddle.net/qpQrM/">rectified to have no effect at all</a>.</li>
<li> Calling <code>preventDefault()</code> on a non-cancelable event previously returned true and was executed but has now been <a href="http://jsfiddle.net/soundstep/zwsFg/1/">fixed to have no effect</a>. Thanks for the report <a href="https://twitter.com/soundstep">Romuald Quantin</a>!</li>
<li>Previously <code>scroll</code> event did not fire when scrolling within a <code>textarea</code>. This has now been fixed. </li>
<li>By now you must be sensing a theme to all the DOM fixes - prevent unwanted errors from throwing. In this vein, we also have stopped XHR from firing error events and returning status code as 0 when <code>http</code> responses are anything but 200. In this snapshot, Opera will transparently pass through the right HTTP response codes.</li>
<li>You can now set the <code>responseType</code> for a <code>XMLHTttpRequest</code> to be <code>json</code>. This means the data returned would be a JavaScript object parsed from the JSON returned by the server as a response to this request.<br />
</li>
</ul>

<h2>Misc</h2>
<ul>
<li><p>How do browsers do page scroll when you press the &quot;page down&quot;/&quot;space&quot; button? How do they know how much to scroll by? </p>
<p>There is no standard way of doing this, but we had an interesting issue where Opera was doing this significantly differently from other browsers. From our investigation, it seems like Chrome 15+, Safari 5+, IE9+ scroll by <code>innerHeight - (innerHeight * 12.5%)</code> while Gecko does so by <code>innerHeight - (innerHeight * 10%)</code>. </p>

<p>This snapshot aligns our page scroll on page down/space key to match WebKit/Trident&#39;s behaviour. Here is a fun <a href="http://cache.gyazo.com/18ef11b55b6da98f7937bb64da06b4d3.png">screenshot of this behaviour across current Opera/IE/Firefox</a>.</p>
</li>
<li>32-bit builds running on 64-bit OS now include &quot;WOW64&quot; in the User-Agent String. </li>
</ul>
