Title: Operas leichtgewichtige Themes
----
Date: 2011-11-04 12:59:06
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
	
<p>Opera 12 enth&#xE4;lt viele Verbesserungen, inklusive Updates an Operas Skinning-System. Aus diesem Grund haben wir Skins in <strong>Themes</strong> umbenannt. Es gibt ein neues leichtgewichtiges System (intern wird es Personas genannt), welches auf Operas Standard-Theme aufbaut und Anpassungsm&#xF6;glichkeiten viel einfacher erreichen l&#xE4;sst. In diesem Artikel schauen wir uns an, wie das neue System funktioniert.</p>


<h2>Wie funktioniert es?</h2>

<p>Die neuen Themes funktionieren auf die selbe Art wie das bereits vorhandene Theme-System: sie sind in einer ZIP-Datei verpackt und enthalten zwei Dinge, die Bestandteile des Themes und eine <code>persona.ini</code>. Anhand der .ini-Datei erkennt Opera die ZIP-Datei als ein Theme – wenn Opera solch eine Datei findet (z.B. als Verlinkung auf einer Webseite), dann wird das Theme automatisch installiert...ein einfacher Vorgang. Das Theme basiert auf Operas Standard-Theme f&#xFC;r das jeweilige OS und baut darauf auf.</p>

<p>Die Datei <code>persona.ini</code> enth&#xE4;lt eine Reihe von Sektionen, die von einem Titel in eckigen Klammern eingeleitet werden, ungef&#xE4;hr so: <code>[Options]</code>. Jede dieser Sektionen beinhaltet Informationen zu verschiedenen Bereichen des Themes, wie ein eigenes Hintergrundbild. Der Schl&#xFC;ssel hier ist Schlichtheit – Sie k&#xF6;nnen immer noch das alte Theme-System verwenden, um Opera noch mehr anzupassen, aber viele bevorzugen ein einfaches System, bei dem nicht die Gefahr besteht, Teile der Benutzeroberfl&#xE4;che zu zerst&#xF6;ren. Das leichtgewichtige System ist viel einfacher zu verwenden. In <a href="http://www.opera.com/browser/next/">Opera 12 Alpha</a> erlauben wir Ihnen nur, das Hintergrundbild und die Farben anzupassen. Mehr Optionen k&#xF6;nnten in der Zukunft hinzugef&#xFC;gt werden.</p>


<p>Im n&#xE4;chsten Abschnitt werden wir Ihnen anhand eines kompletten Theme-Beispiels zeigen, wie alles funktioniert.</p>


<h2>Veranschaulichung anhand eines Beispiels</h2>

<p>Um ein Beispiel-Theme zu sehen, installieren Sie <a href="http://www.opera.com/browser/next/">Opera 12 Alpha</a> und gehen Sie auf die Seite <a href="https://addons.opera.com/themes/">Opera Themes</a>. Klicken Sie auf eines der Themes und Sie werden feststellen, dass der Browser sein Aussehen ver&#xE4;ndert und nun in etwa so aussieht:</p>


<p><img src="/articles/view/operas-lightweight-themes-de/theme1.jpg" alt="Ein leichtgewichtiges Theme, das auf Opera 12 Alpha angewandt wurde" /></p>
<p class="comment">Abbildung 1: Ein Beispiel-Theme in Aktion.</p>

<p class="note">Dieses Theme wird wie jedes andere Theme auch unter <em>Erscheinungsbild &gt; Skin</em> aufgef&#xFC;hrt. Von hier k&#xF6;nnen Sie ein anderes Theme ausw&#xE4;hlen oder vorhandene Themes l&#xF6;schen. Sie k&#xF6;nnen Themes auch direkt in den <em>Skin</em>-Ordner von Operas Profil packen. Sie finden den Ordner hier: <code>[home folder]/Library/Opera</code> (Mac und Linux), und <code>C:\users\[user]\AppData\Roaming\Opera\Opera</code> (Windows).</p>


<p>Wenn Sie den obigen Link mittels <em>Verlinkten Inhalt speichern als...</em> herunterladen und entpacken, dann finden Sie alle Bestandteile und die Datei <code>personas.ini</code>, die aus folgenden Abschnitten besteht:</p>


<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>


<p>Dies ist ein Kommentar, der einige Hintergrundinformationen &#xFC;ber das Theme enth&#xE4;lt. Sie k&#xF6;nnen Ihre Kommentare an einer beliebigen Stelle innerhalb der Datei platzieren, solange Sie in einer eigenen Zeile stehen und durch das Raute-Symbol eingeleitet werden (#).</p>


<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p>Der <code>[Info]</code>-Abschnitt ist ziemlich selbsterkl&#xE4;rend. <code>Name</code> ist der Name des Themes, der im Erscheinungsbild-Dialog von Operas demn&#xE4;chst erscheinenden Theme-Katalog etc. angezeigt wird. [Author] ist der Ersteller des Themes und <code>[Version]</code> sollte immer auf 1 gestellt sein (dies bedeutet &quot;Version 1 des leichtgewichtigen Themes&quot;). Ein Vorschaubild wird verwendet, um einen ersten Eindruck f&#xFC;r Kataloge etc. zu vermitteln, wird aber aktuell nocht nicht genutzt.</p>
 

<pre><code>[Options]
Colorize Color                = #3e6da9</code></pre>

<p>Ein optionaler Abschnitt: wenn festgelegt, dann &#xFC;berschreibt <code>Colorize Color</code> das momentan aktive Farbschema mit einer eigenen Einf&#xE4;rbung – wir benutzen die allgemeine Farbgebung des Bilds. Einige Themes werden, sobald installiert, eine Einf&#xE4;rbung oberhalb des Themes hinzuf&#xFC;gen.</p>


<pre><code>[Window Image]
Type                          = BestFit
Tile Center                   = Kraken.jpg
Colorize                      = 0</code></pre>

<p>Der Abschnitt <code>[Window Image]</code> enth&#xE4;lt Einstellung f&#xFC;r die Kontrolle &#xFC;ber das gesamte Browser-Fenster. <code>Type</code> ist auf <code>BestFit</code> gesetzt, um Opera mitzuteilen, dass das Bild bestm&#xF6;glich auf das Browserfenster abgestimmt wird (die andere, am h&#xE4;ufigsten verwendete Einstellung ist <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#boxtile">BoxTile</a>). Die Zeile <code>Tile Center</code> enth&#xE4;lt den Pfad zum Bild, das als eigenes Hintergrundbild verwendet wird. <code>Colorize = 0</code> gibt an, dass das Hintergrundbild nicht auf die gleiche Art wie die restliche Benuteroberfl&#xE4;che eingef&#xE4;rbt wird. Setzen Sie den Wert auf <code>1</code>, falls Sie das wollen.</p>


<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1
Window Skin                   = 1
Document Window Skin          = 1</code></pre>

<p>Wenn alle Eigenschaften auf <code>1</code> gesetzt sind, dann scheint das Hintergrundbild durch die Schnellwahl hindurch. Wenn diese Eigenschaften fehlen oder auf 0 gesetzt sind, scheint das Bild nicht durch.</p>


<p>Wie schon vorab erw&#xE4;hnt, k&#xF6;nnen Sie zum jetzigen Zeitpunkt keine weiteren &#xC4;nderungen vornehmen. Das mag limitierend wirken, ist aber volle Absicht – Themes sollen dazu da sein, um kleine &#xC4;nderungen an der Benutzeroberfl&#xE4;che vorzunehmen. Wenn Sie gr&#xF6;&#xDF;ere &#xC4;nderungen vornehmen wollen, k&#xF6;nnen Sie nat&#xFC;rlich immer noch das vollst&#xE4;ndige Theme-System nutzen. Das neue System hingegen ist viel einfacher zu schreiben und zu &#xFC;bernehmen.</p>


<h2>Themes installieren und verteilen</h2>

<p>Wenn Sie ein Theme erstellt haben, wollen Sie es sicherlich mit anderen Menschen teilen. Der momentan beste Weg ist es, wenn Sie Ihr Theme auf einen Webserver hochladen (ein vollst&#xE4;ndiger Theme-Katalog wird bald auf <a href="http://addons.opera.com/themes">addons.opera.com/themes</a> verf&#xFC;gbar sein. Dort werden Sie dann auch Ihre Themes hochladen k&#xF6;nnen. Im Moment finden Sie dort nur Beispiel-Themes). Wenn Sie Ihr Theme auf Ihren Webserver hochladen, m&#xFC;ssen Sie noch sicherstellen, dass es mit dem korrekten MIME-Type ausgeliefert wird, da es sonst nicht installiert wird. Um dies zu tun, f&#xFC;gen Sie den folgenden Code zu Ihrer <code>.htaccess</code>-Datei im gleichen Verzeichnis hinzu (nat&#xFC;rlich nur bei einem Apache-Server – andere Server ben&#xF6;tigen einen anderen, aber &#xE4;hnlichen Fix):</p>


<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>Zusammenfassung</h2>

<p>Wir hoffen, dass Sie unseren Walkthrough f&#xFC;r Operas leichtgewichtige Themes hilfreich fanden. Teilen Sie uns bitte Ihre Meinung mit!</p>
