Title: Kevéssé ismert szemantikus elemek
----
Date: 2009-08-17 12:14:05
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/20-html-urlapok/">Előző leírás — HTML űrlapok — az alapok</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/22-altalanos-tarolok/">Következő leírás — Általános tárolók — a div és a span elemek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban néhány kevéssé ismert és ritkán használt szemantikus elemet fogok bemutatni a HTML-ből. Megnézzük, hogyan lehet programozási kódot megjelölni, számítógép kimenetet jelölni, idézeteket és rövidítéseket megadni, a dokumentumok változásait megjelölni, stb. A végén még bemutatok néhány új szemantikus jelölést a HTML 5 vázlatából.</p>

<ul>
  <li><a href="#kapcsolat">Kapcsolat információk kiemelése</a></li>
  <li><a href="#programozas">Programozási nyelvek és kódok</a></li>
  <li><a href="#kimenet">Számítógépes kimenet megjelenítése</a></li>
  <li><a href="#valtozok">Változók</a></li>
  <li><a href="#idezetek">Idézetek</a></li>
  <li><a href="#roviditesek">Rövidítések</a></li>
  <li><a href="#peldany">Példányok definiálása</a></li>
  <li><a href="#felso_also_index">Felső- és alsó index</a></li>
  <li><a href="#sortoresek">Sortörések</a></li>
  <li><a href="#vizszintes_vonalak">Vízszintes vonalak</a></li>
  <li><a href="#dokumentumok">Dokumentumok változása (beillesztés és törlés)</a></li>
  <li><a href="#jovobeli_elemek">Néhány jövőbeli HTML elem</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
</ul>

<p><strong>Megjegyzés:</strong> minden példakód mögött találsz egy „Forrás megtekintése” hivatkozást, amelyre ha rákattintasz, akkor megnyithatod a példakódhoz tartozó oldalt, hogy láthasd, hogyan jelenik meg a böngészőben — így élő példákat kapsz a felsorolt elemekhez, és a forrást is könnyen megnézheted vagy módosíthatod.</p>

<h2 id="kapcsolat">Kapcsolat információk kiemelése</h2>

<p>Az <code>address</code> elem valószínűleg az egyik legrosszabb hírű és leginkább félreértett elem a HTML-ben. Első ránézésre azt mondanánk, hogy az „address” elnevezés alapján ez az elem leginkább postai- vagy e-mail címeket foghat közre. Ez azonban csak részben igaz.</p>

<p>Az <code>address</code> valódi jelentése az lenne, hogy kapcsolati információkat biztosítson a lap, vagy a lap nagyobb részének <em>szerzőjéről, esetleg szerzőiről</em>. Ez vonatkozhat névre, e-mail címre, postai címre vagy egy kapcsolati lapra való hivatkozásra is. Például:</p>

<pre><strong>&lt;address&gt; </strong>
  &lt;span&gt;Mark Norman Francis&lt;/span&gt;, 
  &lt;span class=&quot;tel&quot;&gt;1-800-555-4865&lt;/span&gt;
<strong>&lt;/address&gt;</strong>
</pre>

<a href="kevesseismert.html#address1">Forrás megtekintése</a>

<p>A következő példában az <code>address</code> elemet a láblécben adjuk meg, és egyszerűen hivatkozunk benne egy másik lapra az oldalról. A bővebb kapcsolati információkat érdemes így egy külön lapon megadni, hogy ne ismételjük vég nélkül az oldal minden lapján.</p>

<pre>&lt;p class=&quot;footer&quot;&gt;© Copyright 2008&lt;/p&gt;
<strong>&lt;address&gt;</strong>
&lt;a href=&quot;/contact/&quot;&gt;Mark Norman Francis&lt;/a&gt;
<strong>&lt;/address&gt;</strong>
</pre>

<a href="kevesseismert.html#address2">Forrás megtekintése</a>

<p>Természetesen, ha az oldalnak több szerzője is van, akkor ezt a formát használhatjuk ugyanígy a többi szerzőre is, különböző kapcsolati lapokra hivatkozva.</p>

<p>*Hibás* viszont az <code>address</code> elem használata minden más cím megadására, mint például:</p>

<pre>&lt;p&gt; A cégünk címe: &lt;/p&gt;
  &lt;address&gt;
    Opera Software ASA,
    Waldemar Thranes gate 98,
    NO-0175 OSLO,
    NORWAY
  &lt;/address&gt;
</pre>

<a href="kevesseismert.html#address3">Forrás megtekintése</a>

<p>(Persze ha az Opera felelősséget vállal a leírásban foglaltakért, akkor ez is helyes lehet, annak ellenére, hogy én írtam a cikket, és nem az Opera.)</p>

<p>Általános címekhez használhatod az ún. „microformat” elemeket annak jelölésére, hogy egy paragrafus egy címet tartalmaz. <a href="http://dev.opera.com/articles/html/">A microformatokról bővebben a dev.opera.com leírásaiban olvashatsz.</a></p>

<h2 id="programozas">Programozási nyelvek és kódok</h2>

<p>A <code>code </code>elemet arra használhatjuk, hogy számítógépes kódokat vagy programozási nyelvek kódjait jelöljük vele, mint például PHP, JavaScript, CSS, XML és társaik. Bekezdésen belül egy rövid kódrészletet egyszerűen tedd a <code>code </code>tagek közzé, mint itt:</p>

<pre>&lt;p&gt;Nem ajánlott az eseménykezelőket, mint például
az <strong>&lt;code&gt;</strong>onclick<strong>&lt;/code&gt;</strong>, közvetlenül a HTML-ben használni.&lt;/p&gt;
</pre>

<a href="kevesseismert.html#code1">Forrás megtekintése</a>

<p>Nagyobb, többsoros kódrészletek bemutatására előformázott blokkokat érdemes használni, amint azt a <a href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Szöveges részek megjelölése HTML-ben</a> leírásban már megmutattuk.</p>

<p>Bár nincs megszabott módszer arra, hogy hogyan jelölheted meg a <code>code</code> elemben használt programozási nyelvet vagy kódot, de erre használhatod a <code>class</code> attribútumot. Gyakori módszer (sőt a HTML 5 vázlatban is említik), hogy először beírod a <code>language-</code> előtagot, majd utána a használt nyelvet. Így a fenti példa a következőképpen módosul:</p>

<pre>&lt;p&gt;Nem ajánlott az eseménykezelőket, mint például
az &lt;code <strong>class=&quot;language-javascript&quot;</strong>&gt;onclick&lt;/code&gt;, 
közvetlenül a HTML-ben használni.&lt;/p&gt;
</pre>

<a href="kevesseismert.html#code2">Forrás megtekintése</a>

<p>Egyes programozási nyelveknek olyan nevei vannak, amelyeket nem lehet egyszerűen használni a <code>class</code> attribútumban. Ilyen például a C# (C-Sharp). A helyes módja a nyelv leírásának az lenne, hogy <code>class=&#39;language-c\#&#39;</code>, de ez zavaró és könnyen elírható. Ezért inkább azt javaslom, hogy az osztálynevekben csak betűket és kötőjelet használjunk, és ilyen esetekben írjuk ki az ejtett formát. Ebben az esetben például használjuk inkább a <code>class=&#39;language-csharp&#39;</code> elnevezést.</p>

<h2 id="kimenet">Számítógépes kimenet és bemenet megjelenítése</h2>

<p>A <code>samp</code> és <code>kbd</code> elemekkel jelölhetjük meg egy számítógépes program kimenetét és bemenetét. Például:</p>

<pre>&lt;p&gt;Annak a megállapítására, hogy egy számítógép csatlakozva 
van-e az internethez, gyakori módszer a &lt;code&gt;ping&lt;/code&gt; nevű
számítógépes program használata, amellyel ellenőrízhetjük, hogy
egy másik gép elérhető és működik.&lt;/p&gt;

&lt;pre&gt;<strong>&lt;samp class=&quot;prompt&quot;&gt;</strong>kittaghy%<strong>&lt;/samp&gt;</strong> <strong>&lt;kbd&gt;</strong>ping -o google.com<strong>&lt;/kbd&gt;</strong>
  <strong>&lt;samp&gt;</strong>PING google.com (64.233.187.99): 56 data bytes
  64 bytes from 64.233.187.99: icmp_seq=0 ttl=242 time=108.995 ms

  --- google.com ping statistics ---
  1 packets transmitted, 1 packets received, 0% packet loss
  round-trip min/avg/max/stddev = 108.995/108.995/108.995/0.000 ms
  <strong>&lt;/samp&gt;</strong>&lt;/pre&gt;
</pre>

<a href="kevesseismert.html#computer">Forrás megtekintése</a>

<p>A <code>samp</code> elemmel egy számítógépes program kimenetét jelölhetjük. Amint a fenti példában is látható, a különböző típusú kimeneteket megjelölhetjük a <code>class</code> attribútum használatával. Arra azonban nincs széles körben elterjedt gyakorlat, hogy ezeket a típusokat hogyan nevezzük el.</p>

<p>A <code>kbd</code> elemmel az olyan bemeneteket jelölhetjük, amellyekben a felhasználó kapcsolatba lép a számítógéppel. Bár ez hagyományosan a billentyűzet (erre utal a „kbd” rövidítés is), más típusú bemenetekre is használhatjuk, például hangparancsok esetében.</p>

<h2 id="valtozok">Változók</h2>

<p>A <code>var</code> elemet használhatjuk változók jelölésére szöveges környezetben. Ez lehet egy matematikai változó egy algebrai kifejezésben, vagy egy programkódban található változó. Például:</p>

<pre>&lt;p&gt;Az <strong>&lt;var&gt;x&lt;/var&gt;</strong> értéke 4 ebben az egyenletben:
 3<strong>&lt;var&gt;x&lt;/var&gt;</strong>+2=14.&lt;/p&gt;
    
&lt;pre&gt;&lt;code class=&quot;language-perl&quot;&gt;
my <strong>&lt;var&gt;$udvozlet&lt;/var&gt;</strong> = &quot;Helló világ!&quot;;
&lt;/code&gt;&lt;/pre&gt;
</pre>

<a href="kevesseismert.html#variables">Forrás megtekintése</a>

<h2 id="idezetek">Idézetek</h2>

<p>A <code>cite</code> elemet arra használjuk, hogy megjelöljük vele a közrefogott tartalom forrását — egy személy, egy könyv vagy más publikáció idézésekor, vagy általánosan egy másik forrásra való hivatkozáskor. Ilyen esetekben a forrást a <code>cite</code> elemmel jelölhetjük. Például:</p>

<pre>&lt;p&gt;A &lt;q&gt;Mindent a legegyszerűbben, de nem egyszerűbben kell csinálni&lt;/q&gt; 
mondást gyakran tulajdonítják <strong>&lt;cite&gt;Albert Einsteinnek&lt;/cite&gt;</strong>,
pedig valójában csak egy körülírása egy olyan idézetnek, 
amelyet jóval nehezebb megérteni.&lt;/p&gt;</pre>

<a href="kevesseismert.html#citations">Forrás megtekintése</a>

<h2 id="roviditesek">Rövidítések</h2>

<p>Az <code>abbr</code> és az <code>acronym</code> elemeket olyan esetekben használhatjuk, amikor egy rövidítést kell jelölnünk, lehetőséget teremtve ezáltal a rövidítés feloldására anélkül, hogy megtörnénk a dokumentum formáját.</p>

<p>A szöveg rövidített alakja kerül az <code>abbr</code> elembe, míg a hosszabb, teljes vátlozata a <code>title</code> attribútumba. Például:</p>

<pre>&lt;p&gt;A <strong>&lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML&lt;/abbr&gt;</strong>
dokumentumokhoz <strong>&lt;abbr title=&quot;Cascading Style Sheets&quot;&gt;CSS&lt;/abbr&gt;</strong>
használatával rendelhetünk stílust.&lt;/p&gt;</pre>

<a href="kevesseismert.html#abbreviations">Forrás megtekintése</a>

<p>Az <code>acronym</code> elemmel egy betűszót jelölhetünk, ami ugyancsak egy rövidítési forma, azzal a különbséggel, hogy a végeredmény olyan, mintha egy külön szó lenne, és úgy is kell ejteni. Ilyen például a gyes, ami a <q>gyermekágyi segély</q> rövidítése. Bár a HTML 4.01 specifikáció megengedi mind az <code>abbr</code>, mind az <code>acronym</code> elemeket is, mégis egy kis problémába ütközünk, ha helyesen akarjuk jelölni ezeket a szavakat.</p>

<p>Az Internet Explorer (a 7-es verzió előtt, de a 7-es sem húzza alá a rövidítéseket szaggatott vonallal, mint a többi böngésző) nem ismeri fel az <code>abbr</code> elemet, viszont felismeri az <code>acronym</code> elemet. Sajnos az <code>acronym</code> a rövidítéseknek csak egy részhalmaza, ezért helytelen például egy <q>HTML</q> rövidítést <code>acronym</code> elemmel jelölni.</p>

<p>A HTML 5 specifikáció vázlatában ráadásul az egyértelműbb szabvány érdekében el is hagyták az <code>acronym</code> elemet, mivel minden így jelölt szöveg egyben egy érvényes rövidítés is.</p>

<p>A legjobb, amint tehetsz, hogy kerülöd az <code>acronym</code> használatát, és csak az <code>abbr</code> elemet használod a kódodban. Ha vizuális stílust akarsz rendelni az <code>abbr</code> elemhez, akkor tedd bele a tartalmát még egy <code>span</code> elembe, és ehhez rendeld a stílust az <code>abbr </code>helyett, hogy minden böngésző ugyanúgy jelenítse meg az elemet. Erről később részletesebben is fogunk beszélni a <ins>Szöveg stílusozása CSS-sel</ins> leírásban.</p>

<h2 id="peldany">Példányok definiálása</h2>

<p>Ugyancsak zavaros a <code>dfn</code> elem helyes használata is, amit a HTML specifikáció úgy értelmez, hogy <q>a közrezárt kifejezés példánydefiníciója</q>. Ez eléggé közel áll a <code>dt</code> elem értelméhez, amit a <a href="http://dev.opera.com/articles/view/16-html-listak/#definicios">definíciós listákban</a> használhatunk.</p>

<p>A különbség az, hogy a <code>dfn</code> elem nem kell része legyen egy kifejezéseket és értelmezéseket definiáló listának, hanem egyszerűen bele lehet fűzni a normál szövegfolyamba. Lássunk egy példát a <code>dfn</code> elem használatára:</p>

<pre>&lt;p&gt;<strong>&lt;dfn&gt;HTML&lt;/dfn&gt;</strong>: A HTML a &quot;HyperText Markup Language&quot; 
rövidítése. Ezt a nyelvet használják a webes 
dokumentumok tartalmának leírására.&lt;/p&gt;</pre>

<p>Megjelenik benne a HTML kifejezés, majd közvetlenül utána következik a kifejezés értelmezése, így ideális hely a <code>dfn</code> elem számára. Minden kifejezésre csak egyszer használjuk a lapon belül, az első előfordulásnál, de a kifejezéseket amúgy is csak egyszer szoktuk értelmezni egy lapon, úgyhogy ez nem okozhat nagy gondot.</p>

<p>Ez mind szép és jó, de egy ilyen izolált példa nem túl praktikus. A dfn elemet akkor ajánlott használni, ha egy kifejezés többször is előfordul a lapon. Például <a href="http://dev.opera.com/articles/view/12-a-html-alapjai/">A HTML alapjai</a> leírásban több mint 50-szer fordul elő a HTML kifejezés. Az <code>&lt;abbr title=&quot;HyperText Markup Language&gt;HTML&lt;/abbr&gt;</code> kód használata minden egyes alkalommal csak fölösleges sávszélesség-pazarlás, vizuálisan zavaró és valószínűleg igen fárasztó a képernyő-felolvasókat használóknak is, akik minden egyes előforduláskor meghallgathatják, hogy minek is a rövidítése a HTML. Ehelyett megadhatjuk ezt a kódot a HTML definiálásának a helyén:</p>

<pre>&lt;p&gt;A &lt;dfn&gt;<strong>&lt;abbr&gt;HTML&lt;/abbr&gt;</strong>&lt;/dfn&gt; („HyperText Markup Language”, 
azaz hiperszöveg-leíró nyelv) a webes dokumentumok 
leírására szolgáló nyelv.&lt;/p&gt;</pre>

<a href="kevesseismert.html#dfn1">Forrás megtekintése</a>

<p>Később, a HTML rövidítés használatakor egyszerűen jelölhetjük így: <code>&lt;abbr&gt;HTML&lt;/abbr&gt;</code>. A kliens eszköz így biztosíthat egy módot a felhasználónak arra, hogy a rövidítés definícióját megmutassa. Sajnos jelenleg nincs olyan kliens eszköz, amelyik biztosítana erre valamilyen módot, beleértve a képernyő-felolvasókat is. Éppen ezért jobb módszer, ha ezt az információt a <code>title</code> attribútumban is megadod:</p>

<pre>&lt;p&gt;A <strong>&lt;dfn&gt;&lt;abbr title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt;&lt;/dfn&gt;</strong>
(„HyperText Markup Language”, azaz hiperszöveg-leíró nyelv) 
a webes dokumentumok leírására szolgáló nyelv.&lt;/p&gt;</pre>

<a href="kevesseismert.html#dfn2">Forrás megtekintése</a>

<p>Most viszont sajnos megdupláztuk a HTML rövidítés kifejtését, ami problémát okozhat a képernyő-felolvasóknak. Ha viszont kihagyjuk a vizuális megjelenítését, akkor a dokumentum kevésbé lesz hasznos a látóknak, akik a látogatók jóval nagyobb részét teszik ki az esetek túlnyomó részében.</p>

<p>Szerintem ez egy elfogadható megoldás, ha csak egy-két kifejezés definícióját kell megadnunk (az olyan lapokon, amelyeken sok definíciót kell megadni, jobb lehet egy külön lapot létrehozni a definícióknak, ahol a sokkal egyértelműbb definíciós lista is használható). De ha nagyon zavar a fenti megoldás, még használhatod ezt is:</p>

<pre>&lt;p&gt;A &lt;abbr title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt;
(<strong>&lt;dfn&gt;HyperText Markup Language&lt;/dfn&gt;</strong>, azaz hiperszöveg-leíró nyelv) 
a webes dokumentumok leírására szolgáló nyelv.&lt;/p&gt;</pre>

<a href="kevesseismert.html#dfn3">Forrás megtekintése</a>

<p>Ebben az esetben a kliens eszköznek még mindig kellene biztosítania egy módszert arra, hogy az értelmezést összekapcsolja a különböző példányokkal. Jelenleg viszont egyetlen böngésző sem tesz semmi hasznosat a <code>dfn</code> elemmel, így szinte csak CSS stílusozásra használhatjuk. A fenti megoldás a legjobb, amit eddig sikerült kitalálnunk.</p>

<p>Ez egy elég szerencsétlen eset, mivel a specifikáció anélkül készült el, hogy világos útmutatást adna arra, hogyan kellene használni pontosan az elemet, és valószínűleg nem a valódi használatát vették figyelembe az elemnek, máskülönben lenne valamilyen módszer a kifejezések definíciójának és leírásának az összekapcsolására. A HTML 5 specifikáció már részletesebben foglalkozik azzal, hogy <a href="http://www.w3.org/html/wg/html5/#the-dfn">hogyan kell használni a <code>dfn</code> elemet</a>, de ez még csak vázlat, és nem alkalmas a mindennapi használatra.</p>

<h2 id="felso_also_index">Felső- és alsó index</h2>

<p>Ha egy szövegrészt felső- vagy alsó indexként akarsz megjelölni (vagyis a többi szövegrészhez viszonyítva kissé feljebb vagy lejjebb elhelyezni), akkor erre használhatod a <code>sup</code> és a <code>sub</code> elemeket.</p>

<p>Egyes nyelvekben szükség van ezekre a rövidítések helyes használatához, valamint rövid matematikai formulák leírására is használható (bonyolultabb formulákhoz már a MathML használatát javasoljuk, amely pontosan a komplex és bonyolult matematikai formulák leírására készült).</p>

<pre>&lt;p&gt;A víz kémiai vegyjele a H<strong>&lt;sub&gt;2&lt;/sub&gt;</strong>O, vagy más néven 
a hidrogén-hidroxid.&lt;/p&gt;
&lt;p&gt;Albert Einstein híres képlete az energia megmaradására 
az E=mc<strong>&lt;sup&gt;2&lt;/sup&gt;</strong> — az energia egyenlő 
a tömeg és a sebesség négyzetének a szorzata.&lt;/p&gt;</pre>

<a href="kevesseismert.html#supsub">Forrás megtekintése</a>

<h2 id="sortoresek">Sortörések</h2>

<p>Amiatt, ahogy a HTML a fehér karaktereket kezeli, nem tudjuk a sorok tördelését úgy befolyásolni, hogy egyszerűen megnyomjuk az Entert a szöveg beírásakor (például ha egy bekezdésben megadunk egy postai címet, és azt szeretnénk, ha a cím minden része külön sorban jelenne meg).</p>

<p>A szövegbe a <code>br</code> elemmel tehetünk be egy sortörést. Viszont csak abban az esetben használjuk, amikor valóban szükség van a sortörésre, és soha ne használjuk helykitöltésre, például arra, hogy megnöveljük a távolságot két bekezdés között — ezt sokkal könnyebben és szebben megtehetjük a CSS-sel.</p>

<p>Például a korábban megadott Opera címet így írhatjuk le:</p>

<pre>&lt;p&gt; A cégünk címe: &lt;/p&gt;
  &lt;address&gt;
    Opera Software ASA,<strong>&lt;br&gt;</strong>Waldemar Thranes gate 98,<strong>&lt;br&gt;</strong>
    NO-0175 OSLO,<strong>&lt;br&gt;</strong>NORWAY
  &lt;/address&gt;
</pre>

<a href="kevesseismert.html#breaks">Forrás megtekintése</a>

<p>Természetesen, ha XHTML-t használsz a HTML helyett, akkor az elemet le kell zárni, valahogy így: <code>&lt;br&#xA0;/&gt;</code></p>

<h2 id="vizszintes_vonalak">Vízszintes vonalak</h2>

<p>Egy vízszintes vonalat a HTML-ben a <code>hr</code> elemmel készíthetünk. Ez behelyez a dokumentumba egy vonalat, amely meghatározás szerint arra szolgál, hogy elválassza egymástól a dokumentum különböző szakaszait.</p>

<p>Sokan nem értenek egyet azzal, hogy ez valóban egy szemantikus elem, és nem pusztán vizuális, prezentációs célokat szolgál. Ennek az előzményei a nyomtatott irodalomba nyúlnak vissza, ahol egy fejezeten belül (amely egy könyv szakaszainak felel meg) egy vízszintes vonalat tettek az olyan jelenetek közé, amelyek más időben és/vagy más helyen játszódtak. A verseskötetekben ugyancsak sokszor használtak ilyet a nagyobb szakaszok elválasztására.</p>

<p>Egyik használati mód sem ad okot egy új fejléc elem bevezetésére, amely egy elfogadott mód a dokumentum szakaszhatárainak a jelölésére.</p>

<p>A <code>hr</code> elemnek nincs semmilyen különleges attribútuma, és CSS-ben stílusozható, ha az alap megjelenése nem megfelelő.</p>

<p>Hasonlóan a sortöréshez, ha XHTML-t használsz HTML helyett, akkor az elemet le kell zárnod: <code>&lt;hr&#xA0;/&gt;</code></p>

<h2 id="dokumentumok">Dokumentumok változása (beillesztés és törlés)</h2>
<p>
Ha egy dokumentum az első megjelenés után megváltozott, akkor a későbbi változásokat megjelölheted, hogy a visszatérő látogatók vagy az automatikus folyamatok láthassák, mi és mikor változott.</p>

<p>Az új szövegeket (beszúrásokat) az <code>ins</code> elemmel jelölheted meg. Az eltávolított (törölt) szövegeket a <code>del</code> elemmel tudod megjelölni. Ha a törlés és a beszúrás ugyanazon a helyen történt a dokumentumban, akkor a javasolt módszer szerint előre kerül a törölt szöveg, majd ezt követi a beszúrás.</p>

<p>Mindkét elemnek van még két attribútuma, amelyekkel megadhatod a szerkesztés részleteit.</p>

<p>Ha a módosítás oka valahol megtalálható a lapon vagy a weben, akkor hivatkozhatsz erre a dokumentumra vagy szakaszra a <code>cite</code> attribútum segítségével. Ez egészen pontosan arra vonatkozik, hogy „ez a változás ebből az okból történt”.</p>

<p>Ezen kívül megadhatod azt az időpontot is, amikor a változás törént, mégpedig a <code>datetime</code> attribútum segítségével. Az érték egy ISO szabvány szerinti időpont kell legyen, amelyik a következő formátumot használja:  “ÉÉÉÉ-HH-NN ÓÓ:<span></span>PP:MM ±ÓÓ:<span></span>PP” (<a href="http://en.wikipedia.org/wiki/ISO_8601">további információt erről a Wikipédián találsz</a>).</p>

<p>Egy példa mindkét attribútum használatára:</p>

<pre>&lt;p&gt;Csak a felmerült problémákat kellene megoldanunk.
Amint &lt;cite&gt;<strong>&lt;del datetime=&quot;2008-03-25 18:26:55 Z&quot;
  cite=&quot;/changes.html#revision-4&quot;&gt;Donald Knuth&lt;/del&gt;&lt;ins
  datetime=&quot;2008-03-25 18:26:55 Z&quot;
  cite=&quot;/changes.html#revision-4&quot;&gt;C. A. R. Hoare&lt;/ins&gt;</strong>&lt;/cite&gt;
  mondta: &lt;q&gt;az elhamarkodott optimalizálás minden
  gonosz gyökere&lt;/q&gt;.&lt;/p&gt;</pre>

<a href="kevesseismert.html#insdelexample">Forrás megtekintése</a>

<h2 id="jovobeli_elemek">Néhány jövőbeli HTML elem</h2>

<p>Amint azt már többször is megemlítettük ebben és más leírásokban is, már hozzáférhető a HTML 5-ös verziójának a vázlata. Ez lesz a legradikálisabb frissítés a HTML-hez a fennállása óta. Ahelyett, hogy azon gondolkodtak volna, hogy mi lenne jó az embereknek, elemezték a jelenleg használt HTML dokumentumokat az interneten, így jó esély van arra, hogy az időközben széleskörűen elterjedt szemantikus jelöléseket beveszik a szabványba.</p>

<p>A következő néhány új HTML elem például jelentősen javítja majd a dokumentumok kódolását és használatát:</p>

<ul>
  <li><code>header</code> — a lap fejlécét tartalmazza; szokás szerint a logót és a címet, esetleg egy rövid bemutatkozó részt vagy egy globális navigációs struktúrát, mint például belépés, kilépés, profil hivatkozások.</li>
  <li><code>footer</code> — a lap láblécét tartalmazza, amely szokás szerint további hivatkozásokat tartalmaz a lapra; copyright és más hivatalos információkat.</li>
  <li><code>nav</code> — a lap fontosabb navigációs hivatkozásait tartalmazza.</li>
  <li><code>article</code> — a lapnak azt a részét tartalmazza, amelyik a fő területen van, kivéve a lap olyan elemeit, mint a navigáció, a fejléc vagy a lácléc.</li>
  <li><code>aside</code> — az oldalsáv információit tartalmazza a lap egy adott területén, de arra is jó lehet, hogy szavazásokat vagy megjegyzéseket helyezz el a fő tartalomban.</li>
</ul>

<p>Természetesen több is van, ezeket a <a href="http://www.whatwg.org/specs/web-apps/current-work/">HTML 5 specifikációjában</a> találod meg.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban bemutattunk néhány kevéssé ismert és ritkábban használt szemantikus elemet a HTML-ből. A következő leírásban bemutatjuk, hogyan kell helyesen használni a két szemantikusan semleges HTML elemet, a <code>div</code> és a <code>span</code> elemeket.</p>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/20-html-urlapok/">Előző leírás — HTML űrlapok — az alapok</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/22-altalanos-tarolok/">Következő leírás — Általános tárolók — a div és a span elemek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/295-21-kevss-ismert-szemantikus-elemek/norm.jpg" alt="Mark Norman Francis" />
<p class="comment">Fotó: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.
</p>

<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> oldalon blogol.</p>
