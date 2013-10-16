Title: MAMA explains how JavaScript is placed in a document
----
Date: 2009-06-30 14:49:04
----
Author: 
----
Text:

<p>
JavaScript, together with HTML and CSS, forms the trinity of the web.
</p>
<p>
Long gone were the days when people asked about scripts, we have to distinguish between JavaScript, VBScript or others. This shows how much JS has come in cementing itself as the scripting language of the frontend web.
</p>
<p>
Because there is no strict requirement on how JS should be placed in a document, some people have come up with creative ways. Opera&#39;s metadata mining engine - MAMA shows us.
</p>
<p>
<ul>
<li>
Script before HTML: 237
</li>
<li>
Script between HTML and HEAD: 89
</li>
<li>
Script in HEAD: 9229
</li>
<li>
Script between HEAD and BODY: 739
</li>
<li>
Script in BODY: 9128
</li>
<li>
between end BODY and end HTML: 223
</li>
<li>
Script after HTML: 2649
</li>
</ul>
</p>
<p>
As we can see, and know, the majority of the code is placed in the BODY and HEAD.  
</p>
<p>
But there are a good number that are actually placed after HTML. Seeminlgy, there are increasing advocates that encourage JS to be placed at the end of the code, on the basis of better performance.  This is supported by <a href="http://developer.yahoo.com/performance/rules.html" target="_blank">Yahoo&#39;s best practices to speed up the web</a>, suggesting to put your script at the bottom of the page.
</p>
<p>
Another way of performance-boosting is to place the JS right before the BODY closes. This is done by some tracking code such as Google analytics. Since tracking code is usually non-interactive, there is little chance that users might invoke the JS event that hasn&#39;t finished loading.
</p>
<p>
Certainly, putting the JS early in the code ensures that functions for, say,a button are loaded before a user can click on it. We don&#39;t want desperate users clicking on the button before the page finishes loading only to to get an error ( since the JS script tied to the button hasn&#39;t finish loading).
</p>
<p>
An alternative suggestion that often comes up is to use deferred scripts. The DEFER attribute indicates that the script does not contain document.write, and is a clue to browsers that they can continue rendering. Unfortunately, not all browser supports the DEFER attribute.
</p>
<p>
Apart from how JavaScript is placed in documents, MAMA has also extracted other interesting things. Amongst them an <a href="http://my.opera.com/ODIN/blog/2009/05/19/opera-mama-a-sneak-peek-at-headings-images-and-summary" target="_blank">analysis on the image, heading and summary tag</a>. You can also URL=<a href="http://dev.opera.com/articles/view/mama/]read" target="_blank">http://dev.opera.com/articles/view/mama/]read</a> more about MAMA findings[/URL].
</p>
