---
title: HTML5 Please
authors:
- divya-manian
tags:
- css3
- html5
license: cc-by-3.0
---

<figure block="figure">
    <a href="http://html5please.us/"><img elem="media" src="{{ page.id }}/html5-please.png" alt="HTML5 Please"></a>
</figure>

Several months ago, [Paul Irish](http://paulirish.com) and I got an idea to create a service that would give out recommendations on which HTML5 features to use and how to use them. Finally, yesterday, we pushed that site live: [html5please.us](http://html5please.com).

The pressing problem for web developers has been to know which features are good to use, which are not. Most likely, they spend hours working on sites using some new features, only to be burnt in the process using features that are not performance-friendly, having incomplete support or using the wrong polyfill.

I spent a lot of time thinking of how to best implement this such that it would be easy to work with among contributors and also be easy to compile into a single site. [Tim Branyen](http://tbranyen.com) helped in much of the brainstorming and finally we came up with a node/backbone implementation that took a set of markdown posts and stitched them into a single HTML page. The node application also automatically tries to add a link to [when can i use](http://whencaniuse.com) for each of the features. I also added another check to verify these links exist and if not, remove them before being published.

Thanks to [Deepak Jois](http://vyom.org/) for writing the shell-script that allows easy addition of new features. [Connor Montgomery](http://connor.me/), [Peter Beverloo](http://peter.sh/) and [Addy Osmani](http://addyosmani.com/) also helped significantly in making sure the content was relevant and correct.

Let us know what you think and also if you could, [help in the effort](http://github.com/h5bp/html5please/).
