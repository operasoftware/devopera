Title: 64-bit Opera, and out-of-process plug-ins
----
Date: 2011-12-15 10:09:54
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

<p class="note"><strong>Update, November 22nd 2012</strong>: Please note that Opera 12.00 final shipped with 64-bit and OOPP support, and that as of version 12.02, OOPP is disabled for Windows 32-bit.</p>

<p class="note"><strong>Update, February 9th 2012</strong>: Article originally published just before Christmas 2011, and now updated with a new set of builds.</p>

<p>Thanks for all your great feedback so far. We&#39;ve updated the <a href="#builds">out-of-process plug-ins (OOPP) builds</a> to a newer version containing many fixes and updates. A lot of work has been done in the plugin backends on our various platforms. Keep testing with all the plugins you usually use, and remember to report back any issues to us!</p>

<h3>Known Issues</h3>

<h4>All platforms</h4>

<ul>
  <li>Plugin crash reporting not working yet</li>
</ul>

<h4>Linux/FreeBSD</h4>

<ul>
  <li>No Xt support</li>
  <li>Sun JDK might not work correctly: use IcedTea (OpenJDK) instead</li>
  <li>gecko-mediaplayer plugins are more prone to failure</li>
  <li>When hovering over a tab thumbnail that extends over the plugin area, the plugin animation is not restarted after hover out when compositing is off</li>
  <li>Typing in an auto-activated plugin is not working</li>
  <li>Opera may crash on exit</li>
</ul>

<h4>Mac</h4>

<ul>
  <li>Hardware acceleration is off by default on the Mac</li>
  <li>No IME support</li>
  <li>Some content is invisible in transparent Flash</li>
  <li>System dialogs may open behind the browser window</li>
  <li>No context menu for Flash</li>
  <li>The Flip4Mac plug-in may not play videos</li>
  <li>You may get drawing artifacts while scrolling</li>
  <li>Hardware acceleration is disabled by default, due to drawing issues with plug-ins</li>
</ul>

<h4>Windows</h4>

<ul>
  <li>You&#39;ll experience choppy scrolling on pages with embedded Flash</li>
  <li>Scrolling inside windowed Flash is not working</li>
  <li>WMP player plugin controls get corrupted after scrolling</li>
  <li>Silverlight may have some issues</li>
  <li>Opera may crash on resizing the plugin window</li>
  <li>Minimal restart in Opera&#39;s crashlog dialog works as a full restart</li>
  <li>You&#39;ll experience a temporary freeze when deleting plugin data</li>
  <li>Some strings in 64bit Opera will suffer corrupted text substitutions</li>
  <li>The Shockwave Director plugin is not detected under 64bit Opera</li>
</ul>

<p>Original text follows</p>

<hr />

<h2>Introduction</h2>

<p>As the snow settles on the ground, and the elves draw close to finishing construction of all their toy orders, it may not surprise you to learn that Opera&#39;s little helpers have also been very busy, adding exciting new innovations to our desktop browser!</p> 

 <p>As a last release before Christmas, we are bringing you a new labs release featuring two exquisitely wrapped presents:</p> 

 <ul> 
   <li>64-bit builds</li> 
   <li>Out-of-process plug-ins</li> 
 </ul> 

 <p>Let&#39;s look at these features in more detail.</p> 

 <h2>Out-of-process plug-ins</h2> 

 <p>We monitor our built-in crash logger carefully to see what is still causing browser crashes, post release. One very common source of instability is one that we unfortunately can&#39;t fix ourselves: browser plug-ins. We fixed this problem for Opera on Linux and FreeBSD a long time ago by running plug-ins in a separate process. This allows us to control exactly what communication takes place between Opera and running plug-ins, improving security and stability in the process. If a plug-in accidentally crashes under this system, Opera will keep on running, and a simple page reload will correct the plug-in.</p> 

 <p>This architecture is now coming to a Windows or Mac machine near you! This labs release provides an early preview of the new rewritten version for Mac/Win/Linux/FreeBSD, constructed to allow our code to work across all platforms.</p> 

 <h2>64-bit builds</h2> 

 <p>Bringing the out-of-process plug-in architecture across to Windows and Mac also brings another advantage: the ability to run plug-ins compiled for Intel 32-bit architecture from within a 64-bit Opera process. And 64-bit Opera is the other delightful gift we&#39;re giving you at Opera Labs this Christmas!</p> 

 <p>64-bit Windows and Mac have been in the works for a while, but we didn&#39;t want to release them until we had a way of running all plug-ins that&#39;s completely transparent to the user: This is now possible with the out-of-process plug-in architecture, so here we are! The 64-bit versions of Opera offer performance improvements in some specific areas and allow Opera to have more freedom in allocating memory.</p> 

 <h2 id="builds">Download Builds!</h2> 

<ul>
  <li><a href="http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.i386.exe">Windows 32-bit</a></li>
  <li><a href="http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.x64.exe">Windows 64-bit</a></li>
  <li><a href="http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.dmg">Mac 32/64-bit</a></li>
  <li><a href="http://snapshot.opera.com/labs/OOPP/Linux-FreeBSD/">Linux/FreeBSD builds directory</a></li>
</ul>

 <h2>Release notes and known issues</h2> 

<p>Original issues removed as they are no longer relevant.</p>

 <p class="note">Note on bug reporting: This build is based on Opera 12 (Wahoo) therefore it includes all the features from recent Opera Next snapshots, including hardware acceleration. When reporting plug-in bugs in this build, it&#39;s always interesting to know if hardware acceleration is on or off, and if toggling it makes a difference. You can turn off hardware acceleration by setting <a href="opera:config#UserPrefs|EnableHardwareAcceleration">opera:config#UserPrefs|EnableHardwareAcceleration</a> to 0 and restarting the browser.</p>

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/the-opera-plug-in-interface/">The Opera plug-in interface</a></li>
</ul>
