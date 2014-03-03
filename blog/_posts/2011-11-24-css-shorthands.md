---
title: CSS shorthands!
authors:
- david-hasather
tags:
- css
- shorthands
- weekly
- dragonfly
license: cc-by-3.0
layout: post
---

<p>Have you ever tried to debug something like <code>border: 1px solid rgb(255, 0, 0);</code> in Opera Dragonfly&#39;s CSS inspector, only to be greeted by a bunch of expanded properties?</p>

<img src="/blog/css-shorthands/clusterfuck.png" alt="Opera Dragonfly CSS inspector showing expanded properties" />

<p>No more! Opera Dragonfly now has support for CSS shorthands, so the previous declaration will now be presented like this:</p>

<img src="/blog/css-shorthands/shorthand.png" alt="Opera Dragonfly CSS inspector showing the same properties in shorthand" />

<p>Values that have been partially overridden will also be shown in this compact shorthand view:</p>

<img src="/blog/css-shorthands/partially-overridden.png" alt="The shorthand properties, with overridden partial values struck through" />

<p>The implementation is not fully done yet. For example, the color swatch isn&#39;t added to a color if it&#39;s part of a shorthand value. Also, default values for things like the <code>background</code> property will always be visible. Both of these issues will be fixed.</p>

<p>And if you&#39;re a fan of expanded properties, you can still right-click in the CSS inspector and enable &quot;Expand shorthands&quot;.</p>

<p>We would appreciate a lot of testing on this experimental release, as a <strong>lot</strong> of code has been refactored. So edit away, disable declarations and so on, and report back if something breaks.</p>

<p>We&#39;ve also added <a href="https://dragonfly.opera.com/app/stp-1/experimental/zips/">per-language builds</a> available as ZIP files for <a href="http://my.opera.com/dragonfly/blog/running-opera-dragonfly-offline">offline use</a>.</p>
