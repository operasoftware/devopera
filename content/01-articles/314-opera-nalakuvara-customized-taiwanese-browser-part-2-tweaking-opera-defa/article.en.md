Title: Opera Nalakuvara, customized Taiwanese browser — Part 2: Tweaking Opera default settings
----
Date: 2010-01-27 11:36:52
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
      
<p>In the <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/">first part of my series</a> covering how I created the customized <a href="http://jedi.org/p4/Opera/pub/">Opera Nalakuvara package</a>, I looked at aspects such as naming it, community research, getting together my toolset, getting the installation procedure right, and working out what files I need to customize. In this, the second part, we get to the fun bit — actually starting to make those customizations! A lot of the things I wanted to achieve with Nalakuvara are available by just tweaking default settings and files that Opera already has available to it; this is what I’ll cover here. We’ll get to the creation of third party additions in part three.</p>

<p>The contents of this article are as follows:</p>

<ul>
  <li><a href="#operaconfig">Editing opera:config</a>
    <ul>
      <li><a href="#operaconfiglinuxfreebsd">Additional Linux and FreeBSD changes</a></li>
    </ul>
  </li>
  <li><a href="#mailproviders">Updating the default mail providers</a></li>
  <li><a href="#fastforward">Modifying the Fast Forward button behaviour</a></li>
  <li><a href="#searchengines">Modifying default search engines</a></li>
  <li><a href="#bookmarks">Modifying default bookmarks</a></li>
  <li><a href="#useragent">User agent modification</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>    
      
<h2 id="operaconfig">Editing opera:config</h2>

<p>First thing first. Most of the features I wanted to add want are available through simply changing Opera’s settings on the <a href="opera:config">opera:config</a> page. The below table details all the changes I implemented in the Nalakuvara package — these changes made to <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\operaprefs.ini</code> (never edit this while Opera is running).</p>

<table class="table1">
  <caption>[User Prefs]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Enable <a href="http://www.opera.com/browser/tutorials/gestures/">Mouse Gesture</a></th>
      <td><a href="opera:config#UserPrefs|EnableGesture">opera:config#UserPrefs|EnableGesture</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Enable All <a href="http://help.opera.com/Windows/10.01/en/mouse.html#mouse-drag">Drag &amp; Drop</a> Features</th>
      <td><a href="opera:config#UserPrefs|EnableDrag">opera:config#UserPrefs|EnableDrag</a></td>
      <td>247</td>
      <td>255 (This enables all drag operation, according to <a href="http://www.opera.com/support/kb/view/756/">Opera Knowledge Base</a>)</td>
    </tr>
    <tr>
      <th class="sub">Double Click on Tab to Close It</th>
      <td><a href="opera:config#UserPrefs|DoubleclicktoCloseTab">opera:config#UserPrefs|DoubleclicktoCloseTab</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Open new Tab/Window for each new link, search and bookmark, rather than re-use current one. Make new Tab/Window active.</th>
      <td><a href="opera:config#UserPrefs|NewWindow">opera:config#UserPrefs|NewWindow</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Open New Tab/Window for each new link, search and bookmark, rather than re-use current one, but open it in the background.</th>
      <td><a href="opera:config#UserPrefs|OpenNewWindowinBackground">opera:config#UserPrefs|OpenNewWindowinBackground</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Show panel toggle area at the window edge So that users can toggle panel on or off more easily</th>
      <td><a href="opera:config#UserPrefs|Showpaneltoggle">opera:config#UserPrefs|Showpaneltoggle</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

<p>The below screenshots show some of these features in action.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-01.png" alt="Drag and Drop a link to download panel" />
<p class="comment">Figure 1: Drag a download link to the downloads panel to start downloading.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-02.png" alt="Double-click to close tab" />
<p class="comment">Figure 2: Double-click on a tab to close it.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-03-01.png" alt="Panel toggle area with panel hidden" />
<p class="comment">Figure 3-1: Click on panel toggle area to bring up panel.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-03-02.png" alt="Panel toggle area with panel shown" />
<p class="comment">Figure 3-1: Click on panel toggle area to close panel. This is quite handy especially when Opera is maximized. (One just need to move mouse to the most left and click.)</p>

<table class="table1">
  <caption>[Fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Browser dialog fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Dialog">opera:config#Fonts|Dialog</a></td>
      <td>15,4,0,0,0,0,SimSun</td>
      <td>12,4,0,0,0,0,新細明體</td>
    </tr>
    <tr>
      <th class="sub">Browser menu fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Menu">opera:config#Fonts|Menu</a></td>
      <td>15,4,0,0,0,0,SimSun</td>
      <td>12,4,0,0,0,0,新細明體</td>
    </tr>
    <tr>
      <th class="sub">Browser panel fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Panel">opera:config#Fonts|Panel</a></td>
      <td>15,4,0,0,0,0,SimSun</td>
      <td>12,4,0,0,0,0,新細明體</td>
    </tr>
    <tr>
      <th class="sub">Browser toolbar fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Toolbar">opera:config#Fonts|Toolbar</a></td>
      <td>15,4,0,0,0,0,SimSun</td>
      <td>12,4,0,0,0,0,新細明體</td>
    </tr>
    <tr>
      <th class="sub">Browser tooltip fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Tooltip">opera:config#Fonts|Tooltip</a></td>
      <td>15,4,0,0,0,0,SimSun</td>
      <td>12,4,0,0,0,0,新細明體</td>
    </tr>
  </tbody>
</table>

<p>The reason to change browser fonts is that SimSun looks good in Simplified Chinese, but horrible in Traditional Chinese — Figures 4 and 5 illustrate the difference.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-04.png" alt="Original Opera uses SimSun as default UI font" />
<p class="comment">Figure 4: The original Opera in Traditional Chinese Windows. Take a close look at UI fonts: the menu font, the tab font, and the address bar font. SimSun does not do a good job here.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-05.png" alt="Opera Nalakuvara uses 新細明體 as default UI font" />
<p class="comment">Figure 5: Opera Nalakuvara in Traditional Chinese Windows. With 新細明體 as default UI font, now it is better.</p>

<table class="table1">
  <caption>[Network]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">(HTTP) Accept traditional Chinese and English, avoid simplified Chinese</th>
      <td><a href="opera:config#Network|HTTPAcceptLanguage">opera:config#Network|HTTPAcceptLanguage</a></td>
      <td>zh-TW,zh;q=0.9,en;q=0.8</td>
      <td>zh-tw,en;q=0.9</td>
    </tr>
  </tbody>
</table>

<p>We also have to tweak the default HTTP Accept languages to rule out <code>zh</code>, otherwise some sites wrongly send Simplified Chinese content to Taiwanese users. Traditional Chinese and Simplified Chinese are really two different languages; treating one as a subset of the other causes problems.</p>

<table class="table1">
  <caption>[Network]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Do not check local host name while entering invalid URL</th>
      <td><a href="opera:config#Network|CheckLocalHostName">opera:config#Network|CheckLocalHostName</a></td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th class="sub">Do not append host name prefix/postfix while entering invalid URL</th>
      <td><a href="opera:config#Network|EnableHostNameExpansion">opera:config#Network|EnableHostNameExpansion</a></td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th class="sub">Use Web (Search Engine) to Lookup Host Name While Entering Invalid URL</th>
      <td><a href="opera:config#Network|EnableHostNameWebLookup">opera:config#Network|EnableHostNameWebLookup</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">The web search URL to lookup host name</th>
      <td><a href="opera:config#Network|HostNameWebLookupAddress">opera:config#Network|HostNameWebLookupAddress</a></td>
      <td></td>
      <td><a href="http://www.google.com/search?q=%s&amp;amp;amp;sourceid=opera&amp;amp;amp;num=%i&amp;amp;amp;ie=utf-8&amp;amp;amp;oe=utf-8" target="_blank">http://www.google.com/search?q=%s&amp;sourceid=opera&amp;num=%i&amp;ie=utf-8&amp;oe=utf-8</a></td>
    </tr>
  </tbody>
</table>

<p>Host Name Expansion (append prefix/postfix to invalid host name automatically) is also disabled,  because Traditional Chinese host names such as <code><a href="http://網頁設計.tw/" target="_blank">http://網頁設計.tw/</a></code> are still not popular in Taiwan, so enabling this expansion often brings users to docked page of domain name retailers. Instead, Nalakuvara turns Address Bar into Google search if one entered an invalid URI.</p>

<p>The full edits to <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\operaprefs.ini</code> look like so:</p>

<pre><code>Opera Preferences version 2.1
; Do not edit this file while Opera is running
; This file is stored in UTF-8 encoding

[User Prefs]
Enable Gesture=1
Enable Drag=255
Doubleclick to Close Tab=1
New Window=1
Open New Window in Background=1
Show panel toggle=1

[Fonts]
Menu=12,4,0,0,0,0,新細明體
Toolbar=12,4,0,0,0,0,新細明體
Dialog=12,4,0,0,0,0,新細明體
Panel=12,4,0,0,0,0,新細明體
Tooltip=12,4,0,0,0,0,新細明體

[Network]
HTTP Accept Language=zh-tw,en;q=0.9
Check Local HostName=0
Enable HostName Expansion=0
Enable HostName Web Lookup=1
HostName Web Lookup Address=http://www.google.com/search?q=%s&amp;sourceid=opera&amp;num=%i&amp;ie=utf-8&amp;oe=utf-8</code></pre>

<h3 id="operaconfiglinuxfreebsd">Additional Linux and FreeBSD changes</h3>

<p>新細明體 (MingLiU) is the default system font on the Traditional Chinese Windows, but this font is not available on Linux/FreeBSD. Linux/FreeBSD versions of Opera also have a bug that causes Traditional Chinese and Simplified Chinese fonts to be mixed up in web contents, resulting in inconsistency and ugly display. The workaround is to use <code>AR PL UMing TW MBE</code> and <code>AR PL UKai TW MBE</code> for browser UI and default (preferred) fonts. So on Linux and FreeBSD I made the following additional changes:</p>

<table class="table1">
  <caption>[Fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Browser dialog fonts for Traditional Chinese</th>
      <td><a href="opera:config#Fonts|Dialog">opera:config#Fonts|Dialog</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser menu fonts for Traditional Chinese</th>
      <td><a href="opera:config#Fonts|Menu">opera:config#Fonts|Menu</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser panel fonts for Traditional Chinese</th>
      <td><a href="opera:config#Fonts|Panel">opera:config#Fonts|Panel</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser toolbar fonts for Traditional Chinese</th>
      <td><a href="opera:config#Fonts|Toolbar">opera:config#Fonts|Toolbar</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser tooltip fonts for Traditional Chinese</th>
      <td><a href="opera:config#Fonts|Tooltip">opera:config#Fonts|Tooltip</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<p>Just like in Windows, these are for the UI font. This time, we have to tweak default (preferred) web content font, too:</p>

<table class="table1">
  <caption>[Fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Web page normal text font</th>
      <td><a href="opera:config#Fonts|Normal">opera:config#Fonts|Normal</a></td>
      <td>16,4,0,0,0,0,Nimbus Roman No9 L [urw]</td>
      <td>16,4,0,0,0,0,AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Web page &lt;pre&gt; text font</th>
      <td><a href="opera:config#Fonts|PRE">opera:config#Fonts|PRE</a></td>
      <td>16,4,0,0,0,0,Nimbus Mono L [urw]</td>
      <td>16,4,0,0,0,0,AR PL UKai TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[Preferred fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Preferred traditional Chinese font</th>
      <td>N/A</td>
      <td>Nimbus Sans L [urw]</td>
      <td>AR PL UMing TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[Preferred fonts monospace]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Preferred traditional Chinese monospace font</th>
      <td>N/A</td>
      <td>Nimbus Mono L [urw]</td>
      <td>AR PL UKai TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[CSS Generic Font Family]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Generic CSS sans-serif font family</th>
      <td><a href="opera:config#CSSGenericFontFamily|Sans-Serif">opera:config#CSSGenericFontFamily|Sans-Serif</a></td>
      <td>Nimbus Roman No9 L [urw]</td>
      <td>AR PL UMing TW MBE [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Generic CSS serif font family</th>
      <td><a href="opera:config#CSSGenericFontFamily|Serif">opera:config#CSSGenericFontFamily|Serif</a></td>
      <td>Nimbus Mono L [urw]</td>
      <td>AR PL UKai TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<p>Take a close look at the UI fonts and the web content fonts in Figure 6, and compare it to Figure 7. Sadly the web content fonts in Figure 6 are blurry and inconsistent.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-06.png" alt="Original Opera in Fedora 11" />
<p class="comment">Figure 6: The original Opera in Traditional Chinese Fedora 11. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-07.png" alt="Opera Nalakuvara in Fedora 11" />
<p class="comment">Figure 7: Opera Nalakuvara in Traditional Chinese Fedora 11. The UI fonts and preferred web content fonts are not perfect dealing with English characters yet, but at least much clear and readable.</p>

<p>This results in the following modified <code>/usr/share/opera/operadefaults.ini</code>:</p>

<pre><code>; Put any default settings here that are overridable by users

[User Prefs]
Enable Gesture=1
Enable Drag=255
Doubleclick to Close Tab=1
New Window=1
Open New Window in Background=1
Show panel toggle=1
NavigationBar Alignment=2
NavigationBar Auto Alignment=1

[Network]
HTTP Accept Language=zh-tw,en;q=0.9
Check Local HostName=0
Enable HostName Expansion=0
Enable HostName Web Lookup=1
HostName Web Lookup Address=http://www.google.com/search?q=%s&amp;sourceid=opera&amp;num=%i&amp;ie=utf-8&amp;oe=utf-8

[Fonts]
Menu=14,4,0,0,0,0,AR PL UMing TW MBE [unknown]
Toolbar=14,4,0,0,0,0,AR PL UMing TW MBE [unknown]
Dialog=14,4,0,0,0,0,AR PL UMing TW MBE [unknown]
Panel=14,4,0,0,0,0,AR PL UMing TW MBE [unknown]
Tooltip=14,4,0,0,0,0,AR PL UMing TW MBE [unknown]
Normal=16,4,0,0,0,0,AR PL UMing TW MBE [unknown]
PRE=16,4,0,0,0,0,AR PL UKai TW MBE [unknown]

[Preferred fonts]
59=AR PL UMing TW MBE [unknown]

[Preferred fonts monospace]
59=AR PL UKai TW MBE [unknown]

[CSS Generic Font Family]
Sans-Serif=AR PL UMing TW MBE [unknown]
Serif=AR PL UKai TW MBE [unknown]</code></pre>

<p class="note">This is just a workaround and certainly not ideal, as Ming (明體) is not a Sans-Serif font. When using this setting, English language web pages don’t look very good. Some Linux distributions are more lucky — Ubuntu has two traditional Chinese gothic font (文泉驛等寬正黑 and 文泉驛正黑, monospace and not) installed by default, which are Sans-Serif, and therefore work better in this situation. That is why Nalakuvara provides an alternative default for Ubuntu users:</p>

<table class="table1">
  <caption>[Fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Browser dialog fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Dialog">opera:config#Fonts|Dialog</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser menu fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Menu">opera:config#Fonts|Menu</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser panel fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Panel">opera:config#Fonts|Panel</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser toolbar fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Toolbar">opera:config#Fonts|Toolbar</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Browser tooltip fonts for traditional Chinese</th>
      <td><a href="opera:config#Fonts|Tooltip">opera:config#Fonts|Tooltip</a></td>
      <td>12,4,0,0,0,0,Nimbus Sans L [urw]</td>
      <td>14,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[Fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Web page normal text font</th>
      <td><a href="opera:config#Fonts|Normal">opera:config#Fonts|Normal</a></td>
      <td>16,4,0,0,0,0,Nimbus Roman No9 L [urw]</td>
      <td>16,4,0,0,0,0,文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Web page &lt;pre&gt; text font</th>
      <td><a href="opera:config#Fonts|PRE">opera:config#Fonts|PRE</a></td>
      <td>16,4,0,0,0,0,Nimbus Mono L [urw]</td>
      <td>16,4,0,0,0,0,文泉驛等寬正黑 [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[Preferred fonts]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Preferred traditional Chinese font</th>
      <td>N/A</td>
      <td>Nimbus Sans L [urw]</td>
      <td>文泉驛正黑 [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[Preferred fonts monospace]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Preferred traditional Chinese monospace font</th>
      <td>N/A</td>
      <td>Nimbus Mono L [urw]</td>
      <td>文泉驛等寬正黑 [unknown]</td>
    </tr>
  </tbody>
</table>

<table class="table1">
  <caption>[CSS Generic Font Family]</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="sub">Generic CSS sans-serif font family</th>
      <td><a href="opera:config#CSSGenericFontFamily|Sans-Serif">opera:config#CSSGenericFontFamily|Sans-Serif</a></td>
      <td>Nimbus Roman No9 L [urw]</td>
      <td>文泉驛正黑 [unknown]</td>
    </tr>
    <tr>
      <th class="sub">Generic CSS serif font family</th>
      <td><a href="opera:config#CSSGenericFontFamily|Serif">opera:config#CSSGenericFontFamily|Serif</a></td>
      <td>Nimbus Mono L [urw]</td>
      <td>AR PL UKai TW MBE [unknown]</td>
    </tr>
  </tbody>
</table>

<p>Take a close look at the UI fonts and web content fonts in Figure 8. Sadly, the web content fonts are blurry and inconsistent, and the problem is much obvious than in Fedora. If you can&#39;t see what is wrong here, try comparing it with Figure 9.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-08.png" alt="Original Opera in Ubuntu 9.10" />
<p class="comment">Figure 8: The original Opera in Traditional Chinese Ubuntu 9.10. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-09.png" alt="Opera Nalakuvara in Ubuntu 9.10" />
<p class="comment">Figure 9: Opera Nalakuvara in Traditional Chinese Ubuntu 9.10. The UI fonts and preferred web content fonts are much clear and readable, and behave better when mixed with English characters.</p>

<p>Ubuntu users get the following <code>/usr/share/opera/operadefaults.ini</code> file:</p>

<pre><code>; Put any default settings here that are overridable by users

[User Prefs]
Enable Gesture=1
Enable Drag=255
Doubleclick to Close Tab=1
New Window=1
Open New Window in Background=1
Show panel toggle=1
NavigationBar Alignment=2
NavigationBar Auto Alignment=1

[Network]
HTTP Accept Language=zh-tw,en;q=0.9
Check Local HostName=0
Enable HostName Expansion=0
Enable HostName Web Lookup=1
HostName Web Lookup Address=http://www.google.com/search?q=%s&amp;sourceid=opera&amp;num=%i&amp;ie=utf-8&amp;oe=utf-8

[Fonts]
Menu=14,4,0,0,0,0,文泉驛正黑 [unknown]
Toolbar=14,4,0,0,0,0,文泉驛正黑 [unknown]
Dialog=14,4,0,0,0,0,文泉驛正黑 [unknown]
Panel=14,4,0,0,0,0,文泉驛正黑 [unknown]
Tooltip=14,4,0,0,0,0,文泉驛正黑 [unknown]
Normal=16,4,0,0,0,0,文泉驛正黑 [unknown]
PRE=16,4,0,0,0,0,文泉驛等寬正黑 [unknown]

[Preferred fonts]
59=文泉驛正黑 [unknown]

[Preferred fonts monospace]
59=文泉驛等寬正黑 [unknown]

[CSS Generic Font Family]
Sans-Serif=文泉驛正黑 [unknown]
Serif=AR PL UKai TW MBE [unknown]</code></pre>

<p class="note">It is very important to ensure UTF-8 encoding is used in the <code>.ini</code> files, especially when dealing with preferences in Traditional Chinese such as font names.</p>

<h2 id="mailproviders">Updating the default mail providers</h2>

<p>Opera by default includes some web mail service providers — the details of these are stored in <code><var>OPERA_INSTALL_PATH</var>\defaults\webmailproviders.ini</code>. By editing this file, you can comment out any that are unpopular in your locale, and add in more popular ones. Nalakuvara’s  <code><var>OPERA_INSTALL_PATH</var>\defaults\webmailproviders.ini</code> file has had several providers added in that are more popular for Taiwanese users. The full file looks like so:</p>

<pre><code>Opera Preferences version 2.1 
; Do not edit this file while Opera is running 
; This file is stored in UTF-8 encoding 
; %t = to 
; %j = subject 
; %m = body 
; %k = cc 
; %l = bcc 
; %s = full mailto URI
; i.e., %s = to=%t&amp;subject=%j&amp;body=%m&amp;cc=%k&amp;bcc=%l

;[Yandex]
;ID=4
;URL=http://mail.yandex.ru/compose?mailto=%s
;ICON=http://img.yandex.net/i/favicon.ico

;[Fastmail]
;ID=5
;URL=http://www.fastmail.fm/action/compose/?mailto=%s
;ICON=http://www.fastmail.fm/favicon.ico

[Opera Web Mail]
ID=6
URL=http://mymail.operamail.com/scripts/mail/Outblaze.mail?compose=1&amp;did=1&amp;a=1&amp;to=%t&amp;subject=%j&amp;body=%m&amp;cc=%k
ICON=http://www.opera.com/favicon.ico

;[Mail.ru] 
;ID=7 
;URL=http://win.mail.ru/cgi-bin/sentmsg?To=%t&amp;CC=%k&amp;BCC=%l&amp;Subject=%j&amp;Body=%m 
;ICON=http://img.imgsmail.ru/r/favicon.ico

[Gmail - HTML5]
ID=8
URL=https://mail.google.com/mail/?extsrc=mailto&amp;url=%s
ICON=https://mail.google.com/favicon.ico

[Gmail]
ID=9
URL=https://mail.google.com/mail/?compose=1&amp;view=cm&amp;fs=1&amp;to=%t&amp;su=%j&amp;body=%m&amp;cc=%k&amp;bcc=%l
ICON=https://mail.google.com/favicon.ico

[Hotmail]
ID=10
URL=http://mail.live.com/mail/EditMessageLight.aspx?n=&amp;to=%t&amp;cc=%k&amp;subject=%j&amp;body=%m&amp;bcc=%l
ICON=http://mail.live.com/favicon.ico

[Ymail - Generic]
ID=11
URL=http://compose.mail.yahoo.com/?To=%t&amp;Subj=%j&amp;Body=%m&amp;Cc=%k&amp;Bcc=%l
ICON=http://mail.yahoo.com/favicon.ico

[Ymail - Classic Compose + New UI]
ID=12
URL=http://us.mg1.mail.yahoo.com/mc/compose?ymv=0&amp;body=%m&amp;Subj=%j&amp;to=%t&amp;cc=%k&amp;bcc=%l
ICON=http://mail.yahoo.com/favicon.ico

[Ymail - New UI + Blocking Workaround]
ID=13
URL=http://us.mg1.mail.yahoo.com/dc/launch?sysreq=ignore&amp;action=compose&amp;login=1&amp;To=%t&amp;Subj=%j&amp;Cc=%k&amp;Bcc=%l&amp;Body=%m
ICON=http://mail.yahoo.com/favicon.ico

[Mail2000]
ID=14
URL=http://www.mail2000.com.tw/cgi-bin/genMail.pl?adr=%t&amp;content=%m&amp;subject=%j
ICON=http://www.mail2000.com.tw/favicon.ico

[PChome Mail]
ID=20
URL=http://mail.pchome.com.tw/compose_content?MailTo=%t&amp;MailSubject=%j&amp;MailCc=%k&amp;MailBcc=%l&amp;text2=%m
ICON=http://www.pchome.com.tw/favicon.ico

[Webmail@URL (wm1)]
ID=21
URL=http://wm1.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm2)]
ID=22
URL=http://wm2.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm3)]
ID=23
URL=http://wm3.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm4)]
ID=24
URL=http://wm4.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm5)]
ID=25
URL=http://wm5.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm6)]
ID=26
URL=http://wm6.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm7)]
ID=27
URL=http://wm7.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm8)]
ID=28
URL=http://wm8.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm9)]
ID=29
URL=http://wm9.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico

[Webmail@URL (wm10)]
ID=30
URL=http://wm10.url.com.tw/src/compose.php?mailbox=INBOX&amp;startMessage=1&amp;send_to=%t&amp;sed_to_cc=%k&amp;send_to_bcc=%l&amp;subject=%j&amp;body=%m
ICON=http://www.url.com.tw/images/url.ico</code></pre>

<p>Figures 10 and 11 illustrate the difference between the original Opera defail mail providers, and the Nalakuvara default mail providers.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-10.png" alt="Webmail providers list in the original Opera" />
<p class="comment">Figure 10: The webmail providers list in the original Opera.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-11.png" alt="Webmail providers list in Opera Nalakuvara" />
<p class="comment">Figure 11: The webmail providers list in Opera Nalakuvara. All these webmail services are commonly used in Taiwan.</p>

<h2 id="fastforward">Modifying the Fast Forward button behaviour</h2>

<p>The behaviour of the Fast Forward button is controlled by the <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\fastforward.ini</code> file; Nalakuvara has taken this file from Ibis, which adds more strings to trigger the Fast Forward button, and added some additional strings used in Taiwan. Here is the modified part of it:</p>

<pre><code>;Chinese (traditional and simplified)
前进
继续
翻页
下页
下頁
下篇
后页
后页&gt;
往后&gt;&gt;
下一頁
下一页=101
下一页&gt;
下一页&gt;&gt;
下一个
下一张
下一张 &gt;
下一幅
下一幅 &gt;
下一章
下一节
下一節
下一篇
后一页=90
下一步
翻下页
翻下頁
看下一页
下一页（快捷键→）
&quot;[下頁]&quot;
&quot;[下页]&quot;
&quot;[继续]&quot;
&quot;[下一頁]&quot;
&quot;[下一页]&quot;
&quot;[翻下頁]&quot;
&quot;[翻下页]&quot;
下一張 (C)
下一頁 (C)</code></pre>

<h2 id="searchengines">Modifying default search engines</h2>

<p>Default bookmarks and searches can also be modified. It certainly makes sense to modify these options just for specific locales, so for example, in Nalakuvara more search engine options (more popular search engines in Taiwan) have been added to the <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\search.ini</code> file, which only takes effect while using the Traditional Chinese Opera UI. The modified file is as follows:</p>

<pre><code>[Search Engine 1]
UNIQUEID=7A8CADE6677811DDBA4B5E9D55D89593
Name=
URL=http://www.google.com/search?q=%s&amp;sourceid=opera&amp;num=%i&amp;ie=utf-8&amp;oe=utf-8
ICON=http://redir.opera.com/favicons/google/favicon.ico
Query=
Key=g
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Verbtext=0
Position=-1
Nameid=17171
UseTLD=1

[Search Engine 2]
UNIQUEID=C62302A2FBB8E8469557BD47409F8747
Name=Yahoo!奇摩搜尋
Verbtext=0
URL=http://tw.search.yahoo.com/search?ei=&amp;fr=sfp&amp;fr2=&amp;p=%s&amp;_adv_prop=web&amp;fl=0&amp;vl=0&amp;vf=all&amp;vd=all&amp;iscqry=
ICON=http://tw.search.yahoo.com/favicon.ico
Query=
Key=ys
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 3]
UNIQUEID=8FF7B2066FB77449B62B04D1D40EF8F8
Name=Bing
Verbtext=0
URL=http://www.bing.com/search?q=%s&amp;go=&amp;form=QBLH&amp;filt=all
ICON=http://www.bing.com/favicon.ico
Query=
Key=b
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 4]
UNIQUEID=AE41FF7A5FC011DDAE47DBEF55D89593
Name=維基百科
URL=http://zh.wikipedia.org/wiki/Special:Search?search=%s
ICON=http://redir.opera.com/favicons/wikipedia/favicon.ico
Query=
Key=w
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Verbtext=0
Position=-1

&lt;!-- skip past unmodified content --&gt;

[Search Engine 26]
UNIQUEID=17488DC9AE770545B642C790CAB3C9D2
Name=Internet Archive
Verbtext=0
URL=http://web.archive.org/web/*%s
ICON=http://www.archive.org/images/logo-16.jpg
Query=
Key=ia
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 27]
UNIQUEID=829D47CC797B29459E6F38E927BABCF2
Name=全國法規資料庫法規名稱檢索
Verbtext=0
URL=http://law.moj.gov.tw/Scripts/SimpleQ.asp?rb=lname&amp;K1=%s
Query=
Key=jn
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 28]
UNIQUEID=B980F29D8FEF9A4D896C5D035DF1270D
Name=全國法規資料庫法條內容檢索
Verbtext=0
URL=http://law.moj.gov.tw/Scripts/SimpleQ1.asp?K1=%s&amp;K2=&amp;K3=&amp;K4=&amp;Fusekey=%B1%60%A5%CE%BBy%B7J&amp;rb=la
Query=
Key=j
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 29]
UNIQUEID=F290D3865FC011DD83CDD4F355D89593
Name=
URL=http://redir.opera.com/amazon/?q=%s
ICON=http://redir.opera.com/favicons/amazon/favicon.ico
Query=
Key=z
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Verbtext=0
Nameid=69678
Position=-1

[Search Engine 30]
UNIQUEID=82EB048A5FCE11DDAFCFE0AA56D89593
Name=
URL=http://redir.opera.com/ebay/?q=%s
ICON=http://redir.opera.com/favicons/ebay/favicon.ico
Query=
Key=e
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=0
Verbtext=0
Position=-1
Nameid=69679

[Search Engine 31]
UNIQUEID=2C42B3DE30288847A11B871C19A3D7E2
Name=PChome線上購物
Verbtext=0
URL=http://shopping.pchome.com.tw/?m=search&amp;f=doSearch&amp;STYPE=&amp;target=%s&amp;Submit=%A7%E4%B0%D3%AB%7E
ICON=http://shopping.pchome.com.tw/favicon.ico
Query=
Key=pch
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 32]
UNIQUEID=6EA8C2D1619F7442827906A8D25E53B0
Name=露天拍賣
Verbtext=0
URL=http://search.ruten.com.tw/search/s000.php?searchfrom=indexbar&amp;k=%s&amp;t=0
ICON=http://www.ruten.com.tw/favicon.ico
Query=
Key=rb
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 33]
UNIQUEID=77C25A05B0E75A4B81DBE19E88644DC5
Name=Yahoo!奇摩拍賣
Verbtext=0
URL=http://tw.search.bid.yahoo.com/search/ac?ei=BIG-5&amp;p=%s
ICON=http://tw.bid.yahoo.com/favicon.ico
Query=
Key=yb
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 34]
UNIQUEID=A56370F8D5684A4A82184AA4B796FFCD
Name=射手網字幕
Verbtext=0
URL=http://shooter.cn/sub/?searchword=%s&amp;x=0&amp;y=0
ICON=http://shooter.cn/favicon.ico
Query=
Key=sub
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 35]
UNIQUEID=F182FB89FD59FB4BAB0CD8C71E2C3234
Name=海盜灣 BT
Verbtext=0
URL=http://thepiratebay.org/search/%s/0/99/0
ICON=http://thepiratebay.org/favicon.ico
Query=
Key=tpb
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 36]
UNIQUEID=016F899833096540B36B4F52569C723A
Name=Mininova BT
Verbtext=0
URL=http://www.mininova.org/search/?search=%s
ICON=http://mnstat.com/images/favicon.ico
Query=
Key=m
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0

[Search Engine 37]
UNIQUEID=AF5D5F3752D1F84BB2F3D54F9EDD4999
Name=isoHunt BT
Verbtext=0
URL=http://isohunt.com/torrents.php?ihq=%s
ICON=http://isohunt.com/favicon.ico
Query=
Key=ih
Is post=0
Has endseparator=0
Encoding=big5
Search Type=0
Position=-1
Nameid=0
Deleted=0</code></pre>

<p>Figures 11 and 12 show the difference between the default search engines list in standard Opera, and the default search engines list in Nalakuvara. If you use Opera Nalakuvara with an UI other than Traditional Chinese, you will not see these.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-12.png" alt="Search engines list in the original Opera" />
<p class="comment">Figure 12: The search engines list in the original Opera.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/314-opera-nalakuvara-customized-taiwanese-browser-part-2-tweaking-opera-defa/02-13.png" alt="Search engines list in Opera Nalakuvara" />
<p class="comment">Figure 13: The search engines list in Opera Nalakuvara.</p>

<p class="note"><code>search.ini</code> does more than just defining default searches. I will talk about this later in part three of my series.</p>

<h2 id="bookmarks">Modifying default bookmarks</h2>

<p>Default bookmarks are locale-based, too. The <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\bookmarks.adr</code> file for Traditional Chinese UI users strips out entries that are unpopular in that locale, and adds important Traditional Chinese resources about Opera — the modified Nalakuvara file looks like so:</p>

<pre><code>Opera Hotlist version 2.0
Options: encoding = utf8, version=3

#FOLDER
ID=11
NAME=回收桶
TRASH FOLDER=YES
UNIQUEID=4E1601F6F30511DB9CA51FD19A7AAECA

-

#FOLDER
ID=12
NAME=Opera
UNIQUEID=826CF25AF11C491899711FC93513A4F4

#URL
ID=13
NAME=Download Opera
URL=http://www.opera.com/download/
VISITED=1252173878
UNIQUEID=6346265318C548DC831B7DF6D8EBB577

#URL
ID=14
NAME=My Opera Community
URL=http://my.opera.com/
ON PERSONALBAR=YES
PERSONALBAR_POS=1
UNIQUEID=6081957B53904ED6BAD072D157C8D408
ICONFILE=my.opera.com.ico

#URL
ID=15
NAME=Opera Web Mail
URL=http://www.operamail.com/
UNIQUEID=CF79297898B24364A89ED412D9B43B89

#URL
ID=16
NAME=Support Desk
URL=http://www.opera.com/support/
VISITED=1252173859
UNIQUEID=BDBBEF1FCB2844A980752782E0D9670C

#URL
ID=17
NAME=Opera Nalakuvara 三太子
URL=http://jedi.org/p4/Opera/pub/
CREATED=1252173550
DESCRIPTION=
UNIQUEID=D4A427CF2F790642909162DED1FCA7D8

#URL
ID=18
NAME=Opera 官方論壇正體中文版
URL=http://my.opera.com/tradchinese/forums/
CREATED=1252173758
DESCRIPTION=
UNIQUEID=115491135268A74C8E5B2E60C98C13C2

#URL
ID=19
NAME=Opera第一手最新消息繁體中文版
URL=http://my.opera.com/ting0619/blog/
CREATED=1252173839
DESCRIPTION=
UNIQUEID=AFC07AA46717884BB243A755BD59228A</code></pre>

<p>Please also notice that <code>bookmarks.adr</code> has to be in <strong>UTF-8</strong> encoding, too.</p>

<h2 id="useragent">User agent modification</h2>

<p>Opera has a built-in function to spoof the <strong>User Agent</strong> string. This is because some web sites reject Opera for no good reason — the sites would work fine in Opera, except that they arbitrarily block Opera based on User Agent strings. Once Opera spoofs itself as Firefox or Internet Explorer, everything usually works fine.</p>

<p>I can use this functionality to modify the user agents Opera can spoof as. Each time Opera is running, it checks and downloads an up-to-date spoof list to <code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\override_downloaded.ini</code>. Editing this file is a waste of time, since it is always overwritten. All manual site preferences (including spoof User Agent strings) are stored at <code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\override.ini</code>, so that is our true target. This file finally looks like so:</p>

<pre><code>Opera Preferences version 2.1
; Do not edit this file while Opera is running
; This file is stored in UTF-8 encoding

[Overrides]
soweb.kcg.gov.tw
web2.cc.ntu.edu.tw

[soweb.kcg.gov.tw]
User Agent|Spoof UserAgent ID=5

[web2.cc.ntu.edu.tw]
User Agent|Spoof UserAgent ID=5</code></pre>

<p>The numeric value of <code>User Agent|Spoof UserAgent ID</code> means:</p>
<ul>
  <li><code>1</code>: Identify as Opera, ie, something like <code>Opera/9.80 (Windows NT 5.1; U; zh-tw) Presto/2.2.15 Version/10.00</code> for 10.00, <code>Opera/9.80 (Windows NT 5.1; U; zh-tw) Presto/2.2.15 Version/10.10</code> for 10.10, and <code>Opera/9.80 (Windows NT 5.1; U; en) Presto/2.5.20 Version/10.50</code> for 10.50 Labs snapshot</li>
  <li><code>2</code>: Identify as Firefox, ie, something like <code>Mozilla/5.0 (Windows NT 5.1; U; zh-tw; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 10.00</code></li>
  <li><code>3</code>: Identify as Internet Explorer, ie, something like <code>Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; zh-tw) Opera 10.00</code></li>
  <li><code>4</code>: Spoof as Firefox, ie, something like <code>Mozilla/5.0 (Windows NT 5.1; U; zh-tw; rv:1.8.1) Gecko/20061208 Firefox/2.0.0</code></li>
  <li><code>5</code>: Spoof as Internet Explorer, ie, something like <code>Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; zh-tw)</code></li>
</ul>

<p>Those listed sites are from user reports. I will talk about these later in part four, when we look at user feedback.</p>

<h2 id="summary">Summary</h2>

<p>In this article, I looked at implementing some of the Nalakuvara customizations, including modifications to opera:config, and changes to default mail providers, fast forward behaviour, search engines, bookmarks and user agent spoofing. The next article in the series will cover the creation of the third party code present in Nalakuvara, including UserJS and more.</p>
          
