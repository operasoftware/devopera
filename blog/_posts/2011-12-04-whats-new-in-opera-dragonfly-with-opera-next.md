---
title: What's New in Opera Dragonfly with Opera Next
authors:
- nimbupani
tags:
- experimental
- opera next
- dragonfly
layout: article
---
        <h3>New Release Model</h3>
        <p>You might have seen the flurry of updates in Opera Dragonfly – we now have <a href="http://my.opera.com/dragonfly/blog/css-shorthands">CSS shorthands</a> and also a <a href="http://my.opera.com/dragonfly/blog/style-profiler-preview">style profiler</a>! To make all this possible, we have also altered our release model.
        </p>
        <p>Previously, we used to support older versions of Opera even with new releases, but it typically resulted in broken performance. Since Friday, we freeze a given Dragonfly version to an Opera version. This means, if you use a newer version of Opera, you get the latest, fastest version of Dragonfly that is stable and is confirmed to work on that version of Opera.</p>
<p class="note">If you use remote debugging, be aware that this change may require your browser to load a previous version of Opera Dragonfly if connecting to an older browser version.</p>
        <h3>Local Zip Files</h3>
        <p>We have also vastly improved our build tools. You can now use a local version of Opera Dragonfly. What you might not know is you could also use them direct from the zipped file – less work for you! After downloading the zip file, you should set the Developer Tools URL in <code>opera:config</code> to:</p>
        <pre><code><a>file://localhost/&lt;path to&gt;/client-en.zip/client-en.xml</a></code></pre>
        <p>If you are a user of another locale, just download the appropriate locale zip, e.g.</p>
<pre><code><a>file://localhost/&lt;path to&gt;/client-es.zip/client-es.xml</a></code></pre>
        <p>Zipped files are available for: <a href="https://dragonfly.opera.com/app/stp-1/zips/latest/">latest build</a>, <a href="https://dragonfly.opera.com/app/stp-1/cutting-edge/zips/latest/">cutting-edge</a>, <a href="https://dragonfly.opera.com/app/stp-1/experimental/zips/latest/">experimental</a>.</p>
        <h3>JS Runtime Errors</h3>
        <p>Previously run-time errors were dropped in the console, but now you can actually see the line number and the script resource where an error occurred. Note that you currently need Opera Next to use this feature. Here is a screencast of this new feature in action:</p>
<object width="560" height="315"><param name="movie" value="http://www.youtube.com/v/JE5vB9y7BOA?version=3&amp;amp;hl=en_US&amp;amp;rel=0" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never" /><embed src="http://www.youtube.com/v/JE5vB9y7BOA?version=3&amp;amp;hl=en_US&amp;amp;rel=0" type="application/x-shockwave-flash" width="560" height="315" allowfullscreen="true" allowscriptaccess="never" /></object>

        <p>Do note that, at the end, I show some features that are not yet part of this experimental build, but will be soon. :)</p>
<p>To use the experimental build of Opera Dragonfly, set the URL for <code>opera:config#DeveloperTools</code> to:</p>
<pre><code><a>https://dragonfly.opera.com/app/experimental/</a></code></pre>
<p>Please try it out and let us know what you think of it!</p>
