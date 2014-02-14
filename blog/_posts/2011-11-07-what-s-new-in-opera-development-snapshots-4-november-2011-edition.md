---
title: 'What’s new in Opera development snapshots: 4 November 2011 edition'
authors:
- divya-manian
tags:
- opera snapshot
- blog
layout: article
---
  <p>Most of the updates that will feature in Opera 12 are in a new intermediate version <a href="http://my.opera.com/desktopteam/blog/2011/11/04/opera-11-60">Opera 11.60, whose snapshot has just been released</a>.</p>
  <p>Do note that unlike before, we have a build that is not in <a href="http://www.opera.com/browser/next/">Opera Next</a>. So, make sure you follow instructions so that <a href="http://my.opera.com/daniel/blog/2011/11/01/opera-mac-multiinstall">it does not erase your default install of Opera</a>.</p>
  <p>Do note that hardware acceleration and WebGL have been disabled. But here are some of the new features/bug fixes you can play with:</p>
  <ul>
    <li>
      <h3>Support for HTML5 Custom Scheme and Content Handlers</h3>
      <p>Mike Taylor <a href="http://my.opera.com/ODIN/blog/2011/11/07/custom-protocol-and-content-handlers">writes in detail how this feature will work</a> – in short you can tell fastmail or gmail to be used as your default app to compose an email when you click on a &quot;mailto:&quot; link. </p>
    </li>
    <li>
      <h3>Image Resampling Now Available!</h3>
      <p>Though this property is now in CSS4 Images spec, there is enough implementation out there in the wild to merit implementation. <code>image-rendering</code> hints to the browser which properties are most important to preserve when scaled so the browser can use the most appropriate scaling algorithm. This can speed up some of the canvas games if using a faster scaling algorithm. The values you can use are <code>optimizeSpeed</code>, <code>optimizeQuality</code> and <code>-o-crisp-edges</code>. This property can be used on <code>img</code>, <code>canvas</code>, <code>background-image</code> and <code>-o-border-image</code>. Here is <a href="http://jsfiddle.net/zda24/">an example of image scaling in action</a>. </p>
    </li>
    <li>
      <h3>XHR.send(ArrayBuffer)</h3>
      <p>We have native implementation of EcmaScript typed arrays, including the ArrayBuffer type. Now, you can send ArrayBuffers from an Ajax Request. </p>
    </li>
    <li>
      <p>Clicking on a label for file input now triggers the file selection dialog too!</p>
    </li>
    <li>
      <h3><code>document.all</code> now outputs unknown elements</h3>
      <p>If you had an unknown element (say &lt;foo id=fooid&gt;&lt;foo&gt;), using <code>document.all(&#39;fooid&#39;)</code> would not output this unknown element. This has now been fixed.</p>
    </li>
    <li>
      <h3>Support for <code>script.onerror</code> and <code>window.onerror</code></h3>
      <p>In case your script is unable to load, you can provide what further action to take in <code>script.onerror</code>. Now Opera also supports <a href="https://developer.mozilla.org/en/DOM/window.onerror"><code>window.onerror</code></a>.</p>
    </li>

    <li><h3>Text Selection Cursor at last!</h3>
      <p>This used to annoy me to no end. Finally, like all other browsers, Opera will render text selection cursor when selecting text. Try it!</p>
    </li>
    <li>
      <h3>Correct offsetLeft value in edge cases</h3>
      <p>When checking offsetLeft, Opera used to assume text-align: left is always set on the parent so it would obtain the wrong value. This is no longer the case.</p>
    </li>
    <li>
      <h3>Transition Updates</h3>
      <p><code>visibility</code> property is typically used in conjunction with another property to show/hide elements. Now the behaviour matches that of Webkit implementations which is much easier for authors to work with. Here is <a href="http://jsfiddle.net/kizu/A7QX9/">an example of this</a>. </p>
      <p>A windows bug with transistions and transforms has also been fixed. </p>
    </li>
    <li>
      <h3>Better Selectors and selector serialisation</h3>
      <p><code>:root:not(:only-child)</code> did not match <code>:root</code>. But now it does. </p>
      <p>No idea why anyone would want to match 128th child element, but <code>:nth-child(128)</code> did not select correctly. But this has been fixed and it does. Enjoy all you CSS manglers!</p>
      <p>When doing <code>cssRules[0].selectorText</code>, if the selector had <code>:nth-child(0n)</code>, it was dropped from the serialisation and hence caused an error. This has now been fixed. Similarly, <code>[attr=\&quot;&quot;]</code> was incorrectly serialized as <code>[attr=&quot;&quot;&quot;]</code>, but now it serializes to <code>[attr=&quot;\&quot;&quot;]</code>.</p>
    </li>
    <li>
      <h3>Fixes to Table-cell baseline</h3>
      <p>The baseline was not set to the bottom of the content edge of the cell box if there is no baseline found in first inflow-line or block or float (<a href="http://jsfiddle.net/nimbu/DKPDz/">here is an example</a>). Also, the top of a block element was treated as the baseline for a cell which has now been fixed (<a href="http://jsfiddle.net/nimbu/7Wstw/">here is an example</a>). </p>
    </li>
    <li>
      <h3><code>new Event(&#39;hurrayscream&#39;)</code></h3>
      <p>With <a href="http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#events">DOMCore spec</a>, there is a new way of initializing events with constructors. You can now do <code>new Event(&#39;foo&#39;);</code>, or <code>new Event(&#39;foo&#39;, {bubbles: true})</code>. </p>
    </li>
    <li>
      <h3>Text in <code>textarea</code> now wraps</h3>
      <p>If long words with no whitespace breaks are entered into a textarea, opera outputs a scrollbar instead of breaking the word at the end of the line. This has now been fixed.</p>
    </li>
  </ul>
    <p>Please do try it out and let us know if any of these do not work for you, or any other suggestions you might have!</p>
