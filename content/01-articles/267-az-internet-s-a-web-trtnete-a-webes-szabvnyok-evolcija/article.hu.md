Title: Az internet és a web története, a webes szabványok evolúciója
----
Date: 2009-07-06 20:03:12
----
Lang: hu
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<ul class="seriesNav">
<li class="prev"><a rel="start" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/" title="hivatkozás a sorozat előző leírására">Előző leírás — Bevezető a webes szabványokba/Tartalomjegyzék</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/">Következő leírás — Hogyan működik az internet?</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<blockquote><p>— Hol kezdjem, felség? — kérdezte.</p>
<p>— Kezdd a kezdetén — mondta a Király —, és leghelyesebb, ha a végén végzed.</p>
<p><em>Lewis Carroll — Alice Csodaországban; fordította: Kosztolányi Dezső</em></p>
</blockquote>

<p>Mindent el kell kezdeni valahol, így aztán a mi utazásunk egy történelemórával kezdődik. Az alábbiakban egy rövid áttekintést fogok adni az internet, a World Wide Web és a webes szabványok létrejöttéről, amelyek miatt ez a kurzus valójában készült. Úgy érzem, hasznos tudni azt, hogy honnan és hogyan érkeztünk ide, és elég rövid lesz ahhoz, hogy ne aludj el közben, úgyhogy a részleteket csak szépen és gyorsan említjük meg. Ha bizonyos kifejezések idegenül hangzanak, ne aggódj; ha fontosak a webfejlesztéshez, akkor később úgyis részletesen értelmezve lesznek egy másik téma keretében, vagy egyszerűen rákereshetsz a Google-lel! Ha már ismerős számodra az internet és a World Wide Web története, egyszerűen hagyd ki a webes szabványoknak ezt a részét, és olvasd tovább a következő cikket. Ebben a leírásban a következő témákról lesz szó:</p>

<ul>
  <li><a href="#eredet">Az internet eredete</a></li>
  <li><a href="#www">A World Wide Web létrehozása</a>
  <ul>
    <li><a href="#bongeszohaboru">A böngészőháborúk</a></li>
  </ul></li>
  <li><a href="#eljovetel">A webes szabványok eljövetele</a>
  <ul>
    <li><a href="#w3c">A W3C megalakulása</a></li>
    <li><a href="#webstandardsporject">A Web Standards projekt</a></li>
    <li><a href="#felemelkedes">A webes szabványok felemelkedése</a></li>
  </ul></li>
  <li><a href="#osszefoglalas">Összefoglalás</a></li>
  <li><a href="#olvasnivalo">Olvasnivaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="eredet">Az internet eredete</h2>

<p>1957. október 4-én olyan esemény történt, amely megváltoztatta a világot: a Szovjetunió sikeresen Föld körüli pályára állította az első műholdat. A Szputnyik-1 sikere az egész világot sokkolta, főleg az Amerikai Egyesült Államokat, akinek folyamatban volt a saját műholdprogramja, csak még kilövés nélkül.</p>

<p>Ennek az eseménynek a közvetlen hatására jött létre az Amerikai Védelmi Minisztérium ARPA (Advanced Research Projects Agency) részlege, mivel felismerték egy olyan szervezet szükségességét, amely képes új, modern technológiákat, fejlesztési ötleteket kikutatni és megvalósítani az aktuális szükségleteknek megfelelően. A legismertebb (vagy legalábbis a legszélesebb kört befolyásoló) projektjük az internet létrehozása volt.</p>

<p>1960-ban a pszichológus és számítógépmérnök Jospeh Licklider írt egy cikket „Ember-számítógép szimbiózis” címmel, amelyben felvetette a hálózatba kötött számítógépek ötletét, amelyek így központi adattárolást és adatelérést tennének lehetővé. 1962-ben, miközben az ARPA keretében dolgozott, mint az adatfeldolgozó központ vezetője, alakítottak egy csoportot további számítógépes kutatáshoz, de ezt a csoportot még azelőtt elhagyta, hogy bármilyen munka történt volna az ötlettel kapcsolatban.</p>

<p>A számítógép-hálózat tervét (amelyet ARPANET-nek neveztek el) 1967 októberében mutatták be, és 1969 decemberében már működött is egy négy gépből álló hálózat. A hálózatok alapproblémája az volt, hogy hogyan kössék össze a fizikai hálózatot úgy, hogy egy állandó kapcsolat ne foglalja le teljesen a hálózati erőforrásokat. A probléma megoldása végül a csomagkapcsolás lett, amely az adatkéréseket kis darabokra, „csomagokra” vágta szét, amelyeket már gyorsan fel lehetett dolgozni a hálózat többi résztvevőjének blokkolása nélkül. Ezt az elvet most is használják az interneten.</p>

<p>Az elméletet végül széles körben elfogadták, és sok más hálózat kezdte el használni a csomagkapcsolás elvét. Az X.25 (az International Telecommunication Union fejlesztése) szolgáltatta például az első angol egyetemi hálózat, a <abbr title="Joint Academic Network">JANET</abbr> alapjait (amellyel az angol egyetemek már képesek voltak emaileket és fájlokat küldeni vagy fogadni), valamint az amerikai nyilvános CompuServe (egy kereskedelmi vállalat, amely kis cégeknek és magánszemélyeknek biztosított eleinte számítógépes erőforrásokat, majd később internet hozzáférést). Ezek a hálózatok, annak ellenére, hogy sok kapcsolatot szolgáltak ki, még sokkal zártabbak voltak, mint a ma ismert internet.</p>

<p>A különböző hálózati protokollok elszaporodása nagyon hamar probléma lett, amint megpróbálták az egyes hálózatokat összekapcsolni. Viszont már volt egy megoldás a láthatáron, mégpedig Robert Kahn által, aki egy műholdas csomagalapú hálózati projekten dolgozott az ARPA-nál. Olyan szabályokat alkotott, amelyek egy sokkal nyíltabb hálózati architektúrát tettek lehetővé, mint az addig használt ARPANET-es protokollok. Később csatlakozott hozzá Vinton Cerf is a Stanford Egyetemről, és ketten létrehoztak egy olyan rendszert, amely egy új szabvány segítségével elrejtette az egyes hálózatok közti különbségeket. A szabványt az 1974 decemberében megjelent első tervezetben Internet Transmission Control Program névre keresztelték.</p>

<p>A specifikáció háttérbe szorította a hálózatok szerepét, és az adatátvitel integritásának felügyeletét a gazdaszámítógép hatáskörébe helyezte. A végeredmény az volt, hogy végre lehetségessé vált szinte az összes hálózat egyszerű összekapcsolása. Az ARPA támogatta a szoftver fejlesztését, és később 1977-ben három különböző hálózat közötti sikeres kommunikációval mutatták be az elért eredményeket. 1981-re elkészült és megjelent a végleges specifikáció, majd 1982-ben az USA-n kívüli kapcsolatokat átalakították az új „<abbr title="Transmission Control Protocol over Internet Protocol">TCP/IP</abbr>” protokoll használatára. Az általunk is ismert internet megérkezett.</p>

<h2 id="www">A World Wide Web létrehozása</h2>

<p>A kilencvenes évek elején a Gopher egy népszerű adatkezelő rendszer volt, amelyben menükön keresztül lehetett fájlokhoz, különböző erőforrásokhoz vagy más menükhöz eljutni. Ezek a menük átléphették az adott számítógép határait, és az interneten keresztül más rendszerekről is kérhettek le menüket. Nagyon népszerű volt az egyetemek körében, valamint a nagyobb vállalatoknál, ahol a dokumentumok központosított tárolására és kezelésére használták.</p>

<p>A Gophert a Minnesotai Egyetem készítette. 1993 februárjában bejelentették, hogy licencdíjat fognak kérni az általuk készített Gopher kiszolgáló kódja után, amelyet referenciaként lehetett használni. Ennek hatására sok szervezet alternatívát keresett a Gopher mellé.</p>

<p>A svájci CERN-nek (European Council for Nuclear Research) már volt egy ilyen alternatívája. Tim Berners-Lee egy információkezelő rendszeren dolgozott, amelyben a szövegek hivatkozásokat tartalmazhattak más munkákra, így az olvasó könnyen átugorhatott egyik dokumentumról a másikra. Az ilyen, általa csak hiperszövegként elnevezett tartalmak megjelenítéséhez készített egy kiszolgálót is, amelyet WorldWideWeb-nek neveztek el. A szoftver maga már 1991-ben megjelent, de még szükség volt két dologra, mielőtt robbanásszerűen megnőtt a népszerűsége, és teljesen lecserélte volna a Gophert.</p>

<p>1993. április 13-án a CERN szabadon hozzáférhetővé tette a WorldWideWeb forráskódját, így bárki felhasználhatta és módosíthatta a kódot anélkül, hogy fizetnie kellett volna érte.</p>

<p>Később, még ugyanebben az évben az NCSA (National Center for Supercomputing Applications) kiadott egy alkalmazást, amely egy webböngésző és egy Gopher kliens ötvözete volt, Mosaic névvel. Eredetileg csak Unix gépeken volt elérhető és csak forráskód szinten, de 1993 decemberében a Mosaic új verziója már Apple Macintosh és Microsoft Windows telepítőkkel érkezett. A Mosaic, és vele együtt a web népszerűsége meredeken emelkedni kezdett.</p>

<p>Ezt követően drasztikusan megnőtt a böngészők száma, sok egyetem és vállalat indított fejlesztési projekteket ebben az irányban, például a Telenor (egy norvég kommunikációs vállalat), amely 1994-ben elkészítette az Opera böngésző első verzióját.</p>

<h3 id="bongeszohaboru">A böngészőháborúk</h3>

<p>A web népszerűsége később kereskedelmi érdeklődést is generált. Marc Andreessen elhagyta az NCSA-t, és Jim Clarkkal közösen megalapították a Mosaic Communicationst, amelyet később Netscape Communications Corporationnek neveztek el, majd elkezdtek dolgozni a később Netscape Navigatorként ismert böngészőn. Ennek az első verziója 1994 decemberében jelent meg.</p>

<p>Az NCSA kereskedelmi ága, a Spyglass Inc. közben eladta a Mosaic technológiájának jogát a Microsoftnak, amely az Internet Explorer alapjait szolgáltatta. Ennek az első verziója 1995 augusztusában jelent meg.</p>

<p>A Netscape és a Microsoft közötti harc hamarosan elérte a tetőpontját, és mindketten megpróbáltak új funkciókkal előrukkolni, hogy megnyerjék maguknak a fejlesztőket. Ez később a „böngészők háborúja” néven vált ismertté. Az Operának ezalatt egy kisméretű, de stabil pozíciója volt, és innovatív fejlesztésekkel, valamint a szabványok támogatásával próbáltak fennmaradni.</p>

<h2 id="eljovetel">A webes szabványok eljövetele</h2>

<p>A böngészőháború alatt a Microsoft és Netscape főleg az új funkciók fejlesztésére koncentrált ahelyett, hogy a már támogatott funkciókat javították volna ki. Saját, védett funkciókat építettek be a böngészőkbe, emellett olyan új funkciókat valósítottak meg, amelyek már léteztek a többi böngészőkben, de ezek nem voltak kompatibilisek egymással.</p>

<p>A webfejlesztők ezekben az időkben egyre inkább arra voltak kényszerítve, hogy a valódi fejlesztés helyett az ilyen zavaros helyzetek megoldásával foglalkozzanak. Néha arra volt szükség, hogy két változatot készítsenek egy oldalból a két nagy böngésző számára, amelyek gyakorlatilag teljesen megegyeztek. Egyesek egyszerűen csak az egyik böngészőt támogatták, és a másik böngésző felhasználóit letiltották az oldalról. A munka így igazi rémálommá vált, és már nem voltak messze az elkerülhetetlen következmények a fejlesztők részéről.</p>

<h3 id="w3c">A W3C megalakulása</h3>

<p>1994-ben Tim Berners-Lee megalapította a W3C-t (World Wide Web Consortium) a Massachusetts-i Technológiai Intézetnél, a CERN, a DARPA (ez lett az ARPA új neve), valamint az Európai Bizottság támogatásával. A W3C a különböző protokollok és technológiák szabványosítását tűzte ki maga elé egy olyan web felépítésének érdekében, amelyen az információ a világ népességének lehető legnagyobb része számára elérhetővé válhat.</p>

<p>A következő években a W3C több specifikációt is kiadott (amelyeket „ajánlásoknak” neveztek), mint például a HTML 4.0, a PNG képek szerkezete, vagy a CSS első és második verziója.</p>

<p>Viszont a W3C nem követeli meg az ajánlások betartását. A gyártók csak akkor kell betartsák a W3C dokumentumokban foglaltakat, ha a terméküket meg akarják jelölni, hogy megfelel a W3C feltételeinek. A gyakorlatban ez nem értékes eladási szempont, mivel a felhasználók közül szinte senki sem tudja, sőt valószínűleg nem is érdekli őket, hogy mi fán terem a W3C. Ennek következtében a „böngészők háborúja” zavartalanul folytatódhatott.</p>

<h3 id="webstandardsporject">A Web Standards projekt</h3>

<p>1998-ban a böngészőpiacot az Internet Explorer 4 és a Netscape Navigator 4 uralta. Megjelent az Internet Explorer 5 beta verziója, amely már egy új és saját fejlesztésű dinamikus HTML-t támogatott. Ez azt jelentette, hogy a professzionális webfejlesztők már <em>öt különböző módon</em> kellett tudjanak JavaScript kódokat írni.</p>

<p>Ennek eredményeképpen a professzionális webfejlesztők és webdesignerek egy csoportja összeállít, és együtt megalakították a WaSP-ot (Web Standards Project). Az ötlet alapjában az volt, hogy a W3C dokumentumait szabványnak nevezzék ajánlások helyett, így talán sikerülhet meggyőzni a Microsoftot és a Netscape-et arról, hogy támogassák őket.</p>

<h3 id="felemelkedes">A webes szabványok felemelkedése</h3>

<p>2000-ben a Microsoft kiadta az Internet Explorer 5 Macintosh Editiont. Ez egy nagyon fontos mérföldkő volt, mivel ez lett az alapértelmezett böngésző a Mac OS alatt, és már támogatta a W3C ajánlások egy jelentős részét. Ez az Opera megfelelő CSS és HTML támogatásával együtt már megadta a lehetőséget a webfejlesztők és webdesignerek számára, hogy először tapasztalhassák meg a szabványos weboldalak fejlesztésének a kényelmét.</p>

<p>A WaSP ráadásul sikerült meggyőzze a Netscape-et arról, hogy halassza el a Netscape Navigator 5.0 megjelenését addig, amíg nem támogatja jobban a szabványokat (ez a változat vált később a manapság nagyon népszerű böngésző, a Firefox alapjává). A WaSP ezen kívül indított egy Dreamweaver Task Force nevű csoportot is, hogy rávegye a Macromediát a népszerű fejlesztői eszközük szabványosabbá tételére.</p>

<p>2001-ben az „A List Apart” nevű népszerű webfejlesztői oldalt is teljesen újratervezték, és az egyik cikkben, amely a miértekről és hogyanokról szólt, ez állt:</p>

<blockquote cite="http://www.alistapart.com/articles/tohell">Hat hónapon, egy éven vagy legkésőbb két éven belül minden oldalt ezekkel a szabványokkal fognak készíteni. [...] Figyelhetjük, ahogy a tudásunk fölöslegessé válik, vagy elkezdhetjük már most tanulni a szabványos módszereket.</blockquote>

<p>Ez egy kissé optimista kijelentés volt, az összes oldal még most, 2008-ban sem támogatja a szabványokat. De sokan hallgattak rájuk. A régi böngészők részesedése lecsökkent, és később két másik rendkívül népszerű oldalt is átalakítottak teljesen szabványosra: 2002-ben a Wired magazint, és 2003-ban az ESPN-t, akik így a webes szabványok és az új technológiák élharcosaivá váltak.</p>

<p>Ugyancsak 2003-ban Dave Shea elindította a „CSS Zen Garden” oldalt. Ez valószínűleg nagyobb hatást ért el a webfejlesztőknél, mint addig bármi más, ugyanis képes volt azt bemutatni, hogy egy oldal teljes designját meg lehet változtatni egyszerűen a stílus lecserélésével, miközben a tartalom pontosan ugyanaz marad.</p>

<p>Azóta a professzionális webfejlesztők körében a webes szabványok alapvetővé váltak. Ez a sorozat most nagyszerű alapot adhat neked is ahhoz, hogy ugyanolyan tiszta, szemantikus, hozzáférhető és szabványos weboldalakat készíthess, mint a nagy vállalatok.</p>

<h2 id="osszefoglalas">Összefoglalás</h2>

<p>Ebben a leírásban megnéztük, hogy hogyan alakult ki az Internet az űrverseny eredményeképpen; hogyan hozta létre Tim Berners-Lee a hiperszövegeket egy generáció számára, és hogyan okozta két kereskedelmi cég összecsapása a valaha látott legnagyobb fejlesztési káoszt. A „webes szabványok” kifejezés ma már szélesebb körben ismert a szakemberek között, mint bármilyen más kifejezés, amelyet a W3C alkotott (sőt most már maga a W3C is elkezdte használni ezt a kifejezést az oldalain), és ez az, amit meg fogunk neked tanítani: a weboldalak készítésének szabványos útját.</p>

<h2 id="olvasnivalo">Olvasnivaló</h2>

<p>Ha többet szeretnél tudni a témáról, keresd fel a következő weboldalakat:</p>

<ul>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_Internet">Az internet története (angolul)</a>; <a href="http://hvg.hu/Tudomany/20041203interhist.aspx">A Szputnyiktól a spamig</a> </li>
  <li><a href="http://en.wikipedia.org/wiki/History_of_the_World_Wide_Web">A World Wide Web története (angolul)</a>; <a href="http://weblabor.hu/cikkek/bongeszohaboruk">Böngészőháborúk? Történelem, teszt és jövőkép</a></li>
  <li><a href="http://www.w3.org/Consortium/history">A W3C története (angolul)</a>, <a href="http://www.w3c.hu/">W3C Magyar Iroda</a></li>
  <li><a href="http://www.webstandards.org/">A Web Standards Project (angolul)</a> és <a href="http://www.webstandards.org/about/history/">az ő történetük (angolul)</a></li> 
  <li><a href="http://www.alistapart.com/">A List Apart</a></li>
  <li><a href="http://www.csszengarden.com/tr/magyar/">CSS Zen Kert</a></li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Keress tovább a témában, hogy megtaláld a válaszokat az alábbi kérdésekre:</p>

<ul>
  <li>Milyen böngészők érhetőek el manapság az interneten Windows, Mac OS X és Linux alatt?</li>
  <li>Hány százalékos részesedésük van ezeknek a böngészőknek?</li>
  <li>Milyen böngészőket használhatnak mobiltelefonokon a weblapok megnyitására?</li>
  <li>Hány „webes szabványt” publikált a W3C, és melyek azok, amelyeket a mai böngészők széles körben támogatnak?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="start" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/" title="hivatkozás a sorozat előző leírására">Előző leírás — Bevezető a webes szabványokba/Tartalomjegyzék</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/">Következő leírás — Hogyan működik az internet?</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img alt="Mark Norman Francis" src="/articles/view/2-the-history-of-the-internet-and-the-w/norm.jpg" />
<p class="comment">Fotós: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.
</p>

<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> oldalon blogol.</p>
