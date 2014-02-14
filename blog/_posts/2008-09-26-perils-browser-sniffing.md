---
title: The perils of browser sniffing
authors:
- zi-bin-cheah
tags:
- browser-sniffing
- masking
layout: article
---
<p>Broswer sniffing doesn&#39;t work. Browser sniffing may have started out as a way to prevent browsers without proper features from accessing the sites, but now it often  keeps browsers away from sites which otherwise would have worked.</p>

<p>In the  old days, sniffing was often seen as a necessary way of coping with browser incompatibilities, but it was never meant to be a long-term solution. No sooner did you finish your site, a new version of an old browser came along to break it. </p>

<p>Browser sniffing was invented because different browsers had wildly varying <abbr title="Document Object Models">DOMs</abbr> so authors neeeded to send one script to one browser, and another to a competing browser. The browser incompatabiliites eventually led to the Web Standards movement, which showed that correctly-written specs  and technologies that followed them is a more robust way for different browsers to interoperate.</p>

<p>The reason that the old way was not robust was because it was because designing a site should be  like designing a car without worrying about driving on incompatible roads. Designers want to master their art, and browsers should make sure designers are given the right to express themselves in a standard way. When browser-of-the-day is not standard compliant, developers will design according to that dominant browser even if it is not compliant. This not only breaks other browsers, but future version of the same browser. So, for example, if Internet Explorer 8 were to run on its &quot;standard mode&quot;, it will break many sites that worked fine in previous versions of Internet Explorer.</p>

<p>Browser sniffing also creates a catch-22. In order to access a site that blocks your browser, you made your browser disguise itself as a supported browser. This was done by changing  the user agent string that a browser sends the server when it requests the page, so your unsupported browser appeared to the server to be another. And so it became self-perpetuating: when the developer looked at his statistics and realized that he has only one browser visiting the site, he thought that there was no reason to bother designing for other browsers.</p>
<p>Even though that way of working is discredited, and all modern browsers can render sites perfectly if they&#39;re made with web standards, some people still use browser sniffing. To get round it, Opera uses <a href="http://www.opera.com/support/tutorials/userjs/">user</a> and <a href="http://www.opera.com/docs/browserjs/">browser</a> JavaScript to mask ourselves. Google Chrome uses another method. It has the longest user agent string anyone has ever seen, thereby telling the world that it is 1) Mozilla 2) WebKit, 3) KHTML, 4) Gecko, 5) Safari and 6) itself: </p>
<blockquote>Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.X.Y.Z Safari/525.13</blockquote>

<p>At Opera our experience is  that the majority sites that block us actual worked fine in Opera, and those that don&#39;t can be &quot;repaired&quot; with a healthy spoon of <a href="http://www.opera.com/docs/specs/">standard-compliant</a> code.</p>
<p>The best way forward is to drop browser sniffing and design with web standards in mind. This way your website will run on browsers across the board, and it will work in the future.</p>
