Title: Introduction to Widget Handset APIs in WAC 1.0
----
Date: 2010-12-22 07:13:46
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-nd/3.0/
----
Text:

<h2>Introduction</h2>

<p> 
In the brand new release of <a href="http://www.opera.com/download/get.pl?sub=++++&amp;id=33389&amp;location=270&amp;nothanks=yes">Opera Widgets Runtime for Android</a> there are plenty of new exciting features, including support for the newly available <a href="http://specs.wacapps.net/1.0/dec2010/API.html">Widget Handset APIs</a> from the <a href="http://www.jil.org"><abbr title="Wholesale Applications Community">WAC initiative</abbr></a>. These provide widgets with a greater level of device access previously only available to native applications. Using these new APIs we can take pictures, check GPS location, browse our address books, access accelerometer information, and even send SMS, MMS and E-Mail messages!
</p>

<h2>Where do I start?</h2>

<p>
The best place to start is to look at the <a href="http://widgets.opera.com/category/wac-demo/">widgets demo provided by the Opera Widgets Team</a>. Examples given describe specific APIs and demonstrate functionality at the same time. You can find them pre-installed in the new release of <a href="http://www.opera.com/download/get.pl?sub=++++&amp;id=33389&amp;location=270&amp;nothanks=yes">Opera Widgets Runtime for Android</a>. If you&#39;re interested in the nuts and bolts you also take a look at the <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration specifications</a>, which <a href="http://specs.wacapps.net/1.0/dec2010/overview.html">WAC 1.0</a> is based upon.
</p>

<p>There is also an another article available on this site, which takes you through building a complete functioning WAC Widget: <a href="http://dev.opera.com/articles/view/building-a-widget-with-wac/">Building a spirit level widget using WAC 1.0</a>.</p>

<h2>Using available objects</h2>

<p>WAC talks about the use of <code>&lt;feature&gt;</code> elements, which are additional elements added to a <code>config.xml</code> file in order to provide information about what kind of APIs a widget wants to access. This allows the Widget Manager to inform users what the widget being installed is able to do. This alleviates potential privacy issues. For example, when you install a widget for browsing feeds you might get suspicious if it requests access to camera, messaging or geolocation.
</p>

<p>
A widget <code>config.xml</code> that makes use of WAC features looks something like this:
</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; xmlns:JIL=&quot;http://www.jil.org/ns/widgets1.2&quot;&gt;
    &lt;JIL:access localfs=&quot;true&quot; /&gt;
    &lt;name&gt;Demo Widget&lt;/name&gt;
    &lt;icon&gt;icon.png&lt;/icon&gt;
    
    &lt;feature name=&quot;http://jil.org/jil/api/1.1/widget&quot; required=&quot;true&quot;/&gt;
    &lt;feature name=&quot;http://jil.org/jil/api/1.1/multimedia&quot; required=&quot;true&quot;/&gt;
    &lt;feature name=&quot;http://jil.org/jil/api/1.1.2/camera&quot; required=&quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>
In this example, to use <code>Camera</code> we are referencing three <code>features</code>: Widget, Multimedia and Camera. This is because the <code>Camera</code> object is part of the <code>Multimedia</code>code&gt; object, and <code>Multimedia</code> is part of the top-level <code>Widget</code> object. We need all three to use the <code>Camera</code> object.
</p>

<p>
Also, note the extra name space included in the document above: <code>xmlns:JIL=&quot;http://www.jil.org/ns/widgets1.2&quot;</code>. This is the JIL namespace, and is included so we can use some elements not defined by WAC. In this example we&#39;ve added <code>&lt;JIL:access localfs=&quot;true&quot; /&gt;</code>, which means that my widget will have access to the local file system.
</p>

<h2>
Available features
</h2>

<p>
Every object defined by WAC has its unique feature URI to explicitly identify it in a <code>&lt;feature&gt;</code> element inside <code>config.xml</code>. Always remember that a WAC object might be part of another WAC object: we always have to include feature URIs for all parent objects as well. In order to find this information please have a look at the <a href="http://specs.wacapps.net/1.0/dec2010/overview.html">WAC 1.0 specification</a>.
</p>

<p>the available features are explained below.</p>

<h3>
Accelerometer
</h3>

<p>
The <code>AccelerometerInfo</code> object can be used to get information from a device&#39;s accelerometer. We can read accelerations on three axes (X, Y, Z) using the following code:
</p>

<pre><code>Widget.Device.DeviceStateInfo.AccelerometerInfo.xAxis
Widget.Device.DeviceStateInfo.AccelerometerInfo.yAxis
Widget.Device.DeviceStateInfo.AccelerometerInfo.zAxis</code></pre>

<p>
The unit for returned values are m/s&#xB2; (meters per second squared, the standard SI unit for acceleration). If you place your device flat on a table it should report -9,8 m/s&#xB2; on the <code>zAxis</code>.
</p>

<p class="note">
IMPORTANT: because acceleration information changes very quickly as the device is moved around, all values are retrieved and stored when you read the <code>xAxis</code>. This way you can be sure that all values are from the exact same moment, but you have to remember to always read the <code>xAxis</code> value first.
</p>

<p>
See the <a href="http://dev.opera.com/articles/view/building-a-widget-with-wac/">Building a spirit level widget using WAC 1.0</a> article for a real accelerometer example. you can also <a href="http://widgets.opera.com/widget/21124/">download a working accelerometer demo, with sources</a>.
</p>

<h3>
AudioPlayer
</h3>

<p>
<code>AudioPlayer</code> is an object allowing us to control music playback, playing sounds over HTTP, HTTPS, RTSP or the file protocol. To play music (e.g. as background music for a game) we can do something simple like this:
</p>

<pre><code>Widget.Multimedia.AudioPlayer.onStateChange = function(state){
    if (state == &#39;opened&#39;){
        Widget.Multimedia.AudioPlayer.play();
    }
}

Widget.Multimedia.AudioPlayer.open(&#39;http://.../file.mp3&#39;);</code></pre>				

<p>
Apart from opening the audio player and starting playback, you can also stop and pause/resume playback. These are all very similar methods. Just remember that these calls are executed asynchronously so you need to define <code>onStateChange</code> callbacks to handle state changes of the player, when the following states occur:
</p>

<ul>
<li><code>opened</code> – when an audio file is loaded successfully</li>
<li><code>playing</code> – when playback has started, after calling <code>play()</code></li>
<li><code>stopped</code> – when playback has stopped, after calling <code>stop()</code></li>
<li><code>completed</code> – when playback has stopped after reaching the end of a track.</li>
<li><code>paused</code> – when playback is paused</li>
</ul>

<p>
<a href="http://widgets.opera.com/widget/21134/">Download a working audio player demo, with sources</a>.
</p>

<h3>Camera</h3>

<p>The <code>Camera</code> object is arguably one of the most interesting WAC features. It allows us to take photos and provide real-time camera previews in your widget. For example we could create a widget to take photos and instantly sharing them on <a href="http://myopera.com">MyOpera</a> or <a href="http://flickr.com">Flickr</a>. The first thing we need to do to get a camera preview is to create an <code>&lt;object&gt;</code> element in which to render the preview (it has to be an <code>&lt;object&gt;</code> element.)
</p>

<p>
A simple <code>index.html</code> to do this could look like so:
</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;js/camera.js&quot;&gt;&lt;/script&gt;
    &lt;style type=&quot;text/css&quot;&gt;
        #preview {
            width: 300px;
            height: 300px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;object id=&quot;preview&quot;&gt;&lt;/object&gt;
    &lt;button id=&quot;shoot&quot;&gt;take photo&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>
This will create a document containing a 300 x 300px preview window, and a button to press to capture an image.
</p>

<p>
Now for some JavaScript to handle the functionality - in the attached <code>camera.js</code> file we could write:
</p>

<pre><code>
window.addEventListener(&#39;load&#39;,function(){
    
    //set preview window to #preview &lt;object&gt;
    Widget.Multimedia.Camera.setWindow(document.getElementById(&#39;preview&#39;));
    
    //callback function called when taking photo succeeded
    Widget.Multimedia.Camera.onCameraCaptured = function(filename){
        alert(filename);
    }
    
    //setting button onclick event 
    document.getElementById(&#39;shoot&#39;).addEventListener(&#39;click&#39;,function(){
        Widget.Multimedia.Camera.captureImage(null, false);
    }, false);
    
},false);</code></pre>

<p>
So, when this widget is run on a supporting device, it gives us a real time camera preview. When the “take photo” button is clicked, it will save the image in the default location (we can specify the desired path using the first parameter of the <code>captureImage</code> method) and call the <code>onCameraCaptured</code> callback function to display an alert containing the image path. We can display it in a widget using this path — we just need to remember to add <code>file://</code> in front of it. 
</p>

<p>
<a href="http://widgets.opera.com/widget/21144/">Download a working camera demo, with sources</a>. 
</p>

<h3>Position Info</h3>

<p>
The <a href="http://dev.w3.org/geo/api/spec-source.html">W3C Geolocation API</a> is a very exciting spec allowing applications to access <abbr title="Global Positioning System">GPS</abbr> information. It is however currently supported well across desktop browsers but not so reliably across mobile browers, and because of the processor limitations on mobile devices it seems counterproductive to use a whole separate API for this purpose. But never fear — we can access precise GPS position using the WAC 1.0 API. In order to get information describing the device&#39;s current position we need <code>onPositionRetrieved</code> and <code>requestPositionInfo</code>:
</p>

<pre><code>Widget.Device.DeviceStateInfo.onPositionRetrieved = function(position, method){
    /* … */
};

Widget.Device.DeviceStateInfo.requestPositionInfo(&#39;gps&#39;);</code></pre>

<p>
After calling the above function the device will get its position from the GPS if available: when the position is retrieved the callback <code>onPositionRetrieved</code> will be called. The position information will be contained in an object with following fields:
</p>

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>accuracy</code></td>
<td>Number</td>
<td>The horizontal accuracy of the position in meters. Takes a value of null if the information is not available.</td>
</tr>
<tr>
<td><code>altitude</code></td>
<td>Number</td>
<td>the altitude in meters, using the World Geodetic System 1984 (WGS84) datum.</td>
</tr>
<tr>
<td><code>altitudeAccuracy</code></td>
<td>Number</td>
<td>The vertical accuracy of the position in meters. Takes a value of null if the information is not available.</td>
</tr>
<tr>
<td><code>cellID</code></td>
<td>Number</td>
<td>This is the id of the cell, defined when using GSM or AGPS.</td>
</tr>
<tr>
<td><code>latitude</code></td>
<td>Number</td>
<td>The latitude in degrees, using the World Geodetic System 1984 (WGS84) datum. </td>
</tr>
<tr>
<td><code>longitude</code></td>
<td>Number</td>
<td>The longitude in degrees, using the World Geodetic System 1984 (WGS84) datum.</td>
</tr>
<tr>
<td><code>timeStamp</code></td>
<td>Date</td>
<td>The time when the location data was established.</td>
</tr>
</tbody>
</table>

<p>
Using this information we could for example display our current position on a map. <a href="http://widgets.opera.com/widget/21184/">Download a working position Info demo, with sources</a>.
</p>

<h3>Messaging</h3>

<p>
Using the WAC 1.0 API we can enable applications and widgets to send SMS, MMS and E-Mail messages. To do so we need to create a <code>Message</code> object that will represent the message, like so:
</p>

<pre><code>//prepare a callback method in case sending has failed
Widget.Messaging.onMessageSendingFailure = function(msg, error){
    alert(“Sending failed!\n”+error);
}

//choose message type
var messageType =  Widget.Messaging.MessageTypes.SMSMessage;

//create message
var message = Widget.Messaging.createMessage(messageType);

//set needed properties
message.addAddress(&#39;destination&#39;,&#39;phone number&#39;);
message.body = &#39;body can be any text&#39;;

//send message
Widget.Messaging.sendMessage(message);</code></pre>

<p>
Remember that our users may be charged by their carriers for sending messages depending on their plan and connection type. Sending E-Mail when connected through WiFi will be free but sending MMS probably will probably cost money. It sounds like an obvious point, but we should keep that in mind when developing applications, and make our users aware.
</p>

<p>
<a href="http://widgets.opera.com/widget/21154/">Download a working messaging demo, with sources</a>.
</p>

<h2>Conclusion</h2>
<p>
The WAC 1.0 specification allows us to build more powerful Widgets and applications, with functionality more comparable to that of native apps. At Opera we are looking forward to seeing what you build using this new functionality. As always, let us know what you think, and feel free to make comments or ask for help on the <a href="http://widgets.opera.com/forum/">Opera Widgets forums</a>.
</p>
