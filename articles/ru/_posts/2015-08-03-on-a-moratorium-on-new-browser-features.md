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

Многие из новых «фич», появляющихся в вебе, напр. [Service Worker](https://jakearchibald.com/2014/service-worker-first-draft/) или [устанавливаемые веб-приложения](https://dev.opera.com/blog/installable-web-apps/), созданы обогащать впечатления конечных пользователей от пользования вебом — впечатления, к которым они привыкли по нативным приложениям, но которые прежде не были доступны в вебе. Это победа.

Также при всём уважении мы не согласны с PPK, что добавление похожего на нативные приложения пользовательского опыта и защита простоты, URL-ов и общедоступности как фундаментальных ценностей веба однозначно противоречат друг другу.

Давайте рассмотрим эти фундаментальные ценности в обратном порядке:

## Общедоступность

Всё ближе момент, когда некоторые организации захотят поступиться доступностью веба, потому что хотят возможностей нативных приложений. Например, это уже делает Myntra — и планирует вот-вот сделать их родительская компания Flipkart; они отключили свой сайт для мобильников и убеждают людей пользоваться приложением (хотя сайтом по-прежнему можно пользоваться на компьютерах).

Служба Uber доступна только через приложение. Может быть, это можно понять, потому что API геолокации в вебе иногда не слишком точен, а точное определение местоположения критически важно для службы вызова такси. Но это аргумент за улучшение API геолокации, а не за прекращение разработки.

Если мы замедлим разработку веба, мы рискуем, что нативные приложения отберут у нас еще больше сервисов, тем самым уменьшая общедоступные возможности веба.

## URL-ы

Если взять огромную кастрюлю и кипятить в ней веб все выходные напролет, периодически снимая пену из ютьюбовских комментов, порнухи и фоточек мерзких котят (тавтология?), то, заглянув под крышку в воскресенье вечером, вы найдете в остатке лишь URL-ы (или URI-шки, или URN-ки... неужели кого-то заботит эта разница?).

Он и называется «вебом», т.е. «паутиной», потому что это сеть, связывающая ресурсы воедино, и к каждому ресурсу можно обратиться по своему индивидуальному адресу.

Современные стандарты разрабатываются для сохранения URL-ов. Взять Service Worker, например — поясняющий документ для контроллера навигации (старое название того, что позже выросло в Service Worker) [говорит](https://github.com/sole/NavigationController/blob/master/explainer.md):

> Это вынуждает вас иметь URL-ы! Некоторые современные платформы для приложений поступились этим фундаментальным принципом веба и страдают от этого. Веб никогда не должен повторять той же ошибки.

Аналогично, [спецификация Web Manifest](http://html5doctor.com/web-manifest-specification/) определяет начало и область видимости приложения в терминах добрых старых жизненно важных URL-ов. Предложенная [спецификация апгрейда незащищенных запросов](https://w3c.github.io/webappsec/specs/upgrade/) пытается обеспечить непрерывность ссылок при переходе сервера на HTTPS, чтобы улучшить (сделать безопаснее) пользовательский опыт.

Веб много чему может научиться у нативных приложений (для этого не нужно рабски _эмулировать_ их), но возможность ссылаться — то, в чем нативным приложениям нужно эмулировать веб. См. смахивающее на  «заумную машину Голдберга» предложение [App Links](https://developers.facebook.com/docs/applinks) — вот как Facebook старается привнести «глубокую линковку контента в ваше мобильное приложение». У нас есть URL-ы; PPK прав, что нам нужно беречь их как зеницу ока, что современные стандарты и стараются делать.

## Простота

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
