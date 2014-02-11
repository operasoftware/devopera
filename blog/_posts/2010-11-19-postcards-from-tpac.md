---
title: Postcards from TPAC
authors:
- brucelawson
tags:
- css
- css3
- html5
- svg
- web applications
- w3c
- standards
- blog
layout: article
---
<p>Every year, the top Standardistas of the world jet off to <a herf="http://www.w3.org/2010/11/TPAC/">TPAC</a>: a glamorous foreign location where they drink Daquiris, dance the rhumba til dawn, build sand castles and talk about standards. It&#39;s like being James Bond, but with a License to Spec rather than kill. </p>
<p>Various Opera staffers email reports of their trip to an internal mailing list. As an experiment, we&#39;re reproducing them here. These are the impressions of each named reporter, at the time of writing. Their opinions might change subsequently, and their opinions are not necessarily shared by other reporters or Opera as a company. These are emphatically <em>not</em> official minutes (those will be published by the W3C), nor commitments by Opera to support any specific technology. With those caveats in mind, enjoy these Postcards from TPAC. </p>
<ul>
  <li><a href="#geo">Geolocation Working Group</a></li>
  <li><a href="#webapps">Web Applications Working Group</a></li>
  <li><a href="#css">CSS Working Group</a></li>
  <li><a href="#svg">SVG Working Group</a></li>
  <li><a href="#html">HTML Working Group</a></li>
</ul>
<h3 id="geo">Geolocation Working Group</h3>
Opera&#39;s Lars Erik Bolstad chairs the <a href="http://www.w3.org/2008/geolocation/">Geolocation Working Group</a>.

The Geolocation Working Group had a two day meeting last week. Here&#39;s a summary. (<a href="http://www.w3.org/2010/11/04-geolocation-minutes.html">Raw meeting minutes here</a>.)
<p>In addition to the regular crowd of implementors we were happy to have a representative of the Microsoft IE team attending our meeting this time.  Meeting participants this time included Google, Microsoft, IBM, LG, China Unicom, Telecom Italia, and NEC in addition to Opera.</p>
The current Geolocation API specification is currently in <a href="http://en.wikipedia.org/wiki/W3C_recommendation#Candidate_Recommendation_.28CR.29">Candidate Rec</a> and a few formalities remain before we can request the transition to <a href="http://en.wikipedia.org/wiki/W3C_recommendation#Proposed_Recommendation_.28PR.29">Proposed Recommendation</a>.
<p>We&#39;re planning to produce an implementation report by which will document that the API itself can indeed be implemented, and that there are at least two real-world web sites that comply with the normative privacy requirements for recipients of location data. As for existing implementations of the API we have quite a few by now:
  Desktop: Opera, Chrome, Firefox, Safari.
  Mobile: Opera, Chrome, Safari, Fennec.</p>
<p>We&#39;re (soon to be) <a href="http://www.w3.org/2008/geolocation/charter/charter-2.html">chartered</a> to work on the next version of the Geolocation API (&quot;Level 2&quot;), as well as the <a href="http://dev.w3.org/geo/api/spec-source-orientation.html">Device Orientation Event specification</a>. </p>
<p>The Level 2 API spec will add the ability to get the location as an Address, and we&#39;ve already spent quite some time discussing various proposals for an address format. The IETF crowd would like us to directly adapt the Geopriv &quot;civic address&quot; format specified in RFCs <a href="http://tools.ietf.org/html/rfc4119">4119</a> and <a href="http://www.ietf.org/rfc/rfc5139.txt">5139</a>, but there&#39;s strong pushback from implementors who feel this is overkill. The current proposal is to have a simpler format, but to specify a mapping from the Geopriv format to the Geolocation address format, and to include the raw, unparsed Geopriv address in one of the fields. </p>
<p>The Device Orientation Event specification introduces new DOM events for detecting the physical orientation and movement of a device, based on combining input from an accelerometer, a magnetometer (compass) and possibly also a gyroscope. The current proposal is pretty much based on the Android APIs. </p>
<h3 id="webapps">Web Applications Working Group</h3>
<p>Anne van Kesteren represented Opera on the <a href="http://www.w3.org/2008/webapps/">Web Applications Working Group</a>. WebApps is the group that took over a lot from HTML5 and already had a lot to begin with. Arthur Barstow (Nokia) and Charles McCathieNevile (Opera) are Co-Chairs.</p>
<h4>Web Workers</h4>
<p>Ian Hickson does not have bandwidth to deal with the comments needed to get to Candidate Recommendation status. I said I would look into getting our test suite published.</p>
<h4>Clipboard</h4>
<p>Drag and drop will be left to HTML5, as well as the actual ClipboardData interface. WebApps might do copy and paste when Hallvord [from Opera] contributes his specification.</p>
<h4>WebSQL</h4>
<p>Will be republished as WG Note.</p>
<h4>Indexed DB</h4>
<p>Pretty detailed discussion on the details of this new storage proposal. Indexed DB is more low-level than WebSQL and apart from Microsoft the implementations so far are on top of SQLite.</p>
<h4>DOM Events</h4>
<p>Keyboard events will get an inputLocale attribute that identifies the type of keyboard in use. This allows editing applications to implement smart quotes and bidirectional switching using heuristics that are hopefully mostly correct. Removing mutation events was discussed, but it seems that Microsoft will add support for some mutation events in Internet Explorer 9. </p>
<h4>File API</h4>
<p>Apart from renaming of the URL methods, nothing changes.</p>
<h4>XMLHttpRequest + Widgets</h4>
<p>Discussed the origin problem Widgets have. One idea was that the origin could be computed from the resource package. Would require servers to keep a list of supported Widgets as they can be updated over time.</p>
<h4>WebIDL</h4>
<p>The former editor got hired by Mozilla and can now work on it again. Coordination with TC39 (in charge of ECMAScript) is also starting again.</p>
<h4>WebSockets</h4>
<p>Brief discussion of how the IETF is taking ages [standardising the WebSockets protocol] and how it would be cool to reuse Web Sockets for P2P and have it on top of UDP. Nothing concrete.</p>
<h4>Programmable Cache</h4>
<p><a href="http://dev.w3.org/2006/webapi/DataCache/">Programmable Cache</a> was dropped.</p>
<h4>Selectors API</h4>
<p>Awaits WebIDL clarifications.</p>
<h4>XBL2</h4>
<p>Awaits implementor interest.</p>
<h4>CORS and UMP</h4>
<p>We are going to try to move CORS to Last Call and see what happens.</p>
<h4>TAG</h4>
<p>Short discussion with the TAG about architecture of web applications. The TAG will try to sort it out.</p>
<h4>Console API</h4>
<p>The idea was aired to work on window.console as web pages rely on that now. Nothing was decided.</p>
<h4>XMLHttpRequest</h4>
<p>Basically awaiting implementations to align with the test suite and each other. Also discussed the test suite and how it can be moved to w3.org.</p>
<h4>Web DOM Core</h4>
<p>Also awaits implementations to act in removing certain features. Also discussed scope. Maybe the basic event interfaces will move here.</p>
<h3 id="css">CSS Working Group</h3>
<p>Håkon Wium Lie  spent four days at W3C&#39;s TPAC in Lyon: two at the CSS WG, one at the
  plenary, one at the WebFonts WG.</p>
<p>The CSS WG is trying to finalize CSS 2.1. Remaining issues in the
  specification are few, and the focus is on tests and implementation
  reports. In principle, this leaves more time to work on CSS3 specifications.</p>
<p>One of them is <a href="http://www.w3.org/TR/css3-multicol/">CSS3 Multi-column</a>. Opera currently has the most complete
  implementation; we support all properties [in internal builds at time of writing], I believe, including <code><a href="http://www.w3.org/TR/css3-multicol/#column-span">column-span</a></code>. </p>
<p>The WG clarified several minor points in the specification; the most
  radical change was <code>column-span: 1</code> to <code>column-span: none</code>.</p>
<h4>Layout modules</h4>
<p>One area that is emerging is template/grid/flexbox layout. Ale
  Mogilevsky from Microsoft presented his &quot;<a href="http://www.interoperabilitybridges.com/css3-grid-align/ ">CSS Grid Alignment Level 3</a> proposal.



  The functionality offered is similar to the <a href="http://www.w3.org/TR/css3-layout/">Template Layout Module</a>.</p>
<p>I suggested that the working group work out some use cases to compare
  the various proposals. Flexboxes (<a href="http://dev.w3.org/csswg/css3-flexbox/">http://dev.w3.org/csswg/css3-flexbox/</a> and <a href="http://www.w3.org/TR/css3-flexbox/">http://www.w3.org/TR/css3-flexbox/</a>)
  are also relevant for this; ideally
  the more advanced layout models should build on terminology from
  flexboxes.</p>
<h4>Generated Content and Printed Media</h4>
<p>A new hyphen property was added to <a href="http://www.w3.org/TR/css3-gcpm/">GCPM</a>: <code><a href="http://dev.w3.org/csswg/css3-gcpm/#the-hyphenate-last-line-avoid-property">hyphenate-last-line-avoid</a></code>. </p>
<p> The <code>hyphenate-*</code> properties have so far only been implemented in batch
  processors. However, I believe browsers also will benefit from
  supporting hyphenation. One problem in doing so is that hyphenation is
  language-specific. The TeX community has developed <a href="http://tug.org/svn/texhyphen/trunk/hyph-utf8/tex/generic/hyph-utf8/patterns/txt/">word patterns</a> that
  one should be able to reuse, though.</p>
<h4>CSS Fonts</h4>
<p>There were discussions on CSS3 Fonts and how to interface the descriptor
  syntax with OpenType Features. Mozilla demo&#39;d support for OpenType
  Features at the plenary day. Very useful for serious typographers.</p>
<h4> Writing modes </h4>
<p><a href="http://dev.w3.org/csswg/css3-writing-modes/">Writing modes</a> was the most controversial discussion.</p>
<p>The editor&#39;s draft outlines a strategy for adding ~30 new properties
  and many new values to support style sheets that specify values based
  on the writing mode of an element. This is a big deal -- never has 30
  properties been added in one go, and it touches upon many areas: i18n,
  data structures for CSS properties, CSS authoring, ebooks etc.</p>
<p>I believe these to be true:</p>
<ul>
  <li> LTR or RTL writing is a fundamental feature of a document. As
    such, it should be specified in the document and not in the style
    sheet. (However, valued can be propagated through CSS properties,
    which are handy for such purposes.)</li>
  <li>horizontal or vertical writing is mostly a matter of presentation.
    A book in Japanese or (traditional) Chinese can be presented
    horizontally or vertically. As such, this belongs in the style
    sheet.</li>
  <li>some argue that it would be convenient for padding/margin/border
    properties to automatically switch direction based on the writing
    mode of the element. Potentially, style sheets can be shortened if
    this is added, but there is an implementation/education
    cost/specification maintenance cost.</li>
  <li>others think that the mapping to top/right/bottom/left (which
    exist in all cultures) can be handled with existing constructs,
    e.g., the lang attribute:
    <pre><code>:lang(ja) { ... }</code>
<code>:lang(en) { ... }</code></pre>
    Or, if we accept adding functionality, we could extend selectors
    on the left side. E.g.:
    <pre><code> p:rtl { margin-left: 1em }</code></pre>
  </li>
  <li>writing-direction-dependent switching is only one of several types
    of indirection. Another one is the inside/outside of a printed
    page. For example, you may want to float a figure to the outside
    of a page, or set a border on the outside.</li>
</ul>
<p>The ebook community, which needs to present books both horizontally
  and vertically, have found a solution in <a href="http://lists.w3.org/Archives/Public/www-style/2010Oct/0618.html">alternative style sheets which describe horizontal/vertical presentations</a>. </p>
<p>Also, there&#39;s a <a href="http://lists.w3.org/Archives/Public/www-style/2010Oct/0587.html">proposal for allowing &quot;logical&quot; values to the added tothe <code>margin</code> and <code>padding</code> shorthands</a>.</p>
<p>For now, the css3-writing-modes draft will move forward without the
  physical/logical parts. </p>
<h4>WebFonts</h4>
<p>The WebFonts group has a simple purpose in life: to get the <a href="http://dev.w3.org/webfonts/WOFF/spec/">WOFF</a> container to REC. The only controversial issue I can see is whether
  the WOFF format should imply a Same-Origin-Restriction. This is
  currently in the draft. I know there are different opinions inside
  Opera on this. Personally, I think it&#39;s a useful restriction as will
  will stop people from leeching bandwidth from unsuspecting web sites.
  And CORS can be used to relax the requirement.</p>
<h3 id="svg">SVG</h3>
<p>Erik Dahlstrom represented Opera at TPAC.</p>
<p>We met with parts of the CSS WG one afternoon to discuss transforms and animations and other CSS/SVG issues.</p>
<p>The overall picture is that Microsoft is pushing for an aggressive release schedule.</p>
<p>They want stable specs by June 2011 for:</p>
<ul>
  <li> transforms 2d/3d </li>
  <li> filters</li>
  <li> animations </li>
  <li> svg integration</li>
  <li>simplified svg DOM</li>
  <li> gradients (alower priority)</li>
</ul>
<p> More details: one animation model for the web (possibly some common middle ground between SMIL animations and CSS animations). The issue of how CSS transitions, animations and SMIL interacts needs some attention.</p>
<p> One specific use-case mentioned was ads: declarative animations that work on both SVG and HTML.</p>
<p> There will have to be a DOM API for the model too: for getting animation model state, for controlling animations (e.g pause/start/stop) and for creating and applying an animation to an element.</p>
<p> WG RESOLUTION: To have a proposal to have the same shared data model and functionality across SVG Animation and CSS Animation</p>
<h4> The SVG/CSS FX taskforce spec for 2d transforms in CSS</h4>
<p> Differences from current css2d transform draft make transform apply as a property in svg, aligns transform syntax with svg (and the DOM API methods, not yet committed though).</p>
<p> Work in progress: <a href="http://dev.w3.org/Graphics-FX/modules/2D-transforms/spec/2DTransforms.html">http://dev.w3.org/Graphics-FX/modules/2D-transforms/spec/2DTransforms.html</a>.</p>
<h4> Filters, masks and clip-path in CSS / HTML</h4>
<p> The group wants to move the filter spec into the SVG/CSS FX taskforce, and make filters/mask/clip-path usable outside of svg too.</p>
<h4> SVG Integration</h4>
<p><a href="http://dev.w3.org/SVG/modules/integration/SVGIntegration.html">http://dev.w3.org/SVG/modules/integration/SVGIntegration.html</a> This is to patch up some of the holes between CSS/SVG/HTML.
  The expectation is that this will allow the WG to make many tests for e.g different methods of inclusion of svg in html and css.</p>
<h4>Gradients</h4>
Work only starting up so far, sharing gradients between svg and css, possibly adding more advanced gradients to svg (<a href="http://tavmjong.free.fr/SVG/MESH/Mesh.html">mesh gradients</a>, diffusion curves).
<p> Problem with mesh gradients is mostly about ease of animating/authoring (more or less requires a tool for editing). Already used e.g by PDF/PS.</p>
<h4>Simplified SVG DOM (for SVG2)</h4>
<p><a href="http://www.w3.org/Graphics/SVG/WG/wiki/SVG_2_DOM">Some of the proposals and discussions</a> - </p>
<p>We had a report from Adrian Bateman (MS) on the new testing framework (test.w3.org).
  The tests for the 2d transforms spec will attempt to use this framework.
  We will explore crowdsourcing the review/submission of testcases in general.
  Long term plan is to move to using the new framework.</p>
<h4>SVG 1.1 Second Edition</h4>
<p> Work progressing, ~10 LC comments left to address. Needs to be done before the end of the year.</p>
<p>The WG aims to recharter in January</p>
<h3 id="html">HTML Working Group</h3>
<p>Anne van Kesteren attended on Opera&#39;s behalf.
<h4>Accessibility</h4>
<p> The a11y Task Force made a list of user requirements
  (about 100). During the meeting Frank Olivier from Microsoft went through
  the requirements with the HTML WG and we organized them. It turns out
  about 10 of them are applicable to the HTML5 specification and are not
  addressed yet. The HTML WG Co-Chairs as well as the W3C Interaction Domain
  Lead put their foot down with respect to accessibility potentially
  delaying the HTML5 Last Call. It was made clear that HTML5 is time driven,
  not feature driven. So if the work on these requirements is not complete
  by May next year, it will not happen.</p>
<h4>Media accessibility</h4>
<p>Microsoft is in principle okay with WebSRT, if it
  meets the accessibility requirements. Great news! The W3C indicated WebSRT
  would not be within charter and would require a new Working Group. I have
  made the Co-Chairs take an action to sort out how WebSRT can be done at
  the W3C.</p>
<h4>Testing</h4>
<p>It seems everyone is okay with using the JavaScript harness
  James Graham made. test.w3.org might become testw3.org or some such out of
  XSS concerns. Nobody really liked the automated test runner and in general
  it seems that instructions for writing tests are needed. </p>
<h4>IETF</h4>
<p> Discussion on how the IETF/IANA registries are out-of-date and
  hard to use. (E.g. for HTTP headers and URL schemes.) Either needs
  improvement or be replaced with a more useful registry on e.g. w3.org.
  Discussion on how restrictions on text/* media types make no sense for
  HTTP usage. (E.g. CRLF for line breaks, no UTF-16, defaults to US-ASCII.)
  And discussed the path forward with processing URLs - I think it will be
  <a href="http://tools.ietf.org/html/draft-abarth-url" target="_blank">http://tools.ietf.org/html/draft-abarth-url</a></p>
<h4>Semantics</h4>
<p>Short discussion over whether retrofitting<code> &lt;i&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;small&gt;</code>,
  etc. as being semantic elements rather than presentational was worth it
  and made sense. No real conclusion reached.</p>
The full minutes can be found at <a href="http://www.w3.org/2010/11/04-html-wg-minutes.html">http://www.w3.org/2010/11/04-html-wg-minutes.html</a> and <a href="http://www.w3.org/2010/11/04-html-wg2-minutes.html">http://www.w3.org/2010/11/04-html-wg2-minutes.html</a>. (<a href="http://www.w3.org/html/wg/wiki/TPAC_2010_Agenda">Agenda</a>.)</p>
