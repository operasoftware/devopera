Title: Speed Dial API
----
Date: 2011-12-06 05:51:47
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-speeddial-viewmodes"><code>viewmodes</code> attribute</a></dt>
   <dd>Indicates whether the extension should be run in a minimized state.</dd>
   
   <dt><a href="/articles/view/extensions-api-speeddial-feature"><code>feature</code> element</a></dt>
   <dd>A feature request by the extension to have its content displayed in a Speed Dial cell.</dd>
   
   <dt><a href="/articles/view/extensions-api-speeddial-param"><code>param</code> element</a></dt>
   <dd>The <code>feature</code> element&#39;s parameter that specifies its URL.</dd>
   
   <dt><a href="/articles/view/extensions-api-speeddial-title">opera.contexts.speeddial.title</a></dt>
   <dd>Represents the human-readable title given to a Speed Dial cell.</dd>
   
   <dt><a href="/articles/view/extensions-api-speeddial-url">opera.contexts.speeddial.url</a></dt>
   <dd>Represents the target URL of the Speed Dial cell when clicked or otherwise activated.</dd>
</dl>


<h2>Overview</h2>

<p>The Speed Dial page is the &quot;start page&quot; that is displayed every time you open a new tab in Opera.</p>

<p>In order to have the content of an Opera extension be displayed in a Speed Dial cell, a developer declares in the configuration
document (<code>config.xml</code>) of an extension what content they would like to have displayed. As shown in the example below, this is done by using a combination of a feature request, called <code>opera:speeddial</code>, and by declaring support for the <code>minimized</code> view mode. In addition, a valid URI must be specified in the <code>widget</code> element&#39;s <code>id</code> attribute. While this should be provided for all extensions, it is a requirement for Speed Dial extensions.</p>

<p>For compatibility with Opera Link&#39;s synchronization of Speed Dial, and to not break the Speed Dial user experience, a developer
is required to provide an URL as part of the Speed Dial feature request (via a <code>param</code> element, as shown).</p>

<p>Valid Speed Dial extensions can use the <code>SpeedDialContext</code> API which is available as an <code>opera.contexts.speeddial</code>
object in the background process (but not in other documents inside the extension). The <code>SpeedDialContext</code> API
enables developers to read and change the title and URL of a Speed Dial cell. Developers should, however, make provisions in their scripts to make sure the extension still functions without the availability of the <code>SpeedDialContext</code> API by checking for the presence of the API and dealing with it if it&#39;s not available. An example of how to
use the <code>SpeedDialContext</code> API is given below.</p>

<h2>Example</h2>

<p>Sample <code>config.xml</code> file for a Speed Dial extension.</p>

<pre><code>
&lt;!-- config.xml --&gt;
&lt;widget
    xmlns=&quot;http://www.w3.org/ns/widgets&quot;
    id=&quot;http://example.com/myextension&quot;
    defaultlocale=&quot;en&quot;
    viewmodes=&quot;minimized&quot;&gt;

  &lt;content src=&quot;weather.html&quot;/&gt;

  &lt;name short=&quot;Weather&quot;&gt;
    The Weather In Oslo
  &lt;/name&gt;

  &lt;description&gt;
    Speed Dial extension showing the current weather in Oslo.
  &lt;/description&gt;

  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;!-- Link to open when the Speed Dial is clicked --&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://opera.com&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<p>The background process JavaScript for the above sample extension, using the <code>SpeedDialContext</code> API.</p>

<pre><code>//
// The background process (&#39;/background.js&#39;).
//

document.onload = function getWeather() {
  var xhr = new XMLHttpRequest();
  //... load weather info...
}

//Displays weather information in Speed Dial
//and update UI Item
function updateWeather(weatherInfo) {
  if (opera.contexts.speeddial) {
    var sd = opera.contexts.speeddial;
    var location = weatherInfo.location;

    // Change the Speed Dial&#39;s title
    sd.title = location + &quot; &quot; + weatherInfo.forecast;

    // Change the Speed Dial&#39;s URL
    sd.url = &quot;http://weather.com/&quot; + location;
  }
}</code></pre>

