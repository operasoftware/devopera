Title: Mobile markup - XHTML Basic 1.1
----
Date: 2008-08-28 13:08:00
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
<p>There are a number of options developers can take when planning to mobilise their Web sites.  The three main approaches are:</p>

<ul>
<li>Do nothing and allow the browser to adapt the content.</li>
<li>Adapt the regular desktop site by providing alternative styling using techniques such as handheld style sheets or media queries.</li>
<li>Create a mobile specific version.</li>
</ul>

<p>This article will cover the third approach, introducing the markup options for mobile focused Web pages, and what features they offer.</p>

<h2>A note on mobile specific versions</h2>
<p>While this article covers the markup options for mobile-specific sites, you should think carefully if this is the approach that you wish to take.  Just like creating an additional version for printing or a high-accessibility version, additional sites require more maintenance and run the risk of becoming out of sync with the main version of the site.  Your concept of what to remove from the mobile version, and what functionality is most important, may be widely different from the expectations of your user base.  At Opera we often get a large number of bug reports when major sites switch to forwarding mobile users to their reduced mobile-specific site.</p>  

<p>If you choose to go down this path, make sure that the user is given a visible option to return to the regular version of the site, and that the preference is remembered across sessions.  As a general rule of thumb, I’d recommend creating a mobile version only if you are providing extra mobile contextual information or features that do not make sense on the desktop version or if the main site is extremely complex, such as with Ajax-heavy Web applications.  Mobile versions often work best as a companion site to the main version, which can be used to quickly achieve common tasks on the move. Examples include updating your status message on a social network or checking the live scores or match schedule on a sports site.  Making a version that is to be exclusively used by mobile users can mean that other users miss out on optimisations made for mobile.  This includes accessibility improvements for users with disability or bandwidth savings for users with a dial-up connection and old hardware.  Many mobile Web best practices overlap with these disciplines.</p> 

<h2>Once upon a time…</h2>
<p>Once you have decided to make a mobile site, you have to choose a markup language.  Choosing a markup language for mobile content has never been as obvious as it should be.  In the early days of the mobile Web, the WAP forum (now called Open Mobile Alliance) created a XML-based language called WML.  This was the markup language of the WAP Web.  This wasn’t ideal as it split the Web in two—(X)HTML for the regular Web and WML for the mobile Web.  Web developers wanting to make mobile sites had to learn a new language instead of transferring skills, and the principles of <q>One Web</q> were broken—users couldn’t visit their favorite Web sites and had to discover the WAP versions of sites, if they existed at all.  This was further compounded by the situation in Japan, where NTT DoCoMo created their own language—cHTML (Compact HTML), which wasn’t compatible with XHTML or WML.</p>

<p>Seeing this was less than ideal, the W3C created XHTML 1.0 Basic.  As the name implies, this is a subset of XHTML 1.1.  As XHTML 1.1 is a reformation of XHTML into small bite-sized modules, a subset could be created that just includes the essential modules, elements and attributes that are needed or can be handled on low-end mobile devices.</p>  



<h2>Building on XHTML</h2> 
<p>XHTML Basic provides the building blocks for mobile-focused markup languages.  In keeping with its XML roots, it was designed to be extended.  This is exactly what the WAP Forum and NTT DoCoMo did when they joined together (as the Open Mobile Alliance) to create the successor to both cHTML and WML, called XHTML Mobile Profile.  This superset of XHTML Basic adds features that are missing from that language but were included in their previous solutions.  This is currently at XHTML-MP 1.2 at the time of writing.
It is fairly confusing that there are two markup languages that have seemingly large overlaps in purpose.  This looks to be remedied soon, as the W3C have realigned XHTML Basic in version 1.1 to include the features added to XHTML-MP, and the two languages now look more or less identical.  Choosing one or the other is just a matter of personal preference, but, in this article, I will stick to XHTML Basic as it is a proposed W3C recommendation.</p>

<h2>Counting on a baseline</h2>

<p>It can now be accepted that XHTML Basic 1.1 support is a cut-off point for browser support.  I’d recommend using this in mobile-specific sites rather than worrying about catering for outdated WAP browsers.  The <a href="http://www.w3.org/TR/mobile-bp/">Mobile Web Best Practices</a> from the W3C in fact require XHTML Basic in the <a href="http://validator.w3.org/mobile/">mobileOK checker</a> (currently in Beta). Your mileage may vary depending on your target audience, but there are XHTML Basic capable browsers for almost every mobile released over the last couple of years—Opera Mini for example can cope with full (X)HTML and works on most Java-enabled phones.  As XHTML Basic is just regular XHTML, it is perfectly possible for regular desktop browsers to render pages correctly that are written using it, with the exception of Internet Explorer; it doesn’t support XHTML served as XML.</p>

<h2>Transferable skills with XHTML Basic</h2>

<p>As mentioned, XHTML Basic is just a subset of XHTML, so if you know XHTML already, you are almost ready to go.  You just need to learn what is and isn’t supported.  We’ll start at the beginning with the basic skeleton of a XHTML Basic 1.1 page:</p>

<pre>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML Basic 1.1//EN&quot;
    &quot;http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;title&gt;Page title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>

<p>As you can see, this is quite standard stuff.  The only things you need to take notice of are the XHTML Basic doctype, that <code>xml:lang</code>  is used as it is being served as XML, and that the document should be served as <code>application/xhtml+xml</code> not <code>text/html</code>.</p>

<h2>Supported XHTML modules</h2>

<p>The following modules and elements are supported from XHTML:</p>

<h3>Structure Module</h3>

<p>Supported elements: <code>html</code>, <code>head</code>, <code>title</code>, <code>body</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_structuremodule">Structure Module spec</a></p>

<h3>Text Module</h3>
 
<p>Supported elements: <code>abbr</code>, <code>acronym</code>, <code>address</code>, <code>blockquote</code>, <code>br</code>, <code>cite</code>, <code>code</code>, <code>dfn</code>, <code>div</code>, <code>em</code>, <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code>, <code>kbd</code>, <code>p</code>, <code>pre</code>, <code>q</code>, <code>samp</code>, <code>span</code>, <code>strong</code>, <code>var</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_textmodule">Text Module spec</a></p>

<h3>Hypertext Module</h3>

<p>Supported elements: <code>a</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_hypertextmodule">Hypertext Module spec</a></p>

<h3>List Module</h3>

<p>Supported elements: <code>dl</code>, <code>dt</code>, <code>dd</code>, <code>ol</code>, <code>ul</code>, <code>li</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_listmodule">List Module spec</a></p>

<p>The <code>value</code> attribute for the <code>li</code> element was added in XHTML Basic 1.1 and wasn’t available in previous versions of the spec.</p>

<h3>Forms Module</h3>

<p>Supported elements: <code>button</code>, <code>fieldset</code>, <code>form</code>, <code>input</code>, <code>label</code>, <code>legend</code>, <code>select</code>, <code>optgroup</code>, <code>option</code>, <code>textarea</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_extformsmodule">Forms Module spec</a></p>

<p>Previous versions of XHTML Basic only implemented the Basic Forms Module.</p>

<h3>Basic Tables Module</h3>

<p>Supported elements: <code>caption</code>, <code>table</code>, <code>td</code>, <code>th</code>, <code>tr</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_simpletablemodule">Basic Table Module spec</a></p>

<p>Nested tables are not supported, but these are rarely needed when using tables for their intended purpose—tabular data.  While XHTML Basic implements all of the Basic Tables Module, it does not support the full Table Module, which extends the Basic Table Module.  As such <code>col</code>, <code>colgroup</code>, <code>tbody</code>, <code>thead</code> and <code>tfoot</code> are unsupported in XHTML Basic.</p>

<h3>Image Module</h3>

<p>Supported elements: <code>img</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_imagemodule">Image Module spec</a></p>

<p>The Mobile Web Best Practices document recommends that only JPEG or GIF images be used (not PNGs).</p>  

<h3>Object Module</h3>

<p>Supported elements: <code>object</code>, <code>param</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_objectmodule">Object Module spec</a></p>

<p>While the object element is supported, it is not recommended to use plug-ins on mobile focused sites unless absolutely necessary.  This is because it can’t be predicted if a specific plug-in is available on all or even the majority of target devices.  Flash is available for Opera Mobile, for example, but not on the iPhone or Opera Mini.</p>  

<h3>Presentation Module</h3>

<p>Supported elements: <code>b</code>, <code>big</code>, <code>hr</code>, <code>i</code>, <code>small</code>, <code>sub</code>, <code>sup</code>, <code>tt</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_presentationmodule">Presentation Module spec</a></p>

<p>While this module is supported, presentation should be kept to CSS (or SVG) and kept out of the page structure. I would, however, argue that superscript (<code>sup</code>) and subscript (<code>sub</code>) are more about structure than presentation, and it is perfectly semantically valid to use the <code>i</code> element for certain cases where it is typographic convention to use italics, such as ship names and publication names, where using emphasis (<code>em</code>) would be incorrect.  In earlier versions of XHTML Basic, the Presentation module was not supported.</p>

<h3>Metainformation Module</h3>

<p>Supported elements: <code>meta</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_metamodule">Metainformation Module spec</a></p>

<h3>Link Module</h3>

<p>Supported elements: <code>link</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_linkmodule">Link Module spec</a></p>

<h3>Base Module</h3>

<p>Supported elements: <code>base</code></p>
<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_basemodule">Base Module spec</a></p>

<h3>Intrinsic Events Module</h3>

<p>Supported attributes: <code>onblur</code>, <code>onfocus</code>, <code>onload</code>, <code>onunload</code>, <code>onreset</code>, <code>onsubmit</code>, <code>onchange</code></p>

<p>Unsupported attributes: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_intrinsiceventsmodule">Intrinsic Events Module spec</a></p>

<p>Most full HTML browsers (e.g., Opera Mobile, iPhone WebKit) support these events, and more; the exception is Opera Mini, which being proxy based, has issues with some events, especially with ones involving constant activity, animation, or refreshing. The article <a href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/">JavaScript support in Opera Mini 4</a> gives more details on Opera Mini event support. This module was not supported in previous versions of the specification.</p>

<h3>Scripting Module</h3>

<p>Supported elements: <code>script</code>, <code>noscript</code></p>

<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/2001/REC-xhtml-modularization-20010410/abstract_modules.html#s_scriptmodule">Script Module spec</a></p>

<p>It is important to be aware that, while scripting is supported in XHTML Basic 1.1, JavaScript support is much more spotty in mobile browsers than desktop.  Even for modern full HTML browsers such as Opera Mobile and Mobile Safari, using a lot of scripting, even though supported, can drain the battery.  Opera Mini has some restrictions with JavaScript interaction, which you can read up on in the article <a href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/">JavaScript support in Opera Mini 4</a>. Earlier versions of XHTML Basic did not support the Scripting Module. </p>

<h3>Style Sheet Module</h3>

<p>Supported elements: <code>style</code></p>

<p>Unsupported elements: none</p>

<p><a href="http://www.w3.org/TR/xhtml-modularization/abstract_modules.html#s_stylemodule">Style Sheet Module spec</a></p>

<p>The Style Sheet Module was not available in previous versions of the specification.</p>


<h3>Style Attribute Module</h3>

<p>Supported attribute: <code>style</code></p>

<p>Unsupported attribute: none</p>

<p><a href="http://www.w3.org/TR/xhtml-modularization/abstract_modules.html#s_styleattributemodule">Style Attribute Module spec</a></p>
<p>This module has been deprecated, and the MobileOK checker will flag up use of this attribute as a warning.  Avoid using inline styles in your documents whenever possible.  The <code>style</code> attribute was not supported in previous versions of the specification.</p>

<h3>Target Module</h3>

<p>Supported attribute: <code>target</code></p>

<p>Unsupported attribute: none</p>

<p><a href="http://www.w3.org/TR/xhtml-modularization/abstract_modules.html#s_targetmodule">Target Module spec</a></p>
<p>This module was not supported in previous versions of the specification.</p>  

<h2>New features for XHTML Basic</h2>
<p>While XHTML Basic is a subset of XHTML 1.1, it is not fully a subset as XHTML Basic 1.1 adds a new attribute not available in regular XHTML or HTML.  This is the <code>inputmode</code> attribute, which has been borrowed from XForms.  As this is a new attribute, support for this is spotty at best, but pages should degrade gracefully in browsers that do not support it.  The Opera core rendering engine supports <code>inputmode</code>, but it has to be enabled on a project-by-project basis and is not on by default.</p>  

<p>The <code>inputmode</code> attribute is supported on the input and textarea elements.  Supplying a input mode gives a hint to the browser on what keyboard or input mode should be presented to the user.  This is useful for on-screen keyboards, where a limited amount of characters on the keyboard can be shown at once.  For a telephone number, it is possible to specify that a numeric keyboard is shown, saving the user from having to switch manually.</p>  

<p>The value for the <code>inputmode</code> attribute is specified as a case-sensitive space-separated list.  Two kinds of tokens can be specified; a script token (usually corresponding to the Unicode script name, such as arabic or cyrillic) and a modifier token such as <code>predictOff</code> to turn off text prediction or digits to specify numerical input.  The following example specifies to the browser to use a Cyrillic input mode with text prediction turned off:</p>

<pre>&lt;input type=&quot;text&quot;  id=&quot;surname&quot; inputmode=&quot;cyrillic predictOff&quot; /&gt;</pre>

<h2>Unsupported modules and restrictions</h2>

<p>One important difference between XHTML and XHTML Basic that has already been covered is the lack of the full Table Module.  This restricts splitting a table into a head, body, and footer—so the following example is invalid:</p>

<pre>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;th scope=&quot;col&quot; &gt;Brand&lt;/th&gt;&lt;th scope=&quot;col&quot; &gt;Type&lt;/th&gt;&lt;th scope=&quot;col&quot; &gt;Strength&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;Russian Standard&lt;/td&gt;&lt;td&gt;Vodka&lt;/td&gt;&lt;td&gt;40% vol&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;Putinka&lt;/td&gt;&lt;td&gt;Vodka&lt;/td&gt;&lt;td&gt;40% vol&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</pre>

<p>The <code>th</code> element is supported, so the previous table can be reformulated as follows:</p>
<pre>&lt;table&gt;
    &lt;tr&gt;&lt;th scope=&quot;col&quot; &gt;Brand&lt;/th&gt;&lt;th scope=&quot;col&quot; &gt;Type&lt;/th&gt;&lt;th scope=&quot;col&quot; &gt;Strength&lt;/th&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Russian Standard&lt;/td&gt;&lt;td&gt;Vodka&lt;/td&gt;&lt;td&gt;40% vol&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Putinka&lt;/td&gt;&lt;td&gt;Vodka&lt;/td&gt;&lt;td&gt;40% vol&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>

<p>Other modules that are unsupported include the Edit Module (<code>del</code> and <code>ins</code>), Bi-directional Text Module (<code>bdo</code>), Applet Module, Client-side Image Map Module, Server-side Image Map Module, Frames Module, IFrame Module, Name Identification Module (<code>name</code> attribute), and the Legacy Module (<code>basefont</code>, <code>center</code>, <code>dir</code>, <code>font</code>, <code>isindex</code>, <code>menu</code>, <code>s</code>, <code>strike</code>, <code>u</code>).  In practice, except for the Table Module, many of these modules are either deprecated, have elements that can hamper usability (such as frames), or are elements that are not commonly used.  Of those listed, I personally only use the elements from the Table and Edit modules.</p>

<h2>Validation and conformance</h2>

<p>As XHTML Basic should be served as XML instead of HTML, it is very important to validate your pages, as the draconian error handling will show an error message if your documents are not well formed.  This is especially important to take into account if you allow user-generated content, such as comments.  You can validate your documents using the <a href="http://validator.w3.org/">W3C Markup Validator</a> or alternatively by right clicking in Opera and choosing Validate. </p>

<p>You can do more than just validate your pages.  The W3C Mobile Web Initiative also makes a <a href="http://validator.w3.org/mobile/">mobileOK Checker</a>.  This validates against the machine-testable rules specified in the Mobile Web Best Practices document.  It is a good idea to try to validate against this to ensure your page is suitable for as wide a range of devices as possible.  This is currently not suitable for Web applications, however, as it bans the use of scripts.  If your page passes, then you can use the MobileOK trust mark.  As a bonus, there are a number of points which correspond to similar points in WAI-WCAG 1 and WAI-WCAG 2, so spending time fixing issues for mobile can help the accessibility of your site, and vice versa.</p>

<h2>Smart phones and high end devices</h2>

<p>Both XHTML Basic and Mobile Web Best Practises focus on constraint devices and the baseline experience.  High-end devices such as Windows Mobile devices like the HTC Touch Diamond or Samsung i900, the iPhone, and S60 devices such as the Nokia N95, are becoming more common, especially in the developed world.  While the baseline—such as covered here—should not be forgotten about, depending on the page or application you are writing, it may be worth giving an enhanced experience to these class of devices that have more processing power, higher definition screens, and better quality browsers.  The means of deciding and implementing this are beyond the scope of this article, but techniques could include using media queries to detect high-resolution screens and specify a more advanced style sheet, object detection for supplying more advanced scripts, and an <a href="http://www.w3.org/2003/04/xhtml1ToBasic.xsl">XSLT style sheet</a> to transform between XHTML and XHTML Basic if missing features of XHTML are needed. </p>

<h2>Conclusion</h2>
<p>In this article, I’ve looked into the history of markup for mobile devices, introducing WML, XHTML-MP and XHTML Basic.  I covered the features of XHTML 1.1 supported in XHTML Basic, pointing out any differences or potential hazards.  I also introduced the Mobile Web Best Practices and how to check for conformance with mobileOK.  You should now feel comfortable about writing markup targeted at mobile phones and be ready to explore what features of CSS are supported in CSS Mobile Profile.</p>

