Title: Opera Nalakuvara, customized Taiwanese browser — Part 3: Third party components and menus
----
Date: 2010-01-27 11:37:05
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

<p>In the previous parts in the series, we discussed <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/">initial planning and customizing the installation procedure</a>, and <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-2/">tweaking Opera&#39;s default settings</a>. This is great, and these parts of the procedure have already provided a great number of useful customizations.</p>

<p>But there are some things Opera can&#39;t do by itself. As mentioned in the <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#guideline">Guidelines</a> section in Part 1, we have no choice but to use third party components to achieve some functions. The components I used within Nalakuvara are as follows:</p>
<ul>
  <li><strong>User CSS (user stylesheets)</strong>: Put in <code><var>OPERA_INSTALL_PATH</var>\styles\user\</code> by default</li>
  <li><strong>User JavaScript (UserJS)</strong>: Disabled by default</li>
  <li><strong>Plug-Ins</strong>: Put in <code><var>OPERA_INSTALL_PATH</var>\program\plugins\</code> by default</li>
  <li><strong>Java Applet</strong>: Requires Java Runtime Environment</li>
</ul>

<p>In this article, I will show how these components were used in Nalakuvara. The contents are as follows:</p>

<ul>
  <li><a href="#user_css">User CSS</a></li>
  <li><a href="#userjs">User JavaScript</a>
    <ul>
      <li><a href="#adblockplus">Adblock Plus</a></li>
      <li><a href="#autosizer2">Autosizer 2</a></li>
      <li><a href="#google">Customize Google</a></li>
      <li><a href="#hanconvert">HanConvert</a></li>
      <li><a href="#htmlruby">HTML Ruby</a></li>
      <li><a href="#openinbackground">Open in Background With Long Press</a></li>
      <li><a href="#textareabackup">Textarea Backup</a></li>
    </ul>
  </li>
  <li><a href="#plugins">Plugins</a></li>
  <li><a href="#java_applets">Java Applets</a></li>
  <li><a href="#menus_toolbars">Altering menus and toolbars</a>
    <ul>
      <li><a href="#dictionary_translation">Dictionary and translation features</a></li>
      <li><a href="#encoding">A note on encoding</a></li>
    </ul>
  </li>
</ul>



<h2 id="user_css">User CSS</h2>

<p>Opera has already achieved some leading support CSS-related features, such as <strong>Fit to Width</strong>, and support for all the CSS3 selectors. <a href="http://www.opera-usb.com/">Opera@USB</a> includes some handy advertisement blocking functions purely via CSS.</p>

<p>User CSS can be enabled and disabled on demand via the Opera View menu, or through adding a button to do it into your toolbars. Adding custom buttons to enable/disable user CSS however is quite difficult. Opera&#39;s internal command &quot;<code>Select user CSS file</code>&quot; targets a particular CSS file by its order in the User CSS path. In order to make custom buttons that apply User CSS on, we have to manipulate the CSS file order in the path.</p>

<p>On Windows, files are arranged by filename. In Nalakuvara I have taken CSS files from Opera@USB and renamed them with low numbers at the start (eg <code>000_Antiflash.css</code> and <code>000_bantiad.css</code>) to make sure they are the first two files. On Linux or FreeBSD, however, it doesn&#39;t work that way, so sadly these buttons work only on Windows. I will talk about these buttons later, in the &quot;<a href="#menu">Altering Menus and Toolbars</a>&quot; section.</p>

<p>My <code>000_Antiflash.css</code> stylesheet blocks all Flash content in a web page:</p>

<pre><code>@charset &quot;UTF-8&quot;;
/*
Name: Flash Blocker
Version: 1 08.2005
Beschreibung: Flash und Shockwave Blocker Version 12.06
*/

object[classid=&quot;clsid:D27CDB6E-aE6D-11cf-96B8-444553540000&quot;],
object[classid=&quot;clsid:166B1BCA-3F9C-11CF-8075-444553540000&quot;],
object[type=&quot;application/x-shockwave-flash&quot;],
embed[type=&quot;application/x-shockwave-flash&quot;],
embed[type=&quot;application/x-director&quot;],
embed[quality]
embed[src$=&quot;.swf&quot;]
{display: none !important;}</code></pre>

<p><code>000_bantiad.css</code> blocks particular image sizes from appearing on a web page:</p>

<pre><code>@charset &quot;UTF-8&quot;;
/*
Name: Grafik Blocker
Version: 1
Beschreibung: Grafik Blocker
*/

[height=&quot;60&quot;][width=&quot;468&quot;], [height=&quot;60px&quot;][width=&quot;468px&quot;],
[height=&quot;31&quot;][width=&quot;88&quot;], [height=&quot;31px&quot;][width=&quot;88px&quot;],
[height=&quot;336&quot;][width=&quot;280&quot;], [height=&quot;336px&quot;][width=&quot;280px&quot;],
[height=&quot;300&quot;][width=&quot;250&quot;], [height=&quot;300px&quot;][width=&quot;250px&quot;],
[height=&quot;250&quot;][width=&quot;250&quot;], [height=&quot;250px&quot;][width=&quot;250px&quot;],
[height=&quot;400&quot;][width=&quot;240&quot;], [height=&quot;400px&quot;][width=&quot;240px&quot;],
[height=&quot;120&quot;][width=&quot;240&quot;], [height=&quot;120px&quot;][width=&quot;240px&quot;],
[height=&quot;60&quot;][width=&quot;234&quot;], [height=&quot;60px&quot;][width=&quot;234px&quot;],
[height=&quot;150&quot;][width=&quot;180&quot;], [height=&quot;150px&quot;][width=&quot;180px&quot;],
[height=&quot;600&quot;][width=&quot;160&quot;], [height=&quot;600px&quot;][width=&quot;160px&quot;],
[height=&quot;125&quot;][width=&quot;125&quot;], [height=&quot;125px&quot;][width=&quot;125px&quot;],
[height=&quot;600&quot;][width=&quot;120&quot;], [height=&quot;600px&quot;][width=&quot;120px&quot;],
[height=&quot;90&quot;][width=&quot;120&quot;], [height=&quot;90px&quot;][width=&quot;120px&quot;],
[height=&quot;60&quot;][width=&quot;120&quot;], [height=&quot;60px&quot;][width=&quot;120px&quot;]
{display: none !important;}</code></pre>

<p>This is an excellent demonstration of CSS attribution selectors.</p>

<h2 id="userjs">User JavaScript</h2>

<p class="note">If you are customizing the <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha</a> snapshot, you will find that the JavaScript is a bit unstable in part. Unfortunately this means that several of the Nalakuvara User JavaScript additions will not work. This will be fixed in later 10.5 releases.</p>

<p><strong>User JavaScript</strong> allows us to add much more functionality, although because of compatibility and security concerns it is disabled by default. To enable the User JavaScript feature, you need to tweak the following preferences:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="4">[User Prefs]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Feature</th>
      <th>opera:config Link</th>
      <th>Opera Default</th>
      <th>Nalakuvara Tweak</th>
    </tr>
    <tr>
      <th class="sub">Enable User JavaScript</th>
      <td><a href="opera:config#UserPrefs|UserJavaScript">opera:config#UserPrefs|UserJavaScript</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Always load User JavaScript even on web pages without &lt;script&gt;</th>
      <td><a href="opera:config#UserPrefs|AlwaysLoadUserJavaScript">opera:config#UserPrefs|AlwaysLoadUserJavaScript</a></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th class="sub">Do not enable User JavaScript on HTTPS connection</th>
      <td><a href="opera:config#UserPrefs|UserJavaScriptonHTTPS">opera:config#UserPrefs|UserJavaScriptonHTTPS</a></td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th class="sub">Specify User JavaScript directory</th>
      <td><a href="opera:config#UserPrefs|UserJavaScriptFile">opera:config#UserPrefs|UserJavaScriptFile</a></td>
      <td></td>
      <td>userjs</td>
    </tr>
  </tbody>
</table>

<p>For example, the <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\operaprefs.ini</code> file on Windows should look like so:</p>

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
<strong>User JavaScript=1
Always Load User JavaScript=1
User JavaScript on HTTPS=0
User JavaScript File=userjs</strong>

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

<p><code>User JavaScript on HTTPS</code> remains disabled for security concerns. If you have to enable this preference, please, think about it carefully, and warn users too.</p>

<p><code>User JavaScript File</code> can be an absolute or relative path. It is wise to let users choose where to put their own user JavaScript files, However it is convenient to predefine a relative path here. The tricky part is that the working directory is different on Windows and Linux/FreeBSD. On Windows, Opera&#39;s working directory is where <code>opera.exe</code> is located, ie <code><var>OPERA_INSTALL_PATH</var></code>. On Linux and FreeBSD, Opera&#39;s working directory is user&#39;s home directory, i.e., <code>~</code>. The <code>User JavaScript File</code> relative path is related to Opera&#39;s working directory, which means <code>userjs</code> is at <code><var>OPERA_INSTALL_PATH</var>\userjs\</code> on Windows, and <code>~/userjs/</code> on Linux or FreeBSD.</p>

<p>Nalakuvara chooses User JavaScript based on my <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#guideline">guidelines</a> carefully. Here is my final list:</p>

<ul>
  <li><a href="http://my.opera.com/Lex1/blog/adblock-for-opera-analogue-of-adblock-plus-element-hiding-helper">AdBlock Plus</a> to block web elements using CSS selector.</li>
  <li>Autosizer 2 (URL no longer active) to resize large images</li>
  <li><a href="http://cg.smir.de/">CustomizeGoogle</a> to customize Google services (analogous to the Firefox extension &quot;CustomizeGoogle&quot;)</li>
  <li><a href="http://Jedi.org/p4/Opera/pub/Chinese.Translation/">HanConvert</a> to convert characters between Traditional Chinese and Simplified Chinese</li>
  <li><a href="http://my.opera.com/kailapis/blog/html-ruby">HTML Ruby</a> to expand W3C Ruby Annotation support in Opera</li>
  <li><a href="http://lexi.ucoz.ru/index/0-5">Open in Background with Long Press</a> to allow opening of links in a new tab in the background via long mouse presses</li>
  <li><a href="http://userscripts.org/scripts/show/7671">Textarea Backup</a> with <a href="http://www.howtocreate.co.uk/operaStuff/userJavaScript.html#gmfunctions">Emulate GM functions</a> to backup text input in &lt;textarea&gt; elements automatically.</li>
</ul>

<h3 id="adblockplus">Adblock Plus</h3>

<p>The pure-JavaScript version of <strong>AdBlock Plus</strong> uses CSS attribute selectors and optional CSS3 <code>nth-child</code> selectors to target elements to block. All &quot;blocker&quot; CSS rules are stored in cookies. All AdBlock Plus functions can be accessed via Toolbar buttons (which will be discussed in the &quot;<a href="#menu">Altering Menus and Toolbars</a>&quot; section) and hotkeys, which are as follows:</p>

<ul>
  <li><kbd>Alt</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd>: block web elements with CSS3 <code>nth-child</code> selector;</li>
  <li><kbd>Alt</kbd>-<kbd>Shift</kbd>-<kbd>W</kbd>: block web elements without CSS3 <code>nth-child</code> selector;</li>
  <li><kbd>Alt</kbd>-<kbd>Shift</kbd>-<kbd>U</kbd>: revert previous blocked web elements;</li>
  <li><kbd>Alt</kbd>-<kbd>Shift</kbd>-<kbd>L</kbd>: revert last blocked web elements;</li>
  <li><kbd>Alt</kbd>-<kbd>Shift</kbd>-<kbd>E</kbd>: edit blocker CSS rules manually.</li>
</ul>

<h3 id="autosizer2">Autosizer 2</h3>

<p><strong>Autosizer 2</strong> lets users click on large images to resize them to fit within the browser window size, and click again to restore them to their original size. It also uses cookies to store this resize setting for each image.</p>

<h3 id="google">Customize Google</h3>

<p><strong>CustomizeGoogle</strong> uses a separate <code>customizegoogle_prefs.js</code> file to adjust its behavior. Here are the predefined options in Nalakuvara:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="3">Google Web Search /* webtab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">web.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">web.search-links</th>
      <td>Add links from other search engines</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">web.suggest</th>
      <td>Enable Google suggest</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">web.focus</th>
      <td>Set input focus at search field</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">web.counter</th>
      <td>Add counter on search results</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">web.filter</th>
      <td>Enable filter rules</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">web.history</th>
      <td>Add links to waybackmachine.org</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">web.removeclicktrack</th>
      <td>Remove Google&#39;s click track</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">web.auto-page</th>
      <td>Display Next search results continuous</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">web.favicons</th>
      <td>Display favicons of search results</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Images Search /* imagestab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">images.image-links</th>
      <td>Add links from other images search engines</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">images.rewrite-links</th>
      <td>Rewrite links of original images and web pages</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">images.auto-page</th>
      <td>Display next search results continuously</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Groups /* groupstab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">groups.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google News /* newstab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">news.news-links</th>
      <td>Add Links from other news search engines</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">news.filter</th>
      <td>Enable filter rules</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">news.removeclicktrack</th>
      <td>Remove Google&#39;s click track</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Products Search /* froogletab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">froogle.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">froogle.products-links</th>
      <td>Add links from other products search engines</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Answers /* answerstab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">answers.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google print /* printtab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">print.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">print.restore-menu</th>
      <td>Restore right-click menu</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">print.book-links</th>
      <td>Add links from other book sites</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">GMail /* gmailtab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">gmail.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">gmail.secure</th>
      <td>Secure mode (switch to <code>https://</code> connection)</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">gmail.hidespam</th>
      <td>Hide spam-counter</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">gmail.hidechat</th>
      <td>Hide &quot;Quick contacts box&quot;</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">gmail.hideinvite</th>
      <td>Hide &quot;invite box&quot;</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">gmail.monospace</th>
      <td>Display mail content using monospace font</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Calendar /* calendartab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">calendar.secure</th>
      <td>Secure mode (switch to <code>https://</code> connection)</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Local /* localtab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">local.remove-ads</th>
      <td>Remove advertisements</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Docs &amp; Spreadsheets /* docstab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">docs.secure</th>
      <td>Secure mode (switch to <code>https://</code> Connection)</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Videos Search /* videotab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">video.video-links</th>
      <td>Add links from other videos search engines</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Reader /* readertab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">reader.secure</th>
      <td>Secure Mode (Switch to <code>https://</code> Connection)</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Cache /* cachetab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">cache.continue</th>
      <td>Rewrite links to Google cache</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Blog Search /* blogtab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">blogs.blog-links</th>
      <td>Add links from other blogs&#39; search engines</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">blogs.removeclicktrack</th>
      <td>Remove Google&#39;s click track</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Google Web History /* historytab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">history.secure</th>
      <td>Secure Mode (Switch to <code>https://</code> Connection)</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Privacy /* privacytab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">misc.anonymizeUID</th>
      <td>Anonymous Google cookie UID</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">misc.removeGoogleAnalytics</th>
      <td>Remove google analytics</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Preferences /* Preferencestab */ (<code>cookies.enableDefaultPreferences</code> has to be <code>true</code> to take effect)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">cookies.enableDefaultPreferences</th>
      <td>Predefine Google preferences</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.enableInterfaceLanguage</th>
      <td>Specify interface language</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.interfaceLanguage</th>
      <td>Interface language (<code>cookies.enableInterfaceLanguage</code> has to be <code>true</code> to take effect)</td>
      <td>zh-TW</td>
    </tr>
    <tr>
      <th class="sub">cookies.enableSearchLanguage</th>
      <td>Specify search language</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.searchAnyOrSelected</th>
      <td>Search any language or only selected languages (<code>cookies.enableSearchLanguage</code> has to be <code>true</code> to take effect)</td>
      <td>all</td>
    </tr>
    <tr>
      <th class="sub">cookies.searchLanguage</th>
      <td>Specify Languages to Search (<code>cookies.searchAnyOrSelected</code> has to be <code>selected</code> to take effect)</td>
      <td>lang_zh-TW</td>
    </tr>
    <tr>
      <th class="sub">cookies.enableSafeSearch</th>
      <td>Enable safeSearch</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.SafeSearch</th>
      <td>SafeSearch option (<code>cookies.enableSafeSearch</code> has to be <code>true</code> to take effect)
        <ul>
          <li><code>1</code>: Strict - filter images and language</li>
          <li><code>&quot;empty&quot;</code>: Default - filter images only</li>
          <li><code>4</code>: None - do not filter at all</li>
        </ul>
      </td>
      <td>4</td>
    </tr>
    <tr>
      <th class="sub">cookies.enableResultsPerPage</th>
      <td>Specify results per page</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.ResultsPerPage</th>
      <td>Results per page (<code>cookies.enableResultsPerPage</code> has to be <code>true</code> to take effect)</td>
      <td>10</td>
    </tr>
    <tr>
      <th class="sub">cookies.enableResultsWindow</th>
      <td>Specify results window</td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">cookies.OpenSearchResultsInNewWindow</th>
      <td>Open search results in new window (<code>cookies.enableResultsWindow</code> has to be <code>true</code> to take effect)</td>
      <td>false</td>
    </tr>
  </tbody>
  </table>
  <table>
  <thead>
    <tr>
      <th colspan="3">Filter /* filtertab */</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">misc.filterlist</th>
      <td>Filter rules</td>
      <td></td>
    </tr>
  </tbody>
</table>

<p class="note">Nalakuvara prompts users to change these values upon installation.</p>

<h3 id="hanconvert">HanConvert</h3>

<p><strong>HanConvert</strong> is not a mature solution yet — it can&#39;t translate between Traditional Chinese and Simplified Chinese yet. It can however do character-level conversion between these two languages. The next step in the future will be improving it to phrase level conversion, and later on perhaps, full translation.</p>

<p>HanConvert can be accessed via Toolbar buttons, which will be discussed later, in the &quot;<a href="#menu">Altering Menus and Toolbars</a>&quot; section. There is also another User JavaScript file that enables language conversion automatically for all web pages; this is undesirable as it doesn&#39;t go along with Opera&#39;s clean nature.</p>

<h3 id="htmlruby">HTML Ruby</h3>

<p>Opera follows W3C web standards in general, although it fails on <a href="http://www.w3.org/TR/ruby/">W3C Ruby annotation</a>. <strong>HTML Ruby</strong> fills this gap via JavaScript and CSS — it comes with a separate <code>ruby.settings.js</code> file to adjust its behaviour:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="3">HtmlRubySettings (<code><var>OPTION</var>: <var>VALUE</var>,</code>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">rubyTextSize</th>
      <td>The size of ruby text (The size of Ruby Base is <code>&#39;1em&#39;</code>)</td>
      <td>&#39;.55em&#39;</td>
    </tr>
    <tr>
      <th class="sub">maxPageLength</th>
      <td>Maximum page length to force closing tags (to prevent slowing down)
        <ul>
          <li><code>0</code>: Do not close tags at all</li>
          <li><code>-1</code>: Always close tags</li>
        </ul>
      </td>
      <td>-1</td>
    </tr>
    <tr>
      <th class="sub">spaceRubyText</th>
      <td>Space Ruby text as tight as possible</td>
      <td>true</td>
    </tr>
    <tr>
      <th class="sub">showNotice</th>
      <td>Show notice via <code>opera.postError</code></td>
      <td>false</td>
    </tr>
    <tr>
      <th class="sub">processDynamicContent</th>
      <td>Process dynamic content</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<p class="note">Nalakuvara prompts users to change these values upon installation.</p>

<h3 id="openinbackground">Open in Background with Long Press</h3>

<p><strong>Open in Background with Long Press</strong> is for those who do not use mouse gestures but want similar functionality, and it works only on actual &lt;a&gt; links. Sadly, some users reported that this User JavaScript slows down web games on Facebook. Nalakuvara highlights this issue to users before installing it, so that if the user is unhappy with this side effect, they can choose not to install the User Javacript.</p>

<h3 id="textareabackup">Textarea Backup</h3>

<p><strong>Textarea Backup</strong> is a Greasemonkey User JavaScript, and therefore needs <strong>Emulate GM functions</strong> to work in Opera. There is one variable in its <code>textareabackup.js</code>:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="3">textareabackup.js (<code>var <var>OPTION</var> = <var>VALUE</var>;</code>) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Options</th>
      <th>Description</th>
      <th>Nalakuvara&#39;s predefined value</th>
    </tr>
    <tr>
      <th class="sub">shelfLife</th>
      <td>The duration that backups should be stored for, in seconds.</td>
      <td>3600</td>
    </tr>
  </tbody>
</table>

<p>Again, Nalakuvara prompts users to change these values upon installation.</p>

<p class="note">Remember: If the User JavaScripts above are installed, you can enable and tweak their preferences in <code>operaprefs.ini</code>.</p>

<h2 id="plugins">Plugin</h2>

<p>There is only one plugin used in Nalakuvara, and it is only available on Windows: <a href="http://Jedi.org/p4/Opera/pub/npie_opera/">npviewinie</a>. This provides the functionality of the &quot;IE Tab&quot;, rendering web pages using IE&#39;s trident engine without leaving Opera, (this is analogous to the Firefox &quot;IE Tab&quot; extension).</p>

<p>The core of <strong>npviewinie</strong> is a <code>npviewinie.dll</code>, which was placed in <code><var>OPERA_INSTALL_PATH</var>\program\plugins\</code> or anywhere listed in the <a href="opera:config#UserPrefs|PluginPath">opera:config#UserPrefs|PluginPath</a> preference. I then embedded an <code>npviewinie</code> object using an <code>&lt;embed&gt;</code> tag with an <code>type=&quot;application/viewinie&quot;</code> attribute. This, too, could be performed via a Toolbar button, which will be discussed later, in the &quot;<a href="#menu">Altering Menus and Toolbars</a>&quot; section. There is also a seperate <code>Autorender.in.IE.js</code> to load listed web pages with the <code>npviewinie</code> object automatically. This <code>Autorender.in.IE.js</code> should be in the <strong>User JavaScript</strong> path, with related preferences enabled to take effect.</p>

<p class="note"><strong>npviewinie</strong> might not be usable in Windows Vista and Windows 7 due to <strong>Data Execution Prevention (DEP)</strong>. The workaround is to turn DEP off with the following command line entry:</p>

<pre><code>bcdedit /set nx alwaysoff</code></pre>

<p>Users have to reboot their system for this to take effect. With DEP disabled, other security issues might be raised too, so this is by no means a foolproof solution. This information is revealed to users, too.</p>

<p class="note">If you are customizing the <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha</a> snapshot, you&#39;ll find that due to unstable JavaScript (as mentioned earlier), these <strong>npviewinie</strong> buttons will not work properly. This will be fixed in later 10.5 releases.</p>

<h2 id="java_applets">Java Applets</h2>

<p class="note">If you are customizing the <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha</a> snapshot, you&#39;ll find that this doesn&#39;t work, as the build does not have Java support included.</p>

<p><strong>Java Applet</strong>s, on the other hand, provide a cross-platformed solution, which might be slower but works just fine. If users do not have a JRE installed beforehand, Opera can prompt them to install JRE at the first run of any Java Applet. On some platforms users have to install JRE through the system&#39;s package management system. On Ubuntu, for example, one has to install the <strong>sun-java6-bin</strong> package via the <strong>Synaptic Package Manager</strong> to make Java Applet work.</p>

<p>Nalakuvara uses the ZTerm Applet (URL no longer active) to handle <code>telnet://</code> and <code>ssh://</code> protocols, which are necessary for telnet-based BBS. There are two different ways to include this third party component into Nalakuvara: install files locally, or use the applet page provided by the ZTerm Applet project. Either way, the ZTerm Applet stores its preferences in a <code>.ztermrc</code> file. This file is located at <code>%USERPROFILE%</code> on Windows, and at <code>~</code> on Linux/FreeBSD.</p>

<p class="note">The applet page provided by the ZTerm Applet project was no longer provide applet service due to policy issue. However, the ZTerm Applet files are still available. You could upload them to somewhere else to use remotely.</p>

<p>By default, the ZTerm Applet uses IE as an external browser on Windows, and Firefox on Linux/FreetdBtdSD. You can predefine it to Opera by editing <code>.ztermrc</code>:</p>

<pre><code>external-browser-command::<strong>opera</strong> %u</code></pre>

<p>On Linux, you can tweak ZTerm Applet more to make it look better:</p>

<pre><code>external-browser-command::opera %u
<strong>font.antialias::true
font.family::AR PL UMing TW MBE
font.vertical-gap::1
locale.language::en
use-system-look-and-feel::true</strong></code></pre>
<p>On Ubuntu, again, there is 文泉驛等寬正黑 font for better look:</p>
<pre><code>external-browser-command::opera %u
font.antialias::true
font.family::<strong>文泉驛等寬正黑</strong>
font.vertical-gap::1
locale.language::en
use-system-look-and-feel::true</code></pre>

<p>The applet page (local or remote) can be accessed via bookmarks, bookmarklets or toolbar buttons. I prefer using toolbar buttons; we will talk about this in the next section.</p>

<h2 id="menus_toolbars">Altering menus and toolbars</h2>

<p>With 3rd party components installed, there should be a ways to conveniently access them. Toolbar buttons are one of the best practical ways. New features (buttons) could be hidden by default, preserving Opera&#39;s default UI layout; users can also remove unwanted features, and revert them back easily.</p>

<p>Customized Toolbar buttons are stored in the <code>[Customize Toolbar Custom.content]</code> section of <code>standard_toolbar.ini</code>:</p>

<pre><code>[Customize Toolbar Custom.content]
Button0, &quot;訂閱源料&quot;=&quot;Go to page, &quot;javascript:void(function (){subscriptions = [];linksList = document.getElementsByTagName(&#39;link&#39;);for ( i = 0; i &lt; linksList.length; i++ ){ type = linksList[i].type;if ( type == &#39;application/rss+xml&#39; || type == &#39;application/atom+xml&#39; || type == &#39;application/rdf+xml&#39; ){ subscriptions.push( { &#39;title&#39;:linksList[i].title, &#39;href&#39;:linksList[i].href } );}}if ( subscriptions.length == 0 ) return;str = &#39;你要訂閱哪個源料？請輸入編號\n&#39;;for ( i = 0; i &lt; subscriptions.length; i++ ){str += i + &#39;: &#39; + subscriptions[i].title + &#39;\n&#39;;}str = str.substr( 0, str.length - 1 );ret = prompt( str );if ( ret &lt; 0 || ret &gt;= subscriptions.length ) return;document.location.href = &#39;feed://&#39; + subscriptions[ret].href;})()&quot;, 1, &quot;以桌面軟體訂閱 feed: 協定的源料&quot;, &quot;RSS&quot;&quot;
Button1, &quot;Flash Blocker&quot;=&quot;Select user CSS file, 0, , &quot;Flash Blocker 啟用中&quot;, &quot;Transfer Loading&quot; &gt; Deselect user CSS file, 0, , &quot;Flash Blocker 已停用&quot;, &quot;Transfer Failure&quot;&quot;
Button2, &quot;Grafik Blocker&quot;=&quot;Select user CSS file, 1, , &quot;Grafik Blocker 啟用中&quot;, &quot;Transfer Loading&quot; &gt; Deselect user CSS file, 1, , &quot;Grafik Blocker 已停用&quot;, &quot;Transfer Failure&quot;&quot;
Button3, &quot;依據 nth-child 結構阻擋網頁元素&quot;=&quot;Go to page, &quot;javascript:navigator.ujs_adblock.block()&quot;, , &quot;依據 nth-child 結構阻擋網頁元素&quot;, &quot;Delete&quot;&quot;
Button4, &quot;阻擋網頁元素&quot;=&quot;Go to page, &quot;javascript:navigator.ujs_adblock.block(true)&quot;, , &quot;阻擋網頁元素&quot;, &quot;Delete&quot;&quot;
Button5, &quot;還原被擋掉的網頁元素&quot;=&quot;Go to page, &quot;javascript:navigator.ujs_adblock.unblock()&quot;, , &quot;還原被擋掉的網頁元素&quot;, &quot;Mail Redirected&quot;&quot;
Button6, &quot;還原前一個擋掉的網頁元素&quot;=&quot;Go to page, &quot;javascript:navigator.ujs_adblock.unblock(true)&quot;, , &quot;還原前一個擋掉的網頁元素&quot;, &quot;Mail Redirected&quot;&quot;
Button7, &quot;手動輸入要擋掉的 CSS 選擇符&quot;=&quot;Go to page, &quot;javascript:navigator.ujs_adblock.edit()&quot;, , &quot;手動輸入要擋掉的 CSS 選擇符&quot;, &quot;Window Mail Compose Icon&quot;&quot;
Button8, &quot;View in IE Tab&quot;=&quot;Go to page, &quot;javascript:(function () { if( !location.href || location.href.match(/^(javascript|about|opera):/i) ) { return; } var w = window.open(); w.document.write(&#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39; + (document.title?document.title:location.href).replace(/&lt;/,&#39;&amp;lt;&#39;) + &#39; - view in ie&lt;\/title&gt;&lt;\/head&gt;&lt;body&gt;&lt;div style=\&#39;position:absolute;top:0;left:0;right:0;bottom:0;\&#39;&gt;&lt;embed type=\&#39;application\/viewinie\&#39; width=\&#39;100&#39;+String.fromCharCode(37)+&#39;\&#39; height=\&#39;100&#39;+String.fromCharCode(37)+&#39;\&#39; param-location=\&#39;&#39; + window.location.href + &#39;\&#39;&gt;&lt;\/embed&gt;&lt;\/div&gt;&lt;\/body&gt;&lt;\/html&gt;&#39;); })();&quot;, , &quot;View in IE&quot;, &quot;View&quot;&quot;
Button9, &quot;View in IE Same Tab&quot;=&quot;Go to page, &quot;javascript:(function () { if( !location.href || location.href.match(/^(javascript|about|opera):/i) ) { return; } document.write(&#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39; + (document.title?document.title:location.href).replace(/&lt;/,&#39;&amp;lt;&#39;) + &#39; - view in ie&lt;\/title&gt;&lt;\/head&gt;&lt;body&gt;&lt;div style=\&#39;position:absolute;top:0;left:0;right:0;bottom:0;\&#39;&gt;&lt;embed type=\&#39;application\/viewinie\&#39; width=\&#39;100&#39;+String.fromCharCode(37)+&#39;\&#39; height=\&#39;100&#39;+String.fromCharCode(37)+&#39;\&#39; param-location=\&#39;&#39; + window.location.href + &#39;\&#39;&gt;&lt;\/embed&gt;&lt;\/div&gt;&lt;\/body&gt;&lt;\/html&gt;&#39;); })();&quot;, , &quot;View in IE Same Tab&quot;, &quot;View&quot;&quot;
Button10, &quot;繁&quot;=&quot;Go to page, &quot;javascript:void(document.body.innerHTML=document.body.innerHTML.s2t());&quot;, , &quot;繁&quot;, &quot;A&quot;&quot;
Button11, &quot;简&quot;=&quot;Go to page, &quot;javascript:void(document.body.innerHTML=document.body.innerHTML.t2s());&quot;, , &quot;简&quot;, &quot;A&quot;&quot;
Button12, &quot;BBS&quot;=&quot;Go to page, &quot;file://localhost/C:/ZTerm/ZTermApplet.html&quot;, , &quot;BBS&quot;, &quot;A&quot;&quot;
Button13, &quot;Google 即時小字典&quot;=&quot;Go to page, &quot;javascript:function translate(word) { var glf = document.getElementById(&#39;glf&#39;); glf.contentWindow.gtrans(word); }; function findAndReplace(searchText, replacement, searchNode) { var regex = typeof searchText === &#39;string&#39; ? new RegExp(searchText, &#39;g&#39;) : searchText, childNodes = (searchNode || document.body).childNodes, cnLength = childNodes.length, excludes = &#39;html,head,style,title,link,meta,script,object,textarea,iframe&#39;; while (cnLength--) { var currentNode = childNodes[cnLength]; if (currentNode.nodeType === 1 &amp;&amp; (excludes + &#39;,&#39;).indexOf(currentNode.nodeName.toLowerCase() + &#39;,&#39;) === -1) { arguments.callee(searchText, replacement, currentNode); } if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) { continue; } var parent = currentNode.parentNode, frag = ( function(){ var html = currentNode.data.replace(regex, replacement), wrap = document.createElement(&#39;div&#39;), frag = document.createDocumentFragment(); wrap.innerHTML = html; while (wrap.firstChild) { frag.appendChild(wrap.firstChild); } return frag; } )(); parent.insertBefore(frag, currentNode); parent.removeChild(currentNode); } }; function inject(){ findAndReplace(&#39;\\b[^ ]+\\b&#39;, function(term){ return &#39;&lt;span onmouseover=\&#39;translate(this)\&#39;&gt;&#39; + term + &#39;&lt;/span&gt;&#39;; }); }; function init() { var glf = document.createElement(&#39;iframe&#39;); glf.id = &#39;glf&#39;; glf.width=0; glf.height=0; glf.frameborder=0; glf.style.borderWidth=&#39;0&#39;; glf.style.borderStyle=&#39;none&#39;; glf.style.position=&#39;fixed&#39;; glf.style.top=&#39;10px&#39;; glf.style.right=&#39;10px&#39;; document.body.appendChild(glf); var doc = glf.contentDocument; doc.open(); doc.write(&#39;&lt;head&gt;&lt;title&gt;Sample html&lt;/title&gt;&lt;script type=\&#39;text/javascript\&#39; src=\&#39;http://www.google.com/jsapi\&#39;&gt;&lt;/script&gt;&lt;script type=\&#39;text/javascript\&#39;&gt;google.load(\&#39;language\&#39;, \&#39;1\&#39;);function gtrans(word) {if(word.title) return; word.title = \&#39;translating...\&#39;; var text = word.innerHTML; google.language.detect(text, function(result) { if (!result.error &amp;&amp; result.language) { google.language.translate(text, result.language, \&#39;zh-tw\&#39;, function(result) {if (result.translation) { word.title = text + \&#39;: \&#39; + result.translation;}});}});};&lt;/script&gt;&lt;/head&gt;&lt;body style=\&#39;margin:0; background-color: transparent;\&#39;&gt;&lt;div id=\&#39;branding\&#39; style=\&#39;width : 0px; height : 0px; text-align: left;\&#39;&gt;&lt;/div&gt;&lt;/body&gt;&#39;); doc.close(); inject(); }; init();&quot;, , &quot;Google 即時小字典&quot;, &quot;Window Chat Room Icon&quot;&quot;
Button14, &quot;搜尋已選詞&quot;=&quot;Hotclick search, , , &quot;搜尋已選詞&quot;, &quot;Search Web&quot;&quot;
Button15, &quot;站內搜尋&quot;=&quot;Go to page, &quot;javascript:var t=window.location.hostname;var s=prompt(&#39;Google site search - enter search string:&#39;,&#39;&#39;);if(s){if(s.match(/^d%5cs.+/)){s=s.substring(2,s.length);t=t.match(/%5b^%5c.%5d+%5c.%5cw{2,4}$/)+&#39;&#39;};void(location.href=&#39;http://www.google.com/search?q=site:&#39;+t+&#39;+&#39;+s+&#39;&amp;sourceid=opera&#39;)}&quot;, 1, &quot;站內搜尋&quot;, &quot;Search Web&quot;&quot;</code></pre>

<p>All customized buttons stored here will show up in the &quot;My buttons&quot; toolbar. The a potential problem here is that users might install different third party components, and one <code>standard_toolbar.ini</code> might not be able to fit them all. During the installation/patch process, Nalakuvara copies one of sixteen predefined <code>standard_toolbar.ini</code> files to <code><var>OPERA_INSTALL_PATH</var>\ui\</code>, according to the users&#39; selection.</p>

<p>The modified <code>standard_toolbar.ini</code> is renamed to &quot;Opera Nalakuvara Standard&quot; to distinguish between it and the original one. What if it just doesn&#39;t show up? There is still a way forward — users could still install Nalakuvara&#39;s customized buttons from user documents, which will be discussed in Part 4 of the series.</p>

<p>Menus are a little tricky. <a href="http://dev.opera.com/articles/view/building-opera-nalakuvara-part-1/#guideline">Nalakuvara&#39;s guidelines</a> state that there should be as little change as possible in menus. The only &quot;must-have&quot; is Opera&#39;s built-in dictionary function.</p>

<h3 id="dictionary_translation">Dictionary and translation features</h3>

<p class="note">There seems to be a bug in the current <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha</a> snapshot — the Hotclick menu does not work properly yet. This will be fixed in future 10.5 releases.</p>

<p>By default, the &quot;Opera Standard&quot; menu contains one <strong>Hotclick</strong> (right-click) search entry for <a href="http://www.merriam-webster.com/dictionary/">Merriam-Webster Online Dictionary</a>, one for <a href="http://en.wikipedia.org/">English Wikipedia</a>, and one set of translation functions using <a href="http://babelfish.yahoo.com/">Yahoo! BabelFish</a> which includes:</p>

<ul>
  <li>English to French</li>
  <li>English to German</li>
  <li>English to Italian</li>
  <li>English to Portuguese</li>
  <li>English to Spanish</li>
  <li>French to English</li>
  <li>French to German</li>
  <li>French to Italian</li>
  <li>French to Portuguese</li>
  <li>French to Spanish</li>
  <li>German to English</li>
  <li>German to French</li>
  <li>Italian to English</li>
  <li>Italian to French</li>
  <li>Portuguese to English</li>
  <li>Spanish to English</li>
  <li>Spanish to French</li>
  <li>English to Japanese </li>
  <li>Japanese to English</li>
</ul>

<p>These are quite useful for American/European users, however for Taiwanese users they do not help much. There are some local popular web dictionary services in Taiwan, and Yahoo! BabelFish supports Traditional Chinese to/from English too. It was better to include these feature into Nalakuvara&#39;s Hotclick searches.</p>

<p>The goal is to expand the &quot;Dictionary&quot; and &quot;Encyclopedia&quot; entries into submenus (original Merriam-Webster Online Dictionary and English Wikipedia), and tweak &quot;Translate&quot; submenu to serve the needs of Taiwanese users:</p>

<ul>
  <li>Dictionary
    <ul>
      <li>Yahoo! Taiwan Dictionary</li>
      <li>Merriam-Webster Online Dictionary</li>
      <li>Taiwan National Language Composite Search</li>
    </ul>
  </li>
  <li>Encyclopedia
    <ul>
      <li>Chinese Wikipedia</li>
      <li>English Wikipedia</li>
      <li>Japanese Wikipedia</li>
      <li>Uncyclopedia</li>
    </ul>
  </li>
  <li>Translate
    <ul>
      <li>English to Traditional Chinese</li>
      <li>Traditional Chinese to English</li>
      <li>Japanese to English</li>
      <li>French to English</li>
      <li>German to English</li>
      <li>Italian to English</li>
      <li>Portuguese to English</li>
      <li>Spanish to English</li>
      <li>English to Japanese</li>
      <li>English to French</li>
      <li>English to German</li>
      <li>English to Italian</li>
      <li>English to Portuguese</li>
      <li>English to Spanish</li>
    </ul>
  </li>
</ul>

<p>This modification was achieved through three files:</p>

<ul>
  <li><code><var>LANGUAGE_CODE</var>.lng</code>, which changes menu text according to the specific UI language</li>
  <li><code>search.ini</code>, which defines actual Hotclick searches</li>
  <li><code>standard_menu.ini</code>, which defines the actual Hotclick menu</li>
</ul>

<p>The default searches are predefined in the <code>search.ini</code> file. Just like <code>bookmarks.adr</code> of default bookmarks, <code>search.ini</code> can be locale-based. This makes more sense for we can tweak the above menu just for Taiwanese users, ie, those who use Traditional Chinese as their UI language.</p>

<p>Let&#39;s start with the Hotclick translate submenu. The <code>[Translate menu]</code> section of Nalakuvara&#39;s <code><var>OPERA_INSTALL_PATH</var>\ui\standard_menu.ini</code> is as follows:</p>

<pre><code>[Translate menu]
Item, MI_IDM_SELTRANSLATE_FR_DE	= Hotclick search, 107
Item, MI_IDM_SELTRANSLATE_FR_IT	= Hotclick search, 108
--------------------1
Item, MI_IDM_SELTRANSLATE_JA_EN	= Hotclick search, 119
Item, MI_IDM_SELTRANSLATE_FR_EN	= Hotclick search, 106
Item, MI_IDM_SELTRANSLATE_DE_EN	= Hotclick search, 111
Item, MI_IDM_SELTRANSLATE_IT_EN	= Hotclick search, 113
Item, MI_IDM_SELTRANSLATE_PT_EN	= Hotclick search, 115
Item, MI_IDM_SELTRANSLATE_ES_EN	= Hotclick search, 116
--------------------2
Item, MI_IDM_SELTRANSLATE_EN_JA	= Hotclick search, 118
Item, MI_IDM_SELTRANSLATE_EN_FR	= Hotclick search, 100
Item, MI_IDM_SELTRANSLATE_EN_DE	= Hotclick search, 101
Item, MI_IDM_SELTRANSLATE_EN_IT	= Hotclick search, 102
Item, MI_IDM_SELTRANSLATE_EN_PT	= Hotclick search, 103
Item, MI_IDM_SELTRANSLATE_EN_ES	= Hotclick search, 104</code></pre>

<p><code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code> is also modified, to match this change:</p>

<pre><code>1208490414=&quot;英文 &gt; 法文(F)&quot;
1208490335=&quot;英文 &gt; 德文(G)&quot;
1208490515=&quot;英文 &gt; 義大利文(I)&quot;
1208490746=&quot;英文 &gt; 葡萄牙文(P)&quot;
1208490382=&quot;英文 &gt; 西班牙文(S)&quot;
1209820046=&quot;法文 &gt; 英文(2)&quot;
1209820004=&quot;英文 &gt; 繁體中文(T)&quot;
1209820184=&quot;繁體中文 &gt; 英文(E)&quot;
1206981023=&quot;德文 &gt; 英文(3)&quot;
1213449683=&quot;義大利文 &gt; 英文(4)&quot;
1221751130=&quot;葡萄牙文 &gt; 英文(5)&quot;
1208670062=&quot;西班牙文 &gt; 英文(6)&quot;
1208490529=&quot;英文 &gt; 日文(J)&quot;
1213952801=&quot;日文 &gt; 英文(1)&quot;</code></pre>

<p>And <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\search.ini</code> is changed, to modify the actual Hotclick search:</p>

<pre><code>[Search Engine 7]
UNIQUEID=96D0060E5FC311DDBEA89A1656D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=fr
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=100
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 8]
UNIQUEID=C1629A765FC311DDB2CB3F1956D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=de
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=101
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 9]
UNIQUEID=EED3C7145FC311DD82E4CE1A56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=it
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=102
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 10]
UNIQUEID=14E03A145FC411DD97AE5E1C56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=pt
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=103
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 11]
UNIQUEID=090D0C025FC511DD88CAAB2856D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=es
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Verbtext=017063
Search Type=104
Position=-1
Nameid=291960

[Search Engine 12]
UNIQUEID=37F636385FC511DDA9FAC42A56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=fr&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=106
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 13]
UNIQUEID=6E70644A5FC511DD89AD0F2D56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=zt
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=107
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 14]
UNIQUEID=95C831945FC511DD952DE52E56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=zt&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=AUTODETECT-ZH
Search Type=108
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 17]
UNIQUEID=DF49D89E5FC611DD9581F43E56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=de&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=111
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 19]
UNIQUEID=88383F7C5FC711DDBC78BD4756D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=it&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=113
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 21]
UNIQUEID=FF719C3C5FC711DD986F284E56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=pt&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=115
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 22]
UNIQUEID=BD0EEE0A5FCA11DDAE6D867456D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=es&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=116
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 24]
UNIQUEID=0B7FB2A45FCB11DD8980147856D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;from=en&amp;to=ja
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=118
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 25]
UNIQUEID=4031DD385FCB11DDAE6A3E7B56D89593
Name=
URL=http://redir.opera.com/translation/?text=%s&amp;∓from=ja&amp;to=en
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=EUC-JP
Search Type=119
Verbtext=0
Position=-1
Nameid=291960</code></pre>

<p>The &quot;Translate&quot; sub menu works now; now it&#39;s time to expand the &quot;Dictionary&quot; and &quot;Encyclopedia&quot; entries into submenus by modifying the <code>[Hotclick Popup Menu]</code> section of the <code><var>OPERA_INSTALL_PATH</var>\ui\standard_menu.ini</code>:</p>

<pre><code>[Hotclick Popup Menu]
Item, MI_IDM_DOCCOPY			= Copy
Item, M_COPY_TO_NOTE			= Copy to note
Platform Win2000-Unix-Mac-QNX, Feature Voice, Item, M_HOTCLICK_MENU_ITEM_SPEAK = Speak selection
--------------------1
Item, MI_IDM_SELSEARCH				= Hotclick search, 200
Submenu, MI_IDM_SEARCH_DUMMY_PARENT, Internal Search With
<strong>Submenu, 999999999, Dictionary menu
Submenu, 999999998, Encyclopedia menu</strong>
--------------------2
Submenu, MI_IDM_SELTRANSLATE_EN_FR_PARENT, Translate menu
--------------------3
Item, M_HOTCLICK_POPUP_MENU_GOTO_URL				= Go to page, &quot;%t&quot;
Item, MI_IDM_SELMAIL			= Send text in mail</code></pre>

<p>The <code>Submenu</code> command creates a submenu — since the language string numbering schema remains unknown to the public, the locale-specific submenu names are using <code>999999999</code> and <code>999999998</code> as language string numeric identifiers. We have to add these two strings in the <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code> too:</p>

<pre><code>999999999=&quot;查字典(D)&quot;
999999998=&quot;查百科(P)&quot;</code></pre>

<p>And we mustn&#39;t forget to define the actual &quot;Dictionary&quot; and &quot;Encyclopedia&quot; submenus in <code><var>OPERA_INSTALL_PATH</var>\ui\standard_menu.ini</code>:</p>

<pre><code>[Dictionary menu]
Item, MI_IDM_SELTRANSLATE_FR_PT			= Hotclick search, 109
Item, MI_IDM_SELDICTIONARY			= Hotclick search, 50
--------------------1
Item, MI_IDM_SELTRANSLATE_DE_FR			= Hotclick search, 112

[Encyclopedia menu]
Item, MI_IDM_SELTRANSLATE_FR_ES			= Hotclick search, 110
Item, MI_IDM_SELENCYCLOPED			= Hotclick search, 51
Item, MI_IDM_SELTRANSLATE_IT_FR			= Hotclick search, 114
--------------------1
Item, MI_IDM_SELTRANSLATE_ES_FR			= Hotclick search, 117</code></pre>

<p>Again, the locale-specific names are also added into the <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code>:</p>

<pre><code>-1539396211=&quot;韋氏英英字典(W)&quot;
1634087069=&quot;英文維基百科(E)&quot;
1209820415=&quot;Yahoo!奇摩字典&quot;
1209820051=&quot;中文維基百科(Z)&quot;
1206981060=&quot;國家語文綜合連結檢索&quot;
1213449720=&quot;日文維基百科(J)&quot;
1208670099=&quot;偽基百科(U)&quot;</code></pre>
<p>And the actual Hotkey searches in the <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\search.ini</code>:</p>
<pre><code>[Search Engine 5]
UNIQUEID=CD139D765FC211DDA345390D56D89593
Name=
URL=http://en.wikipedia.org/wiki/Special:Search?search=%s
ICON=http://redir.opera.com/favicons/wikipedia/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=51
Verbtext=0
Position=-1
Nameid=65188

[Search Engine 6]
UNIQUEID=9923D42C5FC211DDA01C470B56D89593
Name=
URL=http://www.merriam-webster.com/dictionary/%s
ICON=http://www.merriam-webster.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=50
Verbtext=0
Position=-1
Nameid=65187

[Search Engine 15]
UNIQUEID=C482AAFA5FC511DD9EE1413256D89593
Name=
URL=http://tw.dictionary.yahoo.com/search?ei=UTF-8&amp;p=%s
ICON=http://babelfish.yahoo.com/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=109
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 16]
UNIQUEID=EBB05C8A5FC511DD829BD83356D89593
Name=
URL=http://zh.wikipedia.org/w/index.php?title=Special%3A%E6%90%9C%E7%B4%A2&amp;redirs=0&amp;search=%s&amp;fulltext=Search&amp;ns0=1
ICON=http://redir.opera.com/favicons/wikipedia/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=110
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 18]
UNIQUEID=515B56A65FC711DD99D77C4556D89593
Name=
URL=http://www.nlcsearch.moe.gov.tw/EDMS/admin/dict3/search_go.php
Query=dictlist=47?2C46?2C51?2C18?2C16?2C13?2C20?2C19?2C53?2C12?2C14?2C17?2C48?2C57?2C24?2C25?2C26?2C29?2C30?2C31?2C32?2C33?2C34?2C35?2C36?2C37?2C39?2C38?2C41?2C42?2C43?2C45?2C50?2C&amp;qstr=%s&amp;chkSubject=on&amp;hdnSubject=A&amp;dict=&amp;hdnCheckAll=checked&amp;dict0=&amp;dict0=47&amp;dict0=46&amp;dict0=51&amp;dict1=&amp;dict1=18&amp;dict1=16&amp;dict1=13&amp;dict1=20&amp;dict1=19&amp;dict1=53&amp;dict1=12&amp;dict1=14&amp;dict1=17&amp;dict1=48&amp;dict2=&amp;dict2=57&amp;dict2=24&amp;dict3=&amp;dict3=25&amp;dict3=26&amp;dict3=29&amp;dict3=30&amp;dict3=31&amp;dict4=&amp;dict4=32&amp;dict4=33&amp;dict4=34&amp;dict4=35&amp;dict4=36&amp;dict4=37&amp;dict4=39&amp;dict4=38&amp;dict4=41&amp;dict5=&amp;dict5=42&amp;dict5=43&amp;dict5=45&amp;dict5=50&amp;pageno=
Key=
Is post=1
Has endseparator=0
Encoding=big5
Search Type=112
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 20]
UNIQUEID=B2227D485FC711DD9F8DA84956D89593
Name=
URL=http://ja.wikipedia.org/wiki/特別:検索?search=%s&amp;go=%E8%A8%98%E4%BA%8B%E8%A1%A8%E7%A4%BA
ICON=http://redir.opera.com/favicons/wikipedia/favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=114
Verbtext=0
Position=-1
Nameid=291960

[Search Engine 23]
UNIQUEID=E71079445FCA11DDBA1D577656D89593
Name=
URL=http://zh.uncyclopedia.info/index.php?title=%E7%89%B9%E6%AE%8A%3A%E6%90%9C%E5%B0%8B&amp;search=%s&amp;go=%E9%80%B2%E5%85%A5
ICON=http://images.uncyc.org/zh-tw/6/64/Favicon.ico
Query=
Key=
Is post=0
Has endseparator=0
Encoding=utf-8
Search Type=117
Verbtext=0
Position=-1
Nameid=291960</code></pre>

<p>Any search for which <code>Search Type</code> is not <code>=0</code> will not be shown in the Search Bar, but these can be invoked using the &quot;<code>Hotclick search</code>&quot; command. The reason to use &quot;<code>Hotclick search</code>&quot; rather than &quot;<code>Go to page</code>&quot; is to specify input encoding (<code>Encoding</code>=<code><var>foo</var></code>) and/or specify GET/POST submission (<code>Is post</code>=<code><var>0_OR_1</var></code>).</p>

<p>Since the Hotclick menu can be locale-based, we could go further and add English, Simplified Chinese, or versions for any other UI languages. To summarise, the following table describes the language file changes made in this section of the work:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="3"><code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code><br /><code><var>OPERA_INSTALL_PATH</var>\locale\zh-cn\zh-cn.lng</code><br /><code><var>OPERA_INSTALL_PATH</var>\locale\en\en.lng</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>String numeric identifier</th>
      <th>Opera&#39;s original</th>
      <th>Nalakuvara modification</th>
    </tr>
    <tr>
      <th class="sub" rowspan="3">-1539396211</th>
      <td>字典(D)</td>
      <td>韋氏英英字典(W)</td>
    </tr>
    <tr>
      <td>字典</td>
      <td>iCIBA爱词霸</td>
    </tr>
    <tr>
      <td>Dictionary</td>
      <td>Merriam-Webster online dictionary</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1634087069</th>
      <td>百科全書(E)</td>
      <td>英文維基百科(E)</td>
    </tr>
    <tr>
      <td>百科全书</td>
      <td>英语维基百科(E)</td>
    </tr>
    <tr>
      <td>Encyclopedia</td>
      <td>English Wikipedia</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1209820046</th>
      <td>法文 &gt; 英文(E)</td>
      <td>法文 &gt; 英文(2)</td>
    </tr>
    <tr>
      <td>法语译英语</td>
      <td>法语译英语(2)</td>
    </tr>
    <tr>
      <td>French to English</td>
      <td>(2) French to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1209820004</th>
      <td>法文 &gt; 德文(M)</td>
      <td>英文 &gt; 繁體中文(T)</td>
    </tr>
    <tr>
      <td>法语译德语</td>
      <td>英语译中文(C)</td>
    </tr>
    <tr>
      <td>French to German</td>
      <td>(T) English to Traditional Chinese</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1209820184</th>
      <td>法文 &gt; 義大利文(T)</td>
      <td>繁體中文 &gt; 英文(E)</td>
    </tr>
    <tr>
      <td>法语译意大利语</td>
      <td>中文译英语(E)</td>
    </tr>
    <tr>
      <td>French to Italian</td>
      <td>(E) Traditional Chinese to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1209820415</th>
      <td>法文 &gt; 葡萄牙文(O)</td>
      <td>Yahoo!奇摩字典</td>
    </tr>
    <tr>
      <td>法语译葡萄牙语</td>
      <td>台湾Yahoo!奇摩字典</td>
    </tr>
    <tr>
      <td>French to Portuguese</td>
      <td>Yahoo! Taiwan dictionary</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1209820051</th>
      <td>法文 &gt; 西班牙文(A)</td>
      <td>中文維基百科(Z)</td>
    </tr>
    <tr>
      <td>法语译西班牙语</td>
      <td>中文维基百科(Z)</td>
    </tr>
    <tr>
      <td>French to Spanish</td>
      <td>Chinese Wikipedia</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1206981023</th>
      <td>德文 &gt; 英文(N)</td>
      <td>德文 &gt; 英文(3)</td>
    </tr>
    <tr>
      <td>德语译英语</td>
      <td>德语译英语(3)</td>
    </tr>
    <tr>
      <td>German to English</td>
      <td>(3) German to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1206981060</th>
      <td>德文 &gt; 法文(R)</td>
      <td>國家語文綜合連結檢索</td>
    </tr>
    <tr>
      <td>德语译法语</td>
      <td>台湾国家语文综合连结检索</td>
    </tr>
    <tr>
      <td>German to French</td>
      <td>National Language Composite Search</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1213449683</th>
      <td>義大利文 &gt; 英文(L)</td>
      <td>義大利文 &gt; 英文(4)</td>
    </tr>
    <tr>
      <td>意大利语译英语</td>
      <td>意大利语译英语(4)</td>
    </tr>
    <tr>
      <td>Italian to English</td>
      <td>(4) Italian to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1213449720</th>
      <td>義大利文 &gt; 法文(Y)</td>
      <td>日文維基百科(J)</td>
    </tr>
    <tr>
      <td>意大利语译法语</td>
      <td>日语维基百科(J)</td>
    </tr>
    <tr>
      <td>Italian to French</td>
      <td>Japanese Wikipedia</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1221751130</th>
      <td>葡萄牙文 &gt; 英文(U)</td>
      <td>葡萄牙文 &gt; 英文(5)</td>
    </tr>
    <tr>
      <td>葡萄牙语译英语</td>
      <td>葡萄牙语译英语(5)</td>
    </tr>
    <tr>
      <td>Portuguese to English</td>
      <td>(5) Portuguese to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1208670062</th>
      <td>西班牙文 &gt; 英文(H)</td>
      <td>西班牙文 &gt; 英文(6)</td>
    </tr>
    <tr>
      <td>西班牙语译英语</td>
      <td>西班牙语译英语(6)</td>
    </tr>
    <tr>
      <td>Spanish to English</td>
      <td>(6) Spanish to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1208670099</th>
      <td>西班牙文 &gt; 法文(B)</td>
      <td>偽基百科(U)</td>
    </tr>
    <tr>
      <td>西班牙语译法语</td>
      <td>伪基百科(U)</td>
    </tr>
    <tr>
      <td>Spanish to French</td>
      <td>Uncyclopedia</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1208490529</th>
      <td>英文 &gt; 繁體中文(C)</td>
      <td>英文 &gt; 日文(J)</td>
    </tr>
    <tr>
      <td>英语译日语</td>
      <td>英语译日语(J)</td>
    </tr>
    <tr>
      <td>English to Japanese </td>
      <td>(J) English to Japanese</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">1213952801</th>
      <td>繁體中文 &gt; 英文(V)</td>
      <td>日文 &gt; 英文(1)</td>
    </tr>
    <tr>
      <td>日语译英语</td>
      <td>日语译英语(1)</td>
    </tr>
    <tr>
      <td>Japanese to English</td>
      <td>(1) Japanese to English</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">999999999</th>
      <td rowspan="3"></td>
      <td>查字典(D)</td>
    </tr>
    <tr>
      <td>查字典(D)</td>
    </tr>
    <tr>
      <td>Dictionary</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">999999998</th>
      <td rowspan="3"></td>
      <td>查百科(E)</td>
    </tr>
    <tr>
      <td>查百科(E)</td>
    </tr>
    <tr>
      <td>Encyclopedia</td>
    </tr>
  </tbody>
</table>

<p>The reason to provide this functionality is that some Taiwanese users might use computers in other countries, such as America and China, and not always be able to use Opera with the Traditional Chinese UI. With the English and Simplified Chinese UI predefined, these users have an way of using the tweaked menu too.</p>

<p>The English (<code>en</code>) and Simplified Chinese (<code>zh-cn</code>) versions of <code>search.ini</code> are different from the Traditional Chinese (<code>zh-tw</code>) one. Most locale-specific searches are preserved during Nalakuvara&#39;s editing process.</p>

<h3 id="encoding">A note on encoding</h3>

<p>This is not over yet. Encoding is always a big problem in CJK, so Taiwanese users often switch web page encodings. Many users asked if an encoding submenu could be included in the right-click menu, so here it is:</p>

<pre><code>[Document Popup Menu]

Item, MI_IDM_Prev_PM,				= Back
Item, MI_IDM_Next_PM,				= Forward
Item, M_REWIND,				= Rewind
Item, M_FAST_FORWARD,				= Fast Forward
--------------------1
Item, MI_IDM_Reload_PM,				= Reload
Submenu, MI_IDM_AUTORELOAD_TOGGLE_PARENT, Reload Menu
--------------------2
Item, M_DOCUMENT_POPUP_MENU_BOOKMARK_PAGE		= Add to bookmarks, 1
Item, MI_IDM_POPUP_ADDRESS			= Copy document address
Item, MI_IDM_SEND_URL_EMAIL		= Send document address in mail
--------------------3
Item, MI_IDM_Print				= Print document
Item, MI_IDM_Kilde				= View document source
Item, M_DOCUMENT_POPUP_MENU_VALIDATE			= Validate frame source
Submenu, M_OPEN_WITH, Open in menu
--------------------5
Include, Internal Frame
Include, Internal Document Background
--------------------7
<strong>Submenu, MI_IDM_ENCODING_AUTOMATIC_PARENT, Encoding Menu</strong>
Item, M_BLOCK_CONTENT = Content block mode on | Content block mode off
Item, M_EDIT_SITE_PREFERENCES = Edit site preferences
--------------------8
Item, MI_IDM_FULLSCREENTOGGLE			= Enter fullscreen | Leave fullscreen</code></pre>
<p>Another requested feature is the ability to∓ merge notes. It is quite simple:</p>
<pre><code>[Note Item Popup Menu]
Item, MI_IDM_SELMAIL       = Send text in mail
--------------------1
Item, MI_IDM_HLITEM_CUT                            = Cut
Item, MI_IDM_HLITEM_COPY                            = Copy
Item, MI_IDM_HLITEM_PASTE                            = Paste
<strong>Item, 999999997                            = Copy &amp; Paste to note
Item, 999999996                            = Copy &amp; Delete &amp; Paste to note</strong>
Item, MI_IDM_HLITEM_DELETE                            = Delete
--------------------5
Item, MI_IDM_HLITEM_SELECTALL                     = Select all
--------------------6
Item, M_BOOKM_PANEL_VIEW_MENU_SORT_BY_MY_ORDER       = Sort by column, -1
Item, M_BOOKM_PANEL_VIEW_MENU_SORT_BY_NAME       = Sort by column, 0
--------------------7
Item, M_NEW_NOTE       = New note
Item, SI_NEW_FOLDER_BUTTON_TEXT       = New folder
Item, M_NEW_SEPARATOR        = New Seperator</code></pre>

<p>Here I am introducing two more customized language string numeric identifiers, <code>999999997</code> and <code>999999996</code>. Again, we have to add these two strings to <code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code>:</p>

<pre><code>; item for Nalakuvara
999999997=&quot;合併且保留&quot;
999999996=&quot;合併&quot;</code></pre>

<p>And to summarise:</p>

<table class="table1">
  <thead>
    <tr>
      <th colspan="3"><code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\zh-tw.lng</code><br /><code><var>OPERA_INSTALL_PATH</var>\locale\zh-cn\zh-cn.lng</code><br /><code><var>OPERA_INSTALL_PATH</var>\locale\en\en.lng</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>String numeric identifier</th>
      <th>Opera&#39;s original</th>
      <th>Nalakuvara modification</th>
    </tr>
    <tr>
      <th class="sub" rowspan="3">999999997</th>
      <td rowspan="3"></td>
      <td>合併且保留</td>
    </tr>
    <tr>
      <td>合并且保留</td>
    </tr>
    <tr>
      <td>Merge and keep</td>
    </tr>
    <tr>
      <th class="sub" rowspan="3">999999996</th>
      <td rowspan="3"></td>
      <td>合併</td>
    </tr>
    <tr>
      <td>合并</td>
    </tr>
    <tr>
      <td>Merge</td>
    </tr>
  </tbody>
</table>
