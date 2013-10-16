Title: Cross-device development techniques for widgets
----
Date: 2010-02-09 18:55:13
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

<p>This article looks at techniques, code examples, and tips for doing cross-device development of widgets. The techniques are grouped into the following sections: Usability, Architecture, Layout, Images and effects, Network, Client-server communication, DOM, and JavaScript.</p>

<ol>
<li><a href="#usability">Usability</a>
<ol>
<li><a href="#ux-simple">Keep the widget simple</a></li>
<li><a href="#ux-click">Offer larger click surfaces</a></li>
<li><a href="#ux-text">Replace or enhance text input</a></li>
<li><a href="#ux-hover">Use hover effects for improved usability, but do not rely on them</a></li>
</ol>
</li>
<li><a href="#architecture">Architecture</a>
<ol>
<li><a href="#arch-mvc">Use model-view-controller and separate data from views</a></li>
<li><a href="#arch-views">Build views when you need them, and throw them away when you are done.</a></li>
</ol>
</li>
<li><a href="#layout">Layout</a>
<ol>
<li><a href="#layout-mq">Use media types and media queries to adapt layout</a></li>
<li><a href="#layout-fullscreen">Make the widget fullscreen on small screens</a></li>
</ol>
</li>
<li><a href="#effects">Images and effects</a>
<ol>
<li><a href="#effects-8bit">Use 8-bit PNGs with a palette</a></li>
<li><a href="#effects-trans">Use transparency sparingly</a></li>
<li><a href="#effects-anims">Use time-based rather than frame-based animations</a></li>
</ol>
</li>
<li><a href="#network">Network</a>
<ol>
<li><a href="#network-timeout">Set timeouts when using XMLHttpRequests</a></li>
<li><a href="#network-concise">Make network traffic more concise</a></li>
</ol>
</li>
<li><a href="#server">Client-server communication</a>
<ol>
<li><a href="#server-proxy">Set up a proxy</a></li>
<li><a href="#server-compress">Use HTTP compression</a></li>
<li><a href="#server-persistent">Use persistent connections</a></li>
</ol>
</li>
<li><a href="#dom">DOM</a>
<ol>
<li><a href="#dom-prepare">Prepare new elements before adding them</a></li>
<li><a href="#dom-fragments">Use DocumentFragments</a></li>
</ol>
</li>
<li><a href="#javascript">JavaScript</a>
<ol>
<li><a href="#javascript-optimize">Optimize your JavaScript code: Avoid eval(), Function () and global variables</a></li>
</ol>
</li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="usability">Usability</h2>

<p>This section deals with how you organize the user interface in such a way that it is easy to learn and easy to use. In the technical aspects of cross-device development, this means considering among other things the input mechanism being used and the use of labelling.</p>

<h3 id="ux-simple">Keep the widget simple</h3>

<p>A widget should have a limited set of functions and focus on doing these functions well. Each view should be simple and clutter free. The more complicated user interface elements are and the more information present of each view, the more difficult it is to adapt the widget to different devices.</p>

<h3 id="ux-click">Offer larger click surfaces</h3>

<p>In the case of virtual cursors (or example on mobile) or remote controls (for example on the Wii), it is important to make sure buttons and other clickable surfaces are easy to spot and easy to hit. Tiny buttons require precision to hit, which makes the widget difficult to use. One way to handle this is to resize controls and/or change font sizes in the case of different media using <a href="http://www.w3.org/TR/css3-mediaqueries/">media queries</a>, for example:</p>

<pre>
<code>@media tv {
  #updateButton {
    font-size: 18px;
  }
}</code>
</pre>

<h3 id="ux-text">Replace or enhance text input</h3>

<p>Devices such as mobiles often have cumbersome keyboards, which means entering text is difficult. Your application should be prepared to supply alternatives to text input or at least simplify the input mechanism. In general, text input should only be used for long and unpredictable text. You should consider replacing all predictable text input with lists or similar controls regardless of device – there will always be a usability gain here. Less predictable text inputs, for example blog entries, obviously require proper text input. You should consider whether your application or parts of it is suited for cross-device usage in this case.</p>

<p>If you wish to retain text input controls, there are some ways of improving them:</p>

<ul>
<li>Enhance the text field with auto completion and a list of options.</li>
<li>Replace or overlay a standard text-input field with a <code>select</code> element containing common options.</li>
</ul>

<p>The <a href="http://www.whatwg.org/html5/">HTML5</a> specification defines several <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html">extensions to existing HTML form controls</a>. Most interesting in this case are the <code>datalist</code> element, <code>list</code> attribute and <code>autocomplete</code> attribute.</p>

<p>The <code>datalist</code> element allows you to connect a text field to a list of options presented when the user starts to type. The <code>autocomplete</code> attribute used with a form control is on by default and determines if autocompletion should be allowed for that control.</p>

<p>The following example shows how to use the <code>datalist</code> element:</p>

<pre>
<code>&lt;input id=&quot;country&quot; name=&quot;country&quot; type=&quot;text&quot; list=&quot;countries&quot;&gt;
&lt;datalist id=&quot;countries&quot;&gt;
  &lt;option label=&quot;Norway&quot; value=&quot;no&quot;&gt;
  &lt;option label=&quot;Sweden&quot; value=&quot;se&quot;&gt;
  &lt;option label=&quot;Denmark&quot; value=&quot;dk&quot;&gt;
&lt;/datalist&gt;</code>
</pre>

<p>In this case, the browser will render a select box connected to the text field. When the user types, suggestions are taken from the datalist and displayed in a select box below the text field. The rendering and suggestions are done natively, which should result in good performance. In this example, the <code>datalist</code> element is static, but its data could be loaded through Ajax and the element constructed through the DOM.</p>

<p>This may not be enough – some times you may want to get rid of the text input altogether and replace it with a select box with predefined values. The following code snippet shows an example of how to do this:</p>

<pre>
<code>if ( isHandheld ) //We don&#39;t want the user to type a country on a handheld
{
    var countries = { &#39;no&#39; : &#39;Norway&#39;, &#39;se&#39; : &#39;Sweden&#39;, &#39;dk&#39; : &#39;Denmark&#39; };

    //Construct the new select box
    var countrySelect = document.createElement(&#39;select&#39;);
    countrySelect.name = &#39;country&#39;;
    countrySelect.id = &#39;countries&#39;;
    var opt;

    for ( country in countries )
    {
        opt = countrySelect.appendChild(document.createElement(&#39;option&#39;));
        opt.value = country;
        opt.textContent = countries[country];
    }

    //Replace the input field with the select box
    var countryInput = document.getElementById(&#39;countries&#39;);
    countryInput.parentNode.replaceChild( countrySelect, countryInput ); 
}</code>
</pre>

<p>In this example, any labels related to the form control will point to the new <code>select</code> box. Note that you may need to change styling when doing this kind of replace.</p>

<h3 id="ux-hover">Use hover effects for improved usability, but do not rely on them</h3>

<p>Hover effects are great for telling the user that something can be activated – they may for example add outlines, change a background image in the control, or give it an outline or increased border. There is however and issue with them –  input devices such as touch screens will never be able to make use of such mechanisms. You should therefore strive to make your UI easy to understand and manipulate regardless of the availability of hover effects. Adding hints about what can be manipulated can be done by giving controls in your application font colours or background colours that make them stand out, borders, or increased font size or font weight.</p>

<p>Below is an example of how to make things stand out using CSS:</p>

<pre>
<code>#updateButton {
  font-weight: bold;
}
/*Improve the usability by adding more hints*/
#updateButton:hover {
  outline: 4px solid blue;
}</code>
</pre>

<h2 id="architecture">Architecture</h2>

<p>This section deals with how you organize your code into modules and how these modules process data in your application.</p>

<h3 id="arch-mvc">Use model-view-controller and separate data from views</h3>

<p>In order to more easily adapt widgets to different devices, you should split your widget code into multiple parts. The <a href="http://en.wikipedia.org/wiki/Model-view-controller">MVC pattern</a> is a good example of this. The format of data is defined in the model, while how that data is presented is defined in the view, separating the two concerns. The view is responsible for creating markup and styles based on the data in the model. The controller will listen for changes in the view, inform the view, and ask the view to update itself. For example:</p>

<pre>
<code>var contacts = [];  //A very simple model
//...
// Some controller code
document.getElementById(&#39;addContactButton&#39;).addEventListener( &#39;click&#39;, function () {
{
    //Get data from the view
    contacts.push( { &#39;name&#39; : name, &#39;number&#39; : number } );
    view.showContactList(); //Ask the view to update the info
}, false );</code>
</pre>

<p>One advantage of using this model is that you can implement multiple views on top of the same data, for example adapted for different types of devices.</p>

<h3 id="arch-views">Build views when you need them, and throw them away when you are done.</h3>

<p>Specific views, such as “tabs” in a widget, should be constructed when they are needed. If you construct all tabs in the beginning, the application will take longer to load. Furthermore, in keeping with the MVC pattern, they should be destroyed rather than hidden. This means should avoid <code>display: none</code>.Instead, rebuild the view from scratch every time the it is shown. This helps you avoid inconsistencies with the data in your views.</p>

<h2 id="layout">Layout</h2>

<p>This section deals with how you organize the elements in the user interfaces of your applications. Different devices have different display capabilities, screen sizes, and so on. In order to be a cross-device widget, it will need to be able to adapt itself to the circumstances.</p>

<h3 id="layout-mq">Use media types and media queries to adapt layout</h3>

<p>We recommend the following policy: Use <a href="http://www.w3.org/TR/css3-mediaqueries/">media queries</a> to detect the screen capabilities of the device and adapt the layout accordingly. Use the <code>handheld</code> media type as a fallback to recognize older devices with small screens. Media queries are a powerful and forward compatible feature, while media types, especially <code>handheld</code>, are a bit too coarse and limiting to be useful in the long run.</p>

<p>Many mobiles identify themselves with a ‘handheld’ media type in CSS. You can add style sheets or rules that only apply if this is the case.</p>

<p>Using a @media rule in CSS:</p>

<pre>
<code>@media handheld {
  // style rules here
}</code>
</pre>

<p>Importing a stylesheet to be used in handheld mode:</p>

<pre>
<code>@import url(somefile.css) handheld</code>
</pre>

<p>Linking to a style sheet and specifying it’s media type in HTML:</p>

<pre>
<code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;handheld&quot; href=&quot;somefile.css&quot;&gt;</code>
</pre>

<p>Note that the industry is moving away from the <code>handheld</code> media type as it is too broad a category. We recommend checking for it to be backwards compatible, but mainly rely on <a href="http://www.w3.org/TR/css3-mediaqueries/">media queries</a> to get more specific information about the screen. While the media type may help you to identify a handheld device, you don’t know if the handheld has a small screen like on some mobile phones, or a larger one, like on portable entertainment systems. In addition, different mobile device browsers have a vastly differing degree of standards support, so a single handheld style sheet might be far beyond the capabilities of some browsers or not befitting of their rendering ability.</p>

<p>Media queries allow you to style your page based on more specific capabilities, or media features, of the device. Examples include screen size (the <code>width</code>, <code>height</code>, <code>device-width</code> and <code>device-height</code> properties), DPI (the <code>resolution</code> property), and availability of color (the color and monochrome properties).</p>

<p>In the following example, the style rules will be used if the device has a maximum available width of 240 pixels or less, regardless of the media type.</p>

<pre>
<code>@media all and (max-width: 240px ) {
  //... style rules here
}</code>
</pre>

<h3 id="layout-fullscreen">Make the widget fullscreen on small screens</h3>

<p>On devices with small screens, widgets are usually displayed one at a time, and unless your widget is very small then it is possible that your widget will need scrollbars on some devices to use it properly. This is a semi-adequate solution built into the mobile Opera build, but you could improve the experience considerably by making the widget fill the screen if the device has enough screen space available – this will make it feel more like a native application.</p>

<p>One way to do this is to detect the “handheld” media type through script. There is no default JavaScript function to enable this but you can do it by adding <a href="http://dev.opera.com/articles/view/media-query-library/">this library script</a> to your page, which creates the global function <code>testMediaQuery()</code>. This function accepts a string representing a <a href="http://www.w3.org/TR/css3-mediaqueries/">CSS3 media query</a> and returns a boolean <code>true</code> if it matches the device (otherwise <code>false</code>). You can use this to determine whether or not to make the widget fullscreen – if so, then it would be a good idea to remove the drop shadow as well. The following code would do what we need in this case:</p>

<pre>
<code>var isHandheld = testMediaQuery(&quot;handheld&quot;); // boolean
var minWidth = 240;
var minHeight = 220;
// find out what minimum dimensions your widget can function at
if ( isHandheld )
{
    var width = Math.max( minWidth, screen.availWidth );
    var height = Math.max( minHeight, screen.availHeight );
    window.resizeTo( width, height ); // perform resizing
}</code>
</pre>

<p>You should check for the size of the screen as well, in case the device doesn’t identify itself with the <code>handheld</code> media type. After applying this script to the My Opera widget, I took a screenshot of the widget in both a landscape and a portrait mobile (running in the Widget Emulator) – see Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/118-crossdevice-development-techniques-for-widgets/mobile_fullscreen_portrait.png" title="Portrait " alt="Portrait " class="mobileshot" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/118-crossdevice-development-techniques-for-widgets/mobile_fullscreen_landscape.png" title="Landscape " alt="Landscape " class="mobileshot" /></p>

<p class="comment">Figure 1: The My Opera widget, with our full-screen code added.</p>

<p>As you can see, this has partially solved the problem. The widget now looks OK on a landscape mobile, but the portrait mobile is now unusable because the form elements are outside the screen. If you log in you will also realize that several other parts of the widget are not working correctly either, mostly involving elements not fitting on the screen. By using a style sheet with the CSS selector for “handheld” (@import url(style/handheld.css) handheld;), all of these issues can be solved very quickly. Figure 2 shows the result after only a dozen or so CSS rules:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/118-crossdevice-development-techniques-for-widgets/mobile_portrait_login.png" title="Portrait: login" alt="Portrait: login" class="mobileshot" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/118-crossdevice-development-techniques-for-widgets/mobile_portrait_friends.png" title="Portrait: friends" alt="Portrait: friends" class="mobileshot" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/118-crossdevice-development-techniques-for-widgets/mobile_landscape_friends.png" title="Portrait: friends" alt="Portrait: friends" class="mobileshot" /></p>

<p class="comment">Figure 2: You can fix positioning issues fairly easily with a few, well-placed CSS rules.</p>

<p>The widget now functions nicely. The changes made include:</p>

<ul>
<li>Making the login form wrap. </li>
<li>Hiding the minimize button (it is not necessary on mobiles). </li>
<li>Giving the friends list a maximum height so it does not run off the page.</li>
<li>Shrinking the text-size of the main tab buttons so they fit horizontally on one line. </li>
</ul>

<p>And, remember, after all this, the widget still looks like it does on the desktop!</p>

<p>While we use the <code>handheld</code> media type here, it is not absolutely necessary. You can simply check for the size of the screen and adapt the widget regardless of the type of device it is running on.</p>

<h2 id="effects">Images and effects</h2>

<p>This section deals with how to use images and how to optimize their usage to consume the least amount of resources. This is useful for devices with weak CPUs, poor color depth, and poor resolutions.</p>

<p>See the article on <a href="/articles/view/optimizing-opera-widget-graphics-for-mob/">Optimizing widget graphics for mobiles and devices</a> for details on making graphics files.</p>

<h3 id="effects-8bit">Use 8-bit PNGs with a palette</h3>

<p>If you can adapt your images without visible loss of quality, we recommend changing images to use 8-bit colors with a palette. Less colors help save memory and improve performance in your widget.</p>

<p><a href="http://depthdither.graphest.com/">Depthdither</a> for Photoshop can be used to reduce the color depth effectively.</p>

<h3 id="effects-trans">Use transparency sparingly</h3>

<p>For desktop widgets it is common to apply some sort of partially transparent border around the widget to give shadow effects or similar. Transparency can be a source of cool visual effects, but partially transparent elements or images may exact a heavy toll on weak processors. Additionally there are different levels of support for image transparency – support is lacking on Linux for example. We recommend avoiding transparency in most cases, and removing it from styles if the device is identified as not being a desktop.</p>

<h3 id="effects-anims">Use time-based rather than frame-based animations</h3>

<p>When you create a widget it is always fun to add animations to menus, view transitions, and so on. The most effortless way to achieve this is to use a library, but if you are creating animations manually, a common technique is to move an element say 20 times in quick succession, perhaps taking half a second in total. This will likely create a very smooth result on your own setup, but what if a user’s device is unable to draw so quickly? The result will be a very slow animation that locks the device up for moments at a time, leaving the user frustrated and likely to walk away.</p>

<p>How can we continue using animations while keeping our less CPU-privileged users happy? A simple solution is to ensure that there is an option on the config side of your widget to turn off the animations, although this is not ideal as your potential user may have given up on your widget in frustration before he/she discovers it. Another solution is to ensure your animations are time-based rather than frame count-based. This is quite easy to implement:</p>

<pre>
<code>function animate()
{
    var startTime = new Date();

    // constants:
    var C_ANIMATION_DURATION = 500; // milliseconds (half a second)
    var C_ANIMATION_DISTANCE = 200; // pixels (how far we want to move the item)

    var interval = setInterval(function()
    {
        // calculate milliseconds since we started
        var elapsedTime = (new Date()).getTime() - startTime.getTime();

        if (elapsedTime &gt;= C_ANIMATION_DURATION)
        {
            // ensure we don&#39;t animate too far
            elapsedTime = C_ANIMATION_DURATION;
            clearInterval(interval); // stop the animation
        }

        moveItemToPosition(elapsedTime/C_ANIMATION_DURATION*C_TOTALDISTANCE);

    }, 30); // 30 ms is fast enough to trick the eye
}</code>
</pre>

<p>This will give the result of a smooth animation if the device can handle it, but otherwise a very quick animation of possibly 2 or 3 frames will occur, and the one thing you can be sure of is that the animation will never take longer than the time you designate under any circumstances. Of course, the best solution is to implement both time-based animations and the option to disable animations altogether.</p>

<h2 id="network">Network</h2>

<p>This section deals with how to optimize data for transfer across potentially poor or unstable network connections.</p>

<h3 id="network-timeout">Set timeouts when using XMLHttpRequests</h3>

<p>Unless otherwise specified, XMLHttpRequests will expire after quite some time, following the browser’s built in timeouts. To be more flexible and responsive to the user in an environment where the network connection may be unstable, it makes sense to add timeouts to AJAX calls. The exact time will need to be adapted to the device at hand. The following is a simple example of how this can be done:</p>

<pre>
<code>var xhr = new XMLHttpRequest ();
xhr.open(&#39;GET&#39;, url, false);
xhr.onreadystatechange = function () {
    if ( this.readyState==4 )
    {                    
        clearTimeout(timeout);
        //Handle the data
    }
}
var timeout = setTimeout( 
    function ()
    {
        xhr.abort();
        callback({type:&#39;error&#39;,value:&#39;Connection timed out&#39;});
    },
    60*1000 //Timeout of one minute
);
xhr.send();</code>
</pre>

<p>You should also allow the user to cancel requests if they take too long, as the user may be aware that the device is offline.</p>

<h3 id="network-concise">Make network traffic more concise</h3>

<p>In cases where the network connection is slow or unstable, or where transferring data costs money, you will want to limit the amount of data you transfer. Consider the following advice:</p>

<ul>
<li>Use XML (Structured markup, parsed into DOM objects on the receiving end) when the size of data does not matter as much, and you need a structured format that might be shared with other applications.</li>
<li>Use JSON (JavaScript Object Notation – string versions of JavaScript objects, evaluated as objects on the receiving end) when data size needs to be kept as small as possible, but you have enough CPU and memory to deal with the evaluation of the data into JavaScript objects.</li>
<li>Use CSV (comma-separated values – values consistently separated by delimiters such as commas or semicolons) when you have many similar objects, the order of values is important, you want data to be as small as possible, and you do not have much CPU or memory with which to work.</li>
<li>Use query string-like formats (names and values separated like CGI query strings: param1=value1&amp;param2=value2) when you have one have one object with properties, the size of the data needs to be as small as possible, when you do not have much CPU and memory to work with, and you do not have the need for complex data.</li>
</ul>

<p>Let us explore each of these options in more detail.</p>

<p>XML has long been a corner stone of the Web, especially through the advent of Ajax. On the plus side, you get data in a structured format, which is often automatically parsed into a DOM object. This is the case for the <code>responseXML</code> property of an <code>XMLHttpRequest</code> object. The format is in widespread use, which means integration with other Web services may be easier. On the downside, XML is usually quite verbose and will need to be parsed to become useful. Data in an XML format is also error prone, as it needs to be well-formed. An example of XML data can look like this (pretty printed for clarity):</p>

<pre>
<code>&lt;person&gt;
  &lt;name&gt;Rune Halvorsen&lt;/name&gt;
  &lt;age&gt;28&lt;/age&gt;
&lt;/person&gt;</code>
</pre>

<p><a href="http://www.json.org/">JSON</a>, originally conceived by Douglas Crockford, has also been around for a long time. The plus side to JSON is that it can readily be translated into JavaScript objects, and the format is structured, but less verbose than XML. The downside is that JSON data needs to be evaluated (by calling <code>eval()</code> in JavaScript) in order to become objects. Evaluation is an expensive process in terms of CPU and memory, as an entirely new scripting environment is created to cater for one <code>eval()</code> call.  JSON data looks like this:</p>

<pre>
<code>{ &#39;name&#39; : &#39;Rune Halvorsen&#39;, &#39;age&#39; : 28 }</code>
</pre>

<p>Note that the spaces around the items and operators can be removed.</p>

<p>CSV is an extremely simple format. On the plus side, it is usually very concise, which means less data to transfer. The format is easy to parse, using straightforward string splitting. The downside is that the format does not have much structure, which means it is not appropriate for complex data. If you want more structure, you will need to write your own parser. CSV data can look something like this:</p>

<pre>
<code>#name;age
Rune Halvorsen;28
Hans S. Tømmerholt;26</code>
</pre>

<p>Query string formats map values directly to names in a dictionary-like way.</p>

<pre>
<code>name=Rune Halvorsen;age=28</code>
</pre>

<h2 id="server">Client-server communication</h2>

<p>This section deals with how to configure the server-side part of an application, for example when developing your own backend.</p>

<h3 id="server-proxy">Set up a proxy</h3>

<p>The most common approach is to have the widget retrieve data directly from a Web site such as Flickr, Facebook, or similar. This works well when the user has a fast internet connection, but it might be problematic if the bandwidth is limited, as on mobile phones or other devices. The problem becomes worse if the widget relies on data from multiple sites for creating a mashup. In this case it might make more sense to supply your own proxy backend to download, cache and reformat the data, and deliver it to the device.</p>

<h3 id="server-compress">Use HTTP compression</h3>

<p>In order to reduce network activity, you should set up your server to compress data. Opera will always inform the server that it supports compressed content by sending the following header with all requests:</p>

<pre>
<code>Accept-Encoding: deflate, gzip, x-gzip, identity, *;q=0</code>
</pre>

<p>For this to work, however, the server from which you are downloading data will need to be configured properly.</p>

<p>For Apache 2 the relevant module is mod_deflate. When enabled, this module uses compression for <code>text/plain</code>, <code>text/html</code> and <code>text/xml</code> by default. See the <a href="http://httpd.apache.org/docs/2.0/mod/mod_deflate.html">Apache documentation</a> for more information on this module. See this <a href="http://howtoforge.com/apache2_mod_deflate">tutorial</a> for information on setting it up.</p>

<p>For IIS, HTTP Compression must be enabled in the IIS Manager. When enabled, the server will use compression for <code>.txt</code>, <code>.html</code> and <code>.htm</code> files. See the <a href="http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/25d2170b-09c0-45fd-8da4-898cf9a7d568.mspx?mfr=true">documentation for IIS 6.0</a> for more information.</p>

<h3 id="server-persistent">Use persistent connections</h3>

<p>Setting up and tearing down connections for individual files takes time; you should instead use persistent HTTP connections. In this case, the connection will be kept open, for example when loading style sheets and script files along with a Web page. Opera will by default request the connection to be kept alive, and Apache and IIS have persistent connections enabled by default. Refer to the <a href="http://httpd.apache.org/docs/2.0/mod/core.html#keepalive">Apache</a> or <a href="http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/d7e13ea5-4350-497e-ba34-b25c0e9efd68.mspx?mfr=true">IIS 6.0</a> documentation for details on how to control the behavior.</p>

<h2 id="dom">DOM</h2>

<p>This section deals with general optimization techniques you can employ when working with the Document Object Model.</p>

<h3 id="dom-prepare">Prepare new elements before adding them</h3>

<p>Adding an element to the DOM will always force a reflow, as the browser will need to work out where to put it. This means it is wise to always complete the construction of a new element and all its children and styles before adding it to the document. This way, one reflow is enough.</p>

<p>The following is an example of how not to do this:</p>

<pre>
<code class="example wrong">var div = document.createElement(&#39;div&#39;);
container.appendChild(div);
var a = document.createElement(&#39;a&#39;);
a.href = &quot;#foo&quot;;
div.appendChild(a);
a.style.display = &#39;block&#39;;
a.style.width = &#39;200px&#39;;</code>
</pre>

<p>The example can be corrected as follows:</p>

<pre>
<code class="example">var div = document.createElement(&#39;div&#39;);
var a = document.createElement(&#39;a&#39;);
a.href = &quot;#foo&quot;;
a.style.display = &#39;block&#39;;
a.style.width = &#39;200px&#39;;
div.appendChild(a);
container.appendChild(div);</code>
</pre>

<h3 id="dom-fragments">Use DocumentFragments</h3>

<p>The <code>DocumentFragment</code> object acts as a container for several elements. When you add the fragment to your document, all its children will get added. This is great when you want to avoid adding several individual elements to a document, but do not want to use a container element around them. The fragment is a subclass of <code>Node</code>, which means it has methods like <code>appendChild</code> and <code>insertBefore</code>:</p>

<pre>
<code class="example">var frag = document.createDocumentFragment();
var p1 = document.createElement(&#39;p&#39;);
//...
var p2 = document.createElement(&#39;p&#39;);
//...
frag.appendChild(p1);
frag.appendChild(p2);
//...
document.body.appendChild(frag);</code>
</pre>

<p>In the example above, only the two <code>p</code> elements will be added to the body and only one reflow will occur.</p>

<h2 id="javascript">JavaScript</h2>

<p>This section deals with general optimization techniques for JavaScript.</p>

<h3 id="javascript-optimize">Optimize your JavaScript code: Avoid eval(), Function () and global variables</h3>

<p>As performance is critical on many devices you need to write your code carefully for it to be efficient. See the article on <a href="http://dev.opera.com/articles/view/efficient-javascript/">Efficient JavaScript</a> for some tips. Some more points are as follows:</p>

<ul>
<li>Avoid the <code>eval()</code> function, the <code>Function</code> constructor and passing strings to <code>setTimeout()</code>. These create a new scripting environment which may be costly for performance.</li>
<li>Avoid global variables. Local variables are found more quickly, as the script does not need to look through the scope chain to find them.</li>
</ul>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="/articles/view/packing-and-deploying-your-opera-widget/">Packing and deploying your Opera Widget</a> – <a href="http://dev.opera.com/">dev.opera.com</a> article on how to deploy your widgets</li>
<li><a href="http://widgets.opera.com/">widgets.opera.com</a> – find and share widgets here.</li>
<li>The <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2.0</a> spec.</li>
<li>Description of the <a href="http://en.wikipedia.org/wiki/Model-view-controller">MVC pattern</a></li>
<li><a href="http://www.w3.org/TR/CSS2/media.html">CSS 2 Media types</a> from the <a href="http://www.w3.org/TR/CSS2/">CSS level 2 recommendation</a> at the <a href="http://www.w3.org/">W3C</a>.</li>
<li>The <a href="http://www.w3.org/TR/css3-mediaqueries/">CSS 3 Media queries</a> spec.</li>
<li>The <a href="/articles/view/media-query-library/">Test Media Query JavaScript library</a> on <a href="http://dev.opera.com/">dev.opera.com</a>.</li>
<li><a href="/articles/view/optimizing-opera-widget-graphics-for-mob/">Optimizing widget graphics for mobiles and devices</a></li>
<li><a href="http://depthdither.graphest.com/">Depthdither homepage</a></li>
<li><a href="http://dev.opera.com/articles/view/efficient-javascript/">Efficient JavaScript</a> article on <a href="http://dev.opera.com/">dev.opera.com</a>.</li>
<li>Apache 2 documentation on <a href="http://httpd.apache.org/docs/2.0/mod/mod_deflate.html">mod_deflate</a>.</li>
<li><a href="http://howtoforge.com/apache2_mod_deflate">Tutorial on mod_deflate</a> by Falko Timme at <a href="http://howtoforge.com/">Howtoforge.com</a>.</li>
<li>Microsoft IIS 6.0 documentation on <a href="https://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/25d2170b-09c0-45fd-8da4-898cf9a7d568.mspx?mfr=true">using HTTP Compression for Faster Downloads</a>.</li>
<li>Apache 2 documentation on <a href="http://httpd.apache.org/docs/2.0/mod/core.html#keepalive">the KeepAlive directive</a></li>
<li>Microsoft IIS 6.0 documentation on Enabling <a href="http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/d7e13ea5-4350-497e-ba34-b25c0e9efd68.mspx?mfr=true">HTTP Keep-Alives</a></li>
<li><a href="http://www.json.org/">JSON – JavaScript Object Notation</a>.</li>
<li><a href="http://developer.yahoo.com/performance/">Exceptional performance techniques</a> at the <a href="http://developer.yahoo.com/">Yahoo! Developer Network</a>.</li>
</ul>


<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
