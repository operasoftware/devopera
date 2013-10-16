Title: Creating presentations/slideshows with HTML & CSS
----
Date: 2009-01-08 13:48:09
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

<h2 id="introduction">Introduction</h2>
    <p>
      An 
      <acronym title="Hypertext Markup Language">HTML</acronym> &amp; <acronym title="Cascading Style Sheets">CSS</acronym> 
      (or simply HTML) presentation means displaying an 
      HTML or XHTML document in a paged fashion, preferably full-screen mode, 
      even though this is not mandatory.
      While the technology for that has been with us for a while 
      now, such presentations still suffer from a niche existence &#8213; this might be due to several reasons, including that other solutions are preferred, too few
      people know it is possible, and that the results of using this
      technology is believed to be little attractive.
      Nevertheless, a couple of (rather good and attractive) solutions exist, like 
      <a title="HTML Slidy" target="_blank" href="http://www.w3.org/Talks/Tools/Slidy/">HTML Slidy</a>, 
      <a title="Slidemaker" target="_blank" href="http://www.w3.org/Talks/slidemaker/YYMMsub/">Slidemaker</a>, and 
      <a title="S5" target="_blank" href="http://meyerweb.com/eric/tools/s5/s5-intro.html">S5</a>, 
      but they either include JavaScript or are a bit cumbersome to 
      use, which is why in this article we will concentrate on plain 
      <a title="HTML 4.01 specification" target="_blank" href="http://www.w3.org/TR/html401/">HTML</a>
      in combination with 
      <a title="CSS 2.1 specification" target="_blank" href="http://www.w3.org/TR/CSS21/">CSS</a>. 
    </p>

    <p>
      There are many advantages to using this technology combination to create your slideshows.
    </p>

    <ol>
      
      <li>
With an existing template like the examples given below, a presentation is mainly about copying&amp;pasting.
      </li>
      <li>
	You save extra time when republishing web content as a
	presentation, as the content format and the form of publication 
	are identical.
      </li>
      <li>
	Knowledge of HTML and CSS is sufficient;
	you do not need to learn an additional markup or scripting
	language.
      </li>
      <li>
	You can add appropriate styling and effects using CSS.
      </li>
      <li>
	The combination of technologies will become even more powerful 
	with the advent of particular
	<a title="Current work on CSS 3" target="_blank" href="http://www.w3.org/Style/CSS/current-work/">CSS 3</a>
	modules.
      </li>
      <li>
	The entire Web is accessible from the presentation
	(if you are online).
      </li>
      <li>
	No additional software is required.
      </li>
      <li>
	Deployment of additional technologies like JavaScript and 
	<a title="Scalable Vector Graphics" target="_blank" href="http://www.w3.org/Graphics/SVG/">SVG</a>
	gives nearly unlimited
	possibilities for displaying content, including executing examples inside your slides.
      </li>
      <li>
	Zoom capabilities and fluid layout provide for adaptive
	readability (one of my favorite arguments).
      </li>
      <li>
	You can (pre-)view the presentation in the default Screen Mode
	in your browser.
	I&#39;ll get back to that later on.
      </li>
    </ol>
    <p>
      The key to HTML presentations is to make use of the so-called 
      <a title="Media types" target="_blank" href="http://www.w3.org/TR/CSS21/media.html#media-types"><var>projection</var> media type</a> as
      defined
      in CSS, which by definition is
      <a title="Media groups" target="_blank" href="http://www.w3.org/TR/CSS21/media.html#media-groups">paged</a>.
      Paged means that only a screen-full of content is shown at a 
      time; thus let us call that a slide.
    </p>

<h2 id="support">Support</h2>
    <p>
Concerning browsers, 
      Opera has supported slideshows (also referred to as Opera Show) since version 4.
Firefox needs the FullerScreen Add-On to be able to support it, although version 3.0.3 (with FullerScreen) appears to be pretty buggy, so I suggest you stick to Opera, at least for the time being. 
      To my knowledge, neither Safari nor 
      Internet Explorer support it (at the time of writing) or have made plans for future
      support for slideshows.
    </p>

<p class="note">You can <a title="Take the test" href="test_projection_support.html">test yourself whether your browser supports presentation mode</a> here.</p>

<p>To view any web page loaded into Opera in Presentation Mode select <code>View &gt; Full screen</code> or pressing <kbd>F11</kbd> (<kbd>Opt+F11 on Mac</kbd>). Pressing <kbd>ESC</kbd> (or <kbd>F11/Opt+F11</kbd>) terminates the mode.</p>
      
    <h2 id="minimumExample">Our first example</h2>
    <p>
      Let&#39;s start to look at how to do this, using a simple example. View the 
      <a title="Minimum example" href="presentation-minimum.xhtml">basic example</a>
      in Presentation Mode. Use <var>page-up</var> and <var>-down</var> to flip through the pages/slides.</p>

    <p>
      How does it work?
      Consider the simple markup below.
    </p>

    <pre><code>&lt;div class=&quot;slide&quot;&gt;
  Slide 1
&lt;/div&gt;
&lt;div class=&quot;slide&quot;&gt;
  Slide 2
&lt;/div&gt;</code></pre>

    <p>Each slide is defined using a <code>div</code> with a <code>class</code> value <var>slide</var>. To actually separate the document into slides when in Presentation Mode, I have used a special <code>@media</code> directive in the stylesheet
      with a value of <var>projection</var>:</p>

 <pre>@media projection {
  div.slide + div.slide {
    page-break-before: always;
  }
}</pre>

      <p>This signals that all style rules included in between <code>@media projection {</code> and the last <code>}</code> should only be applied
      when in Presentation Mode.
      The rule inside forces a page break before each slide &#8213; you see that the syntax is fairly intuitive.  And that&#39;s basically it!</p>

<p>      Now, to make an appealing presentation, you need to think about styling your slides using CSS and any other technologies you have at your disposal, in the same way you would with any web page. You can see a visually more pleasing piece in the <a title="Extended example" href="presentation-extended.xhtml">extended example</a>, which is discussed further below.</p>

<p class="note">Breaking pages can of course also be achieved with other properties like
      <code>page-break-after</code> and <code>page-break-inside</code>.
      See the 
      <a title="Paged media" target="_blank" href="http://www.w3.org/TR/CSS21/page.html">pages media specification</a> for a detailed explanation of these.</p>

    <h2 id="general">General presentation considerations</h2>
    <p>
      So now you know how to create a basic slideshow, but there are some considerations to bear in mind when creating such presentations. I will cover them in this section.</p>

<h3 id="resolution">Unknown projector resolutions</h3>

<p>You are usually in complete control of your own computer&#39;s resolution, but often you won&#39;t know the resolution of the projector unit being used to show your presentation. You need to be prepared for this, as a perfect looking slideshow on your 1280 x 960 screen can be mangled on a projector that only supports 1024 x 768, or 800 x 600. In short, do not assume a fixed slide resolution, and keep the layout fluid &#8213; I cannot exaggerate this last sentence enough.
      HTML is a dynamic markup language and is <em>by no means</em> about
      pixel-perfect rendering &#8212; and that is an advantage!
      Your message can be communicated in many layouts, but it&#39;s still the
      same ol&#39; message. You do however need to be careful to test your presentations in a variety of screen resolutions, including 800 x 600 and 1024 x 768. Many projectors support the former these days, with some getting up to the latter.
</p>
 
<h3 id="dualMonitors">Use of dual monitors</h3> 
    <p>When writing content for Full-Screen Mode, dual monitors
      do come in handy - you can edit your documents in your editor on one monitor
      while you view the presentation in full-screen mode on the
      other one. Using this setup you are able to reload without losing the current page/slide position.
    </p>

<h3 id="fileOrganization">File organization</h3>
    
<p>If you need your presentation to be contained in a single file, 
      for instance to ease copying, moving, or distribution, 
      you can either embed all external files in the HTML file using
      <a title="data: URIs" target="_blank" href="http://en.wikipedia.org/wiki/Data_Uri">data URIs</a>
      or data URLs, 
      or you can save everything as a web archive file
      (typical extension .mht) in your 
      browser.
      The former solution is a bit more fiddly because of the effort it takes, and
      because it is not convenient in case of changes. Of course, having multiple files on your machine is a bit fiddly, but it&#39;s not unusable as long as you maintain a decent directory structure for your files.</p>

    <h2 id="extExample">An in-depth look at an extended example</h2>
    <p>As promised, I will now take you through an
      <a title="Extended example" href="presentation-extended.xhtml">extended example</a> in more detail. This presentation includes the following features:
    </p>

    <ul>
      <li>
	Preview in normal viewing mode (so-called <var>screen</var> media type)
	with a style of its own
      </li>
      <li>
	Title slide
      </li>
      <li>
	Slide background
      </li>
      <li>
	Logo on each slide
      </li>
      <li>
	Slide counter
      </li>
      <li>
	Mouse hovering effects 
      </li>
      <li>
	Slide shortcuts (links to slides)
      </li>
    </ul>

    <p>The presentation&#39;s 
      <a title="File with style sheet" href="presentation-extended.css">style sheet</a>
      is divided into several sections.
      There are style properties applied to all media types, 
      properties applying only to <var>projection</var> and <var>print</var>,
      and properties solely for <var>print</var> and solely for 
      <var>screen</var>.</p>

<h3 id="slideLogo">The logo</h3>

<p>The markup for the logo is as listed here.</p>

<pre><code>&lt;div id=&quot;frame&quot;&gt;
  &lt;div id=&quot;logo&quot;&gt;
    &lt;a title=&quot;Homepage&quot; target=&quot;_blank&quot; href=&quot;http://www.example.com&quot;&gt;&lt;img alt=&quot;Image of our logo&quot; src=&quot;http://forum-test.oslo.osa/kirby/content/articles/187-creating-presentationsslideshows-with-html-css/logo.png&quot;/&gt;&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <p>The <var>frame</var> <code>div</code> is  a wrapper included for convenience, in case you want to 
      add other elements like presentation title, mail address, 
      etc. in the same area of the slide. 
      The <var>logo</var> element is placed using fixed positioning 
      on each slide, and it is put in front of everything 
      else with an appropriate <code>z-index</code>.
    </p>

<h3 id="slide">Overall slide structure</h3>

    <p>Each slide is defined as follows:</p>

    <pre>&lt;div class=&quot;slide&quot;&gt;
  &lt;div class=&quot;slideContent&quot;&gt;
    Slide content
  &lt;/div&gt;
&lt;/div&gt;</pre>

    <p>This time I have placed a <code>div</code> of class <var>slideContent</var> inside the outer <code>div</code>. This is needed because I want the slide background to cover the entire slide, but have the slide content in a smaller, inner space, hovering on top of the background. The style snippet below controls this.</p>

<pre><code>div.slide  {
  background: url( &quot;slide_background.png&quot;) #fff no-repeat;
  width: 100%;
  height: 100%;
} 
div.slideContent  {
  padding: 2%;
}</code></pre>

<h3 id="title">The title on the first slide</h3>

<p>The vertical centering of the title on the first slide can &#8213; with CSS 2.1 &#8213; only be accomplished by a table-like structure. This is why there are two nested <code>div</code> elements, named <var>titlePage</var> and <var>titlePageContent</var>, on the first slide.</p>

<pre><code>&lt;div class=&quot;slide&quot;&gt;
  &lt;div class=&quot;slideContent&quot;&gt;
    &lt;div id=&quot;titlePage&quot;&gt;
      &lt;div id=&quot;titlePageContent&quot;&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <p>The corresponding style snippet is given below. The <code>#frame + div.slide &gt; div.slideContent</code> selector sets the <var>table</var> display property only for the first slide.</p>

<pre><code>#frame + div.slide &gt; div.slideContent {
  display: table;
}
#titlePage  {
  display: table-row;  
}
#titlePageContent  {
  display: table-cell;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}</code></pre>

<h3 id="defaults">Overriding default page layout</h3>

<p>The <code>slide</code> <code>div</code> has been designated as the container for the slides, and we don&#39;t want the <code>html</code> and <code>body</code> to affect the slide layout. We ensure this via the following style rule. If this were excluded from the stylesheet, slides would not fill the entire screen due to the effect of the default browser style sheets.</p>

<pre><code>html, body {
  margin: 0;
  padding: 0;
  width: 100%;  
  height: 100%;
}</code></pre>

<h3 id="scrollbar">Avoiding an unsightly scroolbar</h3>

    <p>We also have to take care of situations where the content of a slide
      extends to fill the available space - this applies to both the horizontal and vertical directions. To avoid an unsightly scrollbar appearing, the following rule is used:</p>

<pre><code>div.slide {
  overflow: hidden
}</code></pre>


<p class="note">This addresses only the <em>visual display</em> of the scrollbars; scrolling may be possible even though no scrollbar is shown.</p>

<h3 id="printouts">A style for print media type</h3>

<p>Also, check out the <code>@page</code> rule in the 
      <a title="File with style sheet" href="presentation-extended.css">presentation style</a> - this comes into play when you print the presentation. When printing, you don&#39;t want additional space added around the page. This is why both <code>margin</code> and <code>padding</code> are set to zero there.</p>

<h3 id="allMedia">Styling for all media types</h3>
    <p>
      The <code>@media screen</code> section is used for your convenience to show a preview of the presentation &#8213; you will want some different styling when viewing the presentation as a normal web page, but keep it as close to the projection layout as possible, such that an effective preview is possible. Personally, I prefer to have as many style properties as possible in 
      the section common for all media types, and a minimum number
      of properties in the sections for a particular media type
      to avoid repetition and to increase 
      consistency.</p>

<h3 id="fontSize">What font-size to choose?</h3>
    <p>
      Finally, I&#39;d like to comment on the style snippet
      <code>body {font-size: 42px}</code>.
      You may believe that 42 is the 
      <a title="The answer to life, the universe, and everything" href="http://en.wikipedia.org/wiki/Answer_to_Life,_the_Universe,_and_Everything">answer</a>, 
      to most things in life, but it is in fact an arbitrary number
      here. You have to balance readability and space 
      considerations - the bigger the font, the more readable it will be by the
      audience, but the less content will fit on one
      slide. Luckily the zooming functionality is pretty mature in both Opera and Firefox, but mind that zooming in will not only increase the font size but also images and other embedded
      objects.</p>

<p>Zooming will cause the page content to reflow, which is why you have to keep
      the layout fluid. So the actual value of the font size as given above is not that 
      important because you can adjust the font size with the zoom to suit
      your or the audience&#39; needs.
      In addition, reflow zooming is a pretty cool effect that no other 
      presentation application has (to my 
      knowledge) &#8213;  at the beginning of your talk you can ask if the audience are able 
      to read your content; if not you can adjust the zoom factor on the 
      fly!
</p>

    <h2 id="conclusions">Conclusions</h2>
    <p>
      In this article I have demonstrated the basics of creating HTML and CSS presentations, 
      and I provided templates that you can use for
      your own slideshows.
</p>
<p>
      Combining HTML and CSS for writing presentations is a powerful 
      combination, and it will become even more powerful when the browsers discussed both have complete support for CSS 3 and SVG 1.1.
      If you know JavaScript on top of that, you can either add your own scripts
      or make use of any of the seemingly countless libraries,
      and the possibilities become endless.
</p>

    <h2 id="furtherReading">Further reading</h2>
    <ul>
      <li>
	<a title="Testing Projection media type" target="_blank" href="http://www.codestyle.org/css/media/projection-ProjectingYourStyle.shtml">Testing projection media type</a>
	and
	<a title="Projection media type support" target="_blank" href="http://www.codestyle.org/css/media/projection-BrowserSummary.shtml">Browser support matrix</a>
	for projection media type (the latter not very up to date)
      </li>
      <li>
The Firefox add-on
<a title="Firefox add-on FullerScreen" target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/4650">FullerScreen</a>
      </li>
      <li>
	See also the links to the other HTML presentation solutions in the 
	<a title="Introduction" href="#introduction">Introduction</a>
      </li>
    </ul>


