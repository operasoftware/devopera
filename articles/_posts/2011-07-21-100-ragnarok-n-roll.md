---
title: 100% Ragnarök’n’roll
authors:
- bruce-lawson
intro: 'In February, we released a first Labs build of Ragnarök, Opera’s HTML5 parser. This is a second build, with reduced memory usage, enhanced performance and lots of bug fixes.'
tags:
- html5
- opera-12
- labs
layout: article
---

Note: the HTML5 parser is now available in our finished [Opera browser][1].

[1]: http://www.opera.com/browser/

In February, Stig showed us the [first Labs build of Ragnarök, Opera’s HTML5 parser][2]. Here’s a new build: note, this is not an Opera Next build but a Labs build with a different profile, different UA string, and outside of the Next auto-update cycle.

[2]: http://my.opera.com/core/blog/show.dml/26453141

- [Opera HTML5 parser build for Windows][3]
- [Opera HTML5 parser build for Mac][4]
- [Opera HTML5 parser build for Linux/FreeBSD][5]

[3]: http://snapshot.opera.com/labs/HTML5-Parser/Opera-Labs-HTML5-Parser-12.00-26039.en.exe
[4]: http://snapshot.opera.com/labs/HTML5-Parser/Opera-Labs-HTML5-Parser-12.00-26039.dmg
[5]: http://snapshot.opera.com/labs/HTML5-Parser/Linux-FreeBSD/

The HTML5 specification defines a set of parsing rules for all markup, whether valid or invalid. Once all browsers have HTML5 parsers, the same markup will produce the same DOM across all conforming browsers. There are two main effects of this:

- JavaScripters will sport cheerful grins and bouffant hair.
- Consumers can expect fewer interoperability problems when using their favourite site between browsers.

Since February, Stig’s been hard at work:

- Reducing memory use;
- Enhancing performance to bring you the speed you expect from Opera;
- Bug fixing: previously, we had a 99.9% pass-rate on an extensive test suite based on the html5lib tests for the parser part of the HTML 5 specification. Now that’s 100%.

Ragnarök means “Doom of the Gods” (known as Götterdämmerung by Germans and Wagner fans) — the end of the world in [Norse mythology][6]: “After the destruction, a new and idyllic world will arise from the sea and will be filled with abundant supplies. Wickedness and misery will no longer exist and gods and men will live happily together.”

[6]: http://www.pantheon.org/articles/r/ragnarok.html

An end to all wickedness arising from ill-defined error correction algorithms, and associated interoperability misery is guaranteed.
