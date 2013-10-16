Title: Opera Widgets Specification 1.0
----
Date: 2007-04-30 17:22:29
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

<div class="note">
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">14th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. This is an old version of the Opera Widgets specification 1.0, so unless you have a really specific reason to read this one, you should read the <a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/">Opera Widgets Specification 1.0 Fourth Edition</a> instead.</p>
 </div>

<p>This document describes Opera Widgets, and covers all aspects of Opera Widgets from packaging format, the manifest file config.xml, and JavaScript interfaces for working with widgets.</p>


<h2 class="no-num no-toc">Table of contents </h2>
<div>
	<ol>
		<li><a href="#intro">Introduction</a>
	<ol>
		<li><a href="#conformance">Conformance Requirements</a></li>
	</ol></li>
		<li><a href="#packaging">Widget packaging</a>
	<ol>
		<li><a href="#packagingfileformat">File format</a></li>
		<li><a href="#packagingfiles">Widget files</a></li>
		<li><a href="#packagingstructure">Widget folder structure</a></li>
		<li><a href="#contenttype">Content-Type</a></li>
		<li><a href="#fileextension">File extension</a></li>
	</ol></li>
		<li><a href="#configxml">Widget configuration file: config.xml</a>
	<ol>
		<li><a href="#xmlwhitespace">White space</a></li>
		<li><a href="#xmlwidget">The <code>widget</code> element</a></li>
		<li><a href="#xmlrequiredelements">Required child elements of <code>&lt;widget&gt;</code></a>
	<ol>
		<li><a href="#xmlwidgetname">The <code>widgetname</code> element</a></li>
		<li><a href="#xmlwidth">The <code>width</code> element</a></li>
		<li><a href="#xmlheight">The <code>height</code> element</a></li>
		<li><a href="#xmlauthorelement">The <code>author</code> element</a>
	<ol>
		<li><a href="#xmlauthorname">The <code>name</code> element</a></li>
		<li><a href="#xmlauthororganization">The <code>organization</code> element</a></li>
		<li><a href="#xmlauthoremail">The <code>email</code> element</a></li>
		<li><a href="#xmlauthorlink">The <code>link</code> element</a></li>
	</ol></li>
		<li><a href="#xmldescription">The <code>description</code> element</a></li>
		<li><a href="#xmlicon">The <code>icon</code> element</a></li>
		<li><a href="#xmlsecurity">The <code>security</code> element</a>
	<ol>
		<li><a href="#xmlsecurityaccess">The <code>access</code> element</a></li>
		<li><a href="#xmlcontent">The <code>content</code> element</a></li>
		<li><a href="#securitymodel">Security model</a></li>
		<li><a href="#intranetdefinition">Intranet definition</a></li>
		<li><a href="#securityexample">Security example</a></li>
	</ol></li>
		<li><a href="#xmlwidgetid">The <code>id</code> element</a></li>
	</ol></li>
	</ol></li>
		<li><a href="#scriptinginterface">Widget JavaScript interfaces</a>
	<ol>
		<li><a href="#widgetobject">The widget object</a>
	<ol>
		<li><a href="#widgetobjpurpose">Purpose</a></li>
		<li><a href="#woopenURL">The openURL() method</a></li>
		<li><a href="#wopreferenceForKey">The preferenceForKey() method</a></li>
		<li><a href="#wosetPreferenceForKey">The setPreferenceForKey() method</a></li>
	</ol></li>
		<li><a href="#widgetgeometry">Widget geometry</a></li>
	</ol></li>
		<li><a href="#autodiscovery">Widget autodiscovery</a>
	<ol>
		<li><a href="#autodiscopurpose">Purpose</a></li>
		<li><a href="#autodiscoelement">Definition</a></li>
		<li><a href="#autodiscohtmlrelation">Relationship to HTML and XHTML</a>
	<ol>
		<li><a href="#autodiscosyntaxinhertiance">Syntax rules inherited from HTML and XHTML</a></li>
		<li><a href="#autodiscomultiplelink">Multiple autodiscovery elements</a></li>
	</ol></li>
		<li><a href="#autodiscoreqattrs">Required attributes</a>
	<ol>
		<li><a href="#autodiscotypeattr">The type attribute</a></li>
		<li><a href="#autodiscorelattr">The rel attribute</a></li>
		<li><a href="#autodiscohrefattr">The href attribute</a></li>
	</ol></li>
		<li><a href="#autodiscooptattrs">Optional attributes</a>
	<ol>
		<li><a href="#autodiscotitleattr">The title attribute</a></li>
	</ol></li>
	</ol></li>
		<li><a href="#acknowledgments">Acknowledgements</a></li>
		<li><a href="#references">References</a></li>
	</ol>
</div>

<h2 id="intro">Introduction</h2>

<h3 id="conformance">Conformance Requirements</h3>

<p>The keywords &#x201D;<em>must</em>&#x201D;, &#x201D;<em>must not</em>&#x201D;, &#x201D;<em>required</em>&#x201D;, &#x201D;<em>shall</em>&#x201D;, &#x201D;<em>shall not</em>&#x201D;, &#x201D;<em>should</em>&#x201D;, &#x201D;<em>should not</em>&#x201D;, &#x201D;<em>recommended</em>&#x201D;, &#x201D;<em>may</em>&#x201D;, and &#x201D;<em>optional</em>&#x201D; in this document are to be interpreted as described in <a href="#refsRFC2119">[RFC2119]</a>.</p>

<h2 id="packaging">Widget packaging</h2>

<h3 id="packagingfileformat">File format</h3>

<p>Widgets are are a bundled archive of files, as specified by the <a href="#refsZIP">[ZIP]</a> file format specification, with exception that the &#x2018;Deflate64&#x2019; compression method for the <a href="#refsZIP">[ZIP]</a> file format is not supported.</p>

<h3 id="packagingfiles">Widget files</h3>

<p>Every Opera Widget <em>must</em> contain the following two files:</p>

<ul>
<li><var><a href="#config-xml">config.xml</a></var> &#x2013; a <em>manifest</em>
file containing information necessary to initialize the widget. This
file always contains information about the widget&#x2019;s name and geometry,
and may optionally contain more information about the widget:
<ul>
<li>Widget description</li>
<li>Author information</li>
<li>Icon reference</li>
<li>Security information</li>
</ul>
</li>
<li><var>index.html</var> &#x2013; this is the main document for the actual widget, and is displayed in a viewport established by the <var><a href="#config-xml">config.xml</a></var> file. This <span class="caps">HTML</span> document can reference external content, including, but not limited to scripts, <span class="caps">CSS</span> files and images the same way regular web pages can.</li>
</ul>

<h3 id="packagingstructure">Widget folder structure</h3>

<p>When a widget is packed as a zip file for distribution, the author <em>must</em> choose one of two different ways of structuring the files and folders within the widget.</p>

<p>The config.xml and index.html at the <em>root</em> of the .zip file, with any associated resources, such as scripts and images, in the same directory or subdirectories.</p>

<p><object data="" title="Widget files organized in the root folder of the zip file">[Widget files organized in the root folder of the zip file]</object></p>

<p>An alternative approach is to put all the widgets in a directory inside the zip file, with all the widget&#x2019;s files and folders located inside this subfolder. This folder <em>should</em> bear the same name as the compressed zip file.</p>

<p><object data="" title="Widget files organized in a subfolder inside the zip file">[Widget files organized in a subfolder inside the zip file]</object></p>

<p>When a widget is loaded a virtual root path for a file system is established based on the location of the <var><a href="#config-xml">config.xml</a></var>, where this root path is in the same folder where <var>config.xml</var> exists.</p>

<h3 id="contenttype">Content-Type</h3>

<p>When widgets are served from web servers, they <em>must</em> be served with the content-type <code>application/x-opera-widgets</code>.</p>

<h3 id="fileextension">File extension</h3>

<p>Widgets <em>must</em> have the file extension <var>.zip</var> to be properly recognized as widgets.</p>

<h2 id="configxml">Widget configuration file: config.xml</h2>

<p>The necessary information for a widget UA to run a widget is stored in a file named <var>config.xml</var>, located as previously specified in the <a href="#packaging">Widget packaging</a>
chapter of this specification. This file contains information about the
widget neccesary to establish the initial view for the widget file. A
widget file is an <span class="caps">XML</span> 1.0 document following <a href="#refsXML10">[XML10]</a></p>

<p>A minimal config.xml looks like the following, giving the widget a
name, and widget&#x2019;s initial viewport the size 300×300px (CSS pixels):</p>

<pre class="example"><code>&lt;widget&gt;
  &lt;widgetname&gt;
    Hello World!
  &lt;/widgetname&gt;
  &lt;width&gt;
    300
  &lt;/width&gt;
  &lt;height&gt;
    300
  &lt;/height&gt;
&lt;/widget&gt;</code></pre>

<p>The widget may optionally contain an <span class="caps">XML</span> prolog.</p>

<h3 id="xmlwhitespace">White space</h3>

<p>When presented to the end user, whitespace characters in config.xml elements are normalized the following way:</p>

<ul>
<li>Leading and trailing whitespace is stripped</li>
<li>Multiple whitespace are normalized to single whitespace characters.</li>
</ul>

<p>This presentation is consistent with setting the value <samp>normal</samp> for the white-space attribute in <a href="#refsCSS21">[CSS21]</a></p>

<p>When processing config.xml, Opera will ignore leading and trailing whitespace for all elements, equivalent to getting the <code>textContent</code> <span class="caps">DOM</span> attribute value.</p>

<h3 id="xmlwidget">The <code class="elem">widget</code> element</h3>

<p>The <code class="elem">widget</code> element is the root element of the config.xml file, and <em>must</em> be present in the widget configuration file as the only element in the document root, per <a href="#refsXML10">[XML10]</a>.</p>

<h3 id="xmlrequiredelements">Required child elements of <code class="elem">widget</code></h3>

<h4 id="xmlwidgetname">The <code class="elem">widgetname</code> element</h4>

<p>The <code class="elem">widgetname</code> element <em>must</em> be present in config.xml as a child of the <code class="elem">widget</code> element, and is a string whose purpose is to provide a human-readable title for the widget. This title will be used in application menus to provide a descriptive title for the widget.</p>

<h4 id="xmlwidth">The <code class="elem">width</code> element</h4>

<p>The <code class="elem">width</code> element <em>must</em> be present in config.xml as a child of the <code class="elem">widget</code> element. After whitespace normalization, and stripping of any leading/trailing white-space the value of this element <em>must</em> be interpretable as a string representation of an integer, containing only the characters [0&#x2013;9].</p>

<p>This integer value is treated as the widget&#39;s size along the horizontal axis, measured in <span class="caps">CSS</span> pixels, as per section 4.3.2 of <a href="#refsCSS21">[CSS21]</a></p>

<h4 id="xmlheight">The <code class="elem">height</code> element</h4>

<p>The <code class="elem">height</code> element <em>must</em> be present in config.xml as a child of the <code class="elem">widget</code> element. After whitespace normalization, and stripping of any leading/trailing white-space the value of this element <em>must</em> be interpretable as a string representation of an integer, containing only the characters [0&#x2013;9].</p>

<p>This integer value is treated as the widget&#39;s size along the vertical axis, measured in <span class="caps">CSS</span> pixels, as per section 4.3.2 of <a href="#refsCSS21">[CSS21]</a></p>

<h3 id="xmloptionalelements"> Optional child elements of <code class="elem">widget</code></h3>

<h4 id="xmlauthorelement">The <code class="elem">author</code> element</h4>

<p>The <code class="elem">author</code> element is an optional element of the <code class="elem">widget</code> element. If present, the purpose of the element is to provide information about the widget&#39;s author. This element has a few child elements, as specified below.</p>

<h5 id="xmlauthorname">The <code class="elem">name</code> element</h5>

<p>If the <code class="elem">author</code> element is present in the document, this element <em>should</em> be present as a child element of the <code class="elem">author</code> element. If present, this element <em>must</em> be a child of the <code class="elem">author</code> element, and its value <em>must</em> be a string that contain a human-readable representation of the widget author&#39;s name.</p>

<h5 id="xmlauthororganization">The <code class="elem">organization</code> element</h5>

<p>If the <code class="elem">author</code> element is present in the document, this element <em>may</em> be present as a child element of the <code class="elem">author</code> element. If present, this element <em>must</em> be a child of the <code class="elem">author</code> element, and its value <em>must</em> be a string that contains a human-readable name for an organization representing, or represented by the widget author.</p>

<h5 id="xmlauthoremail">The <code class="elem">email</code> element</h5>

<p>If the <code class="elem">author</code> element is present in the document, this element <em>may</em> be present as a child element of <code class="elem">author</code>. When present, this element <em>must</em> contain a string, whose value should be a valid e-mail adress as specified by <a href="#refsRFC2822">[RFC2822]</a>.  This e-mail address <em>should</em> be a live e-mail address widget users can use to contact the widget author.</p>

<h5 id="xmlauthorlink">The <code class="elem">link</code> element</h5>

<p>If the <code class="elem">author</code> element is present, the <code class="elem">link</code> element <em>may</em> be present as a child element of <code class="elem">author</code>. If the <code class="elem">link</code> element is present, this element <em>must</em> contain a string, whose value must be a syntactically valid <span class="caps">IRI</span> as specified by <a href="#refs3987">[RFC3987]</a>. It is further <em>recommended</em> that the <span class="caps">IRI</span> represented also resolves. The intended presentation to an end-user is to present this <span class="caps">IRI</span> as a link the user can visit.</p>

<h4 id="xmldescription">The <code class="elem">description</code> element</h4>

<p>The <code class="elem">description</code> element is an optional element of the <code class="elem">widget</code> element. If present, the element should contain a string that serves as a human-readable short plain-text description of the widget.</p>

<h4 id="xmlicon">The <code class="elem">icon</code> element</h4>

<p>The <code class="elem">icon</code> element is an optional element of the <code class="elem">widget</code> element. The purpose of this element is to provide a pointer to an icon file contained within the widget archive that the underlying operating system and widget player can display to the end user where displaying an application icon is natural.</p>

<p>The element <em>must</em> contain a string that is a relative <span class="caps">IRI</span> in accordance with <a href="#refsRFC3987">[RFC3987]</a>, with the root path being the same as the location of the <var>config.xml</var> file.</p>

<p>When present, the <span class="caps">IRI</span> <em>must</em> resolve, and <em>must</em> reference an image, in either of the following formats: <a href="#refsPNG10">[PNG10]</a> or <a href="#refsGIF89">[GIF89]</a>.</p>

<h4 id="xmlsecurity">The <code class="elem">security</code> element</h4>

<p>The <code class="elem">security</code> element is an optional child element of the <code class="elem">widget</code> element and <em>may</em> be present in the document. The purpose  of the <code class="elem">security</code> element is to act as a container for security-related settings in a widget. The elements of the <code class="elem">security</code> elements are described below.</p>

<h5 id="xmlsecurityaccess">The <code class="elem">access</code> element</h5>

<p>The <code class="elem">access</code> element is an optional element of the <code class="elem">security</code> element. The child elements of <code class="elem">access</code> declares which protocols, hosts, ports, and paths the widget may use. Missing subelements are interpreted to mean &#x201C;any&#x201D;. Furthermore, all of the specified child elements <em>may</em> occur multiple times, and the product of all these is used. The child elements are as defined below.</p>

<dl>
  <dt><code>protocol</code></dt>
  <dd><p>The protocols the widget will be using to contact external servers.  All protocols, except the <var>file</var> protocol is permitted.</p></dd>

<dt><code class="elem">host</code></dt>
  <dd><p>The <code class="elem">host</code> element establishes which hostnames may be contacted. The hostnames is an exact match, so a widget specifying <samp>www.example.com</samp> <em>must not</em> be able to contact <samp>example.com</samp>. IP addresses <em>may</em> also be used as values.</p></dd>

<dt><code class="elem">port</code></dt>
  <dd><p>The <code class="elem">port</code> element establishes which port numbers the widget will be using. The
value is either a number, a range of numbers separated by a dash, e.g. <code class="example">1024&#x2013;2048</code>, or a comma-separated list of ports, e.g. <code class="example">80, 1337</code>. </p></dd>

<dt><code class="elem">path</code></dt>
  <dd><p>The <code class="elem">path</code> element specifies the path part of the <span class="caps">URI</span> a widget may contact.</p></dd>
</dl>

<h5 id="xmlcontent">The <code>content</code> element</h5>

<p>Widgets <em>may</em> use third-party plugins, and Java content.  Plugins that wants to use these features <em>must</em> request this access by adding an optional <code>content</code> element as a child of the <code>security</code> element.  When present, the <code>content</code> element <em>must</em> contain at least one of the two attributes specified below, and it <em>may</em> contain both.</p>

<dl>
  <dt><code class="att">java</code> attribute</dt>
  <dd><p>The possible values of this attribute are respectively the case-insensitive strings &quot;<samp>yes</samp>&quot; or &quot;<samp>no</samp>&quot;. When a widget wants access to use Java content embedded in the widget, the value of this attribute <em>must</em> be &quot;<samp>yes</samp>&quot;. If the <code class="att">java</code> attribute is not present, the attribute is assumed to be present, and have the associated value &quot;no&quot;.</p></dd>

<dt><code class="att">plugin</code> attribute</dt>
  <dd><p>The possible values of this attribute are respectively the case-insensitive strings &#x201D;<samp>yes</samp>&#x201D; or &#x201D;<samp>no</samp>&#x201D;. When a widget wants access to use Java content embedded in the widget, the value of this attribute <em>must</em> be &#x201D;<samp>yes</samp>&#x201D;. If the <code class="att">plugin</code> attribute is not present, the attribute is assumed to be present, and have the associated value &#x201C;no&#x201D;.</p></dd>
</dl>

<p>If a <code class="elem">content</code> element is not present in a config.xml&#x2019;s security section, or if a security section is not present in a widget,
the element is assumed to be present with the value of both <code class="elem">java</code> and <code class="elem">plugins</code> set to &#x201D;<samp>no</samp>&#x201D;.</p>

<h5 id="securitymodel">Security model</h5>

<p>The widget access model is summarised as follows.</p>

<ol>
<li>Widgets do not have access to content residing on a user&#x2019;s file system, using the file: protocol</li>
<li>Widgets <em>may</em> access content over http, regardless over the
presence of a security section in config.xml. Widgets may not use any
other protocol without prior declaration.</li>
<li>Widgets <em>may</em> access content over https, but <strong>only</strong> if the widget has declared this in the security section of config.xml</li>
<li>Widgets can not access both hosts on intranets and Internet. If a widget has contacted address defined as an intranet, it may no longer contact an address <strong>not</strong> defined as an intranet address.  Likewise, if a widget contacts something defined as <strong>not</strong> being an intranet, it may no longer contact intranet addresses.</li>
<li>Widgets may not contact non-default ports, except when pre-declared in config.xml. Further, widgets may not contact non-default ports equal to or below 1023.</li>
</ol>

<h5 id="intranetdefinition">Intranet definition</h5>

<p>An intranet is defined based on the resolved IPv4 address of a host name. The following IPv4 ranges are defined as intranets:</p>

<ul>
    <li>10.0.0.0       to     10.255.255.255</li>
    <li>172.16.0.0     to     172.31.255.255</li>
    <li>192.168.0.0    to     192.168.255.255</li>
    <li>169.254.0.0    to     169.254.255.255</li>
</ul>  

<p>All other IP ranges than these are defined as Internet addresses.</p>

<h5 id="securityexample">Security example</h5>

<p>The following example contains a security section would indicate that the widget should be allowed to contact the domains <code class="uri">example.com</code> and <code class="uri">example.org</code> using either the https or http protocols, but only to the path &#x2019;/good&#x2019; on ports 80,1337 and ports in the range 2048&#x2013;4096. In addition, the widget wants access to Java, but not plugins.</p>

<pre class="example"><code>&lt;security&gt;
  &lt;access&gt;
    &lt;protocol&gt;http&lt;/protocol&gt;
    &lt;protocol&gt;https&lt;/protocol&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;host&gt;example.org&lt;/host&gt;
    &lt;path&gt;/good&lt;/path&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
    &lt;port&gt;80,1337&lt;/port&gt;
  &lt;/access&gt;
  &lt;content java=&quot;yes&quot; plugins=&quot;no&quot; /&gt;
&lt;/security&gt;</code></pre>

<h4 id="xmlwidgetid">The <code>id</code> element</h4>

<p>The <code class="elem">id</code> element is an optional child element of the <code class="elem">widget</code> element. If present, this element <em>may</em> be used to establish a concept of identity of the widget that <em>may</em> be used for recognizing version updates and similar. The syntax requirement for this element is to have three <em>required</em> child elements, containing strings, as specified below.</p>

<dl>
      <dt><code class="elem">host</code></dt>
      <dd><p>This element is <em>required</em>, and <em>must</em> be a fully qualified domain name naming the host from which the widget was downloaded.</p></dd>
      <dt><code class="elem">name</code></dt>
      <dd><p>This element is <em>required</em>, and <em>must</em> be a string that is unique to the domain specified in the <code>host</code> element.</p></dd>
      <dt><code class="elem">revised</code></dt>
      <dd><p>This element is <em>required</em>, and <em>must</em> be a string in the [W3CDTF]:#refsW3CDTF format, with the added constraint that both year and month are made mandatory parts of the date. The date used should be a date chosen by the author, with
enough granularity to represent two different, with the exception that both Year and Month is made mandatory.</p></dd>
</dl>

<h2 id="scriptinginterface">Widget JavaScript interfaces </h2>

<h3 id="widgetobject">The widget object</h3>

<h4 id="widgetobjpurpose">Purpose</h4>

<p>The purpose of the <code>widget</code> object is to expose functionality specialized to widgets that should not or must not be available or to to scripts running on regular web pages. The widget object implements the Widget interface:</p>

<pre><code class="idl" id="widget-interface">interface Widget {
  void    &lt;a href=&quot;#wo-openURL&quot;&gt;openURL&lt;/a&gt;(String URL);
  String  &lt;a href=&quot;#wo-preferenceForKey&quot;&gt;preferenceForKey&lt;/a&gt;(String key);
  void    &lt;a href=&quot;#wo-setPreferenceForKey&quot;&gt;setPreferenceForKey&lt;/a&gt;(String value, 
                              String key);
}</code></pre>

<h4 id="woopenURL">The <code class="script func">openURL()</code> method</h4>

<p>The <code>openURL()</code> method on the widget object takes a String an argument. Further, this string must be a valid <em>must</em> be a valid <abbr title="Uniform Resource Locator"><span class="caps">URL</span></abbr> as defined by <a href="#refRFC3987">[RFC3987]</a>. When this method is called with a valid <span class="caps">URL</span>, the <span class="caps">URL</span> should be opened in the system browser on the system on which the widget runs. The <code>openURL()</code> method on the widget object takes a String an argument. Further, this string must be a valid <em>must</em> be a valid <abbr title="Uniform Resource Locator"><span class="caps">URL</span></abbr> as defined by <a href="#refRFC3987">[RFC3987]</a>. When this method is called with a valid <span class="caps">URL</span>, the <span class="caps">URL</span> should be opened in the system browser on the system on which the widget runs.</p>

<p>Note that restrictions to what URLs can be opened using openURL, as defined in the <a href="#security">security</a> section of this specification. Specifically this applies:</p>

<ul>
<li>Widgets cannot open URLs in the <code class="uri">file:</code> domain</li>
<li>Widgets that have contacted the non-routable IPv4 address ranges as specified cannot use openURL to open URLs in other IPv4 ranges than those specified</li>
<li>Likewise, widgets that have contacted addresses outside the four non-routable address, cannot use openURL to open URLs in the specified ranges.</li>
<li>OpenURL does not accept relative <span class="caps">IRI</span>&#x2018;s and as such cannot open any files stored inside the widget.</li>
</ul>

<h4 id="wopreferenceForKey">The preferenceForKey() method</h4>

<p>The <code>preferenceForKey()</code> method takes a String argument, <var>key</var>. When called, this method returns a string that has previously been stored with the <code><a href="#wo-setPreferenceForKey">setPreferenceForKey</a></code> method, or <samp>undefined</samp> if the key <var>key</var> does not exist.</p>

<h4 id="wosetPreferenceForKey">The setPreferenceForKey() method</h4>

<p>The <code>setPreferenceForKey()</code> method takes two String arguments, <var>preference</var> and <var>key</var>. When called, this methods stores the string in the <var>preference</var> argument, and stores it with the key named  for later retrieval using the <code><a href="#wo-preferenceForKey">preferenceForKey()</a></code> method.  To delete a previously stored key, the <code>setPreferenceForKey()</code> method is called with the value <var>null</var> in the <var>preference</var> argument, and the name of the key to be deletec in the <var>key</var> argument.</p>

<h3 id="widgetgeometry">Widget geometry</h3>

<p>A widget&#x2019;s initial dimensions are controlled by the <code class="elem"><a href="#config-width">width</a></code> and<code class="elem"><a href="#config-height">width</a></code> elements of the <var><a href="#config-xml">config.xml</a></var> file.</p>

<h2 id="autodiscovery">Widget autodiscovery</h2>

<h3 id="autodiscopurpose">Purpose</h3>

<p>The purpose of Widget autodiscovery is to enable clients who know a <span class="caps">URI</span> of a web page to identify and find the location of a widget associated with said web page. A widget-aware web client should offer a mechanism that exposes the presence of the widget to the user, and offer a mechanism for installing the widget.</p>

<h3 id="autodiscoelement">Definition</h3>

<p>A Widget <code class="elem">autodiscovery</code> element is a link element, as defined in section 12.3. of <a href="#refsHTML401">[HTML401]</a>. As with other link elements, an autodiscovery element may appear in the <code>&lt;head&gt;</code> element of an <span class="caps">HTML</span> or <span class="caps">XHTML</span> document, but it must not appear inside the  element. An example autodiscovery element looks like this:</p>

<pre><code class="example">
&lt;link 
  type=&quot;application/x-opera-widgets&quot; 
  rel=&quot;alternate&quot;
  href=&quot;http://widgets.example.com/example.zip&quot;
  title=&quot;An Example Widget&quot;
/&gt;</code></pre>

<h3 id="autodiscohtmlrelation">Relationship to <span class="caps">HTML</span> and <span class="caps">XHTML</span></h3>

<h4 id="autodiscosyntaxinhertiance">Syntax rules inherited from <span class="caps">HTML</span> and <span class="caps">XHTML</span></h4>

<p>When a widget autodiscovery element appears in a <a href="#refsHTML401">[HTML401]</a> or <a href="#refsXHTML10">[XHTML10]</a> document, the element shares all the syntax rules and restricitions of other markup elements.</p>

<h4 id="autodiscomultiplelink">Multiple autodiscovery elements</h4>

<p>A document <em>may</em> contain multiple autodiscovery elements. A User Agent <em>should</em> present an installation option for all autodiscovered widgets to the user, listed in the order of appearance in the source code.</p>

<p>A User Agent that only presents one autodiscovered widget to the user <em>should</em> choose the first autodiscovered widget for installation whenever the user opts to install the widget.</p>

<h3 id="autodiscoreqattrs">Required attributes</h3>

<h4 id="autodiscotypeattr">The <code>type</code> attribute</h4>

<p>The <code class="att">type</code> attribute <em>must</em> be present in a widget autodiscovery element. The value of the type attribute must be an Internet Media type, and the media type <em>must</em> be <var>application/x-opera-widgets</var>.</p>

<h4 id="autodiscorelattr">The <code class="elem">rel</code> attribute</h4>

<p>The <code class="att">rel</code> attribute <em>must</em> be present in a <code class="elem">widget</code> autodiscovery element. As defined in section 6.12 of <a href="#refsHTML401">[HTML401]</a>, the value of the <code class="att">rel</code> attribute is a space-sparated list of keywords. The list of keywords must include the keyword <var>alternate</var> in uppercase, lowecase, or mixed case.</p>

<h4 id="autodiscohrefattr">The <code class="att">href</code> attribute</h4>

<p>The <code class="att">href</code> attribute must be present in a widget autodiscovery element, and its value must be the <abbr title="Uniform Resource Identifier"><span class="caps">URI</span></abbr> of the widget. The value may be a relative <span class="caps">URI</span>, and if so, clients must resolve it to a full <span class="caps">URI</span>, using the document&#x2019;s base <span class="caps">URI</span>. The URIs must conform to <a href="#refsRFC3987">[RFC3987]</a>.</p>

<h3 id="autodiscooptattrs">Optional attributes</h3>

<h4 id="autodiscotitleattr">The <code>title</code> attribute</h4>

<p>The <code class="att">title</code> attribute <em>may</em> be present in a widget autodiscovery element. A User-Agent <em>should</em> treat the value of the title attribute as a human-readable title for the widget, and the User-Agent <em>may</em> present this title to the user.</p>

<h2 class="nonum" id="acknowledgments">Acknowledgements</h2>

<ul><li>The specification for the <a href="#widget-object">widget object</a> builds on Apple&#39;s <a href="#refsDashboard">[Dashboard]</a> reference. </li><li><a href="#autodiscovery">Widget Autodiscovery</a> in large parts builds on the <a href="#refsAtomAutodiscovery">[AtomAutodiscovery]</a> specification.</li></ul>

<h2 class="references" id="references">References </h2>
<dl><dt id="refsRFC2119">[RFC2119]</dt>
    <dd><a href="http://www.ietf.org/rfc/rfc2119">Key words for use in RFCs to Indicate Requirement Levels</a>, S. Bradner. IETF, March 1997. RFC2119 is available at http://www.ietf.org/rfc/rfc2119</dd>
<dt id="refsZIP">[ZIP]</dt>
    <dd><a href="http://www.pkware.com/business_and_developers/developer/popups/appnote.txt">.ZIP File Format Specification</a>. PKWare Inc., January 2006 The .ZIP File Format Specification is available at <a href="http://www.pkware.com/business_and_developers/developer/popups/appnote.txt">http://www.pkware.com/business_and_developers/developer/popups/appnote.txt</a></dd>
<dt id="refsXML10">[XML10]</dt>
    <dd><a href="http://www.w3.org/TR/REC-xml/">Extensible Markup Language (XML) 1.0 (Third Edition)</a>.
Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler, François
Yergeau. W3C, February 2004. Extensible Markup Language (XML) 1.0
specifciation is available at <a href="http://www.w3.org/TR/REC-xml/">http://www.w3.org/TR/REC-xml/</a></dd>
    <dt id="refsCSS21">[CSS21]</dt>
    <dd><a href="http://www.w3.org/TR/CSS21/">Cascading Style Sheets, level 2 revision 1; <span class="caps">CSS</span> 2.1 Specification</a>. Bert Bos, Ian Hickson, Tantek Çelik, Håkon Wium Lie. W3C, April 2006. The <span class="caps">CSS</span> 2.1 Specification can be found at <a href="http://www.w3.org/TR/CSS21/">http://www.w3.org/TR/CSS21/</a></dd>
<dt id="refsRFC3987">[RFC3987]</dt>
    <dd><a href="http://www.ietf.orcodeg/rfc/rfc3987">Internationalized Resource Identifiers (IRIs)  </a>. M. Duerst, M. Suignard. <span class="caps">IETF</span>, January 2005. RFC3987 is available at <a href="http://www.ietf.org/rfc/rfc3987">http://www.ietf.org/rfc/rfc3987</a></dd>
<dt id="refsDashboard">[Dashboard]</dt>
    <dd><a href="http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html">Dashboard Reference</a>. Apple Computer, Inc, May 2006. The Apple Dashboard Reference is available at <a href="http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html">http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html</a></dd>
<dt id="refsHTML401">[HTML401]</dt>
    <dd><a href="http://www.w3.org/TR/html401/"><span class="caps">HTML</span> 4.01 Specification</a>, Dave Raggett, Arnaud Le Hors, Ian Jacobs. W3C, December 1999. The <span class="caps">HTML</span> 4.01 Specification is available at <a href="http://www.w3.org/TR/html401/">http://www.w3.org/TR/html401/</a></dd>
<dt id="refsXHTML1">[XHTML1]</dt>
    <dd><a href="http://www.w3.org/TR/xhtml1/"><span class="caps">XHTML</span>&#x2122; 1.0 The Extensible HyperText Markup Language (Second Edition)</a>, S. Pemberton et al. W3C, January 2000. The <span class="caps">XHTML</span> 1.0 specification is available at <a href="http://www.w3.org/TR/xhtml1/">http://www.w3.org/TR/xhtml1/</a></dd>
<dt id="refsAtomAutodiscovery">[AtomAutodiscovery]</dt>
    <dd><a href="http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html">Atom Autodiscovery (draft)</a>, M. Pilgrim, P. Ringnalda. <span class="caps">ATOMPUB</span> Working Group, May 2005&#x2014;. The Atom Autodiscovery specification draft is available at <a href="http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html">http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html</a></dd>
</dl>
