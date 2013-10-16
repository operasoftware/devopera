Title: config.xml
----
Date: 2011-12-06 06:54:22
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-config-widget"><code>widget</code> element</a></dt>
   <dd>The container element under which the rest of the elements of the config.xml file go.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-name"><code>name</code> element</a></dt>
   <dd>Provides the name of the extension.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-description"><code>description</code> element</a></dt>
   <dd>Provides a description of what the extension is supposed to do.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-author"><code>author</code> element</a></dt>
   <dd>Provides details of the author of the extension.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-license"><code>license</code> element</a></dt>
   <dd>Provides the software license of the extensions.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-icon"><code>icon</code> element</a></dt>
   <dd>Specifies a custom icon file for the extension.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-content"><code>content</code> element</a></dt>
   <dd>Defines a <a href="http://www.w3.org/TR/widgets/#custom-start-file">custom start file</a> for the extension.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-feature"><code>feature</code> element</a></dt>
   <dd>Declares the use of certain features by the extension, such as being able to display content in speed dial.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-preference"><code>preference</code> element</a></dt>
   <dd>Allows for preferences to be declared by the developer. They are stored as key-value pairs and accessible from within the extension using <code>widget.preferences</code>.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-access"><code>access</code> element</a></dt>
   <dd>Allows authors to give their extension permission to access external web resources.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-span"><code>span</code> element</a></dt>
   <dd>Serves as a wrapper for text content, usually for the purpose of internationalization.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-xml-lang"><code>xml:lang</code> attribute</a></dt>
   <dd>Specifies the language of the contained text in the element.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-dir"><code>dir</code> attribute</a></dt>
   <dd>Defines the direction of the language used by an element with the following values:</dd>
</dl>

<h2 id="overview">Overview</h2>

<p>The mandatory config.xml file gives the Opera browser relevant information about an Opera extension, such as the name, description and version.</p>

<p>Most of the information in this file (information such as the name, description, author name of the extension, etc.) is also useful to the end user as it is shown in various places in Opera&#39;s user interface.</p>

<p>A well-formed config.xml file is mandatory for every Opera extension.</p>
	
<p>For full documentation on config.xml, see the:</p>

<ul>
    <li><a href="http://www.w3.org/TR/widgets">W3C Widgets Packaging and Configuration Specification</a></li>
    <li><a href="http://www.w3.org/TR/widgets-access/">W3C Widget Access Request Policy</a></li>
</ul>

<h2 id="example">Example</h2>
	
<p>Below is an example config.xml file including the usual meta elements like <code>name</code>, <code>author</code> and <code>description</code>. It also contains the following two useful elements:</p>
<dl>
    <dt><code>&lt;feature&gt;</code> element</dt>
    <dd>Since this extension is showing the latest news from the <a href="http://my.opera.com/chooseopera/blog/">Choose Opera blog</a> inside Speed Dial, it declares that it will use the &quot;opera:speeddial&quot; feature.</dd>
    <dt><code>&lt;access&gt;</code> element</dt>
    <dd>It will fetch the latest news from http://my.opera.com and is therefore using the <code>access</code> element to request access to share and get information from this domain.</dd>
</dl>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://my.opera.com/chooseopera/xml/rss/blog/&quot; viewmodes=&quot;minimized&quot; version=&quot;1.0&quot;&gt;

  &lt;name&gt;Opera news&lt;/name&gt;

  &lt;author&gt;John Smith&lt;/author&gt;
  &lt;description&gt;Stay up to date with the latest news from Opera, served to you inside Speed Dial&lt;/description&gt;
  &lt;icon src=&quot;images/icon.64x64.png&quot;/&gt;

  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;true&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://my.opera.com/chooseopera/blog/&quot;/&gt;
  &lt;/feature&gt;

  &lt;access origin=&quot;http://my.opera.com/&quot; subdomains=&quot;true&quot;/&gt;
 	
&lt;/widget&gt;</code></pre>		

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/588-configxml/config.png" alt="Extension details taken from the config.xml file." /></p>
<p class="caption">Figure 1: Extension details taken from the config.xml file.</p>

<p>	Figure 1 shows the extension manager where the details for the extension have been taken from the config.xml file above.</p>

<p>As the markup example shows, much of the information written in the config.xml file helps the user ascertain various details about the extension. The following sections on this page will look at the elements and attributes to keep in mind when marking up the config.xml file.</p>

<h2>Further reading</h2>

<p>Read the Dev.Opera article <a href="/articles/view/config-xml-howto/">The ins and outs of config.xml</a> for further details regarding the config.xml file.</p>

