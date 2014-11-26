---
title: On the road to Beta…
authors:
- david-storey
tags:
- dragonfly
license: cc-by-3.0
---

<figure class="figure">
	<img src="{{ page.id }}/closer-to-beta.png" alt="" class="figure__media">
</figure>

With [SxSW](http://sxsw.com/interactive) around the corner, The Opera Dragonfly team is hard at work preparing for the beta release. We have just updated the [experimental branch](https://dev.opera.com/blog/getting-opera-dragonfly-ready-for-opera-11/) with a new build, which includes a number of bug fixes. One of the main reasons for this release is to test out the new minification procedure.

Opera Dragonfly is a large application with complex functionality. With over a megabyte in file size, downloading all the data and processing it would be slow and eat up horsepower. If anyone has tried the unminified version, such as when developing Opera Dragonfly on a local machine, you’ll notice it runs much slower. Up until now we’ve used our own home brewed solution to minify the scripts. We’ve now switched to use [Node.JS](https://nodejs.org/) along with [UglifyJS](https://github.com/mishoo/UglifyJS/). This should lead to faster initial download time as the compressed file size is smaller, and faster performance as the code is optimised and Carakan has to process less JavaScript. There is always risk of regressions caused by the minification, so we’d like to put the build out in the wild, along with out in-house testing to make sure things work the way they should.

This release should be considered feature complete for beta and the final Opera Dragonfly 1.0 release. Work continues on fixing bugs and polishing the UI until we reach those milestones.

The following tasks should be complete for the beta release:

* Further bug fixing for issues we deemed important for beta
* Review of all strings in the application
* Missing icons, and polishing of padding, margin and sizing issues with the design
* Syntax highlighting of CSS in the Resource Inspector

As mentioned previously, feature development will resume after Opera Dragonfly 1.0 ships.
