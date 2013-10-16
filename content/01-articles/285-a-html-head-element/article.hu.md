Title: A HTML <head> element
----
Date: 2009-08-17 08:47:32
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/12-a-html-alapjai/" title="hivatkozás a sorozat előző leírására">Előző leírás — A HTML alapjai</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa">Következő leírás — Megfelelő doctype választása a HTML dokumentumokhoz</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban a HTML dokumentumoknak egy olyan részével fogunk foglalkozni, amely méltánytalanul kevés figyelmet kap: ezek azok a jelölések, amelyek a <code>head</code> elemben találhatóak. A leírás végére tudni fogod, hogy mire szolgálnak ennek a résznek a különböző elemei, beleértve a <code>title</code> elemet, a kulcsszót és a leírást (amelyeket <code>meta</code> elemekkel adhatsz meg), valamint a <code>head</code> előtt található <code>doctype</code> elemet is megemlítjük. Fogunk beszélni még a JavaScriptről és a CSS-ről is (külső és belső megvalósításról egyaránt), valamint arról, hogy mit ne tegyünk a <code>head</code> elembe. A <a href="headtutorial.zip">demo forrásfájlokat innen töltheted le</a>, erre fogunk hivatkozni ebben a leckében; ebben nyugodtan próbálkozhatsz, miután átolvastad ezt az anyagot. A leckében foglaltakat olvasd el elejétől a végéig, mivel fokozatosan építjük fel a <code>head</code> elem használatának a legjobb módszereit. Minden rész önmagában is érvényes, de a végén az összefoglalóban, ahol a legjobb módszerekről beszélünk, újragondolhatod a korábbi tanácsokat. Ebben a leírásban a következő témákról lesz szó:</p>

<ul>
  <li><a href="#miez">Miféle <em>head</em>? Miről beszélsz?</a></li>
  <li><a href="#nyelv">A dokumentum elsődleges nyelvének beállítása</a></li>
  <li><a href="#cim">A dokumentum megítélése a címe alapján</a></li>
  <li><a href="#kulcsszo">Kulcsszavak és leírás hozzáfűzése</a></li>
  <li><a href="#megjelenes">Mi a helyzet a megjelenéssel? Stílusok hozzáadása</a></li>
  <li><a href="#dinamikus">Dinamikus funkciók hozzáadása JavaScripttel</a></li>
  <li><a href="#allj">Állj! A beágyazott CSS és JavaScript nem jó ötlet!</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="miez">Miféle <em>head</em>? Miről beszélsz?</h2>

<p>Egy korábbi leírásban már olvashattál arról itt is, hogy az érvényes HTML dokumentumban meg kell adni egy <code>doctype</code> elemet — ez adja meg, hogy milyen típusú HTML-t fogunk használni, hogy a böngésző aztán a megfelelő szabályokat alkalmazza. Minderről <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa">bővebben a 14. leírásban fogunk beszélni</a>, egyelőre elég annyit rögzítenünk, hogy a <code>doctype</code> megszabja, hogy a dokumentumnak tartalmaznia kell egy <code>html</code> elemet, ez pedig egy <code>head</code> és egy <code>body</code> elemet. Az időd nagy részét a <code>body</code> („törzs”) elemben fogod eltölteni, mivel ide kerül a dokumentum teljes tartalma. A <code>head</code> („fej”) elemnek látszólag kisebb szerepe van, mivel a <code>title</code> („cím”) elem kivételével semmi nem lesz látható a látogatók számára azok közül, amiket ide írsz. Viszont ebbe a részbe kerülnek a böngészők számára szóló utasítások, és itt tárolhatsz a dokumentumról extra információkat — más néven metaadatokat.</p>

<h2 id="nyelv">A dokumentum elsődleges nyelvének beállítása</h2>

<p>Van egy olyan rövid információ a dokumentumról, amely nem a <code>head</code> elembe, hanem annak a szülőjébe, a <code>html</code> elembe kerül. Ez pedig nem más, mint a dokumentum természetes nyelve. A természetes nyelv alatt az <em>emberi</em> nyelvet értem, mégpedig hogy angol, francia vagy magyar. Ez segít a képernyő-felolvasóknak, mivel például az „eleven” szót másképp kell kiolvasni angolul vagy magyarul, de segíthet a keresőrobotoknak is. Mindig hasznos, ha megadod a dokumentum elsődleges nyelvét, különösen akkor, ha nemzetközi olvasótábornak írsz; mégsem látni sok olyan oldalt, amelyik megteszi ezt. A következőképpen állíthatod be a nyelvet:</p>

<pre><code>&lt;html lang=&quot;hu-HU&quot;&gt;
  ...
&lt;/html&gt;</code></pre>

<p class="note">A dokumentum egyes részeinek is beállíthatsz egy nyelvet a <code>lang</code> attribútum használatával az adott elemeken, például <code>&lt;span lang=&quot;fr&quot;&gt;Bonjour&lt;/span&gt;</code>.</p>

<p>Az attribútum, amiben a nyelvet megadhatod, a használt <code>doctype</code>-tól függ. <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040429.092928424">A W3C szerint</a>:</p>

<blockquote>HTML esetében csak a <code>lang</code> attribútumot használjuk; a <code>text/html</code> formában szolgáltatott XHTML 1.0 esetében használhatjuk a <code>lang</code> és <code>xml:lang</code> attribútumokat; és az XML formában szolgáltatott XHTML esetében pedig csak az <code>xml:lang</code> attribútumot.</blockquote>

<p>A nyelv kódja lehet egy kétbetűs kód, mint például az <code>en</code> az angolhoz, négybetűs kód, mint például az <code>en-US</code> az amerikai angolhoz, vagy más, ritkán használt kód is. A kétbetűs kódok az <a href="http://en.wikipedia.org/wiki/ISO_639-1">ISO 639-1</a> alatt találhatóak meg.</p>

<h2 id="cim">A dokumentum megítélése a címe alapján</h2>

<p>A <code>head</code> egyik legfontosabb része a <code>title</code> elem. Gyakorlatilag az összes böngészőben és kliens eszközök többségén a title elemben található szöveg jelenik meg — a weblap neveként — az ablak fejlécében (ez a böngésző ablakát körülvevő keret felső része). Ez az első dolog, amit a látogatók általában meglátnak egy weblap megnyitásakor, ezért rendkívül fontos. Továbbá, a kisegítő megoldások, mint például a képernyő-felolvasók, ezt adják meg először a felhasználóiknak, így ebből szűrhetik le először, hogy mire számíthatnak majd az oldalon; de a keresőrobotok is nagyon hasonlóan működnek, így ha egy könnyen megérthető és a jó kulcsszavakat tartalmazó címet adsz az oldaladnak, akkor az esélyed arra, hogy a keresőkön keresztül megtaláljanak, drasztikusan megnő. Vegyük például a következő HTML dokumentumot (<a href="headexample.html">headexample.html</a> a zip fájlban), és nyissuk meg egy böngészőben.</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
  &lt;head&gt;
    <strong>&lt;title&gt;Ez egy példa cím&lt;/title&gt;</strong>
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ha megnyitod ezt az oldalt, láthatod, hogy a title elem tartalma az ablak fejlécében és navigáció fölött a fülön is megjelenik.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/head-figure1.png" alt="A title elem a weblap fejlécében és a fülön is megjelenik" />
<p class="comment">1. ábra: A <code>title</code> elem megjelenítése a böngészőben</p>

<p>Sok leírást találhatsz a weben arról, hogy hogyan adhatsz jó címet az oldalaidnak, ezek többsége a keresőoptimalizálással (SEO) kapcsolatos. Ne ess túlzásokba, amikor ezeket látod: a keresőket esetleg becsaphatod egy optimalizált címmel, és talán megszerezhetsz egy ideig egy jobb találati pozíciót, de jobban jársz, ha inkább egy rövid, informatív címet adsz a dokumentum tartalmáról. A „Kutyák tenyésztése — tippek a farkaskutyákról” sokkal jobban olvasható, mint mondjuk a „Kutyák, farkaskutyák, tenyésztés, kutya, tipp, ingyen, kedvenc”.</p>

<h2 id="kulcsszo">Kulcsszavak és leírás hozzáfűzése</h2>

<p>A következő lépés első látásra talán feleslegesnek tűnhet, mivel ezek az elemek soha nem jelennek meg közvetlenül a látogató előtt: a leírás és a kulcsszavak. Mindkettőt <code>meta</code> elemeken keresztül adhatjuk hozzá a <code>head</code> elemhez, amint az az alábbi példán látszik, a Yahoo! Eurosport oldaláról (<a href="headwithmeta.html">headwithmeta.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Yahoo! UK &amp; Ireland Eurosport—Sports News | Live Scores | Sport&lt;/title&gt;
  <strong>  &lt;meta name=&quot;description&quot;</strong> content=&quot;Latest sports news and live scores from Yahoo! Eurosport UK. Complete sport coverage with Football results, Cricket scores, F1, Golf, Rugby, Tennis and more.&quot;&gt;
    <strong>&lt;meta name=&quot;keywords&quot; </strong>content=&quot;eurosport,sports,sport,sports news,live scores,football,cricket,f1,golf,rugby,tennis,uk,yahoo&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ha megnyitod ezt az oldalt a böngésződben, semmit nem fogsz látni az oldalon. Ha viszont feltöltöd a lapot a netre, és egy kereső beindexeli, akkor a megadott leírás megjelenik majd a hivatkozás alatt a találati listában, amint az a 2. ábrán látható:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/head-figure2.gif" alt="A leírás megjelenik a keresők találati oldalán" />
<p class="comment">2. ábra: A leírás megjelenik a keresők találati oldalán</p>

<p>Ez az információ így már kritikus lehet a lehetséges látogatók szempontjából, mivel ennek alapján dönti el, hogy rákattint a találatra vagy nem. A leírásoknak van egy másik haszna is — egyes böngészőkben a leírás extra információként jelenik meg, ha a felhasználó az oldalt elmenti a kedvencek közé, ahogy az a 3. ábrán látható:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/head-figure3.png" alt="A leírás a kedvencek közé mentéskor is megjelenhet" />
<p class="comment">3. ábra: A leírás egyes böngészőkben akkor is megjelenik, ha az oldalt a kedvencek közzé teszed</p>

<p>Szóval, bár nincs azonnali haszna a <code>meta</code> leírás beillesztésének, mégis ennek nagyon fontos szerepe van a weblap sikeressége szempontjából. Ugyanez — bár kisebb mértékben — vonatkozik a hozzáadott kulcsszavakra is.</p>

<p>A szemetelőknek sokéves munkával sikerült elérniük, hogy a keresők már ne vegyék többé túl komolyan a megadott kulcsszavakat, ennek ellenére még mindig hasznosak lehetnek akkor, ha gyorsan át akarsz nézni több dokumentumot egyszerre a tartalom elolvasása és értelmezése nélkül. A <code>meta</code> kulcsszavakat használhatod például egy tartalomkezelő rendszerben, ahol egy script leindexeli őket, így a keresőd gyorsabban fog működni. Soha nem árthat, ha biztosítasz egy módszert az oldalaid keresésére a tartalom átvizsgálása nélkül. Ha több kulcsszavat adsz a meta elemhez, akkor lehetőséget adsz magadnak arra, hogy a jövőben egy gyors és okos keresőt készíthess az oldalaidhoz. Gondolj úgy a kulcsszavakra, mintha kis könyvjelzők lennének, amelyeket egy vastag könyvben hagysz, hogy ezekkel gyorsan megtalálhasd, amit keresel anélkül, hogy a teljes fejezetet át kellene olvasnod.</p>

<h2 id="megjelenes">Mi a helyzet a megjelenéssel? Stílusok hozzáadása</h2>

<p>A következő dolog, amit a <code>head</code> elemhez hozzáadhatsz a dokumentumban, az a stílusozás, amelyet CSS (<em>Cascading Style Sheets</em>) segítségével valósíthatsz meg. Ezt beépítheted közvetlenül a <code>head</code> elembe a <code>style</code> elem segítségével, mint az alábbi példában (<a href="headinlinestyles.html">headinlinestyles.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Kutyatenyésztés – Tippek farkaskutyákról&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Hogy tenyésszünk farkaskutyákat, tippek a helyes tenyésztésről és információk a tenyésztéssel kapcsolatos gyakori esetekről.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;kutyák,farkaskutya,tenyésztés,kutya,tippek,ingyen,kedvenc&quot;&gt;
 <strong> &lt;style type=&quot;text/css&quot;&gt;</strong>
    body {
      background: #000;
      color: #ccc;
      font-family: helvetica,arial,sans-serif;
    }
  <strong>&lt;/style&gt;</strong>
&lt;/head&gt;
&lt;body&gt;
Teszt!
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ha ezt a kódot megnyitod a böngésződben, csak egy szürke „Teszt!” feliratot fogsz látni fekete háttéren, amelynek a betűtípusa Helvetica vagy Arial lesz, a használt rendszertől függően. A <code>style</code> elem tartalmazhat egy <code>media</code> attribútumot is, amelyben megadhatod, milyen típusú eszközön akarod ezt a stílust alkalmazni; például akkor akarod használni ezt a stílust, ha az oldal egy képernyőn jelenik meg, egy kézi eszközön vagy nyomtatáskor? Több média típus közül is választhatsz, amelyek között az alábbiak a leghasznosabbak:</p>

<ul>
  <li><code>screen</code> — képernyőn való megjelenítéskor használhatod.</li>
  <li><code>print</code> — ebben megadhatod, hogyan nézzen ki a dokumentum nyomtatáskor.</li>
  <li><code>handheld</code> — ezzel adhatod meg a dokumentum megjelenését mobil- és más kisméretű eszközökön.</li>
  <li><code>projection</code> — HTML prezentáció készítéséhez használhatod, amelyet például az Opera Show is támogat.</li>
</ul>

<p>Ha például nyomtatáskor más színeket és nagyobb betűket akarsz használni, mint a képernyőn, akkor az első <code>style</code> blokk után megadhatsz egy másikat, amelyben megadod a <code>media</code> attribútumot <code>print</code> értékkel, amint az alábbi kódban látható (a teljes kódot a <a href="headinlinestylesmedia.html">headinlinestylesmedia.html</a> fájlban találod):</p>

<pre>&lt;style type=&quot;text/css&quot; <strong>media=&quot;print&quot;</strong>&gt;
  body {
    background: #fff;
    color: #000;
    font-family: helvetica, arial, sans-serif;
    font-size: 300%;
  }
&lt;/style&gt;
</pre>

<p>Mostantól, ha ki akarod nyomtatni a lapot, a böngésző a <code>print</code> típusú stíluslapot fogja használni a dokumentumhoz a <code>screen</code> típusú helyett. Te is kipróbálhatod, ha megnyitod a <a href="headinlinestylesmedia.html">headinlinestylesmedia.html</a> fájlt, és megnézed a nyomtatási előnézetet. Az eredményt a 4. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/head-figure4.png" alt="Ugyanaz a lap normál és nyomtatási stílussal" />
<p class="comment">4. ábra: Ugyanaz a lap képernyőhöz és nyomtatáshoz való stílussal</p>

<h2 id="dinamikus">Dinamikus funkciók hozzáadása JavaScripttel</h2>

<p>Egy másik dolog, amelyet a head elemhez hozzáadhatsz, az a böngésző által futtatható scriptek — más szóval „kliens oldali scriptek” —, amelyeket JavaScriptben írhatsz meg. Ahogy már <a href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">a 4. leírásban olvashattad</a>, a JavaScript dinamikus működést ad a statikus HTML dokumentumokhoz, például animációs effekteket, adatellenőrzést vagy más olyan dolgokat, amelyeket bizonyos felhasználói műveletek válthatnak ki.</p>

<p>A JavaScriptet a <code>script</code> taggel adhatod hozzá az oldaladhoz. Amikor a böngésző találkozik egy ilyen elemmel, azonnal megállítja a dokumentum feldolgozását, és a feldolgozás folytatása előtt megpróbálja végrehajtani az elemben található kódot. Így aztán ha azt szeretnéd, hogy a JavaScripted még a dokumentum betöltése előtt lefusson, akkor a <code>head</code> elemben kell megadnod. Az alábbi scripttel például figyelmeztetheted a felhasználót, hogy egy bizonyos hivatkozás egy másik kiszolgálóra fogja vinni (<a href="headscript.html">headscript.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Kutyatenyésztés – Tippek farkaskutyákról&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Hogy tenyésszünk farkaskutyákat, tippek a helyes tenyésztésről és információk a tenyésztéssel kapcsolatos gyakori esetekről.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;kutyák,farkaskutya,tenyésztés,kutya,tippek,ingyen,kedvenc&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body {
      background: #000;
      color: #ccc;
      font-family: helvetica,arial,sans-serif;
    }
    a { color: #fff }
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body {
      background: #fff;
      color: #000;
      font-family: helvetica,arial,sans-serif;
      font-size: 300%;
    }
  &lt;/style&gt;
  <strong>&lt;script&gt;</strong>
    function leave() {
      return confirm(&quot;Ezzel átugrasz egy másik oldalra,\n biztos, hogy ezt akarod?&quot;)
    }
  <strong>&lt;/script&gt;</strong>
&lt;/head&gt;
&lt;body&gt;
Teszt!
&lt;a href=&quot;http://cukisag.blog.hu&quot; <strong>onclick=&quot;return leave()&quot;</strong>&gt;Cukiság blog&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ha a fenti példát megnyitod a böngésződben, és rákattintasz a hivatkozásra, akkor felugrik egy ablak, amelyben meg kell erősítened a műveletet. Ez csak egy gyors példa volt a scriptekre, és nagyon távol áll a manapság használt legjobb módszerektől. A későbbi leírásokban fogunk még foglalkozni a JavaScript módszerekkel, és részletesebben is fogunk beszélni a JavaScript technikákról, egyelőre nem kell vele túl sokat foglalkoznod.</p>

<h2 id="allj">Állj! A beágyazott CSS és JavaScript nem jó ötlet!</h2>

<p>Kemény szavak, tudom, de egy dolgot mindenképpen az eszedbe kell vésned, mielőtt weboldalakat írnál: próbáld meg a kódodat minél jobban újrafelhasználhatóvá tenni. Ha site jellegű stílusokat adsz hozzá minden egyes lapodhoz külön-külön, annak egyrészt nincs sok értelme — ráadásul sokkal nehezebb lesz a site-ot karbantartani, és feleslegesen lesznek nagyobbak a dokumentumaid.</p>

<p>Sokkal jobb, ha a stílusokat és a scripteket külső fájlokba teszed, és a HTML fájlokban csak betöltöd ezeket, ahol szükséges, így ha változtatni akarsz rajtuk valamit, elég egy helyen megtenned. JavaScript esetében ezt továbbra is a <code>script</code> elemmel teheted meg, mégpedig úgy, hogy nem írsz kódot az elemen belül, és a <code>link</code> attribútum helyett az <code>src</code> attribútumot használod, ahogy az alábbi példában tettük (<a href="externaljs.html">externaljs.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Kutyatenyésztés – Tippek farkaskutyákról&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Hogy tenyésszünk farkaskutyákat, tippek a helyes tenyésztésről és információk a tenyésztéssel kapcsolatos gyakori esetekről.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;kutyák,farkaskutya,tenyésztés,kutya,tippek,ingyen,kedvenc&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body {
      background: #000;
      color: #ccc;
      font-family: helvetica,arial,sans-serif;
    }
    a { color: #fff }
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body {
      background: #fff;
      color: #000;
      font-family: helvetica,arial,sans-serif;
      font-size: 300%;
    }
  &lt;/style&gt;
  <strong>&lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/leaving.js&quot;&gt;&lt;/script&gt;</strong>
&lt;/head&gt;
&lt;body&gt;
Teszt!
&lt;a href=&quot;http://cukisag.blog.hu&quot; onclick=&quot;return leave()&quot;&gt;Cukiság blog&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>CSS esetében már nem ilyen egyszerű a dolog. A <code>style</code> elemnek ugyanis nincs <code>src</code> attribútuma, így helyette a <code>link</code> elemet kell használod. Ebben megadhatsz egy külső css fájlt importálásra a <code>href</code> attribútum használatával, majd a <code>media</code> attribútummal — ugyanúgy, mint korábban — megadhatod, hogy milyen eszközön akarod használni ezt a stílust: képernyőn, nyomtatáskor, stb. Ha a CSS-t és a JavaScriptet is külső fájlban adod meg, akkor jelentősen csökkentetted a <code>head</code> elem méretét, ami az alábbi példán is jól látszik (<a href="externalall.html">externalall.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Kutyatenyésztés – Tippek farkaskutyákról&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Hogy tenyésszünk farkaskutyákat, tippek a helyes tenyésztésről és információk a tenyésztéssel kapcsolatos gyakori esetekről.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;kutyák,farkaskutya,tenyésztés,kutya,tippek,ingyen,kedvenc&quot;&gt;
  <strong>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;styles.css&quot;&gt;</strong>
  <strong>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;print&quot; href=&quot;printstyles.css&quot;&gt;</strong>
  &lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/leaving.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Teszt!
&lt;a href=&quot;http://cukisag.blog.hu&quot; onclick=&quot;return leave()&quot;&gt;Cukiság blog&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>További előnyei is vannak, ha a stílusaidat és a scripteket külön fájlokban tartod:</p>

<ol>
  <li>Gyorsabbá teszed vele a letöltést a látogatóid számára, mert bár le kell tölteniük néhány külön fájlt a dokumentum mellé, de ezt csak egyszer kell megtenniük, mivel ezeket a különböző lapokon újra felhasználhatod, ezáltal összességében kevesebbet kell letölteni. Ráadásul a CSS és a JavaScript fájlok többnyire bekerülnek a gyorsítótárba, így amikor legközelebb látogatják meg az oldalt, a fájlok már ott lesznek a gépen, és nem kell újra letölteni őket.</li>
  <li>Könnyebb lesz a karbantartás és a javítás. Ha a stílusok és a scriptek az egész site-hoz — ami akár több ezer dokumentumból is állhat — egyetlen helyen találhatóak, akkor a módosításokat elég egyetlen fájlban elvégezned, és nem kell hozzányúlj az akár több ezernyi dokumentumhoz.</li>
</ol>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ennyi fért ebbe a leírásba. Megismerhetted a HTML dokumentumok head elemének különböző részeit, amelyek a következők:</p>

<ul>
  <li>A <code>title</code> elem, ami megadja a dokumentum címét.</li>
  <li>A <code>meta</code> elemek, amelyekben a dokumentum leírását, valamint a későbbi indexelés elősegítésére a kulcsszavakat adhatod meg.</li>
  <li>A <code>link</code> elemek, amelyekkel külső CSS fájlokat tölthetsz be.</li>
  <li>A <code>script</code> elemek külső JavaScript fájlok betöltéséhez.</li>
</ul>

<p>Győződj meg róla, hogy a fentieket helyesen használod, és akkor a dokumentumod gyors, könnyen kereshető és érthető lesz.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Szokás szerint az alábbi kérdésekkel ellenőrizheted, hogy sikerült-e megértened a témát.</p>

<ul>
  <li>Miért hasznos megadni a dokumentum leírását a <code>meta</code> elemben, amikor az úgysem jelenik meg a képernyőn?</li>
  <li>Milyen előnye van annak, ha a JavaScriptet a <code>head</code> elemben adod meg, és nem a <code>body</code>-ban?</li>
  <li>Hogyan használhatod ki a böngésző gyorsítótárát, és mit kell tenned ezért?</li>
  <li>Mivel a keresők előnyben részesítik a dokumentum címét, nem lenne jobb, ha a címben adjuk meg a kulcsszavakat? Mi ennek a módszernek a hátránya?</li>
  <li>Mivel az oldal címe sokszor unalmas, nem lenne jó kiemelni benne egyes szavakat a <code>b</code> elemmel? Lehetséges ez?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/12-a-html-alapjai/" title="hivatkozás a sorozat előző leírására">Előző leírás — A HTML alapjai</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa">Következő leírás — Megfelelő doctype választása a HTML dokumentumokhoz</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/285-13-a-html-ltheadgt-eleme/chrisheilmann.jpg" alt="Chris Heilmann" title="Chris Heilmann" />
<p class="comment">Fotó: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Miután belekontárkodott a rádiózásba, Chris Heilmann tíz évig dolgozott webfejlesztőként. Jelenleg a Yahoo!-nál dolgozik Angliában mint oktató és vezető fejlesztő, és a kódminőséget ellenőrzi az európai és ázsiai kirendeltségeknél.</p>

<p>Chris a <a href="http://wait-till-i.com/">Wait till I come</a> oldalon blogol, és „codepo8” néven található meg több közösségi oldalon is.</p>
