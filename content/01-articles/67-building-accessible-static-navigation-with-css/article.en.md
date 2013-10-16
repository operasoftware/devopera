Title: Building Accessible Static Navigation with CSS
----
Date: 2008-01-09 18:58:30
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

<h2>
        Overview</h2>
    <p>
        When building a navigation menu for a web site, steps should be taken to ensure that it is accessible, and degrades gracefully in older browsers with lesser CSS support. In this article we will explore one such implementation. The navigation menu you
        see in this example is built with valid, semantic HTML and CSS - no JavaScript is involved, as I felt this was unnecessary. The static (non-expanding/collapsing) nature of the example suits a web site comprised of twenty or less target pages.
    </p>
    <p>
        This article is divided into the following sections.
    </p>
    <ul>
        <li><strong>Nav Container</strong> - The <code>nav</code> container (<code>&lt;div id=&quot;nav&quot;&gt;&lt;/div&gt;</code>) contains the following three areas of the navigation, and is placed in each web page of the document collection.
            <ul>
                <li><strong>Skip to content</strong> styled button - This is placed directly at the top of the nav container, and is an accessibility feature for users with visual impairments.</li>
                <li><strong>Area headings</strong> - This defines the structure and presentation of the area headings that separate each section of the navigation container.</li>
                <li><strong>Link state symbols</strong> area - This is a legend consisting of symbols that define the state of a hyperlink as a user traverses the document collection. It is an accessibility feature for users that are visually impaired, color blind, or suffer from short term memory loss or dyslexia.</li>
                <li><strong>Topics</strong> area - As it says, here is where all topic web pages are listed and hyperlinked for surfing through the document collection.</li>
            </ul>
        </li>
        <li><strong>Currently open page</strong> - Here I discuss another aspect of my navigation which you may find useful, namely the &quot;Currently open page&quot; feature.</li>
    </ul>
    <p>
        Each topic will be explained, and accompanied by the markup and css used to create it. You can download the <a href="Accessible_CSS_Menu.zip">complete code example here</a>.</p>
   
    <h2>
        Nav container</h2>
    <p>
        The nav <code>div</code> container acts as a wrapper for and defines the overall position of the navigation areas. It is absolutely positioned at the top and left sides of the web page by a rule in the external style sheet.</p>
    <h3>
        Nav container markup</h3>
<pre>&lt;div id=&quot;nav&quot;&gt;
    &lt;h4 class=&quot;skip&quot;&gt;
        &lt;a href=&quot;&#035;a1&quot;&gt;skip to content&lt;/a&gt;&lt;/h4&gt;
    &lt;hr /&gt;
    &lt;h4&gt;link state symbols&lt;/h4&gt;
        &lt;ul class=&quot;linkstate&quot;&gt;
            &lt;li&gt;&lt;img alt=&quot;Ball symbol.&quot; class=&quot;state&quot; src=&quot;images/hover.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;&lt;span class=&quot;focus&quot;&gt;Focus/Hover&lt;/span&gt;&lt;/li&gt;
            &lt;li class=&quot;unvisited&quot;&gt;&lt;img alt=&quot;Chain link symbol.&quot; class=&quot;state&quot; src=&quot;images/link.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Unvisited&lt;/li&gt;            
            &lt;li class=&quot;visited&quot;&gt;&lt;img alt=&quot;Check mark symbol.&quot; class=&quot;state&quot; src=&quot;images/visited.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Visited&lt;/li&gt;            
            &lt;li class=&quot;currently&quot;&gt;&lt;img alt=&quot;Star symbol.&quot; class=&quot;state&quot; src=&quot;images/star.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Currently Open&lt;/li&gt;            
        &lt;/ul&gt;            
    &lt;hr /&gt;            
    &lt;h4&gt;topics&lt;/h4&gt;            
        &lt;ul class=&quot;linkstate&quot;
            &lt;li&gt;&lt;a href=&quot;home.htm&quot;&gt;Home&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;Topic1.htm&quot;&gt;Topic 1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;topic2&quot;&gt;&lt;a href=&quot;Topic2.htm&quot; title=&quot;This page is currently open.&quot;&gt;Topic 2&lt;/a&gt;&lt;/span&gt;
                    &lt;ul&gt;                
                        &lt;li&gt;&lt;a href=&quot;Topic2a.htm&quot;&gt;Topic 2a&lt;/a&gt;&lt;/li&gt;                
                        &lt;li&gt;&lt;a href=&quot;Topic2b.htm&quot;&gt;Topic 2b&lt;/a&gt;&lt;/li&gt;                
                        &lt;li&gt;&lt;a href=&quot;Topic2c.htm&quot;&gt;Topic 2c&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;Topic2d.htm&quot;&gt;Topic 2d&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;Topic2e.htm&quot;&gt;Topic 2e&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;Topic2f.htm&quot;&gt;Topic 2f&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/li&gt;    
                &lt;li&gt;&lt;a href=&quot;Topic3.htm&quot;&gt;Topic 3&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;Topic4.htm&quot;&gt;Topic 4&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;Topic5.htm&quot;&gt;Topic 5&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</pre>
    <h3>
        Nav container CSS</h3>
    <p>
        Here we define the presentation code used to position and style the Navigation container div in the browser window:</p>
    <dl>
        <dt><code>&#035;nav {</code></dt>
        <dd>
            <code>width: 23em;</code> - gives the navigation <code>div</code> container a relative horizontal size</dd>
        <dd>
            <code>position: absolute;</code> - removes the navigation <code>div</code> container from the natural flow of the document.</dd>
        <dd>
            <code>top: 1em;</code> - sets the distance from the top of the browser window</dd>
        <dd>
            <code>left: 1em;</code> - sets the distance from the left side of the browser window</dd>
        <dd>
            <code>margin: 0em;</code> - shorthand for the <code>margin</code> property - removes all margins in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>padding: 0em 0.5em 1em 0.5em;</code> - shorthand for the <code>padding</code> property - sets the padding in the order of top, right, bottom and left:
        </dd>
        <dd>
            <code>border: 1px solid #ffd505; }</code> - shorthand code for the <code>border</code> property - defines the width, type, and color of the border surrounding the nav container:
        </dd>
    </dl>
    <dl>
        <dt><code>&#035;nav ul {</code></dt>
        <dd>
            <code>margin: 0em;</code> - shorthand for the <code>margin</code> property - removes all margins in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>padding: 0em;</code> - shorthand for the <code>padding</code> property - removes all padding in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>list-style-type: none;</code> - removes the <code>list-style</code>s: discs, squares, circles, etc.</dd>
        <dd>
            <code>color: &#035;fff;</code> - sets the color of white to the text characters</dd>
        <dd>
            <code>background: inherit }</code> - sets the list to inherit the container background color</dd>
    </dl>
    <dl>
        <dt><code>&amp;#035nav ul li {</code></dt>
        <dd>
            <code>margin: 0em;</code> - shorthand for the <code>margin</code> property - removes all margins in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>padding: 0.4em 0em 0em 0.5em;</code> - shorthand for the <code>padding</code> property - sets padding in the order of top, right, bottom, and left:
        </dd>
        <dd>
            <code>list-style-type: none; }</code> - removes the <code>list-style</code>s: discs, squares, circles, etc.</dd>
    </dl>
    <dl>
        <dt><code>&amp;#035nav ul ul li {</code></dt>
        <dd>
            <code>padding: 0em;</code> - shorthand for the <code>padding</code> property - removes all padding in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>margin-left: 2em;</code> - sets the left margin padding to 2em
        </dd>
        <dd>
            <code>list-style-type: none; }</code> - removes the <code>list-style</code>s: discs, squares, circles, etc.</dd>
    </dl>
    <dl>
        <dt><code>&amp;#035nav ul ul ul li {</code></dt>
        <dd>
            <code>padding: 0em;</code> - shorthand for the <code>padding</code> property - removes all padding in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>margin-left: 1.4em;</code> - sets the left margin padding to 1.4em
        </dd>
        <dd>
            <code>list-style-type: none; }</code> - removes the <code>list-style</code>s: discs, squares, circles, etc.</dd>
    </dl>
    <h2>
        Skip to Content area</h2>
    <p>
        Following accessibility guidelines, I have included a &quot;skip to content&quot; link (styled button) on each web page to allow users to bypass the navigation section and skip to the beginning of the page content. I have designed the button using CSS to be visible
        to all users by default, making them aware that this accessibility tool is available. It is made fairly small, and in line with the design of the web page so as not to be too obtrusive to the page design. If a client specified it should not be visible,
        it could be moved off the visible page using CSS absolute positioning (Important Note: <code>visibility: hidden;</code> should not be used as this makes it invisible to assistive technologies.) This way, it wouldn&#39;t be seen at all by sighted users, and
        users employing screenreaders (or other assistive technologies) could activate it through the keyboard. This eliminates the repetitive spatial navigation or tab key actions needed to manually bypass the navigation and arrive at the first section of content.
    </p>
    <h3>
        Skip to content area markup</h3>
    <p>
        As shown in the following code sample, the markup of the styled button (<code>h4 class=&quot;skip&quot;</code>) links the anchor element and its href attribute value (<code>a href=&quot;#a1&quot;</code>) with the id attribute value of the first content
        heading (<code>h2 id=&quot;a1&quot;</code>). I do not employ any access keys/character keys to achieve this because the majority have already been pre-assigned by the operating system, the user agent/browser, and any assistive device which may be installed,
        notwithstanding those few available which a user may have assigned themselves.
    </p>
    <pre>&lt;h4 class=&quot;skip&quot;&gt;
    &lt;a href=&quot;&#035;a1&quot;&gt;skip to content&lt;/a&gt;
&lt;/h4&gt;

</pre>
    <h3>
        Skip to content area CSS</h3>
    <p>
        I have defined the following styles in an external style sheet to style and position the &quot;Skip to Content&quot; button hyperlink just how I want it:</p>
    <dl>
        <dt><code>&#035;nav h4.skip {</code></dt>
        <dd>
            <code>font-size: 1.1em;</code> - sets the <code>font-size</code> to a relative size of 1.1em</dd>
        <dd>
            <code>font-weight: bold;</code> - sets the <code>font-weight</code> to <code>bold</code></dd>
        <dd>
            <code>font-variant: small-caps;</code> - sets the <code>font-variant</code> to <code>small-caps</code></dd>
        <dd>
            <code>margin: 1.8em 0em 0em 0em;</code> - shorthand for the <code>margin</code> property in the order of top, right, bottom and left
        </dd>
        <dd>
            <code>padding: 0.5em;</code> - sets all padding (top, right, bottom, and left) to 0.5em</dd>
        <dd>
            <code>color: &#035;fff;</code> - sets the font color to <code>white</code></dd>
        <dd>
            <code>background: none;</code> - removes any background and image attached to the anchor hyperlink</dd>
        <dd>
            <code>text-decoration: none; }</code> - removes the default underline from the anchor hyperlink</dd>
    </dl>
    <dl>
        <dt><code>#nav h4.skip a:link, #nav h4.skip a:visited {</code></dt>
        <dd>
            <code>color: &#035;000;</code> - sets the font color to <code>black</code></dd>
        <dd>
            <code>background: &#035;ccc;</code> - sets the background color of the button</dd>
        <dd>
            <code>padding: 0.2em 1em;</code> - shorthand code for padding in the order of top and bottom, then right and left
        </dd>
        <dd>
            <code>border-top: 0.15em solid &#035;fff;</code> - top border shorthand: sets the thickness, type and color for the unvisited and visited state of the top border of the button</dd>
        <dd>
            <code>border-left: 0.15em solid &#035;fff;</code> - left border shorthand: sets the thickness, type and color for the unvisited and visited state of the left border of the button</dd>
        <dd>
            <code>border-bottom: 0.15em solid &#035;aaa;</code> - bottom border shorthand: sets the thickness, type and color for the unvisited and visited state of the bottom border of the button</dd>
        <dd>
            <code>border-right: 0.15em solid &#035;aaa; }</code> - right border shorthand: sets the thickness, type and color for the unvisited and visited state of the right border of the button</dd>
    </dl>
    <dl>
        <dt><code>#nav h4.skip a:hover, #nav h4.skip a:active, #nav h4.skip a:focus {</code></dt>
        <dd>
            <code>color: &#035;fff;</code> - sets the font color to <code>white</code></dd>
        <dd>
            <code>background: &#035;454545;</code> - sets the background color of the button</dd>
        <dd>
            <code>padding: 0.2em 1em;</code> - shorthand code for <code>padding</code> in the order of top and bottom, then right and left
        </dd>
        <dd>
            <code>border-top: 0.15em solid &#035;fff;</code> - top border shorthand: sets the thickness, type and color for the hover, active and focus states of the top border of the button</dd>
        <dd>
            <code>border-left: 0.15em solid &#035;fff;</code> - left border shorthand: sets the thickness, type and color for the hover, active and focus states of the left border of the button</dd>
        <dd>
            <code>border-bottom: 0.15em solid &#035;aaa;</code> - bottom border shorthand: sets the thickness, type and color for the hover, active and focus states of the bottom border of the button</dd>
        <dd>
            <code>border-right: 0.15em solid &#035;aaa; }</code> - right border shorthand: sets the thickness, type and color for the hover, active and focus states of the right border of the button</dd>
    </dl>
    <h2>
        Area headings</h2>
    <p>
        Each area of the navigation <code>&lt;div&gt;&lt;/div&gt;</code> container begins with a heading using the <code>&lt;h4&gt;&lt;/h4&gt;</code> element.</p>
    <h3>
        The Area Headings markup</h3>
    <pre>&lt;h4&gt;Area Name&lt;/h4&gt;</pre>
    <h3>
        The Area headings CSS</h3>
    <pre>&#035;nav h4 {
    font-size: 1.5em;
    font-variant: small-caps;
    text-align: center;
    margin: 0em;
    padding-bottom: 0.3em;
    color: #fff;
    background: inherit; }
</pre>
    <h2>
        Link state symbols area</h2>
    <p>
        This legend defines the current state of all hyperlinks. In the Topics area of the navigation container, the current state of each link is represented by a different symbol positioned to the right of the hyperlink text - these are summarized in the table
        below. This is important to users that are color blind, visually impaired, or suffer from short term memory deficiency. It eliminates link state color, gives them the ability to identify if they have or have not visited a topic, and also allows them
        to identify a hyperlink by keyboard or mouse navigation.</p>
    <table summary="contains hyperlink states and related symbols">
        <caption>
            Hyperlink State Symbols
        </caption>
        <thead>
            <tr>
                <th scope="col">
                    State</th>
                <th scope="col">
                    Symbol</th>
                <th scope="col">
                    Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    Focus/Hover</th>
                <td>
                    <img alt="ball symbol" src="http://forum-test.oslo.osa/kirby/content/articles/67-building-accessible-static-navigation-with-css/hover.gif" />
                </td>
                <td>
                    Ball - signifies the <code>focus, hover</code> and <code>active</code> pseudo-classes</td>
            </tr>
            <tr>
                <th scope="row">
                    Unvisited</th>
                <td>
                    <img alt="chain link symbol" src="http://forum-test.oslo.osa/kirby/content/articles/67-building-accessible-static-navigation-with-css/link.gif" />
                </td>
                <td>
                    Chain link - signifies an unvisited link, the <code>link</code> pseudo-class</td>
            </tr>
            <tr>
                <th scope="row">
                    Visited</th>
                <td>
                    <img alt="check mark symbol" src="http://forum-test.oslo.osa/kirby/content/articles/67-building-accessible-static-navigation-with-css/visited.gif" />
                </td>
                <td>
                    Check mark - signifies a visited link, the <code>visited</code> pseudo-class</td>
            </tr>
            <tr>
                <th scope="row">
                    Currently Open</th>
                <td>
                    <img alt="star symbol" src="http://forum-test.oslo.osa/kirby/content/articles/67-building-accessible-static-navigation-with-css/star.gif" />
                </td>
                <td>
                    Star - signifies a topic web page which is currently open and being viewed</td>
            </tr>
        </tbody>
    </table>
    <h3>
        Link state symbols area markup</h3>
    <p>
        The legend is constructed using a simple unordered list, containing image elements with relative paths to the symbol graphics. <code>alt</code> attributes give a short description of the symbols. Please note that this legend gives a static rendering
        of the symbols - purely for identification purposes. The symbols will become dynamic through CSS image replacement in the Topics area hyperlinks, when the <code>linkstate class</code> attribute is added to the opening tag of the root unordered list element.</p>

<pre>&lt;h4&gt;link state symbols&lt;/h4&gt;
    &lt;ul class=&quot;linkstate&quot;&gt; 
        &lt;li class=&quot;focus&quot;&gt;&lt;img alt=&quot;Ball symbol.&quot; class=&quot;state&quot; src=&quot;images/hover.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Focus/Hover&lt;/li&gt; 
        &lt;li class=&quot;unvisited&quot;&gt;&lt;img alt=&quot;Chain link symbol.&quot; class=&quot;state&quot; src=&quot;images/link.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Unvisited&lt;/li&gt;
        &lt;li class=&quot;visited&quot;&gt;&lt;img alt=&quot;Check mark symbol.&quot; class=&quot;state&quot; src=&quot;images/visited.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Visited&lt;/li&gt; 
        &lt;li class=&quot;currently&quot;&gt;&lt;img alt=&quot;Star symbol.&quot; class=&quot;state&quot; src=&quot;images/star.gif&quot; width=&quot;16&quot; height=&quot;16&quot; /&gt;Currently Open&lt;/li&gt; 
    &lt;/ul&gt;</pre>
    
<h3>
        Link state symbols area CSS</h3>
    <p>
        The Link State Symbols area presentation code is defined as follows:</p>
    <dl>
        <dt><code>&#035;nav .linkstate {</code></dt>
        <dd>
            <code>font-weight: bold; }</code> - sets all characters to <code>bold</code></dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .state {</code></dt>
        <dd>
            <code>padding-right: 1em;</code> - sets the symbol image space to the right of the text</dd>
        <dd>
            <code>vertical-align: top; }</code> - sets the symbol image to the top of the text baseline</dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .focus {</code></dt>
        <dd>
            <code>color: &#035;fff;</code> - sets the text color to <code>white</code></dd>
        <dd>
            <code>background: transparent;</code> - sets the background color to <code>transparent</code>
        </dd>
        <dd>
            <code>text-decoration: underline; }</code> - sets the underline beneath the hyperlink
        </dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .link {</code></dt>
        <dd>
            <code>color: &#035;a4d3ee;</code> - sets the text color to light blue</dd>
        <dd>
            <code>background: transparent; }</code> - sets the background color to <code>transparent</code>
        </dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .visited {</code></dt>
        <dd>
            <code>color: orange;</code> - sets the text color to <code>orange</code></dd>
        <dd>
            <code>background: transparent; }</code>
        </dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .currently {</code></dt>
        <dd>
            <code>color: yellow;</code> - sets the text color to <code>yellow</code></dd>
        <dd>
            <code>background: transparent; }</code> - sets the background color to <code>transparent</code>
        </dd>
    </dl>
    <h2>
        Topics area</h2>
    <p>
        The Topics area contains the global navigation for the pages in the web site. Each topic is hyperlinked to its individual web page and is activated either by spatial keyboard navigation, tab key or mouse.</p>
    <p>
        In this code I have dynamically employed the symbols I identified earlier in the Link state symbols area legend. Identification of the current state of any link in the Topics area is achieved by inserting a <code>class</code> attribute with its value
        of <code>linkstate</code> in the root unordered list element opening tag <code>(&lt;ul class=&quot;linkstate&quot;&gt;)</code>. The link state symbols, as previously defined in the legend, now become dynamic though image replacement using external CSS.
        All hyperlinks in the Topics area now show their current link state via the symbol at the end of their link text. Links that are not in the <code>hover</code>, <code>active</code> or <code>focus</code> state will show the unvisited chain link symbol,
        the visited check mark symbol, or the star symbol which signifies that the page is currently open and being viewed.</p>
    <p>
        In addition, as a user navigates through the Topics area hyperlink list via keyboard or mouse and gains focus on each link, the link will become underlined, and a ball symbol will replace either the chain link (unvisited) or check mark (visited) symbols.
        This ball symbol represents the <code>hover</code>, <code>active</code>, and <code>focus</code> pseudo-classes of the anchor link element. Please note that the star symbol which signifies a currently open page, <em>will remain static and not change</em>
        (this is an optional feature which I&#39;ll describe later in the article).</p>
    
    <h3>
        Topics area markup</h3>
    <pre>&lt;h4&gt;topics&lt;/h4&gt;
    &lt;ul class=&quot;linkstate&quot;&gt;
        &lt;li&gt;&lt;a href=&quot;home.htm&quot;&gt;Home&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;topic1.htm&quot;&gt;Topic 1&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;topic2.htm&quot;&gt;Topic 2&lt;/a&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href=&quot;subtopic2a.htm&quot;&gt;Subtopic 2A&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;subtopic2b.htm&quot;&gt;Subtopic 2B&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;subtopic2c.htm&quot;&gt;Subtopic 2C&lt;/a&gt;&lt;/li&gt;
                        &lt;li class=&quot;subtopic2d&quot;&gt;&lt;a href=&quot;subtopic2d.htm&quot; title=&quot;This page is currently open.&quot;&gt;Subtopic 2D&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;subtopic2e.htm&quot;&gt;Subtopic 2E&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;subtopic2f.htm&quot;&gt;Subtopic 2F&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;topic3.htm&quot;&gt;Topic 3&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;topic4.htm&quot;&gt;Topic 4&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;topic5.htm&quot;&gt;Topic 5&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;</pre>
    <h3>
        Topics area CSS</h3>
    <p>
        The presentation code for the Topics area is defined in the following manner:</p>
    <dl>
        <dt><code>&#035;nav .linkstate {</code></dt>
        <dd>
            <code>font-weight: bold; }</code> - sets all link characters to <code>bold</code>.</dd>
    </dl>
    <dl>
        <dt><code>&#035;nav .linkstate a:link {</code></dt>
        <dd>
            <code>text-decoration: none;</code> - removes underlining from hyperlinks</dd>
        <dd>
            <code>color: &#035;a4d3ee;</code> - sets the font color to a light blue</dd>
        <dd>
            <code>padding-right: 1.7em;</code> - creates space on the right side of the Topic for the linkstate image</dd>
        <dd>
            <span class="codecolor">vertical-align: bottom;</span> - positions the image at the bottom of the text line
        </dd>
        <dd>
            <code>background: &#035;000 url(images/link.gif) no-repeat right; }</code> - shorthand for the background property, defined as follows:
            <ul>
                <li><code>&#035;000</code> - sets the background color to black</li>
                <li><code>url(images/link.gif)</code> - sets the relative path to the images folder containing the link icon image</li>
                <li><code>no-repeat</code> - sets the image to a single and not a multiple rendering</li>
                <li><code>right;</code> - positions the image to the right of the hyperlink</li>
            </ul>
    </dd></dl>
    <dl>
        <dt><code>&#035;nav .linkstate a:visited {</code></dt>
        <dd>
            <code>text-decoration: none;</code> - removes underlining from hyperlinks</dd>
        <dd>
            <code>color: orange;</code> - sets the font color to <code>orange</code></dd>
        <dd>
            <code>padding-right: 1.7em;</code> - makes space on the right side of the Topic for the linkstate image</dd>
        <dd>
            <code>vertical-align: bottom;</code> - positions the image at the bottom of the text line
        </dd>
        <dd>
            <code>background: &#035;000 url(images/visited.gif) no-repeat right; }</code> - shorthand for the background property, defined as follows:
            <ul>
                <li><code>&#035;000</code> - sets the background color to black</li>
                <li><code>url(images/visited.gif)</code> - sets the relative path to the images folder containing the link icon image</li>
                <li><code>no-repeat</code> - sets the image to a single and not a multiple rendering</li>
                <li><code>right;</code> - positions the image to the right of the hyperlink</li>
            </ul>
    </dd></dl>
    <dl>
        <dt><code>&#035;nav .linkstate a:hover {</code></dt>
        <dd>
            <code>text-decoration: none;</code> - removes underlining from hyperlinks</dd>
        <dd>
            <code>color: &#035;fff;</code> - sets the font color to white</dd>
        <dd>
            <code>padding-right: 1.7em;</code> - makes space on the right side of the Topic for the linkstate image</dd>
        <dd>
            <code>vertical-align: bottom;</code> - positions the image at the bottom of the text line
        </dd>
        <dd>
            <code>background: &#035;000 url(images/hover.gif) no-repeat right; }</code> - shorthand for the background property, defined as follows:
            <ul>
                <li><code>&#035;000</code> - sets the background color to black</li>
                <li><code>url(images/hover.gif)</code> - sets the relative path to the images folder containing the link icon image</li>
                <li><code>no-repeat</code> - sets the image to a single and not a multiple rendering</li>
                <li><code>right;</code> - positions the image to the right of the hyperlink</li>
            </ul>
    </dd></dl>
    <dl>
        <dt><code>&#035;nav .linkstate a:active {</code></dt>
        <dd>
            <code>text-decoration: none;</code> - removes underlining from hyperlinks</dd>
        <dd>
            <code>color: &#035;fff;</code> - sets the font color to white</dd>
        <dd>
            <code>padding-right: 1.7em;</code> - makes space on the right side of the Topic for the linkstate image</dd>
        <dd>
            <code>vertical-align: bottom;</code> - positions the image at the bottom of the text line
        </dd>
        <dd>
            <code>background: &#035;000 url(images/hover.gif) no-repeat right; }</code> - shorthand for the background property, defined as follows:
            <ul>
                <li><code>&#035;000</code> - sets the background color to black</li>
                <li><code>url(images/hover.gif)</code> - sets the relative path to the images folder containing the link icon image</li>
                <li><code>no-repeat</code> - sets the image to a single and not a multiple rendering</li>
                <li><code>right;</code> - positions the image to the right of the hyperlink</li>
            </ul>
    </dd></dl>
    <dl>
        <dt><code>&#035;nav .linkstate a:focus {</code></dt>
        <dd>
            <code>text-decoration: none;</code> - removes underlining from hyperlinks</dd>
        <dd>
            <code>color: &#035;fff;</code> - sets the font color to white</dd>
        <dd>
            <code>padding-right: 1.7em;</code> - makes space on the right side of the Topic for the linkstate image</dd>
        <dd>
            <code>vertical-align: bottom;</code> - positions the image at the bottom of the text line
        </dd>
        <dd>
            <code>background: &#035;000 url(images/hover.gif) no-repeat right; }</code> - shorthand for the background property, defined as follows:
            <ul>
                <li><code>&#035;000</code> - sets the background color to black</li>
                <li><code>url(images/hover.gif)</code> - sets the relative path to the images folder containing the link icon image</li>
                <li><code>no-repeat</code> - sets the image to a single and not a multiple rendering</li>
                <li><code>right;</code> - positions the image to the right of the hyperlink</li>
            </ul>
    </dd></dl>
    
    <h2>
        Currently open page feature</h2>
    
    <p>
        This is an accessibility navigation feature I&#39;ve found to be helpful to some users, and which I believe enhances their experience. Sometimes, a user may forget which page they have open and are viewing. Unwittingly, they may go to this specific page
        in the Topics area navigation and activate it, causing a page refresh. Some confusion may follow until they realize that this is the page they have open and are currently viewing.</p>
    <p>
        To eliminate the possibility of this happening, you need to identify the hyperlink in the Topics area nav list of the page that is currently open. I do this by dynamically attaching a star symbol to the end of the link text and color the link text bold
        yellow, visually identifying this topic link as the page that is currently open. This feature can be employed in both static and dynamic navigation lists.</p>
    <h3>
        Currently open page feature markup</h3>
    <p>
        The first step is to open each page in a text editor and assign an <code>id</code> to the <code>&lt;body&gt;</code> element of each web page in the document collection (if one is not already present). For example:</p>
    <ul>
        <li>home.htm web page: <code>&lt;body id=&quot;home&quot;&gt;</code></li>
        <li>topic1.htm web page: <code>&lt;body id=&quot;topic1&quot;&gt;</code></li>
        <li>topic2.htm web page: <code>&lt;body id=&quot;topic2&quot;&gt;</code></li>
        <li>etc.</li>
    </ul>
    <p>
        The second step is to find that same page listed in the Topics area unordered list (in that page), and add a <code>class</code> attribute and value to the list item containing its hyperlink. The value of this <code>class</code> attribute can be exactly
        the same as the one used for the <code>id</code> attribute in the opening <code>&lt;body&gt;</code> element. For example:</p>
    <ul>
        <li>home.htm web page, Topics area unordered list: <code>&lt;li class=&quot;home&quot;&gt;</code></li>
        <li>topic1.htm web page, Topics area unordered list: <code>&lt;li class=&quot;topic1&quot;&gt;</code></li>
        <li>topic2.htm web page, Topics area unordered list: <code>&lt;li class=&quot;topic2&quot;&gt;</code></li>
        <li>etc.</li>
    </ul>
    <p>
        The following markup sample of the site&#39;s home page illustrates both the <code>&lt;body&gt;</code> element <code>id</code> of &quot;home&quot;, and the Topics area unordered list item class of &quot;home&quot; being added to the markup. This is one rare
        occasion where I will add a <code>title</code> attribute and value of &quot;This page is currently open.&quot; to the anchor element.</p>
    <pre>&lt;body <em>id=&quot;home&quot;</em>&gt;
    &lt;div id=&quot;nav&quot;&gt;
        &lt;ul class=&quot;linkstate&quot;&gt;
            &lt;li <em>class=&quot;home&quot;</em>&gt;
                &lt;a href=&quot;Home.htm&quot; title=&quot;This page is currently open.&quot;&gt;Home&lt;/a&gt;
            &lt;/li&gt; 
        &lt;/ul&gt;
    &lt;/div&gt;</pre>
    <h3>
        Currently open page feature CSS</h3>
    <p>
        Now that we have the markup of the home page adjusted to identify it as being currently open when a user is viewing it, the final step is to create the CSS to make this happen.</p>
    <p>
        Each web page in the document collection will have its own group of four CSS type selectors in this specific order, in the external style sheet:</p>
    <ul>
        <li><code>&#035;home</code>: <code>id</code> selector of the page <code>&lt;body&gt;</code> element</li>
        <li><code>&#035;nav</code>: <code>id</code> selector of the Topics area <code>nav div</code> element</li>
        <li><code>.home</code>: <code>class</code> selector of the Topics area unordered list item element</li>
        <li><code>a</code>: anchor element selector</li>
    </ul>
    <p>
        An example of the collection of web pages and their selectors in the style sheet will look like the following:</p>
    <ul>
        <li><code>&#035;home &#035;nav .home a,</code></li>
        <li><code>&#035;topic1 &#035;nav .topic1 a,</code></li>
        <li><code>&#035;topic2 &#035;nav .topic2 a,</code></li>
        <li><code>&#035;topic3 &#035;nav .topic3 a,</code></li>
        <li>etc.</li>
    </ul>
    <p>
        Remember to add a comma after each <code>a</code> element type selector before starting the next group of selectors. The final group of selectors does not get a comma after the <code>a</code> element type selector. Lastly, in the following CSS, we define
        the appearance of the topic hyperlink when a topic web page is currently open.</p>
    <pre>&#035;home &#035;nav .home a, 
&#035;topic1 &#035;nav .topic1 a,
&#035;topic2 &#035;nav .topic2 a,
&#035;topic3 &#035;nav .topic3 a {
    color: yellow;
    background: transparent url(images/star.gif) no-repeat center right;
    cursor: default;
    padding-right: 1.7em;
    text-decoration: none;
    font-weight: bold; }</pre>
    <h2>
        Summary</h2>
    <p>This article highlighted several techniques to add accessibility to a simple, static, navigation menu. It aims to enhance the user experience regardless of their (dis)ability through a Skip to Content facility, a Link State Symbol legend, and the dynamic
    employment of these link states through their associated symbols. Please feel free to add, change, and experiment with the code, according to your needs. Thanks for your time and attention!</p>

