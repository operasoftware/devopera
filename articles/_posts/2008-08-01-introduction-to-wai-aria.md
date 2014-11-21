---
title: Introduction to WAI ARIA
authors:
- gez-lemon
intro: 'The elephant in the corner of modern web development has been Ajax accessibility.

The W3C has been working on a new technology called ARIA - Accessible Rich Internet Applications - that provides a way for “Web 2.0” developers to bridge the gap between desktop-like interaction and accessibility.

When I was reading up on ARIA, I found that I couldn’t see the big picture because the specifications focus on the detail. So we asked Gez Lemon of The Paciello Group, Juicy Studio and the Web Standards Project’s Accessibility Task Force to write us an overview that would help developers understand what ARIA is, why it’s important, and how they can use it right now to help users with disabilities.'
license: cc-by-nc-sa-2.5
---
<p>This article is for those who are new to ARIA. You need an understanding of HTML and the potential difficulties that people with disabilities can face using the Web. It is useful to be familiar with some Rich Internet Applications from a user's perspective</p>
<p>After reading this article, you'll understand what ARIA is for, how to integrate it into your sites, and how you can use it now to make even the simplest of sites more accessible.</p>

<div class="note">
<p>This article is also available in:</p>

<ul>
<li>Belorussian: <a href="http://www.webhostinghub.com/support/introduction-to-wai-aria-be"><span lang="be">Уводзіны ў WAI ARIA</span></a>, translated by Bohdan Zograf</li>
<li>Bulgarian: <a href="http://goscience.ru/introduction-wai-aria/"><span lang="bg">Въведение в WAI ARIA</span></a>, translated by Marko Pozner</li>
<li>French: <a href="http://www.lesintegristes.net/2008/12/09/introduction-a-wai-aria-traduction/"><span lang="fr">Introduction à WAI ARIA</span></a>, translated by Pierre Bertet</li>
<li>German: <a href="http://www.hessendscher.de/wai-aria/"><span lang="de">Einf&uuml;hrung in WAI ARIA</span></a>, translated by Stefan Walter</li>
<li>Italian: <a href="http://www.html5today.it/tutorial/introduzione-wai-aria"><span lang="it">Introduzione a WAI ARIA</span></a>, translated by Silvio Porcellana</li>
<li>Japanese: <a href="http://d.hatena.ne.jp/aratako0/20090709/p1"><span lang="jp">WAI-ARIA導入（日本語訳</span></a>, translated by Arata Kojima</li>
<li>Norwegian: <a href="http://globe-views.com/introduksjon-til-wai-aria/"><span lang="no">Introduksjon til WAI-ARIA</span></a>, translated by <a href="http://globe-views.com"><span lang="no">Globe Views</span></a></li>
<li>Russian: <a href="http://science.eduboard.com/introduction-to-wai-aria/"><span lang="ru">Введение в WAI ARIA</span></a>, translated by Donna Barrier and team</li>
<li>Spanish: <a href="http://web.archive.org/web/20100622122838/http://www.areia.info/introduccion-a-wai-aria/"><span lang="es">Introducci&oacute;n a WAI-ARIA</span></a>, translated by David Martin</li>
</ul>

<p>Please note these are translations independent of Opera.</p>
</div>

<h3>Update log</h3>

<p><strong>Update 8 October 2008:</strong> List of <a href="#landmarks">document landmark roles</a> updated to reflect change in specification.</p>

<p><strong>Update 1 April 2009:</strong> Section on <code>aria-channel</code>, and <code>aria-live="rude"</code> value removed to reflect change in specification. Both have been removed from the spec.</p>

<h2>Introduction</h2>
<p>
HyperText Markup Language (HTML) was not originally designed to create web applications. HTML has a limited set of interface controls, and is based around a sequential client server communication model. Web application developers have gotten around these limitations by creating their own custom components (widgets), using JavaScript to add behaviour to the widgets.
</p>
<p>
Unfortunately, the techniques used to overcome these limitations have not been accessible. Although custom widgets might look and behave like regular desktop application widgets, such as a tree view widget, the role (what the widget does), state (its unique configuration, such as <code>checked</code>), and other important properties are not available to assistive technologies, such as screen readers. This is the same as styling plain text to look like a heading, rather than using a heading element — the plain text looks like a heading, but isn&rsquo;t revealed as a heading to assistive technology.
</p>
<p>
Updates are often missed by people using assistive technology. Assistive technologies usually expect web content to change in response to a navigate event, such as following a link or submitting a form. Web applications use techniques, such as <acronym title="Asynchronous JavaScript and XML">AJAX</acronym>, to update content silently in the background, which is sometimes missed by assistive technology. Even if assistive technology is aware of updates, the user still might not be aware that the content has been updated, or how to locate the updated content.
</p>
<p>
<a href="http://www.w3.org/WAI/intro/aria"><acronym title="Web Accessibility Initiative">WAI</acronym>-<acronym title="Accessible Rich Internet Applications">ARIA</acronym></a> is a specification that provides a means of describing roles, states, and properties for custom widgets so that they are recognisable and usable by assistive technology users. WAI-ARIA also provides a mechanism to ensure that users of assistive technologies are aware of updates in the application.</p>

<h2>A Brief History of HTML</h2>
<p>
HTML was originally designed to be a hypertext system for structuring and sharing linked documents. Early HTML drafts defined tags, such as headings, paragraphs, lists, and anchors, to add structure to text-based documents. The first <a href="http://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt">proposal for an HTML specification</a> by the <abbr title="Internet Engineering Task Force">IETF</abbr> also included the <code>img</code> element to allow graphics to be displayed inline. The first formal HTML specification was <a href="https://tools.ietf.org/html/rfc1866">HTML 2</a>, based on the early HTML drafts. This specification introduced forms, and defined a small set of interface components to create edit boxes, buttons, checkboxes, radio buttons, and dropdown lists. The small set of interface components defined in HTML 2 has hardly changed compared with the set we currently use with <a href="http://www.w3.org/TR/html401/">HTML 4.01</a>.
</p>
<p>
The communication model for HTML is based on the client server model. In the client server model, the client sends requests and can receive replies; the server listens for requests, processes the request on the server, and sends replies back to the client. As HTML did not have a behaviour layer, communication was intended to be sequential — the client requests a page from the server; the server processes the request and sends a page to the client.
</p>
<h2>Web Applications</h2>
<p>
Web applications try to emulate regular desktop applications, except web applications run inside another regular desktop application — a browser. There are also two fundamental differences between HTML and its communication model, and a regular desktop application:
</p>
<ul>
	<li>Regular desktop applications have a behaviour layer that is not dependent on requests to a server.</li>
	<li>Regular desktop applications have a far richer set of interface components.</li>
</ul>
<h2>Emulating Regular Desktop Applications</h2>
<h3>Background Server Requests</h3>
<p>
In order to emulate regular desktop applications, web applications use JavaScript to add behaviour. For example, JavaScript might be used to allow a menu item to expand and collapse when the user interacts with it. Occasionally, data may be required from the server. For example, the application may have to fetch records from a database on the server to update information on the current page. When the application has to interact with the server, web applications use techniques such as AJAX or hidden <code>IFrame</code> elements to communicate with the server silently in the background.
</p>
<h3>Emulating Rich Components</h3>
<p>
As HTML has very few interface components, web applications sometimes need to create more complex widgets, such as a tri-state checkbox or a slider control. The look and feel of these widgets is usually created by drawing the widget as a graphic, and adding scripting to make them behave like the native component.
</p>

<p>
<img src="tristate.gif" width="228" height="171" alt="Three checkboxes; unchecked, checked, and partially checked" />
</p>
<p>Figure 1 — A dialog with a tri-state checkbox.</p>

<p>
<img src="slider.gif" width="358" height="65" alt="Slider control with discrete values to indicate quality" />
</p>
<p>Figure 2 — A slider widget that might be used to indicate the quality of a service.</p>

<h2>Accessibility Problems with Look and Feel Emulation</h2>
<p>
Visually, emulating rich components and making server requests in the background creates a richer experience for users. Unfortunately, this results in accessibility problems that are particularly bad for users of assistive technologies, such as screen reader users.
</p>
<ul>
	<li>Widgets built this way are rarely keyboard accessible.</li>
	<li>The role of the widget, what it does, is not available to assistive technology.</li>
	<li>States and properties of the widget are not available to assistive technology.</li>
	<li>Updates, and discovery of the updates are not reported to assistive technology.</li>
</ul>

<h2>WAI-ARIA to the Rescue</h2>
<p>
Fortunately, all of the problems outlined above are solved by the Web Accessibility Initiative&rsquo;s Accessible Rich Internet Applications (WAI-ARIA) specification (shortened to ARIA for the rest of this article). ARIA is a positive, enabling technology — rather than telling developers what they cannot do, ARIA allows developers to create rich web applications. ARIA is also very easy to implement.
</p>
<h2>Keyboard Navigation</h2>
<p>
Along with providing alternative text for non-text objects, being able to interact with interface elements using the keyboard alone is one of the most basic accessibility provisions. Developers who understand accessibility might build custom widgets using components that can receive focus, such as the <code>input</code> element with a <code>type</code> attribute value of <code>image</code> (<code>&lt;input type="image" ...&gt;</code>). Unfortunately, most widgets are not built using components that are keyboard accessible, but instead use elements such as the <code>img</code> element, or may consist of composite elements that need to be in a container element, such as a <code>div</code>, which is unable to receive keyboard focus.
</p>
<p>
HTML 4 introduced the <code>tabindex</code> attribute for the <code>a</code>, <code>area</code>, <code>button</code>, <code>input</code>, <code>object</code>, <code>select</code>, and <code>textarea</code> elements. The <code>tabindex</code> attribute from HTML 4 accepts a positive value between <code>0</code> and <code>32767</code>. Navigation starts at the elements with the lowest number, and proceeds to the element with the highest number. Elements with a value of <code>0</code> are visited in the order they appear in the markup. If markup has a logical structure, the <code>tabindex</code> attribute isn&rsquo;t required for interface elements that are already in the keyboard tab order.
</p>
<p>
ARIA <a href="http://www.w3.org/TR/wai-aria/#tabindex">extends the tabindex attribute</a> so that it can be used on all visible elements. ARIA also allows a negative value to be specified for elements that should not appear in the keyboard tab order, but can be programmatically focused (give focus to an element with scripting). As the actual value of the negative number is unimportant (the element never receives keyboard focus), the value <code>-1</code> is typically used for elements that should not be included in the tab order, but might need to be able to receive programmatic focus. For example, you could build a menu widget where the menu itself is in the tab order and receives focus by tabbing to it, but the menu items are not in the keyboard tab order. Instead, the menu items could be programmed so they can be navigated using cursor keys. This way, users do not have to tab through all items in the menu, and can better navigate the document. This is true for all widgets that have a series of components that need keyboard access, such as a tree.
</p>
<h3>Adding to the Natural Tab Order</h3>
<p>
The following example uses a <code>tabindex</code> attribute value of <code>0</code> to put a <code>div</code> element into the tab order so that a keyboard user can navigate to the element.
</p>
<pre><code>&lt;div tabindex="0"&gt;
...
&lt;/div&gt;</code></pre>
<h3>Negative tabindex</h3>
<p>
The following example uses a negative <code>tabindex</code> attribute value, so that the element can receive programmatic focus.
</p>
<pre><code>&lt;div id="progaccess" tabindex="-1"&gt;
...
&lt;/div&gt;</code></pre>

<p>
In this example, the <code>div</code> element is not placed in the tab order, but having a <code>tabindex</code> attribute value of <code>-1</code> means that it can receive programmatic focus. The following snippet of JavaScript selects the element defined above, and uses the <code>focus</code> method to place focus on the element.
</p>

<pre><code>var objDiv = document.getElementById('progaccess');

// Focus on the element
objDiv.focus();</code></pre>

<h2>What am I?</h2>
<p>
ARIA introduces the <a href="http://www.w3.org/TR/wai-aria/#Using_intro"> <code>role</code> attribute</a> to help define widgets, such as a slider, and define page structure, such as a navigation section. One of the major problems with web applications is that any element can be used to make a widget. HTML elements already have pre-defined roles. The role of an element is what it does - the part it plays in the structure. For example, the role of a heading is well understood by assistive technology. When widgets are built with existing elements, the role of the element is what is revealed to assistive technology, rather than what it visually represents in the widget. For example, if the thumb for a slider control is created using an image element with appropriate alternative text, then a screen reader will likely announce the control as, "<samp>Graphic, thumb</samp>", as opposed to something more meaningful, such as "<samp>slider, value 16 percent</samp>".
</p>
<p>
<img src="thumb.gif" width="166" height="81" alt="Slider&rsquo;s thumb" />
</p>

<p>Figure 3 — The thumb on a typical slider control.</p>

<p>
The role given by the <code>role</code> attribute trumps the role of the native element. In the following example, an <code>input</code> element has a <code>role</code> attribute of <code>slider</code> (we will look at some of the other ARIA properties later in this article) — the role exposed to assistive technology is <code>slider</code>, rather than <code>input</code>.
</p>

<pre><code>&lt;input type="image"
	   src="thumb.gif"
	   alt="Effectiveness"
	   role="slider"
	   aria-valuemin="0"
	   aria-valuemax="100"
	   aria-valuenow="42"
	   aria-valuetext="42 percent"
	   aria-labelledby="leffective"&gt;</code></pre>

<p>
When this element receives focus, a screen reader user understands the role this widget plays. The ARIA specification maintains a <a href="http://www.w3.org/TR/wai-aria/#roles">list of roles</a>.
</p>
<h3 id="landmarks">Document Landmark Roles</h3>
<p>
As well as roles to help define widgets, there are roles that can help define the structure of the document. <a href="http://www.w3.org/TR/wai-aria/#roleattribute_inherits">Document landmarks</a> are a subset of regular roles that help screen reader users understand the role of a section and help orientate themselves within the document.
</p>
<p>
<img src="pagestructure.gif" width="179" height="256" alt="Page Structure" />
</p>
<p>Figure 4 — A typical page with a header, sidebar and main content area.
</p>
<p>
ARIA defines the following document landmark roles.
</p>
<dl>
	<dt><code>article</code></dt>
	<dd>Content that makes sense in its own right, such as a complete blog post, a comment on a blog, a post in a forum, and so on.</dd>
	<dt><code>banner</code></dt>
	<dd>Site-orientated content, such as the title of the page and the logo.</dd>
	<dt><code>complementary</code></dt>
	<dd>Supporting content for the main content, but meaningful in its own right when separated from the main content. For example, the weather listed on a portal.</dd>
	<dt><code>contentinfo</code></dt>
	<dd>Child content, such as footnotes, copyrights, links to privacy statement, links to preferences, and so on.</dd>
	<dt><code>main</code></dt>
	<dd>Content that is directly related to or expands on the central content of the document.</dd>
	<dt><code>navigation</code></dt>
	<dd>Content that contains the links to navigate this document and/or related documents.</dd>
	<dt><code>search</code></dt>
	<dd>This section contains a search form to search the site.</dd>
</dl>

<p>
The following example specifies the landmark roles of <code>banner</code>, <code>navigation</code>, and <code>main</code> to create the page structure shown in Figure 4.
</p>

<pre><code>&lt;div role="banner"&gt;
...
&lt;/div&gt;
&lt;div role="navigation"&gt;
...
&lt;/div&gt;
&lt;div role="main"&gt;
...
&lt;/div&gt;</code></pre>

<h2>ARIA States and Properties</h2>
<p>
ARIA <a href="http://www.w3.org/TR/wai-aria/#introstates">states and properties</a> allow further information about the widget to be provided to assistive technology to help the user understand how to interact with the widget. The state identifies a unique configuration of information for an object. For example, the <code>aria-checked</code> property has three state values; <code>true</code>, <code>false</code>, and <code>mixed</code>.
</p>
<p>
In the slider example above, we included various aria-properties, shown below, that helped describe the widget to assistive technology.
</p>

<dl>
	<dt><code>aria-valuemin</code></dt>
	<dd>Stores the lowest value a range may have.</dd>
	<dt><code>aria-valuemax</code></dt>
	<dd>Stores the highest value a range may have.</dd>
	<dt><code>aria-valuenow</code></dt>
	<dd>Stores the current value in a range.</dd>
	<dt><code>aria-valuetext</code></dt>
	<dd>Stores readable text to help the user understand the context. For example, <code>"30 dollars"</code>.</dd>
	<dt><code>aria-labelledby</code></dt>
	<dd>Stores the <code>id</code> attribute of a text label containing an appropriate prompt for this widget.</dd>
</dl>
<p>
Some properties might be updated through scripting. For example, the <code>aria-valuenow</code> and <code>aria-valuetext</code> properties of our slider widget would be updated when the thumb is moved.
</p>

<pre><code>// Set the ARIA property values when the thumb is
// moved on the slider
objThumb.setAttribute('aria-valuenow', iValue);
objThumb.setAttribute('aria-valuetext', iValue + ' %');</code></pre>

<p>
Adding ARIA roles and attributes will not validate with HTML 4.01 or <abbr title="Extensible HyperText Markup Language">XHTML</abbr> 1.0, but that&rsquo;s okay, as ARIA is adding important information to specifications that were written a long time ago. Work is underway <a href="http://www.w3.org/WAI/PF/adaptable/StatesAndProperties-20051106.html">defining a <abbr title="Document Type Definition">DTD</abbr> that can be used with modular <abbr title="Extensible Markup Language">XML</abbr></a>, such as XHTML 1.1. There is a <a href="http://www.w3.org/TR/wai-aria/#supported">full list of states and properties</a> to help define accessible widgets in the ARIA specification.
</p>

<h2>Live Regions</h2>
<p>
Live regions allow elements in the document to be announced if there are changes, without the user losing focus on their current activity. This means users can be informed of updates without losing their place within the content. For example, a chat application could announce the response from the person the user is chatting with, without moving focus away from the text entry field to add a line of chat.
</p>

<h3>aria-live</h3>
<p>
The discoverability of updated content is one of the biggest obstacles for screen reader users. ARIA provides an <code>aria-live</code> property that has a value indicating the verbosity level for the region. The following are the verbosity values that can be used with the <code>aria-live</code> property.
</p>

<dl>
	<dt><code>off</code></dt>
	<dd>
		<p>This is the default value, and indicates that the region is not live.</p>
		<pre><code>&lt;ul aria-live="off"&gt;</code></pre>
	</dd>
	<dt><code>polite</code></dt>
	<dd>
		<p>This is normal operation and the expected behaviour for live regions. A value of <code>polite</code> indicates that it is not necessary to respond until user completes their current activity.</p>
		<pre><code>&lt;ul aria-live="polite"&gt;</code></pre>
	</dd>
	<dt><code>assertive</code></dt>
	<dd>
		<p>This value is a higher priority than normal but does not necessarily interrupt the user immediately.</p>
		<pre><code>&lt;ul aria-live="assertive"&gt;</code></pre>
	</dd>
</dl>

<p>
There are some other important properties that can be used when defining live regions, summarised below.
</p>

<h3>The <code>aria-atomic</code> Property</h3>
<p>
The <code>aria-atomic</code> property is an optional property of live regions that can have the values <code>true</code> or <code>false</code> (the default if this property is not specified). When the region is updated, the <code>aria-atomic</code> property is used to indicate if assistive technology should present all or part of the changed region to the user. If this property is set to <code>true</code>, assistive technology should present the entire region as a whole; otherwise, the part of the region that changed might be announced on its own.
</p>
<p>
In the following example, all elements within the unordered list will be announced in their entirety when the region is spoken, unless another element further down the chain overrides the <code>aria-atomic</code> property.
</p>
<pre><code>&lt;ul aria-atomic="true"
	aria-live="polite"&gt;</code></pre>

<h3>The <code>aria-busy</code> Property</h3>
<p>
The <code>aria-busy</code> property is an optional property of live regions that can have the values <code>true</code> or <code>false</code> (the default if this property is not specified). If multiple parts of a live region need to be loaded before changes are announced to the user, the <code>aria-busy</code> property can be set to <code>true</code> until the final part is loaded, and then set to <code>false</code> when the updates are complete. This property prevents assistive technologies announcing changes before the updates are complete.
</p>
<pre><code>&lt;ul aria-atomic="true"
	aria-busy="true"
	aria-live="polite"&gt;</code></pre>

<h3>The <code>aria-relevant</code> Property</h3>
<p>
The <code>aria-relevant</code> property is an optional property of live regions that indicates what changes are considered relevant within a region. The <code>aria-relevant</code> property accepts a space separated list of the following property values:
</p>
<dl>
	<dt><code>additions</code></dt>
	<dd>Nodes are added to the <acronym title="Document Object Model">DOM</acronym> within the region.</dd>
	<dt><code>removals</code></dt>
	<dd>Nodes are removed from the DOM within the region.</dd>
	<dt><code>text</code></dt>
	<dd>Text is added or removed from the DOM.</dd>
	<dt><code>all</code></dt>
	<dd>All of the above (additions, removals, text) apply to this region.</dd>
</dl>
<p>
In the absence of an explicit <code>aria-relevant</code> property, the default is to assume there are text changes and additions (<code>aria-relevant="text additions"</code>). The following example would only announce changes if nodes are added to the DOM within the region. If there are text changes, or nodes are removed within the region, the user will not be notified.
</p>
<pre><code>&lt;ul aria-relevant="additions"
	aria-atomic="true"
	aria-live="polite"&gt;</code></pre>

<h2>When can ARIA be used?</h2>
<p>
There are no negative side-effects from using ARIA, so you can start using it right away. All four of the major browsers have implemented support for ARIA, or have plans to implement support for ARIA. Opera 9.5 and Firefox 1.5+ already include support for ARIA. Internet Explorer 8 Beta has ARIA support, and WebKit, the open source application framework behind Safari, have announced that they have started to add support for ARIA.
</p>
<p>
ARIA is also becoming widely supported by assistive technology. JAWS 7.1+, Window-Eyes 5.5+, <abbr title="Non-Visual Desktop Access">NVDA</abbr>, Zoomtext 9+, and others, have basic support for ARIA, and the situation is set to improve.
</p>


<h2>Be an early adopter</h2>
<p>
As there are no negative side-effects from using ARIA, and support is already in place, there is nothing to lose by becoming an early adopter, but plenty to gain. Even if you have the simplest of websites, you could include document landmark roles to help users better navigate, and orientate themselves within the content.
</p>

<h3>Use document landmark roles</h3>
<p>
On my personal website, I have included document landmark roles for <code>main</code>, <code>navigation</code>, <code>search</code>, and <code>secondary</code>. Consider the following document structure.
</p>

<pre><code>&lt;div id="ads"&gt;
...
&lt;/div&gt;
&lt;div id="nav"&gt;
	&lt;form id="searchform" ...&gt;
	...
	&lt;/form&gt;
...
&lt;/div&gt;
&lt;div id="content"&gt;
...
&lt;/div&gt;</code></pre>

<p>
We could write the <code>role</code> attribute for our document landmarks directly into the markup.
</p>

<pre><code>&lt;div id="ads" role="banner"&gt;
...
&lt;/div&gt;
&lt;div id="nav" role="navigation"&gt;
	&lt;form id="searchform" role="search" ...&gt;
	...
	&lt;/form&gt;
...
&lt;/div&gt;
&lt;div id="content" role="main"&gt;
...
&lt;/div&gt;</code></pre>

<p>
Alternatively, as most pages are structured so they can be styled with <abbr title="Cascading Style Sheets">CSS</abbr>, it is likely that the page will be structured with <code>id</code> attributes that could be passed to a JavaScript function. The following is an example of a simple JavaScript function that accepts the <code>id</code> attribute of an element, and a role value, and sets the <code>role</code> attribute on the corresponding element.
</p>

<pre><code>function addARIARole(strID, strRole)
{
	// Find the element to add a role property to
	var objElement = document.getElementById(strID);

	if (objElement)
	{
		// Add the role property to the element
		objElement.setAttribute('role', strRole);
	}
}</code></pre>
<p>
The function can then be called with the <code>id</code> of the section, and the document landmark role for the section. So considering the document structure above, we could use this JavaScript function to insert the <code>role</code> attribute, rather than write it into the markup.
</p>
<pre><code>function setupARIA()
{
	// Add ARIA roles to the document
	addARIARole('content', 'main');
	addARIARole('nav', 'navigation');
	addARIARole('searchform', 'search');
	addARIARole('ads', 'banner');
}

window.onload = setupARIA;</code></pre>

<h3>Indicate required fields</h3>
<p>
If you have forms containing required fields, you can make use of the <code>aria-required</code> property. The <code>aria-required</code> property indicates that user input is required on the control before the form may be submitted. The following example adds the <code>aria-required</code> property to a regular <code>input</code> element.
</p>

<pre><code>&lt;label for="contactname"&gt;Name&lt;/label&gt;
&lt;input type="text"
	   id="contactname"
	   name="contactname"
	   size="30"
	   aria-required="true"&gt;</code></pre>

<p>
Wordpress have started to use the <code>aria-required</code> attribute for required fields in the comments section for blog entries.
</p>

<h3>Add other relevant properties</h3>
<p>
There are many ARIA properties that can be used on the simplest of websites, such as <code>aria-labelledby</code> and <code>aria-describedby</code>. The <code>aria-labelledby</code> property points to one or more elements that are considered the label for an element, and the <code>aria-describedby</code> property points to one or elements that are considered the description for an element.
</p>

<pre><code>&lt;h2 id="limg"&gt;Paragliding&lt;/h2&gt;
&lt;p id="dimg"&gt;
A long description of our paragliding trip ...
&lt;/p&gt;

&lt;div&gt;
&lt;img src="takeoff.png"
	 alt="Getting ready to take off"
	 aria-labelledby="limg"
	 aria-describedby="dimg"&gt;
&lt;/div&gt;</code></pre>

<h3>Precedence of markup</h3>
<p>
ARIA markup takes precedence over the host language markup. This means that if <code>aria-labelledby</code> is used alongside <code>label for=""</code>, <code>aria-labelledby</code> will take precedence. The <code>label</code> element is still encouraged for older browsers that do not understand ARIA. A simple technique to avoid clashes is to use the <code>aria-labelledby</code> attribute to reference a <code>label</code> — this ensures the label is available, regardless of ARIA support.
</p>

<pre><code>&lt;label id="lblef" for="effectiveness"&gt;Effectiveness&lt;/label&gt;

&lt;input type="image"
	   role="slider"
	   id="effectiveness"
	   aria-labelledby="lblef"
	   ...&gt;</code></pre>

<p>
Look through the <a href="http://www.w3.org/TR/wai-aria/#supported">full list of states and properties</a> to see how ARIA can help you ensure your content is more accessible.
</p>
<h2>All together now</h2>
<p>
HTML was not originally designed to create web applications, but developers have created them by drawing their own custom widgets, and adding behaviour with JavaScript. The problem is that the role, state, and properties of widgets and updated content on these pages are not conveyed correctly to assistive technologies. The ARIA specification solves these problems by allowing developers to describe widgets in detail, define document structure, and define regions of the page that will change.
</p>
<p>
Whether you are developing full-blown web applications with complex widgets and live sections, or whether you have the simplest of websites, you can start to use ARIA now to benefit users with disabilities.
</p>
<h2>Further Reading</h2>
<ul>
	<li><a href="http://www.w3.org/TR/wai-aria-practices/">WAI-ARIA Best Practices</a></li>
	<li><a href="http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/">Using <code>aria-required</code></a></li>
	<li><a href="http://www.marcozehe.de/2008/03/23/easy-aria-tip-2-aria-labelledby-and-aria-describedby/">Using <code>aria-labelledby</code> and <code>aria-describedby</code></a></li>
	<li><a href="http://www.marcozehe.de/2008/07/16/easy-aria-tip-3-aria-invalid-and-role-alert/">Using <code>aria-invalid</code> and <code>role</code> <code>alert</code></a></li>
	<li><a href="http://www.paciellogroup.com/blog/?p=53">Tri-State Checkbox Example</a></li>
	<li><a href="http://www.paciellogroup.com/blog/?p=68">ARIA Slider Example</a></li>
</ul>
