Title: Web standards – beautiful dream, but what's the reality?
----
Date: 2008-07-08 07:09:04
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
<li class="prev"><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" rel="prev" title="link to the previous article in the series">Previous article—The Web standards model—HTML, CSS and JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/" rel="next" title="link to the next article in the series">Next article—Information Architecture—Planning out a web site</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Up until this point, we’ve talked about the beautiful ideal of web standards.  Web standards allow for interoperability between all web browsers, on every operating system, and even on every electronic device available.  But is that really reality? Are all web browsers 100% standards-compliant?  Are all web developers using web standards properly? Do web developers build a page using web standards, and then just walk away confident that their design will hold up everywhere? </p>

<p>The really simple answer to that last question is no; while that’s an ideal situation, that is far from reality.  In this article, I’m going to look at the following: </p>

<ul>
<li><a href="#standardscheck">How do you check for web standards compliance?</a></li>

<li><a href="#standardstoday">Standards compliance on sites today</a>
<ul>
<li><a href="#amazon">Amazon: Shopping with standards?</a></li>
<li><a href="#cnn">CNN: Standardized news?</a></li>
<li><a href="#apple">Apple: The pinnacle of elegance in design … and validation?</a></li>
<li><a href="#survey">A small standards compliance survey</a></li>
</ul>
</li>

<li><a href="#compliancelack">Why the lack of compliant sites?</a>
<ul>
<li><a href="#education">Education</a></li>
<li><a href="#business">Business reasons</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#furtherreading">Further reading</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul>

<h2 id="standardscheck">How do you check for standards compliance?</h2>
<p>Before we go any further, the question you’re probably asking yourself is “how do you know if a web site uses web standards?”  Does it look any different to any other web site? </p>

<p>Yes and no.  Web standards-compliant web sites, if developed properly, should look no different from web sites coded using a jumble of hobbled-together markup.  However, the source code of the web site (try right/Ctrl-clicking on a web site and selecting the “Source” or “View Source” option—the exact terminology varies between browsers) will look vastly different.  A standards-compliant web site will have nice, clean markup with little or no formatting embedded in the page itself.  It might be hard for you to notice this at a glance, but trust me, visually impaired individuals using screen readers and search engines will notice right away. We have already covered the advantages of using web standards in the last article. </p>

<p>The easiest way to check for standards compliance is to use a handy tool, available online, called a validator.  The World Wide Web Consortium (W3C) makes a validator freely available at <a href="http://validator.w3.org/" title="the W3C HTML validator">http://validator.w3.org/</a>—see Figure 1.  You can (and should) use this tool to check any web sites you’re developing for errors in your HTML/XHTML.  CSS can be checked out using the CSS validator available at <a href="http://jigsaw.w3.org/css-validator/" title="the W3C CSS validator">http://jigsaw.w3.org/css-validator/</a>.  Feel free to click through these links, and test a few of your favorite web sites. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/figure1.jpg" alt="The w3c validator showing the page is valid xhtml 1.0 strict" />
<p class="comment">Figure 1: The W3C’s markup validation service will check your pages for you and point out any errors in the markup. </p>

<p>Ensuring your pages validate is only half the battle.  How do we check if browsers are standards-compliant?  The Web Standards Project has developed a series of tests called the Acid tests, which use some complex HTML and CSS rules (plus some other markup and code) to see if a browser can render various test screens properly.  The latest version of the Acid test, Acid3, is still a work in progress.  You can read more about the Acid tests at <a href="http://www.acidtests.org/" title="acid tests homepage">http://www.acidtests.org/</a>, as well as go to the actual test pages to put your browser through its paces. </p>

<h2 id="standardstoday">Standards compliance on sites today</h2>
<p>Are major web sites using web standards, or are they just hacking something together?  Let’s take a look at a few different companies out there and see how they score using the W3C’s markup validation service. You’ll be surprised how many large web site don&#39;t pass standards validation tests; don’t get disheartened however—there is no reason why you can’t go one better and get your sites validating properly. Bear in mind as you read the below reports that the larger and more complicated a web site is, the harder it is to make it validate, generally speaking (there are other factors to consider, such as the technologies used). Also bear in mind that since this article was written, things may have changed with the sites discussed below, although at the tie they made my points perfectly. I&#39;d suggest that you go back and check the sites against the validator when reading the article.</p>

<h3 id="amazon">Amazon: Shopping with standards?</h3>
<p>Chances are that if you’ve ever done any online shopping, you’ve probably visited <a href="http://www.amazon.com" title="The Amazon homepage">Amazon.com</a> (or one of it’s country-specific web sites).  Amazon is a megastore in cyberspace, offering everything from books to CDs to groceries in certain areas.  Does Amazon.com validate though? Check out Figure 2. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/figure2.jpg" alt="amazon has a lot of validation errors" />
<p class="comment">Figure 2: Amazon.com fails with flying colors!  Not only is there invalid markup, but they don’t even declare a doctype (saying what version of HTML/XHTML they’re using). </p>

<p>Amazon has a bit of a journey when it comes to standards-compliance.  I don’t have the inside track at Amazon, but if I’m allowed to speculate for a minute, I’d say that because Amazon has been around for quite some time, they have probably been using the same software to power their web site for their entire lifespan.  Because web standards didn’t really grab the spotlight until early in this millennium, chances are that the system that Amazon uses for selling products online was developed back when web standards weren&#39;t really supported or publicized.  I don’t know for sure, but I’d guess that Amazon suffers from a case of just sticking with what works for them. </p>

<h3 id="cnn">CNN: Standardized news?</h3>
<p>Surely news organizations are semantic beings?  <a href="http://cnn.com" title="CNN homepage">CNN.com</a> is one of the largest media web sites around.  With global resources, reporting on news stories as they happen, surely they’ve got a team of in-house specialists ensuring that their web site is produced with valid markup? Check out Figure 3. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/figure3.jpg" alt="cnn is a little bit more compliant, but still fails" />
<p class="comment">Figure 3: CNN.com (as of April 15, 2008) fails validation with 33 errors.  They list an HTML 4.01 Transitional doctype, but a lot of their markup looks a little XHTML-esque. </p>

<p>33 errors isn’t that bad when it comes to a web site of CNN’s size and complexity.  Those 33 errors could (and again I’m speculating here) occur because the content management system they’re using isn’t completely up to par on producing standards-compliant markup, or it could just be a collection of markup errors by a production staff that specializes in writing the news, and not in producing web sites; either explanation is plausible. </p>

<h3 id="apple">Apple: The pinnacle of elegance in design … and validation?</h3>
<p>Apple is renowned for their beautiful and functional hardware and software products.  Their product announcements are almost like religious experiences for droves of loyal followers.  <a href="http://apple.com" title="The Apple homepage">Apple’s web site</a> (see Figure 4) is often acclaimed as being beautifully designed and well organized, but does it validate? </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/figure4.jpg" alt="the apple web site very nearly passes validation" />
<p class="comment">Figure 4: Apple.com comes really close to having valid HTML 4.01 Transitional markup.  With 6 errors, there’s a mixture of markup “typos” and a case of Safari-specific tag use. </p>

<p>The Apple web site comes really close to validating.  Really, it would take someone all of 5 minutes to fix the errors and have the page pass.  The one error I want to briefly mention, however, is that Apple has decided to use a Safari-specific attribute on their search box (giving the search box the attribute <code>type=&quot;search&quot;</code>).  In Safari, this will let you see a list of recent searches by clicking on a small magnifying glass icon.  In other browsers, like Opera or Internet Explorer, it just shows up as a normal text box. </p>

<h3 id="survey">A small standards compliance survey</h3>
<p>Instead of going through dozens of examples like this, I’ve compressed the remaining sites surveyed down into a handy pie chart.  I looked at about 40 corporate web sites from the Fortune 500 list as well as the Alexa rankings of web sites with the most traffic—Figure 5 shows what I found: </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/figure5.jpg" alt="85% of web sites surveyed failed validation" />
<p class="comment">Figure 5: 85% of web sites surveyed failed validation on some level (the large part of the pie), with only 15% passing (the small slice).  Some failures were spectacular, with upwards of 1,000 errors; others were just a couple of typos here and there. </p>

<h2 id="compliancelack">Why the lack of compliant sites?</h2>
<p>We’re left crying: “why, why can’t they just validate?”  That may be a little dramatic, but it’s at least similar in content to the question running through your mind at this point.  Why do so few web sites validate?  I’ve talked about a few possible reasons already—things like legacy e-commerce systems or content management systems—but there’s a few other underlying reasons as well. </p>

<h3 id="education">Education</h3>
<p>The school I went to had a Management Information Systems program, a Computer Science program, and a New Media program, each of which had courses related to web site production—while these taught many things effectively, there wasn&#39;t really much coverage of how to actually code a web site in any of them.  The general feeling I get from looking at numerous university courses is that web languages like HTML, CSS and JavaScript are below the technical threshold of most computer science programs, and above the technical threshold of most MIS/New Media programs.</p>

<p>What I&#39;m getting at here is that many educational courses don’t cover this kind of stuff in any great level of detail. I would be willing to wager that if you ask 10 developers who work with web standards where they learned how to use web standards that 9 of them would reply that they are self-taught (the other 1 won’t answer you because she’s too busy trying to get her site to render properly in IE6).</p>

<p>The World Wide Web Consortium (W3C), which is the group responsible for developing standards, and the Web Standards Project (WaSP) are taking on this challenge though and are really pushing to have web standards support improve, both from browser manufacturers and from developers.</p>

<p>Hell, the entire reason this course you’re currently reading was created is to provide a proper set of teaching material for web standards, and a means by which to use that material to learn, for free. We’re just trying to get rid of a few more of the reasons (we hesitate to use the word “excuses” here…) why people aren’t adopting web standards. There’s really no excuse for not using them, given the benefits they incur (as discussed in the last article).</p>

<h3 id="business">Business reasons</h3>
<p>A web site that I frequently visit for entrepreneurs involved in Web-based startups has hosted a number of discussions about the use of web standards in “Web 2.0 applications”.  There is usually an interesting exchange between those who believe that web standards should be used because they make sense (for all of the reasons we’ve previously discussed), and those who just say “so what”. </p> 

<p>The fact of the matter is that web browsers will handle really bad code.  Your pages don’t need to validate in order to have them display properly in most of the major browsers.  From a business perspective, where time equals money, why bother spending any additional time to get them to validate at all?  If you can crank out a table-based mess of code in 30 minutes, or spend 30 minutes coding your page in HTML and CSS and 30 minutes making sure that it validates and works ok across browsers, and the end result will look the same in the major desktop browsers, which sounds easier to you? </p>

<p>A lot of people from my generation (I’m almost at the big 3-0, at the time of this writing) learned to build web sites using tables for layout, and font tags to deal with typography.  It can be intimidating to re-learn how to do something when what you’re doing still “works” (still looks fine in most web browsers).  Employers generally don’t know the difference; I’ve never once had a manager talk about the quality of my markup during a performance review.  So really, where’s the incentive? </p>

<p>I’m going to throw in here (you can guess which side I’m usually arguing) that taking the messy-code approach is shortsighted.  Based on my experience, doing a re-design of a standards-based web site is much easier than converting a mess of improperly coded pages (I’ve done both).  I have yet to hit that utopia promised by XHTML/CSS that you will only have to touch the CSS during a re-design, but I’ve come close.</p>

<p>Also bear in mind that you will see a lot more web job adverts these days asking for knowledge of web standards than ever before. </p>

<p>There are also some direct business reasons to consider. In general, using web standards improves a web site&#39;s position in search engine rankings (how high up it appears on the list when you do a Google search) and how easy it is to find in the first place. In addition, using standards and best practices will generally make the web page more accessible by people with disabilities trying to make use of it, and users trying to access the site on their mobie phones. Extra users and increased visibility is always good for business.</p>

<h2 id="summary">Summary</h2>

<p>In this article I’ve talked about the state of web standards adoption today—how to check whether standards are being used properly on a site, how many sites are using web standards properly and the reasons why people don’t adopt standards. As you’ve seen above, the reasons aren’t really that compelling and should be fairly easy to overcome. </p>

<p>So what’s an enterprising web developer of the future to do?  Do you bother with web standards (and keep on reading this series), or do you fire up a graphical editor and start laying out your web site in tables? </p>

<p>Let me put it this way: the single biggest complaint I’ve read from individuals who say that standards-based development is a waste of time is that it takes too long to learn to use web standards instead of outdated methods and develop web sites that work across all browsers.  So why not start out by learning the correct way to do it, and save yourself some trouble?  You’ve decided to learn how to build web sites, and you need to do it one way or another, so why not learn how to do it properly? </p>


<h2 id="furtherreading">Further reading</h2>
<ul>
<li><a href="http://validator.w3.org/">W3C markup validation service</a>.</li>
<li><a href="http://www.w3.org/">W3C web site</a> (with information about various standards and future recommendations).</li>
<li><a href="http://www.webstandards.org/">The Web Standards Project</a>.</li>
</ul>
<h2 id="exercises">Exercise questions</h2>
<ul>
<li>We looked at a lot of “big“ web sites and whether they validate or not.  Run a few of the sites that you visit regularly through the validator.  Do they validate?  If not, take a look at some of the errors to get a sense of why they’re failing.</li>
<li>What is a doctype?  What does it do?</li>
<li>What case can you make for web standards as it relates to business?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" rel="prev" title="link to the previous article in the series">Previous article—The Web standards model—HTML, CSS and JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/6-information-architecture-planning-o/" rel="next" title="link to the next article in the series">Next article—Information Architecture—Planning out a web site</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>
<img src="http://forum-test.oslo.osa/kirby/content/articles/99-5-web-standards-beautiful-dream-but-whats-the-reality/Jonlane.jpg" alt="Picture of the article author Jonathan Lane" class="right" />



<p>Jonathan Lane is the President of <a href="http://industryinteractive.net/">Industry Interactive</a>—a web development/web application development company located on Mayne Island, British Columbia, Canada.  He got his start in development working for the University of Lethbridge Curriculum Re-Development Center as their web projects coordinator for many years. </p>



<p>He blogs at <a href="http://www.flyingtroll.com/">Flyingtroll</a> and is currently developing <a href="http://www.mailmanagr.com/">Mailmanagr</a>, an e-mail interface for the Basecamp project management application.</p>
      
