Title: Tworzenie rozszerzeń Szybkiego wybierania w Operze
----
Date: 2012-07-11 16:10:32
----
Lang: pl
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Wprowadzenie</h2>

<p>W 2007 roku <a href="http://www.opera.com/docs/changelogs/windows/920/">wprowdziliśmy</a> na świat Szybkie wybieranie. Nasz pomysł okazał się na tyle popularny, że podobne implementacje można znaleźć również w innych przeglądarkach. Nie bylibyśmy jednak dobrymi rodzicami, gdybyśmy nie pozwolili naszemu &quot;dziecku&quot; dorastać i rozwijać nowych umiejętności. W Operze 11.10 poprawiliśmy wizualne metody <abbr title="interakcji użytkownika">UX</abbr> w Szybkim wybieraniu oraz dodaliśmy <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">możliwość zmiany obrazu strony</a> w okienku Szybkiego wybierania. W Operze 11.50 idziemy o krok dalej i oferujemy <strong>rozszerzenia Szybkiego wybierania</strong>.</p>

<p>Tak jak można zwiększyć funkcjonalność swojej przeglądarki dzięki wielu setkom <a href="https://addons.opera.com/addons/extensions/">rozszerzeń Opery</a>, można też dostosować i rozszerzyć Szybkie wybieranie, by uczynić go jeszcze bardziej użytecznym. Żeby nie ograniczać się do strony internetowej, jej ikony, czy zrzutu ekranu, można spowodować, by w Szybkim wybieraniu pokazała się żywa zawartość, a ten artykuł pokaże, jak to zrobić.</p>

<p class="note">Uwaga: Żeby widzieć jak to działa, trzeba posiadać <a href="http://www.opera.com/browser/">Operę 11.50 lub późniejszą</a> oraz przykładowe rozszerzenie Szybkiego wybierania: <a href="clock_SD_extension.oex">pobierz nasz zegar Szybkiego wybierania</a>.</p>

<h2>Podstawy</h2>

<p>W celu upodobnienia do zwykłych rozszerzeń, rozszerzenia Szybkiego wybierania mają ten sam format i strukturę, ale z niewielkimi zmianami. Innymi słowy, trzeba do pliku <code>config.xml</code> dodać niektóre elementy, by zamienić zwykłe rozszerzenie na rozszerzenie Szybkiego wybierania:</p>

<ul>
    <li>Element <code>&lt;feature&gt;</code> z atrybutem <code>name</code> powinien zawierać wartość <code>opera:speeddial</code>, który zmienia zwykłe rozszerzenie w rozszerzenie Szybkiego wybierania.</li>
    <li>Atrybut <code>viewmodes</code> zawierający znacznik <code>&lt;widget&gt;</code> o wartości <code>minimized</code>: ukazuje tło w okienku Szybkiego wybierania.</li>
</ul>

<p>Należy pamiętać, że obecnie rozszerzenia nie mogą korzystać z funkcji Szybkiego wybierania, jak i z paska narzędzi przeglądarki. Innymi słowy rozszerzenie mające przycisk na pasku narzędziowym nie może być rozszerzeniem Szybkiego wybierania.</p>

<h2>Specyfikacja rozszerzeń Szybkiego wybierania z <code>config.xml</code></h2>

<p>Przejdźmy z teorii do praktyki. Aby zobaczyć następujące fragmenty kodu w kontekście całości <a href="clock_SD_extension.oex">pobierz nasz zegar  w Szybkim wybieraniu</a> i zajrzyj do plików w nim ukrytych. Rysunek 1 pokazuje jak wygląda nasze rozszerzenie po zakończeniu.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/719-tworzenie-rozszerze-szybkiego-wybierania-w-operze/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Rozszerzenie z zegarem zainstalowany w Szybkim wybieraniu przeglądarki Opera." /></p>
<p class="comment">Rysunek 1: Rozszerzenie z zegarem zainstalowane w Szybkim wybieraniu przeglądarki Opera.</p>

<p>Podczas gdy zwykłe okienka Szybkiego wybierania pokazują zrzut ekranu strony z sieci, to rozszerzenia Szybkiego wybierania wyświetlają stronę startową (lub stronę - tło) &#x2014; standardowo jest to <code>index.html</code>. Aby to umożliwić musimy dodać atrybut <code>viewmodes</code> do naszego <code>config.xml</code>, a znacznik <code>&lt;widget&gt;</code> ustawić na wartości <code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>To informuje przeglądarkę by wyświetlać stronę w zminimalizowanej formie &#x2014; w 100% powiększeniu, okienko Szybkiego wybierania ma rozmiar 256 x 160 pikseli. Powinniśmy także dodać element <code>feature</code> z jego atrybutem <code>required</code> i elementem <code>param</code>:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>Atrybut <code>required</code> elementu <code>feature</code> jest potrzebne do uruchamiania rozszerzenia. Na przykład, jeśli istnieją inne przeglądarki, czy aplikacje klienckie zgodne z rozszerzeniami Opery, ale bez Szybkiego wybierania. Jeśli chcesz, by w takim przypadku twoje rozszerzenie nadal działało wpisz wartość <code>false</code>, ale jeśli nie chcesz, by pracowało bez Szybkiego wybierania, wpisz <code>true</code>.</p>

<p>Element <code>param</code> jest wymagany, ponieważ zawiera link do strony, która powinna zostać wczytana po kliknięciu na rozszerzenie.</p>

<p>Oto kompletny <code>config.xml</code> dla naszego rozszerzenia:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: http://www.openclipart.org/detail/17552 --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<h2>Dodawanie zawartości do rozszerzenia</h2>

<p>W następnym kroku dodamy coś ciekawego do okienka w Szybkim wybieraniu. Jest to strona - tło rozszerzenia, więc musimy dodać plik <code>index.html</code> w tym samym folderze, co <code>config.xml</code>. W tym przykładzie stworzymy zegar oparty na JavaScript, który będzie wyświetlał godzinę z dokładnością do sekundy. W tym celu tworzymy prosty plik <code>index.html</code> z pustym elementem <code>output</code>:</p>

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

<p>Następnie musimy stworzyć katalog <code>scripts</code> zawierający plik <code>background.js</code> fdo którego umieściliśmy już link. Ten plik JavaScript wygląda tak:</p>

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

<p>Towarzyszący arkusz stylów (<code>style.css</code>) jest równie prosty, ale zawiera małą sztuczkę:</p>

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

<p>Jak widać, na dole tego pliku CSS3 media query sprawdza, czy jest spełniony warunek <code>view-mode: minimized</code> zgodnie z <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code>specyfikacją Media Feature</a>. Innymi słowy, style z tej sekcji będą miały zastosowanie, jeśli strona zostanie wyświetlona w zminimalizowanym stanie takich jak okienka w Szybkim wybieraniu. Jest to wygodny sposób, aby zastąpić style dla pewnej sytuacji, bez konieczności utrzymywania wielu projektów.</p>

<h2>Wykańczanie rozszerzenia</h2>

<p>Jak zwykle musimy spakować pliki w folderze (ale nie sam folder) w plik ZIP, a następnie przemianujemy rozszerzenie tego pliku z <code>.zip</code> na <code>.oex</code>. Jeśli tego nie zrobiłeś <a href="clock_SD_extension.oex">pobierz nasz Zegar w SW.oex</a> i spróbuj.</p>

<h2><code>SpeedDialContext</code> API</h2>

<p>Po zainstalowaniu naszego rozszerzenia możemy dynamicznie sterować okienkiem Szybkiego wybierania, dzięki <code>SpeedDialContext</code> API. Jest to bardzo proste API z dwoma zapisywalnymi wartościami: <code>title</code> and <code>url</code>. Są one dostępne z poziomu JavaScript w pliku <code>background.js</code> i w obiekcie <code>opera.contexts.speeddial</code> co wygląda tak:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>Możemy użyć tej funkcji, by zwiększyć funkcjonalność naszego rozszerzenia o jakiś przyjazny komunikat w zależności od pory dnia. Trzeb tylko wyedytować plik <code>background.js</code>:</p>

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

<p>Ten plik jest taki sam, jak wcześniejszy, ale z kilkoma dodatkami:</p>

<ul>
    <li>Obiekty <code>messages</code> zawierające wiadomości dla różnych pór dnia.</li>
    <li>Ponowna analiza, gdy godzina się zmienia.</li>
    <li>Linia, która pokazuje odpowiedni komunikat z obiektu <code>messages</code> w tytule rozszerzenia Szybkiego wybierania.</li>
</ul>

<p>To rozszerzenie można pobrać tutaj: <a href="friendly_clock_SD_extension.oex">Przyjacielski zegar w SW.oex</a>. Po zainstalowaniu będzie wyglądał tak:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/719-tworzenie-rozszerze-szybkiego-wybierania-w-operze/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Rozszerzenie z przyjacielskim zegarem zainstalowane w Szybkim wybieraniu przeglądarki Opera." /></p>
<p class="comment">Rysunek 2: Rozszerzenie z zegarem zainstalowane w Szybkim wybieraniu przeglądarki Opera.</p>

<h2>Wnioski</h2>

<p>Jak widać, twórcy mogą dodać nowe funkcje do swoich rozszerzeń. Przykład ukazany tutaj jest bardzo prosty, ale pokazuje potencjał rozszerzeń Szybkiego wybierania połączonego z sprytnym pomysłem i umiejętnościami twórcy stron WWW. Mamy nadzieję, że rozszerzenia Szybkiego wybierania staną się czymś więcej niż ładnym ukazaniem linku do strony. Tak więc czekamy na kreatywne sposoby zastosowania naszego API i zaprezentowania ich na naszej stronie z <a href="https://addons.opera.com/addons/extensions/">rozszerzeniami Opery</a>!</p>

<h2>Odniesienia</h2>
<p><a href="/articles/view/extensions-api-speeddial/">Opera Extensions API: Speed Dial guide</a></p>
