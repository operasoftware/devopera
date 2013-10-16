Title: Opera Widgets security model
----
Date: 2010-02-09 18:50:50
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h2>Introduction</h2>

<p>Opera Widgets can <a href="http://dev.opera.com/articles/view/opera-widgets-and-ajax-connecting-to-mu/">download and combine data from most parts of the Web</a>, which make them a powerful platform for delivering innovative services to users. The security model is initially very open to allow authors to easily create such services. The widget author may change the <code>config.xml</code> file of the widget in order to restrict the widget’s access to protocols, hosts, and ports.</p>

<p>Note that the security model has changed with Opera 10, mostly by making the model more liberal, but at the same time making network access opt-in. This document describes the latest security model. See the <a href="#opera9">Security model in Opera 9</a> for the differences and how to cater for both versions.</p>

<p>Table of contents:</p>

<ol>
<li><a href="#initial">The initial security model</a>
<ol>
<li><a href="#addresses">Private and public addresses</a></li>
</ol>
</li>
<li><a href="#formandlinks">Form, links and embedded objects behavior</a></li>
<li><a href="#enablenetwork">How to enable network access</a></li>
<li><a href="#enablefile">How to enable file access</a></li>
<li><a href="#opera9">Security model in Opera 9</a></li>
<li><a href="#controlling">Controlling the widget’s security</a></li>
<li><a href="#examples">Examples</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="initial">The initial security model</h2>

<p>Network access is not enabled for widgets by default. You must <a href="#enablenetwork">enable this in config.xml</a> to get access.</p>

<p>If network access is enabled and nothing is specified in the security section of the widget’s <code>config.xml</code> file, the following applies:</p>

<ul>
<li>A widget can contact any host over the <code>http</code> and <code>https</code> protocols.</li>
<li>A widget cannot contact protocols other than <code>http</code> or <code>https</code>, unless specified in its <code>config.xml</code>.</li>
<li>A widget cannot access the file system using the <code>file</code> protocol.</li>
<li>A widget cannot contact non-standard ports (0–1023, except 80), unless specified in its <code>config.xml</code>.</li>
<li>A widget can make use of Java applets or plug-ins.</li>
<li>A widget can access the local file system, but only through a directly user-initiated action.</li>
</ul>

<p class="note">Note also that many browsers block outgoing HTTP requests on port 443, as this is reserved for HTTPS. Defining access to this port and protocol combination will not work.</p>

<h3 id="addresses">Private and public addresses</h3>

<p>The following IPv4 IP ranges are defined as private addresses and correspond to the ‘private’ value of the <code>network</code> property:</p>

<ul>
<li>10.0.0.0 to 10.255.255.255</li>
<li>172.16.0.0 to 172.31.255.255</li>
<li>192.168.0.0 to 192.168.255.255</li>
<li>169.254.0.0 to 169.254.255.255</li>
</ul>

<p>Any other address is a public address and corresponds to the ‘public’ value of the <code>network</code> property.</p>

<h2 id="formandlinks">Form, links and embedded objects behavior</h2>

<p>Forms, links and embedded objects are subject to the same security policy as loading resources. This means that if the widget contains a clickable link, following the link will result in a security violation if the target of the link is not permitted by the security policy. Similarly for forms, submitting will cause a security violation if the <code>action</code> attribute contains a URL which is not permitted by the security policy. Objects may not load resources from URLs not permitted by the security policy.</p>

<p>Additionally, the following applies:</p>

<ul>
<li>A form element should have a valid target.</li>
<li>If the form has a <a href="http://www.w3.org/TR/html401/types.html#type-frame-target">reserved target</a>, and this target leads to intrinsically replacing the topmost document in the widget, in effect replacing the widget, submitting the form will fail silently.</li>
<li>If the form uses the <code>_blank</code> target for a GET request, the form will be submitted to a new tab in the browser.</li>
<li>POST requests that result in submission to a tab will fail with a security violation.</li>
<li>Links have a default <code>_blank</code> target, and open in a new tab in the browser.</li>
<li>Objects cannot cross network boundaries when loaded.</li>
<li>Objects do not share cookies and cache with widgets.</li>
<li>Objects do not not share cookies and cache with the browser.</li>
<li>Objects have no reference to <code>window.opener</code> (the widget shouldn’t be visible to the object).</li>
<li>The <code>window.top</code> property of objects point to the embedding frame only.</li>
<li>Widgets have a one-way reference to inject scripts into and read DOM, etc. from objects.</li>
</ul>

<h2 id="enablenetwork">How to enable network access</h2>

<p>From Opera 10 and onwards, network access is opt-in. You can enable network access by adding a <code>network</code> attribute to the <code>widget</code> element in the <code>config.xml</code> file of your widget. This attribute can take one or both of two values, “public” and “private”, which represent public (internet) and private (intranet) addresses respectively.</p>

<p>In the following example, network access for public addresses is enabled:</p>

<pre>
<code>&lt;widget network=&quot;public&quot;&gt;
  ...
&lt;/widget&gt;</code>
</pre>

<p>In the following example, network access for both public and private addresses are enabled:</p>

<pre>
<code>&lt;widget network=&quot;public private&quot;&gt;
  ...
&lt;/widget&gt;</code>
</pre>

<h2 id="enablefile">How to enable file access</h2>

<p>Access to the local file system is enabled by adding a <code>feature</code> element to the <code>widget</code> element in Opera 10 and onwards.</p>

<pre>
<code>&lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;/&gt;</code>
</pre>

<p>By default, the file system can only be accessed through a set of system mount points, called <code>shared</code>, <code>storage</code> and <code>application</code>. The <code>shared</code> mount point is not available in widgets, but available for Opera Unite services. The <code>application</code> mount point represents the widget package and the <code>storage</code> mount point is a scratch space which can be used to store files temporarily. The mount points are mounted through the <code>opera.io.filesystem.mountSystemDirectory()</code> method.</p>

<p>Additional mount points can only be created by direct user action through the <code>opera.io.filesystem.browseForDirectory()</code>, <code>browseForFile()</code> and <code>browseForShare()</code> methods. When invoked, a file chooser dialogue is raised, and the user must choose a directory to be used as a mount point. Once mounted however, the widget may create, modify and delete files just like the user who runs the widget.</p>

<h2 id="opera9">Security model in Opera 9</h2>

<p>Opera 9 has a slightly different security model.</p>

<ul>
<li>Network access is always on, and can not be opted-out.</li>
<li>Java and plug-ins are not enabled by default.</li>
<li><code>https</code> can not be accessed by default.</li>
<li>Widgets can only access one of <a href="#addresses">private (intranet) and public (internet) addresses</a>. The first host the widget tries to connect to, determines which of the types the widget may access.</li>
</ul>

<p>To ensure that widgets can be used in both Opera 9 and 10, you should consider adding the following to your config.xml file:</p>

<ul>
<li>If your widgets needs network access, add a <code>network</code> attribute to the <code>widget</code> element with a minimum value ‘public’. Add or use ‘private’ only if necessary, as adding both may leave you vulnerable to data theft.</li>
<li>If your widget needs access to plug-ins, add a <code>content</code> element to the <code>security</code> element with <code>plugins</code> attributes set to ‘yes’.</li>
<li>If your widget needs access to Java specifically, add a <code>content</code> element to the <code>security</code> element with both <code>java</code> and <code>plugins</code> attributes set to ‘yes’.</li>
<li>If your widget needs access to <code>https</code>, add an <code>access</code> element to the <code>security</code> element, with two <code>protocol</code> elements containing ‘http’ and ‘https’ respectively.</li>
</ul>

<p>Additionally, access to the local file system is not supported in Opera 9. In Opera 10, it is enabled by a <code>feature</code> element. If you wish to use this feature, you should check for the presence of the <code>opera.io.filesystem</code> property in JavaScript.</p>

<p>If you need all of the features above, your minimal config.xml will look like this:</p>

<pre>
<code>&lt;widget network=&quot;public&quot;&gt;
  &lt;widgetname&gt;My widget&lt;/widgetname&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;/&gt;
  &lt;security&gt;
    &lt;access&gt;
      &lt;protocol&gt;http&lt;/protocol&gt;
      &lt;protocol&gt;https&lt;/protocol&gt;
    &lt;/access&gt;
    &lt;content plugins=&quot;yes&quot; java=&quot;yes&quot;/&gt;
  &lt;/security&gt;
&lt;/widget&gt;</code>
</pre>

<h2 id="controlling">Controlling the widget’s security</h2>

<p>You can use the widget’s <code>config.xml</code> file to limit its access to only specific domains, ports, and protocols. The <code>&lt;security&gt;</code> element is used for this purpose.</p>

<p>Each <code>&lt;security&gt;</code> element may contain a series of <code>&lt;access&gt;</code> elements, which specify what the widget can access. The <code>access</code> element can contain the following elements:</p>

<dl>
<dt>protocol</dt>
<dd>This specifies the protocols the widget will be using to contact external servers. All protocols except the file:// protocol are permitted.</dd>
<dt>host</dt>
<dd>The <code>host</code> element establishes which hostnames may be contacted. The hostnames are exact matches. This means that a widget specifying www.example.com must not be able to contact example.com. IP addresses may also be used as values.</dd>
<dt>port</dt>
<dd>The <code>port</code> element establishes which port numbers the widget will be using. The value is either a number, a range of numbers separated by a dash, eg 1024–2048, or a comma-separated list of ports, e.g. 80, 1337.</dd>
<dt>path</dt>
<dd>The <code>path</code> element specifies the path part of the URI that a widget may contact.</dd>
</dl>

<p>If any of these elements are not present, the initial security model provides values for them. This means that any host, ports 80 and 1024 and up, any paths and <code>http</code> and <code>https</code> can be contacted. If you add one or more element, this will limit the availability. I.e., if you add a <code>protocol</code> element, <code>http</code> and <code>https</code> will not be available, unless also added.</p>

<h2 id="examples">Examples</h2>

<p>Here is a look at a few examples of how the security model and the <code>access</code> element interact:</p>

<pre>
<code>&lt;security&gt;
  &lt;access&gt;
    &lt;protocol&gt;http&lt;/protocol&gt;
    &lt;protocol&gt;https&lt;/protocol&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;host&gt;example.org&lt;/host&gt;
    &lt;path&gt;/good&lt;/path&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
    &lt;port&gt;80,1337&lt;/port&gt;
  &lt;/access&gt;
  &lt;content plugins=&quot;no&quot; /&gt;
&lt;/security&gt;</code>
</pre>

<p>In this example, the widget is limited to contacting the hosts example.com and example.org, using either the <code>http</code> or <code>https</code> protocols. It may only contact those hosts on ports ranging from 2048 to 4906, and the ports 80 and 1337. The widget may only access the path ”/good” on both hosts. The widget may not use plug-ins or run included Java applets.</p>

<p>Here is a look at another one:</p>

<pre>
<code>&lt;security&gt;
  &lt;access&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
  &lt;/access&gt;
  &lt;access&gt;
    &lt;protocol&gt;https&lt;/protocol&gt;
    &lt;host&gt;example.org&lt;/host&gt;
    &lt;port&gt;80,1337&lt;/port&gt;
  &lt;/access&gt;
&lt;/security&gt;</code>
</pre>

<p>In this example, there are two primary rules. The widget’s access is limited to example.com and example.org. The widget may only access example.com over the HTTP-protocol and on the ports 2048 through 4906, while example.org can only be accessed over <code>https</code> and the ports 80 and 1337. In both cases the widget may access any path. The widget may make use of Java applets or plug-ins, which is the default.</p>

<p>And finally:</p>

<pre>
<code>&lt;security&gt;
  &lt;access&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
  &lt;/access&gt;
&lt;/security&gt;</code>
</pre>

<p>In this last example, the widget may only contact example.com over <code>http</code>, on any port in the 2048–4906 range, using any path.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-widgets-specification-11-fourth-ed/">Opera Widgets Specification 1.0, fourth edition</a></li>
<li><a href="http://dev.opera.com/articles/view/opera-widgets-and-ajax-connecting-to-mu/">Opera Widgets can connect to multiple Web servers</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
