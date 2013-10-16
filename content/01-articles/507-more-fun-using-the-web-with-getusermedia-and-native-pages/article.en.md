Title: More fun using the Web, with getUserMedia and native pages
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

<p class="note">Note: the features covered in this article are now available in a much more stable form in our latest <a href="http://www.opera.com/browser/next/">Opera Next</a> release.</p>

<div id="content">
  <p> Another Opera labs release is upon us, esteemed friends in the land of Web! This time we are making available a very exciting build indeed, with support for both the <code> getUserMedia </code> method, enabling us to make use of video input from a user’s web cam, and native pages — codenamed Opera Reader — an innovative new set of CSS constructs that allow you to split pages up into paged media, revolutionising the Web reading experience. Want to know more? Read on. <h2> The builds </h2>
  </p><p> To start off with, let’s get you acquainted with the new builds themselves. You can play with these new experimental features in any of the builds listed below: <ul>
    <li><a href="http://snapshot.opera.com/labs/camera-and-pages/Opera-Labs-Camera-and-Pages-12.00-1113.dmg"> Opera desktop for Mac </a></li><li><a href="http://snapshot.opera.com/labs/camera-and-pages/Linux-FreeBSD/"> Opera desktop for Linux </a></li><li><a href="http://snapshot.opera.com/labs/camera-and-pages/Opera-Labs-Camera-and-Pages-12.00-1113.exe"> Opera desktop for Windows </a></li><li><a href="http://www.opera.com/download/get.pl?sub=++++&amp;amp;id=34184&amp;amp;location=360&amp;amp;nothanks=yes"> Opera Mobile for Android </a></li></ul>
  <h2> Native pages </h2>
  </p><p> Browsers have adopted the scroll metaphor, offering scrollbars for navigating up and down our content. This is an easy solution for the software, as it allows all content to be accessible without needing to worry about pagination. This however leads to chopped lines of text, and doesn’t work so well on mice-less devices. In addition, mankind misses the beauty of a nicely laid out page. </p><p> We’ve more recently seen a step in the right direction, with a proliferation of e-reader devices (such as the Amazon Kindle) with “next page” and “previous page” buttons allowing users to read e-books in a more “book like” fashion. But the Kindle is a walled garden: wouldn’t it be beneficial to have an open technology that allows us to present any content we choose in this manner? <p style="float:left;margin:0;padding-right: 1em;"><img alt="A codex" src="http://forum-test.oslo.osa/kirby/content/articles/507-more-fun-using-the-web-with-getusermedia-and-native-pages/codex.jpg" /></p></p><p> To this end, we are very excited to give you a first look at how a browser can split content into native pages. This proof of concept implements CSS3 extensions to split content into pages that can be “turned” in a natural manner through gestures rather than point and click, control the positioning/floating of figures in multi-column layouts more precisely and provide a consistent navigation system for such content that is independent of your documents. The new CSS3 features that enable this are detailed in the <a href="http://dev.w3.org/csswg/css3-gcpm/"> CSS Generated Content for Paged Media module </a> . <p style="clear: both;"> For example, turning the contents of an entire web page into a rudimentary paged experience is as simple as including the following in your page: </p><pre>
 <code>
  @media -o-paged {
    html { 
      height: 100%;
      overflow: -o-paged-x;
    }
  }
 </code>
</pre></p><p> What we are doing here is declaring that devices that support the <code> -o-paged </code> media type should break up the contents of the <code> &lt;html&gt; </code> element into pages that fill 100% of the height of the browser window. These pages should be navigated in between horizontally (e.g. by swiping right and left on a touchscreen device): this is what <code> overflow: -o-paged-x; </code> does. </p><p> Like the book revolutionised reading when it replaced the scroll as the most popular reading format in the 5th century, we are hoping that native pages will revolutionise the way that people read the web. </p><p> To find out more and play with some demos, read <a href="http://people.opera.com/howcome/2011/reader/index.html"> Opera Reader: Paging the Web </a> by Chris Mills and Håkon Wium Lie. <h2> Cameras and getUserMedia </h2>
  </p><p> We’ve also added support for <code> getUserMedia </code> , an HTML5 API method that allows you to set the source of an HTML5 <code> &lt;video&gt; </code> as the input of the user’s web cam. This can be achieved with something as simple as the following: <pre>
 <code>
  // Replace the source of the video element with the stream from the camera
  var video = document.getElementById(&#39;sourcevid&#39;);
  if (navigator.getUserMedia) {
      navigator.getUserMedia(&#39;video&#39;, successCallback, errorCallback);
      function successCallback(stream) {
          video.src = stream;
      }
      function errorCallback(error) {
          console.error(&#39;An error occurred: [CODE &#39; + error.code + &#39;]&#39;);
          return;
      }
  } else {
      console.log(&#39;Native web camera streaming (getUserMedia) is not supported in this browser.&#39;);
      return;
  }
 </code>
</pre><p style="text-align: center;"><img alt="html5 exploding camera demo" src="http://forum-test.oslo.osa/kirby/content/articles/507-more-fun-using-the-web-with-getusermedia-and-native-pages/html5-exploding-camera.jpg" /></p></p><p> For more information about this, including demos, hurry along and have a read of <a href="http://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/"> Playing with HTML5 video and getUserMedia support </a> by Daniel Davis. <h2> Release notes for desktop </h2>
  <ul>
    <li> The desktop builds are based on the recent Opera 12 pre-alpha release. Features introduced in there, such as hardware acceleration and WebGL support, are disabled. </li><li> Two opera:config preferences are turned on by default: “Scroll is Pan” and “Smooth Scrolling”. As a consequence of this, text selection is broken. This will be fixed soon. </li><li> A known issue is that, when pages have page overflow set, users have to focus the page to be able to use keyboard navigation. </li><li> The device API does not have a user interface yet. This will be added soon. </li><li> These are proof of concept builds, and should be considered experimental and for developer use only. </li></ul>
  <h2> Release notes for mobile </h2>
  <ul>
    <li> This build is based on Opera Mobile 11.5 for Android, and installs side-by-side next to the regular Opera Mobile 11.5 for Android. </li><li> This build is considered experimental and is intended for development and testing purposes only. This build has not gone through full release testing, and may include unknown bugs or issues. </li><li> Two opera:config preferences are turned on by default: “Scroll is Pan” and “Smooth Scrolling”. As a consequence of this, long press and text selection are broken. </li><li> The device API does not have a user interface yet. This will be added soon. </li></ul>
  <h2> Feedback </h2>
  </p><p> If you have any feedback, please post it at the <a href="http://my.opera.com/desktopteam/blog/2011/10/19/new-opera-labs-release-with-getusermedia-and-opera-reader"> Opera desktop blog </a> . </p></div>

