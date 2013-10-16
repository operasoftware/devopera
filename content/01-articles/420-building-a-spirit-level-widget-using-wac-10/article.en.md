Title: Building a spirit level widget using WAC 1.0
----
Date: 2010-12-22 06:58:54
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>The <a href="http://www.jil.org"><abbr title="Wholesale Applications Community">WAC initiative</abbr></a> is a joint effort by mobile industry leaders to make mobile applications more interoperable across devices, easier for developers to create, and more powerful and useful for end users. It includes a <a href="http://www.jil.org">community website</a> containing useful resources, and the <a href="http://www.wacapps.net/">WAC 1.0 specification</a>. This specification includes requirement lists for phones wanting to be able to support the spec, links to the W3C widget specs that WAC 1.0 is based on, and perhaps most interestingly, the <a href="http://dev.opera.com/articles/view/widget-handset-apis-wac/">Widget Handset APIs</a>. The Handset APIs provide a means for developers to hook into device-specific features such as cameras, accelerometers, audio players and more.</p>

<p>And this last feature is what this article is about. Here we will show you how to use the WAC 1.0 <code>AccelerometerInfo</code> API to build a simple spirit level (or water level) Widget that measures how your phone is tilting on different axes, and displays this information in an familiar visual format, as seen in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/420-building-a-spirit-level-widget-using-wac-10/figure2.jpg" alt="a spirit level tool for a mobile phone, created using WAC 1.0 and packaged using a W3C Widget" /></p>
<p class="comment">Figure 1: A spirit level tool for a mobile phone, created using WAC 1.0 and packaged using a W3C Widget.</p>


<h2><code>AccelerometerInfo</code>, and the three phone axes</h2>

<p>Our spirit level tool uses the <code>AccelerometerInfo</code> API to obtain information about the phone&#39;s acceleration in three different axes (see also Figure 2):</p>

<ul>
  <li><strong>x</strong>: The right side of the phone</li> 
  <li><strong>y</strong>: The top side of the phone</li> 
  <li><strong>z</strong>: The front side of the phone</li>
</ul>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/420-building-a-spirit-level-widget-using-wac-10/figure1.png" alt="the three different axes of a phone for calculating tilt in different directions" /></p>

<p class="comment">Figure 2: The three different axes of a phone for calculating tilt in different directions.</p>

<p>Based on this three values you can calculate tilt in every direction. For example, When your phone lays on the table, the <strong>x</strong> value and <strong>y</strong> value are equal to 0 and the <strong>z</strong> value is near 9.81m/s&#xB2;. We will describe it later.</p>

<h2>Building our Widget</h2>

<p>In this section we will look at all the files involved in our widget. You can <a href="level-tool.wgt">download the complete widget</a> and play with it yourself. Please note that to run this widget successfully you need our <a href="http://www.opera.com/download/get.pl?sub=++++&amp;id=33389&amp;location=270&amp;nothanks=yes">Opera Widget runtime for Android with WAC support</a>.</p>

<h3>The <code>config.xml</code> file</h3>

<p>If we want to use <code>AccelerometerInfo</code> to gain access to a phone&#39;s accelerometer we need to specify additional features in our widget&#39;s <code>config.xml</code> file. We must add <code>AccelerometerInfo</code>&#39;s dependencies — the <code>widget</code>, <code>device</code> and <code>devicestateinfo</code> API features — via <code>&lt;feature&gt;</code> elements to make it work properly:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; height=&quot;320&quot; width=&quot;240&quot;&gt;
	&lt;name&gt;Level Tool&lt;/name&gt;
	&lt;feature name=&quot;http://jil.org/jil/api/1.1/widget&quot; required=&quot;true&quot; /&gt;
	&lt;feature name=&quot;http://jil.org/jil/api/1.2/device&quot; required=&quot;true&quot; /&gt;
	&lt;feature name=&quot;http://jil.org/jil/api/1.1/devicestateinfo&quot;
		required=&quot;true&quot; /&gt;
	&lt;feature name=&quot;http://jil.org/jil/api/1.1/accelerometerinfo&quot;
		required=&quot;true&quot; /&gt;
	...
&lt;/widget&gt;</code></pre>

<h3>Getting information from the accelerometer</h3>

<p>When using <code>AccelerometerInfo</code>, all accelerometer values are accessed via the <code>Widget.Device.DeviceStateInfo.AccelerometerInfo</code> object and its three attributes <code>xAxis</code>, <code>yAxis</code>, <code>zAxis</code>. If you have already configured specific features, you can access accelerations as follows:</p>

<pre><code>var accelerationX = Widget.Device.DeviceStateInfo.AccelerometerInfo.xAxis;
var accelerationY = Widget.Device.DeviceStateInfo.AccelerometerInfo.yAxis;
var accelerationZ = Widget.Device.DeviceStateInfo.AccelerometerInfo.zAxis;</code></pre>

<p>There is one thing you must remember — the <code>AccelerometerInfo</code> object is updated when you read the <code>xAxis</code> value, so <code>xAxis</code> should always be read first, otherwise values won&#39;t be updated and you&#39;ll get old values.</p>

<p class="note">The unit used for acceleration is m/s&#xB2; (meters per second squared – standard under the SI metric system).</p>

<h3>How does the spirit level tool work?</h3>

<p>In our spirit level tool, acceleration is simply converted into the destination point of the bubble in UI. For example, if you hold phone the horizontally and then tilt it to right the x acceleration value will increase, so we need to move the left/right bubble to the left. The bigger the tilt, the bigger the distance between the center of the tube containing the bubbles, and the bubbles themselves. The position of each bubble is updated every 40 ms (approximately 24 times per second).</p>

<p>In every frame we use the all-important <code>update()</code> function to refresh all data (acceleration, bubble velocity, etc.):</p>

<pre><code>function update() {
  updateAccelerometer();
  destination.x = (accX - calibration.x) * maxAccRatio;
  destination.y = (accY - calibration.y) * maxAccRatio;
  velocity.x += ((destination.x - pos.x)/1.5 - velocity.x/5) * 40 * updateFactor;
  velocity.y += ((destination.y - pos.y)/1.5 - velocity.y/5) * 40 * updateFactor;
  ...
  move(velocity.x * updateFactor, velocity.y * updateFactor);
}</code></pre>

<p>First we calculate where the bubble should be now — this is our destination. We assume that the force that makes bubble flow in a specific direction is proportional to the distance between the destination and the current position of a bubble and that there is a water viscosity proportional to speed of the bubble. The bubble won&#39;t move to destination point immediately, because of water viscosity, so we simulate that effect next. The last thing to do in each frame is move the bubble based on it&#39;s current velocity — done by the <code>move</code> function near the bottom of the above code snippet.</p> 

<p class="note">Note that there is a <code>calibration</code> object referenced above, which helps you correct accelerometer values. It&#39;s set by clicking the calibration button in the UI.</p>

<p>Now let&#39;s look at the <code>updateAccelerometer()</code> function referenced above. This function simply assigns specific acceleration values into shorter variables, so that they are easier to use later:</p>


<pre><code>function updateAccelerometer() {
	accX = Widget.Device.DeviceStateInfo.AccelerometerInfo.xAxis;
	accY = Widget.Device.DeviceStateInfo.AccelerometerInfo.yAxis;
	accZ = Widget.Device.DeviceStateInfo.AccelerometerInfo.zAxis;
}</code></pre>

<h2>Summary</h2>

<p>The spirit level tool is a nice example of a widget that takes advantage of the accelerometer features in the WAC specification. Please feel free to modify our example in any way you like to produce interesting new examples, and let us know what you think!</p>

