Title: Stop using Ajax!
----
Date: 2008-04-24 15:33:39
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

<h2>Introduction</h2>
<p>A while back I got into a forum discussion over <a href="http://www.sitepoint.com/forums/showthread.php?t=464415" alt="discussion on the accessibility of CAPTCHA systems">the accessibility of CAPTCHA systems</a>. That isn&#39;t what this article is about (in fact it wasn&#39;t what the thread was about either, but I soon changed that!). I only mention it because one comment in particular stood out as symptomatic of an attitude I come across time and time again: </p>

<blockquote>&quot;I am very much in favour of making the web more accessible to everyone, but ...&quot;</blockquote>

<p>As I said in that thread, to be &quot;very much in favour&quot; is a cop-out if you&#39;re not prepared to follow that through to its conclusion; it only pays lip-service to the idea of accessibility, without being prepared to do what it actually takes. I stewed on that thought for a few days, and eventually followed it up with a rant on my own site: <a href="http://www.brothercake.com/site/resources/reference/hope/" alt="Technology is the last best hope for accessibility">Technology is the last, best hope for accessibility</a>. In that post I railed against developers who can&#39;t be bothered to care: </p>

<blockquote>&quot;Server-side programmers who hide on the server and deny that the client-side matters; client-side programmers so obsessed with the latest cool thing, that they&#39;re quite happy to <strong>leave groups of people behind</strong> in the name of what&#39;s cutting-edge and sexy.&quot; </blockquote>

<p>See, the web already was accessible to everyone. Tim Berners-Lee’s original vision for the web was all about <strong>universal access</strong>; and the technologies involved – such as HTTP and HTML – were <em>designed</em> to be <strong>platform and device agnostic</strong>; it shouldn’t matter what kind of technology you use to access the web. </p>

<p>But commercial interests got in the way, and the desire for branding overtook the need for open, standardised solutions; in effect, we tried to run before we could walk, because the huge commercial uptake of the internet far outstripped its early capabilities. And so we got things like browser wars, browser-specific DHTML, and table-based layouts. These were things that got in the way of the original vision, because people wanted rich content when the technology wasn’t ready. And now it’s happening again. </p>

<p>Of course to the majority of people this is all irrelevant – if it works, and it looks good, where’s the problem? Well the problem unfortunately is that there’s a victim, and <strong>the victim is accessibility</strong>. What I’m suggesting in this article is that it’s not acceptable to have a victim – especially when it’s a group of people who are already suffering disproportionately - and if what we’re doing creates that, then what we’re doing is wrong. I&#39;ll look at the argument in detail, get to a conclusion, and along the way I&#39;ll suggest how we can find non-Ajax solutions to a lot of the web functionality that Ajax is commonly used for. </p>

<h2>&quot;most&quot; doesn&#39;t need to be enough</h2>

<p>Ajax is a sound and useful idea. But every idea comes down to a practical implementation - a technology that makes it happen - and in this case the technology is <strong>immature</strong>, because it leaves groups of users behind. Most notable and greatly affected are those using assistive technologies, but also those using less capable browsers that don&#39;t support the necessary scripting objects, or don&#39;t support scripting at all. </p>

<p>It might be reasonable to say that JavaScript support is not an accessibility issue, if it&#39;s a user choice - if a person switches off JavaScript deliberately then shouldn&#39;t they take responsibility for that choice? Well, yes, they should, but that&#39;s not the real issue here; the real problem is more complicated, and isn&#39;t a user choice. </p>

<p>Screen readers like JAWS, Window-Eyes and Hal <em>are</em> script-capable devices (since they sit on top of a script-capable browser, usually Internet Explorer), yet their ability to handle JavaScript applications <a href="http://web.archive.org/web/20100821111228/http://www.access-matters.com/2005/09/15/summary-of-results-for-javascript-part-1-navigating-links/" alt="summary of research on how screenreaders are affected by JavaScript">is nothing like equivalent</a>. We can&#39;t rely on non-script fallbacks, nor on a scripted interface - these devices <strong>fall through the net of progressive enhancement</strong>.</p>

<p>Now that probably won&#39;t come as a surprise. The fact that assistive technologies have problems dealing with asynchronous updates to the DOM is fairly well known by now (for a summary of the state of play, check out <a href="http://web.archive.org/web/20100719043542/http://www.access-matters.com/2007/01/22/improving-accessibility-for-todays-ajax-to-hack-or-not/" alt="Improving Ajax accessibility article">Improving accessibility for today&#39;s Ajax</a> at Access Matters; I&#39;d also recommend a recent ALA article, <a href="http://www.alistapart.com/articles/waiaria" alt="A List Apart ARIA article">Accessible Web 2.0 Applications with WAI-ARIA</a>, which looks at one promising solution to this issue).

<p>You could also say – and quite fairly – that this is the screenreaders’ problem, that the technology is broken and needs to be fixed. Yeah fine, but that really doesn’t help. The simple fact is that there are people using the web <em>right now</em>, using technology that’s increasingly failing to cope, and they don’t have the option of using something better, because there isn’t anything better. </p>

<p> (Let&#39;s look at this using an analogy – suppose you could speak English and Spanish, and you’re talking to someone who only speaks English. Do you continue to speak to them in Spanish just because you think it sounds nicer? Do you complain that it’s their fault for failing to understand you?) </p>

<p>So let’s take the situation as read and move on to an interim conclusion: this problem has <em>not been</em> solved, and in my opinion, until such time as it is, <strong>Ajax techniques should not be considered suitable for widespread use</strong>. </p>

It&#39;s really not okay to leave groups of people behind, simply because they no longer fit your model of what a user is. Still, I appreciate that neither is it palatable to delay useful progress and development, if other groups of people can benefit from it. </p>

<p>But I don&#39;t believe it&#39;s necessary to do either - we can have our cake and eat it too, if we remember this simple observation: </p>

<blockquote>New innovations often inspire us to do things that we don&#39;t really need the new technology for, it&#39;s simply that the change in approach and easy capability inspires new ideas.</blockquote>

<p>In other words, the emergence of Ajax techniques has inspired a whole new wave of applications, but in many (if not most) cases, these applications don’t actually need Ajax to work - it’s simply that we hadn’t thought of them before. It’s easy to assume that the evolution of ideas follows an unbroken chain of cause and effect, but this isn’t really the case; evolution is as random as it is deterministic, and we can cherry-pick the best ideas – we can build Web 2.0 applications without using Ajax. </p>

<h2>Web 2.0 != Ajax</h2>

<p>One of the darlings of Web 2.0 is the photo-sharing site, <a href="http://www.flickr.com/" alt="The Flickr homepage">Flickr</a>. I really love Flickr, and am certainly not suggesting it’s a terrible web site, but Flickr uses Ajax gratuitously, and arguably unnecessarily. None of Flickr&#39;s core functionality requires asynchronous updates to the page; all of it could be achieved in the &quot;traditional&quot; Web 1.0 way. If it were done like that it would be a whole lot more accessible and arguably a lot more usable. </p>

<p>To illustrate, <a href="flickr.html" alt="A non Ajax version of Flickr">here&#39;s something I whipped up earlier</a>. Thinking about how Flickr could be made without using any Ajax, I hit upon the idea of an editable page, similar to a wiki, on which everything that&#39;s user-editable can be modified all at once. So it&#39;s either read-only like a regular page, or it&#39;s editable like a form. You can <a href="demo.zip">download the full example files</a> here.</p>

<p>This distinction makes for better accessibility because the technology baseline is lower; and I also think it makes for better usability because there&#39;s no mystery-meat to the interface anymore, no clicking things to see if it&#39;s edit-in-place. You have output elements, and input elements, and never the twain need meet. </p>

<p>This demo is not perfect by any means (it&#39;s missing a couple of features, and it could look prettier!), but it should serve to illustrate the point - we don&#39;t actually <em>need</em> Ajax to provide an editable interface. The page is constructed as a single form, and all editable parameters are fields in that form (editable parameters are indicated with a yellow box). The whole thing makes a <code>POST</code> request when submitted (rather than using <code>GET</code> data, which is inappropriate for some kinds of action); and of course, it all works without JavaScript. </p>

<p>It&#39;s also semantic XHTML throughout, with no tables for layout! </p>

<p>Now to me, that&#39;s far more useable than the original interface, because it&#39;s obvious what everything is - there are no form actions disguised as links, or links disguised as buttons - it does what it says on the tin. But I know that the usability thing is debatable - you might look at that and think it&#39;s far less useable than the slick, micro-update, edit-in-place format of the current site. Usability is, after all, one of the main touted benefits of Ajax, and if we can design interfaces that are more self-contained and versatile, then isn&#39;t that a good thing? (Would Flickr even be Flickr - would it have been so successful at all - without that &quot;progressive&quot; user experience?) </p>

<p>But posting forms and page refreshes are norms of current web behaviour. They&#39;re part of a set of expectations that all Internet users share by now - everybody knows how that works. Is it really a good thing to ride roughshod through these expectations so soon, simply because we think it&#39;s better another way? (What is that &quot;yellow fade&quot; thing all about, other than re-creating status functionality that the browser already had?) </p>

<p>Striving for better things is not good enough, if in the process we lose some of our users completely. I think of progressive enhancement like a hierarchy of objectives: where accessibility is the highest, most important thing, followed by usability, followed by aesthetics. Ideally we want all three, but if achieving one of the lower levels means sacrificing one of the higher ones, then it&#39;s simply not justifiable, in my mind. </p>

<p>Good usability or not, the pure accessibility issue is pretty much undeniable, I think. All browsers and all assistive technologies know how to deal with forms. You don&#39;t need JavaScript, or a mouse, or stylesheets, or even color to make that work! </p>

<blockquote>&quot;And the men and women ... well, the men ... who went to the moon - they did it with no mouse, and a black-and-white text-only screen, and 32 kilobytes of RAM!&quot; </blockquote>

<h2>But Ajax allows for applications that are otherwise impossible... </h2>

<p>How could <a href="http://maps.google.com" alt="The Google Maps homepage">Google maps</a> possibly work without asynchronous updates? And what about <a href="http://www.meebo.com/" alt="The Meebo homepage">Meebo</a>, the online messaging service, which similarly couldn&#39;t be done without Ajax (or an excessive and highly unfriendly stream of constant page refreshes!)? </p>

<p>Meebo and Google Maps <em>need</em> Ajax to work, and so I have no real criticism of them, and accept that the pure accessibility issues are (as far as I can think) unsolvable for now. I&#39;m not a puritan, and if it comes down to a division between, &quot;do X for the majority&quot;, or, &quot;don&#39;t do X at all for anyone&quot;, I&#39;ll usually side with the former. </p>

<p><a href="http://www.twitter.com/" alt="The Twitter homepage">Twitter</a> I&#39;m not so sure about - it could be done without Ajax, because its periodic updates are relatively infrequent. Twitter could work by refreshing the whole page, or an iframe containing just the message list, say, every minute or two; but automatic page refreshes have their own accessibility issue quite apart from this (because most user-agents don&#39;t allow control over page refreshes, and to reload a page without user intervention is equally rude and intrusive). So again, if Ajax is what it takes, and it&#39;s that or nothing at all, then you won&#39;t hear me complaining too loudly about gratuity or lack of forethought. </p> 

<p>Indeed, a client of mine has a successful web-development division that recently did some work that could only have been done with Ajax. They were asked to make improvements to the usability of a legacy system, their client having already been told by other developers that such improvements were impossible, since the system was so entrenched and nightmarish to edit. But Ajax allowed improvements to be made by injecting new UI components directly into the interface, without having to touch the back-end at all! And that&#39;s great - and their client was very pleased! </p>

<p>But all of these examples are really <em>edge cases</em> - circumstances that seldom apply. Most of us, most of the time, are working on applications that don&#39;t really need Ajax, and which don&#39;t significantly benefit from using it. So much Ajax is pointless, used purely for its own sake, or for the sake of being trendy. </p>

<p>I recently went to see a company who were developing a complex, entirely Ajax-driven application; to me Ajax really didn&#39;t seem necessary for what they were trying to build. I wanted to give them a fair go, but I was pretty sure in advance that I was going to hit a brick wall when it came to accessibility. And I did. And their arguments were reasonable in purely financial terms - if we can achieve 90% penetration using this technology, why should we care about that other 10%?</p>

<p>But what if everyone thought like that? What would happen to that 10% who suddenly found the web to be a place in which they&#39;re no longer welcome? Who found that <strong>technology - the ultimate enabler</strong> - had become just another barrier? </p>

<p>It&#39;s happening <em>right now</em>, and it&#39;s really not okay. This headlong rush toward Rich Internet Applications is happening without due care and attention. </p>
<h2>To boldly stay</h2>
<p>In 2293, in his opening speech to the peace conference at Camp Khitomer, the Federation president spoke these insightful words: </p>

<blockquote>&quot;Let us redefine progress, to mean that just because we can do a thing, it does not necessarily follow that we must do that thing.&quot; </blockquote>

<p>Jesse James-Garrett may have <a href="http://adaptivepath.com/ideas/essays/archives/000385.php" alt="Jesse James-Garrett coins Ajax">started a revolution</a>, but I&#39;m sure that was not his intention. He had the freedom to use a technique in which accessibility didn&#39;t matter, and universality was not an issue. But most of the time, for most of what we do, we don&#39;t have that kind of luxury; so let&#39;s not be so quick to abandon what works. </p>

<p>Stop being so infatuated, and take time to do things properly. </p>

<p><em>And anyway ...</em> the really good ideas in this evolution of the web are conceptual, not technological - social networking, tagging / folksonomy, user-generated content - and we don&#39;t need Ajax to make any of that work. </p>
<h2>So to re-iterate</h2>
<p>In summary, these are my points: </p>

<ol>
<li>I&#39;m not saying Ajax is <em>bad</em>, I&#39;m saying <strong>it&#39;s immature</strong></li>
<li>I&#39;m not saying <em>never</em> use Ajax, I&#39;m saying <strong>don&#39;t use it for the sake of it, and try to avoid it for now</strong>, instead sticking to accessible alternatives</li>
</ol>
<p>When Ajax comes of age I&#39;ll be cheering as loudly as anyone. And I&#39;ll be working towards that goal and looking for solutions myself. But until that day comes, I intend to stick to proven, standards-based and accessible tools - not sketchy, proprietary and inaccessible toys.</p>

