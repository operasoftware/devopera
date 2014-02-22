---
title: Native JSON Support in Opera
authors:
- hallvord-steen
tags:
- opera
- json
- coreblog
layout: post
---
A while ago I was asked to do quality assurance on our upcoming <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> implementation. We support the JSON grammar and API specified in ECMAScript edition 5, <a href="http://www.ecmascript.org/docs/tc39-2009-043.pdf" target="_blank">ES5</a>. ES5 was still being edited and changed while we were implementing and testing, but with the patient help of members of the ES-discuss list I got a <a href="http://testsuites.opera.com/JSON/" target="_blank">test suite</a> written and aligned with the upcoming spec. Stanislav - our JSON-implementor - had to be patient with me as tests were continually changing their pass conditions. For example, one day we were testing for the presence of a certain method, then the next day its absence!

At this point our implementation is considered ready for release, and I&#39;m pretty excited about it - it was a pleasure to test, and Opera&#39;s native JSON support is going to be fast, strict, safe and standards-compliant. According to our tests our implementation is the fastest one at parsing -
<table border="1" style="border-collapse:collapse"><tr><th colspan="2"><a href="http://testsuites.opera.com/JSON/performance/001.html" target="_blank">Simple parse</a></th></tr>
<tr><td>Opera</td><td>150 000 times/second</td></tr>
<tr><td>Safari</td><td>127 000 times/second</td></tr>
<tr><td>IE</td><td>41 000 times/second</td></tr>
<tr><td>Firefox</td><td>37 500 times/second</td></tr></table>
though we&#39;re a bit slower than the others at serializing:
<table border="1" style="border-collapse:collapse"><tr><th colspan="2"><a href="http://testsuites.opera.com/JSON/performance/002.html" target="_blank">Simple stringify</a></th></tr>
<tr><td>Safari</td><td>71 000 times/second</td></tr>
<tr><td>Firefox</td><td>61 800 times/second</td></tr>
<tr><td>IE</td><td>57 000 times/second</td></tr>
<tr><td>Opera</td><td>55 800 times/second</td></tr></table>
..so there is a bit of work left on optimizing that. Keep in mind that this is with our existing JavaScript engine - the new <a href="http://my.opera.com/core/blog/2009/02/04/carakan" target="_blank">Carakan engine</a> gives JSON parsing a solid boost too!

Also, as you would expect from Opera, our JSON support is following the standard very closely. We are pretty standards-compliant, better than IE8 and Firefox 3.5, and on par with Safari 4.

Actually, make that <i>almost</i> standards-compliant. There are a couple of extremely odd edge case bugs that most likely won&#39;t cause you any problems - and there is <strong>one spec violation that we&#39;ve decided to keep</strong>. Blame me for that decision, since I asked Stanislav to break his perfectly compliant implementation and ignore the specification here. Sincere apologies to <a href="http://www.crockford.com/" target="_blank">Douglas &quot;Mr. JSON&quot; Crockford</a>...

Why violate the specification?

Let&#39;s take a step back: JSON has become hugely popular on the Web. It&#39;s a simplistic and flexible format for data exchange, parses quickly and integrates well with programming languages. It looks like (and is named after) a JavaScript object literal, so it&#39;s not surprising that JavaScript authors make good use of it, traditionally parsing it with <strong>eval()</strong>, loading it directly into a <strong>SCRIPT</strong> element, or using a custom parser written in JavaScript.

For certain use cases JSON is replacing XML for data exchange, mainly since it can be parsed faster. However, the languages have something in common: both have <a href="http://en.wikipedia.org/wiki/Draco_(lawgiver)" target="_blank">Draconian</a> error handling.

Draconian error handling in JSON? Indeed, except it&#39;s nowhere near as controversial as XML&#39;s Draconianness, because JSON looks and feels like a programming language. We&#39;re all used to having to match our quotes and curly braces when programming. However, the spec grammar has a few additional constraints - a few points where correct JSON is different from and stricter than normal JavaScript source code, such as:

<ul class="bullets"><li> No hexadecimal number formats are allowed - <strong>{&quot;number&quot;:0x1}</strong> is wrong!</li><li> Strings must be quoted with double quotes, not single - <strong>{&quot;string&quot;: &#39;a string&#39;}</strong> is wrong!</li><li> TAB characters may not appear inside strings - <strong>{&quot;tab&quot;:&quot;there is a tab -&gt;	&lt;- here&quot;}</strong> is wrong! The spec requires using \t instead of a literal TAB character.</li></ul>

The point of these constraints is to keep the syntax and JSON language simpler. However, when browsers start adding native JSON support, our implementations will enforce those constraints - something parsing JSON with <strong>eval()</strong> or <strong>SCRIPT</strong> tags never did. Hence, we&#39;re going to deal with potential compatibility issues with invalid JSON.

The spec rule Opera is going to violate for now is the one about not allowing tab characters inside strings. Currently all other browsers allow it (and if your browser fails <a href="http://testsuites.opera.com/JSON/correctness/035.html" target="_blank">this test case</a>, it does too). I would like us to align with the spec, but I&#39;m worried that we might break websites that do not escape tabs in their JSON data. If there are such &quot;compatibility taxes&quot; to be paid, I&#39;d rather not have our users pay them.

As an example of what might break, I sent my GMail address an E-mail with a tab character in the subject field, and saw that GMail passed the tab around in its JSON data, unescaped. If GMail is using the browser&#39;s native JSON parsing and we follow the spec, somebody could then prevent your inbox from loading in Opera by sending you a message with tabs in the subject. And given the current browser implementations it would only break your GMail in Opera...

All browser developers discussing this on the es-discuss list have comitted to aligning strictly with JSON grammar - so <strong>it should be only a matter of time before other major browsers do the right thing</strong>. When others pass  <a href="http://testsuites.opera.com/JSON/correctness/035.html" target="_blank">the test</a> <strong>we&#39;ll certainly follow</strong>. Meanwhile, enjoy faster and safer web applications thanks to a quality JSON implementation soon shipping in an Opera browser near you.

