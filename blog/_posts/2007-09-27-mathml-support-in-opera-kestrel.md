---
title: Can Kestrels Do Math? MathML Support in Opera Kestrel
authors:
- charles-mccathienevile
intro: 'Traditionally, Mathematical formulas have been hard to represent using good old fashioned CSS and HTML, but a solution does exist. First, MathML, a specialised Markup language tailored specially for dealing with Math on web pages, has been around for a while. Second, the W3C has recently created a working draft called [the MathML for CSS profile](http://www.w3.org/TR/mathml-for-css/) which deals with displaying MathML using CSS. In this article, Charles McCathieNevile shows you how you can test drive this technology early using Opera Kestrel.'
tags:
- html
- mathml
- opera-9
license: cc-by-nc-sa-2.5
layout: post
---

## Introduction

As the new Opera 9.5 takes shape, and you download new “weeklies” (keep checking [the Opera desktop team blog for new weeklies][1],) there are a number of improvements and new features you will see. Most of them are listed in the changelogs when they are put into the build, and you find out about them when they are first released.

[1]: http://my.opera.com/desktopteam/blog/

But there's more! One improvement that you won't find there yet, which we have been working on diligently behind the scenes is MathML support, and you can actually try it out now, before it is released. More specifically, we have been working on the [MathML for CSS profile][2], a W3C working draft describing a large set of MathML features that can be implemented by any browser with good CSS support. Since this effectively includes all modern browsers, it means a simple way to have MathML widely supported in normal web browsers, without having to rely on a plugin.

[2]: http://www.w3.org/TR/mathml-for-css/

## How to set it up

So how can you see it before we release it? Well, it is pretty simple really. First save [the magic stylesheet][3] that accompanies this article to a location on your HDD, then set Opera's display preferences (for supporting other browsers, see later on in the article) to use this stylesheet by default. You do this by going to “Preferences…”, then selecting “Advanced Preferences > Content”, and then clicking on the “Style Options” button, as seen in Figure 1.

[3]: /articles/mathml-support-in-opera-kestrel/mathml.css

<figure id="figure-1">
	<img src="/articles/mathml-support-in-opera-kestrel/prefs.jpg" alt="Setting style options in Opera Kestrel">
	<figcaption>Figure 1: The “Style Options…” button in the Opera 9.5 preferences</figcaption>
</figure>

There are a couple of things you need to do here. The first is to set the location of “My Style Sheet” to the style sheet you have downloaded, by clicking “Choose…” and selecting it in the file navigator, which should give you a display like the one shown in Figure 2. (Note that if you already have your own style sheet, you can add the rules there — but in that case I assume you know how to do it.)

<figure id="figure-2">
	<img src="/articles/mathml-support-in-opera-kestrel/display.jpg" alt="The Opera Kestrel display options">
	<figcaption>Figure 2: The Display options in the preferences of Opera 9.5</figcaption>
</figure>

When you are finished in this dialog, select the “Presentation Modes” tab, to reveal the screen shown in Figure 3.

<figure id="figure-3">
	<img src="/articles/mathml-support-in-opera-kestrel/presopt.jpg" alt="The Opera Kestrel presentation modes options">
	<figcaption>Figure 3: The Presentation Modes options in the preferences of Opera 9.5</figcaption>
</figure>

Here you need to decide whether you want to apply the stylesheet in the default presentation mode (“Author mode”), “User mode” (which you can switch to on any page,) or both. In my personal setup, I have it as a user mode option (hence the “My style sheet” box being checked on the “User mode” side, but not the “Author mode” side.) The main reason I have done this is that applying a great big stylesheet to every page on the Web results in a performance hit, and I don't read a lot of MathML.

Finally, if you decide you only want this in User Mode, you probably want the button to switch modes somewhere handy. I decided to put it on my Status bar, with the other display options I use a lot. Pick the bar you want it on, right click, and select customize. Choose the “Buttons” tab and add the “Author mode” button, from the “Browser View” set, as seen in Figure 4.

<figure id="figure-4">
	<img src="/articles/mathml-support-in-opera-kestrel/buttons.jpg" alt="Setting a custom button in Opera Kestrel to change between user and author mode">
	<figcaption>Figure 4: Adding the User/Author mode switcher button can save you a lot of hassle in this case</figcaption>
</figure>

Now, you are ready to look at some MathML — download the sample XHTML documents from [here][8] and [here][9] and try running them and playing with them!(Remember, if you only set it up for User mode, you will have to turn on User mode with the button you just installed). The output you get should be along the same lines as Figure 5:

[8]: /articles/mathml-support-in-opera-kestrel/stress.xhtml
[9]: /articles/mathml-support-in-opera-kestrel/torture.xhtml

<figure id="figure-5">
	<img src="/articles/mathml-support-in-opera-kestrel/screen.jpg" alt="Sample MathML output">
	<img src="/articles/mathml-support-in-opera-kestrel/screen2.jpg" alt="More sample MathML output">
	<figcaption>Figure 5: Some sample MathML output to whet your appetite</figcaption>
</figure>

As this is still at the experimental stage, we certainly appreciate feedback — are you using it, are there things that don't work (we know some of these already of course, but feel free to tell us in case we missed something,) and where have you found this useful? The best way to provide feedback is to join the my.opera.com MathML group, found [here][12], or post to this article's forum, found at the bottom of this page — see the “Discuss this article” link.

[12]: http://my.opera.com/mathml/about/

## Working with the Web at large

If you are using this stylesheet, some of the MathML you find “in the wild” will come out beautifully, because it matches the profile already. Some won't, because it relies on some other kind of MathML (as well as the constructs that are not included in the MathML for CSS profile, there are two entire dialects within the one markup language, which makes it a little complicated).

One way to increase adoption is to make this work with multiple browsers. The main stylesheet really requires Opera Kestrel to work — as well as high-quality CSS support, it relies on support for the following:

- URIs (relatively common)
- The ability to install a user stylesheet (relatively common, but different for each browser)
- The ability to use SVG as a background image (currently available only in Opera).

This [slightly less pretty stylesheet][13] using PNG images should mostly work in very recent versions of other browsers.

[13]: /articles/mathml-support-in-opera-kestrel/mathml-old.css

## Summary

As we move forward with this, we think it is important to work with the developers of authoring tools and site content to get them to provide the widest possible coverage — and your help here is of course appreciated. Whether you publish some MathML and make it fit the profile, or use a tool and want the authors to make it easier to produce MathML for CSS, or work on another browser and want to improve its MathML support, we would love to hear what you have done — see above for the feedback mechanisms we have provided!

## Resources

1. [The Opera desktop team homepage][14]
2. [The W3C MathML for CSS profile working draft][15]
3. [The MathML stylesheet][16]
4. The example XHTML documents to be styled using [mathml.css][16] — [stress.xhtml][17] and [torture.xhtml][18].

[14]: http://my.opera.com/desktopteam/
[15]: http://www.w3.org/TR/mathml-for-css/
[16]: /articles/mathml-support-in-opera-kestrel/mathml.css
[17]: /articles/mathml-support-in-opera-kestrel/stress.xhtml
[18]: /articles/mathml-support-in-opera-kestrel/torture.xhtml
