---
title: Carakan Revisited
authors:
- jens-lindstrom
tags:
- javascript
- ecmascript
- carakan
- coreblog
layout: post
---
<p>A little more than a year has passed since we launched the Carakan project, aimed at drastically improving Opera&#39;s ECMAScript execution performance, and it&#39;s finally time for the first <a href="http://labs.opera.com/news/2009/12/22/" target="_blank">labs release</a> of Opera with the Carakan ECMAScript
engine.</p>

<p>What we set out to implement over a year ago was, as I described in a <a href="http://my.opera.com/core/blog/2009/02/04/carakan" target="_blank">previous post</a> about the Carakan project, a new cross-platform bytecode interpreter for a new register-based instruction set, a new internal object model with automatic
classification and inline property caching, and machine code generation.  All this we&#39;ve done, and then some.</p>

<p>The new bytecode interpreter and new object model are cross-platform, meaning they will work on any hardware platform Opera is ported to.  On their own, they already give a significant performance boost compared to Futhark, the engine
used in all current versions of Opera.  Running on a regular desktop computer, Carakan&#39;s bytecode interpreter is around 3.5 times faster than Futhark on the Sunspider benchmark, and on embedded systems running less powerful CPUs early testing shows it to have an even greater advantage over Futhark.</p>

<p>For optimum performance, however, machine code generation, or JIT, is the way to go, and this is where we have focused most of our optimization work.  Carakan is equipped with a hot-spot detecting JIT compiler that generates machine code that
performs all but the most complex operations directly without calling the bytecode interpreter.  It employs a combination of compile-time static analysis of the program and runtime profiling in the bytecode engine to optimize the generated code, focusing in particular on code that does arithmetic calculations.  It also performs function inlining, both of simple built-in functions such as Math.sqrt() and String.charCodeAt() and of functions implemented in the script.  Currently the JIT compiler only supports generating 32 or 64 bit x86 machine code, but support for other architectures will be added in time, starting with the ARM architecture.</p>

<p>But this is not all we have done in the Carakan project.  I&#39;d like to also mention two other interesting improvements that we&#39;ve implemented compared to Futhark: a divided garbage collected heap, and caching of compiled scripts.</p>

<h2>Divided garbage collected heap</h2>

<p>The ECMAScript language assumes the presence of a garbage collector that automatically reclaims memory occupied by objects that are no longer needed.  Carakan&#39;s garbage collector is very similar to the one used in Futhark, a basic
mark-and-sweep design; we&#39;ve only done some smaller, but rather effective, tweaking of its performance.  We have however drastically changed how we use the garbage collector.  In Futhark, all memory allocated by the ECMAScript engine
for scripts running in any tab was allocated from a single shared heap, and anytime the garbage collector needed to run to free up memory, it would traverse all allocated memory.  The more open tabs there were, the more expensive would a
garbage collection become.</p>

<p>In Carakan, we instead use many smaller heaps.  Each document loaded in a tab, or in a frame or iframe inside another document, gets its own.  Since scripts running in different documents can sometimes access each other&#39;s objects, we
have support for merging two heaps into one, and for detecting when this is necessary.  The advantage of this design is clear: with smaller heaps, each garbage collection is cheaper.  And since we only need to run the garbage collector on heaps from which memory has been allocated, we automatically only traverse the memory of active heaps, and leave all other heaps alone.  The end result is that it doesn&#39;t matter if there are 1 or 100 open tabs; when a script triggers a garbage collection, the cost is the same.</p>

<h2>Cached compiled programs</h2>

<p>An aspect of an ECMAScript engine that performance benchmarks often don&#39;t measure is the performance of the compiler.  Compared to Futhark, the Carakan compiler is much more focused on analysing the program and generating code that will execute fast, and may therefore be slightly slower in some cases.  This is a trade-off we&#39;ve made willingly.</p>

<p>Instead of the very efficient compiler in Futhark, Carakan brings caching of compiled programs.  In practice this means that whenever a script program is about to be compiled, whose source code is identical to that of some other program that was recently compiled, we reuse the previous output from the compiler and skip the compilation step entirely.  This cache is quite effective in typical browsing scenarios where one loads page after page from the same site, such as different news articles from a news service, since each page often loads the same, sometimes very large, script library.</p>

<h2>Plans for the future</h2>

<p>Although we&#39;re nearing the release of the Carakan engine, we don&#39;t plan to stop development of it.  We have plenty of ideas on smaller and larger improvements to make, and we will also port the JIT compiler to other CPU architectures.</p>

<p>One area where we believe we can improve greatly is in memory usage, by switching to a much more efficient object representation.  Carakan will already today use less memory than Futhark in some cases, by sharing information between
similar objects via the automatic object classification system and by sharing literal data using a copy-on-write scheme, but we have plans that would reduce the size of ECMAScript objects to as little as a tenth of their current size.</p>

<p>We will also be looking at improving the performance of machine code generated for non-arithmetic code such as property accesses, where our JIT compiler currently produces significantly less stream-lined code than it does for arithmetic calculations.</p>
