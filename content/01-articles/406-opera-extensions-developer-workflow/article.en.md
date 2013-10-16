Title: Opera extensions developer workflow
----
Date: 2010-11-22 23:39:14
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

<h2>Contents</h2>

<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#developermode">Developer mode</a></li>
    <li><a href="#errorconsole">Error console</a></li>
    <li><a href="#packaging">Packaging your extension</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p>In this short article, we’ll look at the developer workflow to create extensions, give some tips for extension development, and point out a couple of caveats. There is also a video embedded into the article at the end, which explains some of the same concepts discussed in the text.</p>

<p>For this guide, we start with the Hello World example introduced in <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying hello world to Opera extensions!</a>: go through the steps outlined in the article, but don’t zip up the content just yet – we’ll first do some debugging and fine-tuning.</p>

<p>If you have gone through all steps except packaging, you should have something similar to the folder structure in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/406-opera-extensions-developer-workflow/folder-structure.png" alt="extension folder structure" width="640" /></p>
<p class="comment">Figure 1: Hello World extension folder structure.</p>

<h2 id="developermode">Developer mode</h2>

<p>You can simply drag and drop the <code>config.xml</code> onto an open Opera window or its application icon, and the extension will be activated in the so-called “developer mode”. You’ll also see it listed as such in Opera’s installed extensions overview. Just like normally installed extensions, extensions in developer mode have “Disable” and “Uninstall” buttons, as well as a “Preferences/Privacy” dropdown. It is worth mentioning that installing and uninstalling extensions in developer mode does not modify anything on your hard drive — clicking the “Uninstall” button only removes the extension reference from the “Developer mode” section.</p>

<p>You’ll also notice that each extension running in developer mode gets two extra buttons: “Reload” and “Open containing folder”.</p>

<p>The “Reload” button will refresh the whole extension, allowing you to quickly try out some changes. For example, try altering <code>&lt;name&gt;</code>, <code>&lt;description&gt;</code> and <code>&lt;author&gt;</code> in the <code>config.xml</code>, and hit “Reload”: your changes are applied immediately, and you can make further tweaks as you go.</p>

<p>In case you have trouble locating the folder you’re developing from, you can easily find it in your file manager via the “Open containing folder” button.</p>

<video src="http://forum-test.oslo.osa/kirby/content/articles/406-opera-extensions-developer-workflow/extensions-workflow.webm" controls="controls" width="640"></video>

<h2 id="errorconsole">Error console</h2>

<p>For further debugging, you can use the Error Console, which you can open from the “Developer mode” section, the “Developer Tools” menu item, or by using Ctrl/Cmd + Shift + O. </p>

<p>You can then use <code>opera.postError</code> to post debugging messages to the Error Console. For an example on how to do this, have a look at <a href="http://dev.opera.com/articles/view/opera-extensions-messaging/#backgroundscript_injectedscript">our article on Messaging</a>.</p>

<p>Of course, you can also use <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> for more powerful DOM/JS/CSS debugging. You&#39;ll find all installed extensions listed in Opera Dragonfly&#39;s <a href="http://www.opera.com/dragonfly/documentation/">debugging context dropdown menu</a>.</p>

<h2 id="packaging">Packaging your extension</h2>

<p>Once you&#39;re done, your modifications are ready to be packaged as an extension.</p>

<ol> 
    <li>Open the containing folder in you file manager (or click the “Open containing folder” button).</li> 
    <li>Create a zip file with all files included in this folder. It&#39;s important the folder itself is <strong>not</strong> included. It&#39;s also good practice to not include invisible files that happen to be created by the system or version control software. For instance, on Mac, you can create a zip without .DS_Store files or .svn folders with the following command:<pre><code>cd myextension/
zip ../myextension.oex . -r -x &#39;*.svn/*&#39; -x &#39;*.DS_Store&#39;</code></pre></li>
    <li>If the zip tool has created a <code>.zip</code> file, change the extension to <code>.oex</code></li> 
    <li>Drag and drop the new extension on the browser window and accept.</li> 
    <li>Confirm that everything works as intended, and submit your extension to the <a href="https://addons.opera.com/addons/extensions/">Extensions Catalog</a>.</li> 
</ol>

