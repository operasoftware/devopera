---
title: Opera Dragonfly open for business
authors:
- david-storey
tags:
- scope
- opensource
- dragonfly
- stp1
license: cc-by-3.0
---

<p>Since the inception of <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>, we planned for it to become an open source project. It has always been released under an open source <a href="https://dev.opera.com/licenses/bsd/">BSD licence</a>, but the source repositories were on Opera servers. Starting today, Opera Dragonfly is a fully open source project, hosted on <a href="http://bitbucket.org/scope/dragonfly-stp-1">BitBucket</a>. Since the previous version of Opera Dragonfly, a lot of work has gone on behind the scenes replacing the existing architecture with a modern version of the Scope Protocol – STP-1. Opera Dragonfly has been rewritten to use this faster and more efficient version of Scope. Now that we believe that the underlying protocol is stable and performant, and a public desktop build has been released with this included, it is time to put Opera Dragonfly on a public Mercurial repository.</p>

<p>If you have a Mercurial client you can visit the <a href="http://bitbucket.org/scope/dragonfly-stp-1">Opera Dragonfly STP-1 repository</a> and check out the source code. We have provided initial documentation in the <a href="http://bitbucket.org/scope/dragonfly-stp-1/wiki/Home">Wiki</a> to get you started. This is Opera’s first full open source project, so there will be a learning curve. We ask you to bear with us while we get everything up and running and policies in place. Coming from a closed source background there are some hurdles to overcome, such as the current bug tracking system being on a closed server. We hope to migrate to an open bug tracking system as the project gets on its feet.</p>

<p>As well as the current and previous versions of the Opera Dragonfly source code, we have released a couple of tools to help with Opera Dragonfly development. The first is <a href="http://bitbucket.org/scope/dragonkeeper/">Dragonkeeper</a>. This is a standalone proxy, which translates STP (Scope Transport Protocol) to HTTP. This can also be useful for remote debugging. The second tool is <a href="http://bitbucket.org/scope/hob/">Hob</a>. Hob is a utility to create code from Protocol Buffer descriptions. Protocol Buffers are one of the formats Scope STP-1 supports along with JSON and XML.</p>

<p>The focus of the current release of Opera Dragonfly was stability and performance. As such you will not see a great deal of new features. We believe it was invaluable to build a strong foundation, so we can advance faster, with less issues in the future. Two new features you may notice since the previous desktop release are a new element highlight (first introduced in Opera Mobile), and a colour picker utility. The highlight has been optimised since the mobile release, and supports visualising the metrics of an element on the page, and multiple element selection. The colour picker is still in early development. It allows for the magnification and selection of colours from the Web page. The value of the colour is displayed in both HSL, RGB and hexadecimal formats. Work has also began behind the scenes to take advantage of HTML5 Web Storage to store users settings and preferences. This will eventually allow the application to be greatly customisable, and to remember layout and settings from a previous session. One of the biggest usability issues has also been solved, with inspect element being available from the Web page context menu. This reduces the steps needed to start debugging a Web page.</p>

<p>The current focus for the Scope protocol is improving the JavaScript debugger. This work is nearing completion on the Scope side, and will provide functionality such as the Firebug Console API.</p>

<p>We hope you enjoy this version of Opera Dragonfly, and that some of you will be inspired enough to help with the Opera Dragonfly project. If you like a challenge, this is a great place to start. Visit the <a href="http://bitbucket.org/scope/dragonfly-stp-1">Opera Dragonfly repository</a> to find out more information.</p>
