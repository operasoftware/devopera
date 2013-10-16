Title: No more "XML parsing failed" errors
----
Date: 2011-09-28 14:27:39
----
Author: 
----
Text:

<p>Through our <a href="http://my.opera.com/community/openweb/info/">Open The Web effort</a>, Opera&#39;s Developer Relations team contacts websites that don&#39;t work as expected when viewed in Opera, and we suggest changes to their source code that fix the problem. </p>

<p>One of the more common problems we&#39;ve encountered are sites that somehow serve broken XML to Opera. You can see this on <a href="http://www.sharebuilder.com/">http://www.sharebuilder.com/</a>, <a href="http://allhiphop.com/">http://allhiphop.com/</a>, <a href="http://www.excalibur.com/">http://www.excalibur.com/</a>, <a href="http://home.mcafee.com/Default.aspx">http://home.mcafee.com/Default.aspx</a>, just to name a few.</p>

<p>The reason for this are broken server setups: when identifying as Opera, certain sites seem to be sending their content with a MIME type of application/xhtml+xml, whereas they send the same content to other browsers with a MIME type of text/html. The reason for this is unclear, but it certainly has to do with broken server-side browser sniffing. We&#39;ve identified that the <a href="http://my.opera.com/ODIN/blog/2011/08/12/asp-wrong-mime-type">issue occurs on certain versions of ASP.NET</a>, but there are also other examples where only Opera gets application/xhtml+xml, while other browsers get text/html.</p>

<p>Now, application/xhtml+xml content would not give any trouble if the XHTML code on these sites was well-formed, but unfortunately, mistakes are easily made: at the smallest error in an XML document, Opera (and other browsers) will throw an &quot;XML parsing failed&quot; message, and a link to &quot;Reparse document as HTML&quot;. For non-technical users, this is very confusing, and for advanced users, it&#39;s a nuisance.</p>

<p>Over the last couple of years, we&#39;ve contacted all sites we found are breaking like this, and asked Microsoft to fix the ASP.NET sniffing problem, which they&#39;ve done. However, as the rollout of this update takes time, there are still a number of sites broken, and it seems like this situation will be with us for quite some time to come.</p>

<p>Hence, we&#39;ve decided to stop throwing draconian XML parsing failed error messages, and instead, attempt to reparse the document automatically as HTML. Instead of showing an error message in the browser, it&#39;s <a href="http://files.myopera.com/andreasbovens/blog/allhiphop.png">now dumped to the console</a>, so as a developer, you can still find XML parsing error warnings in Opera Dragonfly and the Error Console if you want to.</p>

<img src="http://forum-test.oslo.osa/kirby/content/blog/226-no-more-xml-parsing-failed-errors/parsing_small.png" alt="Image showing no more XML parsing errors" />

<p>If you want to play around with this, grab the latest Opera Next build from the <a href="http://my.opera.com/desktopteam/blog/2011/09/28/core-bookmark-star">Opera Desktop team blog</a> (or wait for the automatic update), and let us know what you think.</p>
