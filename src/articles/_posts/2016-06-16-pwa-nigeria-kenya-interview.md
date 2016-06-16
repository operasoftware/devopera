---
title: 'Progressive Web Apps in Nigeria and Kenya: a Double Interview'
authors:
- bruce-lawson
intro: 'I came across a number of conversations between web developers in Nigeria and Kenya. Intrigued, I got in touch with them to hear their thoughts on progressive web apps, resulting in this double interview.'
tags:
- pwa
- interview
- africa
featured: featured
cover: jpg
license: cc-by-3.0
---

While keeping an eye on Twitter mentions of progressive web apps, I came across a number of conversations between web developers in Nigeria and Kenya. Intrigued, I got in touch with them to hear their thoughts on progressive web apps, resulting in this double interview.

**Hi! Please tell us a little about yourselves.**

<figure block="figure">
	<img elem="media" src="{{ page.id }}/constance-okoghenun.jpg" width="200" alt="Constance Okoghenun">
</figure>

_Constance Okoghenun, [@okoghenun](https://twitter.com/okoghenun):_ I’m from Lagos, Nigeria. I work as a UI Specialist for [Konga](https://konga.com/), Nigeria’s largest online marketplace helping tens of thousands of merchants selling over 200,000 products on our platform. At Konga I help to build products that provide great shopping experiences for our customers. I also help organise and speak from time to time at [Usable](http://usable.ng/) (formerly UXLagos), where designers, developers and enthusiasts here in Lagos and, recently, Abuja Nigeria, have monthly conversations about how to improve the experiences we deliver to our customers.

I love the web and have been working on the web for about 5 years now. It has been a delight to see it mature and become better as a platform, enabling me and other developers and designers to offer increasingly better experiences to our users.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/eugene-mutai.jpg" width="200" alt="Eugene Mutai">
</figure>

_Eugene Mutai, [@kn9ts](https://twitter.com/kn9ts):_ I’m from Nairobi, Kenya. I’m currently working for/with [Andela](https://andela.com/). Andela is new startup, with a revolutionary model founded on the principle that brilliance is evenly distributed around the world, but opportunity is not. Andela is transforming the brightest minds in Africa into world-class developers, who then are fused into startups or Fortune 500 companies all over the world. I am currently working as a full-time full-stack developer for [RBI](http://www.rbi.com/), a Canadian multinational company (and one of the largest fast food brands in the world) whose brands include Burger King and Tim Hortons.

I have been a web enthusiast and developer for at least four years now. I am also a [Google Developer Expert on Web Technologies](https://developers.google.com/experts/people/eugene-mutai), attributed by one of my community contributions such as being the lead manager of the [Nairobi JavaScript Community](http://www.meetup.com/nairobi-js/) growing it to over 450 members, and I regularly speak at a variety of programming and tech meetups.

**We met online because you were talking about Progressive Web Apps (PWAs) on Twitter. What is it about them that excites you?**

_Eugene:_ I haven’t talked about progressive web apps on Twitter only; I have evangelized about them wherever I got the chance to. My last talk on progressive web apps was at [Nairobi Tech Week](http://nairobitechweek.com/), the largest tech event in Sub-Saharan Africa this year. I’ve also written a blog post about it — [Progressive Webs Apps: Africa may be the biggest gainer](https://medium.com/@kn9ts/progressive-webs-apps-africa-may-be-the-biggest-gainer-b45e05b14893) — which is a robust answer to the above question.

In summary, I am excited that finally web technology is earning its place on mobile. PWAs are changing the way web apps have been viewed: a secondary, less-intuitive and less-performant alternative to using a mobile app’s service. While settling in on mobile, leveraging its greatest advantage over native mobile apps — very low friction in usage — it may solve problems that make the daily usage of native mobile applications in Africa a challenge, e.g. the size of apps and requirement of new downloads every time they are updated, [among many others](http://slides.com/eugenemutai/progressive-web-apps#/34).

On a side note, as a passionate web developer, it’s been tons of losing development battles with Android developers, and I’m finally unquantifiably happy we are becoming a force to be reckoned with.

_Constance:_ There are lots of exciting things about progressive web apps and the new range of possibilities they bring to the web. If I were to pick just one feature of progressive web apps that I’m super-excited about, it’s the ability to detect and handle offline / unreliable network conditions with service workers.

This is vitally important, as web apps finally now have a space on user home screens — so being slow to load or breaking because of network unreliability is not acceptable. And, in my part of the world, where getting good connectivity speeds on mobile is pretty difficult, service workers present an opportunity for developers to build apps that aren’t just fast, but which are also resilient.

An example of the is [Konga’s PWA](http://www.konga.com/): when we detect that the user is offline and has items in their shopping cart, we provide them the option of going through an offline checkout experience, thereby preventing internet connectivity from becoming a bottleneck when they shop with us.

**Constance, what are the characteristics of the Nigerian market that make PWAs an appealing development route?**

_Constance:_ Data is pretty expensive in Nigeria. Over the last 12 months, [data prices have become lower](https://techpoint.ng/2016/05/17/data-plan-wars-nigeria/), but not low enough to make the majority of the Nigerian internet market data insensitive. On average, it costs about NGN 1000 (about $5) to get 1GB of data. In a country where minimum wage is about NGN 18,000 (about $90) that is already 5.6% of the monthly salaries. So, as you can imagine, Nigerians are extremely data sensitive.

A huge number of smartphone users do not download their apps and never update their apps. Instead, people side-load apps and other content from third parties who have these apps downloaded to a PC and for a small fee will install apps from their computers to users’ phones. Among younger, more tech-savvy Nigerians, the app [Xender](https://play.google.com/store/apps/details?id=cn.xender) is really popular as it allows them skip app downloads and just send it from one device to another.

As you can imagine, these workarounds for downloading apps from the app store create all sorts of problems for developers — from app distribution, to getting the most recent, bug-free versions of apps in the hands of users.

With PWAs giving web apps a place in the user’s home screen, without the download overhead of native apps, this becomes more exciting; developers in Nigeria can now always give a great and up-to-date experience to their users. Also, they have the ability to re-engage with their users via push notifications, and improve conversions.

**Eugene, is it similar in Kenya?**

_Eugene:_ The average pay is Kenya is approximately $300-400 a month. On a good month, with tough choices made in budgeting, one gets to barely spare $30 after covering monthly expenses. It costs $1 for 135MB of data and $5 for 1GB of data. On average a user has 15+ apps installed (extrapolated from global mobile app install stats). At least half of these apps demand to be updated after a day or two (best case scenario is weekly).

If each app is on average 15MB, this means 150MB of data used up on downloads from re-installations without considering each user’s unique personal data usage. If at least $5 of data is being used for updates only, I’d say this is very challenging to a user if they are is to keep up with these updates. Some updates also are just bug fixes — I kid you not, no one would update the app for that (including me) unless the bug is not negligible.

**Constance, what were the challenges of making the Konga PWA?**

_Constance:_ The biggest for us at Konga was time: we had only about six weeks to build a stable version of our app and we did it in time. Thinking offline-first was something we had to get used to doing. Apart from those, building our PWA wasn’t very difficult.

**And how was user feedback for your PWA, Constance?**

_Constance:_ Though we haven’t officially launched the app yet, feedback has been overwhelmingly positive. It requires 84% less data to complete the first transaction vs the previous mobile web experience, and 63% less data for initial load, and we are not even done building and optimizing the app. It certainly will be a delight for our users when it gets into their hands.

To quote our CEO Shola Adekoya:

> We estimate that with our new light, super-fast, UX-rich browsing capability, customers’ data consumption will fall dramatically.

**Back to Eugene now. How was user feedback to your evangelism, Eugene?**

_Eugene:_ I’m been satisfactorily happy with the feedback I have got from my blog post and all my talks on PWAs. In the last talk I gave, at one point a member of the audience who was an Android developer (among many others in the room) who became anxious and disturbed that PWAs would render native Android developers jobless. The best answer I could give was we’re only moving in the mobile department since we’re now in a sharing economy, and not kicking them out, and the hype was to only create awareness to all web tech developers and not to cause panic among Android developers.

**Do you think those Android developers’ concerns are justified? Do you see PWAs becoming dominant in the kind of markets that you work in?**

_Eugene:_ Nom I don’t think they’re justified. First of all, awareness about PWAs is something that needs to be urgently addressed. Every time I give a talk on PWAs the facial response of the audience is like “Why didn’t I know about this? This is revolutionary!” and the question that always follows is “Where can I find more information and learn about PWAs?”

Furthermore, I don’t envision PWAs being dominant in the mobile apps space, but I see their presence vastly increasing once knowledge about them is in the hands of every web developer. PWAs solve a number of challenges for entrepreneurs: it’s a cross-platform solution, there’s very low friction compared to native apps, there’s no APK size limitation, and so on.

_Constance:_ I also don’t think that fear of PWAs is justified. I think both PWAs and native SDKs are just tools in a good developer’s tool box. There are use cases where a PWA would be perfect, and there are others for which a native app is best. Each developer just needs to evaluate when to use what. Moreover, there is nothing stopping native mobile developers from working on the web; Konga’s PWA was built by both our current mobile team (Android and iOS developers) and our front-end team.

**What else would you like to see browsers do to make PWAs more widely available and accepted?**

_Constance:_ Lots of developers use frameworks; it would be great to see vendors reach out to the maintainers of those frameworks and work with them improving their tooling and processes, so that it’s super easy to build PWAs with their frameworks and tools. More importantly, I’d like to see a more consistent implementation of the web specs that PWAs are based on.

_Eugene:_ Opera and Google Chrome have done a wonderful job so far. When talking about PWAs being installable, the “Add to home screen” option isn’t that convincing. I’d like to see something like “Install Web App” or “Add to Your Apps”.

Browsers should offer APIs so that PWAs can compete on an equal footing as native mobile apps. I am aware these missing APIs such as Bluetooth, NFC, USB access and so forth are currently being worked on. So this is just a matter of time.

**Thank you both!**
