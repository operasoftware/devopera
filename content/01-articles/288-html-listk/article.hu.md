Title: HTML listák
----
Date: 2009-08-17 08:47:43
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Előző leírás — Szöveges részek megjelölése HTML-ben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Következő leírás — Képek a HTML-ben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>A listákat arra használjuk, hogy az egymáshoz kapcsolódó információkat egy csoportba gyűjtsük össze, így ezek világosan kapcsolódnak egymáshoz, ezáltal könnyen olvashatóak. A modern webfejlesztésben a listák gyakori igáslovak, sokszor használják például a navigációban, de az általános tartalmakban is.</p>

<p>A listák strukturális szempontból is kiválóak, mivel a segítségükkel egy könnyen kezelhető, könnyen hozzáférhető és jól strukturált dokumentumot hozhatunk létre. Ezen kívül a listák rendkívül praktikusak is — az extra elemek segítenek abban, hogy különböző CSS stílusokat kapcsolhass hozzájuk (a CSS-ről a tanfolyam egy későbbi részében fogunk beszélni — először nézd meg a <ins>Listák és hivatkozások stílusozása</ins> leírást, majd a <a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzékben</a> megtalálod a többi CSS-ről szóló leírást is).</p>

<p>Ebben a leírásban megnézzük, hogy milyen listatípusokat érhetünk el a HTML-ben, mikor és hogyan használhatjuk ezeket, és hogyan rendelhetünk hozzájuk pár egyszerű stílust. A leírás tartalma a következő (nézd csak — egy lista!):</p>

<ul>
  <li><a href="#listak_tipusa">A listák három típusa</a>
<ul>
  <li><a href="#rendezetlen">Rendezetlen lista</a>
<ul>
  <li><a href="#rendezetlen_jeloles">Rendezetlen lista jelölése</a></li>
</ul>
</li>
  <li><a href="#rendezett">Rendezett lista</a>
<ul>
  <li><a href="#rendezett_jeloles">Rendezett lista jelölése</a></li>
  <li><a href="#rendezett_kezdes">Rendezett lista kezdése 1-től eltérő számmal</a></li>
</ul>
</li>
  <li><a href="#definicios">Definíciós lista</a></li>
</ul>
</li>
  <li><a href="#valasztas">Választás a listatípusok között</a></li>
  <li><a href="#kulonbseg">A különbség a szöveg és a HTML lista között</a></li>
  <li><a href="#egybeagyazas">Listák egybeágyazása</a></li>
  <li><a href="#pelda">Példa lépésről lépésre</a>
<ul>
  <li><a href="#foldal">A főoldal kódja</a></li>
  <li><a href="#stilus">Adjunk hozzá stílust</a></li>
  <li><a href="#recept">A recept lap</a></li>
  <li><a href="#recept_jeloles">A recept lap kódja</a></li>
  <li><a href="#recept_stilus">A recept lap stílusozása</a></li>
</ul>
</li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#olvasnivalo">További olvasnivaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="listak_tipusa">A listák három típusa</h2>

<p>A HTML-ben három típusú lista van:</p>

<ul>
  <li>rendezetlen lista — egymással kapcsolatban álló elemek csoportosítására, ha nem számít a sorrend.</li>
<li>rendezett lista — egymással kapcsolatban álló elemek csoportosítására, ha számít a sorrend.</li>
  <li>definíciós lista — név/érték párok megjelenítésére szolgál, mint például kifejezések és azok definíciói, vagy időpontok a hozzájuk tartozó eseménnyel.</li>
</ul>

<p>Mindegyiknek meghatározott célja és értelme van — a különböző típusú listákat nem lehet egymás között felcserélni.</p>

<h3 id="rendezetlen">Rendezetlen lista</h3>

<p>A rendezetlen vagy pontozott listákat akkor használják, ha a lista elemeinek a sorrendje nem fontos. Ilyen például egy bevásárlólista:</p>

<ul>
  <li>tej</li>
  <li>kenyér</li>
  <li>vaj</li>
  <li>kávé</li>
</ul>

<p>Ezek az elemek mind ugyanannak a listának a részei, viszont bármilyen sorrendben írhatod őket, a lista ettől még nem változik:</p>

<ul>
  <li>kenyér</li>
  <li>kávé</li>
  <li>tej</li>
  <li>vaj</li>
</ul>

<p>A CSS-ben lecserélheted a pontokat néhány más beépített típusra, vagy használhatsz saját képeket is, de akár pontok nélkül is megjelenítheted a listát — erről egy kicsivel később fogunk beszélni ebben a leírásban, és egy későbbi leírásban részletesebben is tárgyaljuk.</p>

<h4 id="rendezetlen_jeloles">Rendezetlen lista jelölése</h4>

<p>A rendezetlen listákat az <code>&lt;ul&gt;&lt;/ul&gt;</code> tagek jelölik, amelyen belül az elemeket az <code>&lt;li&gt;&lt;/li&gt;</code> tagekkel fogjuk közre:</p>

<pre>&lt;ul&gt;
  &lt;li&gt;kenyér&lt;/li&gt;
  &lt;li&gt;kávé&lt;/li&gt;
  &lt;li&gt;tej&lt;/li&gt;
   &lt;li&gt;vaj&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="rendezett">Rendezett lista</h3>

<p>A rendezett vagy számozott listákat akkor használják, amikor a lista elemei egy meghatározott sorrendben követik egymást. Jó példa erre egy recept utasításainak a listája, amelyeket szigorúan egymás után kell végrehajtanunk, ha azt akarjuk, hogy a recept működjön:</p>

<ol>
  <li>Gyűjtsük be a szükséges hozzávalókat</li>
  <li>Keverjük össze a hozzávalókat</li>
  <li>Tegyük be a keveréket egy sütőedénybe</li>
  <li>Süssük a sütőben egy órán keresztül</li>
  <li>Vegyük ki a sütőből</li>
  <li>Hagyjuk hűlni tíz percig</li>
  <li>Szolgáljuk fel</li>
</ol>

<p>Ha a lista elemeit átrendezzük valamilyen más sorrendbe, akkor az információ értelmét veszti:</p>

<ol>
  <li>Gyűjtsük be a szükséges hozzávalókat</li>
  <li>Süssük a sütőben egy órán keresztül</li>
  <li>Vegyük ki a sütőből</li>
  <li>Szolgáljuk fel</li>
  <li>Tegyük be a keveréket egy sütőedénybe</li>
  <li>Hagyjuk hűlni tíz percig</li>
  <li>Keverjük össze a hozzávalókat</li>
</ol>

<p>A rendezett listákat többféle számozással és alfabetikus rendszerrel is jelölhetjük — egyszóval számokkal és betűkkel. Az alapértelmezett jelölés a böngészőkben a decimális számozás, de további lehetőségek is vannak:</p>

<ul>
  <li>Betűk
<ul>
  <li>ASCII kisbetűk  (a, b, c…)</li>
  <li>ASCII nagybetűk (A, B, C…).</li> 
  <li>Klasszikus kis görög betűk: (?, ß, ?…)</li>
</ul></li>
  <li>Számok
<ul>
  <li>Decimális számok (1, 2, 3…) </li>
  <li>Decimális számok nullával kiegészítve (01, 02, 03…)</li>
  <li>Kisbetűs római számok (i, ii, iii…) </li>
  <li>Nagybetűs római számok (I, II, III…)</li>
  <li>Tradicionális grúz számozás (an, ban, gan…) </li>
  <li>Tradicionális örmény számozás (mek, yerku, yerek…)</li>
</ul></li>
</ul>

<p>A lista stílusát ebben az esetben is CSS-sel változtathatod meg, ha szükséges.</p>

<h4 id="rendezett_jeloles">Rendezett lista jelölése</h4>

<p>A rendezett listákat az <code>&lt;ol&gt;&lt;/ol&gt;</code> tagek jelölik, amelyen belül az elemeket az <code>&lt;li&gt;&lt;/li&gt;</code> tagekkel fogjuk közre:</p>

<pre>&lt;ol&gt;
  &lt;li&gt;Gyűjtsük be a szükséges hozzávalókat&lt;/li&gt;
  &lt;li&gt;Keverjük össze a hozzávalókat&lt;/li&gt;
  &lt;li&gt;Tegyük be a keveréket egy sütőedénybe&lt;/li&gt;
  &lt;li&gt;Süssük a sütőben egy órán keresztül&lt;/li&gt;
  &lt;li&gt;Vegyük ki a sütőből&lt;/li&gt;
  &lt;li&gt;Hagyjuk hűlni tíz percig&lt;/li&gt;
  &lt;li&gt;Szolgáljuk fel&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h4 id="rendezett_kezdes">Rendezett lista kezdése 1-től eltérő számmal</h4>

<p>Lehetőség van arra is, hogy egy rendezett lista ne 1-gyel kezdődjön (vagy i-vel, I-vel, stb.). Ezt a start attribútummal érhetjük el, amelyikben egy numerikus értéket kell megadnunk (abban az esetben is, ha a CSS-ben megváltoztattuk a lista típusát alfabetikus karakterekre vagy római számokra a <code>list-style-type</code> tulajdonsággal). Ez akkor hasznos, ha van egy összefüggő listád, amelyet közben meg akarsz szakítani egy megjegyzés vagy más kapcsolódó információ beszúrásával. Például a fenti kódot így módosíthatjuk:</p>

<pre>&lt;ol&gt;
  &lt;li&gt;Gyűjtsük be a szükséges hozzávalókat&lt;/li&gt;
  &lt;li&gt;Keverjük össze a hozzávalókat&lt;/li&gt;
  &lt;li&gt;Tegyük be a keveréket egy sütőedénybe&lt;/li&gt;
&lt;/ol&gt;

&lt;p class=&quot;note&quot;&gt;Mielőtt betesszük a hozzávalókat az edénybe, melegítsük fel a sütőt 180 Celsius fokra/350 Farenheit fokra, hogy készen álljunk a következő lépésre&lt;/p&gt;

&lt;ol start=&quot;4&quot;&gt;
  &lt;li&gt;Süssük a sütőben egy órán keresztül&lt;/li&gt;
  &lt;li&gt;Vegyük ki a sütőből&lt;/li&gt;
  &lt;li&gt;Hagyjuk hűlni tíz percig&lt;/li&gt;
  &lt;li&gt;Szolgáljuk fel&lt;/li&gt;
&lt;/ol&gt;
</pre>

<p>Ez a következő eredményt adja:</p>

<ol>
  <li>Gyűjtsük be a szükséges hozzávalókat</li>
  <li>Keverjük össze a hozzávalókat</li>
  <li>Tegyük be a keveréket egy sütőedénybe</li>
</ol>

<p class="note">Mielőtt betesszük a hozzávalókat az edénybe, melegítsük fel a sütőt 180 Celsius fokra/350 Farenheit fokra, hogy készen álljunk a következő lépésre</p>

<ol start="4">
  <li>Süssük a sütőben egy órán keresztül</li>
  <li>Vegyük ki a sütőből</li>
  <li>Hagyjuk hűlni tíz percig</li>
  <li>Szolgáljuk fel</li>
</ol>

<p class="note">Jó tudni, hogy ez az attribútum elavultként van jelölve a HTML specifikáció utolsó verziójában, ami azt jelenti, hogy szigorú doctype esetén az oldalad nem fog átmenni a validáláson. Ez különösnek tűnhet, mivel az attribútumnak amúgy van értelme, ráadásul nincs CSS megfelelője sem. Ebből is látható, hogy a HTML validálása egy hasznos és követendő cél, de nem abszolút értelemben. Ráadásul van még egy pont, amire támaszkodhatunk: a <code>start</code> attribútum a HTML 5 specifikációjában már nem elavult (azt tanúsítja a <a href="http://www.w3.org/TR/2008/WD-html5-diff-20080122/">HTML 5 és HTML 4 különbségeiről</a> szóló dokumentum is). Ha fel akarod használni ezt a funkcionalitást egy szigorú HTML 4 lapon, és mindenképp azt szeretnéd, hogy validáljon, akkor használd helyette a CSS Countereket.</p>

<h3 id="definicios">Definíciós lista</h3>

<p>A definíciós listák egyes elemeket kapcsolnak össze a definíciójukkal egy lista formájában. Ha például meg akarod adni a bevásárlólistán található elemek leírását, akkor ezt megteheted egy definíciós listával:</p>

<dl class="example">
  <dt>tej</dt>
  <dd>Egy fehér, folyékony tejtermék.</dd>
  <dt>kenyér</dt>
  <dd>Sütött étel lisztből vagy korpából készítve.</dd>
  <dt>vaj</dt>
  <dd>Egy sárgás, szilárd tejtermék.</dd>
  <dt>kávé</dt>
  <dd>A kávébab termése.</dd>
</dl>

<p>A kifejezés és a definíció együtt egy definíciós csoport (vagy egy név-érték csoport). Annyi definíciós csoportot készíthetsz, amennyit csak akarsz, de legalább egy kifejezésnek és egy definíciónak szerepelnie kell mindegyik csoportban. Nem lehet kifejezésed definíció nélkül, és definíciód sem kifejezés nélkül.</p>

<p>Egy kifejezéshez kapcsolhatsz több definíciót is. Például a „kávé” kifejezésnek több értelme is lehet, és ezeket mind megadhatod:</p>

<dl class="example">
  <dt>kávé</dt>
  <dd>egy ital pörkölt, őrölt kávébabból főzve</dd>
  <dd>egy csésze kávé</dd>
  <dd>a sötétbarna szín egyik árnyalata</dd>
</dl>

<p>Hasonlóan, ugyanahhoz a definícióhoz több kifejezés is tartozhat. Ez akkor hasznos, ha több kifejezésnek ugyanaz az értelme az adott kontextusban:</p>

<dl class="example">
  <dt>szénsavas üdítő</dt>
  <dt>szörp szódával</dt>
  <dt>kóla</dt>
  <dd>Egy édes, szénsavas ital</dd>
</dl>

<p>A definíciós listák különböznek a többi listától, mivel kifejezéseket és azok definícióit tartalmazzák egyszerű listaelemek helyett.</p>

<p>Éppen ezért a definíciós listákat a <code>&lt;dl&gt;&lt;/dl&gt;</code> tagek határolják. Ezen belül meg kell adnod legalább egy <code>&lt;dt&gt;&lt;/dt&gt;</code> elemet (a kifejezésnek) és egy <code>&lt;dd&gt;&lt;/dd&gt;</code> elemet (a definíciónak); a <code>&lt;dt&gt;&lt;/dt&gt;</code> elem mindig az első kell legyen a listában.</p>

<p>Egy egyszerű definíciós lista a kifejezésekkel és a definíciókkal így néz ki:</p>

<pre>&lt;dl&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dd&gt;A kifejezés definíciója&lt;/dd&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dd&gt;A kifejezés definíciója&lt;/dd&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dd&gt;A kifejezés definíciója&lt;/dd&gt;
&lt;/dl&gt;
</pre>

<p>Ez a következőképpen jelenik meg:</p>

<dl class="example">
  <dt>Kifejezés</dt>
  <dd>A kifejezés definíciója</dd>
  <dt>Kifejezés</dt>
  <dd>A kifejezés definíciója</dd>
  <dt>Kifejezés</dt>
  <dd>A kifejezés definíciója</dd>
</dl>

<p>A következő példában egy kifejezéshez több definíciót is megadtunk, és fordítva:</p>

<pre>&lt;dl&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dd&gt;A kifejezés definíciója&lt;/dd&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dt&gt;Kifejezés&lt;/dt&gt;
  &lt;dd&gt;Az előző két kifejezés közös definíciója&lt;/dd&gt;
  &lt;dt&gt;Kifejezés két különböző értelemmel&lt;/dt&gt;
  &lt;dd&gt;A kifejezés első definíciója&lt;/dd&gt;
  &lt;dd&gt;A kifejezés második definíciója&lt;/dd&gt;
&lt;/dl&gt;
</pre>

<p>Ez a következőképpen jelenik meg:</p>

<dl class="example">
  <dt>Kifejezés</dt>
  <dd>A kifejezés definíciója</dd>
  <dt>Kifejezés</dt>
  <dt>Kifejezés</dt>
  <dd>Az előző két kifejezés közös definíciója</dd>
  <dt>Kifejezés két különböző értelemmel</dt>
  <dd>A kifejezés első definíciója</dd>
  <dd>A kifejezés második definíciója</dd>
</dl>

<p>Általában nem szoktunk több kifejezésnek egy definíciót adni, de hasznos lehet tudni róla, hogy van ilyen lehetőség is, ha valamikor mégis szükséged lenne rá.</p>

<h2 id="valasztas">Választás a listatípusok között</h2>

<p>Ha választanod kell a különböző típusú listák között, csak tegyél fel magadnak két egyszerű kérdést:</p>

<ol>
  <li>Kifejezések értelmezésére van szükségem, esetleg név/érték párosokra?
<ul>
  <li>Ha igen, akkor használj definíciós listát.</li>
  <li>Ha nem, akkor ugorj a következő pontra.</li>
</ul>
</li>
  <li>Fontos az elemek sorrendje a listában?
<ul>
  <li>Ha igen, használj rendezett listát.</li>
  <li>Ha nem, használj rendezetlen listát.</li>
</ul>
</li>
</ol>

<h2 id="kulonbseg">A különbség a szöveg és a HTML lista között</h2>

<p>Talán megfordult a fejedben az is, hogy végül is mi a különbség a HTML lista és egy kézzel készített pontozott vagy számozott lista között. Nos, a HTML listának több előnye is van a saját kezűleg készített listával szemben:</p>

<ul>
  <li>Ha meg kell változtatnod a sorrendjét egy számozott listának, akkor a HTML listában egyszerűen felcseréled az elemeket. Ha a számokat kézzel írtad az elemek elé, akkor módosítanod kell a lista elemeinek számozását, akár az egész listán végigmenve — ami végsősorban eléggé unalmas dolog.</li>
  <li>A HTML lista használatakor egyszerűen stílusozhatod a listát. Ha csak egyszerű szöveget használsz, valószínűleg csak valamilyen bonyolult módon oldhatod csak meg az egyes elemek stílusozását.</li>
  <li>A HTML lista használatával a helyes szemantikus struktúrát készítheted el, nem pedig csak egy „listaszerű” megjelenést. Ennek több előnye is van, mivel a képernyő-felolvasók így tudják jelezni a látássérült embereknek, hogy most egy listát olvasnak, és nem csak egy összefüggéstelen számokat és szövegeket olvasnak nekik.</li>
</ul>

<p>De fogalmazhatunk más módon is: <strong>a szöveg és a lista nem ugyanaz</strong>. Ha a lista helyett szöveget használsz, akkor több dolgod lesz vele, és több problémát fog okozni az olvasóidnak is. Szóval, ha a dokumentumodban szükséged van egy listára, mindig használd a megfelelő HTML listát.</p>

<h2 id="egybeagyazas">Listák egybeágyazása</h2>

<p>Egy listaelem tartalmazhat újabb listákat is — ezt nevezzük a listák egybeágyazásának. Nagyon hasznos például a tartalomjegyzékek esetében:</p>

<ol>
  <li>Első fejezet
<ol>
  <li>Első rész</li>
  <li>Második rész </li>
  <li>Harmadik rész </li>
</ol></li>
  <li>Második fejezet</li>
  <li>Harmadik fejezet</li>
</ol>

<p>A kulcs a beágyazott listákhoz az, hogy ne felejtsük el, hogy a belső listának egy bizonyos listaelemhez kell tartoznia. A kódban ezt úgy tehetjük meg, hogy a belső lista teljes egészében a külső lista listaelemében található. A felső lista kódja például így néz ki:</p>

<pre>
&lt;ol&gt;
  <strong>&lt;li&gt;</strong>Első fejezet
    &lt;ol&gt;
      &lt;li&gt;Első rész&lt;/li&gt;
      &lt;li&gt;Második rész &lt;/li&gt;
      &lt;li&gt;Harmadik rész &lt;/li&gt;
    &lt;/ol&gt;
  <strong>&lt;/li&gt;</strong>
  &lt;li&gt;Második fejezet&lt;/li&gt;
  &lt;li&gt;Harmadik fejezet&lt;/li&gt;
&lt;/ol&gt;
</pre>

<p>Figyeld meg, hogy a beágyazott lista a nyitó <code>&lt;li&gt;</code> tag és a hozzá kapcsolódó szöveg („Első fejezet”) után következik, és véget is ér a záró <code>&lt;/li&gt;</code> tag előtt. A beágyazott listákat gyakran használják a weboldalak navigációs menüjének elkészítésére is, mivel ez egy jó módszer a weboldal struktúrájának meghatározására.</p>

<p>Elméletileg akárhány listát egymásba ágyazhatsz, de a gyakorlatban a túl sok lista zavaró lehet. A nagyon hosszú listák esetében hatékonyabb, ha a listát felosztod több kisebb listára, és ezeket címsorokkal jelölöd, vagy egyenesen külön lapokra teszed őket.</p>

<h2 id="pelda">Példa lépésről lépésre</h2>

<p>Az eddigiek jobb megértése érdekében készíteni fogunk egy példát, amelyen lépésről lépésre megyünk végig. Vegyük a következő szituációt:</p>

<p>Egy kis weboldalt készítesz HTML Receptsuli névvel. A főoldalon meg kell jelenítened a receptek kategorizált listáját, amelyek a különböző receptoldalakra hivatkoznak. Mindegyik receptoldal felsorolja a szükséges hozzávalókat, megjegyzéseket fűz a hozzávalókhoz és az előkészítés módjához. A három kategória a „Sütemények” (amelyben az „Egyszerű piskóta”, „Csokis süti” és „Almás teasütemény” receptek vannak); a „Kekszek” (az „ANZAC keksz”, „Dzsemes keksz” és „Teakeksz” receptekkel);  valamint a „Péksütemények” (a „Szezámmagos kifli” és „Pogácsa” receptekkel). A kliens számára mindegy, hogy a kategóriák és a receptek milyen sorrendben jelennek meg; csak azt szeretné, ha a látogatók egyértelműen látnák, hogy mely elemek a kategóriák, és melyek a receptek.</p>

<p>Lépjünk át a website készítésének első lépésein. Most csak a kód elkészítését mutatjuk meg, és adunk egy kevés stílust a listákhoz. A stílusozást egyelőre nem tárgyaljuk részletesen, erről a sorozat egy későbbi részében lesz szó.</p>

<h3 id="fooldal">A főoldal kódja</h3>

<ol>

  <li><p>Készíts egy jól megszerkesztett HTML lapot a <code>doctype</code>, <code>html</code>, <code>head</code> és <code>body</code> elemekkel, és mentsd el <em>listapelda-fooldal.html</em> névvel. Adj hozzá egy főcímet (<code>h1</code>) „HTML Receptsuli” névvel, majd egy alcímet (<code>h2</code>) „Receptek” névvel:</p>

<pre>&lt;h1&gt;HTML Receptsuli&lt;/h1&gt;

&lt;h2&gt;Receptek&lt;/h2&gt;</pre>
</li>

  <li><p>A recepteket három kategóriában kell megjelenítened, és a sorrendjük nem fontos — ehhez a legjobb egy rendezetlen lista, úgyhogy adjuk is hozzá a laphoz:</p>

<pre>&lt;h2&gt;Receptek&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Sütemények&lt;/li&gt;
  &lt;li&gt;Kekszek&lt;/li&gt;
  &lt;li&gt;Péksütemények&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>Az <code>li</code> elemek behúzása nem szükséges, de olvashatóbbá teszi a kódot.</p>
</li>

  <li>
<p>Most pedig hozzá kell adnod a recepteket, mint alelemek, például a „Sütemények” kategória alá az „Egyszerű piskóta”, a „Csokis süti” és az „Almás teasütemény” recepteket. Ehhez készítened kell mindegyik elemhez egy beágyazott listát. Mivel a sorrend itt sem fontos, így újra rendezetlen listát használunk. A példa egyszerűségének érdekében minden recept ugyanarra az egy receptlapra fog mutatni (<a href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">a HTML hivatkozásokról részletesebben majd a 18. leírásban olvashatsz</a>):</p>

<pre>&lt;h2&gt;Receptek&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Sütemények
  <strong>&lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Egyszerű piskóta&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Csokis süti&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Almás teasütemény&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</strong>
  &lt;/li&gt;
  &lt;li&gt;Kekszek
  <strong>&lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;ANZAC keksz&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Dzsemes keksz&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Teakeksz&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</strong>
  &lt;/li&gt;
  &lt;li&gt;Péksütemények
  <strong>&lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Szezámmagos kifli&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;listapelda-recept.html&quot;&gt;Pogácsa&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;</strong>
  &lt;/li&gt;
&lt;/ul&gt;</pre>
</li>

</ol>

<h3 id="stilus">Adjunk hozzá stílust</h3>

<p>A kliensnek tetszik ez az elrendezés, de azt szeretné, ha a kategóriáknál a pöttyök helyett kis nyilak lennének. Azt is szeretné, ha a kategóriák egy vonalban lennének a lap bal szélével. Ezeket úgy érheted el, ha a pontozás helyett definiálsz egy képet, majd beállítod a lista margóját és kitöltését.</p>

<ol>
<li>
<p>Hogy a többi lista megjelenését ne befolyásold az oldalon, rendelj hozzá egy osztályt a saját listádhoz, így lehetőséged van arra, hogy csak ennek a listának a megjelenését módosítsd a stíluslapodon. A „recept-lista” osztály megfelelőnek tűnik:</p>

<pre>&lt;h2&gt;Receptek&lt;/h2&gt;
&lt;ul <strong>class=&quot;recept-lista&quot;</strong>&gt;</pre>
</li>

  <li>Most pedig készítened kell egy stíluslapot a szükséges szabályokkal. A stíluslapot add hozzá a dokumentumhoz a <code>head</code> elemben a <code>style</code> elem segítségével.</li>

  <li><p>Most töröljük ki a fölösleges távolságokat és kitöltéseket a listában. Alapesetben a legtöbb böngésző beállít a listának egy margó (<em>margin</em>) és egy kitöltés (<em>padding</em>) értéket — úgyhogy a legjobb, ha ezeket az elején nullára állítod. Tedd be a következő részt a <code>style</code> tagek közé:</p>

<pre>ul.recept-lista {
  margin-left: 0;
  padding-left: 0;
}</pre>
</li>

  <li><p>A következő lépésben készíts egy képet a lista elemeinek a pontozás helyett — vagy használd az enyémet (lásd a 1. ábrán):</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/288-16-html-listk/example-bullet.gif" alt="Alternatív listaelem kép" />
<p class="comment">1. ábra: Saját kép a listaelemek jelölésére</p>

<p>Most lecserélheted a pontokat a lista elemei mellett, és beállíthatod helyettük a saját képedet, mégpedig úgy, hogy a képet háttérképként adod meg a lista elemein, és hozzáadsz egy kevés kitöltést, hogy a szöveg ne kerüljön rá a megadott háttérképre. Ezt az alábbi CSS szabállyal adhatod meg, a <code>style</code> elem lezárása előtt:</p>

<pre>ul.recept-lista li {
  list-style-type: none;
  background: #fff url(&quot;example-bullet.gif&quot;) 0 0.4em no-repeat;
  padding-left: 10px;
}</pre>
</li>

  <li><p>Végül vissza kell tenned a pontozást a beágyazott listákon, és módosítanod a hátterüket sima fehérre (a második beállítás specifikusabb lesz, mint az első, így felülírja a hátteres stílust). Ne felejtsd el, hogy az előbbi CSS szabályt a belső, beágyazott listák is öröklik, így mindent vissza kell állítanod. Add hozzá az alábbi CSS szabályt még a <code>style</code> elem lezárása elé:</p>

<pre>ul.recept-lista li li {
  list-style-type: disc;
  background: #fff;
}</pre>

</li>

</ol>

<p>Az eredményt a 2. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/288-16-html-listk/screenshot-example-main-page.gif" alt="A főoldal a saját listaelem képekkel" />
<p class="comment">2. ábra: A befejezett főoldal, saját képpel a listaelemekhez</p>

<p><a href="listapelda-fooldal.html">A példaoldalt itt is megnézheted.</a></p>

<h3 id="recept">A recept lap</h3>

<p>A példához az egyszerűség kedvéért csak egy receptoldalt készítünk, mégpedig a piskóta receptjét — de ha van hozzá kedved, nyugodtan készítsd el többit is ennek alapján. A kliens a piskóta receptjét egy szöveges fájlban juttatta el neked, amely így néz ki:</p>

<pre>Egyszerű piskóta
Hozzávalók
3 tojás
100g porcukor
85g önkelő liszt

Megjegyzés a hozzávalókhoz:
  Porcukor - finomra darált fehér cukor.
  Önkelő liszt - előre elkészített liszt és kelesztő keverék (általában hozzáadott sóval és élesztővel).

Elkészítés
  1. Melegítsük a sütőt 190°C-ra.
  2. Zsírozzunk be egy 20 cm-es kerek tortaformát.
  3. Egy közepes méretű tálban keverjük habosra a tojásokat és a porcukrot.
  4. Keverjük bele a lisztet.
  5. Öntsük bele a keveréket az előkészített tortaformába.
  6. Süssük 20 percig az előmelegített sütőben, amíg a tészta teteje könnyű nyomásra vissza nem ugrik.
  7. Hűtsük le a tortaformában az edényszárítón.</pre>

<h3 id="recept_jeloles">A recept lap kódja</h3>

<ol>
<li>
<p>Készíts egy másik helyesen formázott HTML dokumentumot, és mentsd el <em>listapelda-recept.html</em> névvel. Add hozzá a következő címsorokat a HTML <code>body</code> részéhez:</p>

<pre>&lt;h1&gt;Egyszerű piskóta&lt;/h1&gt;
&lt;h2&gt;Hozzávalók&lt;/h2&gt;
&lt;h2&gt;Megjegyzés a hozzávalókhoz&lt;/h2&gt;
&lt;h2&gt;Elkészítés&lt;/h2&gt;</pre>
</li>

<li>
<p>A hozzávalók listája több elemet tartalmaz, de ezeknek a sorrendje nem fontos. Ezért egy rendezetlen listába tesszük őket. Add hozzá a következő részt a megfelelő címsor alá:</p>

<pre>&lt;h2&gt;Hozzávalók&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;3 tojás&lt;/li&gt;
  &lt;li&gt;100g porcukor&lt;/li&gt;
  &lt;li&gt;85g önkelő liszt&lt;/li&gt;
&lt;/ul&gt;</pre>
</li>

<li>
<p>A hozzávalókhoz tartozó megjegyzések azért vannak ott, hogy pontosan definiálják, mik is ezek a hozzávalók. Így valójában meg kell feleltetned a hozzávalót — vagyis a kifejezést — a definíciójával. Pontosan erre szolgál a definíciós lista. Add hozzá a következő kódot a HTML oldaladhoz az előbbi kód mögé:</p>

<pre>&lt;h2&gt;Megjegyzés a hozzávalókhoz&lt;/h2&gt;
&lt;dl&gt;
  &lt;dt&gt;Porcukor&lt;/dt&gt;
  &lt;dd&gt;Finomra darált fehér cukor.&lt;/dd&gt;
  &lt;dt&gt;Önkelő liszt&lt;/dt&gt;
  &lt;dd&gt;Előre elkészített liszt és kelesztő keverék (általában hozzáadott sóval és élesztővel).&lt;/dd&gt;
&lt;/dl&gt;</pre>
</li>

<li>
<p>Az elkészítés lépései értelemszerűen egy jól meghatározott sorrendben követik egymást, így egy rendezett listát fogunk használni. Add hozzá az alábbi kódot a HTML-hez a definíciós lista mögé:</p>

<pre>&lt;h2&gt;Elkészítés&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Melegítsük a sütőt 190°C-ra.&lt;/li&gt;
  &lt;li&gt;Zsírozzunk be egy 20 cm-es kerek tortaformát.&lt;/li&gt;
  &lt;li&gt;Egy közepes méretű tálban keverjük habosra a tojásokat és a porcukrot.&lt;/li&gt;
  &lt;li&gt;Keverjük bele a lisztet.&lt;/li&gt;
  &lt;li&gt;Öntsük bele a keveréket az előkészített tortaformába.&lt;/li&gt;
  &lt;li&gt;Süssük 20 percig az előmelegített sütőben, amíg a tészta teteje könnyű nyomásra vissza nem ugrik.&lt;/li&gt;
  &lt;li&gt;Hűtsük le a tortaformában az edényszárítón.&lt;/li&gt;
&lt;/ol&gt;</pre>
</li>

<li>
</li>
</ol>

<h3 id="recept_stilus">A recept lap stílusozása</h3>

<p>A kliensnek tetszik az eredmény, de szeretné, ha a definiált hozzávalók vastagítottak lennének a jobb olvashatóság érdekében. Ezért adjuk hozzá az alábbi kódot a HTML <code>head</code> részébe:</p>

<pre>&lt;style&gt;
dt {
  font-weight: bold;
}
&lt;/style&gt;</pre>

<p>A végleges oldalt a 3. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/288-16-html-listk/screenshot-example-recipe-page.gif" alt="A recept oldal a megfelelő listákkal és vastagított definíciókkal" />
<p class="comment">3. ábra: A recept oldal a megfelelő listákkal és vastagított definíciókkal</p>

<p><a href="listapelda-recept.html">A végleges oldalt itt is megnézheted.</a></p>

<p>Készen is vagyunk!</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Mostanra már pontosan ismerned kell a három különböző típusú HTML listát. A részletes példán keresztül kipróbálhattad mindhárom listát, megtanulhattad a használatukat, valamint a listák egymásba ágyazását is.</p>

<p>Amint megtanulod a HTML listák helyes használatát, észre fogod venni, hogy egyre gyakrabban használod majd őket. Rengeteg olyan tartalom van a weben, amihez inkább egy lista illene, mégis valamilyen egyszerű generikus elembe kerültek néhány sortöréssel megtoldva. Ez egy kényelmes módszer, de több problémát okoz, mint amennyit megold — ne használd! Mindig készíts szemantikusan helyes listákat, ezzel is segítve az olvasódat. Ez mindenki számára jobb módszer, beleértve téged is, ha később karban kell tartanod az oldaladat.</p>

<h2 id="olvasnivalo">További olvasnivaló</h2>

<ul>
  <li><a href="http://www.alistapart.com/articles/taminglists/">A List Apart: Taming Lists</a> (angolul)</li>
  <li><a href="http://www.w3.org/TR/REC-CSS2/generate.html#lists">W3C CSS2: list-style-type definition</a> (angolul)</li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Az alábbi kérdésekkel ellenőrizheted a tudásodat:</p>

<ul>
  <li>Mi a HTML listák három típusa?</li>
  <li>Melyik típust mikor kell használnod? Hogyan döntöd el, hogy melyiket használod?</li>
  <li>Hogyan tudod a listákat egymásba ágyazni?</li>
  <li>Miért jobb, ha a listáid stílusozására CSS-t használsz HTML helyett?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Előző leírás — Szöveges részek megjelölése HTML-ben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Következő leírás — Képek a HTML-ben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/288-16-html-listk/benbuchanan.jpg" alt="Ben Buchanan" />

<p>Ben Buchanan több mint tíz évvel ezelőtt kezdett weboldalakat készíteni, miután mindenből szerzett egy diplomát az IT kivételével. Dolgozott a publikus (egyetemi) és a privát szférában is; részt vett több nagyobb weboldal újratervezésében, többek között a <a href="http://www.theaustralian.com.au/">The Australian</a> oldalán, valamint a <a href="http://www.griffith.edu.au/">Griffith University</a> vállalati weboldal három generációján is dolgozott. Jelenleg frontend architektként dolgozik a <a href="http://www.newsdigitalmedia.com.au/">News Digital Mediánál</a> és a <a href="http://weblog.200ok.com.au/">the 200ok weblog</a> oldalon ír.</p>
