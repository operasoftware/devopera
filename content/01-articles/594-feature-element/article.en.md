Title: feature element
----
Date: 2011-12-06 07:04:06
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

<h2>Description</h2>

<p><code>The &lt;feature&gt;</code> element declares the use of certain features by the extension, such as being able to display content in speed dial.</p>

<p>The following attributes are associated with the <code>&lt;feature&gt;</code> element:</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-name-attribute">name</a></code>: defines which feature is requested (see below)</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-required-attribute">required</a></code>: When this  attribute is set to true it denotes that this feature is absolutely needed by the extension to function correctly. The <code>required</code> attribute is a boolean, with valid values as <code>true</code> or <code>false</code>. It is optional to include this attribute and if left out it will default to <code>true</code></li>
</ul>

<p>There are currently two features available to Opera extensions:</p>

<ul>
    <li><code><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">opera:speeddial</a></code>: allows the extension to display content in a Speed Dial</li>
    <li><code><a href="http://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">opera:share-cookies</a></code>: with this feature users won&#39;t have to be authenticated again if they are already signed in to the website your extension wants to connect to</li>
</ul>

<h2>Example</h2>

<p>The below example shows an extension using both <code>opera:share-cookies</code> and <code>opera:speeddial</code> in order to display the latest messages from the user&#39;s account on my.opera.com:</p>

<pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; version=&quot;1&quot; viewmodes=&quot;minimized&quot; id=&quot;http://my.opera.com/someblog&quot;&gt;

  &lt;name&gt;Show recently received messages&lt;/name&gt;
	
  &lt;description xml:lang=&quot;en&quot;&gt;Receive timely updates of your message activity on My Opera&lt;/description&gt;
  &lt;author&gt;John Smith&lt;/author&gt;
  &lt;icon src=&quot;images/icon.64x64.png&quot;/&gt;
  
  &lt;access origin=&quot;http://my.opera.com&quot; subdomains=&quot;true&quot;/&gt;

  &lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
  
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;true&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://my.opera.com&quot;/&gt;
  &lt;/feature&gt;
  
&lt;/widget&gt;</code></pre>
