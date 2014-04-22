---
title: Happy first birthday to Blink
authors:
- bruce-lawson
intro: 'Twelve months ago today, I stayed up past my bedtime to blog about the new rendering engine, Blink, being forked from WebKit. As it’s Blink’s first birthday, let’s take a brief look at where we’ve got to.'
tags:
- blink
license: cc-by-3.0
layout: post
---

Twelve months ago today, I stayed up past my bedtime to [blog about the new rendering engine, Blink][1], being forked from WebKit.

[1]: http://www.brucelawson.co.uk/2013/hello-blink/

As it’s Blink’s first birthday, let’s take a brief look at where we’ve got to. On day one, I quoted Opera’s Head of Web Technology, Lars Erik Bolstad (my boss’ boss) saying “Our ambition is to contribute Opera’s browser engine expertise to Blink, ranging from the implementation of new web standards to improvements in existing code”. In the last twelve months, Opera has committed many [bug-fixes and standards enhancements to Blink][2], as well as to Chromium and V8.

[2]: http://operasoftware.github.io/upstreamtools/#blink

I also said “I also hope that it’s easier for smaller players and even individuals to contribute to the new rendering engine”. I’m especially pleased that Yoav Weiss, a freelance developer, will be [implementing][3] the [<picture> element][4] in Blink. This has been a real _community effort_; [I suggested <picture> in 2011][5] along with others who later formed the [Responsive Images Community Group][6] stewarded by Mat Marquis. Mat, Yoav, Marcos Caceres of Mozilla, Tab Atkins of Google and Opera’s Simon Pieters worked on the spec together.

[3]: http://alistapart.com/blog/post/bringing-responsive-images-to-browsers
[4]: http://picture.responsiveimages.org
[5]: http://www.brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/
[6]: http://responsiveimages.org/

A fundraiser was started, with Opera Developer Relations pledging $1000, and the target’s been met so work can begin. This means we’ll see `<picture>` in Blink-based browsers, and Gecko-based browsers soon. ([You can still donate][7]!)

[7]: https://www.indiegogo.com/projects/picture-element-implementation-in-blink

That’s the first year; what of the next? [Blink’s 2014 goals][8] are to

[8]: https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/Z5OzwYh3Wfk/IWooaY5FZowJ

> Exit 2014 much more mobile-awesome. Primarily this means improving Blink’s performance on less-powerful devices. Blink should be hands-down the best performing mobile web engine.

Opera has many years experience in tuning rendering engines to work on less-powerful devices. This is how we’ve managed to bring the World Wide Web to the whole wide world for 18 years, and using our expertise to help Blink realise this goal helps us with our mission. Work’s already begun. It’s going to be an exciting second year.
