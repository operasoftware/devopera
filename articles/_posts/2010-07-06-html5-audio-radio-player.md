---
title: An HTML5 `<audio>` Radio Player
authors:
- trygve-lie
intro: 'In this article Trygve Lie takes you through the basics of the HTML5 `<audio>` element, then uses jQuery and jPlayer to build a cross-browser radio player based on `<audio>` with a Flash fallback. As a final step, he converts the player into an Opera Widget for added cross-device appeal.'
layout: article
---
<h2>Introduction</h2>

<p>Previous to HTML5 coming on the scene, it was a fairly awkward task to add audio to web pages. For many years, Flash was the only way to provide audio in any kind of interactive way – but with the introduction of the <a href="http://www.w3.org/TR/html5/the-iframe-element.html#the-audio-element"><code>&lt;audio&gt;</code> element in HTML5</a>, audio playback can now be done natively. It plays nicely with other open standards — you can create custom buttons using CSS and HTML, and give them appropriate functionality using the HTML5 audio API. It is nice not having to go back into Flash every time you want to make some changes to the audio content.</p>

<p>In this article we will look at the <code>&lt;audio&gt;</code> element, starting with the basics, looking in detail at how it works across different browsers, and then build a radio player application that uses live audio from a streaming server.</p>

<h2>The basic syntax</h2>

<p>The <code>&lt;audio&gt;</code> element is simple to use. To play an Ogg Vorbis file you can simply write:</p>

<pre><code>&lt;audio src="http://yourserver/rockandroll.ogg" controls preload&gt; &lt;/audio&gt;</code></pre>

<p>The browser will then provide a simple player element in the web page.</p>

<p><img src="native_player.png" alt="Native audio element in in Opera" /></p>
<p class="comment">Figure 1: a basic <code>&lt;audio&gt;</code> element rendered in Opera.</p>

<p>The <code>&lt;audio&gt;</code> element has five attributes:</p>

<ul>

<li><p>
<code>src</code> contains the path to the audio file you want to play. The <code>src</code> attribute can also be replaced with one or more nested <code>&lt;source&gt;</code> elements like this:
</p>

<pre><code>&lt;audio controls preload&gt;
    &lt;source src="http://yourserver/rockandroll.ogg" /&gt;
&lt;/audio&gt;</code></pre>

<p>This is useful because you can use multiple <code>&lt;source&gt;</code> elements to point to different audio formats. As you'll see later, different browsers support different formats, so ideally you should provide something that any browser can play. For example:</p>

<pre><code>&lt;audio controls preload&gt;
    &lt;source src="http://yourserver/rockandroll.ogg" /&gt;
    &lt;source src="http://yourserver/rockandroll.mp3" /&gt;
&lt;/audio&gt;</code></pre>

<p class="note">Note: to convert between Ogg and MP3 formats, there are a variety of free applications available, such as <a href="http://www.freerip.com/">Free Rip</a> for Windows, and <a href="http://mp3.about.com/gi/o.htm?zi=1/XJ&zTi=1&sdn=mp3&cdn=gadgets&tm=12&f=10&su=p284.13.342.ip_p504.6.342.ip_&tt=3&bt=0&bts=0&zu=http%3A//www.nch.com.au/switch/index.html">Audio MP3 converter</a> for Mac.</p>

</li>

<li><p>
<code>autoplay</code> is a boolean attribute specifying whether the source file should start to play automatically at page load or not.
</p>

<p class="note">Note: bear in mind that autoplay is considered bad by many users. Autoplay will force audio to play without the interaction of the user and can interfere with other audio sources the user might be listening to. If you need to use autoplay, make sure you always provide the user with the possibility to stop the playback.</p>
</li>

<li><p>
<code>preload</code> tells the browser to make an informed decision about how much data to download. A mobile browser may decide to preload nothing, in order to conserve bandwidth, while a desktop browser on a fast connection might begin loading immediately. Available values are <code>preload="none"</code>, <code>preload="metadata"</code> and <code>preload="all"</code>. Find out <a href="http://www.w3.org/TR/html5/the-iframe-element.html#attr-media-preload">more about the preload attribute</a>.</p></li>

<li><p>
<code>loop</code> is a boolean attribute specifying whether the source file should start to play all over again when the end of the source file has been reached.
</p></li>

<li>
<p><code>controls</code> is a boolean attribute specifying whether or not the browser should display its default media controls or not. If you don't specify this, no controls are shown, and you need to create your own controls using the handy audio JavaScript API and HTML, CSS, and whatever other web standards you want to draw the controls with.</p>
</li>

</ul>

<h2>The JavaScript API</h2>
<p>
The <code>&lt;audio&gt;</code> element exposes a powerful JavaScript API. In this article I will only scratch the surface of this API, since we will be using a third party library to help us build our player, but it is still useful to know about.
</p>

<p>
In JavaScript we can invoke an <code>Audio</code> object, which returns an <code>&lt;audio&gt;</code> element. Note that this element will not be part of the page's DOM, unless we explicitly add it to the document with further scripting. However, regardless of whether or not it's in the DOM itself, the <code>&lt;audio&gt;</code> element can be controlled via its API methods and properties. We can pass the URL of an audio file we want to play as an argument to the object like this:
</p>

<pre><code>var audio = new Audio("http://yourserver/rockandroll.ogg");</code></pre>

<p>
We can also change the source file by adding a new value to the <code>src</code> attribute:
</p>

<pre><code>audio.setAttribute("src", "http://yourserver/morerock.ogg");</code></pre>

<p>
By accessing the methods <code>audio.play()</code> and <code>audio.pause()</code> it is possible to start and pause the playback of the source file. <code>audio.volume</code> provides access to the volume, and the eventlistener <code>timeupdate</code> fires an event for every time update during playback. These simple methods are all we need to make a simple player, with the same functionality as the default player the browser provides.
</p>

<p>
Let's look at these features in action! The following script will construct an <code>&lt;audio&gt;</code> element and assign event handlers to some simple HTML buttons that we can then use to control the audio playback:
</p>

<pre><code>// Invoke new Audio object
var audio = new Audio('test.ogg');

// Get the play button and append an audio play method to onclick
var play = document.getElementById('play');
play.addEventListener('click', function(){
    audio.play();
}, false);

// Get the pause button and append an audio pause method to onclick
var pause = document.getElementById('pause');
pause.addEventListener('click', function(){
    audio.pause();
}, false);

// Get the HTML5 range input element and append audio volume adjustment to onchange
var volume = document.getElementById('volume');
volume.addEventListener('change', function(){
    audio.volume = parseFloat(this.value / 10);
}, false);

// Get where one are in playback and push the time to an element
audio.addEventListener("timeupdate", function() {
    var duration = document.getElementById('duration');
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    duration.innerHTML = m + '.' + s + 'sec';
}, false);</code></pre>

<p>The above script is applied to the following HTML:</p>

<pre><code>&lt;div&gt;
    &lt;input id="play" type="button" value="Play" /&gt;
    &lt;input id="pause" type="button" value="Pause" /&gt;
    &lt;span id="duration"&gt; &lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
    Volume:
    &lt;input id="volume" type="range" min="0" max="10" value="5" /&gt;
&lt;/div&gt;</code></pre>

<p><a href="/articles/view/html5-audio-radio-player/index.html">See the simple audio player in action</a>.</p>

<p>If you want to read about the Audio API in more detail I suggest you dive into Simon Pieters' <a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">"everything you need to know about HTML5 video and audio"</a> article.</p>


<h2>Codec support across browsers</h2>
<p>
The <code>&lt;audio&gt;</code> element goes hand in hand with the <code>&lt;video&gt;</code> element in HTML5. There have been a lot of debates and disagreements as to which video format to use (read our <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> for more details), and audio has undergone the same kinds of discussions. Currently the support for audio codecs across the major browsers is as follows:</p>

<table>
    <thead>
    <tr>
        <th scope="col">Browser</th>
        <th scope="col" style="width:20%;">(Ogg) Vorbis</th>
        <th scope="col">Mp3</th>
        <th scope="col">Wave</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">Opera 10.50</th>
        <td style="width:20%;">x</td>
        <td></td>
        <td>x</td>
    </tr>
    <tr>
        <th scope="row">Firefox 3.5</th>
        <td style="width:20%;">x</td>
        <td></td>
        <td>x</td>
    </tr>
    <tr>
        <th scope="row">Safari 4</th>
        <td style="width:20%;"></td>
        <td>x</td>
        <td>x</td>
    </tr>
    <tr>
        <th scope="row">Chrome 3</th>
        <td style="width:20%;">x</td>
        <td>x</td>
        <td></td>
    </tr>
    <tr>
        <th scope="row">IE 8</th>
        <td style="width:20%;"></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
</table>

<p>To support several browsers we need to provide the same audio content in different formats. As we mentioned before, you can reference the different formats using multiple <code>&lt;source&gt;</code> elements placed inside the <code>&lt;audio&gt;</code> element:</p>

<pre><code>&lt;audio controls preload&gt;
    &lt;source src="http://yourserver/rockandroll.ogg" /&gt;
    &lt;source src="http://yourserver/rockandroll.mp3" /&gt;
    &lt;!-- A fallback solution - Flash would do --&gt;
&lt;/audio&gt;</code></pre>

<p>A fallback solution for browsers that don't support the <code>&lt;audio&gt;</code> element can (and should) be included within the opening and closing audio tags. For instance, this could be a Flash player, referencing the same MP3 file we point to in the second <code>&lt;source&gt;</code> element.</p>


<h2>Unknown territory — playing streaming audio through the <code>&lt;audio&gt;</code> element</h2>

<p>We now have audio playback of single audio files using <code>&lt;audio&gt;</code> nicely sorted out across browsers. However, next we come upon fairly unknown territory: playing a live audio stream through <code>&lt;audio&gt;</code>. The aim throughout the rest of this article is to build a radio player based on the <code>&lt;audio&gt;</code> element.</p>

<p><a href="http://web.archive.org/web/20110720234027/http://www.trygve-lie.com/blog/entry/html_5_audio_element_and">Simple tests show that currently browsers handle streams very differently</a>. We're still in the early stages of HTML5, so hopefully support for audio streams will improve in the near future. On the bright side, it is clearly possible to provide streams as inputs for the <code>&lt;audio&gt;</code> elements, and by using the multiple sources and the fallback features it is possible to make it work across all modern browsers.</p>

<p class="note">This article does not touch the topic of setting up a streaming server but there are several good <a href="http://www.korokithakis.net/tutorials/icecast">tutorials available on setting up Icecast</a> to stream live content as both Ogg and MP3.
</p>

<h2>Building the player</h2>

<p>We will build our player on top of some audio streams provided by <a href="http://www.nrk.no/about/">The Norwegian Broadcasting Corporation</a> (NRK). NRK streams each radio channel in both Ogg and MP3 format, so there are two sources to work with.</p>

<p>To help us deal with possible cross-browser quirks, and the issue of support for different audio formats in different browsers, we will be using the <a href="http://www.happyworm.com/jquery/jplayer/">jPlayer</a> plug-in for jQuery. jPlayer provides a common interface using the native <code>&lt;audio&gt;</code> element in modern browsers, and a Flash fallback for older browsers. By having a common interface for both the native <code>&lt;audio&gt;</code> element and the Flash fallback, we are able to create a common design, made with JavaScript, CSS and HTML, on our player without worrying about if the native part or the fallback are used for playback.</p>

<h3>Separating the data from the player</h3>

<p>First, we'll make a small JSON feed containing information about our streams. We're including some general information about the radio station and each radio channel — the URLs of the streams, the channels' names, and a URL pointing to a logo associated with each channel:</p>

<pre><code>{
    "station" : {
        "name" : "NRK",
        "fullname" : "Norsk Rikskringkasting AS",
        "website" : "http://www.nrk.no/",
        "defaultChannel" : "P1",
        "channels" : [

            {
                "name" : "P1",
                "channel" : "NRK P1",
                "website" : "http://www.nrk.no/p1/",
                "schedule" : "",
                "logo" : "http://yoursite/gfx/nrk_p1.png",
                "streams" : {
                        "type" : "middle",
                        "ogg" : "http://radio.hiof.no/nrk-p1-128.ogg",
                        "mp3" : "http://radio.hiof.no/nrk-p1-128"
                }
            }

        ]
    }
}</code></pre>

<p>
By putting the information about the radio station and streams in this JSON feed we separate the stream information from the player itself. This is very handy if in the future we want to add, remove or change some data related to the streams (e.g. adding or removing a radio station or pointing to a new URL for the streams.) We can make these changes just by altering the JSON file, and we won't need to touch the actual player.
</p>

<h3>Adding structure and design</h3>

<p>Our next step is to set up an HTML structure to contain the player and its controls:</p>

<pre><code>&lt;div id="radio-player" class="radio-default"&gt;

    &lt;!-- Audio placeholder used by jPlayer --&gt;
    &lt;div id="player"&gt; &lt;/div&gt;

    &lt;!-- Container for channel picker --&gt;
    &lt;div id="channelPicker"&gt;
        &lt;a tabindex="8" accesskey="l" id="paginationLeft" class="inactive"&gt;&lt;span&gt;Left&lt;/span&gt;&lt;/a&gt;
        &lt;div id="channels"&gt; &lt;/div&gt;
        &lt;a tabindex="9" accesskey="r" id="paginationRight" class="active"&gt;&lt;span&gt;Right&lt;/span&gt;&lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- Container for display --&gt;
    &lt;div id="display"&gt;
        &lt;a id="currentChannel"&gt;&lt;img src="gfx/default/default-station.png" /&gt;&lt;/a&gt;
        &lt;span id="duration"&gt; &lt;/span&gt;
        &lt;span id="quality"&gt; &lt;/span&gt;
    &lt;/div&gt;

    &lt;!-- Containers for admin functions --&gt;
    &lt;a tabindex="7" accesskey="c" id="displayChannelPicker" title="Channels"&gt;&lt;span&gt;Channels&lt;/span&gt;&lt;/a&gt;
    &lt;a id="config"&gt;Config&lt;/a&gt;

    &lt;!-- Containers for jPlayer actions --&gt;
    &lt;a tabindex="3" accesskey="d" id="volumeMin" title="Mute"&gt;&lt;span&gt;Mute Volume&lt;/span&gt;&lt;/a&gt;
    &lt;a id="volume"&gt;&lt;span&gt;Adjust Volume&lt;/span&gt;&lt;/a&gt;
    &lt;a tabindex="4" accesskey="u" id="volumeMax" title="Max"&gt;&lt;span&gt;Max Volume&lt;/span&gt;&lt;/a&gt;
    &lt;a tabindex="1" accesskey="p" id="play" title="Play"&gt;&lt;span&gt;Play&lt;/span&gt;&lt;/a&gt;
    &lt;a id="pause" title="Pause"&gt;&lt;span&gt;Pause&lt;/span&gt;&lt;/a&gt;
    &lt;a tabindex="2" accesskey="s" id="stop" title="Stop"&gt;&lt;span&gt;Stop&lt;/span&gt;&lt;/a&gt;

    &lt;!-- Container for error messages --&gt;
    &lt;div id="error"&gt;
        &lt;h2&gt;Error&lt;/h2&gt;
        &lt;p&gt; &lt;/p&gt;
    &lt;/div&gt;

&lt;/div&gt;</code></pre>

<p>Each <code>&lt;a&gt;</code> and <code>&lt;div&gt;</code> element is given an <code>id</code> so we can easily style the elements and assign JavaScript functions to them for interacting with the <code>&lt;audio&gt;</code> element via the audio API. jPlayer will be using some of the elements, for example the ones with the <code>play</code> and <code>pause</code> <code>id</code>. We will see that later.</p>

<p>Each button is styled by adding a background image to it and placing the element where we want it in the player using absolute positioning. For example, the CSS for the play button looks like this:</p>

<pre><code>/**
  * Play button
  */
.radio-default #play{
    position: absolute;
    top: 75px;
    left: 255px;
    width: 40px;
    height: 40px;
    background-image: url(../gfx/default/button-play.png);
    background-position: top left;
    background-repeat: no-repeat;
    cursor: pointer;
}</code></pre>

<p>The other controls, channel picker, time display, etc. are created in much the same way.</p>

<p>One small detail worth noticing is the <code>class</code> attribute on the <code>&lt;div&gt;</code> element that wraps the whole player. We can use the value of this <code>class</code> attribute as a prefix on all our styles like this:</p>

<pre><code>.radio-default #play{
    /* some style */
}</code></pre>

<p>By doing so we have added the possibility to skin the player. If we then create a new set of styles with a new prefix we can use a small JavaScript function to switch skins by just changing the value of the <code>class</code> attribute on the surrounding <code>&lt;div&gt;</code> element:
</p>

<pre><code>.radio-different #play{
    /* some different style */
}</code></pre>


<h3>Putting jPlayer into action</h3>

<p>Our final step is to use <a href="http://www.happyworm.com/jquery/jplayer/">jPlayer</a> to create all the player functionality. We first add the jQuery library and the jPlayer plug-in to the HTML document, as well as including our own JavaScript file, which will hold additional code:</p>

<pre><code>&lt;script src="script/jquery-1.4/jquery.min.js"&gt; &lt;/script&gt;
&lt;script src="script/jplayer-1.1.7/jquery.jplayer.js"&gt; &lt;/script&gt;
&lt;script src="script/player.js"&gt; &lt;/script&gt;</code></pre>

<p>jPlayer needs the jQuery library to work, but we will use jQuery to also help us with other tasks in our player.</p>

<p>To start with, we need to select the element in our document that will contain jPlayer's generated <code>&lt;audio&gt;</code> element:</p>

<pre><code>// Player element - Holds the jPlayer
var playerElement = jQuery("#player");</code></pre>

<p>Next, we take advantage of jQuery's AJAX functionality to read our JSON feed with the streaming details:</p>

<pre><code>jQuery.ajax({
    url: "http://yourserver/channels.json",
    dataType: 'json',
    ifModified: true,
    success: function(data, status){
        for (var i = 0, len = data.station.channels.length; i &lt; len; i++) {

            // Put each channel into a channel picker

        }
    }
});</code></pre>

<p>
When the AJAX request has fetched the data from the server it loops through each channel in the feed and adds them to a channel picker. The channel picker is just a list of image tags contaning the logo for each channel and a <code>onclick</code> event for changing the audio streams in the player when the user selects a channel.
</p>

<p><img src="channel_picker.png" alt="Channel picker" /></p>
<p class="comment">Figure 2: The radio station channel picker.</p>

<p>This is a simplification compared to the final player functionality, but the function attached as a <code>onclick</code> event on each image in the channel picker has a small method for clearing out the old stream set on the audio element and adding the stream the user selected as a new stream to the <code>&lt;audio&gt;</code> element:</p>

<pre><code>changeChannel:function(){

    // Remove old stream
    playerElement.jPlayer("clearFile");

    // Set new stream
    playerElement.jPlayer("setFile", "urlToNewMP3Stream", "urlToNewOGGStream");
}</code></pre>

<p>jPlayer takes care of clearing out old streams and setting new ones on the <code>&lt;audio&gt;</code> element. jPlayer knows what type of streams the browser supports and if the Flash fallback should be used. After we have read our channel data and set up a selection of channels the user can choose from, we must set up jPlayer to work against our HTML structure.</p>

<pre><code>playerElement.jPlayer({
    ready: function(){
        this.element.jPlayer("setFile", urlToDefaultMp3Stream, urlToDefaultOggStream);
    },
    swfPath: "script/jplayer-1.1.1/",
    nativeSupport: true,
    volume: 60,
    oggSupport: true,
    customCssIds: true
})
.jPlayer("cssId", "play", "play")
.jPlayer("cssId", "pause", "pause")
.jPlayer("cssId", "stop", "stop")
.jPlayer("cssId", "volumeMin", "volumeMin")
.jPlayer("cssId", "volumeMax", "volumeMax")
.jPlayer("cssId", "volumeBar", "volume")
.jPlayer("onProgressChange", function updateDuration(lp,ppr,ppa,pt,tt) {
     jQuery("#duration").text(jQuery.jPlayer.convertTime(pt));
});</code></pre>

<p>The above code adds the jPlayer to the <code>#player</code> element we selected earlier. We tell jPlayer to use the native <code>&lt;audio&gt;</code> element if the browser supports it by setting <code>nativeSupport: true</code>; we also set a default volume (<code>volume: 60</code>), the location of the Flash fallback (<code>swfPath: "script/jplayer-1.1.1/"</code>), whether Ogg should be used if supported by the browser (<code>oggSupport: true</code>), and what to do when the player is ready (<code>ready: function( ... );</code>).</p>

<p>In the <code>ready</code> function we set the default radio channel we want to present to the user. If the user selects another channel in the channel picker the selection will send a new stream to the player and override this default.</p>

<p>Finally, we point jPlayer to the IDs of our various control buttons, and set up an event listener when the audio is playing, so that we can change the time display in our player.</p>

<p>We now have a working player that runs in multiple browsers.</p>

<p><img src="webpage_player.png" alt="Radio player in website" /></p>
<p class="comment">Figure 3: The final radio player running in Opera.</p>

<p class="note">In the final player there are few extra bits of code outside the core functionality that we haven't discussed – to handle navigation in the channel picker and update different elements based on the user interaction. The <a href="http://github.com/trygve-lie/widget-radio-player">code for this player is checked into Github</a> so feel free to fork the code and play around with it.</p>

<h2>Turning the player into a Widget application</h2>

<p>It is cool to be able to add a radio player like this to an ordinary web page, but it comes with some drawbacks. The stream will be broken if the user navigates away from the page holding the player, if the page reloads, or if the browser crashes for some reason. Such events are annoying for the listener and as an audio content provider you want the listener to stay tuned.
</p>

<p>By having the player repackaged as an Opera Widget, users will be able to install it as a standalone application in Opera 10.5x. The player will then run in a separate window, independent from the browser, and the stream will continues to play even if the user does not have Opera running.</p>

<p>Packaging the player as a Widget is easy. We add a simple <code>config.xml</code> file to the root directory to define it as a Widget. This configuration sets the name of the Widget, the dimensions of the player window, and which icons should be used to represent the application on the start menu, desktop etc.</p>

<p>Widgets can handle AJAX requests to any server available on the Internet and since we have put all our stream data in a JSON feed on the server-side, we are able to update the data in the stream without having to update the player in any way. This is good since we might be forced to do changes related to our streams faster than the users can update their players. To enable the Widget to make AJAX requests across the network and to our server, we must add <code>network="public"</code> on the <code>&lt;widget&gt;</code> element. Our final configuration file looks like this:</p>

<pre><code>&lt;widget defaultmode="application" network="public private"&gt;
    &lt;widgetname&gt;Radio Player&lt;/widgetname&gt;
    &lt;description&gt;Radio Player&lt;/description&gt;
    &lt;width&gt;300&lt;/width&gt;
    &lt;height&gt;120&lt;/height&gt;
    &lt;icon&gt;gfx/icon/icon_128.png&lt;/icon&gt;
    &lt;icon&gt;gfx/icon/icon_64.png&lt;/icon&gt;
    &lt;icon&gt;gfx/icon/icon_32.png&lt;/icon&gt;
    &lt;icon&gt;gfx/icon/icon_16.png&lt;/icon&gt;
    &lt;author&gt;
        &lt;name&gt;John Doe&lt;/name&gt;
        &lt;email&gt;john.doe@yoursite.com&lt;/email&gt;
        &lt;link&gt;http://yoursite/&lt;/link&gt;
    &lt;/author&gt;
    &lt;id&gt;
        &lt;host&gt;radio.yoursite.com&lt;/host&gt;
        &lt;name&gt;radio-player&lt;/name&gt;
        &lt;revised&gt;2010-05&lt;/revised&gt;
    &lt;/id&gt;
&lt;/widget&gt;</code></pre>

<p>To package the application, we simply zip up the HTML, CSS, JavaScript and any other assets, along with the <code>config.xml</code> file, and change the file extension to <code>.wgt</code>. We now have a Widget ready to be installed.</p>

<p><img src="widget_player.png" alt="Radio player as widget" /></p>
<p class="comment">Figure 4: Our radio player running as an Opera Widget.</p>

<p>The player can be found on the <a href="http://widgets.opera.com/widget/18572/">Opera Widgets</a> repository.</p>

<h2>Summary</h2>

<p>In this article we have looked in detail at the HTML5 <code>&lt;audio&gt;</code> element, used jQuery to make our life easier and help us work through cross-browser differences, and built a really useful radio player that works as part of a web page and as a standalone widget.</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/everything-you-need-to-know-about-html5-video-and-audio/">Everything you need to know about HTML5 video and audio</a></li>
<li><a href="/articles/view/simple-html5-video-flash-fallback-custom-controls/">Simple HTML5 video player with Flash fallback and custom controls</a></li>
</ul>
