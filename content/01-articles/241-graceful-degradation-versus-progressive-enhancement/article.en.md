Title: Graceful degradation versus progressive enhancement
----
Date: 2009-02-03 06:38:11
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">	
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-animation/" rev="prev" title="link to the previous article in the series">Previous article—JavaScript animation</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>In this tutorial we discuss the difference between two development approaches: graceful degradation and progressive enhancement. Putting things simply, here are working definitions:</p>

<dl>
  <dt>Graceful degradation</dt>
  <dd>Providing an alternative version of your functionality or making the user aware of shortcomings of a product as a safety measure to ensure that the product is usable.</dd>
  <dt>Progressive enhancement</dt>
  <dd>Starting with a baseline of usable functionality, then increasing the richness of the user experience step by step by testing for support for enhancements before applying them.</dd>
</dl>

<p>You may think that these two approaches sound very similar, and that they should give you pretty much the same result, but there are differences to take note of, which we’ll look at below.</p>

<p>We’ll start by explaining the need for these techniques. Then we’ll look at a deeper definition, showing implementation examples and following up with a comparison and a guide to when you should use which. Let’s start by explaining why we need such special development approaches to web development.</p>

<p>The structure of this article is as follows:</p>

<ul>
  <li><a href="#constantlychanging">“Mobilis in mobile” — moving in a constantly changing environment</a></li>
  <li><a href="#gracefulprogressivenutshell">Graceful degradation and progressive enhancement in a nutshell</a></li>
  <li><a href="#gracefulprogressiveexample">An example of graceful degradation versus progressive enhancement</a>
    <ul>
      <li><a href="#printthispage">“Print this page” links</a></li>
    </ul>
  </li>
  <li><a href="#whentousewhat">When to use what</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="constantlychanging">“Mobilis in mobile” — moving in a constantly changing environment</h2>

<p>Just like Captain Nemo from “20,000 Leagues under the Sea”, web developers find themselves in a constantly changing and fluctuating environment that can be pretty hostile to what we try to achieve.</p> 

<p>The web was invented and defined to be used with any display device, in any language, anywhere you want. The only thing expected of end users is that they are using a browsing device that can reach out to the web and understand the protocols used to transmit information — http, https, ftp and so on.</p>

<p>This means that we can’t expect anything of the setup or ability of our end users. We can also be fairly sure that our experience of the web as developers is totally different to the one of the people we want to reach.</p>

<p>There is no mandatory upgrade of technologies to reach content on the internet. People and companies will stick to a defined environment and not change or upgrade just because we want them to. A lot of people only want to consume the web and are oblivious to the technologies behind it — all they expect is to be able to reach the content we promise them. It is up to operating system and browser developers to make end users keep their system up-to-date — as web developers we don’t have any say in this.</p>

<p>All of this makes for a very fragile development environment, for example offices where the default is a 9-year old browser with scripting and plugins disabled (because of security reasons), low resolutions and computers that are barely managing the load of running office software are pretty common.</p>

<p>We could now go and claim that companies like these have “missed the boat” and there is no sense in trying to support outdated technology. But this attitude can cause us to forget that these people might be very important to the success of our products. In many cases they don’t have the necessary rights to change their technical setup. When it comes to accessibility things are even more obvious: a dyslexic end user cannot understand our convoluted instructions and a blind user can’t “click the green button to continue”, even though we’ve decreed that it is needed to use our systems.</p>

<p>We work in the unknown and we need to find a way to make it work. This is where both graceful degradation and progressive enhancement come into play.</p>

<h2 id="gracefulprogressivenutshell">Graceful degradation and progressive enhancement in a nutshell</h2>

<p>You’ve already seen a simple definition above; in this section I will provide a more technical definition, and look at what it really means to implement these methodologies.</p>

<p>So, <strong>graceful degradation</strong> is the practice of building your web functionality so that it provides a certain level of user experience in more modern browsers, but it will also <em>degrade gracefully</em> to a lower level of user in experience in older browsers. This lower level is not as nice to use for your site visitors, but it does still provide them with the basic functionality that they came to your site to use; things do not break for them.</p>

<p><strong>Progressive enhancement</strong> is similar, but it does things the other way round. You start by establishing a basic level of user experience that all browsers will be able to provide when rendering your web site, but you also build in more advanced functionality that will automatically be available to browsers that can use it.</p>

<p>In other words, graceful degradation starts from the status quo of complexity and tries to fix for the lesser experience whereas progressive enhancement starts from a very basic, working example and allows for constant extension for future environments. Degrading gracefully means looking back whereas enhancing progressively means looking forward whilst keeping your feet on firm ground.</p>

<h2 id="gracefulprogressiveexample">An example of graceful degradation versus progressive enhancement</h2>

<p>Let’s take a look at an example showing one approach that uses progressive enhancement and another one using graceful degradation.</p>

<h3 id="printthispage">“Print this page” links</h3>

<p>Arguably links that allow users to print the current document are useless — hitting the printer icon in their browser does the same thing. User testing however shows that as a last step in a booking process (eg on an airline web site) they are a good re-affirming call to action. Users feel in control and get the sense of finishing what they started.</p>

<p>The issue with “print this page” links is that there is no way to link to the print button of the browser in HTML — you need JavaScript to do that. In JavaScript it is easy — the <code>window</code> object of the browser has a <code>print()</code> method that can be called to start a printout. Probably the most common way of doing that is by using the <code>javascript:</code> pseudo protocol:</p>

<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;</code></pre>

<p>This works when JavaScript is available and enabled, and the browser supports the <code>print</code> command. However, if JavaScript is not available (for example on some mobile devices) then this link will not work — clicking on it will do nothing at all. This creates an issue because, as the site developer, you promise your visitors this functionality. When they click the link and it doesn’t work they’ll feel confused and cheated and will rightfully blame you for delivering a bad user experience.</p> 

<p>In order to make this less of a problem site developers normally go for the <strong>graceful degradation</strong> approach: tell the user that the link may not be working and what the reason for that is, and maybe even suggest an alternative solution to achieve what they want to do. A common trick is to use the <code>noscript</code> element. Anything inside this element will be shown to the end user when JavaScript is not available. In our case this could be the following:</p>

<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;
&lt;noscript&gt;
  &lt;p class=&quot;scriptwarning&quot;&gt;
    Printing the page requires JavaScript to be enabled. 
    Please turn it on in your browser.
  &lt;/p&gt;
&lt;/noscript&gt;</code></pre>

<p>This is considered degrading gracefully — we explain to the user that something is wrong and how to work around the issue. However, this assumes that visitors to your site:</p>

<ul>
  <li>Know what JavaScript is</li>
  <li>Know how to enable it</li>
  <li>Have the rights and the option to enable it</li>
  <li>Feel happy about turning on JavaScript just to print a document</li>
</ul>

<p>A slight better approach would be to do this perhaps:</p>

<pre><code>&lt;p id=&quot;printthis&quot;&gt;
  &lt;a href=&quot;javascript:window.print()&quot;&gt;Print this page&lt;/a&gt;
&lt;/p&gt;
&lt;noscript&gt;
  &lt;p class=&quot;scriptwarning&quot;&gt;
    Print a copy of your confirmation. 
    Select the &quot;Print&quot; icon in your browser,
    or select &quot;Print&quot; from the &quot;File&quot; menu.
  &lt;/p&gt;
&lt;/noscript&gt;</code></pre>

<p>This gets rid of some of the issues detailed above, but it does assume that browser print functionality is identical in all browsers. Plus the fact remains — the issue with this type of approach is that we offer some functionality fully knowing that it might not work, and then have to explain ourselves. Technically there is no need for the “print this” button, which is why a progressively enhanced approach to the same problem doesn’t assume that it’ll work.</p>

<p>If we were to solve this problem using <strong>progressive enhancement</strong>, the first step would be to find out if there is a non-scripting way of printing the page. There isn’t, which actually means that a link is the wrong choice of HTML element to use. If you want to provide functionality that is only available with JavaScript you should use buttons: by definition <a href="http://www.w3.org/TR/html401/interact/forms.html#push-button">buttons are there to support scripting functionality</a>. As the W3C spec says:</p>

<blockquote cite="http://www.w3.org/TR/html401/interact/forms.html#push-button">push buttons: Push buttons have no default behavior. Each push button may have client-side scripts associated with the element&#39;s event attributes. When an event occurs (e.g., the user presses the button, releases it, etc.), the associated script is triggered.</blockquote>

<p>The second step is to not assume that the user has JavaScript enabled and that the browser can print. Instead we just tell the user flat out that they need to print the document and leave the “how” up to them:</p>

<pre><code>&lt;p id=&quot;printthis&quot;&gt;Thank you for your order. Please print this page for your records.&lt;/p&gt;</code></pre>

<p>This works in any case. For the rest of the functionality we use <a href="http://onlinetools.org/articles/unobtrusivejavascript">unobtrusive JavaScript</a> to add a print button only when the browser supports it:</p>

<pre><code>&lt;p id=&quot;printthis&quot;&gt;Thank you for your order. Please print this page for your records.&lt;/p&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
(function(){
  if(document.getElementById){
    var pt = document.getElementById(&#39;printthis&#39;);
    if(pt &amp;&amp; typeof window.print === &#39;function&#39;){
      var but = document.createElement(&#39;input&#39;);
      but.setAttribute(&#39;type&#39;,&#39;button&#39;);
      but.setAttribute(&#39;value&#39;,&#39;Print this now&#39;);
      but.onclick = function(){
        window.print();
      };
      pt.appendChild(but);
    }
  }
})();
&lt;/script&gt;</code></pre>

<p>Notice how defensive the script is — we don’t assume anything.</p>

<ul>
  <li>By wrapping the whole functionality in an anonymous function and immediately executing it — this is what <code>(function(){})()</code> does — we don’t leave any global variables behind.</li>
  <li>We test for DOM support and try to get the element we want to add the button to.</li>
  <li>We then test if the element exists and if the browser has a <code>window</code> object and a <code>print</code> method (by testing if the <code>type</code> of this property is <code>function</code>).</li>
  <li>If both are true, we create a new click button and apply <code>window.print()</code> as the click event handler.</li>
  <li>The last step is to add the button to the paragraph.</li>
</ul>

<p>This will work for every user regardless of technical environment. We never promise the user an interface element that doesn’t work — instead we only show it when it does work.</p>

<h2 id="whentousewhat">When to use what</h2>

<p>I might be an idealist but I really dislike the idea of graceful degradation. By building something and then making it barely work in other environments (or asking users to upgrade) I make a lot of assumptions about both the environment and the ability of the users to upgrade.</p>

<p>I find myself using a Blackberry when this laptop cannot find a wireless network and get very frustrated when web products tell me they need JavaScript enabled and I should turn it on. I can’t, and surely I’m an eligible user of your products — especially when I pay a lot of money for GPS or EDGE access to your services.</p>

<p>However, <strong>graceful degradation</strong> becomes viable in a few situations:</p> 

<ul>
  <li>You retrofit an old product and you don’t have the time, access or insight to change or replace it.</li>
  <li>You just don’t have time to finish a product with full progressive enhancement (often a sign of bad planning or running out of budget).</li>
  <li>The product you have is an edge case, for example very high traffic sites where every millisecond of performance means a difference of millions of dollars.</li>
  <li>Your product by definition is so dependent on scripting that it makes more sense to maintain a “basic” version rather than enhancing one (Maps, email clients, feed readers).</li>
</ul>

<p>In all other cases, <strong>progressive enhancement</strong> will make both the end users and you happier:</p> 

<ul>
  <li>Regardless of environment and ability you deliver a product that works.</li>
  <li>When a new browser comes out or a browser extension becomes widely adopted you can enhance to yet another level without having to touch the original solution — graceful degradation would require you to alter the original solution.</li>
  <li>You allow technology to be what it is supposed to be — an aid to reach a goal faster than without it, not a “must” to be able to reach a goal in the first place.</li>
  <li>If you need to add new features, you can do so after checking if they are supported at a certain stage, or you can add it to the most basic level of functionality and make it better in more sophisticated environments. In any case, the maintenance happens at the same spot and not in two different places. Keeping a progressively enhanced product up-to-date is much less work than maintaining two versions.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>It can be said that both progressive enhancement and graceful degradation try to do the same thing: keep our products useful to every user. Progressive enhancement is a more sophisticated and at the same time stable way of assuring that but it takes more time and effort. Graceful degradation can be used more easily as a patch for an already existing product; it means harder maintenance later on, but requires less initial work.</p>

<h2 id="exercises">Exercise Questions</h2>

<ul>
  <li>The article showed print links as an example that could use either approach. What other examples can you think of?</li>
  <li>Say you want to use JavaScript to make sure that a form field contains an email address before the form is submitted. What would be the different approaches and what other problems should be taken into consideration?</li>
  <li>Say you want to display a map and you want to use progressive enhancement. What would be the base functionality you would start from?</li>
  <li>Say you have an interface that consists of two dropdown form controls. Selecting an option in the first will change the available options in the second one. What could be a fallback for this kind of control? What issues could there be with it?</li>
</ul>

<ul class="seriesNav">	
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-animation/" rev="prev" title="link to the previous article in the series">Previous article—JavaScript animation</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/241-51-graceful-degradation-versus-progressive-enhancement/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
      
