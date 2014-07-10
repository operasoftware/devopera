---
title: HTML5 Please
authors:
- divya-manian
tags:
- css3
- html5
- odin
license: cc-by-3.0
---

<p><a href="http://html5please.us"><img src="http://cache.gyazo.com/c5d6f648394681c59d93c487b8347cf5.png" alt="" /></a></p>
  <p> Several months ago, <a href="http://paulirish.com">Paul Irish</a> and I got an idea to create a service that would give out recommendations on which HTML5 features to use and how to use them. Finally, yesterday, we pushed that site live: <a href="http://html5please.com">html5please.us</a>.</p>
  <p>The pressing problem for web developers has been to know which features are good to use, which are not. Most likely, they spend hours working on sites using some new features, only to be burnt in the process using features that are not performance-friendly, having incomplete support or using the wrong polyfill. </p>
  <p> I spent a lot of time thinking of how to best implement this such that it would be easy to work with among contributors and also be easy to compile into a single site.  <a href="http://tbranyen.com">Tim Branyen</a> helped in much of the brainstorming and finally we came up with a node/backbone implementation that took a set of markdown posts and stitched them into a single HTML page.  The node application also automatically tries to add a link to <a href="http://whencaniuse.com">when can i use</a> for each of the features. I also added another check to verify these links exist and if not, remove them before being published. </p>
  <p>Thanks to <a href="http://vyom.org">Deepak Jois</a> for writing the shell-script that allows easy addition of new features.  <a href="http://connor.me">Connor Montgomery</a>, <a href="%22http://peter.sh">Peter Beverloo</a> and <a href="http://addyosmani.com">Addy Osmani</a> also helped significantly in making sure the content was relevant and correct.</p>
  <p>Let us know what you think and also if you could, <a href="http://github.com/h5bp/html5please/">help in the effort</a>.</p>
