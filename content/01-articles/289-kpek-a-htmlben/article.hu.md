Title: Képek a HTML-ben
----
Date: 2009-08-17 08:47:47
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/16-html-listak/">Előző leírás — HTML listák</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">Következő leírás — HTML hivatkozások — építsük fel a webet!</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban azon dolgok egyikét mutatjuk be, amelyik a webdesignt széppé teheti — a képekről. Az anyag végére tudni fogod, hogyan adj hozzá képeket a weboldalakhoz hozzáférhető módon (vagyis hogy a látássérült emberek is képesek legyenek használni az oldaladon található információkat), hogyan használhatsz beágyazott képeket információk közlésére, valamint hogyan adhatsz háttérképeket a lapod elrendezéséhez. A leírásban használt <a href="kepekpelda.zip">példa fájlokat innen töltheted le</a> — ezekre többször is hivatkozni fogunk a leírás során. A mai anyag tartalma a következő:</p>

<ul>
  <li><a href="#kep1000szo">Egy kép többet mond ezer szónál — vagy mégsem?</a></li>
  <li><a href="#keptipusok">A weben található képek különböző típusai — tartalmi- és háttérképek</a></li>
  <li><a href="#imgelem">Az <code>img</code> elem és az attribútumai</a>
<ul>
  <li><a href="#altszoveg">Alternatív szöveg megadása az <code>alt</code> attribútummal</a></li>
  <li><a href="#hasznosinfo">Hasznos információk megadása a <code>title</code> attribútummal</a></li>
  <li><a href="#longdesc"><code>longdesc</code> használata komplex képeknél alternatív leírás biztosítására</a></li>
  <li><a href="#gyorsbetoltes">Gyorsabb képbetöltés a kép méreteinek megadásával</a></li>
</ul></li>
  <li><a href="#inlinekepek">Ennyit az inline képekről</a></li>
  <li><a href="#hatterCSS">Háttérképek CSS-sel</a>
<ul>
  <li><a href="#hatterCSShogyan">Hogyan adható meg a háttér CSS-ben?</a></li>
</ul></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="kep1000szo">Egy kép többet mond ezer szónál — vagy mégsem?</h2>

<p>Nagyon csábító, hogy a weboldalaidon sok képet használj. A képekkel nagyszerűen lehet befolyásolni az oldal hangulatát, és az illusztrációkon keresztül könnyen be lehet mutatni komplex információkat is a látogatóknak.</p>

<p>A képek legnagyobb hátulütője a weben az, hogy nem minden webes felhasználó látja őket. Annak idején, amikor a képeket először kezdték támogatni a böngészők, nagyon sok látogató kikapcsolta a képek megjelenítését, hogy ezáltal sávszélességet spóroljon, és gyorsabban böngészhessen — az internetkapcsolatok akkoriban még nagyon lassúak voltak, és minden percért fizetni kellett, amit online töltöttél. Habár ez a mai időkben már nem jellemző, még mindig nem értünk ki az erdőből — elég, ha csak néhány példát említek:</p>

<ul>
  <li>Azok, akik mobil eszközökön böngésznek, könnyen lehet, hogy most is kikapcsolják a képeket a kis képernyő miatt, és azért, mert gyakran a letöltött adatmennyiség után kell fizessenek.</li>
  <li>A látogatóid között lehetnek vakok és gyengénlátók, akik egyáltalán nem, vagy csak nagyon rosszul látják a képeidet.</li>
  <li>Lehetnek olyan látogatóid is, akik egy másik kultúrkörből származnak, és nem értik meg az általad használt képi jelek valódi jelentését.</li>
  <li>A keresőmotorok csak a szöveget indexelik — nem analizálják a képeket (egyelőre), ami azt jelenti, hogy minden olyan információ, amit a képekben tárolsz, nem lesz indexelve, és így nem fogják megtalálni a keresőben.</li>
</ul>

<p>Ezek miatt nagyon fontos, hogy okosan válaszd meg a képeket, és csak a megfelelő helyzetekben használd őket. Még ennél is fontosabb, hogy mindig biztosíts egy tartalék lehetőséget azoknak, akik valamilyen okból kifolyólag nem látják a képeidet. Erről a témáról egy későbbi leírásban is fogunk beszélni a webes navigáció és menük témakörben, ahol szó lesz a navigációhoz hibásan használt ikonokról és képekről. Most elsősorban azt fogjuk megnézni, hogy milyen technológiákat használhatunk arra, hogy egy HTML dokumentumba képeket helyezzünk.</p>

<h2 id="keptipusok">A weben található képek különböző típusai — tartalmi- és háttérképek</h2>

<p>Alapvetően két fajta képet tehetünk a dokumentumokba: a tartalomhoz kapcsolódó képeket az <code>img</code> elem segítségével, valamint háttérképeket a különböző elemekhez CSS segítségével. Hogy mikor melyiket érdemes használni, az attól függ, hogy mit szeretnél: </p>

<ul>
<li>Ha a kép lényeges része a dokumentum tartalmának, például egy kép a szerzőről, vagy egy grafikon különböző adatokkal, akkor <code>img</code> elemként kell hozzáadni, egy alternatív szöveg megadásával együtt.</li>

  <li>Ha a kép csak dekoráció, akkor használd a CSS háttérképeit. Ennek az oka, hogy az ilyen képeknek nem kell adni alternatív szöveget (mi haszna egy vak számára annak, hogy „lekerekített, csillogó zöld sarok”?), ráadásul sokkal több lehetőséged van a képek stílusozására CSS-ben, mint HTML-ben.</li>
</ul>

<h2 id="imgelem">Az <code>img</code> elem és az attribútumai</h2>

<p>Egy kép hozzáadása a HTML dokumentumhoz az <code>img</code> elem segítségével rendkívül egyszerű. Az alábbi HTML dokumentum (<a href="inlinekeppelda.html">inlinekeppelda.html</a> a csomagolt fájlban) megjeleníti a <em>balkonlatkep.jpg</em> fotót a böngészőben (feltételezve, hogy a kép ugyanott található, mint a HTML fájl).</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Példa egy inline képre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/balkonlatkep.jpg&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Ha ezt a kódot megnyitod a böngészőben, akkor az 1. ábrán látható eredményt fogod kapni.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/images-figure1.jpg" alt="A kép a böngészőben megjelenítve" />
<p class="comment">1. ábra: A kép, ahogy a böngészőben megjelenik</p>

<h3 id="altszoveg">Alternatív szöveg megadása az <code>alt</code> attribútummal</h3>

<p>Ez a kód szépen megjeleníti a képünket, viszont a HTML érvénytelen lesz, mivel az <code>img</code> elemben meg kell adni az <code>alt</code> attribútumot is. Ez az attribútum tartalmazza azt a szöveget, ami a kép helyén jelenik meg, ha a kép valamilyen okból nem elérhető. Ennek több oka is lehet, például nem található a kép a megadott helyen, nem lehet betölteni, vagy a kliens eszköz (ami általában a böngésző) nem támogatja a képeket. Továbbá, a látássérült emberek általában valamilyen kisegítő technológiát használnak a böngészéshez, ami felolvassa nekik a lapokat; ezek a technológiák pedig az <code>img</code> elem esetén éppen az <code>alt</code> attribútum szövegét olvassák fel a felhasználónak. Éppen ezért nagyon fontos, hogy jó alternatív szöveggel írjuk le a kép tartalmát, és ezt az <code>alt</code> attribútumba tegyük.</p>

<p>A weben sok olyan szöveget találhatsz, amelyben az „alt tagekről” beszélnek. Ez valójában hibás, mivel nincs ilyen nevű tag (vagy elem). Ez az <code>img</code> elem egy attribútuma, és rendkívül fontos szerepe van mind a hozzáférhetőségben, mind a keresőoptimalizálásban (SEO).</p>

<p>Ahhoz, hogy a képünk mindenki számára érthető legyen, hozzá kell adnunk egy alternatív szöveget, ebben az esetben például ezt: „A látkép a balkonomról, ahonnan látszik egy sor ház, néhány fa és egy kastély” (<a href="inlinekeppeldaalt.html">inlinekeppeldaalt.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Példa egy inline képre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/balkonlatkep.jpg&quot; alt=&quot;A látkép a balkonomról, ahonnan látszik egy sor ház, néhány fa és egy kastély&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Az <code>alt</code> attribútum azt a szöveget tartalmazza, amely akkor jelenik meg, ha a kép nem elérhető. Az <code>alt</code> attribútumban található információ nem szabad megjelenjen akkor, ha a képet sikerült betölteni és megjeleníteni; ennek ellenére az Internet Explorer ezt másképp gondolja, és egy eszköztippben megjeleníti a szöveget, ha az egeret a kép fölé viszed. Ez valójában egy hiba, ami rengeteg embert arra késztetett, hogy további információkat fűzzön a képhez az <code>alt</code> attribútum segítségével. Ha ezt szeretnéd elérni, akkor használd helyette a <code>title</code> attribútumot, amelyet mindjárt be is mutatunk.</p>

<h3 id="hasznosinfo">Hasznos információk megadása a <code>title</code> attribútummal</h3>

A legtöbb böngésző az <code>img</code> elem <code>title</code> attribútumának értékét egy eszköztippben jeleníti meg, ha az egeret a kép fölé viszed (lásd a 2. ábrán). Ennek segítségével a látogató többet is megtudhat az adott képről, de nem feltételezheted azt sem, hogy minden látogatódnak van egere. A <code>title</code> attribútum nagyon hasznos lehet, de ez a módszer nem biztonságos kritikus információk megadása esetén. Nagyon hasznos viszont például akkor, ha a kép hangulatáról akarunk írni, vagy hogy mit jelent ez a kép az adott kontextusban (<a href="inlinekeptitle.html">inlinekeptitle.html</a>)

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Példa egy inline képre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/balkonlatkep.jpg&quot; alt=&quot;A látkép a balkonomról, ahonnan látszik egy sor ház, néhány fa és egy kastély&quot; title=&quot;Ezt látom, ha kinézek az ablakomon; a kastély miatt költöztem ide elsősorban.&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Ha ezt a kódot betöltöd a böngésződbe, és a kép fölé állsz az egérrel, akkor a 2. ábrán látható eredményt fogod kapni:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/images-figure2.jpg" alt="A title attribútum értéke megjelenik az eszköztippben" />
<p class="comment">2. ábra: A title attribútum értéke megjelenik az eszköztippben</p>

<h3 id="longdesc"><code>longdesc</code> használata komplex képeknél alternatív leírás biztosítására</h3>

<p>Ha a kép nagyon összetett, mint például egy grafikon, akkor adhatsz hozzá egy sokkal hosszabb leírást is a <code>longdesc</code> attribútum segítségével, így a képernyő-felolvasó szoftver használó látogatók, vagy akik képek nélkül böngésznek továbbra is pontosan elérhetik azt az információt, ami egyébként csak a képen látható.</p>

<p>Ez az attribútum egy olyan URL-t tartalmaz, amely a képben található információkat tartalmazó dokumentumra mutat. Például ha a grafikon egy adathalmazt jelenít meg, akkor a <code>longdesc</code> segítségével hivatkozhatsz arra az adattáblára, amely alapján a grafikon készült (<a href="inlinekeplongdesc.html">inlinekeplongdesc.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Példa egy inline képre longdesc leírással&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/chart.png&quot; width=&quot;450&quot; height=&quot;150&quot; alt=&quot;A grafikon a 15 évesek gyümölcsfogyásztását mutatja meg. A legtöbb gyerek ananászt eszik, majd körtét&quot; longdesc=&quot;gyumolcsfogyasztas.html&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>A <a href="gyumolcsfogyasztas.html">gyumolcsfogyasztas.html</a> egy nagyon egyszerű adathalmazt tartalmaz, amely ugyanezt az információt jeleníti meg:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Gyümölcsfogyasztás&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;table summary=&quot;Gyümölcsfogyasztás a 15 évesek körében, 2007 március&quot;&gt;
  &lt;caption&gt;Gyümölcsfogyasztás&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th scope=&quot;col&quot;&gt;Gyümölcs&lt;/th&gt;&lt;th scope=&quot;col&quot;&gt;Mennyiség&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Alma&lt;/td&gt;&lt;td&gt;10&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Narancs&lt;/td&gt;&lt;td&gt;58&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Ananász&lt;/td&gt;&lt;td&gt;95&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Banán&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Mazsola&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Körte&lt;/td&gt;&lt;td&gt;63&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;p&gt;&lt;a href=&quot;inlinekeplongdesc.html&quot;&gt;Vissza a cikkre&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Az adatok kétféle megjelenítését egymás mellett a 3. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/images-figure3.jpg" alt="Egy kép és mellette a hozzá tartozó longdesc dokumentum" />
<p class="comment">3. ábra: Egy összetett képhez a <code>longdesc</code> attribútum segítségével kapcsolhatsz egy részletes leírást</p>

<p>Annak, hogy egy képhez hozzá van rendelve egy részletes leíró dokumentum, nincs semmilyen vizuális jelölése. A kisegítő technológiák viszont tudatni fogják a felhasználóikkal, hogy elérhető egy alternatív leírás is a képhez.</p>

<h3 id="gyorsbetoltes">Gyorsabb képbetöltés a kép méreteinek megadásával</h3>

<p>Amikor a kliens eszköz (vagyis a böngésző) talál egy <code>img</code> elemet a HTML-ben, akkor elkezdi letölteni azt a képet, amelyre az <code>src</code> attribútum mutat. Normális esetben nem ismeri a kép méreteit, ezért egyszerűen csak bedobja a szövegeket, majd amikor a kép letöltése befejeződött, akkor félretolja őket és megjeleníti a képet a maga helyén. Ez lelassítja a lap betöltését, ráadásul zavaró lehet a látogató számára is. Ha ezt el szeretnéd kerülni, akkor előre megadhatod a kliens eszköz számára a kép méreteit a <code>width</code> és <code>height</code> attribútumokkal, így már a kép betöltése előtt fenn tudja tartani számára a megfelelő méretű helyet (<a href="inlinekepmeretekkel.html">inlinekepmeretekkel.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Példa egy inline képre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/balkonlatkep.jpg&quot; alt=&quot;A látkép a balkonomról, ahonnan látszik egy sor ház, néhány fa és egy kastély&quot; width=&quot;400&quot; height=&quot;186&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Ez előre kitölti a kép helyét egészen addig, amíg be nem töltődik, és meg nem jelenik a valódi kép, így elkerülheted az oldal idétlen átrendezését. A kép valódi méretét is megváltoztathatod ezeknek az attribútumoknak a segítségével (próbáld ki a fenti példában, hogy megfelezed az értékeket, majd töltsd be újra a lapot). Ez általában nem működik megfelelően, mivel a kép átméretezésének minősége nem egyforma minden böngészőben. Különösen káros az, ha a nagy képekből ezzel a módszerrel készítesz bélyegképeket, mivel a bélyegképeknek éppen az lenne a lényege, hogy kisebb fizikai fájlmérettel rendelkeznek a kis képméret mellett; senki sem akar letölteni egy 300&#xA0;KB méretű apró képet, amikor az akár 5&#xA0;KB is lehetne.</p>

<h2 id="inlinekepek">Ennyit az inline képekről</h2>

<p>Még van jó néhány attribútum, amit a képekhez használhatsz, de a legtöbb ezek közül már elavult, mivel a kép elrendezését és elhelyezkedését adják meg. Ez nem a HTML feladata — erre találták ki a CSS-t. Egyelőre elég annyit mondani, hogy van még egy fontos dolog, amit érdemes megjegyeznek, mégpedig hogy a képek — alapesetben — <em>inline</em>, azaz soron belüli elemek. Ez azt jelenti, hogy beteheted őket a szövegben a szavak közé anélkül, hogy új sort kezdenének. Ez nagyon jó abban az esetben, ha kis ikonokat vagy hangulatjeleket akarsz betenni a szövegedbe, de idegesítő lehet akkor, ha az elrendezést képekkel és szövegekkel akarod megoldani. A CSS segítségével felülírhatod a képeknek ezt a viselkedését, és beállíthatod, hogy a képek blokk szintű elemként viselkedjenek (vagyis minden esetben új sort kezdenek, ha hozzáadod őket a dokumentumhoz).</p>

<h2 id="hatterCSS">Háttérképek CSS-sel</h2>

<p>Alighanem nagy biztonsággal kijelenthetjük, hogy a webfejlesztés sokkal vidámabb lett azt követően, hogy a böngészők elkezdték támogatni a CSS-t. Addig a lap különböző elemeinek elrendezéséhez a HTML táblázatait kellett összetákolni, az üres helyeken kitöltő elemeket (&amp;nbsp;), a margókhoz pedig kitöltő GIF-eket (1x1 pixeles átlátszó GIF képeket) kellett használni. Ezek helyett végre lehetőség nyílt a valódi kitöltés (<code>padding</code>), margó (<code>margin</code>), méret és pozícionálás használatára a CSS-sel, míg a HTML-t meghagyhattuk a tartalom felépítéséhez.</p>

<p>A CSS egyben azt is jelenti, hogy a háttérképeket rendkívül sokoldalú módon használhatod fel — úgy pozícionálhatod őket a szöveg alá vagy köré, ahogy éppen szeretnéd, de egymás mellé is helyezheted ismételten a képeket a megfelelő háttér előállításához. Most csak érintőlegesen fogunk beszélni a CSS képekkel kapcsolatos lehetőségeiről, mivel egy későbbi leírásban sokkal részletesebben is lesz még szó a CSS háttérképeiről.</p>

<h3 id="hatterCSShogyan">Hogyan adható meg a háttér CSS-ben?</h3>

<p>CSS-ben egy háttérkép megadása nagyon egyszerű. Mielőtt megnéznéd az alábbi CSS kódot, töltsd be a <a href="kepekescss.html">kepekescss.html</a> példafájlt a böngésződbe vagy nézd meg a 4. ábrát, hogy legyen valamilyen fogalmad a CSS háttérképek különböző lehetőségeiről.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/images-figure4.jpg" alt="Példa CSS háttérképekre" />
<p class="comment">4. ábra: CSS háttérképek</p>

<p>A különböző dobozok valójában stílusozott <code>h2</code> címsor elemek, egy kevés kitöltéssel és kerettel, amiket CSS-ben rendeltünk hozzájuk, hogy elég helye legyen a háttérképnek. Ha megnézed a HTML fájlt, látni fogod, hogy mindegyik <code>h2</code> elemnek egy egyedi <code>id</code> azonosítója van, így mindegyikhez más CSS szabályt tudunk rendelni. Az első példához tartozó CSS a következő:</p>

<pre>background-image:url(ball.gif);
background-color:#eee;</pre>

<p>A képet a <code>background-image</code> szelektorral adhatod hozzá a háttérhez, és a zárójelben adhatod meg, hogy milyen képet töltsön be. Ha a kép valamilyen okból nem elérhető, akkor második lehetőségként érdemes megadnod egy háttérszínt is a <code>background-color</code> szelektorral, a szín kódjával egyetemben (ami lehet egy hexadecimális, nevesített vagy RGB érték). Ebben az esetben világosszürkét választottunk.</p>

<p>Alapesetben a háttérképek mind vízszintesen, mind függőlegesen ismétlődnek, amíg ki nem töltik a teljes elemet. Az ismétlődés te is módosíthatod a <code>background-repeat</code> szelektor használatával:</p>

<ul>
  <li>Ha egyáltalán nem akarsz ismétlődést: <code>background-repeat:no-repeat;</code></li>
  <li>Ha csak vízszintes ismétlődést akarsz: <code>background-repeat:repeat-x;</code></li>
  <li>Ha csak függőleges ismétlődést akarsz: <code>background-repeat:repeat-y;</code></li>
</ul>

<p>Alapesetben a háttérkép (ha nem ismétlődik) az elem bal felső sarkába kerül. Ezt is módosíthatod a <code>background-position</code> szelektorral, így oda teheted a háttérképet, ahová akarod. A legegyszerűbb választható értékek a <code>top</code> (fel), <code>center</code> (középre) és <code>bottom</code> (le) a függőleges, valamint <code>left</code> (balra), <code>center</code> (középre) és <code>right</code> (jobbra) a vízszintes elhelyezésre. Ha például a képet a jobb alsó sarokba akarod helyezni, akkor a <code>background-position:bottom right;</code> formát kell használnod; ha pedig függőlegesen középre, míg vízszintesen jobbra akarod helyezni, akkor a <code>background-position:center right;</code> forma lesz a megfelelő.</p>

<p>Az ismétlődés és a pozícionálás befolyásolásával, valamint egy jó háttérkép használatával olyan lenyűgöző megjelenéseket tudsz készíteni, amelyekre a CSS előtt nem volt lehetőség. Ráadásul a háttérképeket egy külön CSS fájlban definiálhatod, így később nagyon egyszerűen módosíthatod a teljes website megjelenését néhány sor kód átírásával. Erről később is lesz még szó a <ins>30. leírásban</ins>.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Egyelőre ennyi minden, amit tudnod kell, ha képeket szeretnél adni a HTML dokumentumaidhoz. Ennél azért lényegesen több trükk van, amit a képekkel megtehetsz a CSS segítségével, de most még az is elég, ha odafigyelsz az itt leírt módszerek használatára. A következő témákról beszéltünk:</p>

<ul>
  <li>Az <code>img</code> elem és az alapvető attribútumai
<ul>
  <li><code>src</code> a képfájl helyének megadásához</li>
  <li><code>alt</code> ahhoz a szöveghez, amely akkor jelenik meg, ha nem elérhető a kép</li>
  <li><code>title</code> az érdekes (de nem lényeges) kapcsolódó információk megadásához</li>
  <li><code>longdesc</code> egy külső adatfájl hozzákapcsolásához, amely egy alternatív szöveges megjelenítése a képen látható adatoknak, például egy komplex diagram esetén</li>
  <li><code>width</code> és <code>height</code> a kép méreteinek megadásához, hogy a böngésző tudja előre lefoglalni a kép helyét</li>
</ul></li>
  <li>A CSS háttérképek alapjai
<ul>
  <li>Mikor használjuk a háttérképeket (alapvetően akkor, ha a képhez nem kell alternatív szöveget adni, vagy csak a látvány, a „bútorzat” része)</li>
  <li>Hogyan pozícionáljuk és ismételjük a CSS háttérképeket</li>
</ul></li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Miért fontos, hogy jó szöveget adjunk a képhez az <code>alt</code> attribútumban? Valóban szükség van erre?</li>
  <li>Van egy 1280x786 méretű képed, amit egy 40x30 méretű bélyegképként szeretnél megjeleníteni. Megteheted ezt HTML-ben? Miért nem okos dolog ezt tenni?</li>
  <li>Mit csinál a <code>longdesc</code> attribútum, és hogyan jelenítik meg ezt a böngészők?</li>
  <li>Mire jók a <code>valign</code> és az <code>align</code> attribútumok? Miért nem beszéltünk ezekről?</li>
  <li>Hová kerülnek alapesetben a CSS háttérképek az elemen belül, és hogyan ismétlődnek?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/16-html-listak/">Előző leírás — HTML listák</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">Következő leírás — HTML hivatkozások — építsük fel a webet!</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/289-17-kpek-a-htmlben/chrisheilmann.jpg" alt="Chris Heilmann" />
<p class="comment">Fotó: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Miután belekontárkodott a rádiózásba, Chris Heilmann tíz évig dolgozott webfejlesztőként. Jelenleg a Yahoo!-nál dolgozik Angliában mint oktató és vezető fejlesztő, és a kódminőséget ellenőrzi az európai és ázsiai kirendeltségeknél.</p>

<p>Chris a <a href="http://wait-till-i.com/">Wait till I come</a> oldalon blogol, és „codepo8” néven található meg több közösségi oldalon is.</p>
