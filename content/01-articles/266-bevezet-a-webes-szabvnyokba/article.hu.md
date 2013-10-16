Title: Bevezető a webes szabványokba
----
Date: 2009-07-06 19:59:06
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
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/" title="hivatkozás a sorozat következő leírására">Következő leírás — Az internet és a web története, a webes szabványok evolúciója</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Régóta volt már egy álmom. A munkám az utóbbi 8-9 évben elég erőteljesen az oktatás körül alakult, néha technikai jellegű könyvek készítésében segédkeztem, amelyekben az emberekkel megismertettük az új technológiákat, máskor új alkalmazottakat kellett betanítanom a cégeknél, amelyeknél dolgoztam, vagy éppen leírásokat szerkesztettem arról, hogy hogyan kell használni az Opera szoftvereit. Természetesen érdeklődök a web iránt is, és nagy támogatója vagyok a webes szabványoknak. Szerettem volna hozzáadni a magam kis szeletét ahhoz, hogy a web egy jobb hely legyen, és itt jön vissza ismét az oktatás, kezdve onnan, hogy az embereket megtanítjuk, hogyan dolgozhatnak együtt, egészen addig, hogy hogyan készíthetnek olyan weboldalakat, amelyek különböző platformokon és eszközökön is működnek. Az utóbbi esetben a webes szabványok használatának kulcsszerepe van, ezért úgy döntöttem, hogy egy olyan dologba fogom fektetni az időm és energiám nagy részét, amellyel segíthetem a webes szabványok elterjedését mind a mai, mind a jövőbeli weben. Ez már egy ideje a fejemben volt, és végül itt az Operánál érett be ennek a gyümölcse. Köszönettel tartozom a munkaadóimnak, hogy még fizettek is azért, hogy ezt megtehessem! Így az egyik álmom végre valóra vált.</p>

<p>Ezekben a leírásokban több hónap kemény munkája van benne (az enyém és még sok más emberé), és egy rendkívül stabil alapot fog nyújtani mindenkinek a webfejlesztés témakörében, függetlenül attól, hogy kiről van szó — ráadásul teljesen ingyenes, elérhető, és nem alapoz korábbi ismeretekre. Főleg az egyetemek számára tartom ezeket hasznosnak, sőt úgy érzem, hogy az egyetemek manapság elég rosszul állnak a webes szabványok oktatása terén. Többször hallottam, hogy egyes diákok azért nem foglalkoznak webfejlesztéssel az egyetemeken, mert most is a már évekkel ezelőtt elavult sablonokat kell használniuk; többször hallottam különböző cégeket panaszkodni arról, hogy az állásra jelentkező ifjú egyetemistákról az interjúkon kiderül, hogy valójában fogalmuk sincs a mindennapi életben használt webfejlesztésről. De ha olyan haladó egyetemen vagy, amelyik a webes szabványok oktatását valóban komolyan veszi, akkor le a kalappal előtte.</p>

<p>Ebben a bejegyzésben a következő témákról lesz szó:</p>

<ul>
<li><a href="#miert">Miért használd a webes szabványokat?</a> Ebben a részben részletesen bemutatjuk, hogy milyen előnyei vannak a webes szabványok használatának, miért nincsenek még most sem kihasználva, és hogyan segíthetnek neked ezek a leckék, hogy mindezt megoldhasd.</li>
<li><a href="#felepites">A tananyag felépítése</a>. Avagy miről lesz szó. Ebben a részben megemlítjük azt is, hogy az oktatók hogyan használhatják fel hatékonyan a leírásokat a kurzusokon.</li>
<li><a href="#kinek">Kinek van szüksége ezekre a leírásokra?</a> Kire gondoltunk pontosan, amikor azt mondtuk, „bárki”?</li>
<li><a href="#tartalom">Tartalomjegyzék</a>. Ugorj ide, ha már eleged van a szövegelésemből, és el szeretnéd kezdeni a tanulást.</li>
<li><a href="#koszonet">Köszönetnyilvánítás</a></li>
</ul>

<h2 id="miert">Miért használd a webes szabványokat?</h2>

<p>A fő okok arra, hogy miért érdemes bevonni a webes szabványokat a fejlesztésbe, majd csak a negyedik fejezetben lesz részletesen elemezve, de egy átfogó képet már itt is felállíthatunk. A webes szabványok használatának a következő előnyei vannak:</p>

<ol>
  <li><strong>Hatékony kód</strong>: ahogy haladsz majd a leírásokban, észreveheted, hogy legjobb módszerek a webfejlesztésben sokszor a kód újra használhatóságára alapoznak — a HTML tartalmat szétválaszthatod a stílustól (CSS) és a működéstől (JavaScript), így a fájlok kisebbek maradnak, a kódot csak egyszer kell megírni, és később bárhol felhasználhatod, ahol újra szükség van rá.</li>

  <li><strong>Egyszerű karbantartás</strong>: ez nagyon közel áll az előző ponthoz — ha a HTML részt csak egyszer írod meg, aztán a stílusokat és a működést csak akkor definiálod (osztályokkal és függvényekkel), amikor szükséged van rájuk, akkor egy későbbi időpontban elég lesz a változást egyetlen helyen elvégezned, és ez az egész webhelyen azonnal megváltozik, ahelyett, hogy mindenütt egyenként elvégezd a módosítást!</li>

  <li><strong>Hozzáférés</strong>: a következő két pont ismét összetartozik — az egyik legnagyobb probléma a weboldalakkal az, hogy hozzáférhetővé tegyük mindenki számára, függetlenül attól, hogy kiről és milyen körülményekről van szó. Ebbe beletartozik az olyan weboldalak készítése is, amelyeket fogyatékos személyek is használnak, mint például vakok vagy gyengénlátók, mozgássérültek (akik nehezen, vagy egyáltalán nem tudják használni a kezeiket). Ha webes szabványokat és a legjobb módszereket használod, akkor képes leszel olyan weboldalakat készíteni, amelyeket a fogyatékkal élők is használhatnak, ráadásul semmilyen extra munkára nem lesz szükséged ehhez.</li>

  <li><strong>Kompatibilitás</strong>: ez alatt azt értem, hogy a weboldalaid nem csak a különböző platformokon (mint például Windows, Mac vagy Linux) fognak megbízhatóan működni, hanem a különböző eszközökön is, amelyekbe manapság beletartoznak a mobiltelefonok, a tévék és a játékkonzolok is. Ezeknek az eszközöknek különböző korlátai vannak, mint például a képernyőméret, a számítási kapacitás, az irányíthatóság vagy sok más egyéb, de a jó hír az, hogy a webes szabványok és a legjobb módszerek használatával szinte egészen biztosan garantálható, hogy a weboldalad a legtöbb ilyen eszközön is működni fog. Jelenleg több mobiltelefon van a világon, mint PC, és ezek nagy része internetképes. Biztosan megengedheted magadnak, hogy egy ekkora piacot teljesen figyelmen kívül hagyj?</li>

  <li><strong>Webes keresők és keresőrobotok</strong>: ez alatt azt értem, amire sok helyen keresőoptimalizálás névvel hivatkoznak. Ismét csak azt tudom mondani, hogy ha a webes szabványokat és a legjobb módszereket használod, akkor a weboldalad a lehető legátláthatóbb lesz a keresőrobotok számára, amelyek pásztázzák a weboldalakat, így az oldalad jobb eredményt fog elérni az olyan keresőkben, mint például a Google. Ennek már saját tudománya van, a SEO, de ismétlem, már csak annyival, hogy webes szabványokat használsz, máris sokat tettél a pozíciódért a keresők találati listájában.</li>
</ol>

<p>A fenti előnyök ellenére a legtöbb weboldal a weben mégsem követi a webes szabványokat, és rengeteg webfejlesztő még ma is régi, elavult módszerekkel dolgozik szerte a világon. Vajon miért? Ennek sok oka van — sokszor az oktatás hiányosságára vagy a cégük házirendjére hivatkoznak, esetleg hogy nincs szükségük megtanulni a webes szabványokat, mert anélkül is megkapják a fizetést, túl nehéz megtanulni a szabványok használatát… Nézzük meg kicsit részletesebben ezeket az okokat, hogy eloszlathassuk a kifogásokban felmerült félreértéseket.</p>

<ol>
  <li><strong>Az oktatás hiánya</strong>: ez egy elég nyomós érv, és éppen ez volt a fő oka annak, hogy ez a sorozat elindult. Az egyetemek többsége egyáltalán nem foglalkozik a webes szabványokkal a webfejlesztéssel kapcsolatos kurzusokon, de ha mégis, akkor leginkább csak régi, elavult módszereket tanítanak, és ezen bürokratikus okok miatt általában nehéz változtatni. A könyvek és a speciális oktatások általában drágák. De várj csak! Éppen itt van egy kurzus, ami ingyenes, elérhető az egyetemek számára is, így ez már nem lehet valódi kifogás többé.</li>
  <li><strong>Céges policy</strong>: semmi kétség nincs afelől, hogy rengeteg olyan cég létezik, amelynek régi és elavult a weboldala, ráadásul a házirendben arra kényszerítik az alkalmazottakat, hogy kiöregedett böngészőket használjanak. De a helyzet javul. Most, hogy ingyen elérhető ez a kurzus, amely megmutatja, hogyan léphetnek át ezen a helyzeten, még könnyebb lesz a változás. A webes szabványok használata ráveheti arra is a cégeket, hogy modernebb böngészőket is használjanak, mert a régi böngészőkben a szabványos oldalak már nem mutatnak olyan jól — bár továbbra is működnek azokban is. A felhasználóikat is rávehetik ezáltal a frissítésre. Üzleti előnye is van a váltásnak: azok a weblapok, amelyek webes szabványokat használnak — amint azt fentebb már kifejtettük — jobb eredményeket érnek el a keresőkben, és elérhetőek lesznek a fogyatékkal élő emberek, valamint a más eszközökön internetezők számára is. Biztosan megengedhetik maguknak a cégek, hogy ezeket az előnyöket figyelmen kívül hagyják?</li>
  <li><strong>„Nincs rájuk szükségem!”</strong>: tudom, hogy néhány fejlesztő azt mondja minderre, hogy „de hát én még régi módszereket használok, és mégis megfizetnek — miért vacakoljak ezekkel az új dolgokkal?” Ahogy már fentebb is kifejtettük, a webes szabványokkal a kód sokkal hatékonyabb lesz, könnyebb megírni és könnyebb karbantartani is. Lehetőséged lesz olyan modern kódot írni, amely mindenhol hozzáférhető és használható az alternatív eszközökön is — mindez nem elég izgalmas számodra? De a képességeidet is használhatóbbá teszi a jövőre nézve, így lehetőséged lesz többet keresni. Sok cég már most is megköveteli a webes szabványokban való jártasságot.</li>
  <li><strong>„Túl nehéz megtanulni!”</strong>: badarság. Ha átolvasol néhány leírást ebből a kurzusból, rá fogsz jönni, mennyire egyszerű megérteni a webes szabványok alapjait, akár új vagy a webfejlesztésben, akár csak a tudásodat frissíted. Semmivel sem nehezebb, mint a régi, elavult módszerek használata, viszont rengeteg előnye van ezekkel szemben.</li>
  <li><strong>Nem minden böngésző támogatja a szabványt</strong>: a szabványtámogatás a böngészőkben sokszor jelentősen eltért egymástól, és ez valódi rémálommá változtatta a munkát. De ezeknek az időknek már vége, a modern böngészők mindegyike kiváló szabványtámogatással rendelkezik. Természetesen szükség van arra, hogy régebbi böngészőket is támogassunk, amelyeknek nincs olyan jó szabványtámogatásuk. De ha a legjobb módszereket használod, biztos lehetsz benne, hogy az ilyen régi böngészők felhasználói is még megfelelő támogatást kaphassanak.</li>
</ol>

<p>Amint láthatod, nem sok kifogásod maradt arra, hogy miért ne használd a webes szabványokat a munkád során. Ha kezdőként érkeztél ide, akkor máris sokkal jobb helyzetből indulsz, mert azonnal a legjobb módszereket tanulhatod meg, és nem kell előtte „elfelejtened” a régieket.</p>

<div class="note">
<p>OK, eddig ezekről a rossz módszerekről folyamatosan negatívan beszéltünk, mintha ezek a Halálcsillag titkos földalatti tervei lennének. Ebben a kurzusban egyáltalán nem fogunk foglalkozni ezekkel a módszerekkel, mivel úgy érezzük, hogy erre nincs szükség; jobb, ha egyből a jó úton indulsz el. Mégis, talán érdekelhet, hogy mi fán teremnek ezek, úgyhogy beszéljünk róluk most néhány szót.</p>

<p>A régi időkben az emberek sokszor gigantikus táblázatokkal építették fel a weblapokat, a táblázat celláit használva fel arra, hogy elhelyezzék a képeket, szövegeket, stb. (a táblázatokat nem erre találták ki, túlságosan elbonyolítják a weblapokat). Sokszor használtak láthatatlan képeket, ún. <em>spacer GIF</em>-eket a különböző elemek pozícionálására (a képeket nem erre találták ki, ez is elbonyolítja a weblapot). A JavaScriptet néha arra használták, hogy menüket készítsenek vele betöltés közben (ez nem valami jó azoknak, akiknél ki van kapcsolva a JavaScript, sőt a főleg fogyatékosok által használt képernyő-felolvasókat is megzavarta). Esetleg olyan JavaScript kódot írtak, amelyik csak egyetlen böngészőben működött (és mi van a többi böngészővel?). Sokszor használtak stílusozást direkt a HTML kódban, például a &lt;font&gt; elemmel (iszonyú nehéz később változtatni, ráadásul bonyolítja a weblapot). És sok más bűntettet hajtottak végre a webfejlesztés ellen. A legrosszabb az egészben, hogy azt mondtam, hogy a „régi időkben”, de valójában még most is rengeteg ember használja ezeket a módszereket!</p>

<p>A webfejlesztés korábban eléggé „piszkos” képesség volt, és a rossz módszerek csak még nehezebbé tették a dolgokat. A webes szabványok és a legjobb módszerek használata, ahogy azt ebben a kurzusban többször is kiemeljük, a lehető legjobb út jelenleg.</p>
</div>

<h2 id="felepites">A tananyag felépítése</h2>

<p>A kurzus több önálló cikkből épül fel — a végére már több mint 50 cikk lesz —, és mindegyik cikk néhány ezer szóból áll. Mindegyik cikk egy kisebb témára koncentrál, és ha szükséges, megemlít fontos háttérinformációkat és lényeges elméleteket, mindezt hasznos példákkal és egy követhető leírással támasztva alá. A végén a tesztkérdésekkel ellenőrizheted a tudásodat.</p>

<p>Ezen felül hamarosan elkészítünk egy részletes leírást is, amely lépésenként végigvezet egy teljes website elkészítésén az elejétől a végéig.</p>

<p>Egy logikus módszer a kurzus tanítására, hogy számold meg, hány órád van az oktatásra, majd oszd el a cikkek számával. Minden leckénél add ki a diákoknak, hogy előre olvassák át a kapcsolódó cikkeket. Ezután az előadás során mutass be praktikus példákat a témával kapcsolatban, és tedd fel az ellenőrző kérdéseket a diákoknak. Véleményem szerint nagyjából egy óra elég egy-egy téma átvételére, feltéve, hogy korábban már önállóan átolvasták az ehhez kapcsolódó cikket. Így 50 óra tanítás és 50 óra háttérolvasás szükséges a teljes kurzushoz.</p>

<p>Természetesen neked kell eldöntened, hogy mennyi időt fordítasz a kurzus tanítására, és pontosan mit fogsz leadni az egyes leckékben. Egy kis tapasztalattal már könnyen feloszthatod a leckéket.</p>

<h2 id="kinek">Kinek van szüksége ezekre a leírásokra?</h2>

<p>Ez a webes szabványokról szóló kurzus több részből épül fel, így szinte bárkinek segítségére lehet, aki webes szabványokról szeretne tanulni. A célja az, hogy az olvasót az egyszerű böngészéstől elvigye a CSS és HTML világába, egyszerű tudást adjon JavaScriptek készítéséhez, és hogy átlássa, hogyan illeszkednek mindezek egymáshoz. Mindez elég ahhoz, hogy az ember bizalommal léphessen be a munkapiacra (bár tapasztalatot sajnos nem tudunk adni).</p>

<p>Kinek van minderre szüksége? Azt szeretném, hogy bárki használhassa ezeket, aki szeretné megtanulni a webfejlesztés „helyes útját”:</p>

<ol>
  <li><strong>Egyetemi oktatók és diákok</strong>: erről már beszéltünk — ezek a cikkek ideálisak egy saját kurzus felépítéséhez, esetleg egy meglévő kurzusod felújításához vagy frissítéséhez. Ha diákként már jársz valamilyen webfejlesztéssel kapcsolatos előadásra, akkor ezzel kiegészítheted a tudásodat, és szólhatsz a tanárodnak is, hogy vegye ezeket figyelembe! Minden tanárnak és diáknak csak ajánlani tudom, hogy nézzék át ezeket a leírásokat, hogy a kurzusokban biztosan a jelenleg elérhető legjobb módszereket taníthassák és tanulhassák.</li>
  <li><strong>Iskolások már az egyetem/főiskola előtt</strong>: bár ezek a leírások elsősorban felnőtteknek készültek, ez nem jelenti azt, hogy a fiatalabbak nem tanulhatnak belőle — egyszerűen nézz körül, és kezdd el a tanulást.</li>
  <li><strong>Jelenlegi webfejlesztők és webdesignerek</strong>: rengeteg olyan webfejlesztő és webdesigner dolgozik, aki nem használja a webes szabványokat és a legjobb módszereket, esetleg szüksége lenne egy könnyen elérhető referenciára, ha utána szeretne nézni valaminek, vagy szívesen felfrissítené a tudását. Ha az első csoportba tartozol, adj egy esélyt ennek a kurzusnak, hogy megtudhasd, miért hasznos a számodra is a webes szabványok használata. Az utóbbi csoportnak ez a sorozat hasznos lehet a képességeik frissítésére, a nehezen felidézhető részletek áttekintésére, vagy olyan indokok keresésére, amelyekkel meg lehet győzni a főnököt a webes szabványok használatának hasznosságáról.</li>
  <li><strong>Céges oktatók</strong>: ez egy ideális mód az alkalmazottak olcsó oktatására.</li>
  <li><strong>Bárki más</strong>: ha egyik csoportba sem tartozol, de szeretnél tanulni valamit a webdesignról és a webfejlesztésről, akkor ez a kurzus egy egyszerű és olcsó mód a számodra.</li>
</ol>

<h2 id="tartalom">Tartalomjegyzék</h2>

<h3>A kezdetek</h3>

<ol>
  <li>Bevezető a webes szabványokba (Chris Mills) — ezt olvasod jelenleg</li>
</ol>

<h3>A szabványok világa</h3>

<ol start="2">
  <li><a href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/">Az internet és a web története, a webes szabványok evolúciója</a> (Mark Norman Francis)</li>
  <li><a href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/">Hogyan működik az internet?</a> (Jonathan Lane)</li>
  <li><a href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">A webes szabványok modellje — HTML, CSS és JavaScript</a> (Jonathan Lane)</li>
  <li><a href="http://dev.opera.com/articles/view/5-webes-szabvanyok-szep-alom/">Szép álom, de mi a valóság?</a> (Jonathan Lane)</li>
</ol>

<h3>Webdesign fogalmak</h3>

<ol start="6">
  <li><a href="http://dev.opera.com/articles/view/6-informacios-architektura-egy-website-t/">Információs Architektúra — egy website tervezése</a> (Jonathan Lane)</li>
  <li><a href="http://dev.opera.com/articles/view/7-mi-kell-egy-jo-weblaphoz/">Mi kell egy jó weblaphoz?</a> (Mark Norman Francis)</li>
  <li><a href="http://dev.opera.com/articles/view/8-a-szinek-elmelete/">A színek elmélete</a> (Linda Goin)</li>
  <li><a href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/">Egy site keretének felépítése</a> (Linda Goin)</li>
  <li><a href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/">Színsémák és designtervek</a> (Linda Goin)</li>
  <li><a href="http://dev.opera.com/articles/view/11-tipografia-a-weben/">Tipográfia a weben</a> (Paul Haine)</li>
</ol>

<h3>HTML alapok</h3>

<ol start="12">
  <li><a href="http://dev.opera.com/articles/view/12-a-html-alapjai/">A HTML alapjai</a> (Mark Norman Francis)</li>
  <li><a href="http://dev.opera.com/articles/view/13-a-html-head-eleme/">A HTML &lt;head&gt; eleme</a> (Christian Heilmann)</li>
  <li><a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">Megfelelő doctype választása a HTML dokumentumokhoz</a> (Roger Johansson)</li>
</ol>

<h3>A HTML felépítése</h3>

<ol start="15">
  <li><a href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Szöveges részek megjelölése HTML-ben</a> (Mark Norman Francis)</li>
  <li><a href="http://dev.opera.com/articles/view/16-html-listak/">HTML listák</a> (Ben Buchanan)</li>
  <li><a href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Képek a HTML-ben</a> (Christian Heilmann)</li>
  <li><a href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">HTML hivatkozások — építsük fel a webet!</a> (Christian Heilmann)</li>
  <li><a href="http://dev.opera.com/articles/view/19-html-tablazatok/">HTML táblázatok</a> (Jen Hanen)</li>
  <li><a href="http://dev.opera.com/articles/view/20-html-urlapok/">HTML űrlapok</a> — az alapok (Jen Hanen)</li>
  <li><a href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Kevéssé ismert szemantikus elemek</a> (Mark Norman Francis)</li>
  <li><a href="http://dev.opera.com/articles/view/22-altalanos-tarolok/">Általános tárolók — a div és a span elemek</a> (Mark Norman Francis)</li>
  <li>Több lap létrehozása navigációs menüvel (Christian Heilmann)</li>
  <li>A HTML validálása (Mark Norman Francis)</li>
</ol>

<h3>Hozzáférhetőség</h3>

<ol start="25">
  <li>A hozzáférhetőség alapjai (Tom Hughes-Croucher)</li>
  <li>A hozzáférhetőség tesztelése (Ben Hawkes-Lewis)</li>
</ol>

<h3>CSS</h3>

<ol start="27">
  <li>CSS alapok (Christian Heilmann)</li>
  <li>Öröklődés és kapcsolódás (Tommy Olsson)</li>
  <li>Szöveg stílusozása CSS-sel (Ben Henick)</li>
  <li>A CSS elrendezés modell — box, border, margin és padding (Ben Henick)</li>
  <li>Háttérképek CSS-ben (Nicole Sullivan)</li>
  <li>Listák és hivatkozások stílusozása (Ben Buchanan)</li>
  <li>Táblázatok stílusozása (Ben Buchanan)</li>
  <li>Űrlapok stílusozása (Ben Henick)</li>
  <li>Float és clear (Tommy Olsson)</li>
  <li>Statikus és relatív pozícionálás CSS-ben (Tommy Olsson)</li>
  <li>Fix és abszolút pozícionálás CSS-ben (Tommy Olsson)</li>
</ol>

<h3>Haladó CSS anyagok</h3>

<ol start="38">
  <li>Fejlécek, láblécek, oszlopok és sablonok (Ben Henick)</li>
</ol>

<h3>JavaScript alapok</h3>

<ol start="39">
  <li>Programozás — a valódi alapok! (Christian Heilmann)</li>
  <li>Mire jó a JavaScript? (Christian Heilmann)</li>
  <li>Első lépések JavaScriptben (Christian Heilmann)</li>
  <li>Legjobb JavaScript módszerek (Christian Heilmann)</li>
  <li>A nem feltűnő JavaScript alapelvei (PPK)</li>
  <li>JavaScript függvények (Mike West)</li>
  <li>Objektumok JavaScriptben (Mike West)</li>
  <li>A DOM bejárása (Mike West)</li>
  <li>HTML létrehozása és módosítása (Stuart Langridge)</li>
  <li>Dinamikus stílus — CSS kezelése JavaScripttel (Greg Schechter)</li>
  <li>Események kezelése JavaScripttel (Robert Nyman)</li>
  <li>JavaScript animáció (Stuart Langridge)</li>
  <li>Könnyed leépítés kontra folyamatos fejlesztés (Christian Heilmann)</li>
</ol>

<h3>Kiegészítő leírások</h3>

<ul>
  <li>Tartalom feltöltése online (Craig Grannell)</li>
  <li>Még néhány szó a &lt;head&gt; elemről (Chris Heilmann)</li>
  <li>Kiegészítő: Közös HTML entitások a tipográfiában (Ben Henick)</li>
  <li>Az Opera Webes szabványok tanfolyam fogalomtára — Nem teljes, folyamatosan bővítjük!</li>
</ul>

<h2 id="koszonet">Köszönetnyilvánítás</h2>

<p>Túl sokan segítettek nekem ahhoz ennek a kurzusnak az elkészítésében, hogy mindenkit fel tudjak itt részletesen sorolni, de remélhetőleg mindenki belekerült. Ezek az emberek nagyszerűek, vegyétek fel velük a kapcsolatot: írjatok nekik, vegyétek meg a könyveiket, olvassátok a blogjaikat és támogassátok őket. Le a kalappal előttük.</p>

<ol>
  <li><strong>A szerzők</strong>: nagy köszönet nektek, Ben Buchanan, Tom Hughes-Croucher, Mark Norman “Norm” Francis, Linda Goin, Paul Haine, Jen Hanen, Benjamin Hawkes-Lewis, Ben Henick, Christian Heilmann, Roger Johansson, Peter-Paul Koch, Jonathan Lane, Tommy Olsson, Nicole Sullivan és Mike West. Nélkületek ez a kurzus nem lenne.</li>
  <li><strong>Az Opera csapat</strong>: üdvözletemet küldöm Jan Standalnak és David Storey-nek, a csapat többi tagjának, valamint mindenkinek az Operától, aki támogatta az ötletemet, és segített a megvalósításban.</li>
  <li><strong>A szervezetek</strong>: mindenkinek köszönöm a Yahootól (a szerzőknek és Sophie Majornak a szervezést és a reklámozást), a WaSP-nak (különösen Gareth Rushgrove, Stephanie Troeth és Aarron Walter), a Britpack-nek, a Geekup fiúknak és az összes egyetemnek, amelyik érdeklődést mutatott a kurzus iránt és segített a továbblépésben.</li>
  <li><strong>A személyek</strong>: egy kis köszönet jár még a következő embereknek is: Craig Saila, Sara Dodd, John Allsopp, Roan Lavery, Bruce Lawson, Alan White. Remélem nem maradt ki senki.</li>
  <li><strong>Az olvasók</strong>: és végül sokáig éljenek az olvasók, akik időt szánnak erre a kurzusra, hogy jobbá tehessék a webet!</li>
</ol>

<ul class="seriesNav">
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/" title="hivatkozás a sorozat következő leírására">Következő leírás — Az internet és a web története, a webes szabványok evolúciója</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2 id="author">A szerzőről</h2>

<img class="right" src="/articles/view/1-introduction-to-the-web-standards-cur/chrismills.jpg" alt="Chris Mills" title="Chris Mills" />

<p>Chris Mills fejlesztő kapcsolat manager az Operánál. Cikkeket ír és publikál a <a href="http://dev.opera.com/">dev.opera.com</a> és a <a href="http://labs.opera.com/">labs.opera.com</a> oldalakon, kapcsolatot tart az Opera közösséggel a visszajelzések és az Opera népszerűsítésének érdekében, valamint reklámozza az Operát, ahol lehet. Ő szervezte és készítette a Webes szabványok sorozatot.</p>

<p>A munkán kívül nagy zenerajongó, a zenék széles skáláját szereti játszani és hallgatni, többek között metál, folk, punk, elektronika, prog és sok más stílust. A kedvenc zenekara jelenleg a híres <a href="http://www.conquestofsteel.co.uk/">Conquest of Steel</a>.</p>
