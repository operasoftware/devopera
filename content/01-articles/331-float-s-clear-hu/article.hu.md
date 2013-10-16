Title: Float és clear
----
Date: 2010-03-30 11:06:27
----
Lang: hu
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/34-styling-forms/" rev="prev" title="link to the previous article in the series">Előző leírás—Űrlapok stílusozása</a></li>

<li class="next"><a href="http://dev.opera.com/articles/view/36-static-and-relative-positioning/" rel="next" title="link to the next article in the series">Következő leírás—Statikus és relatív pozícionálás</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>
<p>Ebben a leírásban megismerkedhetsz a float és a clear használatával - egy modern webdizájner két elengedhetetlen eszközével.
Ezek a széles körben felhasználható eszközök alkalmasak szövegek körbefolyatására képek körül vagy többhasábos elrendezések megvalósítására.
</p>

<p>A leírás felépítése a következő:</p>

<ul>
  <li><a href="#whatarefloatandclear">Mire jó a float és a clear?</a></li>

  <li><a href="#boringtheory">Egy kis unalmas elmélet</a></li>
  <li><a href="#howdoesfloatingwork">Hogyan működik a float?</a>
    <ul>
      <li><a href="#minutiae">A részletek</a></li>
      <li><a href="#morefloats">Még több float</a></li>
      <li><a href="#floatmargins">Margók float-olt elemeken</a></li>

    </ul>
  </li>
  <li><a href="#clearing">A clear tulajdonság alkalmazása</a></li>
  <li><a href="#containingfloats">Float-olt elemek körbezárása</a></li>
  <li><a href="#shrinkwrapping">Zsugorodás</a></li>
  <li><a href="#centeringfloats">Float-olt elemek középre helyezése</a></li>
  <li><a href="#bugs">Hibák!</a></li>

  <li><a href="#summary">Összefoglaló</a></li>
  <li><a href="#exercisequestions">Tesztkérdések</a></li>
</ul>

<h2 id="whatarefloatandclear">Mire jó a float és a clear?</h2>

<p>Ha megnézel egy tipikus magazint, láthatod, hogy a cikkhez tartozó illusztrációkat a szöveg körbeveszi.
A <code>float</code> tulajdonság létrehozása a <abbr>CSS</abbr>-ben lehetővé teszi ennek az elrendezésnek a megvalósítását weboldalakon is.
A <dfn>float</dfn> alkalmazása egy képen—vagy akár más elemen is—kitolja azt az egyik oldalra és lehetővé teszi, hogy a szöveg a másik oldalon a kép mellé kerüljön.
Egy körbefolyó szöveg <dfn>clear</dfn> tulajdonságának megadása azt jelenti, hogy új sorba tolod át, ha szükséges, hogy megakadályozd a körbefolyatott (float-olt) elem mellé kerülését.</p>

<p>Habár a float bármely elemen alkalmazható, a dizájnerek leginkább a többhasábos elrendezés megvalósításához használják a helytelenül alkalmazott táblázatos felépítés helyett.
</p>

<h2 id="boringtheory">Egy kis unalmas elmélet</h2>

<p>Hogy megértsd, hogyan is működik a float, tudnod kell, hogyan rendereli egy böngésző a <abbr>HTML</abbr>/<abbr>CSS</abbr> dokumentumot.
Ne aggódj, rövid leszek!</p>

<p>Minden látható <abbr>HTML</abbr> elem generál egy <dfn>dobozt</dfn> ami megjelenítésre kerül.
Ha a dokumentumot egy monitor képernyőjén vagy egy mobiltelefonon nézed, a dobozok megjelennek a kijelzőn.
Ha kinyomtatod a dokumentumot, a dobozok megjelennek a papíron. 
Ha egy képernyő-felolvasót használsz, a dobozok tartalmát hallás útján érzékeled: szövegként.</p>

<p>Ahogyan vannak blokk szintű és soron belüli (inline) elemek a <abbr>HTML</abbr>-ben, vannak blokk szintű és inline dobozok a <abbr>CSS</abbr>-ben is.
Alapértelmezetten a blokk szintű elemek blokk szintű dobozokat generálnak és az inline elemek inline szintű dobozokat.
Lesznek még generált dobozok a különböző elemekhez tartozókon kívül, például a dokumentum szöveges részének tárolásához.
A blokk szintű dobozok alapesetben a forráskódban való megjelenés sorrendjében rendeződnek el, az oldal tetejétől az aljáig.
A blokk szintű dobozok nem helyezhetők egymás mellé, kivéve, ha ezt extra <abbr>CSS</abbr> kóddal megadjuk.
Az inline dobozok vízszintes elrendezésben kerülnek egymás mellé.
A <code>direction</code> tulajdonság meghatározza, hogy az elemek sorrendje balról jobbra, vagy jobbról balra lesz elrendezve (alapértelmezett a balról jobbra, ha ez a tulajdonság nincs külön megadva).</p>

<p>Ezt úgy határozzák meg, mint a <dfn>dokumentum &quot;folyása&quot;</dfn>: az inline dobozok vízszintesen folynak a szülő blokk szintű dobozaikon belül, a blokk szintűek folyása függőleges.
A dobozok megjelenési sorrendje megegyezik a <abbr>HTML</abbr> kódban megadott elemek sorrendjével.</p>

<p>Nézd meg a következő egyszerű <abbr>HTML</abbr> dokumentumot (csak a <code>body</code> elemen belüli részt írtam ide):</p>
<pre><code>&lt;p&gt;Ez egy nagyon egyszerű dokumentum.&lt;/p&gt;
&lt;p&gt;Ez &lt;em&gt;két&lt;/em&gt; bekezdésből áll.&lt;/p&gt;</code></pre>

<p>Az 1. ábra egy képernyőképet mutat egy dokumentum elrendezéséről, ami megmutatja a két blokk szintű dobozt, amit a <code>p</code> elem generált, és az inline dobozt, amit az
 <code>em</code> elem hozott létre.</p>

<p><img src="/articles/view/35-floats-and-clearing/fc-ss-01.png" alt="A P elemek blokk szintű dobozokat generálnak, és az EM elemek inline dobozt hoznak létre" /></p>
<p class="comment">1. ábra: szemlélteti a blokk szintű dobozokat, amiket a <code>p</code> elem generált, és az <code>em</code> elem által létrehozott inline dobozt.</p>


<p>Az össze inline dobozt, amik egy sorba kerülnek a kliens eszköz kijelzőjén, képzeletbeli téglalapok veszik körbe, ezek a sorhoz tartozó dobozok <dfn>(line boxes)</dfn>.
Ezek mindig föntről lefelé helyezkednek el, köztük nincs távolság, ahogyan a 2. ábrán láthatod.</p>

<p><img src="/articles/view/35-floats-and-clearing/fc-ss-02.png" alt="Minden megjelenített sor egy külön dobozba kerül" /></p>
<p class="comment">2. ábra: Minden megjelenített sor egy külön dobozba kerül.</p>

<h2 id="howdoesfloatingwork">Hogyan működik a float?</h2>

<p><abbr>OK</abbr>! Most hogy már túl vagyunk az összes unalmas elméleten, nézzük meg a float és a clear szintaxisát és vizsgáljunk meg néhány példát.</p>

<p>A <code>float</code> tulajdonságnak négy értéket lehet megadni: <code>left</code>, <code>right</code>, <code>none</code> és <code>inherit</code>.
Az első kettő a messze leginkább elterjed és meghatározzák, hogy a doboz balról vagy jobbról legyen-e körbefolyatva.
A <code>float:none</code> megadása, ami az alapértelmezett, mint sok más esetben is, törli a float tulajdonságot. 
A <code>float:inherit</code> alkalmazása nagyon ritka—még sosem találkoztam vele hétköznapi munka során—talán csak a következetesség miatt létezik.
Ennek hatására a gyerek elem örökli a <code>float</code> értéket a szülő elemtől.</p>

<p>Egy float-olt doboz kikerül a dokumentum egybefüggő környezetéből (folyásából) és kitolódik balra vagy jobbra, amilyen messzire lehetséges a megadott iránytól függően.
Az “amilyen messzire lehetséges” általában azt jelenti, hogy addig, amíg a külső széle nem érinti a körülötte lévő doboz szélét (a padding-jának a belső szélét, ha van neki olyan).
Tehát, a <code>float:left</code> hatására a doboz elmozdul balra, amíg a bal margója nem érinti a szülő bal szélét.</p>

<p>A figyelmes olvasó talán észrevette, hogy azt mondtam “általában”.
Ha már van egy dobozunk, amit kitoltunk bal oldalra, akkor a következő, amit kitolunk ugyanarra az oldalra, megáll, ha eléri az első dobozt.
Más szavakkal, a float-olt elemek nem másznak egymás tetejére.</p>

<p>Itt az ideje, hogy megnézzük a float alkalmazását élesben is. Készítsd a szerkesztő programodat!</p>
<ol>
<li>
<p>Hozz létre egy új fájlt, másold be a következő kódot, és mentsd el a dokumentumot <kbd>float.html</kbd> néven.</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
      &lt;title&gt;Floating&lt;/title&gt;

    &lt;/head&gt;
    &lt;body&gt;
      &lt;p id=&quot;p1&quot;&gt;&lt;span id=&quot;span-a&quot;&gt;Lorem ipsum&lt;/span&gt;
      &lt;span id=&quot;span-b&quot;&gt;dolor sit amet&lt;/span&gt;

      &lt;span id=&quot;span-c&quot;&gt;consectetuer&lt;/span&gt; adipiscing elit.
      Curabitur feugiat feugiat purus.
      Aenean eu metus. Nulla facilisi.
      Pellentesque quis justo vel massa suscipit sagittis.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
      Quisque mollis, justo vel rhoncus aliquam, urna tortor varius lacus, ut tincidunt metus arcu vel lorem.
      Praesent metus orci, adipiscing eget, fermentum ut, pellentesque non, dui.
      Sed sagittis, metus a semper dictum, sem libero sagittis nunc, vitae adipiscing leo neque vitae tellus.
      Duis quis orci quis nisl nonummy dapibus.
      Etiam ante. Phasellus imperdiet arcu at odio.
      In hac habitasse platea dictumst. Aenean metus.
      Quisque a nibh. Morbi mattis ullamcorper ipsum.
      Nullam odio urna, feugiat sed, bibendum sed, vulputate in, magna.
      Nulla tortor justo, convallis iaculis, porta condimentum, interdum nec, arcu.
      Proin lectus purus, vehicula et, cursus ut, nonummy et, diam.&lt;/p&gt;

      &lt;p id=&quot;p2&quot;&gt;Nunc ac elit. Vestibulum placerat dictum nibh. Proin massa.
      Curabitur at lectus egestas quam interdum mollis.
      Cras id velit a lacus sollicitudin faucibus.
      Proin at ante id nisi porttitor scelerisque.
      In metus. Aenean nonummy semper enim.
      Aenean tristique neque quis arcu tincidunt auctor.
      Fusce consequat auctor ligula.
      Fusce nulla lorem, sagittis a, lacinia et, nonummy in, eros.
      In nisi augue, aliquam eget, convallis vel, malesuada quis, libero.&lt;/p&gt;

      &lt;p id=&quot;p3&quot;&gt;Hello, World!&lt;/p&gt;

    &lt;/body&gt;
  &lt;/html&gt;</code></pre>

<p>Ez elég sok tartalom, de szükségünk van rá, hogy lássuk, hogyan működik.</p>
</li>
<li>
<p>Nyisd meg a dokumentumot a böngésződben, hogy lásd, hogy is néz ki.
Unalmas, nem?</p>
</li>
<li>
<p>Csinálj egy másik dokumentumot a szerkesztőben, add hozzá az alábbi kódot és mentsd el <kbd>style.css</kbd> néven ugyanabba a könyvtárba, ahová a <abbr>HTML</abbr> fájlt is az 1. lépésben.</p>

<pre><code>#span-a {
  float: left;
  background-color: #cfc;
  color: #030;
}</code></pre>

</li>
<li>
<p>Kapcsold a stíluslapot a <abbr>HTML</abbr> dokumentumhoz az alábbi sor <code>&lt;/head&gt;</code> tag elé illesztésével:</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</code></pre>

</li>
<li>
<p>Mentsd el, majd frissítsd a lapot a böngésződben.
Látni fogod a <code>span</code> elemet a “Lorem ipsum” szavakkal oldalra kitolva.
Adtam hozzá egy világoszöld hátteret is, hogy egy kicsit jobban kiemeljem.</p>
</li>
<li>
<p>Még mindig nem egyszerű észrevenni mi is történik itt, ezért növeljük meg egy kicsit a float-ot.
Add hozzá a következőt a stíluslapodhoz:</p>

<pre><code>#span-a {
  float: left;
  background-color: #cfc;
  color: #030;
  <strong>padding: 1em;</strong>
}</code></pre>

</li>
<li>
<p>Ments és frissíts, és látni fogod, hogy a zöld terület most nagyobb, mivel hozzáadtunk egy kis padding-ot a doboz mind a négy oldalán.
A float három sor magasságú és tisztán láthatjuk, ahogyan a többi szöveg körbefolyja a float-olt elemet.</p>
</li>
</ol>
<h3 id="minutiae">A részletek</h3>

<p>Most nagyobb részletességgel fogom elemezni, mi is történik.
A float-olt doboz, amit az első <code>span</code> elem generált, kitolódott oldalra egészen a dokumentum széléig 
és a mellette lévő &quot;sorhoz tartozó doboz&quot; (line box) megrövidült. 
Habár ez még nem látszik egyértelműen, a bekezdés blokk szintű doboza, ami a float-olt elemet tartalmazza, nem módosult. 
Emeljük ki a bekezdést, hogy tisztábban láthassuk ezt. </p>
<ol>
<li>
<p>Addj hozzá egy újabb <abbr>CSS</abbr> tulajdonságot:</p>

<pre><code>p {
  border: 1px solid #f00;
}</code></pre>
</li>
<li>
<p>Újra mentsd el a <abbr>CSS</abbr> fájlt és frissítsd a böngészőt.
Most látnod kell egy piros szegélyt minden bekezdés körül—figyeld meg, hogy a float-olt elem az egyik bekezdésen belül helyezkedik el.</p>
</li>
<li>
<p>Módosítsuk az utolsó kódot, hogy bebizonyítsuk, hogy a float megáll a szülő elem padding-jának belső szélén.
</p>

<pre><code>p {
  border: 1px solid #f00;
  <strong>padding: 1em;</strong>

  <strong>background-color: #ff9;</strong>
}</code></pre>
</li>
<li>
<p>Ments és frissíts és látni fogod a bizonyítékát annak, mit az előbb állítottam: a float-olt doboz kicsúszott az őt körülvevő doboz széléig, amíg a szülő padding-ja ezen kívül esik. Észre veheted még azt is, hogy a bekezdés sárga háttere kiterjed a float-olt dobozra is. 
Egy gyerek doboz float-olása nem befolyásolja a bekezdés dobozát, csak a line box-okat azon belül.</p>
</li>
<li>
<p>Kísérletezzünk még—mi történik, ha a float nagyobb, mint a szülője? Módosítsuk a float-olt elemet a következőképpen:</p>

<pre><code>#span-a {
  float: left;
  background-color: #cfc;
  color: #030;
  <strong>padding: 1em 1em 10em;</strong>

}</code></pre>
</li>
</ol>
<p class="note">Megjegyzés: Ha keskeny a böngésződ ablaka, akkor <code>10em</code>-nél nagyobb értéket kell megadnod az alsó padding-hoz, hogy a zöld terület túllógjon a bekezdés alsó szegélyén.</p>

<p>Most valami érdekeset fogsz látni: a float-olt doboz kilóg a szülő dobozon kívül; a szülő doboz nem lesz nagyobb, hogy közrefogja a float-olt gyerek dobozt.
Azt is észreveheted (ha elég nagy bottom padding-ot használtál), hogy a szomszédos line box-ok, amik már a <em>második</em> bekezdéshez tartoznak, szintén megrövidültek.</p>

<h3 id="morefloats">Még több float</h3>

<p>Csináljunk egy újabb float-ot, hogy lássuk, mi történik, ha két elemet tolunk ki ugyanabba az irányba.
</p>
<ol>
<li>
<p>Adj egy új kódot a stíluslapodhoz és ments, majd frissíts, mint az előbb:</p>

<pre><code>#span-b {
  float: left;
  background-color: #ccf;
  color: #003;
  padding: 1em;
}</code></pre>

<p>Most a <code>span</code> elem, mely a “dolor sit amet” szöveget tartalmazza, szintén a bal oldalra került. 
Látni fogod, hogy addig tolódott ki balra, amíg hozzá nem ért az előző float-olt elemhez; más szavakkal,
“amennyire csak lehetséges”.</p>
</li>

<li>
<p>Miért álljunk meg két float után? Csináljunk egy harmadikat—add hozzá a következő kódot a stíluslapodhoz:</p>

<pre><code>#span-c {
  float: left;
  background-color: #fcc;
  color: #300;
  padding:2em 1em;
}</code></pre>
</li>
<li>
<p>Adj még hozzá egy ideiglenes kódot, hogy láss egy példát arra, mi történik, ha nincs elég hely a float-nak a sorban.
Add hozzá a következő kódot a stíluslap végéhez:</p>

<pre><code>span {
  width: 34%;
}</code></pre>
</li>
<li>
<p>Ahogyan az előbb is, mentsd el a stíluslapot és frissítsd a dokumentumot a böngésződben—valami hasonlót fogsz látni, mint a 3. ábrán is.</p>

</li>
</ol>
<p><img src="/articles/view/35-floats-and-clearing/fc-ss-03.png" alt="a harmadik float-olt elem a második alatt jelenik meg, ami nem igazán az, amit vártál" /></p>
<p class="comment">3. ábra: Nem teljesen az, mint amit vártál?</p>

<p>Hé! Mi történt itt?
A harmadik float a második <em>alá</em> került!
(Az Internet Explorer 6 néhány más furcsa dolgot csinál, amiket mi most egyenlőre nem tárgyalunk.)
Mivel minden <code>span</code> elem hosszúsága a bekezdés hosszának 34%-a (ahogyan a 3. lépésben hozzáadott kód meghatározza), plusz egy kis padding, nincs elég hely mindháromnak egymás mellett (3 x 34% = 102%).
Az első két float elfér ugyanabban a sorban, de a harmadik már nem és lecsúszik alulra.
Fontos, hogy csak annyira csúszik le, amennyire szükséges, hogy elférjen a soron belül.
Nem csúszik az első, magas float-olt elem alá, mert van hely annak a jobb oldalán.</p>
<p>Egy másik érdekesség, amit észre kell venni, hogy megadtál egy szélességet a <code>span</code> elemhez.
Felesleges lenne megadni, mivel a <code>span</code> egy inline típusú elem.
A floating tulajdonság megadásával azonban a doboz automatikusan blokk szintű elem lesz, ami azt jelenti, hogy hozzárendelhetünk méreteket és függőleges margót is.</p>

<h3 id="floatmargins">Margók float-olt elemeken</h3>

<p>Most felfedezzük mit csinálhatsz a margókkal float-olt elemeken.</p>

<ol>
<li>
<p>Először is, távolítsd el a <code>span</code> elemhez előbb megadott ideiglenes kódot, majd ments és frissíts, így a három float-olt elemünk megint egymás mellett helyezkedik el.
Más szavakkal, töröld ezt a kódot:</p>

<pre><code>span {
  width: 34%;
}</code></pre>

<p>Most a float-olt dobozok szorosan összekapcsolódnak és a szomszédos szöveg rögtön az utolsó után kezdődik
(hacsak nem használsz Microsoft Internet Explorer 6-ot vagy régebbi verziót, mert ebben az esetben lesz egy 3 pixelnyi rés a jobb oldalon a <a href="http://positioniseverything.net/explorer/threepxtest.html">három pixelt beszúró hiba miatt</a>).
Hogyan tudsz egy kis helyet kihagyni a float-olt doboz körül? A válasz <strong>margóval</strong>!</p>
</li>
<li>
<p>Próbáljuk ki ezt a középső dobozon—változtasd meg a CSS kódját az alábbiak szerint, majd ments és frissíts:</p>

<pre><code>#span-b {
  float: left;
  background-color: #ccf;
  color: #003;
  padding: 1em;
  <strong>margin-left: 1em;</strong>
  <strong>margin-right: 1em;</strong>

}</code></pre>

<p>Ez az, most van egy kis hely a középső doboz mindkét oldalán.</p>
</li>
<li>
<p>Beállíthatsz egy float-olt dobozon függőleges margókat is—hajtsd végre a következő változtatásokat a harmadik dobozhoz tartozó kódban, majd ments és frissíts.</p>

<pre><code>#span-c {
  float: left;
  background-color: #fcc;
  color: #300;
  padding:2em 1em;
  <strong>margin-top: 2em;</strong>
  <strong>margin-bottom: 2em;</strong>
}</code></pre>

<p>Ennek hatására a harmadik doboz lejjebb mozdul és alá is kerül egy kis extra hely.
</p>
</li>
<li>
<p>Mivel vállalkozó kedvünkben vagyunk, nézzük meg mi történik, ha elkezdünk játszani <em>negatív</em> margókkal!
Végezd el a következő változtatást a harmadik doboz kódján, majd ments és frissíts:</p>

<pre><code>#span-c {
  float: left;
  background-color: #fcc;
  color: #300;
  padding:2em 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  <strong>margin-left: -4em;</strong>
}</code></pre>
</li>

</ol>

<p>Most a 4. ábrához hasonlót fogsz látni.</p>

<p><img src="/articles/view/35-floats-and-clearing/fc-ss-04.png" alt="float-olt elemek egymás tetején a negatív margók miatt" /></p>
<p class="comment">4. ábra: Most látni fogod, hogy a dobozok egymás tetejére kerültek!</p>

<p>Mit gondolsz, hogy lehet ez?
Ki mondta, hogy a float-olt elemek nem kerülhetnek egy másik tetejére?
Figyeld meg, hogyan mozgatja a negatív bal oldali margin az egész dobozt bal oldalra.</p>

<p>A negatív margók használata float-olt elemeken nagyon hasznos lehet bizonyos fajta többhasábos elrendezések esetében.</p>

<h2 id="clearing">A clear tulajdonság alkalmazása</h2>

<p>Most, hogy már megismertettelek a float-olás alapjaival, egy másik szorosan hozzá tartozó témával folytatom: a clear tulajdonsággal.</p>

<p>Ahogyan a leírásban eddig bemutatott példák alapján láttad, a szöveg körülfolyja a float-olt elemet és a blokk szintű dobozokra nem hat a float.
Néha kívánatos, hogy biztosak legyünk abban, egy elem nem fog egy float-olt elem mellé csúszni. 
Például, egy címsornak, ami egy cikk új fejezetét vezeti be, nem szabad megjelennie egy az előző részhez tartozó kép mellett. Jobban szeretnéd, ha a címsor a kép alá kerülne, akkor is, ha a kép túllóg az előző bekezdésen.
Az egyetlen megoldás erre a címsor <code>clear</code> tulajdonságának megadása.</p>

<p>Egy másik példa a mindenhol előforduló háromhasábos elrendezés egy teljes szélességű lábléccel.
Ha a hasábok float-oltak, akkor a <code>clear</code> tulajdonságot adod meg a lábléchez, hogy biztosítsd azt, hogy az összes többi hasáb alatt jelenjen meg—függetlenül attól, melyik hasáb a leghosszabb.</p>

<p>A <code>clear</code> tulajdonságnak három hasznos értéke van: <code>left</code>, <code>right</code> és <code>both</code>.
A <code>none</code> (alapértelmezett) és <code>inherit</code> értékek szintén érvényesek.</p>

<p>A <code>clear:left</code> használata egy elemen azt jelenti, hogy az általa generált doboz biztosan az összes előző, a bal oldalán lévő float-olt elem alatt jelenik meg. 
Ha a  <code>clear:both</code> kódot használod, akkor a összes, bármelyik oldalán lévő körbefolyatott elem alatt jelenik meg.</p>

<p>A clear hatása elérhető úgy is, ha az elemet lecsúsztatjuk (üres helyet adva a felső margóhoz) ha szükséges, amíg a felső széle az összes meghatározott irány(ok)ba eltolt, float-olt doboz alsó széle alá nem kerül. 
Nézzünk meg egy példát a részletesebb illusztráláshoz.</p>
<ol>
<li>
<p>Mielőtt ezt kipróbálod, tisztítsd meg a stíluslapodat.
Távolítsd el a  <code>#span-b</code>-hez és <code>#span-c</code>-hez adott kódot, hogy csak a zöld, balra float-olt elem maradjon meg. Győződj meg róla, hogy ennek az alsó padding-ja elég nagy, hogy átlógjon a második bekezdésbe is.</p>

</li>
<li>
<p>Add hozzá a következő kódot a második bekezdéshez, majd ments és frissíts:</p>

<pre><code>#p2 {
  clear: left;
}</code></pre>

<p>Ezt nézd! A második bekezdés lecsúszott, mivel a clear tulajdonság megszabadította a float hatásától, ahogyan az 5. ábrán is látható.</p>

<p><img src="/articles/view/35-floats-and-clearing/fc-ss-05.png" alt="a második bekezdés első alá csúsztatása a clear segítségével" /></p>
<p class="comment">5. ábra: A második bekezdés most már szabadon az első bekezdés alatt helyezkedik el.</p>

<p>Hogy bonyolítsuk a helyzetet, használhatjuk a <code>float</code> és <code>clear</code> tulajdonságokat ugyanazon az elemen.</p>

</li>
<li>
<p>Adj egy kódot a második float-olt elemhez és töröld az előtte lévő elem float hatását, ments és frissíts:</p>

<pre><code>#span-b {
  float: left;
  clear: left;
  padding: 1em;
  background-color: #ccf;
  color: #003;
}</code></pre>
</li>
</ol>
<p>A kék doboz most a zöld <em>alatt</em> jelenik meg, teljesen kívül a szülő bekezdésen.
Mivel ezt is kitoltuk bal oldalra, a második bekezdés még tovább csúszott lefelé, hogy elszakadjon tőle.</p>

<h2 id="containingfloats">Float-olt elemek körbezárása</h2>

<p>Ahogy a fenti példában is láttad, a szülő doboz alapesetben nem lesz nagyobb, hogy beleférjen a float-olt gyerek elem. Ez sokszor okozhat zavart, például, ha az elem <em>összes</em> gyereke float-olt mikor egy vízszintes menüt készítesz egy rendezetlen listából float-olva az összes <code>li</code> elemet.
Mivel az összes float-olt doboz kikerül a dokumentum &quot;folyásából&quot; és nem hatnak a szülő dobozra sem, az összes gyerek elem float-olása gyakorlatilag üressé teszi a szülőt és az nulla magasságúra zsugorodik. 
Néha ez nem kívánatos, például, ha hátteret akarsz adni a szülőnek. 
Ha a szülőnek nulla a magassága, nem lesz látható a háttér (Internet Explorer 6 esetében ez nem figyelhető meg, ott a szülő méretei követik a gyermekekét—a fordító megjegyzése).</p>

<p>Kézen fekvő, hogy szükségünk van egy megoldásra, hogy a szülőt kiterjesszük a float-olt gyerekei köré. 
A hagyományos módszer az volt, hogy beírtunk egy extra elemet a forráskódba közvetlenül a szülő záró tag-je elé és
beállítottunk neki egy <code>clear:both</code> tulajdonságot.
Ez működik, de zavaró, mert egy plusz felesleges, nem szemantikus kódot igényel.  
Szerencsére van más lehetőség is, amit a következőkben tárgyalunk.</p>

<p>Az első megoldás, hogy egyszerűen a szülőt is float-olod. A float-olt dobozok mindig akkorák lesznek, hogy közrefoghassák a float-olt gyerekeiket.

</p>
<ol>
<li>
<p>Próbáld ki a példa dokumentumon, ismét távolítsd el a  <code>#span-b</code>-hez tartozó kódot, majd float-old az első bekezdést mielőtt mentenél és frissítenél:</p>

<pre><code>#p1 {
  float: left;
}</code></pre>

<p>A bekezdés most kiterjed addig, amíg körbe nem fogja a zöld float-olt dobozt.
Ez mind szép és jó, de néha a szülő float-olása nem jelent megoldást.
Egy másik módszer, hogy elkerüljük a szülő float-olását, ha annak <code>overflow</code> tulajdonságához a  <code>visible</code>-től eltérő értéket adunk.
Ha ezt <code>hidden</code>-re állítod és nem határozol meg magasságot, a szülő körbefogja a float-olt gyereket.</p>

</li>
<li>
<p>Cseréld ki az utolsó kódot erre, majd ments és frissíts:
</p>

<pre><code>#p1 {
  overflow: hidden;
}</code></pre>

<p>Fontos, hogy ez utóbbi megoldás nem működik Internet Explorer 6 és régebbi verziók esetében.</p>
</li>
</ol>
<h2 id="shrinkwrapping">Zsugorodás</h2>

<p>Ahogy már korábban említettem, egy inline doboz float-olása azt blokk szintű elemmé teszi, ezért lehetővé teszi számunkra, hogy méreteket és függőleges margókat definiáljunk neki.
Egy <em>blokk</em> szintű doboz float-olásának azonban meglepő következménye lehet: 
ha nincs megadva a szélessége a doboz “rázsugorodik” a tartalmára, hogy pontosan illeszkedjen annak méreteihez.
Ez nem volt észrevehető a példa dokumentumban mikor float-oltad az első bekezdést, mert elég tartalma volt ahhoz, hogy kitöltse az egész ablakot (hacsak nincs egy <em>nagyon</em> keskeny monitorod).</p>

<p>Float-oljuk az utolsó bekezdést, hogy lássuk a hatást.
A változatosság kedvéért vadítsuk meg a dolgot azzal, hogy ezt most jobb oldalra toljuk!</p>

<p>Add hozzá a következő kódot a stíluslapodhoz, majd mentsd el és frissíts:</p>

<pre><code>#p3 {
  float: right;
}</code></pre>

<p>A bekezdés, amiben a “Hello, World!” üdvözlet van most a jobb oldalra fog kicsúszni és csak olyan széles, amekkora a szöveg, plusz egy kis padding, amit egy korábbi kódban meghatároztál az összes bekezdéshez.</p>

<h2 id="centeringfloats">Float-olt elemek középre helyezése</h2>

<p>Néha előfordul, hogy egy elemet float-olni akarsz—mondjuk azért, hogy a float-olt gyerekeit körbezárja—emellett vízszintesen középre akarod helyezni a szülő elemén belül.
Van itt egy kis probléma: float-olásnál nem használhatod a szokásos trükköt a bal és jobb oldali margók <code>auto</code> értékre állításával és nem létezik olyan érték, hogy <code>float:center</code>.
Van más megoldás, hogy megoldjuk ezt a problémát?</p>

<p>Ami azt illeti, van. Paul O&#39;Brien <abbr>CSS</abbr> guru elmagyarázza egyik cikkében <a href="http://www.search-this.com/2007/09/19/when-is-a-float-not-a-float/">Mikor nem float a float? (When is a float not a float?)</a>.
Ez tartalmaz egy extra határoló elemet, ami még elfogadható. A megoldás relatív pozicionálást használ, amit majd a következő cikkben tárgyalunk <a href="http://dev.opera.com/articles/view/36-css-static-and-relative-positioning/"> Statikus és relatív pozicionálás CSS-sel</a>.
A határoló (szülő) elem jobbra tolásával, majd az elem balra float-olásával, valójában középre helyezed a tartalom méretére zsugorodó, ismeretlen szélességű elemet!
(Használhatod ezt a tudást arra is, hogy bevágódj a partnerednél a következő randin. Mindig működik!)</p>

<p>Próbáljuk is ki. A következő példában egy vízszintes menüsort adsz az oldaladhoz, ami egy float-olt elemekből álló rendezetlen listán alapul.</p>
<ol>
<li>
<p>Illeszd be a következő kódot rögtön a <code>&lt;body&gt;</code> tag után a <abbr>HTML</abbr> dokumentumodba:</p>

<pre><code>&lt;div class=&quot;wrap&quot;&gt;
  &lt;ul id=&quot;menu&quot;&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;News&lt;/a&gt;&lt;/li&gt;

    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Products&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Services&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

&lt;/div&gt;

&lt;!--Az Internet Explorernek erre is szüksége van--&gt;
&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</code></pre>
</li>
<li>
<p>Add hozzá a következő <abbr>CSS</abbr> kódot a stíluslapodhoz, hogy megadd a menü kinézetét:</p>

<pre><code>#menu {
  margin: 0;
  padding: 0.5em;
  font-family: Verdana,sans-serif;
}

#menu li {
  float: left;
  list-style-type: none;
  margin: 0 0 0 0.5em;
  padding: 0.25em;
  background-color: #600;
  color: #ff9;
  border: 2px solid #f00;
}

#menu a {
  color: #ff9;
  text-decoration: none;
}

.wrap {
  float: left;
  margin-bottom: 2em;
}

.clear {
  clear: left;
  height: 1px;
  margin-top: -1px;
}</code></pre>

</li>
<li>
<p>Mentsd el mindkét fájlt majd frissítsd a böngészőt. Látni fogod a menüdet a bal felső sarokban. 
Helyezzük most ezt vízszintesen középre.</p>
</li>
<li>
<p>Toljuk ki a határoló elemet a lap feléig a <code>.wrap</code> osztályon végrehajtott következő kódmódosítással:</p>

<pre><code>.wrap {
  float: left;
  margin-bottom: 2em;
  <strong>position: relative;</strong>
  <strong>left: 50%;</strong>

}</code></pre>

<p>A menüd a lap vízszintes közepén kezdődik, de ez nem az, amit mi akartunk—túlságosan jobbra helyezkedik el, ezért egy kicsit visszább kell húzni balra.
Mivel a határoló elemet is float-oltad, ez összezsugorodik a benne lévő lista méretére.
A listát olyan távolságba akarod elmozdítani, amely egyenlő a szélessége felével, ami azt is jelenti, hogy egyenlő a határoló elem szélességének a felével, tehát a listát eltolod -50%-kal.</p>
</li>
<li>
<p>Módosítsd a <code>#menu</code> kódját a következők szerint:</p>

<pre><code>#menu {
  margin: 0;
  padding: 0.5em;
  font-family: Verdana,sans-serif;
  <strong>position: relative;</strong>
  <strong>left: -50%;</strong>

}</code></pre>

<p>A menü most már középen van; az egyetlen probléma az, hogy megjelenhet egy vízszintes görgetősáv a lista és a böngésző ablakának szélességétől függően.
Ennek az lehet az oka, hogy eltoltad a határoló elemet a képernyő feléig; ha a lista szélesebb az ablak felénél, egy része kilóghat a képernyőről.</p>
</li>
<li>
<p>Megszabadulhatsz tőle, ha egy megfelelő szülő elemnek beállítod a <code>overflow:hidden</code> értéket, hogy a kilógó részt elrejtse. A mi esetünkben a határoló elem szülője a <code>body</code>.
Néha nem megvalósítható, hogy ezt végrehajtsuk a  <code>body</code> elemen, amikor is szükséged lesz egy másik elemre a határoló elem köré; ebben az esetben azonban megfelelő.</p>

<p>Add hozzá a következő kódot a stíluslapodhoz:</p>

<pre><code>body {
  overflow: hidden;
}</code></pre>
</li>
<li>
<p>Valójában van még egy probléma ezzel.
Ha megnézed Internet Explorerben, látni fogod, hogy még mindig nem működik rendesen. 
A megoldás az, ha magát a listát float-olod, de csak Internet Explorerben, mivel más böngésző ezt hibásan kezeli (a böngészők (Firefox, Opera, Safari) újabb verziói már gond nélkül megjelenítik—a ford.).
Ennek áthidalására használj egy kis hack-et, ami biztosítja, hogy csak az Internet Explorer alkalmazza a kódot.</p>

<p>Add hozzá a következő kódot a stíluslapodhoz:</p>

<pre><code>* html #menu {
  float: left;
}</code></pre>
</li>
</ol>

<h2 id="bugs">Hibák!</h2>

<p>A float és a clear nagyon hasznos, de sajnos a legtöbb—ha nem mindegyik—böngészőnek vannak hibái megjelenítésükkel kapcsolatban. Az Internet Explorer 6 a float hatására furcsa viselkedésmódok elképesztő sorával büszkélkedik, beleértve eltűnő tartalmakat, megduplázódott margókat és a hírhedt 3 pixeles hibát.
De még a Firefox és az Opera sem teljesen hibamentes ha a float és a clear kerül a képbe.

A <a href="http://positioniseverything.net/">Position Is Everything</a> (A Pozícionálás Minden) egy felbecsülhetetlen értékű forrás, ami ezeket a hibákat dokumentálja—a legtöbb esetben megoldásokkal együtt.</p>

<h2 id="summary">Összefoglaló</h2>
<p>Egy doboz float-olásával azt kitolod balra vagy jobbra amilyen messze csak lehet a saját szülő elemén belül.
A doboz kikerül a dokumentum eredeti &quot;folyásából&quot; és nem gyakorol hatást a szülő elem dobozára, vagy más azt követő blokk szintű dobozra, habár a szomszédos sorok dobozai megrövidülnek.
Ha nincs elég hely egy float-olt doboznak egy sorban az előző elem float-olása miatt, akkor lejjebb csúszik, amíg el nem fér (vagy addig, ahol már nincsenek más float-olt dobozok).</p>

<p>Ha egy inline dobozon alkalmazzuk a float-ot, az blokk szintű dobozzá változik.
Ha egy blokk szintű dobozt float-olunk és nincs meghatározva a pontos szélessége, összezsugorodik a benne lévő tartalom méretéhez.</p>

<p>A float hatásának megszüntetése (clear-rel) előidézi a tartalom lejjebb csúszását, szükség szerint, amíg a tartalom felső széle a float-olt dobozok alsó széle alá nem kerül a megadott irány(ok)ban.</p>

<p>Lehetőség van egy összezsugorodott float-olt doboz középre helyezésére egy határoló elem és a relatív pozícionálás leleményes alkalmazásával.</p>

<h2 id="exercisequestions">Tesztkérdések</h2>

<ul>
<li><p>Mi történik, ha float-ot alkalmazol egy elemen egy bekezdés közepén;<abbr> pl.</abbr>,
ha a float előtt szöveg van?
Győződj meg róla, hogy több böngészőben is kipróbáltad, mert eltérően viselkednek.
Az Opera és a Safari helyesen oldja meg, míg a Firefox és az Internet Explorer nem. (Már a Firefox is jól jeleníti meg—a ford.)</p></li>

<li><p>Hogyan használható a float egy galéria egyenlő méretű “cellákba” helyezett előnézeti képeinek megjelenítéséhez anélkül, hogy táblázatot használnál az elrendezéshez?</p></li>

<li><p>Hogyan hozhatsz létre egy függőleges navigációs menüt a lap bal oldalán és egy hasábnyi szöveges tartalmat a jobb oldalon, anélkül, hogy a szöveg a menü alá csúszna?</p></li>

p<li><p>Egy weboldal tartalmának nagyon gyakori elrendezése egy teljes szélességű fejlécből, az alatt három hasábból és végül egy teljes szélességű láblécből áll. Hogyan érheted el ezt a felosztást float és clear alkalmazásával?</p></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/34-styling-forms/" rev="prev" title="link to the previous article in the series">Előző leírás—Űrlapok stílusozása</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/36-static-and-relative-positioning/" rel="next" title="link to the next article in the series">Következő leírás—Statikus és relatív pozícionálás</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<p><img src="/articles/view/35-floats-and-clearing/tommyOlsson.jpg" alt="Tommy Olsson a cikk szerzőjének fotója" class="right" /></p>

<p>Tommy Olsson a webes szabványok és a hozzáférhetőség egyik tevékeny hírdetője, aki Svédország középső részének egy isten háta mögötti vidékén él. Első HTML dokumentumát 1993-ban írta és jelenleg a svéd állami szervek webmester szakembere.</p>

<p>Eddig egy könyvet írt—The Ultimate CSS Reference (Paul O’Brien társszerzővel).</p>
