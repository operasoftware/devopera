Title: Changes in Opera’s user agent string format
----
Date: 2009-05-27 17:18:52
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<p>Our latest <a href="http://my.opera.com/desktopteam/blog/2009/05/27/snapshot-build-with-preview-of-the-new-skin">weekly snapshot</a> identifies itself in a slightly unexpected fashion (as will the beta and final versions of Opera 10). The user agent for Opera 10 (eg Mac platform, English locale) will be as follows:</p>

<pre><code>Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00</code></pre>

<p>Confused? Let me explain this in more detail.</p>

<p>When we released the <a href="http://snapshot.opera.com/">Opera 10 alpha</a> in December last year, we gave it a <code>Opera/10.00 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.0</code> user agent string. This was a logical follow-on from previous browser versions, but we soon found out that the <code>Opera/10.00</code> part was not digested well on a number of sites that deploy browser sniffing to serve version-specific content and scripts. As browsers haven&#8217;t been around for a very long time yet, their version numbers have stayed in the realm of single digits thus far; Opera reaching 10 is the first of its kind. It appears that a considerable amount of browser sniffing scripts are not quite ready for this change to double digits, as they detect only the first digit of the user agent string: in such a scenario, <code>Opera 10</code> is interpreted as <code>Opera 1</code>. This results in sites mistakenly identifying Opera 10 as an unsupported browser, thereby breaking server, as well as client-side scripts.</p>

<p class="note">Browser sniffing &#8212; unless you&#8217;re writing a web stats application &#8212; is always a bad idea. It&#8217;s a misguided attempt to send different content to different user agents. This is never scalable &#8212; you can&#8217;t change every website you&#8217;ve ever made every time a new browser version comes out. It is also not future-proof, as highlighted by this article.</p>

<p>It&#8217;s important to note that other browsers &#8212; including Internet Explorer, which is two versions away from the <em>dreaded 10 number</em> &#8212; might face similar problems in the future, unless site administrators fix their scripts.</p>

<p>For those interested in an example, try to load <a href="http://www.allocine.fr/video/merciqui/">http://www.allocine.fr/video/merciqui/</a> with our earlier <a href="http://snapshot.opera.com/">Opera 10 alpha build</a>. You&#8217;ll see that after the advertising intro, the Flash video is shown at half the intended height. This is because the browser sniffing script on which the height parameter depends interprets Opera 10 as 1, which results in an incorrect value and a broken layout.</p>

<p>So, after a few months of careful analysis of the impact this Y2K-like versioning problem may have on site compatibility, we&#8217;ve decided to freeze the first part of the string as <code>Opera/9.80</code> for now, and add the version number in the end &#8212; hence the <code>Version/10.00</code> appendix. This construct allows us to somehow serve the <q>real</q> version number, while sidestepping the various double digit-related issues described above. In future releases, we plan to update the <code>Version</code> part. For example, Opera 11 will have a <code>Version/11.00</code> appendix, and so on.</p>

<p class="note">For those interested, here is a little note from behind the trenches: for a while, we considered going with <code>Opera/9.99</code> as it is only 0.01 away from 10, but in the end we settled on <code>Opera/9.80</code>, as this gives us some room for manoeuvre in the future in case we somehow want to update the Opera version number, while still staying below 10. The web is a moving target, so better be prepared for the unexpected!</p>

<p>Feel free to leave any questions you may have in the comment section, and of course, we hope you&#8217;ll enjoy Opera 10!</p>

