Title: Cookie-sharing in Opera extensions
----
Date: 2011-06-24 12:43:49
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

<p><a href="http://www.opera.com/browser">Opera 11.50 for desktop</a> introduces the ability for extensions to share cookies with the browser. As tempting as it is to dive into puns about milk and biscuits, we&#39;re going to look at how this new feature can help you make extensions that are easier for people to use. And this feature also just happens to be easy for developers to use as well.</p>

<h2>What are cookies?</h2>

<p>Even non-technical users have heard of cookies thanks to various scary stories in the press. They&#39;re the things that sit inside your computer, watch what you&#39;re doing and then report back to some evil overlord who will try to sell you stuff you don&#39;t need, right? Well, possibly, but the cookies we&#39;re sharing in this article are the helpful kind. They do things like keep track of whether you&#39;re logged in to a particular website so that every time you view a new page, you don&#39;t have to re-enter your username and password. In practice, they can&#39;t actually do anything by themselves&#x2014;they are just a set of strings that can only be seen by the website that set them. It&#39;s the website rather than the cookie that then processes the information they refer to.</p>

<p class="note">Incidentally, you can check which websites have set cookies for you in Opera by going to Preferences &#x2192; Advanced &#x2192; Cookies &#x2192; Manage cookies. From there you can edit or delete them individually.</p>

<h2>But I don&#39;t want to share cookies&#x2014;they&#39;re mine!</h2>

<p>Cookie-sharing can sound like a threat to our privacy but in this case it doesn&#39;t mean sharing information with third party websites&#x2014;it means sharing things like user preferences between a web page and an extension. What we&#39;re going to do here is allow an extension to use cookies for websites that a user has already granted permission to.</p>

<p class="note">Note that these shared cookies should not be confused with <a href="http://en.wikipedia.org/wiki/Local_Shared_Object">Local Shared Objects (LSO)</a>, otherwise known as Flash cookies.</p>

<h2>A deliciously simple example</h2>

<p>It doesn&#39;t get much easier than this&#x2014;although we could use XMLHttpRequest, we&#39;re simply going to have a popup window that contains an iframe, which in turn contains a mobile version of a website, in this case, <a href="http://www.reddit.com">Reddit</a>. The entire code is below but if you prefer, you can download the <a href="RedditQuick.oex">example cookie-sharing extension here</a>.</p>

<p class="note">Note that some websites, such as mobile Facebook, don&#39;t allow embedding as iframes for security reasons. If this happens, it is reported as a network issue in Opera&#39;s error console.</p>

<p>We need to do two things to be able to share cookies; grant the extension access to a particular domain and enable the cookie-sharing feature. Both of these are done in the extension&#39;s <a href="http://dev.opera.com/articles/view/config-xml-howto/"><code>config.xml</code> file</a> by adding the following two lines.</p>

<pre><code>&lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
&lt;access origin=&quot;http://reddit.com&quot; subdomains=&quot;true&quot;/&gt;</code></pre>

<p>The <code>&lt;feature&gt;</code> element&#39;s <code>required</code> attribute indicates whether the extension will not work if cookies are not shared. The <code>access</code> element specifies a domain and the possible sub-domains that the extension can access&#x2014;i.e. the domains that contain the cookies your extension needs. You may need to add more than one <code>access</code> element if, for example, you also need access to an https domain. It&#39;s important to specify the domain and not use a wildcard here in order to prevent third-party cookies, which the user may not want, from being shared. For the sake of completeness, here&#39;s the whole <code>config.xml</code> file for our example extension, which I&#39;ll call <em>Reddit Quick</em>:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://people.opera.com/danield/redditquick&quot; defaultlocale=&quot;en&quot;&gt;
  &lt;name&gt;Reddit Quick&lt;/name&gt;
  &lt;description xml:lang=&quot;en&quot;&gt;Check the latest Reddit stories quickly without leaving your current page.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
  &lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
  &lt;access origin=&quot;http://reddit.com&quot; subdomains=&quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Next is the all-important <code>index.html</code> file. In this case, the JavaScript within this file will add a button to Opera&#39;s toolbar. For the button, we can specify an icon for it to use, a title that appears as a tooltip and a file that it can open. The file will open in a popup window so we should also set how large the popup will be. A height of up to 480 pixels seems to be a safe value for smaller screens such as those on netbooks. Here&#39;s the <code>index.html</code> file in full:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Reddit Quick (background)&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
(function() {	
  // Define some properties for the button
  var buttonprops = {
    icon: &#39;images/icon_18.png&#39;,
    title: &#39;Reddit Quick&#39;,
    popup: {
      href: &#39;popup.html&#39;,
      width: 400,
      height: 480
    }
  };

  // Create the button
  var button = opera.contexts.toolbar.createItem(buttonprops);

  // Add the button to the browser&#39;s toolbar
  opera.contexts.toolbar.addItem(button);
})();
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>The final piece of the puzzle is the popup itself. As mentioned earlier this simply contains an iframe so no JavaScript is needed, although I am going to use a bit of CSS to ensure we use the available space as productively as possible.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Reddit Quick (popup)&lt;/title&gt;
&lt;style&gt;
body {
  margin:0;
  overflow:hidden;
  padding:0;
}
iframe {
  border:none;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;iframe src=&quot;http://www.reddit.com/.compact&quot; width=&quot;100%&quot; height=&quot;474&quot;&gt;&lt;/iframe&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>And there we have it! The result is a popup that shows a mobile version of Reddit. Although that alone is nothing new, the extension does add value for the users. If the user is already logged in to Reddit they now don&#39;t have to log in again to the new instance within the popup. Of course, the same cookie-sharing convenience is also possible with Speed Dial extensions using XMLHttpRequest, so you could create an extension that shows users the current number of unread stories or messages for a particular website from the comfort of their Opera Speed Dial. An example of this is the <a href="https://addons.opera.com/addons/extensions/details/reddit-on-speed-dial/">Reddit on Speed Dial extension</a>. There are various possibilities for this easy-to-use feature so we look forward to seeing what you create over at the <a href="http://addons.opera.com/">Opera extensions repository</a>.</p>

/code
