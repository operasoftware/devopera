---
title: ASP.NET sites - Served With The Wrong Mime-Type
authors:
- karlcow
tags:
- iis
- asp
- Microsoft
- server
- open the web
- http
- interoperability
- mime type
- bug
- odin
license: cc-by-3.0
layout: post
---

<p>You remember the article I had written about <a href="http://my.opera.com/ODIN/blog/2011/03/30/improving-interoperability-the-story-of-a-bug">Starbucks solving an error on their server</a>. They were serving HTML with the wrong mime-type to Opera only because of user agent sniffing. They fixed it. They are definitely not the only ones. Other Web sites have exactly the same bad behavior. You may see that there is a pattern. The servers and libraries used are almost always the same.</p>

<p>All these sites and the ones previously solved are into the package OTW-6223. I&#39;m trying to contact each of these sites one by one. It is time consuming with not always a success at the end. Not everyone is as diligent as <a href="http://www.rohanradio.com/">Rohan Singh</a> (still big respect for him).</p>

<ol>
<li><p>if you are a user of this Web site or if you know someone working in the IT department of these companies, please point them to this blog post and ask them to contact me.</p></li>
<li><p>If someone from Microsoft is listening, please please please, send a fix to Web developers using ASP.net on their Web sites. I suspect it is a rogue library doing very bad user agent sniffing in ASP.Net. These developers will love you. They will not have to suffer me anymore ;) </p></li>
</ol>

<table>
    <caption>Web sites serving HTML as application/xhtml+xml to Opera</caption>
    <thead>
        <tr>
            <th>Website</th><th>HTTP Headers</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><a href="http://www.nynyhotel.com/">New York-New York Hotel</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://aspca.org/">ASPCA</a></td><td><pre>Server: Microsoft-IIS/7.5
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.mgmgrand.com/">MGM Grand</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.sharebuilder.com/">Share Builder</a></td><td><pre>Server: Microsoft-IIS/6.0</pre></td></tr>
        <tr><td><a href="http://myharmony.com/">Logitech</a></td><td><pre>Server: Microsoft-IIS/7.0
        X-AspNetMvc-Version: 2.0
        X-AspNet-Version: 4.0.30319
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://www.samshortline.com/">Sam Shortline Railway</a></td><td><pre>Server: Microsoft-IIS/7.0
        X-AspNet-Version: 4.0.30319
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://allhiphop.com/">AllHipHop.com</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: PleskWin
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727
        CommunityServer: 2.0.60217.2664</pre></td></tr>
        <tr><td><a href="http://www.cbg.ie/">Car Buyers Guide</a></td><td><pre>Server: Microsoft-IIS/7.5
        X-AspNet-Version: 2.0.50727
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://responsiblesports.com/">Responsible Sports</a></td><td><pre>Server: Microsoft-IIS/7.0
        X-AspNet-Version: 2.0.50727
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://sgtstar.goarmy.com/ActiveAgentUI/Agent.aspx"> Go Army</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.phenomblue.com/">Phenomblue</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.pfchangs.com/">P.F. Chang&#39;s China Bistro</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://home.mcafee.com/">McAfee</a></td><td><pre>Server: Microsoft-IIS/7.0
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://www.excalibur.com/">Excalibur - Las Vegas</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.merrilledge.com/">Merrill Edge</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET</pre></td></tr>
        <tr><td><a href="http://www.walmartmoneycard.com/">Walmart Money Card</a></td><td><pre>X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727
        X-AspNetMvc-Version: 2.0</pre></td></tr>
        <tr><td><a href="http://www.nelnet.com/">Nelnet</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.summary.com/">Soundview Executive Book Summaries</a></td><td><pre>Server: Microsoft-IIS/6.0
        X-Powered-By: ASP.NET
        X-AspNet-Version: 2.0.50727</pre></td></tr>
        <tr><td><a href="http://www.ellamoss.com/">Ella Moss Official Store</a></td><td><pre>X-OS-Node: 22.5.4</pre></td></tr>    </tbody>
</table>
