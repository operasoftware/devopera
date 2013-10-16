Title: Mobile style - CSS Mobile Profile 2.0
----
Date: 2008-09-03 12:01:59
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

<h2>Introduction</h2>
<p>Following on from my <a href="http://dev.opera.com/articles/view/mobile-markup-xhtml-basic-1-1/">previous article on mobile markup</a>, this article will cover the W3C’s recommended option for supplying style to your mobile documents—CSS Mobile Profile 2.0. I will introduce what is available in the mobile profile and how it differs from CSS 2.1; then, I will discuss progressive enhancement and applying more advanced styles to more capable devices.</p>

<h2>A note on mobile-specific versions</h2>
<p>This article will not cover the reasons why you should or should not create a mobile-specific version of your site.  For the pros and cons, consult the <a href="http://dev.opera.com/articles/view/mobile-markup-xhtml-basic-1-1/">previous article on XHTML Basic</a>, as the same reasons apply here, and the CSS Mobile Profile is often used hand in hand with XHTML Basic. </p>

<p>One point worth mentioning is that the CSS Mobile Profile need not just be used with a stripped-down mobile-specific version.  Using capabilities such as the handheld media type and media queries, it is possible to use the same markup as the desktop but send a separate style sheet to mobile devices.  You may want to consider using this approach and use the properties supported in CSS Mobile Profile for the mobile style sheet.  While the CSS Mobile Profile is quite restrictive in the properties it supports, it shouldn’t come as too much of a shock for those Web developers who are used to the restrictions imposed by IE 6 —the support levels are very similar between this spec and IE 6’s CSS support, minus the implementation bugs.</p>

<h2>Introducing CSS Mobile Profile 2.0</h2>
<p>As is the case with XHTML, there are two different style sheet variations that focus on mobile.  CSS Mobile Profile 1.0 is a W3C Candidate Recommendation, while WAP CSS is a specification from the WAP Forum (now the <a href="http://www.openmobilealliance.org/">Open Mobile Alliance</a>).  While they are different specifications, they are also both subsets of CSS 2.1, and the supported properties are very close.  The exception is that WAP CSS extends CSS 2.1 with some additional properties specified with the <code>-wap-</code> prefix (more about those later in this article).</p>

<p>The W3C is in the process of updating the CSS Mobile Profile spec, and the second version has just reached Candidate Recommendation.  The new version of the spec adds a few extra CSS 2 properties and takes the WAP extensions into account—this is the version we will focus on in this article, and it should be considered the baseline for CSS support in modern mobile browsers.  As is the case with markup, desktop-class mobile browsers such as those using Opera’s core rendering engine or WebKit offer CSS support well above this baseline. </p>

<h2>CSS Support in CSS Mobile Profile 2.0</h2>

<p>CSS Mobile Profile 2.0 is a subset of CSS 2.1, with additional properties from CSS 3.  Therefore, many developers will have the prior knowledge they need to get started right away, and browser support is generally quite good. An exception is the CSS 3 properties, which are not well defined yet and are not implemented in any browser to my knowledge. </p>
 
<p>While CSS 2.1 is not modularised like XHTML 1.1 or CSS 3, I’ve split the properties supported by CSS Mobile Profile 2.0 into the same modules used in CSS 3 to cut it down into bite-sized chunks, instead of a long list of properties.  I won&#39;t mention any CSS3 properties unless appropriate to the discussion of CSS2.1 properties, as the CSS 3 spec is a moving target.</p>

<h3>Selectors</h3>

<p>Supported selectors:  Universal selector (<code>*</code>), Type selectors (eg <code>h1</code>), Descendent selectors (eg <code>h1 p</code>), Child selectors (eg <code>h1 &gt; p</code>), Link pseudo-classes (eg <code>:link </code>  and <code>:visited </code>), Dynamic pseudo-classes (eg <code>:active </code>  and <code>:focus </code>), Class selectors (eg <code>.class-name</code>), ID selectors (eg <code>#id-name</code>), Grouping (eg <code>h1, h2, p</code>)</p>

<p>Unsupported selectors: <code>:first--child</code> pseudo-class, <code>:hover </code>  dynamic pseudo-class, <code>:lang() </code>  pseudo-class, <code>:first--letter</code>  pseudo-element, <code>:first--line</code>  pseudo-element, adjacent selectors (eg <code>h1 + p</code>),  Attribute selectors (eg <code>a[href]</code>,  <code>a[target=&quot;_blank&quot;]</code>) </p>

<p>All supported selectors are required for a browser to be considered compliant. </p>

<h3>Background &amp; Borders</h3>

<p>Supported properties: <code>background</code>, <code>background-color</code>, <code>background-image</code>, <code>background-repeat</code>, <code>background-attachment</code>, <code>background-position</code>, <code>border</code>, <code>border-width</code>, <code>border-color</code>, <code>border-style</code></p>

<p>Unsupported properties: none</p>

<p>As well as the short hand, individual properties for each side are supported, such as <code>border-top-style</code> and so on.  For <code>border-style</code>, the values are restricted to <code>none</code>, <code>dotted</code>, <code>dashed</code>, <code>solid</code> and <code>inherit</code>.  The uncommonly used values such as <code>hidden</code>, <code>double</code>, <code>groove</code>, <code>ridge</code>, <code>inset</code> and <code>outset</code> are not included in the spec.  All supported properties are required for a browser to be considered compliant. </p>

<p>For background images (and images in general), it is important to note that lower-end devices only have limited memory and processors.  Use images sparingly, and try to optimise the size and resolution of the images that are used.  Not only will this help stop a phone from running out of memory, it will also save on download time and data costs for users that pay per kilobyte.  Opera Mini will compress the images on the server, but most other browsers, such as Opera Mobile and Mobile Safari will not.  If you are using the same image in the mobile and desktop style sheet, you can use server-side scripting to optimise the mobile version.  How to do that is beyond the scope of this article, however, and is dependent on your scripting language of choice. </p>

<h3>Positioning</h3>

<p>Supported properties: <code>position</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>z-index</code></p>

<p>Unsupported properties: none</p>

<p>All properties are listed as optional for browsers to support.  Any desktop-grade mobile browser supports these properties. </p>

<h3>Lists</h3>

<p>Supported properties: <code>list-style</code>, <code>list-style-image</code>, <code>list-style-type</code></p>

<p>Unsupported properties: <code>list-style-position</code></p>

<p>The <code>list-style-type</code> property is restricted to <code>disc</code>, <code>circle</code>, <code>square</code>, <code>decimal</code>, <code>lower-roman</code>, <code>upper-roman</code>, <code>lower-alpha</code>, <code>upper-alpha</code>, <code>none</code> and <code>inherit</code>. It does not support <code>decimal-leading-zero</code>, <code>lower-greek</code>, <code>lower-latin</code>, <code>upper-latin</code>, <code>Armenian</code> or <code>Georgian</code>.</p>

 <h3>Basic Box Model</h3>

<p>Supported properties: <code>display</code>, <code>margin</code>, <code>padding</code>, <code>height</code>, <code>min-height</code>, <code>max-height</code>, <code>width</code>, <code>min-width</code>, <code>max-width</code>, <code>float</code>, <code>clear</code>, <code>visibility</code>, <code>overflow</code>, <code>overflow-style</code></p>

<p>Unsupported properties: none</p>

<p>The <code>display</code> property is restricted to <code>inline</code>, <code>block</code>, <code>list-item</code>, <code>none</code> and <code>inherit</code>. The table-related values, <code>run-in</code> and <code>inline-block</code> are not supported.  The <code>padding</code> and <code>margin</code> properties support the properties for each side such as <code>padding-top</code> and <code>margin-bottom</code>.  The <code>overflow</code> property only supports the <code>auto</code> value.  The <code>overflow-style</code> property is restricted to the <code>marquee</code> value, which is part of CSS 3.</p>

<h3>Color</h3>

<p>Supported properties: <code>color</code></p>

<p>Unsupported properties: none</p>

<h3>Fonts</h3>

<p>Supported properties: <code>font</code>, <code>font-family</code>, <code>font-style</code>, <code>font-variant</code>, <code>font-weight</code>, <code>font-size</code></p>

<p>Unsupported properties: none</p>

<p>For the <code>font-size</code> property, only absolute size keywords (eg <code>medium</code>), relative size keywords (eg <code>bigger</code>) and <code>inherit</code> are supported.  Length and percentage values are unsupported.  This is likely due to low-end mobiles only supporting limited fonts and font sizes.  Browsers such as the latest version of Opera Mini generate their own font, so bypass this restriction.</p><p>The restriction in fonts on mobile devices is one of the biggest stylistic issues with designing for mobiles and one of the biggest causes of inconsistencies between browsers and devices.  It is also common for italic fonts to be unsupported on low-end phones, in which case browsers often use bold as a substitute.  On mobile, there is no common baseline of fonts, such as the <a href="http://en.wikipedia.org/wiki/Core_fonts_for_the_Web">Microsoft Core Fonts</a> commonly found in desktop operating systems. One benefit of this is that comic sans is not found on mobiles.  On smart phones, the font situation is generally better as there is more memory to hold a higher quantity and quality of fonts. </p>

<h3>Text</h3>

<p>Supported properties: <code>text-indent</code>, <code>text-align</code>, <code>text-decoration</code>, <code>text-transform</code>, <code>white-space</code></p>


<p>Unsupported properties: <code>word-spacing</code>, <code>letter-spacing</code>, <code>unicode-bidi</code></p>

<p>For the <code>text-decoration</code> property support is restricted to <code>none</code>, <code>blink</code>, <code>underline</code>, and <code>inherit</code>. The <code>overline</code> and <code>line-through</code> values are not supported.</p>

<h3>Line Layout</h3>

<p>Supported properties: <code>vertical-align</code></p>

<p>Unsupported properties: <code>line-height</code></p>

<p>The <code>vertical-align</code> property only supports the values <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>baseline</code> and <code>inherit</code>.  The <code>sub</code>, <code>super</code>, <code>text-top</code>, <code>text-bottom</code>, <code>percentage</code> and <code>length</code> values are not supported.</p>

<h3>Basic User Interface</h3>

<p>Supported properties: <code>outline</code>, <code>outline-color</code>, <code>outline-style</code>, <code>outline-width</code></p>

<p>Unsupported properties: <code>cursor</code></p>

<p>All properties are listed as optional for browsers to support.  All desktop-class mobile browsers support these properties.  In the spec the <code>outline-style</code> property is restricted to the values <code>none</code>, <code>solid</code>, <code>dashed</code>, <code>dotted</code> and <code>inherit</code>.  This is the same restriction as imposed on the <code>border-style</code> property.</p>

<h3>Marquee</h3>

<p>Supported properties: <code>marquee-style</code>, <code>marquee-direction</code>, <code>marquee-play-count</code>, <code>marquee-speed</code></p>

<p>Unsupported properties: none</p>

<p>The <a href="http://www.w3.org/TR/css3-marquee/">Marquee module</a> is a CSS 3 module that has been created for the mobile profile of CSS.  This was formally part of the box model module.  As this module is new, it is not stable; the first publicly-available Working Draft has just been published.  Therefore,  browser support is nonexistent, unlike other parts of the CSS Mobile Profile. </p><p> This module is intended to replace the WAP CSS extensions, which have been deprecated.  The property names are similar to their WAP counterparts, except the <code>-wap-</code> prefix has been dropped, <code>marquee-dir</code> has been changed to <code>marquee-direction</code>, and <code>marquee-loop</code> is now <code>marquee-play-count</code>.</p>

<h3>At-rules</h3>

<p>Supported rules: <code>@charset</code>, <code>@import</code>, <code>@media</code>, <code>@namespace</code></p>

<p>Unsupported rules: <code>@page</code></p>

<p>The <code>@namespace</code> rule is listed as optional.  For the <code>@media</code> rule, only the <code>handheld</code> and <code>all</code> media types have to be supported.  The other media types, such as <code>screen</code>, are optional.  Although the <code>handheld</code> media type must be supported by the spec, many browsers don’t support it, such as Safari on iPhone.  </p><p>Due to many sites specifying under-tested or broken handheld style sheets, Opera made the decision in Opera Mini 4 plus, and Opera Mobile 9.5 plus, to render the <strong>screen</strong> style sheet in the default mode.  The handheld style sheet will still be rendered instead of the screen style sheet if the browser is switched into mobile view.  If no handheld style sheet is specified, Opera will reformat the page to fit into a single column when in mobile view.</p>

<h3>Other CSS2.1 properties</h3>

<p>Other properties from CSS 2.1 that are not mentioned here are not supported, such as those related to tables and aural style sheets. </p>

<h2>WAP extensions to CSS</h2>

<p>As mentioned previously, The Open Mobile Alliance specified some extensions to CSS, which have now been deprecated by the W3C, in favour of their standardised versions being specified in CSS 3.  The WAP CSS versions have been implemented in a number of browsers, so if you must use a marquee effect, the only option is to use these extensions at present.</p>  

<p>The <code>-wap-marquee</code> value can be used with the <code>display</code> property to specify that the element should be displayed as a marquee.  This has been replaced by <code>overflow-style: marquee</code> in CSS Mobile Profile 2.0.</p> 

<p>The WAP specific properties are <code>-wap-marquee-style</code>, <code>-wap-marquee-loop</code>, <code>-wap-marquee-dir</code> and <code>-wap-marquee-speed</code>.  These have been replaced by the properties in the previous section.</p>  

<h2>Browser and device support</h2>

<p>With the exception of the W3C standardised marquee properties, CSS Mobile Profile is defined as a baseline for mobile browsers to support and  support should be good for relatively modern browsers.  Most desktop-class browsers will support all properties and support much more of the full CSS 2.1 spec. Opera’s core rendering engine, used in Opera Mobile and Opera Mini, supports all properties and values in the CSS 2.1 specification, except <code>visibility: collapse</code>.  </p><p>Cross-device, the main issue with support will come from the fonts available on each phone, so we recommend you not to expect pixel-perfect font rendering in your mobile layouts.  The only way to predict how fonts will render cross-device is to test using different handsets.  The exception is Opera Mini 4 and above, which creates its own font to use on every device.</p>  

<h2>Progressive enhancement</h2>

<p>With the exception of restrictions on font sizes and selectors, most of the commonly used CSS 2.1 properties and values are available in CSS Mobile Profile 2.0.  If you would like to use more properties, there is a good chance that full HTML browsers will support them. If you choose to use  non-CSS Mobile Profile properties for additional style, you should only do so if their unavailability won’t break the layout or leave the content inaccessible.  </p><p>Use the full CSS range of CSS 2.1 selectors with caution, as browsers that only support the CSS Mobile Profile subset of selectors will not render the CSS rule set if the selector is unsupported.  The same can be said for CSS 3 selectors and properties, but the browser support is much more patchy and the specifications are more unstable.  Certain CSS 3 properties will also take more processing and thus consume more battery—<code>opacity</code> is a good example.  One drawback of using full CSS 2.1 or CSS 3 properties is that your style sheet will not validate to the CSS Mobile Profile, but that may not be so important as long as valid CSS is used.</p> 

<h2>Conclusion</h2>
<p>In this article, I’ve covered the CSS Mobile Profile 2.0 and the properties it supports. I  briefly introduced the WAP specific properties not found in CSS 2.1, which are undergoing standardisation in CSS3 for inclusion in the CSS Mobile Profile.  Finally, I covered issues that can arise due to device restrictions (such as font availability), and introduced progressive enhancement.</p>

