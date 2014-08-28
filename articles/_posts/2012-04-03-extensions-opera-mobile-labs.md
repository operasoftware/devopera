---
title: Extensions Come to Opera Mobile
authors:
- andreas-bovens
intro: 'When adding extensions support to our Presto engine, a lot of time was spent behind the scenes so as to make our extensions framework very versatile and lightweight, with the aim of using it on other platforms as well. Today, we’re happy to present you with an early preview of extensions running on Opera Mobile!'
license: cc-by-3.0
---
<p>When adding extensions support to our Presto engine <a href="http://my.opera.com/chooseopera/blog/2010/10/14/opera-11-will-have-extensions">back in 2010</a>, a lot of time was spent behind the scenes so as to make our <a href="https://dev.opera.com/addons/extensions/">extensions framework</a> very versatile and lightweight. Although the initial release was targeted for desktop only, every aspect of the extensions API was drafted with mobile in mind.</p>

<p>Today, we're happy to present you with a <strong>Labs release of Opera Mobile with support for extensions</strong>!</p>

<p><object width="640" height="360"><param name="movie" value="http://www.youtube.com/v/PR6EoHsWL2Q?version=3&hl=en_US&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/PR6EoHsWL2Q?version=3&hl=en_US&rel=0" type="application/x-shockwave-flash" width="640" height="360" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>

<p>This is a very early Labs release and it's not quite certain at this point that extensions functionality will effectively make it into a future release of Opera Mobile; the design is also most definitely <strong>not final</strong>, and there are some rough edges here and there, but if that doesn't scare you away – and why should it! –, you can find an Opera Mobile Labs build with extensions support for Android below. In addition, we've released extension-enabled Opera Mobile Emulator Labs builds, so you can test your extensions in a desktop-based Opera Mobile instance as well.</p>

<ul>
<li><a href="http://www.opera.com/download/get.pl?id=34585&sub=true&nothanks=yes&location=360">Opera Mobile Labs build with extensions for Android (.apk)</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34588&sub=true&nothanks=yes&location=360">Opera Mobile Emulator Labs build with extensions for Windows (.zip)</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34586&sub=true&nothanks=yes&location=360">Opera Mobile Emulator Labs build with extensions for Mac (.dmg)</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34587&sub=true&nothanks=yes&location=360">Opera Mobile Emulator Labs build with extensions for Linux (.tar.gz)</a></li>
</ul>

<p>Once you've downloaded a build, you'll want to head over to <a href="http://addons.opera.com/">the Opera Extensions site</a>, where you'll find plenty of extensions to play with. When doing so, please keep in mind the following known issues:</p>

<ul>
<li>Speed Dial extensions are not supported.</li>
<li>Extensions relying on keyboard shortcuts and/or mouse events might not work as expected.</li>
<li>Popup windows are currently launched as a new tab, which limits their functionality. This is a known issue, and as stated earlier, this is not the final design.</li>
<li>Buttons can become blurry on high-DPI screens.</li>
</ul>

<p>If you don't know where to start, we found the following extensions to work quite well: <a href="https://addons.opera.com/en/addons/extensions/details/ghostery/">Ghostery</a>, <a href="https://addons.opera.com/en/addons/extensions/details/layers/">Layers</a>, <a href="https://addons.opera.com/en/addons/extensions/details/google-images-direct/">Google Images Direct</a>, <a href="https://addons.opera.com/en/addons/extensions/details/http-header/">HTTP Header</a>, <a href="https://addons.opera.com/en/addons/extensions/details/lastpass/">LastPass</a>.</p>

<p>You can find all installed extensions by clicking the green <em>Extensions</em> icon in the Opera Menu, from where you can disable or uninstall them, and tweak various settings. Furthermore, the <em>Install extension</em> menu option allows you to sideload extensions from the local file system as well.</p>

<img src="mobile-emulator_extension-menu.png" alt="Screenshot of Opera Mobile Emulator with extension menu option" height="520" width="330" style="float: left;">
<img src="mobile-emulator_extensions.png" alt="Screenshot of Opera Mobile Emulator showing all installed extensions" height="520" width="330">

<p>We have also added the option to load unzipped extensions for testing purposes, just like <a href="https://dev.opera.com/articles/view/opera-extensions-developer-workflow/#developermode">Opera desktop's Developer Mode</a>. This is very handy for development, as it saves you from zipping and installing your extension over and over again. In order to use this, load Opera Mobile on your device or PC, choose the earlier mentioned <em>Install extension</em> menu option and navigate to the config.xml file of your unzipped extension. The extension will then be loaded in developer mode, and its settings page has a handy <em>Reload</em> menu option, which you can click to reload the extension after you've made some changes to the code.</p>

<p>And of course, you can use Opera Dragonfly's remote debugging functionality to inspect the inner workings of the installed extensions' JS, DOM and CSS. For detailed instructions on how to connect Opera Mobile with Opera Dragonfly, we refer to the <a href="http://www.opera.com/dragonfly/documentation/remote/">remote debugging section</a> in our Opera Dragonfly guide: it's as easy as clicking a few buttons.</p>

<img src="remote-debug-mobile-extension.png" alt="Remote debugging of an extension with Opera Dragonfly" width="660" height="322">

<p>So, that's mobile extensions in a nutshell. Give it a spin, try out your favorite extensions, and let us know in the comments what you think about it!</p>
