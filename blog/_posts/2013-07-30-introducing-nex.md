---
title: Introducing NEX - standards-oriented browser add-ons
authors:
- rich-tibbett
tags:
- chromium
- nex
- extensions
- blog
layout: article
---
<p><em>Here we introduce NEX -  a vendor-neutral packaging format for browser add-ons that we have initially implemented on top of the Chromium .crx format in Opera. We intend to further develop this as an open add-ons format through international standards bodies. Initially we intend to consolidate the differences between add-on execution environments themselves considering their current similarities. As a secondary objective we then aim to kick-start meaningful discussion around shared system and device-level APIs with a view to making browser add-ons first-class citizens of the web core.</em></p>

<hr />

<p>When we <a href="http://business.opera.com/press/releases/general/opera-gears-up-at-300-million-users" target="_blank">first announced</a> we were moving to Chromium-based development for all future Opera browser builds, we had already taken a detailed in-depth look at all aspects of the Chromium system we were adopting. One important aspect we looked at during that process was how web developers currently create add-ons for Chromium-based browsers — things like <a href="http://developer.chrome.com/extensions/index.html" target="_blank">Browser Extensions</a> and <a href="http://developer.chrome.com/apps/about_apps.html" target="_blank">Packaged Web Apps</a>.</p>

<p>Chromium itself natively supports the <a href="http://developer.chrome.com/extensions/crx.html" target="_blank">CRX format</a> with a number of Application Programming Interfaces (APIs) provided by Google. With Opera having recently joined Google as <a href="http://my.opera.com/ODIN/blog/2013/03/22/operas-webkit-patches" target="_blank">active Chromium project contributors</a> we wanted to find a solution that would allow us to extend the Chromium CRX feature set without compromising the current ecosystem that has grown-up around that format.</p>

<p>The CRX format, as a single-vendor format up to this point has not had to embrace extensibility in its architecture. We were faced with the choice of extending the CRX format or creating something new that would allow Opera and other browser providers to innovate on their own Add-ons APIs. During our research we noted that the similarities of different browser manifest formats (essentially, the bootstrap mechanism for loading add-ons) far outweighed the differences. While we were seeking a way to innovate and build out our own Add-ons environment at Opera we also saw an opportunity to simultaneously be able to advance a much bigger and bolder idea towards the open web development community.</p>

<p>To this end we are today introducing <a href="http://dev.opera.com/extension-docs/tut_architecture_overview.html">the NEX format</a>. The NEX format is initially positioned as a super-set of the <a href="http://developer.chrome.com/extensions/getstarted.html" target="_blank">CRX development environment</a> that Chromium web developers are already using. Opera has always maintained a strong commitment to international, open standards and has a long history of playing an active role in open web standards development. This does not change with our move to Chromium. One of our objectives for NEX is that over time we will move this format forward via web standards organisations such as the <a href="http://www.w3.org/" target="_blank">W3C</a>, initially to create a <a href="http://manifest.sysapps.org" target="_blank">shared packaging and manifest format</a> for cross-browser add-on development, removing implied dependencies on the CRX format within our NEX runtime as we go.</p>

<p>With open web standards web users are able to choose their browser — rather than being locked in to one vendor or product. A system that promotes user choice, makes the lives of web developers easier and promotes shared innovation continues to produce a healthy, competitive web ecosystem. NEX is a proposal to move Chromium add-ons - components like Extensions, that have arguably become as important a part of the web today as web content itself - towards a vision of creating, contributing and consolidating an open web core.</p>

<h3>What is NEX today?</h3>

<p>The NEX format as implemented by Opera today could be considered a super-set of the CRX runtime environment although in theory a CRX base should not be considered mandatory for implementing NEX.  In Opera 15 the NEX format provides exclusive access to the <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/" target="_blank">Opera Extensions Speed Dial API</a>. Other implementations are free to add their own APIs in to this mix.

<p>A NEX file is provided with a <code>.nex</code> file extension and delivered over HTTP with an <code>application/x-navigator-extension</code> content type. By changing the file type or content type we want to make a distinction between proprietary developments and those that are intended to have implicit compatibility with other runtimes. This is the subject of the further work <a href="#evolution">defined below.</a></p>

<p>Opera will continue to implement the existing CRX format separately in Opera 15+ and so developers who are familiar with current Chromium CRX development can continue to develop and upload CRX-based Extensions to the <a href="https://addons.opera.com/en/extensions/" target="_blank">Opera Add-ons catalog</a> in the same way they do for the <a href="https://chrome.google.com/webstore" target="_blank">Chrome Web Store</a>.</p>

<h3 id="evolution">How will NEX evolve?</h3>

<p>The initial target of NEX development will be around <a href="http://manifest.sysapps.org" target="_blank">normalising the packaging and manifest format</a> provided between both Chromium and other browser vendor&#39;s ongoing projects — work that is currently being driven by <a href="http://www.mozilla.org/en-US/" target="_blank">Mozilla</a> over at the <a href="http://www.w3.org/" target="_blank">W3C</a>.</p>

<p>In the near term we want NEX to be as resilient as the web and be a place for promoting web best practices in use today. Specifically the best practice we want browser add-on developers to embrace during add-ons development is the concept of <a href="http://www.nczonline.net/blog/2009/12/29/feature-detection-is-not-browser-detection/" target="_blank">feature detection</a> and cross-browser environment compatibility for their add-on products. Given a standard add-ons package that can be executed in multiple different runtimes - each likely to be providing a set of functionally-equivalent but potentially programatically-different APIs - there are opportunities for web developers to craft content and offer fallback experiences that help to bridge the gaps between different runtime API sets. We want to help developers create unified browser add-ons, write code to different API libraries and run those same files in different run time environments.</p>

<p>In the longer term Opera would like for NEX to encourage real and meaningful discussions around introducing standardized APIs in to cross-vendor browser add-on runtimes (potentially initially alongside existing proprietary or defacto APIs available in those environments). If browser vendors can embrace a common packaging and manifest format then this should make engaging at a shared System Applications API level much more useful - since the outcome of such discussions would likely make the lives of web developers easier while developing browser add-ons in the future. The fact that vendors do not share a single environment for delivering System Applications APIs today makes standardization efforts in this area difficult. With NEX we hope to kick-start the environment needed to create the right conditions for Add-on API standardization to occur and to create a lasting shared development environment for unified Browser Add-ons development.</p>

<p>Opera will continue to fully track the CRX run time in the near term for all packaging, manifest format and APIs provided through the Chromium project. Over time, we plan to move aspects of the NEX run time towards open-standards currently being defined over at the W3C - removing proprietary aspects of the CRX system in favor of open web standards whenever possible.</p>

<h3>How can I get involved?</h3>

<p>There are a number of things you can do today to help us achieve our vision of an open, shared ecosystem for add-ons development for the future.</p>

<p>In order to get to the point where we have a shared packaging and manifest format, Opera will be engaging in the open standards process over at the W3C and we <a href="http://www.w3.org/2008/webapps/" target="_blank">invite others to participate</a> and lend a hand there also.</p>

<p>The longer term objective of NEX means we should be thinking about what shared Add-ons APIs and libraries should ultimately look like. There is <a href="http://www.w3.org/2012/sysapps/" target="_blank">a group at the W3C</a> tasked specifically with this objective in their current charter. In the mean time, we should be promoting a feature-detection based approach to browser add-ons development so code can easily be swapped in and out of different runtimes without problems. Can we write JavaScript libraries to aid developers in producing cross-vendor add-ons today? How can we mitigate some of the challenges for developers in writing cross-vendor add-ons? This thinking is high priority for creating a strong core platform for Add-ons development, and we would like as many different stakeholders as we can find in that process to get involved.</p>

<h3>Conclusion</h3>

<p>Our current implementation of NEX in Opera 15 represents the first step on our way to creating a more open standards-based development environment for browser add-ons and a more open add-ons ecosystem for users. Both of these things are essential for improving the core stability of the web and positioning it as <em>the</em> future universal application platform. As a community and as a participant in this process, we have a lot of work to do on the standards front building on the foundations we already have in place there.</p>

<p><em>If you want to learn more about NEX and to get started writing NEX extensions as supported in Opera 15 you can consult our <a href="http://dev.opera.com/extension-docs/tut_architecture_overview.html">NEX documentation</a> for further information.</em></p></p>
