---
title: Debugging SVG
authors:
- charles-mccathienevile
intro: 'Our lead SVG developer explains how to check that the SVG graphics you create really is compatible and working as intended.'
tags:
- svg
- debugging
- opera-9
- labs
license: os-asa
layout: post
---

Opera 9 has a lot of new features to help developing content. Here is an example of debugging SVG.

The basic plan is to have an HTML page that has a clock in it. If you look at the [broken clock][1] it simply doesn’t appear due to bugs in the code. This might seem frustrasting, but it is a good reminder that you need to get at least the minimum right or browsers will have to include megabyutes of bug correction, and spend their developers’ time fixing authors’ bugs instead of making a better browser.

[1]: /articles/debugging-svg/svg-clock-broken.svg

<figure>
	<img src="/articles/debugging-svg/error-console.gif" alt="The error console; it’s the idea that counts">
</figure>

So what’s wrong, and how do we fix it? First, let’s check for warnings. Sure enough, if you open the Error Console (Tools » Advanced » Error Console) we get two messages. One is that there is a failed attribute in SVG — the value `preserve` for `preserveAspectRatio` isn’t what the browser likes. Who is right here? Does Opera 9 even support `preserveAspectRatio`?

Luckily, we can check that. Have a look at the table of [Opera 9’s supported SVG][3] elements, attributes, and DOM methods, and we see that `preserveAspectRatio` is supported. So it is likely that we have an error in our code. Either look for a tutorial on SVG, or look at the [specification][4] . Then we can see that there are various effects we can get. Since our clock makes sense so long as we can see the middle of it, looking at the pictures in the spec, or even from reading the text shows that we want to set the value as `XmidYMid slice`.

[3]: http://www.opera.com/docs/specs/opera9/svg/
[4]: http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute

So now we know what we want to do, how do we change it? Easily enough... look at the source in Opera 9’s built-in source editor. Make the edit we want in place. To check that it works, press “reload from cache”. If we were working on a locally saved file, this would save our version. When we have downloaded the page, we can also save a local copy (you guessed it, press the “save” button).

So that’s the first error dealt with. There is also a JavaScript error — we have used `…Date()…` in the last statement of the script where we should have used `new Date()…` (or a variable, as earlier in the script). Opera actually works out how to make sense of this by forcing a type change, but good programming style is worth having, so we should make the second change too.

<figure>
	<object type="image/svg+xml" data="/articles/debugging-svg/svg-clock.svg"></object>
</figure>

And Lo! and Behold! We have a [simple SVG clock][5] in our page. Being in a space that can’t fit it exactly (the object where the clock is has width 20% and height 50%), we can at least see the middle of the clock and so tell the time…

[5]: /articles/debugging-svg/svg-clock.svg

**Note:** This article shows the features of Opera 9. While all the code is standards-compliant, it may not work in a non-compliant browser.
