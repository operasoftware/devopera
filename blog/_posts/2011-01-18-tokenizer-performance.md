---
title: Tokenizer Performance
authors:
- david-storey
tags:
- carakan
- performance
- syntax-highlight
- tokenizer
- dragonfly
license: cc-by-3.0
---

<p>We are currently working on new <a href="http://en.wikipedia.org/wiki/Lexical_analysis">tokenizers</a> and <a href="http://en.wikipedia.org/wiki/Syntax_highlighting">syntax highlighting</a> for the source views in the <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> Resource Service. One of the core requirements for this is performance. Everything in Opera Dragonfly is done client side with JavaScript; if you want to debug something as complex as GMail, with many large scripts the tokenizer and highlighter has to be lightning fast to give a useable experience.  This was a considerable challenge when we started Opera Dragonfly. If we tokenised and highlighted an entire script at once it would take multiple seconds for large files. Instead, we took an approach and would split the script into chunks and highlight what was visible in the script view. With this approach in place, syntax highlighting was almost instant.</p>

<p>That was back then in 2008; long before Carakan (Opera’s modern JIT based JavaScript engine) had even started development. A JavaScript performance race has waged since then. JavaScript is only one factor in performance (although the most visible PR wise), and other subsystems in Opera have also improved performance immensely in the same time period.  Examples of this include layout, painting (Opera included Vega at the same time as Carakan) and DOM performance. Opera Dragonfly is a perfect example of a complex modern application which benefits from these improvements. Benchmarks are all well and nice, but how much does Opera Dragonfly benefit from such improvements? We’ve produced a test to judge performance when performing tokenising and syntax highlighting on the large files we may encounter when debugging complex pages. The improvements are quite amazing.</p>

<div block="table">
<table>
		<thead>
				<tr>
				<th>Method</th>
				<th>Opera 11</th>
				<th>Chrome 10.0.634</th>
				<th>Firefox 4 b9</th>
				</tr><tr>
		</tr></thead>
		<tbody>
				<tr>
				 <td>dom_fragment</td>
					<td>350 ms</td>
					<td>799 ms</td>
					<td>521 ms</td>
				</tr>
				<tr>
				 <td>template</td>
					<td>372 ms</td>
					<td>816 ms</td>
					<td>597 ms</td>
				</tr>
				 <tr>
				 <td>markup</td>
					<td>294 ms</td>
					<td>380 ms</td>
					<td>701 ms</td>
				</tr>
				<tr>
				 <td>webworker</td>
					<td>308 ms</td>
					<td>270 ms</td>
					<td>469 ms</td>
				</tr>
				<tr>
				 <td>no_highlight </td>
					<td>94 ms</td>
					<td>149 ms</td>
					<td>146 ms</td>
				</tr>
		</tbody>
</table>
</div>

<p>The following tests results (in ms) are the average of 50 runs using a 250kb JavaScript file on a Windows XP machine. You can run the tests yourself by following the link to our <a href="http://scope.bitbucket.org/tests/js-highlight-performance/index.html">JavaScript tokenise and highlight performance test</a>. Your mileage may vary depending on platform and hardware specs.</p>

<p>The five tests take different approaches as outlined below:</p>

<dl>
<dt>dom_fragment</dt>
<dd>Nodes are directly appended to a document fragment</dd>
<dt>template</dt>
<dd>Uses the Opera Dragonfly template system</dd>
<dt>markup</dt>
<dd>Uses <code>innerHTML</code></dd>
<dt>webworker</dt>
<dd>Uses <code>innerHTML</code>.  Layout and creating the DOM use different processes with a WebWorker</dd>
<dt>no_highlight</dt>
<dd>The source is dirrectly rendered without tokenising and highlighting</dd>
</dl>

<p>Although we do not have full benchmark results from Opera at the time Opera Dragonfly was originally released, at that time a file of the same size took 8 seconds to tokenise and highlight. This is a real world performance boost which is enabling us to do things that were not possible only 3 years ago. The Open Web platform has come a long way in this time. Opera is the fastest browser of those tested in all tests but one: Web Workers. FireFox 4 is also competitive compared to Chrome 10 in 3 out of the 5 tests. The reason for Opera’s performance (a slight slow down) with Web Workers is quite clear. Opera currently doesn&#39;t use separate processes for Web Workers as it has traditionally been single threaded, due in the most part to the requirement of working cross platform, including on very resource constraint devices. BREW for example is one platform that is single threaded. As you can see from the Chrome results, Web Workers gives a significant performance increase for this kind of task when using multiple processes.</p>

<p>Another point to note is that there is a very noticeable slow down when enabling the Opera Dragonfly style sheet. These are the kinds of bottle necks we are identifying and working on to improve responsiveness and handling of large files. In this case it is likely that using more performant selectors such as ID and class selectors will give a good performance increase. The more complex the selector the more lookup and resolving the browser has to perform.</p>

<p>As we work on polishing and refining Opera Dragonfly for its big 1.0 release, we thought it would be useful to share with you findings such as these. We’ll be sure to pass on any useful knowledge that we gain in this process. We also plan for the tokenizers and syntax highlighting scripts to work standalone from Opera Dragonfly, so they can be incorporated in any projects that need highly performant source highlighting. We are currently working on markup (HTML and XML) and CSS tokenizers to join our current JavaScript tokenizer. We hope 3<sup>rd</sup> parties will find them as useful as we do.</p>

<p>You can follow the progress and check out the source at our <a href="https://bitbucket.org/scope/dragonfly-stp-1"> Opera Dragonfly BitBucket repository</a>.</p>
