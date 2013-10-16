Title: Opera Nalakuvara, a customized browser for the Taiwanese community — Part 1: planning
----
Date: 2010-01-27 11:36:50
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

	   <h2 id="intro">Introduction</h2>

<p><strong>Nalakuvara</strong> is probably the most famous customized Opera package in Taiwan. It is cross-platform, open-sourced, unobtrusive, multi-lingual and fully localized for Taiwanese users. This article focuses on the technical details of planning and managing an Opera customization project, including Opera’s suitability for customization, background analysis and target audience research, naming, guidelines, the toolset I used during the project, initial installation, and working out which files to customize. Future articles in this series will focus in-depth on adding the localization code for the Taiwanese language, and other customizations made to the browser.</p>
 
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/313-opera-nalakuvara-a-customized-browser-for-the-taiwanese-community-part-1/nalakuvara.png" alt="screenshot of the Opera Nalakuvara - a web browser for the Taiwanese web community" /></p>
 
<p class="note"><strong>I am hoping that with this series as a reference, you could easily start-up a brand new customized Opera project, localised to your geograohical area.</strong></p>

<p>The outline of this article is as follows:</p>

<ul>
  <li><a href="#customization">Opera: Perfect for customization</a></li>
  <li><a href="#plan">Planning</a>
    <ul>
      <li><a href="#analysis">Background analysis</a></li>
      <li><a href="#naming">Naming the project</a></li>
      <li><a href="#guidelines">Guidelines</a></li>
    </ul>
  </li>
  <li><a href="#tools">Tools</a>
    <ul>
      <li><a href="#vcs">Version control</a></li>
      <li><a href="#scripting">Scripting</a></li>
      <li><a href="#vm">Virtual machines</a></li>
    </ul>
  </li>
  <li><a href="#diveinto">Diving into Opera</a>
    <ul>
      <li><a href="#initial">Installation and initial phase</a></li>
      <li><a href="#install">Silent installation</a>
        <ul>
          <li><a href="#windowsinstall">Windows installation procedure</a></li>
          <li><a href="#linuxinstall">Linux installation procedure</a></li>
          <li><a href="#freebsdinstall">Free BSD installation procedure</a></li>
        </ul>
      </li>
      <li><a href="#location">File location and priority</a></li>
    </ul>
  </li>
  <li><a href="#summary">Summary</a></li>
</ul>
      

<h2 id="customization">Opera: perfect for customization</h2>

<p>The Opera desktop browser is an elegant web browser. It supports open web standards strictly, ships with many functions built-in, and still runs fast, even on older computers. Although Opera’s core remains closed-source, it has an open mind: Opera encourages user communities to build their own customized Opera to suit their own needs, as long as people do not break Opera’s End-User License Agreement, ie you can’t modify, translate, reverse engineer, decompile or disassemble Opera’s source code.</p>

<p>As a result, there are many customized Opera versions around the world. Some are semi-officially supported, and some are even becoming official. Opera Ibis, once a community-based customized Opera from China, is now listed as a download on Opera’s official website. Ibis is identical to the international version of Opera, but available only in Simplified Chinese and English interfaces, with some of the default settings modified. The 9.6x-based version of Ibis also ships with a special skin, and has a slightly different rendering system for Simplified Chinese characters. (The rendering system in Ibis 9.6x later merged into Opera’s 10.00 trunk.)</p>

<p>Ibis highlights some special requirements of the Chinese Opera community, such as the ability to render Simplified Chinese characters better, and alternative default searches. Not too surprisingly, users from Taiwan have similar yet different needs (which will be discussed later, in <a href="analysis">Background Analysis</a> section), hence I created the <a href="http://jedi.org/p4/Opera/pub/">Opera Nalakuvara</a> project, a customized Opera for Taiwanese users.</p>

<p>Nalakuvara is still young, but it has already attracted more than 5,000 downloads in the first two weeks of its Beta 1 release, with web media sites such as <a href="http://chinese.engadget.com/2009/09/08/third-party-opera-embeded-telnet-cliet/">Chinese Engadget</a> and <a href="http://www.plurk.com/psearch#q=Opera+三太子">Plurk</a> helping to spread buzz about it. Some local web service providers have also promised to improve their products to be compatible with Nalakuvara.</p>

<p>Nalakuvara has many notable features:</p>

<ul>
<li>Nalakuvara is very open — the whole project is well-documented and reveals almost everything, so you could easily adapt Nalakuvara and fork to create your own project.</li>
<li>Nalakuvara is extremely flexible and cross-platform. There are currently nine packages available for various systems including Windows, Linux (Ubuntu, Fedora, and generic Linux), and FreeBSD; there is a package for Mac OS X on the way too.</li>
<li>Nalakuvara is exceedingly user-friendly; users can choose if they want to install any of the 3rd party components in Nalakuvara. Nalakuvara also asks for confirmation before deleting existing user profiles (or makes backups on some platforms).</li>
<li>It also enables UserJS-related options, only if users choose to install them.</li>
<li>Even if Nalakuvara is installed on a non-Traditional Chinese Windows encironment, it still displays and works mostly correctly.</li></ul>

<h2 id="plan">Planning</h2>

<p>You should always plan first for any project — think carefully before action! Without planning, a project will lose focus and quickly be forgotten. Make sure your project is well planned, released in a timely manner, well promoted, and therefore noticed and remembered.</p>

<h3 id="analysis">Background analysis</h3>

<p>To start with, I researched the potential target audience community that Nalakuvara could have. First of all I did some hallway tests, and read some local forums.</p>

<p>A hallway test is a common usability test: you invite a varied selection of people to use your product, and watch their actions and response. I asked several random people using Opera 10.00 to do their daily browsing, and made a record of features they complained about or praised.</p>

<p>A hallway test allows you to observe a wide variety of “average” users, but I also wanted to better understand experienced users and newbies too, therefore, I visited a forum focusing on “Browser” in <a href="http://www.ptt.cc/index.bbs.html">Ptt BBS</a>, the largest local telnet-based BBS in Taiwan. There are over 100,000 unique users logged in to PTT at any one time, with experienced users and newbies exchanging their knowledge. Just listening in on conversations allowed me to check up on the most frequently requested browser features.</p>

<p>From my research, I learned that users from Taiwan would like to:</p>
<ul>
  <li>Change Opera’s UI font to MingLiU (the default Traditional Chinese font from the Traditional Chinese version of Windows) rather than SimSun (the default Simplified Chinese font from the Simplified Chinese version of Windows)</li>
  <li>Use mouse gestures</li>
  <li>Use drag and drop</li>
  <li>Open new tabs in the background by default</li>
  <li>Avoid using Chinese URLs</li>
  <li>Search strings directly in the location (URL) bar</li>
  <li>Use Gmail, Ymail and Hotmail</li>
  <li>Search with Google Taiwan and Yahoo! Taiwan, and a handful of other popular search engines</li>
  <li>Use dictionaries</li>
  <li>Block pop-up advertisements</li>
  <li>Convert Simplified Chinese characters within a web page to Traditional Chinese characters</li>
  <li>Render web pages with IE’s rendering engine (Trident), so they can use ActiveX or view IE-only web pages. This is to be done in a special Opera tab (called the “IE Tab”), without opening IE</li>
  <li>Connect to BBS sites via the <code>telnet://</code> protocol, within the browser</li>
  <li>Use popular Firefox Extensions or have equivalents provided</li>
</ul>

<p>Luckily, most of these requested functions are built in to Opera and you just need to enable them; others are doable using UserJS. It didn’t seem too bad at this point.</p>

<p>After doing the research, I prepared for the first test run. I grabbed a portable <a href="http://www.opera-usb.com/">Opera@USB</a> 10.00 build, enabled and tweaked some settings (see the <a href="#diveinto">Dive Into Opera</a> section), and repeated the hallway test! People liked this browser version more than the default presented to them in the first hallway tests. With this result, I knew this project would be worthwhile, so I continued.</p>

<h3 id="naming">Naming the project</h3>

<p>The next step was to pack up a beta version and make it available to the public. But wait! I bumped into another hurdle — I needed a name for my project. A good name makes invisible things visible, abstract ideas concrete and memorable, communication focused. With a good name, people know what others are talking about.</p>

<p>Before I named Nalakuvara, I started thinking of Ibis, the Vermillion Bird of the South, one of the Four Symbols of the Chinese constellations an elegant and noble red bird both in appearance and behavior. Ibis is therefore a great name for a Chinese customized Opera project. “So what would be a good name for a Taiwanese customized Opera project?” I asked myself.</p>

<p>One night I talked to one of my friends, and he suggested that I choose from some Deity names out of Taiwanese traditional religion. Soon, Nalakuvara jumped into my mind. Nalakuvara, or Nezha, is a deity in sanskrit sutra. Taiwanese people adapted this deity into our own religion system, just like we adopted numerous different cultures and technologies. In Taiwanese folklore, Nalakuvara is a vigorous and dexterous deity. He has many talismans, including Wind-Fire-Wheel, and he runs faster than others. The base color of Nalakuvara is also red. So the choice was made.</p>

<p class="note">When naming your project, please remember that it is impossible to satisfy all users. No matter how much the majority likes your name, there will always be someone who doesn’t like it. Don’t agonise over it too much — as long as it works and most people like it, carry on, and let the project itself do the talking.</p>

<p>Nalakuvara beta 1 was well received, but there were definitely improvements to make — overall usability, bug fixes, adding features. I needed to come up with some guidelines to keep me on track.</p>

<h3 id="guidelines">Guidelines</h3>

<p>Despite involving a lot of work on my part, Nalakuvara is still a comparitively tiny project, so I haven’t developed full specs, release roadmaps and product release cycles. However, to keep Nalakuvara moving in the right direction, I needed to create some simple guidelines to follow to keep things consistent:</p>

<ul>
  <li>Do no harm first, do something useful second</li>
  <li>Conserve the Opera look and feel</li>
  <li>Make it as cross-platform as possible</li>
  <li>Use as few third party components as possible</li>
  <li>In case a 3rd party component is unavoidable, at least let users to make the final decision.</li>
</ul>

<p>It is critical to write down guidelines early on in a project. Anytime a dispute occurs — either between members of the development team, or later on between you and your community — it is easy to work out what the answer is by consulting the guidelines.</p>

<p>I used Nalakuvara’s guidelines to answer several common queries about how it fits into various communities:</p>
<ul>
  <li>Nalakuvara may not modify the official Opera installation package</li>
  <li>Nalakuvara may not introduce security flaws</li>
  <li>Nalakuvara may not use Add-On applications such as eDown (URL no longer active) and <a href="http://my.opera.com/Lex1/blog/oget-2-4">oGet</a></li>
  <li>Nalakuvara may alter default menus and toolbars to provide additional features</li>
  <li>Nalakuvara may use UserJS to provide additional features</li>
  <li>Nalakuvara may not use UserJS to alters web page rendering too much (it must still behave like Opera)</li>
  <li>Nalakuvara should enable UserJS options only if the relevant scripts are installed</li>
  <li>Nalakuvara should allow users to select their install location on the hard drive when possible</li>
  <li>Nalakuvara should allow users to choose what third party components to install</li>
  <li>Nalakuvara should allow users to override default setting</li>
</ul>

<p>So far Nalakuvara almost meets all these goals, with the “IE Tab” feature being the only exception; it works only on the Windows platform, and a 3rd party Plug-In is required.</p>

<h2 id="tools">Tools</h2>

<p>This section details the tools I used when developing Nalakuvara.</p>

<h3 id="vcs">Version control</h3>

<p>Version control is obviously very important when developing any sizeable software project — everyone makes mistakes. The most popular version control systems currently seem to be <a href="http://subversion.tigris.org/">Subversion</a>/<a href="http://svk.bestpractical.com/">svk</a>, <a href="http://www.perforce.com/">Perforce</a> and <a href="http://git-scm.com/">git</a>. For this project I choose Perforce, because:</p>
<ul>
  <li>I have a number of years of experience with it already</li>
  <li>Perforce provides <a href="http://www.perforce.com/perforce/price.html#opensource">free licensing for Open Source development</a>, and <a href="http://www.perforce.com/perforce/price.html#license">two-users with five-client-workspaces without a license</a> for non-commercial usage</li>
  <li>Perforce is suitable for wide range of situations, from simple single developer projects to huge companies like Google (that’s right, Google uses customized Perforce);</li>
  <li>It is cross-platform, with native binaries on several operating systems</li>
  <li>It works great with both command-line and GUI</li>
  <li>Perforce does not leave <code>.svn</code> directories everywhere (which Subversion does).</li>
</ul>

<p>Of course, you do not have to use Perforce. But any version control system is at least 1,000 times better than none! In my case, all my work — including writing these articles — gets committed to my Perforce server.</p>

<p>When working with version control systems, you should always check out files before editing and check in files after daily work or bug fixes, and write logs when committing. I made hundreds of commits in the first two weeks of developing Nalakuvara. Without commit logs, it is impossible to target the right version to work with.</p>

<h3 id="scripting">scripting</h3>

<p>In Nalakuvara, I have not altered the original Opera installer. All changes are applied via script. I had several considerations when choosing a scripting language to work with:</p>

<ul>
  <li>It should be natively supported by operating systems, or compilable to a native binary so that users will not have to install additional runtime environments</li>
  <li>It should be consistent with the original Opera installers on different operating systems so that users will have a better experience during installation or patching</li>
  <li>It should have GUI or command-line interfaces available on different operating systems</li>
  <li>It should be able to do specific tasks, such as reading/writing <code>.ini</code> files or Windows registry tasks</li>
</ul>

<p>Opera supports many different operating systems. On Windows, the Opera installer is GUI-based, and allows users to choose install paths and other options. On Linux, Opera packages work with different package management systems like <a href="http://www.rpm.org/">RPM</a>, and are also available as a tarball, with minimal or no install options. On FreeBSD, most users install Opera via <a href="http://www.freebsd.org/ports/">ports</a>. Mac OS X is a totally <a href="http://developer.apple.com/mac/library/documentation/DeveloperTools/Conceptual/SoftwareDistribution/Introduction/Introduction.html">different story</a> again (I won’t mention Mac in these articles much as I don&#39;t have much experience with that environment.)</p>

<p>I choose <a href="http://www.autohotkey.com/">AutoHotKey</a> for Windows tasks because:</p>
<ul>
  <li>AutoHotKey is a free and open-source</li>
  <li>The syntax is simple and easy, including GUI creation</li>
  <li>It can do Windows-specific tasks</li>
  <li>It can be compiled to Windows standalone executables <code>.exe</code>, and de-compiled back to <code>.ahk</code> source scripts</li>
</ul>

<p>I used <a href="http://www.gnu.org/software/bash/">BASH</a> shell scripts for Linux/FreeBSD tasks because:</p>
<ul>
  <li>BASH is free and open-source</li>
  <li>It is available across all Linux/BSD distributions, and is the default shell in some</li>
  <li>It can do Linux/FreeBSD-specific taskss.</li>
</ul>

<p>For the planned Nalakuvara Mac OS X version, I am considering <a href="http://www.macosxautomation.com/automator/">Automator</a> for scripting tasks because:</p>
<ul>
  <li>Automator is part of Mac OS X</li>
  <li>It deals well with GUIs</li>
  <li>It can do Mac-specific tasks</li>
</ul>

<p>You could also do jobs from scratch using lower level languages, but using higher-level tailored languages keeps release sizes smaller, and will prove easier, both for you in the first place, and for others that want to make modifications at a later date.</p>

<h3 id="vm">Virtual machines</h3>

<p>Virtual machines can save you a lot of time setting up test environments. You can have many “guest” systems on a single “host” system, and many virtual machines give you the ability to take snapshots of current system states so you can easily revert to a clean state, If something goes wrong.</p>

<p>I used <a href="http://www.vmware.com/products/workstation/">VMware Workstation</a>, but if you are looking for some free alternatives, try these:</p>
<ul>
  <li><a href="http://www.vmware.com/products/server/">VMware Server</a> and <a href="http://www.vmware.com/products/player/">VMware Player</a>, both of which are free for charge</li>
  <li><a href="http://www.virtualbox.org/">VirtualBox</a> by Sun Microsystems, which is free and open-sourced</li>
  <li><a href="http://www.microsoft.com/windows/virtual-pc/support/virtual-pc-2007.aspx">Virtual PC</a> and <a href="http://www.microsoft.com/windows/virtual-pc/">Windows Virtual PC</a>, both of which are free of charge</li>
</ul>

<p>For testing I am running Windows XP Professional with SP3, Ubuntu 9.04 Desktop, and Fedora 11 Desktop, all in my VMware Workstation on a tiny laptop. Too bad it is impossible to run Snow Leopard guest in the same fashion (I am using the x86 version of Windows XP as host, and Mac OSX is a x64 OS, so is incompatible)</p>

<h2 id="diveinto">Diving into Opera</h2>

<p>The playground is ready. This is where the fun begins.</p>

<h3 id="initial">Installation and initial phase</h3>

<p>Let us take a closer look at what happens during Opera’s installation and initial phase. On Windows, the Opera installer extracts and runs an <a href="http://msdn.microsoft.com/en-us/library/cc185688(VS.85).aspx">MSI installer</a>. During the installation, users can choose where to install Opera, and whether to create shortcut icons on Desktop, Quick Launch Bar, or Start Menu. The MSI Installer language is based on the Windows system environment. By default, Opera will be installed at <code>%PROGRAMFILES%\Opera\</code> and the multiple users support is enabled.</p>

<p class="note">If you are looking to customize the <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha snapshot</a>, the default installation location is <code>%PROGRAMFILES%\Opera 10.50 Labs\</code>.</p>

<p>If this is the first installation of Opera, for now, all Opera-related files are in the Opera install path. The first time Opera is launched, several files are copied from Opera’s install path to <code>%APPDATA%\Opera\</code> and <code>%USERPROFILE%\Local Settings\Application Data\Opera\</code>. I refer to this as Opera’s “initial phase.” If another Opera has already been installed on this system before, user settings and files usually remain at <code>%APPDATA%</code> and <code>%USERPROFILE%</code>, and Opera does not overwrite those files. The initial phase might happen again, at anytime you launch Opera with user files missing (in the event of  crash, or if someone has deleted them for whatever reason).</p>

<p>The best time to interfere with Opera is after its (whole new) installation and before its first run. Just touch files in Opera’s install path and everything should work just as you imagine. This also works with a multiple user instll — all users get the same improved setting, and are free to tweak it themselves too. If you interfere after Opera’s initial phase, you might have to delete all user profiles and settings so that Opera will run its initial phase again, or carefully alter files in Opera’s install path, ie <code>%APPDATA%</code>, and <code>%USERPROFILE%</code> (if you are not careful, altering these files can cause problems with other applications or even the whole system, so it is not recommended).</p>

<p>On Linux, things are different. There are three types of Opera package on Linux:</p>
<ul>
  <li>Deb package (<code>.deb</code>) for Ubuntu and Debian</li>
  <li>RPM package (<code>.rpm</code>) for Fedora, Mandriva, RedHat and SuSE</li>
  <li>Tarball (<code>.tar.gz</code>) for generic Linux.</li>
</ul>

<p>The RPM and Deb packages require almost no user interaction to install Opera. They put application binaries into <code>/usr/share/opera</code>,  libraries into <code>/usr/lib/opera</code>, and two default preference setting files — <code>operaprefs_default.ini</code> and <code>operaprefs_fixed.ini</code> — into <code>/etc</code>. Tarball does the same, except that it will prompt users for every path to install files, with the same default paths as RPM and Deb packages. Later during the initial phase, Opera puts (copies or creates) user files and settings in <code>~/.opera</code>.</p>

<p>Again, the best opportunity to interfere is just after the first fresh install. If you miss this point you will have to deal with files in <code>/usr/share/opera</code>, <code>/etc</code>, and <code>~/.opera</code>.</p>

<p>On FreeBSD, things are almost the same as with Linux, except the application binary is in <code>/usr/local/share/opera</code> rather than <code>/usr/share/opera</code>, and <code>/usr/local/lib/opera</code> rather than <code>/usr/lib/opera</code>.</p>

<h3 id="install">Silent installation</h3>

<p>You don’t want to force users to go through all this scary config stuff, therefore I made the Nalakuvara package automatically install Opera for users.</p>

<h4 id="windowsinstall">Windows installation process</h4>

<p>On Windows, this is done by appending a <code>/s</code> variable to Opera’s original installer on the command-line, to specify a silent install. Furthermore, we can also append a <code>/V&quot;/passive <var>FOO</var>=<var>BAR</var>&quot;</code> variable to pass the variable to the extracted MSI installer. Multiple variables are allowed, delimited by a single space. The variables that can be passed include:</p>
<ul>
  <li><code>CREATE_DESKTOP_ICON</code>: Create shortcut icon on Desktop if value is <code>1</code>, not if <code>0</code></li>
  <li><code>CREATE_QUICKLAUNCH_ICON</code>: Create shortcut icon on Quick Launch Bar if value is <code>1</code>, not if <code>0</code></li>
  <li><code>CREATE_STARTMENU_ICONS</code>: Create shortcut icon on Start Menu if value is <code>1</code>, not if <code>0</code></li>
  <li><code>LAUNCH_OPERA_ON_FINISH</code>: Launch Opera on installation finish if value is <code>1</code>, not if <code>0</code></li>
  <li><code>SET_DEFAULT_BROWSER</code>: Register Opera as system&#39;s default web browser if value is <code>1</code>, not if <code>0</code></li>
  <li><code>MULTI_USER_SETTING</code>: Enable multiple user setting support if value is <code>1</code>, not if <code>0</code></li>
  <li><code>INSTALLER_LANGUAGE</code>: specify UI language of MSI installer with language code (ie <code>zh-tw</code> means Traditional Chinese, and so on);</li>
  <li><code>INSTALLDIR</code>: Specify where to install Opera.</li>
</ul>

<p class="note">Please note that since multiple variables are delimited by a single space, you have to avoid using space in the value of the <code>INSTALLDIR</code> variable, so you can’t use path names such as <code>C:\Program Files\Opera</code> here. The solution is to use <strong>8.3 format</strong> short path names, such as <code>C:\PROGRA~1\Opera</code>. By default, the Opera installer will create those three shortcut icons (on Desktop, Quick Launch Bar, and Start menu), enable multiple user setting support, install Opera at <code>%PROGRAMFILES%\Opera</code>, and launch Opera on finish. After this you can perform a default install without user interaction by executing:</p>

<pre><code>Opera_1000_int_Setup.exe /s /V&quot;/passive CREATE_DESKTOP_ICON=1 CREATE_QUICKLAUNCH_ICON=1 CREATE_STARTMENU_ICONS=1 LAUNCH_OPERA_ON_FINISH=1 MULTI_USER_SETTING=1&quot;</code></pre>

<p>But we do not want Opera launched on finish. So let us change <code>LAUNCH_OPERA_ON_FINISH</code> to <code>0</code>:</p>

<pre><code>Opera_1000_int_Setup.exe /s /V&quot;/passive CREATE_DESKTOP_ICON=1 CREATE_QUICKLAUNCH_ICON=1 CREATE_STARTMENU_ICONS=1 LAUNCH_OPERA_ON_FINISH=0 MULTI_USER_SETTING=1&quot;</code></pre>

<p>What if users want to specify Opera’s install path? In that case, we need to know the 8.3 version of the path name, which is almost impossible to predict. The solution is quite simple: just create the target directory first then query its 8.3 short path name. Here are some sample codes in Nalakuvara’s AutoHotKey script to do so:</p>

<pre><code>FileSelectFolder, OperaInstallPath, ::{20d04fe0-3aea-1069-a2d8-08002b30309d}, 1, Please choose the location you would like to install Opera. Press `&quot;Cancel`&quot; to apply default vaule %ProgramFiles%\Opera
Loop, %OperaInstallPath%, 2, 0
OperaInstallPathShort = %A_LoopFileShortPath%
RunWait, Opera_1000_int_Setup.exe /s /V&quot;/passive CREATE_DESKTOP_ICON=1 CREATE_QUICKLAUNCH_ICON=1 CREATE_STARTMENU_ICONS=1 LAUNCH_OPERA_ON_FINISH=0 MULTI_USER_SETTING=1 INSTALLDIR=%OperaInstallPathShort%&quot;</code></pre>

<p>First I use <code>FileSelectFolder</code> to ask users to specify a folder to install Opera into. The 2nd option value, <code>::{20d04fe0-3aea-1069-a2d8-08002b30309d}</code>, is a CLSID (Windows Class Identifiers, a list is available in <a href="http://www.autohotkey.com/docs/misc/CLSID-List.htm">AutoHotKey&#39;s documentation</a>) folder name for <strong>My Computer</strong>, which is the file chooser starting location. The 3rd option value, <code>1</code>, turns on a folder creation button. Users have to either select an already-existing folder or create a new folder before selecting it. Either way, the folder will now exist, and its long path name is stored in the <code>%OperaInstallPath%</code> variable.</p>

<p>Next I use <code>Loop</code> to get the 8.3 short path name via the <code>%A_LoopFileShortPath%</code> variable, stored in this context as <code>%OperaInstallPathShort%</code>. It is possible to invoke Opera’s silent installation with this variable; also note that the 2nd option value — <code>2</code> — limits <code>Loop</code> to retrieving only folders, and not files. The 3rd option value — <code>0</code> — disables recursive searching.</p>

<p>What if users have already installed Opera, previous to installing Nalakuvara? It is a little complicated to determine whether Opera is installed, if so, and where it is located, but I worked out a way. First I check the Windows registry — if Opera is installed, there should be something at <code>HKLM\SOFTWARE\Classes\Opera.HTML\shell\open\command</code>. We can use AutoHotKey’s <code>RegRead</code> to read its default value and store it as a variable, like so:</p>

<pre><code>RegRead, OperaInstallPathReg, HKLM, SOFTWARE\Classes\Opera.HTML\shell\open\command</code></pre>

<p>If Opera is installed, the <code>%OperaInstallPathReg%</code> should look something like this:</p>

<pre><code>&quot;C:\Program Files\Opera\opera.exe&quot; &quot;%1&quot;</code></pre>

<p>We only need the path part of this variable, so it is extracted using a simple regular expression, and a check performed with AutoHotKey’s <code>IfExist</code> function:</p>

<pre><code>OperaInstallPath := RegExReplace(OperaInstallPathReg, &quot;.(.:.+)\\[Oo]pera\.exe.+$&quot;, &quot;$1&quot;)
IfExist, %OperaInstallPath%</code></pre>

<p>However, it’s not that simple. Even if <code>%OperaInstallPathReg%</code> is null, which means there is nothing at <code>HKLM\SOFTWARE\Classes\Opera.HTML\shell\open\command</code>, users might still have installed Opera but then later uninstalled it, which may leave something behind in the user profile. We therefore need to check the following paths as well:</p>

<pre><code>IfExist, %APPDATA%\Opera</code></pre>

<p>and</p>

<pre><code>IfExist, %USERPROFILE%\Local Settings\Application Data\Opera</code></pre>

<p>If any of the three paths mentioned above exist on the system, it means that Opera has been installed at some point. It is a good idea at this point to remove the already-existing legacy files before you continue with the installation process, or patch them — Nalakuvara does this, but it gives the user a warning in case they don’t want to carry on with this.</p>

<p>What if users have previously installed Opera, and it is currently running? Don’t forget to close all existing Opera processes before continuing — this can be done in an AutoHotKey script like so:</p>

<pre><code>Process, Close, opera.exe</code></pre>

<p>The actual code used in Nalakuvara’s script is much complicated, and there are other details to care about. What if users press “Cancel” while selecting Opera install path? What if users select a file rather than a folder? Check and re-check, prepare defaults and fallbacks, and make your scripts bullet proof.</p>

<h4 id="linuxinstall">Linux installation procedure</h4>

<p>So that covers Windows, but what about Linux?</p>

<p>Debian packages (<code>.deb</code>) invoke the <a href="https://launchpad.net/gdebi">gdebi-gtk</a> package manager on Ubuntu’s GUI; alterntively you can also install <code>.deb</code> packages using <code>dpkg</code> on the command-line:</p>

<pre><code>dpkg -i <var>opera_10.00.deb</var></code></pre>

<p>However, <code>dpkg</code> does not install all the necessary dependencies for you. In order to do so, you have to use the APT package manager’s <code>apt-get</code> command:</p>

<pre><code>apt-get -f -y install</code></pre>

<p>RPM packages invoke the <a href="http://www.packagekit.org/">gnome-packagekit</a> package manager on Fedora’s GUI. Again, you could install RPM packages using <code>rpm</code> on the command-line:</p>

<pre><code>rpm -i --force <var>opera-10.00.rpm</var></code></pre>

<p>Luckily <code>rpm</code> deals with dependencies, so you do not have to do it manually.</p>

<p>If you fetch a tarball for generic Linux, just install it in the usual way:</p>

<pre><code>tar -xzf <var>opera-10.00.tar.gz</var>
cd <var>opera-10.00</var>
./install.sh</code></pre>

<p>This sounds great, but is it really that simple? No. Let’s work through the fiddly bits.</p>

<p>The main problem here is that your installer needs to have <strong>root</strong> permission to install packages. One way to achieve this is to ask users to enter the <code>su</code> command as root to run the script; another is to ask users to install and setup <code><a href="http://www.sudo.ws/">sudo</a></code> before the installation starts. I prefer using <code>sudo</code> rather than <code>su</code> for its security.</p>

<p>Ubuntu rather conveniently has <code>sudo</code> installed by default, and you can install and setup <code>sudo</code> on Linux destributions using the APT package manager (such as Fedora) with these commands:</p>

<pre><code>su root
apt-get install sudo
visudo</code></pre>

<p>You can add <code>sudo</code> to distros using the Easy Urpmi package manager (for example Mandriva) with these commands:</p>

<pre><code>su root
urpmi sudo
visudo</code></pre>

<p>The manual way to do install <code>sudo</code> is to fetch the source from <a href="http://www.sudo.ws/">http://www.sudo.ws/</a> and then compile it (although to do this, you have to <code>visudo</code> into <strong>sudoers</strong>.</p>

<h4 id="freebsdinstall">FreeBSD installation procedure</h4>

<p>The FreeBSD way to do all this is to work with <strong>ports</strong>:</p>

<pre><code>cd /usr/ports/www/opera
sudo make clean install</code></pre>

<p>If <code>sudo</code> is not usable yet on your FreeBSD installation, do this first:</p>

<pre><code>su root
cd /usr/ports/security/sudo
make clean install
visudo</code></pre>

<p class="note">On Linux or FreeBSD, you also need to remember to close all current Opera process before doing anything else:</p>

<pre><code>killall opera</code></pre>

<h3 id="location">File location and priority</h3>

<p>Once we have got to the stage where Opera is installed but the initial phase is not yet triggered, what files should we touch then? You might find the <a href="http://www.opera.com/docs/operafiles/">Files Used by Opera for Windows</a> and the <a href="http://www.opera.com/docs/operafilesnix/">Files Used by Opera for Linux, FreeBSD and Solaris</a> documents quite useful but a little outdated. To cut a long story short, here are our primary targets:</p>
<ul>
  <li><code>operaprefs.ini</code>: Stored program settings</li>
  <li><code>search.ini</code>: Default settings for the search engines available in Opera</li>
  <li><code>bookmarks.adr</code>: Default bookmarks file</li>
  <li><code>webmailproviders.ini</code>: Default settings for the web mail providers available in Opera</li>
  <li><code>fastforward.ini</code>: Defines what activates the Fast Forward button</li>
  <li><code>standard_menu.ini</code>: Opera standard menu configuration</li>
  <li><code>standard_toolbar.ini</code>: Opera standard toolbar configuration</li>
</ul>

<p>You might have already noticed that some files that have multiple instances on your system. Which one should you use, in these situations? The <a href="http://www.opera.com/support/mastering/sysadmin/#priority">Configuration Priority Scheme</a> section from Opera’s <a href="http://www.opera.com/support/mastering/sysadmin/">System Administrator’s Handbook</a> gives us a clue, but this document is not very detailed. After studying Ibis and doing some experiments, I finally figured out the actual priority order:</p>

<ul>
  <li><code>operaprefs.ini</code>:
    <ol>
      <li><code>%SYSTEMROOT%\SYSTEM32\operaprefs_fixed.ini</code></li>
      <li><code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\operaprefs.ini</code></li>
      <li><code>%USERPROFILE%\Local Settings\Application Data\Opera\<var>OPERA_DIR_NAME</var>\custom\defaults\operaprefs.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\custom\defaults\operaprefs.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\defaults\operaprefs.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\operaprefs_default.ini</code></li>
    </ol>
  </li>
  <li><code>search.ini</code>:
    <ol>
      <li><code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\search.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\locale\<var>LANGUAGE_CODE</var>\search.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\defaults\search.ini</code></li>
    </ol>
  </li>
  <li><code>bookmarks.adr</code>:
    <ol>
      <li><code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\bookmarks.adr</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\locale\<var>LANGUAGE_CODE</var>\bookmarks.adr</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\defaults\bookmarks.adr</code></li>
    </ol>
  </li>
  <li><code>webmailproviders.ini</code>:
    <ol>
      <li><code><var>OPERA_INSTALL_PATH</var>\defaults\webmailproviders.ini</code></li>
    </ol>
  </li>
  <li><code>fastforward.ini</code>:
    <ol>
      <li><code>%USERPROFILE%\Local Settings\Application Data\Opera\<var>OPERA_DIR_NAME</var>\custom\defaults\fastforward.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\custom\defaults\fastforward.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\defaults\fastforward.ini</code></li>
    </ol>
  </li>
  <li><code>standard_menu.ini</code>:
    <ol>
      <li><code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\menu\standard_menu.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\ui\standard_menu.ini</code></li>
    </ol>
  </li>
  <li><code>standard_toolbar.ini</code>:
    <ol>
      <li><code>%APPDATA%\Opera\<var>OPERA_DIR_NAME</var>\toolbar\standard_toolbar.ini</code></li>
      <li><code><var>OPERA_INSTALL_PATH</var>\ui\standard_toolbar.ini</code></li>
    </ol>
  </li>
</ul>

<p>Allow me to explain some details:</p>
<ul>
  <li><code><var>OPERA_INSTALL_PATH</var></code>: This is where you install Opera, <code>%PROGRAMFILES%\Opera</code> by default</li>
  <li><code><var>OPERA_DIR_NAME</var></code>: The final part of <code><var>OPERA_INSTALL_PATH</var></code>, <code>Opera</code> by default</li>
  <li><code><var>LANGUAGE_CODE</var></code>: The UI language that Opera is currently running with; <code>zh-tw</code> for Traditional Chinese, <code>zh-cn</code> for Simplified Chinese, <code>en</code> for English, etc.</li>
  <li><code>%USERPROFILE%\Local Settings\Application Data\Opera\<var>OPERA_DIR_NAME</var>\custom\defaults\*</code>: This is copied from <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\*</code> during the initial phase</li>
  <li><code>%PROGRAMFILES%</code>: A Windows environment variable, usually <code>C:\Program Files</code></li>
  <li><code>%APPDATA%</code>: A Windows environment variable, usually <code>%USERPROFILE%\Application Data</code></li>
  <li><code>%USERPROFILE%</code>: A Windows environment variable, usually <code>C:\Documents and Settings\<var>USER_NAME</var></code>, where <code><var>USER_NAME</var></code> is the Windows user name of the current user</li>
  <li><code>%SYSTEMROOT%</code>: A Windows environment variable, usually <code>C:\WINDOWS</code></li>
</ul>

<p><code>standard_menu.ini</code> and <code>standard_toolbar.ini</code> will not be overthrown by higher priority files. They will appear together and allow users to switch between them.</p>

<p>Any setting specific in higher priority files overthrows that in lower priority files. For example, if one specify not to use Mouse Gesture in <code>%SYSTEMROOT%\SYSTEM32\operaprefs_fixed.ini</code>, average users who have no privilege to modify system files have no way to enable Mouse Gesture; on the other hand, if one specify not to use Mouse Gesture in <code><var>OPERA_INSTALL_PATH</var>\operaprefs_default.ini</code>, any average user can still enable it. This kind of priority scheme is quite handy for system administrators to make sure that users will not run into troubles or make security flaw.</p>

<p class="note">If you are looking to customize the <a href="http://labs.opera.com/news/2009/12/22/">Opera 10.50 Labs pre-alpha snapshot</a>, there will be an <code>operaprefs_default.ini</code> file, as described above, which specifies the UI language to English. You may need to edit or delete this file before Opera’s initial phase to get customization to work.</p>

<p>It is quite tricky and complicated to decide which priority level of files to make the customizations to. Customizing files with a high priority will cause users to be unable to change their own preferences, which would be really frustrating. Customizing files with a low priority might result in things not working properly, as your changes could be easily overthrown by other files with higher priority. In the end I decided to make changes to the locale-based files if possible, as it makes a lot of sense to deliver different tweaks to users in different locales. For files that are not locale-based, the best choice will be <code><var>OPERA_INSTALL_PATH</var>\custom\defaults\*</code>, because this keeps installed files as intact as possible. I do not touch system files (ie, those in <code>%SYSTEMROOT%</code>) so that system administrators can do their job without unexpected troubles.</p>

<p>The files I customized on Windows are as follows:</p>
<ul>
  <li><code><var>OPERA_INSTALL_PATH</var>\custom\defaults\operaprefs.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\search.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\zh-cn\search.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\en\search.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\zh-tw\bookmarks.adr</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\zh-cn\bookmarks.adr</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\locale\en\bookmarks.adr</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\defaults\webmailproviders.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\custom\defaults\fastforward.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\ui\standard_menu.ini</code></li>
  <li><code><var>OPERA_INSTALL_PATH</var>\ui\standard_toolbar.ini</code></li>
</ul>
<p class="note">Opera on Linux is basically the same, except <code>operaprefs_fixed.ini</code> and <code>operaprefs_default.ini</code> are both located at <code>/etc</code> (on FreeBSD, <code>/usr/local/etc</code>).</p>

<h2 id="summary">Summary</h2>

<p>So concludes the first part of my explanation of how I created the Nalakuvara Opera browser for the Taiwanese community. I have covered Opera’s suitability for customization, background analysis and target audience research, naming, guidelines, the toolset I used during the project, initial installation, and working out which files to customize. In the next article I will start to discuss making the customizations in depth.</p>
