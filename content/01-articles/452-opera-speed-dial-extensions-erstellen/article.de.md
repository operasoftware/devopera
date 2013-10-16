Title: Opera Speed Dial Extensions erstellen
----
Date: 2011-05-03 23:34:49
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

<h2>Einleitung</h2>

<p>Damals, im Jahr 2007, stellten wir <a href="http://www.opera.com/docs/changelogs/windows/920/">die Schnellwahl</a> der Welt vor. Das Konzept erwies sich als sehr beliebt und &#xE4;hnliche Ans&#xE4;tze k&#xF6;nnen mittlerweile auch in anderen Browsern gefunden werden. Aber so stolz wir auch sind, was w&#xE4;ren wir f&#xFC;r Eltern, wenn wir unserem Baby nicht dabei helfen w&#xFC;rden, zu wachsen und neue F&#xE4;higkeiten zu erlenen? Mit Opera 11.10 haben wir das Aussehen und <abbr title="Benutzerinteraktion">UX</abbr> der Schnellwahl &#xFC;berarbeitet und bieten <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements-de/">M&#xF6;glichkeiten f&#xFC;r Entwickler, das Aussehen ihrer Webseite zu beeinflussen</a>, wenn sie innerhalb der Schnellwahl angezeigt wird. Mit Opera 11.50 gehen wir noch einen Schritt weiter und bieten <strong>Speed Dial Extensions</strong> an.</p>

<p>So, wie der Browser mit Hunderten von <a href="https://addons.opera.com/addons/extensions/">Opera Extensions</a> erweitert werden kann, l&#xE4;sst sich jetzt ebenfalls die Schnellwahl personalisieren und erweitern, damit sie noch n&#xFC;tzlicher wird. Statt nur auf eine Webseite, ein Icon oder einen Screenshot beschr&#xE4;nkt zu sein, liefert die Schnellwahl nun Live-Inhalte, und dieser Artikel erkl&#xE4;rt, wie das genau funktioniert.</p>

<p class="note">Hinweis: Um dieses Beispiel lauff&#xE4;hig zu sehen, ben&#xF6;tigt man <a href="http://www.opera.com/browser/next/">Opera 11.50</a> und eine Speed Dial Extension: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">Download der Speed Dial Clock</a>.</p>

<h2>Die Grundlagen</h2>

<p>Um die Erweiterbarkeit mit regul&#xE4;ren Extensions f&#xFC;r Opera beizubehalten, nutzen Speed Dial Extensions das selbe Format und die gleiche Struktur, allerdings mit Erg&#xE4;nzungen. In anderen Worten bedeutet das, dass die folgende, kleine Erg&#xE4;nzung in der Datei <code>config.xml</code> eine bereits vorhandene Extension in eine Speed Dial Extension umwandeln kann:</p>

<ul>
    <li>Ein <code>&lt;feature&gt;</code>-Element mit einem <code>name</code>-Attribut des Wertes <code>opera:speeddial</code> verwandelt die Extension in eine Speed Dial Extension.</li>
    <li>Ein <code>viewmodes</code>-Attribut im beinhaltenden <code>&lt;widget&gt;</code>-Tag mit dem Wert <code>minimized</code>: Dies zeigt die Hintergrundseite in der Schnellwahl an.</li>
</ul>

<p>Es ist zu beachten, dass eine Extension nicht das Schnellwahl-Feature und die Browser-Toolbar gleichzeitig verwenden kann. Eine Extension, die also einen Button in der Toolbar erzeugt, kann nicht auch in der Schnellwahl verwendet werden.</p>

<h2>Bestimmung der Speed Dial Extension mit <code>config.xml</code></h2>

<p>Lasst uns von der Theorie in die Praxis wechseln, indem wir durch ein Beispiel gehen. Um die folgenden Codeausz&#xFC;ge im Zusammenhang zu sehen, <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">laden wir unsere  Speed Dial Clock Extension herunter</a> und schauen uns die Quelldateien innerhalb des Pakets an. Abbildung 1 zeigt, wie die fertige Extension aussehen wird.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/452-opera-speed-dial-extensions-erstellen/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Die Uhr-Erweiterung ist in der Schnellwahl installiert." /></p>
<p class="comment">Abbildung 1: Die Uhr-Erweiterung ist in der Schnellwahl installiert.</p>

<p>Wohingegen normale Zellen der Schnellwahl einen Screenshot einer Webseite anzeigen, zeigen Speed Dial Extensions die Startseite (oder Hintergrundseite) der Extension — das ist standardm&#xE4;&#xDF;ig <code>index.html</code>. Um dies zu aktivieren, muss zuerst das <code>viewmodes</code>-Attribut zu der Datei <code>config.xml</code> mit dem Tag <code>&lt;widget&gt;</code> und dem Wert <code>minimized</code> hinzugef&#xFC;gt werden:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Dies sagt dem Browser, dass die Hintergrundseite der Extension in minimierter Form angezeigt werden soll — die Gr&#xF6;&#xDF;e eines individuellen Fensters der Schnellwahl betr&#xE4;gt 256 x 160 Pixel bei 100% Zoom. Zus&#xE4;tzlich muss noch ein <code>feature</code>-Element f&#xFC;r Operas Schnellwahl mit einem <code>required</code>-Attribut und einem <code>param</code>-Element versehen werden:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>Das <code>required</code>-Attribut vom <code>feature</code>-Element gibt an, ob die Schnellwahl f&#xFC;r die Ausf&#xFC;hrung der Extension ben&#xF6;tigt wird. Beispielsweise k&#xF6;nnte es andere Browser oder User-Agents geben, die mit Operas Erweiterungen kompatibel sind, aber keine Schnellwahl besitzen. Wenn die Erweiterung in solchen F&#xE4;llen immer noch lauff&#xE4;hig sein sollte, dann sollte man den Wert <code>false</code> verwenden; wenn Ihre Erweiterung ohne die Schnellwahl nicht lauff&#xE4;hig ist, verwenden man <code>true</code>.</p>

<p>Das <code>param</code>-Element wird ben&#xF6;tigt und gibt an, welche Seite beim Klick auf die Schnellwahl ge&#xF6;ffnet werden soll.</p>

<p>Hier ist die komplette <code>config.xml</code>-Datei f&#xFC;r diese Extension:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: <a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>Inhalt zur Extension hinzuf&#xFC;gen</h2>

<p>Im n&#xE4;chsten Schritt wollen wir etwas Interessantes zum Schnellwahlfenster hinzuf&#xFC;gen. Dies ist die Hintergrundseite der Extension, deshalb m&#xFC;ssen wir eine Datei namens <code>index.html</code> im selben Ordner wie <code>config.xml</code> erstellen. In diesem Beispiel erstellen wir eine einfache Digitaluhr mit JavaScript, welche die aktuelle Zeit auf die Sekunde genau anzeigt. Zuerst erstellen wir eine einfache Datei <code>index.html</code> mit einem leeren <code>output</code>-Element:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Infolgedessen ben&#xF6;tigen wir einen <code>scripts</code>-Ordner, der die verlinkte Datei <code>background.js</code> enth&#xE4;lt. Diese JS-Datei sieht so aus:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>Das dazugeh&#xF6;rige Stylesheet (<code>style.css</code>) ist ebenfalls simpel, enth&#xE4;lt aber einen kleinen Trick:</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>Wie ihr seht, enth&#xE4;lt die Datei am Ende eine CSS3 Media Query, die nach der <code>view-mode: minimized</code>-Bedingung Ausschau h&#xE4;lt, im Einklang mit der <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> Media Feature-Spezifikation</a>. In anderen Worten bedeutet dies, dass der Stil in diesem Bereich nur dann angewendet wird, wenn die Seite in einem minimierten Zustand dargestellt wird, zum Beispiel innerhalb der Schnellwahl. Das ist praktisch, um bestimmte Stil-Eigenschaften in bestimmten Situationen zu &#xFC;berschreiben, ohne dass man mehrere Designs pflegen muss.</p>

<h2>Abschlie&#xDF;ende Arbeiten an der Extension</h2>

<p>Wie immer zippen wir alle Dateien innerhalb des Ordners (aber nicht den Ordner selbst), um eine Erweiterung zu erstellen, und benennen den Dateityp in <code>.oex</code> um. Wenn ihr es noch nicht gemacht habt,  <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">ladet euch clock_SD_extension.oex herunter</a> und testet die Extensions.</p>

<h2>Die <code>SpeedDialContext</code>-API</h2>

<p>Einmal installiert, kann unsere Extension dynamisch den Inhalt der Schnellwahl-Zelle dank der <code>SpeedDialContext</code>-API kontrollieren. Dies ist eine sehr simple API, mit zwei beschreibbaren Eigenschaften: <code>title</code> und <code>url</code>. Diese werden im Hintergrund von JavaScript durch das Objekt <code>opera.contexts.speeddial</code> verf&#xFC;gbar gemacht, so wie hier:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>Wir k&#xF6;nnen dieses Feature verwenden, um unsere Uhr zu erweitern, indem wir eine freundliche Nachricht je nach Tageszeit anzeigen. Die einzige Datei, die bearbeitet werden muss, ist die JavaScript-Datei <code>background.js</code>:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>Das ist das Gleiche wie beim ersten Beispiel auch, nur mit ein paar kleinen Erg&#xE4;nzungen, namentlich:</p>

<ul>
    <li>Ein <code>messages</code>-Objekt, das verschiedene Nachrichten f&#xFC;r verschiedene Tageszeiten enth&#xE4;lt.</li>
    <li>Eine wiederholte &#xDC;berpr&#xFC;fung, die Code ausf&#xFC;hrt, wenn sich die Stunde ver&#xE4;ndert hat.</li>
    <li>Eine Zeile, die die relevante Nachricht des <code>messages</code>-Objekts im Titel der Schnellwahl anzeigt.</li>
</ul>

<p>Die Erweiterung kann hier heruntergeladen werden: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. Nach der Installtion sieht die Erweiterung so aus:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/452-opera-speed-dial-extensions-erstellen/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Die freundliche Uhr-Extension, nachdem sie in der Schnellwahl von Opera installiert wurde." /></p>
<p class="comment">Abbildung 2: Die freundliche Uhr-Extension, nachdem sie in der Schnellwahl von Opera installiert wurde.</p>

<h2>Abschluss</h2>

<p>Wie wir gerade gelernt haben, k&#xF6;nnen Entwickler nun noch mehr Funktionalit&#xE4;t zu ihren Extensions hinzuf&#xFC;gen. Das hier vorgestellte Beispiel ist sehr einfach, aber es zeigt das Potenzial der Speed Dial Extensions, in Verbindung mit einer cleveren Idee und den F&#xE4;higkeiten der Webentwickler. Wir hoffen, dass Speed Dial Extensions mehr als nur h&#xFC;bsche Links zu einer Webseite werden, deshalb freuen wir uns darauf, eure kreativen Ideen im <a href="https://addons.opera.com/addons/extensions/">Opera Extensions Repository</a> zu sehen!</p>

<h2>Referenzen</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">Opera Extensions API: Speed Dial Guide</a></p>
