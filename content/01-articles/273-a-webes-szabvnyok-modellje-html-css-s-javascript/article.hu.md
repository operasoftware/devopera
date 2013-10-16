Title: A webes szabványok modellje — HTML, CSS és JavaScript
----
Date: 2009-08-17 08:46:56
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/" title="hivatkozás a sorozat előző leírására">Előző leírás — Hogyan működik az internet?</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/5-webes-szabvanyok-szep-alom/">Következő leírás — Webes szabványok — szép álom, de mi a valóság?</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Az előző cikkben röviden érintettük a web alapköveit, a HTML-t (vagy XHTML-t), a CSS-t és a JavaScriptet. Most ideje egy kicsit mélyebbre ásni és megnézni, hogy mire jók ezek, mit csinálnak, hogyan tudnak együttműködni, és hogyan építhetünk fel velük egy weblapot. Ebben a leírásban a következő témákról lesz szó:</p>

<ul>
    <li><a href="#miert">Miért kell szétválasztani?</a></li>
    <li><a href="#jeloles">Jelölés, minden weblap alapja</a>
    <ul>
        <li><a href="#xhtml">Mi az az XHTML?</a></li>
        <li><a href="#validacio">Mi az a validáció?</a></li>
    </ul>
    </li>
    <li><a href="#css">CSS — kell egy kis stílus</a></li>
    <li><a href="#javascript">JavaScript — a weblapok működése</a></li>
    <li><a href="#pelda">Egy példa oldal</a>
    <ul>
        <li><a href="#index">index.html</a></li>
        <li><a href="#styles">styles.css</a></li>
    </ul>
    </li>
    <li><a href="#osszefoglalo">Összefoglaló</a></li>
    <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="miert">Miért kell szétválasztani?</h2>

<p>Általában ez az első kérdés, amelyet a webes szabványokkal kapcsolatban kérdezni szoktak. Csak a HTML használatával megadhatod a tartalmat, a stílust és az elrendezést is, a font elemet használhatod a stílusozáshoz, a HTML táblázatokat az elrendezéshez, szóval miért törődnél ezekkel az XHTML meg CSS dolgokkal? A rendezéshez a táblázat meg az ehhez hasonlók pontosan azok a technikák, amelyeket a régi, rossz időkben használtak a webdesignhoz, és sokan még most is ezeket használják (pedig már nagyon nem kellene). Ez az egyik elsődleges oka annak, hogy ezt a sorozatot elkészítettük. Ezekről a módszerekről nem fogunk beszélni ezen a kurzuson. Itt vannak viszont a CSS és HTML használatának az ellenállhatatlan előnyei a régi módszerekkel szemben:</p>

<ol>
    <li><strong>Hatékony kód</strong>: minél nagyobbak a fájlok, annál tovább tart a letöltésük, és annál többe kerül ez egyes embereknek (jópáran most is a forgalom után fizetnek). Biztosan nem akarod elpazarolni a sávszélességet hatalmas lapokra, amelyeknél minden egyes HTML fájlban külön benne van a stílus és az elrendezés is. Sokkal jobb alternatíva, ha a HTML-t lecsupaszítod a minimumra, és a stílust meg az elrendezést csak egyszer adod meg egy (vagy több) különálló CSS fájlban. Ha kíváncsi vagy egy valódi példára, nézd meg az <a href="http://www.alistapart.com/articles/slashdot/">A List Apart Slahsdot rewrite</a> cikket, amelyben a szerző elővett egy népszerű weblapot, és átírta XHTML/CSS formára.</li>

    <li><strong>Könnyű karbantartás</strong>: az előző gondolatmenetet folytatva, ha a stílust és az elrendezést csak egyszer írod meg, akkor ez azt jelenti, hogy elég lesz csak egyetlen helyen változtatni, ha módosítani akarod a teljes website megjelenését. Vagy inkább minden egyes oldalt külön frissítenél? Nem hinném.</li>

    <li><strong>Hozzáférhetőség</strong>: azok a felhasználók, akiknek látási problémáik vannak, általában egy &#x201E;képernyő-felolvasónak&#x201D; nevezett szoftvert használnak ahhoz, hogy a weblapok információihoz hozzáférjenek. A szoftver felolvassa nekik a weblap tartalmát, ők pedig meghallgatják. Ezen kívül a hangfelismerő szoftvereknek, amelyeket a mozgássérült vagy rokkant emberek használhatnak, ugyancsak sokat segíthetnek a jól megszerkesztett, sematikus weblapok. Míg a képernyő-felolvasót használók billentyűparancsokkal navigálhatnak a lap fejlécei között, addig a mozgássérült hangparancsokat ad ki a navigáláshoz. A megjelenésre összerakott weblapokkal szemben az egyszerű, sematikus weblapokon sokkal egyszerűbb navigálni, és az információkat is könnyebben találják meg a felhasználók. Más szavakkal, minél hamarabb találod meg a lényeget (a tartalmat), annál jobb. A képernyő-felolvasók nem találják meg azokat a szövegeket, amelyek képeken vannak, és a JavaScript egyes felhasználási módjai is összezavarhatják. Mindig bizonyosodj meg róla, hogy a fontos tartalom mindenki számára elérhető.</li>

    <li><strong>Eszköz kompatibilitás</strong>: mivel az XHTML oldalad csak egyszerű jelölés, stílus nélkül, így egyszerűen átformázható a különböző tulajdonságokkal rendelkező eszközökön (mint például kisebb képernyő), mert elég hozzá egy alternatív stílust megadni. Ezt több módon is megteheted (ha ez bővebben is érdekel, olvasd el a <a href="http://dev.opera.com/articles/mobile/">mobil eszközökről szóló leírásokat a dev.opera.com-on</a>). A CSS natívan támogatja a különböző stílusok használatát a különböző megjelenítési módszerek/eszközök számára (például képernyőre, nyomtatáshoz vagy mobiltelefonhoz).</li>

    <li><strong>Webes keresők és keresőrobotok</strong>: valószínűleg te is szeretnéd, hogy az oldaladat könnyen meg lehessen találni a Google-lel vagy más keresőkkel. A keresők ún. &#x201E;keresőrobotokat&#x201D; használnak, amelyek átnézik és letapogatják a weblapjaidat. Ha a keresőrobotnak gondja van a hasznos tartalom megtalálásával a weblapodon, vagy félreérti az információkat, mert azokat nem jelölted megfelelően (például a címeket nem jelölted címként), akkor valószínűleg vissza fogsz esni a találati listában.</li>

    <li><strong>Egyszerűen jó módszer</strong>: ez most egy kissé olyan &#x201E;mert én úgy mondom&#x201D; indok, de kérdezz csak meg egy professzionális webfejlesztőt vagy webdesignert, és azt fogja mondani, hogy a tartalom, a stílus és a működés szétválasztása a legjobb módja egy alkalmazás fejlesztésének.</li>
</ol>

<h2 id="jeloles">Jelölés, minden weblap alapja</h2>

<p>A HTML és az XHTML különböző elemekből álló jelölő nyelvek, amelyek tartalmazhatnak attribútumokat is (egyeseket kötelezően, másokat választhatóan). Ezek az elemek jelölik a különböző típusú tartalmakat a dokumentumokban, és megadják, hogy hogyan értelmezzék a webböngészők a különböző tartalomdarabokat (ilyenek például a címsorok, a bekezdések, a táblázatok, a felsorolások, stb.)</p>

<p>Ahogy az elvárható, az elemek egy bizonyos tartalomtípust definiálnak, míg az attribútumok további információkat adnak az elemekhez, például azonosítanak egy bizonyos elemet, vagy megadják, hogy hova mutat egy hivatkozás. Mindig tartsd észben, hogy a jelölés a lehető legegyértelműbb kell maradjon, és olyan pontosan kell leírja a tartalom rendeltetését, amennyire csak lehetséges. Az 1. ábra megmutatja egy tipikus (X)HTML elem felépítését.</p>

<img alt="Egy (X)HTML elem felépítése" src="http://forum-test.oslo.osa/kirby/content/articles/273-4-a-webes-szabvnyok-modellje-html-css-s-javascript/article4_1.png" />
<p class="comment">1. ábra: Egy (X)HTML elem felépítése. <a href="figure1_longdesc.html">Olvasd el az 1. ábra leírását</a></p>

<p>A fentieket észben tartva végül is mi a különbség a HTML és az XHTML között?</p>

<h3 id="xhtml">Mi az az XHTML?</h3>

<p>Az „X” az XHTML-ben azt jelenti, hogy „extensible”, vagyis bővíthető. A kezdők egyik leggyakoribb kérdése éppen erre vonatkozik, hogy „most akkor HTML-t vagy XHTML-t használjak, és mi a bánat a különbség a kettő között?”. Nagyjából ugyanarra a dologra szolgál mind a kettő, a különbség a struktúrában rejlik. Az 1. táblázat megmutatja a legfontosabb különbségeket.</p>

<table>
<tr>
  <th>HTML</th>
  <th>XHTML</th>
</tr>
<tr>
  <td>Az elemek és attribútumok nem érzékenyek a kis- és nagybetűkre, a <code>&lt;h1&gt;</code> ugyanaz, mint a <code>&lt;H1&gt;</code>.</td>
  <td>Az elemek és attribútumok érzékenyek a nagybetűkre, mindent kisbetűvel kell írni.</td>
</tr>
<tr>
  <td>Egyes elemekhez nem szükséges a bezáró tag (például a paragrafusoknál elég a &lt;p&gt;), míg más esetekben (az ún. „üres elemeknél”) nem szabad lezárni a taget (pl. a képeknél, &lt;img&gt;).</td>
  <td><p>Minden elemet mindig le kell zárni (pl. &lt;p&gt;Egy paragrafus&lt;/p&gt;). A tartalom nélküli elemeket a kezdő tag végére írt perjellel is le lehet zárni (pl. a &lt;hr&gt;&lt;/hr&gt; és a &lt;hr/&gt; pontosan ugyanaz).</p>

<p>Ha az XHTML-t <code>text/html</code> formában biztosítod, akkor <a href="http://www.cs.tut.fi/~jkorpela/html/empty.html#html">az összes „üres” elemnél</a> a rövid formát kell használnod, és a lezáró perjel előtt pedig ki kell hagyni egy space-t. Minden más elem esetében a hosszú formát kell használnod (különálló kezdő és befejező tagekkkel), még akkor is, ha nincs benne semmilyen tartalom.</p></td></tr>
<tr>
  <td>Egyes attribútumok értékeit idézőjelek nélkül is meg lehet adni.</td>
  <td>Az attribútumok értékeit mindig idézőjelekbe kell tenni.</td>
</tr>
<tr>
  <td>Az attribútumokat bizonyos esetekben lerövidítheted (pl. <code>&lt;option selected&gt;</code>).</td>
  <td>Mindig meg kell adni a teljes attribútumot (pl. <code>&lt;option selected=&quot;selected&quot;&gt;</code>).</td>
</tr>
<tr>
  <td>A kiszolgálók a HTML-t a <code>text/html</code> médiatípussal küldik a felhasználónak.</td>
  <td>Az XHTML az <code>application/xhtml+xml</code> médiatípust használja, de használhatja még az <code>application/xml</code>, a <code>text/xml</code> vagy a <code>text/html</code> típusokat is. A <code>text/html</code> esetében követni kell a <a href="http://www.w3.org/TR/xhtml1/guidelines.html">HTML kompatibilitási útmutatót</a>, mivel a böngészők HTML-ként fogják értelmezni (és ez alapján próbálják a felmerülő hibákat feloldani).</td>
</tr>
</table>

<p class="comment">1. táblázat: Az XHTML és a HTML közötti különbségek.</p>

<p>Egyelőre azt ajánljuk, hogy ne foglalkozz sokat azzal, hogy HTML-t vagy XHTML-t használj-e. Tartsd magad a kurzusban található példákhoz, és egyszerűen használj HTML doctype-ot (esetleg <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">olvasd el a 14. leírást a doctype-okról</a>), így nem igazán ronthatsz el semmit.</p>

<h3 id="validacio">Mi az a validáció?</h3>

<p>Mivel a HTML és az XHTML már szabványosítva van (és egyébként a CSS is), a W3C (World Wide Web Consortium) készített egy nagyszerű eszközt, egy validátort, amely képes leellenőrizni a weblapjaidat, és megmutatja a lapon talált hibákat vagy problémákat, mint például a hiányzó bezáró tagek vagy hiányzó idézőjelek az attribútumokban. A HTML validátor online elérhető a <a href="http://validator.w3.org/">http://validator.w3.org/</a> címen. A validátor automatikusan felismeri, hogy HTML-t vagy XHTML-t, valamint hogy milyen doctype-ot használsz. Ha a CSS-t is ellenőrizni szeretnéd, akkor ehhez az online validátor a <a href="http://jigsaw.w3.org/css-validator/">http://jigsaw.w3.org/css-validator/</a> címen érhető el.</p>

<p>További információkért a validálásról olvasd el a <ins>24. leírást</ins>. Ha a doctype-okról szeretnél többet megtudni, olvasd el a <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">14. leírást</a>.</p>

<h2 id="css">CSS — kell egy kis stílus</h2>

<p>A CSS (Cascading Style Sheets) lehetőséget ad a weboldalaid formázására és azok elrendezésének kialakítására. Beállíthatod vagy lecserélheted a színeket, a hátteret, a betűk méretét és típusát, és megadhatod a különböző elemek helyét a weblapon. Három módszer van arra, hogy a CSS segítségével készíts egy stílust: újradefiniálsz egy taget, stílust rendelsz egy azonosítóhoz (ID-hez), vagy stílust rendelsz egy osztályhoz. Nézzük meg ezeket sorban:</p>

<ol>
  <li><p><strong>Egy elem újradefiniálása</strong>. Bármilyen (X)HTML elem megjelenését megváltoztathatod, ha készítesz hozzá egy új stílusszabályt. Ha azt szeretnéd, hogy az összes paragrafusod zöld és dupla sorközű legyen, akkor megadhatod az alábbi deklarációt a CSS fájlban:</p>

<pre>p {
  line-height: 2;
  color: green;
}</pre>

<p>Ezután minden tartalom a <code>&lt;p&gt;&lt;/p&gt;</code> tagek között dupla sorközű és zöld színű lesz.</p></li>

  <li><p><strong>Egy azonosító definiálása</strong>. Egy elemhez hozzárendelheted az <code>id</code> attribútumot, hogy egyértelműen azonosítani tudd a weblapon (minden azonosító csak egyszer szerepelhet) — például <code>id=&quot;navigacios_menu&quot;</code>. Így sokkal könnyebben felügyelheted ennek a bizonyos elemnek a megjelenését. Ha egy bizonyos paragrafust a lapon dupla sorközzel és zöld színnel szeretnél kiemelni, akkor először adj neki egy azonosítót (ID-t):</p>

<pre>&lt;p id=&quot;highlight&quot;&gt;Paragrafus tartalma&lt;/p&gt;</pre>

<p>Majd készíts hozzá egy CSS szabályt a következő módon:</p>

<pre>#highlight {
  line-height: 2;
  color: green;
}</pre>

<p>Ez a CSS szabály kizárólag csak arra az egy paragrafusra vonatkozik, amelynek az <code>id</code> attribútumában a <code>highlight</code> érték van (a kettőskereszt a CSS jelölése az azonosítóra).</p></li>

  <li><p><strong>Egy osztály definiálása</strong>. Az osztály éppen olyan, mint az azonosító, kivéve, hogy a  lapon egyszerre több elem is tartozhat ugyanahhoz az osztályhoz. Maradva a dupla sorközös példánál, ha azt szeretnéd, hogy az első két bekezdés a lapon dupla sorközű és zöld színű legyen, akkor először add meg nekik az osztályt:</p>

<pre>&lt;p class=&quot;highlight&quot;&gt;Paragrafus tartalma&lt;/p&gt;
&lt;p class=&quot;highlight&quot;&gt;A második paragrafus tartalma&lt;/p&gt;</pre>

<p>Majd készíts hozzá egy CSS szabályt a következő módon:</p>

<pre>.highlight {
  line-height: 2;
  color: green;
}</pre>

<p>Ebben az esetben a <code>highlight</code> egy osztály, és nem egy azonosító — erre utal a pont a CSS szabályban.</p></li>
</ol>

<p>A következő példában bemutatjuk, hogy hogyan alkalmazza a CSS a stílusokat a HTML dokumentumon; a CSS-sel részletesebben csak később, a <ins>27. leírásban</ins> fogunk foglalkozni.</p>

<h2 id="javascript">JavaScript — a weblapok működése</h2>

<p>Végezetül, a JavaScript egy szkriptnyelv, amelyet arra használhatsz, hogy különböző funkcionalitást adj a weblapodhoz - például leellenőrizhetsz vele egy beírt szöveget (hogy jól adták-e meg vagy nem), adhatsz a weblapodhoz drag/drop funkcionalitást, lecserélheted vele gombnyomásra a lap stílusát, animálhatod a lap elemeit (például a menüket), lekezelheted a gombok eseményeit, de még millió és egy dologra használhatod. A modern JavaScriptek már úgy működnek, hogy megkeresik a célzott HTML elemet, és ezzel csinálnak valamit, hasonlóan a CSS-hez, de a szintaxis és maga a művelet teljesen más ebben az esetben.</p>

<p>A JavaScript sokkal bonyolultabb és terjedelmesebb téma, mint a HTML és a CSS, ezért az egyszerűség megőrzésének érdekében, valamint a félreértések elkerülése végett a következő példában nem fog szerepelni. Valójában a kurzuson is csak jóval később fogsz a JavaScripttel ismét találkozni.</p>

<h2 id="pelda">Egy példa oldal</h2>

<p>Több olyan részlet is van, amelyről most nem volt szó, de mindent részletesen meg fogsz ismerni a kurzus folyamán! Most pedig bemutatunk egy valódi példát, amelyen keresztül betekintést kaphatsz, hogy mivel fogunk foglalkozni a további bejegyzésekben.</p>

<p>A bemutatott példa egy referencia oldal, amelyet egy beszéd végén az elhangzott idézetek forrásának bemutatására használhatsz, amelyben a szélessávú internet használatáról volt szó az Egyesült Államokban. Ha ismerős számodra az akadémiai írásmód, akkor elárulom, hogy ez a példa APA formában készült (ki kellett válasszam valamelyiket). <a href="article4_examples.zip">A forráskódot innen töltheted le.</a></p>

<h3 id="index">index.html</h3>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
  &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;

&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;

  &lt;title&gt;References&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    @import url(&quot;styles.css&quot;);
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div id=&quot;bggraphic&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;header&quot;&gt;
    &lt;h1&gt;References&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div id=&quot;references&quot;&gt;
    &lt;cite class=&quot;article&quot;&gt;Adams, J. R. (2008). The Benefits of Valid Markup: A Post-Modernistic Approach to Developing Web Sites. &lt;em&gt;The Journal of Awesome Web Standards, 15:7,&lt;/em&gt; 57-62.&lt;/cite&gt;
    &lt;cite class=&quot;book&quot;&gt;Baker, S. (2006). &lt;em&gt;Validate Your Pages.... Or Else!.&lt;/em&gt; Detroit, MI: Are you out of your mind publishers.&lt;/cite&gt;
    &lt;cite class=&quot;article&quot;&gt;Lane, J. C. (2007). Dude, HTML 4, that&#39;s like so 2000. &lt;em&gt;The Journal that Publishes Genius, 1:2, &lt;/em&gt; 12-34.&lt;/cite&gt;
    &lt;cite class=&quot;website&quot;&gt;Smith, J. Q. (2005). &lt;em&gt;Web Standards and You.&lt;/em&gt; Retrieved May 3, 2007 from Web standards and you.&lt;/cite&gt;
  &lt;/div&gt;
  &lt;div id=&quot;footer&quot;&gt;
    &lt;p&gt;The content of this page is copyright © 2007 &lt;a href=&quot;mailto:jonathanlane@gmail.com&quot;&gt;J. Lane&lt;/a&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Nem szeretnék most sorról-sorra mindent végigelemezni a forráskódon, mivel ezekről még lesz szó bőven a következő leírásokban, de néhány fontosabb pontot kiemelnék.</p>

<p>Az első sort nevezzük a dokumentum típusdeklarációjának, vagy röviden doctype-nak. Ebben az esetben ez XHTML 1.0 Transitional. A doctype egy szabályhalmazt definiál, amelyet a jelöléseknek követniük kell, és amelyeket így ellenőrizni lehet. A doctype-okról bővebben a <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">14. leírásban</a> olvashatsz.</p>

<p>Az 9-11-es sorok töltik be a CSS fájlt a laphoz, az ebben megadott stílusok lesznek alkalmazva a lap különböző elemein. A CSS fájl tartalmát, amelyben a lap formázását adtuk meg, a következő pontban láthatod.</p>

<p>A referencia különböző elemeihez különböző osztályokat definiáltunk. Ezzel lehetővé válik, hogy minden egyes referenciához más stílust adjuk, ebben az esetben például minden referencia jobb oldalához egy-egy színt rendeltünk, megkönnyítve ezzel a lista áttekintését.</p>

<p>Most pedig lássuk a CSS-t, amely a HTML stílusát adja meg.</p>

<h3 id="styles">styles.css</h3>

<pre>body {
  background: #fff url(&#39;images/gradbg.jpg&#39;) top left repeat-x;
  color: #000;
  margin: 0;
  padding:0;
  border: 0;
  font-family: Verdana, Arial, sans-serif; font-size: 1em;
}

div {
  width: 800px;
  margin: 0 auto;
}

#bggraphic {
  background: url(&#39;images/pen.png&#39;) top left no-repeat;
  height: 278px;
  width: 362px;
  position: absolute;
  left: 50%;
  z-index: -100;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 30px;
  background: url(&#39;images/headbg.png&#39;) top left repeat;
  padding: 10px 0;
}

#references cite {
  margin: 1em 0 0 3em;
  text-indent: -3em;
  display: block;
  font-style: normal;
  padding-right: 3px;
}

.website {
  border-right: 5px solid blue;
}

.book {
  border-right: 5px solid red;
}

.article {
  border-right: 5px solid green;
}

#footer {
  font-size: 0.5em;
  border-top: 1px solid #000;
  margin-top: 20px;
}

#footer a {
  color: #000;
  text-decoration: none;
}

#footer a:hover{
  text-decoration: underline;
}</pre>

<p>Meglehet, hogy a stílusozással átestem a ló túlsó oldalára, például beállítottam több háttérképet is, de meg akartam mutatni, hogy miket lehet csinálni a CSS segítségével.</p>

<p>Az első sor néhány alapértéket állít be a dokumentumon, mint például a szöveg és a háttér színe, a szöveg körüli keret szélessége, stb. Sokan nem foglalkoznak azzal, hogy ezeket az alapértékeket ilyen módon megadják, és a legtöbb modern böngésző amúgy is definiálja a saját alapértékeit. Mégis jó dolog, ha ezeket megadod, mert nagyobb befolyásod lesz a lap megjelenésére a különböző böngészőkben.</p>

<p>A következő részben a lap szélességét állítjuk be 800 pixelesre (bár ezt megadhattam volna százalékban is, így a lap mérete annak függvényében változna, hogy éppen mekkora a böngésző ablaka). A <code>margin</code> értéke biztosítja, hogy a tartalom középre kerül.</p>

<p>A következőben nézzük meg a lap háttérképeit (ezeket a <code>background: url</code> jelölésekkel adtuk meg). Három különböző háttér elemet használtam ezen a lapon. Az első egy gradiens, amely a teljes lapon ismétlődik, egy szép kék átmentet okozva. A második egy félig átlátszó PNG egy tollról, amely kontrasztot képez a fölötte látható szöveggel. (Az ilyen félig átlátszó PNG-k nem működnek az Internet Explorer 6-os és a korábbi verziókban, viszont működnek minden más modern böngészőben; nézd meg <a href="http://code.google.com/p/ie7-js/">Dean Edward IE javító JavaScriptjét</a> egy megoldáshoz IE6-hoz, amely sok más CSS támogatási problémát is javít IE6-ban.) Végül ismét egy félig átlátszó PNG-t használtam a fejléc hátteréhez. Ez nagyobb kontrasztot ad a fejlécnek, és jól is mutat.</p>

<p>A példa megjelenése a 2. ábrán látható.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/273-4-a-webes-szabvnyok-modellje-html-css-s-javascript/article4_2.jpg" alt="A példa kód megjelenítése" />

<p class="comment">2. ábra: A bemutatott példa a stílusokkal együtt.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Semmi földöntúli nincs az XHTML, a CSS és a JavaScript használatában. Ezek egyszerűen a webes evolúció termékei. Ha már volt dolgod a HTML-lel régebben, akkor sem kell semmit „elfelejteni”. Mindaz, amit tudsz, még mindig releváns, csak esetleg néhány dolgot ezután más módon kell megoldanod (és egy kicsit jobban oda kell figyelned a jelölések helyes használatára).</p>

<p>Amellett, hogy a jól végzett munka elégedettségét adják, a webes szabványokkal való fejlesztésnek más haszna is van. A legnagyobb ellenkezés, hogy a szabványos fejlesztés időigényes, és fárasztó a megjelenést minden böngészőben ellenőrizni és igazítani. De ez a másik oldalra is igaz, hogy a nem szabványos megoldásokat kínszenvedés működőképessé tenni más eszközökön és az újabbnál újabb böngészőkön. Biztos vagy benne, hogy az összedobott kódod ugyanúgy fog működni, vagy egyáltalán meg fog jelenni az Opera 12-ben, a Firefox 5-ben, vagy az IE 10-ben? Ebben nem lehetsz biztos, csak akkor, ha betartasz néhány szabályt.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mi a különbség az osztály és az azonosító között?</li>
  <li>Milyen szerepe van az XHTML-nek, a CSS-nek és a JavaScriptnek egy weboldalon?</li>
  <li>Vedd a példában szereplő index.html fájlt, és módosítsd a megjelenését kizárólag CSS segítségével. Ne módosítsd a HTML fájlt.
<ul>
  <li>Adj egy ikont a különböző referencia típusokhoz (különböző ikonokat a cikkekhez, könyvekhez és erőforrásokhoz).</li>
  <li>Tüntesd el a copyright megjegyzést a lap aljáról.</li>
  <li>Változtasd meg a fejléc megjelenését.</li>
</ul>
</li>
  <li>Miket kell módosítanod a CSS-en ahhoz, hogy a példában szereplő oldal jól jelenjen meg a mobilböngészőkben is?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/3-hogyan-mukodik-az-internet/" title="hivatkozás a sorozat előző leírására">Előző leírás — Hogyan működik az internet?</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/5-webes-szabvanyok-szep-alom/">Következő leírás — Webes szabványok — szép álom, de mi a valóság?</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/273-4-a-webes-szabvnyok-modellje-html-css-s-javascript/Jonlane.jpg" alt="Jonathan Lane" />

<p>Jonathan Lane az <a href="http://industryinteractive.net/">Industry Interactive</a> vezetője, amely webfejlesztéssel, valamint webalkalmazások fejlesztésével foglalkozó cég Kanadában. A webfejlesztéssel a Lethbridge Curriculum Re-Development Center Egyetemen kezdett foglalkozni sok évvel ezelőtt mint webes projekt koordinátor.</p>

<p>A <a href="http://www.flyingtroll.com/">Flyingtroll</a> oldalon blogol, és jelenleg a <a href="http://www.mailmanagr.com/">Mailmanagr</a>-t fejleszti, ami egy email interfész a Basecamp projekt management alkalmazáshoz.</p>
