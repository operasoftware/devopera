Title: What's in an Opera extension?
----
Date: 2010-10-21 09:10:11
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

<h2>Contents</h2>

<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#files">Extension files</a></li>
    <ul>
        <li><a href="#config">config.xml</a></li>
        <li><a href="#index">index.html</a></li>
        <li><a href="#background">background.js</a></li>
        <li><a href="#popup">popup.html</a></li>
        <li><a href="#icon">icons/example.png</a></li>
        <li><a href="#includes">includes (injected scripts)</a></li>
        <li><a href="#locales">locales</a></li>
        <li><a href="#options">options.html</a></li>
    </ul>
    <li><a href="#architecture">Breakdown of architecture and APIs</a></li>
    <ul>
        <li><a href="#injected">Injected scripts</a></li>
        <li><a href="#bgprocess">Background process</a></li>
        <li><a href="#button-badge">Button/badge</a></li>
        <ul>
            <li><a href="#buttons">Buttons</a></li>
            <li><a href="#icons">Icons</a></li>
            <li><a href="#popups">Popups</a></li>
            <li><a href="#badges">Badges</a></li>
        </ul>
    </ul>
    <li><a href="#types">Different types of extension</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p>In this article we give you an overview of what is included inside an Opera Extension, and we&#39;ll have a brief look at some of the APIs. You&#39;ll find more <a href="http://www.opera.com/docs/apis/extensions/">extensive Opera Extensions API reference documentation</a>.
</p>


<h2 id="files">Extension files</h2>

	<p>Opera extensions are based on the <a href="http://www.w3.org/TR/widgets/">W3C Widgets specification</a> (e.g. for features like the <code>config.xml</code>). An extension can contain all of the following files:</p>

	<ul>
	  <li><code>/config.xml</code></li>
	  <li><code>/index.html</code></li>
	  <li><code>/background.js</code></li>
	  <li><code>/popup.html</code></li>
	  <li><code>/icons/example.png</code></li>
	  <li><code>/locales/no/index.html</code></li>
	  <li><code>/locales/no/background.js</code></li>
	  <li><code>/locales/no/popup.html</code></li>
          <li><code>/options.html</code></li>
	</ul>

	<p>Let&#39;s go through these parts in turn and explain what they do:</p>

<h3 id="config">config.xml</h3>

	<p>This is the configuration file, which provides valuable meta data for the extension — this is actually one of the two only mandatory part of the extension package (the other is the <code>index.html</code>), although you won&#39;t be able to get it to do very much on its own. Since Opera extensions are based on W3C Widgets, the <code>config.xml</code> files are the same — see the <a href="http://www.w3.org/TR/widgets/#example-configuration-document">W3C Widgets spec configuration document</a> section. There are lots of different things you could include in here, and we would recommend that you include at least the following:</p>

	    <ul>
	      <li>Name of extension</li>
              <li>Unique ID to identify your extension, ideally a URL</li>
              <li>Author name</li>
	      <li>Description</li>
	      <li>Icon: this is to be used in the Opera extensions download site, and other places. See the <a href="#icons">section on icons</a> below.</li>
	    </ul>

<p>Here’s an example <code>config.xml</code> file:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
           id=&quot;http://www.example.org/example&quot;&gt;
  &lt;name&gt;My test extension&lt;/name&gt;
  &lt;description&gt;API experiments and testing.&lt;/description&gt;
  &lt;author href=&quot;http://foo-bar.example.org/&quot;
          email=&quot;foo-bar@example.org&quot;&gt;Foo Bar Corp&lt;/author&gt;
  &lt;icon src=&quot;icons/example.png&quot;/&gt;
&lt;/widget&gt;
</code></pre>

<p>Additional functionality can be enabled by adding <code>&lt;feature&gt;</code> elements to the <code>config.xml</code>, for example, cookie sharing, content blocking, and enabling an extension to live in the Speed Dial. See <a href="http://dev.opera.com/articles/view/config-xml-howto/">The ins and outs of config.xml</a> for a more details.</p>

<h3 id="index">index.html</h3>

	  <p>In widget speak, this is called a &quot;start file&quot;. A start file is always needed and serves as the extension&#39;s background process (if you want, you can point to a different file using a <code>&lt;content&gt;</code> element in the config.xml). </p>

<p>This file can also include JavaScript to create UIItems like the UI button and callout. For example:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;script&gt;
      window.addEventListener(&quot;load&quot;, function(){
        var theButton;
        var UIItemProperties = {
          disabled: false,
          title: &quot;101 - createItem w popup big&quot;,
          icon: &quot;icon.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
            width: 250,
            height: 500
          }
        }
        theButton = opera.contexts.toolbar.createItem( UIItemProperties );
        opera.contexts.toolbar.addItem( theButton );
      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>


<h3 id="background">background.js</h3>

	  <p>Here is where you include your so-called background scripts, which control the extension&#39;s background process. Note that you can have as many as you like, and you don&#39;t have to call them <code>background.js</code>.</p>

<h3 id="popup">popup.html</h3>

	  <p>This file (or files — you can have more than one in a single extension) simply contains the contents of the popup window(s) triggered from the background process. Note that instead of having a popup window specified in one of these files, you can instead specify an external URL as the contents of one of these popups, e.g. <a href="http://www.opera.com/">http://www.opera.com</a>.</p>

<h3 id="icon">icons/example.png</h3>

<p>This includes an icon to be used in the extension (see <a href="#icons">the icons section below</a> for more details).</p>

<h3 id="includes">includes (injected scripts)</h3>

	  <p>Any JS files in this folder will be injected to pages you visit while browsing. These files can be made to target certain sites, like <a href="http://www.youtube.com">youtube.com</a>. To learn more about how injected scripts work, visit <a href="http://www.opera.com/docs/userjs/">our UserJS documentation pages</a>.</p>

<h3 id="locales">locales</h3>

	  <p>The contents of the <code>locales</code> directory are optional translations for when you have an extension you want to provide translated versions for. Inside the <code>locales</code> directory you provide a separate directory for each translation, named the same as the language code for that language and dialect. For example, in our above directory tree we have provided a <code>no</code> folder for a Norwegian translation, but you could provide <code>en-gb</code>, <code>pt-br</code>, <code>ru</code>, <code>cz</code>, <code>jp</code>, and as many others as you like (note that they should always be kept lower case, to avoid compatibility problems - this is required by the W3C Widgets Packaging specification). Inside each folder you provide translated alternatives to your default <code>index.html</code>, injectables, etc.</p>

    <p class="note">An Opera Extension&#39;s UI is constructed from the UI elements added to a webpage via injected scripts, the buttons in Opera&#39;s toolbar, which are created using the UIItems API in the background process, and Popups, which, as <a href="#popups">explained below</a>, are populated from supplied HTML documents or an external website via its URL.</p>

<h3 id="options">options.html</h3>

<p>
When the browser finds an options.html file in the extension, it makes a &quot;Preferences&quot; option available for that extension in the extension manager (Tools &gt; Extensions &gt; Manage Extensions). That way, when a user clicks on the extension&#39;s &quot;Preferences&quot; dropdown menu item in the extensions manager, the browser will fire up its options page. 
</p>
<p>
Generally, the options page is used for setting preferences or notes such as acknowledgements. Take a look at the <a href="http://dev.opera.com/articles/view/opera-extensions-options-page/">Opera extensions options page article</a> for a more detailed explanation.
</p>

<h2 id="architecture">Breakdown of architecture and APIs</h2>

<p>The architecture of an Opera Extension involves the interaction of the following four basic parts:</p>

	<pre>Injected script &lt;-&gt; Background Process &lt;-&gt; Button/badge &lt;-&gt; Popup</pre>

	These parts communicate through <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#web-messaging">cross-document messaging</a>, and do the following:

<h3 id="injected">Injected scripts</h3>

	  <p>This part provides the scripting that gets injected to targeted sites.</p>

<h3 id="bgprocess">Background Process</h3>

	  <p>The background process is what weaves the architecture together — this is the central place where all messaging is routed through, and where most of the interaction with the Extension APIs occurs. The background process triggers the creation of UI items further down the chain via the following methods:</p>

	  <ul>
	    <li><code>opera.contexts.toolbar.createItem( { ...properties... } )</code></li>
	    <li><code>opera.contexts.toolbar.addItem( uiItem )</code></li>
	    <li><code>opera.contexts.toolbar.removeItem( uiItem )</code></li>
	  </ul>

	  <p class="note">Note: <code>toolbar</code> is currently the only context available, but more of these will be available later.</p>

<h3 id="button-badge">Button/Badge</h3>

	  <p>This is where the UI elements of the extension are put together and displayed, for example buttons that you press, badges that display information, and in future releases, menu items.</p>

<h4 id="buttons">Buttons</h4>

          <p>You can create a button for the browser toolbar by using the <code>opera.contexts.toolbar.createItem()</code> function, and then add it using <code>opera.contexts.toolbar.addItem()</code>. Here&#39;s an example <code>index.html</code> file that simply adds a button, and fires a callout when the button is clicked:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;script&gt;
      window.addEventListener(&quot;load&quot;, function(){

        var theButton; // the button variable
        var toolbar = opera.contexts.toolbar; //the Opera toolbar

        var props = { // options for the button
          disabled: false,
          title: &quot;My first extension!&quot;,
          icon: &quot;opera.ico&quot;,
          popup: {
            href: &quot;http://www.google.com&quot;,
            width: 300,
            height: 200
          }
        }

        theButton = toolbar.createItem( props ); // create the button

        toolbar.addItem( theButton ); // add button to UI

      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>You can remove the button using the function <code>opera.contexts.toolbar.removeItem(theButton);</code>. You can also handle <code>onclick</code> events on the button by adding <code>onclick: function(){ /* do something */ }</code> to the button.</p>

<h4 id="icons">Icons</h4>

<p>If you include a button in the UI, you should  include an icon for it. The button icon is rendered 18 x 18 pixels in size, and anything above or below this will be scaled. For best results we recommend that you supply an icon that is exactly 18 x 18 pixels.</p>

<p>Additionally, you will be asked to supply an icon that is 64 x 64 pixels or larger when uploading your extension to our Opera extensions website. This icon will be used in our online catalog next to a title and description of the extension, as well as in the Opera Extension manager in the browser. The title, description, and path to the icon are stored in and retrieved from the <code>config.xml</code>.</p>

<h4 id="popups">Popups</h4>

<p>Popups can be defined by simply adding the popup properties when creating a button:</p>

<pre><code>var props = { // options for the button
  disabled: false,
  title: &quot;My first extension!&quot;,
  icon: &quot;opera.ico&quot;,
  popup: {
    href: &quot;http://www.google.com&quot;,
    width: 300,
    height: 200
  }
}</code></pre>

<p>The above example will create a popup containing the google.com home page. You can also define a local HTML page as the contents of the popup, for example:</p>

<pre><code>popup: {
  href: &quot;popup.html&quot;,
  width: 300,
  height: 300
}</code></pre>

<h4 id="badges">Badges</h4>

<p>A badge is a notification that appears as an overlay on top of an extension button. You add badges by making a dictionary of properties for your button:</p>

<pre><code>var props = { // options for the button
  disabled: false,
  title: &quot;My first extension!&quot;,
  icon: &quot;opera.ico&quot;,
  popup: {
    href: &quot;popup.html&quot;,
    width: 300,
    height: 200
  },
  badge: {
    textContent: &#39;123&#39;
  }
}</code></pre>

<p>You can also customize the background and foreground color of the badge using the simple style properties, like so:</p>

<pre><code>backgroundColor: &#39;#ffeedd&#39;,
color: &#39;#404040&#39;,</code></pre>

<p>Finally, the content of the badge can be updated by changing <code>textContent</code> property:</p>

<pre><code>theButton.badge.textContent = &quot;45&quot;</code></pre>


<h2 id="types">Different types of extension</h2>

	<p>There are many different types of extension you could build, although the functionality required for all of these is not yet available. We will update this and provide more tutorials in later release phases. Essentially, the different parts of the extensions architecture approximate to this:</p>

	<pre>Injected script &lt;-&gt; Background &lt;-&gt; Button/badge &lt;-&gt; Popup</pre>

	<p>The different types of extension you can build are different permutations of these components:</p>

		<ol>
		  <li><strong>Injected script + <code>index.html</code></strong>: This is just an injected script, and an empty <code>index.html</code> + <code>config.xml</code>, packaged up as an extension. It will work fine, but it won&#39;t take advantage of any of the extension-specific APIs and other features. </li>
		  <li><strong>Button + Popup</strong>: You can write an extension that creates a button in Opera&#39;s toolbar, which when clicked creates a popup with a third-party URL. For example, you could create a popup frame containing mobile-specific web pages so you could use them on your desktop.</li>
		  <li><strong>A bookmarklet extension</strong>: You can write an extension that, when clicked, executes a bookmarklet function from the background process, performing it on the current tab, rather than having to do it with a <code>javascript:</code> URL in the address bar.</li>
		  <li><strong>Content analysis</strong>: An extension could be made so that the injected script processes the DOM and send resulting data to the background process, to send it to the button/popup when the time is right.</li>
		  <li><strong>Content-aware action</strong>: You can write an extension to create a button that, when clicked, posts a message to the injected script, which then triggers a method there, and sends the data back along the chain to be used by the popup, and so on. For example, selecting an address on a page, clicking a &quot;Map&quot; button, and having a Google map of the address appear in a popup window.</li>
		  <li><strong>Auto-action</strong>: The background process can regularly poll a service and update the badge with information, for example polling your mail service and displaying your unread mail count in a badge on the UI.</li></ol>


<p class="note">Note: The background has cross-domain XHR abilities, just like widgets. To find more out about using cross-domain XHR, read our article <a href="http://dev.opera.com/articles/view/opera-widgets-and-ajax-connecting-to-mu/">Opera Widgets and Ajax connecting to multiple servers</a>.</p>
