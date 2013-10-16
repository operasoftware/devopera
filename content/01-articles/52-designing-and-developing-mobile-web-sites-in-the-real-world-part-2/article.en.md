Title: Designing and Developing mobile web sites in the real world, part 2
----
Date: 2007-11-07 09:03:58
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

<p>Ok, so now we&#39;ve got some of the theory out of the way, we&#39;ll turn our attention to more practical matters. In this part I&#39;ll look at 2 case studies of sites I helped to develop, looking at problems we faced, and how we overcame them. I&#39;ll also spend some time on server/browser sniffing, and standards support for mobile devices.</p>

<p class="note">If you haven&#39;t already read part 1 of this great article, <a href="http://dev.opera.com/articles/view/designing-and-developing-mobile-web-site/" alt="Part 1 of this article">do so here</a> before carrying on.</p>

<h2>Case studies</h2>

<p>Now I&#39;ll now focus on two case studies to show how the team at <a href="http://www.tm-software.com/" alt="The TM Software English home page">TM Software</a> helped create 2 mobile sites, and the kinds of issues we faced.</p> 

<h3>Siminn Telecom 3G Mobile development</h3>

<p>In August 2007, Siminn - the largest telecom in Iceland - rolled out their 3G network. As part of this rollout, they launched an <a href="http://m3.siminn.is/" alt="The Siminn mobile web site">accompanying 3G-optimized mobile website</a> that would showcase their enhanced services and inspire customers to surf the mobile web.  This site offers a wide spectrum of mobile-centric downloads - ringtones, games, movie trailers, wallpaper, etc.  Its functionality dwarfs that of their legacy mobile web presence.
Wikipedia defines &quot;3G&quot; in this way:</p>

<p>3G is the third generation of mobile phone standards and technology, after 2G. It is based on the International Telecommunication Union (ITU) family of standards under the International Mobile Telecommunications programme, &quot;IMT-2000&quot;. 3G technologies enable network operators to offer users a wider range of more advanced services while achieving greater network capacity through improved spectral efficiency. Services include wide-area wireless voice telephony and broadband wireless data, all in a mobile environment (<a href="http://en.wikipedia.org/wiki/3G" alt="The Wikipedia 3G entry">source</a>.)</p>

<p>In tandem with the launch of their 3G mobile website, Siminn also launched a slightly lighter version of the same site - a 2G-optimized mobile presence to serve less powerful phones.  Both sites are anchored to the same reservoir of information, but the 3G site makes less-restricted use of CSS, images, and other coding ornamentations.</p>

<p>Accessing either of these portals is free if you are a Siminn customer.  Basically this means that you are not billed for network downloads while on these pages.  In this way Siminn has begun to escort their customer base into the brave new arena of the mobile web.  And a concurrent benefit of their strategy is that they are also opening the door on the dawning world of mobile commerce.</p>

<p>The primary demographic that Siminn is seeking to capture with their enhanced mobile web presence is the &quot;Bored now&quot; contingent, thus one of the motivating criteria for us when we coded the GUI was that the user should be greeted with an enticing array of eye candy when they hit the site.  They are not surfing the Siminn web because of some urgent or repetitive need for information.  In essence, they have come to the Siminn mobile web to be entertained.</p>

<p>The only distinction Siminn makes concerning the dimensionality of the user-experience is whether the device is 2G or 3G enabled.  As stated before, 2G devices are sent to a slightly lighter version of the 3G site. This is illustrated by Figure 1, the basic design that has minimal styling and multimedia. Figure 2 is the same site with more design and multimedia which has been optimized for the 3G network. It is important to reiterate that both sites are based upon the same body of information.  It is only the decorative elements that distinguish one from the other.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image001.jpg" alt="The default Siminn mobile design for all devices with basic stylized lists" />
<p class="comment">Figure 1: Default design for all devices with basic stylized lists</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image002.jpg" alt="The 3G version of the Siminn site with more media and color" />
<p class="comment">Figure 2: 3G version of the mobile site with more multimedia and colored styling</p>

<p>Later, I will talk about some basic ways to detect a device, because once you know what the device is, you can serve it a version of your mobile web site optimized to provide a good experience on that particular device. This is exactly what Siminn are doing. By detecting the type of phone, they are presenting the customer with the most appropriate version of the page – either the 3G enhanced or the more basic design.</p>

<p>The long term utility of Siminn&#39;s flagship 3G (and 2G) mobile presence remains to be seen.  Will it thrive and prosper or will it undergo some manner of premature obsolescence? Certainly this question cannot be answered at the present time.  At the very least, however, it may be said that Siminn&#39;s foray into the uncharted waters of what is, essentially, their own swimming pool, will have the long term benefit of raising the public&#39;s awareness of the Mobile Web.  In many respects, the Mobile Web today is analogous to the World Wide Web circa 1993: a rising tide on the cusp of becoming a full-blown tsunami.</p>

<h3>Icelandair</h3>

<p>Icelandair is a large airline in Iceland that flies to a multitude of destinations in North America and Europe. In the spring of 2007, they became interested in establishing a mobile web presence.  Since their traditional website is quite deep, the first task we were faced with was figuring out what subset of data would be most useful to a visitor of the hypothetical Icelandair mobile presence.  Almost immediately we recognized that the demographic we&#39;d be catering to would be the &quot;Urgent now&quot; group. For example, I&#39;m on my way to JFK airport and suddenly I hit heavy traffic on the Long Island Expressway.  My main concern becomes whether I&#39;ll miss my flight or not?  If I had access to a constantly updated stream of Icelandair departures, I could quickly allay my fears (or, perhaps, stoke my fears as the case may be).</p>

<p>With that in mind, we chose not to try and replicate the entire Icelandair website, but rather to cleave from it four or five of its most crucial elements. The items we selected were:</p>

<h4>1 - Flight Status</h4>

<p>Access to updated arrival/departure times is, perhaps, the single most useful piece of data for a user of the Icelandair mobile web.  Within three clicks I am shown a table of up-to-the-minute arrival and/or departure times.  This feature draws upon the same XML feed as the conventional website. The difference is the XSLT that facilitates the styling.  This same strategy is used for the News/Alerts section as well. Figure 3 is the Arrivals table displayed on a mobile device, where as figure 4 shows the same data, but styled for a desktop browser. You can see how all the same information is present, but in a different style.</p>
 
<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image003.jpg" alt="The departures table on the Icelandair mobile web site" />
<p class="comment">Figure 3: Departures table. The mobile version shows the same data as Figure 4, just reformatted into a different display using XSLT.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image004.jpg" alt="The arrivals and departures table on the main Icelandair web site" />
<p class="comment">Figure 4: Arrivals and Departures table on the website</p>

<h4>2 - E-ticket Retrieval</h4>

<p>This allows customers to enter either their credit card number or their booking number and then receive their electronic airline ticket via email.  The next iteration of this feature will enable customers to receive their e-tickets via SMS too.  This page contains the only form on the mobile site. In general, forms should be avoided because form input via a mobile device can be a tricky endeavor.  However, there are certain coding practices that can simplify form input.  For example, if your form field should only accept numeric input, then you should make use of the <code>-wap-input-format</code> property of <a href="http://www.developershome.com/wap/wcss/wcss_tutorial.asp?page=inputExtension2" alt="A WAP CSS tutorial">WAP CSS</a>. The Apple iPhone will automatically set the input to <code>numeric</code> if the name of the input element is set to certain values -  <code>phone</code> or <code>zip</code> for example.</p>

<h4>3 - News/Alerts</h4>

<p>This item features the breaking news stories that are featured on the homepage of Icelandair&#39;s conventional website. These may include travel advisories, flight cancellations, delays, etc. The section was a snap to implement because the Icelandair CMS was already accepting and vending news for their conventional site.  Our only task for us was to create an XSL file that would output the same news items in a suitable format for mobile devices.</p> 

<p>In future iterations of the Icelandair mobile web, the news section will contain only the subset of news that is specifically useful for a mobile user.  For example, a news item on the conventional web might be something concerning a change in executive leadership of Icelandair Group.  This item, while news-worthy, is not really mobile news-worthy.  Mobile users only need to be shown news items that have some inherent urgency.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image005.jpg" alt="The news page on the Icelandair mobile site" />
<p class="comment">Figure 5: Mobile News page with an image and news story</p>
 
<h4>4 - Contacts</h4>

<p>A brief list of the most vital telephone numbers for Icelandair customer support: Main Office, Baggage Claim and Airport Info.  For a usability enhancement, any of these numbers can be instantly dialed simply by clicking them because the phone supports the tel protocol. Much like your desktop browser recognizes a mailto: link as an email address, mobile devices recognize tel: links and phone numbers.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/52-designing-and-developing-mobile-web-sites-in-the-real-world-part-2/image006.jpg" alt="The contact page on the Iceland mobile site, with clickable numbers that automatically dial those numbers" />
<p class="comment">Figure 6: Contact page containing clickable numbers that automatically dial the number</p>
 
<p>Although Icelandair&#39;s mobile web is still in beta, the company has taken its first steps toward establishing an eminently useful presence in the mobile arena.  Its site is light, lean, and no-nonsense.</p> 

<h2>How to detect phones</h2>

<p>There are several ways for your website to detect the browser viewing it is on a phone and its capabilities. I&#39;ll outline briefly a few tips, link to a couple resources, and talk more about what you can do with that information rather than how get the data. With this information you can tailor the customers experience to their device so it is the best possible. That way they can leverage the most out of their own phones features and capabilities rather than being stuck with a cut-down version of the full site.</p>


<h3>User-Agent Strings</h3> 

<p>As you probably know, a user-agent string is the string that a browser announces itself as, for instance IE7&#39;s UA string is:</p>

<pre>Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)</pre>

<p>There has been a big stink over sniffing user-agent strings, and I personally go back and forth on the relative benefits and drawbacks of the technique. The concept of sniffing for a user-agent string in itself is not bad or evil; it is what you do with this information where most sites completely fail. For example, I have seen banking websites that sniff the UA string and try to force you to &quot;upgrade to IE6,&quot; even if you are using IE7. Fully capable browsers with small market shares often get excluded from sites even thought they could probably run the whole site comfortably.</p>

<p>This is why browsers like Opera, and Firefox with plugins, allow you to lie about what browser you are using. The problem is not the sniffing of the UA string, but the fact that companies do evil, incorrect things with the data. Do not assume that just because the UA string is not in your enumerated list of “Accepted strings”, it is not possible to view the site. This is where you build in progressive enhancements to the website experience.</p>

<p>Object detection is another method to consider, where you search for specific objects in the target browser to see whether it will run your features. This has the advantage that it is browser independent, and if a browser does not have the support required to run a certain feature, it will just avoid the feature altogether, rather than breaking. Then if support is added, it will pick up that feature without you having to change your code.</p>

<h3>WURFL</h3>

<p>WURFL is an open source list of known phones and their capabilities. This can be put into a database and when a mobile device visits the your site you can sniff the UA, look-up the capabilities of that device (including screen-dimensions, default browser, etc) and serve them the best possible experience.</p>

<p>A simple example is the tel protocol. Desktop Browsers recognize a handful or different protocols - http, ftp, mailto, and a few others. One that they tend not to recognize is the tel protocol. <code>href=&quot;tel:1234567890&quot;</code> allows you to click a link and the system will dial that number. For a desktop machine this is not very practical, the vast majority of us don&#39;t make phone calls via the computer (although skype re-invented this as the callto protocol). A phone, on the other hand, is a perfect machine to use the tel protocol for phone related links, but not all phones support it, so you want to check first.</p>

<p>Using WURFL and your favorite programming language, you can make something like the following:</p>

<pre>
if ($tel_capable == true){
  echo &#39;click to call me at &lt;a href=&quot;tel:1234567890&quot;&gt;1234567890&lt;/a&gt;&#39;;
} else {
  echo &#39;call me at 1234567890&#39;;
}
</pre>

<p>This allows you to generate tel links for phones that can handle it, but not for less capable phones. The same might go for image dimensions. Knowing the screen-size you can increase or reduce your masthead logo to fit accordingly. It does give the same information no matter what the device or capabilities, but you get a more or less enhanced experience.</p>

<h3>HTTP Headers</h3>

<p>Some devices send along a special header with each HTTP packet, which gives more information about the browser and version. It is similar to the UA string, but is device dependant. The additional header property is called <code>Profile</code> and is sometimes a URL to a file that can be extracted and the device capabilities extracted. Blackberries do this with a link to an RDF file that tells you more about the device than you can imagine. A URL from a blackberry devices looks like this:</p>

<pre>http://www.blackberry.net/go/mobile/profiles/uaprof/[BlackBerry-model]/[software-version].rdf.</pre>

<p>Your server can fetch that RDF file, cache it and parse it for various capabilities. The <a href="http://www.w3.org/RDF/" alt="The W3C RDF homepage">RDF vocabulary</a> is a standard across many mobile devices. Vendors that use this approach allow mobile sites to keep up-to-date with any new devices, without having to keep their own database of device types.</p>

<p>Every year there are hundreds of new phones on the market not to mention the legacy phones that have already been sold and are used on a daily basis. It is impossible to keep a complete list of every phone and their capabilities. Even if that were possible, there is the issue that individual carriers using the same phone might disable certain capabilities. It is a pretty hairy world of devices out there - there is no magic bullet! No matter how much you read and think you know, you will always have to test and retest over and over and be content with slight differences between devices.</p>

<h2>What works and what doesn&#39;t?</h2>

<p>After several sites, you quickly learn what you can and can’t expect to work. This is a short list of things to keep an eye on when going mobile. You can find more details about standards support in Opera Mini/Mobile 4 here:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/evolving-the-internet-on-your-phone-des/" alt="Opera Mini 4 web design tips">Designing with Opera Mini 4 in mind</a></li>
<li><a href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/" alt="JavaScript support in Opera Mini 4">JavaScript support in Opera Mini 4</a></li>
</ul>

<h3>JavaScript</h3>

<p>There are a few basic coding items to avoid in the mobile web space.  Chief among these, at least for now (now being 10/2007), is client-side scripting.  While it&#39;s tempting to try and port that elegant bit of AJAX from your conventional web to your mobile web, you will only create headaches for yourself.  One of the central challenges of coding for the mobile web is how to create a compelling user experience without resorting to any form of scripting voodoo. Some browsers do support various levels of JavaScript, but as a developer you should not expect it to work across all devices. This is a perfect example of progressive enhancement possibilities. If the site works without JavaScript, then all devices can work with the site. At this point, you can begin to add JavaScript into the code to enhance the experience for the few browsers that do support it. JavaScript also tends to be a pretty heavy processor hog, so continuous scripting can drain a battery fast – just because you can doesn’t always mean that you should.</p>

<h3>CSS Styling</h3>

<p>In terms of CSS, the main thing to remember is that mobile browser support for stylesheets varies greatly.  Thus, I would personally advise you to keep things simple. It is also a good idea to constantly be testing your pages on an array of actual devices. This is the only reliable way to see what works and what doesn&#39;t.  For example, you may discover that 4 out of 5 devices support positioning of background images.  On the 5th device, however, the background image simply disappears.  The question you then must ask yourself is: do I find some other way to code this or do I accept the fact that one device out of five will not see the background image?</p>

<h3>Fonts</h3>

<p>From an aesthetic standpoint, the single most important thing to remember is that most mobile devices default to their own font sizes and families regardless of styling. Thus, when working on the Siminn project we made no attempt to influence font size or family.  In cases where we wanted a larger font, we simply relied on the generic XHTML heading elements. That said, we did make one important and quite useful discovery.  In general, the default font size of every given device was too big for our needs, and we tried to work out how to decrease it. What we discovered is that the inclusion of font-size=smaller in the body tag worked as a kind of global reset for font sizes in every device we tested.  With this little bit of code we were able to sufficiently reduce the default font size and thus more faithfully reproduce the design that we had been tasked with coding.</p>

<h3>HTML Mark-up</h3>

<p>XHTML-MP - the mobile web subset of XHTML - is fully supported on most modern devices.  Therefore, make good use of the elements contained in XHTML-MP.  Think in terms of un-styled, accessible, semantic, valid mark-up. There are enough elements at your disposal in XHTML-MP to faithfully render most mobile web designs.  But the key is to make your pages legible with or without the accouterments of CSS.</p>

<h2>Conclusions</h2>

<p>These two seemingly simple case-studies demonstrate the vast difference in needs of the customers. As you start into the world of mobile development there are several things you need to keep in mind. Sites will never be pixel perfect! This is a reality on the 3-4 major desktop web browsers, and with hundreds of different phones and mobile browsers to consider as well this problem is compounded enormously! There is no silver bullet. You can&#39;t read 2 books and several articles about mobile web development and cover everything. Much of the effort is trial and error. When starting out, emulators are a good way to get a rough idea of how the site will work. It gives you some feel for the navigation, architecture and flow of the site, but the look and feel varies from the emulator to the real device. The best thing you can do is get a few real phones to test on. I&#39;m sure between yourself, co-workers and a few friends, you can manage to test your site on a good cross-section of the phones out there. Finally, there is some help. The <a href="http://validator.w3.org/mobile/" alt="The W3C mobile validator">W3C mobile web initiative</a> does have a checklist to see how well your site is doing and so does <a href="http://ready.mobi/" alt="The dev.mobi mobile validator">dev.mobi</a> - if you take heed of these two lists, your site should give a quality experience to most customers.</p>

<p>Mobility in our daily lives is ever increasing. The ability to get data, when we want it, from anywhere and any device is the future of Internet. The cell phone is just the tiniest jumping off point in this vast new world of the mobile web.</p>

