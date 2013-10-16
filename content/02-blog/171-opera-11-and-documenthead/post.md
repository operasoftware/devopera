Title: Opera 11 and document.head
----
Date: 2010-11-23 23:27:52
----
Author: 
----
Text:

<br/><br/><br/><br/>As David <a href="http://my.opera.com/ODIN/blog/first-browser-to-11-unless-chrome-gets-there-first" target="_blank">mentioned</a>, Opera 11 has now the javascript method <code><a href="http://www.w3.org/TR/html5/dom.html#dom-document-head" target="_blank">document.head</a></code> for accessing the head of an html document. The way to do that before was <br/><br/><pre><code>document.getElementsByTagName(&#39;head&#39;)[0]</code></pre><br/><br/>And you can still use this method. But we are always looking on improving speed for our code. So what is more effective? <a href="http://jsperf.com/document-head" target="_blank">jsperf</a> helps us to find out. Results? <code>document.getElementsByTagName(&#39;head&#39;)[0]</code> is 70% to 80% slower than <code>document.head</code>.<br/><br/>Speed matters.
