---
title: Opera Mobile Emulator 12 update
authors:
- andreas-bovens
tags:
- mobile first
- Opera Mobile Emulator
- Opera Mobile
- emulator
- debugging
- mobile
- blog
layout: article
---
<img src="http://files.myopera.com/andreasbovens/blog/operamobileemu12.png" alt="Opera Mobile Emulator screenshot" title="Opera Mobile Emulator" width="300" height="467" style="float: right; margin: 0 0 5px 2px;" />
<p>A few weeks after our <a href="http://www.opera.com/mobile/">Opera Mobile 12</a> release for Android and Symbian, we&#39;re happy to announce that there now also is a corresponding <strong>update of the <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile Emulator</a></strong>!</p>

<p>If you haven&#39;t used it yet, the Opera Mobile Emulator is a version of Opera Mobile that runs on your Windows, Mac or Linux machine, and this <em>without</em> having to install any complex SDKs or the like. Upon launch, you&#39;ll get a handy <a href="http://dev.opera.com/articles/view/opera-mobile-emulator/#profiles">Profile panel</a> with various size, pixel density, orientation and UI options, from which you can spawn different Opera Mobile instances for developing or testing your site — or for simply browsing the web! Using Opera Dragonfly&#39;s <a href="http://www.opera.com/dragonfly/documentation/remote/">remote debugging capabilities</a>, you can also inspect the inner workings of your site on mobile, and finetune your CSS and JavaScript.</p>

<p><strong>So, what&#39;s new?</strong></p>
<ol>
<li>As this release goes hand in hand with Opera Mobile 12, we have <strong>upgraded the Presto rendering engine</strong> to Presto/2.10.254.</li>
<li>We&#39;ve added a <strong><code>-displayzoom</code> argument</strong>, which you can use to display the full browser window at a percentage of its original size. This is useful when the Opera Mobile instance you spawn has a larger height than the height of your computer and you want to make it fit: e.g. the HTC Desire profile triggers Opera Mobile to have a size of 480×800px, but my MacBook Pro&#39;s dock and menu bar reduces this to be 480×702px, distorting the profile&#39;s proportions. By using <code>-displayzoom 80</code>, the browser is rendered at 384×640px (preserving the aspect ratio), but the browser still behaves as if it was 480×800px.</li>
<li>You can now use again <strong>pinch gestures</strong> on your Mac trackpad to zoom in and out.</li>
<li>Support for a number of <strong>common desktop shortcuts</strong>: <kbd>tab</kbd> and <kbd>shift</kbd>+<kbd>tab</kbd> to navigate between form elements, <kbd>backspace</kbd> to go to the previous page, <kbd>ctrl</kbd>/<kbd>cmd</kbd>+<kbd>a</kbd> to select all text in an input field, etc.</li>
<li><strong>Updated profiles</strong> in the launcher.</li>
<li>Various bug fixes.</li>
</ol>
<p>Note: <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> and <code>getUserMedia</code> are currently not supported in the emulator. We&#39;re still looking into how to improve this, but keep these limitations in mind.</p>
<p>So, that&#39;s it! Try out the <a href="http://www.opera.com/developer/tools/mobile/">latest Opera Mobile Emulator build</a>, integrate it in your <a href="http://www.netmagazine.com/features/mobile-first">mobile first</a> workflow, and be sure to tell your web developer colleagues about it as well!</p>
<p>As always, we welcome all feedback. Leave a comment on this post, or <a href="https://www.twitter.com/#!odevrel">reach out to us on Twitter</a>.</p>
