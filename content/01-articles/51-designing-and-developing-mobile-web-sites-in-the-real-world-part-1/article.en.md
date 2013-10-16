Title: Designing and Developing mobile web sites in the real world, part 1
----
Date: 2007-11-07 09:03:46
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

<p>Article written by Brian Suda and Chuck Cors.</p>

<h2>Introduction</h2>

<p>I&#39;m Brian Suda, and for the last 10 years, I&#39;ve been working with Internet, including websites to web applications and WAP to 3G mobiles sites for airline bookings, bank transfers to lightweight intranets. In this article I will be discussing some of the aspects our team at TM Software took with two of our more recent mobile sites designs. Hopefully, you will find a few nuggets of knowledge that you can apply to your next mobile site or help push that client that is on the fence about a mobile site to get their feet wet in this arena.</p>

<h2>What does &quot;mobile&quot; mean?</h2>

<p>Mobile development is less about the device and more about you. Your desktop PC, while relatively compact, is not really mobile. Your laptop, while mobile relative to a desktop, retains the same basic physical requirements as a desktop: horizontal surface, room for keyboard and screen, the use of two hands, etc. Your mobile device, however, represents a singularity in the evolution of portable personal computing. You are no longer restricted to a limited set of movements and positions - not to mention the use of two hands - in order to interact with your device.  In essence, the truly mobile device is an extension of you and not visa-versa.</p>

<h2>What is the mobile web?</h2>

<p>By worldwide numbers, mobile devices outnumber computers 20-1. Granted, not every phone has the capability to access the Web, but the turnover rate for mobile phones is higher than the turn over rate for desktop devices. In 2006, Nokia alone were selling on average 11-12 phones a second (<a href="http://news.softpedia.com/news/11-12-Nokia-Phones-Are-Sold-at-Every-Second-56267.shtml" alt="Data source for nokia sales rate figure">data source</a>.)</p>

<p>With the revolutionary ubiquity of mobile devices in mind, it is important that we arrive at a common understanding of what is meant by the &quot;mobile web.&quot;
While there may be a compelling case for including such protocols and standards as SMS, SMTP, and IM in our definition of &quot;mobile web,&quot; for the purposes of this article I will define the &quot;mobile web&quot; as the subset of HTTP content that has been optimized for, and/or is accessible with, a mobile device.</p>

<p>The Mobile Web is thus lighter than its immediate ancestor because of the many technical limitations of the underlying technology. When we use a desktop PC to access the Internet, we connect via Ethernet over a land-line that has a robust infrastructure (in most countries.) If, however, we use Wifi instead of Ethernet - even in our own homes and even on the same desktop PC - we introduce new complexities into the equation. Now we need to establish a connection to the Wifi point, which is connected to a router, which is connected to the Ethernet, etc.</p>

<p>When we examine the technical hurdles faced by a mobile device in connecting to the very same reservoir of data as a desktop or laptop PC, we are quickly struck by the nearly miraculous nature of the connection. The mobile phone must first connect over a less powerful network (be it an older, slower GPRS, or perhaps via a newer, faster G3 or EDGE connection,) and once the connection has been achieved, it must be sustained through a nearly balletic transference of the call from cell-tower to cell-tower as the user moves through the coverage matrix of a given carrier.  As a result, mobile devices are severely limited in terms of bandwidth. Furthermore, the miniaturized view-port adds yet another restriction on the data that may be accessed by a mobile device.</p>

<h2>Audience is key</h2>

<p>When designing any product, website or not, knowing your audience is key. What do they want?  Someone browsing your mobile site has very different needs and expectations from a desktop customer. Mobile users are limited by their device and are not, for example, accessing your site in order to download a large PDF or browse videos by their favorite band. So what, then, are the core motivations that would bring someone to your mobile site?  Fortunately Google has been focusing on this question for quite some time and their research has revealed that there are <a href="http://www.informationweek.com/blog/main/archives/2007/04/google_lays_out.html" alt="The 3 types of mobile user according to Google">three primary types of mobile user</a>.</p>

<p>When designing for the mobile web, it is useful - indeed, essential - to keep the following three categories of mobile web surfers in mind. Your central question should be &quot;which group or groups are most likely to access my mobile website?&quot; Once this question has been answered, you can begin to focus on creating the site&#39;s architecture accordingly.</p>

<h3>A - &quot;Repetitive now&quot;</h3>

<p>The repetitive group is comprised of the folks who are checking the same information constantly. They repeat the same task over and over, constantly seeking to refresh their data stream. The types of info they access may include blogs, podcasts, breaking news, weather, stocks, sports scores, gossip, etc. With the advent of RSS, however, the &quot;Repetitive now&quot; behavior is slowly transforming. The redundancy of constantly accessing a given URL is being replaced by the automated elegance of simply having updated info streamed right to you. That said, the vast majority of folks still don&#39;t use RSS. It remains a format whose day is yet to dawn, at least among non-geeks.</p>

<p>There will always be users who are looking for the same information over and over again, on mobile as well as desktop, therefore many of the same techniques used for creating the information architecture of conventional web pages are also applicable to the creation of mobile web pages. One of the guiding principles should be keep the &quot;clickiness&quot; low. A user should be able to get to any page on your site with only 3 clicks. Let the important, popular information bubble-up and reduce the number of clicks to get anywhere.</p>

<p>One key difference between desktop PCs and mobile devices is the means of user input. On a desktop you have a mouse and keyboard; on a phone (with some exceptions) you have 0-9 and possibly a joystick. This means that mobile users must cycle through links manually, as they do not have the luxury of point-and-click.  To get a sense of what this is like, try tabbing through a webpage on your desktop PC.  Depending on the number of links, you could end up spending many long seconds trying to get to a link that is only a mouse-click away. For this reason, it is extremely important that mobile websites are architected in such a way that all links are readily accessible.  The basic means of fulfilling this requirement is to make use of the <a href="http://www.w3.org/TR/mobile-bp/#iddiv3126681552" alt="accesskey in the W3C mobile web best practices"><code>accesskey</code></a> attribute, and the Opera Mini browser has a virtual mouse to help alleviate this hassle.</p>

<h3>B - &quot;Bored now&quot;</h3>

<p>The bored now group are the folks that generally have a few minutes to spare here and there. Depending on your product, this particular demographic may or may not be as important to you as the other groups. However, for certain enterprises, capturing the &quot;Bored now&quot; users is a key ingredient to success.  Telecoms, for example, have begun launching mobile websites that offer ringtones, movies, games, and other multimedia products.  These sites seek to harness the clicks of casual surfers and turn those clicks into online purchases.  The &quot;Bored now&quot; group is thus a potentially lucrative demographic. It is important to stress, however, that the products offered on the mobile website of a given a telecom are directly applicable to mobile devices.  The supply and demand are unified by the device and a profitable new market is thus created.</p> 

<p>The world of mobile commerce is in the infancy of its ascent.  For now, at least, it does not make sense to try to induce the &quot;Bored now&quot; contingent into purchasing something that is not directly related to their phone.  A &quot;Bored now&quot; user has happened upon your mobile website not because they are seeking something in particular, but because they have time to kill.  For them, a purchase only makes sense if it will grant some form of immediate gratification - some tonic for their boredom.</p>

<h3>C - &quot;Urgent now&quot;</h3>

<p>Ok, so we&#39;ve just covered the people with time to kill and money to spend, but what of users at the opposite end of the spectrum - users who have a time-sensitive need for some vital bit of information?</p>

<p>Enter the urgent now group - these are the folks who have a problem and are in a crisis situation. They need information about something specific, and they need it now. This could be anything from flight departures/arrivals, to driving directions, to a good place to eat. If this is the main category you are focusing on, then the user-experience of your mobile website better be rock-solid, fast, and answer the vital questions within one or two clicks.</p>

<h2>A note about Information Architecture</h2>

<p>Information Architecture or IA is important for any site, but critically important for mobile sites. Mobile devices are not as robust as a desktop computer with a full QWERTY keyboard and large screen real estate to put as many links into as possible. A common IA issue is depth versus breadth - is it better to have few links and less choice but drill down further, or show the user as many links as possible but be shallower so they get to their destination faster?
On a mobile phone where the screen resolution might be 120 pixels wide, the thought of having as many links as possible still limits you to only a few on each screen, so you’d think the depth approach would be better. The problem here is the slow connection speed and cost of the transfer over cellular, so more clicks the more it costs and the longer it takes to get to the information the user needs.</p>

<p>Finding that right balance sometimes means dropping as much functionality as possible. Once you have identified who will be using your site (see above,) you can better structure the IA to directly meet their needs, balancing depth and breadth.</p>

<h2>Equal experience does not mean exactly the same</h2>

<p>&quot;One Web means making, as far as is reasonable, the same information and services available to users irrespective of the device they are using&quot; (See <a href="http://www.w3.org/TR/mobile-bp/#OneWeb" alt="One web desfinition in the W3C mobile web best practices">here</a> for the original quote.)</p>

<p>One of the underlying principles of One Web is that no assumptions should be made about the device capabilities of the people who visit your website.  This is because such assumptions are often wrong - the result being that you inadvertently exclude people with fully capable browsers. One Web aims to facilitate universal access to the same information.</p>

<p>But that is where the frontier of the One Web ideology ends - at the point of access to a unified pool of data. While all content is accessible to all, the manner is which that content is represented is completely dependent upon the various eccentricities (to put it charitably) of a given device and its associated software.</p>

<p>A few years ago, Yahoo created the <a href="http://developer.yahoo.com/yui/articles/gbs/" alt="The Yahoo graded browser support homepage">graded browser chart</a>. This chart assigns a letter grade to all publicly available web browsers.  These grades are determined through a careful analysis of a given browser&#39;s adherence to W3 standards.  A grade browsers are browsers Yahoo! fully supports, with full web site capabilities (including IE6 - it still has the majority user base). C grade browsers are browsers that are not up to the task of running Yahoo’s web sites (eg Netscape 4) – these are served accessible content without the CSS and JavaScript. Browsers that are new or unknown, but are assumed to work, are given a grade of X. This includes Flock and Camino - they are based on gecko, like Firefox, which is a grade A browser.</p>

<p>After creating this chart, Yahoo used it as a guideline for serving browser-optimized pages to their visitors.  A-grade browsers are therefore served a certain presentation of a page and C-grade something else still.  But what is Yahoo&#39;s strategy for dealing with X-grade clients?  In accordance with the main principle of One Web, they serve X-grade browsers A-grade code.  In this way, no one is denied the possibility of a high-end experience, even if their phones can’t actually support everything being sent to it (in which case you must make sure your sites degrade gracefully as well.)</p>

<p>This is an idea that I will revisit when I discuss strategies for detecting mobile devices, in the second half of this article.In the second half, I also look at 2 case studies of real mobile sites I have helped to develop, looking at issues I faced, and how I overcame them; in addition, I also explore what works and what doesn&#39;t, in terms of standards support in browsers.</p>

<h2>Where to go next</h2>
<p>Enjoy this? Read the second half of this article <a href="http://dev.opera.com/articles/view/designing-and-developing-mobile-web-site-1/" alt="The second half of this article">here</a>.</p>

