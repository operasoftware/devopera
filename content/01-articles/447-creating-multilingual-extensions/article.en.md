Title: Creating multilingual extensions
----
Date: 2011-04-12 06:05:31
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<p>Localising an Opera extension is done, broadly speaking, in two parts:</p>
<ul>
  <li>Adding translations of your extension&#39;s title, description, etc. in the <a href="#config-xml">config.xml file</a></li>
  <li>Putting localised files and resources in <a href="#files">language-specific folders</a></li>
</ul>
<p>Read on for an in-depth explanation, including an <a href="#example">example extension</a> showing localisation in practice.</p>

<div class="note">
<p>Please Note: the <a href="https://addons.opera.com/">Opera addons catalog</a> supports all standard language and country codes defined in the <a href="http://site.icu-project.org/">ICU project</a>, and our processing and interpretation via <a href="http://pyicu.osafoundation.org/">pyICU</a>: a Python ICU wrapper. We support all standard language codes, but not script codes, variants and keywords as mentioned in the <a href="http://userguide.icu-project.org/locale">ICU user guide</a>, except codes that we&#39;ve made an exception for. Examples of non-supported codes are as follows:</p>
<ul>
  <li><code>es-419</code>: not a standard language code format, although we are aiming to support such codes in the future.</li>
  <li><code>iw</code>: An old code for Hebrew; <code>he</code> should be used instead.</li>
</ul>

<p>If you find that a code you are using is not supported, and you feel that it should be, please let us know, by commenting on this article comment thread.</p>
</div>

<h2>Contents</h2>

<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#switching">Switching Opera to a different locale</a></li>
    <li><a href="#example">Our extension</a></li>
    <li><a href="#techniques">Localisation techniques</a></li>
    <li><a href="#config-xml">Localising config.xml metadata</a></li>
    <li><a href="#organising">Organising files inside an extension</a></li>
    <li><a href="#files">Localising files and resources</a></li>
    <ul>
        <li><a href="#algorithm">Folder-based localisation algorithm step by step walkthrough</a></li>
    </ul>
    <li><a href="#result">End result</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p>Authors who want to provide their extensions in different languages don&#39;t have to create separately packaged versions of their <code>.oex</code> file. Opera&#39;s extensions use the same packaging and configuration as <a href="http://www.w3.org/TR/widgets/">W3C Widgets</a>, which includes built-in mechanisms for providing multilingual resources, all wrapped up in a single self-contained archive.</p>

<p class="note">Make sure you grab all the <a href="/articles/view/creating-multilingual-extensions/multilingual-extensions.zip">source files for this article</a>, wrapped up for your convenience in a single zip archive. It contains the packaged <code>.oex</code> extensions - as well as separate folders with all the uncompressed files – to make it easy to follow the recommended <a href="http://dev.opera.com/articles/view/opera-extensions-developer-workflow/">Opera extensions developer workflow</a> and take advantage of our <em>Developer Mode</em>.</p>

<p class="note">Although this article deals specifically with Opera extensions, the general concepts and techniques outlined here will also apply to the localisation of traditional W3C Widgets.</p>

<h2 id="switching">Switching Opera to a different locale</h2>

<p>By default, the version of Opera that you installed will be set to match the locale of your operating system. In order to test that our localised extension works correctly, we&#39;ll need to explicitly switch Opera to different locales.</p>

<p>In Windows and Linux, this is achieved by going to <em>Menu &gt; Settings &gt; Preferences...</em> and changing the <em>Language</em> option in the <em>General</em> tab. If you installed the international version of Opera, this will – for the most common languages – also change the language of the browser&#39;s user interface itself (including menus, dialog boxes, etc). For non-international versions, it will inform you that you don&#39;t have the appropriate language file available, but it will still send that language preference to websites to serve you content in that language if available, and it will switch the language on multilingual extensions.</p>

<p class="note">After changing Opera&#39;s locale, even if the user interface language changes immediately you will need to close and reopen the browser for the change to affect extensions.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig1.png" alt="The language preferences dialogs on Windows" width="640" height="320" />
<p class="comment">Figure 1: The language preferences dialogs on Windows.</p>
</div>

<p>Beyond choosing the primary language for the browser, on Windows/Linux we can also define a series of fallback locales, which will be used when content is not available for a specific language. This is done by selecting the <em>Details...</em> button next to the language dropdown and modifying the <em>Preferred languages for webpages</em> list.</p>

<p class="note">The browser locale affects more than just the user interface. Information about the user&#39;s preferred locale(s) is sent as part of the browser&#39;s request headers. For instance, if the list of preferred locales was comprised of British English, English and German, Opera&#39;s <code>Accept-Language</code> header would contain something like <code>en-GB,en;q=0.9,de;q=0.8</code>. Websites can use this information in the request header to serve content to the browser in different languages, according to the user&#39;s preference.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig2.png" alt="Language &amp;amp; Text preferences dialog in OS X" width="640" height="624" />
<p class="comment">Figure 2: <em>Language &amp; Text</em> preferences dialog in OS X.</p>
</div>

<p>In OS X, Opera follows the platform convention, which is slightly different: instead of providing a way to change the locale and the list of preferred languages in the browser&#39;s preferences, it follows the OS-wide settings in <em>System Preferences... &gt; Language &amp; Text</em> (<em>System Preferences... &gt; International &gt; Language</em> in older versions of OS X). For changes made in this dialog to take effect in Opera, you will need to close and reopen the browser.</p>

<h2 id="example">Our extension</h2>

<p>To illustrate the localisation process, in this article we&#39;ll be localising a fairly basic extension. To keep things simple, all this extension does is add a button to the browser&#39;s toolbar which brings up a pop-up containing some short text.</p>

<p>Our first version can be found in <a href="/articles/view/creating-multilingual-extensions/l18n-1.oex">Localisation test &#x2014; version 1.1</a>.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig3.png" alt="Our example extension in action" width="345" height="184" />
<p class="comment">Figure 3: Our example extension in action.</p>
</div>

<p>This version of the extension contains the following files, all placed in the root of the archive:</p>

<ul>
<li><code>button.png</code></li>
<li><code>config.xml</code></li>
<li><code>general.css</code></li>
<li><code>icon.png</code></li>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul>

<p>And here&#39;s the <code>config.xml</code>:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; version=&quot;1.1&quot;&gt;
    &lt;name&gt;Localization test&lt;/name&gt;
    &lt;description&gt;Localization test&lt;/description&gt;
    &lt;author href=&quot;http://dev.opera.com&quot;
            email=&quot;patrickl@opera.com&quot;&gt;Patrick H. Lauke&lt;/author&gt;
&lt;/widget&gt;</code></pre>

<p>In its current state, this extension is unlocalised – there are no provisions for different languages, and no information has been given in the configuration file as to what the current language being used is. So, from this simple starting point, let&#39;s get cracking and turn this into a localised, multilingual extension.</p>

<h2 id="techniques">Localisation techniques</h2>

<p>The <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration</a> specification defines two complementary methods that are used to provide extension content in different languages: <a href="http://www.w3.org/TR/widgets/#element-based-localization">element-based localisation</a>, which takes care of the extension metadata, and <a href="http://www.w3.org/TR/widgets/#folder-based-localization">folder-based localisation</a>, which lets us provide different versions of our content for specific languages.</p> 

<h2 id="config-xml">Localising <code>config.xml</code> metadata</h2>

<p>The <code>config.xml</code> file contains metadata that describes an extension &#x2014; information about the name of the extension, who the author is, a short description, licensing, etc. This information is presented to the user in the extension manager and any browser dialogs relating to that extension.</p>

<p class="note">For a more in-depth look at the contents and purpose of <code>config.xml</code>, see our extensive guide on <a href="http://dev.opera.com/articles/view/config-xml-howto/"><em>The ins and outs of <code>config.xml</code></em></a>.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig4.png" alt="config.xml metadata used in the extension manager" width="640" height="365" />
<p class="comment">Figure 4: <code>config.xml</code> metadata used in the extension manager.</p>
</div>

<p>Our first step in localising our extension is to provide part of this metadata in different languages through <a href="http://www.w3.org/TR/widgets/#element-based-localization">element-based localisation</a>. In our configuration file, we simply need to add multiple versions of our elements, specifying their respective language &#x2014; using the standard <a href="http://www.iana.org/assignments/language-subtag-registry">IANA language subtags</a> &#x2014; with an <code>xml:lang</code> attribute.</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; version=&quot;1.2&quot;&gt;
    &lt;name&gt;Localization test&lt;/name&gt;
    &lt;name xml:lang=&quot;en-gb&quot;&gt;Localisation test&lt;/name&gt;
    &lt;name xml:lang=&quot;fr&quot;&gt;Test de localisation&lt;/name&gt;
    &lt;name xml:lang=&quot;it&quot;&gt;Test di localizzazione&lt;/name&gt;
    &lt;name xml:lang=&quot;de&quot;&gt;Lokalisierungstest&lt;/name&gt;
    &lt;name xml:lang=&quot;ru&quot;&gt;тест локализации&lt;/name&gt;
    &lt;name xml:lang=&quot;ja&quot;&gt;ローカリゼーションテスト&lt;/name&gt;
    &lt;description&gt;Localization test&lt;/description&gt;
    &lt;description xml:lang=&quot;en-gb&quot;&gt;Localisation test&lt;/description&gt;
    &lt;description xml:lang=&quot;fr&quot;&gt;Test de localisation&lt;/description&gt;
    &lt;description xml:lang=&quot;it&quot;&gt;Test di localizzazione&lt;/description&gt;
    &lt;description xml:lang=&quot;de&quot;&gt;Lokalisierungstest&lt;/description&gt;
    &lt;description xml:lang=&quot;ru&quot;&gt;тест локализации&lt;/description&gt;
    &lt;description xml:lang=&quot;ja&quot;&gt;ローカリゼーションテスト&lt;/description&gt;
    &lt;author href=&quot;http://dev.opera.com&quot;
                    email=&quot;patrickl@opera.com&quot;&gt;Patrick H. Lauke&lt;/author&gt;
&lt;/widget&gt;</code></pre>

<p>The only elements that allow this form of localisation are:</p>

<ul>
<li><code>name</code></li>
<li><code>description</code></li>
<li><code>license</code></li>
</ul>

<p>To keep things neat and tidy, I want to explicitly set the language of our default elements to <code>xml:lang=&quot;en&quot;</code> as well. When doing this, we need to also include the <code>defaultlocale</code> attribute to our <code>&lt;widget&gt;</code> element, so the browser knows what the default/fallback is.</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; defaultlocale=&quot;en&quot; version=&quot;1.2&quot;&gt;
    &lt;name xml:lang=&quot;en&quot;&gt;Localization test&lt;/name&gt;
    &lt;name xml:lang=&quot;en-gb&quot;&gt;Localisation test&lt;/name&gt;
    &lt;name xml:lang=&quot;fr&quot;&gt;Test de localisation&lt;/name&gt;
    &lt;name xml:lang=&quot;it&quot;&gt;Test di localizzazione&lt;/name&gt;
    &lt;name xml:lang=&quot;de&quot;&gt;Lokalisierungstest&lt;/name&gt;
    &lt;name xml:lang=&quot;ru&quot;&gt;тест локализации&lt;/name&gt;
    &lt;name xml:lang=&quot;ja&quot;&gt;ローカリゼーションテスト&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;Localization test&lt;/description&gt;
    &lt;description xml:lang=&quot;en-gb&quot;&gt;Localisation test&lt;/description&gt;
    &lt;description xml:lang=&quot;fr&quot;&gt;Test de localisation&lt;/description&gt;
    &lt;description xml:lang=&quot;it&quot;&gt;Test di localizzazione&lt;/description&gt;
    &lt;description xml:lang=&quot;de&quot;&gt;Lokalisierungstest&lt;/description&gt;
    &lt;description xml:lang=&quot;ru&quot;&gt;тест локализации&lt;/description&gt;
    &lt;description xml:lang=&quot;ja&quot;&gt;ローカリゼーションテスト&lt;/description&gt;
    &lt;author href=&quot;http://dev.opera.com&quot;
        email=&quot;patrickl@opera.com&quot;&gt;Patrick H. Lauke&lt;/author&gt;
&lt;/widget&gt;</code></pre>

<p>You can find this updated version of <code>config.xml</code> in <a href="/articles/view/creating-multilingual-extensions/l18n-2.oex">Localisation test &#x2014; version 1.2</a>.</p>

<p>Now, when installing the extension, the browser will attempt to find the version of each element that most closely matches the user&#39;s selected locale and language preference, with a series of fallback steps:</p>
<ol>
<li>First, the browser will try to find an exact match for the user&#39;s locale. For instance, if I have set my browser to <code>en-gb</code>, Opera will first attempt to find elements that are marked as <code>xml:lang=&quot;en-gb&quot;</code>.</li>
<li>If no exact match is found, the browser will attempt to find any other elements from within the same language range. In our case, it would start to look for anything marked as simply <code>xml:lang=&quot;en&quot;</code>.</li>
<li>The above two steps are repeated for each language/locale that the user may have set in their preferences.</li>
<li>If all else fails, the browser will fall back to the default content &#x2014; the elements matching the default locale or, if <code>defaultlocale</code> was not defined in the <code>widget</code> element, any unlocalised elements.</li>
</ol>

<p>Note that if <code>config.xml</code> contains multiple versions of the same element localised for a specific language, or multiple versions of an unlocalised element, only the first one of those (in source order) will be processed. For example, if our configuration contained</p>

<pre><code>
&lt;description xml:lang=&quot;en&quot;&gt;Localization test&lt;/description&gt;
&lt;description xml:lang=&quot;en&quot;&gt;Some other description&lt;/description&gt;
…
&lt;description xml:lang=&quot;en&quot;&gt;Yet another description&lt;/description&gt;</code></pre>

<p>only the first <code>description</code> would be used.</p>

<p>We&#39;re off to a good start. Now, if you switch your browser to different locales, you&#39;ll notice that the metadata (when installing or managing the extension) is presented in different languages.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig5.png" alt="Our extension now shows properly localised metadata in the install, management and uninstall dialogs, but the icon is still the same" width="640" height="523" />
<p class="comment">Figure 5: Our extension now shows properly localised metadata in the install, management and uninstall dialogs, but the icon is still the same.</p>
</div>

<p>However, element-based localisation doesn&#39;t allow us to set different, language-specific icons and most importantly, the actual functionality of our extension is still only available in the default English version. We&#39;ll tackle this more fundamental part of localisation in a moment but first, let&#39;s organise our files a little better &#x2014; this will hopefully make things clearer as we proceed.</p>

<h2 id="organising">Organising files inside an extension</h2>

<p>The way extensions are packaged gives authors a lot of flexibility in how they want to organise their files. At the simplest level, we can keep all our files in the root of the <code>.oex</code> archive and, if we stick to some <a href="http://www.w3.org/TR/widgets/#reserved-file-and-folder-names">basic naming conventions</a>, the browser will automatically find standard components like our <code>index.html</code> start file and <code>icon.png</code>. However, we can also be a lot more methodical and structured, adding any number of subdirectories to our extensions to better organise our content. Personally, I like to keep a separate folder for <code>images</code> and <code>styles</code>. So, let&#39;s tidy up our extension as follows:</p>

<ul>
<li><code>images</code>
<ul>
<li><code>button.png</code></li>
<li><code>icon.png</code></li>
</ul></li>
<li><code>styles</code>
<ul>
<li><code>general.css</code></li>
</ul></li>
<li><code>config.xml</code></li>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul>

<p>Jumping into our extension&#39;s HTML files for a moment, we now obviously need to change the references to our toolbar icon in <code>index.html</code></p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;script&gt;
    window.addEventListener(&quot;load&quot;, function(){
      var theButton;
      var ToolbarUIItemProperties = {
        title: &quot;Localization test&quot;,
          icon: &quot;/images/button.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
              width: 300,
              height: 100
          }
      }
      theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
      opera.contexts.toolbar.addItem(theButton);
  }, false);
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>and our stylesheet in <code>popup.html</code></p>

<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Localization test&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/general.css&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Localization test&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p class="note">As with regular web pages, references to external resources (like the <code>src</code> attribute on an <code>&lt;img&gt;</code> element, or the <code>href</code> pointing a stylesheet on a <code>&lt;link&gt;</code> element) can be relative to the current file, or relative to the root of the extension itself (starting the reference with a slash, e.g. <code>/images/button.png</code>), as we&#39;ve done in our example above.</p>

<p>As our <code>icon.png</code> has now moved from its default location at the root of the extension to the <code>images</code> subfolder, we need to edit the <code>config.xml</code> file to explicitly tell the browser where to find it. Once again, I&#39;ve opted for a reference that&#39;s relative to the root of the extension:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; defaultlocale=&quot;en&quot; version=&quot;1.3&quot;&gt;
    …
    &lt;icon src=&quot;images/icon.png&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>You can find these further organizational updates in <a href="/articles/view/creating-multilingual-extensions/l18n-3.oex">Localisation test &#x2014; version 1.3</a>.</p>

<p>You might now think that, in order to provide a custom icon for a specific language, we can just add separate <code>icon</code> elements with different <code>xml:lang</code> attributes but unfortunately <code>icon</code> does not allow for element-based localisation.</p>

<p>For this, as well as for more fundamental needs such as localising <code>index.html</code> (which sets the <code>title</code> tooltip associated with the button that appears in the toolbar) and <code>popup.html</code>, and having language-specific resources like the <code>button.png</code>, we need to use a different method &#x2014; folder-based localisation.</p>

<h2 id="files">Localising files and resources</h2>

<p><a href="http://www.w3.org/TR/widgets/#folder-based-localization">Folder-based localisation</a> is used when we want to provide completely separate files and resources, depending on the user&#39;s locale and language settings.</p>

<p>First, we need to create a special <code>locales</code> folder in the root of our extension.</p>

<p class="note"><code>locales</code> is a reserved folder name, as it serves the specific purpose of containing content for folder-based localisation. It must not be used for any other type of content.</p>

<p>In this folder we then create subfolders that match the <a href="http://www.iana.org/assignments/language-subtag-registry">IANA language subtags</a> for each locale that we want to provide localised content for.</p>

<p class="note">Although language tags don&#39;t usually need to be in any particular case (uppercase, lowercase, or even mixed), these folder names must all be lowercase to account for differences in case-sensitive file handling on different operating systems.</p>

<p>So, after we set up our various folders and create the separate, localised versions of our files, our extension is now structured as follows:</p>

<ul>
<li><strong><code>locales</code></strong>
<ul>
<li><code>de</code>
<ul>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>en</code>
<ul>
<li><code>images</code>
<ul>
<li><code>button.png</code></li>
<li><code>icon.png</code></li>
</ul></li>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>en-gb</code>
<ul>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>fr</code>
<ul>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>it</code>
<ul>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>ja</code>
<ul>
<li><code>images</code>
<ul>
<li><code>button.png</code></li>
<li><code>icon.png</code></li>
</ul></li>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
<li><code>ru</code>
<ul>
<li><code>images</code>
<ul>
<li><code>button.png</code></li>
<li><code>icon.png</code></li>
</ul></li>
<li><code>index.html</code></li>
<li><code>popup.html</code></li>
</ul></li>
</ul></li>
<li><code>styles</code>
<ul>
<li><code>general.css</code></li>
</ul></li>
<li><code>config.xml</code></li>
</ul>

<p>You can find this version inside <a href="/articles/view/creating-multilingual-extensions/l18n-4.oex">Localisation test &#x2014; version 1.4</a>.</p>

<p>Notice that I didn&#39;t make separate copies for every individual file in the various language subfolders. For instance, I only provided different <code>icon.png</code> and <code>button.png</code> images for the English (default locale), Russian and Japanese versions (the word &quot;Test&quot; that appears in the English version works fine for all the other languages I want to cater for as well). Also, as my stylesheet for the popup doesn&#39;t do anything locale-specific and applies to all languages, I only have a single copy of it outside of the <code>locales</code> folder, meaning that it&#39;s regarded as unlocalised content.</p>

<p>This works because when the browser needs to find a particular file or resource, it will apply the same language-matching algorithm we saw above:</p>

<ol>
<li>First, it will try to find an exact match for the user&#39;s locale. If I&#39;ve set my preference to <code>en-gb</code>, Opera will look for a <code>/locales/en-gb/</code> folder, and use this folder as a new root context. Unless otherwise specified in <code>config.xml</code>, it will start to look for default files like <code>index.html</code> and <code>icon.png</code> in this folder. Any references relative to the location of the <code>config.xml</code> file in the root of the extension, like <code>images/icon.png</code>, are internally translated to be relative to this locale folder, e.g. <code>/locales/en-gb/images/icon.png</code>.</li>
<li>If no exact match is found (the folder or file doesn&#39;t exist), the browser will try to find it inside any <code>locales</code> subfolders in the same language range. In the case of our icon, it would start to look in <code>/locales/en/images/icon.png</code>.</li>
<li>If there is still no match, the above two steps are repeated for each language/locale defined in the preferences.</li>
<li>If all else fails, the browser will try and find the file in the <code>locales</code> subfolder matching the <code>defaultlocale</code> value, or failing that in the actual root of the <code>.oex</code> archive as unlocalised content (as is the case with <code>/styles/general.css</code>).</li>
</ol>

<h3 id="algorithm">Folder-based localisation algorithm step by step walkthrough</h3>

<p>This may appear confusing at first, so let&#39;s work through this algorithm for all the files that are being referenced. Let&#39;s assume that I&#39;ve set my preference to <code>en-gb</code>. First of all, the browser will need to find the icon for our extension:</p>

<ol>
  <li><code>config.xml</code> says the icon should be found in <code>&lt;icon src=&quot;images/icon.png&quot;/&gt;</code>. As there is a <code>locales</code> folder, let&#39;s use our preferred locale as a root context and see if <code>/locales/en-gb/images/icon.png</code> exists.</li>
  <li>Moving up in the language range, let&#39;s check <code>/locales/en/images/icon.png</code>.</li>
</ol>

<p>Next, the default <code>index.html</code> file:</p>

<ol>
  <li><code>config.xml</code> doesn&#39;t mention any custom location for the start file, so let&#39;s begin by looking in <code>/locales/en-gb/index.html</code>.</li>
</ol>

<p>In <code>index.html</code>, our JavaScript references <code>/images/button.png</code> for the toolbar button:</p>

<ol>
  <li>Let&#39;s start with <code>/locales/en-gb/images/button.png</code>.</li>
  <li>Again, we move up the language range and see if the image is in <code>/locales/en/images/button.png</code>.</li>
</ol>

<p>When the user presses the toolbar button, the JavaScript in <code>index.html</code> will try to open the <code>popup.html</code> file:</p>

<ol>
  <li>As this is a relative reference to our index file, let&#39;s look in <code>/locales/en-gb/popup.html</code>.</li>
</ol>

<p>Lastly, <code>popup.html</code> references a stylesheet at <code>/styles/general.css</code>:</p>

<ol>
  <li>We start with <code>/locales/en-gb/styles/general.css</code>.</li>
  <li>Moving up, we look in <code>/locales/en/styles/general.css</code>.</li>
  <li>At this point, we loop through each individual fallback language defined in our preferences &#x2014; for instance, if my list of preferred locales was comprised of <code>en-gb</code>, <code>de</code> and <code>it</code>, the above steps would be repeated to look for the stylesheet in <code>/locales/de/styles/general.css</code> and in <code>/locales/it/styles/general.css</code>.</li>
  <li>Ok, so the stylesheet doesn&#39;t appear to be in any of the preferred locales. Did the <code>widget</code> definition in <code>config.xml</code> contain a <code>defaultlocale</code> attribute? Yes, it&#39;s set to <code>defaultlocale=&quot;en&quot;</code>, but we already checked there and <code>/locales/en/styles/general.css</code> doesn&#39;t exist. As a last resort, let&#39;s see if the stylesheet can be found from the root of the widget as unlocalised content, at <code>/styles/general.css</code>.</li>
</ol>

<p>Admittedly, this algorithm may seem quite daunting at first, and there are certain complex situations where (particularly because of the third step, which loops through the various fallback locales first before resorting to default/unlocalised versions) Opera will behave in apparently unexpected ways.</p>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig6.png" alt="Opera is set to French, but the extension shows the Japanese version of the icon due to the language fallback list in our preferences" width="640" height="651" />
<p class="comment">Figure 6: Opera is set to French, but the extension shows the Japanese version of the icon due to the language fallback list in our preferences.</p>
</div>

<div class="note">
<p>If you&#39;re getting strange results after changing the <em>Language</em> settings a few times, check the list of fallback locales and make sure the order of those locales is still correct – see the <em>Preferred languages for webpages</em> dialog on Windows/Linux, or the <em>Languages &amp; Text</em> preference in OS X.</p>
<p>In the example shown in Figure 6, our <em>Language</em> is set to French, but the browser is showing the localised icon of the Japanese version. Looking at the <em>Preferred languages...</em> list (after an extensive round of testing different locales), we see that the fallback stack now contains <code>fr</code>, <code>ja</code>, <code>ru</code>, <code>it</code>, <code>en-gb</code>, <code>en</code>. When looking for the icon, the browser will first try to locate it in <code>/locales/fr/images/icon.png</code>, and after that it will loop through the remaining languages in the stack <strong>before</strong> resorting to the default. As the next language in our stack <strong>does</strong> have an icon at <code>/locales/ja/images/icon.png</code>, it&#39;s the Japanese icon that is displayed.</p>
<p>Very few users are likely to have this sort of overloaded fallback list of languages, but if you&#39;re testing your extensions, you can quickly end up in these strange situations &#x2014; at which point I&#39;d recommend simply deleting (on Windows/Linux) or unchecking (using the <em>Edit List...</em> option in OS X) the majority of those fallbacks to more closely match what &quot;real&quot; users are likely to have.</p>
</div>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig7.png" alt="Our finished extension now shows both localised text and a locale-specific icon in the various extension installation, management and uninstall dialogs" width="640" height="523" />
<p class="comment">Figure 7: Our finished extension now shows both localised text and a locale-specific icon in the various extension installation, management and uninstall dialogs.</p>
</div>

<p>Once you manage to wrap your head around this algorithm, you&#39;ll be able to keep your multilingual extensions lean and minimal, without unnecessary duplication &#x2014; only &quot;patching in&quot; those files that are actually different from language to language.</p>

<h2 id="result">End result</h2>

<div>
<img src="/articles/view/creating-multilingual-extensions/fig8.png" alt="Our finished extension, showing appropriately localised buttons, tooltips and content for Japanese, German and Russian locales" width="640" height="371" />
<p class="comment">Figure 8: Our finished extension, showing appropriately localised buttons, tooltips and content for Japanese, German and Russian locales.</p>
</div>

<p>And there we have it. Using the two complementary techniques of element-based and folder-based localisation, we now have a single <code>.oex</code> extension file that works in a variety of different languages. The dialog shown when the extension is first installed, the listing in the extension manager, the button in the browser&#39;s toolbar, and of course the popup that is shown when the button is activated, are all available in localised flavours. So what are you waiting for? If you&#39;ve already created your own extension, why not try to make it work even better for your international users?</p>

<p class="note">Did you create a great multilingual extension and are planning to submit it to <a href="http://addons.opera.com">Opera&#39;s extensions catalogue</a>? Then make sure that you also add multilingual descriptions as part of the submission process.</p>code
