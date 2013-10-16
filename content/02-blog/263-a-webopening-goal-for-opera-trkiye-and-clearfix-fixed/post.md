Title: A web-opening goal for Opera Türkiye and clearfix fixed
----
Date: 2012-05-01 11:09:06
----
Author: 
----
Text:

A month after <a href="" target="_blank">I wrote</a> how Opera Türkiye had opened up the Avea website, a large Turkish mobile phone operator that was sniffing anf blocking Opera on its website, the guys and gals have scored another brilliant goal.<br/><br/>This time, they&#39;ve used Facebook to persuade the sports portal, <a href="http://www.trtspor.com.tr/" target="_blank">trtspor.com.tr</a>, to change some CSS that hid all the homepage content from Opera. <br/><br/>It&#39;s an interesting case-study, as Opera was behaving correctly and implementing the specification properly, but the website owners hadn&#39;t tested it properly.<br/><br/>There was a super-whizzo CSS technique called <a href="http://www.positioniseverything.net/easyclearing.html">clearfix</a> that uses CSS pseudoclasses to insert content after an element, and hide it from view while clearing floats:<br/><br/><pre><code>
.clearfix:after {
    content: &quot;.&quot;;
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}</code></pre><br/><br/>Whereas other browsers implement the <code>content</code> property only on the <code>before</code> and <code>after</code> pseudo-elements, Opera allows it on any element, as defined in the specification.<br/><br/>Therefore, if a designer has erroneously copied and pasted the clearfix code and dropped the pseudo-elements, you can end up with <br/><br/><pre><code>
.clearfix  {
    content: &quot;.&quot;;
}</code></pre><br/><br/>which hides the whole element. trtspor were hiding their whole main content, which would have been immediately apparent if they&#39;d tested with Opera. <br/><br/>So, thanks to trtspor for reacting quickly when the problem was brought to their attention, and a huge <span lang="tr" title="thank you!">çok sağol to our Turkish fans!</span>
