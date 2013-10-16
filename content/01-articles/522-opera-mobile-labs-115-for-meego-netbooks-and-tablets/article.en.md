Title: Opera Mobile Labs 11.5 for MeeGo netbooks and tablets
----
Date: 2011-11-24 11:02:55
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<p class="note"><strong>Update 2012-02-21:</strong> This post has been edited with information about an updated build available <a href="http://www.opera.com/download/get.pl?sub=++++&amp;id=34191&amp;location=270&amp;nothanks=yes">from our download server</a> as well as from the Intel AppUp store. For a Nokia N9 build, check our <a href="http://dev.opera.com/articles/view/a-treat-for-nokia-n9-users-opera-mobile-labs-11-5/">A treat for Nokia N9 users</a> Opera Labs post.</p>

<p>Since releasing <a href="https://market.android.com/details?id=com.opera.browser&amp;amp;hl=en">Opera Mobile 11.5 for Android</a> earlier this month, we have been working on an updated Labs release for MeeGo netbooks and tablets running Intel Atom processors.</p>
<p>Aside from the changes you may have seen on our Android release, this build contains a nifty hybrid mouse/touch input method which adds support  for mouseover events while still working on touchscreens. To try it out, use the <code>-usehybridinput</code> command line argument when launching.</p>
<p>As with other Labs releases, this build has not gone through full release testing, but it should work well enough to have some fun with. To install, <a href="http://www.opera.com/download/get.pl?sub=++++&amp;id=34191&amp;location=270&amp;nothanks=yes">download this package</a>, and run the following command in a root terminal on your device:
</p>
<pre>
rpm -i Opera_Mobile-Labs-MeeGo-11.50-42.i386.rpm
</pre>
<p>
Or, if you have a previous version of Opera Mobile installed:
</p>
<pre>
rpm -e Opera_Mobile-MeeGo
rpm -U Opera_Mobile-Labs-MeeGo-11.50-42.i386.rpm
</pre>
<p>Alternatively, if your MeeGo install has the <a href="http://www.appup.com/applications/index">Intel&#39;s AppUp store</a>, you should be able to find Opera Mobile there as a free download as well.</p>
<p><strong>Release notes:</strong></p>
<ul>
 <li>
  Added data usage view: see how much bandwidth you have saved with Opera Turbo.
 </li>
 <li>
  Updated Presto engine to 2.9.201.
 </li>
 <li>
  Hybrid mouse/touch input events support for touchscreen netbooks.
 </li>
</ul>
<p>
 <strong>
  Known issues:
 </strong>
</p>
<ul>
 <li>
  Portrait orientation on tablets is not supported.
 </li>
 <li>
  HTML5 video is not supported.
 </li>
 <li>
  Flash is not supported.
 </li>
</ul>
<p><strong>Additional notes for the release of 2012-02-21:</strong></p>
<ul>
<li>Italian, French, German and Spanish speaking users will be pleased to know that the user interface should appear in your system&#39;s default language.</li>
<li>The compromised DigiNotar Root Certificate Authority has been removed from the list of trusted certificate authorities. Some background details are available <a href="http://my.opera.com/rootstore/blog/2011/09/06/diginotar-first-step-disabling-the-root">over at the Opera Rootstore blog</a>.</li>
</ul>
