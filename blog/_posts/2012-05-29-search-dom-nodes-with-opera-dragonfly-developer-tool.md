---
title: Search DOM Nodes With Opera Dragonfly Developer Tool
authors:
- karlcow
tags:
- search
- developer-tools
- web-inspector
- dom
- dragonfly
- odin
license: cc-by-3.0
---

During a workshop at <a href="http://sudweb.fr/2012/" target="_blank">SudWeb Conference</a>, <a href="http://blog.mozilla.org/webdev/author/aricaudmozilla-com/" target="_blank">Anthony Ricaud</a> (Mozilla) and <a href="http://my.opera.com/karlcow" target="_blank">I</a> decided to run a session on Web developer tools to identify the frustrations and the desired features for <a href="http://my.opera.com/dragonfly/blog/" target="_blank">Web developer tools such as Opera Dragonfly</a>.<br/><br/><a href="http://borisschapira.com/" target="_blank">Boris Schapira</a> expressed that it was hard to have a useful search when inspecting the DOM. He didn&#39;t know about the search feature in Opera Dragonfly. <br/><br/>When you &quot;Inspect Element&quot;, you get the usual Dragonfly window, then on the right side, there is a search tab (&quot;Rechercher&quot; in my French UI. Yes it is even multilingual!).<br/><br/><span class='imgcenter'><img alt='' src='/blog/search-dom-nodes-with-opera-dragonfly-developer-tool/dragonfly-search.png' /></span> <br/><br/>Let say, I want to search for all elements containing the <code>class</code> attribute with <code>articlelist</code> value. Simple. I select CSS, then I enter the CSS selector expression <code>.articlelist</code>. As we can see below, it displays two nodes.<br/><br/><span class='imgcenter'><img alt='' src='/blog/search-dom-nodes-with-opera-dragonfly-developer-tool/dragonfly-search-selector.png' /></span> <br/><br/>I would like to have a more detailed list of nodes. I create a CSS selector expression with <code>.articlelist li</code> to get all the <code>li</code> children elements of <code>.articlelist</code> (as you would do to target it in a stylesheet).<br/><br/><span class='imgcenter'><img alt='' src='/blog/search-dom-nodes-with-opera-dragonfly-developer-tool/dragonfly-search-selector-2.png' /></span> <br/><br/>The list is more complete. Finally, when clicking on the list of matching nodes on the right side, Dragonfly displays:<br/><br/><ul class="bullets"><li>The matched DOM node on the left</li><li>the matched node box in the viewport</li></ul><br/><br/>Pretty useful!<br/><br/><span class='imgcenter'><img alt='' src='/blog/search-dom-nodes-with-opera-dragonfly-developer-tool/dragonfly-search-match.png' /></span> <br/><br/>Oh and… in the search form, you may use: plain text, CSS selectors, Regex, XPath expressions. Enjoy!<br/><br/>
