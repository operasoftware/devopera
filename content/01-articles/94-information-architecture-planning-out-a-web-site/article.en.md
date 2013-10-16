Title: Information Architecture - Planning out a web site
----
Date: 2008-07-08 07:09:32
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
<li class="prev"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="prev" title="link to the previous article in the series">Previous article —Web standards—beautiful dream, but what’s the reality?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/7-what-does-a-good-web-page-need/" rel="next" title="link to the next article in the series">Next article—What does a good web page need?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>Traditionally, the planning stage of a web site (or any project) can be a little stressful.  Everyone has an opinion about how a web site should be built, and often their opinions will conflict with one another.  Your number one goal on any web site should be to build something that’s useful for the people who will be using it.  It really doesn’t matter what your boss says, what that guy down the hall with a doctorate in software engineering says, or even what your personal preferences are; at the end of the day, if you’re building a web site for a particular group of people, their opinion is the only one that matters. </p>

<p>This article is going to look at the early stages of planning out a web site, and a discipline that is commonly referred to as Information architecture, or IA. This involves thinking about who your target audience will be, what information and services they need from a web site, and how you should structure it to provide that for them.  You’ll look at the entire body of information that needs to go on the site and think about how to break that down into chunks, and how those chunks should relate to one another. The sections below are as follows:</p>

<ul>
<li><a href="#siteplanning">You need to plan out the site you’re building</a>
<ul>
<li><a href="#introducingtheidea">Introducing “The Dung Beatles”</a></li>
<li><a href="#sitemaps">Now what? Drawing a site map</a></li>
<li><a href="#namingpages">Naming your pages</a></li>
<li><a href="#addingdetail">Adding some details</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="siteplanning">You need to plan out the site you’re building</h2>
<p>You’ll come upon the odd web project that you can just dive right into without any up front thought, but these are, by far, the exception and not the norm.  We’re going to take a look at a fictional band called “The Dung Beatles” and try to help them work through the early stages of planning out their web site.  We’ll talk with the band and find out what goals they have, and what they would like to see on their web site.  Then we’ll dive in and start working on a structure for the band’s information. </p>

<h3 id="introducingtheidea">Introducing “The Dung Beatles”</h3>
<p>The Dung Beatles (TDB) have a problem.  They are the hottest Beatles tribute band in Moose Jaw, Saskatchewan, but they need to raise their profile for an upcoming North American tour this summer.  They’ve got venues scheduled throughout Canada and the United States, but they’re virtually unknown outside of their hometown.  If only there was some way, using technology, to reach a large number of Beatles fans for relatively little money. </p>

<p>Lucky for TDB, we’ve got this thing called the World Wide Web, and they quickly decide that building a web site is the answer they’ve been searching for.  TDB needs a place to promote their tour dates, build a fan base in other cities and raise awareness of the band.  You’re going to work through their ideas with them and see if you can chart out a plan for their web site. </p>

<p>You schedule a meeting with your new clients to hash out the details of what they’re looking for and to decide on due dates and costs.  You open the conversation by suggesting that you talk about the goals and objectives of the web site in order to get an idea of what they want.  What does the band hope to achieve with their online presence? </p>

<p>TDB starts talking about their upcoming tour, and how they want to get the word out to Beatles fans in all of their scheduled stops.  It’s February now, and they’re scheduled to kick off their tour in five months time. </p>

<p>Hang on a second!  A web site alone won’t build it’s own traffic and publicise itself.  You extract from the conversation thus far that the main goal for the site is to provide a home for TDB fans online; a place where they can keep up to date on the latest news, tour dates and venues.  Through the fans (word of mouth), and some other advertising venues, new people will be driven to the web site where they can download sample tracks, check out pictures of the band (in full costume) and find out where/when they can check them out live. </p>

<p>Raul McCoffee, the front man of the group, points out that it would be nice to be able to raise a little extra money for the tour through the sale of some CDs and band merchandise.  You gather the band around and draw out a quick sketch of what a visitor might want when they visit the web site.  This is just a really rough brainstorm of ideas; it’s got very little structure at this point. </p>

<p>There are two general groups of people who will visit the site—people who know TDB already and like them (fans), and people who are unsure.  You’ve got to cater to both those groups in different ways; potential fans need to be “sold” on the group, whereas current fans want to “feed their addiction” (so to speak).  What sort of information is each of these groups going to be looking for? Figure 1 gives an indication of this—this is a typical sketch of the type that you’ll want to make at this point in future web site projects. From this, you’ll work out what pages the web site needs, and how they should link to one another. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/94-6-information-architecture-planning-out-a-web-site/article6_1.gif" alt="a rough sketch of what your web site should contain" />


<p class="comment">Figure 1: What your web site visitors want.</p>

<p>You settle on a budget, and agree to launch the web site in one month.  You promise to get back to the band in a couple of days with some plans outlining the direction you’re going in. </p>
<h3 id="sitemaps">Now what? Drawing a site map</h3>

<p>A lot of people will throw together a site map at this stage—this looks like an org (organisational) chart.  This is usually a pretty basic graphic showing simply the names of each page on the site and how they link into the overall structure of the web site.  Personally, I like to put in a little more detail and talk about the purpose and content of each page. For example, a page may be labeled “Home”, but what is the home page?  Is it a cheesy “welcome to our web site” message (yuck!) or is it a more dynamic page containing news items and enticing images? Take a few minutes to think about what pages the above sketch might turn into, and what might be contained on each page. Have a go at drawing your own site map before moving on to the next section. </p>


<p>Now let’s get started with the basics: one of those org charts that I mentioned above.  Figure 2 shows my attempt at taking the brainstorm and turning it into a site org chart: </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/94-6-information-architecture-planning-out-a-web-site/article6_2.gif" alt="the first iteration of the site structure" />

<p class="comment">Figure 2: First iteration of site structure. <span style="font-size:80%;"><a href="figure2_longdesc.html">Figure 2 image description</a></span></p>



<p>That definitely captures all of the pages we’ll need, but there’s no real grouping going on here.  It’s just a big mess of pages now, and at this point I hadn’t really given a lot of thought to what things are called.  I did one more pass and try to “chunk” the information into slightly larger groupings—Figure 3 shows what I did: </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/94-6-information-architecture-planning-out-a-web-site/article6_3.gif" alt="the site structure grouped more logically" />

<p class="comment">Figure 3: Site structure, revised. <span style="font-size:80%;"><a href="figure3_longdesc.html">Figure 3 image description</a></span></p>


<p>I’ve done a couple of things with the revised site structure. The “Band News” page gives TDB a place to post anything they want to share with their fans. Even after their summer tour is over, and the “Tour dates and locations” page is no longer relevant, they’ll be able to post stuff.  Adopting a blog format here will let fans comment in context on the various stories, and will help to build an online community around TDB.  News and tour events will likely spark the most discussion, so let’s group that all together.  Additionally, the word “News” is a simpler, more general word that people will be able to recognise faster if they’re skimming a page for the information they want. </p>


<p>Our new “About The Dung Beatles” page groups together the band members’ biographies as well as their pictures.  Going this route gives us a jumping off point for individual band member biographies.  Following a similar argument to the one we made above, “About” is a common term used on a lot of web sites.  Any time a visitor wants to learn more about a company, a product, a service, or an individual, they usually look for an “About” link. </p>


<p>Finally, the term “Discography” is a bit of a technical term.  It’s possible that fewer people will understand what that term means than “The Music”.  Also, it opens up this page to additional content: sources of inspiration, history of a particular song…you get the idea.  I think we’re ready to roll.  After I’ve talked a bit about naming pages sensibly, we’ll move on to add a little more detail about each page. </p>

<h3 id="namingpages">Naming your pages</h3>

<p>Page names can be one of the most crucial decisions you’ll make during web site design.  Not only is it important for your visitors so that they can find their way around your web site; it is also another thing that dictates how easy your site is to find using a search engine (you’ll find various mentions of search engine optimisation throughout the course). </p>


<p>In general, search engines look at the text included in a web page, the URL of that page, and the text of any links to that page when they’re deciding “how important” it is.  Giving your pages sensible names and sensible URLs will encourage anyone linking to your pages to use sensible descriptions. </p>


<p>Here’s an example.  Let’s say you’re a car company, and you have a model called “The Speedster”.  You’ve got a web site to promote your automobile, and one of the pages lists available features.  Do you call this page “Features”, “Available Features”, “Features of the Speedster”, or “Bells and Whistles”?  I would suggest that “Features of the Speedster” is the best option from this list.  It’s specific to what the page contains, chances are that the title will be displayed high up on the page and will be prominent (good for search engine indexing), and you may even be able to fit it into the URL (something like “www.autocompany.com/speedster/speedster-features/”).</p>
<h3 id="addingdetail">Adding some details</h3>

<p>You don’t have to figure out everything at this point, but you need to at least provide a brief description of what you have in mind for each page.  After you’ve got the site structure, number each of your pages and provide a brief description for each page, like I’ve done in Figure 4 for the home page (you’ll get a chance to do this for the other pages in one of the exercises questions at the end of the article.) </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/94-6-information-architecture-planning-out-a-web-site/article6_4.gif" alt="page details for the home page" />

<p class="comment">Figure 4: Page Details for the Home page. <span style="font-size:80%;"><a href="figure4_longdesc.html">Figure 4 image description</a></span></p>


<p>This is about as involved as you want to get at this point.  You don’t need to describe page functionality, the technology you’ll use to build it, or the design/layout in great detail.  Just describe what you have in mind in general terms.  Your goal here is to communicate what you’re thinking to your client and to force you to think things through. </p>


<p>It’s not uncommon at this stage to come to the realisation that you have too many pages, and you’ll never be able to find content for them.  You can go crazy in creating a hierarchy of pages.  For example, if the band members just wanted to publish one paragraph about themselves, it wouldn’t be necessary to create separate biography pages for each member.  They could all be combined into a single page. </p>

<h2 id="summary">Summary</h2>

<p>This article has looked at the web site as a whole, and how you should think about structuring it.  In the next article, you’re going to get taken down to the page level, and look at what goes into making a great web site: what features to include and where to include them. Articles 8, 9 and 10 then look at the visual design of a page. So this is being done in 3 logical steps (check it with the client at each stage to make sure they are happy with it): </p>

<ol>
<li>First you decide on the content of a web site, and decide how to structure that content into pages. </li>

<li>Next you decide on the functionality that will actually be used on your web site. </li>

<li>The last thing you do before you actually start going ahead and coding your web site is work out the visual design of it—the page layouts, and the colour scheme, etc. </li>
</ol>



<h2 id="exercises">Exercise questions</h2>
<ul>
<li>Look back at Figure 1 and try to develop a similar brainstorm for a web site about a car (pick any current or imaginary car).
<ul>
<li>What will visitors to the web site want to know? </li>
<li>Is there anything at existing car web sites that you see as essential?  Frivolous? </li></ul></li>
<li>Take your brainstorm and try to organise the information.  What page groupings make sense? </li>
<li>Another activity that is sometimes useful when planning out a web site is to check out the competition.  Do a search for band web sites (bonus points for tribute bands), and take a look at what they’re offering.  Did we miss anything? </li>
<li>Take a look at Figure 4 and try to develop similar figures for the other pages I’ve identified on the web site. </li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="prev" title="link to the previous article in the series">Previous article —Web standards—beautiful dream, but what’s the reality?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/7-what-does-a-good-web-page-need/" rel="next" title="link to the next article in the series">Next article—What does a good web page need?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>



<img src="http://forum-test.oslo.osa/kirby/content/articles/94-6-information-architecture-planning-out-a-web-site/Jonlane.jpg" alt="Picture of the article author Jonathan Lane" class="right" />





<p>Jonathan Lane is the President of <a href="http://industryinteractive.net/">Industry Interactive</a>—a web development/web application development company located on Mayne Island, British Columbia, Canada.  He got his start in development working for the University of Lethbridge Curriculum Re-Development Center as their web projects coordinator for many years. </p>







<p>He blogs at <a href="http://www.flyingtroll.com/">Flyingtroll</a> and is currently developing <a href="http://www.mailmanagr.com/">Mailmanagr</a>, an e-mail interface for the Basecamp project management application.</p>
    


