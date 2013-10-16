Title: Lassen Sie Ihre Seite in der Schnellwahl erstrahlen
----
Date: 2011-04-21 16:18:57
----
Lang: de
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<ul>
<li><a href="#intro">Einleitung</a></li>
<li>
<a href="#uselogo">Verwendung eines Logos</a>
<ul>
<li><a href="#html5icons">Icons in HTML5</a></li>
<li><a href="#setanicon">Ein Icon f&#xFC;r die Schnellwahl festlegen</a></li>
<li><a href="#multipleicons">Mehrere Icons verwenden</a></li>
</ul>
</li>
<li>
<a href="#content">Ma&#xDF;geschneiderten Inhalt f&#xFC;r die Schnellwahl anbieten</a>
<ul>
<li><a href="#viewmode">Verwendung von <code>view-mode:minimized</code></a></li>
<li><a href="#with-x-purpose">Verwendung des X-Purpose Header</a></li>
<li><a href="#preview-refresh">Inhalt in regelm&#xE4;&#xDF;igen Intervallen neu laden</a></li>
</ul>
</li>
<li><a href="#sdpriority">Priorit&#xE4;t der Schnellwahl</a></li>
<li><a href="#productsupport">Opera-Produktunterst&#xFC;tzung</a></li>
</ul>

<h2 id="intro">Einleitung</h2>
	
<p>Seit Version 11.10 erlaubt Opera Webseitenbetreibern die Kontrolle &#xFC;ber das Aussehen ihrer Seite in der Schnellwahl. Standardm&#xE4;&#xDF;ig verwendet die Schnellwahl einen Screenshot der Webseite. Doch jetzt ist es auch m&#xF6;glich, ein Icon zu definieren oder spezielles CSS als Inhalt f&#xFC;r die Schnellwahl anzubieten.</p>

<h2 id="uselogo">Verwendung eines Logos</h2>


<p>Dieser Abschnitt befasst sich damit, wie man ein eigenes Logo f&#xFC;r die Schnellwahl verwenden kann.</p>
	
<h3 id="html5icons">Icons in HTML5</h3>
	
<p>Wahrscheinlich seid ihr bereits mit Icons f&#xFC;r Lesezeichen vertraut. Diese wurden im Jahr 1999 gemeinsam mit dem Internet Explorer 5 eingef&#xFC;hrt. Obwohl sie nicht Bestandteil der HTML4-Spezifikationen sind, waren Browserhersteller damit einverstanden, <a href="http://www.w3.org/2005/10/howto-favicon">diese Icons zu verwenden,</a> indem Unterst&#xFC;tzung f&#xFC;r <code>icon</code> als ein Wert im <code>rel</code>-Attribut des <code>link</code>-Elements bereitgestellt wurde. Apple hat diesen Ansatz f&#xFC;r Touch-Ger&#xE4;te erweitert, mithilfe von <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. Gem&#xE4;&#xDF; den HTML5-Spezifikationen ist <code>icon</code> nun ein <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">g&#xFC;ltiger Standardwert</a> f&#xFC;r das <code>rel</code>-Attribut.</p>

<h3 id="setanicon">Ein Icon f&#xFC;r die Schnellwahl festlegen</h3>
	
<p>Diese Methode &#xE4;hnelt sehr stark der Einbindung eines normalen Icons. Es muss lediglich ein <code>&lt;link&gt;</code> Tag im <code>head</code>-Bereich des Dokuments hinzugef&#xFC;gt werden.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code></pre>
		
		
<p>Icons f&#xFC;r die Schnellwahl m&#xFC;ssen folgende Eigenschaften besitzen:</p>
	
<ul>
<li>Die Gr&#xF6;&#xDF;e muss mindestens 114 Pixel breit und 114 Pixel hoch sein. Das ist die minimale Gr&#xF6;&#xDF;e f&#xFC;r Icons. Kleinere Icons werden ignoriert.</li>
<li>Sie m&#xFC;ssen als PNG, JPEG oder GIF vorliegen. SVG-Bilder werden noch nicht unterst&#xFC;tzt. Nur der erste Frame eines animierten Bildes wird verwendet.</li>
</ul>

<p>Standardm&#xE4;&#xDF;ig betr&#xE4;gt die maximale Gr&#xF6;&#xDF;e f&#xFC;r ein Icon 256 x 160 Pixel. Gr&#xF6;&#xDF;ere Icons werden verkleinert, damit sie passen (<a href="/articles/view/opera-speed-dial-enhancements/icon.html" lang="en">icon resize demo</a>). Benutzer k&#xF6;nnen die Standardwerte f&#xFC;r die minimale und maximale Gr&#xF6;&#xDF;e in den Einstellung von <code>opera:config</code> &#xE4;ndern.</p>
	
<p>Au&#xDF;erdem bietet Opera 11.10 Unterst&#xFC;tzung f&#xFC;r <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> und <code>image_src</code>.</p>

<h3 id="multipleicons">Mehrere Icons verwenden</h3>
	
<p>Es k&#xF6;nnen ebenfalls mehrere Icons angegeben werden. Das ist praktisch, wenn man verschiedene Icons f&#xFC;r Lesezeichen und die Schnellwahl verwenden m&#xF6;chte.</p>
	
<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- Dies ist das Icon, das f&#xFC;r die Schnellwahl verwendet wird --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>
	
<p>Wenn mehr als ein Icon angegeben wird, verwendet die Schnellwahl das gr&#xF6;&#xDF;ere Icon f&#xFC;r die Darstellung (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html" lang="en">multiple icon demo</a>). Haben beide Icons die gleiche Gr&#xF6;&#xDF;e, dann wird das erste von beiden Icons verwendet (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html" lang="en">same size icon demo</a>).</p>
	
<h2 id="content">Ma&#xDF;geschneiderten Inhalt f&#xFC;r die Schnellwahl anbieten</h2> 
	
<h3 id="viewmode">Verwendung von <code>view-mode:minimized</code></h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/446-lassen-sie-ihre-seite-in-der-schnellwahl-erstrahlen/view-mode.png" width="664" height="445" alt="Die Schnellwahl in Opera 11.10" /></p>
<p class="comment">Abbildung 1: Die Schnellwahl in Opera 11.10</p>

<p>Das <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> Media Feature erm&#xF6;glicht die Verwendung von Stylesheets je nach Darstellungsmodus. Mittels <code>view-mode: minimized</code> kann ein alternativer Stil verwendet oder spezieller Inhalt dargestellt werden, der f&#xFC;r die Schnellwahl angepasst ist. Das <code>view-mode</code> Media Feature funktioniert wie alle anderen Media Features, z.B. <code>device-width</code>. Wie mit jeder anderen Media Query auch, sollten Stylesheets vom <code>@media</code>-Block eingeschlossen sein.</p>
		
<pre><code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code></pre>
	
<p>Es kann auch ein externes Stylesheet verwendet werden, indem man den Wert des Media-Attributs auf <code>(view-mode: minimized)</code> setzt.</p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>

<p>Hier ist ein <a href="/articles/view/opera-speed-dial-enhancements/view-mode.html">Beispiel von <code>view-mode: minimized</code> bei der Arbeit</a>.</p>

<p>Man sollte beachten, dass <code>view-mode: minimized</code> in der Schnellwahl einen Sichtbereich ausl&#xF6;st, der <strong>256 Pixel breit und 160 Pixel hoch ist</strong>.</p>

<h3 id="with-x-purpose">Verwendung des X-Purpose Header</h3>

<p>Es ist ebenfalls m&#xF6;glich, eine andere URL f&#xFC;r die Schnellwahl an den Browser zu senden. Dies wird dadurch erm&#xF6;glicht, dass jede Anfrage der Schnellwahl einen zus&#xE4;tzlichen Header namens <code>X-Purpose: preview</code> enth&#xE4;lt.</p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code></pre>

<p>Indem dieser Header ermittelt wird, kann entschieden werden, ob eine andere URL verwendet werden soll, ob nur bestimmte Dateien zur Schnellwahl gesendet werden sollen oder ob ein anderer Inhalt angezeigt werden soll. Man beachte, dass dies keinerlei Auswirkungen auf die URL hat, die aufgerufen wird, nachdem ein Benutzer dann auf den Eintrag in der Schnellwahl klickt.</p> 

<p>In dem unteren Beispiel verwenden wir Apaches mod_rewrite um alle Anfragen der Schnellwahl zur URL <code>/preview.html</code> weiterzuleiten.</p>

<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>

<p>Vielleicht wollet ihr aber auch lieber eine serverseitige Sprache verwenden, um verschiedene Inhalte mit der gleichen URL auszugeben. Dieses Beispiel verwendet PHP.</p>

<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Sende Schnellwahl-Inhalt
} else {
    // Sende normalen Inhalt

}
?&gt;</code></pre>

<h3 id="preview-refresh">Inhalt in regelm&#xE4;&#xDF;igen Intervallen neu laden</h3>

<p>Um den Inhalt der Schnellwahl dynamischer zu gestalten, kann das Verhalten f&#xFC;r das automatische Neuladen einer Seite festgelegt werden, welches angewandt wird, sobald der Benutzer eine Seite zur Schnellwahl hinzuf&#xFC;gt. Dies kann auf zwei Arten geschehen:</p>
<ol><li><p>Mithilfe eines <code>meta</code> Tags:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p>Durch Einstellen eines <code>Preview-Refresh</code> Antwort-Headers:</p>
<pre>Preview-Refresh:3600</pre>
</li></ol>
<p>Es ist zu beachten, dass der Wert in Sekunden angegeben wird. 3600 wird die Seite demzufolge jede Stunde neu laden.</p>

<p class="note">In der aktuellen Version von Opera funktioniert die <code>Preview-Refresh</code> Header Methode leider noch nicht. Deshalb sollte man zur Zeit nur die <code>meta</code> Tag Variante benutzen.</p>

<h2 id="sdpriority">Priorit&#xE4;t der Schnellwahl</h2>

<p>Die Schnellwahl gibt zuerst <code>view-mode: minimized</code> im CSS Priorit&#xE4;t. Wenn keine Stileigenschaft vorhanden ist, wird nachgeschaut, ob ein Icon vorhanden ist. Falls kein Icon vorhanden ist oder fehlt bzw. besch&#xE4;digt ist, dann erstellt die Schnellwahl einen Screenshot der Webseite - dies ist das Standardverhalten.</p>

<h2 id="productsupport">Opera-Produktunterst&#xFC;tzung</h2>
<p>Zum jetzigen Zeitpunkt stehen diese Verbesserungen nur in der Desktop-Version von Opera zur Verf&#xFC;gung.</p>
