Title: Opera Nalakuvara, customized Taiwanese browser — Part 4: Deployment, documentation, testing
----
Date: 2010-01-27 11:36:59
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

<h2>Introduction</h2>

<p>Nalakuvara is now almost complete. With the main coding and customization all done, it&#39;s time to move in to the endgame, which is what we&#39;ll cover in this article. I will show you how to package and deploy Nalakuvara. We will talk about creating useful documentation, and discuss the process of soliciting testing, and dealing with community feedback effectively.</p>



<h2 id="pack">Packaging</h2>



<p>The packaging process on each platform is fairly simple. On Windows, I first compile the AutoHotKey scripts into an <code>.exe</code> executive, then pack all necessary files into a RAR SFX archive, which is a good packaging format because you can set it to launch a specific file upon extraction. You could consider using NSIS too — it handles multiple languages better, but it is harder to extract and less commonly supported.</p>



<p>On Linux/FreeBSD, packaging is even simpler — I just make tarballs for the different platforms: <code>tar.bz2</code> for Ubuntu (deb) and FreeBSD, <code>tar.gz</code> for Fedora (rpm) and <code>tgz</code> for generic Linux.</p>



<p>To help users make sure that their downloads are not corrupted, the file download page also provides a MD5 checksum of each file. MD5 however is a little too geeky. In order to help the average end user, there is a standalone file checker based on the MD5 checksum that is compiled from an AutoHotKey script. It is the one checker to check them all. If the downloaded file belongs to any one of the current releases, it reports the file&#39;s detail, otherwise it asks users to download again. By providing this checker, novice users and advanced users can both make sure that their download file is error-free.</p>





<h2 id="doc">Documentation</h2>



<p>Documentation is the basis for communication — I spend more time on documentation than coding/scripting. If the importance of documentation isn&#39;t obvious, I wouldn&#39;t be spending so much time on these articles! </p>



<p>For documentation to be effective, I needed to balance the needs of geeks with those of average end users. User documents help users to understand the whole project, know where to tweak configuration options further if needed, and how to apply changes manually. Geek documents are for geeks, for those who want to know the actual process behind Nalakuvara, and for those who want to do a similar project.</p>



<p>Because Nalakuvara is for Taiwanese users, currently all documents are only in Traditional Chinese. The articles you are reading now constitute the first English Nalakuvara documentation.</p>



<h3 id="userdoc">User Documents</h3>



<p>Nalakuvara documents are updated frequently and available online. Here is a list of the most useful ones to check out:</p>



<ul>

<li>The <a href="http://Jedi.org/p4/Opera/pub/">Nalakuvara main index</a> describes the history of this project, TODOs, and known issues</li>

<li>The <a href="http://Jedi.org/p4/Opera/pub/feature.html">Nalakuvara feature page</a> introduces the guidelines of Nalakuvara, details all features (with screenshots), and links to add customized buttons</li>

<li>The <a href="http://Jedi.org/p4/Opera/pub/download.html">Nalakuvara download page</a> lists all available downloads of current Nalakuvara versions, with some utility files such as a script to enable mouse gesture trail</li>

<li>The <a href="http://Jedi.org/p4/Opera/pub/changelog.html">Change log page</a> records all changes committed since the first release of Nalakuvara. Users who use the Patch Package will be led to the <a href="http://Jedi.org/p4/Opera/pub/patched.html">patched result page</a>, which provides information on several of Nalakuvara&#39;s tweaked defaults, such as bookmarks and Toolbar buttons. In case Nalakuvara&#39;s patch does not work, users still know how to fix them by themselves</li>

</ul>



<p>All these documents are user-oriented. This means that all information is in plain language, with images, lists and tables to facilitate understanding. With these documents on hand, most users could easily find what they need, and I can easily answer most user questions by providing a single URL.</p>



<h3 id="geekdoc">Geek Documents</h3>



<p>Geek documents provide something extra for more technical users of Nalakuvara. The <a href="http://Jedi.org/p4/Opera/pub/tech.html">Technical details page</a> is basically like a shorter version of this article series, which explains many things, including how and why I made certain decisions, and how I implement the Nalakuvara customizations.</p>



<p>For the hardcore, the actual documents are within the source of my scripts — all scripts are commented nicely, line-by-line, in Traditional Chinese. There are even more details in those comments than in this article. (Would anyone like to see thousands lines of code in this article? I doubt that.) Studying these scripts, you can learn how to modify not only Opera, but some AutoHotKey modifications as well.</p>



<p>Geek documents help geeks to truly take control of Nalakuvara. I myself am one of their biggest beneficiaries. Even after months or years have passed, I will still be able to tell which line of the codes is doing what at a glance.</p>



<h2 id="release">Test and Release</h2>



<p>Even when all the files have been packaged nicely, and documentation is fairly complete, you can&#39;t just throw your software out into the wild — it must be tested first, and you need a decent strategy for release. We will discuss these things in this section.</p>



<h3 id="testenv">Test Environment</h3>



<p>The first step of testing is to prepare test environments. As mentioned before in the first part of this series, <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#vm" title="Virtual Machine">virtual machines help a lot</a>. For the supported platforms (OSes), it is better to take several snapshots to test with. The following are the snapshots I worked with during Nalakuvara testing:</p>

<ul>

  <li>Brand new default installation</li>

  <li>Brand new default installation with all service packs from vendors</li>

  <li>Brand new customized installation</li>

  <li>Brand new customized installation with all service packs from vendors</li>

  <li>Brand new customized installation with all service packs from vendors, and Opera 9.64 installed with default options</li>

  <li>Brand new customized installation with all service packs from vendors, and Opera 9.64 is installed with customized options</li>

  <li>Brand new customized installation with all service packs from vendors, and Opera 10.00 is installed with default options</li>

  <li>Brand new customized installation with all service packs from vendors, and Opera 10.00 is installed with customized options</li>

  <li>Brand new customized installation with all service packs from vendors, and with a different 3rd party web browser as the system&#39;s default web browser</li>

  <li>Upgrade installation from previous versions</li>

</ul>



<p>You could add more snapshots to the list above. However, once you identify different instances in which the installation and testing works out exactly the same, you can eliminate them to prevent wasting time.</p>



<h3 id="testroute">Testing routes</h3>



<p>A &quot;route&quot; is how users complete one process. Let&#39;s take <strong>Full Installation Package</strong> as an example (full installation of Nalakuvara) — there are 249 possible routes! The nightmare begins with 10 test situations on each of 10 different systems, which makes 24,900 routes to test in total. It is quite impossible to fulfill all of them, but at least you should perform all 249 routes in one situation, on one system. Once or twice I was too lazy to do all the tests, and some packages just failed stupidly in certain situations.</p>



<p class="note">Note: To save time, look into doing unit tests. 249 routes could be two units with only 20 routes in total. You could also use debug code to help you, for example:</p>



<pre><code>; debug mode switch
DEBUGMODE = 1

; blah blah blah...
;
; some code here
;
; yada yada yada...

; print debug message only when debug mode is on
if ( DEBUGMODE = &quot;1&quot; ) {
MsgBox, 64, DEBUG MESSAGE, variable foo = %foo%
}

; blah blah blah...
;
; code continues
;
; yada yada yada...</code></pre>

<h3 id="deploy">Deployment</h3>



<p>After the test phase has proved successful, it is time to make the project release public. Since I am using Perforce as a <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#vcs">version control system</a>, I can use that to pull updates to my web server. I set up a <code>crontab</code>:</p>



<pre><code>P4PORT=<var>HOST</var>:<var>PORT</var>
P4USER=<var>USERNAME</var>

45 * * * * /usr/local/bin/p4 sync</code></pre>



<p>This keeps files up-to-date hourly, which is enough for minor changes or routine maintenance. When I am ready to release a new build, I just manually do <code>p4 sync</code>. Please note that by default <code>p4 login</code> gets a ticket that only validates for 43,200 seconds (ie, 12 hours). In order to keep the <code>crontab</code> working, you have to first specify <code>Timeout: unlimited</code> with the <code>p4 group</code> command to create a group of users with issued tickets that never expire.</p>



<p>My web server has another problem too. I host my web server with a 10M/2M ADSL connection, thus it cannot serve more than 2Mbps outgoing bandwidth in total. There are a few ways to balance traffic. <a href="http://www.coralcdn.org/">Coral Content Distribution Network (CoralCDN)</a> provides a free peer-to-peer content distribution network. Just append <code>.nyud.net</code> to the hostname part of file downloading URLs:</p>

<pre><code>&lt;a href=&quot;http://Jedi.org<strong>.nyud.net</strong>/p4/Opera/pub/Release/Opera-10.00.Nalakuvara-RC2.exe&quot;&gt;download&lt;/a&gt;</code></pre>



<p>I also use file hosting services such as <a href="http://www.rapidshare.com/">RapidShare</a> and other mirror sites to provide alternative downloads. Do not forget to provide file checksums (MD5/SHA1/SHA256 or so) to verify files.</p>


<p class="note">Usually I only do these works after a <strong>Release</strong> version of Opera has been released. By not basing Nalakuvara on <strong>Beta</strong>/<strong>Alpha</strong>/<strong>Pre-Alpha</strong>/<strong>Snapshot</strong> versions of Opera, I can allow users to focus on real bugs. This helps debugging both Opera and Nalakuvara. However, I do announce <a href="http://Jedi.org/p4/Opera/pub/news.html#005975">brief test reports</a> for certain pre-release test results, so that users can predict what will happen in future releases.</p>

<h2 id="community">Community</h2>



<p>Community is the core value of any software project. It is important to feed information to your community, and use feedback from it effectively.</p>



<h3 id="feed">Feeds</h3>



<p>When your project is exposed to the public, thousands of visitors will come to check it out, but the truth is that most visitors come to visit once; only very few will be back again. It means that most people will not pay much attention to any project.</p>



<p>If you want people to keep tab with your project&#39;s development, you have to do something. Feeds, for example, are a good method of ensuring this. People might subscribe to your feeds during their one-time visit, and might come back again if you publish something interesting via feeds. There are also many other communication channels, such as Twitter and Plurk, which basically do the same job.</p>



<p>The point here is to create a &quot;laziness-friendly&quot; environment, so that people don&#39;t think participation and following updates will be too much work.</p>



<p>Once the channel is set, create some buzz. Every time you find a bug, fix a bug, add a feature or even write a document, let the people who subscribe know about it. Feed your users and they will stay and grow. That is the beginning of the community.</p>



<h3 id="feedback">Feedback</h3>



<p>The community, however, cannot rely on one-way communication. You have to listen to and talk to the members. Some channels, such as Twitter and Plurk, are capable of two-way conversations. You should use social platforms where users hang out, too. Remember those places when doing <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#analysis">background analysis</a>.</p>



<p>I spend lots of time on related forums like Ptt BBS every day. How users use your software might differ considerably from what you first expect. The needs of users evolve from time to time, so should your project. Of course, you still have to keep the basic <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#guideline">guidelines</a> in mind.</p>



<p>The <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-2/">fake User Agent string list</a> mentioned in the end of the &quot;Tweak Defaults&quot; section in part 2 is one of the results of community contribution. About a month ago, I started a <a href="https://spreadsheets.google.com/ccc?key=0AldE%3Cbr%20/%3EJIUXNCBbdGFzUUktRVZnYS01N1NzazFocWk1bkE">spreadsheet</a> on <a href="https://docs.google.com/">Google Docs and Spreadsheets</a>. The priviledge of that spreadsheet is set to public, and everyone is welcome to edit freely. Later I posted this spreadsheet URL at Ptt BBS, and users started to contribute their findings.</p>



<p>It is neither easy nor simple to manage a community. Nalakuvara has a long way to go, and I still have a lot to learn. I am learning a lot from &quot;<a href="http://www.artofcommunityonline.org/">The Art of Community</a>,&quot;, a new book written by Jono Bacon, the Ubuntu Community Manager, and published by O&#39;Reilly. The best part of it is that this book is also released online under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike license</a>. Why not <a href="http://www.artofcommunityonline.org/2009/09/18/the-art-of-community-now-available-for-free-download/">get a free PDF download</a> right now?</p>



<h2 id="conclusion">Conclusion</h2>



<p>This concludes your guided tour of the Nalakuvara project! I hope the articles are useful, and might have even inspired you to create your own browser customization project.</p>



<p>There are many different ways to do things. You could do it quick-and-dirty, or make it more drawn out and step-by-step. From a long-term point of view, I believe that a solid path make things much easier. Even readers outside the browser world still benefit from these details. That is why I take time to write documents and articles like this one.</p>



<p>Opera itself evolves, too. One day Opera might reach perfection and cover all features from Nalakuvara. By that time, there will be no need to continue the Nalakuvara project. However, with all these documents, all the contribution and community interaction will not be in vain.</p>
