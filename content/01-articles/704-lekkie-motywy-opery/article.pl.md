Title: Lekkie motywy Opery
----
Date: 2012-05-16 17:18:05
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
	
<p>Opera 12 wprowadza wiele usprawnień w tym aktualizację systemu skórek. Na początek przemianowaliśmy nazwę z skórki na <strong>motywy</strong>. Jest to nowy, lekki system, który oparty jest na standardowym motywie Opery. W tym artykule przyjrzymy się jak te lekkie motywy działają.</p>

<h2>Jak to działa?</h2>

<p>Te nowe, lekkie motywy działają w ten sam sposób co istniejący już system skórek - są one spakowane w pliku ZIP i zawierają dwie rzeczy: obrazek, który chcesz wykorzystać w swoim motywie i plik persona.ini. Ten plik powoduje, że Opera rozpoznaje plik ZIP jako motyw i kiedy napotka taki (np. przez link do niego), automatycznie go zainstaluje: ładny, prosty proces. Motywy są oparte na standardowym motywie Opery dla każdego systemu operacyjnego.</p>

<p>Plik persona.ini zawiera pewną ilość sekcji, a każda z nich znajduje się w nawiasie kwadratowym np. [Options]. Każda z sekcji zawiera informacje odnośnie danej części motywy, takie jak niestandardowy obraz tła itp. Kluczem jest tu prostota - nadal można stosować stary, ciężki system, by w pełni dostosować wygląd Opery, ale wiele osób chce zrobić coś prostego, a przy tym nie troszczyć się niebezpieczeństwem zniszczenia wyglądu swojej przeglądarki. Lekki system jest dużo łatwiejszy w obsłudze. W <a href="http://www.opera.com/browser/next/">Operze 12</a>, motywy pozwalają dostosować jedynie obraz tła i kolory paneli. Więcej opcji może pojawić się w przyszłości.</p>

<p>W następnej części zostanie pokazane, krok po kroku, jak działają motywy.</p>

<h2>Idąc po przykład</h2>

<p>Aby wypróbować motyw, zainstaluj <a href="http://www.opera.com/browser/next/">Operę 12</a> i wejdź na <a href="https://addons.opera.com/themes/">stronę motywów Opery</a>. Spróbuj kliknąć na jeden z motywów, a zauważysz, że twoja przeglądarka zmieniła wygląd i teraz prezentuje się tak:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/704-lekkie-motywy-opery/theme1.jpg" alt="Lekki motyw Opery 12" /></p>
<p class="comment">Rysunek 1: Motyw w działaniu.</p>

<p class="note">Wszystkie zainstalowane motywy znajdziesz w <em> Opera &gt; Wygląd...</em>. Możesz tam zmienić motyw, lub go usunąć. Możesz nimi zarządzać w katalogu <em>skórek (ang. skin)</em> w twoim profilu Opery. Możesz go znaleźć w: <em>[home folder]/Library/Opera</em> w systemie Mac OS X i Linux, oraz w <em>C:\users\[user]\AppData\Roaming\Opera\Opera</em> w systemie Windows.</p>

<p>Jeśli zapiszesz <a href="natural_history_of_norway.zip">ten motyw</a> (Prawy przycisk myszy &gt; Zapisz element docelowy jako...) i rozpakujesz plik ZIP znajdziesz obrazek tła i plik persona.ini, który zawiera następujące sekcje:
<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>

<p>W tym polu, autor pozostawia komentarz dający podstawowe informacje na temat motywu Opery. Możesz swoje uwagi wstawić w dowolnym miejscu w pliku o ile jest w osobnej linii i poprzedzony znakiem krzyżyka (#)</p>

<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p>Sekcja <code>[Info]</code> zawiera podstawowe informacje na temat motywu. <code>Name</code> powinien zawierać nazwę motywu, który będzie wyświetlany w <em> Opera &gt; Wygląd...</em> i na stronie z motywami Opery. <code>Author</code> zawierać ma autora motywu, a <code>Version</code> powinno być ustawione na 1 (co oznacza: &quot;Pierwsza wersja lekkiego motywu&quot;). <code>Preview Image</code> ma zapewnić podgląd folderów, ale nie jest obecnie używany.</p>

<pre><code>[Options]
Tint Color                = #3e6da9</code></pre>

<p>Sekcja opcjonalna <code>Tint Color</code>, jeśli nie jest zaznaczone inaczej, to koloryzuje panele w Operze na podany odcień. Niektóre motywy po zainstalowaniu zmienią zabarwienie paneli.</p>

<p class="note"><code>Tint Color</code> zastąpiło <code>Colorize Color</code> (Kolor Kolorowania) ponieważ, nazwa <code>Tint Color</code> jest bardziej intuicyjna (oznacza ona: Odcień Koloru)</p>

<pre><code>[Window Image]
Type                          = BestFit
Background                = Kraken.jpg
Colorize                      = 0</code></pre>

<p>Sekcja <code>[Window Image]</code> kontroluje ustawienia całego okna przeglądarki. <code>Type</code> ustawiony jest na <code>BestFit</code> co oznacza, że Opera będzie dostosowywała obraz tła do okna przeglądarki. Innym możliwym ustawieniem jest: <code>BoxTile</code>. W <code>Background</code> powinna znaleźć się ścieżka do obrazka, który będzie używany jako tło. <code>Colorize = 0</code> jest ustawione na 0 jeśli nie chcesz, by obraz tła był kolorowany kolorem wybranym w <code>Tint Color</code>. Jeśli chcesz ustaw tą opcję na <code>1</code>.</p>

<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1
Window Skin                   = 1
Document Window Skin          = 1</code></pre>

<p>Wszystkie te opcje ustawione na <code>1</code> spowoduję, że obraz tła będzie prześwitywał przez Szybkie Wybieranie. Ustaw na <code>0</code> jeśli nie chcesz.</p>

<p>Nie można nic więcej zrobić w nowym systemie motywów, ale w przyszłości mogą zostać wprowadzone nowe możliwości. To brzmi jako ograniczenie, ale jest zastosowane celowo - motywy są do zastosowania niewielkich zmian. Jeśli chcesz wprowadzić większe zmiany, nadal będziesz mógł korzystać z pełnego systemu <code>Skórek</code>. Nowy system lekkich motywów jest prostszy w napisaniu i stosowaniu.</p>

<h2>Instalowanie i udostępnianie motywów</h2>

<p>Kiedy stworzyłeś swój motyw, będziesz chciał go udostępnić, by każdy mógł zobaczyć twoje dzieło. Najlepszym sposobem będzie wysłanie go do naszego działu z dodatkami. — żeby to zrobić skorzystaj z <a href="https://addons.opera.com/pl/developer/upload/">strony udostępniania Dodatków Opery.</a> By to zrobić, będziesz potrzebował konta użytkownika na <a href="http://my.opera.com/community/">my.opera.com</a>. Udostępnione motywy będą łatwe do wyszukania, a zespół Opery Software będzie dokładnie wyszukiwał błędy przed upublicznieniem motywu.</p>

<p>Jeśli zamierzasz udostępnić motyw na własnym serwerze, upewnij się, że ma odpowiedni typ <code>mime</code>, ponieważ może zostać nie zainstalowany. Aby to zrobić umieść następujący kod wewnątrz <code>.htaccess</code> w tym samym katalogu (oczywiście dla serwrów opartych na Apache — inne typy będą potrzebowały odpowiednich dla siebie poprawek):</p>

<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>Podsumowując</h2>

<p>Mamy nadzieję, że ten artykuł przybliżył wam nowe, lekkie motywy Opery. Podzielcie się swoimi opiniami!</p></p>
