---
title: The Opera 9.6 family–nothing left behind
authors:
- david-storey
tags:
- beta
- devices
- obml
- sdk
layout: article
---
<p>Opera has had a couple of releases today, to coincide with the dawn of the Opera 9.6 era.  The first release is the <a href="http://www.opera.com/products/desktop/next/">beta of Opera 9.6 for desktop</a>, and the other is a B2B-focused <a href="http://www.opera.com/pressreleases/en/2008/09/10/">Opera Devices 9.6 SDK</a>.  Both are on the Kestrel branch and thus use the Presto 2.1 rendering engine, just like Opera 9.5.</p>

<h3>Presto rendering engine changes</h3>

<p>Although the rendering engine is largely unchanged, there have been a number of critical bug fixes and support for one new property has been added - the <a href="http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Global_Objects:Function:caller">caller property</a> on functions.  This is non-standard, but has become a <em>de facto</em> standard as it is supported by all other major browsers, and was causing compatibility issues.</p>

<p>Due to different Opera products having a different browser version numbers but the same version of the rendering engine, we’ve also added the core version to the User Agent string.  This appears at the end of the string, eg for Opera 9.6 Beta the version is <q>Presto/2.1.1</q>.  The next major version of the rendering engine will be Presto 2.2, while minor fixes (such as those for this beta) will bump up the third digit, such as <q>Presto/2.1.2</q>.  Including the core version in the User Agent string will become a requirement on all Opera-based products from Presto 2.2, onwards.</p>

<h3>Opera 9.6 Beta 1</h3>

<p>This release polishes a number of features, adds features such a a RSS/ATOM feed preview and a low-bandwidth mode for Opera Mail, and improves Opera Link by adding custom search engines and typed history to the list of items that are synced between versions of Opera using this feature.  One interesting feature is the new scroll marker that is displayed on the page when scrolling to let the user know where the bottom or top of the screen was.  This is overlaid onto the page but has been designed to be as discreet as possible, so that it is still visible, but doesn’t interfere with the design of the page.</p>

<h3>Opera Devices SDK 9.6</h3>

<p>This is a release for Opera business customers - you can take the SDK and build a browser using our core engine and range of features.  The previous versions have been used by the likes of Sony, Nokia and Archos.  Its been included on everything from TVs and Set top boxes to digital music players and even photo frames.  The 9.6 version moves up to Presto 2.1, just like Opera 9.6.  As it uses the same core version, making sure your sites work on these browsers is usually as easy as testing in the latest Opera desktop version to make sure your site is compatible with our engine.  The main difference is mostly the display size, input method, plug-in and fonts available and any hardware constraints.</p>

<p>We&#39;ve produced  <a href="http://dev.opera.com/articles/view/opera-devices-sdk-9-6-developer-document/">Opera Devices SDK 9.6 Developer Documentation</a> on Dev Opera, so that you can learn about the features and any caveats that you should be aware of.  One key feature is OBML support, which is the technology found in Opera Mini to compress pages.  This is the first product from Opera outside of Opera Mini to include this feature.  It is currently experimental, and will be refined before it is included in a shipping product based on the SDK.</p>
