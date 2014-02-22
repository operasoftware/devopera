---
title: Vendor Prefixed CSS Supported in Opera 10.50 and 10.60
authors:
- bruce-lawson
tags:
- css
- css3
- prefixes
- odin
layout: post
---
<p>The CSS specification allows for <a href="http://www.w3.org/TR/CSS2/syndata.html#vendor-keywords">vendor-specific extensions</a>. These are usually (but not exclusively) used for experimental additions to the CSS specification that have not yet reached Candidate Recommendation stage. The following are used in Opera 10.5x and Opera 10.60:</p>

<ul>
  <li><code>-o-table-baseline</code> see <a href="http://www.w3.org/TR/mathml-for-css/">A MathML for CSS Profile</a></li>
  <li><code>-o-text-overflow</code> see <a href="http://dev.w3.org/csswg/css3-text/#text-overflow">CSS3 Text Module section</a> </li>
  <li><code>-o-transform</code> see <a href="http://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/">CSS 2D Transforms Module Level 3</a> </li>
  <li><code>-o-transform-origin</code> see <a href="http://www.opera.com/docs/specs/presto25/css/transforms/">Transforms Module Level 3</a> </li>
  <li><code>-o-transition</code> see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions Module Level 3</a> (<strong>Partial support</strong>, see <a href="http://www.opera.com/docs/specs/presto25/css/transitions/">http://www.opera.com/docs/specs/presto25/css/transitions/</a>). CSS transitions are supported on certain <a href="http://www.opera.com/docs/specs/presto25/css/transitions/#anima" target="_blank">animatable properties</a>.</li>
  <li><code>-o-transition-delay</code> see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions Module Level 3</a> </li>
  <li><code>-o-transition-duration</code> see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions Module Level 3</a></li>
  <li><code>-o-transition-property</code> see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions Module Level 3</a></li>
  <li><code>-o-transition-timing-function</code> see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions Module Level 3</a></li>
</ul>

<p>In addition to using <code>-moz-</code>,  <code>-ms-</code>, <code>-o-</code> and <code>-webkit-</code> extensions (I usually put them in alphabetical order), the final declaration should use the unprefixed version. That way, future browsers that include the feature after it becomes fully standardised can apply the style.</p><p>(This carries a risk that the specification might change, but if you choose to use experimental features on production sites you need to be aware that there is a risk. The risk a spec may change is a better bet than the certainty that future browsers won&#39;t be able to use your rules if you <em>don&#39;t</em> use a non-prefixed version: see Bruce&#39;s <a href="http://www.brucelawson.co.uk/2010/cross-browser-future-proof-css-3/">Writing cross-browser, future-proof CSS 3</a> for more discussion.)</p>
<p>Opera 10.5x also supports the extension <code>-o-tab-size</code> which defines how many spaces a <kbd>tab</kbd> character displays as inside <code>&lt;pre&gt;</code>, for example <code>{-o-tab-size:3;}</code>.</p>
<p>We also publish a full list of <a href="http://www.opera.com/docs/specs/presto25/">Web specifications supported in Opera Presto 2.5</a>.

<p>Peter Beverloo has written an <a href="http://peter.sh/examples/?/css/vendor-prefix.html">Overview and comparison of vendor-prefixed CSS properties</a>.</p></p>
