---
title: A New Dev.Opera
authors:
- andreas-bovens
intro: 'We’re happy to release a new, totally refactored version of Dev.Opera today. Under the hood, you'll find Jekyll, Sass, Grunt, and more, and submitting articles is as simple as doing a pull request. 
tags:
- devopera
- redesign
license: cc-by-3.0
layout: article
---
Today, we're happy to release a new, totally fresh version of Dev.Opera. 

Before we started the refactoring process, we decided we wanted to go for a site that puts good article content in the spotlight (without too much visual noise in the margins), is lightweight with great performance, and makes use of GitHub's pull request feature for new article submissions and site updates.

And [1200+ commits](https://github.com/operasoftware/devopera/graphs/contributors) later, this is what we ended up with:
- flat-file content management with [Jekyll](http://jekyllrb.com/)
- [Sass](http://sass-lang.com) for styles
- [highlight.js](http://highlightjs.org/) for code snippet highlighting
- [Grunt](http://gruntjs.com/) for easy development and deployment
- [Google CSE](https://www.google.com/cse/) powered search
- a straightforward [contribution process](https://github.com/operasoftware/devopera/blob/master/CONTRIBUTING.md)

For the occasion, we've also merged our ODIN, Core, Sitepatching and Dragonfly blog content into Dev.Opera's new [blog section](http://dev.opera.com/blog/), and we've done a whole lot of spring cleaning, including archiving old content. If you're missing something, check [our static backup](https://github.com/operasoftware/devopera-static-backup/tree/master/http/dev.opera.com/articles/view) and let us know if you think it should be reinstated.

For the time being, the [new Opera extension docs](http://dev.opera.com/extensions/) still use their own templates and layout, but the plan is to integrate those as well into the new site.

If you have comments, [ping us on Twitter](https://twitter.com/odevrel) or [file a bug](https://github.com/operasoftware/devopera/issues/new). 
If you want to help out or write for us, it's as simple as [doing a pull request](https://github.com/operasoftware/devopera/blob/master/CONTRIBUTING.md). 

So, stay tuned: we're having some nice articles and updates in the pipeline the coming weeks and months!