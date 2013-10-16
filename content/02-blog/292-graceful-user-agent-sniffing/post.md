Title: Graceful User Agent Sniffing
----
Date: 2012-12-05 12:00:00
----
Author: 
----
Text:

<p>A common sad story in the world of user agent sniffing. This time it is with Alto, a mail service from AOL. <strong>Note that it is a widespread issue, not specific to AOL and altomail</strong>, which could easily be avoided. This post is not about altomail specifically.</p>

<h3>User-Agent sniffing is a very high maintenance task</h3>

<p>This should be on top of the screen of every project manager and web developer in their companies. There are many ways to get it wrong. And even if you get it right now, there is no guarantee that it won&#39;t be wrong in the future.</p>

<p>What happened in the case of <a href="http://altomail.com/">Alto</a>? Trying to access this Web site, you get a classic message such as:</p>

<blockquote><h4>OOPS!</h4>
<p>It looks like you&#39;re using a browser we don&#39;t support. The application works best with Chrome, Firefox, and Safari</p>
</blockquote>

<p><img src="http://forum-test.oslo.osa/kirby/content/blog/292-graceful-user-agent-sniffing/altomail-blocked.png" alt="Alto&#39;s &#39;OOPS!&#39; served to Opera users" /></p>

<p>Skilled Opera users will eventually go to their configuration settings and lie about the User-Agent string. For example, here we decided to set the User-Agent to be Firefox for this specific domain name.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/blog/292-graceful-user-agent-sniffing/altomail-config.png" alt="Opera&#39;s site preferences, with the &#39;Network / Browser identification&#39; set to mask as Firefox" /></p>

<p>Note that at this stage, one of the consequences for Opera Software is that the browser is not visible anymore in the Web site&#39;s statistics. The browser market shares are then not representative of the reality. To fix the problem at the source, we are currently <a href="https://mobile.twitter.com/AltoEmail/status/268796301414658048?p=v">trying to contact Alto</a> to solve the issue.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/blog/292-graceful-user-agent-sniffing/altomail-aol-contact.png" alt="Initial conversations with Alto&#39;s support on Twitter, simply stating that Opera is not a supported browser" /></p>

<p>Eventually, if it doesn&#39;t work, we will turn to <a href="https://github.com/operasoftware/browserjs">Opera&#39;s browserJS</a>, a central patch list which will modify the User-Agent strings for this domain for all users automatically. Even if we disappear from the statistics of this web site, it is still better for the users. So once the dance of lies takes place, we can access the Web site.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/blog/292-graceful-user-agent-sniffing/altomail-firefox.png" alt="Alto displaying fine in Opera, once we&#39;ve set it to mask as Firefox" /></p>

<h3>Is there a better way?</h3>

<ol>
<li>Avoid User-Agent Sniffing. It is hard to get it right. Really.</li>
<li>If you need to use specific technologies, use feature detection first.</li>
<li>If the only resort is to do User-Agent sniffing, check all the browsers you are sure about and then <strong>always offer a fallback</strong>.</li>
</ol>

<p>Note that blocking access to a site purely based on a User-Agent string is often a future fail scenario. Browsers evolve and you do not know in advance what set of features (removed or added) they will have. <strong>User-Agent sniffing is a very high maintenance task</strong>. We understand that not all companies can afford to thoroughly test their sites in all browsers, but just because they didn&#39;t test shouldn&#39;t be a reason to completely deprive users of those browsers that didn&#39;t make the list from accessing any of the content. Sure, cover your back, and state upfront that this particular browser wasn&#39;t tested (and not that it&#39;s an old/outdated browser, or that your site absolutely requires browser X), but let the the user decide if they still want to try and proceed.</p>
