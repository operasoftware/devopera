Title: Headers, footers, columns, and templates
----
Date: 2009-02-03 06:39:46
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/" rel="prev" title="link to the previous article in the series">Previous article—CSS absolute and fixed positioning</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/programming-the-real-basics/" rel="next" title="link to the next article in the series">Next article—Programming - the real basics!</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>To this point, the articles in this Curriculum have focused on single topics, ranging from soft concepts like typography and colour, to hard technical instruction on subsets of CSS 2.1.  This article takes on broader focus; its purpose is to show the reader how to take the material covered so far, and use it to build a complete site template.</p>
<p>The principal assumption of this material is that you are already familiar with the CSS <code>float</code>, <code>display</code>, and <code>position</code> properties.</p>
<p>Self directed learners who want to leap straight into the meat of the CSS are <em>reluctantly</em> invited to skip to section IV of this article, &#x201C;Single column layout implementation&#x201D; &#x2014; but should note that in doing so, they will neglect discussion of how successful project planning leads to the layout and implementation of a Web site.</p>
<p>Those same impatient souls who disregard the caveats given in the preceding paragraph will also want to download the <a href="template_1col.html.txt">single</a>, <a href="template_2col.html.txt">double</a>, and <a href="template_3col.html.txt">triple</a> column templates that are provided with this article, and will be linked to again at its conclusion.</p>

<p>The structure of this article is as follows:</p>

<ul>
  <li><a href="#criticalprocesssteps">The stylist&#x2019;s critical process steps</a>
    <ul>
        <li><a href="#gatheringobjectives">Gathering objectives</a></li>
        <li><a href="#contentclassification1">Content classification</a></li>
        <li><a href="#collaborativesketching">Collaborative sketching and composite creation</a></li>
        <li><a href="#establishmentdocumentstructure">Establishment of inter- and intra-document structure</a></li>
    </ul>
  </li>
  <li><a href="#requirementsclassificationnamespaces">Requirements, classification, and element nesting in more detail</a>
    <ul>
      <li><a href="#definingbusinessobjectives">Defining business objectives</a></li>
      <li><a href="#definingvisitorobjectives">Defining and meeting visitor objectives</a></li>
      <li><a href="#contentclassification2">Content classification</a>
        <ul>
          <li><a href="#sourceorder">Source order: accessibility and other considerations</a></li>
        </ul>
      </li>
      <li><a href="#namespacecreation">Container element, class, and id assignment</a></li>
    </ul>
  </li>
  <li><a href="#singlecolumn">Single column layout implementation</a>
    <ul>
      <li><a href="#centeringlayout">Centering the layout</a></li>
      <li><a href="#documentcontainernecessary">Is a document-wide container strictly necessary?</a></li>
    </ul>
  </li>
  <li><a href="#doublecolumnlayout">Double column layout implementation</a>
    <ul>
      <li><a href="#compositionissues">Composition issues <i lang="fr">vis-a-vis</i> single and double column layouts</a>
        <ul>
          <li><a href="#sidebarplacement">Placing <code>#sidebar</code> to the left in spite of its source order</a></li>
          <li><a href="#fauxcolumns">Faux columns: using a background image to even up column lengths when the length of their content differs</a></li>
          <li><a href="#primarynavigationsecondcolumn">Moving the primary navigation into the second column while preserving source order</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#triplecolumnlayout">Triple column layout implementation</a>
    <ul>
      <li><a href="#triplecolumnpitfall">The biggest pitfall of three-column designs, and its easy solution</a></li>
    </ul>
  </li>
  <li><a href="#headersandfooters">Taking in a broad view of headers and footers</a>
    <ul>
      <li><a href="#cindyli">Personal site: Cindy Li</a>
        <ul>
          <li><a href="#identitycindyli">Identity</a></li>
          <li><a href="#contrastcindyli">Contrast</a></li>
        </ul>
      </li>
      <li><a href="#facebook">Social networking: Facebook</a></li>
      <li><a href="#BNSF">Enterprise marketing and customer service: BNSF Railway</a>
        <ul>
          <li><a href="#identityrevisited">Identity revisited</a></li>
        </ul>
      </li>
      <li><a href="#headerandfooterdesign">Header and footer design: the low level details</a>
        <ul>
          <li><a href="#moreaboutnavigationlayout">More about implementing navigation layout</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#varyingcolumnsites">Sites with varying numbers of columns: cheating with <code>class</code>es and <code>display</code></a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
  <li><a href="#biblio">Bibliography</a></li>
</ul>

<p class="note">Note: you can <a href="layout_templates.zip">download all of the sample code</a> in one convenient package, to experiment with it on your local machine.</p>

<p>A properly built site typically results from a deliberate, mostly <em>serial</em> process, even if the site is built by one or two people rather than an entire team of specialists.  A fairly elaborate rendition of such a process is outlined in <strong>Figure 1</strong>, and of the ten steps described there, this article focuses on four in particular:</p>
<ol title="Process steps that maximize the value of CSS.">
	<li>Gathering of requirements based upon business objectives and the consequent visitor objectives</li>
	<li>Content classification</li>
	<li>Collaborative sketching and composite creation</li>
	<li>Establish the structure of the documents to be used on the site</li>
</ol>
<p>Once those four steps are completed, the stylist possesses most of the information he needs to build the site layouts, which will typically have one, two, or three columns.  Regardless of the general form of the layout, there will be differences from one section of a site to the next, which will in turn influence how certain elements and style selectors are made part of the overall site design.</p>

<p>Even after the design and structural choices have been made, there remains the question of how production will be handled if the site is to be built atop a Content Management System (CMS) such as Wordpress or Drupal.</p>
<p>This article underscores the importance of the four steps mentioned above; provides a simple framework for content classification; and describes how to lay out a site with complete headers, footers, and columns.</p>

<h2 id="criticalprocesssteps">The stylist&#x2019;s critical process steps</h2>

<p>The following two sections are provided as embellishment to other articles in this curriculum, with an an emphasis on planning and process rather than implementation.  Their central message is &#x201C;look before you leap&#x201D; &#x2014; in other words, form a clear understanding of what you are going to implement <em>before</em> you start on markup, stylesheets and code!</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/templates_fig4.png" width="576" height="504" alt="A diagram of ten common steps of the sitebuilding process" /></p>
<p class="comment">Figure 1: Ten common steps of the sitebuilding process. Those that are especially relevant to this article are presented in inverse.</p>

<h3 id="gatheringobjectives">Gathering objectives</h3>

<p>Good CSS relies on a chain of dependencies:</p>
<ul title="The dependency chain of good CSS.">
	<li>CSS relies on structure to work;</li>
	<li>Structure is informed by content;</li>
	<li>Content needs scope;</li>
	<li>Content scope is ultimately defined by likely visitor objectives; and</li>
	<li>In their turn, visitor objectives travel hand in hand with business objectives.</li>
</ul>
<p>The point to this chain of requirements is that the needs of your visitors will point directly to the structure you need to create for your site, and thereby drive the selectors and techniques applied in your styles.</p>

<p>When the requirements gathering process is handled poorly, stylists can expect to face challenges that might include:</p>
<ul title="Challenges faced by implementers in the face of poor requirements gathering.">
	<li>Missing assets</li>
	<li>Lack of guidance as to the relationship between layout behavior and window geometry</li>
	<li>No definition of <a href="http://dev.opera.com/articles/view/34-styling-forms/#establishingplatformsupporttiers">platform support tiers</a></li>
	<li>Frequent change requests, as requirements are cobbled together <em>during</em> the implementation process</li>
	<li>Lack of current tools</li>
</ul>

<h3 id="contentclassification1">Content classification</h3>

<p>Once you&#x2019;ve determined the scope of your site content, you need to define its importance to the site as a whole, and decide what navigation aids you will provide for visitors to find it.</p>
<p>There is also the question of what to do with matter such as advertising, link lists, galleries, and comments.</p>
<p>Once classified, content can then be associated with the site&#x2019;s navigation and given weight.  Content weighting will be discussed here in a primary/secondary/tertiary context, since a content block&#39;s importance should be reflected by its position
in a document&#39;s source order.</p>

<h3 id="collaborativesketching">Collaborative sketching and composite creation</h3>

<p>If you are working on a project where graphic design and style implementation are roles assigned to different people &#x2014; which is often the case in commercial projects &#x2014; the graphic designer should rely on sitemap diagrams and <a href="http://dev.opera.com/articles/view/9-building-up-a-site-wireframe/">wireframes</a> (if available) to start creating the look and feel of the site.  It can be valuable to start out with simple sketches, as a way of defining things like the site&#x2019;s general motif, its consistent features, and the details that might complicate the markup or the <code>class</code> and <code>id</code> assignment.</p>

<p>With sketches agreed upon, the graphic designer can then move onto the finished composites, which should be similar to screen captures that might be generated in the development browser after the site is put into production.</p>
<p>Henceforth in this article graphic design will be getting short shrift, as it has already been discussed in the curriculum articles about <a href="http://dev.opera.com/articles/view/9-building-up-a-site-wireframe/">wireframes</a> and <a href="http://dev.opera.com/articles/view/10-colour-schemes-and-design-mockups/">composites/mockups</a>.</p>

<h3 id="establishmentdocumentstructure">Establishment of inter- and intra-document structure</h3>

<p>With the composites in hand, the stylist can start writing the markup and CSS.  The first step of doing that work is to decide upon the content order, element nesting, <code>class</code>es, and <code>id</code>s that will be used on the production site &#x2014; work that can only be done at its best if the stylist has a complete understanding of the content to be served on the site, and the manner in which it is to be laid out.</p>

<h2 id="requirementsclassificationnamespaces">Requirements, classification, and element nesting in more detail</h2>

<p>If one follows modern best practices and adopts the User Centered Design (UCD) paradigm for driving design and development decisions, then visitor objectives inform every step of the design process.</p>

<p>However, the objectives of the site&#x2019;s sponsor (or publisher) actually take precedence from a design team&#x2019;s perspective, because without knowledge of <em>those</em> goals, the design team has no way to anticipate visitor goals.</p>

<h3 id="definingbusinessobjectives">Defining business objectives</h3>

<p>The &#x201C;business&#x201D; objectives of the site will fall under one or more of the following <em>general</em> definitions:</p>
<ul title="The most general site objectives, from a sponsors perspective">
	<li>Directly generate revenue (e-commerce)</li>
	<li>Provide publishing, messaging, and/or storage services via a Web interface (eg, Blogger, Flickr, Scribd, YouSendIt, Basecamp)</li>
	<li>Market a product or service</li>
	<li>Provide information</li>
	<li>Entertain the visitor</li>
</ul>
<p>Once the <em>general</em> objectives have been established, there will be further refinement based upon any of a number of factors, like demographics, conversion goals, and design constraints imposed by the project&#x2019;s budget or the nature of the content itself (as might be the case with something like Flash video).</p>

<p>Experience is by far the best teacher when it comes to guiding this part of the requirements gathering process.</p>

<h3 id="definingvisitorobjectives">Defining and meeting visitor objectives</h3>

<p>With business objectives established &#x2014; &#x201C;this is what we want our visitors to see and do&#x201D; &#x2014; the next step is to attract and lead visitors to those destinations and types of functionality that best suit them.</p>
<p>The principal assumption of this part of the design process is &#x201C;visitors hate obstacles.&#x201D; The best ways to meet that assumption are:</p>
<ul title="Clearing those obstacles that visitors hate.">
	<li>
		<h4>Define and design navigation that best suits the most likely visitor wayfinding strategies.</h4>
		<p>These strategies can include fulltext search, traditional taxonomically-driven lists of links, or &#x201C;tagging&#x201D; (whether moderated or user-defined). <em>Note that a site can cater to more than one wayfinding strategy.</em></p>
	</li>
	<li>
		<h4>Always provide cues to indicate a visitor&#x2019;s position within the site as a whole.</h4>
		<p>Common means of doing so include &#x201C;breadcrumb trails,&#x201D; links to related content, and visual cues such as context-dependent navigation link design.</p>
	</li>
	<li>
		<h4>Enforce visual and writing style as rigidly as you can, without hewing to a foolish consistency.</h4>
		<p>This practice is closely tied to the need to give the visitor consistent cues about location; the difference is that where colour and navigation layout offer a user their bearings within an entire site, consistent presentation across pages is <em>essential</em> to providing bearings within a single page.</p>
	</li>
	<li>
		<h4>Always indicate in plain language the consequences of following a link or making a form submission.</h4>
		<p>Sometimes this is as simple as labelling a submit button with the word &#x201C;Search&#x201D; but sometimes you might need to provide a note to give site visitors more instruction.</p>
	</li>
	<li>
		<h4>Provide a clear distinction between design elements that will respond to user interaction, and everything else.</h4>
		<p>Styles that make links barely distinguishable from normal copy, inconsistent button design, and atypical <code>cursor</code> styles are all common, and all confusing. High contrast colours, thoughtful use of <code>padding</code> (to enlarge the footprints of interactive design elements), and informative <code>title</code>s are typically more effective.</p>
	</li>
	<li>
		<h4>Minimize the amount of user interaction (especially the number of link or button clicks) required to achieve a common goal, such as a purchase, or serving of popular resources.</h4>
		<p>In practice, this usually requires roleplaying and analysis of visitor choices. Unless and until those tasks can be completed, the shortcut to following this guidance is to obey the spirit of the <a href="http://dev.opera.com/articles/view/opera-web-standards-curriculum-glossary/#kiss">KISS</a> Principle.</p>
	</li>
</ul>
<p>When it comes to markup and stylesheets, there are a few simple techniques to follow that make these rules easy to follow:</p>
<ul title="Production techniques that aid the pursuit of effective UCD.">
	<li>
		<h4>When drawing up your stylesheet, assign as many properties as possible in rules with simple element selectors.</h4>
		<p><code>id</code>s by definition are unique, and to be useful <code>class</code>es are best reserved for uncommon cases (or presentation requirements that cannot be properly supported in legacy browsers without them).  However, by moderating their use attentive stylists become alert to instances where the graphic designer is insisting upon potentially expensive levels of detail in their designs.</p>
	</li>
	<li>
		<h4>Assign an <code>id</code> to the <code>body</code> of every page.</h4>
<p>If individual documents (and not just <em>sections</em> of a site) are assigned stylesheet tokens, unique presentation cases become much easier to handle.  Another benefit of putting an <code>id</code> on the <code>body</code> of each page is that when used in tandem with similarly weighted navigation elements, the stylist can then provide visual cues in the primary navigation for things like the currently viewed section or site, without needing to resort to verbose server-side logic.</p>
	</li>
	<li>
		<h4>Avoid designs that place high demands on a visitor&#x2019;s fine motor control.</h4>
		<p>A harsher way to describe this guidance is &#x201C;avoid flying menus like those created by use of <a href="http://www.alistapart.com/articles/dropdowns">Suckerfish techniques</a> (see here for <a href="http://www.htmldog.com/articles/suckerfish/dropdowns/" title="Son of Suckerfish dropdowns.">a different set of Suckerfish techniques</a>), also known as drop down menus. There <em>are</em> clear use cases for such designs, and they all involve large sites that rely on one- and two-column layouts, but they are often avoidable.  On the other hand, inexperienced and motor-control-impaired users often find drop down menus problematic:</p>
		<ul title="Reasons why dropdown menus are a poor design choice.">
			<li>In order to be effective such elements often require the links they contain to be smaller than the default size for bodycopy type &#x2014; a counterintuitive visual cue that makes the menu items seem less like links than other surrounding page elements.</li>
			<li>The extent of fine motor control required to use these elements easily frustrates inexperienced, casual, and impaired visitors.</li>
			<li>The range of possible destinations available within a given section of the site is hidden until the visitor interacts with such elements; this limits their ability to maintain a sense of location within the site until they&#x2019;ve gained experience with using it.</li>
		</ul>
	</li>
</ul>

<h3 id="contentclassification2">Content classification</h3>

<p>Once you&#x2019;ve worked out the scope of the content to be served on the site, you can give it an architecture. A site&#x2019;s architecture can be worked out in various ways (see <a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/">an earlier article</a> for some examples).</p>
<p>Generally, you&#x2019;ll be able to assign priority to your content that will inform likely layouts:</p>
<ol title="Primary, secondary, and tertiary content.">
	<li><strong>Primary content</strong> is the matter around which individual destination documents are built, such as articles, photo albums, or datasets.</li>
	<li><strong>Secondary content</strong> includes human-readable metadata attached to the primary content, and sidebar content (e.g. expository copy; review excerpts; links to related articles on the site; lists of charts, maps, or tables).</li>
	<li><strong>Tertiary content</strong> encompasses outgoing links to related material (such as a blogroll), persistent snapshots of content from other sources such as social networking sites or comment feeds, and advertising.</li>
</ol>

<p>In addition to content, your layout will almost certainly include two other sections:</p>
<ul title="Header and footer scope.">
	<li>The <strong>header</strong> will include the site title (which often links to the topmost page on the site), the primary navigation, links to user account metadata (in an application), and finally the main content search form (if deployed).</li>
	<li>The <strong>footer</strong> contains the copyright statement, at bare minimum.  Links to documents composed of metadata (such as RSS feeds, sitemaps, and site meta-content part from contact info) also find their way into a site&#x2019;s <em>secondary navigation</em>, which is typically made part of the footer.</li>
</ul>
<p>A site&#x2019;s primary navigation and title are nearly always part of (or flush to) its header in a visual context; it is left up to each implementer to decide if they should be made part of the site&#x2019;s header at the markup level.</p>

<h4 id="sourceorder">Source order: accessibility and other considerations</h4>

<p>An early step of designing site templates is to decide upon the source order of its content, which should be consistent across the site as a whole.</p>
<p>Document source order that reads properly without the benefit of stylesheets is essential for reasons of accessibility and cross-media support. In the case of the former, vision-impaired users can use what are called <em>screen readers</em>: software suites that read content aloud to the visitor, content which makes little or no sense if it&#x2019;s ordered willy-nilly for the sake of presentation.</p>
<p>&#x2026;And just as source arranged in the optimal order for screen display probably wants for clarity when read aloud, it might prove impossible to style in other media such as print or mobile displays. In that event the outcome is usually duplicate content, which offers a number of drawbacks:</p>
<ul title="Drawbacks of serving multiple copies of the same content.">
	<li>At minimum, additional View layer logic must be implemented to account for the fact that output from a single database record can be served in more than one fashion.</li>
	<li>In a worse case, content is duplicated not only in the visitor-facing environment, but also in the database or host filesystem. The result will be doubling of some upkeep requirements.</li>
</ul>
<p>Thus, it&#x2019;s most common to arrange the outermost sections in the following order:</p>

<ol title="Typical order of common template elements, within a page scope.">
	<li>Header<ul>
		<li>Title [preferably links back to top/home/landing page]</li>
		<li>Primary navigation</li>
	</ul></li>
	<li>Primary content<ul>
		<li>Document title</li>
		<li>Body copy</li>
	</ul></li>
	<li>Secondary content</li>
	<li>Tertiary content</li>
	<li>Footer<ul>
		<li>Secondary navigation</li>
		<li>Additional bits (eg, copyright notice)</li>
	</ul></li>
</ol>
<p>The manner in which these sections are nested will depend upon any number of variable requirements, the most common of which is the number of static columns in the site layout.</p>

<h3 id="namespacecreation">Container element, class, and id assignment</h3>

<p>Putting aside questions of taxonomy, we can assume that any given site will cover a range of related subjects within an understood scope &#x2014; be it the operations and products of a company, specific types of events, or specific kinds of entertainment, to name a few examples that can usually be counted upon to arouse appeal in non-technical audiences.</p>
<p>Therefore, the stylist will likely find themselves associating stylesheet tokens with both structural elements of the site contents &#x2014; eg navigation bits, header, bodycopy &#x2014; and ranges of content, whether narrow or broad.</p>
<p>Practices vary, but the author usually assigns the following layout tokens to his templates, tokens that will see use in this article:</p>
<dl id="BMHNamespace" title="An overview of the namespace used by the author on his projects.">
	<dt><code>#main</code></dt>
	<dd>content canvas</dd>
	<dt><code>h1</code> (unique)</dt>
	<dd>site title</dd>
	<dt><code>ul#nav</code></dt>
	<dd>site navigation</dd>
	<dt><code>#breadcrumb</code></dt>
	<dd>breadcrumb trail (if used)</dd>
	<dt><code>#bodyCopy</code></dt>
	<dd>main article</dd>
	<dt><code>#bodyCopy&gt;h2</code> (unique)</dt>
	<dd>primary document title</dd>
	<dt><code>#sidebar</code></dt>
	<dd>secondary content</dd>
	<dt><code>#footer</code></dt>
	<dd>footer</dd>
	<dt><code>ul#secondaryNav</code></dt>
	<dd>secondary navigation</dd>
</dl>
<p>In addition to &#x2014; and more importantly &#x2014; than these, an <code>id</code> is added to the <code>body</code> of each page (as mentioned above) that gives some indication of the scope of the primary content associated with the whole document. Some projects also generate a requirement for the assignment of <code>class</code>es to <code>body</code> elements, as well.</p>

<h2 id="singlecolumn">Single column layout implementation</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/templates_fig1.png" width="216" height="336" alt="A visual description of the principal container elements in a single column layout" /></p>
<p class="comment">Figure 1: The elements of a single column layout; the markup will likely be nested as shown here.</p>

<p>Figure 1 shows that <code>#main</code> is immediately within <code>body</code>, and in turn contains all of <code>#header</code>, <code>#bodyCopy</code>, and <code>#footer</code>.</p>

<h3 id="centeringlayout">Centering the layout</h3>

<p>Centering the content canvas is a matter of inserting (in this case) <code>#main { width: 960px; margin: auto; }</code> into your stylesheet.  (The <code>width</code> value chosen is arbitary.)</p>

<h3 id="documentcontainernecessary">Is a document-wide container strictly necessary?</h3>

<p>In a site that relies entirely upon single column layouts, it is not an <em>absolute</em> requirement to include <code>#main</code>; one could as easily apply the same layout property/value pairs used above to <code>#header</code>, <code>#bodyCopy</code>, and <code>#footer</code> in combination.  However, there&#x2019;s nothing <em>semantically</em> wrong with including <code>#main</code>, and its inclusion offers the stylist more flexibility with respect to things like rules, gutters, background images, and building the prominence of certain elements into the structure of the template.</p>

<h2 id="doublecolumnlayout">Double column layout implementation</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/templates_fig2.png" width="216" height="336" alt="A visual description of the principal container elements in a double column layout" /></p>
<p class="figureWithCaption">Figure 2: The elements of a double column layout; the markup will likely be nested as shown here, with the understanding that <code>#sidebar</code> will actually follow <code>#bodyCopy</code> in the source order.</p>

<p>The difference between single and double column layouts lies in the addition of a second container element for the secondary content (<code>#sidebar</code>, which actually follows <code>#bodyCopy</code> in the source order), and some changes to the stylesheet likely to be used for a single column layout.</p>

<h3 id="compositionissues">Composition issues <i lang="fr">vis-a-vis</i> single and double column layouts</h3>

<p>The changes to the <em>markup</em> needed to convert a single column template into a double column template are straightforward, but in many circumstances the new <em>style rules</em> needed are not.</p>

<h4 id="sidebarplacement">Placing <code>#sidebar</code> to the left in spite of its source order</h4>

<p>There are two procedures for doing this; one will work regardless of the length of either column, while the other requires <code>#bodyCopy</code> to be longer than <code>#sidebar</code>.</p>
<p>The first and most common approach is to use <code>float</code>:</p>

<ol title="Steps for placing secondary content to the left of primary content by use of the float property.">
	<li>Assign a <code>width</code> value to <code>#bodyCopy</code>.</li>
	<li>Add to that rule a <code>float</code> value of <code>right</code>.</li>
	<li>Assign an appropriate <code>width</code> to <code>#sidebar</code>.</li>
	<li>Assign <code>margin</code> and <code>padding</code> values as needed to <code>#bodyCopy</code> and/or <code>#footer</code> by way of ensuring that the desired gutter exists between the two elements.</li>
	<li>Assign <code>clear: both;</code> to <code>#footer</code>.</li>
</ol>

<p><em>Both</em> columns have <code>width</code> values specified so that both will have consistent margins.</p>
<p>In the case where <code>#sidebar</code> instead lies at the right margin of the layout, the steps already described should still be followed, except that the <code>float</code> value of <code>#bodyCopy</code> should instead be set to <code>left</code>. The <code>width</code> value assigned to <code>#sidebar</code> should be replaced with an appropriate <code>margin-left</code> value.</p>
<p>It is also possible to assign a large <code>margin-left</code> or <code>margin-right</code> value (as needed) to the un-<code>float</code>ed element, in lieu of <code>width</code>.</p>
<p>A second approach less likely to trigger bugs in Internet Explorer 6 is to assign a large <code>margin-left</code> or <code>margin-right</code> value to <code>#bodyCopy</code> as appropriate, and absolutely position <code>#sidebar</code>. However, this approach is less flexible, since cases in which <code>#sidebar</code> is longer than <code>#bodyCopy</code> will cause the former element to bleed into <code>#footer</code>.</p>

<h4 id="fauxcolumns">Faux columns: using a background image to even up column lengths when the length of their content differs</h4>

<p>Closer examination of column implementations using the <code>float</code> property reveals that when differing background colours or vertical rules between columns are desired, they cannot be counted upon to run down the length of the main content area when applied with <code>background-color</code> or <code>border</code> properties.</p>
<p>The easiest solution to this problem is to create and specify a background image (usually one pixel in height) on one of the columns&#x2019; ancestor elements which &#x2014; because of its assignment to that ancestor element &#x2014; will always repeat from the top to the bottom of the <em>tallest</em> related column. Thus:</p>
<pre>#main {
  background-image: url(images/bg_2column.gif);
  background-repeat: repeat-y;
}</pre>
<p>If <code>bg_2column.gif</code> is composed of two bands of highly contrasted colours that correspond more or less precisely to the widths assigned to your content columns, the result will be two columns that appear to have the same height&#x2026; but actually <em>don&#x2019;t</em>, as would be discovered if one then goes on to insert the following rules:</p>
<pre>#bodyCopy {
  background-color: #ccc;
}

#sidebar {
  background-color: #999;
}</pre>

<p>Taking this step does not necessarily remove the need to apply <code>color</code> or <code>background-color</code> properties to a given column; if the default text colour is unreadable against one or both columns, their background and foreground colours should be explicitly specified in the stylesheet as a fail-safe against the possibility of the browser failing to load background images.</p>

<h4 id="primarynavigationsecondcolumn">Moving the primary navigation into the second column while preserving source order</h4>

<p>Once a second column has been added to the layout, it will probably seem natural to place the primary site navigation at the top of that column&#x2026; but how does one do so when that navigation rests in a different part of the template structure?</p>
<p>The answer to that question lies in positioning:</p>
<ol title="Making the primary navigation appear flush with the secondary column.">
	<li>If <code>overflow: hidden;</code> is assigned to <code>#header</code>, Make <code>#nav</code> a direct descendant of <code>#main</code>. In almost all cases, it will be possible to do this without mangling the desired source order.</li>
	<li>Assign <code>position: relative;</code> to the immediate ancestor of <code>#nav</code>, and <code>position: absolute;</code> to <code>#nav</code> itself.</li>
	<li>Since the absolute position of <code>#nav</code> will place it at the top left corner of its ancestor by default, adjust the <code>left</code> and <code>top</code> values of <code>#nav</code> as desired under the circumstances.</li>
	<li>Adjust the <code>margin-top</code> or <code>padding-top</code> value of <code>#sidebar</code> (as appropriate) to reflect the expected height of <code>#nav</code>. In cases where the height of <code>#nav</code> changes from one page or section to the next, it will be necessary to write multiple rules, perhaps with multiple selectors in each &#x2014; thus the advice supplied above to assign a content-scope-referent <code>id</code> (and perhaps a <code>class</code> also) to the <code>body</code> of each document on the site.</li>
</ol>

<h2 id="triplecolumnlayout">Triple column layout implementation</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/templates_fig3.png" width="216" height="336" alt="A visual description of the principal container elements in a triple column layout" /></p>
<p class="comment">Figure 3: The elements of a triple column layout; note the two new container elements and the differing <code>id</code> assignment.</p>

<p>The principal markup differences imposed by the addition of a third column are:</p>
<ul title="Differences between markup in single and double column layouts.">
	<li>A container encloses two adjacent columns, usually the first and second; and</li>
	<li>The third column is placed within its own container.</li>
</ul>
<p>Once the markup has been laid down, getting the desired layout is a question of ordering <code>float</code> values properly.  Don&#x2019;t forget that the non-floated containers require margin adjustment to line up properly.</p>

<p>Note that with respect to <strong>Figure 3</strong>, the dual column and tertiary container elements are best assigned <code>id</code>s that offer some clue of context, rather than the generic <code>id</code>s suggested in the diagram itself.</p>

	<table>
		<caption>Float assignment to each column in a three column layout.</caption>
		<thead>
			<tr>
				<th>Desired presentation</th>
				<th>Container contents</th>
				<th>Container</th>
				<th>Primary</th>
				<th>Secondary</th>
				<th>Tertiary</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>2&#x2013;1&#x2013;3</th>
				<td>1+2</td>
				<td><code>left</code></td>
				<td><code>right</code></td>
				<td><code>none</code></td>
				<td><code>none</code></td>
			</tr>
			<tr>
				<th>2&#x2013;3&#x2013;1</th>
				<td>2+3</td>
				<td><code>left</code></td>
				<td><code>none</code></td>
				<td><code>left</code></td>
				<td><code>none</code></td>
			</tr>
			<tr>
				<th>3&amp;‐1&#x2013;2</th>
				<td>1+2</td>
				<td><code>right</code></td>
				<td><code>left</code></td>
				<td><code>none</code></td>
				<td><code>none</code></td>
			</tr>
			<tr>
				<th>3&#x2013;2&#x2013;1</th>
				<td>1+2</td>
				<td><code>right</code></td>
				<td><code>left</code></td>
				<td><code>none</code></td>
				<td><code>none</code></td>
			</tr>
			<tr>
				<th>1&#x2013;2&#x2013;3</th>
				<td>1+2</td>
				<td><code>left</code></td>
				<td><code>left</code></td>
				<td><code>none</code></td>
				<td><code>none</code></td>
			</tr>
			<tr>
				<th>1&#x2013;3&#x2013;2</th>
				<td>2+3</td>
				<td><code>right</code></td>
				<td><code>none</code></td>
				<td><code>right</code></td>
				<td><code>none</code></td>
			</tr>
		</tbody>
	</table>
	
<p><span><strong>Table 1:</strong> <code>float</code> values of the four container elements of a three column layout according to order of appearance from left to right.</span></p>

<h3 id="triplecolumnpitfall">The biggest pitfall of three-column designs, and its easy solution</h3>

<p>The most flexible three column layout introduces a container element that&#x2019;s semantically meaningless; the alternative is to enforce conventions of content length or source order that will create an onerous burden, placed either upon maintainers (in the case of content length requirements), or upon visitors (in the case of source order limitations).</p>
<p>The introduction of that &#x201C;meaningless&#x201D; container can also pose problems when it comes time to redesign a site.  Consider the following scenario:</p>
<p>A site when first designed is laid out with its columns in a 2&#x2013;3&#x2013;1 order of presentation, but is later redesigned with its columns in a more traditional 2&#x2013;1&#x2013;3 order. The dual-column container element will need to be moved so that it encompasses different column containers. What then?</p>
<p>In such a case, the outcome is easy to achieve; if the site is truly template-driven, then there are (probably) few files to change.  If &#x2014; on the other hand &#x2014; all of the documents on the site simply uses the same markup framework, search-and-replace must be used.  However, this won&#39;t be difficult.</p>
<p>The overall markup arrangement of containers will take one of the two following forms:</p>
<ul title="Container markup arrangement in three-column layouts.">
	<li><code>&lt;div id=<strong>&quot;#container&quot;&gt;&lt;div id=&quot;primary&quot;</strong>&gt;&#x2026;&lt;/div&gt;&lt;div id=&quot;secondary&quot;&gt;&#x2026;<strong>&lt;/div&gt;&lt;/div&gt;</strong>&lt;div id=&quot;tertiary&quot;&gt;&#x2026;&lt;/div&gt;</code></li>
	<li><code>&lt;div id=&quot;primary&quot;&gt;&#x2026;&lt;/div&gt;&lt;div id=<strong>&quot;#container&quot;&gt;&lt;div id=&quot;secondary&quot;</strong>&gt;&#x2026;&lt;/div&gt;&lt;div id=&quot;tertiary&quot;&gt;&#x2026;<strong>&lt;/div&gt;&lt;/div&gt;</strong></code></li>
</ul>
<p>In those two examples, the bits relevant to search-and-replace have been displayed in boldface.  Since those <code>id</code>s will be unique in your document, and since the location of the double closing tags can be predicted (either adjacent to a third closing tag, or to <code>#tertiary</code>), writing a search-and-replace operation to alter them is a relatively light challenge.</p>

<h2 id="headersandfooters">Taking in a broad view of headers and footers</h2>

<p>Up to this point there&#x2019;s been discussion of the <em>matter</em> that ought to go into headers and footers &#x2014; logo/logotype, sitewide search, links to user account information, site metadata &#x2014; but header/footer effectiveness and attractiveness has been little discussed outside the Curriculum articles about <a href="http://dev.opera.com/articles/view/9-building-up-a-site-wireframe/">wireframes</a> and <a href="http://dev.opera.com/articles/view/10-colour-schemes-and-design-mockups/">composites/mockups</a>.</p>

<p>Since it&#x2019;s poor to immerse the reader in pontification, a better idea might be to take three sites that are notable &#x2014; either for their popularity, or for the prominence of their publishers &#x2014; and take a look at their various particulars of design.</p>

<h3 id="cindyli">Personal site: Cindy Li</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/cindyli.com.cap1.png" width="633" height="157" alt="header of cindyli.com" /></p>
<p class="comment">Figure 4: There are two matters of note especially worthy of discussion here: identity and contrast.</p>

<h4 id="identitycindyli">Identity</h4>

<p>&#x201C;Identity&#x201D; is a term that takes on special meaning in the realms of advertising and marketing, where it refers to trademarks and other design elements that are particular to the presentation of a commercial enterprise and its products.  <a href="http://www.cindyli.com">Cindy Li&#39;s site</a> enforces this at a personal level by featuring a caricature of her facial profile into the site header, and a distinctive typeface to set her site title and primary navigation.</p>

<p>The manner in which identity is enforced on enterprise sites will be discussed in more detail below,</p>

<h4 id="contrastcindyli">Contrast</h4>

<p>On cindyli.com, it&#x2019;s obvious to the visitor at first glance what things are: the identity, content canvas, and primary content are all placed within footprints made discrete through their background colours.  In addition, the site title and navigation are given high contrast against their background.</p>

<p>Now for the site footer:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/cindyli.com.cap2.png" width="633" height="71" alt="footer of cindyli.com." /></p>
<p class="comment">Figure 5: Cindy Li&#x2019;s footer is somewhat sparse: there are a copyright statement, a link to the marketing site for the publishing platform she uses (which is probably required under the terms of its use license), and a link to a syndication feed of the articles she publishes.</p>

<p>Unlike the other sites presented in this article, <a href="http://www.cindyli.com">Cindy&#39;s site</a> doesn&#39;t offer fulltext search, probably for technical reasons.  However, since the site is a blog, its design allows the assumption that most readers confine their interest to new content.</p>

<h3 id="facebook">Social networking: Facebook</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/facebook.com.cap1.png" width="633" height="26" alt="header of facebook.com." /></p>
<p class="comment">Figure 6: Facebook, like many social networking destinations, enforces its identity through its use of layout and colour, since the <em>application</em> itself is the destination.</p>

<p>Like many commercial sites, Facebook offers both fulltext search and a categorized approach to site navigation.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/facebook.com.cap2.png" width="633" height="81" alt="footer of facebook.com" /></p>
<p class="comment">Figure 7: Like its header, Facebook&#x2019;s footer is also small, even once the persistent application widget at the very bottom is taken into account. The one thing of interest seen here is next to the copyright statement: a widget for changing the user&#x2019;s default language.</p>

<p>Another common practice exemplified by the Facebook footer is that while links of use to user wayfinding go into the header, the footer contains all of the links about the site operator, and the site itself.</p>

<h3 id="BNSF">Enterprise marketing and customer service: BNSF Railway</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/bnsf.com.cap1.png" width="484" height="58" alt="header of bnsf.com." /></p>
<p class="comment">Figure 8: Like most &#x201C;enterprise&#x201D; sites, the highest contrast of the header features is enjoyed by the site publisher&#x2019;s logo&#x2026; and the only hue present is the same as that used in the logo.</p>

<h4 id="identityrevisited">Identity revisited</h4>

<p>With respect to distinct logos, logotypes, and other design tropes that enforce <em>commercial</em> identity, consider the following, which are all ubiquitous marks of enterprises that do business with Opera Software:</p>
<ul id="logoList" title="Ubiquitous logos of Opera customers and partners.">
	<li><p>Nokia</p><img src="http://www.opera.com/bitmaps/b2b/customers/nokia.jpg" width="120" height="21" alt="Nokia logo." /></li>
	<li><p>Samsung Group and Samsung Electronics</p><img src="http://www.opera.com/bitmaps/b2b/customers/Samsung.jpg" width="120" height="41" alt="Samsung logo." /></li>
	<li><p>Google</p><img src="http://www.opera.com/bitmaps/b2b/customers/google.gif" width="120" height="42" alt="Google logo." /></li>
	<li><p>IBM</p><img src="http://www.opera.com/bitmaps/b2b/customers/ibm.gif" width="120" height="42" alt="IBM logo." /></li>
</ul>
<p>Beyond these four, other similar examples of graphic design are well known: the Nike Swoosh (the name of which is actually registered with the authorities), the AT&amp;T &#x201C;Death Star&#x201D; logo, the FedEx logotype (and the arrow in the whitespace enclosed by its last two letters), and &#x201C;UPS Brown&#x201D; are all examples of corporate identity that are almost universally known to the general public (at least in the USA).</p>

<p>Any site operator who takes the trouble to develop a distinctive visual identity is well served to integrate that identity into the design of their site, an action which has a strong impact on the nature of the stylist&#39;s work.</p>

<p>As for other elements in the BNSF site header apart from the logo, the most notable is the use of two wayfinding modes (as is the case at Facebook).</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/bnsf.com.cap2.png" width="484" height="53" alt="footer of bnsf.com." /></p>
<p class="comment">Figure 9: The BNSF site has the most &#x201C;traditional&#x201D; footer layout of these three sites, in that little effort is made to place the secondary navigation within a distinct visual plane with horizontal rules or a differing background colour.</p>

<h3 id="headerandfooterdesign">Header and footer design: the low level details</h3>

<p>In taking a broader view of header and footer design, the following commonalities become clear:</p>
<ul title="Design commonalities of site headers and footers.">
	<li><strong>Enterprise and application destinations tend to lay out their primary navigation in a row along the top margin of the browser canvas.</strong> This fact distinguishes them from news and e-commerce sites, which often use a more columnar approach to navigation layout.</li>
	<li><strong>Just as horizontally oriented primary navigation is common, so is the use of discrete secondary navigation in the footer.</strong> Furthermore, the destination-versus-site-metainfo division described early in this article is pretty commonly enforced.</li>
	<li><strong>Where fulltext search is present, its input fields tend to be placed near the right margin of the header.</strong> This is due in no small part to the fact that well-implemented fulltext search is just as valid a way to navigate through a site as are traditional, taxonomically-driven navigation links &#x2014; and likely to be abused by a subset of your site&#x2019;s visitor population, likely to be among the least technically-inclined of your users.</li>
</ul>

<h4 id="moreaboutnavigationlayout">More about implementing navigation layout</h4>

<p>Before there&#x2019;s any dive into details, the reader should first consult the <a href="http://www.accessify.com/tools-and-wizards/developer-tools/list-o-matic/">List-O-Matic</a>, an application hosted at Accessify.com that creates navigation elements with simple styling, ready for insertion into any page layout.</p>
<p>Beyond the matter of tools that do the work for you, there are two basic approaches to navigation layout:</p>
<ul title="Basics of navigation implementation.">
	<li><strong>The navigation is made integral to the site header (visually if not literally) and oriented horizontally.</strong> In this case, the <code>display</code> value of the individual links will likely be changed to <code>block</code>, and their containing list items will be assigned a <code>float</code> value of <code>left</code>.</li>
	<li><strong>The navigation is oriented vertically and placed to the left of the primary content, either in its own column or just above non-primary content.</strong> In this case, you&#x2019;re most likely to see some kind of non-<code>static</code> positioning put to use.</li>
</ul>

<h2 id="varyingcolumnsites">Sites with varying numbers of columns: cheating with <code>class</code>es and <code>display</code></h2>

<p>Some sites might well have pages with one or two columns, others two or three; flexibility is one of the strengths of CSS, and one of the hobbyhorses that graphic designers unwittingly ride in their lustful quest for ironfisted control over the user experience.</p>
<p>Normally, such cases are handled in part with includes: site scripting that allows persistent bits to be added to a page programmatically, rather than being repeatedly copied.</p>
<p>However, even with includes stylists still encounter differences in layout; how best to handle these?</p>
<p>The most straightforward approach is to attach a <code>class</code> to the <code>body</code> of any page that might need it.  These might take on an ordinal nature that corresponds to some series of layouts suggested in identity guidelines, or relate back to content and result in multiple-selector rules like the following:</p>

<pre><code>.about #bodyCopy,
.contact #bodyCopy,
.privacy #bodyCopy {

    float: none; width: auto;
}

  .about #sidebar,
.contact #sidebar,
.privacy #sidebar {

    display: none;
}</code></pre>

<p>The one drawback to taking this approach <em>without</em> the benefit of include statements (a poor man&#x2019;s way of making content disappear or reappear, if you will) is that search engine operator policies might well reduce the weight of those pages in results &#x2014; or in the case of spectacularly clumsy implementations, delist sites that use them, altogether.  For this reason (among too many others to count), any hosting arrangement you obtain should support some sort of include functionality.</p>

<h2 id="summary">Summary</h2>

<p>While it&#x2019;s tempting &#x2014; particularly if you&#x2019;re still a beginner &#x2014; to just sit right down and get to writing markup and code, such a process does <em>not</em> lend itself to especially attractive, useful, or maintainable sites.</p>
<p>However, by taking into careful consideration the content that will go onto a site and the manner in which it ought to be arranged, you can pour any site into the framework that derives from its requirements.</p>

<p>Basic templates:</p>

<ul title="Links to one, two, and three column page layouts.">
	<li><a href="template_1col.html.txt">single column</a></li>
	<li><a href="template_2col.html.txt">double column</a></li>
	<li><a href="template_3col.html.txt">triple column</a></li>
</ul>

<h2 id="exercises">Exercise questions</h2>

<ol title="List of exercises relating to page layout.">
	<li>Given a list of possible links provided by your instructor, divide those into primary (header) and secondary (footer) links. Justify your assignments by relying on examples provided in this article.</li>
	<li>Take a composite created by a classmate and identify:
		<ol title="Exercise 1, list of elements to be identified.">
			<li>the number of columns to be employed in the design;</li>
			<li>the widths of those columns; and</li>
			<li>the <code>float</code>/<code>width</code>/<code>margin</code></li> 			<li>the <code>float</code>/<code>width</code>/<code>margin</code> scheme, if any, that should be used to implement the presentation of those columns.</li>
		</ol>
	</li>
	<li>Given a logotype, a list of requirements, and an architecture, design a site header.</li>
	<li>If you cannot prove the use of the Golden Section in the composition of the header designed in the previous exercise, alter its composition appropriately and subjectively evaluate the attractiveness of the result.</li>
	<li>Relying solely on search engine results, obtain the reason why lists are preferable to collections of <code>div</code>s (or other elements) for structuring navigation elements. Reference the characteristics of screen reader software in your answer.</li>	
	<li><em>From memory</em>, revise one of the provided template files so that it supports a different number of columns. Also alter significantly the composition of the primary navigation, in comparison to what was found in the original template file.</li>
</ol>

<h2 id="biblio">Bibliography</h2>

<p class="biblio">BNSF Railroad. 2006. <a href="http://www.bnsf.com/">http://www.bnsf.com/</a> (last accessed 13 January 2009).</p>
<p class="biblio">Facebook. 2008. <a href="http://www.facebook.com/home.php">http://www.facebook.com/home.php</a> (last accessed 13 January 2009).</p>
<p class="biblio">Henick, Ben. 2006. Avoid edge cases by designing up front.
A List Apart. <a href="http://www.alistapart.com/articles/avoidedgecases">http://www.alistapart.com/articles/avoidedgecases</a> (last accessed 13 January 2009).</p>
<p class="biblio">Li, Cindy. 2008. The Adventures of Cindy Li.
<a href="http://www.cindyli.com/">http://www.cindyli.com/</a> (last accessed 13 January 2009).</p>
<p class="biblio">Morville, Peter, and Rosenfeld, Louis. 2006.  Information architecture for the world wide web, 3rd edition. Cambridge, Mass.: O&#x2019;Reilly Media.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/" rel="prev" title="link to the previous article in the series">Previous article—CSS absolute and fixed positioning</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/programming-the-real-basics/" rel="next" title="link to the next article in the series">Next article—Programming - the real basics!</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<p><img alt="Picture of the article author Ben Henick" src="http://forum-test.oslo.osa/kirby/content/articles/242-38-headers-footers-columns-and-templates/benhenick.jpeg" class="right" /></p>

<p>Ben Henick has been building Web sites in one capacity or another since September 1995, when he took on his first Web project as an academic volunteer. Since then, most of his work has been done on a freelance basis.</p>

<p>Ben is a generalist; his skillset touches on nearly every aspect of site design and development, from CSS and HTML, to design and copywriting, to PHP/MySQL and JavaScript/Ajax.</p>

<p>He lives in Lawrence, Kansas, with three computers and zero television sets. You can read more about him and his work at <a href="http://www.henick.net/">henick.net</a>.</p>‐h2 id=
