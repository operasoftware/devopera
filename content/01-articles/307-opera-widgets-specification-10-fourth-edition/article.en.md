Title: Opera Widgets specification 1.0, fourth edition
----
Date: 2010-02-09 18:42:10
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is deprecated</h2>
<p>
We recently announced that we&#39;re <a href="http://my.opera.com/addons/blog/2012/04/24/sunsetting-unite-and-widgets">discontinuing Widgets and Unite</a> from Opera 12, in favour of <a href="http://dev.opera.com/addons/extensions/">Opera Extensions</a>. (Already developed a  Widget? See <a href="http://dev.opera.com/articles/view/converting-widgets-to-opera-extensions/">converting widgets to Opera extensions</a>.)</p> 
</div>  



<h2 class="no-num no-toc" id="abstract">Abstract</h2>
<p>This document describes Opera Widgets 1.0, fourth edition, and covers all
   aspects of Opera Widgets, including the packaging format, the
   configuration file - <code>config.xml</code> - and scripting interfaces for working with
   widgets. This document represents the required solutions for
   creating and running interoperable Opera Widgets across target platforms,
   both on devices and desktop.</p>
<p class="note">This is an update of the <a href="http://dev.opera.com/articles/view/opera-widgets-specification-1-0-third-ed-2/">Opera Widgets specification 1.0, third edition</a></p>
  <h2 class="no-num no-toc" id="opera-software-specification">Opera Software
   Specification</h2>
  <dl>
   <dt>Editors</dt>
   <dd>Arve Bersvendsen, Opera Software ASA, <a href="mailto:arveb@opera.com">arveb@opera.com</a></dd>
   <dd>Marcos Cáceres, Opera Software ASA, <a href="mailto:marcosc@opera.com">marcosc@opera.com</a></dd>
  </dl>
  <h2 class="no-num no-toc" id="abstract">Abstract</h2>
  <p>This is the fourth edition of the Opera Widgets 1.0 specification. This
   document describes all aspects of Opera Widgets, including the packaging
   format, the widget configuration document, and scripting interfaces for
   working with widgets.</p>
  <h2 class="no-num" id="status">Scope of this Document</h2>
  <p>This document and its appendices represent the required solutions for
   creating and running interoperable Opera Widgets across target platforms,
   both on devices and desktop.</p>
  <h2 class="no-num no-toc" id="table_of_contents">Table of contents</h2>
  <ul class="toc">
   <li class="no-num"><a href="#status">Scope of this document</a></li>
   <li><a href="#intro"><span class="secno">1 </span>Introduction</a>
    <ul class="toc">
     <li><a href="#conformance"><span class="secno">1.1 </span>Conformance
      Requirements</a></li>
    </ul>
   </li>
   <li><a href="#packaging"><span class="secno">2 </span>Opera widget package
    </a>
    <ul class="toc">
     <li><a href="#packaging_structure"><span class="secno">2.1 </span>Widget
      folder structure</a></li>
     <li><a href="#content_type"><span class="secno">2.2 </span>Content
      type</a></li>
     <li><a href="#file_extension"><span class="secno">2.3 </span>File
      extension</a></li>
    </ul>
   </li>
   <li><a href="#config_xml"><span class="secno">3 </span>Widget
    configuration document</a>
    <ul class="toc">
     <li><a href="#xml_whitespace"><span class="secno">3.1 </span>White
      space</a></li>
    </ul>
   </li>
   <li><a href="#elements_of_the_widget_configuration_doc"><span class="secno">4 </span>Elements of the widget configuration document</a>
    <ul class="toc">
     <li><a href="#the_widget_element"><span class="secno">4.1 </span>The
      <code>widget</code> element</a></li>
     <li><a href="#xml_widgetname"><span class="secno">4.2 </span>The
      <code>widgetname</code> element</a></li>
     <li><a href="#xml_width"><span class="secno">4.3 </span>The
      <code>width</code> element</a></li>
     <li><a href="#xml_height"><span class="secno">4.4 </span>The
      <code>height</code> element</a></li>
     <li><a href="#the_widgetfile_element"><span class="secno">4.5 </span>The
      <code>widgetfile</code> element</a></li>
     <li><a href="#xml_author_element"><span class="secno">4.6 </span>The
      <code>author</code> element</a></li>
     <li><a href="#xml_description"><span class="secno">4.7 </span>The
      <code>description</code> element</a></li>
     <li><a href="#xml_icon"><span class="secno">4.8 </span>The
      <code>icon</code> element</a></li>
     <li><a href="#the_feature_element"><span class="secno">4.9 </span>The
      <code>feature</code> element</a></li>
     <li><a href="#the_param_element"><span class="secno">4.10 </span>The
      <code>param</code> element</a></li>
     <li><a href="#the_id_element"><span class="secno">4.11 </span>The
      <code>id</code> element</a></li>
     <li><a href="#xml_security"><span class="secno">4.12 </span>The
      <code>security</code> element</a></li>
     <li><a href="#xml_security_access"><span class="secno">4.13 </span>The
      <code>access</code> element</a></li>
     <li><a href="#xml_content"><span class="secno">4.14 </span>The
      <code>content</code> element</a></li>
    </ul>
   </li>
   <li><a href="#security_model"><span class="secno">5 </span>Security
    model</a>
    <ul class="toc">
     <li><a href="#network_classes_"><span class="secno">5.1 </span><span class="mw-headline">Network classes </span></a></li>
     <li><a href="#security_example"><span class="secno">5.2 </span>Security
      example</a></li>
     <li><a href="#the_widget_url_protocol_"><span class="secno">5.3
      </span>The widget: URL protocol </a>
      <ul class="toc">
       <li><a href="#access_rules_"><span class="secno">5.3.1 </span> <span class="mw-headline"> Access rules </span></a></li>
      </ul>
     </li>
     <li><a href="#widget_instances_"><span class="secno">5.4 </span><span class="mw-headline">Widget instances </span></a></li>
     <li><a href="#form_and_links_behavior"><span class="secno">5.5
      </span><span class="mw-headline">Form and Links Behavior</span></a></li>
     <li><a href="#embedded_object_security_context_"><span class="secno">5.6
      </span><span class="mw-headline">Embedded object security context
      </span></a></li>
     <li><a href="#symbolic_links_"><span class="secno">5.7 </span><span class="mw-headline">Symbolic links </span></a></li>
    </ul>
   </li>
   <li><a href="#widget_modes"><span class="secno">6 </span>Widget modes</a>
    <ul class="toc">
     <li><a href="#css_extension"><span class="secno">6.1 </span>CSS
      extensions for widget modes</a>
      <ul class="toc">
       <li><a href="#examples"><span class="secno">6.1.1 </span>Examples</a></li>
      </ul>
     </li>
    </ul>
   </li>
   <li><a href="#scripting_interface"><span class="secno">7 </span>Widget
    scripting interfaces</a>
    <ul class="toc">
     <li><a href="#widget_object"><span class="secno">7.1 </span>The widget
      object </a></li>
     <li><a href="#wo_identifier"><span class="secno">7.2 </span>The
      <code>identifier</code> attribute</a></li>
     <li><a href="#wo_originURL"><span class="secno">7.3 </span>The
      <code>originURL</code> attribute</a></li>
     <li><a href="#wo_widgetMode"><span class="secno">7.4 </span>The
      <code>widgetMode</code> attribute</a></li>
     <li><a href="#wo_openURL"><span class="secno">7.5 </span>The
      <code>openURL</code>() method</a></li>
     <li><a href="#wo_preferenceForKey"><span class="secno">7.6 </span>The
      <code><span>preferenceForKey()</span></code> </a></li>
     <li><a href="#wo_setPreferenceForKey"><span class="secno">7.7 </span>The
      <code>setPreferenceForKey()</code> method</a></li>
     <li><a href="#wo_getAttention"><span class="secno">7.8 </span>The
      <code>getAttention</code>() method</a></li>
     <li><a href="#wo_showNotification"><span class="secno">7.9 </span>The
      <code>showNotification</code>() method</a></li>
     <li><a href="#wo_onshow"><span class="secno">7.10 </span>The
      <code>onshow</code> attribute</a></li>
     <li><a href="#wo_onhide"><span class="secno">7.11 </span>The
      <code>onhide</code> attribute</a></li>
     <li><a href="#wo_show"><span class="secno">7.12 </span>The
      <code>show</code>() method</a></li>
     <li><a href="#wo_hide"><span class="secno">7.13 </span>The
      <code>hide</code>() method</a></li>
     <li><a href="#widget_window_object"><span class="secno">7.14 </span>The
      <code>widgetWindow</code> interface</a>
      <ul class="toc">
       <li><a href="#ww_status"><span class="secno">7.14.1 </span>The
        <code>status</code> attribute</a></li>
       <li><a href="#ww_defaultStatus"><span class="secno">7.14.2 </span>The
        <code>defaultStatus</code> attribute</a></li>
       <li><a href="#moveto_method"><span class="secno">7.14.3 </span>The
        <code>moveTo</code>() method</a></li>
       <li><a href="#moveby_method"><span class="secno">7.14.4 </span>The
        <code>moveBy</code>() method</a></li>
       <li><a href="#resizeto_method"><span class="secno">7.14.5 </span>The
        <code>resizeTo</code>() method</a></li>
       <li><a href="#resizeby_method"><span class="secno">7.14.6 </span>The
        <code><span>resizeBy</span></code>() method</a></li>
       <li><a href="#storing_geometry_information"><span class="secno">7.14.7
        </span>Storing geometry information</a></li>
      </ul>
     </li>
     <li><a href="#the_widgetmodechangeevent_interface"><span class="secno">7.15 </span>The
      <span><code>WidgetModeChangeEvent</code></span> interface</a></li>
     <li><a href="#the_resolutionevent_interface"><span class="secno">7.16
      </span>The <span><code>ResolutionEvent</code></span> interface</a></li>
    </ul>
   </li>
   <li><a href="#autodiscovery"><span class="secno">8 </span>Widget
    autodiscovery</a>
    <ul class="toc">
     <li><a href="#autodisco_purpose"><span class="secno">8.1
      </span>Purpose</a></li>
     <li><a href="#autodisco_element"><span class="secno">8.2
      </span>Definition</a></li>
     <li><a href="#autodisco_html_relation"><span class="secno">8.3
      </span>Relationship to HTML and XHTML</a>
      <ul class="toc">
       <li><a href="#autodisco_syntax_inhertiance"><span class="secno">8.3.1
        </span>Syntax rules inherited from HTML and XHTML</a></li>
       <li><a href="#autodisco_multiple_link"><span class="secno">8.3.2
        </span>Multiple autodiscovery elements</a></li>
      </ul>
     </li>
     <li><a href="#autodisco_req_attrs"><span class="secno">8.4
      </span>Required attributes</a>
      <ul class="toc">
       <li><a href="#autodisco_type_attr"><span class="secno">8.4.1
        </span>The <code>type</code> attribute</a></li>
       <li><a href="#autodisco_rel_attr"><span class="secno">8.4.2 </span>The
        <code>rel</code> attribute</a></li>
       <li><a href="#autodisco_href_attr"><span class="secno">8.4.3
        </span>The <code>href</code> attribute</a></li>
      </ul>
     </li>
     <li><a href="#autodisco_opt_attrs"><span class="secno">8.5
      </span>Optional attributes</a>
      <ul class="toc">
       <li><a href="#autodisco_title_attr"><span class="secno">8.5.1
        </span>The title attribute</a></li>
      </ul>
     </li>
    </ul>
   </li>
   <li class="no-num"><a href="#acknowledgments">Acknowledgements</a></li>
   <li class="no-num"><a href="#references">References</a></li>
   <li class="no-num"><a href="#positioning_sizing">Appendix A: Widget
    positioning and sizing</a>
    <ul class="toc">
     <li><a href="#algorithm_for_widget_sizing"><span class="secno">8.6
      </span>Algorithm for widget sizing</a></li>
     <li><a href="#initial_position_algorithm"><span class="secno">8.7
      </span>Determining the initial widget position</a></li>
     <li><a href="#positioning_other"><span class="secno">8.8
      </span>Other</a></li>
     <li><a href="#virtual_viewports"><span class="secno">8.9 </span>Virtual
      viewport resizing</a></li>
    </ul>
   </li>
  </ul>
 
  <h2 id="intro"><span class="secno">1 </span>Introduction</h2>
  <p>The purpose of this specification is to provide an implementation
   reference for Widgets in the Opera browser. The specification builds on
   the currently implemented features in Opera 10 (the user agent).</p>
  <h3 id="conformance"><span class="secno">1.1 </span>Conformance
   Requirements</h3>
  <p>The key words <em><q>MUST</q></em>, <em><q>MUST NOT</q></em>,
   <em><q>REQUIRED</q></em>, <em><q>SHOULD</q></em>, <em><q>SHOULD
   NOT</q></em>, <em><q>RECOMMENDED</q></em>, <em><q>MAY</q></em>, and
   <em><q>OPTIONAL</q></em> in this document are to be interpreted as
   described in <a href="#refsRFC2119">[RFC2119]</a>.</p>
  <p>Unless specifically marked otherwise, all sections are normative.</p>
  <h2 id="packaging"><span class="secno">2 </span>Opera widget package</h2>
  <p>An <dfn id="opera-widget-package">Opera widget package</dfn> is a .Zip
   archive, as specified by the <a href="#refsZIP">[ZIP]</a> file format
   specification.</p>
  <p> Authors <em class="ct">must not</em> use the &#x2018;Deflate64&#x2019;
   compression method for the <a href="#refsZIP">[ZIP]</a> file format, as it
   is not supported by the user agent.</p>
  <p>An Opera widget package <em class="ct">must</em> contain the following
   two files:</p>
  <ol>
   <li><span><dfn id="widget-configuration-document">widget configuration
    document</dfn></span> (<code>config.xml</code>) &#x2013; a widget
    configuration document containing information necessary to initialize the
    widget. The widget configuration document <em class="ct">should</em>
    contain the widget&#x2019;s name and geometry, and <em class="ct">may</em> also
    contain:
    <ul>
     <li>Widget description</li>
     <li>Author information</li>
     <li>Icon reference</li>
     <li>Security information</li>
    </ul>
   </li>
   <li><dfn id="start-file">Start file</dfn> (<var>index.html</var>) &#x2013;
    this is the main document for the widget; the file that is run when the
    widget is initialized by the user agent.</li>
  </ol>
  <h3 id="packaging_structure"><span class="secno">2.1 </span>Widget folder
   structure</h3>
  <p>When a widget is packaged for distribution, an author <em class="ct">must</em> choose one of two different strategies for
   structuring the files and folders within the zip archive:</p>
  <ol>
   <li>
    <p><dfn id="strategy_1">Strategy 1</dfn> - place the <a href="#widget_configuration_document0">widget <span>configuration
     document</span></a> and <a href="#start_file">start file</a> at the root
     of the Opera widget package. Any associated files, such as scripts,
     stylesheets and images, are in the same directory or in subdirectories.</p>
   </li>
   <li><dfn id="strategy_2_">Strategy 2 </dfn>- All of the files belonging to
    the widget inside a single directory located at the root of the package.
    The author <em class="ct">should</em> name this folder with the same name
    as the compressed zip file.</li>
  </ol>
  <p>If <a href="#strategy_2_">strategy 2</a> is used by the author, there
   <em class="ct">must not</em> be multiple folders at the root of the zip
   file&#39;s hierarchy.</p>
  <p> If there are multiple folders at the root, but not <span>configuration
   file</span>, the user agent <em class="ct">must</em> fail to load the
   widget.</p>
  <p>When a widget is loaded, the user agent must establish a a virtual root
   path for a file system based on the location of the <var><a href="#config_xml">config.xml</a></var>, where this root
   <var>config.xml</var> exists.</p>
  <h3 id="content_type"><span class="secno">2.2 </span>Content type</h3>
  <p>When an author serves an Opera widget package from a Web server, it <em class="ct">must</em> be labeled with the HTTP content-type
   <code>application/x-opera-widgets</code>.</p>
  <p> A user agent <em class="ct">must</em> process resources from the Web
   labeled as <code>application/x-opera-widgets</code> as an <a href="#opera-widget-package">Opera widget package</a>, regardless of file
   extension.</p>
  <h3 id="file_extension"><span class="secno">2.3 </span>File extension</h3>
  <p>An author <em class="ct">should</em> use the file extension
   <var>.wgt</var> for Opera Widgets, particularly for widgets that are
   intended to be distributed via non-http means.</p>
  <p>From a local file system, a user agent <em class="ct">must</em> attempt
   to process files with the .wgt file extension as an <a href="#opera-widget-package">Opera widget package</a>.</p>
  <h2 id="config_xml"><span class="secno">3 </span>Widget configuration
   document</h2>
  <p>The <dfn id="widget-configuration-document0">widget configuration
   document</dfn> contains metadata about the widget that establishes the
   initial viewport size for the start file.</p>
  <p>An author <em class="ct">must</em> place the widget configuration
   document at the root of the package or within a folder (so long as that
   folder is the only resource at the root of the package).</p>
  <p> An author <em class="ct">must</em> name the widget configuration
   document &quot;config.xml&quot; (the name of the configuration document <em class="ct">must</em> be in lower case form).</p>
  <p>A widget configuration document <em class="ct">must</em> be a
   well-formed <a href="#refsXML10">[XML10]</a> document and <em class="ct">should</em> be encoded as UTF-8.</p>
  <p>If a user agent encounters a configuration document that is not
   well-formed XML, the user agent <em class="ct">must</em> fail to load the
   widget.</p>
  <div class="example">
   <p>A minimal widget configuration document looks like the following,
    giving the widget a name, and widget&#x2019;s initial viewport the size
    300&#xD7;300 CSS pixels:</p>
   <pre>
<code> &lt;widget&gt;
  &lt;widgetname&gt;
    Hello World!
  &lt;/widgetname&gt;
&lt;/widget&gt;</code> 
</pre>
  </div>
  <h3 id="xml_whitespace"><span class="secno">3.1 </span>White space</h3>
  <p>When processing a <a href="#widget_configuration_document0">widget
   configuration document</a>, the user agent <em class="ct">must</em> <dfn id="normalize-white-space">normalize white space</dfn>: this means that
   thee user agent ignores leading and trailing whitespace for all elements
   (equivalent to getting the <code>textContent</code> attribute value from
   an <code>Element</code> [DOM3Core]).</p>
  <p>In addition, when presented to the end user, whitespace characters in
   attributes of elements of the widget configuration document elements <em class="ct">must</em> be normalized by the user agent in the following way:</p>
  <ul>
   <li>
    <p>Leading and trailing whitespace is stripped</p>
   </li>
   <li>
    <p>Multiple whitespace characters are normalized to single whitespace
     characters.</p>
   </li>
  </ul>
  <p class="note">Note: this presentation is consistent with setting the
   value <samp>normal</samp> for the white-space attribute in <a href="#refsCSS21">[CSS21]</a>.</p>
  <h2 id="elements_of_the_widget_configuration_doc"><span class="secno">4
   </span>Elements of the widget configuration document</h2>
  <p>This section describes the XML elements and corresponding attributes
   that can be used within a widget configuration document. This section also
   describes the expected structure and usage of those elements.</p>
  <p> A user agent <em class="ct">must</em> treat all attribute values case
   sensitively.</p>
  <h3 id="the_widget_element"><span class="secno">4.1 </span>The <code><a href="#widget">widget</a></code> element</h3>
  <p>The <code><a href="#widget">widget</a></code> element is the root
   element of a widget configuration document.</p>
  <dl>
   <dt>The <dfn id="defaultmode"><code>defaultmode</code></dfn> attribute</dt>
   <dd>
    <p>The <code><a href="#defaultmode">defaultmode</a></code> attribute
     represents the preferred <a href="#widget_modes">widget mode</a> for a
     widget. Valid attribute values are:</p>
    <dl>
     <dt><code><a href="#widget">widget</a></code></dt>
     <dd>
      <p>The widget is typically rendered by the user agent without user
       chrome; the widget has control over its own window size.</p>
     </dd>
     <dt><code>application</code></dt>
     <dd>
      <p>The widget is assumed to be rendered in a viewport size determined
       by the user agent. A user agent <em class="ct">may</em> use the
       initial rendering dimensions specified in the widget configuration
       document. Further, where applicable, the user agent <em class="ct">should</em> also render application chrome.</p>
     </dd>
     <dt><code>fullscreen</code></dt>
     <dd>
      <p>This mode is similar to the <code>application</code> mode, except
       that the widget is expected to be rendered using the entire available
       viewport. A user agent <em class="ct">may</em> render the widget using
       application chrome.</p>
     </dd>
    </dl>
    <p>If the specified rendering mode is not available to the widget, the
     user agent <em class="ct">should</em> fall back to rendering the widget
     in another mode. The fallback order a user agent must follow is
     <code>application</code>, <code>fullscreen</code>, and finally <code><a href="#widget">widget</a></code>.</p>
    <p>If the attribute is missing, the user agent <em class="ct">must</em>
     assume the value <a href="#widget"><code>widget</code></a>.</p>
   </dd>
   <dt>The <dfn id="dockable"><code>dockable</code></dfn> attribute</dt>
   <dd>
    <p>The <a href="#dockable"><code>dockable</code></a> attribute specifies
     whether the widget supports docking where a Web document is displayed,
     as opposed to displaying limited information consisting of, for example,
     the Widget status, title and icon. For more information on the dockable widget mode, refer to the <a href="#widget_modes">Widget modes</a> section.</p>
    <p>Valid values for the <a href="#dockable"><code>dockable</code></a>
     attribute are &#x2018;<code class="css"><code>yes</code></code>&#x2019;,
     &#x2018;<code class="css"><code>true</code></code>&#x2019; or &#x2018;<code class="css"><a href="#dockable"><code>dockable</code></a></code>&#x2019;.
     All other values <em class="ct">must</em> be interpreted by the user
     agent as the value <span><code>false</code></span>, meaning that the
     widget does not provide a docked mode.</p>
   </dd>
   <dt>The <dfn id="transparent"><code>transparent</code></dfn> attribute</dt>
   <dd>
    <p>An author can use the <a href="#transparent"><code>transparent</code></a> attribute to control
     the widget&#39;s use of background transparency.</p>
    <p>Valid values for the <a href="#transparent"><code>transparent</code></a> attribute are the
     values &#x2018;<code class="css"><code>yes</code></code>&#x2019;,
     &#x2018;<code class="css"><code>true</code></code>&#x2019; or &#x2018;<code class="css"><a href="#transparent"><code>transparent</code></a></code>&#x2019;. All
     other values <em class="ct">must</em> be interpreted by the user agent
     as &#x2018;<code class="css"><code>false</code></code>&#x2019;, meaning
     that the user agent <em class="ct">must not</em> make the widget&#39;s
     background transparent.</p>
    <p>If the <code><a href="#transparent">transparent</a></code> attribute
     is missing, and the current computed widget mode is &#x2018;<code class="css"><a href="#widget"><code>widget</code></a></code>&#x2019;,
     then the user agent must behave as if the value <a href="#transparent"><code>transparent</code></a> for this attribute had
     been set to <code>true</code>.</p>
   </dd>
   <dd>
    <p>If the computed or declared value of the widget mode is &#x2018;<code class="css"><code>application</code></code>&#x2019; or &#x2018;<code class="css"><code>fullscreen</code></code>&#x2019;, but the transparent
     attribute is missing, then the user agent <em class="ct">must</em>
     behave as if the value of this attribute had been declared to be
     <span><code>false</code></span>.</p>
   </dd>
   <dd>
    <p>A user agent <em class="ct">may</em> override the value of the
     <code><a href="#transparent">transparent</a></code> attribute, depending
     on platform requirements.</p>
   </dd>
   <dt>The <code>network</code> attribute</dt>
   <dd>
    <p>The network attribute allows and author to declare their intention to
     access the <a href="#public_network">public network</a> and/or <a href="#private_network">private network</a>s. The network attribute
     takes a space-separated made up of the following values:
     <code>public</code> and/or <code>private</code>. The values are
     interpreted as follows:</p>
    <dl>
     <dt><code>private</code></dt>
     <dd>The widget only requires access to the <a href="#private-network">private network</a>.</dd>
     <dt><code>public</code></dt>
     <dd>The widget only requires access to the <a href="#public-network">public network</a><span></span>.</dd>
     <dt><code>public private</code> or <code>private public</code></dt>
     <dd>The widget requires access to both <a href="#public_network">public
      network</a>s and/or <a href="#private_network">private network</a>s.</dd>
    </dl>
   </dd>
   <dd>
    <p>When the attribute is missing, or not a valid value, the user agent
     <em class="ct">must not</em> allow the widget to access resource in the
     <span><a href="#public_network">public network</a> or <a href="#private_network">private network</a> range<span><span> (i.e.,
     totally deny access to the network)</span></span></span>.</p>
   </dd>
   <dd>It is <em class="ct">optional</em> for an author to use the
    <code>network</code> attribute; however, without declaring this
    attribute, the user agent will not grant the widget access to the <a href="#public-network">public network</a> IP range or the <a href="#private-network">private network</a> IP range.</dd>
   <dd>
    <p>The user agent <em class="ct">must</em> compare <code>network</code>
     requests the user agent&#39;s own security policy for accessing the network.</p>
   </dd>
  </dl>
  <h3 id="xml_widgetname"><span class="secno">4.2 </span>The
   <code>widgetname</code> element</h3>
  <p>The <code>widgetname</code> element<em> </em>contains a string whose
   purpose is to provide a human-readable title for the widget. This title
   will be used in application menus to provide a descriptive title for the
   widget.</p>
  <p>Authors <em class="ct">must</em> use a widgetname element in a widget
   configuration document, as a direct descendent of the <code><a href="#widget">widget</a></code> element.</p>
  <h3 id="xml_width"><span class="secno">4.3 </span>The <code>width</code>
   element</h3>
  <p>The <code>width</code> element is a value in CSS pixels, as per section
   4.3.2 of <a href="#refsCSS21">[CSS21]</a>, that represents a
   widget&#x2019;s draw-able area along the horizontal axis.</p>
  <p>An author <em class="ct">MAY</em> use the <code>width</code> element and
   the element <em class="ct">must</em> be a direct descendent of the
   <code><a href="#widget">widget</a></code> element.</p>
  <p>After <a href="#normalize_white_space" title="normalize white   space">whitespace normalization</a>, a user agent <em class="ct">must</em>
   interpret the resulting value as an integer (i.e., a string that only
   contains the characters [0&#x2013;9]).</p>
  <p>If the attribute is missing, or its value is invalid, then the user
   agent <em class="ct">must</em> use the value &quot;<code>300</code>&quot;.</p>
  <p>Please see the note on <a href="#virtual_viewports">virtual
   viewports</a> when implementing on a target where chromeless windows can
   not be dragged off-screen.</p>
  <h3 id="xml_height"><span class="secno">4.4 </span>The <code>height</code>
   element</h3>
  <p>The <code>height</code> element is a value in CSS pixels, as per section
   4.3.2 of <a href="#refsCSS21">[CSS21]</a>, that represents a
   widget&#x2019;s draw-able area along the vertical axis.</p>
  <p>An author <em class="ct">MAY</em> use the <code>height</code> element
   and the element <em class="ct">must</em> be a direct descendent of the
   <code><a href="#widget">widget</a></code> element.</p>
  <p>After <a href="#normalize_white_space" title="normalize white   space">whitespace normalization</a>, a user agent <em class="ct">must</em>
   interpret the resulting value as an integer (ie a string that only
   contains the characters [0&#x2013;9]).</p>
  <p>If the attribute is missing, or its value is invalid, then the user
   agent <em class="ct">must</em> use the value &quot;<code>300</code>&quot;.</p>
  <p>Please see the note on <a href="#virtual_viewports">virtual
   viewports</a> when implementing on a target where chromeless windows can
   not be dragged off-screen.</p>
  <h3 id="the_widgetfile_element"><span class="secno">4.5 </span>The
   <code>widgetfile</code> element</h3>
  <p>The widget file points the widget to a <a href="#start_file">start
   file</a> for the widget. When present, the element <em class="ct">must</em> contain a valid relative path to a start file.</p>
  <p>An author <em class="ct">must not</em> %-encode all path names.</p>
  <p>It is <em class="ct">recommended</em> that authors use this element.</p>
  <h3 id="xml_author_element"><span class="secno">4.6 </span>The
   <code>author</code> element</h3>
  <p>The <code>author</code> element is a container element for metadata
   about the widget&#x2019;s author. It is <em class="ct">optional</em> for an
   author to use this element. This element can contain the following child
   elements:</p>
  <dl style="margin-left: 1em">
   <dt>The <code>name</code> element:</dt>
   <dd>
    <p>The <code>name</code> element represents the name, or names, of the
     author of the widget. It is <em class="ct">optional</em> for an author
     to use this element. If used, this element <em class="ct">must</em> be a
     direct descendent of the <code>author</code> element.</p>
   </dd>
   <dt>The <code>organization</code> element:</dt>
   <dd>
    <p>The <code>organization</code> element represents the name of an
     organization that the author is affiliated with. It is <em class="ct">optional</em> for an author to use this element. If used,
     this element <em class="ct">must</em> be a direct descendent of the
     <code>author</code> element.</p>
   </dd>
   <dt>The <code>email</code> element:</dt>
   <dd>
    <p>The <code>email</code> element represents an e-mail address for the
     author of the widget. It is <em class="ct">optional</em> for an author
     to use this element. If used, this element <em class="ct">must</em> be a
     direct descendent of the <code>author</code> element.</p>
   </dd>
   <dt>The <code>link</code> element</dt>
   <dd>
    <p>The link element represents an IRI which the author associates with
     him or her self. It is <em class="ct">optional</em> for an author to use
     this element. If used, this element <em class="ct">must</em> be a direct
     descendent of the <code>author</code> element.</p>
   </dd>
  </dl>
  <p>It is <em class="ct">recommended</em> that authors use this element.</p>
  <h3 id="xml_description"><span class="secno">4.7 </span>The
   <code>description</code> element</h3>
  <p>The description element is a short plain-text description of the widget.</p>
  <p>It is <em class="ct">recommended</em> that authors use this element.</p>
  <h3 id="xml_icon"><span class="secno">4.8 </span>The <code>icon</code>
   element</h3>
  <p>The <code>icon</code> element is a path to an icon file contained within
   the Opera widget package that the user agent can display to the end user
   in appropriate contexts.</p>
  <p>When used, the icon element must point to a file that is one of the
   supported <a href="#icon_formats">icon formats</a>.</p>
  <p>The <dfn id="icon-formats">icon formats</dfn> that a user agent <em class="toc">must</em> support are: <a href="#refsPNG10">[PNG10]</a>, <a href="#refsGIF89">[GIF89]</a> and <a href="#refsSVG">[SVG]</a>.</p>
  <p>An author <em class="ct">may</em> use zero or more <code>icon</code>
   elements.</p>
  <p>If the author has used multiple icon elements, the user agent <em class="ct">must</em> choose the icon that best matches the display
   requirements of the user agent, even if none of the icons match the exact
   dimensions of the render context.</p>
  <p>The <code>icon</code> element can have <code>width</code> and
   <code>height</code> attributes:</p>
  <dl>
   <dt><code>width</code> attribute</dt>
   <dd>
    <p>The value of width is an unsigned integer, representing the desired
     width of the icon in device pixels.</p>
   </dd>
   <dt><code>height</code> attribute</dt>
   <dd>
    <p>The value of height is an unsigned integer, representing the desired
     height of the icon in device pixels.</p>
   </dd>
  </dl>
  <p>It is <em class="ct">optional</em> for authors to use the
   <code>width</code> and <code>height</code> attributes of an icon element.</p>
  <p>When the user agent chooses an icon, it <em class="ct">should</em>
   select the icon that most closely matcheps the size implied by the
   <code>width</code> and <code>height</code> attributes. If there are no
   matches, the user agent <em class="ct">should</em> choose the one that is
   closest to matching the size of the render context.</p>
  <p>If multiple icon elements with the same size exist, the user agent <em class="ct">should</em> choose the last of the icons present in the widget
   configuration document.</p>
  <p>A user agent <em class="ct">may</em> choose to exclusively use an icon
   in a particular format (e.g., such as PNG).</p>
  <p>It is <em class="ct">recommended</em> that authors use one or more of
   this element.</p>
  <h3 id="the_feature_element"><span class="secno">4.9 </span>The
   <code>feature</code> element</h3>
  <p> A feature is a runtime component or functionality beyond the default
   set of functionality a user agent provides to a widget at runtime (e.g.,
   the file IO API). Authors <em class="ct">must</em> explicitly request, via
   the <code>feature</code> elements, that the user agent make particular
   features available to the widget at runtime. Whether widget is granted
   access to a feature depends on the security policy and security privileges
   granted to the widget by the user agent (i.e., a user agent is under no
   obligation to grant access to any particular feature).</p>
  <p>It is <em class="ct">optional</em> for authors to use the
   <code>feature</code> element; when used, the <code>feature</code> element
   <em class="ct">must</em> be a direct descendent of the <code><a href="#widget">widget</a></code> element.</p>
  <dl>
   <dt><code>name</code> attribute</dt>
   <dd>
    <p>The <code>name</code> of a feature, as represented by a URI. The use
     of the <code>name</code> attribute represents an author&#39;s intention to
     make use of a feature within a widget. If an author has used a
     <code>feature</code> element, it is <em>required</em> that authors use
     the <code>name</code> attribute.</p>
   </dd>
   <dt><code>required</code> attribute</dt>
   <dd>
    <p>The <code>required</code> attributes indicates to the user agent if
     the feature is required for correct operation of the widget. In other
     words, if the feature must be made available by the user agent for the
     widget to function correctly, if at all. The default value for when the
     value of this attribute is missing is &quot;<code>true</code>&quot;. It is
     <em>optional</em> for authors to declare the <code>required</code>
     attribute.</p>
   </dd>
  </dl>
  <p>An author <em class="ct">may</em> use zero or more <code>param</code>
   elements as child elements of the <code>feature</code> element.</p>
  <h3 id="the_param_element"><span class="secno">4.10 </span>The
   <code>param</code> element</h3>
  <p>The <code>param</code> element allows an author to declare parameters,
   which <em class="ct">may</em> be associated and used by feature (e.g., the
   name and values provided by a param element can be used to configure a
   particular feature).</p>
  <p>It is <em class="ct">optional</em> for authors to use the
   <code>param</code> element; when used, the <code>param</code> element <em class="ct">must</em> be a direct descendent of the <code>feature</code>
   element.</p>
  <p>A user agent <em class="ct">must</em> ignore any <code>param</code>
   element that is not a direct descendent <code>feature</code> element.</p>
  <dl>
   <dt><code>name</code> attribute</dt>
   <dd>
    <p>A string that represents the name of this parameter.</p>
   </dd>
   <dt><code>value</code> attribute</dt>
   <dd>
    <p>A string that represents the value of this parameter.</p>
   </dd>
  </dl>
  <h3 id="the_id_element"><span class="secno">4.11 </span>The <code>id</code>
   element</h3>
  <p>The <code>id</code> element establishes an identity for a widget.</p>
  <p>It is <em class="ct">optional</em> for authors to use the
   <code>id</code> element; However, when used, the <code>id</code> element
   <em class="ct">must</em> be a direct descendent of the <code><a href="#widget">widget</a></code> element and <em class="ct">must</em>
   contain all three <code><a href="#dfn_host">host</a></code>,
   <code>name</code>, and <code>revised</code> elements (one of each, in any
   order).</p>
  <dl>
   <dt>The <code><a href="#dfn_host">host</a></code> element</dt>
   <dd>
    <p>A fully qualified domain name that identifies the host from which the
     widget can be downloaded.</p>
   </dd>
   <dd>
    <p>If used by an author, this element <em class="ct">must</em> be a
     direct descendent of the <code>id</code> element.</p>
   </dd>
   <dt> The <code>name</code> element</dt>
   <dd>
    <p>A string that is unique to the domain specified in the <code><a href="#dfn-host">host</a></code> element.</p>
   </dd>
   <dd>
    <p>If used by an author, this element <em class="ct">must</em> be a
     direct descendent of the <code>id</code> element.</p>
   </dd>
   <dt>The <code>revised</code> element</dt>
   <dd>
    <p>A string in the <a href="#refsW3CDTF">[W3CDTF]</a> format.</p>
   </dd>
   <dd>
    <p>When used, the author <em class="ct">must</em> include the Year and
     Month components of the <a href="#refsW3CDTF">[W3CDTF]</a>; other
     components are <em class="ct">optional</em>.</p>
   </dd>
   <dd>
    <p>If used by an author, this element <em class="ct">must</em> be a
     direct descendent of the <code>id</code> element.</p>
   </dd>
  </dl>
  <h3 id="xml_security"><span class="secno">4.12 </span>The
   <code>security</code> element</h3>
  <p>A widget&#39;s configuration document can contain a &quot;security
   declaration&quot;: a declaration of the protocols, hosts, ports, and paths
   that the widget will attempt to access.</p>
  <p> The security declaration is represented as the <code>security</code>
   element in the configuration document.</p>
  <p>The <code>security</code> element works in conjunction with the
   <code>network</code> attribute of the <code><a href="#widget">widget</a></code> element. Without the declaration of a
   <code>network</code> attribute, the user agent <em class="ct">must</em>
   deny access to the network.</p>
  <p>The user agent defines a default security policy which affects what the
   author may gain access to. System administrators may also define a local
   security policy document which overrides the default policy. The default
   security policy is described in the Security model section of this
   specification. The security policy document is out of the scope of this
   specification.</p>
  <p>When a <code>security</code> element is used, an author <em class="ct">must</em> use one of the following elements as a child of the
   <code>security</code> element:</p>
  <ul>
   <li>The <code>access</code> element</li>
   <li>The <code>content</code> element</li>
  </ul>
  <p>It is <em class="ct">optional</em> for authors to include a
   <code>security</code> element; when used, the security element must be a
   direct descendent of the <code><a href="#widget">widget</a></code>
   element.</p>
  <h3 id="xml_security_access"><span class="secno">4.13 </span>The
   <code>access</code> element</h3>
  <p>The <code>access</code> element is a container element whose child
   elements declare which protocols, hosts, ports, and paths the widget can
   use.</p>
  <p>The expected child elements of the <code>access</code> element are:</p>
  <ul>
   <li>The <code><a href="#protocol">protocol</a></code> element</li>
   <li>The <code><a href="#dfn_host">host</a></code> element</li>
   <li>The <code><a href="#port">port</a></code> element</li>
   <li>The <code><a href="#path">path</a></code> element</li>
  </ul>
  <p>An author <em class="ct">may</em> use zero or more <code><a href="#protocol">protocol</a></code>, <code><a href="#dfn-host">host</a></code>, <code><a href="#path">path</a></code>,
   or <code><a href="#port">port</a></code> elements within an
   <code>access</code> element.</p>
  <p>A user agent <em class="ct">must</em> treat undeclared child elements of
   the <code>access</code> element to mean that an author is requesting
   access to the full capabilities afforded by the semantics of the missing
   element. An example is that if the <code><span><a class="dfnref" href="#dfn-host">host</a></span></code> element is missing, the widget is
   requesting access to all hosts.</p>
  <dl>
   <dt>The <code><dfn id="protocol">protocol</dfn></code> element</dt>
   <dd>
    <p>The <code><a href="#protocol">protocol</a></code> element is used to
     determine which protocols a widget should have access to. When missing
     from the configuration document, the element is assumed to be present
     three times, with the values &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019;, &#x2018;<code class="property">http</code>&#x2019; and &#x2018;<code class="property">https</code>&#x2019;.</p>
   </dd>
   <dt>&#xA0;</dt>
   <dd>If any <code><a href="#protocol">protocol</a></code> element is
    declared, then the user agent must initially deny access to the http and
    https protocol (but continue to allow access to the &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019; URI scheme);
    The user agent <em class="ct">must</em> grant access to &#x2018;<code class="property">http</code>&#x2019; or &#x2018;<code class="property">https</code>&#x2019; only if the author explicitly
    requests access to these protocols through a <code><a href="#protocol">protocol</a></code> element.</dd>
   <dd>
    <p>The value of this element is the name of the scheme that widget will
     be using to contact external servers (e.g., <samp>http</samp>,
     <samp>https</samp>).</p>
   </dd>
   <dd>
    <p>A user agent <em class="ct">must not</em> grant access to the
     <code>file</code> protocol; if a request is made to access the
     <code>file</code> protocol, the user agent <em class="ct">must</em>
     behave as if this protocol element is not present in the widget
     configuration document (i.e., ignore this element).</p>
   </dd>
   <dt>The <code><dfn id="dfn-host">host</dfn></code> element</dt>
   <dd>
    <p>The <code><a href="#dfn_host">host</a></code> element establishes
     which hostname or IP address the widget will want to contact. A user
     agent must treat the value of host as an exact match. This means, for
     example, that the user agent will not allow a widget specifying
     <samp>www.example.com</samp> to contact <samp>example.com</samp>.</p>
   </dd>
   <dt>The <code><dfn id="port">port</dfn></code> element</dt>
   <dd>
    <p>The <code><a href="#port">port</a></code> element establishes which
     port numbers the widget will be using. The value is either a number, a
     range of numbers separated by a dash (e.g. <samp>1024-2048)</samp>, or a
     comma-separated list of ports (e.g. <samp>80, 1337</samp>).</p>
   </dd>
   <dd>
    <p>When missing from an <code>access</code> element, the port element is
     assumed to be present, matching all ports, and when a widget requests
     access to a resource, it can do so on every port. It should however be
     noted that there may be certain port numbers for which the user agent
     has disabled access for security reasons, and a configuration override
     cannot change these.</p>
   </dd>
   <dd>When port numbers are specified for a protocol in an
    <code>access</code> element, the port numbers specified are the only ones
    by which a widget can communicate.</dd>
   <dt>&#xA0;</dt>
   <dd>&#xA0;</dd>
   <dt>The <code><dfn id="path">path</dfn></code> element</dt>
   <dd>
    <p>The <code><a href="#path">path</a></code> element specifies the path
     part of the URI a widget can contact.</p>
   </dd>
  </dl>
  <h3 id="xml_content"><span class="secno">4.14 </span>The
   <code>content</code> element</h3>
  <p>The content element allows authors to disable support for plugins within
   their widgets.</p>
  <p>Authors not requiring the use third-party plugins content <em class="ct">must</em> use the <code>content</code> element as a child of
   the <code>security</code> element.</p>
  <p>If a <code>content</code> element is not present in a widget
   configuration document&#x2019;s security section, or if a security section
   is not present in a widget, the element is assumed to be present with the
   value <code>plugins </code>set to &quot;<code>yes</code>&quot;.</p>
  <dl>
   <dt><code>plugin</code> attribute</dt>
   <dd>
    <p>The possible values of this attribute &quot;<code>yes</code>&quot;,
     &quot;<code>no</code>&quot;, &quot;<code>true</code>&quot;,
     &quot;<code>false</code>&quot;, &quot;<code>plugin</code>&quot;. &quot;
     <code>yes</code>&quot;, &quot;<code>true</code>&quot; and
     &quot;<code>plugin</code>&quot; mean that the widget will use plugin as
     embedded content (e.g., a Flash file). All other values, included
     disallowed values, means that the widget will not use plugin as embedded
     content.</p>
   </dd>
  </dl>
  <h2 id="security_model"><span class="secno">5 </span>Security model</h2>
  <p>Conceptually speaking a widget is &quot;loaded&quot; onto a computer before it is
   &quot;run&quot;; so, its home domain is the computer on which it is running. In
   addition, many widgets accomplish their task by &quot;mashing-up&quot; information
   from various sources on the Web. Thus, a widget needs greater rights than
   Web pages in order to be useful.</p>
  <p>The main security concern is that a widget that accesses pages on an
   intranet can steal information. And there is also a concern about leaking
   information about the widget&#39;s user from one Web site to another.</p>
  <p>This document specifies what widgets are normally allowed to do, how
   they can be granted privileges, and how their privileges can be adjusted.
   Actions are controlled by defaults, with overrides from the user or system
   administrator, and checked against the behavior that the widget declares
   itself to have (via config.xml).</p>
  <p>The default security model for widgets can be summarized as follows:</p>
  <ol>
   <li>
    <p>A user agent <em class="ct">must</em> silently deny direct access to
     resources residing on a user&#x2019;s file system.</p>
   </li>
   <li>
    <p>A use agent must allow a widget to access content over the widget
     protocol.</p>
   </li>
   <li>
    <p>A user agent <em class="ct">must</em> deny access to the end-user&#39;s
     file system over the <code>file:</code> URI scheme.</p>
   </li>
   <li>
    <p>In the presence of a <code><a href="#protocol">protocol</a></code>
     element, a user agent <em class="ct">should</em> grant a widget access
     protocols supported by the user agent through the appropriate URI scheme
     (e.g., ftp, etc.). In the absence of protocol elements, user agent <em class="ct">MUST</em> allow a widget to access content over the http and
     https protocols.</p>
   </li>
   <li>
    <p>A user agent <em class="ct">must </em> allow communication over
     default ports, or only to the ports the author has pre-declared ports
     using the <code><a href="#port">port</a></code> element. A user agent,
     however, <em class="ct">must</em> deny widgets from using ports equal to
     or below <code>1023</code> that are not default ports, even if access is
     requested by the author via the <code><a href="#port">port</a></code>
     element.</p>
   </li>
  </ol>
  <h3 id="network_classes_"><span class="secno">5.1 </span><span class="mw-headline">Network classes </span></h3>
  <p>This specification describes two classes of networks: a private network,
   and a public network.</p>
  <p>A <dfn id="private-network">private network</dfn>, or local network is
   by default defined as the user&#39;s local machine, including any IP address
   that resolves to the local machine. Further, the IP ranges as defined by
   [<a class="external" href="http://tools.ietf.org/html/rfc1918" title="http://tools.ietf.org/html/rfc1918">RFC 1918</a>], are considered
   to be private. These addresses are primarily being used in systems set up
   behind a NAT translation device, and provides machines with unique
   addresses where there is only one public IP address for several machines.
   These addresses are:</p>
  <pre>     10.0.0.0        -   10.255.255.255  (10/8 prefix)
     172.16.0.0      -   172.31.255.255  (172.16/12 prefix)
     192.168.0.0     -   192.168.255.255 (192.168/16 prefix)</pre>
  <p>In addition, when a user is within an ad-hoc network, networking
   equipment (including software components in operating systems), typically
   use the IPv4 Link-Local addresses as defined by [<a class="external" href="http://tools.ietf.org/html/rfc3927" title="http://tools.ietf.org/html/rfc3927">RFC 3927</a>], which is also
   considered to be part of the local network.</p>
  <pre>    169.254.0.0     -    169.254.255.255 (169.254/16 prefix)</pre>
  <p>The user agent must provide a default configuration wherein the four
   network ranges described above are defined to fall within the private IP
   range. This policy should be editable by the user, meaning it should be
   possible to add or remove items to the list of private networks and hosts.</p>
  <p>A <dfn id="public-network">public network</dfn> is any IP range outside
   the definition of a <a href="#private_network">private network</a>.</p>
  <h3 id="security_example"><span class="secno">5.2 </span>Security example</h3>
  <p>The following example contains a <code>security</code> element section
   would indicate that the widget should be allowed to contact the domains
   <samp>example.com</samp> and <samp>example.org</samp> using either the
   https or http protocols, but only to the path &#x2019;/good&#x2019; on ports
   80,1337 and ports in the range 2048&#x2013;4096. In addition, the widget
   does not want access to plugins.</p>
  <pre class="example">
<code>&lt;widget ...&gt;
 &lt;security&gt;
  &lt;access&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;host&gt;example.org&lt;/host&gt;
    &lt;path&gt;/good&lt;/path&gt;
    &lt;port&gt;2048-4906&lt;/port&gt;
    &lt;port&gt;80,1337&lt;/port&gt;
  &lt;/access&gt;
  &lt;content plugins=&quot;no&quot;/&gt;
&lt;/security&gt;
&lt;/widget&gt;</code></pre>
  <h3 id="the_widget_url_protocol_"><span class="secno">5.3 </span>The
   widget: URL protocol</h3>
  <p>A widget:// protocol URL is defined as below</p>
  <pre>  widget_protocol_url = &quot;widget://&quot; widget_identifier &quot;/&quot; [path] [&quot;?&quot; query] [&quot;#&quot; fragment];
  widget_identifier = [a-z0-9]+</pre>
  <p>The path component is optional, and follows the the definition given for
   the path component in section 3.3 of rfc3986.
   Likewise, query strings and fragments are permitted, as defined by
   sections 3.4 and 3.5 of same document. The path always refers to the root
   of the widget folder, and traversing beyond this is not allowed.</p>
  <p>Example: If we have a widget with the identifier <samp>decafbad</samp>,
   and we want to reference a file &#x2018;<code class="css">caffeine.xml</code>&#x2019;, placed in the widget&#39;s root
   folder, for inclusion, we would refer to this URL:</p>
  <pre>widget://decafbad/caffeine.xml</pre>
  <p>The widget_identifier SHOULD be unique, and semi-randomly generated. Two
   different widget installations on a system MUST NOT share the same widget
   identifier.</p>
  <h4 id="access_rules_"><span class="secno">5.3.1 </span> <span class="mw-headline"> Access rules </span></h4>
  <p>Any access to URLs in the widget:// URL space is bound by a strict
   same-origin policy, meaning that a resource defined by a widget: URL
   cannot be accessed in another context than the widget wherein the widget
   is contained.</p>
  <p>External resources loaded in the widget, through iframes,
   svg:foreignObject and similar mechanisms MUST NOT be allowed to access
   resources[1] inside the widget, or to utilize the widget:// URL space.</p>
  <p>If a widget embeds a file from within the widget, by means of frames or
   similar mechanisms, the embedded documents MUST be running in the context
   of the widget, and will be subject to the same security restrictions as
   the widget.</p>
  <p>It SHOULD NOT be possible to launch one widget from within another
   widget.</p>
  <p>It MUST NOT be possible to access the widget: URI space from other
   browsing contexts than inside the widget, or a window that can be
   determined to be completely trusted and running with extended security
   privileges. This means that a strict same-origin policy exists between
   different widgets.</p>
  <p>Objects included in the widget from a source outside the widget cannot
   access documents using the widget:// protocol. This means that if a widget
   includes an iframe to <a class="external free" href="http://example.com/" rel="nofollow" title="http://example.com/">http://example.com/</a>, the
   document on example.com is not able to access URLs using the widget://
   protocol.</p>
  <h3 id="widget_instances_"><span class="secno">5.4 </span><span class="mw-headline">Widget instances </span></h3>
  <p>Separate widget instances share no information at all. Specifically:</p>
  <ul>
   <li>
    <p> A cookie set by a widget instance, or by a URL loaded by a widget
     (e.g. through XmlHttpRequest) is visible only to that widget instance,
     never to any other instances or to documents loaded into the use agent
     in any other way.</p>
   </li>
   <li>
    <p> If a URL loaded by a widget requires HTTP authentication then
     authentication must be performed on behalf of that widget instance; the
     authentication is not shared with other widget instances or with URLs
     loaded into the user agent in any other way.</p>
   </li>
   <li>
    <p> A set of settings for a widget instance is shared with no other
     widget instances.</p>
   </li>
   <li>
    <p> Other persistent storage mechanisms, such as those defined in HTML
     must not share data with other widget instances, or with the storage
     context in the user agent.</p>
   </li>
   <li>
    <p> Cache files or cache indexes are not shared with the user agent, or
     with any other widget instance</p>
   </li>
   <li>
    <p> Widget cache data should not be indexed in the user agent&#39;s history
     search engine.</p>
   </li>
  </ul>
  <h3 id="form_and_links_behavior"><span class="secno">5.5 </span><span class="mw-headline">Form and Links Behavior</span></h3>
  <p>The security model defines the following behavior for forms and links;
   thus ensuring forms and links do not violate security policy:</p>
  <ul>
   <li> A form element should have a valid target.</li>
   <li> If the form has a <a class="external text" href="http://www.w3.org/TR/html401/types.html#type-frame-target" rel="nofollow" title="http://www.w3.org/TR/html401/types.html#type-frame-target">reserved
    target</a>, and this target leads to intrinsically replacing the topmost
    document in the widget, in effect replacing the widget, submitting the
    form should fail silently.</li>
   <li> If the form uses the &#x2018;<code class="css">_blank</code>&#x2019;
    target for a GET request, the form should be submitted to an external
    application (in effect, the user agent&#39;s main user agent instance.</li>
   <li> POST requests that result in submission to an external viewer SHOULD
    fail.</li>
   <li> The URL provided by the form&#39;s action attribute MUST be permitted by
    the computed security policy for the widget.</li>
   <li> Links must have default &quot;_blank&quot; target, and open in an
    external viewer. The URL referenced MUST be permitted by the computed
    security policy for the widget.</li>
  </ul>
  <h3 id="embedded_object_security_context_"><span class="secno">5.6
   </span><span class="mw-headline">Embedded object security context </span></h3>
  <p>The security model defines the security context and behavior for
   embedded objects:</p>
  <ul>
   <li> Objects must adhere to widget security policy.</li>
   <li> Objects must not cross network boundaries when loaded.</li>
   <li> Objects may share cookies and cache with widgets.</li>
   <li> Objects must not share cookies and cache with user agent.</li>
   <li> Objects must not be aware of widget&#39;s existence.
    <ul>
     <li> There should be no reference to window.opener (the widget shouldn&#39;t
      be visible to the object).</li>
     <li> window.top should point to the embedding frame only.</li>
    </ul>
   </li>
   <li> Widgets may have a one-way reference to inject scripts, read DOM,
    etc. The reference must be strictly one way and initiated from the widget
    only.</li>
  </ul>
  <h3 id="symbolic_links_"><span class="secno">5.7 </span><span class="mw-headline">Symbolic links </span></h3>
  <p>If a widget package file contains symbolic links, leading either to a
   target in- or outside the widget, the symbolic link must not be made
   available to the instantiated widget: In other words, the symlink MUST NOT
   be followed by the user agent.</p>
  <p>In the event that the widget package, when unpacked on a device,
   contains a hard link, the user agent must never create the hard link on
   disk.</p>
  <h2 id="widget_modes"><span class="secno">6 </span>Widget modes</h2>
  <p>Widgets can be displayed in several different contexts, or
   <em>modes</em>, as described below. An installed widget may support
   several of the modes, but will only</p>
  <dl id="modes-list">
   <dt>widget</dt>
   <dd>
    <p>The widget mode describes traditional desktop widgets, applications
     that are displayed without application chrome such as resizing controls
     or title bars. Widgets displaying in this mode are expected to be in
     control of their own rendering environment, meaning they can set or
     reset their size at will. On targets where the widget does not fit, the
     platform is expected to provide a scrolling mechanism or other means of
     navigating around the widget, while allowing the widget to be rendered
     and displayed according to the geometry information the widget has
     available.</p>
   </dd>
   <dt>application</dt>
   <dd>
    <p>The application mode typically describes widgets that on a system with
     window management, will display chrome and controls for moving, or
     resizing the widget. Widgets in this mode are expected to have the
     window/widget size controlled by the end-user or operating environment,
     but the widget may suggest initial layout information.</p>
   </dd>
   <dt>fullscreen</dt>
   <dd>
    <p>This mode is equal to the application mode, except that the initial
     default size provided by the runtime environment is expected to be full
     screen, or what equates a &#x2018;<code class="property">maximized</code>&#x2019; mode for desktop application.</p>
   </dd>
   <dt>docked</dt>
   <dd>
    <p>The dock mode, sometimes referred to as &#x2018;<code class="css">microwidget mode</code>&#x2019;, is a mode wherein the widget
     typically renders and displays in a minimized state, such as an idle
     screen, list view, or other types of display where the widget has more
     limited size. Typically, widgets in this mode are not expected to be
     interactive, and the user can only interact with the widget through
     activating it, and thus switch it into one of the previously defined
     modes.</p>
   </dd>
  </dl>
  <h3 id="css_extension"><span class="secno">6.1 </span>CSS extensions for
   widget modes</h3>
  <p>Widget authors that wish to support styling widgets separately for
   widgets in different modes, may use the <dfn id="o-widget-mode"><code>-o-widget-mode</code></dfn> CSS media feature,
   using one of the four <span>widget modes</span> as the value to specify
   the styling.</p>
  <h4 id="examples"><span class="secno">6.1.1 </span>Examples</h4>
  <p>Hiding UI elements in application mode:</p>
  <pre class="example">
<code>
@media all and (-o-widget-mode:application)) {
  /* We don&#39;t need to display fake user chrome controls, since
     real chrome is provided */
  .fakeChrome { display: none; }
}
</code>
</pre>
  <p>Changing the font-size for docked (microwidget) mode</p>
  <pre class="example">
<code>
@media all and (-o-widget-mode:docked)) {
  body { font-size: 80%; }
}
</code>
</pre>
  <p>It is also possible to specifically style something in the case that the
   platform supports the -o-widget-mode attribute, by not specifying a value:</p>
  <pre class="example">
<code>
@media all and (-o-widget-mode) {
  div.friendlyMessage {
    content: &quot;I will be displayed if I am a modern widget&quot;;
  }
}
</code>
</pre>
  <h2 id="scripting_interface"><span class="secno">7 </span>Widget scripting
   interfaces</h2>
  <h3 id="widget_object"><span class="secno">7.1 </span>The widget object</h3>
  <p>The purpose of the <code><a href="#widget">widget</a></code> object is
   to expose functionality specific to widgets.</p>
  <pre class="idl" id="widget-interface">
<code>interface <dfn id="widget">Widget</dfn> {
    readonly attribute DOMString <a href="#identifier">identifier</a>;
    readonly attribute DOMString <a href="#originurl">originURL</a>;
    readonly attribute DOMString <a href="#widgetmode">widgetMode</a>;
  
    void <a href="#openurl">openURL</a>(in DOMString URL);
    String <span>preferenceForKey</span>(in DOMString key);
    void <a href="#wo-setPreferenceForKey">setPreferenceForKey</a>(in DOMString value,
                              in DOMString key);
    /* Widget attention */
    void <a href="#getattention">getAttention</a>();
    void <a href="#shownotification">showNotification</a>(in DOMString msg, in Function callback);
    /* Widget window management; */
         attribute Function onshow;
         attribute Function onhide;
    void <a href="#show">show</a>();
    void <a href="#hide">hide</a>();
    
<!--    /* Inter-widget communication */
    readonly attribute Window widgets; -->
}</code> 
</pre>
  <h3 id="wo_identifier"><span class="secno">7.2 </span>The <code><dfn id="identifier">identifier</dfn></code> attribute</h3>
  <p>The <code><a href="#identifier"><span>identifier</span></a></code>
   attribute represents a universally unique identifier of the widget
   instance. Upon getting, the user agent must return a string.</p>
  <h3 id="wo_originURL"><span class="secno">7.3 </span>The <code><dfn id="originurl">originURL</dfn></code> attribute</h3>
  <p> The origin from which the widget was acquired. The value of this
   attribute is an IRI, or null. Upon getting, the user agent must return a
   URI as string that is %-decoded representing the URI from which the widget
   was acquired, or <code>null</code> if the acquisition origin is unknown.</p>
  <h3 id="wo_widgetMode"><span class="secno">7.4 </span>The <code><dfn id="widgetmode">widgetMode</dfn></code> attribute</h3>
  <p>The <code><a href="#widgetmode"><span>widgetMode</span></a></code>
   attribute identifies the current rendering mode for the widget.</p>
  <p>Upon getting, the user agent <em class="ct">should</em> return one of
   the values <var><a href="#widget">widget</a></var>,
   <var>application</var>, <var>fullscreen</var> or <var>docked</var>.</p>
  <h3 id="wo_openURL"><span class="secno">7.5 </span>The <code><dfn id="openurl">openURL</dfn></code>() method</h3>
  <p>The <code><a href="#openurl"><span>openURL</span></a></code>() method on
   the widget object takes <abbr title="Uniform Resource Locator">URI</abbr>
   as an argument, as defined by <a href="#refRFC3987">[RFC3987]</a>. When
   this method is called with a valid URI, the user agent URL <em class="ct">should</em> open the URI with the appropriate scheme handler
   (e.g., &quot;tel:+12345422&quot; might be opened with a telephony
   application).</p>
  <p>Note that restrictions to what URLs can be opened using <code><a href="#openurl">openURL</a></code>, as defined in the <a href="#security">security</a> section of this specification:</p>
  <ul>
   <li>Widgets cannot open URLs using the <var>file:</var> scheme.</li>
   <li>OpenURL does not accept relative IRI&#x2019;s and as such cannot open
    any files element stored inside the widget.</li>
  </ul>
  <h3 id="wo_preferenceForKey"><span class="secno">7.6 </span>The
   <code><span>preferenceForKey()</span></code></h3>
  <p>The <code>preferenceForKey()</code> method takes a String argument,
   <var>key</var>. When called, the user agent must return a string that has
   previously been stored with the <code><a href="#wo-setPreferenceForKey">setPreferenceForKey</a></code> method, or
   <samp>undefined</samp> if the <var>key</var> does not exist.</p>
  <h3 id="wo_setPreferenceForKey"><span class="secno">7.7 </span>The <dfn id="setpreferenceforkey"><code>setPreferenceForKey()</code></dfn> method</h3>
  <p>The <code><a href="#setpreferenceforkey">setPreferenceForKey()</a></code> method takes
   two String arguments, <var>preference</var> and <var>key</var>. When
   called, the user agent <em class="ct">must</em> persistently store the
   value of <var>preference</var> and <var>key</var>. However, if called and
   the value of <var>key</var> is <var>null </var>and the <var>key</var>
   argument has been previously stored, the user agent <em class="ct">must</em> delete the key and preference from the storage area.</p>
  <h3 id="wo_getAttention"><span class="secno">7.8 </span>The <code><dfn id="getattention">getAttention</dfn></code>() method</h3>
  <p>This method serves to bring the widget to the user&#39;s attention.</p>
  <p>A user agent <em class="ct">should</em> use platform specific
   means/conventions to bring the widget to the user&#39;s attention, but <em class="ct">should not</em> grab the window focus.</p>
  <p>Methods of bringing the user&#39;s attention to the widget, can, for
   instance,</p>
  <h3 id="wo_showNotification"><span class="secno">7.9 </span>The <code><dfn id="shownotification">showNotification</dfn></code>() method</h3>
  <p>The <code><a href="#shownotification"><span>showNotification</span></a></code>() method
   takes two arguments, the first being a String with the message text, and a
   second argument being a function that serves as a callback when the
   notification is accepted.</p>
  <p>When <code><a href="#shownotification"><span>showNotification</span></a></code>() is
   called, the system is expected to display a notification containing the
   message text. The message text is a DOMString and whitespace within the
   string, including new lines is significant.</p>
  <p>Upon the user acknowledging the notification, the callback function is
   called without any arguments.</p>
  <h3 id="wo_onshow"><span class="secno">7.10 </span>The <code><dfn id="onshow">onshow</dfn></code> attribute</h3>
  <p>When a function is specified in the <code><a href="#onshow"><span>onshow</span></a></code> callback, e.g. the value of
   the attribute is non-null and a valid function reference, the callback
   will be called whenever the widget&#39;s state changes from being hidden to
   being visible.</p>
  <p>Note that the onshow callback should not be dispatched if a visible
   widget gets focus.</p>
  <h3 id="wo_onhide"><span class="secno">7.11 </span>The <code><dfn id="onhide">onhide</dfn></code> attribute</h3>
  <p>When a function is specified in the <code><a href="#onhide"><span>onhide</span></a></code> callback, e.g. the value of
   the attribute is non-null and a valid function reference, the callback
   will be called whenever the widget&#39;s state changes from being visible to
   being hidden.</p>
  <p>Note that the onshow callback should not be dispatched if a visible
   widget loses focus.</p>
  <h3 id="wo_show"><span class="secno">7.12 </span>The <code><dfn id="show">show</dfn></code>() method</h3>
  <p>The <code><a href="#show"><span>show</span></a></code>() method takes no
   arguments, and returns no value. When the method is invoked a widget that
   has previously been in a hidden state will be shown. If the widget is
   already in a shown state, invoking show will perform no action.</p>
  <h3 id="wo_hide"><span class="secno">7.13 </span>The <code><dfn id="hide">hide</dfn></code>() method</h3>
  <p>The <code><a href="#hide"><span>hide</span></a></code>() method takes no
   arguments, and returns no value. When the method is invoked a widget that
   has previously been in a shown state will be hidden. If the widget is
   already in a hidden state, invoking hide will perform no action.</p>
  <h3 id="widget_window_object"><span class="secno">7.14 </span>The
   <code><dfn id="widgetwindow">widgetWindow</dfn></code> interface</h3>
  <p>A widget&#39;s initial dimensions are controlled by the <code><a href="#config-width">width</a></code> and <code><a href="#config-height">height</a></code> elements in the <var><a href="#config-xml">widget configuration document.</a></var> In addition to
   this, a widget can be resized dynamically using Javascript, with the
   extensions below.</p>
  <pre class="idl">
<code>interface <a href="#widgetwindow">widgetWindow</a> {
         attribute DOMString <a href="#status0">status</a>;
         attribute DOMString <a href="#defaultstatus">defaultStatus</a>;
    void <a href="#moveto">moveTo</a>(in Integer pos_x, in Integer pos_y);
    void <a href="#moveby">moveBy</a>(in Integer delta_pos_x, in Integer delta_pos_y);
    void <a href="#resizeto">resizeTo</a>(in Integer x_size, in Integer y_size);
    void <span>resizeBy</span>(in Integer delta_x_size, in Integer delta_y_size);
  }</code>
</pre>
  <h4 id="ww_status"><span class="secno">7.14.1 </span>The <code><dfn id="status0">status</dfn></code> attribute</h4>
  <p>The <code><a href="#status0"><span>status</span></a></code> attribute is
   used to display a status message in a widget overview/managment page, or
   similar. It is used to display a short piece of textual information to the
   user. An example could be a stock ticker that changes to show the value of
   the last updated stock, to then revert to displaying a default status
   message.</p>
  <p>When set, the <code><a href="#status0"><span>status</span></a></code>
   message is kept until it is either cancelled by clicking in the widget
   document that set the status, or the value of the attribute is set to the
   empty string.</p>
  <h4 id="ww_defaultStatus"><span class="secno">7.14.2 </span>The <code><dfn id="defaultstatus">defaultStatus</dfn></code> attribute</h4>
  <p>The <code><a href="#defaultstatus"><span>defaultStatus</span></a></code>
   attribute, when set provides a default status message which is to be
   displayed in a widget management page, or other widget overview mechanism</p>
  <p>When the value of this attribute is non-null, an action that cancels the
   window.status should bring up the contents of the <code><a href="#defaultstatus"><span>defaultStatus</span></a></code> attribute in
   place of the original/system-provided status message. If the value is null
   or the empty string, the widget runtime should fall back to a
   system-provided message.</p>
  <h4 id="moveto_method"><span class="secno">7.14.3 </span>The <code><dfn id="moveto">moveTo</dfn></code>() method</h4>
  <p>When the widget is rendering in a context where the position of the
   widget may be changed, the <code><a href="#moveto"><span>moveTo</span></a></code>() method sets the position
   of the widget. The method accepts two arguments, <code>pos_x</code> and
   <code>pos_y</code>, both Integer values, which are x and y coordinates
   defined by a coordinate system the flat cartesian surface whose origin
   (0,0) is at the top left corner of the available viewport, with the
   coordinate space having x values increasing when going right, and y values
   increasing when going down.</p>
  <h4 id="moveby_method"><span class="secno">7.14.4 </span>The <code><dfn id="moveby">moveBy</dfn></code>() method</h4>
  <p>When the widget is rendering in a context where the position of the
   widget may be changed, the <code><a href="#moveby"><span>moveBy</span></a></code>() method moves the widget in
   the x and/or y direction, using the arguments, the integer values
   <code>delta_pos_x</code> and <code>delta_pos_y</code>, defined by a
   coordinate system the flat cartesian surface whose origin (0,0) is at the
   top left corner of the available viewport, with the coordinate space
   having x values increasing when going right, and y values increasing when
   going down. Negative values for both arguments are accepted, and a
   negative value for either argument means that the widget should move
   towards respectively the top or the left of the viewport.</p>
  <h4 id="resizeto_method"><span class="secno">7.14.5 </span>The <code><dfn id="resizeto">resizeTo</dfn></code>() method</h4>
  <p>When the widget is rendering in a context where the size of the widget
   may be changed, the <code><a href="#resizeto"><span>resizeTo</span></a></code>() method sets the new
   size of the widget, using the Integer arguments <code>size_x</code> and
   <code>size_y</code>, respectively. Setting the size using resizeTo() <em class="ct">must</em> produce exactly the same dimensions the for the
   widget, as if they appeared in the widget configuration document values
   for the <a href="#width_element">width</a> and <a href="#height_element">height</a> elements. Both the <code>size_x</code>
   and <code>size_y</code> arguments value must be larger than 1, and a call
   to <code><a href="#resizeto"><span>resizeTo</span></a></code>() with</p>
  <h4 id="resizeby_method"><span class="secno">7.14.6 </span>The
   <code><span>resizeBy</span></code>() method</h4>
  <p>The <code><span>resizeBy</span></code>() method should resize the widget
   by adding the values of the argument <code>delta_x_size</code> to the
   current value for the widget width, and add the <code>delta_y_size</code>
   to the current height of the widget, measured in pixels. The resulting
   dimensions gathered from such addition <em class="ct">must</em> produce
   exactly the same dimensions the for the widget, as if the calculated
   dimensions appeared in the <a href="#widget_configuration_document0">widget configuration document</a>
   values for the <a href="#width_element">width</a> and <a href="#height_element">height</a> elements. Negative values for both
   arguments are accepted, as long as the resulting calculated size remains
   larger than 1&#xD7;1 pixel, in which case the
   <span><code>resizeBy</code></span>() method should result in no change to
   the widget size.</p>
  <h4 id="storing_geometry_information"><span class="secno">7.14.7
   </span>Storing geometry information</h4>
  <p>When a successful resize of the widget has been performed using any of
   the four mentioned, the resulting values should be stored, and used in
   place of any values specified in the widget configuration document.</p>
  <h3 id="the_widgetmodechangeevent_interface"><span class="secno">7.15
   </span>The <a href="#widgetmodechangeevent"><code>WidgetModeChangeEvent</code></a>
   interface</h3>
  <p>When the value of the <code><a href="#o-widget-mode">-o-widget-mode</a></code> CSS attribute changes, the
   <code>widgetmodechange</code> is dispatched on the <code><a href="#widget">Widget</a></code> object. When the event is dispatched, the
   event object <em class="ct">must</em> have a <code><a href="#widgetmode">widgetMode</a></code> attribute that corresponds to the
   current rendering mode. The value must be one of those mentioned for the
   <code><a href="#widgetmode"><span>widgetMode</span></a></code> attribute
   on the <code><a href="#widget"><span>Widget</span></a></code> interface.</p>
  <p>The <code><a href="#widgetmodechangeevent"><span>WidgetModeChangeEvent</span></a></code>
   must not bubble, must not be cancelable and must implement the Event
   interface [DOM3Events]. The event has no namespace (Event.namespaceURI is
   null).</p>
  <pre class="idl">
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
  <h3 id="the_resolutionevent_interface"><span class="secno">7.16 </span>The
   <a href="#resolutionevent"><code>ResolutionEvent</code></a> interface</h3>
  <p>The <var><code>resolution</code></var> is dispatched on the <code><a href="#widget"><span>widget</span></a></code> object when the width or
   height values of the attached display object changes. It must not bubble,
   must not be cancelable and must implement the Event interface
   [DOM3Events]. The event has no namespace (Event.namespaceURI is null).</p>
  <p>When dispatched, the event object <em class="ct">must</em> have two
   attributes, <code>width</code> and <code>height</code> corresponding to
   the new available width and height for the widget. These two values <em class="ct">should</em> correspond to the values <code>availWidth</code>
   and <code>availHeight</code> on the <code>Screen</code> interface.</p>
  <pre class="idl">
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
</pre>
  <h2 id="autodiscovery"><span class="secno">8 </span>Widget autodiscovery</h2>
  <h3 id="autodisco_purpose"><span class="secno">8.1 </span>Purpose</h3>
  <p>The purpose of Widget autodiscovery is to enable clients who know a URI
   of a Web page to identify and find the location of a widget associated
   with said Web page. A widget-aware Web client should offer a mechanism
   that exposes the presence of the widget to the user, and offer a mechanism
   for installing the widget.</p>
  <h3 id="autodisco_element"><span class="secno">8.2 </span>Definition</h3>
  <p>A Widget autodiscovery element is a link element, as defined in section
   12.3. of <a href="#refsHTML401">[HTML401]</a>. As with other link
   elements, an autodiscovery element may appear in the <code>head</code>
   element of an HTML or XHTML document, but it must not appear inside the
   <code>body</code> element. An example autodiscovery element looks like
   this:</p>
  <pre class="example">
<code> &lt;link
  type=&quot;application/x-opera-widgets&quot; rel=&quot;alternate&quot;
  href=&quot;http://widgets.example.com/example.zip&quot; title=&quot;An Example
  Widget&quot;
/&gt; </code> 
</pre>
  <h3 id="autodisco_html_relation"><span class="secno">8.3
   </span>Relationship to HTML and XHTML</h3>
  <h4 id="autodisco_syntax_inhertiance"><span class="secno">8.3.1
   </span>Syntax rules inherited from HTML and XHTML</h4>
  <p>When a widget autodiscovery element appears in a <a href="#refsHTML401">[HTML401]</a> or <a href="#refsXHTML10">[XHTML10]</a>
   document, the element shares all the syntax rules and restrictions of
   other markup elements.</p>
  <h4 id="autodisco_multiple_link"><span class="secno">8.3.2 </span>Multiple
   autodiscovery elements</h4>
  <p>A document <em class="ct">may</em> contain multiple autodiscovery
   elements. A User Agent <em class="ct">should</em> present an installation
   option for all auto discovered widgets to the user, listed in the order of
   appearance in the source code.</p>
  <p>A User Agent that only presents one auto discovered widget to the user
   <em class="ct">should</em> choose the first auto discovered widget for
   installation whenever the user opts to install the widget.</p>
  <h3 id="autodisco_req_attrs"><span class="secno">8.4 </span>Required
   attributes</h3>
  <h4 id="autodisco_type_attr"><span class="secno">8.4.1 </span>The
   <code>type</code> attribute</h4>
  <p>The <code>type</code> attribute <em class="ct">must</em> be present in a
   widget autodiscovery element. The value of the type attribute must be an
   Internet Media type, and the media type <em class="ct">must</em> be
   <var>application/x-opera-widgets</var>.</p>
  <h4 id="autodisco_rel_attr"><span class="secno">8.4.2 </span>The
   <code>rel</code> attribute</h4>
  <p>The <code>rel</code> attribute <em class="ct">must</em> be present in a
   widget autodiscovery element. As defined in section 6.12 of <a href="#refsHTML401">[HTML401]</a>, the value of the rel attribute is a
   space-sparated list of keywords. The list of keywords must include the
   keyword <var>alternate</var> in uppercase, lowercase, or mixed case.</p>
  <h4 id="autodisco_href_attr"><span class="secno">8.4.3 </span>The
   <code>href</code> attribute</h4>
  <p>The <code>href</code> attribute must be present in a widget
   autodiscovery element, and its value must be the <abbr title="Uniform   Resource Identifier">URI</abbr> of the widget. The value may be a relative
   URI, and if so, clients must resolve it to a full URI, using the
   document&#x2019;s base URI. The URIs must conform to <a href="#refsRFC3987">[RFC3987]</a>.</p>
  <h3 id="autodisco_opt_attrs"><span class="secno">8.5 </span>Optional
   attributes</h3>
  <h4 id="autodisco_title_attr"><span class="secno">8.5.1 </span>The title
   attribute</h4>
  <p>The title attribute <em class="ct">may</em> be present in a widget
   autodiscovery element. A User-Agent <em class="ct">should</em> treat the
   value of the title attribute as a human-readable title for the widget, and
   the User-Agent <em class="ct">may</em> present this title to the user.</p>
  <h2 class="no-num" id="acknowledgments">Acknowledgements</h2>
  <ul>
   <li>The specification for the <a href="#widget_object">widget object</a>
    builds on Apple&#x2019;s <a href="#refsDashboard">[Dashboard]</a>
    reference.</li>
  </ul>
  <ul>
   <li><a href="#autodiscovery">Widget Autodiscovery</a> in large parts
    builds on the <a href="#refsAtomAutodiscovery">[AtomAutodiscovery]</a>
    specification.</li>
  </ul>
  <h2 class="no-num" id="references">References</h2>
  <dl>
   <dt id="refsRFC2119">[RFC2119]</dt>
   <dd><a href="http://www.ietf.org/rfc/rfc2119">Key words for use in
    RFCs to Indicate Requirement Levels</a>, S. Bradner. IETF, March
    1997. RFC2119 is available at http://www.ietf.org/rfc/rfc2119</dd>
   <dt id="refsZIP">[ZIP]</dt>
   <dd><a href="http://www.pkware.com/business_and_developers/developer/popups/appnote.txt">.ZIP
    File Format Specification</a>. PKWare Inc., January 2006 The .ZIP
    File Format Specification is available at
    http://www.pkware.com/business_and_developers/developer/popups/appnote.txt</dd>
   <dt id="refsXML10">[XML10]</dt>
   <dd><a href="http://www.w3.org/TR/REC-xml/">Extensible Markup
    Language (XML) 1.0 (Third Edition)</a>. Tim Bray, Jean Paoli, C.
    M. Sperberg-McQueen, Eve Maler, Fran&#xE7;ois Yergeau. W3C, February
    2004. Extensible Markup Language (XML) 1.0 specifciation is available at
    http://www.w3.org/TR/REC-xml/</dd>
   <dt id="refsCSS21">[CSS21]</dt>
   <dd><a href="http://www.w3.org/TR/CSS21/">Cascading Style Sheets,
    level 2 revision 1; CSS 2.1 Specification</a>. Bert Bos, Ian
    Hickson, Tantek &#xC7;elik, H&#xE5;kon Wium Lie. W3C, April 2006. The
    CSS 2.1 Specification can be found at http://www.w3.org/TR/CSS21/</dd>
   <dt id="refsRFC3987">[RFC3987]</dt>
   <dd><a href="http://www.ietf.org/rfc/rfc3987">Internationalized
    Resource Identifiers (IRIs)</a> . M. Duerst, M. Suignard. IETF,
    January 2005. RFC3987 is available at http://www.ietf.org/rfc/rfc3987</dd>
   <dt id="refsDashboard">[Dashboard]</dt>
   <dd><a href="http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html">
    Dashboard Reference</a>. Apple Computer, Inc, May 2006. The Apple
    Dashboard Reference is available at
    http://developer.apple.com/documentation/AppleApplications/Reference/Dashboard_Ref/index.html</dd>
   <dt id="refsHTML401">[HTML401]</dt>
   <dd><a href="http://www.w3.org/TR/html401/">HTML 4.01
    Specification</a>, Dave Raggett, Arnaud Le Hors, Ian Jacobs. W3C,
    December 1999. The HTML 4.01 Specification is available at
    http://www.w3.org/TR/html401/</dd>
   <dt id="refsXHTML1">[XHTML1]</dt>
   <dd><a href="http://www.w3.org/TR/xhtml1/">XHTML&#x2122; 1.0 The
    Extensible HyperText Markup Language (Second Edition)</a>, S.
    Pemberton et al. W3C, January 2000. The XHTML 1.0 specification is
    available at http://www.w3.org/TR/xhtml1/</dd>
   <dt id="refsAtomAutodiscovery">[AtomAutodiscovery]</dt>
   <dd><a href="http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html">Atom
    Autodiscovery (draft)</a>, M. Pilgrim, P. Ringnalda. ATOMPUB
    Working Group, May 2005-. The Atom Autodiscovery specification draft is
    available at
    http://philringnalda.com/rfc/draft-ietf-atompub-autodiscovery-01.html</dd>
   <dt id="refsSVG">[SVG]</dt>
   <dd><a href="http://www.w3.org/TR/SVG/">Scalable Vector Graphics
    (SVG) 1.1 Specification</a>, Jon Ferraiolo, FUJISAWA Jun, Dean Jackson. W3C. The SVG 1.1 specification is available
    at http://www.w3.org/TR/SVG/</dd>
   <dt><dfn id="dom3core">[DOM3Core]</dfn></dt>
   <dd><a href="http://www.w3.org/TR/DOM-Level-3-Core/">Document Object
    Model (DOM) Level 3 Core Specification</a>. A. Le Hors, P. Le
    Hégaret, L. Wood, G. Nicol, J. Robie, M. Champion, S. Byrne, editors.
    World Wide Web Consortium, April 2004.</dd>
  </dl>
  <h2 class="no-num" id="positioning-sizing">Appendix A: Widget positioning
   and sizing</h2>
  <p>This appendix to the widget specification provides algorithm to
   determine widget size and position, for cases where either the window
   manager provides the initial widget size, or on platforms where widgets
   need to separate the concepts of &quot;viewport size&quot; and</p>
  <h3 id="algorithm_for_widget_sizing"><span class="secno">8.6
   </span>Algorithm for widget sizing</h3>
  <p>The following algorithm is used for determining the start size of a
   widget.</p>
  <ol>
   <li>The widget configuration document is opened</li>
   <li>Read the &#x2018;<code class="property"><a href="#defaultmode">defaultmode</a></code>&#x2019; attribute of the widget
    element in the widget configuration document</li>
   <li>If the widget has been started in the past, and the defaultmode value
    is &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019;, read the stored &#x2018;<code class="css">start width</code>&#x2019; and &#x2018;<code class="css">start
    height</code>&#x2019; values, and go to step 11</li>
   <li>If the widget has been started in the past, and the defaultmode is
    &#x2018;<code class="property">application</code>&#x2019;, and the value of
    &#x2018;<code class="css">start width</code>&#x2019; exceeds the available
    rendering surface width (In other words, when the geometry of the
    rendering surface has changed), let the &#x2018;<code class="css">start
    width</code>&#x2019; be equal to the available rendering surface width,
    and continue to the next step.</li>
   <li>If the widget has been started in the past, and the defaultmode is
    &#x2018;<code class="property">application</code>&#x2019;, and the value of
    &#x2018;<code class="css">start height</code>&#x2019; exceeds the available
    rendering surface height (In other words, when the geometry of the
    rendering surface has changed), let the &#x2018;<code class="css">start
    width</code>&#x2019; be equal to the available rendering surface width,
    and continue to step 11.</li>
   <li>If the value for defaultmode is &#x2018;<code class="property">fullscreen</code>&#x2019;, and the widget supports the
    concept of fullscreen/maximized applications, let the &#x2018;<code class="css">start width</code>&#x2019; and &#x2018;<code class="css">start
    height</code>&#x2019; values be determined by the maximum available
    rendering surface width and height, and go to step 11.</li>
   <li>If the value for defaultmode is &#x2018;<code class="property">fullscreen</code>&#x2019;, and the runtime does not
    support the &#x2018;<code class="property">fullscreen</code>&#x2019; mode,
    but supports the &#x2018;<code class="property">application</code>&#x2019;
    mode, assume that the defaultmode is &#x2018;<code class="property">application</code>&#x2019;, go to step 8.</li>
   <li>If the value for defaultmode is &#x2018;<code class="property">application</code>&#x2019;, and the runtime does not
    support the &#x2018;<code class="property">application</code>&#x2019; mode,
    but supports &#x2018;<code class="property">fullscreen</code>&#x2019;,
    assume that the defaultmode is set to &#x2018;<code class="property">fullscreen</code>&#x2019;, and go to step 5.</li>
   <li>If the value for defaultmode is &#x2018;<code class="property">application</code>&#x2019; and the platform supports the
    mode, and allows widgets to set their own size:
    <ol>
     <li>Read the &#x2018;<code class="property">width</code>&#x2019; element
      from widget configuration document. If this value is less than the
      maximum available width, store this value as &#x2018;<code class="css">start width</code>&#x2019;.</li>
     <li>If the &#x2018;<code class="property">width</code>&#x2019; value is
      larger than the available width, allocate the largest available width,
      and store it in &#x2018;<code class="css">start width</code>&#x2019;.</li>
     <li>Read the &#x2018;<code class="property">height</code>&#x2019; element
      from widget configuration document. If this value is less than the
      maximum available height, store this value as &#x2018;<code class="css">start width</code>&#x2019;.</li>
     <li>If the &#x2018;<code class="property">height</code>&#x2019; value is
      larger than the available height, allocate the largest available
      height, and store it in &#x2018;<code class="css">start
      height</code>&#x2019;.</li>
     <li>Continue to step 11</li>
    </ol>
   </li>
   <li>If the value for defaultmode is one of &#x2018;<code class="property">application</code>&#x2019; or &#x2018;<code class="property">fullscreen</code>&#x2019;, and neither mode is supported
    by the widget runtime, assume that the value is &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019;, and continue
    to step 10</li>
   <li>If the application mode is &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019; and the mode is supported by the
    runtime, use the values of the &#x2018;<code class="property">width</code>&#x2019; and &#x2018;<code class="property">height</code>&#x2019; element as values for &#x2018;<code class="css">start width</code>&#x2019; and &#x2018;<code class="css">start
    height</code>&#x2019;, respectively, and go to step 10.</li>
   <li>Determine the initial widget position as described in the algorithm
    below. Create a widget window using the widths &#x2018;<code class="css">start width</code>&#x2019; and &#x2018;<code class="css">start
    height</code>&#x2019; as described as the initial start width and height.
    and start the widget. Store the &#x2018;<code class="css">start
    width</code>&#x2019; and &#x2018;<code class="css">start
    height</code>&#x2019; values permanently.</li>
  </ol>
  <h3 id="initial_position_algorithm"><span class="secno">8.7
   </span>Determining the initial widget position</h3>
  <p>Use the following algorithm to determine the initial widget position</p>
  <ol>
   <li>If the widget has been started before, go to step 4.</li>
   <li>Let the initial rendering position of the widget be determined by the
    upper left corner, using the values &#x2018;<code class="css">start_x</code>&#x2019; and &#x2018;<code class="css">start_y</code>&#x2019;</li>
   <li>If the widget has the defaultmode &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019;, determine the initial position
    as thus:
    <ol>
     <li>Read the assumed &#x2018;<code class="css">start width</code>&#x2019;
      value as determined in the sizing algorithm. If the width of
      &#x2018;<code class="css">start width</code>&#x2019; is equal to, or
      larger than the width available to the widget, let the widget&#39;s upper
      left start position, &#x2018;<code class="css">start x</code>&#x2019;, be
      0, and continue to step 3.3.</li>
     <li>If the assumed &#x2018;<code class="css">start width</code>&#x2019;
      value is less than the available width, let the value &#x2018;<code class="css">start_x</code>&#x2019; be calculated according to the
      following formula: start_x = (available width-start width)/2.
      Otherwise, let the start_x value be 0.</li>
     <li>Read the assumed &#x2018;<code class="css">start height</code>&#x2019;
      value as determined in the sizing algorithm, and continue.</li>
     <li>If the assumed &#x2018;<code class="css">start height</code>&#x2019;
      value is less than the available height, let the value &#x2018;<code class="css">start_y</code>&#x2019; be calculated according to the
      following formula: start_y = (available height-start height)/2.
      Otherwise, let the start_y value be 0.</li>
    </ol>
   </li>
   <li>Position the widget according to the start_x and start_y values, and
    display the widget.</li>
  </ol>
  <h3 id="positioning_other"><span class="secno">8.8 </span>Other</h3>
  <p>These are implementation guides for resizing, positioning and widget
   types, this algorithm is considered informative.</p>
  <ol>
   <li>On window managers that support window states like &#x2018;<code class="property">maximized</code>&#x2019; and &#x2018;<code class="css">restored/unmaximized</code>&#x2019;, assume that the
    &#x2018;<code class="property">fullscreen</code>&#x2019; mode equals the
    &#x2018;<code class="property">maximized</code>&#x2019; mode, and that
    &#x2018;<code class="property">application</code>&#x2019; equals
    &#x2018;<code class="css">restored/unmaximized</code>&#x2019; mode.</li>
   <li>When a widget is moved or resized using windows.move(To|By), and
    windows.resize(To|By), use the new values for widget size and position as
    determined after these method calls as new values for &#x2018;<code class="css">start width</code>&#x2019;, &#x2018;<code class="css">start
    height</code>&#x2019;, &#x2018;<code class="css">start_x</code>&#x2019;, and
    &#x2018;<code class="css">start_y</code>&#x2019;. These values <em class="ct">should</em> be stored and used when a widget is started again.</li>
   <li>The widget&#39;s own dimensions <em class="ct">must</em> be respected for
    widgets rendering using the &#x2018;<code class="property"><a href="#widget">widget</a></code>&#x2019; rendering mode.</li>
   <li>When the widget is an application or fullscreen widget, the widget
    runtime <em class="ct">may</em> ignore calculated positioning and sizing
    information.</li>
  </ol>
  <h3 id="virtual_viewports"><span class="secno">8.9 </span>Virtual viewport
   resizing</h3>
  <p>Certain window managers and systems may not allow chromeless windows to
   be dragged off the viewport, leaving the widget with little surface area
   in which the user can move the widget. This section describes an algorithm
   to mitigate the problem. On such platforms, this algorithm, or a work
   alike must be implemented to facilitate a good user experience.</p>
  <h4 class="no-num no-toc" id="relation_to_the_width_element">Relation to
   the <span>width</span> element</h4>
  <p>Note that the <code>width</code> element represents the canvas width,
   and not the window width. Under most circumstances, the window width and
   canvas width should be the same, but certain platforms may implement a
   window width that is different from the canvas width, using the following
   algorithm:</p>
  <ul>
   <li>If the window manager does not allow chromeless windows to be dragged
    off the desktop, the user agent may resize the window according to the
    following algorithm:
    <ol>
     <li>Scan the leftmost vertical line of the widget. If this line only
      conta/spanins transparent pixels, decrease width by one.</li>
     <li>Scan the rightmost vertical line of the widget. If this line only
      contains transparent pixels, decrease width by one.</li>
     <li>Repeat 1) and 2) until the first non-transparent pixel is found.</li>
    </ol>
   </li>
   <li>The recalculated window width <em class="ct">must not</em>, under any
    circumstance cause visible pixels to be clipped from the widget.</li>
  </ul>
  <h4 class="no-num no-toc" id="relation_to_the_height_element">Relation to
   the <span>height</span> element</h4>
  <p>Note that the <code>height</code> element represents the canvas height,
   and not the window height. Under most circumstances, the window height and
   canvas height should be the same, but certain platforms may implement a
   window height that is different from the canvas height, using the
   following algorithm:</p>
  <ul>
   <li>If the window manager does not allow chromeless windows to be dragged
    off the desktop, the user agent may resize the window according to the
    following algorithm:
    <ol>
     <li>Scan the topmost horizontal line of the widget. If this line only
      contains transparent pixels, decrease width by one.</li>
     <li>Scan the bottom horizontal line of the widget. If this line only
      contains transparent pixels, decrease width by one.</li>
     <li>Repeat 1) and 2) until the first non-transparent pixel is found</li>
    </ol>
   </li>
   <li>The recalculated window height <em class="ct">must not</em>, under any
    circumstance cause visible pixels to be clipped from the widget.</li>
  </ul>
<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
