Title: Opera extensions prototypes for modifying CSS
----
Date: 2010-12-15 23:12:49
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

    <p>The web has radically changed our way to access information in space, time and shape. Before the web, our information user experience was often constrained by the solidification of information in physical form factors. The digitization of content and its separation from style has given us a unique opportunity to choose the way we want to read and interact with content, and that&#39;s an excellent thing.</p>

    <p>Here are some use cases of modifying the style of web pages on the fly:</p>

    <ul>
        <li>Web page readability</li>
        <li>Content removal (specific banners, menus, etc.)</li>
        <li>Source code visibility, visual cues for web developers</li>
        <li>Accessibility enhancements</li>
        <li>Navigation aids</li>
        <li>Internationalization enhancements</li>
        <li>Web content checker</li>
    </ul>

    <h2 id="proto">Three CSS injection extension prototypes</h2>

    <p><a href="https://addons.opera.com/addons/extensions/">Opera extensions</a> are a powerful tool based on open web technologies, which allow us to customize our daily experience of web content. To make this as easy as possible, we have created three prototypes ready to be modified by <strong>anyone who has a very basic knowledge of CSS</strong> (with thanks to <a href="http://my.opera.com/m17russia/">Sergei Kolosov</a> for his initial work). These prototypes will help you to build your own Opera extensions for three specific use cases:</p>

    <ol>
        <li>Apply a stylesheet to all browsed websites: on any website, all links that you hover over or that have focus should have a Nintendo Wii-style blue border. (<a href="applyCssOnAllSites.oex" title="extension to apply a stylesheet to all browsed websites">Extension package</a>)</li>
        <li>Temporarily apply a stylesheet to one web page: click the extension&#39;s button and all <code>div</code> elements on the page should be highlighted with a red border. (<a href="applyCssOnButtonClick.oex" title="extension to temporarily apply a stylesheet to one web page">Extension package</a>)</li>
        <li>Apply a stylesheet to a specific set of URI patterns: go to <a href="http://www.bbc.co.uk/news" title="BBC News - Home">BBC News</a> and the news ticker should be hidden. This also works on <a href="http://www.itv.com">ITV</a> and <a href="http://www.guardian.co.uk">The Guardian</a>. (<a href="applyCssOnSelectedSites.oex" title="extension to apply a stylesheet to a specific set of URI patterns">Extension package</a>)</li>
    </ol>

    <p>Each link above goes to the downloadable extension ready to test in the browser. Once it&#39;s downloaded, drag and drop the extension onto Opera 11, confirm the install window dialogue, and start to play.</p>

    <h2 id="use">How to use these prototypes</h2>

    <p>The three prototypes are <strong>really simple to modify</strong> for anyone who knows a bit of CSS. The first prototype is just a matter of editing the right CSS file. The second one will require adding a specific button. The third prototype requires a few lines of JavaScript to be modified. All these tweaks are really minor — let&#39;s have a look.</p>
    <p>First off, download the <a href="opera-prototypes.zip">opera-prototypes.zip</a> file and unzip it. Inside, there are three prototypes of extensions, each inside its own folder. Each of these prototypes contains a few files and folders with this hierarchy:</p>

    <div class="screenshot">
    <img src="http://forum-test.oslo.osa/kirby/content/articles/416-opera-extensions-prototypes-for-modifying-css/opera-extension-file-structure.png" alt="Opera Extension File Structure" />
    <p class="comment">Figure 1: The file structure inside the extension folder</p></div>


    <h2 id="allsites">Apply a stylesheet to all browsed websites</h2>

    <p>This <a href="applyCssOnAllSites.oex">extension</a> generates a blue glow around links on hover and focus. Once activated, it applies to all sites we are browsing.</p>

    <p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/416-opera-extensions-prototypes-for-modifying-css/opera-extension-allsites.jpg" alt="Opera Extension Allsites" /></p>

    <p> The CSS rules for this extension are :</p>
    <pre class="code">a:hover, [onclick]:hover, a:focus, [onclick]:focus {
        border-radius:2px;
        box-shadow:0 0 0px 2px #3789ef;
        box-decoration-break: clone;}
    </pre>

    <p>Modifying this stylesheet is fairly simple. In the <code>applyCssOnAllSites</code> folder, there is a <code>style</code> folder which contains the file  <code>style.css</code>. We can decide to give a pink glow around links.</p>

    <pre class="code">a:hover, [onclick]:hover, a:focus, [onclick]:focus {
        border-radius:2px;
        box-shadow:0 0 0px 2px <b>#ff62b4;</b>
        box-decoration-break: clone;}
    </pre>

    <p>That&#39;s it.</p>

    <h3 id="quicktest">Quickly test your modifications</h3>

    <p>Opera 11 has introduced a <a href="http://dev.opera.com/articles/view/opera-extensions-developer-workflow/">special developer mode</a> for testing your extensions quickly without going through the full process of packaging it. You just need to drag and drop the <code>config.xml</code> file onto an Opera window to get started.</p>

    <h2 id="onesite">Temporarily apply a stylesheet to one web page</h2>

    <p>The <a href="applyCssOnButtonClick.oex">second extension</a> installs a button on top of the browser window. A little icon sits near the search field on the top right. When the button is clicked the extension is activated and the stylesheet is applied to the page.</p>

    <div class="screenshot"><img src="http://forum-test.oslo.osa/kirby/content/articles/416-opera-extensions-prototypes-for-modifying-css/opera-extension-button.png" alt="Opera Extension Button" />
    <p class="comment">Figure 2: The location of the extension button once the extension has been installed.</p></div>

    <p>In the following screenshots, you can see the Dev.Opera website before and after applying the extension.</p>

    <div class="figure"><img width="640" src="http://forum-test.oslo.osa/kirby/content/articles/416-opera-extensions-prototypes-for-modifying-css/opera-red-outline.jpg" alt="Opera Red Outline" />
    <p class="comment">Figure 3: Left image before the extension has been applied, right image after the extension has been applied.</p></div>

    <p>The CSS code is very simple: it is just three properties attached to the <code>div</code> element.</p> 

    <pre class="code">div {
        border-radius:2px;
        box-shadow:0 0 0px 2px #f00;
        box-decoration-break: clone;}
    </pre>

    <p>Modifying these rules is, once again, really trivial. We could, for example, modify the stylesheet to display the <code>id</code> or <code>class</code> attribute values of each of these <code>div</code> elements.</p>

    <pre class="code">div {
        border-radius:2px;
        box-shadow:0 0 0px 2px #f00;
        box-decoration-break: clone;}

div[class]:before {
        content: &quot;class=&quot; attr(class);
        background-color: black;
        color: white;}

div[id]:before {
        content: &quot;class=&quot; attr(id);
        background-color: black;
        color: white;}
    </pre>

    <div class="screenshot"><img width="640" src="http://forum-test.oslo.osa/kirby/content/articles/416-opera-extensions-prototypes-for-modifying-css/opera-modified-extension.jpg" alt="Opera Extension Modified" /><p class="comment">Figure 4: Screenshot with the modified extension showing the attribute values for id and class</p></div>

    <h3 id="create-button">Create Buttons For Extension</h3>

    <p>Once the CSS has been modified for your own purpose, you might  want to use your own  button as a visual cue in the browser window. For a detailed explanation, have a look at the documentation on <a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/#toolbar_buttons">creating buttons for extensions</a>.</p>

    <p>In the <code>images</code> folder, there is an image file of 18x18 pixels. This is the icon you need to modify. Once done you just need to <a href="#quicktest">test your extension</a> as you did for the previous one.</p>


    <p>In case you are a bit more curious, you can check the <code>index.html</code> file of the <code>applyCssOnButtonClick</code> folder. There is a <code>script</code> element.</p>
    <pre>&lt;script src=&quot;background.js&quot;&gt;&lt;/script&gt;</pre>
    <p>There is also a <code>background.js</code> file in the main folder. This file controls the running of the extension and there is no need to understand everything in this file for now.</p>

    <pre>// Specify the properties of the button before creating it.
    var UIItemProperties = {
        disabled: true,
        title: &quot;Apply CSS&quot;,
    <b>    icon: &quot;images/icon_18x18.png&quot;</b>,
        onclick: function(event) {
            // Send a message to the currently-selected tab.
            var tab = opera.extension.tabs.getFocused();
            if (tab) { // Null if the focused tab is not accessible by this extension
                tab.postMessage(&#39;toggleCSS&#39;);
            }
        }
    };
    </pre>

    <p>Note that images need to be contained inside the extension folder. It is not possible to call images which are on the web.</p>

    <h2 id="selectSites">Apply a stylesheet to a specific set of URI patterns</h2>

    <p>In the <a href="applyCssOnSelectedSites.oex">third extension prototype</a>, the stylesheet hides a news ticker for a list of websites — in our example, we&#39;ve applied this on the BBC, ITV and the Guardian websites.</p>

    <pre class="code">#ticker, #ticker-placeholder, #tickerHolder,
    .ticker_container, .nbr-ticker, #newsticker {
            display:none;}</pre>


    <p>For doing so, we need to tell the extension which websites we are targeting. In addition to the modifications of the <code>styles/style.css</code> file, the JavaScript file <code>injected.js</code> in the folder <code>includes</code> needs to be modified for setting the scope of the extension. At the very top of the file a list of domain name is included.</p>

    <pre class="code">// The following comments apply this script to bbc.co.uk 
// and all its subdomains, itv.com and guardian.co.uk.
// ==UserScript==
// @include http://*.bbc.co.uk/*
// @include http://www.itv.com/*
// @include http://www.guardian.co.uk/*
// ==/UserScript==</pre>

    <p>The character <code>*</code> is used as a wildcard for matching more domain names and subdomains. For example, the rules will apply to these domains and more: 
	<ul>
		<li><b>http://</b>www<b>.bbc.co.uk/</b></li>
		<li><b>http://</b>news<b>.bbc.co.uk/</b>weather/</li>
		<li><b>http://</b>news<b>.bbc.co.uk/</b></li>
	</ul>

    <p>Once the domains have been specified, as in the previous example, we just need to save and <a href="#quicktest">test</a>.</p>

    <h2 id="share">Share with the community</h2>

    <p>You might want to go further and explore the topic of extensions. The basics of creating an extension are covered in <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">the hello world article</a> and <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">there is more</a>.</p>

    <p>As we have seen along this article, it is really easy to modify the three extension prototypes for injecting CSS in a web page. In case you would like to share your own modified prototype on the <a href="https://addons.opera.com/addons/extensions/">Opera Add-On</a> site, it is very important to modify the <a href="http://dev.opera.com/articles/view/config-xml-howto/">config.xml</a> with your own description and credentials.</p>

    <p>Last but not least, share the awesome ideas you come up with for these three prototypes! Write an article on your blog, explain the modifications you made, take screenshots of the effects of the extension once applied and leave a comment here with the link to your blog post.</p>

    <p>Time to starting hacking on your own Opera extension!</p>
</p>
