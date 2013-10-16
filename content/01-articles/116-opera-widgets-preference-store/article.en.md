Title: Opera Widgets Preference Store
----
Date: 2010-02-09 18:49:25
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


<h2 class="no-toc">Introduction</h2>

<p>The Opera Widgets Preference Store is where widgets store their settings and other data you want the widget to persist across sessions. Once data is stored in the Opera Widgets Preference Store, the user may close and reopen the widget, and the stored preferences will still be available.</p>

<ol>
<li><a href="#what">What is the Preference Store?</a></li>
<li><a href="#using">Using the Preference Store</a></li>
<li><a href="#storagecapacity">Storage capacity considerations</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="what">What is the Preference Store?</h2>

<p>The preference store is a key/value store with both the key and the value being strings. The widget may store data to be reused at a later date, such as a username, settings for the widget, cached data, and so on. The data is stored on the device, for example on its hard drive, and can be read back at any time. This is also the case if the widget is restarted or the device or the widget runner crashes.</p>

<p>The data for a widget is only available to that widget, not to other widgets or Web pages.</p>

<h2 id="using">Using the Preference Store</h2>

<p>You work with the Preference Store using two methods on the <code>widget</code> object: <code>setPreferenceForKey</code> and <code>preferenceForKey</code>. <code>setPreferenceForKey</code> takes two arguments, the value to save and the name of the key. <code>preferenceForKey</code> takes the name of the key to retrieve the value of as an argument. For example:</p>

<pre>
<code>
widget.setPreferenceForKey( &#39;gautamc&#39;, &#39;username&#39; );
//Close and reopen the widget
var username = widget.preferenceForKey(&#39;username&#39;);
</code>
</pre>

<p>The value is stored immediately, so you do not need to reopen the widget to be able to access it. If you store a value for a key that already exists, the old value will be silently overwritten.</p>

<p>Note: The methods are named after the similar methods that exist for Mac OS X Dashboard widgets, in order to promote compatibility.</p>

<h2 id="storagecapacity">Storage capacity considerations</h2>

<p>Some devices have relatively limited storage capacity available for storing widget preference data. If a widget attempts to store data beyond the free space available, the device will free space by deleting preferences for older widgets in order of the time they were last run.</p>

<p>Example: For the sake of argument, assume that the your device has space for just <em>two</em> sets of widget preferences and that newly-installed widgets all store preferences. Say you download the BBC News widget. You then download the 2d ruler the next day, use it, and then use the BBC News widget. If you then download the Earthquake monitor widget on the third day and this widget stores preferences, all the preferences for the 2d ruler would be deleted to make space for the new ones, as it is the widget that was used the longest time ago.</p>

<p>By design, all preferences for a single widget are either fully deleted or left intact. No single preference is deleted to make room for another widget’s preferences. This means that you can be sure that the stored widget preferences are in a consistent state.</p>

<p class="note">Note that while all preferences for a widget will be deleted, this may not be the case for the widget’s cookies and cache.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/">Opera Widgets Specification 1.0, fourth edition</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
