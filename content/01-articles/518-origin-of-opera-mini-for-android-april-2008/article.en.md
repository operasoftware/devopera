Title: Origin of Opera Mini for Android - April 2008
----
Date: 2011-11-24 11:02:55
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th January 2012: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. You can download the latest version of Opera Mini for Android, and find documentation and technical specs, at our <a href="http://www.opera.com/mobile/android/">Opera for Android</a> page.</p>
</div>

<p>
 This article takes a look at one of Opera&#39;s latest and greatest
	projects - the creation of an Opera Mini version that will run on
	Google&#39;s Android open mobile development platform. Over the course of
	the article, we&#39;ll explain why we created it, how, challenges we
	faced, and how you can try it out for yourself. We&#39;d like to
	encourage you to try it out, and give us as much feedback as you
	possibly can. Enjoy!
</p>
<h2>
 Why did we do it?
</h2>
<p>
 When we first heard about Google Android, we were very excited about
	the possibilities it presents, and thought it would be very cool to
	make Opera Mini available on it, plus it would give mobile developers
	a better choice of browsers to make available on handsets. But it
	goes beyond just cool factor - one of Opera&#39;s central doctrines is
	providing the best internet experience on any device - the Android
	platform is another missing piece of the puzzle for us to fill in.
</p>
<p>
 There are also practical reasons - the Opera Mini browser renders web
	pages that have been transcoded to the binary OBML format, meaning
	much smaller downloads and a faster browsing experience on mobiles,
	than would be provided by other browsers (the Android WebKit-based
	browser component has a switch in the public API allowing the use of
	a transcoding proxy that transcodes web pages to a simpler form of
	HTML. Whether this is as small and fast as Opera Mini&#39;s OBML remains
	to be seen.)
</p>
<h2>
 How did we do it?
</h2>
<p>
 How did we do it? We decided to use the existing Opera Mini code base
	(even the binary package) instead of creating a separate port, to
	save on resourses. We created a special wrapper that translates Java
	ME (mostly MIDP) API calls into Android API calls. The tool used was
 <a href="http://www.microemu.org/">
  MicroEmulator
 </a>
 - this is an open source (LGPL) implementation of Java
	ME that runs on top of Java SE. The lead Opera Mini Android developer
	is also the lead developer of MicroEmulator, so it was an inspired
	choice! The Android platform is similar to Java SE, with the
	exception of several libraries normally included in Java SE (like
	AWT/Swing - these are excluded because they would likely be too heavy
	to fit into the embedded environment.) It is therefore fairly simple
	to port MicroEmulator to run inside Android environment. The only
	major task was to replace the AWT/Swing graphics backend of
	MicroEmulator with Android specific APIs.
</p>
<h2>
 Issues we faced
</h2>
<p>
 This section details the issues we faced when making the Opera Mini
	port over to Android:
</p>
<ol>
 <li>
  First, the Android platform is a comparitively fresh set of APIs. There was not much information available on the web when we were doing the original development, and the community around Android was just forming, so sometimes it was difficult to find an answer if something during development was proving difficult.
 </li>
 <li>
  Android was not a finished product during the original development, and there was no hardware available that would run Android at that time.
 </li>
 <li>
  Integration between the Eclipse IDE and the Android SDK is seamless, making for a nice coding experience. The Android emulator however runs inside QEMU, which is a bit to slow even on fast desktops.
 </li>
</ol>


