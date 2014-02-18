---
title: Opera Turbo
authors:
- roberto-mateu
intro: 'We are launching our time-limited test phase for Opera Turbo, a server-side optimization and compression technology that provides significant improvements in browsing speeds over slow connections by compressing network traffic.'
tags:
- turbo
- labs
layout: article
---

## This article is obsolete

It’s here for historical purposes only. Download the [latest version of Opera][1] or see what’s coming soon in [Opera.Next][2].

[1]: http://www.opera.com/browser/
[2]: http://www.opera.com/browser/next/

At Opera, we love speed. We work hard to make our browser faster with features that speeds you up, but your connection also plays a big role on how fast you can go.

Some people have fast connections, a lot have slow connections. Many are always on the run from one place to another — making it hard to find regular fast connection points. Even if you do, it might be that too many people are on the Wi-Fi in the cafe or that you are browsing through your mobile phone when commuting on the train.

That’s why we’ve been working on Opera Turbo, a server-side optimization and compression technology that provides significant improvements in browsing speeds over limited-bandwidth connections by compressing network traffic. This does not only make you surf faster, but also lowers the cost of browsing when you are on a pay per usage plan.

Today we start our time limited test phase for Opera Turbo, please read below to learn a little about how Turbo works and where to download it.

##  Bottom left corner is where the speed is

When turned on, Opera Turbo will display the average compression rate. Hover your mouse over the Opera Turbo icon to see a tooltip with the amount of bandwidth saved as long as it has been enabled.

<figure>
	<img src="/articles/opera-turbo/hover.gif">
</figure>

##  Throttle your bandwidth to see the big difference

Opera Turbo will work with any type of connection, but to get the most out of it you should be on a situation with limited bandwidth. In case you can’t attend a crowded conference today or aren’t on a bus connected through your phone, you can simulate a slower connection speed with: [NetLimiter 2 Pro on Windows][4] and the [pipe command on the Mac][5]. We recommend limiting your bandwidth to 100Kbps.

[4]: http://www.netlimiter.com/download.php
[5]: http://www.macosxhints.com/article.php?story=20080119112509736

##  Opera Turbo doesn’t change the Web site

Turbo uses a technology called “Opera Web Optimization Proxy”, which is different from the [Opera Binary Markup Language][6] used in Opera Mini. Web sites layout and text will look exactly the same, but image resolution may appear considerably lower as a result of the compression. Dynamic Web technologies such as Ajax (XmlHttpRequests) and Flash are supported, but some plugin content will load only after clicking on the empty element.

[6]: /articles/opera-binary-markup-language/

##  Your privacy is important

Even when Turbo is enabled, encrypted traffic does not go through our compression servers. This means that when you are on a SSL site, we bypass these traffic and let you communicate with the SSL site directly. Opera generates statistics of the usage of Opera Turbo, but these are aggregated numbers and no information can be linked to a single user. Opera does not store any users’ private information.

##  Opera Turbo will be part of future desktop versions

Please [report any bugs][7] or join the discussion at the [My Opera community][8] .

[7]: https://bugs.opera.com/wizard/
[8]: http://my.opera.com/community/forums/forum.dml?id=31