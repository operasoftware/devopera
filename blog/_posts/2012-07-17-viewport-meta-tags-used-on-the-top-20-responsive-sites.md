---
title: Viewport Meta Tags Used on the “Top 20 Responsive Sites”
authors:
- andreas-bovens
tags:
- research
- viewport
- mobile
- responsive
- meta
- odin
license: cc-by-3.0
---

<p>Last week, <a href="http://socialdriver.com/2012/07/20-best-responsive-websites/">Social Driver</a> listed 20 sites that are supposedly best-in-class when it comes to responsive design techniques. I had a look at the viewport meta tags used in these sites and have posted them as a <a href="https://gist.github.com/3130253">gist</a>.</p>

<h3>Findings</h3>
<ul>
<li>All sites use <code>width=device-width</code>, with in most cases an additional <code>initial-scale=1</code>. This is good practice.</li>
</ul>
<p>However:</p>
<ul>
<li>8 sites turn off pinch-zooming by setting <code>maximum-scale</code> to 1, or using <code>user-scalable=no</code>. While there are some corner use cases for this, it does not make sense to do this on text-heavy sites as it impairs accessibility.</li>
<li>3 sites use semi-colons as delimiters between viewport values. While this works in newer mobile browsers, it&#39;s not officially supported, and breaks in older mobile browser versions.</li>
<li>1 site has 2 viewport meta tags (with different values) in the source...</li>
<li>1 site sets an explicit value for <code>target-densitydpi</code>. While there are some corner use cases for this, it&#39;s better to leave this up to the browser to decide. In this case, the site&#39;s fonts look strangely big on high-DPI screens.</li>
</ul>
<p>So, there is still some work to be done, before everyone gets it right. If you want to get started with viewport and responsive design on your site, check out my <a href="https://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">viewport Dev.Opera article</a> and play with the <a href="http://andreasbovens.github.com/understanding-viewport/">understanding-viewport examples</a>.</p>
