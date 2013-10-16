Title: Introduction to The Web Standards Curriculum/Table of Contents
----
Date: 2008-07-08 07:30:19
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
<li class="next"><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/" rel="next" alt="link to the next article in the series">Next article—The history of the Internet and the web, and the evolution of web standards</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>For a while now, I’ve had a dream. My work in the last 8 or 9 years has been heavily focused around education, whether I’ve been commissioning and editing technical books to help people create cool stuff with technology, training new employees at the various companies I’ve worked for, or editing and writing tutorial articles to help people use Opera’s software. I am passionate about the Web too, and a big believer in open web standards. I wanted to do my bit to help make the Web a better place, and I think this comes back to education, whether that’s teaching people how to collaborate and have more respect for one another, or teaching them how to make their web sites work across platforms and devices, and be accessible to people with disabilities. Web standards are key to the latter, so I decided to try putting my time and energy into something that would help increase the adoption of web standards on the Web today and in the future. It has been floating around my head for a while now, but it has finally come to fruition at Opera—many thanks to my wonderful employers for paying me to do this! One of my dreams has finally been realised.</p>

<p>So in this article I introduce to you the product of a lot of hard work over the last several months (by myself and a lot of other people)—<strong>the Web Standards Curriculum</strong>, a course designed to give anyone a solid grounding in web design/development, no matter who they are—it is completely free to use, accessible, and assumes no previous knowledge. I am mainly aiming this at universities, as I believe the standards of education in web standards to be somewhat lacking at many universities. I’ve heard tales of students being marked down for using web standards in their coursework, because the marking schemes are so outdated; I’ve also heard tales of employers despairing because when they interview university graduates for web–related positions, they find out that the graduates really don’t have a clue about real world web development. If you’re at a progressive university that does teach web standards in a reasonable fashion, then I tip my hat to you—<a href="#contact">get in touch</a>!</p>

<p>In this article I’ll cover the following:</p>

<ul>
<li><a href="#webstandards">Why web standards?</a> Here I briefly discuss the advantages of using web standards, why they are not being adopted like they should, and how my course aims to tackle these issues</li>
<li><a href="#structure">How the course is structured</a>. What it says on the tin; this section also talks about how educators should think about presenting the material to use it effectively in courses</li>
<li><a href="#who">Who should use this course?</a> When I say “anyone”, who do I mean, exactly?</li>
<li><a href="#toc">The table of contents</a>. Skip to this bit if you’re fed up with my waffle and want to get straight to the learning.</li>
<li><a href="#acks">Acknowledgements</a></li>
<li><a href="#contact">Contact me</a></li>
</ul>

<h2 id="webstandards">Why web standards?</h2>

<p>The main reasons that adopting web standards in your web design/development work is such a good idea are expanded on in article 4, but I’ll go through them briefly here, to set the scene. Using web standards confers the following benefits:</p>

<ol>
<li><strong>Efficiency of code</strong>: As you’ll learn throughout the course, a lot of best practice web standards usage is all about reusing code—you can separate your HTML content from your stylistic (CSS) and behavioural (JavaScript) information, allowing your file sizes to be kept small, and code to be written only once, and then reused wherever it is needed.</li>
<li><strong>Ease of maintenance</strong>: This follows closely on from the last point—if you can write HTML only once, and then apply styles and behaviour wherever they are needed using classes and functions, then if you need to change something at a later date, you can just make the change in one place and it propagates throughout the entire web site, rather than having to specify that change everywhere that it is needed!</li>
<li><strong>Accessibility</strong>: The next two points are closely related—one of the big issues on the Web is <em>making web sites accessible to everyone, no matter who they are, regardless of circumstance</em>. This includes making web sites usable by people with disabilities such as blindness/visual impairment and motor impairment (ie, people who have restricted movement, and might not be able to use their hands properly, or at all). By using web standards and best practices, you’ll be able to make your web sites usable by this significant group of the web audience with no extra effort.</li>
<li><strong>Device compatibility</strong>: by this, I mean ensuring that your web sites will work not only across different platforms—ie Windows, Mac, Linux—but also alternative browsing devices, which these days can include mobile phones, TVs and games consoles. These devices have limitations such as screen size, processing power, control mechanisms available and more, but the good news is that again, using web standards and best practices, you can pretty much guarantee that your web sites will work on most of these devices. There are more mobile phones in the world than PCs, a lot of which are Internet–capable, so can you or your clients afford to miss out on this market? For more on mobile web development, check out some of the dedicated <a href="http://dev.opera.com/mobile/" alt="mobile web development articles">mobile articles on dev.opera.com</a>.</li>
<li><strong>Web crawlers/search engines</strong>: By this, we are talking about what is termed <em>search engine optimization</em>—the practice of making your web sites as visible as possible to the so–called web crawlers that trawl the web and index web sites, and therefore giving you better search rankings on sites such as <a href="http://www.google.com" alt="Google home page">Google</a>. There is a science to this (see SEO articles such as <a href="http://dev.opera.com/articles/view/intelligent-site-structure-for-better-se/">Intelligent site structure for better SEO!</a> and <a href="http://dev.opera.com/articles/view/semantic-html-and-search-engine-optimiza/">Semantic HTML and Search Engine Optimization</a>) but yet again, just by using web standards you will make your site a lot more visible on Google, Yahoo!, etc., which is good for business.</li>
</ol>

<p>Even with all these advantages however, most sites on the Web still do not follow web standards, and many web developers working today still use bad, outdated practices. “Why?” You ask. There are a number of reasons for this—people will cite lack of education, company policy, not needing to learn standards because they are getting paid anyway, it’s too hard to learn, standards support in web browsers…let’s look at each one of these in more detail, and then look at the counter arguments, to try to get rid of any excuse for not adopting/learning standards.</p>

<ol>
<li><strong>Lack of education</strong>: There is an issue here, but this is one of the main reasons this course was created. A lot of universities don’t teach web standards in their web–related courses, and a lot of curriculums tend to contain outdated practices, and are hard to change due to bureaucracy. Books and training courses tend to be expensive. But wait! Now we’ve provided a course that’s free, and are running around universities etc to help make these changes for them, so there’s really now no excuse here.</li>
<li><strong>Company policy</strong>:  There is no doubt that some companies/institutions still have really old and outdated web sites.  They may have policies that force their employees to use outdated browsers, but it is getting better, and now there is a free course available to easily show how to make changes, things should improve further.  Upgrading a web site to modern standards encourages companies to upgrade the browsers that they use, as sites will not look as good in outdated browsers (although they should still work in older browsers).  Companies should encourage their customers to upgrade as well.  There is sound business reasoning as well—sites that use web standards, as explained above, will yield better search engine results and be accessible to people with disabilities and users of alternative devices—can companies afford to ignore this audience?</li>
<li><strong>“I don’t need to learn them!”</strong>: I know some developers will sit there and say “but I’m using outdated practices and still getting paid—so why do I need to bother with this new stuff?” As explained above, it makes your code more efficient, easier to write, and easier to maintain. And it allows you to write modern code that is accessible and usable on alternative devices—isn’t that exciting? It will also make your skillset more future–proof, and make you capable of earning more. A lot of companies are requesting skills in web standards these days.</li>
<li><strong>“It’s too hard to learn!”</strong>: Rubbish. After digesting some of this course, you’ll realize how easy it is to pick up the basics of using web standards, whether you’re new to web development/design, or an existing web person upgrading your skillset. It is about as hard as using the old, outdated bad methods, which isn’t very, and it confers so many advantages over the old ways.</li>
<li><strong>Standards support in browsers</strong>: Standards support in browsers used to differ greatly, which made getting web sites to work across different browsers a nightmare. But those days are gone—modern browsers all have decent web standards support. Support is still sometimes needed for old browsers that don’t have such good standards support, but by using modern best practices, you can ensure that users of those browsers will still have a reasonable user experience.</li>
</ol>

<p>So as you can see, there’s really not any excuse to not adopt web standards in your web development work. At least if you are coming to this course from the point of view of a beginner, you are starting off on the right foot and learning best practices from the start, rather than having to unlearn bad practices.</p>

<div class="note">
<p>OK, so we keep talking about these bad practices in hushed tones, like they’re the secret plans to the Death Star or something. We are not going to cover these practices in any detail in this course, as we don’t believe we should; we think you should just be sent along the correct path to begin with. You are however probably wondering what they are, so let’s just talk about them briefly.</p>

<p>In the old days, people used to do things like laying out their web sites inside giant tables, using the different table cells to position their graphics, text etc (not what tables were intended for, adds superfluous markup to the page). They used to use invisible images called spacer GIFs to fine tune positioning of page elements (not what images are intended for, add superfluous markup and images to the page). They used to write JavaScript that generated menus etc on the fly (no good for people with JavaScript disabled in their browsers, or people with visual impairments using screenreaders, which get confused by such JavaScript) or worked on only one browser (what about people using other browsers?). They used to insert styling information directly into the HTML using <code>&lt;font&gt;</code> elements (terrible for maintenance, and adds superfluous markup to the page). And many other crimes against web development. The worst thing is that I say “in the old days” above, but the fact is that a lot of people are still doing things like this!</p>

<p>Web development is a messy skill at the best of times, but bad practices like these just make it harder. Using web standards and best practices, as outlined in this course, is the best way to go.</p>
</div>

<h2 id="structure">Course structure</h2>

<p>The course is composed of several articles—there will be over 50 when the basic course is finalized—and each article is a few thousand words long. Each article focuses on a specific microtopic, and where appropriate, contains background on the topic, essential theory, practical examples and walkthrough tutorials to follow, and exercise questions to test your knowledge.</p>

<p>A logical way to teach the course is to work out how many lessons you’ve got available to teach it over, and divide it by the number of articles. For each lesson, get the students to read over the articles connected to that lesson before the lesson occurs. Then go through practical examples during the lesson, and get the students to do the exercise questions after each lesson. Logically, I think an hour should be enough time to go through the concepts contained in each article, as long as you get the students to read each article before the lessons are taught. There is perhaps about 50 hours of teaching time in this course, and 50 hours of background reading.</p>

<p>Obviously, you’ll have to think about the amount of time you teach the course over and exactly what to cover in each lesson, but experimentation is key.</p>


<h2 id="who">Who should use this course?</h2>

<p>This is a web standards course comprised of several articles, aimed at pretty much anyone who wants to learn web standards–based web design from scratch. It is intended to take the reader from nothing more than a basic familiarity with browsing the web, to being competent with CSS and HTML, and have basic knowledge of JavaScript and how it fits in to the puzzle. It should give you enough knowledge to start thinking about entering the job market with confidence (obviously experience can’t be taught).</p>

<p>Who is it aimed at? I want it to be usable by anyone who wants to learn web design “the right way”:</p>

<ol>
<li><strong>University/college students and teachers</strong>: I have mentioned this already—this is an ideal set of articles to either create your own course from and deliver it to students, or use parts of to supplement your own course. To any students already studying some kind of web–related course, you should use this material to supplement your knowledge, and lobby your teachers into considering it as well! I would recommend all teachers/lecturers to look over this material as well, to make sure the techniques covered in their courses are current best practices.</li>
<li><strong>Pre–college/university age students</strong>: While this course has been mainly written with adults in mind, there is no reason why younger students can’t benefit from it—have a go and see how you get on.</li>
<li><strong>Existing web designers and developers</strong>: There are a lot of existing web developers and designers out there who either aren’t using web standards and best practices, or could use an easily accessible reference to look things up in, or use to brush up their knowledge. To the former, I urge you to give this course a chance and see how easy and valuable web standards are to adopt. To the latter, I’m sure you will find this course useful in helping others, brushing up on your skills, looking up hard–to–recall facts, and finding ammunition to help convince bosses and clients that things such as accessibility make a lot of sense.</li>
<li><strong>Educators inside companies</strong>: This is an ideal way to provide inexpensive training to employees.</li>
<li><strong>Any other individuals</strong>: If you are an individual who just fancies learning something about web design and development, then again, this is an inexpensive way to get some help with your endeavors.</li>
</ol>

<p>I am not expecting people to pay to use this course—it is released on a Creative Commons license, so freely available to anyone who wants to make use of it, as long as they give us the proper attribution.</p>

<h2 id="toc">Table of contents</h2>

<h3>The beginning</h3>

<ol start="1">
<li>Introductory material, by Chris Mills—This is the one you’re reading. <a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-he/">Hebrew translation</a> | <a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/">Hungarian translation</a> | <a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-it/">Italian translation</a> | <a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/">Japanese translation</a></li>
</ol>

<p class="note">TRANSLATIONS AVAILABLE! There are other <a href="http://dev.opera.com/articles/view/web-standards-curriculum-translations/">translations of the web standards curriculum available</a> too.</p>

<h3>Introduction to the world of web standards</h3>

<ol start="2">
<li><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/">The history of the Internet and the web, and the evolution of web standards</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-he/">Hebrew translation</a> | <a href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/">Hungarian translation</a> | <a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-it/">Italian translation</a> | <a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">Japanese translation</a></li>

<li><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/">How does the Internet work?</a>, by Jonathan Lane. <a href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/">Hungarian translation</a> | <a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">Japanese translation</a></li>

<li><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/">The Web standards model—HTML, CSS and JavaScript</a>, by Jonathan Lane. <a href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">Hungarian translation</a> | <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">Japanese translation</a></li>

<li><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/">Beautiful dream, but what’s the reality?</a>, by Jonathan Lane. <a href="http://dev.opera.com/articles/view/5-webes-szabvanyok-szep-alom/">Hungarian translation</a> | <a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu-ja/">Japanese translation</a></li>

</ol>

<h3>Web Design Concepts</h3>

<p>This section won’t go into any code or markup details, and will act as an introduction to the design process before you start to create any graphics or code, as well as concepts of web design such as IA, navigation, usability etc.</p>

<ol start="6">
<li><a href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/">Information Architecture—planning out a web site</a>, by Jonathan Lane. <a href="http://dev.opera.com/articles/view/6-informacios-architektura-egy-website-t/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/7-what-does-a-good-web-page-need/">What does a good web page need?</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/7-mi-kell-egy-jo-weblaphoz/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/8-color-theory/">Colour Theory</a>, by Linda Goin. <a href="http://dev.opera.com/articles/view/8-a-szinek-elmelete/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/9-building-up-a-site-wireframe/">Building up a site wireframe</a>, by Linda Goin. <a href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/10-colour-schemes-and-design-mockups/">Colour schemes and design mockups</a>, by Linda Goin. <a href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/">Typography on the web</a>, by Paul Haine. <a href="http://dev.opera.com/articles/view/11-tipografia-a-weben/">Hungarian translation</a></li>
</ol>

<h3>HTML basics</h3>

<ol start="12">
<li><a href="http://dev.opera.com/articles/view/12-the-basics-of-html/">The basics of HTML</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/12-a-html-alapjai/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/13-the-html-head-element/">The HTML &lt;head&gt; element</a>, by Christian Heilmann. <a href="http://dev.opera.com/articles/view/13-a-html-head-eleme/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/">Choosing the right doctype for your HTML documents</a>, by Roger Johansson. <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">Hungarian translation</a></li>
</ol>

<h3>The HTML body</h3>

<ol start="15">
<li><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/">Marking up textual content in HTML</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/16-html-lists/">HTML Lists</a>, by Ben Buchanan. <a href="http://dev.opera.com/articles/view/16-html-listak/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/17-images-in-html/">Images in HTML</a>, by Christian Heilmann. <a href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/">HTML links—let’s build a web!</a> by Christian Heilmann. <a href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/19-html-tables/">HTML Tables</a>, by Jen Hanen. <a href="http://dev.opera.com/articles/view/19-html-tablazatok/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/">HTML Forms—the basics</a>, by Jen Hanen. <a href="http://dev.opera.com/articles/view/20-html-urlapok/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/">Lesser–known semantic elements</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/22-generic-containers-8212-the-div-and/">Generic containers — the div and span elements</a>, by Mark Norman Francis. <a href="http://dev.opera.com/articles/view/22-altalanos-tarolok/">Hungarian translation</a></li>

<li><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/">Creating multiple pages with navigation menus</a>, by Christian Heilmann. </li>

<li><a href="http://dev.opera.com/articles/view/24-validating-your-html/">Validating your HTML</a>, by Mark Norman Francis.</li>
</ol>

<h3>Accessibility</h3>

<ol start="25">
<li><a href="http://dev.opera.com/articles/view/25-accessibility-basics/">Accessibility basics</a>, by Tom Hughes-Croucher.</li>
<li><a href="http://dev.opera.com/articles/view/26-accessibility-testing/">Accessibility testing</a>, by Benjamin Hawkes-Lewis.</li>
</ol>

<h3>CSS</h3>

<ol start="27">
<li><a href="http://dev.opera.com/articles/view/27-css-basics/">CSS basics</a>, by Christian Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/">Inheritance and Cascade</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/">Text styling with CSS</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/30-the-css-layout-model-boxes-border/">The CSS layout model - boxes, borders, margins, padding</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/31-css-background-images/">CSS background images</a>, by Nicole Sullivan.</li>
<li><a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/">Styling lists and links</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/33-styling-tables/">Styling tables</a>, by Ben Buchanan.</li>
<li><a href="http://dev.opera.com/articles/view/34-styling-forms/">Styling forms</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/35-floats-and-clearing/">Floats and clearing</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/36-css-static-and-relative-positioning/">CSS static and relative positioning</a>, by Tommy Olsson.</li>
<li><a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/">CSS absolute and fixed positioning</a>, by Tommy Olsson.</li>
</ol>

<h3>Advanced CSS study</h3>

<ol start="38">
  <li><a href="http://dev.opera.com/articles/view/38-headers-footers-columns-templates/">Headers, footers, columns, and templates</a>, by Ben Henick</li>
</ol>

<h3>JavaScript core skills</h3>

<ol start="39">
  <li><a href="http://dev.opera.com/articles/view/programming-the-real-basics/">Programming - the real basics!</a>, by Christian Heilmann</li>
  <li><a href="http://dev.opera.com/articles/view/javascript-uses/">What can you do with JavaScript?</a>, by Christian Heilmann</li>
  <li><a href="http://dev.opera.com/articles/view/first-look-at-javascript/">Your first look at JavaScript</a>, by Christian Heilmann</li>
  <li><a href="http://dev.opera.com/articles/view/javascript-best-practices/">JavaScript best practices</a>, by Christian Heilmann</li>
  <li><a href="http://dev.opera.com/articles/view/unobtrusive-javascript/">The principles of unobtrusive JavaScript</a>, by PPK</li>
  <li><a href="http://dev.opera.com/articles/view/javascript-functions/">JavaScript functions</a>, by Mike West</li>
  <li><a href="http://dev.opera.com/articles/view/objects-in-javascript/">Objects in JavaScript</a>, by Mike West</li>
  <li><a href="http://dev.opera.com/articles/view/traversing-the-dom/">Traversing the DOM</a>, by Mike West</li>
  <li><a href="http://dev.opera.com/articles/view/creating-and-modifying-html/">Creating and modifying HTML</a>, by Stuart Langridge</li>
  <li><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/">Dynamic style - manipulating CSS with JavaScript</a>, by Greg Schechter</li>
  <li><a href="http://dev.opera.com/articles/view/handling-events-with-javascript/">Handling events with JavaScript</a>, by Robert Nyman</li>
  <li><a href="http://dev.opera.com/articles/view/javascript-animation/">JavaScript animation</a>, by Stuart Langridge</li>
<li><a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/">Graceful degredation versus progressive enhancement</a>, by Christian Heilmann</li>
</ol>

<h3 id="HTML5">HTML5</h3>

	  <ol>
	    <li><a href="http://dev.opera.com/articles/view/get-familiar-with-html5/">Get familiar with HTML5!</a>, by Chris Mills</li>
	    <li><a href="http://dev.opera.com/articles/view/new-structural-elements-in-html5/">New structural elements in HTML5</a>, by Chris Mills</li>	    
	    <li><a href="http://dev.opera.com/articles/view/new-form-features-in-html5/">New form features in HTML5</a>, by Patrick Lauke and Chris Mills</li>
	    <li><a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a>, by Bruce Lawson Patrick Lauke</li>
	    <li><a href="http://dev.opera.com/articles/view/more-accessible-html5-video-player/">More accessible HTML5 video player</a>, by Cristian Colceriu</li>	    
	    <li><a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML 5 canvas - the basics</a>, by Mihai Sucan</li>	    
	    <li><a href="http://dev.opera.com/articles/view/introducing-web-sockets/">Introducing Web Sockets</a>, by Bruce Lawson and Mike Taylor</li>    
	    <li><a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache/">Running your web applications offline with HTML5 AppCache</a>, by Shwetank Dixit</li>  
	    <li><a href="http://dev.opera.com/articles/view/web-storage/">Web Storage: easier, more powerful client-side data storage</a> by Shwetank Dixit</li>  
	    <li><a href="http://dev.opera.com/articles/view/web-workers-rise-up/">Web Workers rise up!</a>, by Daniel Davis</li> 
	    <li><a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">How to use the W3C Geolocation API</a>, by Shwetank Dixit</li>
	  </ol>


<h3>Mobile web development</h3>

<ol>
<li><a href="http://dev.opera.com/articles/view/introduction-to-the-mobile-web/">Mobile 1: Introduction to the mobile web</a>, by Brian Suda</li>
</ol>


<h3>Supplementary articles</h3>

<h4>Microformats</h4>

<ul>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-hcard/">Introduction to hCard</a>, by Christopher Schmitt</li>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-hcard-part-two-styling/">Introduction to hCard, Part two: Styling hCards</a>, by Christopher Schmitt</li>
  <li><a href="http://dev.opera.com/articles/view/xfn-encoding-extraction-and-visualizat/">XFN encoding, extraction, and visualizations</a>, by Brian Suda</li>
  <li><a href="http://dev.opera.com/articles/view/styling-xfn-and-rel-license-links/">Styling XFN and rel-license links</a>, by Christopher Schmitt</li>
  <li><a href="http://dev.opera.com/articles/view/styling-hreview-microformats/">Styling hReview Microformats</a>, by Christopher Schmitt</li>
  <li><a href="http://dev.opera.com/articles/view/styling-and-extracting-hcalendar/">Styling and extracting hCalendar</a>, by Christopher Schmitt</li>  
  <li><a href="http://dev.opera.com/articles/view/microformat-encoding-and-visualization/">Microformat Encoding and Visualization</a>, by Brian Suda</li>
</ul>

<h4>Supplementary accessibility articles</h4>

<ul>
  <li><a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">Introduction to WAI-ARIA</a>, by Gez Lemon</li>
  <li><a href="http://dev.opera.com/articles/view/creating-accessible-data-tables/">Creating accessible data tables</a>, by Frank Palinkas</li>
  <li><a href="http://dev.opera.com/articles/view/building-accessible-static-navigation-wi/">Building Accessible Static Navigation with CSS</a>, by Frank Palinkas</li>
</ul>

<h4>Miscellaneous</h4>

<ul>
<li><a href="http://dev.opera.com/articles/view/supplementary-getting-your-content-onli/">Getting your content online</a>, by Craig Grannell.</li>
<li><a href="http://dev.opera.com/articles/view/supplementary-more-about-the-document/">More about the document &lt;head&gt;</a>, by Chris Heilmann.</li>
<li><a href="http://dev.opera.com/articles/view/supplementary-common-html-entities-used/">Supplementary: Common HTML entities used for typography</a>, by Ben Henick.</li>
<li><a href="http://dev.opera.com/articles/view/opera-web-standards-curriculum-glossary/">The Opera Web Standards Curriculum glossary</a>, by various authors. This is incomplete, and will be added to as time goes by.</li>
</ul>

<h2 id="acks">Acknowledgements</h2>

<p>The number of people who have helped me with this course are too numerous to mention in any great detail, but I have hopefully included everyone here. They are all great people, so check them out—go to their talks, buy their books, read their blogs, or do whatever else you can do to support them. I give to all of you my admiration and gratitude.</p>

<ol>
<li><strong>The authors</strong>: thank you so much to Ben Buchanan, Tom Hughes–Croucher, Mark Norman “Norm” Francis, Linda Goin, Paul Haine, Jen Hanen, Benjamin Hawkes–Lewis, Ben Henick, Christian Heilmann, Roger Johansson, Peter–Paul Koch, Jonathan Lane, Stuart Langridge, Robert Nyman, Tommy Olsson, Greg Schechter, Nicole Sullivan, and Mike West. Without you, this course would be nothing, literally.</li>
<li><strong>The Opera crew</strong>: best wishes to Jan Standal, David Storey, the rest of my team, and everyone else at Opera for believing in this idea, and helping me to develop the plan.</li>
<li><strong>The organizations</strong>: thanks to everyone at Yahoo (the authors, and Sophie Major for he, by Christian Heilmann. lping to do a lot of organization and promotion), the WaSP (particularly Gareth Rushgrove, Stephanie Troeth and Aarron Walter), the Britpack, the Geekup folks, and all the universities who showed an interest in looking at this course and helping to take it further.</li>
<li><strong>The individuals</strong>: small mercies shall be granted to the following wonderful people—Craig Saila, Sara Dodd, John Allsopp, Roan Lavery, Bruce Lawson, Alan White. Sorry if I forgot anyone.</li>
<li><strong>The readers</strong>: special hails to you for having an interest in creating web sites the right way, and taking time out to read this course!</li>
</ol>

<h2 id="contact">Contact me</h2>

<p>I am constantly looking to improve this course, and get it adopted by as many people as possible. If you have any suggestions for how the course could be improved, any general comments to share, or want to talk to me about adopting it somewhere, then get in touch. My e–mail is cmills [at] opera [dot] com. You can also post comments about each article in the series using the “Discuss this article“ link at the bottom of each one. You’ll need a <a href="http://my.opera.com/community/signup/" title="sign up to my.opera.com">my.opera account</a> to participate in discussions.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/" rel="next" alt="link to the next article in the series">Next article—The history of the Internet and the web, and the evolution of web standards</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>
<img src="http://forum-test.oslo.osa/kirby/content/articles/83-1-introduction-to-the-web-standards-curriculumtable-of-contents/chrismills.jpg" alt="Picture of the article author Chris Mills" class="right" />
<p>Chris Mills is a developer relations manager for Opera—he edits and publishes articles on <a href="http://dev.opera.com">dev.opera.com</a> and <a href="http://labs.opera.com">labs.opera.com</a>, liaises with the community to raise awareness of Opera and collect feedback, and evangelises about Opera software wherever he can. He is also the organiser and editor of the Web Standards Curriculum.</p>

<p>Outside of work, he is an extremely avid music fan, enjoying playing and listening to a wide variety of music, including metal, folk, punk, electronica, prog, and more. His main band at the moment is the mighty <a href="http://www.conquestofsteel.co.uk">Conquest of Steel</a>.</p>
