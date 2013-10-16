Title: Fixing YUI CSS grid issues with JavaScript and the DOM
----
Date: 2007-11-21 15:59:11
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

<h2>Introduction</h2>

<p>In the last article I introduced you to the YUI CSS grids and showed how to create a CSS layout by adding the right markup and classes to a basic and valid HTML structure. We ended pointing out some problems of CSS layouts and I hinted that you can use JavaScript to fix those. Well, this is the time and this is the place.</p> 

<h2>Adding some JavaScript magic</h2>

<p>In the  last article in this series I&#39;ve come as far as I can go with CSS and grids (well, I could have covered nesting in more detail, but you can have a go at that yourself and – let&#39;s face it, you will use the grids builder like anybody else.) Now it is time to add some JavaScript to work around some layout issues.</p> 

<p>JavaScript can do several things CSS cannot do. Specifically JavaScript can read the size of screen elements and the browser, allowing you to fix CSS layout issues, such as inconsistent column heights. The best example are columns with the same height independent of content. Below I&#39;ll add some content and styles to the grid we defined earlier. The first issue to notice is that, while the columns and everything work out, they do not line up with each other, and are as high as their content, as shown in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/57-fixing-yui-css-grid-issues-with-javascript-and-the-dom/unfixed.gif" alt="The CSS columns do not line up" />

<p class="comment"> Figure 1: The CSS columns by default do not line up, and are as high as their text content.</p>

<p>However, before I can fix that, I&#39;ll have to work around another assumption I made.</p>

<h2>Will the template fit?</h2>

<p>The <code>doc2</code> template assumes the browser viewport to be at least 950 pixels wide. If that is not the case, the browser will show a horizontal scrollbar, which is not a nice thing to do to a visitor.</p> 

<p>I can work around that problem using the YUI DOM utility. This part of the library helps you access the document, read out dimensions of the browser and elements and set styles reliably across browsers. To fix the problem of the horizontal scrollbar, I can do the following using JavaScript:</p>

<p>Check that the viewport is at least 950 pixels wide 
If it isn&#39;t, set the <code>id</code> of the main container to <code>doc</code> (which means switching to the 750 pixel wide layout), and if it is, set it to <code>doc2</code>.</p>

<p>The code is pretty simple (check it out in <a href="switchtemplate.html" alt="The template now switches via JavaScript when the page gets below a certain width">switchtemplate.html</a>.) At the end of the body I add the combined YUI components Yahoo, DOM and Event and my own script.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;http://yui.yahooapis.com/2.3.1/build/yahoo-dom-event/yahoo-dom-event.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://forum-test.oslo.osa/kirby/content/articles/57-fixing-yui-css-grid-issues-with-javascript-and-the-dom/switchtemplate.js&quot;&gt;&lt;/script&gt;</code></pre>

<p>The YUI include automatically gives us the YAHOO.example namespace, which I use to define the code in switchtemplate.js:</p>

<pre><code>YAHOO.example.switchTemplate = function(){
    var outerContainer = YAHOO.util.Dom.get(&#39;doc2&#39;) || YAHOO.util.Dom.get(&#39;doc&#39;);
    if(outerContainer){
        var currentWidth = YAHOO.util.Dom.getViewportWidth();
        outerContainer.id = (currentWidth &lt; 950) ? &#39;doc&#39; : &#39;doc2&#39;;
    };
}();</code></pre>

<p>I am using the JavaScript Module Pattern (as explained in detail on the <a href="http://yuiblog.com/blog/2007/06/12/module-pattern/" alt="The YUI blog">YUI blog</a>) to make sure that none of our code is in the global variable space.</p> 

<p>I then use the <code>YAHOO.util.Dom.get()</code> method to retrieve the outer container element. I check if this is the element with the <code>id doc2</code>; if that one doesn&#39;t exist I select the one with the <code>id doc</code> instead. I store the element in the variable <code>outerContainer</code> and test if it has been successfully set.</p> 

<p>If it has the <code>YAHOO.util.Dom.getViewportWidth()</code> method reads the width of the current browser window. If the width is less than 950 the <code>id</code> of the outer container is set to <code>doc</code>, otherwise it&#39;s set to <code>doc2</code>. The result can be seen in Figure 2:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/57-fixing-yui-css-grid-issues-with-javascript-and-the-dom/switching.gif" alt="Using JavaScript to dynamically alter the layout depending on browser width" />

<p class="comment">Figure 2: When the browser is less than 950 pixels wide the template switches to the one expecting at least 750 pixels space.</p>

 
<h2>Fixing the sidebar</h2>

<p>That took care my assumption of 950 pixels. The next annoyance is the side bar not being as high as the rest of the content. This can also be easily fixed, and my next example - <a href="fixsidebar.html" alt="This example fixes the sidebar">fixsidebar.html</a> - does exactly that.</p> 

<p>The logic is to check the height of the yui-main container and set the height of the sidebar to this one. That way the sidebar will span the whole height regardless of its content. You can find out the height of an element from its offsetHeight property, and this is what I use in fixsidebar.js:</p>

<pre><code>YAHOO.example.fixSideBar = function(){
    var outerContainer = YAHOO.util.Dom.get(&#39;doc2&#39;) || YAHOO.util.Dom.get(&#39;doc&#39;);
    if(outerContainer){
        var currentWidth = YAHOO.util.Dom.getViewportWidth();
        outerContainer.id = (currentWidth &lt; 950) ? &#39;doc&#39; : &#39;doc2&#39;;
    };
    var mainContainer = YAHOO.util.Dom.get(&#39;yui-main&#39;);
    var sideBar = YAHOO.util.Dom.get(&#39;sidebar&#39;);
    if(mainContainer &amp;&amp; sideBar){
        YAHOO.util.Dom.setStyle(sideBar,&#39;height&#39;,mainContainer.offsetHeight + &#39;px&#39;);
    };
}();</code></pre>

<p>This checks for the existence of the elements with the <code>id</code>s of <code>yui-main</code> and <code>sidebar</code>, and sets the <code>height</code> style property to the <code>offsetHeight</code> of the <code>yui-main</code> element. In order to set style properties we use the <code>YAHOO.util.Dom.setStyle()</code> method. Once this script has run the side bar will be as high as the main container and look a lot cleaner, as seen in Figure 3:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/57-fixing-yui-css-grid-issues-with-javascript-and-the-dom/sidebarfixed.gif" alt="Fixing the sidebar using JavaScript" />

<p class="comment"> Figure 3: By reading out the height of the main container and setting the height of the side bar we can make it span all the way down to the footer.</p>

 
<h2>Normalizing column heights</h2>

<p>The last little hiccup in my design is that the headings and content boxes in the three column grid are all a different height. This can be fixed using the same trick I used for the sidebar. The only difference is that I need to loop through all of them to determine which one is the highest. The following script (found in <a href="fixcolumns.html" alt="This script fixes the differing heights of the central 3 columns">fixcolumns.html</a>) shows this solution:</p>

<pre><code>YAHOO.example.fixColumns = function(){
    var outerContainer = YAHOO.util.Dom.get(&#39;doc2&#39;) || YAHOO.util.Dom.get(&#39;doc&#39;);
    if(outerContainer){
        var currentWidth = YAHOO.util.Dom.getViewportWidth();
        outerContainer.id = (currentWidth &lt; 950) ? &#39;doc&#39; : &#39;doc2&#39;;
    };
    var mainContainer = YAHOO.util.Dom.get(&#39;yui-main&#39;);
    var sideBar = YAHOO.util.Dom.get(&#39;sidebar&#39;);
    var showCase = YAHOO.util.Dom.get(&#39;showcase&#39;);
    if(showCase){
        function setMax(collection){
            var max = 0;
            for(var i=0;collection[i];i++){
                var height = collection[i].offsetHeight;
                max = height &gt; max ? height : max;
            };
            for(i=0;collection[i];i++){
                YAHOO.util.Dom.setStyle(collection[i],&#39;height&#39;,max + &#39;px&#39;);
            };            
        };
        setMax(showCase.getElementsByTagName(&#39;h2&#39;));
        setMax(showCase.getElementsByTagName(&#39;p&#39;));
    };
    if(mainContainer &amp;&amp; sideBar){
        YAHOO.util.Dom.setStyle(sideBar,&#39;height&#39;,mainContainer.offsetHeight + &#39;px&#39;);
    };
}();</code></pre>

<p>Note that this functionality needs to be added before the one fixing the sidebar as the overall height of the container might change.</p> 

<p>I check if the element with the <code>id</code> of <code>showcase</code> exists and define a function that determines the highest element in a collection. The function does this by reading the <code>offsetHeight</code> of each and setting a <code>max</code> variable to the highest. It then loops through all the elements and sets their height to this <code>max</code> value.</p>

<p>This function is called twice, once for all the <code>h2</code> elements in the element with an <code>id</code> of <code>showcase</code> and a second time with all the <code>p</code> elements. Once this has run my layout looks clean and aligns nicely, as shown in Figure 4:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/57-fixing-yui-css-grid-issues-with-javascript-and-the-dom/fixedcolumns.gif" alt="The main 3 columns are now fixed as well" />

<p class="comment"> Figure 4: I can fix the height of columns by determining which one is the highest and setting the height of all the others accordingly.</p>

 

<h2>To be continued</h2>

<p>These are but a few small examples how you can use the DOM component of the YUI to fix layout issues that aren&#39;t covered by the YUI grids. In my next article I&#39;ll look more closely into the DOM and the event parts of the YUI and go on towards other YUI components like animation and Ajax.</p>

