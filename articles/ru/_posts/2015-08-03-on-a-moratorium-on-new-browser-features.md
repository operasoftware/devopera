---
title: 'О моратории на новые браузерные функции, предложенном PPK'
authors:
- bruce-lawson
intro: 'Разработчик PPK призывает к мораторию на новые браузерные функции. Мы объясняем, почему не согласны.'
tags:
- offline
- service-workers
language: ru
translator: Ilya Streltsyn
source: http://css-live.ru/
license: cc-by-3.0
---

Знаменитый разработчик и автор статей Питер Пол Кох (PPK) недавно призвал к «мораторию на новые браузерные функции на год или около того». Если вы не читали его статью [«Хватит толкать веб вперед»](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html) ([в переводе](http://css-live.ru/articles/xvatit-tolkat-veb-vpered.html)), просмотрите ее: он выдвигает интересные тезисы, как всегда.

(Нужно сказать сразу: мы все — большие поклонники таланта PPK: ему достались и [личные нападки]( https://twitter.com/ppk/status/626849503321149440) за ту статью — мы собираемся возразить на его главный тезис, но мы по-прежнему замечательно относимся к нему и благодарим его за начало этого обсуждения.)

Во многом мы, специалисты Opera по связям с разработчиками, разделяем его боль. Каждому из нас знакомо чувство, когда по возвращении из отпуска мы не можем понять беседы в твиттере о спецификации, появившейся в тот недавний вечер, когда мы нежились у бассейна/покоряли сердца зажигательной бачатой/бродили по древним руинам/отрывались в Магалуфе/выражали значками эмодзи в виде какашки своё сожаление об излишке съеденных накануне `U+1F364` (зачеркните нужное в зависимости от того, кто вы — Брюс, Шветанк, Матиас, Вадим или Андреас).

Всегда есть чему учиться, и веб-платформа становится всё сложнее. Даже Иэн Хиксон, редактор HTML5, [сказал]( http://html5doctor.com/interview-with-ian-hickson-html-editor/):

> Платформа уже слишком сложна, чтобы один человек долго мог понимать ее полностью. Блин, у веб-платформы есть части, в которые и я даже не пытался вникнуть — например, WebGL или IndexDB — и части, которые постоянно оказываются невероятно сложными для меня, несмотря на все мои старания их понять

...и это сказано два с половиной года назад!

Но не требуется помнить все нюансы каждой спецификации. Нужно знать то, что можно, и иметь доступ к поисковику, чтобы находить нужные подробности в спецификациях или обучающих материалах. Многие ли из нас знают наизусть синтаксис CSS-градиентов, или помнят все тонкости синтаксиса Web Audio API? Но это не мешает нам пользоваться этим при необходимости.

Но главная жалоба PPK вовсе не на сложность:

> Нам надо бы сосредоточиться на сильных сторонах веба: простоте, URLах и доступности. Машина инноваций на всех парах мчит не туда.

PPK приводит пример:

> Для меня переходы между страницами олицетворяют всё то, что сегодня с браузерными функциями не так. Их задача — позволять плавно переходить с одной страницы на другую, вплоть до синхронизации анимаций на исходной и конечной страницах. ... Мы годами обходились без этого. Что еще важнее, конечные пользователи годами обходились без этого и вполне привыкли к легкой задержке при загрузке новой страницы...
Но зачем это понадобилось веб-разработчикам? Чтобы эмулировать нативные приложения, конечно же. По-моему, этого недостаточно.

Но фокус тут в том, что пользователи _хотят_ подобных штук, потому что уже привыкли к возможностям нативных приложений. И мы знаем, что потребителям нравятся возможности приложений — в апреле 2014-го специализирующаяся на мобильной аналитике фирма [Flurry сообщила](http://flurrymobile.tumblr.com/post/115191864580/apps-solidify-leadership-six-years-into-the-mobile):

> Приложения продолжают укреплять свои ведущие позиции, и занимают 86% активности среднестатистического американского мобильного пользователя, или 2 часа 19 минут в день. Время, проводимое в мобильном вебе, продолжает сокращаться, и в среднем составляет лишь 14% активности американского мобильного пользователя или 22 минуты в день.

Многие из новых «фич», появляющихся в вебе, напр. like [Service Worker](https://jakearchibald.com/2014/service-worker-first-draft/) или [устанавливаемые веб-приложения](https://dev.opera.com/blog/installable-web-apps/), созданы обогащать впечатления конечных пользователей от пользования вебом — впечатления, к которым они привыкли по нативным приложениям, но которые прежде не были доступны в вебе. Это победа.

We also respectfully disagree with PPK that there’s a dichotomy between adding native-like user experiences and protecting the web’s core strengths of simplicity, URLs and reach.

Let’s address those core strengths in reverse order:

## Reach

We’re reaching the point when some organisations are willing to forfeit the reach of the web because they want the features of native. For instance, Myntra does this — and its parent company Flipkart is planning to do so soon as well; they have disabled their site on mobile and urge people to use the app (although you can still use the site on desktop).

Uber’s service is only available through the app. Arguably, that’s understandable because sometimes the Geolocation API is not very accurate on web, and really accurate location info is critical to a taxi hailing service. But that’s an argument for making the Geolocation API better, rather than stopping development.

If we slow development of the web, we risk losing more services to native, thereby diminishing the web’s reach.

## URLs

If you get a great big saucepan, and boil the web in it all weekend, periodically skimming off the scum of YouTube comments, porn and photographs of horrible kittens (tautology?), when you look under the lid on Sunday night you’ll find you’re left with URLs. (Or URIs. Or URNs. Who cares what the difference is?)

It’s called “the web” because it’s a network that joins resources together, and those resources are individually addressable.

Modern standards are designed to preserve URLs. Take Service Worker, for example; the explainer document for Navigation Controller (the previous name for what’s become Service Worker) [says](https://github.com/sole/NavigationController/blob/master/explainer.md)

> It forces you to have URLs! Some modern apps platforms have foresaken this core principle of the web and suffer for it. The web should never make the same mistake.

Similarly, the [Web Manifest spec](http://html5doctor.com/web-manifest-specification/) defines a web app’s start and scope in terms of good old-fashioned vitally-important URLs. The proposed [Upgrade Insecure Requests spec](https://w3c.github.io/webappsec/specs/upgrade/) tries to ensure that no links break if a developer upgrades their server to HTTPS in order to provide a better (more secure) user experience.

There’s a lot the web can learn from native (without slavishly _emulating_ it), but linkability is something that native needs to emulate from the web; see the Rube Goldberg machine-like [App Links](https://developers.facebook.com/docs/applinks) proposal to see how Facebook is trying to bring “deep linking to content in your mobile app”. We have URLs; PPK is right that we need to jealously preserve them, so modern standards attempt to do just that.

## Simplicity

There’s a deeper complexity to the modern web platform than the sheer volume of features. It’s to do with the way the specs were written, the timescale over which they’ve been written and the fact that some features that we rely on have never been specified at all.

One example is HTML5 Parsing. For years, developers had to deal with the different DOMs that browsers constructed from invalid markup (which, as we know, is the vast majority of the web). This was allowed because HTML 4 never specified what to do with bad markup, so browsers were free to do as they saw fit.

HTML5 changed that, and now all browsers worth shaking an angle bracket at produce the same DOM regardless of the validity of the markup. This has produced a huge boost in interoperability, benefitting consumers and saving developers megatons of heartache.

A more current example is `XMLHttpRequest` which was never formalised and standardised until years after Microsoft implemented it and everyone else reverse-engineered it and copied it.

XHR is hardly a beautiful API, and will be replaced by the [Fetch Standard](https://fetch.spec.whatwg.org/) which aims to simplify and unify network requests. Its preface says

> At a high level, fetching a resource is a fairly simple operation. A request goes in, a response comes out. The details of that operation are however quite involved and used to not be written down carefully and differ from one API to the next.

> Numerous APIs provide the ability to fetch a resource, e.g. HTML’s `img` and `script` element, CSS’ `cursor` and `list-style-image`, the `navigator.sendBeacon()` and `self.importScripts()` JavaScript APIs. The Fetch Standard provides a unified architecture for these features so they are all consistent when it comes to various aspects of fetching, such as redirects and the CORS protocol.

Modern standards are all about explaining the platform to simplify development, and ensuring a solid, understandable foundation upon which to build.

This is built on a design philosophy called the Extensible Web Manifesto. It’s too much to explore here, but The Chair of the W3C Extensible Web Community Group, Brian Kardell, wrote us an article about it called [Sex, Houdini and the Extensible Web](https://dev.opera.com/articles/houdini/).

## Immediacy

A central pillar of the web that PPK doesn’t mention is what I call “immediacy”. When you make a change to a web site, the next visitor gets the updated version immediately. With native apps you have to publish to an App Store, your user is alerted that there’s an updated version and, when they have wifi, they’ll update it. Maybe.

Installable Web Apps give us an app-like experience — an icon on the homescreen, potentially working even while offline — but retain the immediacy of the web because the app is hosted on a server. In fact, the app is actually — wait for it — _a web site_ with a URL pointed to by the homescreen icon. We combine the strengths of the web with the user experience of native.

## Conclusion

At Opera, a lot our developers work on bringing the web to people who otherwise wouldn’t get it, [either with Opera Mini](https://dev.opera.com/articles/making-sites-work-opera-mini/), or by [reducing Chromium’s memory consumption](https://dev.opera.com/blog/reducing-memory-use/) so that it works on the lower-specification devices that most of the world uses.

We know that the [fastest growing mobile phone markets don’t use apps](http://qz.com/466089/the-fastest-growing-mobile-phone-markets-barely-use-apps/), so by artificially slowing the pace of evolution on the web, we’re deciding that these people should get a second-class online experience.

It’s imperative, we believe, for the web to continue to add new features — like Service Workers and Installable Web Apps, just as we added native video, the Audio API, the `<picture>` element, Storage APIs — that extend what the web can do so that it continues to grow and provide the reach that PPK wants, and that we want.

Opera welcomes new developments that make the web better for users. We’re the only browser manufacturer that isn’t also trying to sell an Operating System or locked-down device. So for us, it’s vital that the web continues to thrive — and we believe it’s vital for everybody.

_This was written by Bruce Lawson, with input from the rest of Opera’s Developer Relations team. Disagree? Please, write a commentary post and [tweet us](https://twitter.com/odevrel) the link!_

Added 4 August: Simultaneously with our publishing, Google Chrome evangelist Jake Archibald published [If we stand still, we go backwards](https://jakearchibald.com/2015/if-we-stand-still-we-go-backwards/) on the same subject.
