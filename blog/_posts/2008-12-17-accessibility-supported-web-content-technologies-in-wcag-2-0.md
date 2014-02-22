---
title: Accessibility Supported Web Content Technologies in WCAG 2.0
authors:
- henny-swan
tags:
- wcag
- wai-aria
- accessibility
- odin
layout: post
---
<p>A new concept in <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 is <a href="http://www.w3.org/TR/WCAG20/#accessibility-supported">accessibility supported</a> web content technologies. This has confused a few people and also raised the wider question of what technologies are in fact accessibility supported?</p>

<p>Under WCAG 2.0 the idea is to use web technologies (HTML, AJAX, Flash, DOM Scripting) that support accessibility. By supporting accessibility this means assistive technologies (screen readers, screen magnifiers, refreshable braille displays, voice input) are able to programatically determine the meaning of content that the user is accessing i.e. the web content works with the browser and the assistive technology. A real world example of this is how before <abbr title="Microsoft Active Accessibility">MSAA</abbr> support was added to Flash (a web content technology) screen readers were unable to access Flash at all whereas now, with MSAA added, they can. So where previously Flash didn&#39;t support accessibility now it does.</p>

<p><a href="http://www.w3.org/TR/WCAG20/#programmaticallydetermineddef">Programatically determined</a> basically means a piece of information is machine readable by browsers and/or assistive technologies. In other words information can be communicated to the user by reading the HTML, DOM etc. It doesn&#39;t therefore need to be visible to someone browsing a web page, but rather the information is included within the page in such a way that the browsers and/or assistive technologies can access and relay that information. An example of this is how the SUMMARY attribute on a data table is read out by a screen reader to a blind user but not visible to the sighted user.</p>

<p>So in short accessibility supported web content technologies are ones that assistive technologies and browsers can understand and communicate back to the user.</p>

<p>Ideally accessible websites should be built using accessibility supported web technologies but as a developer the problem is knowing what technology is accessible in combination with any given browser or assistive technology. How do you know, for example, if Jaws 8 can handle a slider or an expandable menu? In addition to this what are the differences in support between versions of assistive technologies, is Jaws 9 better than Jaws 8? These are essential things to know for a web developer who is building accessible web pages.</p>

<p>While the <abbr title="World Wide Web Consortium">W3C</abbr> puts forward this concept they are leaving it to the community to  create a list of accessibility supported technologies. One such repository of information I&#39;ve come across is a <a href="http://wiki.codetalks.org/wiki/index.php/Set_of_ARIA_Test_Cases ">test cases for WAI ARIA</a> page on <a href="http://wiki.codetalks.org/wiki/index.php/Main_Page">Codetalks</a>. Codetalks is a wiki that covers making Rich Internet Applications (RIA), in other words JavaScript and AJAX, accessible using the <a href="http://www.w3.org/WAI/intro/aria">Accessible Rich Internet Application</a> specification from the Web Accessibility Initiative (WAI ARIA).</p>

There&#39;s some good information up there and some great contributors so well worth a look. Content is also licensed by <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons</a> and therefore freely available to re-use.
