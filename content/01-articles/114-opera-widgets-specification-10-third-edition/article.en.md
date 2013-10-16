Title: Opera Widgets specification 1.0, third edition
----
Date: 2008-05-21 07:29:16
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

<p class="note">This is an old version of the Opera Widgets specification 1.0. Unless you have a really specific reason to read this one, you should read the <a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/">Opera Widgets Specification 1.0 Fourth Edition</a> instead.</p>

<h2 class="no-num no-toc" id="abstract">Abstract</h2>

<p>This document describes Opera Widgets 1.0, third edition, and covers all
   aspects of Opera Widgets, including the packaging format, the
   configuration file - config.xml - and scripting interfaces for working with
   widgets.
  </p>

<h2 class="no-num" id="status">Status of this document</h2>

<p>This document and its appendices represent the required solutions for
   creating and running interoperable Opera Widgets across target platforms,
   both on devices and desktop.
</p>

<h2 class="no-num no-toc" id="table">Table of contents</h2>

<ul class="toc">
<li><a href="#opera">Opera Widgets specification 1.0, third edition</a>
 <ul class="toc">
 <li class="no-num"><a href="#status">Status of this document</a></li>
 <li><a href="#intro"><span class="secno">1. </span>Introduction</a>
  <ul class="toc">
  <li><a href="#conformance"><span class="secno">1.1. </span>Conformance Requirements</a></li>
  </ul></li>
 <li><a href="#packaging"><span class="secno">2. </span>Widget packaging</a>
  <ul class="toc">
  <li><a href="#packaging_fileformat"><span class="secno">2.1. </span>File format</a></li>
  <li><a href="#packaging_files"><span class="secno">2.2. </span>Widget files</a></li>
  <li><a href="#packaging_structure"><span class="secno">2.3. </span>Widget folder structure</a></li>
  <li><a href="#content_type"><span class="secno">2.4. </span>Content-Type</a></li>
  <li><a href="#file_extension"><span class="secno">2.5. </span>File extension</a></li>
  </ul></li>
 <li><a href="#config_xml"><span class="secno">3. </span>Widget configuration file: config.xml</a>
  <ul class="toc">
  <li><a href="#xml_whitespace"><span class="secno">3.1. </span>White space</a></li>
  <li><a href="#xml_widget"><span class="secno">3.2. </span>The <code>widget</code> element</a>
   <ul class="toc">
   <li><a href="#widget_attributes"><span class="secno">3.2.1. </span>Optional attributes for the <code>widget</code> element</a></li>
   </ul></li>
  <li><a href="#xml_required_elements"><span class="secno">3.3. </span>Required child elements of <code>&lt;widget&gt;</code></a>
   <ul class="toc">
   <li><a href="#xml_widgetname"><span class="secno">3.3.1. </span>The <code>widgetname</code> element</a></li>
   <li><a href="#xml_width"><span class="secno">3.3.2. </span>The <code>width</code> element</a></li>
   <li><a href="#xml_height"><span class="secno">3.3.3. </span>The <code>height</code> element</a></li>
   </ul></li>
  <li><a href="#xml_optional_elements"><span class="secno">3.4. </span>Optional child elements of <code>&lt;widget&gt;</code></a>
   <ul class="toc">
   <li><a href="#xml_widgetfile_element"><span class="secno">3.4.1. </span>The <code>widgetfile</code> element</a></li>
   <li><a href="#xml_author_element"><span class="secno">3.4.2. </span>The <code>author</code> element</a>
    <ul class="toc">
    <li><a href="#xml_author_name"><span class="secno">3.4.2.1. </span>The <code>name</code> element</a></li>
    <li><a href="#xml_author_organization"><span class="secno">3.4.2.2. </span>The <code>organization</code> element</a></li>
    <li><a href="#xml_author_email"><span class="secno">3.4.2.3. </span>The <code>email</code> element</a></li>
    <li><a href="#xml_author_link"><span class="secno">3.4.2.4. </span>The <code>link</code> element</a></li>
    </ul></li>
   <li><a href="#xml_description"><span class="secno">3.4.3. </span>The <code>description</code> element</a></li>
   <li><a href="#xml_icon"><span class="secno">3.4.4. </span>The <code>icon</code> element</a></li>
   <li><a href="#xml_security"><span class="secno">3.4.5. </span>The <code>security</code> element</a>
    <ul class="toc">
    <li><a href="#xml_security_access"><span class="secno">3.4.5.1.</span> The <code>access</code> element</a></li>
    <li><a href="#xml_content"><span class="secno">3.4.5.2. </span>The <code>content</code> element</a></li>
    <li><a href="#security_model"><span class="secno">3.4.5.3. </span>Security model</a></li>
    <li><a href="#intranet_definition"><span class="secno">3.4.5.4. </span>Intranet definition</a></li>
    <li><a href="#security_example"><span class="secno">3.4.5.5. </span>Security example</a></li>
    </ul></li>
   <li><a href="#xml_widget_id"><span class="secno">3.4.6. </span>The <code>id</code> element</a></li>
   </ul>
</li>
  </ul>
</li>
 <li><a href="#widget_modes"><span class="secno">4. </span>Widget modes</a>
  <ul class="toc">
  <li><a href="#css_extension"><span class="secno">4.1. </span>CSS extensions for widget modes</a></li>
  </ul>
</li>
 <li><a href="#scripting_interface"><span class="secno">5. </span>Widget scripting interfaces</a>
  <ul class="toc">
  <li><a href="#widget_object"><span class="secno">5.1. </span>The widget object</a>
   <ul class="toc">
   <li><a href="#widget_obj_purpose"><span class="secno">5.1.1. </span>Purpose</a></li>
   <li><a href="#wo_identifier"><span class="secno">5.1.2. </span>The <code>identifier</code> attribute, of type <code>DOMString</code>, readonly</a></li>
   <li><a href="#wo_originURL"><span class="secno">5.1.3. </span>The <code>originURL</code> attribute, of type <code>DOMString</code>, readonly</a></li>
   <li><a href="#wo_widgetMode"><span class="secno">5.1.4. </span>The <code>widgetMode</code> attribute, of type <code>DOMString</code>, readonly</a></li>
   <li><a href="#wo_openURL"><span class="secno">5.1.5. </span>The <code>openURL</code>() method</a></li>
   <li><a href="#wo_preferenceForKey"><span class="secno">5.1.6. </span>The
   <code><span>preferenceForKey</span></code>() method</a></li>
   <li><a href="#wo_setPreferenceForKey"><span class="secno">5.1.7. </span>The <code>setPreferenceForKey</code>() method</a></li>
   <li><a href="#wo_getAttention"><span class="secno">5.1.8. </span>The <code>getAttention</code>() method</a></li>
   <li><a href="#wo_showNotification"><span class="secno">5.1.9. </span>The <code>showNotification</code>() method</a></li>
   <li><a href="#wo_onshow"><span class="secno">5.1.10. </span>The <code>onshow</code> attribute, of type Function</a></li>
   <li><a href="#wo_onhide"><span class="secno">5.1.11. </span>The <code>onhide</code> attribute, of type Function</a></li>
   <li><a href="#wo_show"><span class="secno">5.1.12. </span>The <code>show</code>() method</a></li>
   <li><a href="#wo_hide"><span class="secno">5.1.13. </span>The <code>hide</code>() method</a></li>
   </ul>
</li>
  <li><a href="#widget_window_object"><span class="secno">5.2. </span>The <code>widgetWindow</code> interface</a>
   <ul class="toc">
   <li><a href="#ww_status"><span class="secno">5.2.1. </span>The <code>status</code> attribute, of type DOMString</a></li>
   <li><a href="#ww_defaultStatus"><span class="secno">5.2.2. </span>The <code>defaultStatus</code> attribute, of type DOMString</a></li>
   <li><a href="#moveto_method"><span class="secno">5.2.3. </span>The <code>moveTo</code>() method</a></li>
   <li><a href="#moveby_method"><span class="secno">5.2.4. </span>The <code>moveBy</code>() method</a></li>
   <li><a href="#resizeto_method"><span class="secno">5.2.5. </span>The <code>resizeTo</code>() method</a></li>
   <li><a href="#resizeby_method"><span class="secno">5.2.6. </span>The
   <code><span>resizeBy</span></code>() method</a></li>
   <li><a href="#storing"><span class="secno">5.2.7. </span>Storing geometric information</a></li>
   </ul>
</li>
  <li><a href="#the_widgetmodechangeevent"><span class="secno">5.3. </span>The <code>WidgetModeChangeEvent</code>
   interface</a></li>
  <li><a href="#the_resolutionevent"><span class="secno">5.4. </span>The <code>ResolutionEvent</code> interface</a></li>
  </ul></li>
 <li><a href="#autodiscovery"><span class="secno">6. </span>Widget autodiscovery</a>
  <ul class="toc">
  <li><a href="#autodisco_purpose"><span class="secno">6.1. </span>Purpose</a></li>
  <li><a href="#autodisco_element"><span class="secno">6.2. </span>Definition</a></li>
  <li><a href="#autodisco_html_relation"><span class="secno">6.3. </span>Relationship to HTML and XHTML</a>
   <ul class="toc">
   <li><a href="#autodisco_syntax_inheritance"><span class="secno">6.3.1. </span>Syntax rules inherited from HTML and XHTML</a></li>
   <li><a href="#autodisco_multiple_link"><span class="secno">6.3.2 </span>Multiple
   autodiscovery elements</a></li>
   </ul>
</li>
  <li><a href="#autodisco_req_attrs"><span class="secno">6.4. </span>Required attributes</a>
   <ul class="toc">
   <li><a href="#autodisco_type_attr"><span class="secno">6.4.1. </span>The type
   attribute</a></li>
   <li><a href="#autodisco_rel_attr"><span class="secno">6.4.2. </span>The rel attribute</a></li>
   <li><a href="#autodisco_href_attr"><span class="secno">6.4.3. </span>The href
   attribute</a></li>
   </ul>
</li>
  <li><a href="#autodisco_opt_attrs"><span class="secno">6.5. </span>Optional attributes</a>
   <ul class="toc">
   <li><a href="#autodisco_title_attr"><span class="secno">6.5.1. </span>The title
   attribute</a></li>
   </ul>
</li>
  <li><a href="#algorithm"><span class="secno">6.6. </span>Algorithm for widget sizing</a></li>
  <li><a href="#initial_position_algorithm"><span class="secno">6.7. </span>Determining
   the initial widget position</a></li>
  <li><a href="#positioning_other"><span class="secno">6.8. </span>Other</a></li>
  <li><a href="#virtual_viewports"><span class="secno">6.9. </span>Virtual viewport
   resizing</a></li>
  </ul>
</li>
 <li class="no-num"><a href="#acknowledgments">Acknowledgements</a></li>
 <li class="no-num"><a href="#references">References</a></li>
 <li class="no-num"><a href="#positioning_sizing">Appendix A: Widget positioning and sizing</a></li>
 </ul>
</li></ul>

<h2 id="intro"><span class="secno">1. </span>Introduction</h2><p>The purpose of this specification is to provide an implementation
   reference for Widgets in the Opera browser. The specification builds
   on the currently implemented features in Opera 9.50.

  </p><h3 id="conformance"><span class="secno">1.1 </span>Conformance Requirements</h3><p>The key words &#x201D;<em>MUST</em>&#x201D;, &#x201D;<em>MUST
   NOT</em>&#x201D;, &#x201D;<em>REQUIRED</em>&#x201D;,
   &#x201D;<em>SHALL</em>&#x201D;, &#x201D;<em>SHALL NOT</em>&#x201D;,
   &#x201D;<em>SHOULD</em>&#x201D;, &#x201D;<em>SHOULD NOT</em>&#x201D;,
   &#x201D;<em>RECOMMENDED</em>&#x201D;, &#x201D;<em>MAY</em>&#x201D;, and
   &#x201D;<em>OPTIONAL</em>&#x201D; in this document are to be interpreted as
   described in <a href="#refsRFC2119">[RFC2119]</a>.

  </p><p>Unless specifically marked otherwise, this document is considered to be
   normative.

  </p><h2 id="packaging"><span class="secno">2. </span>Widget packaging</h2><h3 id="packaging_fileformat"><span class="secno">2.1 </span>File format</h3><p>Widgets are bundled archives of files, as specified by the <a href="#refsZIP">[ZIP]</a> file format specification, with the exception that
   the &#x2018;Deflate64&#x2019; compression method for the <a href="#refsZIP">[ZIP]</a> file format is not supported.

  </p><h3 id="packaging_files"><span class="secno">2.2 </span>Widget files</h3><p>Every Opera Widget <em>must</em> contain the following two files:

  </p><ul><li> <var><a href="#config_xml">config.xml</a></var> &#x2013; a
    configuration file containing information necessary to initialize the
    widget. This file always contains information about the widget&#x2019;s
    name and geometry, and may optionally contain more information about the
    widget, as follows:
    <ul><li>Widget description

     </li><li>Author information

     </li><li>Icon reference

     </li><li>Security information
    </li></ul>

   </li><li><var>index.html</var> &#x2013; this is the main document for the actual
    widget. It is displayed in a viewport established by the <var><a href="#config_xml">config.xml</a></var> file. This HTML document can
    reference external content, including but not limited to scripts, CSS
    files and images, the same way regular web pages can.
  </li></ul><h3 id="packaging_structure"><span class="secno">2.3 </span>Widget folder
   structure</h3><p>When a widget is packed as a zip file for distribution, the author
   <em>must</em> choose one of two different ways of structuring the files
   and folders within the widget:</p>

<ol>
  <li>The config.xml and index.html are put in the <em>root</em> of the .zip file,
   with any associated resources, such as scripts and images, in the same
   directory or subdirectories.</li>

  <li>An alternative approach is to put all of the files belonging to the
   widget inside a directory located at the root of the zip file. The name of
   this folder <em>should</em> be the same as the compressed zip file. When
   this alternative approach is used, there <em>must not</em> be multiple
   folders at the root of the zip file&#39;s hierarchy. If there are multiple
   folders at the root, loading the widget <em>must</em> fail.</li>
</ol>

  <p>When a widget is loaded a virtual root path for a file system is
   established based on the location of <var><a href="#config_xml">config.xml</a></var>, where this root path is in the
   same folder as <var>config.xml</var>.

  </p><h3 id="content_type"><span class="secno">2.4 </span>Content-Type</h3><p>When widgets are served from web servers, they <em>must</em> be served
   with the content-type <code>application/x-opera-widgets</code>.

  </p><h3 id="file_extension"><span class="secno">2.5 </span>File extension</h3><p>Widgets <em>should</em> have the file extension <var>.wgt</var> to be
   properly recognized as widgets. If, however, the content-type is being used
   correctly, as above, other extensions such as <var>.zip</var>
   <em>should</em> work.

  </p><h2 id="config_xml"><span class="secno">3. </span>Widget configuration file:
   config.xml</h2><p>The necessary information for a widget UA to run a widget is stored in a
   file named <var>config.xml</var>, located as previously specified in the
   <a href="#packaging">Widget packaging</a> chapter of this specification. This
   file contains information about the widget necessary to establish the
   initial view for the widget file. A config.xml file is an XML 1.0 document
   following <a href="#refsXML10">[XML10]</a>

  </p><p>A minimal config.xml looks like the following, giving the widget a name
   and making the initial viewport a size of 300&#xD7;300 CSS pixels:

  </p><pre class="example"><code> &lt;widget&gt;
  &lt;widgetname&gt;
    Hello World!
  &lt;/widgetname&gt;
  &lt;width&gt;
    300
  &lt;/width&gt;
  &lt;height&gt;
    300
  &lt;/height&gt;
&lt;/widget&gt;</code> </pre><h3 id="xml_whitespace"><span class="secno">3.1 </span>White space</h3><p>When presented to the end user, whitespace characters in
   <span>config.xml</span> elements are normalized with the following rules:

  </p><ul><li>Leading and trailing whitespace is stripped

   </li><li>Multiple whitespace characters are normalized to single whitespace
    characters.
  </li></ul><p>This presentation is consistent with setting the value
   <samp>normal</samp> for the white-space attribute in <a href="#refsCSS21">[CSS21]</a>

  </p><p>When processing <span>config.xml</span>, Opera will ignore leading and
   trailing whitespace for all elements, equivalent to getting the
   <code>textContent</code> DOM attribute value.

  </p><h3 id="xml_widget"><span class="secno">3.2 </span>The <code><a href="#widget">widget</a></code> element</h3><p>The <code><a href="#widget">widget</a></code> element is the root
   element of the config.xml file, and <em>must</em> be present in the widget
   configuration file as the only element in the document root, as per <a href="#refsXML10">[XML10]</a>.

  </p><h4 id="widget_attributes"><span class="secno">3.2.1 </span>Optional attributes
   for the <a href="#widget"><code>widget</code></a> element</h4><dl><dt>The <dfn id="defaultmode"><code>defaultmode</code></dfn> attribute

   </dt><dd>
    <p>The <a href="#defaultmode"><code>defaultmode</code></a> attribute MAY
     be present on the widget element, in which case it contains the
     preferred <a href="#widget_modes">rendering mode</a> for a widget. Valid
     attribute values are:</p>

    <ul><li><code><a href="#widget">widget</a></code>: The widget is typically
      rendered without user chrome, and the widget is assumed to have control
      over its own window size.

     </li><li><code>application</code>: The widget is assumed to be rendered in a
      viewport size determined by the widget engine, optionally using the
      initial rendering dimensions specified in config.xml as a suggestion.
      Furthermore, where applicable the widget engine <em>should</em> also
      render application chrome.

     </li><li><code>fullscreen</code>: This mode is identical to the
      <code>application</code> mode, except that the widget is expected to be
      rendered using the entire available viewport. A user agent <em>may</em>
      render the widget using application chrome.
    </li></ul>

    <p>If the specified rendering mode is not available to the widget, the
     widget should fall back to render in another mode, in the order
     application, fullscreen, widget.</p>

    <p>If the attribute is missing, it is assumed to be present with the
     value <a href="#widget"><code>widget</code></a>.</p>

   </dd><dt>The <dfn id="dockable"><code>dockable</code></dfn> attribute

   </dt><dd>
    <p>The <a href="#dockable"><code>dockable</code></a> attribute specifies
     whether the widget supports full docking, where a web document is
     displayed, as opposed to displaying limited information consisting of
     for example the Widget status, title and icon.</p>

   <p>Valid values for the <a href="#dockable"><code>dockable</code></a>
     attribute are case sensitive strings - the values &#39;yes&#39;, &#39;true&#39;
     and &#39;dockable&#39; represent dockable widgets. All other values are to be
     interpreted as the value <span><code>false</code></span>, meaning the widget
     is not providing a web document as it&#39;s docked mode.</p>


   </dd><dt>The <dfn id="transparent"><code>transparent</code></dfn> attribute

   </dt><dd>
    <p>If a widget does not require transparency features, ie the preferred
     presentation is for the entire widget viewport to be opaque, the <a href="#transparent"><code>transparent</code></a> attribute can be used
     to control the widget&#39;s use of transparency.</p>

    <p>Valid values for the <a href="#transparent"><code>transparent</code></a> attribute is a case
     sensitive string, having the values &#39;yes&#39;, &#39;true&#39; and &#39;transparent&#39;
     representing transparent widgets. All other values <em>must</em> be
     interpreted as &#39;false&#39;, meaning the widget will not be transparent.</p>

    <p>If the attribute is missing, and the current computed widget mode is
     &#39;widget&#39;, it is assumed to be present with the value <a href="#transparent"><code>transparent</code></a>, hence implying that
     the default presentation is to support transparency. If the computed
     value of the widget mode is &#39;application&#39; or &#39;fullscreen&#39;, the widget is
     expected to default to <span><code>false</code></span>, not supporting
     transparency. A user agent <em>may</em> override these values, depending
     on platform requirements.</p>
  </dd></dl><h3 id="xml_required_elements"><span class="secno">3.3 </span>Required child
   elements of <code>&lt;widget&gt;</code></h3><h4 id="xml_widgetname"><span class="secno">3.3.1 </span>The
   <code>widgetname</code> element</h4><p>The <code>widgetname</code> element <em>must</em> be present in
   config.xml as a child of the <code><a href="#widget">widget</a></code>
   element, and <em>must</em> contain a string whose purpose is to provide a
   human-readable title for the widget. This title will be used in
   application menus to provide a descriptive title for the widget.

  </p><h4 id="xml_width"><span class="secno">3.3.2 </span>The <code>width</code>
   element</h4><p>The <code>width</code> element <em>should</em> be present in config.xml
   as a child of the <code><a href="#widget">widget</a></code> element. After
   whitespace normalization, and stripping of any leading/trailing
   white-space the value of this element <em>must</em> be interpretable as a
   string representation of an integer, containing only the characters
   [0&#x2013;9].

  </p><p>This integer value is treated as the widget&#x2019;s size along the
   horizontal axis, measured in CSS pixels, as per section 4.3.2 of <a href="#refsCSS21">[CSS21]</a>, and should represent the inner width of the
   widget, or the entire drawable area along the horizontal axis.

  </p><p>If the attribute is missing or its value is invalid, it is assumed to
   be present with a value of 100.

  </p><p>Please see the note on <a href="#virtual_viewports">virtual
   viewports</a> when implementing on a target where chromeless windows cannot be dragged offscreen.

  </p><h4 id="xml_height"><span class="secno">3.3.3 </span>The <code>height</code>
   element</h4><p>The <code>height</code> element <em>should</em> be present in config.xml
   as a child of the <code><a href="#widget">widget</a></code> element. After
   whitespace normalization, and stripping of any leading/trailing
   white-space the value of this element <em>must</em> be interpretable as a
   string representation of an integer, containing only the characters
   [0&#x2013;9].

  </p><p>This integer value is treated as the widget&#x2019;s size along the
   vertical axis, measured in CSS pixels, as per section 4.3.2 of <a href="#refsCSS21">[CSS21]</a>, and should represent the inner height of
   the widget , or the entire drawable area along the horizontal axis.

  </p><p>If the attribute is missing, or its value is invalid, it is assumed to
   be present, with a value of 100.

  </p><p>Please see the note on <a href="#virtual_viewports">virtual
   viewports</a> when implementing on a target where chromeless windows cannot be dragged offscreen.

  </p><h3 id="xml_optional_elements"><span class="secno">3.4 </span>Optional child
   elements of <code>&lt;widget&gt;</code></h3><h4 id="xml_widgetfile_element"><span class="secno">3.4.1 </span>The
   <code>widgetfile</code> element</h4><p>The <code>widgetfile</code> element is an optional child element of the
   <code><a href="#widget">widget</a></code> element. If present, the purpose
   of this element is to point the widget to an alternative <span>start
   file</span> for the widget. When present, the element <em>must</em>
   contain a valid relative path reference to an alternative start file for
   the widget. The path reference <em>must</em> be URL encoded.

  </p><h4 id="xml_author_element"><span class="secno">3.4.2 </span>The
   <code>author</code> element</h4><p>The <code>author</code> element is an optional child element of the
   <code><a href="#widget">widget</a></code> element. If present, the purpose
   of the element is to provide information about the widget&#x2019;s author.
   This element has a few child elements, as specified below.

  </p><h5 id="xml_author_name"><span class="secno">3.4.2.1. </span>The
   <code>name</code> element</h5><p>If the <code>name</code> element is present in the document, this
   element <em>should</em> be present as a child element of the
   <code>author</code> element. If present, this element <em>must</em> be a
   child of the <code>author</code> element, and its value <em>must</em> be a
   string that contain a human-readable representation of the widget
   author&#x2019;s name.

  </p><h5 id="xml_author_organization"><span class="secno">3.4.2.2. </span>The
   <code>organization</code> element</h5><p>If the <code>organization</code> element is present in the document,
   this element <em>may</em> be present as a child element of the
   <code>author</code> element. If present, this element <em>must</em> be a
   child of the <code>author</code> element, and its value <em>must</em> be a
   string that contains a human-readable name for an organization
   representing, or represented by the widget author.

  </p><h5 id="xml_author_email"><span class="secno">3.4.2.3. </span>The
   <code>email</code> element</h5><p>If the <code>email</code> element is present in the document, this
   element <em>may</em> be present as a child element of <code>author</code>.
   When present, this element <em>must</em> contain a string, whose value
   should be a valid e-mail adress as specified by <a href="#refsRFC2822">[RFC2822]</a>. This e-mail address <em>should</em> be
   a live e-mail address widget users can use to contact the widget author.

  </p><h5 id="xml_author_link"><span class="secno">3.4.2.4. </span>The
   <code>link</code> element</h5><p>If the <code>link</code> element is present, the <code>link</code>
   element <em>may</em> be present as a child element of <code>author</code>.
   If the <code>link</code> element is present, this element <em>must</em>
   contain a string, whose value must be a syntactically valid IRI as
   specified by <a href="#refs3987">[RFC3987]</a>. It is further
   <em>recommended</em> that the IRI represented also resolves. The intended
   presentation to an end-user is to present this IRI as a link the user can
   visit.

  </p><h4 id="xml_description"><span class="secno">3.4.3 </span>The
   <code>description</code> element</h4><p>The <code>description</code> element is an optional child element of the
   <code><a href="#widget">widget</a></code> element. If present, the element
   should contain a string that serves as a human-readable short plain-text
   description of the widget.

  </p><h4 id="xml_icon"><span class="secno">3.4.4 </span>The <code>icon</code>
   element</h4><p>The <code>icon</code> element is an optional child element of the <code><a href="#widget">widget</a></code> element. The purpose of this element is
   to provide a pointer to an icon file contained within the widget archive,
   which the underlying operating system and widget player can display to the
   end user in places where displaying an application icon is natural.

  </p><p>The element <em>must</em> contain a string that is a relative IRI in
   accordance with <a href="#refsRFC3987">[RFC3987]</a>, with the root path
   being the same as the location of the <var><span>config.xml</span></var>
   file.

  </p><p>When present, the IRI <em>must</em> resolve, and <em>must</em> reference
   an image in either of the following formats: <a href="#refsPNG10">[PNG10]</a>, <a href="#refsGIF89">[GIF89]</a> or <a href="#refsSVG">[SVG]</a>.

  </p><p>The <code>icon</code> element can optionally have <code>width</code> and
   <code>height</code> attributes.

  </p><p> <var><span>config.xml</span></var> <em>may</em> contain more than
   one <code>icon</code> element. If multiple icon elements are present, the
   widget engine may choose the icon that best matches the display
   requirements of the widget engine, even if none of the specified icons
   exactly match the size.

  </p><dl><dt>width

   </dt><dd>The value of width is an unsigned integer, representing the desired
    width of the icon in device pixels.

   </dd><dt>height

   </dt><dd>The value of height is an unsigned integer, representing the desired
    height of the icon in device pixels.
  </dd></dl><p>When the user agent chooses an icon, it <em>should</em> select the icon that most closely matches the size implied by the width and height
   attributes. If there are no matches, the User Agent <em>should</em> choose
   the one closest to matching the size.

  </p><p>If multiple icon elements with the same size exist, Opera
   <em>should</em> choose the last of the icons present in
   <span>config.xml</span>, although a widget engine <em>may</em> choose to
   always use an icon in a particular format, such as PNG, even when an
   appropriately sized icon exists in another format.

  </p><h4 id="xml_security"><span class="secno">3.4.5 </span>The
   <code>security</code> element</h4><p>The <code>security</code> element is an optional child element of the
   <code><a href="#widget">widget</a></code> element and <em>may</em> be
   present in the document. The purpose of the <code>security</code> element
   is to act as a container for security-related settings in a widget. The
   child elements of the <code>security</code> element are described below.

  </p><h5 id="xml_security_access"><span class="secno">3.4.5.1. </span>The
   <code>access</code> element</h5><p>The <code>access</code> element is an optional child element of the
   <code>security</code> element. The child elements of <code>access</code>
   declare which protocols, hosts, ports, and paths the widget may use.
   Missing child elements are interpreted to mean &#x201C;any&#x201D;. An
   example is that if the <code><span><a class="dfnref" href="#dfn_host">host</a></span></code> element is missing, the widget will
   request access to all hosts.

  </p><p>Furthermore, all of the specified child elements <em>may</em> occur
   multiple times, and the product of all these is used. The child elements
   are as defined below.

  </p><dl><dt><code>protocol</code>

   </dt><dd>
    <p>The protocols the widget will be using to contact external servers.
     All protocols except the <var>file</var> protocol are permitted.</p>

   </dd><dt><code><dfn id="dfn_host">host</dfn></code>

   </dt><dd>
    <p>The <code><a href="#dfn_host">host</a></code> element establishes
     which hostnames may be contacted. The hostnames are exact matches. This
     means that a widget specifying <samp>www.example.com</samp> <em>must
     not</em> be able to contact <samp>example.com</samp>. IP addresses
     <em>may</em> also be used as values.</p>

   </dd><dt><code>port</code>

   </dt><dd>
    <p>The <code>port</code> element establishes which port numbers the
     widget will be using. The value is either a number, a range of numbers
     separated by a dash, eg <code class="example">1024-2048</code>, or a
     comma-separated list of ports, eg <code class="example">80, 1337</code>.</p>

   </dd><dt><code>path</code>

   </dt><dd>
    <p>The <code>path</code> element specifies the path part of the URI a
     widget may contact.</p>
  </dd></dl><h5 id="xml_content"><span class="secno">3.4.5.2. </span>The
   <code>content</code> element</h5><p>Widgets <em>may</em> use third-party plugins, and Java content. Widgets
   that want to use these features <em>must</em> request this access by
   adding an optional <code>content</code> element as a child of the
   <code>security</code> element. When present, the <code>content</code>
   element <em>must</em> contain at least one of the two attributes specified
   below, and it <em>may</em> contain both.

  </p><dl><dt><code>java</code> attribute

   </dt><dd>
    <p>The possible values of this attribute are the
     case-insensitive strings &quot;<samp>yes</samp>&quot; and &quot;<samp>no</samp>&quot;. When a
     widget wants access to use Java content embedded in the widget, the
     value of this attribute _must_ be &quot;<samp>yes</samp>&quot;. If the
     <code>java</code> attribute is not present, the attribute is assumed to
     be present, and have the associated value &quot;no&quot;.</p>

   </dd><dt><code>plugin</code> attribute

   </dt><dd>
    <p>The possible values of this attribute are the
     case-insensitive strings &quot;<samp>yes</samp>&quot; and &quot;<samp>no</samp>&quot;. When a
     widget wants access to use plugin content embedded in the widget, the
     value of this attribute _must_ be &quot;<samp>yes</samp>&quot;. If the
     <code>plugin</code> attribute is not present, the attribute is assumed
     to be present, and have the associated value &quot;no&quot;.</p>
  </dd></dl><p>If a <code>content</code> element is not present in a config.xml&#x2019;s
   security section, or if a security section is not present in a widget, the
   element is assumed to be present with the values of both <code>java</code>
   and <code>plugin</code> set to &#x201D;<samp>no</samp>&#x201D;.

  </p><h5 id="security_model"><span class="secno">3.4.5.3. </span>Security model</h5><p>The widget access model is summarised as follows:

  </p><ol><li>Widgets do not have access to content residing on a user&#x2019;s file
    system using the file: protocol

   </li><li>Widgets may access content over http, even when such access is not explicitly requested through the protocol element in config.xml

   </li><li>Widgets may not use any other protocol without prior declaration.
    Widgets <em>may</em> access content over https, ftp or other supported
    protocols (except file: as previously noted), but <strong>only</strong>
    if the widget has declared this in the security section of config.xml.

   </li><li>Widgets may not contact non-default ports, except when pre-declared in
    config.xml. Furthermore, widgets may not contact non-default ports equal to
    or below 1023.

   </li><li>A widget that has contacted an intranet as <a href="#intranet_definition">defined below</a> <em>must not</em> be able
    to contact addresses not defined as being intranets. Likewise, widgets
    interacting with hosts outside the IPv4 ranges specified below <em>must
    not</em> be allowed to interact with these IP ranges.
  </li></ol><h5 id="intranet_definition"><span class="secno">3.4.5.4. </span>Intranet
   definition</h5><p>An intranet is defined based on the resolved IPv4 address of a host
   name. The following IPv4 ranges are defined as intranets:

  </p><ul><li>10.0.0.0 to 10.255.255.255

   </li><li>172.16.0.0 to 172.31.255.255

   </li><li>192.168.0.0 to 192.168.255.255

   </li><li>169.254.0.0 to 169.254.255.255
  </li></ul><p>All other IP ranges than these are defined as Internet addresses.

  </p><h5 id="security_example"><span class="secno">3.4.5.5. </span>Security example</h5><p>The following example shows a security section specifying that
   the widget should be allowed to contact the domains
   <samp>example.com</samp> and <samp>example.org</samp> using either the
   https or http protocols, but only through the path &#x2019;/good&#x2019; on ports
   80,1337 and ports in the range 2048&#x2013;4096. In addition, the widget
   wants access to Java, but not plugins.

  </p><pre class="example">
<code> &lt;security&gt;
  &lt;access&gt;
    &lt;protocol&gt;http&lt;/protocol&gt;
    &lt;protocol&gt;https&lt;/protocol&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;host&gt;example.org&lt;/host&gt;
    &lt;path&gt;/good&lt;/path&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
    &lt;port&gt;80,1337&lt;/port&gt;
  &lt;/access&gt; &lt;content java=&quot;yes&quot; plugins=&quot;no&quot; /&gt;
&lt;/security&gt; </code> </pre>

<h4 id="xml_widget_id"><span class="secno">3.4.6 </span>The <code>id</code>
   element</h4><p>The <code>id</code> element is an optional child element of the <code><a href="#widget">widget</a></code> element. If present, this element
   <em>may</em> be used to establish a concept of identity for the widget that
   <em>may</em> be used for recognizing version updates and similar. The
   syntax requirement for this element is to have three <em>required</em>
   child elements, containing strings, as specified below.

  </p><dl><dt><code><a href="#dfn_host">host</a></code>

   </dt><dd>
    <p>This element is <em>required</em>, and <em>must</em> be a fully
     qualified domain name specifying the host from which the widget was
     downloaded.</p>

   </dd><dt><code>name</code>

   </dt><dd>
    <p>This element is <em>required</em>, and <em>must</em> be a string unique to the domain specified in the <code><a href="#dfn_host">host</a></code> element.</p>

   </dd><dt><code>revised</code>

   </dt><dd>
    <p>This element is <em>required</em>, and <em>must</em> be a string in
     the <a href="#refsW3CDTF">[W3CDTF]</a> format, with the added constraint
     that both year and month are made mandatory parts of the date. The date
     used should be a date chosen by the author, with enough granularity to
     represent two different dates,  and with the exception that both Year and Month are
     made mandatory.</p>
  </dd></dl><h2 id="widget_modes"><span class="secno">4. </span>Widget modes</h2><p>Widgets are client-side web applications for displaying local or remote
   content, typically on a user desktop, or appearing as locally installed
   applications on a device. Widgets can be displayed in several different
   contexts, or <em>modes</em>, as described below. An installed widget may
   support several of the modes, but will only display one at a time.

  </p><dl id="modes_list"><dt>widget

   </dt><dd>The widget mode typically describes traditional desktop widgets - applications displayed without application chrome such as
    resizing controls or title bars. Widgets displaying in this mode are
    typically expected to be in control of their own rendering environment,
    meaning they can set or reset their size at will. On targets where the
    widget does not fit, the platform is expected to provide a scrolling
    mechanism or other means of navigating around the widget, while still
    allowing the widget to be rendered and displayed according to the
    geometric information the widget has made available.

   </dd><dt>application

   </dt><dd>The application mode typically describes widgets that, on a system with
    window managment, will display chrome and controls for moving or
    resizing the widget. Widgets in this mode are expected to have the
    window/widget size controlled by the end-user or operating environment,
    but the widget may suggest initial layout information.

   </dd><dt>fullscreen

   </dt><dd>This mode is equal to the application mode, except that the initial
    default size provided by the runtime environment is expected to be full
    screen, or what equates to a &#39;maximized&#39; mode for desktop application.

   </dd><dt>docked

   </dt><dd>The dock mode, sometimes referred to as &#39;microwidget mode&#39;, is a mode
    wherein the widget typically renders and displays in a minimized state,
    such as an idle screen, list view, or other types of display where the
    widget has more limited size. Typically, widgets in this mode are not
    expected to be interactive, and the user can only interact with the
    widget through activating it, and thus switching it into one of the
    previously defined modes.
  </dd></dl><h3 id="css_extension"><span class="secno">4.1 </span>CSS extensions for widget
   modes</h3><p>Widget authors that wish to style widgets separately in different modes may use the <dfn id="o_widget_mode"><code>-o-widget-mode</code></dfn> CSS media feature,
   which makes use of the four <a href="#modes_list">previously defined</a> widget
   modes as values to specify what widget modes the styling should be applied to. Some examples follow:

  </p><p>Hiding UI elements in application mode:

  </p><pre class="example"><code>
@media all and (-o-widget-mode:application) {
  /* We don&#39;t need to display fake user chrome controls, since
     real chrome is provided */
  .fakeChrome { display: none; }
}
</code></pre><p>Changing the font-size for the docked (microwidget) mode

  </p><pre class="example"><code>
@media all and (-o-widget-mode:docked) {
  body { font-size: 80%; }
}
</code></pre><p>It is also possible to specifically style something when the
   platform supports the -o-widget-mode attribute, by not specifying a value:

  </p><pre class="example"><code>
@media all and (-o-widget-mode) {
  div.friendlyMessage {
    content: &quot;I will be displayed if I am a modern widget&quot;;
  }
}
</code></pre><h2 id="scripting_interface"><span class="secno">5. </span>Widget scripting
   interfaces</h2><h3 id="widget_object"><span class="secno">5.1 </span>The widget object</h3><h4 id="widget_obj_purpose"><span class="secno">5.1.1 </span>Purpose</h4><p>The purpose of the <code><a href="#widget">widget</a></code> object is
   to expose functionality specific to widgets that either <em>should
   not</em> or <em>must not</em> be available to scripts running on regular
   web pages. The widget object implements the Widget interface:

  </p><pre class="idl" id="widget_interface"><code>interface <dfn id="widget">Widget</dfn> {

    readonly attribute DOMString <a href="#identifier">identifier</a>;
    readonly attribute DOMString <a href="#originurl">originURL</a>;
    readonly attribute DOMString <a href="#widgetmode">widgetMode</a>;
  
    void <a href="#openurl">openURL</a>(in DOMString URL);
  String <span>preferenceForKey</span>(in DOMString key);
    void <a href="#setpreferenceforkey">setPreferenceForKey</a>(in DOMString value,
                              in DOMString key);

    /* Widget attention */
    void <a href="#getattention">getAttention</a>();
    void <a href="#shownotification">showNotification</a>(in DOMString msg, in Function callback);

    /* Widget window managment; */
         attribute Function onshow;
         attribute Function onhide;
    void <a href="#show">show</a>();
    void <a href="#hide">hide</a>();
}</code> </pre>

<h4 id="wo_identifier"><span class="secno">5.1.2 </span>The <code><dfn id="identifier">identifier</dfn></code> attribute, of type
   <code>DOMString</code>, readonly</h4><p>The <code><a href="#identifier"><span>identifier</span></a></code>
   attribute, of type DOMString, serves as a universally unique identifier of
   the widget instance in question. The value <em>must</em> always contain a
   valid, unique DOMString.

  </p><h4 id="wo_originURL"><span class="secno">5.1.3 </span>The <code><dfn id="originurl">originURL</dfn></code> attribute, of type
   <code>DOMString</code>, readonly</h4><p>When a widget is downloaded and instantiated from any protocol
   other than <var>file://</var>, the value of this attribute <span>should</span>
   always be a valid URL locating the widget. The value of the attribute
   should not be escaped, or otherwise encoded.

  </p><h4 id="wo_widgetMode"><span class="secno">5.1.4 </span>The <code><dfn id="widgetmode">widgetMode</dfn></code> attribute, of type
   <code>DOMString</code>, readonly</h4>

<p>The <code><a href="#widgetmode"><span>widgetMode</span></a></code>
   attribute identifies the current rendering mode for the widget. The value
   of this attribute <em>should</em> be one of the values <var><a href="#widget">widget</a></var>, <var>application</var>,
   <var>fullscreen</var> or <var>docked</var>. The value <em>must</em> always
   correspond to the current rendering mode of the widget.

  </p><h4 id="wo_openURL"><span class="secno">5.1.5 </span>The <code><dfn id="openurl">openURL</dfn></code>() method</h4><p>The <code><a href="#openurl"><span>openURL</span></a></code>() method of
   the widget object takes a String as an argument, which <em>must</em> be a valid <abbr title="Uniform Resource Locator">URL</abbr>
   as defined by <a href="#refRFC3987">[RFC3987]</a>. When this method is
   called with a valid URL, the URL should be opened in the system browser of
   the system on which the widget runs.

  </p><p>Note that restrictions on what URLs can be opened using openURL apply, as
   defined in the <a href="#security_model">security</a> section of this
   specification. Specifically this means the following are true:

  </p><ul><li>Widgets cannot open URLs in the <var>file:</var> domain

   </li><li>Widgets that have contacted the non-routable IPv4 address ranges as
    specified cannot use openURL to open URLs in IPv4 ranges other than those
    specified

   </li><li>Likewise, widgets that have contacted addresses outside the four
    non-routable address cannot use openURL to open URLs within the specified
    ranges.

   </li><li>OpenURL does not accept relative IRI&#x2019;s and as such cannot open
    any files stored inside the widget.
  </li></ul><h4 id="wo_preferenceForKey"><span class="secno">5.1.6 </span>The
   <code><span>preferenceForKey</span></code>() method</h4><p>The <code>preferenceForKey()</code> method takes a String argument,
   <var>key</var>. When called, this method returns a string that has
   previously been stored with the <code><a href="#wo_setPreferenceForKey">setPreferenceForKey</a></code> method, or
   <samp>undefined</samp> if the key <var>key</var> does not exist.

  </p><h4 id="wo_setPreferenceForKey"><span class="secno">5.1.7 </span>The <dfn id="setpreferenceforkey"><code>setPreferenceForKey</code></dfn>() method</h4><p>The <code><a href="#setpreferenceforkey">setPreferenceForKey()</a></code> method takes
   two String arguments, <var>preference</var> and <var>key</var>. When
   called, this method takes the string in the <var>preference</var>
   argument, and stores it with the key named in the <var>key</var> argument
   for later retrieval using the <code><span>preferenceForKey</span></code>()
   method. To delete a previously stored key, the <code><a href="#setpreferenceforkey"><span>setPreferenceForKey</span></a></code>()
   method is called with the value <var>null</var> in the
   <var>preference</var> argument, and the name of the key to be deleted in
   the <var>key</var> argument.

  </p><h4 id="wo_getAttention"><span class="secno">5.1.8 </span>The <code><dfn id="getattention">getAttention</dfn></code>() method</h4><p>The <code><a href="#getattention"><span>getAttention</span></a></code>()
   method takes no arguments and returns void. When called, this method
   should use an appropriate means to bring the widget to the user&#39;s
   attention.

  </p><p>Methods of bringing the user&#39;s attention to the widget <em class="ct">may</em> for instance include flashing the taskbar icon, or raising
   the widget&#39;s urgency. The <code><a href="#getattention"><span>getAttention</span></a></code>() method <em class="ct">should not</em>, however, try to grab the window focus.

  </p><h4 id="wo_showNotification"><span class="secno">5.1.9 </span>The <code><dfn id="shownotification">showNotification</dfn></code>() method</h4><p>The <code><a href="#shownotification"><span>showNotification</span></a></code>() method
   takes two arguments, the first being a String with the message text, and a
   second argument being a function that acts as a callback when the
   notification is accepted.

  </p><p>When <code><a href="#shownotification"><span>showNotification</span></a></code>() is
   called, the system is expected to display a notification containing the
   message text. The message text is a DOMString and whitespace within the
   string; including newlines is significant.

  </p><p>Upon the user acknowledging the notification, the callback function is
   called without any arguments.

  </p><h4 id="wo_onshow"><span class="secno">5.1.10 </span>The <code><dfn id="onshow">onshow</dfn></code> attribute, of type Function</h4><p>When a function is specified in the <code><a href="#onshow"><span>onshow</span></a></code> callback, eg the value of
   the attribute is non-null and a valid function reference, the callback
   will be called whenever the widget&#39;s state changes from being hidden to
   being visible.

  </p><p>Note that the onshow callback should not be dispatched if a visible
   widget gets focus.

  </p><h4 id="wo_onhide"><span class="secno">5.1.11 </span>The <code><dfn id="onhide">onhide</dfn></code> attribute, of type Function</h4><p>When a function is specified in the <code><a href="#onhide"><span>onhide</span></a></code> callback, eg the value of
   the attribute is non-null and a valid function reference, the callback
   will be called whenever the widget&#39;s state changes from being visible to
   being hidden.

  </p><p>Note that the onshow callback should not be dispatched if a visible
   widget loses focus.

  </p><h4 id="wo_show"><span class="secno">5.1.12 </span>The <code><dfn id="show">show</dfn></code>() method</h4><p>The <code><a href="#show"><span>show</span></a></code>() method takes no
   arguments, and returns no value. When the method is invoked a widget that
   has previously been in a hidden state will be shown. If the widget is
   already in a shown state, invoking show will perform no action.

  </p><h4 id="wo_hide"><span class="secno">5.1.13 </span>The <code><dfn id="hide">hide</dfn></code>() method</h4><p>The <code><a href="#hide"><span>hide</span></a></code>() method takes no
   arguments, and returns no value. When the method is invoked a widget that
   has previously been in a shown state will be hidden. If the widget is
   already in a hidden state, invoking show will perform no action.

  </p><p>The <code><a href="#show"><span>show</span></a></code>() method takes no arguments.

  </p><h3 id="widget_window_object"><span class="secno">5.2 </span>The <code><dfn id="widgetwindow">widgetWindow</dfn></code> interface</h3><p>A widget&#39;s initial dimensions are controlled by the <code><a href="#config_width">width</a></code> and <code><a href="#config_height">height</a></code> elements in the <var><a href="#config_xml">config.xml</a></var> file. In addition to this, a widget can be resized dynamically with JavaScript, using the extensions listed
   below.

  </p><pre class="idl"><code>interface <a href="#widgetwindow">widgetWindow</a> {

         attribute DOMString <a href="#status0">status</a>;
         attribute DOMString <a href="#defaultstatus">defaultStatus</a>;

    void <a href="#moveto">moveTo</a>(in Integer pos_x, in Integer pos_y);
    void <a href="#moveby">moveBy</a>(in Integer delta_pos_x, in Integer delta_pos_y);
    void <a href="#resizeto">resizeTo</a>(in Integer x_size, in Integer y_size);
    void <span>resizeBy</span>(in Integer delta_x_size, in Integer delta_y_size);
  }</code></pre>

<h4 id="ww_status"><span class="secno">5.2.1 </span>The <code><dfn id="status0">status</dfn></code> attribute, of type DOMString</h4>

<p>The <code><a href="#status0"><span>status</span></a></code> attribute is
   used to display a status message in a widget overview/managment page, or
   similar. It is used to display a short piece of textual information to the
   user. An example could be a stock ticker that changes to show the value of
   the last updated stock, and then reverts to displaying a default status
   message.

  </p><p>When set, the <code><a href="#status0"><span>status</span></a></code>
   message is kept until it is either cancelled by clicking in the widget
   document that set the status, or the value of the attribute is set to an
   empty string.

  </p><h4 id="ww_defaultStatus"><span class="secno">5.2.2 </span>The <code><dfn id="defaultstatus">defaultStatus</dfn></code> attribute, of type DOMString</h4>

<p>The <code><a href="#defaultstatus"><span>defaultStatus</span></a></code>
   attribute, when set, provides a default status message to be
   displayed in a widget managment page, or other widget overview mechanism.

  </p><p>When the value of this attribute is non-null, an action that cancels
   window.status should bring up the contents of the <code><a href="#defaultstatus"><span>defaultStatus</span></a></code> attribute in
   place of the original/system-provided status message. If the value is null
   or an empty string, the widget runtime should fall back to a
   system-provided message.

  </p><h4 id="moveto_method"><span class="secno">5.2.3 </span>The <code><dfn id="moveto">moveTo</dfn></code>() method</h4><p>When the widget is rendering in a context where the position of the
   widget may be changed, the <code><a href="#moveto"><span>moveTo</span></a></code>() method sets the position
   of the widget. The method accepts two integer values as arguments, <code>pos_x</code> and
   <code>pos_y</code>, which are x and y coordinates
   defined by a coordinate system. The system used is a flat cartesian surface whose origin
   (0,0) is at the top left corner of the available viewport - the
   coordinate space has x values increasing when going right, and y values
   increasing when going down.

  </p><h4 id="moveby_method"><span class="secno">5.2.4 </span>The <code><dfn id="moveby">moveBy</dfn></code>() method</h4><p>When the widget is rendering in a context where the position of the
   widget may be changed, the <code><a href="#moveby"><span>moveBy</span></a></code>() method moves the widget in
   the x and/or y direction, using as arguments the integer values
   <code>delta_pos_x</code> and <code>delta_pos_y</code>, defined by a
   coordinate system. The system used is a flat cartesian surface whose origin (0,0) is at the
   top left corner of the available viewport - coordinate space
   has x values increasing when going right, and y values increasing when
   going down. Negative values for both arguments are accepted, and a
   negative value for either argument means that the widget should move
   towards respectively the top or the left of the viewport.

  </p><h4 id="resizeto_method"><span class="secno">;5.2.5 </span>The <code><dfn id="resizeto">resizeTo</dfn></code>() method</h4><p>When the widget is rendering in a context where the size of the widget
   may be changed, the <code><a href="#resizeto"><span>resizeTo</span></a></code>() method sets the new
   size of the widget, using the Integer arguments <code>size_x</code> and
   <code>size_y</code> for the new width and height. Setting the size using resizeTo()
   <em>must</em> produce exactly the same dimensions for the widget as they would
   if they appeared in the <code><span>config.xml</span></code> <a href="#width_element">width</a> and <a href="#height_element">height</a> elements. Both the <code>size_x</code>
   and <code>size_y</code> argument values must be larger than 1, and a call
   to <code><a href="#resizeto"><span>resizeTo</span></a></code>() with
   smaller values should result in no change to the widget dimensions.

  </p><h4 id="resizeby_method"><span class="secno">5.2.6 </span>The
   <code><span>resizeBy</span></code>() method</h4><p>The <code><span>resizeBy</span></code>() method should resize the widget
   by adding the value of the argument <code>delta_x_size</code> to the
   current value for the widget width, and adding the value of the argument <code>delta_y_size</code>
   to the current height of the widget, measured in pixels. The resulting
   dimensions gathered from such an addition <em>must</em> produce exactly the
   same dimensions for the widget, as they would if the calculated dimensions
   appeared in the <span><code>config.xml</code></span> <a href="#width_element">width</a> and <a href="#height_element">height</a>
   elements. Negative values for both arguments are accepted, as long as the
   resulting calculated size remains larger than 1&#xD7;1 pixels, in which
   case the <span><code>resizeBy</code></span>() method should result in no
   change to the widget size.

  </p><h4 id="storing"><span class="secno">5.2.7 </span>Storing geometric information</h4><p>When a successful resize of the widget has been performed using any of
   the four methods mentioned, the resulting values should be stored, and
   used in place of any values specified in config.xml.

  </p><h3 id="the_widgetmodechangeevent"><span class="secno">5.3 </span>The <a href="#widgetmodechangeevent"><code>WidgetModeChangeEvent</code></a>
   interface</h3><p>When the value of the <code><a href="#o_widget_mode">-o-widget-mode</a></code> CSS attribute changes, the
   <code>widgetmodechange</code> event is dispatched on the <code><a href="#widget">Widget</a></code> object. When the event is dispatched, the
   event object passed as an argument to the event listener <em>must</em>
   have a <code><a href="#widgetmode">widgetMode</a></code> attribute that
   corresponds to the current rendering mode. The value must be one of those
   mentioned for the <code><a href="#widgetmode"><span>widgetMode</span></a></code> attribute on the
   <code><a href="#widget"><span>Widget</span></a></code> interface.

  </p><p>The <code><a href="#widgetmodechangeevent"><span>WidgetModeChangeEvent</span></a></code> event
   must not bubble, must not be cancelable and must implement the Event
   interface [DOM3Events]. The event has no namespace (Event.namespaceURI is
   null).

  </p><pre class="idl">
interface <dfn id="widgetmodechangeevent">WidgetModeChangeEvent</dfn> : Event {
  readonly attribute DOMString widgetMode;
  void initMediaTypeChangeEvent(in DOMString typeArg,
                                in boolean canBubbleArg,
                                in boolean cancelableArg,
                                in DOMString widgetModeArg);

  // For DOM Level 3 support
  void initMediaTypeChangeEventNS(in DOMString namespaceURI,
                                  in DOMString typeArg,
                                  in boolean canBubbleArg,
                                  in boolean cancelableArg,
}
</pre>


<h3 id="the_resolutionevent"><span class="secno">5.4 </span>The <a href="#resolutionevent"><code>ResolutionEvent</code></a> interface</h3><p>The <var><code>ResolutionEvent</code></var> event is dispatched on the <code><a href="#widget"><span>widget</span></a></code> object when the width or
   height values of the attached display object changes. It must not bubble,
   must not be cancelable and must implement the Event interface
   [DOM3Events]. The event has no namespace (Event.namespaceURI is null).

  </p><p>When dispatched, the event object <em>must</em> have two attributes,
   <code>width</code> and <code>height</code>, which correspond to the new
   available width and height for the widget. These two values
   <em>should</em> correspond to the values <code>availWidth</code> and
   <code>availHeight</code> on the <code>Screen</code> interface.

  </p><pre class="idl">
interface <dfn id="resolutionevent">ResolutionEvent</dfn> : Event {
  readonly attribute int width;
  readonly attribute int height;
  void initMediaTypeChangeEvent(in DOMString typeArg,
                                in boolean canBubbleArg,
                                in boolean cancelableArg,
                                in int widthArg,
                                in int heightArg);

  // For DOM Level 3 support
  void WidgetModeChangeEventNS(in DOMString namespaceURI,
                               in DOMString typeArg,
                               in boolean canBubbleArg,
                               in boolean cancelableArg,
                               in int widthArg,
                               in int heightArg);
}
</pre><h2 id="autodiscovery"><span class="secno">6. </span>Widget autodiscovery</h2><h3 id="autodisco_purpose"><span class="secno">6.1 </span>Purpose</h3><p>The purpose of Widget autodiscovery is to enable clients who know the URI
   of a web page to identify and find the location of a widget associated
   with said web page. A widget-aware web client should offer a mechanism
   that exposes the presence of the widget to the user, and a mechanism
   for installing the widget.

  </p><h3 id="autodisco_element"><span class="secno">6.2 </span>Definition</h3><p>A Widget autodiscovery element is a link element, as defined in section
   12.3. of <a href="#refsHTML401">[HTML401]</a>. As with other link
   elements, an autodiscovery element may appear in the <code>head</code>
   element of an HTML or XHTML document, but it must not appear inside the
   <code>body</code> element. An example autodiscovery element looks like
   this:

  </p><pre class="example">
<code> &lt;link
  type=&quot;application/x-opera-widgets&quot; rel=&quot;alternate&quot;
  href=&quot;http://widgets.example.com/example.zip&quot; title=&quot;An Example
  Widget&quot;
/&gt; </code> </pre><h3 id="autodisco_html_relation"><span class="secno">6.3 </span>Relationship to
   HTML and XHTML</h3><h4 id="autodisco_syntax_inheritance"><span class="secno">6.3.1 </span>Syntax
   rules inherited from HTML and XHTML</h4><p>When a widget autodiscovery element appears in a <a href="#refsHTML401">[HTML401]</a> or <a href="#refsXHTML10">[XHTML10]</a>
   document, the element shares all the syntax rules and restricitions of
   other markup elements.

  </p><h4 id="autodisco_multiple_link"><span class="secno">6.3.2 </span>Multiple
   autodiscovery elements</h4><p>A document <em>may</em> contain multiple autodiscovery elements. A User
   Agent <em>should</em> present an installation option for all
   autodiscovered widgets to the user, listed in the order of appearance in
   the source code.

  </p><p>A User Agent that only presents one autodiscovered widget to the user
   <em>should</em> choose the first autodiscovered widget for installation
   whenever the user opts to install the widget.

  </p><h3 id="autodisco_req_attrs"><span class="secno">6.4 </span>Required attributes</h3><h4 id="autodisco_type_attr"><span class="secno">6.4.1 </span>The type
   attribute</h4><p>The type attribute <em>must</em> be present in a widget autodiscovery
   element. The value of the type attribute must be an Internet Media type,
   and the media type <em>must</em> be
   <var>application/x-opera-widgets</var>.

  </p><h4 id="autodisco_rel_attr"><span class="secno">6.4.2 </span>The rel attribute</h4><p>The rel attribute <em>must</em> be present in a widget autodiscovery
   element. As defined in section 6.12 of <a href="#refsHTML401">[HTML401]</a>,
   the value of the rel attribute is a space-separated list of keywords. The
   list of keywords must include the keyword <var>alternate</var> in
   uppercase, lowecase, or mixed case.

  </p><h4 id="autodisco_href_attr"><span class="secno">6.4.3 </span>The href
   attribute</h4><p>The href attribute must be present in a widget autodiscovery element,
   and its value must be the <abbr title="Uniform Resource Identifier">URI</abbr> of the widget. The value may be a relative URI, and
   if so, clients must resolve it to a full URI, using the document&#x2019;s
   base URI. The URIs must conform to <a href="#refsRFC3987">[RFC3987]</a>.

  </p><h3 id="autodisco_opt_attrs"><span class="secno">6.5 </span>Optional attributes</h3><h4 id="autodisco_title_attr"><span class="secno">6.5.1 </span>The title
   attribute</h4><p>The title attribute <em>may</em> be present in a widget autodiscovery
   element. A User-Agent <em>should</em> treat the value of the title
   attribute as a human-readable title for the widget, and the User-Agent
   <em>may</em> present this title to the user.

  </p><h2 class="no-num" id="acknowledgments">Acknowledgements</h2><ul><li>The specification for the <a href="#widget_object">widget object</a>
    builds on Apple&#x2019;s <a href="#refsDashboard">[Dashboard]</a>
    reference.
  </li></ul><ul><li><a href="#autodiscovery">Widget Autodiscovery</a> in large parts
    builds on the <a href="#refsAtomAutodiscovery">[AtomAutodiscovery]</a>
    specification.
  </li></ul>
  
  <h2 class="no-num" id="references">References</h2><dl><dt id="refsRFC2119">[RFC2119]

   </dt><dd><a href="http://www.ietf.org/rfc/rfc2119">Key words for use in
    RFCs to Indicate Requirement Levels</a>, S. Bradner. IETF, March
    1997. RFC2119 is available at http://www.ietf.org/rfc/rfc2119

   </dd><dt id="refsZIP">[ZIP]

   </dt><dd><a href="http://www.pkware.com/business_and_developers/developer/popups/appnote.txt">
    .ZIP File Format Specification</a>. PKWare Inc., January 2006 The
    .ZIP File Format Specification is available at
    http://www.pkware.com/business_and_developers/developer/popups/appnote.txt

   </dd><dt id="refsXML10">[XML10]

   </dt><dd><a href="http://www.w3.org/TR/REC-xml/">Extensible Markup
    Language (XML) 1.0 (Third Edition)</a>. Tim Bray, Jean Paoli, C.
    M. Sperberg-McQueen, Eve Maler, Fran&#xE7;ois Yergeau. W3C, February
    2004. Extensible Markup Language (XML) 1.0 specifciation is available at
    http://www.w3.org/TR/REC-xml/

   </dd><dt id="refsCSS21">[CSS21]

   </dt><dd><a href="http://www.w3.org/TR/CSS21/">Cascading Style Sheets,
    level 2 revision 1; CSS 2.1 Specification</a>. Bert Bos, Ian
    Hickson, Tantek &#xC7;elik, H&#xE5;kon Wium Lie. W3C, April 2006. The
    CSS 2.1 Specification can be found at http://www.w3.org/TR/CSS21/

   </dd><dt id="refsRFC3987">[RFC3987]

   </dt><dd><a href="http://www.ietf.org/rfc/rfc3987">Internationalized
    Resource Identifiers (IRIs)</a> . M. Duerst, M. Suignard. IETF,
    January 2005. RFC3987 is available at http://www.ietf.org/rfc/rfc3987

   </dd><dt id="refsDashboard">[Dashboard]

   </dt><dd><a href="http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html">
    Dashboard Reference</a>. Apple Computer, Inc, May 2006. The Apple
    Dashboard Reference is available at
    http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html

   </dd><dt id="refsHTML401">[HTML401]

   </dt><dd><a href="http://www.w3.org/TR/html401/">HTML 4.01
    Specification</a>, Dave Raggett, Arnaud Le Hors, Ian Jacobs. W3C,
    December 1999. The HTML 4.01 Specification is available at
    http://www.w3.org/TR/html401/

   </dd><dt id="refsXHTML1">[XHTML1]

   </dt><dd><a href="http://www.w3.org/TR/xhtml1/">XHTML&#x2122; 1.0 The
    Extensible HyperText Markup Language (Second Edition)</a>, S.
    Pemberton et al. W3C, January 2000. The XHTML 1.0 specification is
    available at http://www.w3.org/TR/xhtml1/

   </dd><dt id="refsAtomAutodiscovery">[AtomAutodiscovery]

   </dt><dd><a href="http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html">
    Atom Autodiscovery (draft)</a>, M. Pilgrim, P. Ringnalda. ATOMPUB
    Working Group, May 2005-. The Atom Autodiscovery specification draft is
    available at
    http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html

   </dd><dt id="refsSVG">[SVG]

   </dt><dd><a href="http://www.w3.org/TR/SVG/">Scalable Vector Graphics
    (SVG) 1.1 Specification</a>, Jon Ferraiolo, 藤沢 淳 (FUJISAWA
    Jun), Dean Jackson. W3C. The SVG 1.1 specification is available at
    http://www.w3.org/TR/SVG/
  </dd></dl>

<h2 class="no-num" id="positioning_sizing">Appendix A: Widget positioning and
   sizing</h2><p>This appendix to the widget specification provides algorithms to
   determine widget size and position, for cases where either the window
   manager provides the initial widget size, or on platforms where widgets
   need to separate the concepts of &quot;viewport size&quot; and &quot;widget size&quot;.

  </p><h3 id="algorithm"><span class="secno">6.6 </span>Algorithm for widget sizing</h3><p>The following algorithm is used for determining the start size of a
   widget.

  </p>
  
  <ol><li>The config.xml file is opened

   </li><li>Read the &#39;defaultmode&#39; attribute of the widget element in config.xml

   </li><li>If the widget has been started in the past, and the defaultmode value
    is &#39;widget&#39;, read the stored &#39;start width&#39; and &#39;start height&#39; values, and
    go to step 11

   </li><li>If the widget has been started in the past, and the defaultmode is
    &#39;application&#39;, and the value of &#39;start width&#39; exceeds the available
    rendering surface width (In other words, when the geometry of the
    rendering surface has changed), let the &#39;start width&#39; be equal to the
    available rendering surface width, and continue to the next step.

   </li><li>If the widget has been started in the past, and the defaultmode is
    &#39;application&#39;, and the value of &#39;start height&#39; exceeds the available
    rendering surface height (In other words, when the geometry of the
    rendering surface has changed), let the &#39;start width&#39; be equal to the
    available rendering surface width, and continue to step 11.

   </li><li>If the value for defaultmode is &#39;fullscreen&#39;, and the widget supports
    the concept of fullscreen/maximized applications, let the &#39;start width&#39;
    and &#39;start height&#39; values be determined by the maximum available
    rendering surface width and height, and go to step 11.

   </li><li>If the value for defaultmode is &#39;fullscreen&#39;, and the runtime does not
    support the &#39;fullscreen&#39; mode, but supports the &#39;application&#39; mode,
    assume that the defaultmode is &#39;application&#39; and go to step 8.

   </li><li>If the value for defaultmode is &#39;application&#39;, and the runtime does
    not support the &#39;application&#39; mode, but supports &#39;fullscreen&#39;, assume
    that the defaultmode is set to &#39;fullscreen&#39; and go to step 5.

   </li><li>If the value for defaultmode is &#39;application&#39; and the platform
    supports the mode, and allows widgets to set their own size:
    <ol><li>Read the &#39;width&#39; element from config.xml. If this value is less than
      the maximum available width, store this value as &#39;start width&#39;.

     </li><li>If the &#39;width&#39; value is larger than the available width, allocate
      the largest available width, and store it in &#39;start width&#39;.

     </li><li>Read the &#39;height&#39; element from config.xml. If this value is less
      than the maximum available height, store this value as &#39;start width&#39;.

     </li><li>If the &#39;height&#39; value is larger than the available height, allocate
      the largest available height, and store it in &#39;start height&#39;.

     </li><li>Continue to step 11.
    </li></ol>

   </li><li>If the value for defaultmode is one of &#39;application&#39; or &#39;fullscreen&#39;,
    and neither mode is supported by the widget runtime, assume that the
    value is &#39;widget&#39; and continue to step 10.

   </li><li>If the application mode is &#39;widget&#39; and the mode is supported by the
    runtime, use the values of the &#39;width&#39; and &#39;height&#39; element as values for
    &#39;start width&#39; and &#39;start height&#39;, respectively, and go to step 10.

   </li><li>Determine the initial widget position as described in the algorithm
    below. Create a widget window using the widgets &#39;start width&#39; and &#39;start
    height&#39;, as described as the initial start width and height, and start the
    widget. Store the &#39;start width&#39; and &#39;start height&#39; values permanently.
  </li></ol>

<h3 id="initial_position_algorithm"><span class="secno">6.7 </span>Determining
   the initial widget position</h3><p>Use the following algorithm to determine the initial widget position

  </p>

  <ol><li>If the widget has been started before, go to step 4.

   </li><li>Let the initial rendering position of the widget be determined by the
    upper left corner, using the values &#39;start_x&#39; and &#39;start_y&#39;

   </li><li>If the widget has the defaultmode &#39;widget&#39;, determine the initial
    position as thus:
    <ol><li>Read the assumed &#39;start width&#39; value as determined in the sizing
      algorithm. If the width of &#39;start width&#39; is equal to, or larger than
      the width available to the widget, let the widget&#39;s upper left start
      position, &#39;start x&#39;, be 0, and continue to step 3.3.

     </li><li>If the assumed &#39;start width&#39; value is less than the available width,
      let the value &#39;start_x&#39; be calculated according to the following
      formula: start_x = (available width-start width)/2. Otherwise, let the
      start_x value be 0.

     </li><li>Read the assumed &#39;start height&#39; value as determined in the sizing
      algorithm, and continue.

     </li><li>If the assumed &#39;start height&#39; value is less than the available
      height, let the value &#39;start_y&#39; be calculated according to the
      following formula: start_y = (available height-start height)/2.
      Otherwise, let the start_y value be 0.
    </li></ol>

   </li><li>Position the widget according to the start_x and start_y values, and
    display the widget.
  </li></ol>

  <h3 id="positioning_other"><span class="secno">6.8 </span>Other</h3>
  <p>These are implementation guides for resizing, positioning and widget types; this algorithm is considered informative.</p>

  <ol><li>On window managers that support window states like &#39;maximized&#39; and
    &#39;restored/unmaximized&#39;, assume that the &#39;fullscreen&#39; mode equals the
    &#39;maximized&#39; mode, and that &#39;application&#39; equals &#39;restored/unmaximized&#39;
    mode.

   </li><li>When a widget is moved or resized using windows.move(To|By), and
    windows.resize(To|By), use the new values for widget size and position as
    determined after these method calls as new values for &#39;start width&#39;,
    &#39;start height&#39;, &#39;start_x&#39;, and &#39;start_y&#39;. These values <em class="ct">should</em> be stored and used when a widget is started again.

   </li><li>The widget&#39;s own dimensions <em class="ct">must</em> be respected for
    widgets rendering using the &#39;widget&#39; rendering mode.

   </li><li>When the widget is an application or fullscreen widget, the widget
    runtime <em class="ct">may</em> ignore calculated positioning and sizing
    information.
  </li></ol>

  <h3 id="virtual_viewports"><span class="secno">6.9 </span>Virtual viewport resizing</h3><p>Certain window managers and systems may not allow chromeless windows to
   be dragged off the viewport, leaving the widget with little surface area
   in which the user can move the widget. This section describes an algorithm
   to mitigate the problem. On such platforms, this algorithm, or a workalike
   must be implemented to facilitate a good user experience.

  </p><h4 class="no-num no-toc" id="relation">Relation to the <span>width</span>
   element</h4><p>Note that the <code>width</code> element represents the canvas width,
   and not the window width. Under most circumstances, the window width and
   canvas width should be the same, but certain platforms may implement a
   window width that is different from the canvas width, using the following
   algorithm:</p>

  <ul><li>If the window manager does not allow chromeless windows to be dragged
    off the desktop, Opera may resize the window according to the following
    algorithm:
    <ol><li>Scan the leftmost vertical line of the widget. If this line only
      contains transparent pixels, decrease width by one.

     </li><li>Scan the rightmost vertical line of the widget. If this line only
      contains transparent pixels, decrease width by one.

     </li><li>Repeat 1) and 2) until the first non-transparent pixel is
      found</li>
    </ol>
   </li>
   <li>The recalculated window width <em class="ct">must not</em>, under any
    circumstance cause visible pixels to be clipped from the widget.
  </li></ul>
  
  <h4 class="no-num no-toc" id="relation0">Relation to the <span>width</span> element</h4>
   <p>Note that the <code>height</code> element represents the canvas height,
   and not the window height. Under most circumstances, the window height and
   canvas height should be the same, but certain platforms may implement a
   window height that is different from the canvas height, using the
   following algorithm:</p>

  <ul><li>If the window manager does not allow chromeless windows to be dragged
    off the desktop, Opera may resize the window according to the following
    algorithm:
    <ol><li>Scan the topmost horizontal line of the widget. If this line only
      contains transparent pixels, decrease width by one.</li>
     <li>Scan the bottom horizontal line of the widget. If this line only
      contains transparent pixels, decrease width by one.</li>
     <li>Repeat 1) and 2) until the first non-transparent pixel is found</li>
    </ol>
   </li>
   <li>The recalculated window height <em class="ct">must not</em>, under any
    circumstance cause visible pixels to be clipped from the widget.
  </li></ul>

      
