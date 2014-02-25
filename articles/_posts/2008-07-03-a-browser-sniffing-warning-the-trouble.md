---
title: 'A Browser Sniffing Warning: The Trouble With Acid3 and TinyMCE'
authors:
- hallvord-steen
intro: 'In this article Hallvord Steen provides a warning about browser sniffing and why it is such a bad thing, by examining a recent bug discovered in Opera relating to compatibility with the TinyMCE editor. He also suggests a fix to this problem, involving “bug detection”, a useful technique that can be applied to many other situations.'
tags:
- acid
- sniffing
- opera-9
- tinymce
layout: article
---

## The history of a JavaScript bug and things we can learn from it

Once upon a time, a shiny new release of Opera exposed a rather nasty bug in a very popular JavaScript library: Opera 9.5 didn’t work properly with the [TinyMCE][1] editor, causing severe text editing problems in WordPress’s admin screen, webmail applications and message boards worldwide. How could that happen? Read on for the important lesson hidden in Opera’s bug report number 335463.

[1]: http://tinymce.moxiecode.com/

## Timeline

- On March 3rd 2008, the [Acid3 test][2] was considered finished and officially released.
- On March 5th [one of the bugs that prevented Opera from passing Acid3][3], summarised as “ranges collapse when nodes are inserted”, was verified fixed in Opera’s core. The fix slowly made its way into public previews of Opera 9.5.
- On May 18th somebody trying out weekly builds of Opera 9.5 first reported weird issues with the TinyMCE editor: the Enter key messed up the text instead of creating new paragraphs.

[2]: http://acid3.acidtests.org/
[3]: http://tc.labs.opera.com/dom/range/003.htm

Unfortunately there was another open bug related to the Enter key and it was not until June 5th that we realised the problem in TinyMCE was worse than in the other editors. Whenever you pressed Enter, paragraphs would end up in the wrong order so content would appear “scrambled”. It was a pretty weird and somewhat funny effect to see whole paragraphs reordering themselves randomly.

## The TinyMCE bug

After some analysis, we discovered the following snippet of JavaScript in the TinyMCE code that deals with `Enter` key presses:

	// Opera needs this one backwards
	if (isOpera) {
		r.insertNode(bef);
		r.insertNode(aft);
	} else {
		r.insertNode(aft);
		r.insertNode(bef);
	}

Now, I don’t intend to pick on TinyMCE developers in particular. It’s one of the most widely-used rich text editors, and there are many things to like about it — it’s relatively light, very configurable and extensible through a “plugin” architecture. This very code shows that they have put quite some testing and work into being compatible with Opera!

So why is that `if(isOpera)` part there? The answer is “for historical reasons”. The bug we fixed on March 5th to pass Acid3 had caused them problems, and this is their workaround. In this specific case, the bug caused multiple nodes inserted into a range to appear in the wrong order.

However, detecting Opera and inserting content in the reverse order to work around our old bug now caused pretty bad problems in Opera 9.5. Stuck between a rock and a hard place, we had to choose whether to pass Acid3 or be compatible with TinyMCE! If we stuck to the correct implementation, we would get one more point on Acid3 but TinyMCE would break on millions of websites.

## History bites

A brief history lesson to illustrate the original Opera 9.2x bug will help you to understand the workaround. Consider this paragraph:

	<p>This is filler text</p>

After running a JavaScript like the following…

	var range = document.createRange(); // A “range” is a bit like a text selection made and manipulated from JavaScript.
	range.setStart( p.firstChild, 5 ); // first character inside text node is 0th
	range.setEnd( p.firstChild, 13 ); // so here we select the 6th through 14th

…the range will point to the 6th through to the 14th character of the text node inside the `p` tag — the text highlighted in yellow below.

`<p>This is filler text</p>`

Now you can insert another word into the sentence with the following script:

	range.insertNode(document.createTextNode(' truly '));

The output from this would be:

`<p>This truly is filler text</p>`

The new text node is inserted at the start of the range.

Now, here comes the bug: in Opera 9.2x doing so would collapse the range — rather than the word “truly” being added to our yellow selection you would get something like the following:

`<p>This truly is filler text</p>`

In other browsers you could go on to do this:

	range.insertNode(document.createTextNode(' really, '));

Which would produce the following sentence:

`<p>This really, truly is filler text</p>`

Because of the location of the collapsed range however Opera 9.2x would output this:

`<p>This truly is filler really, text</p>`

(Actually this description is a bit simplified. There were some other conditions before the bug occurred, mainly that the range would have to cover more than one single text node.)

The TinyMCE developers noticed that by inserting content in the reverse order — first `really,` then `truly` — you would achieve the same output as in the other browsers for a collapsed range. We must bear in mind though that when our core bug is fixed, this workaround will of course end up reversing the expected order of paragraphs or sentences!

## Tiny fix

Luckily for us, the TinyMCE developers are very responsive to change requests and before long a fix was checked in and scheduled for next TinyMCE 3.x release. The fix is as follows:

	// Opera needs this one backwards for older versions
	if (isOpera && parseFloat(opera.version()) < 9.5) {
		r.insertNode(bef);
		r.insertNode(aft);
	} else {
		r.insertNode(aft);
		r.insertNode(bef);
	}

It works, but it’s not what you would call an elegant solution, since it makes use of browser sniffing and version detection. Not to mention that we still struggle with compatibility problems until those millions of websites have upgraded. Seeing that many of them are still using TinyMCE 2.x it’s unlikely that this problem will ever go away completely.

## Bug detection

The TinyMCE/Opera 9.5 compatibility problem is a textbook example of why browser sniffing should be avoided at all costs. While it may seem like a quick and simple shortcut to work around a bug in the short term, browser sniffing creates a **maintenance nightmare** further down the road. With renewed competition in the browser space, vendors are pushing out upgrades and new versions every year, and every time you assume a certain behaviour because of the browser’s name your compatibility with future versions is at risk.

Also, whether you develop your own site or write script libraries that will run on thousands of other websites, the chances are that mistakes you make today will stay on the web for years to come, preventing users from upgrading to newer and better browsers because sites they want to use break.

What if you could detect that the bug is present, and not bother detecting the browser at all? It turns out that you can often replace browser detection with “bug detection”.

Given the above analysis, we now understand the bug well enough to try to write some code to detect it. A script is needed that creates a range, inserts some content, and checks what order it appears in. Here is one suggested approach:

	// Create a separate document to test in,
	// to avoid adding debugging stuff to our working document
	var doc = document.implementation.createDocument('', 'test', null);
	// Add some content
	doc.documentElement.appendChild( doc.createTextNode(' test'));
	// Create range (make sure we create it in the test document)
	var r = doc.createRange();
	r.selectNodeContents(doc.documentElement);
	// Insert something
	r.insertNode(doc.createTextNode(' world'));
	// And some more into the range
	r.insertNode(doc.createTextNode('hello'));
	// Content should be inserted at start of node,
	// so what we inserted last is .firstChild
	var has_range_collapse_bug = doc.documentElement.firstChild.data != 'hello';

[Here is a finished test script][4], which shows two ways to check if the bug is present (there are probably other ways to discover it too). If that code ran while TinyMCE was loading and set a variable you could later check to discover the right order to insert contents for your particular browser, rather than the ugly browser sniffing method.

[4]: /articles/a-treat-for-nokia-n9-users-opera-mobile-labs-11.5/tinyrng.htm

## Goodbye browser detection?

Whenever you feel tempted to solve a problem with the inelegant browser sniffing hack, take a moment to ask yourself if there is a simple way to detect the bug instead. Done right, the **“detect the bug, not the browser”** rule of thumb will make maintaining your site much easier whenever a new browser or browser version is released.

Bug detection reduces your future workload, helps your visitors, and is healthier for the web. You’ll never resort to browser sniffing again, right?
