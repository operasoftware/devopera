Title: Accessibility basics
----
Date: 2008-09-26 06:25:31
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
<li class="prev"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rev="prev" title="link to the previous article in the series">Previous article—Validating your HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rel="next" title="link to the next article in the series">Next article—Accessibility testing</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<p class="note">Stella Systems have made a wonderful video that uses the text from the first part of this article as spoken word dialog, along with fantastic illustrations, and English and Russian subtitles. <a href="http://www.youtube.com/watch?v=B-ERNJgAJ7s">Watch the video on youtube</a>. Thanks to Dmitry Nechiporenko, Anton Pashchenko, Lucy Stepanovska and Leonid Strorozhuk for this.</p>

        <h2>Introduction</h2>

        <p>When you create a web site, accessibility—making the web site usable by everyone, regardless of their ability or disability—should always be a central concern. So far in this course accessibility has always been implicit in all the examples you’ve seen, even if you didn’t realise it; in this article I’ll now look at accessibility explicitly, so you can understand fully what it is, why it is important, how to ensure that sites are accessible, and what guidelines exist to define accesible sites. The table of contents is as follows:</p>
        
         <ul>
 <li><a href="#whatisaccessibility">What is accessibility?</a></li>
 
  <li><a href="#whyisitimportant">Why is accessibility important?</a>
  <ul>
  <li><a href="#legalities">The legalities of accessibility</a></li>
  <li><a href="#potentialmarkets">Potential markets</a></li>
  <li><a href="#searchengines">Search engines</a></li>
  <li><a href="#ethics">Ethics and branding</a></li>
  </ul>
  </li>
  <li><a href="#designingaccessibility">Designing with accessibility in mind</a></li>
  <li><a href="#interoprequirements">Interoperability requirements</a></li>
  
  <li><a href="#accessiblefeatures">Features of an acessible web page</a>
  <ul>
  <li><a href="#semanticstructure">Semantic structure</a></li>
  <li><a href="#alternativecontent">Alternative content</a></li>
  <li><a href="#interaction">Defining interaction</a></li>
  </ul>
  </li>
  
  <li><a href="#accessibilitystandards">Standards for accessibility</a>
  <ul>
  <li><a href="#WCAG1">Web Content Accessibility Guidelines 1.0</a></li>
  <li><a href="#WCAG2">Web Content Accessibility Guidelines 2.0</a></li>
  <li><a href="#section508">Section 508</a></li>
  <li><a href="#otherstandards">Other standards</a></li>
  </ul>
  </li>
  
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
 </ul>
        
        <p>Before I look specifically at accessibility on the web, let’s start by looking at accessibility in general terms—after all, accessibility isn’t just a concern associated with web sites; it is potentially a concern with every service, object or technology you’ll come across in life.</p>

<p class="note">Note that an associated topic to learn about is <a href="http://www.w3.org/WAI/intro/aria">WAI ARIA</a>—the Web Accessibility Initiative’s Accessible Rich Internet Applications initiative, which is basically a methodology to allow the creation of more accessible Ajax/JavaScript-powered applications. You can find a <a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">great introductory article covering ARIA on dev.opera.com</a>.</p>

        <h2 id="whatisaccessibility">What is Accessibility?</h2>

        <p>Look around. Hopefully you will see some other people; if you don’t, why not take a quick walk? You’d probably enjoy it and it would do you good. None of the people you will see around you are the same—some have brown hair, some don’t. Some have blue eyes, some don’t. Some wear glasses, some don’t. None of us are completely alike. Some differences like hair or eye colour are cosmetic—they don’t significantly affect the way we live our lives. Some differences, like wearing glasses, do. Accessibility is a simple thing, a philosophy, although in some countries it is also part of the law.</p>
    
        <blockquote>
            Accessibility is treating everyone, no matter what their ability, the same.
        </blockquote>

        <p>I realise that this statement is open to interpretation. Most discussions of <em>accessibility</em> first talk about <em>disability</em>. This implies that people with a disability deserve special treatment. This isn’t what accessibility is about—it’s actually a symptom of the way people have traditionally built buildings, web sites, and pretty much everything else in fact.</p>

        <p>When you build things with the assumption that everyone is the same as you, then they will always be wrong for some other people. People assume accessibility is about helping people with disabilities because retrofitted accessibility is very obvious in our societies. For example, a lot of buildings that started life with only steps have suddenly sprouted cheap ugly ramps. However, accessibility has long been a feature of military design. Why? because it is often critical for survival—at high g-forces jet fighter pilots can’t do the same things they can do on the ground. If aircraft designers didn’t take the needs of pilots in both high and low gravity environments into account then there would be a lot more plane crashes.</p>
        
        <p>So, what does this mean for web site developers? The short answer is that you need to try to be more aware of the needs of the entire audience that might look at your site. A longer answer might require you to learn a little about the differing levels of ability people can have, and how they use computers. By applying the techniques outlined in this curriculum and other related articles you can create sites that work with many forms of interaction. Your web sites will be usable by people whether they:</p>
        
        <ul>
        <li>Are blind or severely visually impaired, and listen to web sites using a screen reader, or feel them on a braille display.</li>
        <li>Are shortsighted, and blow them up to 200% font size.</li>
        <li>Have motor disabilities so can’t use their hands to manipulate a mouse, and therefore use a pointing stick to manipulate the keyboard, or an eye pointer to manipulate the web site.</li>
        <li>Use trackballs, or other more unusual types of computer control system.</li>
        </ul>
        
        <p>Don’t worry about the specific details of these interactions— we’ll go through those step by step next.</p>

        <h2 id="whyisitimportant">Why is Accessibility important?</h2>

        <p>Accessibility is important for one big reason and a whole lot of little ones. The main one is that <em>we are all different and yet we all have an equal right to use web sites</em>, but there are lots of other reasons why you should make accessibility considerations a part of how you build web sites:</p>

        <ul>
            <li>In some countries it’s the law.</li>
            <li>You don’t want to exclude any potential customers/visitors from using your site.</li>
            <li>Accessible sites tend to rank higher on search engines.</li>
            <li>You are demonstrating good ethics—something that customers will value.</li>
            <li>Once you build web sites with web standards it hardly requires any extra effort to make it accessible, which gives so many benefits; there is also a lot of crossover between sites being more accessible, and sites being more compatible with mobile phone browsers—another circumstance that makes web site harder to use, although for different reasons. In fact, some work has been done on analysing the relationship between web accessibility and mobile web development best practices—see <a href="http://www.w3.org/WAI/mobile/">the WAI &quot;Web Content Accessibility and Mobile Web&quot; page</a> for more.</li>
            <li>Techniques that help people with disabilities benefit all users.</li>
        </ul>
        
        <p>Now I will move on to look at some of these points in more detail.</p>

        <h3 id="legalities">The legalities of accessibility</h3>
        <p>Note: it’s important to understand the basics of the legal stuff but unless you are a lawyer and really know what you are talking about, you should take extreme care giving an opinion about legal issues.</p>
        <p>In the UK, under the <a href="http://www.direct.gov.uk/en/DisabledPeople/index.htm"><abbr title="Disability Descrimination Act 1995">DDA</abbr></a>, it is illegal to discriminate against disabled people when recruiting and employing people, and providing services or education. Discrimination is defined as not making “reasonable adjustments” to support everyone, regarldess of (dis)ability. This applies of course to making services or education available via the medium of web sites.</p>

        <p>In the USA and European Union there are also requirements for Governmental web sites. In the USA, federal government (and some state government) web sites are expected to abide by <a href="http://www.section508.gov">Section 508</a>. Section 508 is a document that tries to define what the minimum requirements are to achieve accessiblity. Section 508 covers more than just web sites; it also deals with any other technology that might be used by a federal employee. In Europe the European Commission has recognised the <abbr title="World Wide Web Consortium">W3C</abbr>’s Web Accessibility Initiative (WAI) and recommended it for use with all member states. The <a href="http://w3.org/WAI"><abbr title="Web Accessiblilty Initiative">WAI</abbr></a> produces guidelines for web sites, web authoring tool manufacturers and web browsers (for example, the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>, which I’ll look at later on.)</p>

        <h3 id="potentialmarkets">Potential Markets</h3>
        <p>When you only make web sites (or anything else) for one specific type of person you are excluding other types of people even if you don’t realise it, and these people can easily add up to a significant (if not a majority) market share. In 2000 the UK supermarket chain Tesco started a project to make a separate version of their online grocery site specifically targetting people with visual impairments. It was noted by Julie Howell of the <abbr title="Royal National Institute of the Blind">RNIB</abbr> that “<q>Work undertaken by Tesco.com to make their home grocery service more accessible to blind customers has resulted in revenue in excess of &#xA3;13m per annum, revenue that simply wasn’t available to the company when the web site was inaccessible to blind customers.</q>” So if Tesco hadn’t considered people with visual impairments they would have been missing out on a market of customers that was worth at least &#xA3;13 million.</p>

        <p>The core lesson here is that people of all abilities need the same services; groceries, taxis, electricity; and enjoy the same things; films, music, bars. Assuming that someone’s personal situation in life changes their ability or desire to participate in all aspects of society has been shown to be a mistake time and time again.</p>

        <h3 id="searchengines">Search Engines</h3>
        <p>Search engines are not people. Often when people build web sites they do it without considering how they are going to be found on Google, Yahoo, etc. Search engines are just computer programs, and they can only use information they can understand to index your site. This makes them much like the screen readers that a person with a visual impairment might use.</p>

        <p>The most obvious example of how this affects web design is images. Computers display images by having a list of what colour every pixel is and sending that information to the monitor. If you put an image on a web page that contains some text, for example a logo, the computer has no idea what that text says or even that the image contains text. In HTML the image element contains a way to describe in text the contents of an image, the <code>alt</code> attribute. You should provide text to describe all non-decorative images on your site, and you certainly shouldn’t represent whole paragraphs of text as images (or Flash for that matter)—blind people and search engines won’t have a clue what the text says! As a result, your search engine ranking (ie how easy it is to find your web site using search engines such as Google) will suffer and you’ll be needlessly missing out on a valuable market.</p>
        
        <h3 id="ethics">Ethics and branding</h3>
        <p>While everyone <em>should</em> support Accessibility, it doesn’t mean that everyone does. By supporting accessibility you are acting in the best interests of the community. This is something you can be proud of—showing that you care about everyone in society can only enhance a brand image. As professionals it’s our job to try and produce the best quality output we can. In a society that values us as individuals it’s important to not exclude someone because they have different needs.</p>
        
        <p>By making responsible choices in policy and genuinely demonstrating that you are implementing those policies you can create an extremely positive brand image. Companies that show that they care about their customers will retain much more loyalty than those that don’t.</p>

        <h2 id="designingaccessibility">Designing with Accessibility in mind</h2>
        <p>The key to accessibility is thinking about a problem and knowing you are going to solve it for more than one kind of user. If you try to treat accessibility like something you can bolt on at the end then you will get a nasty-bolted-on-at-the-end thing. It’ll take longer, won’t work as well and look damned ugly.</p>
        
        <p>The best way to achieve a well-engineered solution is to design with all the requirements in mind from the start. This doesn’t mean you shouldn’t change your plan or add some things you missed, but you should try to be aware of what the complete problem you are trying to design for is. In the case of web sites this means creating a solution usable by all your users including those who may not be able to use a mouse, or a keyboard, or a monitor, etc.</p>

<h2 id="interoprequirements">Interoperability requirements</h2>

<p>Interoperability requirements are especially likely to vary from situation to situation.</p>

<p>New technology is often introduced without support for accessibility. For example, Microsoft’s new Silverlight plugin does not expose information via the accessibility APIs used by screen readers and other assistive technology, although such support is planned for the future.</p>

<p>Where support is theoretically present it can take time for assistive technology to make use of it. Newer screen readers work much better with JavaScript-triggered updates to HTML structures than older screen readers, for instance.</p>

<p>Even when long-established, accessibility support may continue to differ across platforms. For example, the Adobe Flash Player plugin has long exposed information to the Windows accessibility API, but not to the Apple or GNOME equivalents.</p>

<p>There also tends to be a lag between the arrival of supporting technology and its wide distribution. Whereas browsers and plugins nowadays tend to be free, whereas mainstream assistive technology can be very expensive. For example, one of the most popular screen readers is Freedom Scientific’s JAWS for Windows. A new version comes out roughly every year. JAWS Professional retails for $1,095, and even if you spend $200 to get a Software Maintenance Agreement for the next two versions, upgrades will still cost $500 or more. Consequently, although the latest release is version 9, you can still find lots of JAWS users using older versions.</p>

<p>So when you aim to build websites for the public Web, you need to take some account of interoperability with a highly varying client-side user/technology combination. There are four approaches:</p>

<ul>
<li>Progressively enhance your web site, testing for support as you go.</li>
<li>Allow users to turn off problematic enhancements.</li>
<li>Provide alternate versions with the same content or functionality.</li>
<li>Advise your clients on what technologies they need to support and give examples of companies that do support those technologies.</li>
</ul>

<p>Within intranets, backwards compatibility and variety is less of a concern. A given organization might be able to guarantee that all employees with disabilities will have access to assistive technology with decent support for DHTML, for example. In such circumstances, and with proper testing with the provided assistive technology, it would be reasonable to treat JavaScript as a baseline.</p>

<p>Forward compatibility and cross-platform compatibility are still issues however, so open, standard technologies should be preferred over proprietary, non-standard technologies.</p>

<p>For example, you might be developing an intranet training application for a large corporation. They have asked you to ensure the application is accessible, but have not specified a standard to which you must conform. You speak to their IT department and find out that everyone has the latest version of Internet Explorer, with JavaScript enabled, Flash installed and enabled, and will be provided with modern assistive technology they need to support those items. Now, even if the company moves to Unix-based platform, there will be assistive technology that supports JavaScript, but Flash text and controls are only accessible on Windows. You can safely make scripting and Flash a baseline requirement for your application. But you decide to only use Flash for playing video, and to build the control sets for the Flash video from web standards, since Flash controls are only accessible to assistive technology on the Windows platform. That way, the application would still be accessible even if the company migrated to Unix.</p>

<p>Organizational IT policies may change, and the best attempts to make JavaScript functionality operable and exploit the accessibility feature-sets of plugins may fail, so even if you have a technology baseline progressive enhancement from a core HTML layer is still a good idea.</p>

        <h2 id="accessiblefeatures">Features of an accessible web page</h2>
        <p>In this section I will go through the different accessible features of a web site—that is, what an accessible web site should contain. I’ll explain each one in detail.</p>
        
        <h3 id="semanticstructure">Semantic structure</h3>
        <p>One of the foundations of web standards is the use of semantic structure in HTML. Semantic structure is also extremely important for accessibility. This is because it provides the framework for the information on the page. When people can’t see the visual style of the page, the semantic structure helps to indicate a number of things to them. It can indicate their position in the heirarchy of the document and the ways they can interact with the different elements of the page, as well as providing emphasis to textual content in the right places.</p>
        
        <p>A good example of how the semantic stucture of a document is important to accessiblity is navigation. A well structured navigation menu is a list of items. You can mark this up as an HTML list:</p>
        
<pre><code>&lt;ul&gt;
  &lt;li&gt;Menu Item 1&lt;/li&gt;
  &lt;li&gt;Menu Item 2&lt;/li&gt;
  &lt;li&gt;Menu Item 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        
        <p>By having navigation menus structured as lists it is easy to let someone using a screen reader, who can’t see the list, know it’s a list. This is because their screen reader tells them it’s a list. If you don’t use list markup then the screen reader has no way of knowing it&#39;s a list and telling the user.</p>
        
        <p>You can find more information on how to use the correct semantics in your HTML in many of the earlier articles in the course, mainly the ones that cover HTML.</p>
        
        <h3 id="alternativecontent">Alternative content</h3>
        
        <p>As mentioned in the <a href="#searchengines">section about search engines</a>, ensuring that there is an accessible alternative to content and navigation is essential. Text is considered the universal currency of content with <a href="#cognitive_and_text_alternatives">one caveat</a>, as you’ll see below. Text can be easily read aloud by a screen reader, made bigger or smaller, have its contrast easily altered and many other transformations. It’s because it is so easy to manipulate text that more exotic forms of content should have a text-based alternative to them. Some formats, like the newer versions of Flash, have text access built into them so that the textual content within them can be accessed directly without needing to provide an alternative for the whole medium.</p>

        <p id="cognitive_and_text_alternatives">The one disability group that a text alternative can’t necessarily support is people with cognitive disabilities. The difficulty with supporting people with cognitive disabilities is that often they require different content, rather than the same content in a different medium. This is not to suggest you shouldn’t try. Simplifying the language and terminology used on your site benefits everyone. Groups like the <a href="http://www.clearest.co.uk">Plain Language Commission</a> have been advocating a “plain speech” approach to the material companies use to inform their customers of important information such as legal requirements and terms and conditions. They provide a <a href="http://www.clearest.co.uk/?id=46">plain english lexicon</a> containing terms that can be used to help communicate effectively using the simplest language possible.</p>        
        
        <p>How should you implement text alternatives on your site? The first step is to identify things that aren’t already text. In <abbr title="HyperText Markup Language">HTML</abbr> there are only so many things that aren’t already text. Images are the most obvious ones. Here is an example of an accessible use of an image:</p>
        
<pre><code>&lt;p&gt;An interesting piece of art is Michelangelo’s “God creates Adam”
&lt;img src=&quot;images/adam.jpg&quot; alt=&quot;A painting of a man reaching up to touch God’s hand
reaching down. It is cracked with age.&quot; longdesc=&quot;adam.html&quot;&gt;.&lt;/p&gt;</code></pre> 
        
        <p>The image in this example is an integral part of the content. The <code>alt</code> attribute contains a short description of the image for people (or search engines) that might not be able to see the image correctly. The <code>longdesc</code> attribute allows you to link to an <abbr title="HyperText Markup Language">HTML</abbr> page containing a full description of the image. This is generally only used to describe complex images that are used as central content. It also suffer from poor support in  browsers. Most of the time you will only use the <code>alt</code> attribute.</p>
        
        <p>When images are used for things other than content, such as navigation, or purely visual decoration you should treat them differently from  content images. Images used to make buttons or page navigation look more attractive should have an <code>alt</code> attribute that matches the text in the image. The <code>alt</code> attribute simply functions as an easy way to allow the computer to read the text contained in the image (and hence read it to the user of a screen reader).</p>
        
        <p>In the case of purely decorative images, images used for tracking adverts, or any other image that a user wouldn’t be expected to be interested in or interact with, you should set the <code>alt</code> attribute to be empty. This does not mean omitting the attribute but  setting <code>alt=&quot;&quot;</code>. This is because of a tactic screen readers have used to help their users cope with very inaccessible pages. When an image doesn’t have an <code>alt</code> attribute, especially when it’s part of a link, the screen reader reads the <abbr title="universal resource locator">URL</abbr> of the image to the user. This is so they can guess what the image is from the URL, for example if the image is named something like <code>add_to_cart.gif</code>. Therefore, you should set <code>alt=&quot;&quot;</code> on images that you know the user won’t be interested in, so that screenreaders won’t read out <em>every</em> image’s <abbr title="Universal Resource Locator">URL</abbr>, which could be rather frustrating for the screen reader user.</p>
        
        <p>Not all forms of content are as simple as an image. More complex media like Flash (Flash files can be whole web sites in themselves) or movies require more complex descriptions. The most recent versions of Flash allow you to provide text alternatives for the items within the Flash movie, just like in HTML. </p>
        
        <h3 id="interaction">Defining interaction</h3>
        <p>A lot of today’s web involves the use of technologies in addition to <abbr title="HyperText Markup Language">HTML</abbr>. Even something as basic as <abbr title="Cascading Style Sheets">CSS</abbr> can be used in ways that make a page or interaction much less accessible. The key to accessibility in interaction is starting with the simplest interactions and using those as the building blocks of more complex interactions.</p>

<p class="note">Note that the point of this example is to make you think about the role different things on web pages have. To ensure that they are accessible, they must be semantically sound in terms of both the HTML elements used, and the visual metaphor used. If you find this confusing, then reread the example a few times, and also look a few menus and other web page components, while thinking about not only if the correct HTML is used, but also if the look and feel of the component successfully makes sense in terms of what its functionality is. You wouldn’t expect a web page visitor to search using a text box labeled “enter your mail address to sign up for this newsletter”, nor would you expect a sighted visitor to be able to find content of interest if all the headings were styled just like regular text (similarly, you wouldn’t expect a blind user to find content of interest if all the “headings” were actually just paragraphs made to look bigger using CSS or <code>font</code> elements).</p>
        
        <p>A good example of this is the commonly used visual metaphor of tabs. The tab metaphor is drawn from ring binders indexed by topic. This has been translated to computers to allow a single area on the screen to display the information from various topics represented by tabs connected to that area—you can see a good example of tabs on <a href="http://dev.opera.com">dev.opera.com</a>—look at them at the top of the page. So far it is all reasonably simple. The problem lies in the technologies used to create tabs—they are often implemented using JavaScript.</p>
        
        <p>As soon as tabs are used as part of an interaction more complex than allowing the user to select the information the original metaphor has been broken, but often the same code is still used to represent the tabs. In the example below the <abbr title="HyperText Markup Language">HTML</abbr> shows what a tab control that displays information looks like:</p>

<pre><code>&lt;div class=&quot;tabcontrol&quot;&gt;
  &lt;div class=&quot;hd&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;#dogs&quot; class=&quot;selected&quot;&gt;Dogs&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#cats&quot;&gt;Cats&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#fish&quot;&gt;Fish&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bd&quot;&gt;
    &lt;p id=&quot;dogs&quot; class=&quot;selected&quot;&gt;Some information about dogs. The dogs tab is the default tab.&lt;/p&gt;
    &lt;p id=&quot;cats&quot;&gt;Some information about cats.&lt;/p&gt;
    &lt;p id=&quot;fish&quot;&gt;Some information about fish.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    
    
    <p>In this example the <code>selected</code> class would be used to specify which tab needs to show the “tab to the front” graphic, for example check out the “Articles” tab at the top of this page which uses this method.</p>
        <p>This structure is fine for informational content. In this example, the <code>class</code> of <code>selected</code> would be used to signify which tab is the active tab, ie, the one that is open and displaying its information; the others would be closed (ie, their paragraphs hidden) until their corresponding links are clicked on. The dogs tab is the default active tab, as shown in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/137-25-accessibility-basics/figure1.png" alt="tab control showing the default dogs tab active" />
<p class="comment">Figure 1: A simple tab control showing the dogs tab, the default, active.</p>

<p>Once another link is clicked on (as shown in Figure 2) JavaScript would then be used to dynamically move the <code>class=&quot;selected&quot;</code> to that link, at which point style would be applied to that tab to display it, and the one that was previously displayed would be hidden.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/137-25-accessibility-basics/figure2.png" alt="tab control showing a new active tab after its link has been clicked on" />
<p class="comment">Figure 2: Now a different link has been clicked on, its corresponding tab becomes active.</p>

<p>you will find real working examples of this kind of control in some of the later JavaScript chapters, to be published soon.</p>

<p>It has also become common to use tabs to allow users to select different kinds of searches. In this case the concept starts to break down if you try to reuse the style of code from the previous example:</p>
        
<pre><code>&lt;div class=&quot;tabcontrol&quot;&gt;
  &lt;div class=&quot;hd&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;#dogs&quot; class=&quot;selected&quot;&gt;Dogs&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#cats&quot;&gt;Cats&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#fish&quot;&gt;Fish&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bd&quot;&gt;
    &lt;form id=&quot;dogs&quot; class=&quot;selected&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;dogsearch&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;dogsearch&quot; id=&quot;dogsearch&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Search for Dogs&quot;&gt;&lt;/div&gt;&lt;/form&gt;
    &lt;form id=&quot;cats&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;catsearch&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;catsearch&quot; id=&quot;catsearch&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Search for cats&quot;&gt;&lt;/div&gt;&lt;/form&gt;
    &lt;form id=&quot;fish&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;fishsearch&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;fishsearch&quot; id=&quot;fishsearch&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Search for fish&quot;&gt;&lt;/div&gt;&lt;/form&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        
        <p>Employing the same code structure no longer makes sense—in this case you get the same form elements repeated again and again in order to fit into the concept of replacing content, which is a waste of markup. Instead of thinking visually it’s important to think about the interaction itself. In this example, rather than selecting new information to view the tabs you should be changing the interaction the user has with the search form. In effect the only thing a tab should be doing is selecting what type of animal the user is searching for. If you put this into practice you can create a much better interaction for all users of the site, with cleaner, easier to maintain markup:</p>
            
<pre><code>&lt;form action=&quot;search.html&quot; method=&quot;GET&quot;&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Search within:&lt;/legend&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;label for=&quot;dogs&quot;&gt;Dogs&lt;/label&gt;&lt;input id=&quot;dogs&quot; type=&quot;radio&quot; name=&quot;animal&quot; value=&quot;dog&quot; checked&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label for=&quot;cats&quot;&gt;Cats&lt;/label&gt;&lt;input id=&quot;cats&quot; type=&quot;radio&quot; name=&quot;animal&quot; value=&quot;cat&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label for=&quot;fish&quot;&gt;Fish&lt;/label&gt;&lt;input id=&quot;fish&quot; type=&quot;radio&quot; name=&quot;animal&quot; value=&quot;fish&quot;&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/fieldset&gt;
  &lt;input type=&quot;text&quot; id=&quot;searchfield&quot; name=&quot;search&quot;&gt;
  &lt;input type=&quot;submit&quot; value=&quot;Search&quot;&gt;
&lt;/form&gt;</code></pre>
        
        <p>By creating the interaction first, the markup is cleaner and all users of the site get the best experience possible. When we started by extending a visual metaphor we quickly broke the interaction and created some horrible markup based on the assumptions of the previous example. Had we been using <abbr title="Asyncronous JavaScript And XML">AJAX</abbr> to insert the content instead of having it all on the page, it would have been even worse. Then users without JavaScript would have had to load an entirely new page to get a search form for cats or fish. By thinking about the basic interaction first (rather than the visuals) you can simplify the problem. Now we can still maintain a tab metaphor (albeit with a bit of styling and script) while only using one form for all the searches.</p>
        
        <p>This is the core to understanding how to do accessible interaction. One of the great things about HTML is that the hard work of figuring out how to make the interactions in HTML accessible has already been done. As long as you don’t use the technologies on top of HTML to break the metaphor you can make most things work for most people without much effort.</p>

        <h2 id="accessibilitystandards">Standards for Accessibility</h2>
        <p>In this section I will review some of the standards and guidelines available that aim to define web accessibility, and help web developers to create accessible sites. Most of these systems include some kind of check list system so developers can check how their sites match up to different accessibility criteria.</p>
        
        <h3 id="WCAG1">Web Content Accessibility Guidelines 1.0</h3>
        <p>The <abbr title="World Wide Web Consortium">W3C</abbr> is one of the primary standards bodies on the internet. Their Web Accessibility Initiative (WAI) published the first version of their guidelines for making web sites accessible in May 1999. The Web Content Accessibility Guidlines (WCAG) are the most widely used standard for Accessibility on the Web. The use of <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> has been suggested or mandated by a number of governmental bodies including the <abbr title="European Union">EU</abbr> and the Italian government.</p>
        
        <p><abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> is a set of 14 Guidelines that try to encapsulate the goals necessary to achieving an accessible page. Within each guideline are a number of checkpoints, which are the real meat of the document. While the guidelines explain the concepts the authors had in mind, the checkpoints are what are used to validate conformance. Each of the checkpoints are ranked from priority 1 to priority 3, to illustrate how important they are. In order to conform to <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> you must complete every priority 1 checkpoint. Adhering to all of the priority 1 checkpoints gives you a conformance rating of “A”. If you meet all the priorty 2 checkpoints <em>as well</em> then you conform to “AA”. Should you meet all the priority 1, 2 and 3 checkpoints then you would conform to “AAA”, which is the highest rating.</p>
        
        <p>In reality <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> is a little old-fashioned. A lot of companies start by conforming to level “A” or “AA” and then look to add other guidelines such as the <abbr title="Royal National Institute for the Blind">RNIB</abbr>’s <a href="">See it Right</a>. <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> is a good starting point, but you should be looking towards some of the newer standards, especially if you use a lot of JavaScript, or other technologies that matured after 1999, when the <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> was released.</p>
        
        <p>Another important thing to note about the <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> standard is it was designed to be part of a suite of 3 documents. Another one covered “User Agents”, which describes browsers (like Opera) and any extra technology people might need to use the web (like screen readers). The third covered authoring tools such as Dreamweaver or content management systems—it aims to try to make these tools do more of the work of making pages accessible. Unfortunately this vision hasn’t played out and the only standard out of the 3 to be widely adopted was <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>. This means that often the expectations of <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> regarding user agents aren’t met, and very little of the burden of making web sites accessible is taken off you by authoring tools. This doesn’t mean you shouldn’t use <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>; it simply means that it only meets part of accessiblity and is not a complete solution.</p>
            
        <h3 id="WCAG2">Web Content Accessibility Guidelines 2.0</h3>
        <p>Since publishing <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>, the <abbr title="World Wide Web Consortium">W3C</abbr> has been working on <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr>. This updated version of the standard is still in draft at the time of writing. Subject to the process of the <abbr title="World Wide Web Consortium">W3C</abbr> it will probably be a published standard by early 2009.</p>
        
        <p><abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> is slightly different in it attempts to be more technology-agnostic than <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>, ie it could be applied to HTML, CSS, Flash, etc. <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> is based on 4 principles for accessibility. These are:</p>
        
        <dl>
            <dt>Perceivable</dt>
            <dd>People can access the content through a medium available to them. For example people who can’t see should be able to hear the content </dd>
            <dt>Operable</dt>
            <dd>People can interact with the web application or content.</dd>
            <dt>Understandable</dt>
            <dd>The content and user interface is understood by the people who are using it.</dd>
            <dt>Robust</dt>
            <dd>Any solution provided should be using widely available on different platforms or systems. This is to stop people inventing solutions that the majority of people wouldn’t be able to use because the hardware/software is restricted or prohibitively expensive.</dd>
        </dl>
        
        <p>It’s important to note that web sites aren’t expected to fulfill all of these requirements. The technology a user has should do some of the work too. For example it is expected that a screen reader will read pages to people who need it, rather than every web site providing an audio version of the content.  However, the web site is expected to provide pages that can be read using common screen reading technology in order to make this possible. This difference is important, as it’s the difference between a web site with an “accessibility widgets” (like a button to make the fonts a bit bigger) and a web page that will work in a multitude of different situations (eg varying browsers and devices that would be impossible to anticipate).</p>
    
        <p><abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> also differs from <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> in the approach to technology. Since the standard is more technology-agnostic and deals with concepts about accessibility rather than concrete technical details it’s important to pay attension to the surrounding documents to the standard. The <a href="http://www.w3.org/TR/WCAG20/">“standard” document</a> of <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> will provide the understanding but the <a href="http://www.w3.org/TR/WCAG20-TECHS/">“techniques” document</a> provides solid implementable pieces of information for the developer. This is broken up into “general” techniques (technology ambiguous) and specifics for individual <abbr title="World Wide Web Consortium">W3C</abbr> technologies. The <abbr title="World Wide Web Consortium">W3C</abbr> doesn’t write documents for proprietary technologies so you’ll have to find techniques for technologies like Flash and Silverlight from other sources.</p>
        
        <h3 id="section508">Section 508</h3>
        
        <p><a href="http://section508.gov">Section 508</a> is an extension to the American Workforce Rehabilitation Act of 1973. The version of Section 508 that became law in 1998 created a process that must be followed during US Federal government procurement. This means that all government agencies in the USA that are funded by federal money must comply with the process and guidelines set down in Section 508. These guidelines cover both web accessiblity and other accessibility issues relating to computers and electronic communication. Whatever else you might have heard, there is no federal law mandating the use of Section 508 beyond the organisations described above. However, some US states and companies use Section 508 to define “accessibility” for their own procurement processes.</p>
        
        <p>The part of Section 508 that covers web accessibility is <a href="http://www.access-board.gov/sec508/standards.htm#Subpart_b">Subpart B &#xA7; 1194.22</a>. Clause 1194.22 is split into 16 requirements labeled <em>a</em>-<em>p</em>. The first 11 requirements (<em>a</em> through <em>k</em>) are stated as being directly equivalent to parts of <abbr title="The Web Content Accessibility Guidelines version 1.0">WCAG 1.0</abbr>. The requirements and their equivalents in <abbr title="The Web Content Accessibility Guidelines version 1.0">WCAG 1.0</abbr> are listed in a reference table in the section 508 document. All the other requirements of Section 508 should be met by <abbr title="The Web Content Accessibility Guidelines version 2.0">WCAG 2.0</abbr> with one exception. Requirement <em>m</em> refers to Section 508 <a href="http://www.access-board.gov/sec508/standards.htm#Subpart_b">Subpart B &#xA7; 1194.21</a>. This requirement has a partial equivelent in the <q>Robust</q> principle of <abbr title="The Web Content Accessibility Guidelines version 2.0">WCAG 2.0</abbr>.</p>
        
        <p>As of the time of writing of this article there was an ongoing investigation in to a <a href="http://webaim.org/teitac/wiki/EWG~Draft_Jan_7.php">new version of section 508</a> by the Telecommunications and Electronic and Information Technology Advisory Committee (TEITAC). TEITAC presented its findings to the assessment board for Section 508 in April 2008.</p>
        
        <h3 id="otherstandards">Other standards</h3>
        
        <p>Another important standard being developed by the <abbr title="World Wide Web Consortium">W3C</abbr> is the <a href="http://www.w3.org/WAI/intro/aria">WAI-ARIA</a> standard. This stands for Web Accessibility Initiative—Accessible Rich Internet Applications. It is a suite of documents that defines how to make complex web applications that use technologies like <abbr title="HyperText Markup Language">HTML</abbr>, JavaScript and AJAX accessible. This standard is officially supported by the upcoming/current versions of most of the major browsers in the market place: Opera 9.5+, Internet Explorer 8+ and Firefox 3+.</p>
        
        <p>There are many other standards for web accessibility too numerous to go into much detail about. The <abbr title="World Wide Web Consortium">W3C</abbr> maintain an excellent <a href="http://www.w3.org/WAI/Policy/">list of international policies relating to web accessibility</a>—this is a great resource to help find the policy documents relating to your local government.</p>

        <h2 id="summary">Summary</h2>
        <p>Accessibility is an important topic for both economic and social reasons. It is not a feature of a web site, but a measure of the quality it was built with. If you consider your site&#39;s audience as you are building it (and before) you will build more accessible pages with all the benefits that this brings. There are a number of well-known guidelines to help you—by conforming to those guidelines you can ensure that what you have built meets expert criteria in making your pages accessible.</p>
        
         <h2 id="exercises">Exercise questions</h2>
        <ul>
            <li>Give 3 reasons why it’s important to build accessible web sites.</li>
            <li>Use the internet to research the accessiblity laws in your country and make a list of any laws that you think would apply to your web sites. Make sure you include if they ask you to use any web standards such as <abbr title="The Web Content Accessiblity Guidelines">WCAG</abbr> or Section 508.</li>
            <li>Explain how accessibility is important to search engine optimisation.</li>
            <li>Create an example of an accessible use of alternative content using some of your own content, such as a photo.</li>
            <li>Use the internet to research how you would make a technology like Flash or Silverlight accessible and write a comparison between making them accessible, and how you make HTML accessible.</li>
            <li>Explain how you would design an interaction on a web page to be accessible. Create the step by step instructions for creating a tree control (you don’t actually have to make it).</li>
        </ul>


<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rev="prev" title="link to the previous article in the series">Previous article—Validating your HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rel="next" title="link to the next article in the series">Next article—Accessibility testing</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
        
        <h2>About the author</h2>


<img src="http://forum-test.oslo.osa/kirby/content/articles/137-25-accessibility-basics/tomcroucher.jpg" class="right" alt="author Tom Hughes-Croucher" />

<p>Tom Hughes-Croucher has been working in the Internet industry since he has been working. He has contributed to a number of standards on Web technology for standards bodies such as the World Wide Web Consortium (W3C) and the British Standards Institute (BSI). More recently he worked in the Digital Music business providing digital music solutions to well known UK brands like Tesco, Three telecom and Channel 4.</p>

<p>Tom now works for Yahoo! as a technical evangelist. Specialising in front-end web technology and RESTful web services he likes to promote best practice wherever he can. Before that he looked after the European Frontpages serving many millions of European visitors a month—he just doesn’t find scaling scary any more.</p>
