---
title: 'What’s new in Opera development snapshots: 28 September 2011 edition'
authors:
- divya-manian
tags:
- opera next
- blog
layout: article
---
  <p>The biggest news for this <a href="http://my.opera.com/desktopteam/blog/2011/09/28/core-bookmark-star">snapshot</a> is that your users will no longer see an XML screen of death and instead it will be rendered to the error console.</p>
  <p>As usual, your <a href="http://www.opera.com/browser/next/">Opera Next</a> should already have this update (checking <code>opera:about</code> should give you &quot;Presto/2.9.<b>211</b> Version/12.00&quot; under <i>Browser Identification</i>) (or you can download it from the blogpost linked above).</p>
  <ul>
    <li>
      <h3>Rejoice! No more XML death notifications!</h3>
      <p><a href="http://my.opera.com/ODIN/blog/2011/09/28/no-more-xml-parsing-failed-errors">Andreas wrote in detail what this means</a>. At Opera, we loves us some HTML5. (After all, <a href="http://dev.w3.org/html5/spec/introduction.html#history-1">we started it!</a>) One of the design principles behind HTML5 is <a href="http://www.w3.org/TR/html-design-principles/#handle-errors">web users shouldn&#39;t see authoring errors</a>. So now, even with XML errors, they won&#39;t. </p>
    </li>
    <li><h3><code>rem</code> unit!</h3>
      <p>Finally! Yay! You can now use the <code>rem</code> unit! <a href="http://snook.ca/archives/html_and_css/font-size-with-rem">Jonathan Snook has a great article</a> explaining what it is and why this unit is useful. See it in action with our <a href="http://jsfiddle.net/pepelsbey/TDSUw/">CSS rem unit example</a>. This update also fixes some other bugs in CSS units which make it easier to use decimals in your calculations (300.3333333333333 anyone?)</p>
    </li>
    <li>
      <h3>Add/Remove <code>EventListener</code>&#39;s <code>capture</code> now defaults to <code>false</code></h3>
      <p>You typically add/remove an event listener with <code>addEventListener(type, listener, capture); </code> in your code. If <code>capture</code> is omited, the browser should use the value of <code>false</code>. Opera was not adding/removing event listeners which lacked the value of <code>capture</code>, but it does so now. Here is <a href="http://jsfiddle.net/2sTJj/1/">a testcase</a>.</p>
    </li>
    <p>Please do try it out and let us know if any of these do not work for you, or any other suggestions you might have!</p></ul>
