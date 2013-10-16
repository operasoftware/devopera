Title: Opera Widgets and Ajax: connecting to multiple servers
----
Date: 2010-02-09 18:48:18
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>


<h2 class="no-toc">Introduction</h2>

<p>Scripts on Web pages cannot connect to any Web server other than the one the page was loaded from. This is known as the <a href="http://en.wikipedia.org/wiki/Same_origin_policy">same-origin security policy</a> and is a cornerstone of keeping the Web safe.</p>

<p>Opera Widgets have a more liberal security model, giving widgets the ability to contact multiple servers and opening up many interesting possibilities. This also opens up some additional potential attack vectors, however, but there are ways around them – you can lock your widgets down and prevent information from being sent to random Web sites. This article describes how to do cross-site Ajax requests inside widgets and gives an example of how it can be used.</p>

<ol>
<li><a href="#sameorigin">The same-origin security policy</a></li>
<li><a href="#security">The Opera Widgets security model</a></li>
<li><a href="#crosssite">How to do cross-site AJAX in widgets</a></li>
<li><a href="#possibilities">Mashup Widgets – doing mashups in the client</a></li>
<li><a href="#techniques">Other techniques and work</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="sameorigin">The same-origin security policy</h2>

<p>Scripts running in Web pages may only download data from the server the page was loaded from. This is known as the <a href="http://en.wikipedia.org/wiki/Same_origin_policy">same-origin security policy</a>, and is in place to prohibit <a href="http://en.wikipedia.org/wiki/Cross-site_scripting">malicious scripts</a> from getting or posting potentially sensitive data to other Web sites without the user’s knowledge.</p>

<p>Note that the scripts may have been downloaded from a different server than where the page was downloaded, but the script may still only connect to the server from which the page, the main document, was loaded.</p>

<p>The same-origin security policy of course applies to Ajax applications, which use <a href="http://en.wikipedia.org/wiki/XMLHttpRequest">XMLHttpRequest</a> to read and write data from a Web server.</p>

<p>You can easily try an example out to see how the browser enforces this security policy. The following piece of JavaScript code will use <code>XMLHttpRequest</code> to read a Web page from <code>www.opera.com</code>:</p>

<pre>
<code>
var xhr = new XMLHttpRequest ();
xhr.open( &#39;GET&#39;, &#39;http://www.opera.com&#39;, false );
xhr.send();
</code>
</pre>

<a href="xhr-test.html">Try this snippet</a> and the browser will execute your script and emit this message in your JavaScript error console:

<pre>
<code>
JavaScript URL thread: &quot;javascript:var xhr = new XMLHttpRequest ();xhr.open( &#39;GET&#39;, &#39;http://www.opera.com&#39;, false );xhr.se...&quot;
Error:
name: Error
message: Security violation
</code>
</pre>

<p>In this case <code>www.opera.com</code> is off limits to the script, because this document is not loaded from Opera’s <code>www</code> server.</p>

<p>As an additional exercise, re-try the example using the domain name of the server this page was loaded from as an argument to the <code>XMLHttpRequest</code> open method.</p>

<p>In order to work around the same-origin security policy, you can set up a service on your own Web server to proxy data to and from other Web servers. The Web page will then be able to indirectly contact multiple servers. Setting this up requires significant work, in particular to avoid misuse of the proxy by others. Widgets offer a way out of this by using only client-side Web technologies.</p>

<h2 id="security">The Opera Widgets security model</h2>

<p>The Opera Widgets security model allows you to specify to which protocols, hosts, and ports the widget may connect. If no limitations have explicitly been defined, all hosts and ports may be contacted. However, you must enable network access by adding a <code>network</code> attribute with a value of one or both of ‘public’ and ‘private’ to the <code>widget</code> element in the config.xml of your widget. Access restrictions are specified using the <code>access</code> element in the widgets’s <code>config.xml</code> file.</p>

<p>Opera Widgets may thus contact most servers by default. However, accessing file:// urls is not allowed and protocols other than <code>http</code> and <code>https</code> must be explicitly specified to be accessible.</p>

<p>In order to avoid security problems due to the fact that widgets may connect to multiple servers, each widget has a private cookie and document cache. See the following article on the <a href="http://dev.opera.com/articles/view/opera-widgets-security-model/">widget security model</a> for more details of this.</p>

<p class="note">Opera has submitted the widget specification for standardization at the W3C. It is likely that the security model will be changed as part of this work.</p>

<h2 id="crosssite">How to do cross-site AJAX in widgets</h2>

<p>No magic is needed to do cross-site AJAX in widgets. You just create an <code>XMLHttpRequest</code> object and open a connection to the desired host:</p>

<pre>
<code>
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
    if ( this.readyState == 4 )
    {
        switch ( this.status )
        {
            case 200:
                handleData(xhr.responseText);
                break;
            case 400:
              //...
            //... Handle other cases
        }
    }
}
xhr.open( &#39;GET&#39;, &#39;http://www.opera.com/&#39;, false );
xhr.send();
</code>
</pre>

<p>In this example a request is sent to Opera. The entire page will be available in the <code>responseText</code> property of the <code>xhr</code> object.</p>

<p>Contacting external servers for data is the cornerstone of many widgets. Examples include getting Web cam images, images from photo galleries, map data, traffic data, weather data, and more. The typical usage is contacting a server with a public XML-based API or scraping Web pages for information.</p>

<h2 id="possibilities">Mashup Widgets – doing mashups in the client </h2>

<a href="http://en.wikipedia.org/wiki/Mashup_(web_application_hybrid)">Mashup web applications</a> combine information from multiple web sites or servers into new, creative web applications.

<p>Traditionally mashup applications are implemented on a Web server connecting to the source servers. Using Opera Widgets, mashup Web applications can be implemented entirely in the client.</p>

<p>Mashups often make use of data from publicly-available XML APIs from Web sites such as Facebook, Flickr, Google Maps, and so on. A good overview of such APIs can be found at the <a href="http://www.programmableweb.com/">ProgrammableWeb</a> Web site.</p>

<h2 id="techniques">Other techniques and work</h2>

<p>The W3C is doing work on standardizing cross-domain access. In the current draft, this is accomplished by sending special headers to allow a Web server to control what other servers the browser may connect to. See the draft on <a href="http://www.w3.org/TR/access-control/">Access Control for Cross-site Requests</a> for more details.</p>

<p>It is possible to lessen the cross-site security restrictions of most browsers by changing their settings. Versions of Internet Explorer up until version 5 allowed the user to define trusted sites or zones. Ajax calls to these sites would then be possible. Mozilla Firefox allows the user to set the <code>document.domain</code> property to a parent domain, allowing the script to access data from different subdomains.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-widgets-security-model/">Opera Widgets security model</a></li>
<li><a href="http://www.wikipedia.org">Wikipedia</a> entry on <a href="http://en.wikipedia.org/wiki/Same_origin_policy">Same origin policy</a>.</li>
<li>Wikipedia entry on <a href="http://en.wikipedia.org/wiki/XMLHttpRequest">XMLHttpRequest</a>.</li>
<li>Wikipedia entry on <a href="http://en.wikipedia.org/wiki/Cross-site_scripting">Cross-site scripting</a>.</li>
<li>Wikipedia entry on <a href="http://en.wikipedia.org/wiki/Mashup_(web_application_hybrid)">Mashups</a>.</li>
<li><a href="https://developer.mozilla.org/En/Same_origin_policy_for_JavaScript">Mozilla documentation on the same origin policy</a>.</li>
<li><a href="http://jibbering.com/2002/4/httprequest.html">Using the XML HTTP Request object</a>, tutorial at <a href="http://jibbering.com">jibbering.com</a>.</li>
<li><a href="http://www.programmableweb.com/">Programmable Web</a></li>
<li><a href="http://www.w3.org/TR/access-control/">Access Control for Cross-site Requests</a>, <a href="http://www.w3.org">W3C</a> Working Draft.</li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
      
