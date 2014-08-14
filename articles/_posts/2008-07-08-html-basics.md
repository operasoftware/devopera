---
title: The Basics of HTML
authors:
- mark-francis
intro: 'In this article you will learn the basics of HTML — what it is, what it does, its history in brief, and what the structure of an HTML document looks like. The articles that follow this one will look at each individual part of HTML in much greater depth.'
tags:
- html
license: cc-by-nc-sa-2.5
---

## Introduction

In this article you will learn the basics of HTML — what it is, what it does, its history in brief, and what the structure of an HTML document looks like. The articles that follow this one will look at each individual part of HTML in much greater depth. The structure of this article is as follows:

- [What HTML is](#whatishtml)
- [What HTML looks like](#htmllooks)
- [The history of HTML](#htmlhistory)
- [The structure of an HTML document](#htmlstructure)
- [The syntax of HTML elements](#htmlsyntax)
- [Block level and inline elements](#blockinline)
- [Character references](#characterreferences)
- [Summary](#summary)

## What HTML is {#whatishtml}

Most desktop applications that read and write files use a special file format. For example, Microsoft Word understands “.doc” files and Microsoft Excel understands “.xls”. These files contain the instructions on how to rebuild the document the next time you open it, what the contents of that document are, and “metadata” about the article such as the author, the date the document was last modified, even things such a list of changes made so you can go back and forth between versions.

HTML (HyperText Markup Language) is a language to describe the contents of web documents. It uses a special syntax containing markers (called “elements”) which are wrapped around the text within the document to indicate how user agents should interpret that portion of the document.

The technical term “user agents” is used here rather than “web browsers”. A user agent is any software that is used to access web pages on behalf of users. There is an important distinction to be made here — all types of desktop browser software (Internet Explorer, Opera, Firefox, Safari, Chrome etc.) and alternative browsers for other devices (such as the Wii Internet channel, and mobile phone browsers such as Opera Mini and WebKit on the iPhone) are user agents, but not all user agents are browser software. The automated programs that Google and Yahoo! use to index the web to use in their search engines are also user agents, but no human being is controlling them directly.

## What HTML looks like {#htmllooks}

HTML is just a plain textual representation of content and its general meaning. For example, the code for the “The Purpose of HTML” header above looks like:

	<h2 id="htmllooks">What HTML looks like</h2>

The `<h2>` part is a marker (which we refer to as a “tag”) that means “what follows should be considered a second level heading”. The `</h2>` is a tag to indicate where the end of the second level heading is (which we refer to as a “closing tag”). The opening tag, closing tag and everything in between is called an “element”. Many people use the terms element and tag interchangeably however, which is not strictly correct. The `id="htmllooks"` is an attribute; you’ll learn mroe about these later on.

In most browsers there is a “Source” or “View Source” option, commonly under the “View” menu. If you have the option, choose it now and spend some time looking at the HTML source for this page.

## The history of HTML {#htmlhistory}

In the article [The history of the internet and the web][1] you learned a little about how the modern Web came about. When Tim Berners-Lee invented the World Wide Web, he created both the first web server and web browser and [the first version of HTML][2].

[1]: http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/ (the history of the web)
[2]: http://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/MarkUp.html (The first ever version of HTML)

Whilst HTML has changed considerably since the first days, a lot of the content of modern-day HTML is embodied in that first documentation and more than half of the “tags” described in the original “HTML tags” document still exist.

As more people started writing web pages and alternatives to the original browser software, more features were being added to HTML. Many were adopted universally (such as the `img` element used to insert an image into a document, first implemented in NCSA Mosaic). Some were more proprietary and really only used in one or two browsers. There was a growing need for standardisation — so that authors of other web browsing software had a document (called a “specification”) that definitively described to them what HTML looked like so they could judge whether or not they were missing out on implementing some parts of HTML.

The IETF (Internet Engineering Task Force — a standards body concerned with inter-operability across the internet) published a draft proposal of HTML in 1993. This expired without becoming a standard in 1994, but prompted the IETF to create a working group to look at HTML standardisation.

In 1995, “HTML 2.0” was written, taking ideas from the original HTML draft. An alternate proposal called HTML+ was also written by Dave Raggett, which was used as a basis for many of the new elements implemented by browsers (such as the method for inserting images into documents, pioneered by NCSA Mosaic).

A draft of HTML 3.0 followed later that year, but work on that version was discontinued because of a lack of support for the direction from browser makers. HTML 3.2 dropped many of the new features of 3.0, and instead adopted many of the creations of the then-popular browsers Mosaic and Netscape Navigator.

In 1997, the W3C published HTML 4.0 as a recommendation that adopted more browser-specific extensions but also attempted to rationalise and clean up HTML. This was done by marking various elements as deprecated — which means the elements are obsolete and whilst they still exist in this version they will be removed in a later revision. This was to encourage better and more semantic use of HTML in documents (described in more detail in [The web standards model][3] article).

[3]: http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/ (the web standards model)

HTML 4.01 was published in 1999, with some errata noted in 2001. This is the latest version of HTML, although HTML 5 is currently being drafted.

In 2000, the W3C also published the XHTML 1.0 specification, which was HTML re-structured to be a valid XML document.

## The structure of an HTML document {#htmlstructure}

The smallest valid HTML document possible would be something like this:

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html>
	<head>
		<title>Example page</title>
	</head>
	<body>
		<h1>Hello world</h1>
	</body>
	</html>

The document first starts with a document type element, or doctype (described in more detail in the [Choosing the right doctype…][4]). This describes which type of HTML is being used — so that browsers can determine how to interpret the document, and work out whether it is following the rules it says it is going to follow.

[4]: http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/ (choosing the right doctype)

After this, you can see the opening tag of the `html` element. This is a wrapper around the entire document. The closing `html` tag is the last thing in any HTML document.

Inside the `html` element, there is the `head` element. This is a wrapper to contain information about the document (the metadata). This is described in more detail in [the next article][5]. Inside the head is the `title` element, which defines the “Example page” heading in the menu bar.

[5]: http://dev.opera.com/articles/view/13-the-html-head-element/ (article about the HTML head)

After the `<head>` element there is a `<body>` element, which is the wrapper to contain the actual content of the page — in this case, only a level-one header (`<h1>`) element, which contains the text “Hello world.” And that’s our document in full.

As you can see, elements often contain other elements. The body of the document will invariably end up involving many nested elements. Page divisions create the overall structure of the document, and will contain subdivisions. These will contain headings, paragraphs, lists and so on. Paragraphs can contain elements that make links to other documents, quotes, emphasis and so on. You will find out more about these elements as the series progresses.

## The syntax of HTML elements {#htmlsyntax}

As you have already seen, a basic element in HTML consists of two markers around a block of text. There are some elements that do not wrap around text, and in almost every case elements can contain sub-elements (such as `html` containing `head` and `body` in the example above).

Elements can also have attributes, which can modify the behaviour of the element and introduce extra meaning.

	<div id="masthead">
		<h1>The Basics of
			<abbr title="Hypertext Markup Language">
				HTML
			</abbr>
		</h1>
	</div>

In this example a `<div>` element (page division, a way of breaking documents into logical blocks) has had an `id` attribute added, and this has been given a value of `masthead`. The `<div>` contains an `<h1>` element (first, or most important level header), which in turn contains some text. Part of that text is wrapped in an `<abbr>` element (used to specify the expansion of abbreviations), which has the attribute of `title`, the value of which is set to `Hypertext Markup Language`.

Many attributes in HTML are common to all elements, though some are specific to a given element or elements. They are always of the form `keyword="value"`. The value should be surrounded by single or double quotes (in some circumstances the quotes can be left out, but this is not a good practice in terms of predictability, understanding and clarity — you should _always_ put quotes around your values).

[Attributes and their possible values are mostly defined by the HTML specifications][6] — you cannot make up your own attributes without making the HTML invalid, as this can confuse user agents and cause problems interpreting the web page correctly. The only real exceptions are the `id` and `class` attributes — their values are entirely under your control, as they are for adding your own meaning and semantics to your documents.

[6]: http://www.w3.org/TR/html401/index/attributes.html (HTML attributes spec)

An element within another element is referred to as being a “child” of that element. So in the above example, `<abbr>` is a child of the `<h1>`, which is itself a child of the `<div>`. Conversely, the `<div>` would be referred to as a “parent” of the `<h1>`. This parent/child concept is important, as it forms the basis of CSS and is heavily used in JavaScript.

## Block level and inline elements {#blockinline}

There are two general categories of elements in HTML, which correspond to the types of content and structure those elements represent — block level elements and inline elements.

Block level means a higher level element, normally informing the structure of the document. It may help to think of block level elements being those that start on a new line, breaking away from what went before. Some common block level elements include paragraphs, list items, headings and tables.

Inline elements are those that are contained within block level structural elements and surround only small parts of the document’s content, not entire paragrahs and groupings of content. An inline element will not cause a new line to appear in the document, they are the kind of elements that would appear in a paragraph of text. Some common inline elements include hypertext links, highlighted words or phrases and short quotations.

## Character references {#characterreferences}

One last item to mention in an HTML document is how to include special characters. In HTML the characters `<`, `>` and `&` are special. They start and end parts of the HTML document, rather than representing the characters less-than, greater-than and ampersand.

One of the earliest mistakes a web author can make is to use an ampersand in a document and then have something unexpected appear. For example, writing “Imperial units measure weight in stones&pounds” could actually end up appearing as “…stones£s” in some browsers.

This is because the literal string `&pound;` is actually a character reference in HTML. A character reference is a way of including a character into a document that is difficult or impossible to enter using a keyboard, or in a particular document encoding.

The ampersand (`&`) introduces the reference and the semi-colon (`;`) ends it. However, many user agents can be quite forgiving of HTML mistakes such as leaving out the semi-colon, and treat `&pound;` as a character reference. References can either be numbers (numeric references) or shorthand words (entity references).

An actual ampersand has to be entered into a document as `&amp;`, which is the character entity reference, or as `&#38;` which is the numeric reference. [A full chart of character references can be found on evolt.org][7].

[7]: http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/ (entity reference chart)

## Summary {#summary}

In this article, you have learned the basics of HTML, where it has evolved from and have some insight into the structure of an HTML document. We will now continue to describe the `<head>` section of an HTML document in some more detail, before continuing to address the `<body>` content.
