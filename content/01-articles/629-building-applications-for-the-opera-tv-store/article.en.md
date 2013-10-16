Title: Building applications for the Opera TV Store
----
Date: 2012-02-10 01:29:34
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

<div class="note">
<p>Update history:</p>
<ul>
<li>18 April 2012: new section for currently known limitations of the Opera TV Store.</li>
<li>27 August 2012: explicit note about lack of support for third-party multimedia plugins.</li>
<li>5 September 2012: removed the requirement for inclusion of the Opera TV Store API.</li>
<li>20 January 2013: added note about modal dialogs and lack of support for <code>alert()</code>, <code>prompt()</code> and <code>confirm()</code></li>
</ul>
</div>

<ul class="toc">
<li><a href="#introduction">Introduction</a></li>
<li><a href="#building">Building your application</a></li>
<li><a href="#requirements">Requirements specific to Opera TV Store applications</a>
<ul>
<li><a href="#requirements-resolution">Resolution</a></li>
<li><a href="#requirements-navigation">Navigation and functional keys</a></li>
<li><a href="#requirements-modal-dialogs">Modal dialogs</a></li>
<li><a href="#requirements-plugin-flash">Multimedia plugins / Flash</a></li>
<li><a href="#requirements-closing">Closing applications</a></li>
<li><a href="#requirements-limitations">Limitations of current implementations</a></li>
</ul></li>
<li><a href="#submitting">Submitting to the Opera TV Store</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>The Opera TV Store is a moderated, hosted catalogue of TV-specific web applications. Developers can submit and share their apps through this portal. It presents end users with a storefront (itself a web-based application) which allows them quick and easy access to the applications.</p>

<div>
  <img src="http://forum-test.oslo.osa/kirby/content/articles/629-building-applications-for-the-opera-tv-store/sample-views.png" alt="Sample Opera TV Store and an application" />
  <p class="caption">Sample Opera TV Store and a sample weather application</p>
</div>

<p>Applications in the Opera TV Store will be presented as static thumbnail images in a dashboard. Users are able to browse the TV Store catalogue and &quot;install&quot; applications, adding them to their dashboard. Selecting an application launches it in full-screen mode.</p>

<div>
  <img src="http://forum-test.oslo.osa/kirby/content/articles/629-building-applications-for-the-opera-tv-store/architecture.png" alt="Opera TV Store architecture diagram" />
  <p class="caption">A simple overview of the Opera TV Store architecture</p>
</div>

<p>The full-screen web applications themselves are not hosted directly on Opera&#39;s servers. The Opera TV Store only acts as a directory, with references to the actual URLs of the applications.</p>

<h2 id="building">Building your application</h2>

<p>Applications for the Opera TV Store are, in essence, regular web applications, which are rendered by a customised version of <a href="http://www.opera.com/business/devices/">Opera Devices SDK</a> browsing environment on the user&#39;s TV. As such, developers can tap into all the traditional web technologies (HTML5, CSS 3, JavaScript, SVG) supported by the Opera browser. See our documentation on <a href="http://www.opera.com/docs/specs/">web specifications supported by Opera</a> (and in particular our comparison of <a href="http://www.opera.com/docs/specs/productspecs/">support in different Opera product lines</a>) for a thorough breakdown.</p>

<p>Although the Opera Devices SDK is built on the same core rendering engine as our desktop browsers, there are still platform-specific APIs and subtle integration differences that developers need to be aware of. For this reason, it is recommended that developers test their applications on an actual TV running the Opera TV Store and/or with the <a href="http://www.opera.com/developer/tools/">Opera TV Emulator</a>.</p>

<p>Developing web content for TV brings with it its own challenges – from a difference in user interaction to considerations regarding device capabilities and performance optimisation. For an introduction to some of the necessary adaptations and techniques see our documentation on <a href="http://dev.opera.com/articles/view/creating-web-content-for-tv/">creating web content for TV</a> and other articles in our <a href="http://dev.opera.com/tv/">TV section</a>.</p>

<h2 id="requirements">Requirements specific to Opera TV Store applications</h2>

<p>Due to the way in which applications will be integrated into, and launched from, the Opera TV Store, developers need to be aware of the following additional requirements:</p>

<h3 id="requirements-resolution">Resolution</h3>
<p>All TV Store applications have to support 1280×720 resolution. Other common TV resolutions (1920×1080, 960×540) are currently not supported. Although the TV Store browser itself supports regular scrolling, applications should be designed not to require scrolling, and if needed should provide their own custom mechanisms for displaying long lists of items or content.</p>

<h3 id="requirements-navigation">Navigation and functional keys</h3>
<p>The Opera TV Store is designed to use the standard four-way directional keys on a remote control for spatial navigation. Authors should test that their applications work correctly using the default spatial navigation built into the Opera TV Store browser. Authors may also choose to handle the navigation of their application themselves by intercepting key presses from the remote control. As the exact key codes for remote control functional keys varies between different devices, the Opera TV Store browser provides built-in constants (tailored to the device currently running the TV Store). See the article on <a href="http://dev.opera.com/articles/view/functional-key-handling-in-opera-tv-store-applications/">Functional key handling in Opera TV Store applications</a> for further details.</p>

<h3 id="requirements-modal-dialogs">Modal dialogs</h3>
<p>As the standard JavaScript methods for <code>alert()</code>, <code>prompt()</code> and <code>confirm()</code> are not supported on all platforms that run the Opera TV Store (since they require platform integration), applications that needs modal dialogs (such as data entry prompts or general alerts/messages) need to provide these using HTML/CSS/JavaScript – which also allows for these modal dialogs to be styled in line with the rest of the application.

<h3 id="requirements-plugin-flash">Multimedia plugins / Flash</h3>
<p>The Opera TV Store does not provide support for any third-party plugins, such as Adobe Flash. Any multimedia features and functionality needed by an application must be implemented using HTML5 technologies such as <code>&lt;canvas&gt;</code> or the native support for <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements.</p>

<h3 id="requirements-closing">Closing applications</h3>
<p>Once an application is launched from the dashboard, it is effectively opened full screen in a new window. The Opera TV Store browser (based on the Opera Devices SDK, responsible for rendering the applications and the TV Store itself) does not present any standard interface elements to the user – it runs as a completely &quot;chromeless&quot; browser, with no address bar or back button. Users will be able to close the application and return to their dashboard via the remote control&#39;s <em>EXIT</em> and/or <em>RETURN</em> key. Developers should nonetheless provide an explicit option or button in their UI to close the application, with a simple call to the <code>window.close()</code> method.</p>

<h3 id="requirements-limitations">Limitations of current implementations</h3>

<p>There are known limitations in some of the current devices that are shipping with the Opera TV Store, generally due to the way certain features have been integrated on the devices by the manufacturers and which version of the TV Store software has been used.</p>
<ul>
<li>Missing <a href="http://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/">CORS (Cross-Origin Resource Sharing)</a> support: if your application relies on cross-origin resources (particularly via <code>XMLHttpRequest</code>), you will need to implement some form of proxy on your application&#39;s origin domain to relay the resources from other domains.</li>
<li>Due to the integration with external media playback frameworks on certain devices, it may not be possible to guarantee simultaneous playback of more than a single <code>audio</code> or <code>video</code> element.</li>
</ul>

<h2 id="submitting">Submitting to the Opera TV Store</h2>

<p>Once your application is ready, it can be submitted to the Opera TV Store. Log in to the <a href="http://publish.tvstore.opera.com/">Opera TV Store – Submission portal</a> and follow the steps required in the submission dialog.</p>
<p class="note">This article summarises the most important guidelines that applications need to follow for inclusion in the Opera TV Store. Further restrictions and requirements are listed in the <strong>acceptance criteria</strong> of the <a href="https://publish.tvstore.opera.com/guidelines/">Opera TV Store application publishing guidelines</a>. Please ensure that your application fulfills those criteria – as well as the best practices and suggestions laid out in our developer articles – before submitting your application.</p></p>
