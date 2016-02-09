---
title: Implementing Do Not Track and the work at W3C
authors:
- karlcow
tags:
- opera
- working-group
- ads
- w3c
- dnt
- implementation
license: cc-by-3.0
---

<p>On the Opera Desktop Team blog, there is a <a href="http://my.opera.com/desktopteam/blog/2012/02/10/core-dnt-mail-themes">new <strong>experimental</strong> build</a> available which includes support for the &quot;Do Not Track&quot; feature. Last year, in April 2011, the W3C invited the industry and the user alike to participate in a <a href="http://www.w3.org/2011/track-privacy/">workshop on Web Tracking and User Privacy</a>. A few months later, after a very successful workshop, a working group started the <a href="http://www.w3.org/2011/tracking-protection/">work on Web tracking</a> with essentially three items in its <a href="http://www.w3.org/2011/tracking-protection/charter">charter</a>: </p>

<ul>
	<li><a href="http://www.w3.org/2011/tracking-protection/drafts/tracking-dnt.html">Tracking Preference Expression (Do Not Track)</a>: This specification defines the technical mechanisms for expressing a Do Not Track preference, for example as an HTTP header or a DOM property. It may include mechanisms for sites to signal whether and how they honor this preference.</li>
	<li><a href="http://www.w3.org/2011/tracking-protection/drafts/tracking-compliance.html">Tracking Preference Expression Definitions and Compliance</a>: This specification defines the meaning of a Do Not Track preference and sets out practices for Web sites to comply with this preference.</li>
	<li><a href="http://dvcs.w3.org/hg/tracking-protection/raw-file/tip/ED-tracking-tsl.html">Tracking Selection Lists</a>: This specification defines a format for interchangeable lists for blocking or allowing Web tracking elements and expected user agent interpretation of this format.</li>
</ul>

<p>The work is not finished. Since the beginning of the Working Group, we exchanged around 2000 messages. There are representatives of the different stakeholders: browser vendors, regulators (USA, Europe mainly), Advertising business, Privacy businesses, Service providers and user advocacy organisations.</p>

<h2 id="meaning">What does DNT mean?</h2>

<p>Many of you may have heard about the <code>DNT</code> (Do Not Track) <a href="https://dev.opera.com/articles/view/http-basic-introduction/">HTTP</a> header being implemented in the major browsers, Firefox, Safari, Internet Explorer and now Opera. When the user activates it, it sends a signal to the server in its headers for each HTTP request. The current form is:</p>

<pre><code>DNT: 1</code></pre>

<p>This is basically no more than you wearing a badge in the streets saying that you <strong>do not wish to be tracked</strong>. This is very important to understand. We do not want to create a false sense of privacy or security to our users. This signal is being defined by the <a href="http://www.w3.org/2011/tracking-protection/drafts/tracking-dnt.html">Tracking Preference Expression</a> specification. </p>

<p>As a user you might then say: &#8220;<strong>So what? That doesn&#8217;t protect me.</strong>&#8221; and you would be right.</p>

<p>The most important document, and currently most debated, is the <a href="http://www.w3.org/2011/tracking-protection/drafts/tracking-compliance.html">Tracking Preference Expression Definitions and Compliance</a> document. We are in the process of defining what a service provider (and its associated Advertising business partners) should do when they receive the <code>DNT: 1</code> signal. This is essential. Plenty of <a href="http://www.w3.org/2011/tracking-protection/track/">questions</a> are raised <a href="http://lists.w3.org/Archives/Public/public-tracking/">during the discussions</a> such as the definition of tracking, data aggregation, personal information, co-branding, etc. These are very hard questions because they are rarely technical. Some of the decisions could be very disruptive for the Web industry as large. It&#8217;s why the group is trying to forge a path that all the stakeholders will be able to live with but <strong>also to implement</strong> the specifications. If the Working Group decides a meaning for <code>DNT: 1</code> and nobody is willing to implement it, because it is too hard or disruptive for their business, the users will have lost. There is a sweet spot to reach that will satisfay the Adveristing industry <strong>and</strong> the NGO and legislators.</p>

<p>The third document is a defence mechanism <a href="http://www.w3.org/Submission/web-tracking-protection/">initially proposed</a> by Microsoft. We found the proposal interesting at Opera and we decided to work on it with Opera. It fits in with our previously already available <a href="https://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">Site Blocking API</a>. The rationale is simple. If a user activates <code>DNT: 1</code>, but some service providers do not behave accordingly to the meaning of <code>DNT: 1</code>, then there is a mechanism for users to block these sites. This last document has met more resistance than the two others and we are still working on it to have a concrete proposal in front of the Working Group.</p>

<h2 id="important">Why is it important for Opera?</h2>

<p>This work is very important for Opera for two reasons. We are both a browser implementer and a service provider. The recently released build will help us to understand the interactions and the issues it might create when a user is activating the <code>DNT: 1</code> header. We would like to see how implementable the Working Group suggestions are on the server side too. Our social network, <a href="http://my.opera.com/">My.Opera</a>, and the very <a href="https://www.opera.com/mobile/">useful Opera Mini</a> browser have to be tested against the specification.</p>

<span class='imgcenter'><img alt='' src='/blog/implementing-do-no-track-opera/dnt-wg-europe.jpg' /></span>
Last Working Group Meeting in Brussels in January 2012
