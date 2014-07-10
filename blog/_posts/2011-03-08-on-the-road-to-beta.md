---
title: On the road to Beta…
authors:
- david-storey
tags:
- dragonfly
license: cc-by-3.0
---

<img src="{{ page.id }}/closer-to-beta.png" alt="" />

<p>With <a href="http://sxsw.com/interactive">SxSW</a> around the corner, The Opera Dragonfly team is hard at work preparing for the beta release. We have just updated the <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental branch</a> with a new build, which includes a number of bug fixes. One of the main reasons for this release is to test out the new minification procedure.</p>

<p>Opera Dragonfly is a large application with complex functionality. With over a megabyte in file size, downloading all the data and processing it would be slow and eat up horsepower. If anyone has tried the unminified version, such as when developing Opera Dragonfly on a local machine, you’ll notice it runs much slower. Up until now we’ve used our own home brewed solution to minify the scripts. We’ve now switched to use <a href="http://nodejs.org/">Node.JS</a> along with <a href="https://github.com/mishoo/UglifyJS/">UglifyJS</a>. This should lead to faster initial download time as the compressed file size is smaller, and faster performance as the code is optimised and Carakan has to process less JavaScript. There is always risk of regressions caused by the minification, so we’d like to put the build out in the wild, along with out in-house testing to make sure things work the way they should.</p>

<p>This release should be considered feature complete for beta and the final Opera Dragonfly 1.0 release. Work continues on fixing bugs and polishing the UI until we reach those milestones.</p>

<p>The following tasks should be complete for the beta release:</p>

<ul>
   <li>Further bug fixing for issues we deemed important for beta</li>
  <li>Review of all strings in the application</li>
   <li>Missing icons, and polishing of padding, margin and sizing issues with the design</li>
   <li>Syntax highlighting of CSS in the Resource Inspector</li>
</ul>

<p>As mentioned previously, feature development will resume after Opera Dragonfly 1.0 ships.</p>

