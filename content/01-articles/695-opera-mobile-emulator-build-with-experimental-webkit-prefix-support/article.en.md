Title: Opera Mobile Emulator build with experimental WebKit prefix support
----
Date: 2012-04-27 14:26:10
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<p>CSS vendor prefixes were introduced in CSS 2.1 for vendor-specific extensions with the warning that <a href="http://www.w3.org/TR/CSS21/syndata.html#vendor-keywords">authors should avoid vendor-specific extensions</a>. CSS Snapshot 2010 <a href="http://www.w3.org/TR/css-2010/#experimental">extended the definition</a>: &quot;Prior to a specification reaching the Candidate Recommendation stage in the W3C process, all implementations of a CSS feature are considered experimental. The CSS Working Group recommends that implementations use a vendor-prefixed syntax for such features, including those in W3C Working Drafts.&quot;</p>

<p>Opera, along with Mozilla, announced at a CSS Working Group meeting (<a href="http://lists.w3.org/Archives/Public/www-style/2012Feb/0313.html">minutes</a>) that we would support some -webkit- prefixes. This is because through our site compatibility work, we have experienced that many authors of (especially mobile) sites only use -webkit- prefixed CSS, thereby ignoring other vendor prefixes and not even including an unprefixed equivalent. This leads to a reduced user experience on Opera and Firefox, which don&#39;t receive the same shiny effects such as transitions, gradients and the like, <em>even if the browser supported those effects</em>.</p>

<p>The vendor prefix system is hard to use. It&#39;s easy to miss out a vendor prefix when copying and pasting multiple lines, or because a vendor doesn&#39;t support a certain feature while you&#39;re developing. Some specifications seem to take forever to get to the Candidate Recommendation stage at the W3C, after which vendors are supposed to unprefix their implementations. Some developers erroneously assume that mobile development equals iOS devices, so only use -webkit- prefixes because they don&#39;t know or don&#39;t care about other browsers. There are many reasons for missing out some prefixes - but the user is always the loser.</p>

<h2 id="recovery">Automatic error recovery (<a href="#recovery">#</a>)</h2>

<p>One of the <a href="http://www.w3.org/TR/html-design-principles/#handle-errors">HTML5 design principles</a> is &quot;Error handling should be defined so that interoperable implementations can be achieved. Prefer graceful error recovery to hard failure, so that users are not exposed to authoring errors.&quot;</p>

<p>CSS is not HTML, of course. But the same principle holds. Using single-vendor code on the World Wide Web that results in non-interoperability is an authoring error. In the same way that the HTML5 parsing algorithm &quot;re-writes&quot; HTML to make tags close correctly in the DOM in order to ensure interoperability, this Labs release tests reacting to certain -webkit- prefixed CSS properties as though they were -o- prefixes in order that users are not exposed to authoring errors.</p>

<h2 id="buils">Builds  (<a href="#builds">#</a>)</h2>
<p>In order to test this out, we have prepared Opera Mobile Emulator Labs builds with support for <a href="#whichones">selected</a> -webkit- prefixes.</p>
<ul>
<li><a href="http://www.opera.com/download/get.pl?id=34627&amp;sub=true&amp;nothanks=yes&amp;location=360">Opera Mobile Emulator Labs build for Mac</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34629&amp;sub=true&amp;nothanks=yes&amp;location=360">Opera Mobile Emulator Labs build for Windows</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=34628&amp;sub=true&amp;nothanks=yes&amp;location=360">Opera Mobile Emulator Labs build for Linux</a></li>
</ul>

<h2 id="whichones">Which prefixes are affected?  (<a href="#whicones">#</a>)</h2>
 
 <p>Two different types of prefixes are supported:</p>
 <h3>-webkit-linear-gradient</h3>
      <p><code>-webkit-linear-gradient</code> and <code>-o-linear-gradient</code> will behave identically and the following rules will be obeyed when evaluating styles.</p>
      <ul>
        <li>Duplicate properties will not be preserved when both <code>-webkit-linear-gradient</code> and <code>-o-linear-gradient</code> are found. Whichever comes last will override the other.</li>
        <li>Which name is in use will be tracked, so if the value is retreived from JavaScript, the prefix is remembered.</li>
    </ul>
    <h3>Properties</h3>
      <p><code>-webkit-</code> prefixed properties are supported through a CSS property aliasing mechanism, and also will obey the following rules.</p>
      <ul>
        <li>As above, when a <code>-webkit-</code> prefixed property and an <code>-o-</code> prefixed property are encountered, they are treated as instances of the same property, so the latest one (according to usual cascade rules) wins.</li>
        <li>When accessing or setting the value of a property through JavaScript, all the aliased names of a property are visible as members of the <code>CSSStyleDeclaration</code> object, and they map to the same value.
          <ul>
            <li>However, the CSSStyleDeclaration .item(*) function will return the canonical name of the alias, not the name actually used. This point may be changed in the future if it is found to cause problems.</li>
        </ul></li>
        <li><code>removeProperty</code>, <code>setProperty</code>, <code>getPropertyValue</code>, and <code>getPropertyPriority</code> all will work with aliases as described above.</li>
        <li><code>webkitTransitionEnd</code> is aliased to <code>oTransitionEnd</code> enabling the use of <code>addEventListener(&quot;webkitTransitionEnd&quot;...)</code>
          <ul>
            <li>If both <code>addEventListener(&quot;webkitTransitionEnd&quot;...)</code> and <code>addEventListener(&quot;oTransitionEnd&quot;...)</code> have been used to register a listener, only the <code>oTransitionEvent</code> will be fired.</li>
        </ul></li>
        <li>If the property name is used as the value of another property (as is the case with <code>transition-property</code>), the name that was used is preserved.</li>
        </ul>
<p>       The properties that have been aliased in this way are:</p>
    <table>
      <tr>
        <th><code>-o-</code></th>
        <th><code>-webkit-</code></th>
      </tr>
      <tr>
        <td><code>box-shadow</code></td><td><code>-webkit-box-shadow</code></td>
      </tr>
      <tr>
        <td><code>-o-transform</code></td><td><code>-webkit-transform</code></td>
      </tr>
      <tr>
        <td><code>-o-transform-origin</code></td><td><code>-webkit-transform-origin</code></td>
      </tr>
      <tr>
        <td><code>border-radius</code></td><td><code>-webkit-border-radius</code></td>
      </tr>
      <tr>
        <td><code>border-top-left-radius</code></td><td><code>-webkit-border-top-left-radius</code></td>
      </tr>
      <tr>
        <td><code>border-top-right-radius</code></td><td><code>-webkit-border-top-right-radius</code></td>
      </tr>
      <tr>
        <td><code>border-bottom-left-radius</code></td><td><code>-webkit-border-bottom-left-radius</code></td>
      </tr>
      <tr>
        <td><code>border-bottom-right-radius</code></td><td><code>-webkit-border-bottom-right-radius</code></td>
      </tr>
      <tr>
        <td><code>-o-transition</code></td><td><code>-webkit-transition</code></td>
      </tr>
      <tr>
        <td><code>-o-transition-delay</code></td><td><code>-webkit-transition-delay</code></td>
      </tr>
      <tr>
        <td><code>-o-transition-duration</code></td><td><code>-webkit-transition-duration</code></td>
      </tr>
      <tr>
        <td><code>-o-transition-property</code></td><td><code>-webkit-transition-property</code></td>
      </tr>
      <tr>
        <td><code>-o-transition-timing-function</code></td><td><code>-webkit-transition-timing-function</code></td>
      </tr>
</table>

<h2 id="choice">How did you choose these?  (<a href="#choice">#</a>)</h2>

<p>We decided to alias properties and values for which are frequently used in the wild with a -webkit- prefix and without fallback, but which we already support either under an -o- prefix or unprefixed. To determine which property was frequent, and how often it had fallbacks, we analyzed the style sheets of a large number of popular websites (Alexa top 10,000). Based on that information, we made a subjective judgment.</p> 


<h2 id="desktop">Just mobile, or desktop too?  (<a href="#desktop">#</a>)</h2>

<p>Both. Our Desktop and Mobile browsers share the same core. Testing in multiple browsers is hard enough without having to worry about subtle differences between various ports of the same browsers.</p>


<h2 id="mySite">What will happen to my site?  (<a href="#mySite">#</a>)</h2>
<p>One of the following:</p>
<ul>
<li><p>If you were just ignoring Opera, and only used -webkit- prefixes, we&#39;ve just made your site more compatible to Opera users.</p><p>
<p>In this example, the words &quot;Vital information&quot; were previously invisible to Opera, but visible in WebKit browsers. Now, they are visible in Opera too.</p>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;meta charset=utf-8&gt;
&lt;style&gt;
div {color:white; height:100px;
background: -webkit-linear-gradient(top, rgba(30,87,153,1)
 0%,rgba(125,185,232,0) 100%);
}
&lt;/style&gt;

&lt;div&gt;Vital information&lt;/div&gt;
</code>
</pre>
<p><a href="gradient-test-1.html">Test example 1</a>.</p>
</p></li> 
<li>If you weren&#39;t using -webkit- prefixes (you were using the unprefixed variant, for instance), nothing changes and you don&#39;t have to care.</li>
<li>If you&#39;ve been using both -webkit- and -o- (or unprefixed) and supplying the same value to both, it will keep working just fine and you don&#39;t need to care.</li>
 
<li><p>If you were using both -webkit- and -o- (or unprefixed), and supplied different values to each, you need to check the order in which they put things in the style sheet. Because these -o- and -webkit- prefixes are regarded as being variants of the same name, the later version will be the one that is applied, whether it is prefixed -webkit- or -o-.</p>
<p>Consider a page that for some reason sends a red gradient to Opera and a blue gradient to WebKit. If the -o- rule comes before the -webkit- rule, Opera and webkit will receive a blue gradient, because the -webkit- rule over-rides the -o- rule:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;meta charset=utf-8&gt;
&lt;style&gt;
div {color:white; height:100px;
background: -o-linear-gradient(top, rgba(255,0,0,1) 0%, rgba(125,185,232,0) 100%);
background: -webkit-linear-gradient(top, rgba(30,87,153,1) 0%,rgba(125,185,232,0) 100%);
}
&lt;/style&gt;

&lt;div&gt;Vital information&lt;/div&gt;
</code></pre>
<p><a href="gradient-test-2.html">Try example 2</a>. Note that current versions of Opera will show a red gradient, this Labs build shows a blue background.</p>
<p>In order to send a rule with different values to Opera, it must be after the -webkit- rule in the cascade (<a href="gradient-test-3.html">example 3</a>):</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;meta charset=utf-8&gt;
&lt;style&gt;
div {color:white; height:100px;
background: -webkit-linear-gradient(top, rgba(30,87,153,1) 0%,rgba(125,185,232,0) 100%);
background: -o-linear-gradient(top, rgba(255,0,0,1) 0%, rgba(125,185,232,0) 100%);
}
&lt;/style&gt;

&lt;div&gt;Vital information&lt;/div&gt;

</code></pre>
<p>We discussed having the -o- prefixed version always trump a -webkit- version, but that breaks the cascade mechanism of CSS, which make it much harder for authors to debug sites and could have many unforeseen consequences. Therefore, we ask you to make a once-only check.</p></li>
</ul>
 

 
<h2 id="behavior">What about differences in behaviors between WebKit and Opera?  (<a href="#behavior">#</a>)</h2>
<p>As far as we can tell, the behavior the properties that we have aliased is identical in WebKit and Opera, or at least close enough that the differences will not matter in practice. If it turns out that there are differences big enough to cause breakage, we will consider our options, one of which is to align the behavior of our -webkit- prefixed variant to what WebKit actually does.</p>
 


<h2 id="devlife">Isn&#39;t this going to ruin everything and make my life as a developer way more complicated?  (<a href="#devlife">#</a>)</h2>
<p>No. If you&#39;re using vendor prefixes correctly, nothing will change. If you were only using -webkit- prefixes, you get backwards compatibility for some of those in Opera, without harming your iPhone joy.</p>
 
<h2 id="interop">Why is Opera breaking the Web and interoperability?  (<a href="#interop">#</a>)</h2>
<p>We&#39;re not. We make a web browser, that allows people to access content on the web. When people block access by certain browsers, whether by omitting CSS rules or actively blocking, we have a duty to our users to access that content.</p><p>We&#39;re promoting interoperability by silently correcting errors in an entirely predictable way, to benefit users.</p>

<h2 id="past">Has similar stuff been done before?  (<a href="#past">#</a>)</h2>
 
<p>All browsers include mechanisms to deal with broken or unintended content. For example, IE6 invented DOCTYPE switching that assumed, from the lack of DOCTYPE that the developer wanted the erroneous IE5 box model. Opera and Firefox had to include bug compatibility with IE6, which is only being removed now.</p>

<p>More recently, Opera Mobile and Safari/iOS supported semicolons as delimiters between values for the viewport meta tag. The spec specifies commas, but authors were using semicolons.</p>

<p>When encountering broken XML (served as application/xhtml+xml), Opera decided to silently reparse the broken document as HTML, rendering the content to the end user, instead of showing an incomprehensible Parsing Failed error.</p>

<p>And, of course, the HTML5 parsing algorithm &quot;rewrites&quot; broken or mis-nested HTML to ensure interoperable DOMs between browsers.</p>
 
 
<h2 id="blame">Why are you levelling blame at the feet of us developers?  (<a href="#blame">#</a>)</h2>

<p>We&#39;re not. Others share the blame too:</p>

<ul>
<li> The CSS WG (that includes us) for failing to sufficiently prioritize specs that are seeing wide adoption</li>
<li>WebKit vendors for not putting much effort in standardizing their proposals, for advertising -webkit- without fallbacks, and for not dropping prefixes at all</li>
<li>The CSS WG for designing the prefix system, with all its downsides</li>
<li>Authors and clients who believed it to be legitimate to exclude people because of their browsers</li>
</ul>

<p>The point of this isn&#39;t to blame anyone. It&#39;s to get the content to the user.</p>
 
<h2 id="onlywebkit">So I only need to use -webkit- prefixes now? w00t!  (<a href="#onlywebkit">#</a>)</h2>

<p>Absolutely not. We&#39;re doing this now to ensure that there is compatibility with the 13 features we&#39;re aliasing. We hope we never need add any more and that we can drop support for these. It remains vitally important to make sure that you code for all browsers, even if they don&#39;t have support for a certain feature while you&#39;re coding. We suggest  this as a pattern that will ensure the cascade functions and any Opera-specific values are rendered:</p>
<pre><code>blah {
-webkit-foo : bar;
-moz-foo : bar;
-ms-foo : bar;
-o-foo : bar;
foo : bar;
}</code>
</pre>
<p>Added 8 May 2012:</p>
<p>We want to ensure that the vendor prefix system never gets us into this situation again. So, in parallel with this experimental build of Opera Mobile Emulator, Opera&#39;s representative on the CSS Working Group, Florian Rivoal, has a <a href="http://lists.w3.org/Archives/Public/www-style/2012May/0125.html">proposal to fix the vendor prefixing system</a>:</p>
<blockquote><p>When a browser vendor implements a new css feature, it should support it,
 from day 1, both prefixed and unprefixed, the two being aliased. If a
style sheet contains both prefixed and unprefixed, the last one wins,
according to the cascade.</p>
<p>Authors should write their style sheets using the unprefixed property,
and only add a prefixed version of the property (below the unprefixed
one) if they discover a bug or inconsistency that they need to work
around in a particular browser.</p>
<p>If a large amount of content accumulates using the a particular vendor
prefix to work around an issue with the early implementation in that
browser, the vendor could decide to freeze the behavior of the prefixed
property while continuing to improve the unprefixed one.</p>
</blockquote>
<p>(Read the <a href="http://lists.w3.org/Archives/Public/www-style/2012May/0125.html">full explanation</a>). This is <a href="http://lists.w3.org/Archives/Public/www-style/2012May/thread.html#msg125">currently being debated</a> in the Working Group.</p>
