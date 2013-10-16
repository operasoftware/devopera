Title: API W3C położenia urządzenia: wykrywanie położenia i przyspieszenia
----
Date: 2012-07-12 12:15:38
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

<h2>Wstęp</h2>

<p>Długo mówiło się, że aplikacje dedykowane mają przewagę nad aplikacjami sieciowymi, bo mogą korzystać z podzespołów urządzeń, np. żyroskopu czy przyspieszeniomierza. Od teraz te podzespoły mogą być wykorzystywane również przez strony internetowe, dzięki <a href="http://dev.w3.org/geo/api/spec-source-orientation.html">specyfikacji W3C Device Orientation</a> (położenie urządzenia).</p>

<p>Korzystając z tego API możemy zarówno określać położenie urządzenia, jak i zbierać informacje o jego ruchach. Te dane są przydatne w różnych aplikacjach, a także grach sterowanych ruchem.</p>

<p>W tym artykule przyjrzymy się podstawom działania API położenia urządzenia, oraz kilku prostym przykładom.</p>

<h2>Układ współrzędnych</h2>

<p><img src="http://devfiles.myopera.com/articles/9472/device-axes.png" alt="objaśnienie układu współrzędnych" /></p>
<p class="caption">Rycina 1: Schemat układu współrzędnych używanego w położeniu urządzenia.</p>

<p>Potrzebujemy punktu odniesienia, aby porównać zmianę kierunku i położenie sprzętu, jakkolwiek byłby ułożony. W tym celu obierzemy zwykły układ współrzędnych XYZ. Gdy położysz płasko swój aparat na blacie stołu z wyświetlaczem zwróconym do góry, osie układu będą przebiegały następująco: oś X pobiegnie z boku na bok (z lewa na prawo) urządzenia, dzieląc jego powierzchnię na górną i dolną połowę; oś Y pobiegnie z góry na dół, dzieląc wyświetlacz na lewą i prawą część; oś Z uniesie się z powierzchni ekranu ku niebu. Taki układ współrzędnych przedstawia rycina 1.</p>

<p>Skoro już oznaczyliśmy układ współrzędnych, możemy przedstawić sposób obracania urządzenia. Położenie urządzenia określa trzy rodzaje obrotu, a są to:</p>

<ul>
<li><p><strong>Alfa:</strong> Kąt obrotu wokół osi Z nazwano alfą. Przykładem tak obracającego się przedmiotu są śmigła helikopterów. Nie poruszają się one w górę ani w dół. Kręcą się jedynie wokół osi Z o „alfa” stopni w krótkim czasie. Przedział wartości to od 0 do 360 stopni.</p>

<p><img src="http://devfiles.myopera.com/articles/9472/device-alpha.png" alt="Obrót urządzenia wokół osi Z" /></p>
<p class="caption">Rycina 2: Obrót urządzenia wokół osi Z.</p>
</li>

<li>
<p><strong>Beta:</strong> Kąt obrotu wokół osi X nazwano betą. Przykładowo, kiedy samolot odrywa się od pasu startowego, przemieszcza się przed siebie i jednocześnie podrywa w górę. W tej sytuacji obraca się wokół osi X. Przedział wartości to od -180 do 180 stopni.</p>

<p><img src="http://devfiles.myopera.com/articles/9472/device-beta.png" alt="Obrót urządzenia wokół osi X" /></p>
<p class="caption">Rycina 3: Obrót urządzenia wokół osi X.</p>
</li>

<li>
<p><strong>Gamma:</strong> Kąt obrotu wokół osi Y nazwano gammą. Przykładowo, gdy samolot lecący prosto (ze skrzydłami równoległymi do ziemi) zechce skręcić, przybliża jedno ze skrzydeł do ziemi, oddalając drugie. Przedział wartości to od -90 do 90 stopni.</p>

<p><img src="http://devfiles.myopera.com/articles/9472/device-gamma.png" alt="Obrót urządzenia wokół osi Y" /></p>
<p class="caption">Rycina 4: Obrót urządzenia wokół osi Y.</p>
</li>
</ul>

<h2>Zdarzenie <code>deviceorientation</code></h2>

<p>Specyfikacja położenia urządzenia wprowadza zdarzenie o nazwie <code>deviceorientation</code>. Przy jego użyciu możemy odbierać zmianę przechylenia maszyny pod względem alfy, bety i gammy.</p>

<p>Nie wszystkie urządzenia (zwłaszcza laptopy) rejestrują swoje położenie, więc rozsądnie jest najpierw sprawdzić, czy tytułowe zdarzenie jest dostępne:</p>

<pre><code>if (window.DeviceOrientationEvent) {
  //twój kod
} else {
  console.log(&#39;brak obsługi położenia urządzenia&#39;);
  //w razie potrzeby, tu możesz dodać kod zastępczy
}</code></pre>

<p>Teraz możemy nasłuchiwać zdarzenia. Za każdym razem gdy urządzenie zostanie przechylone, odpala się zdarzenie, które możemy obsłużyć funkcją:</p>

<pre><code>window.addEventListener(&#39;deviceorientation&#39;, przechwyt_położenia, false);</code></pre>

<p>Wewnątrz funkcji <code>przechwyt_położenia</code> możemy wykorzystać dane o ułożeniu aparatu:</p>

<pre><code>function przechwyt_położenia (event) {
 var alfa = event.alpha;
 var beta = event.beta;
 var gamma = event.gamma;
 console.log(&#39;Położenie - alfa: &#39;+alfa+&#39;, beta: &#39;+beta+&#39;, gamma: &#39;+gamma);
}</code></pre>

<p>Powyższa funkcja przedstawia, jak łatwe jest zdobycie wartości alfy, bety i gammy, odzwierciedlających obrót maszyny.</p>

<p>Obejrzyj naszą <a href="http://dev.opera.com/articles/view/w3c-device-orientation-api/dodemo.htm">stronę przedstawiającą położenie urządzenia</a>. W tym demie kolor tła strony zmienia się gdy poruszysz swoją maszyną. Wyświetlane są również wartości liczbowe alfy, bety i gammy.</p>

<h2>Zdarzenie <code>devicemotion</code></h2>

<p>Istnieje również zdarzenie pomocne przy ocenianiu tempa, z jakim urządzenie przyspiesza: <code>devicemotion</code>. Odbiera ono wskazania przyspieszeniomierza i określa przyspieszenie wzdłuż osi X, Y i Z.</p>

<p>Pierwszą rzeczą jest (jak zwykle) sprawdzenie, czy mamy dostęp do zdarzenia <code>devicemotion</code>:</p>

<pre><code>if (window.DeviceMotionEvent) {
// wkraczamy z naszym kodem
} else {
console.log(&#39;Ta maszyna nie podaje swojego przyspieszenia&#39;);
}</code></pre>

<p>Teraz będziemy nasłuchiwać w następujący sposób:</p>

<pre><code>window.addEventListener(&#39;devicemotion&#39;, przechwyt_przyspieszenia, false);</code></pre>

<p>Następnie tworzymy funkcję wykorzystującą informacje o przyspieszeniu. Warto pamiętać, że istnieje sposób określenia przyspieszenia zarówno z udziałem grawitacji, jak i bez niego. Pierwsze zawarte jest we właściwości <code>accelerationIncludingGravity</code>, drugie w <code>acceleration</code>:</p>

<pre><code>function przechwyt_przyspieszenia (event) {
  var przyspieszenie_x = event.acceleration.x;
  var przyspieszenie_y = event.acceleration.y;
  var przyspieszenie_z= event.acceleration.z;

  var przyspieszenie_g_x = event.accelerationIncludingGravity.x;
  var przyspieszenie_g_y = event.accelerationIncludingGravity.y;
  var przyspieszenie_g_z = event.accelerationIncludingGravity.z;
}</code></pre>

<p>Jednostką jest metr na sekundę do kwadratu (m/s<sup>2</sup>). Dostępne są właściwości określające przyspieszenie wzdłuż osi X, Y i Z, co widać w powyższym kodzie. </p>

<p>Obejrzyjcie nasze (*ekhem*) <a href="http://dev.opera.com/articles/view/w3c-device-orientation-api/laser-sword-demo.htm">demo miecza świetlnego</a>, które korzysta ze zdarzenia <code>devicemotion</code> i kilku warczących odgłosów umieszczonych przy pomocy znacznika <code>&lt;audio&gt;</code> z HTML5.</p>

<h2>Zastosowanie i nadchodzące możliwości</h2>

<p>Używając specyfikacji W3C o położeniu urządzenia, można tworzyć aplikacje sieciowe określające położenie i przyspieszenie urządzenia przy pomocy Javascriptu. To otwiera wiele niedostępnych im dotąd możliwości.</p>

<p>Położenie maszyny może zostać wykorzystane do rozpoznawania gestów. Przykładowo, sieciowy odtwarzacz muzyki może przejść do następnego utworu gdy potrząśniemy naszym sprzętem z odpowiednią siłą, albo tym samym gestem przejść wstecz. Gesty świetnie pasują także do gier i polepszają dostępność: możesz stworzyć kompletny system kontroli nad aplikacją dla ludzi, którym trudno przychodzi precyzyjne wskazywanie palcem na dotykowym telefonie.</p>

<h2>Sprawa kompatybilności</h2>

<p>Niestety, w tym momencie występuje <a href="http://lists.w3.org/Archives/Public/public-geolocation/2012Jun/0000.html">kilka różnic we wdrożeniu zdarzenia <code>device orientation</code></a> w poszczególnych przeglądarkach mobilnych. Wierzymy, że wdrożenie Opery Mobile jest najbliższe specyfikacji, a tylko odrobinę bliżej niż wdrożenie Firefoksa. Jedyną różnicą jest przeciwne mierzenie <code>alfy</code>; zegarowe, a nie odwrotne do zegarowego (można to łatwo naprawić kroplą Javascriptu). Cała reszta działa taka samo, jak w Operze.Przeglądarki oparte na Webkicie, np. Mobile Safari tudzież domyślna przeglądarka Androida liczą alfę, betę i gammę każda na swój sposób. Mamy nadzieję, że przyszłe wydania tych przeglądarek będą bliższe specyfikacji, pozwalając twórcom aplikacji na łatwiejsze odczytywanie położenia sprzętu w ich dziełach.</p>

<h2>Podsumowanie</h2>

<p>Zdarzenia <code>deviceorientation</code> i <code>devicemotion</code> pozwalają tworzyć czadowe programy mobilne, od gier, poprzez programy rozszerzonej rzeczywistości, po zwykłe, lecz wysoce dopracowane aplikacje. API jest bardzo proste, łatwe do zrozumienia przez twórców, na dzień dzisiejszy (problemy międzyprzeglądarkowe będą ustępować) Opera Mobile 12 i inne ważniejsze przeglądarki mobilne obsługują je. To obiecująca technologia, powinna zostać rozpatrzona przy tworzeniu twojego nowego projektu!</p>

<p class="note">Rich Tibbett z Opery napisał fantastyczny przykład użycia tej technologii — obejrzyj jego <a href="http://people.opera.com/richt/release/demos/orientation/marinecompass/">demo busoli</a>.</p>

