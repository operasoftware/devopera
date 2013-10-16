Title: Opera 10.5 pre-alpha for Labs
----
Date: 2011-11-24 11:02:54
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div id="content">
  <p> We have just released Opera 10.5 pre-alpha for Labs. This pre-alpha is based on the Evenes branch and includes Windows, Mac, and UNIX builds (see below for download link). </p><p> As you may know, we don’t typically open new versions to user-testing this early in the development cycle. However, we are really excited about what the Desktop team is cooking up and want your feedback. </p><p> Many of you have been asking for a glimpse of Carakan, our new ECMAScript/JavaScript engine, and an update to our HTML <code> &lt;video&gt; </code> support. With this release you&#39;ll be able to play with them and a few other new technologies that will hopefully be part of our next major release. </p><p> Some disclaimers: What you’re downloading today is a feature-incomplete and likely unstable development build. Please handle with care, backup your data before you install and do not run in hydroelectric power plants. <h2> What’s new </h2>
  <h3> Inside </h3>
  <ul>
    <li>
      <h4> Carakan </h4>
      </li><p> Carakan is our new JavaScript engine. It’s fast, more than 7x faster in <a href="http://www2.webkit.org/perf/sunspider-0.9/sunspider.html"> SunSpider </a> than Opera 10.10 with Futhark on Windows (Mac optimization is not as far along). You can read more gritty details regarding register-based bytecode, automatic object classification and native code generation in the <a href="http://my.opera.com/core/blog/2009/02/04/carakan"> Opera Core blog </a> . <div class="graph sunspider">
        <h5> SunSpider Javascript Benchmark (runs per minute) </h5>
        <dl class="clear">
          <dt> Carakan </dt><dd class="carakan"> 144.93 </dd><dt> Futhark </dt><dd class="futhark"> 19.63 </dd></dl>
        <p><i> Higher is better. Performed in Windows 7, Core2Duo 6550 2.33 GHz. </i></p></div>
    </p><li>
      <h4><code> &lt;video&gt; </code></h4>
      </li><p> This build features a long-awaited update to our support for the HTML5 <code> &lt;video&gt; </code> element, allowing native playback and control of video inside the browser. It has been much improved since our <a href="http://dev.opera.com/articles/view/a-call-for-video-on-the-web-opera-vid/"> first proof of concept </a> was released in 2007. Check out Philip Jägenstedt&#39;s <a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video"> (re-)Introducing &lt;video&gt; </a> article for all the details. </p><li>
      <h4> Presto 2.5 </h4>
      </li><p> We are now using Presto 2.5, which contains a huge numbers of improvements. It also includes support for <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/"> CSS3 transitions and transforms </a> , and more HTML5 features like persistent storage. </p><li>
      <h4> Vega </h4>
      </li><p> Vega is our <a href="http://my.opera.com/core/blog/2009/02/04/vega" title="Opera Core Concerns - Vega - Opera&#39;s vector graphics library"> new graphics library </a> . It’s currently software-based and displays everything you see on-screen. Vega can be hardware accelerated, but as you can see from the complex graphics benchmark in Peacekeeper, we don’t seem to need it yet. (Note that Futuremarks&#39; Peacekeeper test does no include the results of their complex graphics tests in the overall score. We believe this is wrong in 2009 and will simply be silly if not changed in 2010.) <div class="graph peacekeeper">
        <h5> Peacekeeper Complex Graphic Benchmarks </h5>
        <dl class="clear">
          <dt> Opera 10.5 (Vega) </dt><dd class="vega"> 8513 </dd><dt> Opera 10.10 </dt><dd class="current"> 2657 </dd></dl>
        <p><i> Higher is better. Performed in Windows 7, Core2Duo 6550 2.33 GHz. </i></p></div>
  </p></ul>
  <h3> Outside </h3>
  <ul>
    <li>
      <h4> Platform integration </h4>
      <ul>
        <li> On Windows 7/Vista, you will notice a lot of visual changes and use of APIs, which allow the UI to display the Aero Glass effect. For Windows 7, we also added Aero Peek and Jump List support to help you easily access your Speed Dials, Tabs, etc. from the Taskbar. </li><li> For Mac, a complete rewrite in Cocoa brings a Unified Toolbar, native buttons and scrollbars, multi-touch gestures (try 3-Finger Swipe Left/Right or Pinch to zoom) and a bunch of other small details. We also added <a href="http://growl.info/"> Growl </a> notification support. </li></ul>
    </li><li>
      <h4> “Private tab” and “Private window” </h4>
      </li><p> You can open a new Private tab or Private window that forgets everything that happened on it once closed. </p><li>
      <h4> Non-modal dialogs </h4>
      </li><p> Dialog boxes (JavaScript alerts, HTTP authentication, etc.) are now non-modal and are displayed as a page overlay. This allows you to switch tabs or windows while the dialog is still displayed. Similarly, the Password Manager dialog is now anchored at the top of the page won’t block any content as it loads a new page. </p><li>
      <h4> Address field and Search field improvements </h4>
      </li><p> Both fields have been upgraded in looks and functionality. They can now remember searches, support removing items from history and show results in a better layout. </p></ul>
  <div class="screens"><a href="win7_new_addressbar.jpg"> <img alt="Windows7 New Addressbar" height="160" src="http://forum-test.oslo.osa/kirby/content/articles/509-opera-105-prealpha-for-labs/win7_new_addressbar_t.jpg" /> </a> <a href="win7_jumplist.jpg"> <img alt="Windows7 Jumplist" height="160" src="http://forum-test.oslo.osa/kirby/content/articles/509-opera-105-prealpha-for-labs/win7_jumplist_t.jpg" /> </a> <a href="win7_private_tab.jpg"> <img alt="Windows7 Private Tab" height="160" src="http://forum-test.oslo.osa/kirby/content/articles/509-opera-105-prealpha-for-labs/win7_private_tab_t.jpg" /> </a> <a href="mac_tab_collapsed.jpg"> <img alt="Mac Tab Collapsed" height="160" src="http://forum-test.oslo.osa/kirby/content/articles/509-opera-105-prealpha-for-labs/mac_tab_collapsed_t.jpg" /> </a></div>
  <h2> Download </h2>
  </p><p><strong> Update </strong> : Opera 10.50 is now part of normal release cycle. Please visit the <a href="http://my.opera.com/desktopteam/blog/"> Opera Desktop Team blog </a> to download the latest version. </p><p> To try it out, you can download the latest Labs build here: <ul>
    <li><a href="http://snapshot.opera.com/windows/Opera_1050_3186_en.exe"> Windows MSI </a></li><li><a href="http://snapshot.opera.com/mac/Opera_10.50_8174_Intel.dmg"> Mac OS X (Intel) </a></li><li><a href="http://snapshot.opera.com/unix/labs-6177/"> Unix/Linux </a></li></ul>
  </p><p> Again, please remember that this is an unstable development build. There are known bugs, unimplemented UI elements and surprise crashes. </p><p> Some specific known issues: <ul>
    <li> High memory usage </li><li> No JIT (slow performance) on old processors without SSE2 </li><li> No printing for Mac build </li></ul>
  <h2> What’s next </h2>
  </p><p> We are very excited with this release, and we hope that with this sneak peek, you are too. From all of us at Opera we wish you a happy holiday and a great new year. We’ll be back soon with more exciting news. </p><p> Feel free to join the discussion at the <a href="http://my.opera.com/community/forums/forum.dml?id=31"> My Opera community </a> or visit the <a href="http://my.opera.com/desktopteam/blog/"> Desktop Team Blog </a> for news and to leave a comment. <h2> Resources </h2>
  <ul>
    <li><a href="http://my.opera.com/ODIN/blog/opera-10-5-pre-alpha-build-released-here-is-whats-new"> Opera 10.5 pre-alpha, What’s new </a> — Opera’s Developer Relations Team blog </li><li><a href="http://my.opera.com/core/blog/2009/12/22/carakan-revisited"> Carakan Revisited </a> — Opera Core Concerns blog </li><li><a href="http://my.opera.com/core/blog/2009/02/04/carakan"> Carakan </a> — Opera Core Concerns blog </li><li><a href="http://my.opera.com/ODIN/blog/carakan-faq"> Carakan F.A.Q. </a> — Opera’s Developer Relations Team blog </li><li><a href="http://my.opera.com/core/blog/2009/02/04/vega"> Vega, Opera’s vector graphics library </a> — Opera Core Concerns </li></ul>
</p></div>

