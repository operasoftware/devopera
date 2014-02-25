---
title: Usage statistics for Opera Dragonfly
authors:
- dstorey
tags:
- developer tools
- Opera Dragonfly 1.1
- usage tracker
- dragonfly
layout: article
---
<p>It is important for any nontrivial project to be able to have reliable usage statistics. Opera Dragonfly is no exception to this. Usage stats are important to be able to help judge the success of a product, and to be able to monitor if there are sudden rises or drops in the user based, due to things like new releases, reviews, advertisements and promotions, and so on.</p> 

<p>Since switching to AppCache we have not been able to get fully reliable usage figures. It is also not clear if a user just opens Opera Dragonfly once (perhaps accidentally) or is a regular user that relies on it for their day to day job. We would like to improve this situation, so we can serve our users better, measure our user base, and improve the product. To do this we have implemented a simple opt-out usage tracker for this experimental release.</p>

<p>The aim of the usage tracker is to calculate the number of unique users of Opera Dragonfly, and how many times they use it over a certain period of time. We are not interested in tracking or storing any personal identifiable information. We will only store what is needed to measure usage numbers and frequency of use. We also want to disclose exactly what we track and how we do it. If you are not happy with supplying this anonymous information to the Opera Dragonfly team, you can disable it in the Opera Dragonfly settings, under the General tab. We made this opt-out by default as opt-in usage statistics are not particularly useful when counting number of actual users.</p>

<h3>Technical details</h3>

<p>To monitor unique users a user has to be identified to know if they have used Opera Dragonfly before, or are a new user. To do this we generate a unique user ID using a random 8 character string. Each character is selected at random from one of 36 possible alpha-numeric options: <code>&quot;0123456789abcdefghijklmnopqrstuvwxyz&quot;</code>. A time-stamp is also generated to ensure that Opera makes a network request, rather than caching. The user ID and information stored does not contain any personal identifiable data that ties it to a particular person.</p>

<p>When Opera Dragonfly is started up the user ID is sent to the Opera Dragonfly server in the <code>GET</code> argument of an XHR.  This is then stored in a server log so that we can calculate usage figures. This log is accessible by the Opera Dragonfly team, but the usage statistics (without user ID) may be shared with other Opera employees and communicated externally, such as in usage reports on this blog.</p>

The source code for the usage tracking feature can be found at <a href="https://bitbucket.org/runeh/dragonfly-stp-1-1-1/src/tip/src/lib/usertracker.js">https://bitbucket.org/runeh/dragonfly-stp-1-1-1/src/tip/src/lib/usertracker.js</a>. This is currently in a work branch, but will be merged into mainline before release.
