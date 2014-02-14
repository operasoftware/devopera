---
title: Build a SVG progress bar and win prizes
authors:
- david-storey
tags:
- microsoft
- web-directions
- wai-aria
- svg
layout: article
---
<p>Opera is a long time sponsor of <a href="http://atmedia.webdirections.org/">Web Directions</a> and supporter of SVG, so when I saw their <a href="http://nobitsherlock.com/">latest contest</a>, I thought it would be of interest to our readers. Our friends at Microsoft have got together with the Web Directions crew, presumably to celebrate SVG in IE9 – and boy is it worth celebrating – to create a contest to make a progress bar using SVG.</p>

<p>The rules are simple: you have to make an accessible progress control (Hint: use WAI-ARIA), using SVG, which works in the latest version (or upcoming in the case of IE) of all major browsers, including Opera. The control should be able to indicate to the user:</p>

<ol>
    <li>when they are waiting in an indeterminant state</li>
    <li>how much a process has progressed</li>
</ol>

<p>For a full run down of the contest and rules, go to the <a href="http://nobitsherlock.com/">No Bit, Sherlock challenge</a> web site. You might even get some free stuff out of Microsoft. We at Opera love SVG, so we hope the contest is a great success, and I look forward to seeing the entries. I might even enter myself.</p>

<p>On the face of it, the contest shouldn&#39;t be hugely difficult, even for those that have never looked into SVG. SVG is XML based and supports CSS for styling and JavaScript for behaviour, so you can take over many concepts you&#39;ve learnt from writing XHTML web sites over to the SVG world. You can also use graphics editors like Illustrator or Inkscape to create the graphics if you wish. I&#39;d advise you to clean up the code that is produced if you take this route, as view source works on SVG, and the markup can be less than optimal. Jeff Schiller makes available a <a href="http://www.codedread.com/scour/">SVG Scour</a> tool to help with this process. The contest is a great way to start looking into technologies you might not have had the chance to look into before, such as SVG and WAI-ARIA.</p>

<p> One drawback is that SMIL–which is a natural candidate for the animation required by  progress control–has spotty or no support in a number of browsers, so you may need to use scripting to get the control to work once you&#39;ve designed it. You don’t have too long before the @Media conference where the prizes will be given out, so get your coding shoes on.</p>


