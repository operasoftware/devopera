---
title: 'Extension Developer Interview: Coffee With the Disconnect Team'
authors:
- andreas-bovens
intro: 'We sat down with Brian from Disconnect, and asked him about his team, extension development tools and UX processes, where the service’s revenue comes from, and much more.'
tags:
- browser
- disconnect
- extensions
- interview
- extinterview
- privacy
cover: png
license: cc-by-3.0
layout: article
---

This is the second article in a [series of interviews][1] with Opera extension developers. We want to shed a light on what drives them, what their workflow is like, which tools they use, what their plans for future extension versions are, and so on. For this interview, we sat down with Brian Kennish, co-founder of [Disconnect][2], which is the company behind the [Disconnect extension][3], and asked him some questions over a (virtual) coffee.

[1]: /tags/extinterview/
[2]: https://www.disconnect.me/
[3]: https://addons.opera.com/en/extensions/details/disconnect/

**What is Disconnect?**

Brian: [Disconnect][4] is a browser extension that lets you visualize and block the otherwise invisible websites that track your search and browsing history. Disconnect stops a total of 2,000+ third-party sites from tracking you. Our extension also encrypts the data you share with popular sites and makes the pages you go to load an average of 27% faster, and use an average of 17% less bandwidth.

[4]: https://addons.opera.com/en/extensions/details/disconnect/

<figure>
	<img src="/articles/extension-developer-interviews-disconnect/team.jpg" alt="The Disconnect team">
	<figcaption markdown="span">The Disconnect team</figcaption>
</figure>

**How many people work on Disconnect? Where are you based?**

Brian: Five of us spend at least some of our time developing Disconnect extensions. We’re based in Palo Alto, California.

**How did you come up with the idea for Disconnect?**

Brian: A couple years ago, I noticed social widgets (Like buttons, Tweet buttons, etc.) popping up all over the web. Given my background — I once worked on ad APIs for Google and ad servers for DoubleClick —, I knew that social networks could collect a large chunk of our browsing history through these widgets and could connect our activity to our real names for the first time (that’s the tl;dr version — I told the [whole story][7] at Defcon).

[7]: http://youtu.be/BK_E3Bjpe0E

I wanted a way to use social networks myself without trading away my browsing history, so Disconnect launched as the first social-widget filter. Since then, Disconnect has evolved into a more complete privacy (and security and productivity) app.

**How is Disconnect different from other privacy enhancing extensions with similar functionality?**

Brian: Our goal is to ship the perfect balance of privacy, security, and usability. Disconnect has a visually rich interface that collapses what’s often a laundry list of tracking requests into expandable categories, that charts the time and bandwidth you’ve saved and the requests you’ve secured, and that comes with a Visualize page option to represent tracking graphically. Disconnect also upgrades your connections to popular sites to SSL whenever possible to [prevent eavesdropping][8] over non-secure networks and Disconnect’s method of filtering is optimized for speed to accelerate the web as much as possible, 27% in [our benchmarks][9].

[8]: https://www.disconnect.me/moresecure
[9]: https://www.disconnect.me/faster

As a company, we’ve tried to structure ourselves so our interests line up with the interests of Disconnect users. We’re a [B Corp][10], so social values, not just profits and losses are embedded in our performance measurements. We make money straight from users so we work for you not for advertisers or data brokers. About 25% of our revenue (the exact amount is determined by contributors) goes to privacy-protecting nonprofits like the EFF and the Tor Project so the cause of online privacy is generally advanced. And [Disconnect is open source][11] so developers can inspect or fork our code.

[10]: http://better.bcorporation.net
[11]: https://github.com/disconnectme/disconnect

**Disconnect is pay-what-you-want software. How does that work out for you?**

Brian: The pay-what-you-want model is still an experiment for us, but the early results are promising. Our numbers so far are similar to freemium businesses, with around three percent of Disconnect users choosing to pay.

**Disconnect is stopping 2,000+ third-party sites from tracking users. How do you determine these sites?**

Brian: We run a weekly web crawl over the top 1,000 sites to identify the most prevalent third-party services. We then classify the services according to the type of service they are (advertising, analytics, social networking, content) and the company they belong to. The output is Disconnect’s filter list.

We treat the services like black boxes right now because privacy policies are too opaque to tell which services funnel data into tracking profiles and which don’t, but we’ve been advocating a [project][12] to add the relative user friendliness of privacy policies as another signal for users.

[12]: https://icons.disconnect.me

**What is your idea-to-development workflow? What’s your UX process like?**

Brian: We’re lucky to get lots and lots of user feedback, which is where many Disconnect features start from (securing connections and optimizing for speed are two examples). We organize ideas in a lightweight doc, roll an extension with new features and bug fixes every two weeks, dogfood the changes internally, then push percent tests to small groups of Disconnect users. The changes that survive get pushed to all Disconnect users.

**Which tool has been particularly useful when developing Disconnect (e.g. a particular text editor, library, framework, etc.)**

Brian: Part of our dev process that’s probably unique is that we build extensions for four browser targets from one source tree, so we have a Chrome extension in an Opera extension in a Safari extension in a Firefox add-on. We do wind up with some too-long pathnames, but the big win is that we can maintain feature parity across browsers 4x or so more easily. The secret ingredient is a porting library we use to emulate the Chrome and Opera APIs in Safari, which was created by the AdBlock team and which [we’ve forked and extended][13].

[13]: https://github.com/disconnectme/port

Although cross-platform and cross-device development is far less tricky for browser extensions than for web apps, we also have a little assembly line of machines (Windows, OS X, Linux, and Android) that we QA test and debug on to handle corner cases.

**What can we expect in the next version of Disconnect? In which direction do you want to evolve Disconnect?**

Brian: The very next thing we’re going to release is an improved onboarding experience (here’s a [preview][14]). Disconnect’s UI has gotten more complex as the feature set has expanded, so we want to do a better job upfront explaining how to use Disconnect.

[14]: https://www.disconnect.me/welcome

Longer term, we recently launched [our first mobile app][15]. Disconnect Kids is Disconnect reimagined for children and is, in particular, meant to help children learn about online privacy (which can be hard to understand even for us adults). We’re in the middle of bringing Disconnect Kids to the browser.

[15]: https://www.disconnect.me/kids

**Thanks for taking the time to do this interview, Brian, and good luck to you and the whole Disconnect team!**
