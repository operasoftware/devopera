---
title: 'Extension Developer Interview: Coffee With the WOT Team'
authors:
- andreas-bovens
intro: 'We sat down with Ulla from Web of Trust, and asked her what makes WOT special, how the service makes money, which extension development tools the WOT developers use, and much more.'
tags:
- wot
- extensions
- opera
cover: jpg
license: cc-by-3.0
---

This is the third article in a [series of interviews][1] with Opera extension developers. We want to shed a light on what drives them, what their workflow is like, which tools they use, what their plans for future extension versions are, and so on. For this interview, we sat down with Ulla Särkikangas from [Web of Trust][2], which is the company behind the popular [WOT extension][3], and asked her some questions over a (virtual) coffee.

[1]: /tags/extinterview/
[2]: http://www.mywot.com
[3]: https://addons.opera.com/en/extensions/details/wot/

**What is WOT?**

[Web of Trust][4] (WOT) is a website reputation and review service that helps people make informed decisions about whether to trust a website or not. For example, online shoppers who explore new sites may be concerned about which ones can be trusted in terms of quality of products and customer service. By using WOT they can check potential issues of unknown sites, read other peoples’ reviews and compare the reputation of different sites. We all want to explore the net safely and WOT helps you to do this with unknown and less popular sites.

[4]: http://www.mywot.com

WOT works in a very simple way — it shows website reputations as traffic lights next to search results when using Google, Yahoo!, Bing or any other search engine. They are also visible next to links in social networking sites like Facebook and Twitter and email like Gmail and Yahoo! Mail. In addition, users can rate and review websites themselves just by clicking on WOT toolbar icon next to address bar. It’s very easy and simple.

Today, WOT is the world’s leading crowdsourced website reputation service with over 90 million downloads worldwide and collaborates with the world’s leading internet companies such as Facebook, Opera and Mail.ru.

**How many people work on WOT? Where are you based?**

The WOT office is located in Helsinki, Finland. Currently we have around 10 employees.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/team.jpg" alt="The WOT team">
	<figcaption elem="caption">The WOT team</figcaption>
</figure>

**How did you come up with the idea for WOT?**

WOT was founded by Sami Tolvanen and Timo Ala-Kleemola when they were post-graduate students at the Tampere University of Technology in 2006. They wanted to create a system where people could share their real-life experiences of different websites, so that other users could benefit and find sites they can trust.

**How is WOT different from other safe browsing extensions?**

WOT is based on a unique crowdsourcing approach that collects ratings and reviews from a global community of millions of users who rate and comment on websites based on their personal experiences. The community-powered approach enables WOT to protect against threats that only the human eye can spot such as scams, unreliable web stores and questionable content. It complements traditional security solutions that protect computers against technical threats such as viruses and other harmful software.

WOT is based on a patented system where user behavior is systematically analyzed and monitored to ensure the ratings are reliable, accurate and constantly updated. In addition, the ratings are validated with trusted third party information, such as blacklists of phishing sites.

**How come WOT is free? How does this work?**

WOT is 100% free for users.

We receive revenue from licensing our reputation data to other internet companies.

**What type of unsafe sites is becoming more prominent now? Are it the same old tricks that you see over and over again, or is this an evolving terrain?**

Some types of scam are really old, like the "work-from-home" scam where user is convinced to pay a starting fee in order to send a CV. We would say: threats are mutating, taking advantage of newest technology every year.

One thing is for sure, scammers follow the crowds. They are in social networks and in mobile. You cannot hide from them. Therefore people should use multiple layers of protection in order to stay safe. We always recommend users install up-to-date antivirus software and complement that with WOT.

**Which tool has been particularly useful when developing WOT (e.g. a particular text editor, library, framework, etc.)**

Some of us are using [Vim][6], probably because they are too old to try new IDEs (smile).

[6]: http://www.vim.org/

Our toolset also includes [Sublime Text 2][7], [WebStorm][8] by Jetbrains, and other generic tools. For developing add-ons our developer uses WebStorm, [SourceTree][9] for managing code in Git, [Parallels][10] to run Windows on Mac for testing the add-ons.

[7]: http://www.sublimetext.com/2
[8]: http://www.jetbrains.com/webstorm/
[9]: http://www.sourcetreeapp.com
[10]: http://www.parallels.com

**What can we expect in the next version of WOT? In which direction do you want to evolve WOT?**

WOT just released a [new version][11] that comes with multiple improvements. The major news surrounding the new WOT is the introduction of a categorization interface. This new categorization will provide greater transparency to the reasons behind users’ ratings and reviews. In practice, this means that when submitting a rating, you are asked to select one or more categories in order to provide supporting evidence for your assessment. These categories are then visible to other users helping them to make informed decisions whether to visit a site or not. In addition, the rating window has been completely revamped and offers now a comprehensive interface to rate, review and comment a site. You can read more about the new features [on our site][12].

[11]: http://www.mywot.com
[12]: http://www.mywot.com/en/newwot

We will continue to improve the transparency of ratings in upcoming releases. In addition, a new theme that we will introduce in the near future aims to further increase the participation of the WOT community to rate websites. We believe more opinions means better coverage of websites and more insightful observations about them – and a safer internet for everyone!

**Thanks for this interview, Ulla, and good luck to the whole WOT crew!**
