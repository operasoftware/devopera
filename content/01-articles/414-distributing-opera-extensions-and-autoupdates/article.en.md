Title: Distributing Opera extensions and auto-updates
----
Date: 2010-12-16 00:11:43
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-nd/3.0/
----
Text:

<h2>Through the Opera extensions catalog</h2>
<p>
Publishing your first Opera extension is a multi-step process that begins when you submit your extension for review. Extension developers are encouraged to publish and host their Opera extensions in the <a href="https://addons.opera.com/addons/extensions/">Opera extensions catalog</a>. You should take a look at the <a href="https://addons.opera.com/developer/guidelines/">Opera extensions publishing guidelines</a> to get the most out of hosting your Opera extensions with us.
</p>
<h2>Through your own site</h2>
<p>
In case you decide to also distribute Opera extensions through your own site, you will need to set the MIME type of your server. This is important because as Opera extensions carry the possibly unknown <code>.oex</code> file type, web servers might end up &quot;guessing&quot; the MIME type as being text/plain or application/octet-stream. According to the HTTP specifications, Opera will then have to process the document based on the reported MIME type instead of the correct MIME type.
</p>
<p>
For Apache web servers, you will add a <code>.htaccess</code> file in the same folder as the <code>.oex</code> file. It will affect the current directory and its sub-directories. You can append to an existing <code>.htaccess</code> file or create one with the content below.
</p>
<pre><code>
# OEX
AddType application/x-opera-extension .oex
</code></pre>
<p>
For Microsoft IIS server, see see <a href="http://technet.microsoft.com/en-us/library/bb742440.aspx">Microsoft&#39;s documentation</a> on editing MIME types.
</p>

<h2>Auto-updates</h2>
<p>Once you work on an extension and release it, that&#39;s not usually the end of the story. Over time you will want to add updates, bug fixes, and more features to your extensions. It is also important that once you do release a new version of your extension, users need to be updated to the new version without any hassle. Understanding the auto-update process is important in this regard.</p>

<p>
The auto-update process has two steps from a network perspective. First, when the browser triggers the extensions update, it checks if there is an update string stored in <code>config.xml</code>. The update string looks like this:
</p>
<pre><code>
&lt;update-description href=&quot;http://test.opera.com/api/w3c-wd1/update/opera-configurator-1.0-1/&quot;/&gt;
</code></pre>
<p>
The receiving server will respond with:
</p>
<pre><code>
&lt;update-info xmlns=&quot;http://www.w3.org/ns/widgets&quot; src=&quot;http://test.opera.com/media/extensions/23/235873f76d9245be97481c262e05b8d1.oex&quot; version=&quot;1.1&quot;&gt;
&lt;/update-info&gt;
</code></pre>
<p>
As implied, <code>src</code> is where the updated extension is located. It will be downloaded and installed by the browser. In the case where there is no update available, the server will not send anything back.</p>
<p>
An extension is identified by an <code>id</code> stored in <code>config.xml</code>, for example <code>id=&quot;extensions:opera-configurator&quot;</code>. There is also <code>version</code> where nothing will be updated if it is already up-to-date. An extension might be updated in the range of 1 to 30 days. You can change the auto-update check interval by going to <code>opera:config#AutoUpdate|UpdateCheckInterval</code> — the default value is 3 days or 259200 seconds.
</p>
<p>
The whole update mechanism for Opera extensions can be turned off together with the browser auto-update under <code>opera:config#UserPrefs|LevelOfUpdateAutomation</code>. If the update server is different than the default Opera URL, an untrusted repository warning will be displayed as shown below:
</p>
<img src="/articles/view/distributing-opera-extensions-and-auto-updates/untrusted_source_warning.png" alt="Untrusted Repository warning" />
<p class="note">NOTE: It is essential that the ID attribute is included in the <code>&lt;widget&gt;</code> element. Without this attribute the update process will not work. Some users have reported crashes when auto-update is performed without an ID attribute.</p>

<h2>Reference</h2>
<p><a href="http://dev.w3.org/2006/waf/widgets-updates/">Full specification of Widget Updates</a> (Note: Update Description, which can be sent via server response in the form of update info, is not supported in Opera 11.)</p>
