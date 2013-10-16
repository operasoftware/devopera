Title: The ins and outs of config.xml
----
Date: 2010-11-25 22:51:15
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
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#createtheconfig.xmlfile">Creating the <code>config.xml</code> file</a></li>
    <li><a href="#thesmallestconfig.xmlfile">The smallest <code>config.xml</code> file</a></li>
    <li><a href="#theuniqueid">Adding a unique id</a></li>
    <li><a href="#releaseversionnumber">Adding a release version number</a></li>
    <li><a href="#whichsize">Setting a size for your Widget</a></li>
    <li><a href="#extensionname">Setting a name</a></li>
    <li><a href="#whatisthepurposeoftheextension">Specifying the purpose of the application/add-on</a></li>
    <li><a href="#specifyingtheauthor">Specifying the author</a></li>
    <li><a href="#whatisthelicense">What license is it released under?</a></li>
    <li><a href="#whatistheextensionicon">Specifying icons for your application/add-on</a></li>
    <li><a href="#thestartfilefortheextension">Specifying a different start file</a></li>
    <li><a href="#defaultpreferences">Specifying default preferences</a></li>
    <li><a href="#speeddial">For Speed Dial extensions</a></li>
    <li><a href="#cookiesharing">Specifying sharing of cookies with an application</a></li>
    <li><a href="#accesspolicy">Security and Access Policy</a></li>
    <li><a href="#visually">And visually what does it do?</a></li>
    <li><a href="#configurationchecklist">Configuration checklist</a></li>
    <li><a href="#references">References</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>When creating <a href="http://dev.opera.com/articles/view/whats-in-an-opera-extension/">extensions</a> or <a href="http://www.w3.org/TR/widgets/">W3C Widgets</a> — you will need to create a <code>config.xml</code> file, which contains the necessary information for software to identify the extension version, the author who created it, the license, etc. It plays the role of an &quot;About…&quot; page for your add-ons or applications. In addition, it specifies how to handle it, so that it can be used appropriately by the different platforms it will likely run on.</p>

<p>In this article we will build up a complete configuration document, showing step by step what all the different possible features do.</p>

<h2 id="createtheconfig.xmlfile">Creating the <code>config.xml</code> file</h2>

<p>To start with:</p>

<ol>
  <li>Open up your favorite text editor and create a new file</li>
  <li>Select &quot;save as…&quot; right away</li>
  <li>Browse to your extension folder</li>
  <li>call it <code>config.xml</code></li>
  <li>save</li>
</ol>

<p class="note">Make sure that you use a text editor that can output UTF-8, such as Notepad++, Coda, Textmate, or another editor. UTF-8 is the safest choice for the Web, as it allows you to use any character you like, and not have to worry about character encoding all the time. This is especially pertinent if you are writing in languages other than English.</p>

<p>You are now ready to start adding content to your <code>config.xml</code>.</p>

<h2 id="thesmallestconfig.xmlfile">The smallest <code>config.xml</code> file</h2>

<p>The smallest possible <code>config.xml</code> (which is not very helpful for users) contains the following markup:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;/&gt;</code></pre>

<p>Now let&#39;s look at what you can add to the above, to make your configuration document more useful.</p>

<h2 id="theuniqueid">Adding a unique id</h2>

<p>You might have your own domain name (such as example.org), and you might create more than one extension or widget. You should identify each of your extensions via a unique id, like so:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        <strong>id=&quot;http://example.org/disco&quot;</strong>&gt;
&lt;/widget&gt;</code></pre>

<p>Your extension will still be OK if you do not provide an <code>id</code>: when submitting your extension to be added to <a href="https://addons.opera.com/">Opera extensions directory</a>, the system will replace or create the id with the uri of the extension on Opera site. However, you probably want to add an <code>id</code> anyway, to make sure they work for local testing.</p>

<h2 id="releaseversionnumber">Adding a release version number</h2>

<p>For one extension, you will certainly go through a few development iterations. As such you might want to specify the version number so that people can track if they have the latest version of your extension. You can put a number or a string of characters or a combination of both.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        <strong>version=&quot;1.0&quot;</strong>&gt;
&lt;/widget&gt;</code></pre>

<h2 id="whichsize">Setting a size for your Widget</h2>

<p>You can also set <code>width</code> and <code>height</code> values on the <code>&lt;widget&gt;</code> element, measured in pixels, although bear in mind that this is only relevant to Widgets, as they need explicit dimensions set for their UI when running on desktop —extensions don&#39;t need this. If the Widget is to be 400 pixels high and 600 pixels wide, you would write:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        <strong>width=&quot;600&quot;
        height=&quot;400&quot;</strong>&gt;
&lt;/widget&gt;</code></pre>


<h2 id="extensionname">Setting a name</h2>

<p>The <code>&lt;name&gt;</code> element specifies the name people will use to refer to the extension, as well as how it will appear in online catalogs. The name can have a very short version and a long version. Let&#39;s call it &quot;The Saturday Night Disco Machine&quot; as a full name and &quot;Disco&quot; for short. The short name is optional, but it is good practice to include it for accessibility reasons.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    <strong>&lt;name short=&quot;Disco&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;</strong>
&lt;/widget&gt;
</code></pre>

<p>Note that you can have a multilingual extension with localized names in English, Japanese, French etc. You do this by adding more than one <code>&lt;name&gt;</code> element into our <code>config.xml</code> file, with <code>xml:lang</code> attributes specifying the language of each one:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    <strong>&lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;fr&quot;&gt;La boîte de nuit disco du samedi&lt;/name&gt;</strong>
&lt;/widget&gt;
</code></pre>

<p>Look for the appropriate Subtag language value in this list of <a href="http://www.iana.org/assignments/language-subtag-registry">code language values</a>. Put the language value in <strong>lowercase</strong>. It is important to specify a default version (or unlocalized version) so that a browser which would not find its version will display the default one. It is possible to do that just by omitting the language attribute on one of them. For example, if the French version is the default version then we would remove <code>xml:lang=&quot;fr&quot;</code>.</p>

<p class="note">Note: You can also use the <code>xml:lang</code> attribute to specify multiple languages for the Widget <code>&lt;author&gt;</code>, <code>&lt;license&gt;</code>, and/or <code>&lt;description&gt;</code>. See below for more details on these elements.</p>

<h2 id="whatisthepurposeoftheextension">Specifying the purpose of the application/add-on</h2>

<p>You can add a human-readable description that explains the basic purpose of your application or add-on. This is done using the <code>&lt;description&gt;</code> element, as follows:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    <strong>&lt;description xml:lang=&quot;en&quot;&gt;This Widget will help you to select all 
        the movements you need to know to be the King of Disco.
        You can select a specific steps sequence and view the 
        associated video.&lt;/description&gt;</strong>
&lt;/widget&gt;
</code></pre>

<h2 id="specifyingtheauthor">Specifying the author</h2>

<p>Users will certainly want to know the name of the person or company who created their favourite application/add-on!. You can use the <code>&lt;author&gt;</code> element to specify the name of the author(s), a link to an appropriate web site to provide more information about the author(s) (optional) and an email address (optional). In our case, the author is Tony Manero:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    <strong>&lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;</strong>
&lt;/widget&gt;
</code></pre>

<h2 id="whatisthelicense">What license is it released under?</h2>

<p>The <code>&lt;license&gt;</code> element refers to the software license of the full package. You might want to distribute the extension and make it possible for people to remix their own version, or alternatively you might want to reserve all rights. I&#39;m sure you would be pretty interested to see a Funk Machine, built from your humble disco extension, so you should choose something open, like an MIT license. The link to the license web site is optional, and you can instead choose to specify the full text of the license inside the <code>&lt;license&gt;</code> opening and closing tags, if you wish.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
    <strong>&lt;license href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;
    Licensed under the MIT license
    &lt;/license&gt;</strong>
&lt;/widget&gt;
</code></pre>

<h2 id="whatistheextensionicon">Specifying icons for your application/add-on</h2>

<p>The icon will represent your application/add-on in the chrome of the browser, for example in the tab your extension is running in, in your dock if you are running a Widget on Mac OSX, on the Opera add-ons site, etc. In <code>config.xml</code>, you can give a link to this image. The icon must be available inside the package, so that it is available for all the purposes it is used for. You can point to multiple icon formats and sizes, if required. If the icon has no intrinsic size, like an SVG file, you can set the file size with <code>width</code> and <code>height</code>. Setting the size on PNG, GIF, JPEG is useless, as the application will always take the intrinsic size of the image. It is however not possible to link to an icon on the Web. As an example, if you are putting all our icons into an <code>img/</code> folder inside the root of our package, you&#39;d refer to them from <code>config.xml</code> like this:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
    &lt;license href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;
    Licensed under the MIT license
    &lt;/license&gt;
    <strong>&lt;icon src=&quot;img/disco-ball.png&quot;/&gt;
    &lt;icon src=&quot;img/disco-ball.svg&quot; width=&quot;18&quot; height=&quot;18&quot;/&gt;</strong>
&lt;/widget&gt;
</code></pre>

<p>The icons for a button in the browser chrome is rendered 18 x 18 pixels in size, and anything above or below this will be scaled. It is better to specify an icon that is exactly 18 x 18 pixels. A 64 x 64 pixels or larger icon will be needed when uploading the extension to our <a href="https://addons.opera.com/">Opera extensions website</a>. This icon will be used in our online catalog.</p>

<p>For widgets, you can aim for a higher resolutions. The Widget icon tutorial gives all information on <a href="http://dev.opera.com/articles/view/custom-opera-widget-icons/">achieving the best icon</a>.</p>


<h2 id="thestartfilefortheextension">Specifying a different start file</h2>

<p>The default start file that your application/add-on should use when loading is <code>index.html</code> — we recommend you to stick to this. But if you really want to specify a different one, you can use the <code>&lt;content&gt;</code> element, as shown below. Note that you can specify the mimetype of the file (eg <code>text/html</code>, <code>application/xhtml+xml</code>) and the default encoding — we really recommend sticking to html and utf-8.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
    &lt;license href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;
    Licensed under the MIT license
    &lt;/license&gt;
    &lt;icon src=&quot;img/disco-ball.png&quot;/&gt;
    &lt;icon src=&quot;img/disco-ball.svg&quot; width=&quot;50&quot; height=&quot;50&quot;/&gt;
    <strong>&lt;content src=&quot;index.html&quot; type=&quot;text/html&quot; encoding=&quot;utf-8&quot;/&gt;</strong>
&lt;/widget&gt;
</code></pre>

<h2 id="defaultpreferences">Specifying default preferences</h2>

<p>When developing an application or add-on, you can specify essential starting preferences using the <code>&lt;preference&gt;</code> element. Each one contains a name and an initial value, stored in <code>name</code> and <code>value</code> attributes, respectively, and you can lock these values so they can&#39;t be modified by adding the optional <code>readonly=&quot;true&quot;</code> attribute. These preferences are then exposed at rutime via the <code>widget.preferences</code> attribute.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
    &lt;license href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;
    Licensed under the MIT license
    &lt;/license&gt;
    &lt;icon src=&quot;img/disco-ball.png&quot;/&gt;
    &lt;icon src=&quot;img/disco-ball.svg&quot; width=&quot;50&quot; height=&quot;50&quot;/&gt;
    &lt;content src=&quot;index.html&quot; type=&quot;text/html&quot; encoding=&quot;utf-8&quot;/&gt;
    <strong>&lt;preference name=&quot;step&quot;
                value=&quot;beegees&quot;/&gt;
    &lt;preference name=&quot;mood&quot;
                value=&quot;cheesy&quot;
                readonly=&quot;true&quot;/&gt;</strong>
&lt;/widget&gt;
</code></pre>

<h2 id="speeddial">For Speed Dial extensions</h2>

<p>If you are making a Speed Dial extension, there are a couple of things to note. You need to set the <code>viewmodes</code> attribute in the <code>&lt;widget&gt;</code> tag to <code>minimized</code>. Apart from this, you also need to set the <code>&lt;feature&gt;</code> tag with the <code>name</code> attribute as <code>opera:speeddial</code> and the appropriate value for the <code>required</code> attribute. Finally, you need to add a <code>&lt;param&gt;</code> tag with the <code>name</code> attribute as <code>url</code> and the <code>value</code> attribute as the URL which you want the Speed Dial extension to point to. An example of this would be the following code:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=http://example.org/disco&quot;
        version=&quot;1.0&quot; viewmodes=&quot;minimized&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Disco&quot;/&gt;
&lt;/feature&gt;
&lt;/widget&gt;</code></pre>


<h2 id="cookiesharing">Specifying sharing of cookies with an application</h2>

<p>Usually an extension operates in an environment where it has its own set of cookies. However, in some case you might want to make an extension which shares cookies with the current browsing context of the web application. For those cases, you can specify it by adding a <code>&lt;feature&gt;</code> tag with the <code>name</code> attribute as <code>opera:sharecookies</code> and set the appropriate value for the <code>required</code> attribute. After that, you need to add an <code>&lt;access&gt;</code> tag with the <code>origin</code> value as the URL of the website you want to share cookies with. If you want access to the website&#39;s subdomains as well, then add a <code>subdomains</code> attribute to this <code>&lt;feature&gt;</code> and set it to <code>true</code>.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
  &lt;!-- request for cookie sharing to be enabled in this extension --&gt;
  &lt;feature name=&quot;opera:share-cookies&quot; required=&quot;true&quot;/&gt;
  &lt;!-- list of domains on which cookie sharing will be enabled --&gt;         
  &lt;access origin=&quot;http://facebook.com&quot; subdomains=&quot;true&quot;/&gt;    
&lt;/widget&gt;</code></pre>

<h2 id="accesspolicy">Security and Access Policy</h2>

<p>Finally, last but not least, you need to declare the access policy for the widget elements. This widget will not be functional without this information. We have identified our domain in the id section already, let&#39;s authorize that domain and all the subdomains associated with it. The policy can be more complex. If you want to get into details check the access specification given in references at the bottom of this article.</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
        id=&quot;http://example.org/disco&quot;
        version=&quot;1.0&quot;
        width=&quot;600&quot;
        height=&quot;400&quot;&gt;
    &lt;name short=&quot;Disco&quot; xml:lang=&quot;en&quot;&gt;The Saturday Night Disco Machine&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;
    This extension will help you to select all 
    the movements you need to know to be the King of Disco.
    You can select a specific steps sequence and view the 
    associated video.&lt;/description&gt;
    &lt;author href=&quot;http://example.org/tony/&quot;
            email=&quot;tony@example.org&quot;&gt;
    Tony Manero
    &lt;/author&gt;
    &lt;license href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;
    Licensed under the MIT license
    &lt;/license&gt;
    &lt;icon src=&quot;img/disco-ball.png&quot;/&gt;
    &lt;icon src=&quot;img/disco-ball.svg&quot; width=&quot;50&quot; height=&quot;50&quot;/&gt;
    &lt;content src=&quot;index.html&quot; type=&quot;text/html&quot; encoding=&quot;utf-8&quot;/&gt;
    &lt;preference name=&quot;step&quot;
                value=&quot;beegees&quot;/&gt;
    &lt;preference name=&quot;mood&quot;
                value=&quot;cheesy&quot;
                readonly=&quot;true&quot;/&gt;
    <strong>&lt;access origin=&quot;http://example.org&quot; subdomains=&quot;true&quot;/&gt;</strong>
&lt;/widget&gt;
</code></pre>


<p>That&#39;s it! The configuration document is now complete.</p>

<h2 id="visually">And visually what does it do?</h2>

<p>Let&#39;s take the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">hello world extension</a> example created by David Storey, Opera Software. The file structure and the related <code>config.xml</code> is shown below in the figure 1. We can notice the icons in two sizes: 18 pixels and 64 pixels.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/410-the-ins-and-outs-of-configxml/extension_config-content-file.png" width="551" height="332" alt="" /></p>
<p class="comment">Figure 1. Extension configuration file and folder structure</p>

        <p>Then we can see in figure 2 how the different information of config.xml appears in the extension manager screen. The title, the name of the author, the description, and the 64 pixels icon.</p>
        
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/410-the-ins-and-outs-of-configxml/extension_config-hello.png" width="640" height="125" alt="" /></p>
<p class="comment">Figure 2. Extension manager information</p>

<h2 id="configurationchecklist">Configuration checklist</h2>

<p>OK. You have created the config.xml, you are ready to publish or maybe you jumped to the examples and started to code. Let&#39;s do a final check of things which are absolutely mandatory for your extension to work. Be sure to have a checkmark in the yes column for each of those lines.</p>

<table>
<tr><th class="desc">Description</th><th class="Y">Yes</th><th class="no">No</th></tr>
<tr class="M"><td class="desc"><code>config.xml</code> is in the root folder of your extension</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc"><code>config.xml</code> is all written in lowercase</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc"><code>config.xml</code> is a text-only file (you have use a simple text-editor)</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">The root element is <code>widget</code></td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">The widget element has an attribute <code>xmlns=&quot;http://www.w3.org/ns/widgets&quot;</code></td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">true or false value are written lowercase</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">languages value are written lowercase</td><td class="Y"></td><td class="no"></td></tr>
<tr class="O"><td class="desc"><code>config.xml</code> is saved as utf-8</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">For speed dial extension, the <code>&lt;widget&gt;</code> tag has the &#39;viewmodes&#39; value as &#39;minimized&#39;, and the <code>config.xml</code> contains the proper <code>&lt;feature&gt;</code> and <code>&lt;param&gt;</code> tags with appropriate value for the attributes.</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc">If sharing cookies, the <code>config.xml</code> contains the proper <code>&lt;feature&gt;</code> and <code>&lt;access&gt;</code> tags with appropriate value for the attributes.</td><td class="Y"></td><td class="no"></td></tr>
<tr class="M"><td class="desc"><code>config.xml</code> contains an access element with the access policy specified</td><td class="Y"></td><td class="no"></td></tr>
<caption>Checklist for minimal requirements on config.xml</caption>
</table>

<h2 id="references">References</h2>

<p>This document is based on the Editor&#39;s draft version of the W3C&#39;s <a href="http://dev.w3.org/2006/waf/widgets/">Widget Packaging and Configuration</a> and the latest version of <a href="http://www.w3.org/TR/widgets-access/">Widget Access Request Policy</a> (20 April 2010) specifications.</p>
table
