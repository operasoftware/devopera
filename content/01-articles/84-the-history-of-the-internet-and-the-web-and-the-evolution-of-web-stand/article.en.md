Title: The history of the Internet and the web, and the evolution of web standards
----
Date: 2008-07-08 07:07:55
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
<li class="prev"><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/" rel="start" title="link to the first article in the series">Previous article—Introduction to The Web Standards Curriculum/Table of Contents</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="next" title="link to the next article in the series">Next article—How does the Internet work?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<blockquote>
    <p><q>Where shall I begin, please your Majesty?</q></p>
    <p><q>Begin at the beginning,</q> the King said gravely, <q>and go on till you come to the end: then stop.</q></p>
<p><em>Alice’s Adventures in Wonderland; Lewis Caroll</em></p>
</blockquote>

<p>Everything has to begin somewhere, so our journey will start with a focused history lesson. Below I am going to give you a brief overview of the creation of the Internet, the World Wide Web, and the <q>web standards</q> that this entire series focuses upon. I think it is useful and interesting to understand how we got to where we are, but it will be short enough so you don’t get overwhelmed, and can get into the details nice and quickly. If any terms are unfamiliar to you, don’t worry; if they’re important for learning web development they’ll be defined in the later articles that go into more depth on each subject, and you can always Google them! If you are already familiar with the history of the Internet or the World Wide Web, feel free to skip to the section on <a href="#comingofstandards">web standards</a>. The article contents are as follows:</p>

<ul>
<li><a href="#internetorigins">The Internet’s origins</a></li>

<li><a href="#webcreation">The creation of the world wide web</a>
<ul><li><a href="#browserwars">The browser wars</a></li>
</ul></li>

<li><a href="#comingofstandards">The coming of web standards</a>
<ul><li><a href="#w3cformation">The formation of the W3C</a></li><li><a href="#webstandardsproject">The web standards project</a></li><li><a href="#riseofstandards">The rise of web standards</a></li>
</ul></li>

<li><a href="#summary">Summary</a></li>
<li><a href="#furtherreading">Further reading</a></li>
<li><a href="#exercisequestions">Exercise questions</a></li>
</ul>

<h2 id="internetorigins">The Internet’s origins</h2>

<p>On the fourth of October in 1957 an event occured that would change the world. The Soviet Union successfully launched the first satellite into Earth’s orbit. Called <q>Sputnik 1</q>, it shocked the world—especially the United States of America, who had their own programme of satellite launches underway, but had yet to launch.</p>

<p>This event lead directly to the creation of the US Department of Defence ARPA (the Advanced Research Projects Agency), due to a recognised need for an organisation that could research and develop advanced ideas and technology beyond the currently identified needs. Perhaps their most famous project (certainly the most widely used) was the creation of the Internet.</p>

<p>In 1960, psychologist and computer scientist Joseph Licklider published a paper entitled <q>Man-Computer Symbiosis</q>, which articulated the idea of networked computers providing advanced information storage and retrieval. In 1962, whilst working for ARPA as the head of the information processing office, he formed a group to further computer research, but left the group before any actual work was done on the idea.</p>

<p>The plan for this computer network (to be called <q>ARPANET</q>) was presented in October 1967, and in December 1969 the first four-computer network was up and running. The core problem in creating a network was how to connect separate physical networks without tying up network resources for constant links. The technique that solved this problem is known as packet switching and it involves data requests being split into small chunks (<q>packets</q>,) which can be processed quickly without blocking communication from other parties—this principle is still used to run the Internet today.</p>

<p>This concept received wider adoption, with several other networks springing up using the same packet switching technique—for example, X.25 (developed by the International Telecommunication Union) formed the basis of the first UK university network <abbr title="Joint Academic Network">JANET</abbr> (allowing UK universities to send and receive files and emails) and the American public network CompuServe (a commercial enterprise allowing small companies and individuals access to time-shared computer resources, and then later Internet access.) These networks, despite having many connections, were more private networks than the Internet of today.</p>

<p>This proliferation of different networking protocols soon became a problem, when trying to get all the separate networks to communicate. There was a solution in sight however—Robert Kahn, whilst working on a satellite packet network project for ARPA, started defining some rules for a more open networking architecture to replace the current protocol used in ARPANET. Later joined by Vinton Cerf from Stanford University, the two created a system that masked the differences between networking protocols using a new standard. In the publication of the draft specification in December 1974, this was called the <q cite="http://www.faqs.org/rfcs/rfc675.html">Internet Transmission Control Program</q>.</p>

<p>This specification reduced the role of the network and moved the responsibility of maintaining transmission integrity to the host computer. The end result of this was that it became possible to easily join almost all networks together. ARPA funded development of the software, and in 1977 a successful demonstration of three different networks communicating was conducted. By 1981, the specification was finalised, published and adopted; and in 1982 the ARPANET connections outside of the US were converted to use the new <q><abbr title="Transmission Control Protocol over Internet Protocol">TCP/IP</abbr></q> protocol. The Internet as we know it had arrived.</p>

<h2 id="webcreation">The creation of World Wide Web</h2>

<p><a href="http://en.wikipedia.org/wiki/Gopher_%28protocol%29">Gopher</a> was an information retrieval system used in the early 1990s, providing a method of delivering menus of links to files, computer resources and other menus. These menus could cross the boundaries of the current computer and use the Internet to fetch menus from other systems. It was very popular with universities looking to provide campus-wide information and large organisations looking to centralise document storage and management.</p>

<p>Gopher was created by the University of Minnesota. In February, 1993, they announced that it was going to charge licensing fees for the use of their reference implementation of the Gopher server. As a consequence, many organisations started to look for alternatives to Gopher.</p>

<p>The European Council for Nuclear Research (CERN) in Switzerland had such an alternative. Tim Berners-Lee had been working on a information management system, in which text could contain links and references to other works, allowing the reader to quickly jump from document to document. He had created a server for publishing this style of document (called hypertext) as well as a program for reading them, which he had called <q>WorldWideWeb</q>. This software had first been released in 1991, however, it took two events to cause an explosion in popularity and the eventual replacement of Gopher.</p>

<p>On the thirtieth of April in 1993 CERN released the source code of WorldWideWeb into the public domain, so anyone could use or build upon the software without charge.</p>

<p>Then, later in the same year, the National Center for Supercomputing Applications (NCSA) released a program that was a combined web browser and Gopher client, called Mosaic. This was originally only available on Unix machines and in source code form, but in December 1993 Mosaic provided a new version with installers for both Apple Macintosh and Microsoft Windows. Mosaic rapidly increased in popularity, and with it the Web.</p>

<p>The number of available web browsers increased dramatically, many created by research projects at universities and corporations, such as Telenor (a Norwegian communications company,) which created the first version of the Opera browser in 1994.</p>

<h3 id="browserwars">The <q>browser wars</q></h3>

<p>The popularisation of the web brought commercial interests. Marc Andreessen left NCSA and together with Jim Clark founded Mosaic Communications, later renamed to Netscape Communications Corporation, and started work on what was to become Netscape Navigator. Version 1.0 of the software was released in December 1994.</p>
    
<p>Spyglass Inc. (the commercial arm of NCSA) licensed their Mosaic technology to Microsoft to form the basis of Internet Explorer. Version 1.0 was released in August 1995.</p>

<p>A rapid escalation soon followed, with Netscape and Microsoft each trying to get a competitive edge in terms of the features they support in order to attract developers. This has since become known as the <q>browser wars</q>. Opera maintained a small but steady presence throughout this period, and tried to innovate and support web standards as well as possible in these times.</p>

<h2 id="comingofstandards">The coming of web standards</h2>

<p>During the browser wars, Microsoft and Netscape focused on implementing new features rather than on fixing problems with the features they already supported, and adding proprietary features and creating features that were in direct competition with existing features in the other browser, but implemented in an incompatible way.</p>

<p>Developers at the time were forced to deal with ever increasing levels of confusion when trying to build web sites, sometimes to the extent of building two different but effectively duplicate sites for the two main browsers, and other times just choosing to support only one browser, and blocking others from using their sites. This was a terrible way of working, and the inevitable backlash from developers was not far away.</p>

<h3 id="w3cformation">The formation of the W3C</h3>

<p>In 1994, Tim Berners-Lee founded the World Wide Web Consortium (W3C) at the Massachusetts Institute of Technology, with support from CERN, DARPA (as ARPA had been renamed to) and the European Commission. The W3C’s vision was to standardize the protocols and technologies used to build the web such that the content would be available to as wide a population of the world as possible.</p>

<p>During the next few years, the W3C published several specifications (called <q>recommendations</q>) including HTML 4.0, the format for PNG images, and Cascading Style Sheets versions 1 and 2.</p>

<p>However, the W3C did not (and still do not) enforce their recommendations. Manufacturers only had to conform to the W3C documents if they wished to label their products as W3C-compliant. In practice, this was not a valuable selling point as almost all users of the web did not know, nor probably care, who the W3C were (this is still the case, to a large extent). Consequently, the <q>browser wars</q> of the nineties continued unabated.</p>

<h3 id="webstandardsproject">The Web Standards Project</h3>

<p>In 1998, the browser market was dominated by Internet Explorer 4 and Netscape Navigator 4. A beta version of Internet Explorer 5 was released, and it implemented a new and proprietary dynamic HTML. This meant that professional web developers needed to know five <em>different</em> ways of writing JavaScript.</p>

<p>As a result, a group of professional web developers and designers banded together. This group called themselves the <q>Web Standards Project</q> (WaSP). The idea was that by calling the W3C documents standards rather than recommendations, they might be able to convince Microsoft and Netscape to support them.</p>

<p>The early method of spreading the call to action was to use a traditional advertising technique called a <q>roadblock</q>, where a company would take out an advert on all broadcast channels at the same time, so no matter how a viewer would flick between channels, they would get exactly the same message. The WaSP published an article simultaneously on various web development focused sites including builder.com, Wired online, and some popular mailing lists.</p>

<p>Another technique the WaSP used was to ridicule the companies involved with the W3C (and other standards bodies) that focused more on creating new, often self-serving, features rather than working to get the basic existing standards supported correctly in their products to start with (this includes some browser companies that shall remain nameless here). This doesn&#39;t mean that the WaSP ridiculed the W3C themselves, rather 
they ridiculed the companies that became W3C members and then misbehaved.</p>

<p class="note">The W3C has a few full time staff, but most of the 
people who work on the standards are volunteers from member companies, 
eg Microsoft, Opera, Mozilla, Apple, Google, IBM, Adobe, to name a few 
of the bigger ones.</p>

<p>This all sounds a bit negative, but the WaSP didn’t just sit there criticising people—they also helped. Seven members formed the <q>CSS Samurai</q>, who identified the top ten problems with the CSS support in Opera and other browsers (Opera fixed their problems, others did not).</p>

<h3 id="riseofstandards">The rise of web standards</h3>

<p>In 2000, Microsoft released Internet Explorer 5 Macintosh Edition. This was a very important milestone, it being the default browser installed with the Mac OS at the time, and having a reasonable level of support for the W3C recommendations too. Along with Opera&#39;s decent level of support for CSS and HTML, it contributed to a general positive movement, where web developers and designers felt comfortable designing sites using web standards for the first time.</p>

<p>The WaSP persuaded Netscape to postpone the release of the 5.0 version of Netscape Navigator until it was much more compliant (this work formed the basis of what is now Firefox, a very popular browser). The WaSP also created a <q>Dreamweaver Task Force</q> to encourage Macromedia to change their popular web authoring tool to encourage and support the creation of compliant sites.</p>

<p>The popular web development site <q>A List Apart</q> was redesigned early in 2001 and in an article describing how and why, stated:</p>

<blockquote cite="http://www.alistapart.com/articles/tohell">
<p>In six months, a year, or two years at most, all sites will be designed with these standards. [&#x2026;] We can watch our skills grow obsolete, or start learning standards-based techniques now.</p>
</blockquote>

<p>That was a little optimistic—not all sites, even in 2008, are built with web standards. But many people listened. Older browsers decreased in market share, and two more very high profile sites redesigned using web standards: Wired magazine in 2002, and ESPN in 2003 became field leaders in supporting web standards and new techniques. </p>

<p>Also in 2003, Dave Shea launched a site called the <q>CSS Zen Garden</q>. This was to have more impact on web professionals than anything else, by truly illustrating that the entire design can change just by changing the style of the page; the content could remain identical.</p>

<p>Since then in the professional web development community web standards have become de rigeur. And in this series, we will give you an excellent grounding in these techniques so that you can develop websites just as clean, semantic, accessible and standards-compliant as the big companies’.</p>

<h2 id="summary">Summary</h2>

In this article I’ve looked at how the modern Internet was created as a result of the space race; how Tim Berners-Lee defined hypertext for a generation and how the commercial interests of two companies caused one of the most notable developer backlashes ever seen. The term <q>web standards</q> is now more widely used by web professionals that any other term applied by the W3C (in fact the W3C have started to use the term on their own pages), so that is what we are going to teach you—the <em>standards</em> way to build web sites.

<h2 id="furtherreading">Further reading</h2>

<p>If you want to know more, you may like to visit some of the following sites:</p>
<ul>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_Internet">The history of the Internet (wikipedia)</a></li>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_World_Wide_Web">The history of the World Wide Web (wikipedia)</a></li>
  <li><a href="http://www.w3.org/Consortium/history">The history of the W3C</a></li>
  <li><a href="http://webstandards.org/">The Web Standards Project</a>, and their <a href="http://www.webstandards.org/about/history/">history</a></li>
  <li><a href="http://www.alistapart.com/">A List Apart</a></li>
  <li><a href="http://www.csszengarden.com/">CSS Zen Garden</a></li>
</ul>

<h2 id="exercisequestions">Exercise questions</h2>

<p>Or you might like to try researching further, by answering these questions:</p>
    
<ul>
  <li>What browsers are available on the Internet today for users of Windows, Mac OS X and Linux?</li>
  <li>What percentage of web users use each browser?</li>
  <li>What browsers do mobile devices use when accessing web pages?</li>
  <li>How many <q>web standards</q> have the W3C published, and which are widely supported by browser manufacturers today?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/" rel="start" title="link to the first article in the series">Previous article—Introduction to The Web Standards Curriculum/Table of Contents</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="next" title="link to the next article in the series">Next article—How does the Internet work?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

 <h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/84-2-the-history-of-the-internet-and-the-web-and-the-evolution-of-web-stand/norm.jpg" alt="Picture of the article author Mark Norman Francis" />

<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" alt="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>

<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" alt="Norms blog">http://marknormanfrancis.com/</a>.</p>p
