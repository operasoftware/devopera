---
title: 'Progressive Web Apps: The definitive collection of resources'
authors:
- shwetank-dixit
- bruce-lawson
intro: 'Want to get started with progressive web apps, but not sure where to start? This page will list the best resources we know of to help  you understand Progressive Web Apps (PWAs), get started and learn things in depth.'
tags:
- pwa
- mobile
- offline
- service-workers
- javascript
license: cc-by-3.0
---

## Introduction

Want to get started with progressive web apps, but not sure where to start? This page will list the best resources we know of to help you understand Progressive Web Apps (PWAs), get started and learn things in depth.

Make sure to bookmark this page, as this is a living document that we’ll be adding to from time to time.

## Progressive Web Apps: The what, how and why

These articles introduce the concept of Progressive Web apps and serve as a jumping point to learn more about them.

- [Progressive Web Apps: the future of Apps](https://dev.opera.com/blog/pwa-taipei/): A 20 minute video of a presentation by Opera’s Bruce Lawson, introducing the overall “why” and “what” of PWAs.
- [Progressive Web Apps (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=MyQ8mtR9WxI): Alex Russell (Google) and Andreas Bovens (Opera) introduce the concepts, code and cross-browser nature of PWAs.
- [Progressive Web Apps: Escaping Tabs without losing our soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/): Alex Russell’s original blog post outlining the concept of PWAs. A must-read.
- [Progressive Web Apps on Google Web Fundamentals](https://developers.google.com/web/progressive-web-apps/): This is a comprehensive set of tutorials various aspects of developing PWAs from the Google Team.
- [Getting Started with Progressive Web apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/): Addy Osmani’s guide to getting started with PWAs
- [A Beginner’s Guide to Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/): A good intro article by Smashing Magazine
- [Progressive Web Apps](https://hackerbits.com/interviews/pwa-app-are-they-the-future-of-the-internet/): An interview with PWA expert, Henrik Joreteg, who’s been working with his clients to architect, build and train teams on building performant mobile web apps.

## UI Concepts

One of the best things about PWAs are that they can be added to the home screen of your Android device, just like native apps can. This section contains relevant articles covering the ‘Add to Home Screen’ capability, as well as a few articles on how to make your web app UI running smoothly.

- [Adding to Home Screen](https://medium.com/net-magazine/html-manifest-402e6a8cc0e9): Bruce Lawson on adding your site to the mobile home screen.
- [The Google Team’s Overview of Adding to Home Screen](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android): A nice overview of the options available for various use cases when implementing ‘Add to Home Screen’ functionality.
- [FLIP your animations](https://aerotwist.com/blog/flip-your-animations/): It’s important that your PWA runs smoothly. Paul Lewis explains how to implement smooth animations in your app.
- [Jankfree](http://engineering.flipboard.com/2015/02/mobile-web/): A collection of resources all about improving web UI performance and reducing ‘Jank’.
- [60fps on the Mobile Web](http://engineering.flipboard.com/2015/02/mobile-web): The Flipboard team discusses how to get 60fps performance for your web frontend on mobile devices.
- [The Web App Manifest Specification](https://w3c.github.io/manifest/).

## Offline

Progressive Web Apps are capable of running offline just like native apps. This is primarily through a feature called ‘Service Worker’. Service Workers are great, and besides being used to make web apps run offline, are also required for other functionality like Push Notifications and Background Sync.

- [What we need from the Web, and what it needs from us](https://vimeo.com/175121061): A 43 minute video by Shwetank Dixit, introducing PWAs from the perspective of web users in India. Service Workers begins at minute 18.
- [Instant Loading: Building offline-first Progressive Web Apps](https://www.youtube.com/watch?v=cmGr0RszHc8): A 45 minute video by Jake Archibald, one of the designers of Service Workers.
- [Service Workers: An Introduction](https://developers.google.com/web/fundamentals/primers/service-worker/): A great intro by the Google Team on what you need to know to get started with Service Workers.
- [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/): Jake Archibald covers a variety of use cases for offline functionality along with helpful illustrations and code examples for the service wokers code. Very well worth a look!
- [Service Worker: Santa’s Little Performance Helper](http://12devsofxmas.co.uk/2016/01/day-9-service-worker-santas-little-performance-helper/): Phil Nash covers Service Worker through a practical example. Its also contains a great example of caching web fonts for offline use using Service Workers.
- [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers): The Mozilla team’s introduction to Service Workers on MDN. It contains some useful infographics on various parts of the Service Worker lifecycle, and more.
- [Making a Service Worker](https://www.smashingmagazine.com/2016/02/making-a-service-worker/): A fantastic article by Lyza Danger Gardner going in-depth with Service Workers.
- [serviceworke.rs](https://serviceworke.rs): Mozilla’s site detailing various caching strategies and use cases along with code examples.
- [Offline Storage for Progressive Web Apps](https://medium.com/dev-channel/offline-storage-for-progressive-web-apps-70d52695513c#.9n1e1i81i): Addy Osmani lists out a number of libraries and tools available for making web apps run offline.
- [The Copy and Paste Guide to your first Service Worker](https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker): Remy Sharp writes about how to get started quickly.
- [Designing Offline-first Web Apps](http://alistapart.com/article/offline-first): Besides giving helpful tips on good offline experiences, this article helps you think differently about offline as a user state in the first place.
- [The Service Workers Specification](https://w3c.github.io/ServiceWorker/)

## Push Notifications

Push notifications are helpful in notifying the user of important, relevant or timely events, even if your site isn’t open in the browser, or even when the browser is closed. With the Push API spec and Service Workers, you can finally implement this in your progressive web app too. Be careful not to spam your users!

- [Towards better apps: the what & why of progressive web apps](https://opbeat.com/community/posts/towards-better-apps-the-what-why-of-progressive-web-apps-by-andreas-bovens/): A 43 minute video in which Andreas Bovens introduces PWAs, Service Workers and — around the 23 minute mark — Push Notifications.
- [Web Push Notifications: Timely, Relevant and Precise](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/): Google’s introduction to Web Push notifications.
- [Push API documentation on MDN](https://developer.mozilla.org/en/docs/Web/API/Push_API)
- [Keep Pushing it, with the Web Push API](https://hacks.mozilla.org/2015/10/keep-pushing-it-with-the-w3c-push-api/): Chris Mills explains the Web Push API.
- [The Push API specification](https://www.w3.org/TR/push-api/)

## Tools and Libraries

This section lists out a number of tools which might end up saving you a lot of time and effort when coding up for your PWAs.

- [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox): A helpful library with account for a lot of different caching use-cases.
- [sw-precache](https://github.com/GoogleChrome/sw-precache): A tool to pre-emptively cache all static resources for offline use.
- [Lighthouse](https://github.com/GoogleChrome/lighthouse): Auditing and performance metrics for Progressive Web Apps.
- [Manifest Generator](https://brucelawson.github.io/manifest/): A tool which automatically generates a web manifest file for you.
- [manifest-json](https://www.npmjs.com/package/manifest-json): Another tool (this is using the command line) to generate a web manifest file for you.
- [generator-pwa](https://github.com/hemanth/generator-pwa): A yeoman generator for a basic PWA app.
- [UpUp](https://github.com/TalAter/UpUp): Read the [article by the library’s author](https://dev.opera.com/articles/offline-with-upup-service-workers/) on how to use it.
- [Web Starter Kit](https://github.com/google/web-starter-kit): A boilerplate for web development including sw-toolbox and sw-precache libraries.
- [Fetch-sync](https://github.com/sdgluck/fetch-sync): Fetch Sync allows you to proxy fetch requests through the Background Sync API so that they are honoured if made when the UA is offline.
- [Msgr](https://github.com/sdgluck/msgr): Nifty service worker/client message utility.

## Showcases, case studies and more

Take a look at what others are doing with Progressive Web Apps. Get inspiration and see how it has benefitted others in key business metrics.

- [PWA.Rocks](https://pwa.rocks): The showcase for the best Progressive Web Apps in the world. It’s maintained by the Opera Developer Relations team, and we accept Pull Requests if you have a great-looking responsive PWA. Remember, sites aren’t “mobile-only” so the best PWAs look great on desktop and devices.
- [Google PWA Showcase](https://developers.google.com/web/showcase/): Google’s showcase of companies which have befitted from PWAs.
- [The Business Case for Progressive Web Apps](https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/): Jason Grigsby writes a compelling case for the business benefits of PWAs.
- [PWAs: An African Perspective](https://dev.opera.com/articles/pwa-nigeria-kenya-interview/): We interview two great developers from Nigeria and Kenya about PWAs. Read their thoughts on how PWAs can help solve problems in that region.

## Books

Books to help you learn about PWAs

- [Progressive Web Apps](https://www.manning.com/books/progressive-web-apps): Progressive Web Apps teaches you PWA design and the skills you need to build fast, reliable websites by taking you step-by-step through real world examples in this practical tutorial.

