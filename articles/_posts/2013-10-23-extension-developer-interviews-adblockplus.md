---
title: 'Extension Developer Interview: Coffee With the Adblock Plus Team'
authors:
- andreas-bovens
intro: 'We sat down with Ben from Adblock Plus, and asked him all about the product, how it started, how it’s different, how the company behind it makes money, whether ad blocking is hurting the internet or not, and more.'
tags:
- adblockplus
- extensions
- interview
- opera
license: cc-by-3.0
layout: article
---

This is the fourth article in a [series of interviews][1] with Opera extension developers. We want to shed a light on what drives them, what their workflow is like, which tools they use, what their plans for future extension versions are, and so on. For this interview, we sat down with Ben Williams from [Adblock Plus][2], which is the company behind the popular [extension with the same name][3], and asked him some questions over a (virtual) coffee.

[1]: http://dev.opera.com/articles/tags/extension%20interview
[2]: http://adblockplus.org/
[3]: https://addons.opera.com/en/extensions/details/opera-adblock/

**What is Adblock Plus?**

Adblock Plus is an open source project that blocks annoying ads on the web. Since its creation in 2006, it has been the most downloaded, most used extension almost continuously. Adblock Plus itself has no functionality. A set of filter lists, which are basically just rules, informs Adblock Plus which elements on a page it should block. Two filter lists are enabled by default: an adblocking list based on your language and the Acceptable Ads exception list. You can keep or discard these, add others, add your own or whitelist certain domains. You can also choose certain lists that block tracking and malware.

**How many people work on Adblock Plus? Where are you based?**

We have 19 employees. Of those, 15 are based in Germany, one in Utah and one in the Ukraine. Roughly two-thirds of us work in the office in Cologne, the rest remotely.

<figure>
	<img src="/articles/extension-developer-interviews-adblockplus/team.jpg" alt="The Adblock Plus team">
	<figcaption markdown="span">The Adblock Plus team</figcaption>
</figure>

**How did you come up with the idea for Adblock Plus? How did it start?**

Adblock Plus is an open source project that Wladimir Palant created in 2006. The Adblock extension already existed at that point, but was badly maintained. Wladimir originally intended to help out with Adblock to make sure that the users who want to block ads get a good solution. After this didn’t work out he decided to start his own project called Adblock Plus. The original Adblock project went dead shortly after that.

In 2011 Wladimir met Till Faida, a guy who had conducted research on Adblock Plus in college and had experience in online marketing. They agreed that Internet advertising was broken, but felt that there should be a compromise available for sites that depend on advertising. That agreement was the foundation for our Acceptable Ads initiative, which established strict criteria for a new type of non-annoying ad that Adblock Plus would show to its users — at least those who did not opt out. Once a site has applied to Acceptable Ads, their proposed ads go to our community for discussion. If no legitimate objection comes, their ads are whitelisted.

The key to Acceptable Ads and our stance in general is that it’s a compromise that still leaves all control in users’ hands.

**How is Adblock Plus different from other adblocking solutions?**

Most importantly, we’re different because of Acceptable Ads. We’re the only adblocker that is not destructive to the web. Adblock Plus gives sites an incentive to move to non-annoying ad forms, hopefully changing the whole industry for the better in the long term. At the same time, we’re involving our community in determining which ads are acceptable, and we’ll always give every user the option to block even those.

Other things that make us different are continuous development and that we manage the filter download infrastructure used by most other adblockers. Plus, we won’t be trying to get any ads in Times Square or on the Super Bowl in an attempt to kill ads with ads anytime soon ;)

**How come Adblock Plus is free? How do you make money?**

Adblock Plus will always remain free and open source. We currently monetize from a fee we charge larger companies that take part in Acceptable Ads. We also received startup capital from a few investors who believe in the initiative.

**Back in 2010, Ars Technica published [Why Ad Blocking is devastating to the sites you love][5] and similar articles have appeared in other places too — what is your view on this?**

[5]: http://arstechnica.com/business/2010/03/why-ad-blocking-is-devastating-to-the-sites-you-love/

The author’s point is clearly legitimate: adblocking hurts websites that depend on ads. This is the main reason we started Acceptable Ads — and we’re the only adblocker that has made any sort of an effort to reach a middle ground.

What the author does not mention is that users are sick of bad ads, and advertisers are trading users’ concerns for short-term interests. The challenge is finding a sustainable way to advertise while preserving user control. Some sites have taken notice, and we applaud their efforts. As an adblocker, we have a responsibility to our users, just like Ars Technica or The Next Web do to their readers; but we also believe that our initiative can be part of the solution to a broken online advertising scene.

**What can we expect in the next version of Adblock Plus? Where do you see the extension evolve?**

Regarding Adblock Plus for Opera, we’re planning to completely revamp the UI, making it much easier for the user to influence what Adblock Plus blocks and what it lets through. We’re also working on significant performance improvements.

**What is your idea-to-development workflow? What’s your UX process like?**

We typically discuss ideas either in the public forum or in our internal forum, then create a bunch of mock-ups. The whole team does this, but non-developers need to go the extra mile and get a developer interested, who will then implement it. Every change we push makes it into the development builds, which are tested by a few thousand users who then give valuable feedback. But we still feel the need to get feedback from users faster, especially when revamping the UI; so we’re working on a mechanism that’ll allow us to test features with a small number of users and measure the effects while still maintaining their privacy.

**Which tool has been particularly useful when developing Adblock Plus?**

The most valuable tools for us are the browsers that we are developing for and the APIs and development tools that they provide.

**Thanks for this interview, Ben!**
