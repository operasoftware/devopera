---
title: 'HTML5 Compliance: The Next Step'
authors:
- bruce-lawson
intro: 'Making its debut in a Labs build this week is [Ragnarök](http://en.wikipedia.org/wiki/Ragnarök), our implementation of the HTML5 parsing algorithm. We’d love you to try to break this and give us feedback, so please grab a copy to install on your machine…'
tags:
- html5
- html5-parser
- opera-11
- labs
layout: article
---

Note: the HTML5 parser is now available in our finished [Opera browser][1].

[1]: http://www.opera.com/browser/

Making its debut in a Labs build this week is [Ragnarök][2], our implementation of the HTML5 Parsing algorithm. We’d love you to try to break this and give us feedback, so please grab a copy to install on your machine from one of the download links below.

[2]: http://en.wikipedia.org/wiki/Ragnarök

- [Opera 11 with new HTML 5 parser for Windows][3]
- [Opera 11 with new HTML 5 parser for Mac][4]

[3]: http://snapshot.opera.com/labs/ragnarok/Opera_1150_24581_en.exe
[4]: http://snapshot.opera.com/labs/ragnarok/Opera_11.50_24581.dmg

## The coolest HTML5 demo you’ll see this week

The Web is littered with `<canvas>` games, HTML5 video players, drag-and-drop whizz-bangs and other demos of HTML5 and “HTML5”. But here’s a really cool demo, probably the coolest you’ll see this week. Are you ready? Here goes:

	<b><i>Yo!</b></i>

I can tell you’re impressed, so let’s dig deeper to see exactly why it is so cool. The elements are incorrectly nested: the innermost element — in this case, the `<i>` — should be the first one closed. What does this do to the DOM in different browsers?

We can check this out using Opera Dragonfly and its equivalents, or [Ian Hickson’s DOM viewer][5]. Internet Explorer 9 and Safari 5 result in this innerHTML:

[5]: http://software.hixie.ch/utilities/js/live-dom-viewer/?%3C!DOCTYPE%20html%3E%0D%0A%3Cb%3E%3Ci%3EYo!%3C%2Fb%3E%3C%2Fi%3E

	<!DOCTYPE HTML>
	<html><HEAD></HEAD><BODY>
	<B><I>Yo!</I></B><I></I>
	</BODY></html>

while Opera, Firefox and Chrome produce this:

	<!DOCTYPE HTML>
	<html><HEAD></HEAD><BODY>
	<B><I>Yo!</I></B>
	</BODY></html>

All the browsers have sorted out the mis-nesting, but inconsistently: note that IE and Safari have an additional empty `<i>` element that Opera, Firefox and Chrome don’t have. Which is correct? In an HTML4 world, both are. The HTML4 spec describes what to do with good markup, but not what to do with bad markup — and we know that [95% of the Web doesn’t validate][6]. Therefore, browsers have traditionally been left to their own devices and forced to guess what to do with bad markup, as error-handling was never defined for HTML4.

[6]: http://dev.opera.com/articles/view/mama-markup-validation-report/

Our simple markup above already produces very different DOMs, so imagine what would result from more real world examples of tag soup with dozens or hundreds of elements. Writing JavaScript that has to operate across browsers with such inconsistencies is a major cause of hair loss and weeping amongst web developers.

Luckily, there is now a solution to this.

## The HTML5 parsing algorithm

The HTML5 specification defines a [set of parsing rules][7] for all markup, whether valid or invalid. Once all browsers have HTML5 parsers, the same markup will produce the same DOM across all conforming browsers. There are two main effects of this:

[7]: http://dev.w3.org/html5/spec/parsing.html#parsing

- JavaScripters will sport cheerful grins and bouffant hair
- Consumers can expect fewer interoperability problems when using their favourite site between browsers

## So validation is a thing of the past, right?

Absolutely not. It’s still a vital QA tool, and just because the HTML5 parser will produce an interoperable DOM, it doesn’t mean it’s the DOM you actually want!

## Opera’s implementation

Our old HTML parser has basically been the same since Opera began 15 years ago. It’s been continually patched to keep up with changing standards and countless different ways people came up with to not follow the specifications. After all the changes here and there, the code really started to look like a over-decorated christmas tree, and adding more stuff without knocking over the tree was getting increasingly hard.

With the decision to rewrite the entire parser came the opportunity to clean up the design significantly.

We can now proudly say that the new Ragnarök parser has a 99.9% pass-rate on an extensive test suite based on the html5lib tests for the parser part of the HTML 5 specification. The missing last 0.1% is going to be fixed before Ragnarök’s golden release. The test suite will also be publicly released once completed so that you can verify it yourself and compare Opera to the other browsers out there.

Ragnarök also scores 11 out of 11 (plus two bonus points) on the somewhat non-comprehensive (and therefore rather misleading) [html5test.com][8]. (The two bonus points are for parsing [embedded SVG and MathML in HTML5][9].)

[8]: http://html5test.com/
[9]: http://people.opera.com/brucel/articles/html5-mathml-svg.html

### Memory consumption

The main reason we kept our old parser for so long was its efficient memory usage when handling bad markup. Instead of duplicating nodes like the HTML5 specification states, our parser had a intricate system of pointers that indicated which nodes should have been duplicated. This saved it from allocating memory to actually duplicating the element data, but also made the code that traversed the data structure more complex. Now we have switched to copying the nodes, it uses slightly more memory. Before the final release we will minimize that side effect — Opera has always been about memory efficiency, and working on smaller devices too.

### Performance

It’s not obvious now, because this technical preview isn’t optimized for speed like the golden releases will be, but another advantage of the rewrite has been an increase in parser performance. Since the time taken parsing the markup of a page is relatively small compared to loading and rendering, this will not affect benchmarks dramatically, but all performance improvements are for the better, right?